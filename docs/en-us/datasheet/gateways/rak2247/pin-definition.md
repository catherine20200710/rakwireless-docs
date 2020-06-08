## Pin Definition

<rk-img
  src="/assets/images/datasheet/rak2247/pinout.png"
  width="100%"
  figure-number="3"
  caption="RAK2247 LPWAN Gateway Concentrator Module Pinout Diagram"
/>


| Pin # | Mini PCIEx PIN Rev. 2.0 | RAK2247 PIN | POWER | I/O | Description | Remarks | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| 1 | WAKE# | NC |  | N/A |  | Internally not connected | 
| 2 | 3.3Vaux | 3.3Vaux | 3.3Vaux | N/A | RAK2247 Power Supply Input | Connect to 3.3 volts | 
| 3 | COEX1 | NC |  | N/A |  | Internally not connected | 
| 4 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 5 | COEX2 | NC |  | N/A |  | Internally not connected | 
| 6 | 1.5V | NC |  | N/A |  | Internally not connected | 
| 7 | CLKREQ# | NC |  | N/A |  | Internally not connected | 
| 8 | UIM_PWR | NC |  | N/A |  | Internally not connected | 
| 9 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 10 | UIM_DATA | NC |  | N/A |  | Internally not connected | 
| 11 | REFCLK- | NC |  | N/A |  | Internally not connected | 
| 12 | UIM_CLK | NC |  | N/A |  | Internally not connected | 
| 13 | REFCLK+ | NC |  | N/A |  | Internally not connected | 
| 14 | UIM_RESET | NC |  | N/A |  | Internally not connected | 
| 15 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 16 | UIM_SPU | NC |  | N/A |  | Internally not connected | 
| 17 | UIM_IC_ DM | NC (5V Optional For PA) |  | N/A |  | Internally not connected | 
| 18 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 19 | GPS_PPS | 1PPS |  | N/A |  | Internal connection GPS_PPS for SX1301 | 
| 20 | W_DISABLE1# | NC |  | N/A |  | Internally not connected | 
| 21 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 22 | PERST# | RESET |  | I | RAK2247 reset input | Active high (≥100ns) for SX1301 reset. | 
| 23 | PERn0 | NC |  | N/A |  | Internally not connected | 
| 24 | 3.3Vaux | 3.3Vaux | 3.3Vaux | I | RAK2247 supply input | Connect to 3.3 V | 
| 25 | PERp0 | NC |  | N/A |  | Internally not connected | 
| 26 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 27 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 28 | 1.5V | NC |  | N/A |  | Internally not connected | 
| 29 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 30 | SMB_CLK | NC |  | N/A |  | Internally not connected | 
| 31 | PETn0 | NC |  | N/A |  | Internally not connected | 
| 32 | SMB_DATA | NC |  | N/A |  | Internally not connected | 
| 33 | PETp0 | NC |  | N/A |  | Internally not connected | 
| 34 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 35 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 36 | USB_D- | USB_D- | USB | I/O | USB Data Line D- | 90Ω nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. | 
| 37 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 38 | USB_D+ | USB_D+ | USB | I/O | USB Data Line D+ | 90Ω nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. | 
| 39 | 3.3Vaux | 3.3Vaux | 3.3Vaux | I | RAK2247 supply input | Connect to 3.3 V | 
| 40 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 41 | 3.3Vaux | 3.3Vaux | 3.3Vaux | I | RAK2247 supply input | Connect to 3.3 V | 
| 42 | LED_WWAN# | NC |  | N/A |  | Internally not connected | 
| 43 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 44 | LED_WLAN# | NC |  | N/A |  | Internally not connected | 
| 45 | Reserved | PCIe_SCK |  | I/O | Host SPI CLK | Max 10MHz clock | 
| 46 | LED_WPAN# | NC |  | N/A |  | Internally not connected | 
| 47 | Reserved | PCIe_MISO |  | I/O | Host SPI MISO |  | 
| 48 | 1.5V | NC |  | N/A |  | Internally not connected | 
| 49 | Reserved | PCIe_MOSI |  | I/O | Host SPI MOSI |  | 
| 50 | GND | GND | GND | N/A | Ground | Connect to ground | 
| 51 | W_DISABLE2# | PCIe_CSN |  | I/O | Host SPI CS |  | 
| 52 | 3.3Vaux | 3.3Vaux | 3.3Vaux | I | RAK2247 supply input | Connect to 3.3 V | 


