+++
author = "Brian Stadnicki"
title = "Marquire's CrackMe_V3_Marquire"
date = "2021-10-24"
categories = [ "crackmes" ]
tags = [ "reverse engineering", "keygen", "crackmes.one" ]
+++

Let's start off the crackmes series with a basic one: [Marquire's CrackMe_V3_Marquire
](https://crackmes.one/crackme/614ef84133c5d458fcb365ff).

 - Language: C/C++
 - Platform: Windows
 - Difficulty: 1.3
 - Quality: 4.3
 - Arch: x86

## Initial run
![Asks for the key](/posts/crackmes-margquier-crackme-v3-marquire/initial-run.png)

It's very standard, it just asks for the key and tells us if it's right or wrong.

## Initial analysis
![Simple program structure](/posts/crackmes-margquier-crackme-v3-marquire/graph-overview.png)

It's quite clear what's going on. Ask for the input, do some simple logic, say if right or wrong and exit.

![Validation logic](/posts/crackmes-margquier-crackme-v3-marquire/validation-logic.png)

The validation logic just compares each letter of our input (`[esp+113h]`, `[esp+114h]` ...) to randomly placed out offsets (`[esp+39h]`, `[esp_2Ch]` ...), checking to see if they're equal.

## Dynamic analysis
Since I don't know where `esp` is statically, this'll require some basic dynamic analysis.

The IDA Pro debugger makes this very easy, simply hover over the address and it'll preview the values there.

![IDA Pro debugger's address preview](/posts/crackmes-margquier-crackme-v3-marquire/address-preview.png)

Address `[esp+32h]` contains `S`, which is compared to the first letter of our input, which is at `[esp+112h]`.

Using this, we can follow through the validation logic and obtain the correct key.

## Solving
Here's the debugging results:
 - 1 - `[esp+112h]` == `[esp+32h]` / `S`
 - 2 - `[esp+113h]` == `[esp+39h]` / `T`
 - 3 - `[esp+114h]` == `[esp+2Ch]` / `I`
 - 4 - `[esp+115h]` == `[esp+31h]` / `L`
 - 5 - `[esp+116h]` == `[esp+115h]` == `[esp+31h]` / `L`
 - 6 - `[esp+117h]` == `[esp+3Eh]` / `_`
 - 7 - `[esp+118h]` == `[esp+28h]` / `E`
 - 8 - `[esp+119h]` == `[esp+24h]` / `A`
 - 9 - `[esp+11Ah]` == `[esp+112h]` / `S`
 - 10 - `[esp+11Bh]` == `[esp+3Ch]` / `Y`
 - 11 - `[esp+11Ch]` == `[esp+1Eh]` / `?`

I'll turn that into some easier to read pseudo-code.

```
input[0] == 'S' &&
input[1] == 'T' &&
input[2] == 'I' &&
input[3] == 'L' &&
input[4] == input[3] && // 'L'
input[5] == '_' &&
input[6] == 'E' &&
input[7] == 'A' &&
input[8] == input[0] && // 'S'
input[9] == 'Y' &&
input[10] == '?'
```

## Success

![Success](/posts/crackmes-margquier-crackme-v3-marquire/success.png)

There you have it, using a combination of static and dynamic analysis we cracked it. It was a very simple crackme, next time will be more difficult.
