(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[4],{77:function(n,t,e){"use strict";e(6);var r,o=e(30),i=e(52),a=e(28).c.button(r||(r=Object(o.a)(["\n    padding: 10px 15px;\n    margin: ",";\n    width: ",";\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 12px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.margin}),(function(n){return n.width}),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.whiteColor}),i.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),c=e(10);t.a=function(n){var t=n.children,e=n.width,r=n.margin,o=n.onClick,i=n.type;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(a,{onClick:o,margin:r,width:e,type:i,children:t})})}},78:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r,o=e(30),i=e(28).c.div(r||(r=Object(o.a)(["\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: ",";\n    border-radius: 4px;\n    box-shadow: 3px 3px 14px black;\n"])),(function(n){return n.theme.colors.lightGrayColor}))},79:function(n,t,e){"use strict";e(6);var r,o=e(30),i=e(28),a=e(52),c=i.c.h2(r||(r=Object(o.a)(["\n    margin: 20px 0;\n    font-size: ",";\n    text-align: center;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.ExtraSLarge}),a.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.ExtraLarge})),u=e(10);t.a=function(n){var t=n.children;return Object(u.jsx)(c,{children:t})}},80:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),function(n){n.LOGIN="LOGIN",n.SIGNUP="SIGNUP",n.LOGOUT="LOGOUT",n.RESET_PASSWORD="RESET_PASSWORD"}(r||(r={}))},82:function(n,t,e){"use strict";var r=e(0),o=e.n(r),i=e(1),a=e(14),c=e(80),u=e(29),s=e(40),l=e(53);t.a=function(){var n=Object(l.a)().ticTacToeDispatch,t=Object(s.a)(),e=t.login,r=t.signup,f=t.logout,d=t.resetPassword,p=Object(a.g)(),b=function(){var t=Object(i.a)(o.a.mark((function t(i,a,s,l,b){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n({type:u.a.LOADING,payload:{componentLoading:!0}}),t.t0=i,t.next=t.t0===c.a.LOGIN?5:t.t0===c.a.SIGNUP?8:t.t0===c.a.LOGOUT?11:t.t0===c.a.RESET_PASSWORD?14:17;break;case 5:return t.next=7,e(l,b);case 7:return t.abrupt("break",17);case 8:return t.next=10,r(l,b);case 10:return t.abrupt("break",17);case 11:return t.next=13,f();case 13:return t.abrupt("break",17);case 14:return t.next=16,d(l);case 16:return t.abrupt("break",17);case 17:n({type:u.a.ERROR,payload:{error:!1,errorMessage:""}}),s&&p.push("".concat(s)),t.next=24;break;case 21:t.prev=21,t.t1=t.catch(0),n({type:u.a.ERROR,payload:{error:!0,errorMessage:a}});case 24:return t.prev=24,n({type:u.a.LOADING,payload:{componentLoading:!1}}),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,21,24,27]])})));return function(n,e,r,o,i){return t.apply(this,arguments)}}();return b}},85:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(11),o=e(6),i=function(n){var t=Object(o.useState)(""),e=Object(r.a)(t,2),i=e[0],a=e[1],c=Object(o.useState)(!1),u=Object(r.a)(c,2),s=u[0],l=u[1],f=n(i);return{value:i,valueHandler:function(n){var t=n.target;return a(t.value)},isTouchedHanlder:function(){return l(!0)},error:s&&!f,isValid:f}}},86:function(n,t,e){"use strict";e.d(t,"c",(function(){return m})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return j})),e.d(t,"d",(function(){return O})),e.d(t,"b",(function(){return S})),e.d(t,"a",(function(){return k})),e.d(t,"i",(function(){return v})),e.d(t,"h",(function(){return z})),e.d(t,"g",(function(){return w}));var r,o,i,a,c,u,s,l,f,d,p=e(30),b=e(28),x=e(55),h=e(52),m=b.c.form(r||(r=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 400px;\n"]))),g=b.c.div(o||(o=Object(p.a)(["\n    position: relative;\n    margin: 22px 0;\n    display: flex;\n    flex-direction: column;\n\n    @media "," {\n        margin: 24px 0;\n    }\n"])),h.a.tabletBreakpoint),j=b.c.label(i||(i=Object(p.a)(["\n    position: absolute;\n    bottom: 2px;\n    font-size: ",";\n    z-index: 0;\n    transition: bottom 0.3s, font-size 0.3s;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XL}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XXL})),O=b.c.input(a||(a=Object(p.a)(["\n    padding: 2px 5px;\n    background-color: transparent;\n    font-size: ",";\n    color: ",";\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid white;\n    z-index: 1;\n    outline: none;\n\n    &[value]:not([value='']) + label,\n    &:focus + label {\n        bottom: 26px;\n        font-size: ",";\n        color: ",";\n\n        @media "," {\n            bottom: 28px;\n            ",";\n        }\n    }\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.M}),(function(n){return n.theme.colors.fontColor}),(function(n){return n.theme.fontSizes.S}),(function(n){return n.theme.colors.transparentGrayColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XL})),S=b.c.p(c||(c=Object(p.a)(["\n    margin-top: ",";\n    position: ",";\n    bottom: ",";\n    text-align: center;\n    width: 100%;\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.block?"18px":"unset"}),(function(n){return n.block?"relative":"absolute"}),(function(n){return n.block?"unset":"-80%"}),(function(n){var t=n.block,e=n.theme;return t?e.fontSizes.M:e.fontSizes.XS}),(function(n){return n.theme.colors.redColor})),k=b.c.div(u||(u=Object(p.a)(["\n    margin-top: 20px;\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n"])),(function(n){return n.registerType?"column":"row"}),(function(n){n.registerType;return"center"}),(function(n){return n.registerType?"unset":"space-between"})),v=(b.c.button(s||(s=Object(p.a)(["\n    margin-right: 12px;\n    padding: 6px 15px;\n    height: max-content;\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 4px;\n    text-transform: uppercase;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 7px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.whiteColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),b.c.a(l||(l=Object(p.a)(["\n    display: block;\n    margin-top: 5px;\n    padding: 0px 10px;\n    font-size: ",";\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.S}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M}))),z=Object(b.c)(x.b)(f||(f=Object(p.a)(["\n    padding: 5px 10px;\n    font-size: ",";\n    text-decoration: none;\n    color: ",";\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.S}),(function(n){return n.theme.colors.fontColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M})),w=b.c.div(d||(d=Object(p.a)(["\n    display: ",";\n    flex-direction: ",";\n"])),(function(n){return n.loginFormType?"flex":"block"}),(function(n){return n.loginFormType?"column":"unset"}))},93:function(n,t,e){"use strict";e.r(t);var r,o=e(0),i=e.n(o),a=e(1),c=e(11),u=e(6),s=e(85),l=e(53),f=e(52),d=e(46),p=e(78),b=e(82),x=e(80),h=e(79),m=e(30),g=e(28).c.p(r||(r=Object(m.a)(["\n    font-size: ",";\n    color: ",";\n    text-align: center;\n"])),(function(n){return n.theme.fontSizes.M}),(function(n){return n.theme.colors.greenColor})),j=e(77),O=e(86),S=e(10);t.default=function(){var n=Object(l.a)().ticTacToeState,t=n.loading.componentLoading,e=n.error,r=n.errorMessage,o=Object(b.a)(),m=Object(u.useState)(""),k=Object(c.a)(m,2),v=k[0],z=k[1],w=Object(s.a)((function(n){return f.b.test(n)})),y=w.value,T=w.valueHandler,C=w.isTouchedHanlder,L=w.isValid,E=w.error,R=function(){var n=Object(a.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),C(),z(""),L){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,o(x.a.RESET_PASSWORD,"Failed to reset password",void 0,y);case 7:z("Check your inbox for further instructions");case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),B=E&&Object(S.jsx)(O.b,{children:"Please enter a valid Email!"});return Object(S.jsx)(p.a,{children:Object(S.jsxs)(O.c,{onSubmit:R,children:[Object(S.jsx)(h.a,{children:"password reset"}),Object(S.jsxs)(O.e,{children:[Object(S.jsx)(O.d,{onBlur:C,onChange:T,value:y,type:"email"}),Object(S.jsx)(O.f,{children:"E-mail"}),B]}),e&&Object(S.jsx)(O.b,{block:!0,children:r}),!e&&v.length>0&&Object(S.jsx)(g,{children:v}),t?Object(S.jsx)(d.a,{}):Object(S.jsxs)(O.a,{registerType:!1,children:[Object(S.jsx)(j.a,{margin:"0",type:"submit",width:"max-content",children:"reset"}),Object(S.jsx)(O.h,{to:"/auth",children:"Back to login"})]})]})})}}}]);
//# sourceMappingURL=4.5c65da2e.chunk.js.map