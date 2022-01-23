+++
author = "Brian Stadnicki"
title = "Cracking Marquire's CrackMe_V4_Marquire"
date = "2021-11-07"
categories = [ "crackmes" ]
tags = [ "reverse engineering", "keygen", "crackmes.one", "x86", "python" ]
+++

This crackme will be a bit more difficult than the last one: [Marquire's CrackMe_V4_Marquire](https://crackmes.one/crackme/6152314933c5d458fcb36665)

Property     | Value
-------------|------------
Language     | C/C++
Platform     | Windows
Difficulty   | 2.7
Quality      | 4.0
Arch         | x86

## Initial run
```
### The goal of this crackme is to find the key! ##

Enter the key :
```

Asks for a key, exits if it's false, and gives a message if it's correct.

## Initial analysis
```
            +-----+
            |Print|
            +--+--+
               |
          +----v------+
          | Read char <-----+
          |Check enter|     |
          +----+--+---+     |
              T|  |F        |
+---------+    |  |   +-----+------+
|Dead code<----+  +--->Encrypt char|
+----+----+           |Store char  |
     |                +------------+
     |
+----v---+  +-----+   +------------+
|Generate|  |Hash |   |input hash  |
|correct +-->input+--->    ==      |
|hash    |  |key  |   |correct hash|
+--------+  +-----+   +----+-+-----+
                          T| |F
              +-------+    | |     +-------+
              |Success<----+ +----->Failure|
              +-------+            +-------+
```
This is a very high level overview of what this program does, it's simple enough to see all the logic in the main function.

## Input string encryption

```asm
.text:00402160 asterisk_and_continue:
.text:00402160 lea     edx, [esi+3]    ; encryption key
.text:00402163 xor     dl, ds:400000h  ; 4Dh
.text:00402169 add     esi, 1          ; inc counter
.text:0040216C xor     eax, edx        ; char ^ 4Dh
.text:0040216E mov     [esp+esi+0A1h], al ; store encrypted char
.text:00402175 mov     dword ptr [esp], 2Ah ; '*'
.text:0040217C call    putchar
```

As you can see, the character inputted is xor encrypted before it's stored.

Here's the python code for this encryption:
```python
def encrypt(input):
  encrypted = ""
  counter = 3
  for c in input:
    encrypted += chr(ord(c) ^ counter ^ 0x4d)
    counter += 1
  return encrypted
```

## Input string hashing

```asm
.text:004023E3 hash_input:
.text:004023E3 movsx   esi, byte ptr [eax] ; get current char
.text:004023E6 add     eax, 1 ; inc char counter
.text:004023E9 imul    esi, edx ; mul char by edx
.text:004023EC add     edx, 0FFFFh ; inc edx by 0FFFFh
.text:004023F2 add     edi, esi ; add multiplied char to result
.text:004023F4 cmp     edx, 0CFFF3h ; only loop 13 times
.text:004023FA jnz     short hash_input
.text:004023FC cmp     ecx, edi ; compare result with correct hash
.text:004023FE mov     [esp], ebx
.text:00402401 jz      short success_caller
.text:00402403 call    failure
```

There are multiple things we can infer from this to aid the python code for this:
 - `eax` points to the current char in the encrypted string
 - the encrypted string's characters are looped over one by one
 - `edi` is the hash result, as it's used in the validation comparison and `ecx` isn't mentioned in this snippet
 - the hash result is added to with the char multiplied by the multiplication counter
 - the multiplication counter is incremented by `0FFFFh` each cycle
 - The hash only reads the first 13 characters, as `0CFFF3h / 0FFFFh == D`, therefore the input string must have at least 13 characters.

Here's the python code for this hash:
```python
def hash(input):
  counter = 0
  result = 0
  for i in range(0, 13):
    result += ord(input[i]) * counter
    counter += 0xFFFF
  return result
```

## Result comparison

```asm
.text:004023FC cmp     ecx, edi ; compare result with correct hash
.text:004023FE mov     [esp], ebx
.text:00402401 jz      short success_caller
.text:00402403 call    failure
```

This is quite simple, the input was correct if the hash is equal to the correct hash.

```python
def validate(input_hash, correct_hash):
  return input_hash == correct_hash
```

## Correct hash
The correct hash, as far as I can tell, does not depend on any external factors, so it will never change. Therefore, checking `ecx` at `.text:004023FC cmp     ecx, edi` shows us that the correct hash is `0x931F6CE`.

## Brute force code
Now that we have all the parts to this, we can create a brute-force solution. You can download it [here](/posts/crackmes-marquier-crackme-v4-marquire/keygen.py)

```python
import random
import string

def encrypt(input):
  encrypted = ""
  counter = 3
  for c in input:
    encrypted += chr(ord(c) ^ counter ^ 0x4d)
    counter += 1
  return encrypted

def hash(input):
  counter = 0
  result = 0
  for i in range(0, 13):
    result += ord(input[i]) * counter
    counter += 0xFFFF
  return result

def validate(input_hash, correct_hash):
  return input_hash == correct_hash

possible_chars = string.ascii_letters + string.digits + string.punctuation

while True:
  key = ''.join(random.choice(possible_chars) for i in range(13))
  valid = validate(hash(encrypt(key)), 0x931F6CE)
  if valid:
    print(key)
```

## Success
```
### The goal of this crackme is to find the key! ##

Enter the key : *************
->right!
```

Example valid keys:
 - `HJJe)lo\P_vFH`
 - `(XNl(WiAVtIBy`
 - `1ARaaf@DeVSjt`
 - `X3fXDZEdiBR]y`

According to the author, the original key was `A_BIT_HARDER?`, however where there are hashes, there are hash collisions.
