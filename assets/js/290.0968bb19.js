(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{629:function(e,t,i){"use strict";i.r(t);var o=i(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"accessing-the-internet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-internet"}},[e._v("#")]),e._v(" Accessing the Internet")]),e._v(" "),i("p",[e._v("Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" gateway-config\n")])])]),i("p",[e._v("You will now then see a page like the following picture below:")]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/config-options.png",width:"100%","figure-number":"1",caption:"Configuration Options for the Gateway"}}),e._v(" "),i("ol",[i("li",[i("strong",[e._v("Set pi password")]),e._v(" - used to set/change the password of the Gateway.")]),e._v(" "),i("li",[i("strong",[e._v("Set up RAK Gateway LoRa® Concentrator")]),e._v(" - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the gateway will work with.")]),e._v(" "),i("li",[i("strong",[e._v("Restart packet -forwarder")]),e._v(" - used to restart the LoRa® packet forwarded process.")]),e._v(" "),i("li",[i("strong",[e._v("Edit packet-forwarder config")]),e._v("- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.")]),e._v(" "),i("li",[i("strong",[e._v("Configure Wifi")]),e._v(" - used to configure the Wi-Fi settings in order to connect to a network.")]),e._v(" "),i("li",[i("strong",[e._v("Configure LAN")]),e._v(" - used to configure the Ethernet adapter settings.")])]),e._v(" "),i("h2",{attrs:{id:"connect-through-wi-fi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-wi-fi"}},[e._v("#")]),e._v(" Connect through Wi-Fi")]),e._v(" "),i("p",[e._v('If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+ by choosing "'),i("strong",[e._v("5 Configure WIFI")]),e._v('". By default, the RAK7243 LPWAN Developer Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.')]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/wifi-config.png",width:"100%","figure-number":"2",caption:"Configuration options for WIFI"}}),e._v(" "),i("p",[e._v("There are 5 options to choose from in the Wi-Fi configuration menu:")]),e._v(" "),i("ol",[i("li",[i("strong",[e._v("Enable AP Mode/Disable Client Mode")]),e._v(" - the gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).")]),e._v(" "),i("li",[i("strong",[e._v("Enable Client Mode/Disable AP Mode")]),e._v(" - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.")]),e._v(" "),i("li",[i("strong",[e._v("Modify SSID and pwd for AP Mode")]),e._v(" - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.")]),e._v(" "),i("li",[i("strong",[e._v("Add New SSID for Client")]),e._v(" - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.")]),e._v(" "),i("li",[i("strong",[e._v("Change Wi-Fi Country")]),e._v(" - this is used to modify the Resident Country to match with Wi-Fi standards.")])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("⚠️WARNING")]),e._v(" "),i("p",[e._v("In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.")])]),e._v(" "),i("p",[e._v('Once Wi-Fi AP Mode has been disabled by choosing "'),i("strong",[e._v("2 Enable Client Mode/Disable AP Mode")]),e._v('", you can now then connect to a new Wi-Fi Network by choosing "'),i("strong",[e._v("4 Add New SSID for Client")]),e._v('":')]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/wifi-ssid.png",width:"100%","figure-number":"3",caption:"Add a new SSID"}}),e._v(" "),i("ul",[i("li",[e._v("Start by selecting your country of residence:")])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/region.png",width:"100%","figure-number":"4",caption:"Selecting Country of Residence"}}),e._v(" "),i("ul",[i("li",[e._v("Enter the SSID of the network you want to connect:")])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("⚠️WARNING")]),e._v(" "),i("p",[e._v("Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7243 again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the "),i("a",{attrs:{href:"#reverting-to-wi-fi-ap-mode"}},[e._v("Reverting to Wi-Fi AP Mode")]),e._v(" section which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.")])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/set-wifi.png",width:"100%","figure-number":"5",caption:"SID of the Network you want to connect to"}}),e._v(" "),i("ul",[i("li",[e._v("Enter also the password. Just leave it empty if None.")])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/set-password.png",width:"100%","figure-number":"6",caption:"Password of the Wi-Fi"}}),e._v(" "),i("h2",{attrs:{id:"connect-through-ethernet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-ethernet"}},[e._v("#")]),e._v(" Connect through Ethernet")]),e._v(" "),i("p",[e._v("If you want to connect to router through Ethernet Cable, do the following steps:")]),e._v(" "),i("ul",[i("li",[e._v("In the main configuration menu, choose “"),i("strong",[e._v("6 Configure LAN")]),e._v("”. This will let you set up a static IP address for the Gateway’s Ethernet adapter.")]),e._v(" "),i("li",[e._v("Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.")]),e._v(" "),i("li",[e._v("By default, the IP Address of the gateway's Ethernet is "),i("code",[e._v("192.168.10.10")])])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/gateway-eth-ip.png",width:"100%","figure-number":"7",caption:"Default Gateway Ethernet IP Address"}}),e._v(" "),i("ul",[i("li",[e._v("Then configure the IP address of the Router. This is the LAN Interface IP address of the router.")])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/router-eth-ip.png",width:"100%","figure-number":"8",caption:"LAN Interface IP Address of the Router"}}),e._v(" "),i("ul",[i("li",[e._v("Press OK then the success message will appear.")]),e._v(" "),i("li",[e._v('Lastly, reboot the Gateway using the command "'),i("code",[e._v("sudo reboot")]),e._v('" in the command line and it will connect to the router successfully through Ethernet.')])]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),i("h2",{attrs:{id:"optional-configurations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#optional-configurations"}},[e._v("#")]),e._v(" Optional Configurations")]),e._v(" "),i("p",[e._v("These configurations under this section are only optional and situational.")]),e._v(" "),i("h3",{attrs:{id:"reverting-to-wi-fi-ap-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reverting-to-wi-fi-ap-mode"}},[e._v("#")]),e._v(" Reverting to Wi-Fi AP Mode")]),e._v(" "),i("p",[e._v("In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7243 LPWAN Developer Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.")]),e._v(" "),i("ul",[i("li",[e._v("Remove the SD Card from your RAK7243 LPWAN Developer Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:")])]),e._v(" "),i("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/5.accessing the internet/rak-ap-file.png",width:"50%","figure-number":"9",caption:"Creating rak_ap file to your SD Card"}}),e._v(" "),i("ul",[i("li",[e._v('Using your "'),i("strong",[e._v("Command Prompt")]),e._v('" or "'),i("strong",[e._v("Terminal")]),e._v('", navigate to your SD Card and type this command to generate the "'),i("strong",[e._v("rak_ap")]),e._v('" file.')])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("cd > rak_ap\n")])])]),i("ul",[i("li",[e._v("Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your RAK7243 LPWAN Developer Gateway and it should work again in Wi-Fi AP Mode.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);