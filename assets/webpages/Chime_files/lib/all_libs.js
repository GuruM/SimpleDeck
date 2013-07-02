// ------ extension/lib/import/jquery-1.7.1.min.js -------
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
// ------ extension/lib/import/jquery.timeago.js -------
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 0.11.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2011, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator === undefined ?  " " : $l.wordSeparator;
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d\d\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      var isTime;
      try {
        isTime = $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
      } catch (e) {
        isTime = true;
      }
      var iso8601 = isTime ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}(jQuery));

// ------ extension/lib/import/bootstrap.tooltip.min.js -------
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-tooltip.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.offset(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip();return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.detach(),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);c[c.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery)
// ------ extension/lib/import/bootstrap.full.min.js -------
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-tooltip.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),d.call(b)})}function d(a){this.$element.hide().trigger("hidden"),e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)):b&&b()}function f(){this.$backdrop.remove(),this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;a("body").addClass("modal-open"),this.isShown=!0,g.call(this),e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in"),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();var e=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,a("body").removeClass("modal-open"),g.call(this),this.$element.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault(),e.modal(f)})})}(window.jQuery),!function(a){function d(){a(b).parent().removeClass("open")}var b='[data-toggle="dropdown"]',c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),e,f,g;if(c.is(".disabled, :disabled"))return;return f=c.attr("data-target"),f||(f=c.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),e=a(f),e.length||(e=c.parent()),g=e.hasClass("open"),d(),g||e.toggleClass("open"),!1}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(function(){a("html").on("click.dropdown.data-api",d),a("body").on("click.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle)})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},isHTML:function(a){return typeof a!="string"||a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.isHTML(b)?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0}}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();a(e).collapse(f)})})}(window.jQuery)
// ------ extension/lib/import/date.js -------
/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

// ------ extension/lib/import/css_browser_selector_dev.js -------
/*
CSS Browser Selector 0.6.1
Originally written by Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/

Co-maintained by:
https://github.com/verbatim/css_browser_selector

*/

showLog=true;
function log(m) {if ( window.console && showLog ) {console.log(m); }  }

function css_browser_selector(u)
	{
	var	uaInfo = {},
		screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
		allScreens = screens.length,
		ua=u.toLowerCase(),
		is=function(t) { return RegExp(t,"i").test(ua);  },
		version = function(p,n) 
			{ 
			n=n.replace(".","_"); var i = n.indexOf('_'),  ver=""; 
			while (i>0) {ver += " "+ p+n.substring(0,i);i = n.indexOf('_', i+1);} 
			ver += " "+p+n; return ver; 
			},
		g='gecko',
		w='webkit',
		c='chrome',
		f='firefox',
		s='safari',
		o='opera',
		m='mobile',
		a='android',
		bb='blackberry',
		lang='lang_',
		dv='device_',
		html=document.documentElement,
		b=	[
		
			// browser
			(!(/opera|webtv/i.test(ua))&&/msie\s(\d+)/.test(ua))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
			:is('firefox/')?g+ " " + f+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+f+RegExp.$2 + ' '+f+RegExp.$2+"_"+RegExp.$4:'')	
			:is('gecko/')?g
			:is('opera')?o+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+o+RegExp.$2 + ' '+o+RegExp.$2+"_"+RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua)?' '+o+RegExp.$2+" "+o+RegExp.$2+"_"+RegExp.$3:''))
			:is('konqueror')?'konqueror'
	
			:is('blackberry') ? 
				( bb + 
					( /Version\/(\d+)(\.(\d+)+)/i.test(ua)
						? " " + bb+ RegExp.$1 + " "+bb+ RegExp.$1+RegExp.$2.replace('.','_')
						: (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) 
							? ' ' +bb+RegExp.$2 + (RegExp.$3?' ' +bb+RegExp.$2+RegExp.$3:'')
							: '')
					)
				) // blackberry
	
			:is('android') ? 
				(  a +
					( /Version\/(\d+)(\.(\d+))+/i.test(ua)
						? " " + a+ RegExp.$1 + " "+a+ RegExp.$1+RegExp.$2.replace('.','_')
						: '')
					+ (/Android (.+); (.+) Build/i.test(ua)
						? ' '+dv+( (RegExp.$2).replace(/ /g,"_") ).replace(/-/g,"_")
						:''	)
				) //android
	
			:is('chrome')?w+   ' '+c+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+c+RegExp.$2 +((RegExp.$4>0) ? ' '+c+RegExp.$2+"_"+RegExp.$4:''):'')	
			
			:is('iron')?w+' iron'
			
			:is('applewebkit/') ? 
				( w+ ' '+ s + 
					( /version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)
						?  ' '+ s +RegExp.$2 + " "+s+ RegExp.$2+RegExp.$3.replace('.','_')
						:  ( / Safari\/(\d+)/i.test(ua) 
							? 
							( (RegExp.$1=="419" || RegExp.$1=="417" || RegExp.$1=="416" || RegExp.$1=="412" ) ? ' '+ s + '2_0' 
								: RegExp.$1=="312" ? ' '+ s + '1_3'
								: RegExp.$1=="125" ? ' '+ s + '1_2'
								: RegExp.$1=="85" ? ' '+ s + '1_0'
								: '' )
							:'')
						)
				) //applewebkit	
		
			:is('mozilla/')?g
			:''
			
			// mobile
			,is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:''
			
			// os/platform
			,is('j2me')?'j2me'
			:is('ipad|ipod|iphone')?  
				( 
					(
						/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua)  ?
						'ios' + version('ios',RegExp.$2) : ''
					) + ' ' + ( /(ip(ad|od|hone))/gi.test(ua) ?	RegExp.$1 : "" )
				) //'iphone'
			//:is('ipod')?'ipod'
			//:is('ipad')?'ipad'
			:is('playbook')?'playbook'
			:is('kindle|silk')?'kindle'
			:is('playbook')?'playbook'
			:is('mac')?'mac'+ (/mac os x ((\d+)[.|_](\d+))/.test(ua) ?    ( ' mac' + (RegExp.$2)  +  ' mac' + (RegExp.$1).replace('.',"_")  )     : '' )
			:is('win')?'win'+
					(is('windows nt 6.2')?' win8'
					:is('windows nt 6.1')?' win7'
					:is('windows nt 6.0')?' vista'
					:is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp' 
					:is('windows nt 5.0')?' win_2k'
					:is('windows nt 4.0') || is('WinNT4.0') ?' win_nt'
					: ''
					) 
			:is('freebsd')?'freebsd'
			:(is('x11|linux'))?'linux'
			:''
			
			// user agent language
			,(/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua))?(lang+RegExp.$2).replace("-","_")+(RegExp.$3!=''?(' '+lang+RegExp.$1).replace("-","_"):''):''
		
			// beta: test if running iPad app
			,( is('ipad|iphone|ipod') && !is('safari') )  ?  'ipad_app'  : ''
		
		
		]; // b

    function screenSize() 
    	{
		var w = window.outerWidth || html.clientWidth;
		var h = window.outerHeight || html.clientHeight;
		uaInfo.orientation = ((w<h) ? "portrait" : "landscape");
        // remove previous min-width, max-width, client-width, client-height, and orientation
        html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "")
        for (var i=(allScreens-1);i>=0;i--) { if (w >= screens[i] ) { uaInfo.maxw = screens[i]; break; }}
		widthClasses="";
        for (var info in uaInfo) { widthClasses+=" "+info+"_"+ uaInfo[info]  };
		html.className =  ( html.className +widthClasses  );
		return widthClasses;
    	} // screenSize
	
    window.onresize = screenSize;
	screenSize();	

	var cssbs = (b.join(' ')) + " js ";
	html.className =   ( cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g,"")  ).replace(/^ /, "").replace(/ +/g," ");

	return cssbs;
	}
	
css_browser_selector(navigator.userAgent);



// ------ extension/lib/import/jquery.autoellipsis-1.0.3.min.js -------
/*!

    Copyright (c) 2011 Peter van der Spek

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
 */(function(a){function m(){if(!d){d=!0;for(var c in b)a(c).each(function(){var d,e;d=a(this),e=d.data("jqae"),(e.containerWidth!=d.innerWidth()||e.containerHeight!=d.innerHeight())&&f(d,b[c])});d=!1}}function l(a){b[a]&&(delete b[a],b.length||c&&(window.clearInterval(c),c=undefined))}function k(a,d){b[a]=d,c||(c=window.setInterval(function(){m()},200))}function j(){return this.nodeType===3}function i(b){if(b.contents().length){var c=b.contents(),d=c.eq(c.length-1);if(d.filter(j).length){var e=d.get(0).nodeValue;e=a.trim(e);if(e==""){d.remove();return!0}return!1}while(i(d));if(d.contents().length)return!1;d.remove();return!0}return!1}function h(a){if(a.contents().length){var b=a.contents(),c=b.eq(b.length-1);return c.filter(j).length?c:h(c)}a.append("");var b=a.contents();return b.eq(b.length-1)}function g(b){var c=h(b);if(c.length){var d=c.get(0).nodeValue,e=d.lastIndexOf(" ");e>-1?(d=a.trim(d.substring(0,e)),c.get(0).nodeValue=d):c.get(0).nodeValue="";return!0}return!1}function f(b,c){var d=b.data("jqae");d||(d={});var e=d.wrapperElement;e||(e=b.wrapInner("<div/>").find(">div"));var f=e.data("jqae");f||(f={});var j=f.originalContent;j?e=f.originalContent.clone(!0).data("jqae",{originalContent:j}).replaceAll(e):e.data("jqae",{originalContent:e.clone(!0)}),b.data("jqae",{wrapperElement:e,containerWidth:b.innerWidth(),containerHeight:b.innerHeight()});var k=!1,l=e;c.selector&&(l=a(e.find(c.selector).get().reverse())),l.each(function(){var d=a(this),f=d.text(),j=!1;if(e.innerHeight()-d.innerHeight()>b.innerHeight())d.remove();else{i(d);if(d.contents().length){k&&(h(d).get(0).nodeValue+=c.ellipsis,k=!1);while(e.innerHeight()>b.innerHeight()){j=g(d);if(!j){k=!0,d.remove();break}i(d);if(d.contents().length)h(d).get(0).nodeValue+=c.ellipsis;else{k=!0,d.remove();break}}c.setTitle=="onEllipsis"&&j||c.setTitle=="always"?d.attr("title",f):c.setTitle!="never"&&d.removeAttr("title")}}})}var b={},c,d=!1,e={ellipsis:"...",setTitle:"never",live:!1};a.fn.ellipsis=function(b,c){var d,g;d=a(this),typeof b!="string"&&(c=b,b=undefined),g=a.extend({},e,c),g.selector=b,d.each(function(){var b=a(this);f(b,g)}),g.live?k(d.selector,g):l(d.selector);return this}})(jQuery)
