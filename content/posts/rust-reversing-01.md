+++
author = "Brian Stadnicki"
title = "Rust Reversing 1: Hello, world!"
date = "2021-10-03"
+++

There's plenty of decompilers for most compiled languages, but what about rust? I couldn't find one, so let's try to understand what the resulting code looks like, in the hopes of creating a decompiler. Might help out somebody going against an odd malware author who's decided that rust makes sense (it doesn't).

Fair warning, this is my first dive into assembly reverse engineering since I did basic crackmes a few years ago, so be prepared for vagueness while I'm trying to learn.

# First beginnings
### Hello World!
Let's begin with the standard hello world.

```rust
fn main() {
    println!("Hello, world!");
}
```

First of all, rust makes clear that most of the functions are std, alloc and core functions, making our job a bit easier.

The program starts at _start, just sets up a little and then calls the main function.

![_start disassembly](/posts/rust-reversing-01/_start.png)

Here rust again sets up more of the stack, calls the actual main function, and then calls `std::rt::lang_start_internal`, which seems to provide panic stack unwinding.

![main disassembly](/posts/rust-reversing-01/main.png)

Finally, we get to `"Hello, world!\n"`. Load the string, load some arguments and then call `std::io::print`.

![hello world main disassembly](/posts/rust-reversing-01/hello_world::main.png)

Little side note, the Hex-Rays decompiler completely misses the `"Hello, world!\n"`. Rust is an obfuscator I guess.

```C
void hello_world::main::h223615043659651d()
{
  std::io::stdio::_print::hf2e9dc80124c4394();
}
```
