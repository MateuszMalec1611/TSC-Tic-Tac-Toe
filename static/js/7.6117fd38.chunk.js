(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[7],{77:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),function(n){n.BUTTON="BUTTON",n.LINK="LINK"}(r||(r={}))},78:function(n,t,e){"use strict";e(6);var r,a,o,c=e(77),i=e(30),s=e(54),u=e(52),p=e(28),d=Object(p.b)(r||(r=Object(i.a)(["\n    margin: ",";\n    width: ",";\n    padding: 5px 15px;\n    height: max-content;\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 6px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.margin}),(function(n){return n.width}),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.whiteColor}),u.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),l=p.c.button(a||(a=Object(i.a)(["\n    ","\n    padding: 7px 15px;\n\n    @media "," {\n        padding: 8px 16px;\n    }\n"])),d,u.a.tabletBreakpoint),b=Object(p.c)(s.b)(o||(o=Object(i.a)(["\n    ","\n"])),d),h=e(10);t.a=function(n){var t=n.children,e=n.typeOf,r=n.width,a=n.margin,o=n.onClick,i=n.path,s=n.type;return Object(h.jsx)(h.Fragment,{children:e===c.a.BUTTON?Object(h.jsx)(l,{onClick:o,margin:a,width:r,type:s,children:t}):Object(h.jsx)(b,{margin:a,width:r,to:i,children:t})})}},79:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),function(n){n.LOGIN="LOGIN",n.SIGNUP="SIGNUP",n.LOGOUT="LOGOUT",n.RESET_PASSWORD="RESET_PASSWORD"}(r||(r={}))},80:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r,a=e(30),o=e(28).c.div(r||(r=Object(a.a)(["\n    padding: 20px;\n    margin-top: 80px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: ",";\n    border-radius: 4px;\n    box-shadow: 3px 3px 14px black;\n"])),(function(n){return n.theme.colors.lightGrayColor}))},81:function(n,t,e){"use strict";e(6);var r,a=e(30),o=e(28),c=e(52),i=o.c.h2(r||(r=Object(a.a)(["\n    margin: 20px 0;\n    font-size: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XXXL}),c.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XXXXL})),s=e(10);t.a=function(n){var t=n.children;return Object(s.jsx)(i,{children:t})}},82:function(n,t,e){"use strict";e(6);var r=e(80),a=e(10);t.a=function(n){var t=n.children;return Object(a.jsx)(r.a,{children:t})}},83:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(1),c=e(14),i=e(79),s=e(29),u=e(40),p=e(53);t.a=function(){var n=Object(p.a)().ticTacToeDispatch,t=Object(u.a)(),e=t.login,r=t.signup,d=t.logout,l=t.resetPassword,b=Object(c.g)(),h=function(){var t=Object(o.a)(a.a.mark((function t(o,c,u,p,h){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n({type:s.a.LOADING,payload:{componentLoading:!0}}),t.t0=o,t.next=t.t0===i.a.LOGIN?5:t.t0===i.a.SIGNUP?8:t.t0===i.a.LOGOUT?11:t.t0===i.a.RESET_PASSWORD?14:17;break;case 5:return t.next=7,e(p,h);case 7:return t.abrupt("break",17);case 8:return t.next=10,r(p,h);case 10:return t.abrupt("break",17);case 11:return t.next=13,d();case 13:return t.abrupt("break",17);case 14:return t.next=16,l(p);case 16:return t.abrupt("break",17);case 17:n({type:s.a.ERROR,payload:{error:!1,errorMessage:""}}),u&&b.push("".concat(u)),t.next=24;break;case 21:t.prev=21,t.t1=t.catch(0),n({type:s.a.ERROR,payload:{error:!0,errorMessage:c}});case 24:return t.prev=24,n({type:s.a.LOADING,payload:{componentLoading:!1}}),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,21,24,27]])})));return function(n,e,r,a,o){return t.apply(this,arguments)}}();return h}},95:function(n,t,e){"use strict";e.r(t);var r,a,o,c=e(0),i=e.n(c),s=e(1),u=e(78),p=e(82),d=e(81),l=e(83),b=e(79),h=e(77),x=e(30),f=e(28),O=f.c.div(r||(r=Object(x.a)([""]))),g=f.c.div(a||(a=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 160px;\n"]))),j=f.c.button(o||(o=Object(x.a)(["\n    padding: 5px 0;\n    margin-top: 26px;\n    width: 100%;\n    background-color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 2px 10px ",";\n    text-transform: uppercase;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: ",";\n        color: white;\n        border: 1px solid ",";\n    }\n"])),(function(n){return n.theme.colors.transparentGrayColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.redColor}),(function(n){return n.theme.colors.whiteColor})),m=e(10);t.default=function(){var n=Object(l.a)(),t=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(b.a.LOGOUT,"Failed to logout!","/auth");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p.a,{children:Object(m.jsxs)(O,{children:[Object(m.jsx)(d.a,{children:"Menu"}),Object(m.jsxs)(g,{children:[Object(m.jsx)(u.a,{margin:"26px 0 0 0",width:"100%",typeOf:h.a.LINK,path:"/ticTacToe/1vs1?name=1vs1",children:"1 vs 1"}),Object(m.jsx)(u.a,{margin:"26px 0 0 0",width:"100%",typeOf:h.a.LINK,path:"/ticTacToe/vsAI?name=vsAI",children:"vs ai"}),Object(m.jsx)(u.a,{margin:"26px 0 0 0",width:"100%",typeOf:h.a.LINK,path:"/ranking",children:"ranking"}),Object(m.jsx)(j,{onClick:t,children:"Logout"})]})]})})})}}}]);
//# sourceMappingURL=7.6117fd38.chunk.js.map