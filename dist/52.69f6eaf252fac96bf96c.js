(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[52],{8052:(e,n,t)=>{"use strict";t.r(n);var a=t(7271),r=t.n(a),o=t(7650),i=t.n(o),c=t(3038),l=t.n(c),s=t(7757),p=t.n(s),u=t(8926),d=t.n(u),m=t(334),g=t(8577),f=t(2195),h=t(71),b=t(1120),v=t(7623),E=t(3875),k=(0,b.Z)((function(e){return(0,v.Z)({bar:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}));const y=function(){var e=k();return r().createElement("div",{className:e.bar},r().createElement(E.Z,null))};var S=t(9713),Z=t.n(S),x=t(8568),w=t(3530),C=t(8358),B=t(2318),T=(0,b.Z)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"},a:{textDecoration:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap",justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:Z()({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function N(e){var n=e.isSignedIn,t=e.onSignOut,a=T();return r().createElement(r().Fragment,null,r().createElement(x.Z,{position:"static",color:"default",elevation:0,className:a.appBar},r().createElement(C.Z,{className:a.toolbar},r().createElement(B.Z,{variant:"h6",color:"inherit",noWrap:!0,component:m.Link,to:"/"},"This is the container hosted by node.js server"),r().createElement(w.Z,{color:"primary",variant:"outlined",className:a.link,component:m.Link,to:n?"/":"/auth2/signin",onClick:function(){n&&t&&t()}},n?"Logout":"Login"))))}var L=t(6992),j=t.n(L),I=(0,a.lazy)((function(){return t.e(45).then(t.bind(t,8045))})),O=(0,g.Z)({productionPrefix:"co"}),P=(0,h.lX)(),H=function(){var e=d()(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()("http://localhost:8080/home");case 3:e.sent.status||alert("OH ! Snap...."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();const R=function(){var e=(0,a.useState)(!1),n=l()(e,2),t=n[0],o=n[1];return(0,a.useEffect)((function(){t&&P.push("/dashboard"),H()}),[t]),r().createElement(m.Router,{history:P},r().createElement(f.ZP,{generateClassName:O},r().createElement("div",null,r().createElement(N,{onSignOut:function(){return o(!1)},isSignedIn:t}),r().createElement(a.Suspense,{fallback:r().createElement(y,null)},r().createElement(m.Switch,null,r().createElement(m.Route,{path:"/",component:I}))))))};i().render(r().createElement(R,null),document.querySelector("#root"))}}]);