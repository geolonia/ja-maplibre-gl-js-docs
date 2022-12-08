(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},TZVL:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("gSbj")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m={title:"Add a canvas source",description:"Add a canvas source to the map.",topics:["Sources"],thumbnail:"canvas-source",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(y,t);var e,n,r,s=d(y);function y(){return p(this,y),s.apply(this,arguments)}return e=y,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,u({},t,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"Add a ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/api/sources/#canvassource"},o.default.createElement("code",null,"CanvasSource"))," to the map."),o.default.createElement(a.default,u({html:i.default},this.props))))}}])&&l(e.prototype,n),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),y}(o.default.PureComponent);e.default=b},gSbj:function(t,e,n){"use strict";n.r(e),e.default="<canvas id=\"canvasID\" width=\"400\" height=\"400\">Canvas not supported</canvas>\n<div id=\"map\"></div>\n<script>\n    //Animation from https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas\n    var canvas = document.getElementById('canvasID');\n    var ctx = canvas.getContext('2d');\n    var circles = [];\n    var radius = 20;\n\n    function Circle(x, y, dx, dy, radius, color) {\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n\n        this.radius = radius;\n\n        this.draw = function () {\n            ctx.beginPath();\n            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n            ctx.strokeStyle = color;\n            ctx.stroke();\n        };\n\n        this.update = function () {\n            if (this.x + this.radius > 400 || this.x - this.radius < 0) {\n                this.dx = -this.dx;\n            }\n\n            if (this.y + this.radius > 400 || this.y - this.radius < 0) {\n                this.dy = -this.dy;\n            }\n\n            this.x += this.dx;\n            this.y += this.dy;\n\n            this.draw();\n        };\n    }\n\n    for (var i = 0; i < 5; i++) {\n        var color =\n            '#' +\n            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);\n        var x = Math.random() * (400 - radius * 2) + radius;\n        var y = Math.random() * (400 - radius * 2) + radius;\n\n        var dx = (Math.random() - 0.5) * 2;\n        var dy = (Math.random() - 0.5) * 2;\n\n        circles.push(new Circle(x, y, dx, dy, radius, color));\n    }\n\n    function animate() {\n        requestAnimationFrame(animate);\n        ctx.clearRect(0, 0, 400, 400);\n\n        for (var r = 0; r < 5; r++) {\n            circles[r].update();\n        }\n    }\n\n    animate();\n\n    var map = new maplibregl.Map({\n        container: 'map',\n        zoom: 5,\n        minZoom: 4,\n        center: [95.899147, 18.088694],\n        style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'\n    });\n\n    map.on('load', function () {\n        map.addSource('canvas-source', {\n            type: 'canvas',\n            canvas: 'canvasID',\n            coordinates: [\n                [91.4461, 21.5006],\n                [100.3541, 21.5006],\n                [100.3541, 13.9706],\n                [91.4461, 13.9706]\n            ],\n            // Set to true if the canvas source is animated. If the canvas is static, animate should be set to false to improve performance.\n            animate: true\n        });\n\n        map.addLayer({\n            id: 'canvas-layer',\n            type: 'raster',\n            source: 'canvas-source'\n        });\n    });\n<\/script>\n"},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var r=n("q1tI"),o=n.n(r),a=n("f4rJ");n("yr+R");function i(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(a.a,"/dist/maplibre-gl.").concat(t)}var c={js:function(t){return i("js",t)},css:function(t){return i("css",t)}},s=n("v8ZZ"),u=n("irdr"),p=n.n(u),l=n("M4Oy"),f=n.n(l),d=n("umIL"),y=n("wdKx");function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return(O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(i,t);var e,n,r,a=w(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this,t)).state={unsupported:!1},e}return e=i,(n=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(S,'\n<script src="').concat(c.js(),'"><\/script>\n<link href="').concat(c.css(),'" rel="stylesheet" />\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(S,"\n\n\n<script src='").concat(c.js({local:!0}),"'><\/script>\n<link href='").concat(c.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(P,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),a=y.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(e),highlighter:function(){return d.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:S,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(f.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(s.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(s.supported)()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&v(e.prototype,n),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),i}(o.a.Component);x(E,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas");t.width=t.height=1;var e=t.getContext("2d");if(!e)return!1;var n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){var e,n=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!n)return!1;try{e=n.createShader(n.VERTEX_SHADER)}catch(t){return!1}if(!e||n.isContextLost())return!1;return n.shaderSource(e,"void main() {}"),n.compileShader(e),!0===n.getShaderParameter(e,n.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.supported=r,e.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(i),u="".concat(t.replace(a,"")),p=t.match(a)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(i,"")));if(t.match(r)){var l=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(c)&&(u=u.match(c)[1]);return{html:u,css:e,js:p,resources:n}}},x74h:function(t,e,n){var r=n("TZVL");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Add a canvas source",description:"Add a canvas source to the map.",topics:["Sources"],thumbnail:"canvas-source",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './canvas-source.html';"]}}}}}]);
//# sourceMappingURL=ja-maplibre-gl-js-docs-example-canvas-source-75dc13065965b71a2b7a.chunk.js.map