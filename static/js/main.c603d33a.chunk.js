(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(42),l=a.n(o),r=a(10),s=a(11),c=a(13),d=a(12),m=a(14),u=a(43),p=a.n(u),h=a(76),v=a(1),g=a(77),f=a.n(g).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{key:"AIzaSyB3_HbnLyOVzWO79viRsr08ZAIs41KU8vs"}}),y=function(e){return f.get("/channels",{params:{id:e,part:"contentDetails"}})},b=function(e){return f.get("/playlistItems",{params:{playlistId:e,part:"snippet",maxResults:50}})},E=(n.Component,a(78)),w=a.n(E),k=a(79),x=a.n(k),N={card:{cursor:"pointer"},cardTitle:{fontSize:"1.125rem",lineHeight:"1.4",fontWeight:"600",margin:"0",textAlign:"center",color:"#ececec"},figure:{display:"block",width:"100%",padding:"0",margin:"0"},img:{display:"block",maxWidth:"100%",height:"auto"}},O=function(e){e.large;var t=e.video,a=e.handleVideo,n=t.snippet,o=n.title,l=n.thumbnails.maxres;return i.a.createElement("article",{className:"col l4 m6 s12"},i.a.createElement(x.a,{transitionName:"video-item",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},i.a.createElement("div",{className:"VideosItem card",style:N.card},i.a.createElement("figure",{style:N.figure,className:"card-image waves-effect waves-block waves-light",onClick:function(){return a(t)}},l&&i.a.createElement("img",{style:N.img,src:l.url,width:l.width,height:l.height,title:o,alt:o})),i.a.createElement("div",{className:"card-content",style:{padding:"10px",background:"#30475e"}},i.a.createElement("span",{style:N.cardTitle,className:"card-title",title:o},o)))))},I={transitionDuration:0},j=function(e){var t=e.videos,a=e.handleVideo,n=e.isLoading;return t.length>0?i.a.createElement(w.a,{className:"VideosList row",options:I},t.map(function(e,t){return i.a.createElement(O,{key:t,video:e,handleVideo:a})})):i.a.createElement("div",{className:"card-panel grey lighten-5",style:n?{display:"none"}:{}},"Nenhum v\xeddeo foi encontrado para esse canal")},C=function(e){var t=e.video,a=e.handleVideo;if(!t)return document.body.classList.remove("modal-open"),i.a.createElement("span",null);var n=t.snippet.title,o=t.snippet.description,l=t.snippet.resourceId.videoId,r={modal:{zIndex:"10000",position:"fixed",width:"100%",height:"100%",top:"0",right:"0",bottom:"0",left:"0",display:"table",backgroundColor:"transparent"},modalOverlay:{zIndex:"1",position:"fixed",width:"100%",height:"100%",top:"0",right:"0",bottom:"0",left:"0",backgroundColor:"rgba(0, 0, 0, .95)",cursor:"pointer"},modalInner:{zIndex:"2",position:"relative",height:"100vh",maxWidth:"960px",overflowY:"auto",marginRight:"auto",marginLeft:"auto",padding:"40px",color:"#fff"},modalClose:{zIndex:"10000",position:"absolute",top:"30px",right:"30px",background:"none transparent",color:"#fff",border:"none",cursor:"pointer"},videoContainer:{position:"relative",paddingBottom:"56.25%",paddingTop:"25px",height:"0"},videoIframe:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}};return document.body.classList.add("modal-open"),i.a.createElement("article",{className:"card",style:r.modal},i.a.createElement("div",{style:r.modalOverlay,onClick:function(){return a(null)}}),i.a.createElement("button",{style:r.modalClose,onClick:function(){return a(null)}},i.a.createElement("i",{className:"material-icons",style:{fontSize:"45px"}},"close")),i.a.createElement("div",{style:r.modalInner},i.a.createElement("div",{className:"card-image",style:r.videoContainer},i.a.createElement("iframe",{style:r.videoIframe,src:"https://www.youtube.com/embed/".concat(l),frameborder:"0",allowFullScreen:!0,title:n})),i.a.createElement("div",{className:"card-content"},i.a.createElement("h4",{className:"card-title"},n),i.a.createElement("p",null,o))))},L=(a(235),a(80)),V=a.n(L),S={logo:{width:"100px",display:"inline-block"}},z=function(e){e.title;return i.a.createElement("header",{className:"AppHeader center"},i.a.createElement("h1",{style:{display:"block",width:"100%"}},i.a.createElement("img",{src:V.a,alt:"React logo",style:S.logo}),i.a.createElement("span",null,"Cycling, Exploring and Culinary")))},A={spinner:{padding:"60px 30px",textAlign:"center"},preloader:{display:"inline-block"},span:{display:"block",margin:"5px"}},W=function(){return i.a.createElement("div",{className:"Spinner",style:A.spinner},i.a.createElement("div",{className:"preloader-wrapper small active",style:A.preloader},i.a.createElement("div",{className:"spinner-layer spinner-green-only"},i.a.createElement("div",{className:"circle-clipper left"},i.a.createElement("div",{className:"circle"})),i.a.createElement("div",{className:"gap-patch"},i.a.createElement("div",{className:"circle"})),i.a.createElement("div",{className:"circle-clipper right"},i.a.createElement("div",{className:"circle"})))),i.a.createElement("span",{style:A.span},"Carregando v\xeddeos..."))},B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isLoading:!1,channel:null,videos:[],video:null},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a.handleVideo=a.handleVideo.bind(Object(v.a)(Object(v.a)(a))),a.escFunction=a.escFunction.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit("UC5Oqw8gxILTZv2C7gB3v_vA"),document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(p.a.mark(function e(t){var a=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({videos:[]}),this.setState({isLoading:!0}),e.next=4,y(t).then(function(e){if(e.data.items.length>0){e.data.items[0].contentDetails.relatedPlaylists.uploads;return b("PLep7gtyP6dSIBInq2wgIEjnO7tevMNixK").then(function(e){console.log(e.data),a.setState({videos:e.data.items})})}}).finally(function(){return a.setState({isLoading:!1})});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleVideo",value:function(e){this.setState({video:e})}},{key:"escFunction",value:function(e){27===e.keyCode&&this.handleVideo(null)}},{key:"render",value:function(){var e=i.a.createElement("span",null);return this.state.isLoading&&(e=i.a.createElement(W,null)),i.a.createElement("div",{className:"container"},i.a.createElement(z,{title:"Gowes Video"}),e,i.a.createElement(j,{handleVideo:this.handleVideo,videos:this.state.videos,isLoading:this.state.isLoading}),i.a.createElement(C,{handleVideo:this.handleVideo,video:this.state.video}))}}]),t}(n.Component),F=(a(236),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(B,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a.p+"static/media/pic.bee21921.png"},81:function(e,t,a){e.exports=a(237)}},[[81,1,2]]]);
//# sourceMappingURL=main.c603d33a.chunk.js.map