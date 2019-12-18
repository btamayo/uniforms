(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{161:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return p}));r(66),r(226),r(33),r(27),r(26),r(67),r(0);var t=r(237);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={},i=[],c={rightToc:i},s="wrapper";function p(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(s,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-js"}),"import Ajv from 'ajv';\nimport { JSONSchemaBridge } from 'uniforms-bridge-json-schema';\n\nconst ajv = new Ajv({ allErrors: true, useDefaults: true });\n\nconst schema = {\n  title: 'Date Range',\n  type: 'object',\n  properties: {\n    range: {\n      type: 'object',\n      properties: {\n        start: { type: 'string', format: 'date-time' },\n        stop: { type: 'string', format: 'date-time' }\n      },\n      required: ['start', 'stop']\n    }\n  }\n};\n\nfunction createValidator(schema) {\n  const validator = ajv.compile(schema);\n\n  return model => {\n    validator(model);\n\n    if (validator.errors && validator.errors.length) {\n      throw { details: validator.errors };\n    }\n  };\n}\n\nconst schemaValidator = createValidator(schema);\n\nexport default new JSONSchemaBridge(schema, schemaValidator);\n")))}p.isMDXComponent=!0},226:function(e,n,r){"use strict";var t=r(3),a=r(69)(!1),o=[].indexOf,i=!!o&&1/[1].indexOf(1,-0)<0;t(t.P+t.F*(i||!r(34)(o)),"Array",{indexOf:function(e){return i?o.apply(this,arguments)||0:a(this,e,arguments[1])}})},237:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return l}));var t=r(0),a=r.n(t),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),u=i(r),l=t,f=u[c+"."+l]||u[l]||p[l]||o;return r?a.a.createElement(f,Object.assign({},{ref:n},s,{components:r})):a.a.createElement(f,Object.assign({},{ref:n},s))}));function l(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);