// ------ extension/lib/import/jquery.scrollTo-1.4.2.js -------
/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return $.browser.safari || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
			
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );
// ------ extension/lib/import/move.min.js -------
/*!
 * move
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */(function(exports){var current=window.getComputedStyle||window.currentStyle,map={top:"px",bottom:"px",left:"px",right:"px",width:"px",height:"px","font-size":"px",margin:"px","margin-top":"px","margin-bottom":"px","margin-left":"px","margin-right":"px",padding:"px","padding-top":"px","padding-bottom":"px","padding-left":"px","padding-right":"px"};exports.move=function(selector){return new Move(move.select(selector))},exports.move.version="0.0.3",move.defaults={duration:500},move.ease={"in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},move.select=function(selector){if("string"!=typeof selector)return selector;return document.getElementById(selector)||document.querySelectorAll(selector)[0]};function EventEmitter(){this.callbacks={}}EventEmitter.prototype.on=function(event,fn){(this.callbacks[event]=this.callbacks[event]||[]).push(fn);return this},EventEmitter.prototype.emit=function(event){var args=Array.prototype.slice.call(arguments,1),callbacks=this.callbacks[event],len;if(callbacks){len=callbacks.length;for(var i=0;i<len;++i)callbacks[i].apply(this,args)}return this},exports.Move=function Move(el){if(!(this instanceof Move))return new Move(el);EventEmitter.call(this),this.el=el,this._props={},this._rotate=0,this._transitionProps=[],this._transforms=[],this.duration(move.defaults.duration)},Move.prototype=new EventEmitter,Move.prototype.constructor=Move,Move.prototype.transform=function(transform){this._transforms.push(transform);return this},Move.prototype.skew=function(x,y){y=y||0;return this.transform("skew("+x+"deg, "+y+"deg)")},Move.prototype.skewX=function(n){return this.transform("skewX("+n+"deg)")},Move.prototype.skewY=function(n){return this.transform("skewY("+n+"deg)")},Move.prototype.translate=Move.prototype.to=function(x,y){y=y||0;return this.transform("translate("+x+"px, "+y+"px)")},Move.prototype.translateX=Move.prototype.x=function(n){return this.transform("translateX("+n+"px)")},Move.prototype.translateY=Move.prototype.y=function(n){return this.transform("translateY("+n+"px)")},Move.prototype.scale=function(x,y){y=null==y?x:y;return this.transform("scale("+x+", "+y+")")},Move.prototype.scaleX=function(n){return this.transform("scaleX("+n+")")},Move.prototype.scaleY=function(n){return this.transform("scaleY("+n+")")},Move.prototype.rotate=function(n){return this.transform("rotate("+n+"deg)")},Move.prototype.ease=function(fn){fn=move.ease[fn]||fn||"ease";return this.setVendorProperty("transition-timing-function",fn)},Move.prototype.animate=function(name,props){for(var i in props)props.hasOwnProperty(i)&&this.setVendorProperty("animation-"+i,props[i]);return this.setVendorProperty("animation-name",name)},Move.prototype.duration=function(n){n=this._duration="string"==typeof n?parseFloat(n)*1e3:n;return this.setVendorProperty("transition-duration",n+"ms")},Move.prototype.delay=function(n){n="string"==typeof n?parseFloat(n)*1e3:n;return this.setVendorProperty("transition-delay",n+"ms")},Move.prototype.setProperty=function(prop,val){this._props[prop]=val;return this},Move.prototype.setVendorProperty=function(prop,val){this.setProperty("-webkit-"+prop,val),this.setProperty("-moz-"+prop,val),this.setProperty("-ms-"+prop,val),this.setProperty("-o-"+prop,val);return this},Move.prototype.set=function(prop,val){this.transition(prop),"number"==typeof val&&map[prop]&&(val+=map[prop]),this._props[prop]=val;return this},Move.prototype.add=function(prop,val){if(!!current){var self=this;return this.on("start",function(){var curr=parseInt(self.current(prop),10);self.set(prop,curr+val+"px")})}},Move.prototype.sub=function(prop,val){if(!!current){var self=this;return this.on("start",function(){var curr=parseInt(self.current(prop),10);self.set(prop,curr-val+"px")})}},Move.prototype.current=function(prop){return current(this.el).getPropertyValue(prop)},Move.prototype.transition=function(prop){if(!this._transitionProps.indexOf(prop))return this;this._transitionProps.push(prop);return this},Move.prototype.applyProperties=function(){var props=this._props,el=this.el;for(var prop in props)props.hasOwnProperty(prop)&&el.style.setProperty(prop,props[prop],"");return this},Move.prototype.move=Move.prototype.select=function(selector){this.el=move.select(selector);return this},Move.prototype.then=function(fn){if(fn instanceof Move)this.on("end",function(){fn.end()});else if("function"==typeof fn)this.on("end",fn);else{var clone=new Move(this.el);clone._transforms=this._transforms.slice(0),this.then(clone),clone.parent=this;return clone}return this},Move.prototype.pop=function(){return this.parent},Move.prototype.end=function(fn){var self=this;this.emit("start"),this._transforms.length&&this.setVendorProperty("transform",this._transforms.join(" ")),this.setVendorProperty("transition-properties",this._transitionProps.join(", ")),this.applyProperties(),fn&&this.then(fn),setTimeout(function(){self.emit("end")},this._duration);return this}})(this)
// ------ extension/lib/ext/helpers.js -------
// Generated by CoffeeScript 1.6.3

String.prototype.hashCode = function(){
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function time_diff(earlierDate,laterDate)
{
       var nTotalDiff = laterDate.getTime() - earlierDate.getTime();
       var oDiff = new Object();
 
       oDiff.days = Math.floor(nTotalDiff/1000/60/60/24);
       nTotalDiff -= oDiff.days*1000*60*60*24;
 
       oDiff.hours = Math.floor(nTotalDiff/1000/60/60);
       nTotalDiff -= oDiff.hours*1000*60*60;
 
       oDiff.minutes = Math.floor(nTotalDiff/1000/60);
       nTotalDiff -= oDiff.minutes*1000*60;
 
       oDiff.seconds = Math.floor(nTotalDiff/1000);
 
       return oDiff;
 
}

;
var checkDate, copyArray, getter, in_iframe, openInNewTab, randomInt, setter;

jQuery.fn.justtext = function(removestr) {
  var element;
  element = $(this);
  return element.clone().children().remove(removestr).end();
};

in_iframe = function() {
  return window !== window.top;
};

randomInt = function(lower, upper) {
  var start, _ref, _ref1;
  if (upper == null) {
    upper = 0;
  }
  start = Math.random();
  if (lower == null) {
    _ref = [0, lower], lower = _ref[0], upper = _ref[1];
  }
  if (lower > upper) {
    _ref1 = [upper, lower], lower = _ref1[0], upper = _ref1[1];
  }
  return Math.floor(start * (upper - lower + 1) + lower);
};

copyArray = function(arr) {
  return arr.slice(0);
};

checkDate = function(d) {
  if (d === null) {
    return false;
  }
  if (Object.prototype.toString.call(d) === "[object Date]") {
    if (isNaN(d.getTime())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

Array.prototype.remove = function(e) {
  var t, _ref;
  if ((t = this.indexOf(e)) > -1) {
    return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
  }
};

Array.prototype.merge = function(other) {
  return Array.prototype.push.apply(this, other);
};

getter = function(obj, prop, get) {
  return Object.defineProperty(obj, prop, {
    get: get,
    configurable: true
  });
};

setter = function(obj, prop, set) {
  return Object.defineProperty(obj, prop, {
    set: set,
    configurable: true
  });
};

Function.prototype.getter = function(prop, get) {
  return Object.defineProperty(this.prototype, prop, {
    get: get,
    configurable: true
  });
};

Function.prototype.setter = function(prop, set) {
  return Object.defineProperty(this.prototype, prop, {
    set: set,
    configurable: true
  });
};

openInNewTab = function(url) {
  var propreties;
  propreties = {
    url: url,
    active: true
  };
  chrome.tabs.create(propreties, function(tab) {
    var error, windowpropreties;
    windowpropreties = {
      focused: true
    };
    try {
      chrome.windows.update(tab.windowId, windowpropreties, function() {});
    } catch (_error) {
      error = _error;
    }
  });
};

// ------ extension/lib/ext/settings.js -------
// Generated by CoffeeScript 1.6.3
var Settings, Site_Notifs, addSite, findMasterSite, findSite, isSiteEnabled, removeSite, settingsSetNotifs, settingsSetSiteNotifs;

Site_Notifs = {
  reddit: true,
  facebook: true,
  github: true,
  twitter: true,
  gmail: true,
  linkedin: true,
  stackoverflow: true,
  quora: true,
  flickr: true,
  foursquare: true,
  gplus: true
};

Settings = {
  SHOW_NOTIFS: true,
  SHOW_SPECIFIC_NOTIFS: Site_Notifs
};

settingsSetSiteNotifs = function(show_sites) {
  var found_site, found_site_real, site, temp_sites, _i, _len, _ref;
  localStorage['settings'] = JSON.stringify(Settings);
  temp_sites = [];
  _ref = root.master_sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    localStorage["settings_show_" + site.name + "_notifs"] = show_sites[site.name];
    if (localStorage['settings']) {
      Settings.SHOW_SPECIFIC_NOTIFS[site.name] = localStorage["settings_show_" + site.name + "_notifs"] === 'true';
    }
    Settings.SHOW_SPECIFIC_NOTIFS[site.name] = show_sites[site.name];
    found_site_real = findSite(site.name);
    if (show_sites[site.name]) {
      if (found_site_real === null) {
        found_site = findMasterSite(site.name);
      } else {
        found_site = found_site_real;
      }
      found_site.priority = 0;
      temp_sites.push(found_site);
      console.log("" + site.name + " added");
    } else {
      console.log("" + site.name + " removed");
    }
  }
  return root.sites = temp_sites;
};

isSiteEnabled = function(site) {
  return root.sites.indexOf(site) > -1;
};

addSite = function(site_name) {
  var site;
  if (findSite(site_name) !== null) {
    return;
  }
  site = findMasterSite(site_name);
  root.sites.push(site);
  Settings.SHOW_SPECIFIC_NOTIFS[site_name] = true;
  localStorage["settings_show_" + site.name + "_notifs"] = true;
  site.priority = 0;
  refreshDisplays();
  localStorage['settings'] = JSON.stringify(Settings);
};

removeSite = function(site_name) {
  var site;
  site = findMasterSite(site_name);
  if (site === null) {
    return;
  }
  root.sites = root.sites.filter(function(site) {
    return !(site.name === site_name);
  });
  Settings.SHOW_SPECIFIC_NOTIFS[site_name] = false;
  localStorage["settings_show_" + site.name + "_notifs"] = false;
  site.priority = null;
  refreshDisplays();
  localStorage['settings'] = JSON.stringify(Settings);
};

findMasterSite = function(site_name) {
  var result, site, _i, _len, _ref;
  result = null;
  _ref = root.master_sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    if (site.name === site_name) {
      result = site;
      break;
    }
  }
  return result;
};

findSite = function(site_name) {
  var result, site, _i, _len, _ref;
  result = null;
  _ref = root.sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    if (site.name === site_name) {
      result = site;
      break;
    }
  }
  return result;
};

settingsSetNotifs = function(show, type) {
  if (type == null) {
    type = 'desktop';
  }
  /*
  	if type is 'mute'
  		localStorage['mute_setting'] = show
  	else
  		localStorage['desktop_setting'] = show
  */

  localStorage['settings_show_notifs'] = show;
  localStorage['settings'] = JSON.stringify(Settings);
  if (localStorage['settings']) {
    Settings.SHOW_NOTIFS = localStorage['settings_show_notifs'] === 'true';
  }
  return Settings.SHOW_NOTIFS = show;
};

// ------ extension/lib/ext/notifications.js -------
// Generated by CoffeeScript 1.6.3
var FeedType, FetchStatus, LoadStatusCodes, Notification, PageStatus, Site, SiteStatus, initSites, loadNotif, loadNotifs, saveNotifs, serializeNotif, sortNotifications,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

PageStatus = {
  LOADING: "loading",
  COMPLETE: "complete"
};

SiteStatus = {
  HAD_ERROR: "error",
  UNINITIALIZED: "uninitialized",
  NEED_AUTH: "need-auth",
  LOGGED_OUT: "logged-out",
  TIMEOUT: "timeout",
  FINISHED: "finished"
};

FeedType = {
  HTML: ".html",
  JSON: ".json",
  XML: ".xml",
  OAUTH: "oauth",
  XHTTP: "xhttp"
};

FetchStatus = {
  INITIAL: "first load",
  PAUSE: "after an error or pause",
  REGULAR: "normal fetch"
};

LoadStatusCodes = {
  OK: "ok",
  TIMEOUT: "timeout",
  UNAUTHORIZED: "unauthorized",
  ERROR: "error",
  NO_NEW: "no_new",
  NEED_AUTH: "need_auth"
};

Notification = (function() {
  var attr;

  attr = null;

  Notification.prototype.hash = '';

  function Notification() {
    this.createHash();
    this.attr = {
      marked: false,
      unread: null,
      seen: false,
      brandnew: false
    };
    return;
  }

  Notification.prototype.createHash = function() {
    var hash_str;
    hash_str = this.url;
    this.hash = hash_str.hashCode();
  };

  Notification.prototype.click = function(mark) {
    var propreties;
    if (mark == null) {
      mark = true;
    }
    if (mark) {
      this.markAsRead(true);
    }
    propreties = {
      url: this.url,
      active: true
    };
    chrome.tabs.create(propreties, function(tab) {
      var error, windowpropreties;
      windowpropreties = {
        focused: true
      };
      try {
        chrome.windows.update(tab.windowId, windowpropreties, function() {});
      } catch (_error) {
        error = _error;
      }
    });
    return mark;
  };

  Notification.prototype.updateAttr = function(newattr) {
    this.attr = newattr;
    if (this.time !== null) {
      if (time_diff(this.time, new Date()).days > 7) {
        this.attr.brandnew = false;
      }
    }
    if (this.site.option_mark_read) {
      if (this.attr.brandnew) {
        this.attr.marked = false;
      }
    } else {
      if (this.attr.marked) {
        this.attr.brandnew = false;
      }
    }
  };

  Notification.prototype.markAsRead = function(read) {
    this.attr.marked = true;
    this.attr.brandnew = false;
    if (this.site.option_mark_read) {
      this.unread = false;
    }
    this.site._notif_hash[this.hash] = {
      unread: this.unread,
      attr: this.attr
    };
  };

  Notification.prototype.markRead = function() {
    if (this.site.option_mark_read) {
      this.markAsRead(true);
    }
  };

  Notification.prototype.hide = function(undo) {
    if (undo == null) {
      undo = false;
    }
    this.attr.marked = true;
    this.attr.brandnew = false;
    this.site._notif_hash[this.hash] = {
      unread: this.unread,
      attr: this.attr
    };
  };

  return Notification;

})();

Site = (function() {
  Site.prototype.priority = null;

  /*
  	Options:
  		Set by individual sites.
  		These should really be private, but there's no nice way to do truly private variables in JavaScript
  */


  Site.prototype.option_quick_check = false;

  Site.prototype.option_slow_check = false;

  Site.prototype.option_feed_type = FeedType.HTML;

  Site.prototype.option_mark_read = false;

  Site._cookiecheckcount = 0;

  Site._notif_hash = null;

  Site.prototype.fetch_status = FetchStatus.INITIAL;

  function Site() {
    this.status = SiteStatus.UNINITIALIZED;
    this.notifications = new Array();
    this._notif_hash = {};
  }

  Site.getter('unread', function() {
    var notif, unread, _i, _len, _ref;
    unread = 0;
    _ref = this.notifications;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      notif = _ref[_i];
      if (notif.unread === true) {
        unread++;
      }
    }
    return unread;
  });

  Site.getter('count_new', function() {
    var notif, unread, _i, _len, _ref;
    unread = 0;
    _ref = this.notifications;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      notif = _ref[_i];
      if (notif.unread === true && notif.attr.marked === false) {
        unread++;
      }
    }
    return unread;
  });

  Site.prototype.parse = function() {};

  Site.prototype.checkCookie = function(cookiematch, changeInfo) {
    var cause, name;
    name = changeInfo.cookie.name;
    cause = changeInfo.cause;
    if (name === cookiematch.name && __indexOf.call(cookiematch.cause, cause) >= 0) {
      this.priority = Math.floor(++this._cookiecheckcount >> 3);
      return this._cookiecheckcount %= 15;
    }
  };

  Site.prototype.checkLoggedIn = function(cookie_details, callbackfunc, matchpattern) {
    var error;
    if (matchpattern == null) {
      matchpattern = null;
    }
    try {
      chrome.cookies.get(cookie_details, function(cookie) {
        var cookie_state, error, matchindex;
        cookie_state = cookie !== null ? LoadStatusCodes.OK : LoadStatusCodes.UNAUTHORIZED;
        if (cookie !== null && matchpattern !== null) {
          try {
            matchindex = cookie.value.search(matchpattern);
            cookie_state = matchindex !== -1 ? LoadStatusCodes.OK : LoadStatusCodes.UNAUTHORIZED;
          } catch (_error) {
            error = _error;
            cookie_state = LoadStatusCodes.UNAUTHORIZED;
          }
        }
        return callbackfunc(cookie_state);
      });
    } catch (_error) {
      error = _error;
      callbackfunc(LoadStatusCodes.UNAUTHORIZED);
    }
  };

  Site.prototype.checkForNew = function(callbackfunc) {
    callbackfunc(this, LoadStatusCodes.OK);
  };

  Site.prototype.checkDomain = function(sitedomain, siteurl) {
    return sitedomain === this.domain || siteurl === this.testurl;
  };

  Site.prototype.checkAuthorized = function() {
    return true;
  };

  Site.prototype.setPriority = function(first_time) {
    if (first_time == null) {
      first_time = false;
    }
    if (first_time) {
      this.priority = 0;
      return;
    }
    if (this.option_quick_check) {
      this.priority = randomInt(1, 2);
    } else if (this.option_slow_check) {
      this.priority = randomInt(14, 22);
    } else {
      this.priority = randomInt(8, 16);
    }
  };

  Site.prototype.genHash = function() {
    var notif, _i, _len, _ref;
    _ref = this.notifications;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      notif = _ref[_i];
      this._notif_hash[notif.hash] = {
        unread: notif.unread,
        attr: notif.attr
      };
    }
  };

  Site.prototype.merge_notifications = function(new_notifs) {
    var brandnew, hash_entry, notif, tmpattr, _i, _len;
    brandnew = 0;
    this.genHash();
    this.notifications.length = 0;
    for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
      notif = new_notifs[_i];
      this.notifications.push(notif);
      hash_entry = this._notif_hash[notif.hash];
      if (hash_entry !== void 0) {
        tmpattr = hash_entry.attr;
      } else {
        tmpattr = notif.attr;
      }
      if ((hash_entry === void 0 || hash_entry.unread === false) && notif.unread === true) {
        tmpattr.brandnew = true;
      } else {
        tmpattr.brandnew = false;
      }
      notif.updateAttr(tmpattr);
      if (notif.attr.brandnew) {
        brandnew++;
      }
    }
    return brandnew;
  };

  return Site;

})();

