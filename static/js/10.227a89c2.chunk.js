(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[10],{107:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,l,d,u=t(0),p=t.n(u),b=t(1),x=t(5),h=t(15),f=t(89),j=t(95),m=t(48),g=t(93),O=t(30),w=t(28),k=w.c.div(r||(r=Object(O.a)(["\n    margin-bottom: 10px;\n    padding: 10px 0 25px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: ",";\n    border-radius: 5px;\n"])),(function(n){return n.theme.colors.darkerGrayColor})),v=w.c.div(o||(o=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),y=w.c.h2(c||(c=Object(O.a)(["\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.fontSizes.XXXXL}),(function(n){var e=n.position,t=n.theme;return 0===e?"gold":t.colors.fontColor})),z=w.c.h3(i||(i=Object(O.a)(["\n    font-size: ",";\n    text-align: center;\n    overflow-wrap: break-word;\n    inline-size: 100%;\n"])),(function(n){return n.theme.fontSizes.XL})),S=w.c.p(a||(a=Object(O.a)(["\n    margin-top: 5px;\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.M})),G=t(10),C=function(n){var e=n.stats,t=n.index,r=e.email,o=e.gamesPlayed,c=e.wonGames,i=e.lostGames;return Object(G.jsxs)(k,{children:[Object(G.jsx)(y,{position:t,children:t+1}),Object(G.jsx)(z,{children:r}),Object(G.jsxs)(v,{children:[Object(G.jsxs)(S,{children:["Games played: ",Object(G.jsx)("span",{children:o})]}),Object(G.jsxs)(S,{children:["Won games: ",Object(G.jsx)("span",{children:c})]}),Object(G.jsxs)(S,{children:["Lost games: ",Object(G.jsx)("span",{children:i})]})]})]})},L=t(60),T=t(63),X=t(29),B=Object(w.d)(s||(s=Object(O.a)(["\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n\n"]))),D=t(59),E=w.c.div(l||(l=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 400px;\n    width: 100%;\n\n    @media "," {\n        min-height: 470px;\n    }\n"])),D.a.tabletBreakpoint),A=w.c.ul(d||(d=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 250px;\n    width: 100%;\n    list-style: none;\n    overflow-y: scroll;\n    animation: "," .5s ease-in;\n\n    &::-webkit-scrollbar {\n        height: 4px;\n        background-color: #474747;\n        border-radius: 10px;\n        width: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: white;\n        border-radius: 10px;\n    }\n\n    @media "," {\n        height: 300px;\n    }\n"])),B,D.a.tabletBreakpoint);e.default=function(){var n=Object(L.a)(),e=n.ticTacToeDispatch,t=n.ticTacToeState,r=t.loading.componentLoading,o=t.usersData,c=Object(h.g)(),i=Object(x.useCallback)(Object(b.a)(p.a.mark((function n(){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:X.a.LOADING,payload:{componentLoading:!0}}),n.next=4,Object(T.b)();case 4:t=n.sent,e({type:X.a.GET_USERS_DATA,payload:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.message+"context");case 11:return n.prev=11,e({type:X.a.LOADING,payload:{componentLoading:!1}}),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])}))),[]);Object(x.useEffect)((function(){i()}),[]);var a=o.sort((function(n,e){var t=n.wonGames-n.lostGames;return e.wonGames-e.lostGames-t})).map((function(n,e){return Object(G.jsx)(C,{stats:n,index:e},n.uid)}));return Object(G.jsx)(j.a,{children:Object(G.jsxs)(E,{children:[Object(G.jsx)(g.a,{children:"ranking"}),r?Object(G.jsx)(m.a,{}):Object(G.jsx)(A,{children:a}),Object(G.jsx)(f.a,{onClick:function(){return n="/",c.push(n);var n},margin:"20px 0 0 0",width:"190px",children:"back to menu"})]})})}},89:function(n,e,t){"use strict";t(5);var r,o=t(30),c=t(59),i=t(28).c.button(r||(r=Object(o.a)(["\n    padding: 10px 15px;\n    margin: ",";\n    width: ",";\n    font-size: ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid transparent;\n    border-radius: 8px;\n    box-shadow: 2px 1px 10px ",";\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    font-weight: bold;\n    transition: background-color 0.3s, color 0.3s, border 0.3s;\n\n    &:hover {\n        background-color: transparent;\n        color: white;\n        border: 1px solid ",";\n    }\n\n    @media "," {\n        padding: 12px 16px;\n        font-size: ",";\n    }\n"])),(function(n){return n.margin}),(function(n){return n.width}),(function(n){return n.theme.fontSizes.XS}),(function(n){return n.theme.colors.whiteColor}),(function(n){return n.theme.colors.transparentBlackColor}),(function(n){return n.theme.colors.blackColor}),(function(n){return n.theme.colors.whiteColor}),c.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.S})),a=t(10);e.a=function(n){var e=n.children,t=n.width,r=n.margin,o=n.onClick,c=n.type;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i,{onClick:o,margin:r,width:t,type:c,children:e})})}},92:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r,o=t(30),c=t(106),i=t(28),a=Object(i.c)(c.a.div)(r||(r=Object(o.a)(["\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: ",";\n    border-radius: 4px;\n    box-shadow: 3px 3px 14px black;\n"])),(function(n){return n.theme.colors.lightGrayColor}))},93:function(n,e,t){"use strict";t(5);var r,o=t(30),c=t(28),i=t(59),a=c.c.h2(r||(r=Object(o.a)(["\n    margin: 20px 0;\n    font-size: ",";\n    text-align: center;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.ExtraSLarge}),i.a.tabletBreakpoint,(function(n){return n.theme.fontSizes.ExtraLarge})),s=t(10);e.a=function(n){var e=n.children;return Object(s.jsx)(a,{children:e})}},95:function(n,e,t){"use strict";var r=t(25),o=(t(5),t(59)),c=t(92),i=t(10);e.a=function(n){var e=n.children;return Object(i.jsx)(c.a,Object(r.a)(Object(r.a)({},o.c),{},{variants:o.e,transition:o.d,children:e}))}}}]);
//# sourceMappingURL=10.227a89c2.chunk.js.map