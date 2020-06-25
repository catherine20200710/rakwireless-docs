(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{613:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-the-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gateway"}},[e._v("#")]),e._v(" Configuring the Gateway")]),e._v(" "),a("p",[e._v("Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" gateway-config\n")])])]),a("p",[e._v("Then, you will see a page the same as figure 1.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/1.configuring-options.png",width:"100%","figure-number":"1",caption:"Configuration Options for the Gateway"}}),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Set pi password")]),e._v(" - used to set/change the password of the gateway.")]),e._v(" "),a("li",[a("strong",[e._v("Set up RAK Gateway LoRa® Concentrator")]),e._v(" - used to configure the frequency, which the gateway will operate on, and the LoRaWAN® Server which the gateway will work with.")]),e._v(" "),a("li",[a("strong",[e._v("Restart packet -forwarder")]),e._v(" - used to restart the LoRa® packet forwarded process.")]),e._v(" "),a("li",[a("strong",[e._v("Edit packet-forwarder config-")]),e._v(" used to open the global_conf.json file, to edit LoRaWAN®  parameters manually.")]),e._v(" "),a("li",[a("strong",[e._v("Configure Wifi")]),e._v(" - used to configure the Wi-Fi settings to connect to a network.")]),e._v(" "),a("li",[a("strong",[e._v("Configure LAN")]),e._v(" - used to configure the Ethernet adapter settings.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("A unique ID will be generated in for gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack).")])]),e._v(" "),a("p",[e._v('There is also another way to get your "Gateway ID", just enter the command below in the command line:')]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" gateway-version\n")])])]),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/2.command-line.png",width:"100%","figure-number":"2",caption:"Gateway ID using the command line"}}),e._v(" "),a("h2",{attrs:{id:"setting-a-new-password-for-the-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-new-password-for-the-gateway"}},[e._v("#")]),e._v(" Setting a new password for the Gateway")]),e._v(" "),a("p",[e._v('It is a good security practice to change the default password "'),a("strong",[e._v("raspberry")]),e._v('" which is the same on all Raspberry Pi devices.')]),e._v(" "),a("ul",[a("li",[e._v('First, choose "1 Set pi password" option referred on figure 3 below.')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/3.set-pi-password.png",width:"100%","figure-number":"3",caption:"Set Pi Password"}}),e._v(" "),a("ul",[a("li",[e._v('Next, press "Yes" and you will be asked to enter your new password twice then press "Enter".')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/4.password-change.png",width:"100%","figure-number":"4",caption:"Confirm Password Change"}}),e._v(" "),a("ul",[a("li",[e._v("Alright, the success message for changing password will then pop up.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/5.successful-password-change.png",width:"100%","figure-number":"5",caption:"Successful Password Change"}}),e._v(" "),a("h2",{attrs:{id:"set-up-rak-gateway-lora®-concentrator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-rak-gateway-lora®-concentrator"}},[e._v("#")]),e._v(" Set up RAK Gateway LoRa® Concentrator")]),e._v(" "),a("p",[e._v("This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing option "),a("strong",[e._v("2 Setup RAK Gateway LoRa® concentrator")]),e._v(".")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/6.choosing-setup-rak-gateway.png",width:"100%","figure-number":"6",caption:"Choosing Setup RAK Gateway LoRa® concentrator"}}),e._v(" "),a("p",[e._v("You can choose one of two supported LoRa® Servers here: "),a("strong",[e._v("TTN")]),e._v(" or\n"),a("strong",[e._v("ChirpStack")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"server-is-ttn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-is-ttn"}},[e._v("#")]),e._v(" Server is TTN")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/7.server-is-ttn.png",width:"100%","figure-number":"7",caption:"Server Is TTN"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("The Things Network (TTN)")]),e._v(": If you choose TTN as the LoRa® Server, you will see the following page. Visit this "),a("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(" for more information on your local TTN frequency plan. This will allow you to choose the correct plan.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/8.ttn-channel.png",width:"100%","figure-number":"8",caption:"Selecting the TTN Channel Plan"}}),e._v(" "),a("p",[e._v("After choosing the correct frequency, the success message will appear as shown in figure 9 below.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/9.frequency-changed.png",width:"100%","figure-number":"9",caption:"Successfully Changed the Frequency"}}),e._v(" "),a("h3",{attrs:{id:"server-is-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-is-chirpstack"}},[e._v("#")]),e._v(" Server is Chirpstack")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/10.server-is-chirpstack.png",width:"100%","figure-number":"10",caption:"Server Is Chirpstack"}}),e._v(" "),a("p",[a("strong",[e._v("ChirpStack")]),e._v(": If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("ChirpStack Channel Plan Configuration")]),e._v(" - used to configure your Regional Frequency Band.")]),e._v(" "),a("li",[a("strong",[e._v("ChirpStack ADR Configure")]),e._v(" -  used to enable/disable the Adaptive Data Rate (ADR)\nfunctionality.")])]),e._v(" "),a("p",[e._v("First, select option 1 for configuring your Regional Frequency Band")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/11.regional-freqband-option.png",width:"100%","figure-number":"11",caption:"Regional Frequency Band Option"}}),e._v(" "),a("p",[e._v("Then, set the IP address of the ChirpStack which you want your gateway to work with:")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/12.default-lora-ip.png",width:"100%","figure-number":"12",caption:"Default LoRaServer IP Address"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("The default IP Address is "),a("strong",[e._v("127.0.0.1")]),e._v(", which means you will be using the Built-in LoRa® Server. If you want to use an independent LoRa® Server running on another device or a cloud based LoRa® Server, you need to set it to the corresponding IP address.")])]),e._v(" "),a("ul",[a("li",[e._v('If you have instead selected "'),a("strong",[e._v("Chirpstack ADR Configure")]),e._v('", you can enable/disable the Adaptive Data Rate (ADR) functionality:')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/3configuring-the-gateway/13.chirpstack-adr.png",width:"100%","figure-number":"13",caption:"Chirpstack ADR Enable/Disable"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);