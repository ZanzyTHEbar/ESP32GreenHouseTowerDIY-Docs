import{_ as l,o as t,c as i,g as o,i as r,n as c,p as d,v as p}from"../app.07210736.js";const u={data(){return{isOpen:!1}},methods:{toggleAccordion(){this.isOpen=!this.isOpen}}},_=["aria-expanded","aria-controls"],h=o("path",{d:"M15 1.2l-7 7-7-7","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f=[h],m=["id"];function v(e,n,w,g,s,a){return t(),i("div",null,[o("button",{onClick:n[0]||(n[0]=k=>a.toggleAccordion()),class:"flex items-center space-x-3","aria-expanded":s.isOpen,"aria-controls":`collapse${e._uid}`},[r(e.$slots,"title"),(t(),i("svg",{class:c(["w-3 transition-all duration-200 transform",{"rotate-180":s.isOpen,"rotate-0":!s.isOpen}]),fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 10","aria-hidden":"true"},f,2))],8,_),d(o("div",{id:`collapse${e._uid}`},[r(e.$slots,"content")],8,m),[[p,s.isOpen]])])}const x=l(u,[["render",v]]);export{x as A};
