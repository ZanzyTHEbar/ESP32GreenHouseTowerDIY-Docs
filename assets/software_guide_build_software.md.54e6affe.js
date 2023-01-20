import{_ as r,a as i}from"./chunks/index.2e99f334.js";import{_ as l}from"./chunks/CheckBoxList.5005f750.js";import{o as n,c as s,a as o,w as h,u as a,g as e,b as t,h as d}from"./app.07210736.js";const p={state:!0,object:[{label:"Python 3.11.0",link:"https://www.python.org/downloads/release/python-3110/"},{label:"Poetry",link:"https://python-poetry.org/"},{label:"Windows/Linux PC",link:""}]},u=e("h1",{class:"text-[#ab5ac7]",id:"build-the-app-from-source",tabindex:"-1"},[t("Build the app from source "),e("a",{class:"header-anchor",href:"#build-the-app-from-source","aria-hidden":"true"},"#")],-1),c=e("h2",{id:"this-guide-will-show-how-to-build-the-app-from-source",tabindex:"-1"},[t("This guide will show how to build the app from source "),e("a",{class:"header-anchor",href:"#this-guide-will-show-how-to-build-the-app-from-source","aria-hidden":"true"},"#")],-1),m=e("p",null," This is NOT a required step, you do not need to build the app from source. ",-1),y=e("h2",{id:"requirements",tabindex:"-1"},[t("Requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),_=d('<h2 id="install-python" tabindex="-1">Install Python <a class="header-anchor" href="#install-python" aria-hidden="true">#</a></h2><p>EyetrackVR is currently using <a href="https://www.python.org/downloads/release/python-3110/" target="_blank" rel="noreferrer">Python 3.11.0</a> Before you continue, please install it.</p><h2 id="installing-poetry" tabindex="-1">Installing Poetry <a class="header-anchor" href="#installing-poetry" aria-hidden="true">#</a></h2><p>Since version <code>0.1.7</code> of EyeTrackVR, we have been using Poetry to manage app dependencies. To build the app, you must first install Poetry to fetch the required dependencies.</p><p>To install Poetry open Windows Powershell and run the following command <code>(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -</code></p><p><a href="https://python-poetry.org/docs/" target="_blank" rel="noreferrer">Poetry Documentation</a></p><h2 id="install-the-required-python-modules" tabindex="-1">Install the required Python modules <a class="header-anchor" href="#install-the-required-python-modules" aria-hidden="true">#</a></h2><p>After cloning the project and installing Poetry, open a command prompt in the EyeTrackApp folder. Then run the command: <code>poetry install</code></p><p>This should install all of the required modules.</p><h2 id="build-the-app" tabindex="-1">Build the app <a class="header-anchor" href="#build-the-app" aria-hidden="true">#</a></h2><p>Now, you should be ready to build the app. With a command prompt open in the EyeTrackApp folder, run the command <code>poetry run pyinstaller eyetrackapp.spec</code></p><p>Give it time to build the app. Once done, the app should be under <code>dist/eyetrackapp</code></p>',12),q=JSON.parse('{"title":"Build the app from source","description":"","frontmatter":{},"headers":[{"level":2,"title":"This guide will show how to build the app from source","slug":"this-guide-will-show-how-to-build-the-app-from-source","link":"#this-guide-will-show-how-to-build-the-app-from-source","children":[]},{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Install Python","slug":"install-python","link":"#install-python","children":[]},{"level":2,"title":"Installing Poetry","slug":"installing-poetry","link":"#installing-poetry","children":[]},{"level":2,"title":"Install the required Python modules","slug":"install-the-required-python-modules","link":"#install-the-required-python-modules","children":[]},{"level":2,"title":"Build the app","slug":"build-the-app","link":"#build-the-app","children":[]}],"relativePath":"software_guide/build_software.md","lastUpdated":1674227143000}'),f={name:"software_guide/build_software.md"},x=Object.assign(f,{setup(b){return(w,g)=>(n(),s("div",null,[u,c,o(r,{options:a(i).build_software_one},{content:h(()=>[m]),_:1},8,["options"]),y,o(l,{options:{...a(p)}},null,8,["options"]),_]))}});export{q as __pageData,x as default};
