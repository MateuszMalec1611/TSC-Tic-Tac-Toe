(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[1],{29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(69),a=n(70),c=n(71),o=(Object(a.a)({apiKey:"AIzaSyDp0UwbkpsODu37N6rZna1kTz0xtywet7M",authDomain:"tic-tac-toe-6c9a9.firebaseapp.com",projectId:"tic-tac-toe-6c9a9",storageBucket:"tic-tac-toe-6c9a9.appspot.com",messagingSenderId:"601183528316",appId:"1:601183528316:web:699c29bb27820b2614b0f9"}),Object(c.a)()),i=Object(r.a)()},30:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.GET_USER_DATA="GET_USER_DATA",e.GET_USERS_DATA="GET_USERS_DATA",e.UPDATE_USER_DATA="UPDATE_USER_DATA",e.LOADING="LOADING",e.ERROR="ERROR"}(r||(r={}))},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var r="768px",a="1100px",c="1366px",o={mobileBreakpoint:"(min-width: ".concat("374px",")"),tabletBreakpoint:"(min-width: ".concat(r,")"),desktopBreakpoint:"(min-width: ".concat(a,")"),largeDesktopBreakpoint:"(min-width: ".concat(c,")")},i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s={in:{opacity:1,x:0},out:{opacity:0,x:"-100vw"}},u={type:"tween",ease:"circOut",duration:.7},l={initial:"out",animate:"in",exit:"out"}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(44),c=function(){return Object(r.useContext)(a.a)}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r),c=n(1),o=n(12),i=n(5),s=n(32),u=n(29),l=n(24),d=n(10),b=Object(i.createContext)({});t.b=function(e){var t=e.children,n=Object(i.useState)(),r=Object(o.a)(n,2),p=r[0],j=r[1],f=Object(i.useState)(!0),h=Object(o.a)(f,2),x=h[0],O=h[1];Object(i.useEffect)((function(){return u.a.onAuthStateChanged((function(e){j(e),O(!1)}))}),[]);var m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(u.a,t,n);case 2:r=e.sent,c=r.user,Object(l.g)(Object(l.b)(u.b,"ranking",c.email),{email:c.email,uid:c.uid,gamesPlayed:0,wonGames:0,lostGames:0});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g={currentUser:p,signup:m,login:function(e,t){return Object(s.d)(u.a,e,t)},logout:function(){return Object(s.e)(u.a)},resetPassword:function(e){return Object(s.c)(u.a,e)}};return Object(d.jsx)(b.Provider,{value:g,children:!x&&t})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n.n(r),c=n(1),o=n(12),i=n(27),s=n(5),u=n(42),l=n(64),d=n(30),b=n(10),p=Object(s.createContext)({}),j={loading:{appLoading:!1,componentLoading:!1},error:!1,errorMessage:"",userData:{email:"",gamesPlayed:0,lostGames:0,wonGames:0},usersData:[]},f=function(e,t){switch(t.type){case d.a.GET_USER_DATA:return Object(i.a)(Object(i.a)({},e),{},{userData:t.payload,error:!1});case d.a.GET_USERS_DATA:return Object(i.a)(Object(i.a)({},e),{},{usersData:t.payload,error:!1});case d.a.UPDATE_USER_DATA:return Object(i.a)(Object(i.a)({},e),{},{userData:{gamesPlayed:t.payload.gamesPlayed,lostGames:t.payload.lostGames,wonGames:t.payload.wonGames},error:!1});case d.a.LOADING:return Object(i.a)(Object(i.a)({},e),{},{loading:t.payload});case d.a.ERROR:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload.error,errorMessage:t.payload.errorMessage});default:return e}};t.b=function(e){var t=e.children,n=Object(s.useReducer)(f,j),r=Object(o.a)(n,2),i=r[0],h=r[1],x=Object(u.a)().currentUser,O=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h({type:d.a.LOADING,payload:{appLoading:!0}}),e.next=4,Object(l.a)(x.email);case 4:if(t=e.sent){e.next=7;break}throw new Error("Failed to get user data");case 7:h({type:d.a.GET_USER_DATA,payload:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.message);case 13:return e.prev=13,h({type:d.a.LOADING,payload:{appLoading:!1}}),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x&&O()}),[x]),Object(b.jsx)(p.Provider,{value:{ticTacToeState:i,ticTacToeDispatch:h},children:t})}},49:function(e,t,n){"use strict";var r,a,c,o,i=n(21),s=n(18),u=n(41),l=Object(s.d)(r||(r=Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),d=Object(s.b)(a||(a=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    height: 100vh;\n"]))),b=s.c.div(c||(c=Object(i.a)(["\n    ","\n"])),(function(e){return e.center&&d})),p=s.c.div(o||(o=Object(i.a)(["\n    margin: auto;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    border: 10px solid transparent;\n    border-top: 10px solid ",";\n    border-bottom: 10px solid ",";\n    animation: "," 1.8s linear infinite;\n\n    @media "," {\n        width: 80px;\n        height: 80px;\n    }\n"])),(function(e){return e.theme.colors.whiteColor}),(function(e){return e.theme.colors.whiteColor}),l,u.a.tabletBreakpoint),j=n(10);t.a=function(e){var t=e.center;return Object(j.jsx)(b,{center:t,children:Object(j.jsx)(p,{})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(47),c=function(){return Object(r.useContext)(a.a)}},61:function(e,t,n){"use strict";n(5);var r,a=n(21),c=n(41),o=n(18).c.button(r||(r=Object(a.a)(["\n    padding: 10px 15px;\n    margin: ",";\n    width: ",";\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 12px 16px;\n        font-size: ",";\n    }\n"])),(function(e){return e.margin}),(function(e){return e.width}),(function(e){return e.theme.fontSizes.XS}),(function(e){return e.theme.colors.whiteColor}),(function(e){return e.theme.colors.transparentBlackColor}),(function(e){return e.theme.colors.blackColor}),(function(e){return e.theme.colors.whiteColor}),c.a.tabletBreakpoint,(function(e){return e.theme.fontSizes.S})),i=n(10);t.a=function(e){var t=e.children,n=e.width,r=e.margin,a=e.onClick,c=e.type;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o,{onClick:a,margin:r,width:n,type:c,children:t})})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(0),a=n.n(r),c=n(1),o=n(24),i=n(29),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(o.b)(i.b,"ranking",t),e.next=3,Object(o.c)(n);case 3:if(!(r=e.sent).exists()){e.next=6;break}return e.abrupt("return",r.data());case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.f)(Object(o.a)(i.b,"ranking")),e.next=3,Object(o.d)(t);case 3:return n=e.sent,r=[],n.forEach((function(e){return r.push(e.data())})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(o.b)(i.b,"ranking",t),e.next=3,Object(o.h)(r,{gamesPlayed:n.gamesPlayed,lostGames:n.lostGames,wonGames:n.wonGames});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},81:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s=n(5),u=n.n(s),l=n(68),d=n.n(l),b=n(51),p=n(18),j={colors:{fontColor:"#fff",whiteColor:"#fff",blackColor:"#000",redColor:"tomato",greenColor:"#42f54b",lightGrayColor:"#535353",darkerGrayColor:"#2d2d2dc2",transparentBlackColor:"#000000c2",transparentGrayColor:"rgb(255 255 255 / 75%)"},fontSizes:{XS:"14px",S:"16px",M:"18px",L:"26px",XL:"20px",XXL:"22px",XXXL:"26px",XXXXL:"36px",ExtraSLarge:"46px",ExtraLarge:"60px"}},f=(n(81),n(90)),h=n(75),x=n(15),O=n(42),m=n(60),g=n(61),w=n(21),v=p.c.div(r||(r=Object(w.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    text-align: center;\n"]))),y=p.c.p(a||(a=Object(w.a)(["\n    font-size: ",";\n    color: ",";\n"])),(function(e){return e.theme.fontSizes.L}),(function(e){return e.theme.colors.redColor})),k=p.c.pre(c||(c=Object(w.a)(["\n    margin: 10px 0;\n    font-size: ",";\n    white-space: pre-wrap;\n"])),(function(e){return e.theme.fontSizes.M})),A=n(10),S=function(e){var t=e.error,n=e.resetErrorBoundary;return Object(A.jsxs)(v,{role:"alert",children:[Object(A.jsx)(y,{children:"Something went wrong:"}),Object(A.jsx)(k,{children:t.message}),Object(A.jsx)(g.a,{onClick:n,margin:"0",width:"300px",children:"Try again"})]})},E=n(49),T=p.c.div(o||(o=Object(w.a)(["\n    padding: 0 5px;\n    margin: 0 auto;\n    max-width: 1100px;\n"]))),D=p.c.div(i||(i=Object(w.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    overflow-x: hidden;\n"]))),G=u.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,106))})),C=u.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,109))})),R=u.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,110))})),z=u.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,111))})),_=u.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,112))})),P=u.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,108))})),L=u.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,113))})),U=function(){var e=Object(O.a)().currentUser,t=Object(m.a)().ticTacToeState.loading.appLoading;return Object(A.jsx)(T,{children:Object(A.jsx)(D,{children:Object(A.jsx)(f.a,{children:t?Object(A.jsx)(E.a,{center:!0}):Object(A.jsx)(h.ErrorBoundary,{FallbackComponent:S,onReset:function(){return window.location.reload()},children:Object(A.jsx)(s.Suspense,{fallback:Object(A.jsx)(E.a,{center:!0}),children:Object(A.jsxs)(x.d,{children:[Object(A.jsx)(x.b,{exact:!0,path:"/",children:e?Object(A.jsx)(R,{}):Object(A.jsx)(x.a,{to:"/auth"})}),Object(A.jsx)(x.b,{path:"/auth",component:G}),Object(A.jsx)(x.b,{path:"/forgot-password",component:C}),Object(A.jsx)(x.b,{path:"/ticTacToe/1vs1",children:e?Object(A.jsx)(z,{}):Object(A.jsx)(x.a,{to:"/auth"})}),Object(A.jsx)(x.b,{path:"/ticTacToe/vsAI",children:e?Object(A.jsx)(_,{}):Object(A.jsx)(x.a,{to:"/auth"})}),Object(A.jsx)(x.b,{path:"/ranking",children:e?Object(A.jsx)(P,{}):Object(A.jsx)(x.a,{to:"/auth"})}),Object(A.jsx)(x.b,{path:"/profile",children:e?Object(A.jsx)(L,{}):Object(A.jsx)(x.a,{to:"/auth"})})]})})})})})})},B=n(44),X=n(47);d.a.render(Object(A.jsx)(u.a.StrictMode,{children:Object(A.jsx)(B.b,{children:Object(A.jsx)(X.b,{children:Object(A.jsx)(p.a,{theme:j,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(U,{})})})})})}),document.getElementById("root"))}},[[88,2,3]]]);
//# sourceMappingURL=main.ae3432f1.chunk.js.map