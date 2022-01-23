+++
author = "Brian Stadnicki"
title = "Cracking rendariaka's packedcrackmev1.0"
date = "2021-11-11"
categories = [ "crackmes" ]
tags = [ "reverse engineering", "crackmes.one", "x86", "unpacking" ]
+++

This crackme is packed unlike the previous ones. We'll be unpacking it manually as an exercise. The crackme is [rendariaka's packedcrackmev1.0](https://crackmes.one/crackme/5ab77f6633c5d40ad448cbee)

Property     | Value
-------------|------------
Language     | C/C++
Platform     | Windows
Difficulty   | 2.0
Quality      | 4.0
Arch         | x86

## First run

```
Enter serial number:

```

Entering the incorrect serial causes it to exit.

## Initial static analysis
As by the name suggests, this crackme is packed.

```
+-----------------------------------------------------------------+
|+-------------------------------------------------------------+-+|
||                         Data                                | ||
|+-------------------------------------------------------------+^+|
+---------------------------------------------------------------+-+
                                                                |
                                                                |
                                             Tiny bit of code---+
```

This is proved again by IDA Pro.

According to Detect It Easy, the build information is:

Property   | Value
-----------|-----------------------------------------------------
protector  | Exe Shield(1.3RC)[-]
protector  | Yoda's Crypter(1.3)[-]
compiler   | MinGW(-)[-]
linker     | GNU linker Id (GNU Binutils)(2.56*)[Console32, console]

I've identified that the protector is `Yoda's Crypter 1.3`, as the Nauz File Detector gave only that and it's unlikely this was packed twice.

property                    | value                       | value                       | value                       | value                       | value                       | value                       
----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-------------------------------
name                        | .text                       | .data                       | .rdata                      |.bss                         | .idata                      | yC
entropy                     | 7.993                       | 7.898                       | 4.400                       | n/a                         | 4.791                       | 7.883
file-ratio (99.54%)         | 93.68 %                     | 0.23 %                      | 3.25 %                      | n/a                         | 0.93 %                      | 1.45 %
raw-address                 | 0x00000400                  | 0x00032C00                  | 0x00032E00                  | 0x00000000                  | 0x00034A00                  | 0x00035200
raw-size (219774 bytes)     | 0x00032800 (206848 bytes)   | 0x00000200 (512 bytes)      | 0x00001C00 (7168 bytes)     | 0x00000000 (0 bytes)        | 0x00000800 (2048 bytes)     | 0x00000C7E (3198 bytes)
virtual-address             | 0x00401000                  | 0x00434000                  | 0x00435000                  | 0x00437000                  | 0x0043C000                  | 0x0043D000
virtual-size (242956 bytes) | 0x000326E0 (206560 bytes)   | 0x00000140 (320 bytes)      | 0x00001A70 (6768 bytes)     | 0x00004AA0 (19104 bytes)    | 0x000007DC (2012 bytes)     | 0x00002000 (8192 bytes)
entry-point                 | -                           | -                           | -                           | -                           | -                           | 0x0003D060
characteristics             | 0xE0000060                  | 0xC0000040                  | 0xC0000040                  | 0xC0000080                  | 0xC0000040                  | 0xE00000E0
writable                    | x                           | x                            | x                            | x                            | x                        | x
executable                  | x                           | -                            | -                            | -                            | -                        | x
shareable                   | -                           | -                            | -                            | -                            | -                        | -
discardable                 | -                           | -                            | -                            | -                            | -                        | -
initialized-data            | x                           | x                            | x                            | -                            | x                        | x
uninitialized-data          | -                           | -                            | -                            | x                            | -                        | x
unreadable                  | -                           | -                            | -                            | -                            | -                        | -
self-modifying              | x                           | -                            | -                            | -                            | -                        | x
virtualized                 | -                           | -                            | -                            | x                            | -                        | -
file                        | n/a                         | n/a                          | n/a                          | n/a                          | n/a                           | n/a

The sections `.text` and `.yC` look to be most of interest as they are marked as self-modifying.

## Dumping

To figure out where the unpacked exe is, we can use [tiny tracer](https://github.com/hasherezade/tiny_tracer), which nicely logs all the api calls of interest. I'll make a mental note to make a x32dbg version of this if I get the chance.

```
3d060;section: [yC]
...
1013;section: [.text]
...
```

We can see here that execution moves over to the `.text` section, which confirms what we knew earlier as this section takes up most of the binary, yet is full of seemingly random data.

When I dump this section when the serial is asked for, it doesn't contain the `MZ` header, but IDA Pro does recognise some of the code. Therefore, this is effectively a partial unpacker, as the binary itself is overwritten in memory instead of creating a new one.

To dump the whole binary, the following sections need to be dumped:

Address  | Size     | Info
---------|----------|------------------------------
00400000 | 00001000 | packedv1.0.exe
00401000 | 00033000 | ".text"
00434000 | 00001000 | ".data"
00435000 | 00002000 | ".rdata"
00437000 | 00005000 | ".bss"
0043C000 | 00001000 | ".idata"
0043D000 | 00002000 | "yC"

We'll simply use Scylla to dump the process.

## Analysing dump

Using the string "Enter serial number: \n", finding the responsible function is quite easy.

```
           +-----+
           |Print|
           +--+--+
              |
        +-----v----+
        |Read input|
        |transform |
        +-----+----+
              |
        +-----v----+
        |Compare to|
        | 72436h   |
        +---+--+---+
            |  |
+-------+   |  |   +-------+
|Failure|<--+  +-->|Success|
+-------+          +-------+
```

On a wild guess, let's try just entering 0x72436 and see what happens.

## Success

```
Enter serial number:
468022
Serial number is correct!
```

This was an interesting crackme, even if simple apart from figuring out how to correctly dump it.
