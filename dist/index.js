"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var classMethodBinder=function(a,b){a&&b&&Array.isArray(b)&&b.length&&b.forEach(function(b){if(a[b])a[b]=a[b].bind(a);else{var c=a.constructor.name,d=void 0===c?"anonymous":c;console.error("[Class-Method-Binder]: "+b+"(){} method not found in '"+d+"'.")}})};exports.default=classMethodBinder;