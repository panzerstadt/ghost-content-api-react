(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={containerDiv:"fetchGhost_containerDiv__38Y-R",postDiv:"fetchGhost_postDiv__3hh3g",postDivBorder:"fetchGhost_postDivBorder__1GGS5",postDivPadding:"fetchGhost_postDivPadding__3hp4y",imgDiv:"fetchGhost_imgDiv__3AP3f",img:"fetchGhost_img__1CHJu",textDiv:"fetchGhost_textDiv__d0doP",text:"fetchGhost_text__1q3DW"}},14:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),r=a.n(c),i=(a(26),a(11)),s=a(12),l=a(17),m=a(13),p=a(18),u=a(14),v=a.n(u),d=(a(27),a(16)),h=a(19),f=a(1),g=a.n(f),E=new h.a({url:"https://gatsby-starter-blog-admin.now.sh",key:"53321cfbcc9440e2c7554b0c91",version:"v2"}),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return e.split(" ").slice(0,t).concat(["...more"]).join(" ")},D=function(e){var t=e.onFetched,a=Object(n.useState)([]),c=Object(d.a)(a,2),r=c[0],i=c[1];Object(n.useEffect)(function(){w().then(function(e){i(e)})},[]),Object(n.useEffect)(function(){t&&t(r)},[r]);var s=function(e){var t=e.post;return o.a.createElement("div",{className:g.a.postDiv},o.a.createElement("div",{className:g.a.postDivBorder,style:{width:300,height:400}},o.a.createElement("div",{className:g.a.postDivPadding},o.a.createElement("div",{className:g.a.imgDiv,style:{height:300}},o.a.createElement("img",{className:g.a.img,src:t.feature_image,alt:"img"})),o.a.createElement("div",{className:g.a.textDiv},o.a.createElement("p",{className:g.a.text},_(t.excerpt))))))},l=function(e){var t=e.post;return o.a.createElement("div",{className:g.a.postDiv},o.a.createElement("div",{className:g.a.postDivBorder,style:{width:300,height:400}},o.a.createElement("div",{className:g.a.postDivPadding,style:{justifyContent:"center"}},o.a.createElement("div",{className:g.a.textDiv},o.a.createElement("p",{className:g.a.text,style:{fontSize:"1.3rem",fontWeight:200,padding:30}},_(t.excerpt))))))};return o.a.createElement("div",{className:g.a.containerDiv},r.map(function(e){return e.feature_image?o.a.createElement(s,{post:e}):o.a.createElement(l,{post:e})}))},w=function(){return E.posts.browse().then(function(e){return e}).catch(function(e){return console.log(e)})},b=w,N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={posts:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b().then(function(t){return e.setState({posts:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),o.a.createElement(D,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.22c9fb2c.chunk.js.map