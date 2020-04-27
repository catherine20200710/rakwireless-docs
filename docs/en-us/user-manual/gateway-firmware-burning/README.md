# Device Firmware Setup

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci porttitor ipsum efficitur, ut ornare nibh ultrices. Ut id metus nec neque fringilla hendrerit id vitae augue. Nullam finibus turpis eu aliquet aliquet. Aliquam porta metus luctus ipsum posuere commodo. Duis id ligula justo.

## Firmware Archive

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci porttitor ipsum efficitur, ut ornare nibh ultrices. Ut id metus nec neque fringilla hendrerit id vitae augue. Nullam finibus turpis eu aliquet aliquet. Aliquam porta metus luctus ipsum posuere commodo. Duis id ligula justo.

|                        Model                              |              Raspberry Board         |Firmware Version|       Source           |
|-----------------------------------------------------------|--------------------------------------|----------------|------------------------|
|RAK2245 Pi Hat Edition - LPWAN <br>Gateway Concentrator Module | Raspberry Pi 3/3B+                       |4.1.0_20191202|[Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245%26RAK831_based_on_Raspbian_OS_for_RPI3_V4.1.0_20191202.zip)|
|                                                           | Raspberry Pi 4                       |4.1.0_20191202|[Downlaod](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/Raspberry-Pi-4/RAK2245%26RAK831_based_on_Raspbian_V4.1.0_20191202.zip)|
|RAK2245 Stamp Edition - LPWAN <br>Gateway Concentrator Module  | Raspberry Pi 3/3B+                       |4.1.0_20191202|[Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245%26RAK831_based_on_Raspbian_OS_for_RPI3_V4.1.0_20191202.zip)|
|RAK7243 LPWAN Developer Gateway                            | Raspberry Pi 3/3B+                     |4.1.0_20191202|[Download](https://downloads.rakwireless.com/en/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243_Latest_Firmware.zip)|
|RAK7243C LPWAN Developer Gateway                            | Raspberry Pi 3/3B+                     |4.1.0_20191202|[Download](https://downloads.rakwireless.com/en/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243C_Latest_Firmware.zip)|
|RAK7244 LPWAN Developer Gateway                            | Raspberry Pi 4                       |4.2.0_20200312|[Download](https://downloads.rakwireless.com/en/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Firmware/RAK7244_Latest_Firmware.zip)|
|RAK7244C LPWAN Developer Gateway                            | Raspberry Pi 4                      |4.2.0_20200312|[Download](https://downloads.rakwireless.com/en/LoRa/Developer-LoRaWAN-Gateway-RAK7244C/Firmware/RAK7244C_Latest_Firmware.zip)|
|RAK7246G LPWAN Developer Gateway                            | Raspberry Pi Zero W                 |4.2.0_20200312|[Download](https://downloads.rakwireless.com/en/LoRa/NeoPi-Gateway-RAK7246/Firmware/RAK7246_Latest_Firmware.zip)|

## Burn the Latest Firmware

::: tip 📝 NOTE:
 All LPWAN Developer Gateways mentioned in the previous section are pre-installed with its latest firmware upon purchase. Follow these steps if you intend to re-install the firmware of your device.
:::
1. Download the latest firmware in the [Firmwares](/en-us/user-manual/developer-gateways/firmware-burning/#firmwares) section which is based on the Raspbian OS.

2. An image writing tool is needed to install the downloaded firmware into the SD Card. For this instruction, the open source utility software [Etcher](https://www.balena.io/etcher/) will be used for burning the image file.

3. Insert the SD Card into the SD Card reader and plug it into the Computer.

4. Open the Etcher Software and select the necessary settings as shown in Figure 1:
    * **Select Image Button**: Select the image to be burned in the SD Card
    * **Select Drive Button**: The SD Card where the firmware will be burned
 
 <!---
Feel free to change the description for Select Image and Select Drive buttons
-->

::: tip 📝 NOTE:
 The SD Card should be automatically detected by the Etcher in the Select Drive Button in Figure 1. If not, kindly ensure proper connection.
:::

<rk-img
  src="/assets/images/user-manual/developer-gateways/firmware-burning/firmwareburn.png"
  figure-number="1"
  caption="Balena Etcher Software"
/>

5. Click **"Flash!"** and wait until the process completes automatically.