sortNotifications = function(notifs) {
  notifs.sort(function(a, b) {
    var err;
    try {
      if (a.unread && !b.unread) {
        return -1;
      }
      if (!a.unread && b.unread) {
        return 1;
      }
      if (a.site.name === 'gplus' && b.site.name === 'gplus') {
        if (a.description > b.description) {
          return 1;
        }
        if (a.description < b.description) {
          return -1;
        }
        return 0;
      }
      if (a.time === null && b.time === null) {
        if (a.hash < b.hash) {
          return 1;
        }
        if (a.hash > b.hash) {
          return -1;
        }
        return 0;
      }
      if (a.time === null) {
        return 1;
      }
      if (b.time === null) {
        return -1;
      }
      if (a.time < b.time) {
        return 1;
      }
      if (a.time > b.time) {
        return -1;
      }
      if (a.hash < b.hash) {
        return 1;
      }
      if (a.hash > b.hash) {
        return -1;
      }
    } catch (_error) {
      err = _error;
      console.log(err.message);
      return 0;
    }
    return 0;
  });
};

initSites = function(root) {
  var facebookSite, flickrSite, foursquareSite, githubSite, gmailSite, gplusSite, linkedinSite, quoraSite, redditSite, stackoverflowSite, twitterSite;
  root.sites = new Array();
  root.master_sites = new Array();
  gmailSite = new GmailSite;
  redditSite = new RedditSite;
  facebookSite = new FacebookSite;
  twitterSite = new TwitterSite;
  linkedinSite = new LinkedinSite;
  quoraSite = new QuoraSite;
  githubSite = new GithubSite;
  flickrSite = new FlickrSite;
  stackoverflowSite = new StackoverflowSite;
  foursquareSite = new FoursquareSite;
  gplusSite = new GplusSite;
  root.master_sites.push(gmailSite);
  root.master_sites.push(redditSite);
  root.master_sites.push(facebookSite);
  root.master_sites.push(twitterSite);
  root.master_sites.push(quoraSite);
  root.master_sites.push(githubSite);
  root.master_sites.push(flickrSite);
  root.master_sites.push(stackoverflowSite);
  root.master_sites.push(foursquareSite);
  root.master_sites.push(gplusSite);
  root.sites.push(gmailSite);
  root.sites.push(redditSite);
  root.sites.push(facebookSite);
  root.sites.push(twitterSite);
  root.sites.push(quoraSite);
  root.sites.push(githubSite);
  root.sites.push(flickrSite);
  root.sites.push(stackoverflowSite);
  root.sites.push(foursquareSite);
  return root.sites.push(gplusSite);
};

saveNotifs = function() {
  var notif, serialNotifs, _i, _len, _ref;
  serialNotifs = new Array();
  _ref = root.notes;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    notif = _ref[_i];
    serialNotifs.push(serializeNotif(notif));
  }
  localStorage['notifs'] = JSON.stringify(serialNotifs);
};

loadNotifs = function() {
  var notif, serialNotif, serialNotifs, site, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
  _ref = root.sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    site.notifications.length = 0;
  }
  if (localStorage.getItem('notifs') === null) {
    return;
  }
  serialNotifs = JSON.parse(localStorage['notifs']);
  for (_j = 0, _len1 = serialNotifs.length; _j < _len1; _j++) {
    serialNotif = serialNotifs[_j];
    notif = loadNotif(serialNotif);
    notif.site.notifications.push(notif);
  }
  _ref1 = root.sites;
  for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
    site = _ref1[_k];
    if (site.notifications.length > 0) {
      site.status = SiteStatus.FINISHED;
      site.fetch_status = FetchStatus.LOGIN;
    }
    site.genHash();
  }
  refreshDisplays();
};

serializeNotif = function(notif) {
  var obj;
  obj = {};
  obj['site'] = notif.site.name;
  obj['unread'] = notif.unread;
  obj['url'] = notif.url;
  obj['time'] = notif.time;
  obj['description'] = notif.description;
  obj['attr'] = notif.attr;
  return obj;
};

loadNotif = function(storedNotif) {
  var attr, cls, notif, obj;
  cls = null;
  switch (storedNotif['site']) {
    case "facebook":
      cls = FacebookNotification;
      break;
    case "reddit":
      cls = RedditNotification;
      break;
    case "gmail":
      cls = GmailNotification;
      break;
    case "linkedin":
      cls = LinkedinNotification;
      break;
    case "quora":
      cls = QuoraNotification;
      break;
    case "twitter":
      cls = TwitterNotification;
      break;
    case "github":
      cls = GithubNotification;
      break;
    case "stackoverflow":
      cls = StackoverflowNotification;
      break;
    case "flickr":
      cls = FlickrNotification;
      break;
    case "foursquare":
      cls = FoursquareNotification;
      break;
    case "gplus":
      cls = GplusNotification;
      break;
    default:
      cls = null;
  }
  obj = storedNotif;
  notif = new cls(obj['description'], obj['url'], new Date(obj['time']), obj['unread']);
  attr = obj['attr'];
  if (attr.marked === void 0) {
    attr.marked = false;
  }
  if (attr.brandnew === void 0) {
    attr.brandnew = false;
  }
  if (attr.seen === void 0) {
    attr.seen = false;
  }
  notif.attr = attr;
  return notif;
};

// ------ extension/lib/ext/debug.js -------
// Generated by CoffeeScript 1.6.3
var AssertException, analytics_script, assert, d, initGA, log_error, milestone, throw_assert, track, _gaq;

AssertException = function(message) {
  this.message = message;
};

AssertException.prototype.toString = function() {
  return 'AssertException: ' + this.message;
};

assert = function(statement, message) {
  if (!statement) {
    throw_assert(message);
  }
};

throw_assert = function(message) {
  throw new AssertException(message);
};

log_error = function(message) {};

milestone = function(description) {
  return console.log(("" + (new Date()) + " | Milestone: ") + description);
};

d = window.document;

analytics_script = 'https://ssl.google-analytics.com/ga.js';

_gaq = [['_setAccount', 'UA-33190326-1'], ['_trackPageview']];

initGA = function(page) {
  var e, s, src;
  src = analytics_script;
  s = d.createElement('script');
  s.async = true;
  s.src = src;
  e = (d.getElementsByTagName('script')[0]);
  e.parentNode.insertBefore(s, e);
  track('init', page);
};

track = function(category, action, label, value) {
  if (label == null) {
    label = "";
  }
  if (value == null) {
    value = 0;
  }
  _gaq.push(['_trackEvent', category, action, label, value]);
};

window.onerror = function(errorMsg, url, lineNumber) {
  var msg;
  msg = "" + errorMsg + " at " + url + ":" + lineNumber;
  console.log("Error found " + errorMsg + " at " + url + ":" + lineNumber);
  track('error', msg);
  return false;
};

/*
init_error_listener = () ->

	chrome.extension.onRequest.addListener (request, sender, sendResponse)->

		return if (request.msgtype != "assert" or request.msgtype != "milestone")

		#Give URL from contentscript
		if (request.msgtype == "assert" )
			assert (false,request.description)
		else if (request.msgtype == "milestone" )
			milestone (request.description)

		sendResponse({})
*/


// ------ extension/lib/ext/chromeutils.js -------
// Generated by CoffeeScript 1.6.3
/*
chromeutils.coffee
Consists mainly of the functions that call the Chrome API
*/

var blockImages, headersIntercept, imageHandler, loadGET, loadJSON, loadOauth, loadURL, loadXHTTP, loadXML;

loadJSON = function(url, callbackfunc) {
  return loadGET(url, "text json", function(jqXHR, loadstatus, loadmessage) {
    var err, jsonObj;
    if (loadmessage == null) {
      loadmessage = null;
    }
    try {
      if (loadstatus === LoadStatusCodes.OK) {
        jsonObj = jQuery.parseJSON(jqXHR.responseText);
        return callbackfunc(jsonObj, loadstatus);
      } else {
        return callbackfunc(null, loadstatus, loadmessage);
      }
    } catch (_error) {
      err = _error;
      return callbackfunc(null, LoadStatusCodes.ERROR, err.message);
    }
  });
};

loadXML = function(url, callbackfunc) {
  return loadGET(url, "text xml", function(jqXHR, loadstatus, loadmessage) {
    var err, parsedFeed, parser;
    if (loadmessage == null) {
      loadmessage = null;
    }
    try {
      if (loadstatus === LoadStatusCodes.OK) {
        parser = new DOMParser();
        parsedFeed = $(parser.parseFromString(jqXHR.responseText, "text/xml"));
        return callbackfunc(parsedFeed, LoadStatusCodes.OK);
      } else {
        return callbackfunc(null, loadstatus, loadmessage);
      }
    } catch (_error) {
      err = _error;
      return callbackfunc(null, LoadStatusCodes.ERROR, err.message);
    }
  });
};

loadXHTTP = function(url, callbackfunc) {
  return loadGET(url, "text", function(jqXHR, loadstatus, loadmessage) {
    var body, err, html;
    if (loadmessage == null) {
      loadmessage = null;
    }
    try {
      if (loadstatus === LoadStatusCodes.OK) {
        html = jqXHR.responseText;
        html = html.replace(/<img\b[^>]*>/ig, '');
        body = $(html);
        return callbackfunc(body, LoadStatusCodes.OK);
      } else {
        return callbackfunc(null, loadstatus, loadmessage);
      }
    } catch (_error) {
      err = _error;
      return callbackfunc(null, LoadStatusCodes.ERROR, err.message);
    }
  });
};

