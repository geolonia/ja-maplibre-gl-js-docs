(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"+Lk5":function(e,t,r){"use strict";r.r(t),t.default="<div id=\"map\"></div>\n<script>\n    var map = (window.map = new maplibregl.Map({\n        container: 'map',\n        zoom: 3,\n        center: [7.5, 58],\n        style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\n        antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased\n    }));\n\n    // create a custom style layer to implement the WebGL content\n    var highlightLayer = {\n        id: 'highlight',\n        type: 'custom',\n\n        // method called when the layer is added to the map\n        // https://maplibre.org/maplibre-gl-js-docs/api/properties/#styleimageinterface#onadd\n        onAdd: function (map, gl) {\n            // create GLSL source for vertex shader\n            var vertexSource =\n                '' +\n                'uniform mat4 u_matrix;' +\n                'attribute vec2 a_pos;' +\n                'void main() {' +\n                '    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);' +\n                '}';\n\n            // create GLSL source for fragment shader\n            var fragmentSource =\n                '' +\n                'void main() {' +\n                '    gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);' +\n                '}';\n\n            // create a vertex shader\n            var vertexShader = gl.createShader(gl.VERTEX_SHADER);\n            gl.shaderSource(vertexShader, vertexSource);\n            gl.compileShader(vertexShader);\n\n            // create a fragment shader\n            var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\n            gl.shaderSource(fragmentShader, fragmentSource);\n            gl.compileShader(fragmentShader);\n\n            // link the two shaders into a WebGL program\n            this.program = gl.createProgram();\n            gl.attachShader(this.program, vertexShader);\n            gl.attachShader(this.program, fragmentShader);\n            gl.linkProgram(this.program);\n\n            this.aPos = gl.getAttribLocation(this.program, 'a_pos');\n\n            // define vertices of the triangle to be rendered in the custom style layer\n            var helsinki = maplibregl.MercatorCoordinate.fromLngLat({\n                lng: 25.004,\n                lat: 60.239\n            });\n            var berlin = maplibregl.MercatorCoordinate.fromLngLat({\n                lng: 13.403,\n                lat: 52.562\n            });\n            var kyiv = maplibregl.MercatorCoordinate.fromLngLat({\n                lng: 30.498,\n                lat: 50.541\n            });\n\n            // create and initialize a WebGLBuffer to store vertex and color data\n            this.buffer = gl.createBuffer();\n            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);\n            gl.bufferData(\n                gl.ARRAY_BUFFER,\n                new Float32Array([\n                    helsinki.x,\n                    helsinki.y,\n                    berlin.x,\n                    berlin.y,\n                    kyiv.x,\n                    kyiv.y\n                ]),\n                gl.STATIC_DRAW\n            );\n        },\n\n        // method fired on each animation frame\n        // https://maplibre.org/maplibre-gl-js-docs/api/map/#map.event:render\n        render: function (gl, matrix) {\n            gl.useProgram(this.program);\n            gl.uniformMatrix4fv(\n                gl.getUniformLocation(this.program, 'u_matrix'),\n                false,\n                matrix\n            );\n            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);\n            gl.enableVertexAttribArray(this.aPos);\n            gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);\n            gl.enable(gl.BLEND);\n            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);\n        }\n    };\n\n    // add the custom style layer to the map\n    map.on('load', function () {\n        map.addLayer(highlightLayer, 'building');\n    });\n<\/script>\n"},EvSz:function(e,t,r){var n=r("TpP2");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Add a custom style layer",description:"Use a custom style layer to render custom WebGL content.",topics:["Layers"],thumbnail:"custom-style-layer",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './custom-style-layer.html';"]}}}},M4Oy:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r("fG8n"))&&n.__esModule?n:{default:n}).default;t.default=o},TpP2:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r("q1tI")),a=(r("yr+R"),r("cQZ0"),l(r("uLm5"))),i=l(r("+Lk5")),c=l(r("1wO5"));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Add a custom style layer",description:"Use a custom style layer to render custom WebGL content.",topics:["Layers"],thumbnail:"custom-style-layer",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,n,l=d(y);function y(){return u(this,y),l.apply(this,arguments)}return t=y,(r=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,s({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use a custom style layer to render custom WebGL content."),o.default.createElement(a.default,s({html:i.default},this.props))))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.default.PureComponent);t.default=b},uLm5:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var n=r("q1tI"),o=r.n(n),a=r("f4rJ");r("yr+R");function i(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(a.a,"/dist/maplibre-gl.").concat(e)}var c={js:function(e){return i("js",e)},css:function(e){return i("css",e)}},l=r("v8ZZ"),s=r("irdr"),u=r.n(s),p=r("M4Oy"),f=r.n(p),d=r("umIL"),y=r("wdKx");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,r,n,a=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={unsupported:!1},t}return t=i,(r=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(L,'\n<script src="').concat(c.js(),'"><\/script>\n<link href="').concat(c.css(),'" rel="stylesheet" />\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(L,"\n\n\n<script src='").concat(c.js({local:!0}),"'><\/script>\n<link href='").concat(c.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,r=e.location,n=this.displayHTML(t),a=y.extractor(n);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return d.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:r.pathname}),head:L,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.frontMatter,n=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(f.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(l.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:n},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(r.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(l.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.a.Component);S(x,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,r){"use strict";function n(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,r=new Blob([""],{type:"text/javascript"}),n=URL.createObjectURL(r);try{t=new Worker(n),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(n),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var r=t.getImageData(0,0,1,1);return r&&r.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,r=function(e){var t=document.createElement("canvas"),r=Object.create(n.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}(e);if(!r)return!1;try{t=r.createShader(r.VERTEX_SHADER)}catch(e){return!1}if(!t||r.isContextLost())return!1;return r.shaderSource(t,"void main() {}"),r.compileShader(t),!0===r.getShaderParameter(t,r.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=n,t.notSupportedReason=o;var a={};n.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",r={js:[],css:[]},n=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,l=e.match(i),s="".concat(e.replace(a,"")),u=e.match(a)[1];l&&(l.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),s="".concat(s.replace(i,"")));if(e.match(n)){var p=e.match(n).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));r.js=r.js.concat(p),s="".concat(s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));r.css=r.css.concat(f),s="".concat(s.replace(/<link[\s\S]*?>/g,""))}s.match(c)&&(s=s.match(c)[1]);return{html:s,css:t,js:u,resources:r}}}}]);
//# sourceMappingURL=ja-maplibre-gl-js-docs-example-custom-style-layer-2b16b7a420e72d250bd3.chunk.js.map