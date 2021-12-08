+++
author = "Brian Stadnicki"
title = ".NET dmp forensics challenge"
date = "2021-12-08"
categories = [ "ctf" ]
tags = [ "reverse engineering", "forensics", "wireshark", "windbg", "metactf", ".NET" ]
+++

This is a challenge from MetaCTF CyberGames 2021. It included .NET dump memory forensics, which doesn't look to be very common knowledge on how to do, so hopefully this writeup can help with that.

# Step into the NET

For the grand finale, it's time to put all of your analysis skills together. You're going to face a little bit of Crypto & Reverse Engineering and a whole lot of Forensics.

We've taken the liberty of collecting a [packet capture](https://metaproblems.com/5450f756cf49545a1061e7d28ee45d1a/step_into_the_net.pcapng) and [a process dump](https://metaproblems.com/5450f756cf49545a1061e7d28ee45d1a/step_into_the_net.7z) of the beacon in question for you.

In order give our management the clarity they need, we want to know *exactly* what actions the attackers took on this high value machine (note - this is a different memory dump/pcap from any previous problem). In order to do this, you're going to want to match the information in the pcap and extract critical data you need from the memory dump to put together a picture of what happened.

# Solving

## Packet analysis

First of all, let's look at the packet capture to see what we're dealing with, using wireshark.

![all packets](/posts/ctf-metactf-cybergames-2021-step-into-net/packets/all-packets.png)

Immediately I see two packets of interest:

![packets of interest](/posts/ctf-metactf-cybergames-2021-step-into-net/packets/inital-interesting-packets.png)

`GET /en-us/docs.html` is of interest because immediately after we see a huge amount of data (in purple) being sent over. I ignore `GET /latest/meta-data/instance-action` because that's something about an aws ec2 server that was accidentally left in.

![packet to ignore](/posts/ctf-metactf-cybergames-2021-step-into-net/packets/aws-ec2-metadata-request.png)

To see how the packets of interest are involved in the entire converstation, use the `follow http stream`.

![use follow http stream feature](/posts/ctf-metactf-cybergames-2021-step-into-net/packets/follow-http-stream.png)

![interesting http stream](/posts/ctf-metactf-cybergames-2021-step-into-net/packets/interesting-http-stream.png)

Immediately one detail stands out: the entire conversation is 630kB. It's likely that a program is sent over here. I tried to see if there was any useful data in the huge blocks of text, but it's probably encrypted.

There's not too much useful information here, it's just the packet capture of something encrypted being downloaded.

## Dump analysis

This is a windows dump file, so we'll use `WinDbg` to analyse it.

![Open the dump in windbg](/posts/ctf-metactf-cybergames-2021-step-into-net/dump/windbg-open-crash-dump.png)

