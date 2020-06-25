(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{888:function(e,t,a){"use strict";a.r(t);var n=a(18),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kr920-spectrum-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kr920-spectrum-settings"}},[e._v("#")]),e._v(" KR920 Spectrum Settings")]),e._v(" "),a("p",[e._v("Let us take as an example the "),a("strong",[e._v("KR920-923 frequency band")]),e._v(". When accessing the Web Management Platform, there is a template for it that you can\nimport directly which would not need to set every channel manually. However, the way it has been configured is in accordance with principles that apply for any band.")]),e._v(" "),a("h2",{attrs:{id:"center-frequency-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#center-frequency-settings"}},[e._v("#")]),e._v(" Center Frequency Settings")]),e._v(" "),a("ol",[a("li",[e._v("Sett the Center Frequencies for the two Radios")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("RX Channels")]),e._v(" "),a("th",[e._v("Frequency (Hz)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Radio 0")]),e._v(" Center Frequency")]),e._v(" "),a("td",[e._v("922500000 (922.5 MHz)")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Radio 1")]),e._v(" Center Frequency")]),e._v(" "),a("td",[e._v("923300000 (923.3 MHz)")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set the "),a("strong",[e._v("Minimum")]),e._v(" and "),a("strong",[e._v("Maximum")]),e._v(" frequency range of Radio")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TX Channels")]),e._v(" "),a("th",[e._v("Frequency (Hz)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Radio 0 Tx")]),e._v(" Minimum Frequency")]),e._v(" "),a("td",[e._v("920000000 (920 MHz)")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Radio 1 Tx")]),e._v(" Maximum Frequency")]),e._v(" "),a("td",[e._v("925000000 (925 MHz)")])])])]),e._v(" "),a("ul",[a("li",[e._v("The figures below shows what the values for the KR920-923 frequency band should be:\n"),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-kr920/kr920_concentrator0.png",width:"75%","figure-number":"1",caption:"Concentrator 0 Frequency Range"}})],1)]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-kr920/kr920_concentrator1.png",width:"75%","figure-number":"2",caption:"Concentrator 1 Frequency Range"}}),e._v(" "),a("h2",{attrs:{id:"radio-channel-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-channel-selection"}},[e._v("#")]),e._v(" Radio/Channel Selection")]),e._v(" "),a("p",[e._v("Let us have a summary of the parameters that can be seen in the image below, which is below the Radio\n0 and Radio 1 frequency fields we talked about in the previous section.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-kr920/concentrator0_panel.png",width:"100%","figure-number":"3",caption:"Concentrator 0 Settings"}}),e._v(" "),a("p",[e._v("The same summary applies to Concentrator Module 1 in the image below:")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-kr920/concentrator1_panel.png",width:"100%","figure-number":"4",caption:"Concentrator 1 Settings"}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Chain. ID")]),e._v(" "),a("td",[e._v("Unique identifier of the channel (8 Multi-SF Channels, 1 LoRa Standard, 1 FSK)")])]),e._v(" "),a("tr",[a("td",[e._v("Enable")]),e._v(" "),a("td",[e._v("Slider for turning a channel on/off")])]),e._v(" "),a("tr",[a("td",[e._v("Radio")]),e._v(" "),a("td",[e._v("The Radio the channel will be assigned to (max 5 per Radio)")])]),e._v(" "),a("tr",[a("td",[e._v("If [Hz]")]),e._v(" "),a("td",[e._v("The frequency offset from the center frequency for the given channel")])]),e._v(" "),a("tr",[a("td",[e._v("Freq [Hz]")]),e._v(" "),a("td",[e._v("The resulting frequency for the channel after summing the center frequency with the If field value")])]),e._v(" "),a("tr",[a("td",[e._v("Bandwidth [KHz]")]),e._v(" "),a("td",[e._v("This is only selectable for the LoRa® Standard and FSK channels. The MultiSF are static")])]),e._v(" "),a("tr",[a("td",[e._v("Datarate")]),e._v(" "),a("td",[e._v("Essentially this is the Spreading Factor (SF as it is directly related to the bitwise data rate. The MultiSF channels can dynamically use any of the available SFs (SF7 – SF12). The Standard LoRa® channel has to have a single value assigned (SF7 - SF12). The FSK channel has a field with a numeric value to be entered in bps In order to have each channel at the desired frequency the user needs to set the appropriate offset from the central frequency. This way you can end up with a number of channels spread above and below the center frequency")])])])]),e._v(" "),a("h2",{attrs:{id:"offset-frequency-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-frequency-settings"}},[e._v("#")]),e._v(" Offset Frequency Settings")]),e._v(" "),a("p",[e._v("In Accordance with the "),a("a",{attrs:{href:"https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoRa Alliance Regional Parameters Documentation"),a("OutboundLink")],1),e._v(", we have the\nfollowing two frequency sub-bands, where channels 1, 2, and 3 are the default ones and need\nto be available in any equipment using the band.")]),e._v(" "),a("h3",{attrs:{id:"sub-band-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sub-band-1"}},[e._v("#")]),e._v(" Sub-Band 1")]),e._v(" "),a("h6",{attrs:{id:"uplink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uplink"}},[e._v("#")]),e._v(" Uplink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. 922.1 - SF7BW125 to SF12BW125\n2. 922.3 - SF7BW125 to SF12BW125\n3. 922.5 - SF7BW125 to SF12BW125\n4. 922.7 - SF7BW125 to SF12BW125\n5. 922.9 - SF7BW125 to SF12BW125\n6. 923.1 - SF7BW125 to SF12BW125\n7. 923.3 - SF7BW125 to SF12BW125\n")])])]),a("h6",{attrs:{id:"downlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downlink"}},[e._v("#")]),e._v(" Downlink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Uplink channels 1-9 (RX1)\n")])])]),a("h3",{attrs:{id:"sub-band-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sub-band-2"}},[e._v("#")]),e._v(" Sub-Band 2")]),e._v(" "),a("h6",{attrs:{id:"uplink-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uplink-2"}},[e._v("#")]),e._v(" Uplink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("8. 920.9 - SF7BW125 to SF12BW125\n9. 921.1 - SF7BW125 to SF12BW125\n10. 921.3 - SF7BW125 to SF12BW125\n11. 921.5 - SF7BW125 to SF12BW125\n12. 921.7 - SF7BW125 to SF12BW125\n13. 921.9 - SF7BW125 to SF12BW125\n")])])]),a("h6",{attrs:{id:"downlink-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downlink-2"}},[e._v("#")]),e._v(" Downlink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Uplink channels 1-9 (RX1)\n")])])]),a("p",[e._v("With the "),a("a",{attrs:{href:"https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frequency Plan"),a("OutboundLink")],1),e._v(" provided by LoRa Alliance®, it is now easy to see why we have chosen the values shown in Figure 1: Concentrator 0 Frequency Range and Figure 2: Concentrator 1 Frequency Range.")]),e._v(" "),a("ul",[a("li",[e._v("Two (2) things should be taken into account.\n"),a("ul",[a("li",[e._v("We need to cover the whole spectrum for the "),a("strong",[e._v("Uplink")]),e._v(", from the lowest to the highest frequency.")]),e._v(" "),a("li",[e._v("Additionally, we need to have the 5 channels per radio to be as close as possible with each other. So, we would group the Radios by frequency and not by number of channels.")])])])]),e._v(" "),a("p",[e._v("For the aforementioned reason, "),a("strong",[e._v("channels 1,2,3,4,")]),e._v(" and "),a("strong",[e._v("5")]),e._v(" should be assigned to the "),a("strong",[e._v("first Radio (Radio 0)")]),e._v(". The "),a("strong",[e._v("second Radio (Radio 1)")]),e._v(" can get the other two "),a("strong",[e._v("channels 6")]),e._v(", and\n"),a("strong",[e._v("7")]),e._v(".")]),e._v(" "),a("p",[e._v("Now, in order to keep the bandwidth tight, we pick a channel in each of the two Radio ranges\nas close as possible to the middle. Ideally, as we have five channels (Radio 0), this would be the 3rd one. The "),a("strong",[e._v("center frequency channels")]),e._v(" are then "),a("strong",[e._v("channels 3")]),e._v(" and "),a("strong",[e._v("7")]),e._v(". This leads us to the center frequencies\nthat are in Figure 1: Concentrator 0 Frequency Range. As for the Downlink, we simply need to cover the whole band, in this case\n920 MHz to 925 MHz.")]),e._v(" "),a("h2",{attrs:{id:"offset-frequency-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-frequency-calculation"}},[e._v("#")]),e._v(" Offset Frequency Calculation")]),e._v(" "),a("p",[e._v("Now we can start calculating the frequency offset we need to have from the center frequency\nfor each channel. We will use the following formula:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[a("strong",[e._v("If")]),e._v(" = "),a("strong",[e._v("MultiSF")]),e._v(" - "),a("strong",[e._v("Radio Freq")])])]),e._v(" "),a("h3",{attrs:{id:"concentrator-module-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concentrator-module-0"}},[e._v("#")]),e._v(" Concentrator Module 0")]),e._v(" "),a("h6",{attrs:{id:"radio-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-0"}},[e._v("#")]),e._v(" RADIO 0")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("MultiSF 0 = CH 1 = 922100000 Hz \n If 0 = MultiSF 0 - Radio 0 Freq = 922100000 – 922500000 = -400000 Hz \nMultiSF 1 = CH 2 = 922300000 Hz \n If 1 = MultiSF 1 - Radio 0 Freq = 922300000 – 922500000 = -200000 Hz \nMultiSF 2 = CH 3 = 922500000 Hz \n If 2 = MultiSF 2 - Radio 0 Freq = 922500000 – 922500000 = 0 Hz \nMultiSF 3 = CH 4 = 922700000 Hz \n If 3 = MultiSF 3 - Radio 0 Freq = 922700000 – 922500000 = 200000 Hz \nMultiSF 4 = CH 5 = 922900000 Hz \n If 4 = MultiSF 4 - Radio 0 Freq = 922900000 – 922500000 = 400000 Hz \n")])])]),a("h6",{attrs:{id:"radio-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-1"}},[e._v("#")]),e._v(" RADIO 1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("MultiSF 5 = CH 6 = 923100000 Hz \n If 5 = MultiSF 5 - Radio 1 Freq = 923100000 Hz – 923300000 = -200000 Hz \nMultiSF 6 = CH 7 = 923300000 Hz \n If 6 = MultiSF 6 - Radio 1 Freq = 923300000 Hz – 923300000 = 0 Hz\n")])])]),a("p",[e._v("Finally we have all the If frequency values and we only need plug them in the fields to get the\nTTN KR920-923 frequency plan.")]),e._v(" "),a("h3",{attrs:{id:"concentrator-module-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concentrator-module-1"}},[e._v("#")]),e._v(" Concentrator Module 1")]),e._v(" "),a("h6",{attrs:{id:"radio-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-0-2"}},[e._v("#")]),e._v(" RADIO 0")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("MultiSF 0 = CH 1 = 920900000 Hz \n If 0 = MultiSF 0 - Radio 0 Freq = 920900000 – 921100000 = -200000 Hz \nMultiSF 1 = CH 2 = 921100000 Hz \n If 1 = MultiSF 1 - Radio 0 Freq = 921100000 – 921100000 = 0 Hz \nMultiSF 2 = CH 3 = 921300000 Hz \n If 2 = MultiSF 2 - Radio 0 Freq = 921300000 – 921100000 = 200000 Hz \n")])])]),a("h6",{attrs:{id:"radio-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-1-2"}},[e._v("#")]),e._v(" RADIO 1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("MultiSF 3 = CH 4 = 921500000 Hz \n If 3 = MultiSF 3 - Radio 1 Freq = 921500000 – 921700000 = -200000 Hz \nMultiSF 4 = CH 5 = 921700000 Hz \n If 4 = MultiSF 4 - Radio 1 Freq = 921700000 – 921700000 = 0 Hz \nMultiSF 5 = CH 6 = 922900000 Hz \n If 5 = MultiSF 5 - Radio 1 Freq = 921900000 – 921700000 = 200000 Hz\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("Remember Band 1 is limited to 14 dBm maximum output power, Band 2 is limited to 10 dBm. The maximum downlink power of the RAK7249 Macro Outdoor Gateway is 23 dBm.")])]),e._v(" "),a("p",[e._v("This concludes setting up the two Radios with the appropriated frequencies, bandwidths and\ndata rates.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);