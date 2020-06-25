(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{568:function(e,t,s){"use strict";s.r(t);var n=s(18),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"amazon-web-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-service"}},[e._v("#")]),e._v(" Amazon Web Service")]),e._v(" "),s("p",[e._v("This section walks through the details on the steps on how to configure the free cloud services of "),s("strong",[s("a",{attrs:{href:"http://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon"),s("OutboundLink")],1)]),e._v(". Follow each and every step discussed in this document to have a fully functional system. If you encounter errors, kindly contact us through the email provided in the Product Overview.")]),e._v(" "),s("h2",{attrs:{id:"amazon-web-service-configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-service-configurations"}},[e._v("#")]),e._v(" Amazon Web Service Configurations")]),e._v(" "),s("h3",{attrs:{id:"creating-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-account"}},[e._v("#")]),e._v(" Creating an Account")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("For you to enjoy the free cloud services of Amazon, kindly make an account through their "),s("a",{attrs:{href:"http://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Service"),s("OutboundLink")],1),e._v(" page.")]),e._v(" "),s("ul",[s("li",[e._v("Considerations:\n"),s("ul",[s("li",[e._v("Limited to 750 hours per month for a period of 12 months")]),e._v(" "),s("li",[e._v("A debit card must be linked to verify your identity in order to use the service.")])])])])])]),e._v(" "),s("h3",{attrs:{id:"configuring-the-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-instance"}},[e._v("#")]),e._v(" Configuring the Instance")]),e._v(" "),s("ol",[s("li",[e._v("After you have logged into your account, you need to select what instance you are going to be running.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v('For the purpose of this tutorial we are going to be using "'),s("strong",[e._v("EC2")]),e._v('". Select it in the '),s("strong",[e._v("AWS Management Console")]),e._v(".")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/aws-console.jpg",width:"100%","figure-number":"1",caption:"AWS Management Console"}}),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("In the following screen you can see your running instances, key pairs, security groups, etc. Press the blue “"),s("strong",[e._v("Launch instance")]),e._v("” button.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/launch-instance.jpg",width:"100%","figure-number":"2",caption:"Launching an Instance"}}),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("There is a ton of choices for the operating system, however we will be using "),s("strong",[e._v("Ubuntu")]),e._v(". Scroll down and choose "),s("strong",[e._v("Ubuntu Server 18.04 LTS")]),e._v(" (latest at the time of this document). Click the “"),s("strong",[e._v("Select")]),e._v("” button.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/selecting-os.jpg",width:"100%","figure-number":"3",caption:"Selecting the Operating System"}}),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[e._v("In the next window, you can configure your Instance. However, we will leave it as it is. Just select the "),s("em",[s("strong",[e._v("t2.Micro")])]),e._v(" for the "),s("strong",[e._v("instance type")]),e._v(" as in figure shown below and click “"),s("strong",[e._v("Review and Launch")]),e._v("”.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/select-instance-type.jpg",width:"100%","figure-number":"4",caption:"Selecting the Instance Type"}}),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("Confirm your choice and Launch. Security groups will be edited in the next section so you can go ahead and confirm your choice by pressing the “"),s("strong",[e._v("Launch")]),e._v("” button as shown in Figure 5:")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/launch-instance-f.jpg",width:"100%","figure-number":"5",caption:"Launching the Instance"}}),e._v(" "),s("h3",{attrs:{id:"accessing-instance-via-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-instance-via-ssh"}},[e._v("#")]),e._v(" Accessing Instance via SSH")]),e._v(" "),s("p",[e._v("In order to have an SSH session to the Instance, we need to create the appropriate access keys. Thus, after Launching you will see the window in Figure 6:")]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/key-pair.jpg",width:"75%","figure-number":"6",caption:"Key pair creation"}}),e._v(" "),s("ol",[s("li",[e._v('We will choose to "'),s("strong",[e._v("Create a new key pair")]),e._v('" from the drop-down menu and give it an appropriate name. Finally, click the “'),s("strong",[e._v("Download Key Pair")]),e._v("” button shown in Figure 7.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/new-key-pair.jpg",width:"75%","figure-number":"7",caption:"Creating a new key pair"}}),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v('After saving the Keys to your chosen location, you can Launch the instance via the blue button "'),s("strong",[e._v("Launch Instances")]),e._v('".')])]),e._v(" "),s("li",[s("p",[e._v("In Figure 8, you can see the parameters of your instance. Note the fields in the highlighted with the red rectangle. These are you real "),s("strong",[e._v("URL")]),e._v(" and "),s("strong",[e._v("IP Address")]),e._v(" for accessing this instance.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v("The URL and IP Address shown in Figure 8 are just examples. You will have a different set of information on your setup.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/instance-param.jpg",width:"100%","figure-number":"8",caption:"Instance Parameters"}}),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("In order to have SSH access to the Instance we will use "),s("a",{attrs:{href:"https://www.putty.org/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("PuTTY")]),s("OutboundLink")],1),e._v(". Download and install it.")])]),e._v(" "),s("li",[s("p",[e._v("In the "),s("strong",[e._v("AWS Instance")]),e._v(" page, mark your instance and click “"),s("strong",[e._v("Connect")]),e._v("”. This will bring the instructions page out. We will follow the procedure as well.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v("We first need to convert the keys from "),s("code",[e._v(".pem")]),e._v(" format to "),s("code",[e._v(".ppk")]),e._v(" format as this is what PuTTY is used for. This is done with PuTTYgen, which comes standard with the PuTTY package.")])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[e._v("Run "),s("strong",[e._v("PuTTYgen")]),e._v(" (if you are using Windows, just type it in the start menu after installing PuTTY and you will find it).")])]),e._v(" "),s("li",[s("p",[e._v("In the main window, select the "),s("strong",[e._v("Type of key to generate")]),e._v(" as "),s("strong",[e._v("RSA")]),e._v(" (should be the default choice). In older versions, it is named "),s("strong",[e._v("SSH-2 RSA")]),e._v(".")])])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/puttygen.png",width:"75%","figure-number":"9",caption:"PuTTYgen main window"}}),e._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[e._v("Press “"),s("strong",[e._v("Load")]),e._v("” in order to select the key files generated by AWS (make sure to select "),s("strong",[e._v("All Files ("),s("em",[e._v(".")]),e._v(")")]),e._v(" from the drop down menu as by default only "),s("strong",[e._v(".ppk")]),e._v(" files are shown")])]),e._v(" "),s("li",[s("p",[e._v("After successfully loading the keys, you can save them in "),s("strong",[e._v(".ppk")]),e._v(" with the “"),s("strong",[e._v("Save private key")]),e._v("” button. Use the same name as the original "),s("strong",[e._v(".pem")]),e._v(" file. The "),s("strong",[e._v("ppk")]),e._v(" extension will be added automatically. PuTTYgen displays a warning about saving the keys without a passphrase. Ignore it an choose "),s("strong",[e._v("Yes.")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v("A passphrase on a private key is an extra layer of protection. Even if your private key is discovered, it cannot be used without the passphrase. The downside to using a passphrase is that it makes automation harder because human intervention is needed to log on to an instance, or to copy files to an instance.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/puttygen-public-key.jpg",width:"75%","figure-number":"10",caption:"PuTTYgen Saving the public key"}}),e._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[e._v("As your Private Key is now in the correct format, now you can create an SSH session with PuTTY. Open the client and select SSH")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/putty-main.png",width:"75%","figure-number":"11",caption:"PuTTY main window"}}),e._v(" "),s("ol",{attrs:{start:"11"}},[s("li",[e._v("You need the correct "),s("strong",[e._v("Host Name")]),e._v(". Take note of the Host  Name syntax provided below together with an example for a better understanding:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("user_name@public_dns_name\n")])])]),s("ul",[s("li",[s("strong",[e._v("Example")]),e._v(":\n"),s("ul",[s("li",[s("strong",[e._v("user_name")]),e._v(": ubuntu")]),e._v(" "),s("li",[s("strong",[e._v("public_dns_name")]),e._v(": ec2-3-120-237-38.eu-central-1.compute.amazonaws.com")]),e._v(" "),s("li",[s("strong",[e._v("Host name")]),e._v(": "),s("a",{attrs:{href:"mailto:ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com"}},[e._v("ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com")])])])])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/putty-hostname.png",width:"75%","figure-number":"12",caption:"PuTTY main window with Host Name"}}),e._v(" "),s("ol",{attrs:{start:"12"}},[s("li",[e._v("Now we need to tell PuTTY to use our keys. In the "),s("strong",[e._v("Category panel")]),e._v(" expand "),s("strong",[e._v("Connections>SSH>Auth")]),e._v(". Click the “"),s("strong",[e._v("Browse")]),e._v("” button and look for you "),s("strong",[e._v(".ppk")]),e._v(" file")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v("If you want to save this configuration for future use go back to the "),s("strong",[e._v("Session")]),e._v(" tab and enter a name in the "),s("strong",[e._v("Saved Session")]),e._v(" text box and click "),s("strong",[e._v("Save")]),e._v(".")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/putty-ssh-auth.png",width:"75%","figure-number":"13",caption:"PuTTY SSH Authentication"}}),e._v(" "),s("ol",{attrs:{start:"13"}},[s("li",[e._v("Click the “"),s("strong",[e._v("Open")]),e._v("” button to initiate the session. If this is your first time connecting, PuTTY will ask for confirmation (click "),s("strong",[e._v("Yes")]),e._v("). You should see the command line window to your instance now.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/putty-ssh-command.jpg",width:"75%","figure-number":"14",caption:"PuTTY SSH Command line"}}),e._v(" "),s("ol",{attrs:{start:"14"}},[s("li",[e._v("As a last step execute the commands in the text box below in order. This will make sure your Ubuntu is up to date:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get update\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get upgrade\n")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);