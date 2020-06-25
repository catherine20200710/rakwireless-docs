(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{589:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"traffic-testing-and-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traffic-testing-and-monitoring"}},[t._v("#")]),t._v(" Traffic Testing and Monitoring")]),t._v(" "),a("h2",{attrs:{id:"uplink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uplink"}},[t._v("#")]),t._v(" Uplink")]),t._v(" "),a("p",[t._v("Now your RAK811 LoRa® Node is authenticated with the built-in LoRa® Server. As it is connected to the external MQTT Broker via the Global Integration, you can monitor traffic in both the Live Data tab and on the "),a("strong",[t._v("Raspberry Pi 3B+")]),t._v(" where the Mosquitto resides. Let us test this by sending an uplink frame via the RAK811.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the command line window of the Raspberry Pi 3B+, we need to subscribe to the Application/Device we are going to monitor the traffic. This is done via the following command. Take note of the following syntax in the list below to have the command executed correctly:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("application_ID")]),t._v(": is the application ID from the Application tab in the Gateway.")]),t._v(" "),a("li",[a("strong",[t._v("device_EUI")]),t._v(": is the Device EUI of the RAK811 LoRa® Node")])])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mosquitto_sub -t application/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("application_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/device/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("device_EUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/rx -v\n")])])]),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/rak-gateway-mesh/app-id.jpg",width:"100%","figure-number":"1",caption:"Application ID"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("After executing the command, you need to send some data via the RAK Serial Port Tool. Use the command below to send an uplink frame on Frame port 1, with the Payload 1110:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+send=lora:1:1110\n")])])]),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/rak-gateway-mesh/test-uplink.jpg",width:"100%","figure-number":"2",caption:"Test Uplink (Application)"}}),t._v(" "),a("ul",[a("li",[t._v("Now if you look at the three windows in the image above, in the RAK Serial Port Tool, Live Device Data and the CLI of the Raspberry, you will see that the message arriving is displayed.")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("You can also monitor the Gateway traffic itself. You can do this via the command. Take note of the following syntax in the list below to have the command executed correctly:")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),a("p",[t._v("eui: is the Gateway EUI")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mosquitto_sub -t gateway/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("eui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/rx -v\n")])])]),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/rak-gateway-mesh/app-test-gateway.jpg",width:"100%","figure-number":"3",caption:"Test Uplink (Gateway)"}}),t._v(" "),a("ul",[a("li",[t._v("This is very convenient as you have three ways to monitor and you can see the metadata and payload in both the Gateway and via the MQTT Broker.")])]),t._v(" "),a("h2",{attrs:{id:"downlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downlink"}},[t._v("#")]),t._v(" Downlink")]),t._v(" "),a("p",[t._v("There is a convenient tool in the Built-in LoRa® Server for sending a Downlink frame.")]),t._v(" "),a("ol",[a("li",[t._v("You can find it in the Device tab in the LoRa® Network Server section. You can choose your Type of frame (confirmed/unconfirmed), the Frame port and the Hex Data shown in the image below:")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/rak-gateway-mesh/downlink-tool.jpg",width:"100%","figure-number":"4",caption:"LoRa® Network Server Device Downlink Tool"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Once you schedule a message for downlink, it will be displayed in the Live Device Data window. Upon sending the next uplink via the RAK Serial Port Tool you will also see it there, as it needs an uplink frame in order to send the downlink in the RX1 window shown in the image below.")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/rak-gateway-mesh/downlink-frame.jpg",width:"100%","figure-number":"5",caption:"Received Downlink Frame"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("If you want to test the Gateway downlink via the external MQTT Broker, you need to first create a json file which you will be sensing your data in. Below is what the file formatting structure needs to look like:")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),a("ul",[a("li",[t._v('"'),a("strong",[t._v("confirmed")]),t._v('": '),a("strong",[t._v("true")]),t._v(" – This is the LoRa® frame type. True (confirmed), False (unconfirmed)")]),t._v(" "),a("li",[t._v('"'),a("strong",[t._v("data")]),t._v('": "'),a("strong",[t._v("TEST")]),t._v('" – example data to be sent')]),t._v(" "),a("li",[t._v('"'),a("strong",[t._v("fPort")]),t._v('": '),a("strong",[t._v("10")]),t._v(" – the Frame Port Number")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirmed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fPort"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1001"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),a("p",[t._v("You need to have a "),a("strong",[t._v("Base64")]),t._v(" encoded "),a("strong",[t._v("HEX data")]),t._v(" for the above to work.")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Create the file, for example with the following command and copy the data in discussed above:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" test.json\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("After you have created the file, you need to schedule it for downlink. This means that you have to publish it via Mosquitto with the command:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mosquito_pub application/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("application_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("/device/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("device_EUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/ tx –f test.json\n")])])]),a("ul",[a("li",[t._v("The packet will be scheduled for downlink, which you can see in the Gateway Packet logger.")]),t._v(" "),a("li",[t._v("When the next uplink frame that comes for the Application/Device specified by the "),a("strong",[t._v("application_ID")]),t._v(" and "),a("strong",[t._v("device_EUI")]),t._v(" is received, the Gateway will send the data in the RX1 window to the node. You should have a response similar to the one in "),a("strong",[t._v("Figure 5")]),t._v(".")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);