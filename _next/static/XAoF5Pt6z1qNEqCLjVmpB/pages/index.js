(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return a})),n.d(t,"default",(function(){return f}));var r=n("q1tI"),c=n("sqll"),u=n("CZrd"),i=n("TOXp"),o=n("qKvR");r.createElement;var l={zoom:9,center:{lat:59.936,lng:30.314},gestureHandling:"greedy",clickableIcons:!1},a=!0;function f(){var e=Object(u.b)();return Object(o.c)(i.g,{value:.75},e&&Object(o.c)(c.a,{api:e,options:l},Object(o.c)(c.c,null,Object(o.c)(c.b,{lat:l.center.lat,lng:l.center.lng},Object(o.c)(p,null)))))}var s={name:"1t8uinr",styles:"place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;"},p=function(){return Object(o.c)("div",{css:s},"RGM")}},"m0L+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sqll:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b}));var r=n("rePB"),c=n("ODXe"),u=n("q1tI"),i=n("qKvR");u.createElement;function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=u.createContext(null),a=(function(){var e={}}(),{width:"100%",height:"100%"}),f=u.forwardRef((function(e,t){var n=e.api,f=e.options,s=e.children,p=u.useRef(null),d=u.useRef(!0),b=u.useState(null),v=Object(c.a)(b,2),O=v[0],w=v[1];return u.useImperativeHandle(t,(function(){return O?O.map:null}),[O]),u.useEffect((function(){if(d.current&&p.current){var e=new n.Map(p.current,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},"function"===typeof f?f(p.current):f));return d.current=!1,w({map:e,api:n}),function(){}}}),[n,f]),Object(i.c)(u.Fragment,null,Object(i.c)("div",{style:a,ref:p}),O&&Object(i.c)(l.Provider,{value:O},s))})),s=function(){return u.useContext(l)},p=n("i8i4"),d=(u.createElement,function(e){return e.children}),b=function(e){var t=s(),n=t.api,r=t.map,o=u.useRef(2),l=u.Children.toArray(e.children||[]),a=u.useState(null),f=Object(c.a)(a,2),d=f[0],b=f[1],v=u.useRef([]),O=u.useRef([]),w=function(e){return Math.round(e*o.current)/o.current};if(u.useLayoutEffect((function(){v.current=l})),u.useEffect((function(){if(n){o.current=window.devicePixelRatio;var e=new n.OverlayView,t=null;return e.onAdd=function(){t=document.createElement("div"),e.getPanes().floatPane.appendChild(t),b({element:t,view:e})},e.onRemove=function(){if(null!=t){var e=t.parentNode;null!=e&&e.removeChild(t),b(null)}},e.draw=function(){var t=e.getProjection();v.current.forEach((function(e,r){var c=e.props,u=c.lat,i=c.lng,o=O.current[r].current;if(null!=o){var l=t.fromLatLngToDivPixel(new n.LatLng(u,i));o.style.left=w(l.x)+"px",o.style.top=w(l.y)+"px"}}))},e.setMap(r),function(){e.setMap(null)}}}),[n,r]),null!=d&&null!=l&&null!=n){var g=d.view.getProjection();return p.createPortal(l.map((function(t,r){var c=g.fromLatLngToDivPixel(new n.LatLng(t.props.lat,t.props.lng));return null==O.current[r]&&(O.current[r]={current:null}),Object(i.c)("div",{key:t.key,ref:O.current[r],style:{position:"absolute",left:w(c.x),top:w(c.y),display:"grid",gridTemplate:"0/0"}},t,!0===e.debug&&Object(i.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),d.element)}return null}}},[["m0L+",1,2,4,0,3]]]);