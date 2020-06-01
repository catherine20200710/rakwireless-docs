## RF Characteristics

### Transmitter RF Characteristics

The RAK2245 Pi HAT has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

| PA Control | DAC Control | MIX Control | DIG Gain | Normal RF Power Level (dbm) |
| :--------: | :---------: | :---------: | :------: | :-------------------------: |
|     0      |      3      |      8      |    0     |             -6              |
|     0      |      3      |     10      |    0     |             -3              |
|     0      |      3      |     14      |    0     |              0              |
|     1      |      3      |      9      |    3     |              4              |
|     1      |      3      |      8      |    0     |              8              |
|     1      |      3      |      9      |    0     |             10              |
|     1      |      3      |     11      |    0     |             12              |
|     1      |      3      |     12      |    0     |             14              |
|     1      |      3      |     13      |    0     |             16              |
|     2      |      3      |     12      |    0     |             17              |
|     2      |      3      |     13      |    0     |             19              |
|     2      |      3      |     14      |    0     |             20              |
|     3      |      3      |     10      |    0     |              0              |
|     3      |      3      |     11      |    0     |              0              |
|     3      |      3      |     12      |    0     |             25              |
|     3      |      3      |     13      |    0     |             26              |
|     3      |      3      |     14      |    0     |             27              |


* At **T=25°C**, **Vdd = 5V** (Typical) if nothing else stated

|               Parameter               |        Condition        |   Min    | Typ.  |   Max    |
| :-----------------------------------: | :---------------------: | :------: | :---: | :------: |
|            Frequency Range            |                         | 863 Mhz  |       | 870 Mhz  |
|         Modulation Techniques         |        FSK/LoRa®        |          |       |          |
| TX Frequency Variation vs Temperature | Power Level Setting: 20 |  -3 Khz  |       |  +3 Khz  |
|   TX Power Variation vs Temperature   | Power Level Setting: 20 |  -5 dBm  |       |  +5 dbm  |
|          TX Power Variation           |                         | -1.5 dBm |       | +1.5 dBm |


### Receiver RF Characteristics

We recommended you to use optimized RSSI calibration values which is part of HAL v3.1. For both Radio 1 and 2, the RSSI-offset should be set to -169. The following table gives typical sensitivity level of RAK2245 Pi HAT.

| Signal Bandwidth (Khz) | Spreading Factor | Sensitivity (dBm) |
| :--------------------: | :--------------: | :---------------: |
|          125           |        12        |       -139        |
|          125           |        7         |       -126        |
|          250           |        12        |       -136        |
|          250           |        7         |       -123        |
|          500           |        12        |       -134        |
|          500           |        7         |       -120        |


