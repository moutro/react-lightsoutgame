(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),o=(n(27),n(3)),s=n(4),i=n(6),u=n(5),h=n(7),m=n(20),p=n(11),d=n(21),f=n(9),b=(n(29),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),v=(n(31),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,c=e.split("-").map(Number),l=Object(d.a)(c,2),o=l[0],s=l[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(o,s),i(o,s-1),i(o,s+1),i(o-1,s),i(o+1,s);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"makeTable",value:function(){for(var e=this,t=[],n=0;n<this.props.nrows;n++){for(var a=[],c=function(t){var c="".concat(n,"-").concat(t);a.push(r.a.createElement(b,{key:c,isLit:e.state.board[n][t],flipCellsAroundMe:function(){return e.flipCellsAround(c)}}))},l=0;l<this.props.ncols;l++)c(l);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hasWon?r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!")):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),this.makeTable()))}}]),t}(a.Component));v.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var E=v,O=(n(33),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("ul",null,r.a.createElement(E,null)),r.a.createElement("hr",null),r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{path:"/about",component:j})))}}]),t}(a.Component)),k=function(){return r.a.createElement("div",null," ",r.a.createElement("h2",null," "))},j=function(){return r.a.createElement("div",null," ",r.a.createElement("h2",null," "))},w=O;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.2454fe94.chunk.js.map