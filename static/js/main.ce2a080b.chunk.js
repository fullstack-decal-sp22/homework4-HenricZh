(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,a){e.exports=a(17)},,,,,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(3),c=a.n(l),u=(a(9),a(11),a(1));a(13),a(15);var o=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)};var i=function(){var e="Next player: X",n=Object(t.useState)(Array(9).fill(null,0,9)),a=Object(u.a)(n,2),l=a[0],c=a[1],i=Object(t.useState)("X"),s=Object(u.a)(i,2),m=s[0],v=s[1];function d(e){for(var n=0,a=[[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[2,4,6]];n<a.length;n++){var t=a[n],r=Object(u.a)(t,3),l=r[0],c=r[1],o=r[2];if(null!=e[l]&&e[c]===e[l]&&e[o]===e[l])return e[l]}return null}function f(e){return r.a.createElement(o,{value:l[e],onClick:function(){return function(e){var n=l.slice();d(n)||null!=n[e]||(n[e]=m,c(n),v("X"===m?"O":"X"))}(e)}})}var E=d(l);return e=null==E?"Next Player: "+m:"Winner: "+E,r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},f(0),f(1),f(2)),r.a.createElement("div",{className:"board-row"},f(3),f(4),f(5)),r.a.createElement("div",{className:"board-row"},f(6),f(7),f(8)),r.a.createElement("div",{className:"status"},e))};var s=function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(i,null)))};var m=function(){return r.a.createElement("div",null,r.a.createElement(s,null))};c.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[4,2,1]]]);
//# sourceMappingURL=main.ce2a080b.chunk.js.map