(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(11),r=n.n(c),i=n(7),s=n(8),o=n(2),u=n(3),l=n(6),p=n(5),j=n(4),b=n(0),d=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={xp:0,idInterval:null},e.gainExp=e.gainExp.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"gainExp",value:function(){var e=this.state.xp;this.setState({xp:e+10})}},{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({xp:e.state.xp+10})}),500);this.setState({idInterval:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.idInterval)}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.src,a=e.actionB,c=this.state.xp;return Object(b.jsxs)("li",{className:"TrainedPokemon",onClick:a,onMouseMove:this.gainExp,children:[Object(b.jsx)("div",{className:"name",children:t}),Object(b.jsx)("div",{className:"exp",children:c}),n&&Object(b.jsx)("img",{src:n,alt:t})]})}}]),n}(a.Component),h=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.address,a=e.bag,c=e.action,r=a.map((function(e){return Object(b.jsx)(d,{name:e.name,weight:e.weight,src:e.sprites.back_default,actionB:function(){return c(e.trainedId)}},e.id)}));return Object(b.jsxs)("div",{className:"Trainer",children:[Object(b.jsx)("div",{className:"name",children:t}),Object(b.jsx)("div",{className:"address",children:n}),Object(b.jsx)("ul",{className:"bag",children:r})]})}}]),n}(a.Component),f=h,m=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={idInterval:null},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.weight,a=e.actionB,c=e.sprites.front_default;return Object(b.jsxs)("li",{className:"Pokemon",onClick:a,children:[Object(b.jsx)("div",{className:"name",children:t}),Object(b.jsx)("div",{className:"weight",children:n}),c&&Object(b.jsx)("img",{src:c,alt:t})]})}}]),n}(a.Component),v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pokemons,n=e.action,a=t.map((function(e){return Object(b.jsx)(m,Object(s.a)({actionB:function(){return n(e)}},e),e.id)}));return Object(b.jsx)("ul",{className:"PokemonList list",children:a})}}]),n}(a.Component),O=v,x=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.types,n=e.filter,a=e.active,c=t.map((function(e){return Object(b.jsx)("button",{className:a===e?"active":"",onClick:function(){return n(e)},children:e},e)}));return Object(b.jsx)("ul",{className:"Filters",children:c})}}]),n}(a.Component),k=x,y=n(10),g=n.n(y),N=n(12);var w=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:[],selected:null,bag:[]},a.selectType=a.selectType.bind(Object(l.a)(a)),a.freePokemon=a.freePokemon.bind(Object(l.a)(a)),a.updateBag=a.updateBag.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.all(Object(i.a)(Array(151).keys()).map((function(e){return e+1})).map(function(){var e=Object(N.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pokeapi.co/api/v2/pokemon","/").concat(t)).then((function(e){return e.json()}));case 2:return delete(n=e.sent).moves,delete n.abilities,delete n.game_indices,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(t){e.setState({data:t})}))}},{key:"selectType",value:function(e){var t=this.state.selected;this.setState({selected:t===e?null:e})}},{key:"freePokemon",value:function(e){this.setState({bag:this.state.bag.filter((function(t){return t.trainedId!==e}))})}},{key:"updateBag",value:function(e){var t=Object(s.a)({},e);t.trainedId=Date.now(),this.state.bag?this.setState({bag:[].concat(Object(i.a)(this.state.bag),[t])}):this.setState({bag:[t]})}},{key:"render",value:function(){var e=this.state.data,t=this.state.selected,n=this.state.bag,a=e.map((function(e){return e.types.map((function(e){return e.type.name}))})).flat(),c=Object(i.a)(new Set(a)),r=t?e.filter((function(e){return e.types.find((function(e){return e.type.name===t}))})):e;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{name:"Cl\xe9mence",address:"Bourgpalette",bag:n,action:this.freePokemon}),Object(b.jsx)(k,{types:c,active:t,filter:this.selectType}),Object(b.jsx)(O,{pokemons:r,action:this.updateBag})]})}}]),n}(a.Component),B=w;n(19),n(20);r.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e470c493.chunk.js.map