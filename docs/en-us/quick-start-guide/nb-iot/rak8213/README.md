---
next: /en-us/quick-start-guide/nb-iot/rak8213/prerequisites/#prerequisites
static_root: /assets/images/quick-start-guide/rak8213/overview
rak_img: rak8213.png
rak_grp: nb-iot
params:
  qlinks:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?q=rak8213&i=projects
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: http://localhost:8080/en-us/datasheet/nb-iot/rak8213/#rak8213-wislink-nb-iot-module
      - name: Schematic Diagram
        href: https://downloads.rakwireless.com/Cellular/RAK8213/Hardware%20Specification/RAK8213%20Schematics_20180516.pdf
      - name: 3D Model
        href: https://downloads.rakwireless.com/Cellular/RAK8213/Hardware%20Specification/RAK8213-3D-File.zip
      - name: Firmware
        href: https://downloads.rakwireless.com/Cellular/RAK8213/Firmware/
      - name: Downloads
        href: https://downloads.rakwireless.com/en/Cellular/RAK8213/
---

# RAK8213 NB-IoT Module

<rk-img
  :src="`${$frontmatter.static_root}/rak8213.png`"
  width="25%"
  caption="RAK8213 NB-IoT Module"
/>

## Product Background

The **RAK8213** is a multi-band LTE Cat M1/Cat NB1/EGPRS module based on the **Quectel BG96** with a standard PCI Express® form factor (**Mini PCIe**). It offers a maximum data rate of 375Kbps downlink and 375Kbps uplink.

RAK8213’s built-in GNSS module can support **GPS, GLONASS, BeiDou/Compass, Galileo, QZSS**. The combination of a GNSS and Cellular connectivity greatly simplifies product design and provides faster, more accurate and more reliable positioning.

With its rich selection of industry-standard interfaces (USB/UART/I2C) and its mPCIe form factor the module is especially suitable for integration of a wide range of M2M and products for applications such as asset tracking, geo-fencing, etc.

<rk-btn
  src="prerequisites/#prerequisites"
  label="Set up Your RAK8213 NB-IoT Module"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

* **LTE Cat. M1/Cat.NB1/EGPRS** cellular module
* Mini PCIe form factor
* Ultra-low power consumption.
* Wide selection of industry-standard interfaces (**USB/UART/I2C**)
* **PCM** interface available for **VoLTE**
* Quectel Enhanced AT commands
* Feature refinements: supports **DFOTA, VoLTE**
* Robust mounting
