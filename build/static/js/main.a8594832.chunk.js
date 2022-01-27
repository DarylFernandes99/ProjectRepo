(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(33),o=a.n(c),r=(a(39),a(3)),i=(a(40),a(5)),l=a.n(i),d=a(9),u=a(17),m=a(14),j=a.n(m),b=a(4),h=a(18),p=(a(60),"http://127.0.0.1:8000/"),x=a(1),O={initial:"initial",states:{initial:{on:{next:"ready"}},ready:{on:{next:"complete"},showImage:!0},complete:{on:{next:"initial"},showImage:!0}}},g=function(e,t){return O.states[e].on[t]||O.initial},f=function(e){var t=Object(n.useReducer)(g,O.initial),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(r.a)(o,2),m=i[0],f=i[1],v=Object(n.useState)(null),k=Object(r.a)(v,2),w=k[0],N=k[1],y=Object(n.useState)(!1),I=Object(r.a)(y,2),D=I[0],M=I[1],S=Object(n.useState)(null),E=Object(r.a)(S,2),C=E[0],B=E[1],R=Object(n.useState)(!1),A=Object(r.a)(R,2),L=A[0],T=A[1],_=Object(n.useRef)(),F=Object(n.useRef)(),P=function(){return c("next")},U=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={accept:"application/json"},(n=new FormData).append("image",t),e.next=5,j.a.post(p+"api/low-light/",n,{headers:a}).then((function(e){f(e.data.predicted),B(e.data.result),M(!0)})).catch((function(e){var t=function(){return setTimeout((function(){T(!1)}),4e3)};t(),clearTimeout(t)}));case 5:document.getElementById("upload-btn").disabled=!1,document.getElementById("upload-btn").classList.remove("fade-out"),P();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z={initial:{text:"Upload Image",action:function(){return _.current.click()}},ready:{text:"Processing the Image",action:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(),P();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},complete:{text:"Upload Another Image",action:function(){N(null),document.getElementById("inputImage").value="",f(!1),B(""),document.getElementById("inputImage").disabled=!1,M(!1),P()}}},W=O.states[s].showImage,q=void 0!==W&&W;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"Low-Light Image Enhancement"}),Object(x.jsxs)("div",{id:"project-intro",className:e.isDarkMode?"project-info dark":"project-info",children:[Object(x.jsx)("p",{className:"text-center",children:" This project consists of a Deep learning model which aims to Enhance images captured in low-light envirnoment. We have used a CycleGAN and added a attention module to enhance it's capabilites. It is trained on a custom Dataset which can be found HERE. Model was made using keras and tensorflow libraries."})," ",Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-right fade-out",children:"*Images are resized to 256 x 256 resolution"})]}),Object(x.jsxs)("div",{className:"upload-box row",children:[Object(x.jsx)("div",{className:"text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5",children:q?Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{id:"img_disp",alt:"Upload-preview",className:"displayImage",src:w,ref:F}),Object(x.jsx)("h4",{className:e.isDarkMode?"dark":"",children:"Input Image"})]}):Object(x.jsx)("div",{className:e.isDarkMode?"upload-placeholder upload-placeholder-dark dark":"upload-placeholder",children:Object(x.jsx)(b.q,{className:"upload-icon"})})}),Object(x.jsxs)("div",{className:"col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2",children:[Object(x.jsxs)("i",{children:[" ",Object(x.jsx)(b.c,{className:e.isDarkMode?"upload-arrow dark":"upload-arrow"})," "]}),Object(x.jsxs)("i",{children:[" ",Object(x.jsx)(b.b,{className:e.isDarkMode?"upload-arrow-mobile dark":"upload-arrow-mobile"})," "]})]}),Object(x.jsx)("div",{className:"text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5",children:m?Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{alt:"Upload-preview",className:"displayImage",src:C}),Object(x.jsx)("h4",{className:e.isDarkMode?"dark":"",children:"Output Image"})]}):Object(x.jsxs)("div",{className:e.isDarkMode?"upload-placeholder upload-placeholder-dark dark":"upload-placeholder",children:[Object(x.jsx)(b.l,{id:"output-icon",className:"upload-icon"}),Object(x.jsx)(h.a,{icon:"spinner",id:"processing-icon",className:"upload-icon spinner",style:{display:"none"}})]})})]}),Object(x.jsx)("input",{style:{display:"none"},id:"inputImage",className:"input-dog",type:"file",accept:"image/*, capture=camera",onChange:function(e){var t=e.target.files;if(t.length>0){document.getElementById("upload-btn").disabled=!0,document.getElementById("upload-btn").classList.add("fade-out");var a=URL.createObjectURL(t[0]);N(a);var n=new FileReader;n.onloadend=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n.result);case 2:case"end":return e.stop()}}),e)}))),document.getElementById("processing-icon").style.display="block",document.getElementById("output-icon").style.display="none",n.readAsDataURL(t[0]),P()}},ref:_}),Object(x.jsx)("div",{className:"row text-center",children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{className:e.isDarkMode?"btn-upload btn-upload-dark":"btn-upload",id:"upload-btn",onClick:z[s].action,children:z[s].text})})}),D&&Object(x.jsx)("div",{className:"row text-center",children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{className:e.isDarkMode?"btn-save btn-save-dark":"btn-save",id:"save-btn",onClick:function(){Object(u.saveAs)(C,"output.jpg")},children:"Download Output"})})}),L&&Object(x.jsx)("p",{className:"submit-fail text-center",children:" Couldn't upload image. Please try again later. "})]})},v=a(13),k=a(6),w=(a(62),[{id:1,url:"/",text:"Home"},{id:2,url:"/about",text:"About"},{id:3,url:"/projects",text:"Projects"},{id:4,url:"/contact",text:"Contact"}]),N=a.p+"static/media/logo.88860f3d.svg",y=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)("true"===window.localStorage.getItem("dark-mode")),i=Object(r.a)(o,2),l=i[0],d=i[1],u=function(){d(!l),l?(e.setIsDarkMode(),window.localStorage.setItem("dark-mode",!l),document.getElementById("navbar-mobile").classList.remove="dark-nav"):(e.setIsDarkMode(),window.localStorage.setItem("dark-mode",!l),document.getElementById("navbar-mobile").classList.add="dark-nav")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("nav",{className:l?"navbar-custom dark-nav":"navbar-custom",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"logo",children:Object(x.jsx)("img",{src:N,alt:"Project Repo"})}),w.map((function(e){var t=e.id,a=e.url,n=e.text;return Object(x.jsx)(v.b,{to:a,className:"link-custom",children:Object(x.jsxs)("li",{children:[" ",n]})},t)})),Object(x.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(x.jsxs)("li",{className:"dark-mode-toggle",children:[Object(x.jsx)(b.p,{}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{checked:l,type:"checkbox",onChange:u}),Object(x.jsx)("span",{className:"slider round"})]}),Object(x.jsx)(b.j,{})]})})]})}),Object(x.jsxs)("nav",{id:"navbar-mobile",name:"navbar-mobile",className:l?s?"navbar-mobile-exapnded dark-nav":"navbar-mobile dark-nav":s?"navbar-mobile-exapnded":"navbar-mobile",children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"mobile-logo",children:Object(x.jsx)("img",{src:N,alt:"Project Repo"})}),Object(x.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(x.jsx)("li",{children:Object(x.jsxs)("button",{className:l?"mobile-btn dark-nav":"mobile-btn",onClick:function(){return c(!s)},children:[" ",s?Object(x.jsx)(b.d,{}):Object(x.jsx)(b.a,{}),"  "]})})})]}),s?Object(x.jsxs)("ul",{className:"navbar-expanded",children:[w.map((function(e){var t=e.id,a=e.url,n=e.text;return Object(x.jsx)(v.b,{to:a,className:"mobile-link",children:Object(x.jsxs)("li",{className:"",children:[" ",n]})},t)})),Object(x.jsxs)("li",{className:"dark-mode-toggle",children:[Object(x.jsx)(b.p,{}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{checked:l,type:"checkbox",onChange:u}),Object(x.jsx)("span",{className:"slider round"})]}),Object(x.jsx)(b.j,{})]})]}):""]})]})},I=(a(67),function(e){return Object(x.jsx)("div",{className:"footer-main footer-custom",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)("div",{className:e.isDarkMode?"footer-bottom dark-footer":"footer-bottom",children:Object(x.jsxs)("p",{className:"footer-text",children:[Object(x.jsxs)("span",{className:"col-6 text-left",children:["\xa9",(new Date).getFullYear()," Project Repository - All Rights Reserved"]})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("span",{className:"col-6 text-right",children:["Email : ",Object(x.jsx)("a",{href:"mailto:projectrepotk@gmail.com",children:"projectrepotk@gmail.com"})]})]})})})})}),D=(a(68),function(e){return Object(x.jsxs)("div",{className:e.isDarkMode?"container-fluid dark":"container-fluid",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"What is ProjectRepo ?"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:e.isDarkMode?"container lorem dark text-center":"container lorem text-center",children:"ProjectRepo is a Web Application that allows users to test and access the various projects that we've made over time. A Web application that consists of a collection of tools that helps users perform various tasks such as colorizing images, enhancing images taken in dimly lit environments, generate random poems, and much more. The front end of the Web Application is built using React.Js and the back end with Django. From a design and SEO point of view, the load time of a site is very important, Sites that take a longer time to load could lose the user's attention, we chose React.Js since its speed, stability, and flexibility are top tiers.  ProjectRepo will be kept updated with our latest creations keep checking so you do not miss out on our recent Developments/Projects!"})]})}),M=(a(69),{initial:"initial",states:{initial:{on:{next:"ready"}},ready:{on:{next:"complete"},showImage:!0},complete:{on:{next:"initial"},showImage:!0}}}),S=function(e,t){return M.states[e].on[t]||M.initial},E=function(e){var t=Object(n.useReducer)(S,M.initial),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(r.a)(o,2),m=i[0],O=i[1],g=Object(n.useState)(null),f=Object(r.a)(g,2),v=f[0],k=f[1],w=Object(n.useState)(!1),N=Object(r.a)(w,2),y=N[0],I=N[1],D=Object(n.useState)(null),E=Object(r.a)(D,2),C=E[0],B=E[1],R=Object(n.useState)(!1),A=Object(r.a)(R,2),L=A[0],T=A[1],_=Object(n.useRef)(),F=Object(n.useRef)(),P=function(){return c("next")},U=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={accept:"application/json"},(n=new FormData).append("image",t),e.next=5,j.a.post(p+"api/colorize/",n,{headers:a}).then((function(e){O(e.data.predicted),B(e.data.result),I(!0)})).catch((function(e){T(!0);var t=function(){return setTimeout((function(){T(!1)}),4e3)};t(),clearTimeout(t)}));case 5:document.getElementById("upload-btn").disabled=!1,document.getElementById("upload-btn").classList.remove("fade-out"),P();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z={initial:{text:"Upload Image",action:function(){return _.current.click()}},ready:{text:"Processing the Image",action:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(),P();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},complete:{text:"Upload Another Image",action:function(){k(null),document.getElementById("inputImage").value="",O(!1),B(""),document.getElementById("inputImage").disabled=!1,I(!1),P()}}},W=M.states[s].showImage,q=void 0!==W&&W;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"Colorize Image"}),Object(x.jsxs)("div",{id:"project-intro",className:e.isDarkMode?"project-info dark":"project-info",children:[Object(x.jsx)("p",{className:"text-center",children:" This project consists of a machine learning model which aims to add color to grayscale or black and white images uploaded by the user. We have used a 8 layered Convolutional Neural Network to train our model on the Random Name Dataset. Model was made using keras and tensorflow libraries."})," ",Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-right fade-out",children:"*Images are resized to 256 x 256 resolution"})]}),Object(x.jsxs)("div",{className:"upload-box row",children:[Object(x.jsx)("div",{className:"text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5",children:q?Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{id:"img_disp",alt:"Upload-preview",className:"grayscale displayImage",src:v,ref:F}),Object(x.jsx)("h4",{className:e.isDarkMode?"dark":"",children:"Input Image"})]}):Object(x.jsx)("div",{className:e.isDarkMode?"upload-placeholder upload-placeholder-dark dark":"upload-placeholder",children:Object(x.jsx)(b.q,{className:"upload-icon"})})}),Object(x.jsxs)("div",{className:"col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2",children:[Object(x.jsxs)("i",{children:[" ",Object(x.jsx)(b.c,{className:e.isDarkMode?"upload-arrow dark":"upload-arrow"})," "]}),Object(x.jsxs)("i",{children:[" ",Object(x.jsx)(b.b,{className:e.isDarkMode?"upload-arrow-mobile dark":"upload-arrow-mobile"})," "]})]}),Object(x.jsx)("div",{className:"text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5",children:m?Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{alt:"Upload-preview",className:"displayImage",src:C}),Object(x.jsx)("h4",{className:e.isDarkMode?"dark":"",children:"Output Image "})]}):Object(x.jsxs)("div",{className:e.isDarkMode?"upload-placeholder upload-placeholder-dark dark":"upload-placeholder",children:[Object(x.jsx)(b.l,{id:"output-icon",className:"upload-icon"}),Object(x.jsx)(h.a,{icon:"spinner",id:"processing-icon",className:"upload-icon spinner",style:{display:"none"}})]})})]}),Object(x.jsx)("input",{style:{display:"none"},id:"inputImage",className:"input-dog",type:"file",accept:"image/*, capture=camera",onChange:function(e){var t=e.target.files;if(t.length>0){document.getElementById("inputImage").disabled=!0,document.getElementById("upload-btn").disabled=!0,document.getElementById("upload-btn").classList.add("fade-out");var a=URL.createObjectURL(t[0]);k(a);var n=new FileReader;n.onloadend=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n.result);case 2:case"end":return e.stop()}}),e)}))),document.getElementById("processing-icon").style.display="block",document.getElementById("output-icon").style.display="none",n.readAsDataURL(t[0]),P()}},ref:_}),Object(x.jsx)("div",{className:"row text-center",children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{className:e.isDarkMode?"btn-upload btn-upload-dark":"btn-upload",id:"upload-btn",onClick:z[s].action,children:z[s].text})})}),y&&Object(x.jsx)("div",{className:"row text-center",children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{className:e.isDarkMode?"btn-save btn-save-dark":"btn-save",id:"save-btn",onClick:function(){Object(u.saveAs)(C,"output.jpg")},children:"Download Output"})})}),L&&Object(x.jsx)("p",{className:"submit-fail text-center",children:" Couldn't upload image. Please try again later. "})]})},C=(a(70),["I dont know where hes stationed, be it Cork or in Killarney","Together wed go roamin oer the mountains of Kilkenny","And I swear hed treat me fairer than my darlin sportin Jenny","Theres some takes delight in the carriages and rollin","Some takes delight in the hurley or the bollin","But I takes delight in the juice of the barley","Courtin pretty maids in the mornin, o so early","Oh the summertime is coming","And the trees are sweetly blooming","And the wild mountain thyme","Grows around the blooming heather","Will ye go, Lassie go","And well all go together","To pluck wild mountain thyme","All around the blooming heather","I will build my love a tower","Near yon pure crystal fountain","And on it I will build","All the flowers of the mountain","If my true love she were gone","I would surely find another","Where wild mountain thyme","When you are old and grey and full of sleep","And nodding by the fire, take down this book","And slowly read, and dream of the soft look","Your eyes had once, and of their shadows deep","How many loved your moments of glad grace","And loved your beauty with love false or true","But one man loved the pilgrim soul in you","And loved the sorrows of your changing face","And bending down beside the glowing bars","Murmur, a little sadly, how Love fled","And paced upon the mountains overhead","And hid his face amid a crowd of stars","How do I love thee? Let me count the ways","I love thee to the depth and breadth and height","My soul can reach, when feeling out of sight","For the ends of being and ideal grace","I love thee to the level of every day's","Most quiet need, by sun and candle-light"]);var B=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(1),i=Object(r.a)(o,2),u=i[0],m=i[1],h=Object(n.useState)(""),O=Object(r.a)(h,2),g=O[0],f=O[1],v=Object(n.useState)(!1),k=Object(r.a)(v,2),w=k[0],N=k[1],y=Object(n.useState)(!1),I=Object(r.a)(y,2),D=I[0],M=I[1],S=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={accept:"application/json"},(n=new FormData).append("phrase",s),n.append("length",u),document.getElementById("submitbtn").disabled=!0,e.next=8,j.a.post(p+"api/poem/",n,{headers:a}).then((function(e){f(e.data.result),N(!0),document.getElementById("submitbtn").disabled=!1})).catch((function(e){console.log(e),document.getElementById("submitbtn").disabled=!1;var t=function(){return setTimeout((function(){M(!1)}),4e3)};t(),clearTimeout(t)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"Poem Generator"}),Object(x.jsxs)("div",{id:"project-intro",className:e.isDarkMode?"project-info dark":"project-info",children:[Object(x.jsx)("p",{className:"text-center",children:" This project generates a poem based on a phrase given by the user. We have used Embedding along with a LSTM Network. The model was trained on poems written by famous authors such as William Shakespeare, Edmund Spenser, John Donne, Sir Philip Sidney, etc."})," ",Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-right fade-out",children:"*Stanza count has to be between 1 - 5"})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12 col-sm-12 col-xs-12 col-md-12 col-lg-6 col-xl-6",children:Object(x.jsxs)("form",{onSubmit:S,method:"POST",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"phrase",className:e.isDarkMode?"dark":"",children:"Phrase"}),Object(x.jsx)("input",{className:"form-control",type:"text",id:"phrase",name:"phrase",value:s,onChange:function(e){c(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"wordCount",className:e.isDarkMode?"dark":"",children:"Stanza Count"}),Object(x.jsx)("input",{className:"form-control",min:"1",max:"5",type:"number",id:"wordCount",name:"wordCount",value:u,onChange:function(e){m(e.target.valueAsNumber)}})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("span",{className:"col-2"}),Object(x.jsxs)("span",{className:"col-5 text-left",children:[" ",Object(x.jsxs)("button",{className:"btn btn-lg save-btn",type:"button",onClick:function(){m(Math.floor(5*Math.random())+1),c(C[Math.floor(Math.random()*C.length)])},children:[" ",Object(x.jsx)(b.o,{})," Random"]})," "]}),Object(x.jsxs)("span",{className:"col-5 text-left",children:[" ",Object(x.jsx)("button",{id:"submitbtn",name:"submitbtn",className:"btn btn-lg save-btn",type:"submit",children:"Generate"})," "]})]})]})}),Object(x.jsxs)("div",{className:"col-12 col-sm-12 col-xs-12 col-md-12 col-lg-6 col-xl-6",children:[Object(x.jsx)("textarea",{className:"output-text",name:"output",id:"output",cols:"30",rows:"10",value:g,readOnly:!0}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("span",{className:"col-4"}),Object(x.jsxs)("span",{className:"col-4 text-center",children:[" ",Object(x.jsx)("h4",{className:e.isDarkMode?"dark":"",children:" Output "})," "]}),Object(x.jsxs)("span",{className:"col-4 text-right",children:[" ",w&&Object(x.jsxs)("button",{type:"button",className:"btn save-btn",onClick:function(){!function(e){var t=new Blob([e],{type:"txt"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,"output");else{var a=document.createElement("a"),n=URL.createObjectURL(t);a.href=n,a.download="output",document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(n)}),0)}}(g)},children:[" ",Object(x.jsx)(b.f,{})," Save"]})," "]})]})]})]}),D&&Object(x.jsx)("p",{className:"submit-fail text-center",children:" Couldn't connect to server. Please try again later. "})]})},R=(a(71),a.p+"static/media/logo_keras.66f62f31.svg"),A=[{id:1,name:"Image Colorization",image:R,description:"This project consists of a machine learning model which aims to add color to grayscale or black and white images uploaded by the user. We have used a 8 layered Convolutional Neural Network to train our model on the Random Name Dataset. Model was made using keras and tensorflow libraries.",link:"/projects/colorize"},{id:2,name:"Low Light Image Enhancement",image:a.p+"static/media/logo_tensorflow.2f88c734.svg",description:"This project consists of a Deep learning model which aims to Enhance images captured in low-light envirnoment. We have used a CycleGAN and added a attention module to enhance it's capabilites. It is trained on a custom Dataset. Model was made using keras and tensorflow libraries.",link:"/projects/lowlight"},{id:3,name:"Poem Generator",image:R,description:"This project generates a poem based on a phrase given by the user. We have used Embedding along with a LSTM Network. The model was trained on poems written by famous authors such as William Shakespeare, Edmund Spenser, John Donne, Sir Philip Sidney, etc.",link:"/projects/poem"}];var L=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:A.map((function(t){var a=t.id,n=t.name,s=t.description,c=t.image,o=t.link;return Object(x.jsx)("div",{className:e.isDarkMode?"card card-dark":"card",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 img-box",children:Object(x.jsx)("img",{src:c,className:"card-img",alt:n})}),Object(x.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:n}),Object(x.jsx)("p",{className:e.isDarkMode?"card-text card-text-dark":"card-text",children:s}),Object(x.jsxs)("p",{className:"project-btn",children:[" ",Object(x.jsxs)(v.b,{to:o,children:[" ",Object(x.jsx)("span",{className:"btn-link",children:"Visit Project"}),"  "]})," "]})]})})]})},a)}))})})};a(72);var T=function(e){return Object(x.jsx)("div",{className:"container",id:"notfound",children:Object(x.jsxs)("div",{className:e.isDarkMode?"notfound notfound-dark":"notfound",children:[Object(x.jsxs)("div",{className:e.isDarkMode?"notfound-404 notfound-404-dark":"notfound-404",children:[Object(x.jsx)("h1",{children:"Oops!"}),Object(x.jsx)("h2",{children:"404 - The Page can't be found"})]}),Object(x.jsx)(v.b,{to:"/",children:"Go Back Home"})]})})};a(73);var _=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(""),i=Object(r.a)(o,2),u=i[0],m=i[1],b=Object(n.useState)(""),h=Object(r.a)(b,2),O=h[0],g=h[1],f=Object(n.useState)(!1),v=Object(r.a)(f,2),k=v[0],w=v[1],N=Object(n.useState)(!1),y=Object(r.a)(N,2),I=y[0],D=y[1],M=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.getElementById("submit-button").disabled=!0,e.next=4,S(s,u,O);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark((function e(t,a,n){var s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={accept:"application/json"},(o=new FormData).append("email",t),o.append("subject",a),o.append("message",n),e.next=7,j.a.post(p+"api/feedback/",o,{headers:s}).then((function(e){w(!0),document.getElementById("submit-button").disabled=!1;var t=function(){return setTimeout((function(){w(!1),c(""),m(""),g("")}),4e3)};t(),clearTimeout(t)})).catch((function(e){D(!0),document.getElementById("submit-button").disabled=!1;var t=function(){return setTimeout((function(){D(!1)}),4e3)};t(),clearTimeout(t),console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"Contact Form "}),Object(x.jsxs)("form",{className:"contact-form text-center",onSubmit:function(e){return M(e)},children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",className:e.isDarkMode?"dark":"",children:"Email"}),Object(x.jsx)("input",{className:"form-control",type:"email",placeholder:"Optional",id:"email",name:"email",value:s,onChange:function(e){c(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"subject",className:e.isDarkMode?"dark":"",children:"Subject"}),Object(x.jsx)("input",{className:"form-control",placeholder:"Required",id:"subject",name:"subject",value:u,type:"text",onChange:function(e){m(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"message",className:e.isDarkMode?"dark":"",children:"Message"}),Object(x.jsx)("textarea",{className:"form-control text-area",placeholder:"Required",value:O,name:"message",id:"message",onChange:function(e){g(e.target.value)},cols:"30",rows:"5",required:!0})]}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("button",{id:"submit-button",name:"submit-button",className:"submit-btn",type:"submit",children:"Submit"})}),k&&(""===s||void 0===s?Object(x.jsx)("p",{className:"submit-success text-center",children:" Form submitted successfully. "}):Object(x.jsxs)("p",{className:"submit-success text-center",children:[" Acknowledge email has been sent to ",s," "]})),I&&Object(x.jsx)("p",{className:"submit-fail text-center",children:" Form submission failed. "})]})]})},F=(a(74),a.p+"static/media/avatar_lloyd.f8e75549.jpg"),P=[{id:1,name:"Daryl Fernandes",avatar:a.p+"static/media/avatar_daryl.94825575.jpg",role:"ML Engineer / Backend Developer",description:"I\u2019m eager to be a part of challenging and collaborative environment.\n\tI enjoy creative problem solving and working on creative projects.",email:"mailto:daryl.fernandes50@gmail.com",phone:"",github_url:"https://github.com/DarylFernandes99",linkedin_url:"https://www.linkedin.com/in/darylfernandes50/",hackerrank_url:"https://www.hackerrank.com/darylfernandes99/",whatsapp_url:""},{id:2,name:"Joel Dsouza",avatar:a.p+"static/media/avatar_joel.778952b8.jpg",role:"Fullstack Developer",description:"A tech enthusiast with constant hunger of learning new things and applying them in my work.\nHighly motivated and forever in the search for new opportunities.",email:"mailto:joeldzs44@gmail.com",phone:"",github_url:"https://www.github.com/joeldzs44/",linkedin_url:"https://www.linkedin.com/in/joeldzs44/",hackerrank_url:"https://www.hackerrank.com/joeldzs44/",whatsapp_url:""},{id:3,name:"Lloyd Dsouza",avatar:F,role:"Design Head / Content Writer",description:"Passionate UI/UX designer from Mumbai, India. My goal is to create simple yet beautiful designs. Feel free to reach out if you have an idea to discuss.",email:"mailto:lloyd.dsouza81@gmail.com",phone:"",github_url:"",linkedin_url:"https://www.linkedin.com/in/lloyddsouza99/",hackerrank_url:"",whatsapp_url:""}];var U=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:e.isDarkMode?"page-heading dark":"page-heading",children:"Developers"}),Object(x.jsx)("div",{className:"row",children:P.map((function(t){var a=t.id,n=t.name,s=t.avatar,c=t.role,o=t.description,r=t.email,i=t.phone,l=t.github_url,d=t.linkedin_url,u=t.hackerrank_url,m=t.whatsapp_url;return Object(x.jsx)("div",{className:"col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6",children:Object(x.jsxs)("div",{className:e.isDarkMode?"card dark-card":"card",children:[Object(x.jsx)("div",{className:e.isDarkMode?"profile-pic profile-pic-dark text-center":"profile-pic text-center",children:Object(x.jsx)("img",{src:s,alt:n})}),Object(x.jsxs)("h3",{className:e.isDarkMode?"dev-name dev-name-dark text-center":"dev-name text-center",children:[" ",n," "]}),Object(x.jsxs)("span",{className:e.isDarkMode?"dev-role dev-role-dark text-center":"dev-role text-center",children:[" ",c," "]}),Object(x.jsxs)("p",{className:"dev-description text-center",children:[Object(x.jsx)(b.m,{className:"quote-right"}),o,Object(x.jsx)(b.n,{className:"quote-left"})]}),Object(x.jsx)("div",{className:"dev-icons",children:Object(x.jsxs)("ul",{className:e.isDarkMode?"icon-list icon-list-dark":"icon-list",children:[r&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:r,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.e,{})," "]})]}),i&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:i,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.k,{})," "]})]}),l&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:l,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.g,{})," "]})]}),d&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:d,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.i,{})," "]})]}),u&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:u,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.h,{})," "]})]}),m&&Object(x.jsxs)("li",{children:[" ",Object(x.jsxs)("a",{href:m,className:"icon",target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(b.r,{})," "]})]})]})})]})},a)}))})]})})};var z=function(){var e=Object(n.useState)("true"===window.localStorage.getItem("dark-mode")),t=Object(r.a)(e,2),a=t[0],s=t[1];return window.localStorage.setItem("dark-mode",a),Object(x.jsx)(v.a,{children:Object(x.jsxs)("div",{className:a?"dark-mode":"",children:[Object(x.jsx)(y,{setIsDarkMode:function(){return s(!a)}}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)(k.c,{children:[Object(x.jsx)(k.a,{exact:!0,path:"/",children:Object(x.jsx)(D,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"/contact",children:Object(x.jsx)(_,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"/about",children:Object(x.jsx)(U,{isDarkMode:a})}),Object(x.jsx)(k.a,{exact:!0,path:"/projects",children:Object(x.jsx)(L,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"/projects/colorize",children:Object(x.jsx)(E,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"/projects/poem",children:Object(x.jsx)(B,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"/projects/lowlight",children:Object(x.jsx)(f,{isDarkMode:a})}),Object(x.jsx)(k.a,{path:"*",children:Object(x.jsx)(T,{isDarkMode:a})})]})}),Object(x.jsx)(I,{isDarkMode:a})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),W()}},[[75,1,2]]]);
//# sourceMappingURL=main.a8594832.chunk.js.map