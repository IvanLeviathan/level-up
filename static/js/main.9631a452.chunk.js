(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(15),a=n.n(i),r=(n(29),n(30),n(1));function s(){return Object(r.jsxs)("footer",{children:["by ",Object(r.jsx)("a",{href:"https://github.com/IvanLeviathan",children:"IvanLeviathan"}),", ",Object(r.jsx)("a",{href:"https://github.com/IvanLeviathan/level-up",children:"This repo"})]})}var d=n(10),l=n(3);n(32);function u(e){var t=e.text,n=void 0===t?"":t,o=e.onClick,c=void 0===o?function(e){}:o,i=e.classes,a=void 0===i?"":i,s=e.type,d=void 0===s?"button":s;return Object(r.jsx)("button",{type:d,onClick:c,dangerouslySetInnerHTML:{__html:n},className:a})}n(33);function j(e){var t=e.value,n=void 0===t?"":t,o=e.placeholder,c=void 0===o?"":o,i=e.onChange,a=void 0===i?function(e){}:i,s=e.required,d=void 0!==s&&s,l=e.classes,u=void 0===l?"":l,j=e.name,b=void 0===j?"":j;return Object(r.jsx)("input",{type:"text",value:n,placeholder:c,onChange:function(e){return a(e)},required:d,className:u,name:b})}function b(){var e=Object(l.d)(),t=new URL(window.location.href),n=new URLSearchParams(window.location.search),c=Object(o.useState)(n.get("search")),i=Object(d.a)(c,2),a=i[0],s=i[1];return Object(r.jsxs)("form",{children:[Object(r.jsx)(j,{value:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){s(e.target.value)},name:"search",required:!0}),Object(r.jsx)(u,{text:"\u041f\u043e\u0438\u0441\u043a",onClick:function(n){n.preventDefault();var o=t.searchParams.set("search","".concat(a));e.replace(t.search.replace(o))}})]})}n(39);function v(){return Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"search-wrapper",children:Object(r.jsx)("div",{className:"search-wrapper-inner",children:Object(r.jsx)(b,{})})})})})}var h=n(4),O=(n(40),n.p+"static/media/delete.8618c2a5.svg");function f(e){var t=e.todos,n=void 0===t?[]:t,o=e.onDelButtonClick,c=void 0===o?function(e){}:o,i=e.onEditButtonClick,a=void 0===i?function(e){}:i,s=e.onSaveTodos,d=void 0===s?function(e){}:s,l=e.onDeleteTodos,j=void 0===l?function(e){}:l;return Object(r.jsxs)("div",{className:"container",children:[n.todos.length?Object(r.jsxs)("div",{className:"todos__buttons",children:[Object(r.jsx)(u,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",onClick:d}),Object(r.jsx)(u,{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",onClick:j,classes:"btn-danger"})]}):null,Object(r.jsx)("div",{className:"todos__list",children:n.todos.length?n.todos.map((function(e){return Object(r.jsxs)("div",{className:"todos__list__item",children:[Object(r.jsx)("div",{className:"todos__list__item-title",onClick:function(){return a(e.id)},children:e.title}),Object(r.jsxs)("div",{className:"todos__list__item-description",children:[Object(r.jsx)("div",{className:"todos__list__item-description-text",children:e.description}),Object(r.jsx)("div",{className:"todos__list__item-description-button",children:Object(r.jsx)(u,{text:"<img src='"+O+"' alt='Delete Todo' />",onClick:function(){return c(e.id)},classes:"delete-button"})})]})]},e.id)})):Object(r.jsx)("div",{className:"todos__list__item no-todos",children:"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"})})]})}var p=n(14),x=[],m="SHOW_MODAL",g="HIDE_MODAL",C=function(e){return{type:m,payload:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return[].concat(Object(p.a)(e),[t.payload]);case g:return e.splice(-1,1),Object(p.a)(e);default:return e}},_=n(6),y="todos",S={todos:localStorage.getItem(y)?JSON.parse(localStorage.getItem(y)):[]},D="ADD_TODO",N="DELETE_TODO",M="EDIT_TODO",L="SAVE_TODOS",k="DELETE_TODOS",w=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return e=Object(_.a)(Object(_.a)({},t),{},{todos:[].concat(Object(p.a)(t.todos),[n.payload])});case M:return e=Object(_.a)(Object(_.a)({},t),{},{todos:t.todos.map((function(e){return e.id===n.payload.id?Object(_.a)(Object(_.a)({},e),{},{title:n.payload.title,id:n.payload.id,description:n.payload.description}):e}))});case N:return e=Object(_.a)(Object(_.a)({},t),{},{todos:t.todos.filter((function(e){return e.id!==n.payload.id}))}),localStorage.setItem(y,JSON.stringify(e.todos)),e;case L:return localStorage.setItem(y,JSON.stringify(t.todos)),t;case k:return localStorage.setItem(y,JSON.stringify([])),e=Object(_.a)(Object(_.a)({},t),{},{todos:[]});default:return t}};function E(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.todosReducer})),n=Object(l.e)(),c=new URLSearchParams(n.search).get("search")?new URLSearchParams(n.search).get("search"):"",i=Object(o.useMemo)((function(){return{todos:t.todos.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))}}),[t,c]);return Object(r.jsx)(f,{todos:i,onDelButtonClick:function(t){e(C({name:"ModalDeleteTodoContainer",id:t}))},onEditButtonClick:function(t){e(C({name:"ModalEditTodoContainer",id:t}))},onSaveTodos:function(){e({type:L})},onDeleteTodos:function(){e({type:k})}})}var I=n.p+"static/media/plus.ba025ac3.svg";n(41);function H(e){var t=e.value,n=void 0===t?"":t,o=e.placeholder,c=void 0===o?"":o,i=e.onChange,a=void 0===i?function(e){}:i,s=e.required,d=void 0!==s&&s,l=e.classes,u=void 0===l?"":l;return Object(r.jsx)("textarea",{type:"text",placeholder:c,onChange:function(e){a(e),function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+2+"px"}(e)},required:d,className:u,value:n})}function R(e){var t=e.title,n=void 0===t?"":t,o=e.titleText,c=void 0===o?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":o,i=e.descriptionText,a=void 0===i?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435":i,s=e.saveText,d=void 0===s?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":s,l=e.cancelText,b=void 0===l?"\u0417\u0430\u043a\u0440\u044b\u0442\u044c":l,v=e.formTitle,h=void 0===v?"":v,O=e.description,f=void 0===O?"":O,p=e.onChangeTitle,x=void 0===p?function(e){}:p,m=e.onChangeDescription,g=void 0===m?function(e){}:m,C=e.onSubmit,T=void 0===C?function(e){}:C,_=e.onCloseClick,y=void 0===_?function(e){}:_,S=e.titleMaxLength,D=void 0===S?100:S;return Object(r.jsx)("div",{className:"popup-bg",children:Object(r.jsxs)("div",{className:"popup-bg-inner",children:[h.length?Object(r.jsx)("h2",{children:h}):null,Object(r.jsxs)("form",{action:"",onSubmit:T,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{value:n,placeholder:c,onChange:x,required:!0,classes:"bordered"}),n.length?Object(r.jsxs)("div",{className:"title-counter",children:[n.length,"/",D]}):null]}),Object(r.jsx)("div",{children:Object(r.jsx)(H,{value:f,placeholder:a,onChange:g,classes:"bordered"})}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(u,{text:d,type:"submit"}),Object(r.jsx)(u,{text:b,onClick:y})]})]})]})})}function A(e){var t=e.saveText,n=void 0===t?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":t,o=e.cancelText,c=void 0===o?"\u0417\u0430\u043a\u0440\u044b\u0442\u044c":o,i=e.formTitle,a=void 0===i?"":i,s=e.onSubmit,d=void 0===s?function(e){}:s,l=e.onCloseClick,j=void 0===l?function(e){}:l;return Object(r.jsx)("div",{className:"popup-bg",children:Object(r.jsxs)("div",{className:"popup-bg-inner",children:[a.length?Object(r.jsx)("h2",{children:a}):null,Object(r.jsx)("form",{action:"",onSubmit:d,children:Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(u,{text:n,type:"submit"}),Object(r.jsx)(u,{text:c,onClick:j})]})})]})})}n(42);var q={ModalAddTodoContainer:function(e){var t=Object(h.b)(),n=Object(o.useState)(""),c=Object(d.a)(n,2),i=c[0],a=c[1],s=Object(o.useState)(""),l=Object(d.a)(s,2),u=l[0],j=l[1];return Object(r.jsx)(R,{title:i,description:u,onChangeTitle:function(t){t.target.value.length<=e.titleMaxLength&&a(t.target.value)},onChangeDescription:function(e){j(e.target.value)},onSubmit:function(n){var o;n.preventDefault(),t((o={id:(new Date).getTime(),title:i,description:u},{type:D,payload:o})),e.handlerHideModal()},onCloseClick:e.handlerHideModal,formTitle:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435",titleMaxLength:e.titleMaxLength})},ModalEditTodoContainer:function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e.todosReducer})).todos.filter((function(t){return t.id===e.id}))[0],c=Object(o.useState)(n.title),i=Object(d.a)(c,2),a=i[0],s=i[1],l=Object(o.useState)(n.description),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(r.jsx)(R,{title:a,description:j,onChangeTitle:function(t){t.target.value.length<=e.titleMaxLength&&s(t.target.value)},onChangeDescription:function(e){b(e.target.value)},onSubmit:function(o){var c;o.preventDefault(),t((c={id:n.id,title:a,description:j},{type:M,payload:c})),e.handlerHideModal()},onCloseClick:e.handlerHideModal,saveText:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",formTitle:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435",titleMaxLength:e.titleMaxLength})},ModalDeleteTodoContainer:function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e.todosReducer})).todos.filter((function(t){return t.id===e.id}))[0];return Object(r.jsx)(A,{onSubmit:function(o){var c;o.preventDefault(),t((c={id:n.id},{type:N,payload:c})),e.handlerHideModal()},onCloseClick:e.handlerHideModal,saveText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",formTitle:'\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 "'+n.title+'"'})}};function B(){var e=Object(h.c)((function(e){return e.modalsReducer})),t=Object(h.b)();if(!e.length)return null;var n=function(){t({type:g})};return e.map((function(e){var t=q[e.name];return Object(o.createElement)(t,Object(_.a)(Object(_.a)({},e),{},{handlerHideModal:n,key:e.name,titleMaxLength:30}))}))}var J=function(){var e=Object(h.b)();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(v,{}),Object(r.jsx)(E,{}),Object(r.jsx)(u,{text:"<img src='"+I+"' alt='Add Todo' />",onClick:function(t){e(C({name:"ModalAddTodoContainer"}))},classes:"add-todo rounded"}),Object(r.jsx)(s,{}),Object(r.jsx)(B,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))},F=n(19),U=n(24),W=Object(F.combineReducers)({todosReducer:w,modalsReducer:T}),V=n(17),z=Object(F.createStore)(W,Object(U.composeWithDevTools)());a.a.render(Object(r.jsx)(h.a,{store:z,children:Object(r.jsx)(V.a,{children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})})})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.9631a452.chunk.js.map