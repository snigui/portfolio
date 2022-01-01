"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8293],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(u,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"auto",title:"automating the web!",authors:["snigdha"],tags:["python","web scraping"],sidebar_position:4},u=void 0,s={permalink:"/blog/auto",editUrl:"https://github.com/snigui/snigui.github.io/blog/2021-11-12-auto/index.md",source:"@site/blog/2021-11-12-auto/index.md",title:"automating the web!",description:"So you have to register for classes at 7:00am...",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"web scraping",permalink:"/blog/tags/web-scraping"}],readingTime:2.19,truncated:!1,authors:[{name:"snigdha",title:"bit flipper",url:"https://github.com/snigui",imageURL:"/img/icn.jpg",key:"snigdha"}],prevItem:{title:"archive of science videos",permalink:"/blog/Breakthrough Junior Challenge Videos"},nextItem:{title:"so, I met...",permalink:"/blog/sean carroll!"}},c={authorsImageUrls:[void 0]},p=[{value:"Let python do it for you with Selenium",id:"let-python-do-it-for-you-with-selenium",children:[{value:"Useful Selenium methods",id:"useful-selenium-methods",children:[{value:"Have fun with your newfound web super power.",id:"have-fun-with-your-newfound-web-super-power",children:[],level:4}],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null," So you have to register for classes at 7:00am... "),(0,a.kt)("h2",{id:"let-python-do-it-for-you-with-selenium"},"Let python do it for you with Selenium"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://selenium-python.readthedocs.io/installation.html"},(0,a.kt)("img",{alt:"click me",src:n(3436).Z}))),(0,a.kt)("p",null,"Selenium is a web scraping tool that beautifully integrates with python. It allows you to automate webpage interactions."),(0,a.kt)("p",null,"I stumbled across it a while ago, but I had not used the actual API until recently. Long story short, I had to make a doctor's appointment right at 12am to even find a spot (thank you American healthcare system!)."),(0,a.kt)("p",null,"Regardless, whether it be to automate time sensitive actions or long and arduous form filling, Selenium is here for your rescue. I will go over a few useful Selenium methods that should equip you with basic webpage interactions."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: these methods work as of November 2021")),(0,a.kt)("h3",{id:"useful-selenium-methods"},"Useful Selenium methods"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"service.start()")),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Service.html"},"method")," allows to set up a browser driver."),(0,a.kt)("p",null,"I personally used the chrome driver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from selenium import webdriver\n\nfrom selenium.webdriver.chrome.service import Service\n\nservice = Service('/path/to/chromedriver')\n\nservice.start()\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You will have to locally install the 'chromedriver' executable. You can install it and find more usage examples ",(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/getting-started"},"here"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"driver.get(url)")),(0,a.kt)("p",null,"Once you have the browser all set up, you can connect to it remotely with Selenium using the .get method as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"driver = webdriver.Remote(service.service_url)\ndriver.get('[insert url of page you want to selenium to work its magic on]')\n")),(0,a.kt)("p",null,"And, that's the basic set up! You can now inspect element on the target webpage to figure out which fields you want to automate interaction with."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"driver.find_element")),(0,a.kt)("p",null,'Let\'s say, I want to automatically search something on Google. I would first figure out the class name/ID of the search bar using "inspect element":'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"google",src:n(8270).Z})),(0,a.kt)("p",null,"Since there is only a class name of ",(0,a.kt)("inlineCode",{parentName:"p"},"gLFyf")," attached, it would be used to select the search bar and insert a value to search using the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"searchbar = 'gLFyf'\ndriver.find_element(By.CLASS_NAME,searchbar).send_keys(\"[value to search]\")\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The send_keys method can take an array as well to fit the format of the input field. Regardless of the type of input, " " are needed.')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"actions")),(0,a.kt)("p",null,"Finally, you can make Selenium click the search button by repeating a similar process of finding the search button's class name/ID. Here's a sample snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'submit = "gNO89b"\ndriver.find_element(By.CLASS_NAME, submit).click()\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A full list of different actions Selenium can perform can be found ",(0,a.kt)("a",{parentName:"p",href:"https://selenium-python.readthedocs.io/navigating.html"},"here"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"driver.quit()")),(0,a.kt)("p",null,"Don't forget to close the automation process and the browser by using the quit method at the end!"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"have-fun-with-your-newfound-web-super-power"},"Have fun with your newfound web super power."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tip: you can also schedule your python script to execute during specific times using ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/cron#Crontab_format"},"cron")))))}h.isMDXComponent=!0},3436:function(e,t,n){t.Z=n.p+"assets/images/logo-a00407a2be6e002ab03fe857aef0eb9e.svg"},8270:function(e,t,n){t.Z=n.p+"assets/images/snip-ce8102d6351e04f89d030d608b0480fc.png"}}]);