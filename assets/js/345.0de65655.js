(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{684:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"connecting-cellular-network-and-sending-packet-over-cellular"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-cellular-network-and-sending-packet-over-cellular"}},[e._v("#")]),e._v(" Connecting Cellular Network and Sending Packet over Cellular")]),e._v(" "),r("p",[e._v("In this section, you will learn more on how to connect Cellular Network of your device.")]),e._v(" "),r("ul",[r("li",[e._v("To start with,  insert a SIM card into your RAK5010. For this document,  i’ll use a China Mobile SIM card as an example.")])]),e._v(" "),r("p",[e._v("As describe in the previous section, we learned that there are three ways to configure our RAK5010: through UART, BLE and microUSB. For this section,  I’ll use UART to configure RAK5010 as an example, but surely you can use BLE or microUSB to configure it too.")]),e._v(" "),r("p",[e._v("OK! Let’s start configuring our RAK5010 through UART.")]),e._v(" "),r("p",[e._v("There are two ways to\nconnect Cellular network and send packet over Cellular: Manual and Automatic.")]),e._v(" "),r("h2",{attrs:{id:"_1-connecting-cellular-network-and-sending-packet-over-cellular-manually"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-connecting-cellular-network-and-sending-packet-over-cellular-manually"}},[e._v("#")]),e._v(" 1 . Connecting Cellular Network and Sending Packet over Cellular Manually")]),e._v(" "),r("ul",[r("li",[e._v("To begin with, send the AT command "),r("code",[e._v("at+scan=cellular")]),e._v(" to scan Cellular networks:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/ldd1gtipgjw2rdimcm06.jpg",width:"50%","figure-number":"1",caption:"Scanning for Cellular Networks"}}),e._v(" "),r("ul",[r("li",[e._v("Wait for about 30 seconds, then you will see the following output in the serial port tool:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/o1yixmjvgqaheaczyyvb.jpg",width:"50%","figure-number":"2",caption:"Scanned Cellular Network shown in Serial Port"}}),e._v(" "),r("ul",[r("li",[e._v("As you see, RAK5010 has scanned around Cellular network and show them in the serial port tool.")])]),e._v(" "),r("p",[e._v("Then, use the AT command "),r("code",[e._v('at+set_config=cellular: (AT+COPS=1,0,"CHINA MOBILE",0)')]),e._v(" to configure the operator information:")]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/s397ccuztyjg01v9oe57.jpg",width:"50%","figure-number":"3",caption:"Configuring the Operator"}}),e._v(" "),r("p",[e._v("Now, continue to configure by using the AT command "),r("code",[e._v('at+set_config=cellular: (AT+QICSGP=1,1,"CMCC","","",1)')]),e._v(" and "),r("code",[e._v("at+set_config=cellular:(AT+QIACT=1)")]),e._v(" :")]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/viol2m3ggyntrqdrju3l.jpg",width:"50%","figure-number":"4",caption:"Configuring the Cellular Network"}}),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/kbfkkzhigynpqvvserph.jpg",width:"50%","figure-number":"5",caption:"Configuring the Cellular Network"}}),e._v(" "),r("ul",[r("li",[e._v("Then, set the IP address of the server which will receive the packet sending from RAK5010:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/wfgibirfba6br8wfddeo.jpg",width:"50%","figure-number":"6",caption:"Configuring the IP Address of the Server"}}),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE:")]),e._v(" "),r("p",[e._v("This IP address is just used for example, and it is my testing server actually. For your configuration, use your own server IP address.")])]),e._v(" "),r("ul",[r("li",[e._v("OK, we’ve configured RAK5010 correctly.")])]),e._v(" "),r("p",[e._v("Next, let’s try sending a packet manually over Cellular.")]),e._v(" "),r("ul",[r("li",[e._v("You can use the AT command "),r("code",[e._v("at+send=cellular:XXX")]),e._v(" to send data over Cellular:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/qliw07b9ag9om2ytbi6k.jpg",width:"50%","figure-number":"7",caption:"Sending Data over Cellular"}}),e._v(" "),r("ul",[r("li",[e._v("As you can see, the data we send is “"),r("strong",[e._v("123456")]),e._v("”.")])]),e._v(" "),r("p",[e._v("Now, let’s check it on our receiving server:")]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/muvnk5vma57gwns6apo9.jpg",width:"100%","figure-number":"8",caption:"Received Data shown in the terminal"}}),e._v(" "),r("p",[e._v("Great! As you see in the "),r("strong",[e._v("Figure 8")]),e._v(", the server has received the packet successfully, and the data sent is “"),r("strong",[e._v("123456")]),e._v("” which is same with the one we just sent out.")]),e._v(" "),r("h2",{attrs:{id:"_2-connect-cellular-network-and-send-packet-automatically"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-connect-cellular-network-and-send-packet-automatically"}},[e._v("#")]),e._v(" 2 . Connect Cellular Network and Send Packet Automatically")]),e._v(" "),r("p",[e._v("We have already discussed the manual process, now, we'll learn about the "),r("strong",[e._v("automatic")]),e._v(" way of connecting and sending data with Cellular Network. First, configure the parameters for the Cellular operator information and the receiving server information as follows (I use China Mobile SIM card and network for example):")]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/nmsor2nxqikesbzduzdj.jpg",width:"50%","figure-number":"9",caption:"Configuring the Cellular Network Parameters"}}),e._v(" "),r("ul",[r("li",[e._v("Then, set the interval for sending loop as follow:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/usvaf8prsuthawdgwv2t.jpg",width:"50%","figure-number":"10",caption:"Setting the Loop Intervals"}}),e._v(" "),r("p",[e._v("As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer "),r("a",{attrs:{href:"at-commands"}},[e._v("here")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("Now, restart RAK5010 by sending the AT command "),r("code",[e._v("at+set_config=device:restart")]),e._v(":")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/b5oewg5p13m9pvimgcr0.jpg",width:"50%","figure-number":"11",caption:"Restarting your RAK5010"}}),e._v(" "),r("p",[e._v("After restarting, RAK5010 will connect the Cellular network which you just set and send packet of sensor’s data automatically in a loop. Every time it sends a packet out, RAK5010 will go to sleep for 180 seconds which you just set, then RAK5010 will wake up and searching GPS, building a new packet, and sending it out.")]),e._v(" "),r("ul",[r("li",[e._v("You will see a continuously loop as the following picture shows:")])]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/ijh8cftfzy4x9ybyalvr.jpg",width:"50%","figure-number":"12",caption:"Continuous Loop seen in The Serial Tool"}}),e._v(" "),r("ul",[r("li",[e._v("RAK5010 will send sensor’s data automatically in a loop.")])]),e._v(" "),r("p",[e._v("Let’s check the data in the receiving server:")]),e._v(" "),r("rk-img",{attrs:{src:e.$frontmatter.static_root+"/urwjby1runkjaijb18re.jpg",width:"100%","figure-number":"12",caption:"Data Receive in the Server"}}),e._v(" "),r("p",[e._v("Great! As we see, the server has received the packet which RAK5010 sends out successfully, and they are all sensor’s data in the packet.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);