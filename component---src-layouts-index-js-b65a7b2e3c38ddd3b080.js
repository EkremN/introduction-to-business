webpackJsonp([0x67ef26645b2a,60335399758886],{223:function(e,t){e.exports={layoutContext:{}}},374:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(380),c=r(u),f=n(223),l=r(f);t.default=function(e){return a.default.createElement(c.default,o({},e,l.default))},e.exports=t.default},111:function(e,t,n){e.exports={default:n(119),__esModule:!0}},113:function(e,t,n){e.exports={default:n(121),__esModule:!0}},117:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(111),i=r(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},118:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},421:function(e,t){},422:function(e,t){},119:function(e,t,n){n(144),e.exports=n(8).Object.assign},121:function(e,t,n){n(146),e.exports=n(8).Object.keys},134:function(e,t,n){"use strict";var r=n(26),o=n(43),i=n(28),a=n(48),u=n(78),c=Object.assign;e.exports=!c||n(18)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(var n=a(e),c=arguments.length,f=1,l=o.f,s=i.f;c>f;)for(var p,T=u(arguments[f++]),d=l?r(T).concat(l(T)):r(T),E=d.length,A=0;E>A;)s.call(T,p=d[A++])&&(n[p]=T[p]);return n}:c},138:function(e,t,n){var r=n(17),o=n(8),i=n(18);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},144:function(e,t,n){var r=n(17);r(r.S+r.F,"Object",{assign:n(134)})},146:function(e,t,n){var r=n(48),o=n(26);n(138)("keys",function(){return function(e){return o(r(e))}})},412:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),f(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),p=u(t)}catch(e){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),i=s.length-1;i>=0;i--)if(s[i]!=p[i])return!1;for(i=s.length-1;i>=0;i--)if(l=s[i],!f(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(414),c=n(413),f=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},413:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},414:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},156:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},105:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return i(m+e)}function i(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var a=n(117),u=r(a),c=n(113),f=r(c),l=n(118),s=r(l),p=n(72),T=r(p),d=n(93),E=r(d),A=n(92),h=r(A);t.withPrefix=o;var y=n(1),_=r(y),S=n(90),b=n(2),v=r(b),m="/";m="/introduction-to-business";var O={activeClassName:v.default.string,activeStyle:v.default.object,exact:v.default.bool,strict:v.default.bool,isActive:v.default.func,location:v.default.object},R=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},P=function(e){function t(n){(0,T.default)(this,t);var r=(0,E.default)(this,e.call(this)),i=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0),r.state={to:o(n.to),IOSupported:i},r.handleRef=r.handleRef.bind(r),r}return(0,h.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:o(e.to)}),this.state.IOSupported||___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&R(e,function(){___loader.enqueue(t.state.to)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,s.default)(t,["onClick"]),o=void 0;return o=(0,f.default)(O).some(function(t){return e.props[t]})?S.NavLink:S.Link,_.default.createElement(o,(0,u.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.to;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.to.split("#").slice(1).join("#"),i=document.getElementById(o);if(null!==i)return i.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(_.default.Component);P.propTypes=(0,u.default)({},O,{innerRef:v.default.func,onClick:v.default.func,to:v.default.string.isRequired}),P.contextTypes={router:v.default.object},t.default=P;t.navigateTo=function(e){window.___navigateTo(o(e))}},423:function(e,t){},561:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),s=r(l),p=n(2),T=r(p),d=n(563),E=r(d),A=n(412),h=r(A),y=n(562),_=n(364),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case _.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case _.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case _.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case _.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case _.TAG_NAMES.LINK:case _.TAG_NAMES.META:case _.TAG_NAMES.NOSCRIPT:case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},f(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},v=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),m=S(v);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},364:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},562:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),c=n(11),f=r(c),l=n(364),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=h(e,l.TAG_NAMES.TITLE),n=h(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return h(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},A=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&m("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,f.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:h(e,l.HELMET_PROPS.DEFER),encode:h(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:A(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:A(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:A(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},_=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){_(t)},0)}}(),S=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,m=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,R=function(e){O&&v(O),e.defer?O=b(function(){P(e,function(){O=null})}):(P(e),O=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,s=e.styleTags,p=e.title,T=e.titleAttributes;w(l.TAG_NAMES.BODY,r),w(l.TAG_NAMES.HTML,o),g(p,T);var d={baseTag:C(l.TAG_NAMES.BASE,n),linkTags:C(l.TAG_NAMES.LINK,i),metaTags:C(l.TAG_NAMES.META,a),noscriptTags:C(l.TAG_NAMES.NOSCRIPT,u),scriptTags:C(l.TAG_NAMES.SCRIPT,f),styleTags:C(l.TAG_NAMES.STYLE,s)},E={},A={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=d[e].oldTags)}),t&&t(),c(e,E,A)},M=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],f=t[c]||"";n.getAttribute(c)!==f&&n.setAttribute(c,f),o.indexOf(c)===-1&&o.push(c);var s=i.indexOf(c);s!==-1&&i.splice(s,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=M(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,f=e.styleTags,s=e.title,p=void 0===s?"":s,T=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,r),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,o,r),link:x(l.TAG_NAMES.LINK,i,r),meta:x(l.TAG_NAMES.META,a,r),noscript:x(l.TAG_NAMES.NOSCRIPT,u,r),script:x(l.TAG_NAMES.SCRIPT,c,r),style:x(l.TAG_NAMES.STYLE,f,r),title:x(l.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=R,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=m}).call(t,function(){return this}())},563:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),c=r(u),f=n(156),l=r(f),s=n(577),p=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(f){function s(){d=e(T.map(function(e){return e.props})),E.canUseDOM?t(d):n&&(d=n(d))}if("function"!=typeof f)throw new Error("Expected WrappedComponent to be a React component.");var T=[],d=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,p.default)(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(f,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(f)+")",E.canUseDOM=l.default.canUseDOM,E}}},577:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var f=i[c];if(!u(f))return!1;var l=e[f],s=t[f];if(o=n?n.call(r,l,s,f):void 0,o===!1||void 0===o&&l!==s)return!1}return!0}},425:function(e,t){},380:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),i=r(o),a=n(2),u=r(a),c=n(105),f=r(c),l=n(561),s=r(l);n(421),n(423),n(422),n(425);var p=function(){return i.default.createElement("div",{className:"navbar navbar-light gradient"},i.default.createElement(f.default,{to:"/",className:"navbar-brand"},"Introduction to Business"))},T=function(e){var t=e.children;return i.default.createElement("div",null,i.default.createElement(s.default,{title:"Introduction to Business",meta:[{name:"description",content:"Learn how to be a web developer! In this course we go over the basics of HTML, CSS, JavaScript, and other tools to learn how to be programmer."},{name:"keywords",content:"computer science, javascript, css, html, web, web developer, web dev, cloud, node, node.js"}]}),i.default.createElement(p,null),i.default.createElement("div",{className:"main"},t()))};T.propTypes={children:u.default.func},t.default=T,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-b65a7b2e3c38ddd3b080.js.map