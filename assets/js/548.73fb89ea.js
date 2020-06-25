(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{887:function(e,t,a){"use strict";a.r(t);var n=a(18),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"eu868-spectrum-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eu868-spectrum-settings"}},[e._v("#")]),e._v(" EU868 Spectrum Settings")]),e._v(" "),a("p",[e._v("Let us take as an example the "),a("strong",[e._v("EU863-870 frequency band")]),e._v(". When accessing the Web Management Platform, there is a template for it that you can\nimport directly which would not need to set every channel manually. However, the way it has been configured is in accordance with principles that apply for any band.")]),e._v(" "),a("h2",{attrs:{id:"center-frequency-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#center-frequency-settings"}},[e._v("#")]),e._v(" Center Frequency Settings")]),e._v(" "),a("ol",[a("li",[e._v("Set the Center Frequencies for the two Radios")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("RX Channels")]),e._v(" "),a("th",[e._v("Frequency(Hz)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Radio 0")]),e._v(" Center Frequency")]),e._v(" "),a("td",[e._v("867500000 (867.5 MHz)")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Radio 1")]),e._v(" Center Frequency")]),e._v(" "),a("td",[e._v("868500000 (868.5 MHz)")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set the "),a("strong",[e._v("Minimum")]),e._v(" and "),a("strong",[e._v("Maximum")]),e._v(" frequency range of Radio")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TX Channels")]),e._v(" "),a("th",[e._v("Frequency (Hz)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Radio 0")]),e._v(" Tx Minimum Frequency")]),e._v(" "),a("td",[e._v("863000000 (863 MHz)")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Radio 1")]),e._v(" Tx Maximum Frequency")]),e._v(" "),a("td",[e._v("870000000 (870 MHz)")])])])]),e._v(" "),a("ul",[a("li",[e._v("The image below shows what the values for the EU863-870 band should be.\n"),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-eu868/eu868freqtemplate.png",width:"75%","figure-number":"1",caption:"Default Frequency Template in the Web Management Platform"}})],1)]),e._v(" "),a("h2",{attrs:{id:"radio-channel-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-channel-selection"}},[e._v("#")]),e._v(" Radio/Channel Selection")]),e._v(" "),a("p",[e._v("Let us have a summary of the parameters that can be seen in the image below, which is below the Radio\n0 and Radio 1 frequency fields we discussed in the previous section.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/lora-spectrum-eu868/channel-panel.png",width:"100%","figure-number":"2",caption:"Concentrator Channel Panel"}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Chain. ID")]),e._v(" "),a("td",[e._v("Unique identifier of the channel (8 Multi-SF Channels, 1 LoRa Standard, 1 FSK)")])]),e._v(" "),a("tr",[a("td",[e._v("Enable")]),e._v(" "),a("td",[e._v("Slider for turning a channel on/off")])]),e._v(" "),a("tr",[a("td",[e._v("Radio")]),e._v(" "),a("td",[e._v("The Radio the channel will be assigned to (max 5 per Radio)")])]),e._v(" "),a("tr",[a("td",[e._v("If [Hz]")]),e._v(" "),a("td",[e._v("The frequency offset from the center frequency for the given channel")])]),e._v(" "),a("tr",[a("td",[e._v("Freq [Hz]")]),e._v(" "),a("td",[e._v("The resulting frequency for the channel after summing the center frequency with the If field value")])]),e._v(" "),a("tr",[a("td",[e._v("Bandwidth [KHz]")]),e._v(" "),a("td",[e._v("This is only selectable for the LoRa® Standard and FSK channels. The MultiSF are static")])]),e._v(" "),a("tr",[a("td",[e._v("Datarate")]),e._v(" "),a("td",[e._v("Essentially this is the Spreading Factor (SF) as it is directly related to the bitwise data rate. The MultiSF channels can dynamically use any of the available SFs (SF7 – SF12). The Standard LoRa® channel has to have a single value assigned (SF7 - SF12). The FSK channel has a field with a numeric value to be entered in bps. In order to have each channel at the desired frequency the user needs to set the appropriate offset from the central frequency. This way you can end up with a number of channels spread above and below the center frequency")])])])]),e._v(" "),a("h2",{attrs:{id:"offset-frequency-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-frequency-settings"}},[e._v("#")]),e._v(" Offset Frequency Settings")]),e._v(" "),a("p",[e._v("The (The Things Network) TTN Frequency Plan for the EU863-868 region is listed below. You may check other (The Things Network) TTN "),a("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frequency Plan Documentations"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"uplink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uplink"}},[e._v("#")]),e._v(" Uplink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. 868.1 - SF7BW125 to SF12BW125 \n2. 868.3 - SF7BW125 to SF12BW125 and SF7BW250\n3. 868.5 - SF7BW125 to SF12BW125 \n4. 867.1 - SF7BW125 to SF12BW125 \n5. 867.3 - SF7BW125 to SF12BW125 \n6. 867.5 - SF7BW125 to SF12BW125 \n7. 867.7 - SF7BW125 to SF12BW125 \n8. 867.9 - SF7BW125 to SF12BW125 \n9. 868.8 - FSK\n")])])]),a("h3",{attrs:{id:"downlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downlink"}},[e._v("#")]),e._v(" Downlink")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("* Uplink channels 1-9 (RX1) \n* 869.525 - SF9BW125 (RX2 downlink only)\n")])])]),a("p",[e._v("With the Frequency Plan provided by The Things Network (TTN) it is now easy to see why we have chosen the values shown in "),a("a",{attrs:{href:"#setting-the-center-frequencies"}},[e._v("Figure 1: Default Frequency Template in the Web Management Platform")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Two (2) things should be taken into account.\n"),a("ul",[a("li",[e._v("We need to cover the whole spectrum for the "),a("strong",[e._v("Uplink")]),e._v(", from the lowest to the highest frequency.")]),e._v(" "),a("li",[e._v("Additionally, we need to have the 5 channels per radio to be as close as possible with each other. So, we would group the Radios by frequency and not by number of channels.")])])])]),e._v(" "),a("p",[e._v("For the aforementioned reason, "),a("strong",[e._v("TTN channels 1,2,3,9")]),e._v(" should be assigned to the "),a("strong",[e._v("first Radio (Radio 0)")]),e._v(" (additionally there is one more channel, number 2, but with SF7 and 250KHz bandwidth). The "),a("strong",[e._v("second Radio (Radio 1)")]),e._v(" can get the other "),a("strong",[e._v("five channels 4,5,6,7,8")]),e._v(".")]),e._v(" "),a("p",[e._v("Now, in order to keep the bandwidth tight, we pick a channel in each of the two Radio ranges\nas close as possible to the middle. Ideally, as we have five channels, this would be the 3rd one. The "),a("strong",[e._v("center frequency channels")]),e._v(" are than "),a("strong",[e._v("TTN channels 3 and 6")]),e._v(". This leads us to the center frequencies\nthat are in "),a("strong",[e._v("Figure 1")]),e._v(": Default Frequency Template in the Web Management Platform. As for the Uplink, we simply need to cover the whole band, in this case\n863 MHz to 870 MHz.")]),e._v(" "),a("h2",{attrs:{id:"offset-frequency-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-frequency-calculation"}},[e._v("#")]),e._v(" Offset Frequency Calculation")]),e._v(" "),a("p",[e._v("Now we can start calculating the frequency offset we need to have from the center frequency\nfor each channel. We will use the following formula:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[a("strong",[e._v("If")]),e._v(" = "),a("strong",[e._v("MultiSF")]),e._v(" - "),a("strong",[e._v("Radio Freq")])])]),e._v(" "),a("h3",{attrs:{id:"radio-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-1"}},[e._v("#")]),e._v(" RADIO 1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. MultiSF 0 = TTN 1 = 868100000 Hz\n     If 0 = MultiSF 0 - Radio 1 Freq = 868100000 – 868500000 = -400000 Hz\n2. MultiSF 1 = TTN 2 = 868300000 Hz \n     If 1 = MultiSF 1 - Radio 1 Freq = 868300000 – 868500000 = -200000 Hz\n3. MultiSF 2 = TTN 3 = 868500000 Hz \n     If 2 = MultiSF 2 - Radio 1 Freq = 868500000 – 868500000 = 0 Hz\n")])])]),a("p",[e._v("Those are the first 3 TTN channels. The next channel however is at a lower frequency than all\nthe previous ones. Thus, it will be assigned to Radio 0")]),e._v(" "),a("h3",{attrs:{id:"radio-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-0"}},[e._v("#")]),e._v(" RADIO 0")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. MultiSF 3 = TTN 4 = 867100000 Hz \n    If 3 = MultiSF 3 - Radio 0 Freq = 867100000 – 867500000 = -400000 Hz \n2. MultiSF 4 = TTN 5 = 867300000 Hz \n    If 4 = MultiSF 4 - Radio 0 Freq = 867300000 – 867500000 = -200000 Hz \n3. MultiSF 5 = TTN 6 = 867500000 Hz \n    If 5 = MultiSF 5 - Radio 0 Freq = 867500000 – 867500000 = 0 Hz\n4. MultiSF 6 = TTN 7 = 867700000 Hz\n    If 6 = MultiSF 6 - Radio 0 Freq = 867700000 – 867500000 = 200000 Hz\n5. MultiSF 7 = TTN 8 = 867900000 Hz \n    If 7 = MultiSF 7 - Radio 0 Freq = 867900000 – 867500000 = 400000 Hz\n")])])]),a("p",[e._v("Finally, we have all the If frequency values and we only need plug them in the fields to get the\nTTN EU863-868 Frequency Plan through Web Management Platform")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("Do not forget to manually set the Bandwidth and DataRate of the LoRa std at 250K Hz (SF7) and FSK at 125K Hz (50000 bps).")])]),e._v(" "),a("p",[e._v("This concludes setting up the two Radios with the appropriated frequencies, bandwidths and\ndata rates.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);