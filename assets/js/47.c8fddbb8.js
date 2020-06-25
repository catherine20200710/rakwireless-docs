(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{388:function(e,t,a){"use strict";a.r(t);var r=a(18),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),a("h3",{attrs:{id:"block-diagram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-diagram"}},[e._v("#")]),e._v(" Block Diagram")]),e._v(" "),a("p",[e._v("RAK2287 card is equipped with one SX1302 chip and two SX1250. The first chip is utilized for RF signal and the core of the device. While the latter, provides the related LoRa® modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one UFL connectors are available for external antennas integration.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/datasheet/rak2287/interfaces/block-diagram.png",width:"100%","figure-number":"4",caption:"RAK2287 Block Diagram"}}),e._v(" "),a("h3",{attrs:{id:"power-supply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-supply"}},[e._v("#")]),e._v(" Power Supply")]),e._v(" "),a("p",[e._v("RAK2287 card must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1302 chip (see "),a("a",{attrs:{href:"https://www.mouser.com/pdfDocs/Semtech_08072019_DS_SX1302_V10-1626824.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SX1302 Datasheet"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("h3",{attrs:{id:"spi-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spi-interface"}},[e._v("#")]),e._v(" SPI Interface")]),e._v(" "),a("p",[e._v("SPI interface mainly provides for the Host_SCK, Host_MISO, Host_MOSI, Host_CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1302 via a synchronous full-duplex protocol. Only the slave side is implemented.")]),e._v(" "),a("h3",{attrs:{id:"uart-and-i2c-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uart-and-i2c-interface"}},[e._v("#")]),e._v(" UART and I2C Interface")]),e._v(" "),a("p",[e._v("RAK2287 integrates ZOE-M8Q GPS module which has UART and I2C interface. The PINs on golden finger provide an UART connection and an I2C connection, which allows direct access to the GPS module. The PPS signal is not only connected to SX1302 internally, but also connected to golden finger which can be used by host board.")]),e._v(" "),a("h3",{attrs:{id:"gps-pps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-pps"}},[e._v("#")]),e._v(" GPS_PPS")]),e._v(" "),a("p",[e._v("RAK2287 card includes\nthe GPS_PPS input for received packets time-stamped.")]),e._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[e._v("#")]),e._v(" RESET")]),e._v(" "),a("p",[e._v("RAK2287 card includes the RESET active-high input signal to reset the radio operations as specified by the SX1302 Specification"),a("a",{attrs:{href:"#_bookmark73"}},[e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"antenna-rf-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antenna-rf-interface"}},[e._v("#")]),e._v(" Antenna RF Interface")]),e._v(" "),a("p",[e._v("The modules have one RF interfaces over a standard UFL connectors (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);