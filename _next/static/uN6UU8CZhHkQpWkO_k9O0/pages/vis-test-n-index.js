(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1orz":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vis-test-n-index",function(){return n("mQb5")}])},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},CZrd:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ODXe");var o=n("q1tI"),a=new Map,i=new Map,u={emitter:{events:{},emit(e,...t){for(let n of this.events[e]||[])n(...t)},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=this.events[e].filter(e=>e!==t)}},api:null,error:null},c=document.getElementsByTagName("head")[0],l=c.insertBefore;c.insertBefore=function(e,t){e.href&&e.href.indexOf("//fonts.googleapis.com/css?family=Roboto")>-1||l.call(c,e,t)},window.gm_authFailure=function(){u.error=new Error("Gmap encountered auth error. See console for more details."),u.api=null,u.emitter.emit("change")},window.rgm_mapLoaded=function(){null==u.error&&(u.api=window.google.maps),u.emitter.emit("change")};var f=function(){var e=o.useState(u.api),t=Object(r.a)(e,2),n=t[0],c=t[1],l="AIzaSyBC4njLnT0Gr9Lo_necn1pHL5OdzSMHXHY";var f=function(e){var t=o.useState("loading"),n=Object(r.a)(t,2),u=n[0],c=n[1];return o.useEffect((function(){var t=!0,n=function(){a.set(e,"done"),t&&c("done")},r=function(){a.set(e,"failed"),t&&c("failed")},o=a.get(e);if(null==o){var u=document.createElement("script");u.async=!0,u.defer=!0,u.importance="low",u.src=e,u.addEventListener("load",n),u.addEventListener("error",r),a.set(e,"loading"),i.set(e,u),document.body&&document.body.appendChild(u)}if("loading"===o){var l=i.get(e);if(l)return l.addEventListener("load",n),l.addEventListener("error",r),function(){l.removeEventListener("load",n),l.removeEventListener("error",r)}}return"done"===o&&c("done"),"failed"===o&&c("failed"),function(){t=!1}}),[e]),u}("https://maps.googleapis.com/maps/api/js?key=".concat(l,"&libraries=places&callback=rgm_mapLoaded"));return o.useEffect((function(){return null==n&&null!=u.api&&c(u.api),u.emitter.on("change",(function(){c(u.api)}))}),[n,f]),n}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");var o=n("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},mQb5:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n("KQm4"),o=n("ODXe"),a=n("q1tI"),i=n("sqll"),u=n("CZrd"),c=n("TOXp"),l=n("qKvR"),f=(a.createElement,{zoom:9,center:{lat:59.936,lng:30.314},gestureHandling:"greedy",clickableIcons:!1}),s=function(e){return Array.from(Array(e),(function(){return{lat:f.center.lat+2*(Math.random()-.5)*.6,lng:f.center.lng+2*(Math.random()-.5)*.6}}))},d=!0;function p(){var e=Object(u.a)(),t=a.useState(s(200)),n=Object(o.a)(t,2),d=n[0],p=n[1];return a.useEffect((function(){var e=new Date,t=10,n=setInterval((function(){p((function(n){var o=(new Date-e)/1e3;o>30&&(t=9),o>60&&(t=0);var a=Object(r.a)(n);a.splice(Math.max(0,Math.floor(Math.random()*a.length)-10),10);var i=s(t);return[].concat(Object(r.a)(a),Object(r.a)(i))}))}),100);return function(){clearInterval(n)}}),[]),Object(l.c)(c.g,{value:.75},e&&Object(l.c)(i.a,{api:e,options:f},Object(l.c)(i.c,null,d.map((function(e,t){return Object(l.c)(i.b,{key:t,lat:e.lat,lng:e.lng},Object(l.c)(v,{style:{alignSelf:"end",justifySelf:"center"},size:18,color:"red"}))})))))}var v=function(e){var t=e.size,n=e.color,r=e.style;return Object(l.c)("svg",{style:r,xmlns:"http://www.w3.org/2000/svg",height:t,width:t,viewBox:"2 2 20 20",fill:n},Object(l.c)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),Object(l.c)("path",{d:"M0 0h24v24H0z",fill:"none"}))}},sqll:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d}));var r=n("ODXe"),o=n("q1tI"),a=n("qKvR"),i=(o.createElement,o.createContext(null)),u=(function(){var e={}}(),{width:"100%",height:"100%"}),c=o.forwardRef((function(e,t){var n=e.api,c=e.options,l=e.children,f=o.useRef(null),s=o.useRef(!1),d=o.useState(null),p=Object(r.a)(d,2),v=p[0],m=p[1];return o.useImperativeHandle(t,(function(){return v?v.map:null}),[v]),o.useEffect((function(){if(!s.current&&f.current){var e=new n.Map(f.current,"function"===typeof c?c(f.current):c);return s.current=!0,m({map:e,api:n}),function(){}}}),[n,c]),Object(a.c)(o.Fragment,null,Object(a.c)("div",{style:u,ref:f}),v&&Object(a.c)(i.Provider,{value:v},l))})),l=function(){return o.useContext(i)},f=n("i8i4"),s=(o.createElement,function(e){return e.children}),d=function(e){var t=l(),n=t.api,i=t.map,u=o.useRef(2),c=o.Children.toArray(e.children||[]),s=o.useState(null),d=Object(r.a)(s,2),p=d[0],v=d[1],m=o.useRef([]),b=o.useRef([]),h=function(e){return Math.round(e*u.current)/u.current};if(o.useLayoutEffect((function(){m.current=c})),o.useEffect((function(){if(n){u.current=window.devicePixelRatio;var e=new n.OverlayView,t=null;return e.onAdd=function(){t=document.createElement("div"),e.getPanes().floatPane.appendChild(t),v({element:t,view:e})},e.onRemove=function(){if(null!=t){var e=t.parentNode;null!=e&&e.removeChild(t),v(null)}},e.draw=function(){var t=e.getProjection();m.current.forEach((function(e,r){var o=e.props,a=o.lat,i=o.lng,u=b.current[r].current;if(null!=u){var c=t.fromLatLngToDivPixel(new n.LatLng(a,i));u.style.left=h(c.x)+"px",u.style.top=h(c.y)+"px"}}))},e.setMap(i),function(){e.setMap(null)}}}),[n,i]),null!=p&&null!=c&&null!=n){var y=p.view.getProjection();return f.createPortal(c.map((function(t,r){var o=y.fromLatLngToDivPixel(new n.LatLng(t.props.lat,t.props.lng));return null==b.current[r]&&(b.current[r]={current:null}),Object(a.c)("div",{key:t.key,ref:b.current[r],style:{position:"absolute",left:h(o.x),top:h(o.y),display:"grid",gridTemplate:"0/0"}},t,!0===e.debug&&Object(a.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),p.element)}return null}}},[["1orz",1,2,3,0,4]]]);