loadOauth = function(oauth, urlobj, callbackfunc) {
  return oauth.authorize(function() {
    var callbackhandler, params, request, url;
    url = urlobj.url;
    params = urlobj.params;
    request = {
      method: "GET",
      parameters: params
    };
    callbackhandler = function(resp, jqXHR) {
      var jsonObj;
      jsonObj = jQuery.parseJSON(jqXHR.responseText);
      return callbackfunc(jsonObj, LoadStatusCodes.OK, resp);
    };
    return oauth.sendSignedRequest(url, callbackhandler, request);
  });
};

loadGET = function(url, datatype, callbackfunc) {
  return $.ajax({
    type: "GET",
    dataType: datatype,
    url: url,
    cache: false,
    timeout: 20000,
    error: function(jqXHR, textStatus, errorThrown) {
      if (errorThrown === "Unauthorized" || errorThrown === "Not Found") {
        callbackfunc(null, LoadStatusCodes.UNAUTHORIZED);
      } else if (textStatus !== "parsererror") {
        console.log("Error Loading: " + textStatus + " error:" + errorThrown);
        callbackfunc(null, LoadStatusCodes.ERROR, errorThrown);
      }
    },
    complete: function(jqXHR, textStatus) {
      if (textStatus === "success") {
        return callbackfunc(jqXHR, LoadStatusCodes.OK);
      } else if (textStatus === "timeout") {
        return callbackfunc(jqXHR, LoadStatusCodes.TIMEOUT);
      } else if (textStatus === "abort") {
        return callbackfunc(jqXHR, LoadStatusCodes.TIMEOUT);
      } else if (textStatus === "parsererror") {
        jqXHR.responseText = jqXHR.responseText.substring(9);
        return callbackfunc(jqXHR, LoadStatusCodes.OK);
      }
    }
  });
};

loadURL = function(url, sitedomain, callbackfunc) {
  var cancel_listener, extension_listener, iframe, timeout_var;
  iframe = document.createElement("iframe");
  iframe.src = url;
  /*
  	iframe.id = "temp"
  	iframeWindow = top.frames['temp']
  	iframe.onload = () ->
  		alert top.frames['temp'].document.body.innerHTML
  		return
  	    alert($('#temp').contentWindow.document.body.innerHTML)
  */

  document.body.appendChild(iframe);
  extension_listener = function(request, sender, sendResponse) {
    if (request.msgtype !== "notifications") {
      return;
    }
    if (request.domain === sitedomain || request.url === url) {
      callbackfunc(request);
      cancel_listener(false);
      sendResponse({});
    }
  };
  cancel_listener = function(had_error) {
    var request;
    clearTimeout(timeout_var);
    chrome.extension.onRequest.removeListener(extension_listener);
    iframe.parentNode.removeChild(iframe);
    if (had_error) {
      request = {
        status: SiteStatus.HAD_ERROR,
        msg: "Failed Timeout"
      };
      return callbackfunc(request);
    }
  };
  chrome.extension.onRequest.addListener(extension_listener);
  timeout_var = setTimeout(cancel_listener, 15000, true);
};

headersIntercept = function() {
  var extraInfoSpec, handler, requestFilter;
  requestFilter = {
    urls: ["*://www.facebook.com/desktop_notifications/popup.php*", "*://*.facebook.com/messages*", "*://mail.google.com/*zy=h*", "*://accounts.google.com/ServiceLogin*", "*://www.reddit.com/message/inbox/*", "*://api.quora.com/api/*", "*://www.linkedin.com/inbox/*", "*://github.com/notifications*", "*://m.youtube.com/inbox*", "*://www.airbnb.com/home/inbox*", "*://www.fitocracy.com/notifications*", "*://www.flickr.com/mail/*", "*://foursquare.com/user/notifications*", "*://plus.google.com/*"],
    types: ["sub_frame"],
    tabId: -1
  };
  extraInfoSpec = ['responseHeaders', 'blocking'];
  handler = function(details) {
    var blockingResponse, header, headers, _i, _len;
    headers = details.responseHeaders;
    blockingResponse = {};
    for (_i = 0, _len = headers.length; _i < _len; _i++) {
      header = headers[_i];
      if (header.name === "X-Frame-Options" || header.name === "x-frame-options") {
        header.value = "";
      }
    }
    return {
      responseHeaders: headers
    };
  };
  chrome.webRequest.onHeadersReceived.addListener(handler, requestFilter, extraInfoSpec);
};

imageHandler = function(details) {
  if (details.tabId === -1 && details.parentFrameId !== -1) {
    return {
      cancel: true
    };
  }
};

blockImages = function(block) {
  var extraInfoSpec, requestFilter;
  if (block == null) {
    block = true;
  }
  requestFilter = {
    urls: ["*://*/*"],
    types: ["stylesheet", "image"],
    tabId: -1
  };
  extraInfoSpec = ['blocking'];
  if (block) {
    return chrome.webRequest.onBeforeRequest.addListener(imageHandler, requestFilter, extraInfoSpec);
  } else {
    return chrome.webRequest.onBeforeRequest.removeListener(imageHandler, requestFilter, extraInfoSpec);
  }
};

// ------ extension/lib/ext/partials.js -------
// Generated by CoffeeScript 1.6.3
var renderClearDropdown, renderDropdown, renderNotification, renderServiceText, renderSetupBlock, renderSetupModal, renderSiteBlock;

jQuery.fn["do"] = function(parent, callbackfunc) {
  var node;
  node = $(this);
  if (parent) {
    node.appendTo(parent);
  }
  callbackfunc.call(node);
  return node;
};

renderSiteBlock = function(site) {
  var error, name, status;
  try {
    name = site.name.toLowerCase();
    status = "service-status-" + site.status;
    return $('<div>', {
      "class": "service " + name + " " + status
    })["do"](null, function() {
      $('<div>', {
        "class": "card"
      })["do"](this, function() {
        $('<div>', {
          "class": "face image"
        }).appendTo(this);
        return $('<div>', {
          "class": "face service-icon-overlay"
        })["do"](this, function() {
          return $("<span>login</span>").appendTo(this);
        });
      });
      return $('<div>', {
        "class": "service-authorize-overlay"
      })["do"](this, function() {
        return $("<span>authorize</span>").appendTo(this);
      });
    });
  } catch (_error) {
    error = _error;
  }
};

renderNotification = function(notif, grouped, popup) {
  var description, groupedcls, name, service_name, site, timetxt, unread, unreadcls, url;
  if (grouped == null) {
    grouped = false;
  }
  if (popup == null) {
    popup = false;
  }
  name = notif.site.name.toLowerCase();
  service_name = name;
  if (name === 'gplus') {
    name = 'Google+';
  }
  unreadcls = notif.unread ? "unread" : "";
  url = notif.url;
  description = "<span>" + notif.body + "</span>";
  unread = notif.site.unread;
  site = notif.site;
  groupedcls = grouped ? "grouped" : "";
  if (notif.time !== null) {
    timetxt = jQuery.timeago(new Date(notif.time));
  } else {
    timetxt = "";
  }
  return $('<div>', {
    "class": "notification " + service_name + " " + unreadcls + " " + groupedcls,
    dataurl: url,
    datasite: site.name
  })["do"](null, function() {
    $('<a>', {
      "class": "notification-link",
      href: url,
      target: "_blank"
    })["do"](this, function() {
      $('<div>', {
        "class": "block"
      }).appendTo(this);
      return $('<div>', {
        "class": "notification-box"
      })["do"](this, function() {
        $('<div>', {
          "class": "description"
        })["do"](this, function() {
          return $(description).appendTo(this);
        });
        return $('<div>', {
          "class": "info"
        })["do"](this, function() {
          $('<span>', {
            "class": "date",
            text: timetxt
          }).appendTo(this);
          this.append(" via ");
          $('<span>', {
            "class": "service",
            text: name
          }).appendTo(this);
          if (name === "gmail" && notif.email !== null) {
            return this.append(" [" + notif.email + "]");
          }
        });
        /*
        				if notif.site.option_mark_read
        					$('<div>',{class: "bar half close-o", rel: "tooltip", title:"Hide"}).appendTo @
        					$('<div>',{class: "bar half close-x", rel: "tooltip", title:"Mark as Read"}).appendTo @
        				else
        					$('<div>',{class: "bar close-o", rel: "tooltip", title:"Hide"}).appendTo @
        */

      });
    });
    if (notif.site.option_mark_read) {
      $('<div>', {
        "class": "bar close-x",
        rel: "tooltip",
        title: "Mark as Read"
      }).appendTo(this);
    } else {
      $('<div>', {
        "class": "bar close-o",
        rel: "tooltip",
        title: "Hide"
      }).appendTo(this);
    }
    if (grouped) {
      return $('<div>', {
        "class": "grouped-notification-mini",
        datasite: name
      })["do"](this, function() {
        return $('<div>', {
          "class": "text"
        })["do"](this, function() {
          $('<span>', {
            "class": "unread-count",
            text: unread
          }).appendTo(this);
          $('<span>', {
            text: " unread "
          }).appendTo(this);
          $('<span>', {
            "class": "service",
            text: name
          }).appendTo(this);
          return $('<span>', {
            text: " notifications "
          }).appendTo(this);
        });
      });
    }
  });
};

renderServiceText = function(service) {
  var service_text;
  service_text = service === 'gplus' ? 'Google+' : service;
  return $('<span>', {
    "class": "service " + service,
    text: service_text + " "
  });
};

renderDropdown = function(site, parent) {
  return $('<div>', {
    "class": "dropdown pull-right"
  })["do"](parent, function() {
    return $('<ul>', {
      "class": "dropdown-menu",
      role: "menu"
    })["do"](this, function() {
      $('<li>')["do"](this, function() {
        return $('<a>', {
          "class": "dropdown-mark-all " + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          return this.append("Mark all " + site.name + " notifications as Read");
        });
      });
      return $('<li>')["do"](this, function() {
        return $('<a>', {
          "class": "dropdown-remove " + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          return this.append("Remove " + site.name + " from Chime");
        });
      });
    });
  });
};

renderClearDropdown = function(parent) {
  var site, site_name, _i, _len, _ref, _results;
  parent.empty();
  _ref = root.sites;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    site_name = site.name === 'gplus' ? 'Google+' : site.name;
    if (site.count_new > 0) {
      _results.push($('<li>')["do"](parent, function() {
        return $('<a>', {
          "class": "dropdown-mark-all " + site.name,
          datasite: "" + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          this.append("Clear ");
          return $('<span>', {
            "class": "service " + site.name,
            text: "" + site.name
          }).appendTo(this);
        });
      }));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

renderSetupModal = function(parent, setup) {
  var site, _i, _len, _ref;
  if (setup == null) {
    setup = true;
  }
  _ref = root.master_sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    renderSetupBlock(site, parent, setup);
  }
};

renderSetupBlock = function(site, parent, setup) {
  var block_elem, enablecls, name, selectcls;
  if (!setup) {
    if (site.status === SiteStatus.FINISHED) {
      enablecls = "";
    } else {
      enablecls = "disabled";
    }
    if (isSiteEnabled(site)) {
      selectcls = "selected";
    } else {
      selectcls = "";
    }
  } else {
    selectcls = "";
    enablecls = "";
  }
  name = site.name;
  block_elem = $('<div>', {
    "class": "service select " + selectcls + " " + enablecls + " " + name,
    datasite: "" + name
  })["do"](parent, function() {
    $('<div>', {
      "class": "overlay"
    }).appendTo(this);
    $('<div>', {
      "class": "bar"
    }).appendTo(this);
    $('<div>', {
      "class": "image"
    }).appendTo(this);
    return $('<div>', {
      "class": "service-text"
    })["do"](this, function() {
      $('<h4>', {
        "class": "service-name",
        text: "" + name
      }).appendTo(this);
      return $('<ul>', {
        "class": "notif-details"
      })["do"](this, function() {
        var notif_type, _i, _len, _ref, _results;
        _ref = site.notif_description;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          notif_type = _ref[_i];
          _results.push($('<li>', {
            text: "" + notif_type
          }).appendTo(this));
        }
        return _results;
      });
    });
  });
  if (setup) {
    return site.checkLoggedIn(function(result) {
      if (result === LoadStatusCodes.UNAUTHORIZED) {
        enablecls = "disabled";
        selectcls = "";
      } else {
        enablecls = "";
        selectcls = "selected";
      }
      block_elem.addClass(enablecls);
      block_elem.addClass(selectcls);
    });
  }
};

