+++
author = "Brian Stadnicki"
title = "Jeemak 74R camera simple firmware extraction"
date = "2022-02-17"
categories = [ "reverse engineering" ]
tags = [ "reverse engineering", "firmware", "camera", "jeemak" ]
+++

![](/posts/camera-jeemak-74r-firmware/camera-front.png)

This cheap camera is quite terrible, so that's why it's been abandoned, ready for me to tinker with.

To aid the tinkering, it would help to have the firmware, which thankfully is very easy to extract.

![](/posts/camera-jeemak-74r-firmware/camera-back.png)

## Firmware extraction

When I plug the camera in, it prompts asking for usb mode.

```bash
brian@parrot:~$ adb devices
List of devices attached
20080411	device
```

As it's connecting via adb, let's see if there's shell access.

```bash
brian@parrot:~$ adb shell
root@camdroid:/ #
```

I guess there's no need to play with rooting this.

I know prehand that the camera has an Allwinner v3 chip, which has its firmware structure listed [here](https://github.com/petesimon/allwinner-v3-v3s/blob/master/allwinner-v3-v3s-firmware-stuctures.txt).

```bash
adb pull /dev/block/mtdblock0 uboot.img         # uboot
adb pull /dev/block/mtdblock1 boot.img          # kernel
adb pull /dev/block/mtdblock2 system.img        # squahfs
adb pull /dev/block/mtdblock3 config.img        # /data
adb pull /dev/block/mtdblock4 boot-logo.jpg     # boot logo
adb pull /dev/block/mtdblock5 shutdown-logo.jpg # shutdown logo
adb pull /dev/block/mtdblock6 env.img           # uboot params
```

There you have it, that's the firmware. It appears to be based off [ESP32-CAM-Linux-Motion](https://github.com/xenpac/ESP32-CAM-Linux-Motion) and [MiniGui](https://minigui.fmsoft.cn/).
