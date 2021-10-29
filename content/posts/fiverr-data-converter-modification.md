+++
author = "Brian Stadnicki"
title = "Failed to modify a data converter"
date = "2021-10-26"
categories = [ "fiverr" ]
tags = [ "reverse engineering", ".NET", "failures" ]
+++

An interesting Fiverr project I got recently is modifying the EXFO Toolbox data converter to allow excel files. This toolbox is used for fibre optic measurements. The client wants to be able to change a few values in the measurements which can't be done using the tool.

## Overview

![Data Converter window](/posts/fiverr-data-converter-modification/data-converter-window.png)

It's quite a simple part of the program, just select the 2 files to merge and tada. Issue is, it merges OLTS/OLTS2 files, not the excel file requested.

## Sanity check

Let's make sure this program is easily modifiable first of all.

![CFF Explorer shows it to be a .NET app](/posts/fiverr-data-converter-modification/cff-explorer.png)

Very good, it's a .NET application, which is easily modifiable via dnSpy. To modify a native application in this way would be near impossible.

## Allowing selecting excel files

First of all, let's allow a .xlsx file be selected.

```.NET
// Metrino.Kernos.IO.DataConverter.MainWindow selectMergeSourceFile
string filter = string.Concat(new string[]
			{
				StringTable.GetString("FOT930ConverterType.OLTS.Text"),
				" (",
				StringTable.GetString("ConverterType.OLTS.Filter"),
				")|",
				StringTable.GetString("ConverterType.OLTS.Filter"),
				"|",
				StringTable.GetString("FOT930ConverterType.OLTS2.Text"),
				" (",
				StringTable.GetString("ConverterType.OLTS2.Filter"),
				")|",
				StringTable.GetString("ConverterType.OLTS2.Filter")
			});
this.openFileDialogMerge.Filter = filter;
```

.NET decompiles and compiles very nicely, so in dnSpy we can simply edit the code and compile and tada. To allow excel files, I simply add

```.NET
"|Excel (*.xlsx)|*.xlsx"
```

to the end of that string.

Next, we need to deal with warning preventing us from opening files of different types.

![Warning showing that files are different formats](/posts/fiverr-data-converter-modification/warning-different-format.png)

Here is the code responsible for that:

```.NET
// Metrino.Kernos.IO.DataConverter.MainWindow buttonMerge_Click

string text = (string)this.textBoxMergeSource1.Tag;
string text2 = (string)this.textBoxMergeSource2.Tag;
string text3 = null;
if (this.oltsConversionType != FOT930ConverterType.OLTS || !(Path.GetExtension(text).ToLower() != Path.GetExtension(text2).ToLower()) || MessageBox.Show(this, StringTable.GetString("message.MergingOltsWithOlts2Files"), StringTable.GetString("message.Title.Warning"), MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation, MessageBoxDefaultButton.Button1) != DialogResult.No)
	{
```

I'll simply put a check before `!(Path.GetExtension(text).ToLower() != Path.GetExtension(text2).ToLower()` for the second file ending with `.xlsx`.

The resulting boolean expression is:

```.NET
this.oltsConversionType != FOT930ConverterType.OLTS || Path.GetExtension(text2).ToLower() == ".xlsx" || !(Path.GetExtension(text).ToLower() != Path.GetExtension(text2).ToLower()) || MessageBox.Show(this, StringTable.GetString("message.MergingOltsWithOlts2Files"), StringTable.GetString("message.Title.Warning"), MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation, MessageBoxDefaultButton.Button1) != DialogResult.No
```

## Custom logic placement

After it's done the format checks, the program goes on to ask where the file is to be saved to, and finally goes to the real meat: the combining. We'll bypass the pre-existing combination code when the 2nd file is an excel file.

Just out of interesting, I ran it and unsurprisingly there was an error.

![Pressing merge causes an error of "An event was unable to invoke any of the subscribers"](/posts/fiverr-data-converter-modification/warning-different-format.png)

I have no idea what that error means, and I'm not interested in it, so let's continue with adding our custom logic.

First of all, we need to place our custom logic in-between where we are prompted where to save the file and where the merging takes place.

```.NET
// Metrino.Kernos.IO.DataConverter.MainWindow buttonMerge_Click

if (this.saveFileDialogMerge.ShowDialog() == DialogResult.OK)
	{
		text3 = this.saveFileDialogMerge.FileName;
		this.appSettings.LastMergeDestinationFolder = Path.GetDirectoryName(text3);
		ICable cable = null;
		ICable cable2 = null;
		ERFFBypass erffbypass = null;
		// PLACE CUSTOM LOGIC HERE
		try
		{
			this.Cursor = Cursors.WaitCursor;
			cable = new CableClass();
			cable2 = new CableClass();
			erffbypass = new ERFFBypassClass();
			erffbypass.ReadData(text, "OLTS3930", cable, false);
			erffbypass.ReadData(text2, "OLTS3930", cable2, false);
```

## Sanity check: read & write

Before I go trying to figure out how to use the excel file, let's check if I can just read and write the first file without issues.

```.NET
// Metrino.Kernos.IO.DataConverter.MainWindow buttonMerge_Click

ICable cable = null;
ICable cable2 = null;
ERFFBypass erffbypass = null;
if (Path.GetExtension(text2).ToLower() == ".xlsx")
{
	try
	{
		cable = new CableClass();
		erffbypass = new ERFFBypassClass();
		erffbypass.ReadData(text, "OLTS3930", cable, false);
		erffbypass.WriteData(text3, "OLTS3930", cable, false);
	}
	finally
	{
		if (cable != null)
		{
			while (Marshal.ReleaseComObject(cable) != 0)
			{
			}
		}
		if (cable2 != null)
		{
			while (Marshal.ReleaseComObject(cable2) != 0)
			{
			}
		}
		if (erffbypass != null)
		{
			while (Marshal.ReleaseComObject(erffbypass) != 0)
			{
			}
		}
	}
}
else
{
	try
	{
		this.Cursor = Cursors.WaitCursor;
		cable = new CableClass();
```

Let's make sure that the output is correct.

```bash
$ sha256sum merged.olts
	bbf132f37857dbe44faafc607a764a78ae90749127edc057827a11f9a56bfac9  merged.olts
$ sha256sum samples/EXFO_FW_H1017_33TO36.olts
	4fae0b842e074f3ff5d3ac668b1791819fad8317a0c2c01542b2711d44eba820  samples/EXFO_FW_H1017_33TO36.olts
```

The output file does have a different hash.

![The output file has the same data](/posts/fiverr-data-converter-modification/output-has-same-data.png)

However, when opened in the "Optical Report Viewer" they have the same data, so it's fine.

## Failure

I couldn't figure out where the measurements are stored in the object at runtime. When debugging the writing of the file, it just skipped over it. Turns out that the method was marked with `[MethodImpl(MethodImplOptions.InternalCall)]`, so in reality it was a call to a native binary. However, there's very few options to figure out where this call goes, and I've spent too long on this order to make sense to figure it out.