// ------ extension/lib/ext/gmail.js -------
// Generated by CoffeeScript 1.6.3
var GmailNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GmailNotification = (function(_super) {
  __extends(GmailNotification, _super);

  function GmailNotification(description, url, time, unread) {
    var email, label, name, title;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    title = this.description['title'];
    name = this.description['name'];
    label = this.description['label'];
    email = this.description['email'];
    this.body = "</i></span><span class='important'> " + name + ":</span> <span class='unimportant'>" + title + "</span>";
    if (label !== null) {
      this.body += " <span class='label'>[" + label + "]</span>";
    }
    this.site = GmailSite.instance;
    this.message_id = this.url.match(/[0-9a-z]*$/i);
    this.url = url;
    this.email = email;
    this.title = "" + name;
    if (label !== null) {
      this.title += " [" + label + "]";
    }
    this.message_body = title;
    this.icon_name = "icon.gmail.png";
    if (!checkDate(time)) {
      this.time = null;
    }
    GmailNotification.__super__.constructor.call(this);
  }

  GmailNotification.prototype.markAsRead = function(read) {
    var mark_as_read_url, primary_account, search_index;
    GmailNotification.__super__.markAsRead.call(this, read);
    search_index = this.url.search(/u\/0/);
    if (search_index === -1) {
      primary_account = false;
    } else {
      primary_account = true;
    }
    if (primary_account) {
      mark_as_read_url = "https://mail.google.com/mail/?ui=html&zy=h";
    } else {
      mark_as_read_url = "https://mail.google.com/mail/u/1/h/?";
    }
    mark_as_read_url += "&v=c&th=" + this.message_id;
    $.get(mark_as_read_url, null);
  };

  return GmailNotification;

})(Notification);

this.GmailSite = (function(_super) {
  __extends(GmailSite, _super);

  GmailSite.instance = null;

  GmailSite.prototype.last_unread_count = -1;

  GmailSite.prototype._last_open_tab_id = -1;

  function GmailSite() {
    this.name = "gmail";
    this.notif_description = ["emails"];
    this.domain = "mail.google.com";
    this.cookiedomain = '.google.com';
    this.loginurl = "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/";
    this.callbackurl = ["https://mail.google.com/mail/u/1/?ui=html&zy=h", "https://mail.google.com/mail/?ui=html&zy=h"];
    this.testurl = chrome.extension.getURL("test/sites/gmail.html");
    this.xmlurl = "https://mail.google.com/mail/feed/atom";
    this.option_quick_check = true;
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = true;
    this.last_modified_time = null;
    GmailSite.__super__.constructor.call(this);
    GmailSite.instance = this;
  }

  GmailSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'HSID',
      cause: ['explicit', 'expired_overwrite']
    };
    GmailSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  GmailSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://mail.google.com/mail/?ui=html&zy=h',
      name: 'HSID'
    };
    return GmailSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  /*
  	checkForNew: (callbackfunc) ->
  
  		site = @
  		url = @xmlurl
  
  		#be sure to reset count on a timeout or error
  		loadXML url, (rootobj,loadstatus,loadmessage=null) ->
  			try
  				switch loadstatus
  					when LoadStatusCodes.OK
  						unread_count = parseInt(rootobj.find('fullcount').text())
  						modified_time = rootobj.find('modified').text()
  						assert(unread_count != null,"Did not parse unread count correctly")
  						if unread_count != site.last_unread_count
  							site.last_unread_count = unread_count
  							responsestatus = LoadStatusCodes.OK
  						else if modified_time != site.last_modified_time			
  							site.last_modified_time = modified_time
  							responsestatus = LoadStatusCodes.OK
  						else
  							responsestatus = LoadStatusCodes.NO_NEW
  					when LoadStatusCodes.UNAUTHORIZED
  						@_last_unread_count = -1
  						responsestatus = LoadStatusCodes.UNAUTHORIZED
  					else
  						@_last_unread_count = -1
  						responsestatus = loadstatus
  			catch err
  				console.log "Gmail had error #{err}"
  				responsestatus = LoadStatusCodes.ERROR
  			
  			callbackfunc(site,responsestatus)
  
  		return
  */


  GmailSite.prototype.parse = function(body_element) {
    var baseurl, elements, email, err, notifications, responsestatus, unreadelements,
      _this = this;
    notifications = new Array();
    try {
      email = body_element.find('nobr b[class="gb4"]').text();
      baseurl = body_element.find('td[id="bm"] a').attr('href');
      elements = body_element.find('tr[bgcolor="#E8EEF7"]');
      unreadelements = body_element.find('tr[bgcolor="#ffffff"]');
      elements = elements.add(unreadelements);
      elements.each(function(i, htmlelement) {
        var bodyelement, date, datetxt, description, e, element, inbox_num, labeltxt, message_id, nametxt, rawurl, titletxt, unread, url, urlprefix;
        element = $(htmlelement);
        unread = element.attr('bgcolor') === "#ffffff";
        nametxt = element.children(':nth-child(2)').text();
        datetxt = $.trim(element.children(':last').text());
        date = Date.parse(datetxt);
        if (datetxt.search(/pm/) !== -1 && date > Date.parse('now')) {
          date = Date.parse(date).add(-1).days();
        }
        if (isNaN(date)) {
          date = null;
        }
        if (date > Date.parse('now')) {
          date = null;
        }
        bodyelement = element.children(':nth-child(3)');
        rawurl = bodyelement.find('a').attr('href');
        message_id = rawurl.match(/[0-9a-z]*$/i);
        try {
          inbox_num = (baseurl.match(/u\/[0-9]/))[0].replace('u/', '');
        } catch (_error) {
          e = _error;
          inbox_num = '0';
        }
        urlprefix = "https://mail.google.com/mail/u/" + inbox_num + "/#inbox/";
        url = urlprefix + message_id;
        if (!unread) {
          titletxt = bodyelement.find('.ts').justtext('').text();
        } else {
          titletxt = bodyelement.find('.ts b').text();
        }
        labeltxt = $.trim(bodyelement.find('.ts font font').text());
        if (labeltxt === '') {
          labeltxt = null;
        }
        description = {
          email: email,
          name: nametxt,
          title: titletxt,
          label: labeltxt
        };
        notifications.push(new GmailNotification(description, url, date, unread));
      });
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  GmailSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new GmailNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return GmailSite.__super__.merge_notifications.call(this, notifs);
  };

  return GmailSite;

})(Site);

// ------ extension/lib/ext/facebook.js -------
// Generated by CoffeeScript 1.6.3
var FacebookNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FacebookNotification = (function(_super) {
  __extends(FacebookNotification, _super);

  FacebookNotification.prototype._id = 0;

  function FacebookNotification(description, url, time, unread) {
    var from, snippet, type;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    type = this.description.type;
    if (type === 'message') {
      from = this.description.from;
      snippet = this.description.snippet;
      this.body = "<span class='important'>Inbox - " + from + ": </span><span class='unimportant'>" + snippet + "</span>";
      this.title = from;
      this.message_body = snippet;
    } else if (type === 'notification') {
      this.body = this.description.content;
      this._id = this.description.id;
      this.title = this.description.title_text;
      this.message_body = this.body.replace(/(<([^>]+)>)/ig, "");
    }
    this.icon_name = "icon.facebook.png";
    this.site = FacebookSite.instance;
    FacebookNotification.__super__.constructor.call(this);
  }

  FacebookNotification.prototype.markAsRead = function(read) {
    var url;
    FacebookNotification.__super__.markAsRead.call(this, read);
    url = "https://www.facebook.com/ajax/notifications/mark_read.php?seen=0&alert_ids%5B0%5D=" + this._id;
    $.get(url, null);
  };

  return FacebookNotification;

})(Notification);

this.FacebookSite = (function(_super) {
  __extends(FacebookSite, _super);

  FacebookSite.instance = null;

  FacebookSite.prototype._last_unread_count = -1;

  FacebookSite.prototype._last_timestamp = 0;

  FacebookSite.prototype._getUserId = function(callback) {
    var cookie_details, error;
    cookie_details = {
      url: 'https://facebook.com',
      name: 'c_user'
    };
    try {
      chrome.cookies.get(cookie_details, function(cookie) {
        if (cookie === null) {
          callback(0);
        }
        console.log(cookie.value);
        return callback(parseInt(cookie.value));
      });
    } catch (_error) {
      error = _error;
      callbackfunc(0);
    }
  };

  function FacebookSite() {
    this.name = "facebook";
    this.notif_description = ["notifications"];
    this.domain = "facebook.com";
    this.cookiedomain = ".facebook.com";
    this.loginurl = "https://www.facebook.com/login.php";
    this.callbackurl = ["https://www.facebook.com/desktop_notifications/popup.php?mark_as_read=0"];
    this.testurl = null;
    this.jsonurl = "https://www.facebook.com/desktop_notifications/counts.php";
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = true;
    this.option_quick_check = true;
    FacebookSite.__super__.constructor.apply(this, arguments);
    FacebookSite.instance = this;
  }

  FacebookSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'xs',
      cause: ['explicit', 'expired_overwrite']
    };
    FacebookSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FacebookSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://facebook.com',
      name: 'xs'
    };
    return FacebookSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  FacebookSite.prototype.checkForNew = function(callbackfunc) {
    var site, url;
    site = this;
    url = this.jsonurl;
    loadJSON(url, function(jsonobj, loadstatus, loadmessage) {
      var err, responsestatus, timestamp, unread_count;
      if (loadmessage == null) {
        loadmessage = null;
      }
      try {
        switch (loadstatus) {
          case LoadStatusCodes.OK:
            unread_count = jsonobj.notifications.num_unread + jsonobj.inbox.unread;
            timestamp = jsonobj.inbox.latest;
            if (unread_count !== site._last_unread_count || timestamp > site._last_timestamp) {
              site._last_unread_count = unread_count;
              site._last_timestamp = timestamp;
              responsestatus = LoadStatusCodes.OK;
            } else {
              responsestatus = LoadStatusCodes.NO_NEW;
            }
            break;
          case LoadStatusCodes.ERROR:
            responsestatus = LoadStatusCodes.UNAUTHORIZED;
            this._last_unread_count = -1;
            break;
          default:
            this._last_unread_count = -1;
            responsestatus = loadstatus;
        }
      } catch (_error) {
        err = _error;
        console.log("Facebook had error " + err);
        responsestatus = LoadStatusCodes.ERROR;
      }
      return callbackfunc(site, responsestatus);
    });
  };

  FacebookSite.prototype.parse = function(body_element) {
    var err, notif_elements, notifications, responsestatus,
      _this = this;
    notifications = new Array();
    try {
      notif_elements = body_element.find('#jewelBoxNotif .notification');
      notif_elements.each(function(i, htmlelement) {
        var date, description, element, element_content, id, unread, url, _dataelement, _id_str;
        element = $(htmlelement);
        element_content = element.find('.info');
        url = element.find('.notifMainLink').attr('href');
        _dataelement = jQuery.parseJSON(element.attr('data-gt'));
        unread = _dataelement["unread"] === '1';
        _id_str = String(element.attr("id")).match(/notification_(\d+)/);
        id = _id_str !== null ? parseInt(_id_str[1]) : 0;
        description = {
          type: 'notification',
          content: element_content.justtext('div').html(),
          title_text: element_content.children().html(),
          id: id
        };
        date = new Date(parseInt(element.attr("data-notiftime")) * 1000);
        notifications.push(new FacebookNotification(description, url, date, unread));
      });
      /*
      			msg_elements = body_element.find('.del_area')
      			msg_elements.each (i, htmlelement) =>
      				element = $(htmlelement)
      
      				from = element.find('.title strong').text()
      				body = element.find('span.snippet').text()
      				url = 'https://facebook.com' + element.find('a.primary').attr('href')
      				if element.hasClass('aclb') then unread = true else unread = false
      
      				#Date parsing
      				date = element.find('.time abbr').text().toLowerCase()
      				days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
      				if date in days then date = 'last ' + date
      				if date is 'just now' then date = 'now'
      				if date.search(/min/) isnt -1 then date = '-' + date
      				date = Date.parse(date)
      
      				description =
      					type: 'message'
      					from: from
      					snippet: body
      
      				notifications.push new FacebookNotification description, url, date, unread
      				return
      */

      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  return FacebookSite;

})(Site);

// ------ extension/lib/ext/reddit.js -------
// Generated by CoffeeScript 1.6.3
var RedditNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RedditNotification = (function(_super) {
  __extends(RedditNotification, _super);

  RedditNotification.prototype._id = 0;

  function RedditNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    if (description['type'] === 'comment') {
      this.body = "<span class='important'>" + description['subject'] + "</span> from <span class='unimportant'>" + description['user_from'] + "</span> via <span class='unimportant'>" + description['subreddit'] + "</span>: <span class='unimportant'>" + description['content'] + "</span>";
    } else if (description['type'] === 'message') {
      this.body = "<span class='important'>" + description['subject'] + "</span> from <span class='unimportant'>" + description['user_from'] + "</span>: <span class='unimportant'>" + description['content'] + "</span>";
    }
    this.title = description['subject'];
    this.message_body = description['content'];
    this.icon_name = "icon.reddit.png";
    this._id = this.description.id;
    this.unread = unread;
    this.url = url;
    this.site = RedditSite.instance;
    RedditNotification.__super__.constructor.call(this);
  }

  RedditNotification.prototype.markAsRead = function(read) {
    RedditNotification.__super__.markAsRead.call(this, read);
    if (this.site.unread === 0) {
      $.get('http://www.reddit.com/message/inbox/.json?mark=true', null);
    }
    $.post("http://www.reddit.com/api/read_message", {
      uh: this.site._modhash,
      id: this._id
    });
  };

  RedditNotification.prototype.click = function(mark) {
    if (mark == null) {
      mark = true;
    }
    RedditNotification.__super__.click.call(this, mark);
    return mark;
  };

  return RedditNotification;

})(Notification);

