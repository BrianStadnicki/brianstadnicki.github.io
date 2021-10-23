+++
author = "Brian Stadnicki"
title = "Fiverr: extend Iveco activator to 2030"
date = "2021-10-22"
categories = [ "fiver" ]
tags = [ "reverse engineering", "unpacking", "java" ]
+++

A customer on Fiverr sent me a copy of the [Iveco easy activator v1.01](https://www.obdexpress.co.uk/wholesale/iveco-easy-activator-keygen-75453.html). This looks to be a key generator to program Iveco trucks. The customer has requested that I add the years up to 2030 to it, as the tool only works from 2017 to 2020. Nice to see future proofing, even if I really doubt the key algorithm won't change in that time.

## Running it
First of all, let's run it and see what we're working with.

![Opening the program](/posts/fiverr-extend-iveco-activator-to-2030/first-look.png)

Looks like a straight forward keygen, so let's get into its internals.

## First look at internals
Seeing how it's an exe, naturally I open it in IDA first.

![Many Java strings](/posts/fiverr-extend-iveco-activator-to-2030/java-strings.png)

There's a lot of Java related strings, so it's worth to check if this is really just a bunch of Java classes wrapped in an exe.

![Many classes](/posts/fiverr-extend-iveco-activator-to-2030/many-classes.png)

Extracting it reveals that it indeed is, it contains the Java classes that are then loaded and ran.

## Java reverse engineering
I'll use the trusty JD-GUI decompiler to check out what's going on.

![Manifest](/posts/fiverr-extend-iveco-activator-to-2030/manifest.png)

The main class is `util.JDialog1`, based off the naming it also contains the GUI logic.

![Decompile error](/posts/fiverr-extend-iveco-activator-to-2030/decompile-internal-error.png)

JD-GUI isn't the most reliable decompiler, so I'll switch to Recaf.

![Dates spotted](/posts/fiverr-extend-iveco-activator-to-2030/JDialog1-decompile.png)

That was easy to spot, Recaf has the very useful feature of recompiling classes, so this will be an easy one to fix.

Now I open the exe in 7zip (windows/winrar will corrupt it) and simply replace the class with my version. Quick and easy.

## Success
![It works](/posts/fiverr-extend-iveco-activator-to-2030/completed.png)

Now the "Year" dropdown has the dates 2017-2030 and the activation code changes, so hopefully this will work.

## Conclusion
Overall this was a very simple gig. It was just a wrapped Java program, and the Java wasn't even obfuscated.
