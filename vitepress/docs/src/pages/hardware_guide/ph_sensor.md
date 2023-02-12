# Calibration of the Atlas Scientific pH Sensor {.text-[var(--font-accent)]}

::: info Note
If you plan on using an external power supply for the ESP32, connect it to the ESP32 before doing the calibration. This will ensure that the reference levels are appropriately set, which will aid in the correct calibration.
:::

This pH meter can be calibrated to one, two, or three-points of calibration. Standard buffer solutions `(pH 4, 7 and 10)` are ***required***.

## Configuration

The [serial monitor](../firmware_guide/web_serial) can be used for the calibration process, or using button interfacing - this is configured in the firmware. Default is serial monitor configuration. The user will be able to observe the gradual change in readings as they come to stabilization and send the appropriate commands.

Calibration data is stored in the `NVS` partition of the ESP32.

### Calibration commands

- Low-point: `cal, 4`

- Mid-point: `cal, 7`

- High-point: `cal, 10`

- Clear calibration: `cal, clear`

### Steps

1. Remove the soaker bottle and rinse off the pH probe.
2. Pour some of the pH 4 solution into a cup. Ensure that there is enough to cover the sensing area of the probe.
3. Place the probe in the cup and stir it around to remove trapped air. Observe the readings on the serial monitor. Let the probe sit in the solution until the readings stabilize (small movement from one reading to the next is normal)
4. After the readings stabilize, enter the command cal, 4 into the serial monitor. Calibration to pH 4 is now complete.

Repeat steps `1-4` for `pH7 and pH10`.

::: warning Warning
Remember to rinse the probe as you proceed to different buffer solutions.
:::

#### What about temperature compensation?

The sensor used in this project has an accuracy of `+/- 0.2%`. The pH meter will operate within this accuracy in the temperature range of `7 - 46°C`. Outside of this range, the meter will have to be modified for temp compensation.

::: info Note
The pH probe can be subjected to a range of `1 − 60 °C`.
Please use [this calculator](https://atlas-scientific.com/ph-temperature-calculator/) to determine the appropriate temperature range for your probe.
:::
