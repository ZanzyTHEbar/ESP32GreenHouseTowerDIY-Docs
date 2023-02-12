import{o as r,c as n,g as e,i as _,b as t,a,w as h,u,h as m}from"./app.1f4cd23e.js";import{_ as w,a as f}from"./chunks/index.984e7006.js";const p={class:"my-2 max-w-xs"},b=["overrides"],y=e("button",{class:"rounded-[8px] bg-green-600 p-2 text-[var(--vp-c-black)] mt-1 hover:bg-green-500 focus:bg-green-400",slot:"activate"},"Flash my Firmware",-1),g=e("span",{slot:"unsupported"},"Ah snap, your browser doesn't work!",-1),v=e("span",{slot:"not-allowed"},"Ah snap, you are not allowed to use this on HTTP!",-1),T=[y,g,v],S={mounted(){_(()=>import("https://unpkg.com/esp-web-tools@9.2.0/dist/web/install-button.js?module"),[])}},x=Object.assign(S,{__name:"WebSerial",props:["options"],setup(l){const s=(o,i)=>{const c=o.name.toLowerCase(),d=i.firmware.toLowerCase();return c.includes(d)};return(o,i)=>(r(),n("div",p,[e("esp-web-install-button",{overrides:{checkSameFirmware:s},manifest:"firmware/manifest.json"},T,8,b)]))}}),k=e("p",null,[e("noscript",null,"Javascript must be enabled to run this section of the website. If you are seeing this, please update your browser settings")],-1),$=e("h1",{class:"text-3xl font-bold text-[#ab5ac7]",id:"how-to-flash-the-firmware",tabindex:"-1"},[t("How to flash the firmware "),e("a",{class:"header-anchor",href:"#how-to-flash-the-firmware","aria-hidden":"true"},"#")],-1),P=e("p",null,"In this section of the documentation you can flash your devices right from the browser!",-1),V=e("p",null,[t("Through the magic of "),e("code",null,"WebSerial"),t(" you can flash and configure your devices without ever having to download or use VSCode.")],-1),A={class:"details custom-block"},C=e("summary",null,[e("b",null,"Dedicated Serial Monitor")],-1),D=e("p",null,"The dedicated Serial Monitor is a web-based serial terminal for your devices. Using this terminal you can send commands to your devices and see the output. You can also use this to test your devices functionality and modify config settings.",-1),F=e("h2",null,"Serial Monitor",-1),N={class:"details custom-block"},E=e("summary",null,[e("b",null,"Dedicated Serial Monitor Docs")],-1),I=e("p",null,"Listed here are most 😉 of the commands you can send to the terminal.",-1),M=e("h2",null,"Serial Monitor Commands",-1),O=m("",4),L=e("ul",null,[e("li",null,[e("b",{style:{color:"green"}},"ssid"),t(" - This is the ssid for your wifi")]),e("li",null,[e("b",{style:{color:"green"}},"password"),t(" - This is the password for your wifi")]),e("li",null,[e("b",{style:{color:"green"}},"ota_password"),t(" - This is the password for Over the Air Updates to occur")])],-1),W=e("p",null," Your Wifi credentials never leave your machine and are directly written to the device. We do not, and never will, store these values. ",-1),U=JSON.parse('{"title":"How to flash the firmware","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/web_serial.md","lastUpdated":1675614608000}'),j={name:"firmware_guide/web_serial.md"},J=Object.assign(j,{setup(l){return(s,o)=>(r(),n("div",null,[k,$,P,V,e("details",A,[C,D,F,e("details",N,[E,I,M,e("ul",null,[O,t(" Possible config keys: "),L,a(w,{options:u(f).web_serial_one},{content:h(()=>[W]),_:1},8,["options"])])])]),a(x)]))}});export{U as __pageData,J as default};
