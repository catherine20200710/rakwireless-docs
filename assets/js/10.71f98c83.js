(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{352:function(t,i,r){"use strict";r.r(i);var s=0,a=null,e={props:["params","src","width","figureNumber","caption"],data:function(){return{figNum:null}},computed:{opt:function(){var t=this.params,i=this.src,r=this.width,s=this.figureNumber,a=this.caption;return t||{src:i,width:r,figureNumber:s,caption:a}}},mounted:function(){this.$page.path!==a?(a=this.$page.path,s=1,this.figNum=s):this.figNum=++s}},u=r(18),n=Object(u.a)(e,(function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("figure",{attrs:{align:"center",id:"rk-img"}},[r("img",{staticClass:"zoomable",attrs:{src:t.opt.src,width:t.opt.width,alt:""}}),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Figure "+t._s(t.opt.figureNumber||t.figNum)+":")]),t._v(" "+t._s(t.opt.caption))])])}),[],!1,null,null,null);i.default=n.exports}}]);