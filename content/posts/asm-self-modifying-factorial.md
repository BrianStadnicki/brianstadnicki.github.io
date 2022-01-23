+++
author = "Brian Stadnicki"
title = "Writing a self-modifying x86 factorial program"
date = "2021-12-15"
categories = [ "asm" ]
tags = [ "x86", "self-modifying" ]
+++

Self-modifying programs seem to be viewed as something magical, but they're quite simple.

To demonstrate this, I'll be writing a self-modifying factorial program in x86, specifically in nasm.

## Basic factorial

To write a self-modifying factorial program, we first need a normal factorial program.

```asm
factorial:
    push ebp
    mov ebx, eax
factorial_start:
    sub ebx, 1
    cmp ebx, 0
    je factorial_end
    mul ebx
    jmp factorial_start
factorial_end:
    pop ebp
    ret
```

This is quite simple, if it needs explanation then this isn't for you.

## Self-modifying factorial

In the factorial algorithm, there are 2 places where it makes somewhat sense to be modifying in values during runtime: the initial starting value, and the value multiplied by.

### Technical issues

First of all, self-modifying programs are a bit special. By default, `nasm` will assemble the program into something which can't self-modify, because the `.text` section is marked as not writable for security reasons. `objcopy` and a custom program need to be used to change the flags on the `.text` section to allow for it to be written to during runtime.

You can see my script for building these programs [here](https://github.com/BrianStadnicki/self-modifying-assembly-examples/blob/master/bin/execute.sh).

### Starting value

In the original code, the starting number is passed in through the `eax` register.

To use self-modifying code for this, first there needs to be an empty `mov` into `eax` at the start of the function.

```asm
_start:
    mov dword [factorial+2], 0x5
    call factorial

factorial:
    push ebp
    mov eax, 0
```

As you can see, to pass in the starting value, the program modifies the `mov eax, 0` instruction. The instruction's `0` value is 2 bytes offsetted from the start of the `factorial` method.

### Multiplier

```asm
factorial_start:
    ; multiply
    mov ebx, 0
    mul ebx
```

Here is the stub used for the multiplication. Next is needed the logic for setting up the `mov ebx, 0`, decrementing it, and exiting the loop.

#### Multiplier init

To setup the multiplier, take `ebx`, which stores the first value of the multiplier, and copy it into `mov eax, 0` at the start of the `factorial_start` method.

```asm
factorial:
    ...
    mov dword [factorial_start+1], ebx ; init decrementer
```

#### Multiplier decrement

In a standard program, the logic is as follows:
 - Decrement the multiplier
 - Exit if it's at 0
 - Jump back

The only part of this which changes in this self-modfying program is decrementing the multiplier.

To decrement the multipler, it needs to fetch what it is currently, decrement it, and copy it back in.

```asm
factorial_start:
    ...
    ; decrement
    mov ebx, dword [factorial_start+1]
    sub ebx, 1
    mov dword [factorial_start+1], ebx
```

### Result

Putting it all together, here's what it ends up as:

```asm
extern printf

section .data
    format:    db "num: %d",10,0

section .text
	global _start

_start:
    mov dword [factorial+2], 0x5 ; start number
    
    call factorial
    ; print result
    push eax
    push format
    call printf
    ; exit
    mov eax, 1
	mov ebx, 0
    int 80h

factorial:
    push ebp
    mov eax, 0

    mov ebx, eax
    sub ebx, 1
    mov dword [factorial_start+1], ebx ; init decrementer
    mov ebx, 0

factorial_start:
    ; multiply
    mov ebx, 0
    mul ebx

    ; decrement
    mov ebx, dword [factorial_start+1]
    sub ebx, 1
    mov dword [factorial_start+1], ebx
    ; exit if at 0
    ; could exit at 1, but then it doesn't handle 0x2
    cmp ebx, 0
    je factorial_end
    ; loop back
    jmp factorial_start

factorial_end:
    pop ebp
    ret
```

## Conclusion

Self-modifying programs are interesting. Their code looks a bit different, a bit messy and with empty values, but they're definitely interesting to think through the logic for.

There's several applications for these types of programs, mainly around obfuscation, such as license protection and malware. I'm thinking of writing an interesting packer to utilize this, or at least a fun crackme.

If you wish to see more examples of self modifying x86 programs, you can view them on [my git repo](https://github.com/BrianStadnicki/self-modifying-assembly-examples).
