import{o as a,c as n,g as e,i as _,b as t,a as r,w as h,u,h as m}from"./app.a1316167.js";import{_ as w,a as p}from"./chunks/index.47c0dc63.js";const f={class:"my-2 max-w-xs"},b=["overrides"],g=e("button",{class:"rounded-[8px] bg-green-600 p-2 text-[var(--vp-c-black)] mt-1 hover:bg-green-500 focus:bg-green-400",slot:"activate"},"Connect",-1),y=e("span",{slot:"unsupported"},"Ah snap, your browser doesn't work!",-1),v=e("span",{slot:"not-allowed"},"Ah snap, you are not allowed to use this on HTTP!",-1),T=[g,y,v],S={mounted(){_(()=>import("https://unpkg.com/esp-web-tools@9.2.0/dist/web/install-button.js?module"),[])}},x=Object.assign(S,{__name:"WebSerial",props:["options"],setup(l){const s=(o,i)=>{const c=o.name.toLowerCase(),d=i.firmware.toLowerCase();return c.includes(d)};return(o,i)=>(a(),n("div",f,[e("esp-web-install-button",{overrides:{checkSameFirmware:s},manifest:"firmware/manifest.json"},T,8,b)]))}}),k=e("p",null,[e("noscript",null,"Javascript must be enabled to run this section of the website. If you are seeing this, please update your browser settings")],-1),C=e("h1",{class:"text-[var(--font-accent)]",id:"how-to-flash-the-firmware",tabindex:"-1"},[t("How to flash the firmware "),e("a",{class:"header-anchor",href:"#how-to-flash-the-firmware","aria-hidden":"true"},"#")],-1),$=e("p",null,"In this section of the documentation you can flash your devices right from the browser!",-1),P=e("p",null,[t("Through the magic of "),e("code",null,"WebSerial"),t(" you can flash and configure your devices without ever having to download or use VSCode.")],-1),V=e("p",null,"The dedicated Serial Monitor is a web-based serial terminal for your devices. Using this terminal you can send commands to your devices and see the output. You can also use this to test your devices functionality and modify config settings.",-1),A=e("p",null,"Click the button below to open the Serial Monitor.",-1),N={class:"details custom-block"},D=e("summary",null,[e("b",null,"Dedicated Serial Monitor")],-1),E=e("h2",null,"Serial Monitor Docs",-1),I=e("p",null,"Listed here are most 😉 of the commands you can send to the terminal.",-1),M=e("h2",null,"Serial Monitor Commands",-1),O=m("",4),F=e("ul",null,[e("li",null,[e("b",{style:{color:"green"}},"ssid"),t(" - This is the ssid for your wifi")]),e("li",null,[e("b",{style:{color:"green"}},"password"),t(" - This is the password for your wifi")]),e("li",null,[e("b",{style:{color:"green"}},"ota_password"),t(" - This is the password for Over the Air Updates to occur")])],-1),L=e("p",null," Your Wifi credentials never leave your machine and are directly written to the device. We do not, and never will, store these values. ",-1),H=JSON.parse('{"title":"How to flash the firmware","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/web_serial.md","lastUpdated":1676228867000}'),W={name:"firmware_guide/web_serial.md"},U=Object.assign(W,{setup(l){return(s,o)=>(a(),n("div",null,[k,C,$,P,V,A,e("details",N,[D,E,I,M,e("ul",null,[O,t(" Possible config keys: "),F,r(w,{options:u(p).web_serial_one},{content:h(()=>[L]),_:1},8,["options"])])]),r(x)]))}});export{H as __pageData,U as default};