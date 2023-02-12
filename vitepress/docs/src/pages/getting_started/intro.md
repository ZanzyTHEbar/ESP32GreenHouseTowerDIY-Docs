<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# 🌱 ESP32GreenhouseTowerDIY 🌱 {.text-[var(--font-accent)]}

This repo is dedicated to a **DIY ESP32**-based automated *Aeroponic* or *Hydroponic* Modular Tower Garden 🌵.

<Alerts :options="alerts.user_warning">
    <template v-slot:content>
        <p>
            This project is in active development.
            However, it is working for most users.
        </p>
    </template>
</Alerts>

## What is this project?

In the height of COVID my wife and I wanted to grow our own food indoors. This open source project is a culmination of my own work and many inspirations from the internet to develop an easy, approachable, and beginner friendly project for hobbyists.

This project is designed to be modular and affordable. Featuring a vertical tower system with interlocking parts and an adapter to a common `20L/5gallon` bucket.

The design also features an optional 3D printable Aeroponics Nozzle for converting the system from the standard hydroponic to aeroponics.

::: info Note
> This is a work in progress and under active development. Please report any bugs or issues you may find.
:::

![tower garden](https://raw.githubusercontent.com/ZanzyTHEbar/ESP32GreenhouseTowerDIY/main/3D%20Printing%20Files/Modular%20Hydroponic%20Tower%20Garden/images/IMG_20190523_094749.jpg)

![tower garden](https://raw.githubusercontent.com/ZanzyTHEbar/ESP32GreenhouseTowerDIY/main/3D%20Printing%20Files/Modular%20Hydroponic%20Tower%20Garden/images/IMG_20200518_074307.jpg)

![tower garden](https://raw.githubusercontent.com/ZanzyTHEbar/ESP32GreenhouseTowerDIY/main/3D%20Printing%20Files/5%20Gallon%20(20L)%20Bucket%20Lid%20Adapter/images/IMG_5375.JPG)

# How to Order the PCB's

PCBS can be ordered from [JLCPCB](https://jlcpcb.com/) or [PCBWay](https://www.pcbway.com/), or made yourself. The PCB files are still in prototype phase, I welcome any development ideas.

# Introduction

**Purpose:** These are instructions to build an open hardware, DIY Vertical Greenhouse Garden.

**Expected results:** A fully functional and (reasonably) automated vertical tower system.

**Minimal parts cost:** `<$20` for the basic system which consists of a `20L/5gallon` (can be smaller - minimum size is `4L/1 gallon`) humidifier box/water reservoir and submersible pump - about `$100`. You will also need to purchase the PCB's `~$40`, power supply and sensors `~$30`. The cost of the parts will vary depending on the size of the tower, and the number of sensors. The cost of 3D printing the tower will be `~$25` or less. The full `1m` tower consumes `~2kg` of `PETG` - which is the recommended printing material for outdoor use. The tower can be printed in `ABS` and/or `PETG` materials.

::: warning Note
The cost of plant nutrients is **not** taken into account, and is up to you to control.
:::

**Goal:** The goal of this project was to build a high-efficiency, very low cost direct DIY vertical tower garden for growing small fruits and vegetables.

____

## How to Setup

Setup is very straight forward, thankfully. Please see our [Hardware Setup](../how_to_build/parts_list) page for more information on parts.