To analyse the .NET program, first install [netext](https://github.com/rodneyviana/netext).

```
0:000> .load netext
```

### Dumping code

First of all, we need to check out the running code. To do this, we need to dump it first.

```
0:000> !wmodule -managed -saveto C:\Users\IEUser\Downloads\net\dump
Saved 'C:\Users\IEUser\Downloads\net\dump\Grunt.exe' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.Windows.Forms.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.Drawing.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.Xml.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.Configuration.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.Core.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\System.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\mscorlib.ni.dll' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\ta2521lw.nbq, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\if3vizgz.gue, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\EILxxsbDHTbdXhkqQNppeCxDtWdOB, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\q2foozwn.pi1, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' successfully
Saved 'C:\Users\IEUser\Downloads\net\dump\OUZWwjnRdRpuqIqXtbtAdEDpAmRDA, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null' successfully
```

As ever with anything .NET, load the files that aren't system files into dnSpy.

#### EILxxsbDHTbdXhkqQNppeCxDtWdOB.dll

This is just an empty dll.

#### kxwieowc.bru.exe

The executable has an entrypoint at `GruntStager.GruntStager.Main`. Googling this reveals that this is likely a [Convenant](https://github.com/cobbr/Covenant) Grunt, the implant that is deployed to targets.

It appears to do a lot of work to download an assembly and load it using `Assembly.Load(aes2.CreateDecryptor()...`.

#### if3vizgz.gue.dll

This holds the [SharpSploit](https://github.com/cobbr/SharpSploit) library, specifically for [executing PowerShell code](https://github.com/cobbr/SharpSploit/blob/master/SharpSploit/Execution/Shell.cs).

#### OUZWwjnRdRpuqIqXtbtAdEDpAmRDA.dll

This is just an empty dll.

#### q2foozwn.pi1.dll

First of all, this dll has an interesting attribute:

```
[module: ConfusedBy("Confuser.Core 1.1.0-alpha1.52+gfe12a44191")]
```

It appears that this executable has been protected by [ConfuserEx](https://github.com/yck1509/ConfuserEx), which is not in development anymore. Because it is a protector, it can be defeated by a memory dump.

```C#
public static class Task
{
	// Token: 0x06000035 RID: 53 RVA: 0x000033CC File Offset: 0x000015CC
	public static string Execute()
	{
		string result;
		try
		{
			int left = SystemInformation.VirtualScreen.Left;
			int top = SystemInformation.VirtualScreen.Top;
			int width = SystemInformation.VirtualScreen.Width;
			int height = SystemInformation.VirtualScreen.Height;
			using (Bitmap bitmap = new Bitmap(width, height))
			{
				using (Graphics graphics = Graphics.FromImage(bitmap))
				{
					graphics.CopyFromScreen(left, top, 0, 0, bitmap.Size);
				}
				MemoryStream memoryStream = new MemoryStream();
				bitmap.Save(memoryStream, ImageFormat.Png);
				result = Convert.ToBase64String(memoryStream.ToArray());
```

No surprise that this part was protected, it's probably a task for the Grunt to take a screenshot and return it. We'll see if this image can be found in the dmp.

#### ta2521lw.nbq.dll

This is the main `GruntExecutor`, it appears to just talk with other grunts and not do anything interesting.

### Memory analysis

#### part 1/2

We know the flag format is in the format `*_*_*` at least, so why not see if that's in memory already.

First of all, run

```
0:000> !windex
```

so that netext can indexe ael the objecets in memory, ready for our querying. Now we can run the query for a possible flag.

```
0:000> !wfrom -type System.String where ( $wildcardmatch($string(), "*_*_*") ) select $addr(), $string()
...
calculated: cmd.exe /c echo "part 1/2: when_you_see_sharp_"
```

There was a lot of false positives, but I think that's part 1 of the flag.

#### part 2/2

Earlier we saw the task to take a screenshot, which I bet has the flag. Question is, how to get get the image?

The image is in a `System.Drawing.Bitmap`, so let's see if we can find it in memory.

```
0:000> !windex -type System.Drawing.Bitmap
Index is up to date
 If you believe it is not, use !windex -flush to force reindex
Address          MT                  Size Heap Gen Type Name
0000000002620fd8 00007ffd6140bed8       48   0   0 System.Drawing.Bitmap

1 Objects listed
```

Seeing how there's only one Bitmap in memory, that's probably the screenshot.

```
0:000> !wdo 0000000002620fd8
Address: 0000000002620fd8
Method Table/Token: 00007ffd6140bed8/200000e04 
Class Name: System.Drawing.Bitmap
Size : 48
EEClass: 00007ffd61412fd0
Instance Fields: 4
Static Fields: 1
Total Fields: 5
Heap/Generation: 0/0
Module: 00007ffd61400000
Assembly: 0000000000a0d3a0
Domain: 0000000000947110
Assembly Name: C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Drawing\v4.0_4.0.0.0__b03f5f7f11d50a3a\System.Drawing.dll
Inherits: System.Drawing.Image System.MarshalByRefObject System.Object (00007FFD6140B798 00007FFD6AC3AB68 00007FFD6AC35DD8)
00007ffd6ac35dd8                                    System.Object +0000                               __identity 0000000000000000
00007ffd6ac3aaa0                                    System.Byte[] +0008                                  rawData 0000000000000000
00007ffd6ac35dd8                                    System.Object +0010                                 userData 0000000000000000
00007ffd6acb31f8                                    System.IntPtr +0018                              nativeImage 0 (0n0)
00007ffd6140ac20 Static                      System.Drawing.Color +0050                  defaultTransparentColor -mt 00007FFD6140AC20 000000001243B188
```

However, when the bitmap object is dumped, there doesn't appear to be any way to get the actual raw data.

We'll try using the classic tool, `binwalk`, to find the image in the memory.

```bash
$ binwalk --dd='.*' step_into_the_net.dmp
```

There's several images, but after going through a few I found `83AABA`, which contains the 2nd part of the flag.

![image contains the 2nd part of the flag](/posts/ctf-metactf-cybergames-2021-step-into-net/dump/83AABA.png)

## Solution

Putting those two strings together, the solution is
```
when_you_see_sharp_those_hackers_dont_stand_a_chance
```

# Conclusion

This was quite an interesting forensics challenge, I'd never analysed a windows dump before and got to use a few new tools. Thanks a lot to MetaCTF for creating this challenge!
