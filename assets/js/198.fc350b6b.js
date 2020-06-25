(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{536:function(t,e,a){"use strict";a.r(e);var n=a(18),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rak7431-rs485-to-lorawan®-converter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rak7431-rs485-to-lorawan®-converter"}},[t._v("#")]),t._v(" RAK7431 - RS485 to LoRaWAN® Converter")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/rak7431-overview.jpg",width:"50%","figure-number":"1",caption:"RAK7431 - RS485 to LoRaWAN® Converter"}}),t._v(" "),a("h3",{attrs:{id:"product-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-background"}},[t._v("#")]),t._v(" Product Background")]),t._v(" "),a("p",[a("strong",[t._v("RAK7431")]),t._v(" is an RS485 to LoRaWAN® converter designed for industrial applications. The device relays ModBUS data using the LoRaWAN® network as means of wirelessly transmitting to and from the end devices.")]),t._v(" "),a("p",[t._v("RAK7431 can operate in all of the LoRaWAN® bands within the standard parameters defined by the LoRa® Alliance. Its open environment range is 15+ km and in industrial cases, where there are heavy obstructions in the path of the RF signal performance is improved compared to conventional wireless systems due to the characteristics of LoRa® as a modulation technique. This allows for consistently good signal quality within the confines of large factories, densely populated offices, storehouses, etc.")]),t._v(" "),a("p",[t._v("This RS485 compatible devices can address up to 16 client terminal nodes. The conversion from and to LoRa® frames is seamless and allows for real time control and monitoring of multiple RS485 devices, bus data to access and control the RS485 terminal nodes.")]),t._v(" "),a("p",[t._v("RAK7431 together with RAK gateway and LoRa® Server products, can easily and quickly build a wireless industrial field control system. It adopts industrial protection design, supports wide range voltage supply, supports wall mounting and DIN rail installation, facilitates field installation and use.")]),t._v(" "),a("h3",{attrs:{id:"product-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-features"}},[t._v("#")]),t._v(" Product Features")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("LoRaWAN® 1.0.2")]),t._v(" protocol stack, supports Class A & C")]),t._v(" "),a("li",[a("strong",[t._v("Working modes")]),t._v(": Polling mode, transparent mode and packet mode")]),t._v(" "),a("li",[t._v("Remote cloud management of RS485 devices")]),t._v(" "),a("li",[t._v("Can address up to "),a("strong",[t._v("16 RS485")]),t._v(", a que with up to "),a("strong",[t._v("32 instruction sets")])]),t._v(" "),a("li",[t._v("Industrial grade STM MCU: ultra-low power ("),a("strong",[t._v("4uA sleep")]),t._v(") and wide temperature range of operation.")]),t._v(" "),a("li",[t._v("Wide range of input voltages, "),a("strong",[t._v("8-48V DC input")])]),t._v(" "),a("li",[t._v("Can power RS485 devices via a dedicated output.")]),t._v(" "),a("li",[t._v("Mounting: Wall, DIN rail, and magnetic mounting")]),t._v(" "),a("li",[t._v("Compliant with IEC61000-4-2, IEC61000-4-4 and 18KV HMB ESD protection")])]),t._v(" "),a("h2",{attrs:{id:"networking-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networking-applications"}},[t._v("#")]),t._v(" Networking Applications")]),t._v(" "),a("p",[t._v("RAK7431 can convert the data of RS485 devices into LoRaWAN® that can be sent to the cloud via a standard Gateway. Cloud servers can also actively send data to RS485 terminals to achieve two-way data transmission. Using RAK7431, what used to be a costly and time-consuming cable line network deployment can be transformed into a rapid and cost-efficient wireless network deployment.")]),t._v(" "),a("p",[t._v("An example would be using the RAK7249 LoRaWAN® Gateway coupled with the RAK WisDM cloud management platform, in order to realize an end-to-end industrial field data acquisition and control system. Using the built-in LoRa® Server, that comes standard with any RAK LoRaWAN® Gateway, one could seamlessly achieve transmission of the end device data to any application server. Furthermore, the MQTT integration allows for a high level of security and efficiency.")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/RAK7431-1.png",width:"100%","figure-number":"2",caption:"RAK7431 - RS485 to LoRaWAN® network structure"}}),t._v(" "),a("h3",{attrs:{id:"polling-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polling-mode"}},[t._v("#")]),t._v(" Polling Mode")]),t._v(" "),a("p",[t._v("RAK7431 can work in polling mode in order to send query instructions to RS485 nodes, and convert the data returned into LoRa® frames to be relayed to the application server via Gateway.")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/RAK7431-2.png",width:"100%","figure-number":"3",caption:"RAK7431 polling mode"}}),t._v(" "),a("p",[t._v("RAK7431 can store a maximum of 32 query instructions in polling mode, each of which has a maximum length of 128 bytes. Polling time interval and waiting time can be adjusted as required.")]),t._v(" "),a("p",[t._v("RAK7431 converts the data returned by RS485 nodes into LoRa® packets that can be sent to Gateway in two ways: transparent or packet.")]),t._v(" "),a("ul",[a("li",[t._v("In transparent mode, RS485 data is encapsulated in the payload of LoRa® frames as it is.")]),t._v(" "),a("li",[t._v("In packet mode, RS485 data is encapsulated in LoRa® frames with the addition of a header and verification.")])]),t._v(" "),a("p",[t._v("No matter whether polling mode is enabled or not, the server can actively send commands to query the RS485 nodes through the Gateway via the RAK7431. The commands issued and the returned data can also be transmitted in transparent mode or in packet mode.")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/RAK7431-3.png",width:"100%","figure-number":"4",caption:"RAK7431 transparent mode"}}),t._v(" "),a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/RAK7431-4.png",width:"100%","figure-number":"5",caption:"RAK7431 bottom panel"}}),t._v(" "),a("h3",{attrs:{id:"power-supply-and-configuration-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-supply-and-configuration-interface"}},[t._v("#")]),t._v(" Power Supply and Configuration Interface")]),t._v(" "),a("p",[t._v("RAK7431 can be powered by its DC terminal or via its Micro USB port. The DC terminal accepts 8-48V DC input, and the rated power of the device is 1W. Pay attention to the positive and negative pole directions when crimping the terminal. Vin is connected to the positive pole of the power supply, and GND is connected to the negative pole of the power supply.")]),t._v(" "),a("p",[t._v("The Micro USB port can also be used for powering the device (5V / 500mA DC). At the same time, the Micro USB port can be used as the configuration interface of the device.")]),t._v(" "),a("p",[t._v("Connect it to a PC and use the "),a("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("RAK Serial Port Tool")]),a("OutboundLink")],1),t._v(" to open a COM port. The default baud rate is 115200. There is a standard set of AT\ncommands that can be used to configure the RAK7431.")]),t._v(" "),a("h3",{attrs:{id:"data-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-interface"}},[t._v("#")]),t._v(" Data Interface")]),t._v(" "),a("p",[t._v("When connecting to RS485 nodes, please connect 485A and 485B on the data interface of RAK7431 with the A and B lines of the RS485 bus. Connect the GND terminal to the GN line of the RS485 devices The RS485 bus carrying capacity of RAK7431 goes up to 16 RS485 terminals at the same time.")]),t._v(" "),a("p",[t._v("The Vout on the data interface can supply power to the RS485 terminals")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ WARNING")]),t._v(" "),a("p",[t._v("Only valid when using the DC input interface power supply, USB power supply is invalid.")])]),t._v(" "),a("p",[t._v("Also, the Vout output voltage is the same as DC input voltage Vin.")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/RAK7431-5.png",width:"100%","figure-number":"6",caption:"RAK7431 ModBus connection diagram"}}),t._v(" "),a("h3",{attrs:{id:"reset-key-and-indicator-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-key-and-indicator-led"}},[t._v("#")]),t._v(" Reset key and indicator LED")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Reset Key")]),t._v(" "),a("th",[t._v("Press the reset key shortly to restart the system")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("🔴 Red LED")]),t._v(" "),a("td",[t._v("Power indicator (Only valid when using the USB power)")])]),t._v(" "),a("tr",[a("td",[t._v("🟢 Green LED")]),t._v(" "),a("td",[t._v("System working indicator, flashing when there is data transmission")])])])]),t._v(" "),a("h2",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("p",[t._v("The table below shows the full specification of RAK7431.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Remarks")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("LoRaWAN® Protocol")]),t._v(" "),a("td",[t._v("LoRaWAN® 1.0.2")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("LoRa Frequency")]),t._v(" "),a("td",[t._v("RU864, IN865, EU868, US915, AU915, KR920, KR923")]),t._v(" "),a("td",[t._v("Different models support different frequency bands")])]),t._v(" "),a("tr",[a("td",[t._v("LoRaWAN® Mode")]),t._v(" "),a("td",[t._v("Class A / Class C")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("LoRa® Tx Power")]),t._v(" "),a("td",[t._v("20dBm")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("LoRa® Antenna interface")]),t._v(" "),a("td",[t._v("SMA MALE, External omnidirectional Antenna")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("RS485 Data Rate")]),t._v(" "),a("td",[t._v("Configurable 9600 -115200bps")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("RS485 Carrying Capacity")]),t._v(" "),a("td",[t._v("16 Nodes")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("RS485 Protection")]),t._v(" "),a("td",[t._v("18KV HBM protection "),a("br"),t._v(" 13KV IEC61000-4-2 contact discharge "),a("br"),t._v(" 4KV IEC61000-4-4 fast transient burst")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Input Voltage")]),t._v(" "),a("td",[t._v("8V - 48V")]),t._v(" "),a("td",[t._v("5V for Micro USB")])]),t._v(" "),a("tr",[a("td",[t._v("Rated Power")]),t._v(" "),a("td",[t._v("Maximum 1W")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Output Voltage")]),t._v(" "),a("td",[t._v("8V - 48V")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Configuration Interface")]),t._v(" "),a("td",[t._v("Micro USB")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Indicator LED")]),t._v(" "),a("td",[t._v("Power LED, Data LED")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Housing Material")]),t._v(" "),a("td",[t._v("Metal")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Dimension")]),t._v(" "),a("td",[t._v("93.6mm x 100.3mm x 24mm")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Protection Grade")]),t._v(" "),a("td",[t._v("IP31")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Installation")]),t._v(" "),a("td",[t._v("Wall mounting, DIN rail installation, magnetic mounting")]),t._v(" "),a("td",[t._v("Magnetic mounting requires optional accessories")])]),t._v(" "),a("tr",[a("td",[t._v("Working Temperature")]),t._v(" "),a("td",[t._v("-30°C ~ 65°C")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Storage Temperature")]),t._v(" "),a("td",[t._v("-40°C ~ 85°C")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("RAK7431 allows for three installation methods: wall mounting, DIN rail installation and magnetic mounting. The wall installation and DIN rail installation is the standard installation mode (screw holes). The accessories required for magnetic mounting are optional.")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak7431/mounting.jpg",width:"100%","figure-number":"7",caption:"Different Types of Mounting"}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);