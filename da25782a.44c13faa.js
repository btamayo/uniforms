(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{191:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"rightToc",(function(){return o})),r.d(n,"default",(function(){return s}));r(66),r(226),r(33),r(27),r(26),r(67),r(0);var t=r(237);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var i={id:"uth-bridge-concept",title:"Bridge concept"},o=[],l={rightToc:o},c="wrapper";function s(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(c,a({},l,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"To make use of any schema, uniforms have to create a ",Object(t.b)("em",{parentName:"p"},"bridge")," of it - a unified schema mapper. A bridge is (preferably) a subclass of ",Object(t.b)("inlineCode",{parentName:"p"},"Bridge"),", implementing static ",Object(t.b)("inlineCode",{parentName:"p"},"check(schema)")," method and these instance methods:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getError(name, error)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getErrorMessage(name, error)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getErrorMessages(error)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getField(name)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getInitialValue(name, props)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getProps(name, props)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getSubfields(name)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getType(name)")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"getValidator(options)"))),Object(t.b)("p",null,'Bridge is a kind of abstract class, which should be extended to create custom bridges.\nIt implements all of the required methods and throws an error with meaningful "method not implemented" error.'),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-js"}),"import { Bridge } from 'uniforms';\n\nclass CustomBridge extends Bridge {\n  // Check, if this bridge is compatibile with given schema.\n  static check(schema) {\n    /* ... */\n  }\n\n  // Field's scoped error.\n  getError(name, error) {\n    /* ... */\n  }\n\n  // Field's scoped error message.\n  getErrorMessage(name, error) {\n    /* ... */\n  }\n\n  // All error messages from error.\n  getErrorMessages(error) {\n    /* ... */\n  }\n\n  // Field's definition (`field` prop).\n  getField(name) {\n    /* ... */\n  }\n\n  // Field's initial value.\n  getInitialValue(name) {\n    /* ... */\n  }\n\n  // Field's props.\n  getProps(name) {\n    /* ... */\n  }\n\n  // Field's subfields (or first-level fields).\n  getSubfields(name) {\n    /* ... */\n  }\n\n  // Field's type (ex. Number, String).\n  getType(name) {\n    /* ... */\n  }\n\n  // Function with one argument - model - which throws errors when model is\n  // invalid.\n  getValidator(options) {\n    /* ... */\n  }\n}\n")))}s.isMDXComponent=!0},226:function(e,n,r){"use strict";var t=r(3),a=r(69)(!1),i=[].indexOf,o=!!i&&1/[1].indexOf(1,-0)<0;t(t.P+t.F*(o||!r(34)(i)),"Array",{indexOf:function(e){return o?i.apply(this,arguments)||0:a(this,e,arguments[1])}})},237:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},l=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),p=o(r),m=t,d=p[l+"."+m]||p[m]||s[m]||i;return r?a.a.createElement(d,Object.assign({},{ref:n},c,{components:r})):a.a.createElement(d,Object.assign({},{ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:t,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);