this.RedditSite = (function(_super) {
  __extends(RedditSite, _super);

  RedditSite.instance = null;

  RedditSite._modhash = "";

  RedditSite.prototype.last_unread_count = -1;

  function RedditSite() {
    this.name = "reddit";
    this.notif_description = ["comment replies", "personal messages"];
    this.domain = "www.reddit.com";
    this.cookiedomain = ".reddit.com";
    this.loginurl = "http://reddit.com/login";
    this.callbackurl = ["http://www.reddit.com/message/inbox/.json"];
    this.testurl = null;
    this.option_quick_check = true;
    this.quickcheckurl = "http://www.reddit.com/api/me.json";
    this.option_feed_type = FeedType.JSON;
    this.option_mark_read = true;
    this.had_mail = false;
    RedditSite.__super__.constructor.apply(this, arguments);
    RedditSite.instance = this;
  }

  RedditSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'reddit_session',
      cause: ['explicit', 'expired_overwrite']
    };
    RedditSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  RedditSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'http://www.reddit.com',
      name: 'reddit_session'
    };
    return RedditSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  RedditSite.prototype.checkForNew = function(callbackfunc) {
    var site, url;
    site = this;
    url = this.quickcheckurl;
    loadJSON(url, function(jsonobj, loadstatus, loadmessage) {
      var err, has_mail, responsestatus;
      if (loadmessage == null) {
        loadmessage = null;
      }
      try {
        switch (loadstatus) {
          case LoadStatusCodes.OK:
            if (jsonobj.json) {
              responsestatus = LoadStatusCodes.UNAUTHORIZED;
            } else {
              has_mail = jsonobj.data.has_mail;
              if (has_mail || site.status === SiteStatus.UNINITIALIZED) {
                this.had_mail = has_mail;
                responsestatus = LoadStatusCodes.OK;
              } else if (has_mail === false && this.had_mail === true) {
                this.had_mail = has_mail;
                responsestatus = LoadStatusCodes.OK;
              } else {
                responsestatus = LoadStatusCodes.NO_NEW;
              }
            }
            break;
          case LoadStatusCodes.ERROR:
            responsestatus = LoadStatusCodes.UNAUTHORIZED;
            break;
          default:
            responsestatus = loadstatus;
        }
      } catch (_error) {
        err = _error;
        console.log("Reddit had error " + err);
        responsestatus = LoadStatusCodes.ERROR;
      }
      return callbackfunc(site, responsestatus);
    });
  };

  RedditSite.prototype.parse = function(jsonobj) {
    var inbox, item, notifs, parseNotification, responsestatus, _i, _len;
    parseNotification = function(jsonobj) {
      var description, itemdata, notif_type, time, unread, url;
      itemdata = jsonobj.data;
      time = itemdata.created_utc ? new Date(itemdata.created_utc * 1000) : null;
      unread = itemdata["new"];
      if (itemdata.was_comment) {
        notif_type = 'comment';
        url = "http://www.reddit.com" + itemdata.context;
      } else {
        notif_type = 'message';
        url = "http://www.reddit.com/message/messages/" + itemdata.id;
      }
      description = {
        type: notif_type,
        subject: itemdata.subject,
        user_from: itemdata.author,
        subreddit: itemdata.subreddit,
        content: itemdata.body,
        id: itemdata.name
      };
      return new RedditNotification(description, url, time, unread);
    };
    notifs = new Array();
    if (jsonobj.data === null) {
      responsestatus = LoadStatusCodes.UNAUTHORIZED;
    } else {
      this._modhash = jsonobj.data.modhash;
      inbox = jsonobj.data.children;
      for (_i = 0, _len = inbox.length; _i < _len; _i++) {
        item = inbox[_i];
        notifs.push(parseNotification(item));
      }
      responsestatus = LoadStatusCodes.OK;
    }
    return [responsestatus, notifs];
  };

  RedditSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new RedditNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return RedditSite.__super__.merge_notifications.call(this, notifs);
  };

  return RedditSite;

})(Site);

// ------ extension/lib/ext/linkedin.js -------
// Generated by CoffeeScript 1.6.3
var LinkedinNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LinkedinNotification = (function(_super) {
  __extends(LinkedinNotification, _super);

  function LinkedinNotification(description, url, time, unread) {
    var from, type;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    type = description['type'];
    if (type === 'invitation') {
      this.body = "<span class='important'>Invitation from " + description['from'] + "</span><span class='unimportant'> | " + description['from_headline'];
      this.time = null;
    } else {
      from = description['from'];
      this.body = "<span class='important'>" + description['subject'] + "</span>";
      if ((from != null) && from !== "") {
        this.body += "<span class='unimportant'> from " + from + "</span>";
      }
      this.time = this.time;
    }
    this.url = url;
    this.unread = unread;
    this.site = LinkedinSite.instance;
    LinkedinNotification.__super__.constructor.call(this);
  }

  LinkedinNotification.prototype.updateAttr = function(newattr) {
    LinkedinNotification.__super__.updateAttr.call(this, newattr);
  };

  return LinkedinNotification;

})(Notification);

this.LinkedinSite = (function(_super) {
  __extends(LinkedinSite, _super);

  LinkedinSite.instance = null;

  LinkedinSite.prototype.last_unread_count = -1;

  function LinkedinSite() {
    this.name = "linkedin";
    this.notif_description = ["notifications", "invitations"];
    this.domain = "www.linkedin.com";
    this.cookiedomain = 'www.linkedin.com';
    this.loginurl = "https://www.linkedin.com/uas/login";
    this.callbackurl = ["http://linkedin.com/inbox/messages/received", "http://linkedin.com/inbox/invitations/pending"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_slow_check = true;
    LinkedinSite.__super__.constructor.call(this);
    LinkedinSite.instance = this;
  }

  LinkedinSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'leo_auth_token',
      cause: ['explicit', 'expired_overwrite']
    };
    LinkedinSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  LinkedinSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details, pattern;
    cookie_details = {
      url: 'https://www.linkedin.com',
      name: 'leo_auth_token'
    };
    pattern = /LIM/;
    return LinkedinSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc, pattern);
  };

  LinkedinSite.prototype.parse = function(body) {
    var err, inboxitems, msgitems, notifications, responsestatus, size,
      _this = this;
    notifications = null;
    try {
      size = body.find('.inbox-item').size();
      notifications = new Array(size);
      inboxitems = body.find('#invitations .inbox-item');
      inboxitems.each(function(i, htmlelement) {
        var content, date, description, element, from, from_headline, unread, url;
        element = $(htmlelement);
        content = element.find('.item-content');
        date = null;
        from = $.trim(content.find('.participants a').text());
        from_headline = $.trim(content.find('.headline').text());
        url = 'http://www.linkedin.com'.concat(content.find('.participants a').attr('href'));
        unread = true;
        description = {
          type: 'invitation',
          from: from,
          from_headline: from_headline
        };
        notifications[i] = new LinkedinNotification(description, url, date, unread);
      });
      msgitems = body.find('#messages .inbox-item');
      msgitems.each(function(i, htmlelement) {
        var content, date, description, element, from, last_date, subject, unread, url;
        element = $(htmlelement);
        content = element.find('.item-content');
        date = new Date($.trim(content.find('.date').text()));
        from = $.trim(content.find('.participants a').text());
        subject = $.trim(content.find('.subject a').text());
        url = 'http://www.linkedin.com'.concat($.trim(content.find('.subject a').attr('href')));
        unread = element.hasClass('unread') ? true : false;
        last_date = i === 0 ? new Date : notifications[i - 1].time;
        date.setFullYear(last_date.getFullYear());
        if (date > last_date) {
          date.setFullYear(last_date.getFullYear() - 1);
        }
        description = {
          type: 'message',
          date: date,
          from: from,
          subject: subject,
          unread: unread,
          url: url
        };
        notifications[i] = new LinkedinNotification(description, url, date, unread);
      });
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  return LinkedinSite;

})(Site);

// ------ extension/lib/ext/twitter.js -------
// Generated by CoffeeScript 1.6.3
var TwitterNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TwitterNotification = (function(_super) {
  __extends(TwitterNotification, _super);

  function TwitterNotification(description, url, time, _unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this._unread = _unread;
    if (description['type'] === 'message') {
      this.title = "DM from " + description['user_from'];
      this.message_body = description['text'];
    } else if (description['type'] === 'mention') {
      this.title = "" + description['user_from'];
      this.message_body = description['text'];
    } else if (description['type'] === 'auth') {
      this.title = "Connect to Twitter";
      this.message_body = "Add Chime as a Twitter app to get Twitter notifications.";
    }
    this.body = "<span class='important'>" + this.title + "</span><span class='unimportant'>: " + this.message_body + "</span>";
    this.icon_name = "icon.twitter.png";
    this.site = TwitterSite.instance;
    TwitterNotification.__super__.constructor.call(this);
    if (this.site._notif_hash === null || $.isEmptyObject(this.site._notif_hash)) {
      this.unread = false;
    } else {
      if (this.site._notif_hash[this.hash]) {
        this.unread = this.site._notif_hash[this.hash].unread;
      } else {
        this.unread = true;
      }
    }
    return;
  }

  TwitterNotification.prototype.updateAttr = function(newattr) {
    TwitterNotification.__super__.updateAttr.call(this, newattr);
    this.attr = newattr;
    if (this.time !== null) {
      if (time_diff(this.time, new Date()).days > 7) {
        this.unread = false;
      }
    }
  };

  return TwitterNotification;

})(Notification);

this.TwitterSite = (function(_super) {
  __extends(TwitterSite, _super);

  TwitterSite.instance = null;

  TwitterSite.prototype.last_unread_count = -1;

  TwitterSite._dm_max_id = 0;

  function TwitterSite() {
    this.name = "twitter";
    this.notif_description = ["mentions"];
    this.domain = "twitter.com";
    this.loginurl = "http://twitter.com/login/";
    this.callbackurl = ["https://twitter.com/mentions"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_quick_check = true;
    this.option_mark_read = true;
    TwitterSite.__super__.constructor.apply(this, arguments);
    TwitterSite.instance = this;
    return;
  }

  TwitterSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://twitter.com',
      name: 'auth_token'
    };
    return TwitterSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  TwitterSite.prototype.parse = function(body_element) {
    var elements, notifications, responsestatus,
      _this = this;
    notifications = new Array();
    elements = body_element.find('.stream-item');
    elements.each(function(i, htmlelement) {
      var date, date_num, description, element, msg, name, notif, url, url_suffix;
      element = $(htmlelement);
      name = element.find('.fullname').text();
      msg = element.find('.js-tweet-text').text();
      url_suffix = element.find('.js-permalink').attr('href');
      url = "http://twitter.com/" + url_suffix;
      msg = msg.replace(/</g, "&lt;");
      msg = msg.replace(/>/g, "&gt;");
      date_num = parseInt(element.find('._timestamp').attr('data-time'));
      date = new Date(date_num * 1000);
      description = {
        user_from: name,
        text: msg,
        type: 'mention'
      };
      notif = new TwitterNotification(description, url, date, false);
      return notifications.push(notif);
    });
    responsestatus = LoadStatusCodes.OK;
    return [responsestatus, notifications];
  };

  TwitterSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new TwitterNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return TwitterSite.__super__.merge_notifications.call(this, notifs);
  };

  return TwitterSite;

})(Site);

// ------ extension/lib/ext/github.js -------
// Generated by CoffeeScript 1.6.3
var GithubNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GithubNotification = (function(_super) {
  __extends(GithubNotification, _super);

  function GithubNotification(description, url, time, unread, id) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.id = id;
    this.body = "<span class='important'>" + description['repo'] + ":</span> <span class='unimportant'>" + description['subject'] + "</span>";
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = GithubSite.instance;
    this.id = id;
    this.title = description['repo'];
    this.message_body = description['subject'];
    this.icon_name = "icon.github.png";
    GithubNotification.__super__.constructor.call(this);
  }

  GithubNotification.prototype.markAsRead = function(read) {
    GithubNotification.__super__.markAsRead.call(this, read);
    $.get(this.url, null);
  };

  return GithubNotification;

})(Notification);

