(this.webpackJsonpReactDashboard=this.webpackJsonpReactDashboard||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(23),c=n.n(a),r=n(18),i=n(2),s=n(14),o=n(1),l=n.n(o),d=n(10),u=n(24),j=n(4),b=(n(37),n(0));function h(e){var t=e.type,n=e.name,a=e.handleChange,c=e.value;return Object(b.jsx)("input",{type:t,name:n,value:c,onChange:a,autoComplete:"off"})}var m=l.a.memo(h);n(39);function p(e){var t=e.name,n=e.handleChange,a=e.value,c=e.options;return Object(b.jsx)("select",{name:t,value:a,onChange:n,children:c.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))})}var O,x=l.a.memo(p),f=(n(40),{text:{renderInput:function(e){return Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("label",{children:e.label}),Object(b.jsx)(m,Object(j.a)({},e)),e.errorMessage&&!e.valid&&Object(b.jsx)("span",{className:"error",children:e.errorMessage})]},e.label)}},select:{renderInput:function(e){return Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("label",{children:e.label}),Object(b.jsx)(x,Object(j.a)({},e)),e.errorMessage&&!e.valid&&Object(b.jsx)("span",{className:"error",children:e.errorMessage})]},e.label)}}}),v="petrol",g="diesel",y=(O={},Object(d.a)(O,v,"Petrol"),Object(d.a)(O,g,"Diesel"),{password:"text"});function N(e,t,n){return{name:e,message:t,validate:n}}function C(e,t){return N("minLength","".concat(e," should contain atleast ").concat(t," characters"),(function(e,n){return e.length>=t}))}function k(e,t){return N("minLength","".concat(e," cannot contain more than ").concat(t," characters"),(function(e,n){return e.length<=t}))}function w(e,t){var n=[];for(var a in e)"required"===a&&n.push(N("required","".concat(t," required"),(function(e,t){return 0!==e.length}))),"min"===a&&n.push(C(t,e[a])),"max"===a&&n.push(k(t,e[a]));return n}var S=function(e){var t={};e.forEach((function(e){var n=y[e.type]||e.type;t[e.name]=Object(j.a)(Object(j.a)(Object(j.a)(Object(j.a)({},f[n]),{validationRules:w(e.validation,e.name)}),e),{errorMessage:"",touched:!1,valid:!1,value:""})}));var n=Object(o.useState)(t),a=Object(s.a)(n,2),c=a[0],r=a[1];var i=Object(o.useCallback)((function(e){var t,n=Object(u.a)(e.validationRules);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(!a.validate(e.value,c))return e.errorMessage=a.message,!1}}catch(r){n.e(r)}finally{n.f()}return!0}),[c]),l=Object(o.useCallback)((function(e){var t=e.target,n=t.name,a=t.value,s=Object(j.a)({},c[n]);s.value=a;var o=i(s);o&&!s.valid?s.valid=!0:!o&&s.valid&&(s.valid=!1),s.touched=!0,r(Object(j.a)(Object(j.a)({},c),{},Object(d.a)({},n,s)))}),[c,i]);return{renderFormInputs:function(){return Object.values(c).map((function(e){return e.handleChange=l,e.renderInput(e)}))},isFormValid:Object(o.useCallback)((function(){for(var e=!0,t=Object.values(c),n=0;n<t.length;n++)if(!t[n].valid){e=!1;break}return e}),[c]),form:c}},P=[{label:"Username",name:"sso",type:"text",validation:{required:!0,min:1,max:4}},{label:"Password",name:"password",type:"password",validation:{required:!0,min:1,max:4}}],A=[{label:"Car Name",name:"name",type:"text",validation:{}},{label:"Company",name:"company",type:"text",validation:{}},{label:"Price",name:"price",type:"text",validation:{}},{label:"Fuel Type",name:"fueltype",type:"select",options:["petrol","diesel"],validation:{required:!0}},{label:"Mileage",name:"mileage",type:"text",validation:{}},{label:"Automatic",name:"automatic",type:"text",validation:{}}],M="https://dashboardserver25.herokuapp.com/api/",T={isAuthenticated:null},I=function(){return Object(b.jsx)("div",{className:"loader"})};n(41);function q(){var e=S(P),t=e.renderFormInputs,n=e.form,a=Object(o.useState)(!1),c=Object(s.a)(a,2),r=c[0],l=c[1],d=function(e){T.isAuthenticated=e,l(e)};return Object(b.jsx)("div",{className:"auth-wrapper",children:Object(b.jsxs)("div",{className:"auth-inner",children:[Object(b.jsx)("div",{className:"imgcontainer",children:Object(b.jsx)("img",{src:"/image/img_avatar2.png",alt:"Avatar",className:"avatar"})}),t(),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){fetch(M+"authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sso:n.sso.value,password:n.password.value})}).then((function(e){return e.json()})).then((function(e){d(!!e)})).catch((function(){d(!1)}))},children:"Submit"}),r&&Object(b.jsx)(i.a,{to:"/dashboard"})]})})}var E,F,L,_,D,J,R,B,G,U=n(8),z=n(9);function H(e){if(e)return"width:".concat(e/12*100,"%")}var K=z.a.div(E||(E=Object(U.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n"]))),V=z.a.div(F||(F=Object(U.a)(["\n  display: block;\n  ",";\n\n  @media only screen and (min-width: 768px) {\n    ",";\n  }\n\n  @media only screen and (min-width: 992px) {\n    ",";\n  }\n\n  @media only screen and (min-width: 1200px) {\n    ",";\n  }\n"])),(function(e){return e.xs?H(e.xs):"width:100%"}),(function(e){return e.sm&&H(e.sm)}),(function(e){return e.md&&H(e.md)}),(function(e){return e.lg&&H(e.lg)})),Y=z.a.table(L||(L=Object(U.a)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),Q=z.a.td(_||(_=Object(U.a)(["\n  border: 1px solid #ddd;\n  padding: 8px;\n"]))),W=z.a.th(D||(D=Object(U.a)(["\n  border: 1px solid #ddd;\n  padding: 8px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04aa6d;\n  color: white;\n"]))),X=z.a.tr(J||(J=Object(U.a)(["\n  &:hover "," {\n    background-color: #f2f2f2;\n  }\n  &:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n"])),Q),Z=z.a.div(R||(R=Object(U.a)(["\n  position: relative;\n  width: 50%;\n  margin: auto;\n  text-align: center;\n  top: 15%;\n  background: #f1f4f5;\n  padding: 3rem;\n  border-radius: 0.25rem;\n"]))),$=z.a.div(B||(B=Object(U.a)(["\n  width: 100%;\n  background-color: #5cb85c;\n  height: 5rem;\n  color: #fff;\n  position: sticky;\n"]))),ee=z.a.div(G||(G=Object(U.a)(["\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%),\n    0 6px 30px 5px rgb(0 0 0 / 12%);\n  background: #fff;\n  margin-top: 5rem;\n  overflow: auto;\n  transition: all 0.3s;\n"]))),te=function(){return Object(b.jsx)(Z,{children:Object(b.jsx)("span",{className:"text-danger",children:"Unauthorized user or insufficent access. Please contact admin for assistance."})})},ne=function(){return Object(b.jsx)($,{children:Object(b.jsxs)(K,{children:[Object(b.jsx)(V,{lg:"6"}),Object(b.jsx)(V,{lg:"5"}),Object(b.jsx)(V,{lg:"1"})]})})},ae=n(28),ce=n(29),re=n(31),ie=n(30);var se=function(e){var t=e.children,n=e.title,a=e.isOpen,c=e.close;return a&&Object(b.jsxs)(ee,{children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",children:n}),Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:c,children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(b.jsx)("div",{className:"modal-body",children:t})]})},oe=function(){var e=S(A),t=e.renderFormInputs,n=e.form;return Object(b.jsxs)("div",{className:"add_product",children:[t(),Object(b.jsx)("button",{type:"submit",onClick:function(){fetch(M+"add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name.value,company:n.company.value,price:n.price.value,fueltype:n.fueltype.value,mileage:n.mileage.value,automatic:n.automatic.value})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){}))},children:"Submit"})]})},le=(n(52),function(e){Object(re.a)(n,e);var t=Object(ie.a)(n);function n(e){var a;return Object(ae.a)(this,n),(a=t.call(this,e)).handleClickOpen=function(e){a.setState({edit:e}),a.setState({modal:!0})},a.handleClose=function(){a.setState({modal:!1})},a.changeHandler=function(e){var t=e.target.id,n=e.target.value;a.setState(Object(d.a)({},t,n))},a.globalSearch=function(e){fetch(M+"searchByKey?search=".concat(e.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a.setState({products:e})}))},a.state={isLoading:!1,modal:!1,products:[],edit:{}},a}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(M+"products",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({products:t}),e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"background",style:{backgroundImage:"url('/image/home.webp')"},children:Object(b.jsx)("div",{className:"search_box",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by Product name",className:"form-control",id:"search",onBlur:this.globalSearch})})}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"",children:[Object(b.jsxs)(K,{children:[Object(b.jsx)(V,{lg:"6"}),Object(b.jsx)(V,{lg:"5"}),Object(b.jsx)(V,{lg:"1",children:Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleClickOpen,children:"Add Product"})})]}),Object(b.jsxs)(K,{children:[Object(b.jsx)(V,{lg:"2"}),Object(b.jsx)(V,{lg:"8",children:Object(b.jsxs)(Y,{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)(X,{children:[Object(b.jsx)(W,{className:"p_name",children:"Car Name"}),Object(b.jsx)(W,{className:"p_name",children:"Company"}),Object(b.jsx)(W,{className:"p_desc",children:"Price"}),Object(b.jsx)(W,{children:"Fuel Type"}),Object(b.jsx)(W,{children:"Mileage"}),Object(b.jsx)(W,{children:"Automatic"}),Object(b.jsx)(W,{})]})}),Object(b.jsx)("tbody",{children:this.state.products.map((function(t,n){return Object(b.jsxs)(X,{children:[Object(b.jsx)(Q,{children:t.name}),Object(b.jsx)(Q,{children:t.company}),Object(b.jsx)(Q,{className:"description",children:t.price}),Object(b.jsx)(Q,{children:t.fueltype}),Object(b.jsx)(Q,{children:t.mileage}),Object(b.jsx)(Q,{children:t.automatic?"Yes":"No"}),Object(b.jsx)(Q,{children:Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.handleClickOpen(t)},children:"Edit"})})]},t.id)}))})]})}),Object(b.jsx)(V,{lg:"2"})]}),this.state.isLoading&&Object(b.jsx)(I,{}),Object(b.jsx)("div",{children:Object(b.jsx)(se,{title:"Add Product",isOpen:this.state.modal,close:this.handleClose,children:Object(b.jsx)(oe,{param:this.state.edit})})})]})})]})}}]),n}(l.a.Component)),de=n(32),ue=["component"],je=function(e){var t=e.component,n=Object(de.a)(e,ue);return Object(b.jsx)(i.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return null===T.isAuthenticated?Object(b.jsx)(i.a,{to:"/Login"}):!0===T.isAuthenticated?Object(b.jsx)(t,Object(j.a)({},e)):Object(b.jsx)(i.a,{to:"/Error"})}}))};function be(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(ne,{}),Object(b.jsx)("div",{className:"main-area",children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:q}),Object(b.jsx)(je,{path:"/dashboard",component:le}),Object(b.jsx)(i.b,{path:"/error",component:te}),Object(b.jsx)(i.b,{path:"*",component:q})]})})})]})}n(53);c.a.render(Object(b.jsx)(be,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9cac8268.chunk.js.map