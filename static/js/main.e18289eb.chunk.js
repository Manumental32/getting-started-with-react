(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(18),a(10)),u=a(7),i=a(8),m=a(12),h=a(11),s=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove")))},b=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},f=function(e){var t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(s,null),r.a.createElement(b,{characterData:t,removeCharacter:a}))},p=a(9),v=a(1),E=a(2),d=a(3),j=a(4),y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"job"},"Job"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(r.a.Component),C=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("ul",null,e)}}]),a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," Empezando con react! Mi primer tabla, form y fetch "),r.a.createElement(C,null),r.a.createElement("hr",null),r.a.createElement(f,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(y,{handleSubmit:this.handleSubmit}))}}]),a}(r.a.Component);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e18289eb.chunk.js.map