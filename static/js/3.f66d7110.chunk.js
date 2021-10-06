(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[3],{77:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),function(n){n.BUTTON="BUTTON",n.LINK="LINK"}(r||(r={}))},78:function(n,t,e){"use strict";e(6);var r,o,i,a=e(77),c=e(30),u=e(54),s=e(52),l=e(28),d=Object(l.b)(r||(r=Object(c.a)(["\n    margin: ",";\n    width: ",";\n    padding: 5px 15px;\n    height: max-content;\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 6px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.margin}),(function(n){return n.width}),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.whiteColor}),s.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),f=l.c.button(o||(o=Object(c.a)(["\n    ","\n    padding: 7px 15px;\n\n    @media "," {\n        padding: 8px 16px;\n    }\n"])),d,s.a.tabletBreakpoint),p=Object(l.c)(u.b)(i||(i=Object(c.a)(["\n    ","\n"])),d),b=e(10);t.a=function(n){var t=n.children,e=n.typeOf,r=n.width,o=n.margin,i=n.onClick,c=n.path,u=n.type;return Object(b.jsx)(b.Fragment,{children:e===a.a.BUTTON?Object(b.jsx)(f,{onClick:i,margin:o,width:r,type:u,children:t}):Object(b.jsx)(p,{margin:o,width:r,to:c,children:t})})}},79:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),function(n){n.LOGIN="LOGIN",n.SIGNUP="SIGNUP",n.LOGOUT="LOGOUT",n.RESET_PASSWORD="RESET_PASSWORD"}(r||(r={}))},80:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r,o=e(30),i=e(28).c.div(r||(r=Object(o.a)(["\n    padding: 20px;\n    margin-top: 80px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: ",";\n    border-radius: 4px;\n    box-shadow: 3px 3px 14px black;\n"])),(function(n){return n.theme.colors.lightGrayColor}))},81:function(n,t,e){"use strict";e(6);var r,o=e(30),i=e(28),a=e(52),c=i.c.h2(r||(r=Object(o.a)(["\n    margin: 20px 0;\n    font-size: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XXXL}),a.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XXXXL})),u=e(10);t.a=function(n){var t=n.children;return Object(u.jsx)(c,{children:t})}},82:function(n,t,e){"use strict";e(6);var r=e(80),o=e(10);t.a=function(n){var t=n.children;return Object(o.jsx)(r.a,{children:t})}},83:function(n,t,e){"use strict";var r=e(0),o=e.n(r),i=e(1),a=e(14),c=e(79),u=e(29),s=e(40),l=e(53);t.a=function(){var n=Object(l.a)().ticTacToeDispatch,t=Object(s.a)(),e=t.login,r=t.signup,d=t.logout,f=t.resetPassword,p=Object(a.g)(),b=function(){var t=Object(i.a)(o.a.mark((function t(i,a,s,l,b){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n({type:u.a.LOADING,payload:{componentLoading:!0}}),t.t0=i,t.next=t.t0===c.a.LOGIN?5:t.t0===c.a.SIGNUP?8:t.t0===c.a.LOGOUT?11:t.t0===c.a.RESET_PASSWORD?14:17;break;case 5:return t.next=7,e(l,b);case 7:return t.abrupt("break",17);case 8:return t.next=10,r(l,b);case 10:return t.abrupt("break",17);case 11:return t.next=13,d();case 13:return t.abrupt("break",17);case 14:return t.next=16,f(l);case 16:return t.abrupt("break",17);case 17:n({type:u.a.ERROR,payload:{error:!1,errorMessage:""}}),s&&p.push("".concat(s)),t.next=24;break;case 21:t.prev=21,t.t1=t.catch(0),n({type:u.a.ERROR,payload:{error:!0,errorMessage:a}});case 24:return t.prev=24,n({type:u.a.LOADING,payload:{componentLoading:!1}}),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,21,24,27]])})));return function(n,e,r,o,i){return t.apply(this,arguments)}}();return b}},86:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(11),o=e(6),i=function(n){var t=Object(o.useState)(""),e=Object(r.a)(t,2),i=e[0],a=e[1],c=Object(o.useState)(!1),u=Object(r.a)(c,2),s=u[0],l=u[1],d=n(i);return{value:i,valueHandler:function(n){var t=n.target;return a(t.value)},isTouchedHanlder:function(){return l(!0)},error:s&&!d,isValid:d}}},87:function(n,t,e){"use strict";e.d(t,"c",(function(){return j})),e.d(t,"e",(function(){return m})),e.d(t,"f",(function(){return O})),e.d(t,"d",(function(){return g})),e.d(t,"b",(function(){return v})),e.d(t,"a",(function(){return k})),e.d(t,"i",(function(){return S})),e.d(t,"h",(function(){return w})),e.d(t,"g",(function(){return z}));var r,o,i,a,c,u,s,l,d,f,p=e(30),b=e(28),x=e(54),h=e(52),j=b.c.form(r||(r=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 400px;\n"]))),m=b.c.div(o||(o=Object(p.a)(["\n    position: relative;\n    margin: 22px 0;\n    display: flex;\n    flex-direction: column;\n\n    @media "," {\n        margin: 24px 0;\n    }\n"])),h.a.tabletBreakpoint),O=b.c.label(i||(i=Object(p.a)(["\n    position: absolute;\n    bottom: 2px;\n    font-size: ",";\n    z-index: 0;\n    transition: bottom 0.3s, font-size 0.3s;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XL}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XXL})),g=b.c.input(a||(a=Object(p.a)(["\n    padding: 2px 5px;\n    background-color: transparent;\n    font-size: ",";\n    color: ",";\n    border: none;\n    border-bottom: 1px solid white;\n    z-index: 1;\n    outline: none;\n\n    &[value]:not([value='']) + label,\n    &:focus + label {\n        bottom: 26px;\n        font-size: ",";\n        color: ",";\n\n        @media "," {\n            bottom: 28px;\n            ",";\n        }\n    }\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.M}),(function(n){return n.theme.colors.fontColor}),(function(n){return n.theme.fontSizes.S}),(function(n){return n.theme.colors.transparentGrayColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.XL})),v=b.c.p(c||(c=Object(p.a)(["\n    margin-top: ",";\n    position: ",";\n    bottom: ",";\n    text-align: center;\n    width: 100%;\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.block?"18px":"unset"}),(function(n){return n.block?"relative":"absolute"}),(function(n){return n.block?"unset":"-80%"}),(function(n){var t=n.block,e=n.theme;return t?e.fontSizes.M:e.fontSizes.XS}),(function(n){return n.theme.colors.redColor})),k=b.c.div(u||(u=Object(p.a)(["\n    margin-top: 20px;\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n"])),(function(n){return n.registerType?"column":"row"}),(function(n){n.registerType;return"center"}),(function(n){return n.registerType?"unset":"space-between"})),S=(b.c.button(s||(s=Object(p.a)(["\n    margin-right: 12px;\n    padding: 6px 15px;\n    height: max-content;\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 4px;\n    text-transform: uppercase;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 7px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.whiteColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),b.c.a(l||(l=Object(p.a)(["\n    padding: 5px 10px;\n    font-size: ",";\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.S}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M}))),w=Object(b.c)(x.b)(d||(d=Object(p.a)(["\n    padding: 5px 10px;\n    font-size: ",";\n    text-decoration: none;\n    color: ",";\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.S}),(function(n){return n.theme.colors.fontColor}),h.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.M})),z=b.c.div(f||(f=Object(p.a)(["\n    display: ",";\n    flex-direction: ",";\n"])),(function(n){return n.loginFormType?"flex":"block"}),(function(n){return n.loginFormType?"column":"unset"}))},93:function(n,t,e){"use strict";e.r(t);var r=e(82),o=e(0),i=e.n(o),a=e(1),c=e(11),u=e(6),s=e(86),l=e(52),d=e(53),f=e(83),p=e(79),b=e(46),x=e(81),h=e(78),j=e(77),m=e(87),O=e(10),g=function(){var n=Object(u.useState)(!0),t=Object(c.a)(n,2),e=t[0],r=t[1],o=Object(d.a)().ticTacToeState,g=o.loading.componentLoading,v=o.error,k=o.errorMessage,S=Object(f.a)(),w=Object(s.a)((function(n){return l.b.test(n)})),z=w.value,y=w.valueHandler,T=w.isTouchedHanlder,C=w.isValid,L=w.error,B=Object(s.a)((function(n){return n.trim().length>=6})),N=B.value,G=B.valueHandler,P=B.isTouchedHanlder,X=B.isValid,I=B.error,R=Object(s.a)((function(n){return n===N})),U=R.value,E=R.valueHandler,H=R.isTouchedHanlder,M=R.isValid,D=R.error,F=function(){var n=Object(a.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),A()){n.next=3;break}return n.abrupt("return");case 3:if(!e){n.next=6;break}return n.next=6,S(p.a.LOGIN,"Failed to login","/",z,N);case 6:if(e){n.next=9;break}return n.next=9,S(p.a.SIGNUP,"Failed to create an account","/",z,N);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),A=function(){if(T(),P(),e){if(C&&X)return!0}else if(H(),C&&X&&M)return!0;return!1},V=L&&Object(O.jsx)(m.b,{children:"Please enter a valid Email!"}),W=I&&Object(O.jsx)(m.b,{children:"Password incorrect (at least 6 characters)"}),_=D&&Object(O.jsx)(m.b,{children:"Passwords do not match"});return Object(O.jsxs)(m.c,{onSubmit:F,children:[Object(O.jsx)(x.a,{children:e?"login":"register"}),Object(O.jsxs)(m.e,{children:[Object(O.jsx)(m.d,{onBlur:T,onChange:y,value:z,type:"email"}),Object(O.jsx)(m.f,{children:"E-mail"}),V]}),Object(O.jsxs)(m.e,{children:[Object(O.jsx)(m.d,{onBlur:P,onChange:G,value:N,type:"password"}),Object(O.jsx)(m.f,{children:"Password"}),W]}),!e&&Object(O.jsxs)(m.e,{children:[Object(O.jsx)(m.d,{onBlur:H,onChange:E,value:U,type:"password"}),Object(O.jsx)(m.f,{children:"Confirm Password"}),_]}),v&&Object(O.jsx)(m.b,{block:!0,children:k}),g?Object(O.jsx)(b.a,{}):Object(O.jsxs)(m.a,{registerType:!e,children:[Object(O.jsx)(h.a,{margin:"0",type:"submit",typeOf:j.a.BUTTON,width:"max-content",children:e?"login":"register"}),Object(O.jsxs)(m.g,{loginFormType:e,children:[Object(O.jsx)(m.i,{onClick:function(){return r((function(n){return!n}))},role:"button",children:e?"Create an account":"Login to an existing account"}),e&&Object(O.jsx)(m.h,{to:"/forgot-password",children:"Forgot Password?"})]})]})]})};t.default=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)(g,{})})}}}]);
//# sourceMappingURL=3.f66d7110.chunk.js.map