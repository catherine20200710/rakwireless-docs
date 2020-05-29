---
static_root: /assets/images/datasheet/rak811/overview
tags:
- datasheet
---

# RAK811 LPWAN Module

<rk-download filename="Datasheet - RAK811 LPWAN Board" />

<rk-img
  :src="`${$frontmatter.static_root}/nwgqobrzwanalynildkc.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK811 LPWAN Module"
/>

### Product Description

RAK811 Low-Power Long Range LoRa® Technology Transceiver module provides an easy to
use, small size, low-power solution for long range wireless data transmission.

The RAK811 module complies with the latest LoRaWAN® Class A & C protocol
specifications, it is simple to access LWPA IOT platforms, such Actility etc. It also supports LoRa® Point to Point communications (P2P) , this function can help customers implement their own
private long range LoRa® network fast.

The RAK811 Module is integrated with Semtech's SX1276 and STM32L which offers user a way communicating with AT Commands through UART Interface. Users will also be able to make their projects turn into reality such as Long Range Sensor data applications, RAK811 also offers a low power feature that is suitable for battery powered applications.

### Product Features

- LoRaWAN® protocol supported, support global license-free ISM band, full
  certification by region.
- LoRa® Point to Point communication, Activation by OTAA/ABP.
- Easy to use, UART interface, serial port AT command, baud rate and air rate online
  change supported, simple ASCII command set.
- Maximum output power 100MW (20dBm), adjustable from 5 to 20dBm.
- High sensitivity,-148 dBm, enabling extremely long range connectivity.
- Long range - greater than 15 km.
- High capacity of up to 1 million nodes.
- Low power consumption, 500nA on standby, in-air wake-up supported.
- Multi-channel, dual data buffer (256bytes each).
- LoRa®/FSK/GFSK/OOK modulation, bidirectional 2 way communications.
- Long battery life - over 10 years.
- LoRa® technology is capable of demodulating 20 dB below noise level, significantly
  improving immunity to the interference when combined with integrated forward error
  correction.

!!!include(en-us/datasheet/nodes/rak811-evaluation/interfaces.md)!!!
!!!include(en-us/datasheet/nodes/rak811-evaluation/pin-definition.md)!!!
!!!include(en-us/datasheet/nodes/rak811-evaluation/board-layout.md)!!!
!!!include(en-us/datasheet/nodes/rak811-evaluation/schematic-diagram.md)!!!
!!!include(en-us/datasheet/nodes/rak811-evaluation/device-specification.md)!!!
!!!include(en-us/datasheet/nodes/rak811-evaluation/reflow-profile.md)!!!