this.GithubSite = (function(_super) {
  __extends(GithubSite, _super);

  GithubSite.instance = null;

  GithubSite.prototype.last_unread_count = -1;

  function GithubSite() {
    this.name = "github";
    this.notif_description = ["notifications"];
    this.domain = "github.com";
    this.cookiedomain = this.domain;
    this.loginurl = "http://www.github.com/login";
    this.callbackurl = ["https://github.com/notifications?all=1"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = true;
    GithubSite.__super__.constructor.apply(this, arguments);
    GithubSite.instance = this;
  }

  GithubSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: '_gh_sess',
      cause: ['explicit']
    };
    return GithubSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  GithubSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details, pattern;
    cookie_details = {
      url: 'https://github.com',
      name: 'logged_in'
    };
    pattern = /yes/;
    return GithubSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc, pattern);
  };

  GithubSite.prototype.parse = function(body) {
    var err, matchindex, notifications, responsestatus;
    notifications = new Array();
    try {
      matchindex = $(body)[5].childNodes[0].data.search(/Notifications/);
      if (matchindex === -1) {
        return [LoadStatusCodes.UNAUTHORIZED, notifications];
      }
      body.find('.js-notification').each(function(i, htmlelement) {
        var date, description, element, httpindex, id, repo_name, titletxt, unread, url, urlprefix;
        element = $(htmlelement);
        id = element.attr('data-note-id');
        unread = element.hasClass('unread') ? true : false;
        date = element.find('time').attr('datetime');
        titletxt = $.trim(element.find('.js-notification-target').text());
        url = element.find('.js-notification-target').attr('href');
        urlprefix = 'https://github.com';
        httpindex = url.search(/http/);
        if (httpindex === -1) {
          url = urlprefix + url;
        }
        repo_name = url.split(/\//)[3] + "/" + url.split(/\//)[4];
        description = {
          'subject': titletxt,
          'repo': repo_name
        };
        return notifications.push(new GithubNotification(description, url, date, unread, id));
      });
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  GithubSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new GithubNotification(notif.description, notif.url, new Date(notif.time), notif.unread, notif.id));
      }
      return _results;
    })();
    return GithubSite.__super__.merge_notifications.call(this, notifs);
  };

  return GithubSite;

})(Site);

// ------ extension/lib/ext/quora.js -------
// Generated by CoffeeScript 1.6.3
var QuoraNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

QuoraNotification = (function(_super) {
  __extends(QuoraNotification, _super);

  function QuoraNotification(description, url, time, unread) {
    var count, note, text, type;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    type = description['type'];
    if (type === 'inbox') {
      count = description['count'];
      note = "Quora: " + count + " new message";
      if (count > 1) {
        note += 's';
      }
      this.body = "<span class='unimportant'>" + note + "</span>";
      this.title = note;
    } else {
      text = description['text'];
      this.body = "<span class='unimportant'>" + text + "</span>";
      this.title = text;
    }
    this.message_body = "";
    this.icon_name = "icon.quora.png";
    this.time = null;
    this.url = url;
    this.unread = unread;
    this.site = QuoraSite.instance;
    QuoraNotification.__super__.constructor.call(this);
  }

  QuoraNotification.prototype.updateAttr = function(newattr) {
    QuoraNotification.__super__.updateAttr.call(this, newattr);
  };

  return QuoraNotification;

})(Notification);

this.QuoraSite = (function(_super) {
  __extends(QuoraSite, _super);

  QuoraSite.instance = null;

  QuoraSite.prototype.last_unread_count = -1;

  function QuoraSite() {
    this.name = "quora";
    this.notif_description = ["notifications", "messages"];
    this.domain = "api.quora.com";
    this.cookiedomain = ".quora.com";
    this.loginurl = "http://www.quora.com/login/index/";
    this.callbackurl = ["http://api.quora.com/api/logged_in_user?fields=inbox,notifs"];
    this.option_feed_type = FeedType.JSON;
    this.option_slow_check = true;
    QuoraSite.__super__.constructor.apply(this, arguments);
    QuoraSite.instance = this;
  }

  QuoraSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'm-tz',
      cause: ['overwrite']
    };
    QuoraSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  QuoraSite.prototype.checkLoggedIn = function(callbackfunc) {
    return callbackfunc(LoadStatusCodes.OK);
  };

  QuoraSite.prototype.parse = function(jsonobj) {
    var date, description, err, inbox_count, inbox_notif, notif, notifications, notifs, parseNotification, responsestatus, unread, url, _i, _len;
    parseNotification = function(jsonobj) {
      var date, description, err, notif, obj, objs, temp_url, text, unread, url, _i, _len;
      try {
        jsonobj = "<div>" + jsonobj + "</div>";
        notif = $(jsonobj);
        objs = notif.find("a[href^='\#']");
        for (_i = 0, _len = objs.length; _i < _len; _i++) {
          obj = objs[_i];
          $(objs).remove();
        }
        url = notif.find('a:first').attr('href');
        temp_url = notif.find('a:eq(1)').attr('href');
        if (typeof temp_url !== "undefined") {
          url = temp_url;
        }
        text = notif.text();
        unread = true;
        date = null;
        description = {
          text: text,
          type: 'notification'
        };
      } catch (_error) {
        err = _error;
        console.log(err.message);
      }
      return new QuoraNotification(description, url, date, unread);
    };
    notifications = new Array();
    try {
      if (jsonobj === null) {
        responsestatus = LoadStatusCodes.UNAUTHORIZED;
      } else {
        notifs = jsonobj.notifs.unseen;
        inbox_count = jsonobj.inbox.unread_count;
        if (inbox_count > 0) {
          description = {
            count: inbox_count,
            type: 'inbox'
          };
          url = 'http://www.quora.com/inbox';
          date = null;
          unread = true;
          inbox_notif = new QuoraNotification(description, url, date, unread);
          notifications.push(inbox_notif);
        }
        for (_i = 0, _len = notifs.length; _i < _len; _i++) {
          notif = notifs[_i];
          notifications.push(parseNotification(notif));
        }
        responsestatus = LoadStatusCodes.OK;
      }
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  QuoraSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new QuoraNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return QuoraSite.__super__.merge_notifications.call(this, notifs);
  };

  return QuoraSite;

})(Site);

// ------ extension/lib/ext/youtube.js -------
// Generated by CoffeeScript 1.6.3
var YoutubeNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

YoutubeNotification = (function(_super) {
  __extends(YoutubeNotification, _super);

  function YoutubeNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = "<span class='important'>" + description['message'] + "</span><span class='unimportant'> from: " + description['user'] + "</span>";
    this.time = null;
    this.url = url;
    this.unread = unread;
    this.site = YoutubeSite.instance;
    YoutubeNotification.__super__.constructor.call(this);
  }

  return YoutubeNotification;

})(Notification);

this.YoutubeSite = (function(_super) {
  __extends(YoutubeSite, _super);

  YoutubeSite.instance = null;

  YoutubeSite.prototype.last_unread_count = -1;

  function YoutubeSite() {
    this.name = "youtube";
    this.domain = "m.youtube.com";
    this.cookiedomain = '.youtube.com';
    this.loginurl = "https://accounts.google.com/ServiceLogin?service=youtube&continue=http://www.youtube.com";
    this.callbackurl = ["http://m.youtube.com/inbox"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    YoutubeSite.__super__.constructor.apply(this, arguments);
    YoutubeSite.instance = this;
  }

  YoutubeSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'HSID',
      cause: ['explicit', 'expired_overwrite']
    };
    YoutubeSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  YoutubeSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'http://www.youtube.com',
      name: 'HSID'
    };
    return YoutubeSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  YoutubeSite.prototype.parse = function(body_element) {
    var elements, err, notifications, responsestatus, self_notifications;
    notifications = new Array();
    self_notifications = 0;
    console.log(body_element);
    try {
      elements = body_element.find('body div:eq(4) div[style="color:#999;font-size:80%"]');
      console.log(elements);
      elements.each(function(i, htmlelement) {
        var date, description, element, message, unread, url, user;
        element = $(htmlelement);
        user = $.trim((element.html().split('<br>')[0]).split(':')[1]);
        if (element.has('b').html() === null) {
          unread = false;
        } else {
          unread = true;
        }
        url = 'http://youtube.com' + element.find('a').attr('href');
        message = element.find('a').text();
        description = {
          user: user,
          message: message
        };
        date = null;
        return notifications.push(new YoutubeNotification(description, url, date, unread));
      });
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  YoutubeSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new YoutubeNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return YoutubeSite.__super__.merge_notifications.call(this, notifs);
  };

  return YoutubeSite;

})(Site);

// ------ extension/lib/ext/airbnb.js -------
// Generated by CoffeeScript 1.6.3
var AirbnbNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AirbnbNotification = (function(_super) {
  __extends(AirbnbNotification, _super);

  function AirbnbNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = "<span class='important'>" + description['user'] + "</span> of <span class='important'>" + description['location'] + "</span>: <span class='unimportant'>" + description['message'] + "</span>";
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = AirbnbSite.instance;
  }

  return AirbnbNotification;

})(Notification);

this.AirbnbSite = (function(_super) {
  __extends(AirbnbSite, _super);

  AirbnbSite.instance = null;

  AirbnbSite.prototype.last_unread_count = -1;

  function AirbnbSite() {
    this.name = "airbnb";
    this.domain = "www.airbnb.com";
    this.callbackurl = ["http://www.airbnb.com/home/inbox"];
    this.testurl = null;
    this.jsonurl = null;
    AirbnbSite.__super__.constructor.apply(this, arguments);
    AirbnbSite.instance = this;
  }

  AirbnbSite.prototype.parse = function() {
    var notifications, size;
    size = $('.thread').size();
    notifications = new Array(size);
    $('.thread').each(function(i, htmlelement) {
      var date, description, element, last_date, location, message, unread, url, user, user_date;
      element = $(htmlelement);
      user_date = element.find('.user p').html().split('<br>');
      user = $.trim(user_date[0]);
      date = new Date($.trim(user_date[1]));
      message = element.find('.message_details p a').text();
      url = 'http://airbnb.com' + element.find('.message_details p a').attr('href');
      location = element.find('.locality').text() + ', ' + element.find('.region').text();
      last_date = i === 0 ? new Date : notifications[i - 1].time;
      date.setFullYear(last_date.getFullYear());
      if (date > last_date) {
        date.setFullYear(last_date.getFullYear() - 1);
      }
      description = {
        user: user,
        message: message,
        location: location
      };
      unread = false;
      return notifications[i] = new AirbnbNotification(description, url, date, unread);
    });
    return notifications;
  };

  AirbnbSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new AirbnbNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return AirbnbSite.__super__.merge_notifications.call(this, notifs);
  };

  return AirbnbSite;

})(Site);

// ------ extension/lib/ext/fitocracy.js -------
// Generated by CoffeeScript 1.6.3
var FitocracyNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FitocracyNotification = (function(_super) {
  __extends(FitocracyNotification, _super);

  function FitocracyNotification(description, url, time, unread) {
    var text;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    text = description['text'];
    this.body = "<span class='important'>" + text;
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = FitocracySite.instance;
  }

  return FitocracyNotification;

})(Notification);

this.FitocracySite = (function(_super) {
  __extends(FitocracySite, _super);

  FitocracySite.instance = null;

  FitocracySite.prototype.last_unread_count = -1;

  function FitocracySite() {
    this.name = "fitocracy";
    this.domain = "www.fitocracy.com";
    this.cookiedomain = this.domain;
    this.loginurl = "http://www.fitocracy.com/accounts/login/";
    this.callbackurl = ["http://www.fitocracy.com/notifications"];
    this.testurl = null;
    this.jsonurl = null;
    FitocracySite.__super__.constructor.apply(this, arguments);
    FitocracySite.instance = this;
  }

  FitocracySite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'sessionid',
      cause: ['overwrite']
    };
    FitocracySite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FitocracySite.prototype.checkLoggedIn = function(callbackfunc) {
    return $.get('http://www.fitocracy.com', function(htmlelement) {
      var attr, element, err, logged_out, status;
      try {
        element = $(htmlelement)[51];
        if (element.hasAttributes()) {
          attr = element.attributes[1];
          logged_out = attr.name === 'class' && attr.value === 'logged-out';
          status = logged_out ? LoadStatusCodes.UNAUTHORIZED : LoadStatusCodes.OK;
        } else {
          status = LoadStatusCodes.UNAUTHORIZED;
        }
        return callbackfunc(status);
      } catch (_error) {
        err = _error;
        return callbackfunc(LoadStatusCodes.OK);
      }
    });
  };

  FitocracySite.prototype.parse = function() {
    var notifications, size,
      _this = this;
    size = $('li').size();
    notifications = new Array(size);
    $('li').each(function(i, htmlelement) {
      var body, bodyelement, date, description, element, unread, url;
      element = $(htmlelement);
      bodyelement = element.find('.notification-content a');
      body = bodyelement.text();
      url = 'http://www.fitocracy.com/' + bodyelement.attr('href');
      date = new Date(element.find('.notification-timestamp').text());
      description = {
        text: body
      };
      unread = element.hasClass('unread-notification');
      notifications[i] = new FitocracyNotification(description, url, date, unread);
    });
    return notifications;
  };

  FitocracySite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new FitocracyNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return FitocracySite.__super__.merge_notifications.call(this, notifs);
  };

  return FitocracySite;

})(Site);

// ------ extension/lib/ext/stackoverflow.js -------
// Generated by CoffeeScript 1.6.3
var StackoverflowNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StackoverflowNotification = (function(_super) {
  __extends(StackoverflowNotification, _super);

  function StackoverflowNotification(description, url, time, unread) {
    var summary, text, title, type;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    type = description['type'];
    if (type === 'notification') {
      text = description['text'];
      this.body = "<span class='unimportant'>" + text + "</span>";
      this.title = text;
    } else {
      title = description['title'];
      summary = description['summary'];
      this.body = "<span class='important'>" + title + ": </span><span class='unimportant'>" + summary + "</span>";
      this.title = title;
      this.message_body = summary;
    }
    this.icon_name = "icon.stackoverflow.png";
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = StackoverflowSite.instance;
    StackoverflowNotification.__super__.constructor.call(this);
  }

  StackoverflowNotification.prototype.markAsRead = function(read) {
    StackoverflowNotification.__super__.markAsRead.call(this, read);
    $.get(this.url, null);
  };

  return StackoverflowNotification;

})(Notification);

