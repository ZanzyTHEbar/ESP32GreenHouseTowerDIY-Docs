# Firmware Guide {.text-[var(--font-accent)]}

This project has two different firmware options, one for the Arduino Core and one for Micropython.  The Arduino Core is more feature rich, but the Micropython version is more stable.  If you are looking for a more feature rich firmware, please check out the [Arduino Core](#arduino-core) version.

## ***SETUP***

____

### Micropython

::: danger Warning
This version of the firmware is stable, but it lacks alot of features and is no longer being developed.  If you are looking for a more feature rich firmware, please check out the [Arduino Core](#arduino-core) version.
:::

1. Plug ESP32 into computer - open your IDE (i used Thonny for this project) Flash the micropython firmware to the esp32
   1. Upload ESP32MicropytyhonLibraries ---> rename to ESP32Micro
   2. Upload boot.py and greenhouse.py to root directory
2. Navigate to [MDNS](/firmware_guide/mdns) to see how to configure your MQTT broker

____

### Arduino Core

1. Navigate to [Configure Firmware](/firmware_guide/configure_firmware) to see how to configure your firmware
2. Plug ESP32 into computer - navigate to [WebSerial](/firmware_guide/web_serial)
   1. Configure your chosen sensors and features
   2. Press build and upload, and wait for the firmware to upload, this may take a few minutes.
   3. After upload, open the serial monitor, click the `Reboot` button, and wait for the firmware to reboot.
   4. Now, you can send commands to the firmware using the serial monitor. As well as view the serial output from the firmware.
3. Navigate to [MDNS](/firmware_guide/mdns) to see how to configure your MQTT broker
