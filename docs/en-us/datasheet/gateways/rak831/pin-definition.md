## Pin Definition

The RAK831 provides headers at the bottom side, which have a pitch of **2.54 mm**. The description of the pins is given by the table below. 

<rk-img
  src="/assets/images/datasheet/rak831/pin-assignment.png"
  width="100%"
  figure-number="4"
  caption="RAK831 LPWAN Gateway Module Pinout Diagram"
/>

|  Pin  |    Name    | Type  |         Description         |
| :---: | :--------: | :---: | :-------------------------: |
|   1   |    +5V     | POWER |     +5V Supply Voltage      |
|   2   |    +5V     | POWER |     +5V Supply Voltage      |
|   3   |    GND     |  GND  |           Ground            |
|   4   |  LNA_EN_A  | Input | SX1301 Radio C Sample Valid |
|   5   |    GND     |  GND  |  GPS Module LDO:Enable Pin  |
|   6   |    GND     |  GND  |           Ground            |
|   7   | RADIO_EN_A | Input |         SX1257_A_EN         |
|   8   |   PA_G8    | Input |          PA GAIN 0          |
|   9   | RADIO_EN_B | Input |         SX1257_B_EN         |
|  10   |   PA_G16   | Input |          PA GAIN 1          |
|  11   |  PA_EN_A   | Input |            PA EN            |
|  12   |    GND     |  GND  |           Ground            |
|  13   | RADIO_RST  |  RST  |      SX1257_A_B RESET       |
|  14   |    GND     |  GND  |           Ground            |
|  15   |    CSN     |  SPI  |       SX1301 SPI_NSS        |
|  16   |    MOSI    |  SPI  |       SX1301 SPI_MOSI       |
|  17   |    MISO    |  SPI  |       SX1301 SPI_MISO       |
|  18   |    SCK     |  SPI  |       SX1301 SPI_CLK        |
|  19   |   RESET    |  RST  |        SX1301 RESET         |
|  20   |   GPIO0    | GPIO  |         SX1301 GPIO         |
|  21   |   GPIO1    | GPIO  |         SX1301 GPIO         |
|  22   |   GPIO2    | GPIO  |         SX1301 GPIO         |
|  23   |   GPIO3    | GPIO  |         SX1301 GPIO         |
|  24   |   GPIO4    | GPIO  |         SX1301 GPIO         |


