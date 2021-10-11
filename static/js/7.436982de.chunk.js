(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[7],{101:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(15),c=function(){return new URLSearchParams(Object(r.h)().search)}},102:function(n,e,t){"use strict";var r,c,a,o,i,s,l,u,d=t(15),f=t(60),j=(t(5),t(30)),b=t(28),p=b.c.button(r||(r=Object(j.a)(["\n    width: calc(100% + 1px);\n    height: calc(100% + 1px);\n    background: #333;\n    border: none;\n    font-size: 50px;\n    color: ",";\n    outline: none;\n    cursor: pointer;\n"])),(function(n){return"X"===n.value?"red":"green"})),h=t(10),m=function(n){var e=n.value,t=n.onClick;return Object(h.jsx)(p,{value:e,onClick:t,children:e})},x=t(59),O=b.c.div(c||(c=Object(j.a)(["\n    display: grid;\n    grid-template: repeat(3, 1fr) / repeat(3, 1fr);\n    gap: 8px;\n    background: ",";\n    width: 100%;\n    height: 100%;\n    max-width: 350px;\n    max-height: 350px;\n\n    @media "," {\n        max-width: 450px;\n        max-height: 450px;\n    }\n"])),(function(n){return n.theme.colors.whiteColor}),x.a.tabletBreakpoint),g=function(n){var e=n.cells,t=n.onClick;return Object(h.jsx)(O,{children:e.map((function(n,e){return Object(h.jsx)(m,{value:n,onClick:function(){return t(e)}},e)}))})},v=t(89),w=t(48),y=b.c.div(a||(a=Object(j.a)(["\n    margin-top: 40px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 350px;\n\n    @media "," {\n        margin-top: 60px;\n        height: 450px;\n    }\n"])),x.a.tabletBreakpoint),k=(b.c.div(o||(o=Object(j.a)(["\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n"]))),b.c.h2(i||(i=Object(j.a)(["\n    font-size: ",";\n    text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.XXL})),b.c.h3(s||(s=Object(j.a)(["\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.fontSizes.ExtraLarge}),(function(n){var e=n.Xor0,t=n.theme;return"X"===e?t.colors.transparentGrayColor:"green"}))),X=(Object(b.c)(k)(l||(l=Object(j.a)(["\n    color: ",";\n"])),(function(n){var e=n.Xor0,t=n.theme;return"X"===e?"red":t.colors.transparentGrayColor})),b.c.div(u||(u=Object(j.a)(["\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: -60px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    @media "," {\n        bottom: -110px;\n    }\n"])),x.a.mobileBreakpoint));e.a=function(n){var e=n.cells,t=n.clickHandler,r=n.resetGameHandler,c=Object(f.a)().ticTacToeState.loading.componentLoading,a=Object(d.g)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(y,{children:[Object(h.jsx)(g,{cells:e,onClick:t}),Object(h.jsx)(X,{children:c?Object(h.jsx)(w.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,{onClick:function(){return n="/",a.push(n);var n},margin:"0 10px 0 0",width:"190px",children:"back to menu"}),Object(h.jsx)(v.a,{onClick:r,margin:"0 0 0 10px",width:"max-content",children:"restart"})]})})]})})}},103:function(n,e,t){"use strict";var r,c,a,o=t(98),i=t(89),s=t(30),l=t(28),u=l.c.div(r||(r=Object(s.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n"]))),d=l.c.div(c||(c=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    width: 100%;\n    transform: translate(-50%);\n"]))),f=l.c.h2(a||(a=Object(s.a)(["\n    font-size: 40px;\n    text-transform: uppercase;\n"]))),j=t(10);e.a=function(n){var e=n.children,t=n.winner,r=n.gameMode,c=n.modalHandler,a=Object(j.jsx)(f,{children:t?'"'.concat(t,'" won'):"draw"}),s=t?Object(j.jsx)(f,{children:"X"===t?"you won":"you lose"}):Object(j.jsx)(f,{children:"draw"});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{onClick:function(){return c(!1)}}),Object(j.jsxs)(d,{children:[r===o.a["1vs1"]?a:s,e,Object(j.jsx)(i.a,{onClick:function(){return c(!1)},margin:"28px 0",width:"max-content",children:"close"})]})]})}},104:function(n,e,t){"use strict";var r,c,a,o,i=t(30),s=t(28),l=s.c.div(r||(r=Object(i.a)(["\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n"]))),u=s.c.h2(c||(c=Object(i.a)(["\n    font-size: ",";\n    text-transform: uppercase;\n"])),(function(n){return n.theme.fontSizes.XXL})),d=s.c.h3(a||(a=Object(i.a)(["\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.fontSizes.ExtraLarge}),(function(n){var e=n.Xor0,t=n.theme;return"X"===e?t.colors.transparentGrayColor:"green"})),f=Object(s.c)(d)(o||(o=Object(i.a)(["\n    color: ",";\n"])),(function(n){var e=n.Xor0,t=n.theme;return"X"===e?"red":t.colors.transparentGrayColor})),j=t(10);e.a=function(n){var e=n.winner,t=n.x0,r=n.movesLeft;return Object(j.jsxs)(l,{children:[Object(j.jsx)(f,{Xor0:e||t,children:"X"}),!!r&&!e&&Object(j.jsx)(u,{children:"next move"}),Object(j.jsx)(d,{Xor0:e||t,children:"0"})]})}},111:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i=t(25),s=t(0),l=t.n(s),u=t(1),d=t(21),f=t(12),j=t(5),b=t(106),p=t(101),h=t(97),m=t(41),x=t(102),O=t(103),g=t(104),v=t(63),w=t(29),y=t(60),k=t(59),X=t(30),C=t(28),G=C.c.div(r||(r=Object(X.a)(["\n    width: 100vw;\n    max-width: 1100px;\n    height: 100vh;\n    overflow: hidden;\n"]))),S=C.c.div(c||(c=Object(X.a)(["\n    margin: 10px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),z=C.c.h3(a||(a=Object(X.a)(["\n    text-transform: uppercase;\n"]))),L=C.c.p(o||(o=Object(X.a)(["\n    margin-top: 8px;\n    text-transform: uppercase;\n"]))),A=t(10);e.default=function(){var n=Object(j.useState)(Array(9).fill(null)),e=Object(f.a)(n,2),t=e[0],r=e[1],c=Object(j.useState)(!0),a=Object(f.a)(c,2),o=a[0],s=a[1],X=Object(j.useState)(9),C=Object(f.a)(X,2),T=C[0],D=C[1],E=Object(j.useState)(!1),H=Object(f.a)(E,2),B=H[0],P=H[1],F=Object(m.a)().currentUser,M=Object(y.a)(),U=M.ticTacToeDispatch,I=M.ticTacToeState.userData,J=Object(p.a)(),N=Object(h.a)(t),R=o?"X":"O",_=J.get("name"),q=function(n){r(Object(d.a)(n)),s(!o),D((function(n){return n-1}))},K=function(){var n=Object(u.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={gamesPlayed:+I.gamesPlayed+1,lostGames:+I.lostGames,wonGames:+I.wonGames},"O"===N&&(e.lostGames=+I.lostGames+1),"X"===N&&(e.wonGames=+I.wonGames+1),n.prev=3,U({type:w.a.LOADING,payload:{componentLoading:!0}}),n.next=7,Object(v.c)(F.email,e);case 7:U({type:w.a.UPDATE_USER_DATA,payload:e}),Q(!0),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),alert(n.t0.message);case 14:return n.prev=14,U({type:w.a.LOADING,payload:{componentLoading:!1}}),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})));return function(){return n.apply(this,arguments)}}(),Q=function(n){return P(n)};return Object(j.useEffect)((function(){!N&&T||K()}),[T]),Object(j.useEffect)((function(){var n=setTimeout((function(){return function(){if(!o&&!N&&0!==T){for(var n=Object(d.a)(t),e=!0;e;){var r=Math.floor(9*Math.random());t[r]||(e=!1,n[r]=R)}q(n)}}()}),500);return function(){return clearTimeout(n)}}),[T]),Object(A.jsx)(b.a.div,Object(i.a)(Object(i.a)({},k.c),{},{variants:k.e,transition:k.d,children:Object(A.jsxs)(G,{children:[Object(A.jsx)(g.a,{winner:N,x0:R,movesLeft:T}),Object(A.jsx)(x.a,{cells:t,clickHandler:function(n){var e=Object(h.b)(n,N,t,_,o,R);e&&q(e)},resetGameHandler:function(){r(Array(9).fill(null)),s(!0),D(9)}}),B&&Object(A.jsx)(O.a,{winner:N,gameMode:_,modalHandler:Q,children:Object(A.jsxs)(S,{children:[Object(A.jsxs)(z,{children:["games played: ",I.gamesPlayed]}),Object(A.jsxs)(L,{children:["lost games: ",I.lostGames]}),Object(A.jsxs)(L,{children:["won games: ",I.wonGames]})]})})]})}))}},89:function(n,e,t){"use strict";t(5);var r,c=t(30),a=t(59),o=t(28).c.button(r||(r=Object(c.a)(["\n    padding: 10px 15px;\n    margin: ",";\n    width: ",";\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 12px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.margin}),(function(n){return n.width}),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.whiteColor}),a.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),i=t(10);e.a=function(n){var e=n.children,t=n.width,r=n.margin,c=n.onClick,a=n.type;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o,{onClick:c,margin:r,width:t,type:a,children:e})})}},97:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var r=t(21),c=t(12),a=t(98),o=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(c.a)(e[t],3),a=r[0],o=r[1],i=r[2];if(n[a]&&n[a]===n[o]&&n[a]===n[i])return n[a]}return null},i=function(n,e,t,c,o,i){if(!(e||t[n]||!o&&c===a.a.vsAi)){var s=Object(r.a)(t);return s[n]=i,s}}},98:function(n,e,t){"use strict";var r;t.d(e,"a",(function(){return r})),function(n){n["1vs1"]="1vs1",n.vsAi="vsAI"}(r||(r={}))}}]);
//# sourceMappingURL=7.436982de.chunk.js.map