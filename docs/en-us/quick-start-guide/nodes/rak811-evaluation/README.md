---
static_root: /assets/images/quick-start-guide/rak811/overview
rak_img: RAK811-wisnode.svg
rak_grp: lora-node
params:
  qlinks:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=rak811
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: RAK811 LPWAN Module Datasheet
        href: /en-us/datasheet/rak811
      - name: Schematic Diagram
        href: https://downloads.rakwireless.com/LoRa/WisNode/Hardware-Specification/WisNode-LoRa_Schematic.pdf
      - name: 3D Model
        href: https://downloads.rakwireless.com/LoRa/WisNode/Hardware-Specification/RAK811-3D-File.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/en/LoRa/WisNode/
---

# RAK811 LPWAN Evaluation Board

<rk-img
  :src="`${$frontmatter.static_root}/o5qqux3jaeyiiuosw0qi.jpg`"
  width="75%"
  figure-number="1"
  caption="RAK811 LPWAN Evaluation Board"
/>

## Product Background

The **RAK811 LPWAN Evaluation Board** is a development board which comes in an Arduino Uno form factor. It has a built-in MCU which allows it to function as a standalone solution or as an Arduino shield. This board is highly suitable for rapid development and testing, with its form factor and easy access to GPIOs (via the headers), plus the integrated USB-UART convert and port.

The module integrates the **Semtech SX1276** and a **STM32 Chip** that comes along with a firmware which comes with AT command support. It is easy to configure via the Micro USB and connects with LoRaWAN® Network Server in just a couple of minutes. Now, Rapid testing is made easy.

<rk-btn
  src="prerequisites.html"
  label="Set up Your RAK811 LPWAN Evaluation Board"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- LoRaWAN® 1.0.2 Standard support
- Global LoRaWAN® bands supported (EU433, CN470, IN865, EU868, US915, AU915, AS920, KR920, and AS923)
- Arduino Uno form factor (standalone or as a shield)
- Micro USB with UART converter for easy configuring
- AT commands backed in the firmware, open source platform
