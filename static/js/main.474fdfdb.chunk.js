(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={container:"Container_container__2FENw"}},4:function(e,t,n){e.exports={form:"Contacts_form__3Qwwp",label:"Contacts_label__3V73k",input:"Contacts_input__1oW-_",button:"Contacts_button__17UHy",item:"Contacts_item__37iVR"}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),s=n(3),i=n(18),b=n(10),l=(n(32),n(19)),u=n.n(l),j=n(1);var d=function(e){var t=e.children;return Object(j.jsx)("div",{className:u.a.container,children:t})},O=n(4),m=n.n(O),h=n(20),f=n.n(h),p=n(5),x=Object(p.b)("phonebook/Add",(function(e,t){return{payload:{id:f.a.generate(),name:e,number:t}}})),v=Object(p.b)("phonebook/Delete"),_=Object(p.b)("phonebook/ChangeFilter");var C=function(){var e=m.a.item,t=Object(s.c)((function(e){return function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e.contacts.filter,e.contacts.items)})),n=Object(s.b)();return Object(j.jsx)("ul",{children:t.map((function(t){var c=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{className:e,children:[Object(j.jsxs)("span",{children:[a,": ",r]}),Object(j.jsx)("button",{type:"button",onClick:function(){return function(e){return n(v(e))}(c)},children:"Delete"})]},c)}))})},g=n(16);var k=function(e){var t=Object(c.useState)(""),n=Object(g.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(g.a)(o,2),l=i[0],u=i[1],d=Object(s.c)((function(e){return e.contacts.items})),O=Object(s.b)(),h=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:return}},f=m.a.label,p=m.a.input,v=m.a.form,_=m.a.button,C=a.length>0&&l.length>0;return Object(j.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var t=d.map((function(e){return e.name})).includes(a),n=d.map((function(e){return e.number})).includes(l);t?b.b.error("".concat(a," is already in contacts")):n?b.b.error("".concat(l," is already in contacts")):O(x(a,l)),r(""),u("")},children:[Object(j.jsxs)("label",{className:f,children:["Name",Object(j.jsx)("input",{className:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:h,placeholder:" "})]}),Object(j.jsxs)("label",{className:f,children:["Number",Object(j.jsx)("input",{className:p,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:h,placeholder:" "})]}),Object(j.jsx)("button",{className:_,type:"submit",disabled:!C,children:"Add contact"})]})};var y=function(){var e=m.a.label,t=m.a.input,n=Object(s.c)((function(e){return e.contacts.filter})),c=Object(s.b)();return Object(j.jsxs)("label",{className:e,children:["Filter contacts by name",Object(j.jsx)("input",{className:t,type:"text",value:n,onChange:function(e){return c(_(e.target.value))},placeholder:" "})]})};var N,w=function(){return Object(j.jsxs)(d,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(k,{}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(y,{}),Object(j.jsx)(C,{}),Object(j.jsx)(b.a,{autoClose:3e3})]})},A=n(13),z=n(6),S=n(21),D=n.n(S),F=n(8),J=n(2),Z=Object(p.c)([],(N={},Object(F.a)(N,x,(function(e,t){var n=t.payload;return[].concat(Object(A.a)(e),[n])})),Object(F.a)(N,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),N)),q=Object(p.c)("",Object(F.a)({},_,(function(e,t){return t.payload}))),B=Object(J.b)({items:Z,filter:q}),E=Object(A.a)(Object(p.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),L={key:"contacts",storage:D.a,blacklist:["filter"]},M=Object(p.a)({reducer:{contacts:Object(z.g)(L,B)},middleware:E,devTools:!1}),T=Object(z.h)(M);n(44),n(45);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(s.a,{store:M,children:Object(j.jsx)(i.a,{loading:null,persistor:T,children:Object(j.jsx)(w,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.474fdfdb.chunk.js.map