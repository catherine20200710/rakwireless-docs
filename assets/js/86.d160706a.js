(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{424:function(e,a,t){"use strict";t.r(a);var r=t(18),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"lorawan®-systems-network-approach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lorawan®-systems-network-approach"}},[e._v("#")]),e._v(" LoRaWAN® Systems, Network Approach")]),e._v(" "),t("p",[e._v("The use of LoRaWAN® technology can be distinguished in “Public” and “Private” networks. In both cases the usage of a concentrator module is a must if a multichannel performance is sought after. Public networks are operator (e.g. telecom) managed networks whereas private networks are individually managed networks.")]),e._v(" "),t("p",[e._v("LoRaWAN® networks are typically star or multiple star networks where a Gateway relays the packets between the end-nodes and a central network server. For private network approaches the server can also be implemented on the Gateway host.")]),e._v(" "),t("p",[e._v("Due to the long range LoRa provides the connection between the end-nodes and the Gateway (RAK2246) is always a direct link. Repeaters are not common in a LoRaWAN® network.")]),e._v(" "),t("p",[e._v("Depending on the used spreading factor and signal bandwidth different data rates (0.3 kbps to ~22 kbps) and sensitivities down to -142.5 dBm are possible. Spreading factor and signal bandwidth are a trade-off between data rate and communication range.")]),e._v(" "),t("h3",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("The RAK2246 is able to receive on different frequency channels at the same time and is able to demodulate the LoRa signal without knowledge of the used spreading factor of the sending node. Thus, any Gateway using it as its concentrator module has these inherent benefits as well.")]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/datasheet/rak7246g/systems-network-approach/f333yrqj2l328fhmkpaf.png",width:"70%","figure-number":"10",caption:"System Architecture"}}),e._v(" "),t("p",[e._v("Due to the fact that the combination of spreading factors and signal bandwidths results in different data rates the use of “Dynamic Data-Rate Adaption” becomes possible. That means that LoRa nodes a large distance away from the Gateway can use higher spreading factors and therefore have a lower data rate. LoRa nodes which are closer to the concentrator can use lower spreading factors and therefore can increase their data rate.")]),e._v(" "),t("p",[e._v("Due to the fact that spreading factors are orthogonal and the RAK2246 Concentrator can demodulate on 8 channels at the same time, channel capacity of a LoRaWAN Gateway is increased compared to traditional cellular networks.")]),e._v(" "),t("h3",{attrs:{id:"firwmare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firwmare"}},[e._v("#")]),e._v(" Firwmare")]),e._v(" "),t("p",[e._v("The LoRa MAC specification is currently driven by the companies Semtech, IBM and Actility. Currently all available software, firmware and documentation can be found and downloaded from the open source project LoRa-net hosted on "),t("a",{attrs:{href:"https://github.com/Lora-net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Lora-net"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This project considers all parts that are needed to run a network based on LoRa technology. It includes the node firmware (several hardware platforms are supported), the Gateway host software (HAL driver for SX1308, packet forwarder) and a server implementation.")]),e._v(" "),t("p",[e._v("It is highly recommended to utilize the latest HAL as provided by Semtech.")]),e._v(" "),t("h3",{attrs:{id:"configuring-the-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gateway"}},[e._v("#")]),e._v(" Configuring the Gateway")]),e._v(" "),t("p",[e._v("You can login to the Gateway using an SSH client like PuTTY. For more\ndetails on the configuration and management of the Gateway please visit the\nlink below:")]),e._v(" "),t("p",[t("a",{attrs:{href:"/en-us/quick-start-guide/rak7246g"}},[e._v("RAK7246G LPWAN Developer Gateway User Manual")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);