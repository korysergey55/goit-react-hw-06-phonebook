(this.webpackJsonp123=this.webpackJsonp123||[]).push([[0],{12:function(t,e,n){t.exports={sectionTitle:"Section_sectionTitle__1p9rj"}},19:function(t,e,n){},2:function(t,e,n){t.exports={mainForm:"ContactForm_mainForm__2N2Lr",inputContainer:"ContactForm_inputContainer__1XPre",labelName:"ContactForm_labelName__2LYZy",inputName:"ContactForm_inputName__1TqKj",buttonAddContact:"ContactForm_buttonAddContact__3KEi1"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(11),r=n.n(c),s=(n(18),n(19),n(5)),o=n(13),l=n(6),u=n(7),m=n(9),d=n(8),b=n(23),j=n(12),p=n.n(j),h=n(0),f=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:p.a.sectionTitle,children:e}),n]})};f.defaultProps={title:""};var C=f,N=n(3),_=n.n(N),O=function(t){var e=t.filteredContacts,n=t.handleDelete;return Object(h.jsx)("div",{className:_.a.mainContainer,children:Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsxs)("li",{className:_.a.newContact,children:[Object(h.jsxs)("p",{className:_.a.newContactName,children:[t.name," : ",t.number]}),Object(h.jsx)("button",{type:"button",className:_.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},x=n(2),v=n.n(x),F=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.saveInputValueToState=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleSubmitForm=function(e){e.preventDefault(),t.props.findDuplicate(t.state.name)&&(t.props.submitNewContact(t.state),t.resetForm())},t.resetForm=function(){t.setState({name:"",number:"",id:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:v.a.mainForm,onSubmit:this.handleSubmitForm,children:[Object(h.jsxs)("div",{className:v.a.inputContainer,children:[Object(h.jsx)("label",{className:v.a.labelName,children:"Name"}),Object(h.jsx)("input",{onChange:this.saveInputValueToState,type:"text",name:"name",className:v.a.inputName,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter Name"})]}),Object(h.jsxs)("div",{className:v.a.inputContainer,children:[Object(h.jsx)("label",{className:v.a.labelName,children:"Number"}),Object(h.jsx)("input",{onChange:this.saveInputValueToState,type:"tel",name:"number",className:v.a.inputName,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:v.a.buttonAddContact,children:"Add contact"})]})})}}]),n}(a.Component),y=n(4),S=n.n(y),g=function(t){var e=t.filter,n=t.filterContacts;return Object(h.jsx)("div",{className:S.a.mainContainer,children:Object(h.jsxs)("div",{className:S.a.inputContainer,children:[Object(h.jsx)("label",{className:S.a.labelName,htmlFor:"filter",children:"Find contact by name"}),Object(h.jsx)("input",{onChange:n,type:"text",name:"filter",id:"filter",value:e,className:S.a.inputName})]})})},w=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitNewContact=function(e){var n={name:e.name,number:e.number,id:Object(b.a)()};t.setState((function(t){return{contacts:[n].concat(Object(o.a)(t.contacts))}}))},t.findDuplicate=function(e){return e?!t.state.contacts.some((function(t){return t.name===e}))||(alert("This Name already exist!"+e),!1):(alert("The field cannot be empty!"),!1)},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase().trim(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C,{title:"Phonebook",children:Object(h.jsx)(F,{submitNewContact:this.submitNewContact,findDuplicate:this.findDuplicate})}),Object(h.jsxs)(C,{title:"Contacts",children:[Object(h.jsx)(g,{filter:this.state.filter,filterContacts:this.filterContacts}),Object(h.jsx)(O,{filteredContacts:e,handleDelete:this.handleDelete})]})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={mainContainer:"ContactList_mainContainer__386ge",newContact:"ContactList_newContact__3Fjdk",newContactName:"ContactList_newContactName__2q1NH",btn:"ContactList_btn__3mw9S"}},4:function(t,e,n){t.exports={mainContainer:"Filter_mainContainer__2aysT",inputContainer:"Filter_inputContainer__1zTRn",labelName:"Filter_labelName__2TpQi",inputName:"Filter_inputName__2NCs4",buttonAddContact:"Filter_buttonAddContact__1hbIi"}}},[[21,1,2]]]);
//# sourceMappingURL=main.349ff2d3.chunk.js.map