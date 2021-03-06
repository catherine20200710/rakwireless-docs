---
static_root: /assets/images/quick-start-guide/rak8212/overview
rak_img: RAK8212.svg
rak_grp: nb-iot
params:
  qlinks:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?q=rak8212&i=projects
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak8212/#rak8212-itracker-pro
      - name: Schematic Diagram
        href: https://downloads.rakwireless.com/Cellular/RAK8212/Hardware-Specification/RAK8212_iTRACKER_Schematic_20180322.pdf
      - name: 3D Model
        href: https://downloads.rakwireless.com/Cellular/RAK8212/Hardware-Specification/RAK8212_iTracker_BG96_V30-3D.STEP
      - name: Firmware
        href: https://downloads.rakwireless.com/Cellular/RAK8212/Firmware/
      - name: Downloads
        href: https://downloads.rakwireless.com/en/Cellular/RAK8212/
---

# RAK8212 iTracker Pro

<rk-img
  :src="`${$frontmatter.static_root}/mbu3h7u9ykxyd0yfzkln.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK8212 iTracker Pro"
/>

## Product Background

The **iTracker Pro RAK8212** is versatile developer board aimed at aiding in quick prototypes using NB-IOT. The board includes
a vast array of connectivity options like **NB-IoT**, **Bluetooth 5.0** and **GPS** and sensors like an **accelerometer**, **light sensor** and **barometric sensor**. At the heart of the module is the venerable **Nordic NRF52832 BLE** processor. The NB-IoT connectivity
is provided by the **Quectel BG96 module**. The RAK8212 module is **Arduino friendly** and can be programmed using the IDE.
The board also provides **SWD interface** for programming the **NRF52832** core. The combination of BLE and NB-IoT
provides flexible low power consumption development along with myriad of application option ranging from telemetry to
live tracking and environment sensing.

Applications can be made with the RAK8212 like Vehicle location/fleet transportation management, Safety monitoring of old/young children, Animal protection and animal husbandry management, Loss of assets / personnel positioning and Other remote, battery powered applications.

<rk-btn
  src="prerequisites.html"
  label="Set up Your RAK8212 iTracker Pro"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- **Arduino Compatible** – Host controller NRF52832 has been widely used in Arduino environment
- Integrated **Quectel BG96 NB-IoT wireless communication Module,** with GPS built-in
- Integrated **LIS3DH** ultra low-power, high performance 3-axes “nano” accelerometer
- Integrated **LIS2MDL** ultra-low-power, high-performance 3-axis digital magnetic sensor
- Integrated **BME280** ultra low-power, high linearity, high accuracy sensors for pressure, humidity and temperature
- Integrated **OPT3001** that measures the intensity of visible light
- Size: **43 mm x 38 mm x 18 mm**
- **Operation temperature:** -40°C to +85°C
- **Power supply**: 3.3 Volts to 5 Volts (power at solar panel connector P2).
