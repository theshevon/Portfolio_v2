(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8ypT":function(t,e,n){},Ba8s:function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("IRj2"),o=n("q1tI"),a=n.n(o),i=(n("8ypT"),n("VRzm"),n("Btvt"),n("o0o1")),c=n.n(i),u=(n("ls82"),n("Jahq"),function(t){var e="line";return t.active&&(e+=" active"),a.a.createElement("button",{className:"toggle-button",onClick:t.clickHandler},a.a.createElement("div",{className:e}))}),s=(n("Ba8s"),function(t){var e=t.menuOpen,n=t.menuActive,r=t.action,o=e?"CLOSE":"MENU",i=n||e?"menu-btn menu-btn-act":"menu-btn";return a.a.createElement("button",{className:i,onClick:r,onKeyDown:r},o)});n("GJUX");var l=function(t){var e,n;function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={lang:"eng"},e.langs=[{id:"eng",sym:"ENG"},{id:"kor",sym:"한글"}],e.setLang=function(t){e.setState({lang:t})},e}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this,e=a.a.createElement("ul",null,this.langs.map((function(e,n){return a.a.createElement("p",{key:n,className:e.id===t.state.lang?"sel-lang":"lang",onClick:function(){return t.setLang(e.id)},onKeyDown:function(){return t.setLang(e.id)}},e.sym)})));return a.a.createElement("div",{className:"lang-btn"},e)},r}(o.Component);n("yw9b");var h=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.active,n=t.showOptions,r=t.links,o=t.menuOpen;return a.a.createElement("div",null,a.a.createElement("div",{className:n?"navbar show":"navbar hide"},a.a.createElement("nav",{className:"navbar_options"},a.a.createElement("div",{className:"menu-buttons"},a.a.createElement(s,{className:"px-2",menuOpen:o,menuActive:e,action:this.props.clickHandler}),a.a.createElement(l,{className:"px-2",menuOpen:o,menuActive:e,langIdx:1,action:null})),a.a.createElement(u,{active:o,clickHandler:this.props.clickHandler}))),a.a.createElement("div",{className:o&&n?"menu-wrapper-open":"menu-wrapper"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",null,r.map((function(t,e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"home"!==t?t:"/",className:"nav-link"},t.toUpperCase()))}))))))},r}(a.a.Component);function p(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}var f=function(t){var e,n;function r(){var e;return(e=t.call(this)||this).drawerClickHandler=function(){e.setState((function(t){return{showMenu:!t.showMenu}}))},e.state={showOptions:!0,showMenu:!1,prevTime:(new Date).getTime()},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var t,e=(t=c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.addEventListener("mousemove",(function(t){var n;n=t.clientY<120;var r=e.state,o=r.showOptions,a=r.showMenu;if(o!==n){var i=!!n&&a;e.setState({showOptions:n}),setTimeout((function(){return e.setState({showMenu:i})}),750)}}));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,c,"next",t)}function c(t){p(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),o.render=function(){return a.a.createElement("div",null,a.a.createElement(h,{links:["about","projects","photog","home","blog","music","art"],showOptions:this.state.showOptions,menuOpen:this.state.showMenu,clickHandler:this.drawerClickHandler}))},r}(a.a.Component);e.a=function(t){var e=t.children;r.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement("div",null,a.a.createElement("main",null,e)))}},GJUX:function(t,e,n){},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Book of Shevon"}}}}')},Jahq:function(t,e,n){},h7Nl:function(t,e,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},ls82:function(t,e,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var s={};function l(){}function h(){}function p(){}var f={};f[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&n.call(m,o)&&(f=m);var d=p.prototype=l.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d.constructor=p,p.constructor=h,p[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(d),d[i]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")},yw9b:function(t,e,n){}}]);
//# sourceMappingURL=1f59d32cd952cd8888da4c278be42baa28ea491a-d345b9d547a83f66e827.js.map