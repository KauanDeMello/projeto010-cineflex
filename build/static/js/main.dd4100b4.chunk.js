(this["webpackJsonpprojeto10-cineflex"]=this["webpackJsonpprojeto10-cineflex"]||[]).push([[0],{60:function(n,e,t){"use strict";t.r(e);var i,a,o=t(40),c=t.n(o),r=t(7),s=t(8),d=Object(s.a)(i||(i=Object(r.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label,A legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n    font-family: 'Roboto', sans-serif;\n\tfont-weight: 400;\n\tcolor: #293845;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n\tbox-sizing: border-box;\n}\na {\n\ttext-decoration: none;\n}\n"]))),l=t(11),p=t.p+"static/media/filmeicone.a443b258.png",x=t(1);function b(){return Object(x.jsx)(l.b,{to:"/",children:Object(x.jsxs)(u,{children:[Object(x.jsx)("h1",{children:"CINEFLEX"}),Object(x.jsx)("img",{src:p,alt:"icone filme"})]})})}var j,h,u=s.b.div(a||(a=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    height: 70px;\n    font-weight: 700;\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #C3CFD9;\n    box-shadow: 0px 1px 6px #696969;\n    z-index: 2;\n\n    h1 {\n    font-size: 40px;\n    color: #E8833A;\n    margin-right: 10px;\n    text-shadow: 2px 1px 1px #696969;\n    }\n\n    img {\n        width: 30px;\n    }\n"]))),m=t(5),f=t(0),g=t(17);function O(n){var e=n.img,t=n.id;return Object(x.jsx)(l.b,{to:"/sessoes/".concat(t),children:Object(x.jsxs)(F,{children:[Object(x.jsx)(k,{}),Object(x.jsx)("img",{src:e,alt:""})]})})}var v,w,y,F=s.b.div(j||(j=Object(r.a)(["\n    width: 148px;\n    height: 212px;\n    border-radius: 3px;\n    background-color: #FFFFFF;\n    box-shadow: 0px 2px 4px 2px #C3CFD9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 12px;\n    cursor: pointer;\n    transition-duration: 0.3s;\n    position: relative;\n    &:hover {\n        background-color: #E8833A;\n        box-shadow: 0px 2px 4px 2px #A9A9A9;\n        img {\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    img {\n        width: 132px;\n        height: 196px;\n        border-radius: 3px;\n        transition-duration: 0.5s;\n    }\n"]))),k=s.b.div(h||(h=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #E8833A;\n    border-radius: 3px;\n    opacity: 0;\n    transition-duration: 0.3s;\n    &:hover {\n        opacity: 0.3;\n    }\n"]))),A=t.p+"static/media/carregando.c7d9f081.gif";function S(){var n=Object(f.useState)([]),e=Object(m.a)(n,2),t=e[0],i=e[1];return Object(f.useEffect)((function(){var n=g.a.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");n.then((function(n){i(n.data)})),n.catch((function(){alert("Algo deu errado. Tente novamente.")}))}),[]),0===t.length?Object(x.jsx)(z,{children:Object(x.jsx)("img",{src:A,alt:"carregando..."})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E,{children:Object(x.jsx)("h1",{children:"Selecione o filme:"})}),Object(x.jsx)(N,{children:t.map((function(n,e){return Object(x.jsx)(O,{id:n.id,img:n.posterURL},e)}))})]})}var C,D,E=s.b.div(v||(v=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    margin-top: 110px;\n    text-align: center;\n    \n    h1 {\n    height: 40px;\n    font-size: 24px;\n    }\n"]))),N=s.b.div(w||(w=Object(r.a)(["\n    margin: 0 auto;\n    width: 80%;\n    min-width: 375px;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 70px;\n"]))),z=s.b.div(y||(y=Object(r.a)(["\n    width: 100%;\n    margin-top: 120px;\n    display: flex;\n    justify-content: center;\n\n    img {\n        width: 60px;\n    }\n"]))),q=t(4);function B(n){var e=n.filme,t=n.data,i=n.dia;return Object(x.jsxs)(T,{children:[Object(x.jsx)("img",{src:e.posterURL,alt:""}),Object(x.jsxs)(L,{children:[Object(x.jsx)("p",{className:"titulo-filme",children:e.title}),i?Object(x.jsxs)("p",{className:"sessao-data",children:[i," - ",t]}):""]})]})}var I,T=s.b.div(C||(C=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    height: 100px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    padding: 0px 30px;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    background-color: #C3CFD9;\n    border-top: 2px solid #9EADBA;\n\n    img {\n        width: 48px;\n        height: 72px;\n        border: 5px solid #FFFFFF;\n        box-shadow: 0px 2px 4px 2px #C3CFD9;\n        border-radius: 3px;\n        margin-right: 20px;\n    }\n"]))),L=s.b.div(D||(D=Object(r.a)(["\n    width: 300px;\n    line-height: 1.5;\n\n    .titulo-filme {\n        font-weight: 500;\n        font-size: 18px;\n    }\n\n    .sessao-data {\n        font-size: 15px;\n    }\n"])));function P(n){var e=n.nome,t=n.id,i=n.diaSemana,a=n.setData,o=n.setSemana;return Object(x.jsx)(l.b,{to:"/assentos/".concat(t),children:Object(x.jsx)(J,{onClick:function(){o(i),a(e)},children:Object(x.jsx)("button",{children:e})})})}var R,J=s.b.div(I||(I=Object(r.a)(["\n    display: flex;\n    justify-content: left;\n    align-items: center;\n\n    button {\n    margin: 15px 10px 30px 0px;\n    border: none;\n    width: 72px;\n    height: 32px;\n    border-radius: 3px;\n    background-color: #E8833A;\n    box-shadow: 1px 1px 2px #696969;\n    color: #FFFFFF;\n    font-weight: 700;\n    cursor: pointer;\n    }\n"])));function U(n){var e=n.data,t=n.horarios,i=n.diaSemana,a=n.setData,o=n.setSemana;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:[i," - ",e]}),Object(x.jsx)(G,{children:t.map((function(n,e){return Object(x.jsx)(P,{nome:n.name,id:n.id,diaSemana:i,setData:a,setSemana:o},e)}))})]})}var V,X,G=s.b.div(R||(R=Object(r.a)(["\n    display: flex;\n"])));function H(){var n=Object(q.o)().filmeId,e=Object(f.useState)([]),t=Object(m.a)(e,2),i=t[0],a=t[1],o=Object(f.useState)([]),c=Object(m.a)(o,2),r=c[0],s=c[1],d=Object(f.useState)(""),l=Object(m.a)(d,2),p=l[0],b=l[1],j=Object(f.useState)(""),h=Object(m.a)(j,2),u=h[0],O=h[1];return Object(f.useEffect)((function(){var e=g.a.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/".concat(n,"/showtimes"));e.then((function(n){a(n.data),s(n.data.days)})),e.catch((function(n){alert("Algo deu errado. Tente novamente.")}))}),[n]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(Q,{children:[Object(x.jsx)("h1",{children:"Selecione o hor\xe1rio:"}),Object(x.jsx)(W,{children:r.map((function(n,e){return Object(x.jsx)(U,{data:n.date,horarios:n.showtimes,diaSemana:n.weekday,setData:b,setSemana:O},e)}))})]}),Object(x.jsx)(B,{filme:i,data:p,semana:u})]})}var K,M,Q=s.b.div(V||(V=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    margin: 0 auto;\n    margin-bottom: 130px;\n    margin-top: 100px;\n\n    h1 {\n    height: 50px;\n    text-align: center;\n    font-size: 24px;\n    }\n"]))),W=s.b.div(X||(X=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    padding: 0px 30px;\n    margin-bottom: 35px;\n"]))),Y=t(10);function Z(n){var e=n.id,t=n.nome,i=n.disponivel,a=n.numeroAssento,o=n.setNumeroAssento,c=n.lugar,r=n.setLugar,s=Object(f.useState)(!1),d=Object(m.a)(s,2),l=d[0],p=d[1];return Object(x.jsx)(x.Fragment,{children:i?Object(x.jsx)(_,{selecionado:l,onClick:function(){if(l){p(!l);var n=a.filter((function(n){return n!==e}));o(n);var i=c.filter((function(n){return n!==t}));r(i)}else{p(!l);var s=[].concat(Object(Y.a)(a),[Number(e)]);o(s);var d=[].concat(Object(Y.a)(c),[t]);r(d)}},children:Object(x.jsx)("p",{children:t})}):Object(x.jsx)(nn,{onClick:function(){alert("Esse assento n\xe3o est\xe1 dispon\xedvel")},children:Object(x.jsx)("p",{children:t})})})}var $,_=s.b.button(K||(K=Object(r.a)(["\n    width: 26px;\n    height: 26px;\n    background-color: ",";\n    border: ",";\n    border-radius: 50px;\n    margin: 10px 5px 0px 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 11px;\n    cursor: pointer;\n"])),(function(n){return n.selecionado?"#1AAE9E":"#C3CFD9"}),(function(n){return n.selecionado?"1px solid #0E7D71":"1px solid #808F9D"})),nn=s.b.button(M||(M=Object(r.a)(["\n    width: 26px;\n    height: 26px;\n    background-color: #FBE192;\n    border: 1px solid #F7C52B;\n    border-radius: 50px;\n    margin: 10px 5px 0px 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 11px;\n    cursor: pointer;\n"])));function en(n){var e=n.filme,t=n.hora,i=n.data,a=n.numeroAssento,o=n.lugar,c=e.title,r=Object(f.useState)(""),s=Object(m.a)(r,2),d=s[0],l=s[1],p=Object(f.useState)(""),b=Object(m.a)(p,2),j=b[0],h=b[1],u=Object(q.m)();return Object(x.jsx)(rn,{children:Object(x.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),a.length<1)alert("Selecione um assento para finalizar o pedido");else{var e={ids:a,name:d,cpf:j},r=g.a.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",e);r.then((function(){u("/sucesso",{state:{nome:d,cpf:j,filmeTitulo:c,hora:t,data:i,lugar:o}}),l(""),h("")})),r.catch((function(){alert("Algo deu errado. Tente novamente.")}))}},children:[Object(x.jsxs)("div",{className:"campo-input",children:[Object(x.jsx)("p",{children:"Nome do comprador:"}),Object(x.jsx)("input",{placeholder:"Digite seu nome...",type:"text",onChange:function(n){return l(n.target.value)},value:d,required:!0})]}),Object(x.jsxs)("div",{className:"campo-input",children:[Object(x.jsx)("p",{children:"CPF do comprador:"}),Object(x.jsx)("input",{placeholder:"Digite seu CPF...",type:"text",onChange:function(n){return h(n.target.value)},value:j,required:!0})]}),Object(x.jsx)("div",{className:"reservar-assentos",children:Object(x.jsx)("button",{children:"Reservar assento(s)"})})]})})}var tn,an,on,cn,rn=s.b.div($||($=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    display: flex;\n    justify-content: center;\n    margin: 0 auto;\n\n    form {\n        width: 320px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 160px;\n    }\n\n    .campo-input {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        margin-bottom: 30px;\n\n        p {\n        height: 30px;\n        font-size: 18px;\n        }\n\n        input {\n        width: 320px;\n        height: 50px;\n        border: 1px solid #D4D4D4;\n        padding: 0px 10px;\n        border-radius: 3px;\n        outline: none;\n        }\n\n        input::placeholder {\n        font-style: italic;\n        color: #AFAFAF;\n        font-size: 16px;\n        }\n    }\n    \n    .reservar-assentos {\n        width: 320px;\n        display: flex;\n        justify-content: center;\n\n        button {\n        width: 180px;\n        height: 42px;\n        background-color: #E8833A;\n        border: none;\n        border-radius: 3px;\n        font-size: 15px;\n        color: #FFFFFF;\n        cursor: pointer;\n        }\n    }\n"])));function sn(){var n=Object(q.o)().sessaoId,e=Object(f.useState)([]),t=Object(m.a)(e,2),i=t[0],a=t[1],o=Object(f.useState)([]),c=Object(m.a)(o,2),r=c[0],s=c[1],d=Object(f.useState)([]),l=Object(m.a)(d,2),p=l[0],b=l[1],j=Object(f.useState)([]),h=Object(m.a)(j,2),u=h[0],O=h[1],v=Object(f.useState)([]),w=Object(m.a)(v,2),y=w[0],F=w[1],k=Object(f.useState)([]),S=Object(m.a)(k,2),C=S[0],D=S[1];return Object(f.useEffect)((function(){g.a.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/".concat(n,"/seats")).then((function(n){a(n.data.name),s(n.data.day),b(n.data.movie),O(n.data.seats)})).catch((function(){alert("Algo deu errado. Tente novamente.")}))}),[n]),0===u.length?Object(x.jsx)(bn,{children:Object(x.jsx)("img",{src:A,alt:"carregando..."})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ln,{children:Object(x.jsx)("h1",{children:"Selecione o(s) assento(s)"})}),Object(x.jsx)(pn,{children:u.map((function(n,e){return Object(x.jsx)(Z,{id:n.id,nome:n.name,disponivel:n.isAvailable,numeroAssento:y,setNumeroAssento:F,lugar:C,setLugar:D},e)}))}),Object(x.jsxs)(xn,{children:[Object(x.jsxs)("div",{className:"status",children:[Object(x.jsx)("div",{className:"selecionado"}),Object(x.jsx)("p",{children:"Selecionado"})]}),Object(x.jsxs)("div",{className:"status",children:[Object(x.jsx)("div",{className:"disponivel"}),Object(x.jsx)("p",{children:"Dispon\xedvel"})]}),Object(x.jsxs)("div",{className:"status",children:[Object(x.jsx)("div",{className:"indisponivel"}),Object(x.jsx)("p",{children:"indisponivel"})]})]}),Object(x.jsx)(en,{filme:p,hora:i,dia:r.weekday,data:r.date,numeroAssento:y,lugar:C}),Object(x.jsx)(B,{filme:p,dia:r.weekday,data:r.date})]})}var dn,ln=s.b.div(tn||(tn=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    margin-top: 110px;\n    text-align: center;\n    \n    h1 {\n    height: 40px;\n    font-size: 20px;\n    }\n"]))),pn=s.b.div(an||(an=Object(r.a)(["\n    margin: 0 auto;\n    width: 70%;\n    min-width: 375px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding: 0px 10px;\n"]))),xn=s.b.div(on||(on=Object(r.a)(["\n    width: 10%;\n    min-width: 375px;\n    font-size: 12px;\n    padding: 0px 40px;\n    margin: 0 auto;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    .status {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n\n    .selecionado {\n        width: 25px;\n        height: 25px;\n        background-color: #1AAE9E;\n        border: 1px solid #0E7D71;\n        border-radius: 50px;\n        margin-bottom: 10px;\n    }\n\n    .disponivel {\n        width: 25px;\n        height: 25px;\n        background-color: #C3CFD9;\n        border: 1px solid #7B8B99;\n        border-radius: 50px;\n        margin-bottom: 10px;\n    }\n\n    .indisponivel {\n        width: 25px;\n        height: 25px;\n        background-color: #FBE192;\n        border: 1px solid #F7C52B;\n        border-radius: 50px;\n        margin-bottom: 10px;\n    }\n"]))),bn=s.b.div(cn||(cn=Object(r.a)(["\n    width: 100%;\n    margin-top: 120px;\n    display: flex;\n    justify-content: center;\n\n    img {\n        width: 60px;\n    }\n"])));function jn(){var n=Object(q.j)().state,e=n.nome,t=n.cpf,i=n.filmeTitulo,a=n.hora,o=n.data,c=n.lugar;return Object(x.jsxs)(hn,{children:[Object(x.jsx)("h1",{children:"Pedido feito com sucesso!"}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("h2",{children:"Filme e sess\xe3o"}),Object(x.jsx)("p",{children:i}),Object(x.jsxs)("p",{children:[o," - ",a]})]}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("h2",{children:"Ingressos"}),c.map((function(n,e){return Object(x.jsxs)("p",{children:["Assento ",n]},e)}))]}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("h2",{children:"Comprador"}),Object(x.jsxs)("p",{children:["Nome: ",e]}),Object(x.jsxs)("p",{children:["CPF: ",t]})]}),Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("div",{className:"botao-home",children:Object(x.jsx)("button",{children:"Voltar para o in\xedcio"})})})]})}var hn=s.b.div(dn||(dn=Object(r.a)(["\n    width: 100%;\n    min-width: 375px;\n    margin-top: 110px;\n    padding: 0px 20px;\n    line-height: 1.5;\n    font-size: 16px;\n    \n    h1 {\n    height: 40px;\n    font-weight: 700;\n    color: #247A6B;\n    text-align: center;\n    font-size: 20px;\n    margin-bottom: 20px;\n    }\n\n    .info {\n    margin-bottom: 20px;\n    text-align: left;\n\n        h2 {\n        font-weight: 700;\n        font-size: 18px;\n        }\n    }\n\n    .botao-home {\n    display: flex;\n    justify-content: center;\n\n        button {\n        width: 180px;\n        height: 42px;\n        background-color: #E8833A;\n        border: none;\n        border-radius: 3px;\n        font-size: 15px;\n        color: #FFFFFF;\n        cursor: pointer;\n        margin-top: 10px;\n        }\n    }\n"])));function un(){return Object(x.jsxs)(l.a,{children:[Object(x.jsx)(d,{}),Object(x.jsx)(b,{}),Object(x.jsxs)(q.c,{children:[Object(x.jsx)(q.a,{path:"/",element:Object(x.jsx)(S,{})}),Object(x.jsx)(q.a,{path:"/sessoes/:filmeId",element:Object(x.jsx)(H,{})}),Object(x.jsx)(q.a,{path:"/assentos/:sessaoId",element:Object(x.jsx)(sn,{})}),Object(x.jsx)(q.a,{path:"/sucesso",element:Object(x.jsx)(jn,{})})]})]})}c.a.render(Object(x.jsx)(un,{}),document.querySelector(".root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.dd4100b4.chunk.js.map