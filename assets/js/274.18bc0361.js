(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{612:function(t,e,o){"use strict";o.r(e);var i=o(18),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"connecting-to-a-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-network"}},[t._v("#")]),t._v(" Connecting to a Network")]),t._v(" "),o("p",[t._v("If you want to use TTN or an independent ChirpStack, which may be deployed in a local area network or a remote one, you need to connect your Gateway to a networking device that will allow you connectivity to the internet (a router for example). There are 2 options offered for this purpose.")]),t._v(" "),o("h3",{attrs:{id:"connect-through-wi-fi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-wi-fi"}},[t._v("#")]),t._v(" Connect through Wi-Fi")]),t._v(" "),o("p",[t._v('If you want to connect through Wi-Fi, it can easily be done with the wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4 by choosing "'),o("strong",[t._v("5 Configure WIFI")]),t._v('". By default, the RAK2287 Concentrator Module WisLink Series works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.')]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/1.configure-wifi.png",width:"100%","figure-number":"1",caption:"Configuration options for WIFI"}}),t._v(" "),o("p",[t._v("There are 5 options to choose from in the Wi-Fi configuration menu:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Enable AP Mode/Disable Client Mode")]),t._v(" - after rebooting, the gateway will work in Wi-Fi Access Point Mode while the Wi-Fi Client Mode will be disabled (this is the default mode).")]),t._v(" "),o("li",[o("strong",[t._v("Enable Client Mode/Disable AP Mode")]),t._v(" - after rebooting, the gateway will work in Wi-Fi Client mode, while Wi-FI AP Mode will be disabled.")]),t._v(" "),o("li",[o("strong",[t._v("Modify SSID and pwd for AP Mode")]),t._v(" - used to modify the SSID and password of the Wi-Fi AP. It only works if the Wi-Fi AP Mode is enabled.")]),t._v(" "),o("li",[o("strong",[t._v("Add New SSID for Client")]),t._v(" - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.")]),t._v(" "),o("li",[o("strong",[t._v("Change Wi-Fi Country")]),t._v(" - this is used to modify the Resident Country to match with Wi-Fi standards.")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),o("p",[t._v("To enable Wi-Fi Client Mode, you have to disable first the AP Mode.")])]),t._v(" "),o("p",[t._v('Once Wi-Fi AP Mode has been disabled by choosing "'),o("strong",[t._v("2 Enable Client Mode/Disable AP Mode")]),t._v('", you can now then connect to a new Wi-Fi Network by choosing "'),o("strong",[t._v("4 Add New SSID for Client")]),t._v('":')]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/2.add-ssid.png",width:"100%","figure-number":"2",caption:"Add a new SSID"}}),t._v(" "),o("ul",[o("li",[t._v("Start by selecting your country of residence:")])]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/3.country-selection.png",width:"100%","figure-number":"3",caption:"Selecting Country of Residence"}}),t._v(" "),o("ul",[o("li",[t._v("Enter the SSID of the network you want to connect:")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),o("p",[t._v("Make sure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK2287 Concentrator Module WisLink Series again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the procedure listed in "),o("RouterLink",{attrs:{to:"/en-us/quick-start-guide/gateways/rak2287/connecting-to-a-network.html#reverting-to-wi-fi-ap-mode"}},[t._v("Connecting to a Network")]),t._v(" document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.")],1)]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/4.ssid-of-the-network.png",width:"100%","figure-number":"4",caption:"SSID of the Network you want to connect to."}}),t._v(" "),o("ul",[o("li",[t._v("Enter also the password. Just leave it empty if None.")])]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/5.wifi-password.png",width:"100%","figure-number":"5",caption:"Password of the Wi-Fi"}}),t._v(" "),o("h3",{attrs:{id:"connect-through-ethernet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-ethernet"}},[t._v("#")]),t._v(" Connect through Ethernet")]),t._v(" "),o("p",[t._v("If you want to connect to the router through Ethernet Cable, do the following steps:")]),t._v(" "),o("ul",[o("li",[t._v("In the main configuration menu, choose "),o("strong",[t._v("“6 Configure LAN”")]),t._v(". This will let you set up a static IP address for the Gateway’s Ethernet adapter.")]),t._v(" "),o("li",[t._v("Just fill a static IP Address according to the IP address of the router you want to connect. Note that the LoRaWAN® gateway and the router must be in the same network segment, otherwise the connection fails.")]),t._v(" "),o("li",[t._v("By default, the IP Address of the gateway's Ethernet is "),o("code",[t._v("192.168.10.10")]),t._v(".")])]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/6.ethernet-ip.png",width:"100%","figure-number":"6",caption:"Default gateway Ethernet IP Address"}}),t._v(" "),o("ul",[o("li",[t._v("Then configure the IP address of the Router. This is the LAN Interface IP address of the router.")])]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/7.lan-interface.png",width:"100%","figure-number":"7",caption:"LAN Interface IP Address of the Router"}}),t._v(" "),o("ul",[o("li",[t._v("Press OK and a success message appear.")]),t._v(" "),o("li",[t._v('Lastly, reboot the gateway using the command "'),o("code",[t._v("sudo reboot")]),t._v('" in the command line and it will connect to the router successfully through Ethernet.')])]),t._v(" "),o("h2",{attrs:{id:"optional-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-configurations"}},[t._v("#")]),t._v(" Optional Configurations")]),t._v(" "),o("p",[t._v("The configurations in this section are optional and situational.")]),t._v(" "),o("h3",{attrs:{id:"reverting-to-wi-fi-ap-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reverting-to-wi-fi-ap-mode"}},[t._v("#")]),t._v(" Reverting to Wi-Fi AP Mode")]),t._v(" "),o("p",[t._v("If you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK2287 Concentrator Module WisLink Series to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.")]),t._v(" "),o("ul",[o("li",[t._v("Remove the SD Card from your RAK2287 Concentrator Module WisLink Series and insert it into your PC. Your PC should be able to detect it the same as figure 8 below.")])]),t._v(" "),o("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/8.create-rak-ap.png",width:"50%","figure-number":"8",caption:"Creating rak_ap file to your SD Card"}}),t._v(" "),o("ul",[o("li",[t._v('Using your "'),o("strong",[t._v("Command Prompt")]),t._v('" or "'),o("strong",[t._v("Terminal")]),t._v('", navigate to your SD Card and type this command to generate the "'),o("strong",[t._v("rak_ap")]),t._v('" file.')])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd > rak_ap\n")])])]),o("ul",[o("li",[t._v("Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK2287 Concentrator Module WisLink Series and it should work again in Wi-Fi AP Mode.")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);