import{o as n,c as l,g as e,a as r,t as i,n as o,j as c,k as d}from"../app.42f39072.js";const x={class:"my-2 max-w-xs rounded-lg bg-white px-4 py-4 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"},p={class:"drop-shadow-lg"},m={__name:"Alerts",props:["options"],setup(t){return(a,g)=>{const s=d("Badge");return n(),l("div",x,[e("div",null,[e("span",p,[r(s,{type:t.options.type,text:t.options.badge_content},null,8,["type","text"])])]),e("div",{class:o(["mt-2 pl-1 text-2xl font-bold tracking-tight text-slate-900",t.options.title_color])},i(t.options.title),3),e("p",{class:o(["mt-2 pl-1 text-sm",t.options.text_color])},[c(a.$slots,"content")],2)])}}},b={user_warning:{type:"warning",title:"",title_color:"text-[orange]",text_color:"text-slate-500 dark:text-slate-400",badge_content:"CAUTION"},web_serial_one:{type:"info",title:"Your Data is Safe",title_color:"text-[#1c4db7] dark:text-[#215ddd]",text_color:"text-slate-500 dark:text-slate-400",badge_content:"INFO"}};export{m as _,b as a};
