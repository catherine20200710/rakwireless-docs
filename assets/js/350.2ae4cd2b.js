(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{689:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"at-commands-for-rak8212-itracker-pro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#at-commands-for-rak8212-itracker-pro"}},[t._v("#")]),t._v(" AT Commands for RAK8212 iTracker Pro")]),t._v(" "),o("p",[t._v("The purpose of this document is to demonstrate on how to configure the RAK8212 iTracker Pro thru the use of AT Commands via Bluetooth. The list below shows the AT Commands available for use:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[o("strong",[t._v("AT Command")])]),t._v(" "),o("th",[o("strong",[t._v("Description")])])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("at+version")])]),t._v(" "),o("td",[t._v("Get the current firmware version number.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:restart")])]),t._v(" "),o("td",[t._v("After set, the device will restart.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=device:status")])]),t._v(" "),o("td",[t._v("Get all information about the device’s hardware components and their current status")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:sleep:X")])]),t._v(" "),o("td",[t._v("After set, the device will go to sleep or wake up immediately. "),o("br"),t._v("• "),o("strong",[t._v("0")]),t._v(" - sleep "),o("br"),t._v("• "),o("strong",[t._v("1")]),t._v(" - wake up")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:sleep_interval:X:Y")])]),t._v(" "),o("td",[t._v("Set the sleep interval. "),o("br"),t._v("• "),o("strong",[t._v("X")]),t._v(" - "),o("strong",[t._v("0")]),t._v(": off, "),o("strong",[t._v("1")]),t._v(": on. "),o("br"),t._v("• "),o("strong",[t._v("Y")]),t._v(" - the interval time. (ms) If the "),o("strong",[t._v("X")]),t._v(" is set to 1, it means that the device will sleep for "),o("strong",[t._v("Y")]),t._v(" ms after sending a message automatically in a loop, until you set "),o("strong",[t._v("X")]),t._v(" to 0.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:gps:X")])]),t._v(" "),o("td",[t._v("• "),o("strong",[t._v("X")]),t._v(" - "),o("strong",[t._v("0")]),t._v(": close, "),o("strong",[t._v("1")]),t._v(": open, "),o("strong",[t._v("2")]),t._v(": sleep, "),o("strong",[t._v("3")]),t._v(": standby")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+scan=cellular")])]),t._v(" "),o("td",[t._v("Scan the Cellular networks available in your place")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=cellular:XXX:Y:ZZZ: AAA:BBB:C")])]),t._v(" "),o("td",[t._v("Sets the IP address and port on which you want to send data to through Cellular. "),o("br"),t._v("• "),o("strong",[t._v("XXX")]),t._v(" - the IP address you want to send data to. "),o("br"),t._v("• "),o("strong",[t._v("Y")]),t._v(" - the port you want to send data to. "),o("br"),t._v("• "),o("strong",[t._v("ZZZ")]),t._v(" -The cellular operator’s long name you want to connect, for example:CHINA MOBILE. "),o("br"),t._v("• "),o("strong",[t._v("AAA")]),t._v(" - The short name of the Cellular operator, for example: CMCC. "),o("br"),t._v("• "),o("strong",[t._v("BBB")]),t._v(" - The operator’s APN name, for example CMNET. "),o("br"),t._v("• "),o("strong",[t._v("C")]),t._v(" - The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=cellular:XXX")])]),t._v(" "),o("td",[t._v("Set the Cellular module using the Cellular module’s common AT commands which come from its manufacturer. "),o("br"),t._v("• "),o("strong",[t._v("XXX -")]),t._v(" The Cellular module’s common AT commands. For the full list of supported Quectel BG96 AT Commands, go "),o("a",{attrs:{href:"https://www.quectel.com/product/bg96.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=cellular:XXX")])]),t._v(" "),o("td",[t._v("Send data through cellular. "),o("br"),t._v("• "),o("strong",[t._v("XXX -")]),t._v(" The data you want to send.")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);