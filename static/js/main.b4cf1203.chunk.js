(this["webpackJsonpteam-collab"]=this["webpackJsonpteam-collab"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.e1e7fe4c.png"},,function(e,t,a){e.exports=a.p+"static/media/collaborate.366949f8.png"},function(e,t,a){e.exports=a.p+"static/media/track.5ecbf2f9.png"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(19),a(20),a(10)),i=a.n(c),s=a(2),m=a(3),u=a(5),d=a(4),h=a(6),p=(a(21),a(7)),f=a.n(p),E=a(11),v="07b0f171322dd9f1dd16e17644dd2945",g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={city:[],code:[]},a.componentDidMount=Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.ipstack.com/check?access_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.setState({city:n.city,code:n.region_code});case 7:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.city,a=e.code;return r.a.createElement("p",null,t,", ",a)}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,contents:[]},a.abortController=new AbortController,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json?category=inspire",{signal:this.abortController.signal}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,contents:t.contents})}),(function(t){e.setState({isLoaded:!1,error:t})}))}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.contents;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"quote-container"},r.a.createElement("p",null,"You are in "),r.a.createElement(g,null),r.a.createElement("h2",null,"Quote of the day"),r.a.createElement("p",null,'"',n.quotes[0].quote,'" - ',n.quotes[0].author," ")):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),y=(a(23),a(1)),w=a.n(y),k=(a(29),a(12)),O=a.n(k),N=a(13),I=a.n(N),j=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"leftSide"},r.a.createElement(w.a,{animateIn:"bounceInLeft",animateOut:"bounceOutLeft"},r.a.createElement("h2",null,"The ultimate team collaboration tool"),r.a.createElement("p",null,"collab.com, ranked #1 for productivity, helps teams manage and execute projects that deliver results on time."),r.a.createElement("a",{href:"get-started",className:"getStarted"},"Get Started"))),r.a.createElement("div",{className:"rightSide"},r.a.createElement(w.a,{animateIn:"bounceInRight",animateOut:"bounceOutRight"},r.a.createElement("video",{src:"https://dapulse-res.cloudinary.com/video/upload/f_auto/remote_mondaycom_static/video/main/three-board-views-with-shadow/three-board-views-with-shadow.mp4",style:{width:"60%",height:"60%"},preload:"auto",muted:!0,loop:"1",poster:"https://dapulse-res.cloudinary.com/image/upload/f_auto/remote_mondaycom_static/video/main/three-board-views-with-shadow/three-board-views-with-shadow.jpg",playsInline:"","webkit-playsinline":"",autoPlay:!0,className:"taskPhoto"})))),r.a.createElement("div",{className:"container second"},r.a.createElement("div",{className:"leftSide"},r.a.createElement(w.a,{animateIn:"bounceInLeft",animateOut:"bounceOutLeft"},r.a.createElement("video",{src:"https://dapulse-res.cloudinary.com/video/upload/f_auto/remote_mondaycom_static/video/main/invite-users/invite-users.mp4",style:{width:"70%",height:"70%"},preload:"auto",muted:!0,loop:!0,poster:"https://dapulse-res.cloudinary.com/image/upload/f_auto/remote_mondaycom_static/video/main/invite-users/invite-users.png",playsInline:!0,"webkit-playsinline":"",autoPlay:!0}))),r.a.createElement("div",{className:"rightSide"},r.a.createElement(w.a,{animateIn:"bounceInRight",animateOut:"bounceOutRight"},r.a.createElement("span",null,"Plan"),r.a.createElement("h2",null,"Visually map out everything"),r.a.createElement("p",null,"Planning projects is easier when you can organize your team's tasks in a visual way. Create customizable workflows, see who\u2019s working on what, assign teammates to new tasks, set due dates, and prioritize with color-coded labels.")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"leftSide"},r.a.createElement(w.a,{animateIn:"bounceInLeft",animateOut:"bounceOutLeft"},r.a.createElement("h2",null,"Work together more efficeintly"),r.a.createElement("span",null,r.a.createElement("p",null,"Collaborate")),r.a.createElement("p",null,"Collaborate directly in the context of any project with a designated space for real-time communication. Share files, comments and feedback in one central place, mentioning all relevant teammates with automatic notifications on every update."))),r.a.createElement("div",{className:"rightSide"},r.a.createElement(w.a,{animateIn:"bounceInRight",animateOut:"bounceOutRight"},r.a.createElement("img",{src:O.a,alt:"taskPhotos",className:"taskPhoto"})))),r.a.createElement("div",{className:"container second"},r.a.createElement("div",{className:"leftSide"},r.a.createElement(w.a,{animateIn:"bounceInLeft",animateOut:"bounceOutLeft"},r.a.createElement("img",{src:I.a,alt:"plan",style:{width:"50%",height:"50%"}}))),r.a.createElement("div",{className:"rightSide"},r.a.createElement(w.a,{animateIn:"bounceInRight",animateOut:"bounceOutRight"},r.a.createElement("span",null,"Track"),r.a.createElement("h2",null,"Keep an eye on progress, your way"),r.a.createElement("p",null,"Zoom in on the nitty-gritty details or zoom out and see the big picture. You decide on the way you want to track your team's progress. Enjoy high-level dashboards and multiple view options, from Calendar and Timeline to Gantt and Pie charts")))),r.a.createElement("footer",{className:"contain"},r.a.createElement("div",{className:"allrights"},r.a.createElement("p",null,"All Rights Reserved"),r.a.createElement("p",null,"\xa9collab.com 2019")),r.a.createElement("div",{className:"products"},r.a.createElement("h4",null,"Our Products"),r.a.createElement("a",{href:"products"},"Product"),r.a.createElement("a",{href:"stories"},"Stories"),r.a.createElement("a",{href:"pricing"},"Pricing"),r.a.createElement("a",{href:"enterprise"},"Enterprise"),r.a.createElement("a",{href:"affiliates"},"Partners/Affiliates"),r.a.createElement("a",{href:"find"},"Find a Partner"),r.a.createElement("a",{href:"templates"},"Templates"),r.a.createElement("a",{href:"integrations"},"Integrations"),r.a.createElement("a",{href:"developers"},"Developers"),r.a.createElement("a",{href:"students"},"Students")),r.a.createElement("div",{className:"team"},r.a.createElement("h4",null,"Our team"),r.a.createElement("a",{href:"about"},"About Us"),r.a.createElement("a",{href:"contact"},"Contact Us"),r.a.createElement("a",{href:"career"},"Careers"),r.a.createElement("a",{href:"news"},"In The News"),r.a.createElement("a",{href:"press"},"Press Kit"),r.a.createElement("a",{href:"blog"},"Blog"))))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h4",{className:"name"},"collab.com"),r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null," Team Work")),r.a.createElement(b,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b4cf1203.chunk.js.map