this.StackoverflowSite = (function(_super) {
  __extends(StackoverflowSite, _super);

  StackoverflowSite.instance = null;

  StackoverflowSite.prototype.last_unread_count = -1;

  function StackoverflowSite() {
    this.name = "stackoverflow";
    this.notif_description = ["notifications"];
    this.domain = "www.stackoverflow.com";
    this.cookiedomain = ".stackoverflow.com";
    this.loginurl = "http://stackoverflow.com/users/login";
    this.callbackurl = ["http://stackoverflow.com/notices/genuwine", "http://stackoverflow.com/inbox/genuwine"];
    this.option_feed_type = FeedType.JSON;
    this.option_mark_read = true;
    StackoverflowSite.__super__.constructor.apply(this, arguments);
    StackoverflowSite.instance = this;
  }

  StackoverflowSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'usr',
      cause: ['explicit', 'expired_overwrite']
    };
    StackoverflowSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  StackoverflowSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'http://stackoverflow.com',
      name: 'usr'
    };
    return StackoverflowSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  StackoverflowSite.prototype.parse = function(jsonobj) {
    var notif, notifications, parseInbox, parseNotification, responsestatus, type, _i, _j, _len, _len1;
    parseNotification = function(jsonobj) {
      var date, description, element, text, unread, url;
      unread = jsonobj.is_unread;
      date = jsonobj.created;
      if ((date.search(/hours ago/)) !== -1) {
        date = '-' + date.replace('ago', '');
        console.log('if-branch: ', date);
      }
      date = Date.parse(date);
      element = $('<div>' + jsonobj.text + '</div>');
      url = element.find('a:nth-child(2)').attr('href');
      if (url == null) {
        url = element.find('a').attr('href');
      }
      text = element.text();
      description = {
        text: text,
        type: 'notification'
      };
      return new StackoverflowNotification(description, url, date, unread);
    };
    parseInbox = function(jsonobj) {
      var date, description, summary, title, unread, url;
      unread = jsonobj.IsNew;
      url = jsonobj.Url;
      date = jsonobj.CreationDate;
      if ((date.search(/hours ago/)) !== -1) {
        date = '-' + date.replace('ago', '');
      }
      date = Date.parse(date);
      title = jsonobj.Title;
      summary = jsonobj.Summary;
      description = {
        title: title,
        summary: summary,
        type: 'inbox'
      };
      return new StackoverflowNotification(description, url, date, unread);
    };
    if (jsonobj.length > 0 && jsonobj[0].Title === void 0) {
      type = 'notification';
    } else {
      type = 'inbox';
    }
    notifications = new Array();
    if (jsonobj === null) {
      responsestatus = LoadStatusCodes.UNAUTHORIZED;
    } else if (type === 'notification') {
      for (_i = 0, _len = jsonobj.length; _i < _len; _i++) {
        notif = jsonobj[_i];
        notifications.push(parseNotification(notif));
      }
      responsestatus = LoadStatusCodes.OK;
    } else {
      for (_j = 0, _len1 = jsonobj.length; _j < _len1; _j++) {
        notif = jsonobj[_j];
        notifications.push(parseInbox(notif));
      }
      responsestatus = LoadStatusCodes.OK;
    }
    return [responsestatus, notifications];
  };

  return StackoverflowSite;

})(Site);

// ------ extension/lib/ext/flickr.js -------
// Generated by CoffeeScript 1.6.3
var FlickrNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FlickrNotification = (function(_super) {
  __extends(FlickrNotification, _super);

  function FlickrNotification(description, url, time, unread) {
    var from, subject;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    subject = description['subject'];
    from = description['from'];
    this.body = "<span class='important'>" + from + ": </span><span class='unimportant'>" + subject + "</span>";
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = FlickrSite.instance;
    this.title = from;
    this.message_body = subject;
    this.icon_name = "icon.flickr.png";
    FlickrNotification.__super__.constructor.call(this);
  }

  return FlickrNotification;

})(Notification);

this.FlickrSite = (function(_super) {
  __extends(FlickrSite, _super);

  FlickrSite.instance = null;

  FlickrSite.prototype.last_unread_count = -1;

  function FlickrSite() {
    this.name = "flickr";
    this.notif_description = ["mail"];
    this.domain = "www.flickr.com";
    this.cookiedomain = '.flickr.com';
    this.loginurl = "http://www.flickr.com/signin/flickr/";
    this.callbackurl = ["http://www.flickr.com/mail/"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    FlickrSite.__super__.constructor.apply(this, arguments);
    FlickrSite.instance = this;
  }

  FlickrSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'cookie_session',
      cause: ['explicit', 'expired_overwrite']
    };
    FlickrSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FlickrSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'http://www.flickr.com',
      name: 'cookie_session'
    };
    return FlickrSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  FlickrSite.prototype.parse = function(body_element) {
    var err, msgs, notifications, responsestatus,
      _this = this;
    notifications = new Array();
    try {
      msgs = body_element.find('.message_row');
      msgs.each(function(i, htmlelement) {
        var date, description, element, from, msg_header, subject, unread, url;
        element = $(htmlelement);
        msg_header = element.find('.subj a');
        subject = msg_header.text();
        from = element.find('.fromto').text();
        date = Date.parse(element.find('.date').text().replace('.', ':'));
        if (isNaN(date)) {
          date = null;
        }
        url = 'http://www.flickr.com' + msg_header.attr('href');
        unread = element.hasClass('unread');
        description = {
          subject: subject,
          from: from
        };
        notifications.push(new FlickrNotification(description, url, date, unread));
      });
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  FlickrSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new FlickrNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return FlickrSite.__super__.merge_notifications.call(this, notifs);
  };

  return FlickrSite;

})(Site);

// ------ extension/lib/ext/foursquare.js -------
// Generated by CoffeeScript 1.6.3
var FoursquareNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FoursquareNotification = (function(_super) {
  __extends(FoursquareNotification, _super);

  function FoursquareNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = description;
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = FoursquareSite.instance;
    this.title = this.body;
    this.message_body = "";
    this.icon_name = "icon.foursquare.png";
    FoursquareNotification.__super__.constructor.call(this);
  }

  return FoursquareNotification;

})(Notification);

this.FoursquareSite = (function(_super) {
  __extends(FoursquareSite, _super);

  FoursquareSite.instance = null;

  function FoursquareSite() {
    this.name = "foursquare";
    this.notif_description = ["notifications"];
    this.domain = "foursquare.com";
    this.cookiedomain = this.domain;
    this.loginurl = "https://foursquare.com/login";
    this.callbackurl = ["https://foursquare.com/user/notifications"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = false;
    FoursquareSite.__super__.constructor.apply(this, arguments);
    FoursquareSite.instance = this;
  }

  FoursquareSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'oauth_token',
      cause: ['explicit']
    };
    return FoursquareSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FoursquareSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://foursquare.com',
      name: 'oauth_token'
    };
    return FoursquareSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  FoursquareSite.prototype.parse = function(body) {
    var JSONdata, JSONobj, baseurl, beginIndex, date, description, endIndex, err, notif, notifications, responsestatus, scriptAsHTML, scriptAsText, targetid, timeZoneOffset, type, unread, url, userid, utcSeconds, _i, _len;
    notifications = new Array();
    try {
      scriptAsHTML = body.find('script').prevObject.get(96);
      scriptAsHTML = $(scriptAsHTML).html();
      beginIndex = scriptAsHTML.search(/notificationsJson:/);
      endIndex = scriptAsHTML.search(/\}\)\)\.render\(\);/);
      scriptAsText = scriptAsHTML.slice(beginIndex, +(endIndex - 1) + 1 || 9e9);
      scriptAsText = '{' + '"' + scriptAsText.slice(0, 17) + '"' + scriptAsText.slice(17) + '}';
      JSONdata = jQuery.parseJSON(scriptAsText)['notificationsJson']['notifications']['items'];
      for (_i = 0, _len = JSONdata.length; _i < _len; _i++) {
        JSONobj = JSONdata[_i];
        description = JSONobj['text'];
        unread = JSONobj['unread'];
        utcSeconds = parseInt(JSONobj['createdAt'], 10);
        timeZoneOffset = JSONobj['target']['object']['timeZoneOffset'];
        if (timeZoneOffset === void 0) {
          timeZoneOffset = 0;
        } else {
          timeZoneOffset = parseInt(timeZoneOffset, 10);
        }
        date = new Date(0);
        date.setUTCSeconds(utcSeconds + timeZoneOffset);
        type = JSONobj['target']['type'];
        targetid = JSONobj['target']['object']['id'];
        baseurl = 'https://foursquare.com';
        if (type === 'checkin') {
          userid = JSONobj['target']['object']['user']['id'];
          url = baseurl + '/user/' + userid + '/checkin/' + targetid;
        } else if (type === 'user') {
          url = baseurl + '/user/' + targetid;
        } else if (type === 'tip') {
          url = baseurl + '/item/' + targetid;
        } else {
          url = baseurl + '/user/notifications';
        }
        notif = new FoursquareNotification(description, url, date, unread);
        notifications.push(notif);
      }
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.UNAUTHORIZED;
    }
    return [responsestatus, notifications];
  };

  FoursquareSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new FoursquareNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return FoursquareSite.__super__.merge_notifications.call(this, notifs);
  };

  return FoursquareSite;

})(Site);

// ------ extension/lib/ext/gplus.js -------
// Generated by CoffeeScript 1.6.3
var GplusNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GplusNotification = (function(_super) {
  __extends(GplusNotification, _super);

  function GplusNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = "" + description.count + " new Google+ " + description.suffix;
    this.time = null;
    this.url = url;
    this.unread = unread;
    this.site = GplusSite.instance;
    this.title = this.body;
    this.message_body = "";
    this.icon_name = "icon.gplus.png";
    GplusNotification.__super__.constructor.call(this);
  }

  GplusNotification.prototype.markAsRead = function(read) {
    GplusNotification.__super__.markAsRead.call(this, read);
    $.get('https://plus.google.com/app/plus/x/all/?v=notifications', null);
  };

  return GplusNotification;

})(Notification);

this.GplusSite = (function(_super) {
  __extends(GplusSite, _super);

  GplusSite.instance = null;

  function GplusSite() {
    this.name = "gplus";
    this.notif_description = ["notifications"];
    this.domain = "plus.google.com";
    this.cookiedomain = '.google.com';
    this.loginurl = "https://accounts.google.com/ServiceLogin?service=oz&continue=https://plus.google.com";
    this.callbackurl = ["https://plus.google.com/app/plus/x/all/?v=notifications"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = true;
    GplusSite.__super__.constructor.apply(this, arguments);
    GplusSite.instance = this;
  }

  GplusSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'HSID',
      cause: ['explicit', 'expired_overwrite']
    };
    return GplusSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  GplusSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://plus.google.com/app/basic/home',
      name: 'HSID'
    };
    return GplusSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  GplusSite.prototype.extractUniqueID = function(str) {
    var beginIndex, endIndex, uniqueID;
    beginIndex = str.search(/cbp=/);
    endIndex = str.search(/&spath/);
    if (beginIndex !== -1) {
      return uniqueID = str.slice(beginIndex + 4, +(endIndex - 1) + 1 || 9e9);
    } else {
      beginIndex = str.search(/cnpids=/);
      endIndex = str.search(/%/);
      return uniqueID = str.slice(beginIndex + 7, +(endIndex - 1) + 1 || 9e9);
    }
  };

  GplusSite.prototype.parse = function(body) {
    var count, date, description, elements, err, htmlelement, notif, notifications, responsestatus, suffix, unread, url;
    notifications = new Array();
    try {
      elements = body.children();
      htmlelement = elements[0];
      count = parseInt($(htmlelement).find('tr td').text());
      count = count >= 0 ? count : 0;
      suffix = count === 1 ? 'notification' : 'notifications';
      description = {
        count: count,
        suffix: suffix
      };
      unread = count > 0 ? true : false;
      url = "https://plus.google.com/u/0/notifications";
      date = null;
      notif = new GplusNotification(description, url, date, unread);
      notifications.push(notif);
      /*
      			elements = body.children() #body.find('tr[style="height:35px"]')
      			elements = elements[2..elements.length-3] #remove header and css footer divs
      
      			elements.each (i, htmlelement) =>
      				element = $(htmlelement).parent()[0]
      
      				#read/unread status by finding number of classes
      				num_classes = element.className.toString().split(' ').length
      				unread = if num_classes is 2 then true else false
      				
      				#description
      				description = $(element).find('td a').text().trim()
      
      				#url
      				uniqueID = @extractUniqueID($(element).find('td a').attr('href'))
      				url = "https://plus.google.com/u/0/notifications/#{uniqueID}"
      				
      				date = null
      				notif = new GplusNotification description, url, date, unread
      				notifications.push notif
      */

      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  GplusSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new GplusNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return GplusSite.__super__.merge_notifications.call(this, notifs);
  };

  return GplusSite;

})(Site);

