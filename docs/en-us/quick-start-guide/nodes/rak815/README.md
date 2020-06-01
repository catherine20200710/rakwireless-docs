---
static_root: /assets/images/quick-start-guide/rak815/1main
rak_img: RAK815.svg
rak_grp: lora-node
params:
  qlinks1:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?q=RAK815&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak815/#rak815-hybrid-location-tracker
      - name: Schematic Diagram
        href: /en-us/datasheet/rak815/#schematic-diagram
      - name: Open Source Codes
        href: https://github.com/RAKWireless/RAK813-BreakBoard
      - name: nRF52832 Product Specifications
        href: https://downloads.rakwireless.com/LoRa/RAK815/Hardware%20Specification/nRF52832_Product%20_Specification_v1.3.pdf
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/RAK815/
---

# RAK815 Hybrid Location Tracker

<rk-img
  :src="`${$frontmatter.static_root}/rak815-overview.jpg`"
  width="75%"
  figure-number="1"
  caption="RAK815 Hybrid Location Tracker"
/>

## Product Background

**RAK815 Hybrid Location Tracker** is a wireless remote solution based from RAK813 with built-in GPS, acceleration, temperature and humidity sensor plus an expanded I2C LCD Interface. It integrates both LoRaWAN® 1.0.2 protocol and Bluetooth 5.0, supporting the LoRaWAN® working mode and Bluetooth transparent transmission up to 300 meters.

The board is equipped with 3 customizable buttons and 2 customizable LEDs, allowing users to implement their ideas with open-source code. Furthermore, it supports battery-powered products which greatly expand its application scenarios.

Overall, this LoRa® device has various functionalities designed in a single board that could help you develop your own LoRa® projects.

<rk-btn
  src="prerequisites.html"
  label="Setup your RAK815 Hybrid Location Tracker"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- Semtech SX1276 LoRaWAN® V1.0.2
- NRF52832 Bluetooth Version 5.0
- **GPS Module**: U-Blox GPS
- Supports both ABP and OTAA activation
- Dedicated battery connector
- **Interface**: Micro USB for charging and configuration
- Equipped with MEMS and HT sensors + I2C LCD expansion
- **Operation Temperature**: -20ºC ~ 60ºC
