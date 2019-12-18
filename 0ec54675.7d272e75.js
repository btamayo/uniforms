(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return u}));t(66),t(226),t(33),t(27),t(26),t(67),t(0);var r=t(237);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={id:"examples-custom-form",title:"Custom form"},a=[{value:"ModifierForm",id:"modifierform",children:[]}],c={rightToc:a},s="wrapper";function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(s,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In uniforms, every form is just an injectable set of functionalities.\nThus, we can live without many higher order components, using composed ones instead.\nIf you want to get a deeper dive into it, we encourage you to read the source of AutoForm or QuickForm in the core package."),Object(r.b)("h3",{id:"modifierform"},Object(r.b)("inlineCode",{parentName:"h3"},"ModifierForm")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import { BaseForm } from 'uniforms';\n\nconst Modifier = parent =>\n  class extends parent {\n    // Expose injector.\n    //   It's not required, but recommended.\n    static Modifier = Modifier;\n\n    // Alter component display name.\n    //   It's not required, but recommended.\n    static displayName = `Modifier${parent.displayName}`;\n\n    // Here you can override any form methods or create additional ones.\n    getModel(mode) {\n      if (mode === 'submit') {\n        const doc = super.getModel('submit');\n        const keys = this.getChildContextSchema().getSubfields();\n\n        const update = keys.filter(key => doc[key] !== undefined);\n        const remove = keys.filter(key => doc[key] === undefined);\n\n        // It's a good idea to omit empty modifiers.\n        const $set = update.reduce(\n          (acc, key) => ({ ...acc, [key]: doc[key] }),\n          {}\n        );\n        const $unset = remove.reduce((acc, key) => ({ ...acc, [key]: '' }), {});\n\n        return { $set, $unset };\n      }\n\n      return super.getModel(mode);\n    }\n  };\n\n// Now we have to inject our functionality. This one is a ModifierForm. Use any\n// form component you want.\nconst ModifierForm = Modifier(BaseForm);\n")))}u.isMDXComponent=!0},226:function(e,n,t){"use strict";var r=t(3),o=t(69)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!t(34)(i)),"Array",{indexOf:function(e){return a?i.apply(this,arguments)||0:o(this,e,arguments[1])}})},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r),i=o.a.createContext({}),a=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=a(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),d=a(t),f=r,m=d[c+"."+f]||d[f]||u[f]||i;return t?o.a.createElement(m,Object.assign({},{ref:n},s,{components:t})):o.a.createElement(m,Object.assign({},{ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[s]="string"==typeof e?e:r,a[1]=c;for(var f=2;f<i;f++)a[f]=t[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);