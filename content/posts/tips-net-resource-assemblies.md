+++
author = "Brian Stadnicki"
title = "Modifying .NET embedded resources"
date = "2021-11-14"
categories = [ "tips" ]
tags = [ "reverse engineering", ".NET", "resources" ]
+++

When modifying a .NET program, you may notice that not all of the classes are actually there, but there might be some reference to `Assembly.GetExecutingAssembly().GetManifestResourceStream(name)` somewhere.

# Source

It's likely that there are executables in the program's resources. Using CFF Explorer's Resource Editor, we can verify this.

```
+ Icons
+ Icon Groups
+ Version Info
+ Configuration Files
- .NET Resources
 |- License.Validator
 |- Virtual.Machine.Checker
```

# Expected

In my mind, the steps therefore needed, as the programs I actually want to modify are embedded, are the following:

```
+----------------+
|Extract assembly|
+-------+--------+
        |
+-------v-------+
|Modify assembly|
+-------+-------+
        |
+-------v-------+
|Insert assembly|
+---------------+
```

# Extract

Extracting the embedded executables statically is easy, simply right click on the resource in CFF Explorer and select `Save Resource`, saving it and giving it the correct extension afterwards.

However, this method will not yield us the name for the later insert step.

Therefore, we need the assemblies to be dumped at runtime, as that is the name which is important. Start the target program and use [ExtremeDumper](https://github.com/wwh1004/ExtremeDumper) for this. Simply run it, right click on the target and select `Dump Selected Process`. This will yield all the assemblies with correct names.

# Modify

Use the tool of your choice for modifying the target .NET assemblies, personally I use dnSpy.

# Insert

CFF Explorer doesn't allow simply adding/swapping/removing a resource. You can patch manually, but life is too short for that. There doesn't appear to be any good tools for modifying resources either (maybe a future project), so what can be done?

An interesting behaviour with .NET resources is that when the virtual machine tries to fetch a resource, first it checks the program's directory, then its own embedded resources.

Therefore, say that previously `vmcheck.dll` was dumped, modified to never detect a virtual machine, then simply copy that dll to the program's running directory and it will be used instead of the embedded resource.

# Conclusion

I spotted this by accident because I was using dnSpy on a dll in an assemblies dump folder, modified it and to my surprise, the change was actually reflected in the program's execution. My previous attempt was to debug it with dnSpy to load the assemblies, modify them then try to run it again, which was unsuccessful.

TLDR; Dump assemblies using ExtremeDumper, modify with dnSpy, copy to program's running directory.
