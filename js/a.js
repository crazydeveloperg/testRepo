
//---------- From 01jq.js ----------
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

//---------- 01jq.js end ----------

//---------- From 02fr7.js ----------
eval(function(d,e,a,c,b,f){b=function(a){return(a<e?"":b(parseInt(a/e)))+(35<(a%=e)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(a){return f[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('(1a(){1U.gZ=1a(14){17 19=1i;19.xg="1.5.0";19.14={40:"5K",5B:1f,xh:[],xi:1g,xj:dF*60*10,jt:1f,ju:1g,mc:1g,xk:"1B-{{1I}}",md:1g,22:1f,xl:1g,xm:1g,4K:1g,a9:1m,me:1g,7U:"#!/",xn:1f,qN:1f,xo:10,qO:50,qP:"",jv:1g,xp:Fv,xq:1f,dG:1f,qQ:"a, 2M, 55, 2B",9o:1g,h0:1f,mf:0,h1:30,jw:1f,mg:1f,qR:1m,xr:".Fw",4L:1f,xs:1g,xt:1g,xu:1g,xv:1f,xw:1f,2D:1f,qS:1g,qT:1g,xx:1g,xy:"1o",xz:"xA",xB:"mh",xC:"qU",xD:1g,xE:1g,qV:1g,qW:1g,fe:1g,ff:0,qX:1f,fg:1g,xF:1g,xG:0,xH:1f,h2:"OK",jx:"qY",xI:"Fx",qZ:"Fy",h3:"gZ",xJ:1g,xK:1f,xL:1f,xM:"Fz... ",fh:1f,xN:1f,xO:0,mi:1f,7V:"1e",r0:"1e-92",fi:"5L",xP:1g,xQ:1f,r1:"mh",3w:1f,ab:{},r2:{},mj:1g,xR:1g,2m:1g,r3:0,r4:\'<jy FA="FB://xS.w3.FC/FD/jy" 2c="75" 3q="75" FE="0 0 75 75"><r5 cx="37.5" cy="37.5" r="33.5" FF-3q="8"/></jy>\',bB:\'<2B 1q="41-2U">\'+\'<2B 1q="41-2U-FG"></2B>\'+\'<2B 1q="41-2U-1G">\'+\'<2B 1q="41-2U-xT-r5"></2B>\'+"</2B>"+\'<2B 1q="41-2U-1Y">\'+\'<2B 1q="41-2U-xT-r5"></2B>\'+"</2B>"+"</2B>",bC:1f,xU:".h4, a.4x, a.1x-4x, .2M, .1k-2M, .4F-4x, .55-8K, .55-6g, .3F-1k-2M, a.2G-cC, a.9p-2M, .9p-2M > a, .4c-h5-3D a",4N:1f};1t(17 64 in 14)19.14[64]=14[64];17 $=3J;17 t7=4g;19.6B={};19.40=$(19.14.40);19.40.eq(0).1w("FH-40");19.3x={56:19.4a.5g?"4y":"dH",65:19.4a.5g?"57":"h6",6C:19.4a.5g?"cD":"jz"};19.ls=1U.FI;19.3r=$("5K").1W("4z")==="3r";if(19.3r)$("3O").1Z("4O","3r");if(1r 19.14.xV!=="1m")if(19.14.xV)$("3O").1w("7w-fj-2s");1d $("3O").1K("7w-fj-2s");1d if(19.27.5s&&(1U.FJ||1U.FK))$(2g).on("FL",1a(){if(19.27.r6())$("3O").1w("7w-fj-2s")},1g);19.5L=[];17 h7=1a(2h,14){17 4d={2Y:1g,3e:1g,h8:1m,xW:1g,ju:19.14.ju,mc:19.14.mc,md:19.14.md,h0:19.14.h0,jw:19.14.jw,mg:19.14.mg,h1:19.14.h1,mf:19.14.mf,3w:19.14.3w,jt:19.14.jt};17 i;14=14||{};if(14.2Y&&19.14.2m)14.2Y=1g;1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];17 1e=1i;1e.14=14;1e.2h=2h;17 1h=$(2h);1e.1h=1h[0];if(1r 2h!=="3l"){2h=(1h.1Z("id")?"#"+1h.1Z("id"):"")+(1h.1Z("1q")?"."+1h.1Z("1q").31(/ /g,".").31(".2H",""):"");1e.2h=2h}1e.92=1h.1v(19.14.r0);1e.ac={};1e.bD={};1e.bE={};1e.ad={};1h[0].70=1e;1e.8L=1h.1l(".dI")[0];1e.aZ=[];1e.mk=[];1e.fk=[];if(1e.14.3e){17 aZ=1h.1l(".1o");1t(i=0;i<aZ.1b;i++){1e.aZ.1Q(aZ[i]);1e.mk.1Q("#"+aZ.eq(i).1Z("1u-1o"))}if(1e.14.2Y){17 fk=1h.1l(".1C-2U");1t(i=0;i<fk.1b;i++)1e.fk.1Q(fk[i])}}1e.5t=1f;17 fl=2g.ml.5h;1e.2V=[];17 fm=fl;17 7U=19.14.7U;17 a9=19.14.a9;if(19.14.4K&&1e.92)if(a9)fm=a9;1d if(7U&&fm.1L(7U)>=0&&fm.1L(7U+"#")<0)fm=fm.2W(7U)[0];17 9q,bF;if(!1e.4G){9q=$(1e.8L).1l(".1o-on-2O");if(9q.1b===0){9q=$(1e.8L).1l(".1o:2k(.36)");9q=9q.eq(9q.1b-1)}if(9q.1b>0)bF=9q[0].3H}if(1e.14.3e&&9q){1e.1n=1h.1Z("1u-1n")||1e.14.1n||"#"+9q.1Z("1u-1o");1e.bE[1e.1n]=9q.1Z("1u-1o")}1d 1e.1n=1h.1Z("1u-1n")||1e.14.1n||fm;if(bF){bF.1e=1e;bF.1n=1e.1n;if(1e.14.3e&&1e.14.2Y&&!bF.3Z)bF.3Z=1e.fk[1e.aZ.1L(bF.1h)];1e.4G=bF;9q[0].3H=bF}if(1e.1n)1e.2V.1Q(1e.1n);17 2u=1g,2I=1g,3V={},4t,4G=[],5C=[],h9,4h,mn=1f,5X,cE=[],71=[],fo,fp,9r,b0,2Y,cF,el;1e.7g=1a(e){if(!mn||!1e.14.h0||2u||19.9s||!1e.5t)1c;2I=1g;2u=1f;4t=1m;3V.x=e.1S==="4y"?e.3m[0].38:e.38;3V.y=e.1S==="4y"?e.3m[0].2N:e.2N;5X=(1P 2x).3E();2Y=1e.14.2Y&&1h.1l(".1C-2U").1b>1};1e.72=1a(e){if(!2u)1c;17 38=e.1S==="57"?e.3m[0].38:e.38;17 2N=e.1S==="57"?e.3m[0].2N:e.2N;if(1r 4t==="1m")4t=!!(4t||1A.3o(2N-3V.y)>1A.3o(38-3V.x));if(4t||e.FM||19.FN){2u=1g;1c}if(!2I){17 b1=1g;h9=1h.3q();17 1X=$(e.1X);17 2D=1X.1v("2D")?1X:1X.1M(".2D");if(2D.1b>0){if(!19.3r&&2D.1l(".2D-3F-1G").1b>0)b1=1f;if(19.3r&&2D.1l(".2D-3F-1Y").1b>0)b1=1f}4G=1X.is(".1o")?1X:1X.1M(".1o");if(4G.1v("no-dJ"))b1=1f;5C=1h.1l(".1o-on-1G:2k(.36)");17 mo=3V.x-1h.5D().1G>1e.14.h1;if(19.3r)mo=3V.x<1h.5D().1G-1h[0].7x+h9-1e.14.h1;1d mo=3V.x-1h.5D().1G>1e.14.h1;if(mo)b1=1f;if(5C.1b===0||4G.1b===0)b1=1f;if(b1){2u=1g;1c}if(1e.14.jw&&!19.27.5M){cF=4G.1l(".dJ-1o-4b");if(cF.1b===0){cF=$(\'<1j 1q="dJ-1o-4b"></1j>\');4G.3h(cF)}}if(2Y){cE=1h.1l(".1C-on-2O:2k(.36)");71=1h.1l(".1C-on-1G:2k(.36)");fo=cE.1l(".1G, .2O, .1Y, .9t, .xX");fp=71.1l(".1G, .2O, .1Y, .9t, .xX");if(19.14.9o){9r=cE.1l(".1G.3f .3z .2P");b0=71.1l(".1G.3f .3z .2P")}}if($(".1y-1k.1k-in").1b>0)19.5i($(".1y-1k.1k-in"))}e.mp=1f;2I=1f;e.42();17 6h=19.3r?-1:1;4h=(38-3V.x-1e.14.mf)*6h;if(4h<0)4h=0;17 7h=4h/h9;17 af={7h:7h,4G:4G[0],5C:5C[0],cE:cE[0],71:71[0]};if(1e.14.xY)1e.14.xY(af);1h.25("FO dJ:65",af);17 mq=4h*6h;17 mr=(4h/5-h9/5)*6h;if(19.27.ha===1){mq=1A.7i(mq);mr=1A.7i(mr)}4G.1N("2b("+mq+"px,0,0)");if(1e.14.jw&&!19.27.5M)cF[0].3A.5j=1-1*7h;5C.1N("2b("+mr+"px,0,0)");if(1e.14.mg)5C[0].3A.5j=.9+.1*7h;if(2Y){17 i;1t(i=0;i<fo.1b;i++){el=$(fo[i]);if(!el.is(".9t.3f"))el[0].3A.5j=1-7h*1.3;if(el[0].8i.1L("3f")>=0){17 jA=7h*el[0].ag;if(19.27.ha===1)jA=1A.7i(jA);el.1N("2b("+jA+"px,0,0)");if(19.14.9o)if(el[0].8i.1L("1G")>=0&&9r.1b>0)9r.1N("2b("+-jA+"px,0,0)")}}1t(i=0;i<fp.1b;i++){el=$(fp[i]);if(!el.is(".9t.3f"))el[0].3A.5j=7h*1.3-.3;if(el[0].8i.1L("3f")>=0){17 jB=el[0].7W*(1-7h);if(19.27.ha===1)jB=1A.7i(jB);el.1N("2b("+jB+"px,0,0)");if(19.14.9o)if(el[0].8i.1L("1G")>=0&&b0.1b>0)b0.1N("2b("+-jB+"px,0,0)")}}}};1e.73=1a(e){if(!2u||!2I){2u=1g;2I=1g;1c}2u=1g;2I=1g;if(4h===0){$([4G[0],5C[0]]).1N("").1W({5j:"",xZ:""});if(2Y){fo.1N("").1W({5j:""});fp.1N("").1W({5j:""});if(9r&&9r.1b>0)9r.1N("");if(b0&&9r.1b>0)b0.1N("")}1c}17 6D=(1P 2x).3E()-5X;17 hb=1g;if(6D<4u&&4h>10||6D>=4u&&4h>h9/2){4G.1K("1o-on-2O").1w("1o-on-1Y");5C.1K("1o-on-1G").1w("1o-on-2O");if(2Y){cE.1K("1C-on-2O").1w("1C-on-1Y");71.1K("1C-on-1G").1w("1C-on-2O")}hb=1f}$([4G[0],5C[0]]).1N("").1W({5j:"",xZ:""}).1w("1o-66");if(2Y){fo.1W({5j:""}).2r(1a(){17 1F=hb?1i.ag:0;17 3f=$(1i);3f.1N("2b("+1F+"px,0,0)");if(19.14.9o)if(3f.1v("1G")&&9r.1b>0)9r.1w("1o-66").1N("2b("+ -1F+"px,0,0)")}).1w("1o-66");fp.1N("").1W({5j:""}).2r(1a(){17 1F=hb?0:1i.7W;17 3f=$(1i);3f.1N("2b("+1F+"px,0,0)");if(19.14.9o)if(3f.1v("1G")&&b0.1b>0)b0.1w("1o-66").1N("2b("+-1F+"px,0,0)")}).1w("1o-66")}mn=1g;1e.5t=1g;17 af={4G:4G[0],5C:5C[0],cE:cE[0],71:71[0]};if(hb){17 1n=1e.2V[1e.2V.1b-2];1e.1n=1n;19.jC("8M",1e,{1s:4G[0],1n:1n,4M:"2O",2d:5C,2o:4G,dK:1f});19.fq("8M",1e,{1s:5C[0],1n:1n,4M:"1G",2d:5C,2o:4G,dK:1f});if(1e.14.y0)1e.14.y0(af);1h.25("FP dJ:FQ",af)}1d{if(1e.14.y3)1e.14.y3(af);1h.25("FR dJ:FS",af)}4G.4A(1a(){$([4G[0],5C[0]]).1K("1o-66");if(2Y){fo.1K("1o-66").1W({5j:""});fp.1K("1o-66").1W({5j:""});if(9r&&9r.1b>0)9r.1K("1o-66");if(b0&&b0.1b>0)b0.1K("1o-66")}mn=1f;1e.5t=1f;if(hb){if(19.14.4K&&1e.92)2V.3z();19.jC("6E",1e,{1s:4G[0],1n:1n,4M:"2O",2d:5C,2o:4G,dK:1f});19.fq("6E",1e,{1s:5C[0],1n:1n,4M:"1G",2d:5C,2o:4G,dK:1f});19.22.jD(1e,4G,5C);if(1e.14.y4)1e.14.y4(af);1h.25("FT dJ:FU",af)}1d{if(1e.14.y5)1e.14.y5(af);1h.25("FV dJ:FW",af)}if(cF&&cF.1b>0)cF.43()})};1e.6s=1a(7X){17 2E=7X?"3B":"on";17 4W=19.3x.56==="4y"&&19.4a.4W?{dL:1f,74:1g}:1g;1h[2E](19.3x.56,1e.7g,4W);1h[2E](19.3x.65,1e.72);1h[2E](19.3x.6C,1e.73,4W)};1e.7Y=1a(){1e.6s(1f)};if(1e.14.h0&&!19.14.2m)1e.6s();if(1e.14.1R)1e.14.1R=1e.14.1R.31(/[^a-zA-Z]/g,"");19.5L.1Q(1e);if(1e.92){19.b2=1e;19.5L.92=1e}1d if(1e.14.1R){19[1e.14.1R+"h7"]=1e;19.5L[1e.14.1R]=1e}1e.22={58:1a(1p){1c 19.22.58(1e,1p)},3z:1a(1p){1c 19.22.3z(1e,1p)},jE:1a(1p){1p=1p||{};if(1r 1p==="3l"){17 1n=1p;1p={};if(1n&&1n.1L("#")===0&&1e.14.3e)1p.2v=1n.2W("#")[1];1d 1p.1n=1n}1c 19.22.58(1e,1p)},hc:1a(1B){1c 19.22.58(1e,{1B:1B})},r7:1a(1n){1c 19.22.58(1e,{1n:1n,5Y:1f})},r8:1a(1B){1c 19.22.58(1e,{1B:1B,5Y:1f})},r9:1a(1n){1c 19.22.58(1e,{1n:1n,93:1f,5Y:1f})},ra:1a(1B){1c 19.22.58(1e,{1B:1B,93:1f,5Y:1f})},rb:1a(){17 1p={1n:1e.1n,5Y:1f,ah:1f};if(1p.1n&&1p.1n.1L("#")===0)if(1e.14.3e&&1e.bE[1p.1n]){1p.2v=1e.bE[1p.1n];1p.1n=1m;4P 1p.1n}1d if(1e.ac[1p.1n]){1p.1B=1e.ac[1p.1n];1p.1n=1m;4P 1p.1n}1c 19.22.58(1e,1p)},jF:1a(){17 1p={1n:1e.2V[1e.2V.1b-2],5Y:1f,93:1f,ah:1f};if(1p.1n&&1p.1n.1L("#")===0&&1e.14.3e&&1e.bE[1p.1n]){1p.2v=1e.bE[1p.1n];1p.1n=1m;4P 1p.1n}1c 19.22.58(1e,1p)}};1e.jE=1e.22.jE;1e.hc=1e.22.hc;1e.r7=1e.22.r7;1e.r8=1e.22.r8;1e.r9=1e.22.r9;1e.ra=1e.22.ra;1e.rb=1e.22.rb;1e.jF=1e.22.jF;1e.3z=1e.22.3z;1e.cG=1a(2e){1c 19.cG(1h.1l(".1C"),2e)};1e.jG=1a(2e){1c 19.jG(1h.1l(".1C"),2e)};1e.ai=1a(2e){1c 19.ai(1h.1l(".3j"),2e)};1e.fr=1a(2e){1c 19.fr(1h.1l(".3j"),2e)};if(19.14.4K&&19.14.xn&&1e.92){17 cH;17 jH=fl.2W(7U)[1];if(a9)cH=fl.2W(19.14.a9+7U)[1];1d if(7U&&fl.1L(7U)>=0&&fl.1L(7U+"#")<0)cH=jH;17 hd=19.14.me?1g:1m;17 b3=2V.4X;if(cH)if(cH.1L("#")>=0&&1e.14.3e&&b3&&b3.2v&&"dM"in b3)19.22.58(1e,{2v:b3.2v,1n:b3.1n,3w:hd,4K:1g});1d if(cH.1L("#")>=0&&1e.14.3e&&1e.mk.1L(cH)>=0)19.22.58(1e,{2v:cH.31("#",""),3w:hd,4K:1g});1d 19.22.58(1e,{1n:cH,3w:hd,4K:1g});1d if(1e.14.3e&&fl.1L(7U+"#")>=0)if(b3&&b3.2v&&"dM"in b3)19.22.58(1e,{2v:b3.2v,1n:b3.1n,3w:hd,4K:1g});1d if(7U&&jH.1L("#")===0)if(1e.mk.1L(jH))19.22.58(1e,{2v:jH.31("#",""),3w:hd,4K:1g})}1e.5N=1a(){1e.7Y();if(1e.92){19.b2=29;4P 19.b2;19.5L.92=29;4P 19.5L.92}1d if(1e.14.1R){19[1e.14.1R+"h7"]=29;4P 19[1e.14.1R+"h7"];19.5L[1e.14.1R]=29;4P 19.5L[1e.14.1R]}1h.95("1u-1o");1h[0].70=29;4P 1h[0].70;19.5L.aj(19.5L.1L(1e),1);1t(17 2R in 1e)if(1e.jI(2R)){1e[2R]=29;4P 1e[2R]}1e=29};19.6U("y6",1e);1c 1e};19.y6=1a(2h,14){1c 1P h7(2h,14)};19.FX=1a(1I){17 mt=$(".2F.1k-in .1e");17 mu=$(".2a.1k-in .1e");17 mv=$(".21.2H .1e");17 rc=$(".5L");17 ak=rc.2K(".1e");if(ak.1b>1)if(ak.1v("4F"))ak=rc.2K(".1e.2H");1d;if(mt.1b>0&&mt[0].70)1c mt[0].70;if(mu.1b>0&&mu[0].70)1c mu[0].70;if(mv.1b>0&&mv[0].70)1c mv[0].70;if(ak.1b>0){if(ak.1b===1&&ak[0].70)1c ak[0].70;if(ak.1b>1){17 dN=[];1t(17 i=0;i<ak.1b;i++)if(ak[i].70)dN.1Q(ak[i].70);if(dN.1b>0&&1r 1I!=="1m")1c dN[1I];if(dN.1b>1)1c dN;if(dN.1b===1)1c dN[0];1c 1m}}1c 1m};19.mw=1a(1e,1s,6i,3Z){if(!6i&&3Z)6i=$(3Z).4i(".1C")[0];if(!3Z||3Z.rd&&1e&&!1e.14.3e)1c;17 dO={1h:6i,y7:3Z};17 2L=1s&&1s.3H;17 8j={1o:2L,1C:dO};if(3Z.rd&&(1e&&1e.14.3e||!1e&&$(6i).1M(".2a, .2F, .96-8k, .1k, .3F-1k, .1y-1k").1b>0)){19.y8(6i,3Z);19.6U("y9",8j);$(3Z).25("y9 1C:mx",8j);1c}3Z.rd=1f;19.6U("ya",dO,2L);$(3Z).25("ya 1C:jJ",8j);19.yb(6i,3Z);19.6U("yc",dO,2L);$(3Z).25("yc 1C:4N",8j)};19.cI=1a(1e,1s,6i,3Z){if(!6i&&3Z)6i=$(3Z).4i(".1C")[0];17 dO={1h:6i,y7:3Z};17 2L;if(1s)2L=1s.3H;17 8j={1o:2L,1C:dO};19.6U("re",dO,2L);$(3Z).25("re 1C:7y",8j);dO=29;2L=29};19.yb=1a(6i,3Z){if(19.jK)19.jK(3Z)};19.y8=1a(6i,3Z){};19.rf=1a(6i){6i=$(6i);17 4B=6i.1M("."+19.14.7V);17 1e;if(4B.1b===0)1c;if(6i.1M(".1C-9u").1b===0&&4B.1l(".1C-9u").1b===0)1c;1e=4B[0].70||1m;6i.1l(".1C-2U").2r(1a(){17 3Z=1i;17 1s;if($(3Z).1Z("1u-1o"))1s=4B.1l(\'.1o[1u-1o="\'+$(3Z).1Z("1u-1o")+\'"]\')[0];if(!1s){17 dI=4B.1l(".1o");if(dI.1b===1)1s=dI[0];1d 4B.1l(".1o").2r(1a(){if(1i.3H&&1i.3H.3Z===3Z)1s=1i})}19.mw(1e,1s,6i[0],3Z)})};19.9v=1a(4B){if(19.14.2m)1c;17 my=4B?$(4B).1l(".1C .1C-2U:2k(.36)"):$(".1C .1C-2U:2k(.36)");my.2r(1a(){17 n=$(1i);if(n.1v("36"))1c;17 1G=19.3r?n.1l(".1Y"):n.1l(".1G"),1Y=19.3r?n.1l(".1G"):n.1l(".1Y"),2O=n.1l(".2O"),9t=n.1l(".9t"),he=1G.1b===0,hf=1Y.1b===0,fs=he?0:1G.bG(1f),ft=hf?0:1Y.bG(1f),dP=2O.bG(1f),rg=n.9w(),al=n[0].5u-3P(rg.yd,10)-3P(rg.FY,10),mz=n.1v("1C-on-1G"),fu,3W;if(hf)fu=al-dP;if(he)fu=0;if(!he&&!hf)fu=(al-ft-dP+fs)/2;17 hg=(al-dP)/2;if(al-fs-ft>dP){if(hg<fs)hg=fs;if(hg+dP>al-ft)hg=al-ft-dP;3W=hg-fu}1d 3W=0;17 6h=19.3r?-1:1;if(2O.1v("3f")){2O[0].7W=-(fu+3W)*6h;2O[0].ag=(al-fu-3W-dP)*6h;if(mz){if(19.14.9o){17 rh=n.4i().1l(".1C-on-2O").1l(".1G.3f .3z .2P ~ 2B");if(rh.1b>0)2O[0].7W+=rh[0].am}2O.1N("2b("+2O[0].7W+"px, 0, 0)")}}if(!he&&1G.1v("3f")){if(19.3r){1G[0].7W=-(al-1G[0].5u)/2*6h;1G[0].ag=fs*6h}1d{1G[0].7W=-fs;1G[0].ag=(al-1G[0].5u)/2;if(19.14.9o&&1G.1l(".3z .2P").1b>0)1G[0].ag-=1G.1l(".3z .2P")[0].5u}if(mz)1G.1N("2b("+1G[0].7W+"px, 0, 0)")}if(!hf&&1Y.1v("3f")){if(19.3r){1Y[0].7W=-ft*6h;1Y[0].ag=(al-1Y[0].5u)/2*6h}1d{1Y[0].7W=-(al-1Y[0].5u)/2;1Y[0].ag=ft}if(mz)1Y.1N("2b("+1Y[0].7W+"px, 0, 0)")}if(9t.1b&&9t.1v("3f")){9t[0].7W=19.3r?9t[0].5u:-9t[0].5u;9t[0].ag=-9t[0].7W}17 mA=3W;if(19.3r&&he&&hf&&2O.1b>0)mA=-mA;2O.1W({1G:mA+"px"})})};19.cG=1a(6i,2e){if(1r 2e==="1m")2e=1f;$(6i).1w("1C-6V"+(!2e?" 2k-2e":""));1c 1f};19.jG=1a(6i,2e){if(1r 2e==="1m")2e=1f;17 1C=$(6i);if(2e){1C.1K("2k-2e");1C.1w("1C-hh").1K("1C-6V").4A(1a(){1C.1K("1C-hh")})}1d 1C.1K("1C-6V 1C-hh 2k-2e");1c 1f};19.ai=1a(mB,2e){if(1r 2e==="1m")2e=1f;$(mB).1w("3j-6V"+(!2e?" 2k-2e":""));1c 1f};19.fr=1a(mB,2e){if(1r 2e==="1m")2e=1f;17 3j=$(mB);if(2e){3j.1K("2k-2e");3j.1w("3j-hh").1K("3j-6V").4A(1a(){3j.1K("3j-hh"+(!2e?" 2k-2e":""))})}1d 3j.1K("3j-6V 3j-hh 2k-2e")};17 ye=1a(1h,14){17 4d={1z:29,jL:29,8N:29,8O:29,ri:".1x-2S",FZ:"",46:29,dQ:29,2s:29,an:".2G-an",hi:1g,dR:1g,yf:1f,yg:1f};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m"||14[3y]===29&&4d.jI(3y))14[3y]=4d[3y];17 s=1i;s.2m=19.14.2m;s.14=14;1h=$(1h);s.1h=1h;s.2H=1g;s.1z=s.14.1z?$(s.14.1z):s.1h.1l(\'1z[1S="b4"]\');s.jL=s.14.jL?$(s.14.jL):s.1h.1l(".2G-cC");s.8N=s.14.8N?$(s.14.8N):s.1h.1l(".2G-b1");s.8O=$(s.14.8O);s.mC=s.8O.1v("dS-3K");s.1s=s.1h.1M(".1o").eq(0);if(!s.14.2s)s.2s=s.1s.1b>0?s.1s.1l(".2G-2s"):$(".2G-2s");1d s.2s=$(s.14.2s);if(!s.14.46)s.46=s.1s.1b>0?s.1s.1l(".2G-46"):$(".2G-46");1d s.46=$(s.14.46);if(!s.14.dQ)s.dQ=s.1s.1b>0?s.1s.1l(".2G-2k-46"):$(".2G-2k-46");1d s.dQ=$(s.14.dQ);17 mD=19.3r?"cJ-1G":"cJ-1Y";17 rj=1g;s.yh=1a(){s.8N.2f(0).5O();s.8N.1W(mD,-s.8N[0].5u+"px");17 4j=s.8N[0].4j;s.8N.2f("");rj=1f};s.hj=1a(3s,67,8j){s.1h.25(3s,8j);if(s.8O.1b>0)s.8O.25(3s,8j);if(67&&s.14[67])s.14[67](s,8j)};s.fv=1a(e){1a rk(){if((s.8O.1b||s.14.hi)&&!s.1h.1v("2G-2H")&&!s.32)s.2s.1w("2G-2s-2H");s.1h.1w("2G-2H");if(s.8N.1b>0&&!s.2m){if(!rj)s.yh();s.8N.1W(mD,"8P")}s.hj("G0 2G:fv","G1");s.2H=1f}if(19.27.5s&&!19.14.2m&&e&&e.1S==="8l")4k(1a(){rk()},dT);1d rk()};s.dU=1a(){s.1z.5k("").25("6F");s.1h.1K("2G-2H 2G-2k-cK");if(s.8N.1b>0&&!s.2m)s.8N.1W(mD,-s.8N[0].5u+"px");if(s.8O.1b||s.14.hi)s.2s.1K("2G-2s-2H");s.2H=1g;1a rl(){s.1z.bH()}if(19.27.5s)4k(1a(){rl()},dT);1d rl();s.hj("G2 2G:dU","G3")};s.cC=1a(e){if(!s.32&&e&&$(e.1X).1v("2G-cC")){s.dU();1c}17 hk=s.1J;s.1z.5k("").25("6F").8l();s.hj("G4 2G:cC","G5",{hk:hk})};s.yi=1a(){4k(1a(){17 1J=s.1z.5k().68();if((s.8O.1b>0||s.14.hi)&&(s.14.ri||s.mC))s.b4(1J,1f)},0)};17 hk="";17 59;s.b4=1a(32,ap){if(32.68()===hk)1c;hk=32.68();if(!ap){if(!s.2H)s.fv();s.1z.5k(32)}s.32=s.1J=32;if(32.1b===0){s.1h.1K("2G-2k-cK");if(s.8O.1b&&s.1h.1v("2G-2H"))s.2s.1w("2G-2s-2H")}1d{s.1h.1w("2G-2k-cK");if(s.8O.1b&&s.1h.1v("2G-2H"))s.2s.1K("2G-2s-2H")}if(s.14.hi){s.hj("b4 2G:b4","rm",{32:32});1c}17 dV=[],mE;if(s.mC){59=s.8O[0].hl;if(32.68()===""){59.yj();s.dQ.6t();s.46.5O();1c}mE=s.14.dR?$.dR(32):32;if(59.14.yk)dV=59.14.yk(mE,59.23)||[];1d if(59.14.rn)1t(17 i=0;i<59.23.1b;i++)if(59.14.rn(mE,i,59.14.23[i]))dV.1Q(i)}1d{17 5v;if(s.14.dR)5v=$.dR(32.68().5P()).2W(" ");1d 5v=32.68().5P().2W(" ");s.8O.1l("li").1K("6V-by-2G").2r(1a(1I,el){el=$(el);17 jM=[];el.1l(s.14.ri).2r(1a(){17 fw=$(1i).28().68().5P();if(s.14.dR)fw=$.dR(fw);jM.1Q(fw)});jM=jM.76(" ");17 ro=0;1t(17 i=0;i<5v.1b;i++)if(jM.1L(5v[i])>=0)ro++;if(ro!==5v.1b&&!(s.14.an&&el.is(s.14.an)))el.1w("6V-by-2G");1d dV.1Q(el[0])});if(s.14.yf)s.8O.1l(".1x-9x, .3K-9y-2S").2r(1a(){17 2S=$(1i);17 rp=2S.jN("li");17 6t=1f;1t(17 i=0;i<rp.1b;i++){17 mF=$(rp[i]);if(mF.1v("3K-9y-2S")||mF.1v("1x-9x"))aq;if(!mF.1v("6V-by-2G"))6t=1g}17 an=s.14.an&&2S.is(s.14.an);if(6t&&!an)2S.1w("6V-by-2G");1d 2S.1K("6V-by-2G")});if(s.14.yg)s.8O.1l(".3K-9y").2r(1a(){17 9y=$(1i);17 an=s.14.an&&9y.is(s.14.an);17 yl=9y.1l("li:2k(.6V-by-2G)");if(yl.1b===0&&!an)9y.1w("6V-by-2G");1d 9y.1K("6V-by-2G")})}s.hj("b4 2G:b4","rm",{32:32,dV:dV});if(dV.1b===0){s.dQ.5O();s.46.6t()}1d{s.dQ.6t();s.46.5O()}if(s.mC)59.ym(dV)};1a mG(e){e.42()}s.6s=1a(5N){17 3i=5N?"3B":"on";s.1h[3i]("8m",mG);if(!s.2m)s.8N[3i]("3Q",s.dU);s.2s[3i]("3Q",s.dU);s.1z[3i]("8l",s.fv);s.1z[3i]("6F dW jO jP",s.yi);s.jL[3i]("3Q",s.cC)};s.7Y=1a(){s.6s(1f)};s.4N=1a(){s.6s()};s.5N=1a(){if(!s)1c;s.7Y();s=29};s.4N();s.1h[0].G6=s;1c s};19.2G=1a(1h,14){1c 1P ye(1h,14)};19.jK=1a(1h){1h=$(1h);17 2G=1h.1v("2G")?1h:1h.1l(".2G");if(2G.1b===0)1c;if(!2G.1v("2G-4N"))1c;17 sb=19.2G(2G,2G.4H());1a rq(){if(sb)sb.5N()}if(1h.1v("1o"))1h.7z("9z",rq);1d if(1h.1v("1C-2U"))1h.7z("re",rq)};17 yn=1a(1h,14){17 4d={3C:29,jQ:29};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m"||14[3y]===29)14[3y]=4d[3y];17 m=1i;m.14=14;m.1h=$(1h);if(m.1h.1b===0)1c;m.3C=m.14.3C?$(m.14.3C):m.1h.1l("3C");m.1s=m.1h.1M(".1o").eq(0);m.2i=m.1s.1l(".1o-1B");m.G7=3P(m.2i.1W("6W-4I"));m.rr=m.1h[0].3X;m.rs=m.3C[0].3X;m.yo=1a(){m.3C.1W({"2c":""});17 2c=m.3C[0].3X;17 3W=2c-m.3C[0].rt;17 5l=m.3C[0].5l;if(5l+3W>2c){17 hm=5l+3W;17 hn=m.rr+(hm-m.rs);17 ru=m.14.jQ||m.1h.1M(".1e")[0].3X-88;if(hn>ru){hn=3P(ru,10);hm=hn-m.rr+m.rs}m.3C.1W("2c",hm+"px");m.1h.1W("2c",hn+"px");17 yp=m.2i[0].2C===m.2i[0].5l-m.2i[0].3X;if(m.2i.1b>0){m.2i.1W("6W-4I",hn+"px");if(m.2i.1l(".5Q-1P-fx").1b===0&&yp)m.2i.2C(m.2i[0].5l-m.2i[0].3X)}}1d if(m.2i.1b>0){m.1h.1W({"2c":"","4I":""});m.2i.1W({"6W-4I":""})}};m.cC=1a(){m.3C.5k("").25("6F")};m.1J=1a(1J){if(1r 1J==="1m")1c m.3C.5k();1d m.3C.5k(1J).25("6F")};m.ho=1m;m.jR=1a(e){5m(m.ho);m.ho=4k(1a(){m.yo()},0)};1a mG(e){e.42()}m.6s=1a(5N){17 3i=5N?"3B":"on";m.1h[3i]("8m",mG);m.3C[3i]("6F dW jO jP rv rw",m.jR)};m.7Y=1a(){m.6s(1f)};m.4N=1a(){m.6s()};m.5N=1a(){m.7Y();m=29};m.4N();m.1h[0].G8=m;1c m};19.bI=1a(1h,14){1c 1P yn(1h,14)};19.rx=1a(1s){1s=$(1s);17 bI=1s.1v("bI")?1s:1s.1l(".bI");if(bI.1b===0)1c;if(!bI.1v("bI-4N"))1c;17 mb=19.bI(bI,bI.4H());1a 9z(){mb.5N();1s.3B("1o:7y",9z)}if(1s.1v("1o"))1s.on("1o:7y",9z)};19.5B=[];19.yq=1a(1n){17 1I=1g;1t(17 i=0;i<19.5B.1b;i++)if(19.5B[i].1n===1n)1I=i;if(1I!==1g)19.5B.aj(1I,1)};19.26=1g;19.fy=1a(1n,1e,ah,34){17 b5=1n;if(19.14.xi&&1n.1L("?")>=0)b5=1n.2W("?")[0];if(19.14.5B&&!ah&&1n.1L("G9")<0&&19.14.xh.1L(b5)<0)1t(17 i=0;i<19.5B.1b;i++)if(19.5B[i].1n===b5)if((1P 2x).3E()-19.5B[i].6j<19.14.xj){34(19.5B[i].1B);1c 1g}19.26=$.7A({1n:1n,3i:"hp",mH:19.14.Ga,8n:1a(26){if(26.8o>=yr&&26.8o<4u||26.8o===0){if(19.14.5B){19.yq(b5);19.5B.1Q({1n:b5,6j:(1P 2x).3E(),1B:26.hq})}34(26.hq,1g)}1d 34(26.hq,1f);if(19.14.ys)19.14.ys(26)},69:1a(26){34(26.hq,1f);if(19.14.yt)19.14.yt(26)}});if(1e)1e.26=19.26;1c 19.26};19.fz={};19.mI=1a(67,2v,34){if(2v&&2v.2W(" ").1b>1){17 ry=2v.2W(" ");17 cL=[];1t(17 i=0;i<ry.1b;i++)cL.1Q(19.mI(67,ry[i],34));cL.43=1a(){1t(17 i=0;i<cL.1b;i++)cL[i].43()};cL.25=1a(){1t(17 i=0;i<cL.1b;i++)cL[i].25()};1c cL}17 9A=19.fz[67][2v];if(!9A)9A=19.fz[67][2v]=[];19.fz[67][2v].1Q(34);1c{43:1a(){17 mJ;1t(17 i=0;i<9A.1b;i++)if(9A[i].ar()===34.ar())mJ=i;if(1r mJ!=="1m")9A.aj(mJ,1)},25:34}};1a yu(67){17 yv=67.31(/^./,1a(5Z){1c 5Z.hr()});19["mI"+yv]=1a(2v,34){1c 19.mI(67,2v,34)}}17 mK="yw 4N mx yx dX 3z jD yz".2W(" ");1t(17 i=0;i<mK.1b;i++){19.fz[mK[i]]={};yu(mK[i])}19.cM=1a(67,2v,2L){17 mL=19.fz[67]["*"];if(mL)1t(17 j=0;j<mL.1b;j++)mL[j](2L);17 9A=19.fz[67][2v];if(!9A||9A.1b===0)1c;1t(17 i=0;i<9A.1b;i++)9A[i](2L)};19.mM=1a(1e,14){17 1s=14.1s;if(!1s)1c;if(1s.rz&&1e&&!1e.14.3e)1c;17 at=14.32;if(!at)if(14.1n&&14.1n.1L("?")>0)at=$.hs(14.1n||"");1d if(1s.3H&&1s.3H.32)at=1s.3H.32;1d at={};17 2L={1h:1s,1n:14.1n,32:at,1R:$(1s).1Z("1u-1o"),1e:1e,5a:14.4M,2T:14.2T,3Z:14.3Z,9B:14.9B};if(14.9B&&!14.9B.3Z&&14.mN)14.9B.3Z=14.mN;if(1s.rz&&(1e&&1e.14.3e||!1e&&$(1s).1M(".2a, .2F, .96-8k, .1k, .3F-1k, .1y-1k").1b>0)){19.yA(1s);19.6U("yB",2L);if(19.14.yC)19.14.yC(19,2L);19.cM("mx",2L.1R,2L);$(2L.1h).25("yB 1o:mx",{1o:2L});1c}1s.rz=1f;1s.3H=2L;if(1e&&!14.b6&&!14.93){$(1e.1h).1Z("1u-1o",2L.1R);1e.4G=2L}19.6U("yD",2L);if(19.14.jS)19.14.jS(19,2L);19.cM("yw",2L.1R,2L);$(2L.1h).25("yD 1o:jJ",{1o:2L});19.mO(1s);19.6U("fA",2L);if(19.14.yE)19.14.yE(19,2L);19.cM("4N",2L.1R,2L);$(2L.1h).25("fA 1o:4N",{1o:2L})};19.dY=1a(1e,1s,4M){17 cN;if(!1s)1c;if(1s.3H)cN=1s.3H.2T;17 2L={1h:1s,1R:$(1s).1Z("1u-1o"),1e:1e,1n:1s.3H&&1s.3H.1n,32:1s.3H&&1s.3H.32,3Z:1s.3H&&1s.3H.3Z,5a:4M,2T:cN};19.6U("9z",2L);if(19.14.jT)19.14.jT(19,2L);19.cM("yz",2L.1R,2L);$(2L.1h).25("9z 1o:7y",{1o:2L});2L=29};19.jC=1a(34,1e,14){17 1s=14.1s;17 cN;if(!1s)1c;if(1s.3H)cN=1s.3H.2T;17 2L={1h:1s,1R:$(1s).1Z("1u-1o"),1n:1s.3H&&1s.3H.1n,32:1s.3H&&1s.3H.32,1e:1e,5a:14.4M,2T:cN,3Z:1s.3H&&1s.3H.3Z,dK:14.dK};if(34==="6E"){19.6U("yF",2L);if(19.14.yG)19.14.yG(19,2L);19.cM("jD",2L.1R,2L);$(1s).25("yF 1o:Gb",{1o:2L})}if(34==="8M"){19.6U("rA",2L);if(19.14.yH)19.14.yH(19,2L);19.cM("3z",2L.1R,2L);$(2L.1h).25("rA 1o:3z",{1o:2L})}};19.fq=1a(34,1e,14){17 1s=14.1s;17 cN;if(!1s)1c;if(1s.3H)cN=1s.3H.2T;17 at=14.32;if(!at)if(14.1n&&14.1n.1L("?")>0)at=$.hs(14.1n||"");1d if(1s.3H&&1s.3H.32)at=1s.3H.32;1d at={};17 2L={1h:1s,1n:14.1n,32:at,1R:$(1s).1Z("1u-1o"),1e:1e,5a:14.4M,2T:cN,dK:14.dK,3Z:1s.3H&&1s.3H.3Z,9B:14.9B};17 2o=14.2o,2d=14.2d;1s.3H=2L;if(34==="6E"){19.6U("yI",2L);if(19.14.yJ)19.14.yJ(19,2L);19.cM("dX",2L.1R,2L);$(2L.1h).25("yI 1o:yK",{1o:2L})}if(34==="8M"){$(1e.1h).1Z("1u-1o",2L.1R);if(1e)1e.4G=2L;if(2d.1v("no-1C")&&!2o.1v("no-1C"))1e.cG();if(!2d.1v("no-1C")&&(2o.1v("no-1C")||2o.1v("no-1C-by-4Y")))1e.jG();if(2d.1v("no-3j")&&!2o.1v("no-3j"))1e.ai();if(!2d.1v("no-3j")&&(2o.1v("no-3j")||2o.1v("no-3j-by-4Y")))1e.fr();17 cO;if(2d.1v("no-3t")&&!2o.1v("no-3t")){cO=$(1e.1h).1l(".3t");if(cO.1b===0)cO=$(1e.1h).1M("."+19.14.fi).1l(".3t");19.ai(cO)}if(!2d.1v("no-3t")&&(2o.1v("no-3t")||2o.1v("no-3t-by-4Y"))){cO=$(1e.1h).1l(".3t");if(cO.1b===0)cO=$(1e.1h).1M("."+19.14.fi).1l(".3t");19.fr(cO)}2o.1K("no-1C-by-4Y no-3j-by-4Y");19.6U("yL",2L);if(19.14.yM)19.14.yM(19,2L);19.cM("yx",2L.1R,2L);$(2L.1h).25("yL 1o:Gc",{1o:2L})}};19.mO=1a(1s){1s=$(1s);if(1s.1b===0)1c;if(19.9v)19.9v(1s.1M("."+19.14.7V)[0]);if(19.rB)19.rB(1s);if(19.rC)19.rC(1s);if(19.mP)19.mP(1s);if(19.rD)19.rD(1s);if(19.rE)19.rE(1s);if(19.rF)19.rF(1s);if(19.jK)19.jK(1s);if(19.rx)19.rx(1s);if(19.rG)19.rG(1s);if(19.rH)19.rH(1s);if(19.rI)19.rI(1s);if(19.rJ)19.rJ(1s);if(19.14.2m&&19.rK)19.rK(1s);if(19.14.2m&&19.rL)19.rL(1s);if(19.14.2m&&19.mQ)19.mQ(1s)};19.yA=1a(1s){1s=$(1s);if(1s.1b===0)1c;if(19.9v)19.9v(1s.1M("."+19.14.7V)[0]);if(19.rM)19.rM(1s);if(19.yN)19.yN(1s)};19.rN=1a(1s){1s=$(1s);17 4B=1s.1M("."+19.14.7V);if(4B.1b===0)1c;17 1e=4B[0].70||1m;17 1n=1e&&1e.1n?1e.1n:1m;if(4B&&1s.1Z("1u-1o"))4B.1Z("1u-1o",1s.1Z("1u-1o"));19.mM(1e,{1s:1s[0],1n:1n,4M:"2O"})};19.22={7B:1a(el){if(19.14.xl||19.14.xm)4k(1a(){$(el).43()},0);1d $(el).43()},jU:".2a, .1k, .2F, .3F-1k, .1y-1k, .96-8k",9C:2g.9D("1j"),ht:1a(2h,1h,1e,rO){1h=$(1h);if(rO)2h=2h+":2k(.36)";17 46=1h.1l(2h).dZ(1a(1I,el){1c $(el).1M(19.22.jU).1b===0});if(46.1b>1){if(1r 1e.2h==="3l")46=1h.1l(1e.2h+" "+2h);if(46.1b>1)46=1h.1l("."+19.14.r0+" "+2h)}if(46.1b===1)1c 46;1d{if(!rO)46=19.22.ht(2h,1h,1e,1f);if(46&&46.1b===1)1c 46;if(46&&46.1b>1)1c $(46[0]);1d 1c 1m}},3w:1a(rP,rQ,4z){17 bJ="1o-on-2O 1o-on-1Y 1o-on-1G";if(4z==="to-1G"){rP.1K(bJ).1w("1o-5a-2O-to-1G");rQ.1K(bJ).1w("1o-5a-1Y-to-2O")}if(4z==="to-1Y"){rP.1K(bJ).1w("1o-5a-1G-to-2O");rQ.1K(bJ).1w("1o-5a-2O-to-1Y")}},rR:1a(3a,3R,yO){$(3a).1l(".3f").2r(1a(){17 3f=$(1i);17 rS=yO==="1Y"?1i.ag:1i.7W;if(19.14.9o)if(3f.1v("1G")&&3f.1l(".3z .2P").1b>0)3f.1l(".3z .2P").1N("2b("+-rS+"px,0,0)");3f.1N("2b("+rS+"px,0,0)")})},rT:1a(jV,fB,4z){17 bJ="1C-on-1Y 1C-on-2O 1C-on-1G";if(4z==="to-1G"){fB.1K(bJ).1w("1C-5a-1Y-to-2O");fB.1l(".3f").2r(1a(){17 3f=$(1i);3f.1N("2b(8P,0,0)");if(19.14.9o)if(3f.1v("1G")&&3f.1l(".3z .2P").1b>0)3f.1l(".3z .2P").1N("2b(8P,0,0)")});jV.1K(bJ).1w("1C-5a-2O-to-1G");jV.1l(".3f").2r(1a(){17 3f=$(1i);17 mR;if(19.14.9o){if(3f.1v("2O")&&fB.1l(".3f.1G .3z .2P").1b>0){mR=fB.1l(".3f.1G .3z 2B");if(mR.1b>0)1i.7W+=mR[0].am}if(3f.1v("1G")&&3f.1l(".3z .2P").1b>0)3f.1l(".3z .2P").1N("2b("+-1i.7W+"px,0,0)")}3f.1N("2b("+1i.7W+"px,0,0)")})}if(4z==="to-1Y"){jV.1K(bJ).1w("1C-5a-1G-to-2O");jV.1l(".3f").2r(1a(){17 3f=$(1i);3f.1N("2b(8P,0,0)");if(19.14.9o)if(3f.1v("1G")&&3f.1l(".3z .2P").1b>0)3f.1l(".3z .2P").1N("2b(8P,0,0)")});fB.1K(bJ).1w("1C-5a-2O-to-1Y");fB.1l(".3f").2r(1a(){17 3f=$(1i);if(19.14.9o)if(3f.1v("1G")&&3f.1l(".3z .2P").1b>0)3f.1l(".3z .2P").1N("2b("+-1i.ag+"px,0,0)");3f.1N("2b("+1i.ag+"px,0,0)")})}},b7:1a(1e,1B,1n,2X){19.6U("Gd",1e,1B,1n,2X);1B=19.yP("b7",1B);if(1e&&1e.14&&1e.14.b7){1B=1e.14.b7(1B,1n,2X);if(1r 1B!=="1m")2X(1B)}1d if(19.14.b7){1B=19.14.b7(1B,1n,2X);if(1r 1B!=="1m")2X(1B)}1d 2X(1B)},fC:1a(1e,1p,rU){if(rU)1p.rU=1f;19.6U("Ge",1e,1p);if(19.14.fC&&19.14.fC(1e,1p)===1g||1e&&1e.14.fC&&1e.14.fC(1e,1p)===1g)1c 1f;1d 1c 1g},rV:1a(1e,1p){17 1n=1p.1n,1B=1p.1B,mS=1p.1B,2T=1p.2T,97=1p.97,3g=1p.3g;17 6G,e0;if(1r 1B==="3l")if(1n)if(19.yQ[1n]&&!1p.ah)e0=t7.5B[1n];1d{e0=t7.5R(1B);t7.5B[1n]=e0}1d e0=t7.5R(1B);1d if(3g)e0=3g;if(2T){6G=2T;if(2T&&1n)1e.bD[1n]=2T}1d{if(97)if(97.1L(".")>=0){17 jW=97.2W(".");17 mT=t7.1u[jW[0]];1t(17 i=1;i<jW.1b;i++)if(jW[i])mT=mT[jW[i]];6G=mT}1d 6G=t7.1u[97];if(!6G&&1n)6G=t7.1u["1n:"+1n];if(!6G&&1r 1B==="3l"&&!3g){17 rW=1B.5Z(/(1u-1o=["\'][^"^\']*["\'])/);if(rW){17 1o=rW[0].2W("1u-1o=")[1].31(/[\'"]/g,"");if(1o)6G=t7.1u["1o:"+1o]}}if(!6G&&3g&&t7.ab)1t(17 rX in t7.ab)if(t7.ab[rX]===3g)6G=t7.1u[rX];if(!6G&&1n&&1n in 1e.bD)6G=1e.bD[1n];if(!6G)6G={}}if(e0&&6G){if(1r 6G==="1a")6G=6G();if(1n){17 32=$.hs(1n);6G.yR={};1t(17 6a in 32)6G.yR[6a]=32[6a]}jX{mS=e0(6G)}jY(e){mS="";if(1U.rY&&1U.rY.69)rY.69(e)}}1c{1B:mS,2T:6G}}};19.22.rZ=1a(1e,1p){19.6U("Gf",1e,1p);17 1n=1p.1n,1B=1p.1B,aw={1B:1p.1B},3g=1p.3g,2v=1p.2v,4B=$(1e.1h),8L=$(1e.8L),3w=1p.3w,2d,2o,5n,i,3R,3a,1C,2Y,fD,mU=1r 1n==="1m"&&1B||3g,4K=1p.4K,6k=1p.6k;if(1r 3w==="1m")3w=1e.14.3w;if(19.14.mj&&1r 1B==="3l"||3g){aw=19.22.rV(1e,1p);if(aw.1B&&!1B)1B=aw.1B}19.22.9C.77="";if(!2v&&!6k)if(1r 1B==="3l"||1n&&1r 1B==="3l")19.22.9C.77=aw.1B;1d if("1b"in 1B&&1B.1b>1)1t(17 ci=0;ci<1B.1b;ci++)$(19.22.9C).3h(1B[ci]);1d $(19.22.9C).3h(1B);fD=1p.5Y&&(1p.93?"1G":"2O");if(2v)2d=8L.1l(\'.1o[1u-1o="\'+2v+\'"]\');1d if(6k)2d=$(6k);1d 2d=19.22.ht(".1o",19.22.9C,1e);if(!2d||2d.1b===0||2v&&1e.4G&&1e.4G.1R===2v){1e.5t=1f;1c}2d.1w(1p.5Y?"1o-on-"+fD:"1o-on-1Y");5n=8L.2K(".1o:2k(.36)");if(6k)5n=5n.dZ(1a(1I,1o){if(1o!==6k)1c 1o});if(1p.5Y&&1p.93&&5n.1b===1){1e.5t=1f;1c}if(1p.5Y)2o=5n.eq(5n.1b-1);1d{if(5n.1b>1){1t(i=0;i<5n.1b-2;i++)if(!1e.14.3e){19.dY(1e,5n[i],"1G");19.22.7B(5n[i])}1d $(5n[i]).1w("36");if(!1e.14.3e){19.dY(1e,5n[i],"1G");19.22.7B(5n[i])}1d $(5n[i]).1w("36")}2o=8L.2K(".1o:2k(.36)")}if(6k&&2o.1b>1)2o=2o.dZ(1a(1I,1o){if(1o!==6k)1c 1o});if(1e.14.3e||6k)2d.1K("36");if(1e.14.2Y){2Y=1f;if(2v)3a=4B.1l(\'.1C-2U[1u-1o="\'+2v+\'"]\');1d 3a=19.22.ht(".1C-2U",19.22.9C,1e);if(!3a||3a.1b===0){3a=2d.1l(".1C-2U");if(!3a||3a.1b===0)2Y=1g;1d if(3a.4i(".1C").1b>0)3a.yS(2d)}if(2Y&&2d.1l(".1C").1b>0)19.22.7B(2d.1l(".1C").dZ(1a(1I,el){1c $(el).1M(19.22.jU).1b===0}));1C=4B.2K(".1C");if(1p.5Y)3R=1C.1l(".1C-2U:2k(.36):fE-fF");1d{3R=1C.1l(".1C-2U:2k(.36)");if(3R.1b>0){1t(i=0;i<3R.1b-1;i++)if(!1e.14.3e){19.cI(1e,5n[i],1C[0],3R[i]);19.22.7B(3R[i])}1d $(3R[i]).1w("36");if(!3a&&3R.1b===1)if(!1e.14.3e){19.cI(1e,5n[0],1C[0],3R[0]);19.22.7B(3R[0])}1d $(3R[0]).1w("36");3R=1C.1l(".1C-2U:2k(.36)")}}}if(2Y){3a.1w(1p.5Y?"1C-on-"+fD:"1C-on-1Y");if(1e.14.3e||6k)3a.1K("36");2d[0].ax=3a[0];3a[0].yT=2d[0]}if(!1n){17 s0=2v||2d.1Z("1u-1o");if(mU)1n="#"+19.14.xk.31(/{{1R}}/g,s0).31(/{{1I}}/g,1e.2V.1b-(1p.5Y?1:0));1d 1n="#"+s0;if(!1e.14.3e)1e.ac[1n]=1B;if(1e.14.3e&&2v)1e.bE[1n]=2v}1d if(1n&&6k)1e.ad[1n]={1o:2d,my:3a};if(19.14.4K&&!1p.93&&1e.92){if(1r 4K==="1m")4K=1f;17 a9=19.14.a9||"";17 3i=1p.5Y?"mV":"4K";if(4K)if(!mU&&!2v)2V[3i]({1n:1n,dM:19.5L.1L(1e)},"",a9+19.14.7U+1n);1d if(mU&&1B)2V[3i]({1B:1r 1B==="3l"?1B:"",1n:1n,dM:19.5L.1L(1e)},"",a9+19.14.7U+1n);1d if(2v)2V[3i]({2v:2v,1n:1n,dM:19.5L.1L(1e)},"",a9+19.14.7U+1n)}1e.1n=1n;if(1p.5Y){17 6H=1e.2V[1e.2V.1b-(1p.93?2:1)];if(6H&&6H.1L("#")===0&&6H in 1e.ac&&6H!==1n&&1e.2V.1L(6H)===-1){1e.ac[6H]=29;4P 1e.ac[6H]}1d if(6H&&6H in 1e.ad&&6H!==1n&&(1e.2V.1L(6H)===-1||1e.2V.1L(6H)===1e.2V.1b-1)){1e.ad[6H]=29;4P 1e.ad[6H]}if(6H&&6H in 1e.bD&&6H!==1n&&(1e.2V.1L(6H)===-1||1e.2V.1L(6H)===1e.2V.1b-1)){1e.bD[6H]=29;4P 1e.bD[6H]}1e.2V[1e.2V.1b-(1p.93?2:1)]=1n}1d 1e.2V.1Q(1n);17 mW=1g;if(1e.14.ju){17 hu=1e.2V;17 b5=1n;if(1e.14.mc){hu=[];b5=1n.2W("?")[0];1t(i=0;i<1e.2V.1b;i++)hu.1Q(1e.2V[i].2W("?")[0])}if(hu.1L(b5)!==hu.Gg(b5)){1e.2V=1e.2V.bK(0,hu.1L(b5));1e.2V.1Q(1n);mW=1f}}if(1p.93){2o=2o.3k(".1o");2d.61(2o);if(2Y){3R=3R.3k(".1C-2U");3a.az(3R)}}1d{8L.3h(2d[0]);if(2Y)1C.3h(3a[0])}if(1p.5Y)if(1e.14.3e&&1e.aZ.1L(2o[0])>=0){2o.1w("36");if(2Y)3R.1w("36")}1d{19.dY(1e,2o[0],fD);if(2Y)19.cI(1e,2o[0],1C[0],3R[0]);19.22.7B(2o);if(2Y)19.22.7B(3R)}19.mM(1e,{1s:2d[0],1n:1n,4M:1p.5Y?fD:"1Y",3Z:2Y?3a&&3a[0]:1m,mN:2Y?3R&&3R[0]:1m,2T:aw.2T||1p.2T,32:1p.32,9B:2o&&2o.1b&&2o[0].3H,5Y:1p.5Y,93:1p.93});if(2Y)19.mw(1e,2d[0],1C[0],3a[0],1n,1p.5Y?fD:"1Y");if(1p.5Y){1e.5t=1f;if(mW)1e.jF();1c}if(2Y&&3w)19.22.rR(3a,3R,"1Y");17 4j=2d[0].4j;19.fq("8M",1e,{1s:2d[0],1n:1n,4M:"1Y",2o:2o,2d:2d,32:1p.32,9B:2o&&2o.1b&&2o[0].3H});1a dX(){1e.5t=1f;2d.1K("1o-5a-1Y-to-2O 1o-on-1Y 1o-on-1G").1w("1o-on-2O");2o.1K("1o-5a-2O-to-1G 1o-on-2O 1o-on-1Y").1w("1o-on-1G");if(2Y){3a.1K("1C-5a-1Y-to-2O 1C-on-1G 1C-on-1Y").1w("1C-on-2O");3R.1K("1C-5a-2O-to-1G 1C-on-2O 1C-on-1Y").1w("1C-on-1G")}19.fq("6E",1e,{1s:2d[0],1n:1n,4M:"1Y",2o:2o,2d:2d,32:1p.32,9B:2o&&2o.1b&&2o[0].3H});if(19.14.4K&&1e.92)19.s1();if(!(1e.14.h0||1e.14.jt))if(1e.14.3e){2o.1w("36");if(2Y)3R.1w("36")}1d if(!(1n.1L("#")===0&&2d.1Z("1u-1o").1L("6I-2l-")===0)){19.dY(1e,2o[0],"1G");if(2Y)19.cI(1e,2o[0],1C[0],3R[0]);19.22.7B(2o);if(2Y)19.22.7B(3R)}if(1e.14.ju&&mW)1e.jF()}if(3w){if(19.14.2m&&19.14.r3)4k(1a(){19.22.3w(2o,2d,"to-1G",1e)},19.14.r3);1d 19.22.3w(2o,2d,"to-1G",1e);if(2Y)4k(1a(){19.22.rT(3R,3a,"to-1G",1e)},0);2d.jZ(1a(){dX()})}1d{if(2Y)3a.1l(".3f, .3f .3z .2P").1N("");dX()}};19.22.58=1a(1e,1p){1p=1p||{};if(19.22.fC(1e,1p))1c 1g;17 1n=1p.1n;17 1B=1p.1B;17 2v=1p.2v;17 6k=1p.6k;if(2v)if(2v.1L("?")>0){1p.32=$.hs(2v);1p.2v=2v=2v.2W("?")[0]}17 3g=1p.3g;if(1e.14.xW===1f)1p.5Y=1f;if(!1e.5t)1c 1g;if(1n&&1e.1n===1n&&!1p.5Y&&!1e.14.md)1c 1g;1e.5t=1g;if(19.26&&1e.26&&1e.26===19.26){19.26.s2();19.26=1g}1a aA(1B){19.22.b7(1e,1B,1n,1a(1B){1p.1B=1B;19.22.rZ(1e,1p)})}if(1B||2v||6k){aA(1B);1c}1d if(3g){19.22.rZ(1e,1p);1c}if(!1p.1n||1p.1n==="#"){1e.5t=1f;1c}19.fy(1p.1n,1e,1p.ah,1a(1B,69){if(69){1e.5t=1f;1c}aA(1B)})};19.22.s3=1a(1e,1p){1p=1p||{};19.6U("Gh",1e,1p);17 1n=1p.1n,1B=1p.1B,aw={1B:1p.1B},3g=1p.3g,3w=1p.3w,b6=1p.b6,4K=1p.4K,ah=1p.ah,7Z=1p.7Z,2v=1p.2v,6k=1p.6k;17 4B=$(1e.1h),8L=$(1e.8L),5n=8L.2K(".1o:2k(.36)"),2o,2d,3R,3a,1C,bL,2Y,mX=1f;if(1r 3w==="1m")3w=1e.14.3w;if(19.14.mj&&1r 1B==="3l"||3g){aw=19.22.rV(1e,1p);if(aw.1B&&!1B)1B=aw.1B}1a dX(){19.jC("6E",1e,{1s:2o[0],1n:1n,4M:"2O",2o:2o,2d:2d});19.fq("6E",1e,{1s:2d[0],1n:1n,4M:"1G",2o:2o,2d:2d,32:1p.32,9B:2o&&2o.1b&&2o[0].3H});19.22.jD(1e,2o[0],2d[0])}1a yU(){19.jC("8M",1e,{1s:2o[0],1n:1n,4M:"2O",2o:2o,2d:2d});19.fq("8M",1e,{1s:2d[0],1n:1n,4M:"1G",2o:2o,2d:2d,32:1p.32,9B:2o&&2o.1b&&2o[0].3H});if(3w){19.22.3w(2d,2o,"to-1Y",1e);if(2Y)4k(1a(){19.22.rT(3a,3R,"to-1Y",1e)},0);2d.jZ(1a(){dX()})}1d{if(2Y)3a.1l(".3f, .3f .3z .2P").1N("");dX()}}1a s4(){19.22.9C.77="";if(1r 1B==="3l"||1n&&1r 1B==="3l")19.22.9C.77=aw.1B;1d if("1b"in 1B&&1B.1b>1)1t(17 ci=0;ci<1B.1b;ci++)$(19.22.9C).3h(1B[ci]);1d $(19.22.9C).3h(1B);if(6k)2d=$(6k);1d 2d=19.22.ht(".1o",19.22.9C,1e);if(1e.14.2Y)3a=19.22.ht(".1C-2U",19.22.9C,1e)}1a e1(){if(!2d||2d.1b===0){1e.5t=1f;1c}if(1e.14.2Y&&1r 2Y==="1m")if(!3a||3a.1b===0)2Y=1g;1d 2Y=1f;2d.1w("1o-on-1G").1K("36");if(2Y){1C=4B.2K(".1C");bL=1C.1l(".1C-2U:2k(.36)");3a.1w("1C-on-1G").1K("36")}if(7Z){17 9E,bM;9E=$(5n[5n.1b-2]);if(2Y)bM=$(9E[0]&&9E[0].ax||bL[bL.1b-2]);if(1e.14.3e&&1e.aZ.1L(9E[0])>=0){if(9E.1b&&9E[0]!==2d[0])9E.1w("36");if(2Y&&bM.1b&&bM[0]!==3a[0])bM.1w("36")}1d{17 mY=2Y&&bM.1b;if(9E.1b){19.dY(1e,9E[0],"1Y");if(mY)19.cI(1e,9E[0],1C[0],bM[0]);19.22.7B(9E);if(mY)19.22.7B(bM)}1d if(mY){19.cI(1e,9E[0],1C[0],bM[0]);19.22.7B(bM)}}5n=8L.2K(".1o:2k(.36)");if(2Y)bL=4B.2K(".1C").1l(".1C-2U:2k(.36)");if(1e.2V.1L(1n)>=0)1e.2V=1e.2V.bK(0,1e.2V.1L(1n)+2);1d if(1e.2V[[1e.2V.1b-2]])1e.2V[1e.2V.1b-2]=1n;1d 1e.2V.k0(1n)}2o=$(5n[5n.1b-1]);if(1e.14.3e)if(2o[0]===2d[0]){2o=8L.2K(".1o.1o-on-2O");if(2o.1b===0&&1e.4G)2o=$(1e.4G.1h)}if(2Y&&!3R){3R=$(bL[bL.1b-1]);if(1e.14.3e){if(3R[0]===3a[0])3R=1C.2K(".1C-2U.1C-on-2O:2k(.36)");if(3R.1b===0)3R=1C.2K(\'.1C-2U[1u-1o="\'+2o.1Z("1u-1o")+\'"]\')}if(3R.1b===0||3a[0]===3R[0])2Y=1g}if(2Y){if(mX)3a.61(3R);3a[0].yT=2d[0];2d[0].ax=3a[0]}if(mX)2d.61(2o);19.mM(1e,{1s:2d[0],1n:1n,4M:"1G",3Z:2Y?3a[0]:1m,mN:2Y?3R&&3R[0]:1m,2T:aw.2T,32:1p.32,9B:2o&&2o.1b&&2o[0].3H,b6:b6});if(2Y)19.mw(1e,2d[0],1C[0],3a[0],1n,"1Y");if(2Y&&3a.1v("1C-on-1G")&&3w)19.22.rR(3a,3R,"1G");if(b6){1e.5t=1f;1c}1e.1n=1n;17 4j=2d[0].4j;yU();if(19.14.4K&&1e.92){if(1r 4K==="1m")4K=1f;if(!b6&&2V.4X&&4K)2V.3z()}1c}if(5n.1b>1&&!7Z){if(b6){1e.5t=1f;1c}1e.1n=1e.2V[1e.2V.1b-2];1n=1e.1n;2d=$(5n[5n.1b-2]);2o=$(5n[5n.1b-1]);if(1e.14.2Y){2Y=1f;bL=4B.2K(".1C").1l(".1C-2U:2k(.36)");3a=$(bL[0]);3R=$(bL[1]);if(3a.1b===0||3R.1b===0||3R[0]===3a[0])2Y=1g}mX=1g;e1();1c}if(!7Z){if(!b6){1e.1n=1e.2V[1e.2V.1b-2];1n=1e.1n}if(1B){s4();e1();1c}1d if(2v){2d=$(4B).1l(\'.1o[1u-1o="\'+2v+\'"]\');if(1e.14.2Y){3a=$(4B).2K(".1C").1l(\'.1C-2U[1u-1o="\'+2v+\'"]\');if(3a.1b===0&&2d[0].ax)3a=$(2d[0].ax);if(3a.1b===0&&2d[0].3H)3a=$(2d[0].3H.3Z)}e1();1c}1d if(1n&&1n in 1e.ad){2d=1e.ad[1n].1o;3a=1e.ad[1n].my;e1();1c}1d{1e.5t=1f;1c}}1d{if(1n&&1n===1e.1n||2v&&1e.4G&&1e.4G.1R===2v){1e.5t=1f;1c}if(1B){s4();e1();1c}1d if(2v&&1e.14.3e){if(2v)1n="#"+2v;2d=$(4B).1l(\'.1o[1u-1o="\'+2v+\'"]\');if(2d[0].3H&&2d[0].3H.1n)1n=2d[0].3H.1n;if(1e.14.2Y){3a=$(4B).2K(".1C").1l(\'.1C-2U[1u-1o="\'+2v+\'"]\');if(3a.1b===0&&2d[0].ax)3a=$(2d[0].ax);if(3a.1b===0&&2d[0].3H)3a=$(2d[0].3H.3Z)}e1();1c}1d if(6k&&1n){2d=$(6k);if(1e.14.2Y){3a=2d.1l(".1C-2U").dZ(1a(1I,el){1c $(el).1M(19.22.jU).1b===0});if(3a.1b>0){2d.98(3a);19.22.7B(2d.1l(".1C").dZ(1a(1I,el){1c $(el).1M(19.22.jU).1b===0}))}}e1();1c}1d{1e.5t=1f;1c}}};19.22.3z=1a(1e,1p){1p=1p||{};if(19.22.fC(1e,1p,1f))1c 1g;17 1n=1p.1n;17 1B=1p.1B;17 2v=1p.2v;17 6k=1p.6k;if(2v)if(2v.1L("?")>0){1p.32=$.hs(2v);1p.2v=2v=2v.2W("?")[0]}17 7Z=1p.7Z;if(!1e.5t)1c 1g;1e.5t=1g;if(19.26&&1e.26&&1e.26===19.26){19.26.s2();19.26=1g}17 5n=$(1e.8L).1l(".1o:2k(.36)");1a aA(1B){19.22.b7(1e,1B,1n,1a(1B){1p.1B=1B;19.22.s3(1e,1p)})}if(5n.1b>1&&!7Z){19.22.s3(1e,1p);1c}if(!7Z){1n=1e.2V[1e.2V.1b-2]||1p.1n;if(!1p.1n)1p.1n=1n;if(!1n){1e.5t=1f;1c}if(1n.1L("#")===0&&1e.ac[1n]){aA(1e.ac[1n]);1c}1d if(1n.1L("#")===0&&1e.14.3e){if(!2v)1p.2v=1n.2W("#")[1];aA();1c}1d if(1n&&1n in 1e.ad)aA();1d if(1n.1L("#")!==0){19.fy(1p.1n,1e,1p.ah,1a(1B,69){if(69){1e.5t=1f;1c}aA(1B)});1c}}1d if(!1n&&1B){aA(1B);1c}1d if(!1n&&2v){if(2v)1n="#"+2v;aA();1c}1d if(1n&&6k){aA();1c}1d if(1n){19.fy(1p.1n,1e,1p.ah,1a(1B,69){if(69){1e.5t=1f;1c}aA(1B)});1c}1e.5t=1f;1c};19.22.jD=1a(1e,2o,2d){2o=$(2o);2d=$(2d);if(1e.14.3e&&1e.aZ.1L(2o[0])>=0)2o.1K("1o-5a-2O-to-1Y").1w("36");1d{19.dY(1e,2o[0],"1Y");19.22.7B(2o)}2d.1K("1o-5a-1G-to-2O 1o-on-1G").1w("1o-on-2O");1e.5t=1f;17 81=1e.2V.mZ();17 e2;if(1e.14.2Y){17 s5=$(1e.1h).2K(".1C").1l(".1C-2U:2k(.36)");17 k1=$(2o[0].ax||s5[1]);if(1e.14.3e&&1e.fk.1L(k1[0])>=0)k1.1K("1C-5a-2O-to-1Y").1w("36");1d{19.cI(1e,2o[0],1m,k1[0]);19.22.7B(k1)}e2=$(s5[0]).1K("1C-on-1G 1C-5a-1G-to-2O").1w("1C-on-2O")}if(1e.14.3e)$(1e.1h).1l(".1o.36").2r(1a(){17 1o=$(1i);17 s6=1o[0].3H&&1o[0].3H.1n;if(s6&&1e.2V.1L(s6)<0&&1e.aZ.1L(1i)<0){19.dY(1e,1o[0],"1Y");if(1o[0].ax&&1e.14.2Y)19.cI(1e,1o[0],1m,1o[0].ax);19.22.7B(1o);if(1o[0].ax&&1e.14.2Y)19.22.7B(1o[0].ax)}});if(!1e.14.3e&&81&&81.1L("#")>-1&&81 in 1e.ac&&1e.2V.1L(81)===-1){1e.ac[81]=29;4P 1e.ac[81]}if(81&&81 in 1e.ad&&1e.2V.1L(81)===-1){1e.ad[81]=29;4P 1e.ad[81]}if(81&&81 in 1e.bD&&1e.2V.1L(81)===-1){1e.bD[81]=29;4P 1e.bD[81]}if(19.14.4K&&1e.92)19.s1();if(1e.14.jt)if(1e.14.3e&&1e.2V.1b>1){17 k2=1e.2V[1e.2V.1b-2];17 5C;17 71;if(k2&&1e.bE[k2]){5C=$(1e.1h).1l(\'.1o[1u-1o="\'+1e.bE[k2]+\'"]\');if(5C.2X(".1o")[0]!==2d[0])5C.61(2d);if(e2){71=$(1e.1h).2K(".1C").1l(\'.1C-2U[1u-1o="\'+1e.bE[k2]+\'"]\');if(!71||71.1b===0)71=e2.3k(".1C-2U.36");if(71.2X(".1C-2U")[0]!==e2[0])71.61(e2)}}1d{5C=2d.3k(".1o.36");if(e2)71=e2.3k(".1C-2U.36")}if(5C&&5C.1b>0)5C.1K("36 1o-on-1Y 1o-on-2O").1w("1o-on-1G");if(71&&71.1b>0)71.1K("36 1C-on-1Y 1C-on-2O").1w("1C-on-1G")}1d 19.22.3z(1e,{b6:1f})};17 k3=2g.9D("1j");19.fh=[];19.yV=1a(){if(19.fh.1b)19.fh.n0()()};19.1k=1a(14){14=14||{};17 e3="";if(19.14.yW){if(!19.6B.1k)19.6B.1k=t7.5R(19.14.yW);e3=19.6B.1k(14)}1d{17 e4="";if(14.3D&&14.3D.1b>0)1t(17 i=0;i<14.3D.1b;i++)e4+=\'<2B 1q="1k-2M\'+(14.3D[i].9F?" 1k-2M-9F":"")+\'">\'+14.3D[i].28+"</2B>";17 yX=14.2S?\'<1j 1q="1k-2S">\'+14.2S+"</1j>":"";17 yY=14.28?\'<1j 1q="1k-28">\'+14.28+"</1j>":"";17 yZ=14.k4?14.k4:"";17 z0=!14.3D||14.3D.1b===0?"1k-no-3D":"";17 s7=14.s7?"1k-3D-Gi":"";17 z1=14.3D&&14.3D.1b>0?\'<1j 1q="1k-3D 1k-3D-\'+14.3D.1b+" "+s7+\'">\'+e4+"</1j>":"";e3=\'<1j 1q="1k \'+z0+" "+(14.e5||"")+\'"><1j 1q="1k-2U">\'+(yX+yY+yZ)+"</1j>"+z1+"</1j>"}k3.77=e3;17 1k=$(k3).2K();19.40.3h(1k[0]);1k.1l(".1k-2M").2r(1a(1I,el){$(el).on("3Q",1a(e){if(14.3D[1I].2j!==1g)19.5i(1k);if(14.3D[1I].78)14.3D[1I].78(1k,e);if(14.78)14.78(1k,1I)})});19.e6(1k);1c 1k[0]};19.Gj=1a(28,2S,7C){if(1r 2S==="1a"){7C=2p[1];2S=1m}1c 19.1k({28:28||"",2S:1r 2S==="1m"?19.14.h3:2S,3D:[{28:19.14.h2,9F:1f,78:7C}]})};19.k5=1a(28,2S,7C,8Q){if(1r 2S==="1a"){8Q=2p[2];7C=2p[1];2S=1m}1c 19.1k({28:28||"",2S:1r 2S==="1m"?19.14.h3:2S,3D:[{28:19.14.jx,78:8Q},{28:19.14.h2,9F:1f,78:7C}]})};19.Gk=1a(28,2S,7C,8Q){if(1r 2S==="1a"){8Q=2p[2];7C=2p[1];2S=1m}1c 19.1k({28:28||"",2S:1r 2S==="1m"?19.14.h3:2S,k4:\'<1j 1q="1z-cP"><1z 1S="28" 1q="1k-28-1z"></1j>\',3D:[{28:19.14.jx},{28:19.14.h2,9F:1f}],78:1a(1k,1I){if(1I===0&&8Q)8Q($(1k).1l(".1k-28-1z").5k());if(1I===1&&7C)7C($(1k).1l(".1k-28-1z").5k())}})};19.Gl=1a(28,2S,7C,8Q){if(1r 2S==="1a"){8Q=2p[2];7C=2p[1];2S=1m}1c 19.1k({28:28||"",2S:1r 2S==="1m"?19.14.h3:2S,k4:\'<1j 1q="1z-cP 1k-1z-z2"><1z 1S="28" 1R="1k-k6" bN="\'+19.14.xI+\'" 1q="1k-28-1z"></1j><1j 1q="1z-cP 1k-1z-z2"><1z 1S="99" 1R="1k-99" bN="\'+19.14.qZ+\'" 1q="1k-28-1z"></1j>\',3D:[{28:19.14.jx},{28:19.14.h2,9F:1f}],78:1a(1k,1I){17 k6=$(1k).1l(\'.1k-28-1z[1R="1k-k6"]\').5k();17 99=$(1k).1l(\'.1k-28-1z[1R="1k-99"]\').5k();if(1I===0&&8Q)8Q(k6,99);if(1I===1&&7C)7C(k6,99)}})};19.Gm=1a(28,2S,7C,8Q){if(1r 2S==="1a"){8Q=2p[2];7C=2p[1];2S=1m}1c 19.1k({28:28||"",2S:1r 2S==="1m"?19.14.h3:2S,k4:\'<1j 1q="1z-cP"><1z 1S="99" 1R="1k-99" bN="\'+19.14.qZ+\'" 1q="1k-28-1z"></1j>\',3D:[{28:19.14.jx},{28:19.14.h2,9F:1f}],78:1a(1k,1I){17 99=$(1k).1l(\'.1k-28-1z[1R="1k-99"]\').5k();if(1I===0&&8Q)8Q(99);if(1I===1&&7C)7C(99)}})};19.z3=1a(2S){1c 19.1k({2S:2S||19.14.xM,28:\'<1j 1q="41">\'+(19.14.2m?19.14.bB:"")+"</1j>",e5:"1k-41"})};19.z4=1a(){19.5i(".1k.1k-in")};19.Gn=1a(){if($(".41-hw-2s").1b>0)1c;19.40.3h(\'<1j 1q="41-hw-2s"></1j><1j 1q="41-hw-1k"><2B 1q="41 41-s8">\'+(19.14.2m?19.14.bB:"")+"</2B></1j>")};19.Gp=1a(){$(".41-hw-2s, .41-hw-1k").43()};19.3F=1a(1X,14,2e){17 6u=1g,1k,n1,hx;if(2p.1b===1||2p.1b===2&&1r 2p[1]==="n2"){14=2p[0];2e=2p[1]}1d if(19.27.5s){if(19.27.8R)6u=1f}1d if($(1U).3q()>=s9)6u=1f;if(1r 2e==="1m")2e=1f;14=14||[];if(14.1b>0&&!$.9a(14[0]))14=[14];17 e3;if(6u){17 z5=19.14.Gq||\'<1j 1q="2F 3F-2F">\'+\'<1j 1q="2F-2U">\'+"{{#2r 1i}}"+\'<1j 1q="3K-39">\'+"<ul>"+"{{#2r 1i}}"+"{{#if 55}}"+\'<li 1q="3F-2F-55 {{#if 4Q}}4Q-{{4Q}}{{/if}} {{#if 9F}}3F-2F-9F{{/if}}">{{28}}</li>\'+"{{1d}}"+\'<li><a 5h="#" 1q="1x-4x 3K-2M {{#if 4Q}}4Q-{{4Q}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if 9F}}3F-2F-9F{{/if}} {{#if 5w}}5w{{/if}}">{{28}}</a></li>\'+"{{/if}}"+"{{/2r}}"+"</ul>"+"</1j>"+"{{/2r}}"+"</1j>"+"</1j>";if(!19.6B.sa)19.6B.sa=t7.5R(z5);17 z6=19.6B.sa(14);1k=$(19.2F(z6,1X,1f,2e));n1=".3K-39 ul";hx=".3K-2M"}1d{if(19.14.z7){if(!19.6B.3F)19.6B.3F=t7.5R(19.14.z7);e3=19.6B.3F(14)}1d{17 e4="";1t(17 i=0;i<14.1b;i++)1t(17 j=0;j<14[i].1b;j++){if(j===0)e4+=\'<1j 1q="3F-1k-9y">\';17 2M=14[i][j];17 hy=2M.55?"3F-1k-55":"3F-1k-2M";if(2M.9F)hy+=" 3F-1k-2M-9F";if(2M.4Q)hy+=" 4Q-"+2M.4Q;if(2M.bg)hy+=" bg-"+2M.bg;if(2M.5w)hy+=" 5w";e4+=\'<1j 1q="\'+hy+\'">\'+2M.28+"</1j>";if(j===14[i].1b-1)e4+="</1j>"}e3=\'<1j 1q="3F-1k">\'+e4+"</1j>"}k3.77=e3;1k=$(k3).2K();19.40.3h(1k[0]);n1=".3F-1k-9y";hx=".3F-1k-2M"}17 z8=1k.1l(n1);z8.2r(1a(1I,el){17 z9=1I;$(el).2K().2r(1a(1I,el){17 za=1I;17 n3=14[z9][za];17 k7;if(!6u&&$(el).is(hx))k7=$(el);if(6u&&$(el).1l(hx).1b>0)k7=$(el).1l(hx);if(k7)k7.on("3Q",1a(e){if(n3.2j!==1g)19.5i(1k);if(n3.78)n3.78(1k,e)})})});if(!6u)19.e6(1k,2e);1c 1k[0]};19.2F=1a(1k,1X,7j,2e){if(1r 7j==="1m")7j=1f;if(1r 2e==="1m")2e=1f;if(1r 1k==="3l"&&1k.1L("<")>=0){17 e7=2g.9D("1j");e7.77=1k.68();if(e7.5b.1b>0){1k=e7.5b[0];if(7j)1k.cQ.9b("43-on-2j");19.40.3h(1k)}1d 1c 1g}1k=$(1k);1X=$(1X);if(1k.1b===0||1X.1b===0)1c 1g;if(1k.1M("5K").1b===0){if(7j)1k.1w("43-on-2j");19.40.3h(1k[0])}if(1k.1l(".2F-cR").1b===0&&!19.14.2m)1k.3h(\'<1j 1q="2F-cR"></1j>\');1k.5O();17 2m=19.14.2m;1a n4(){1k.1W({1G:"",2J:""});17 9c=1k.3q();17 8p=1k.2c();17 bO,aB=0,k8,k9;if(!2m){bO=1k.1l(".2F-cR");aB=bO.3q()/2;bO.1K("on-1G on-1Y on-2J on-4I").1W({1G:"",2J:""})}1d 1k.1K("2F-on-1G 2F-on-1Y 2F-on-2J 2F-on-4I").1W({1G:"",2J:""});17 hz=1X.bG();17 e8=1X.fG();17 79=1X.5D();17 sc=1X.1M(".1o");if(sc.1b>0)79.2J=79.2J-sc[0].2C;17 cS=$(1U).2c();17 cT=$(1U).3q();17 7k=0;17 6J=0;17 3W=0;17 9G=2m?"4I":"2J";if(2m){if(8p<cS-79.2J-e8){9G="4I";7k=79.2J}1d if(8p<79.2J){7k=79.2J-8p+e8;9G="2J"}1d{9G="4I";7k=79.2J}if(7k<=0)7k=8;1d if(7k+8p>=cS)7k=cS-8p-8;6J=79.1G;if(6J+9c>=cT-8)6J=79.1G+hz-9c-8;if(6J<8)6J=8;if(9G==="2J")1k.1w("2F-on-2J");if(9G==="4I")1k.1w("2F-on-4I");if(1X.1v("9p-2M-to-2F")&&!1k.1v("1k-in")){1k.1w("2F-9p-2M");17 hA=6J+9c/2-(79.1G+hz/2),hB=7k+8p/2-(79.2J+e8/2);1X.1w("9p-2M-to-2F-in").1N("2b("+hA+"px, "+hB+"px,0)").4A(1a(e){if(!1X.1v("9p-2M-to-2F-in"))1c;1X.1w("9p-2M-to-2F-3L").1N("2b("+hA+"px, "+hB+"px,0) 3L("+9c/hz+", "+8p/e8+")")});1k.7z("2F:2j",1a(){1X.1K("9p-2M-to-2F-in 9p-2M-to-2F-3L").1w("9p-2M-to-2F-6v").1N("").4A(1a(e){1X.1K("9p-2M-to-2F-6v")})});1k.7z("2F:5E",1a(){1k.1K("2F-9p-2M")})}}1d{if(8p+aB<79.2J)7k=79.2J-8p-aB;1d if(8p+aB<cS-79.2J-e8){9G="4I";7k=79.2J+e8+aB}1d{9G="zb";7k=e8/2+79.2J-8p/2;3W=7k;if(7k<=0)7k=5;1d if(7k+8p>=cS)7k=cS-8p-5;3W=3W-7k}if(9G==="2J"||9G==="4I"){6J=hz/2+79.1G-9c/2;3W=6J;if(6J<5)6J=5;if(6J+9c>cT)6J=cT-9c-5;if(9G==="2J")bO.1w("on-4I");if(9G==="4I")bO.1w("on-2J");3W=3W-6J;k8=9c/2-aB+3W;k8=1A.4C(1A.4Z(k8,9c-aB*2-13),13);bO.1W({1G:k8+"px"})}1d if(9G==="zb"){6J=79.1G-9c-aB;bO.1w("on-1Y");if(6J<5||6J+9c>cT){if(6J<5)6J=79.1G+hz+aB;if(6J+9c>cT)6J=cT-9c-5;bO.1K("on-1Y").1w("on-1G")}k9=8p/2-aB+3W;k9=1A.4C(1A.4Z(k9,8p-aB*2-13),13);bO.1W({2J:k9+"px"})}}1k.1W({2J:7k+"px",1G:6J+"px"})}n4();$(1U).on("8q",n4);1k.on("2F:2j",1a(){$(1U).3B("8q",n4)});19.e6(1k,2e);1c 1k[0]};19.2a=1a(1k,7j,2e){if(1r 7j==="1m")7j=1f;if(1r 2e==="1m")2e=1f;if(1r 1k==="3l"&&1k.1L("<")>=0){17 e7=2g.9D("1j");e7.77=1k.68();if(e7.5b.1b>0){1k=e7.5b[0];if(7j)1k.cQ.9b("43-on-2j");19.40.3h(1k)}1d 1c 1g}1k=$(1k);if(1k.1b===0)1c 1g;if(1k.1M("5K").1b===0){if(7j)1k.1w("43-on-2j");19.40.3h(1k[0])}1k.5O();19.e6(1k,2e);1c 1k[0]};19.ka=1a(1k,7j,2e){if(1r 7j==="1m")7j=1f;if(1r 2e==="1m")2e=1f;if(1r 1k==="3l"&&1k.1L("<")>=0){1k=$(1k);if(1k.1b>0){if(7j)1k.1w("43-on-2j");19.40.3h(1k[0])}1d 1c 1g}1k=$(1k);if(1k.1b===0)1c 1g;if(1k.1M("5K").1b===0){if(7j)1k.1w("43-on-2j");19.40.3h(1k[0])}if($(".1y-1k.1k-in:2k(.1k-6v)").1b>0&&!1k.1v("1k-in"))19.5i(".1y-1k.1k-in:2k(.1k-6v)");1k.5O();19.e6(1k,2e);1c 1k[0]};19.e9=1a(1k,2e){if(!1k)1k=".96-8k";if(1r 2e==="1m")2e=1f;1k=$(1k);if(1k.1b===0)1c 1g;if($(".96-8k.1k-in:2k(.1k-6v)").1b>0&&!1k.1v("1k-in"))19.5i(".96-8k.1k-in:2k(.1k-6v)");1k.5O();19.e6(1k,2e);1c 1k[0]};19.e6=1a(1k,2e){if(1r 2e==="1m")2e=1f;1k=$(1k);1k[2e?"1K":"1w"]("2k-2e");17 kb=1k.1v("1k");17 9d=1k.1v("2F");17 aC=1k.1v("2a");17 ea=1k.1v("96-8k");17 8r=1k.1v("1y-1k");17 n5=1k.1v("3F-1k");17 6w="1k";if(9d)6w="2F";if(aC)6w="2a";if(ea)6w="zc";if(8r)6w="1y";if(n5)6w="3F";if($(".1k.1k-in:2k(.1k-6v)").1b&&19.14.fh&&kb){19.fh.1Q(1a(){19.e6(1k)});1c}if(1f===1k.1u("f7-1k-sd"))1c;1k.1u("f7-1k-sd",1f);17 se=1k.4i();if(19.14.xN&&!se.is(19.40)){19.40.3h(1k);1k.7z(6w+":5E",1a(){se.3h(1k)})}1k.7z(6w+":2j",1a(){1k.zd("f7-1k-sd")});if(kb){1k.5O();1k.1W({ze:-1A.7i(1k.fG()/2)+"px"})}17 2s;if(!ea&&!8r){if($(".1k-2s").1b===0&&!aC)19.40.3h(\'<1j 1q="1k-2s"></1j>\');if($(".2a-2s").1b===0&&aC)19.40.3h(\'<1j 1q="2a-2s"></1j>\');2s=aC?$(".2a-2s"):$(".1k-2s")}if(19.14.2m&&8r)if(1k.1v("1y-2A")){if($(".1y-1k-2s").1b===0&&!aC)19.40.3h(\'<1j 1q="1y-1k-2s"></1j>\');2s=$(".1y-1k-2s")}if(2s)2s[2e?"1K":"1w"]("2k-2e");17 4j=1k[0].4j;1k.25("3S "+6w+":3S");if(8r)$("5K").1w("7w-1y-1k");if(1k.1l("."+19.14.7V).1b>0){1k.1l(".1o").2r(1a(){19.rN(1i)});1k.1l(".1C").2r(1a(){19.rf(1i)})}if(!ea&&!8r)2s.1w("1k-2s-cU");if(19.14.2m&&8r&&2s)2s.1w("1k-2s-cU");if(2e)1k.1K("1k-6v").1w("1k-in").4A(1a(e){if(1k.1v("1k-6v"))1k.25("5E "+6w+":5E");1d 1k.25("2q "+6w+":2q")});1d{1k.1K("1k-6v").1w("1k-in");1k.25("2q "+6w+":2q")}1c 1f};19.5i=1a(1k,2e){if(1r 2e==="1m")2e=1f;1k=$(1k||".1k-in");if(1r 1k!=="1m"&&1k.1b===0)1c;1k[2e?"1K":"1w"]("2k-2e");17 kb=1k.1v("1k");17 9d=1k.1v("2F");17 aC=1k.1v("2a");17 ea=1k.1v("96-8k");17 8r=1k.1v("1y-1k");17 n5=1k.1v("3F-1k");17 6w="1k";if(9d)6w="2F";if(aC)6w="2a";if(ea)6w="zc";if(8r)6w="1y";if(n5)6w="3F";17 7j=1k.1v("43-on-2j");17 sf=1k.1v("hC-on-2j");17 2s;if(aC)2s=$(".2a-2s");1d if(8r&&19.14.2m)2s=$(".1y-1k-2s");1d if(!8r)2s=$(".1k-2s");if(aC){if(1k.1b===$(".2a.1k-in").1b)2s.1K("1k-2s-cU")}1d if(2s&&2s.1b>0)2s.1K("1k-2s-cU");if(2s)2s[2e?"1K":"1w"]("2k-2e");1k.25("2j "+6w+":2j");if(8r){$("5K").1K("7w-1y-1k");$("5K").1w("1y-1k-eb")}if(!(9d&&!19.14.2m)){if(2e)1k.1K("1k-in").1w("1k-6v").4A(1a(e){if(1k.1v("1k-6v"))1k.25("5E "+6w+":5E");1d{1k.25("2q "+6w+":2q");if(9d)1c}if(8r)$("5K").1K("1y-1k-eb");if(aC||ea||8r||9d){1k.1K("1k-6v").6t();if(7j&&1k.1b>0)1k.43()}1d if(!sf)1k.43()});1d{1k.25("5E "+6w+":5E");1k.1K("1k-in 1k-6v");if(8r)$("5K").1K("1y-1k-eb");if(aC||ea||8r||9d){1k.6t();if(7j&&1k.1b>0)1k.43()}1d if(!sf)1k.43()}if(kb&&19.14.fh)19.yV()}1d{1k.1K("1k-in 1k-6v 2k-2e").25("5E "+6w+":5E").6t();if(7j)1k.43()}1c 1f};19.sg=1a(1h,2z,4c){1h=$(1h||19.40);if(1h.1b===0)1c;if(2z)2z=1A.4Z(1A.4C(2z,0),5c);17 3I;if(1h.1v("3I"))3I=1h;1d 3I=1h.2K(".3I");if(3I.1b===0||3I.1v("3I-ec"))1c;17 4j=3I[0].4j;3I.2K("2B").1N("2b("+(-5c+2z)+"%,0,0)");if(1r 4c!=="1m")3I.2K("2B").2f(4c);1d 3I.2K("2B").2f("");1c 3I[0]};19.Gr=1a(1h,2z,4Q){if(1r 1h==="Gs"){1h=19.40;2z=2p[0];4Q=2p[1]}if(2z&&1r 2z==="3l"&&7D(2z)!==2z*1){4Q=2z;2z=1m}1h=$(1h||19.40);if(1h.1b===0)1c;17 3I;if(1h.1v("3I"))3I=1h;1d{3I=1h.2K(".3I:2k(.3I-6v), .3I-ec:2k(.3I-6v)");if(3I.1b===0){if(1r 2z!=="1m")3I=$(\'<2B 1q="3I 3I-in\'+(4Q?" 4Q-"+4Q:"")+\'"><2B></2B></2B>\');1d 3I=$(\'<2B 1q="3I-ec 3I-in\'+(4Q?" 4Q-"+4Q:"")+\'"></2B>\');1h.3h(3I)}}if(2z)19.sg(1h,2z);1c 3I[0]};19.Gt=1a(1h){1h=$(1h||19.40);if(1h.1b===0)1c;17 3I;if(1h.1v("3I"))3I=1h;1d 3I=1h.2K(".3I, .3I-ec");if(3I.1b===0||!3I.1v("3I-in")||3I.1v("3I-6v"))1c;3I.1K("3I-in").1w("3I-6v").jZ(1a(){3I.43();3I=29});1c};19.rI=1a(1s){1s=$(1s);1s.1l(".3I").2r(1a(){17 p=$(1i);if(p.2K("2B").1b===0)p.3h("<2B></2B>");if(p.1Z("1u-2z"))19.sg(p,p.1Z("1u-2z"))})};19.8s=1f;19.cV=1a(hD,2e){if(1r 2e==="1m")2e=1f;if(!19.8s)1c 1g;17 21=$(".21-"+hD);if(21.1b===0||21.1v("2H"))1c 1g;19.ed();19.8s=1g;17 51=21.1v("21-bP")?"bP":"n6";21[2e?"1K":"1w"]("2k-2e");21.1W({7l:"39"}).1w("2H");21.25("3S 21:3S");if(19.14.2m){$(".21-2s")[2e?"1K":"1w"]("2k-2e");$(".21-2s").5O()}if(21.1l("."+19.14.7V).1b>0)if(19.9v)19.9v(21.1l("."+19.14.7V)[0]);17 4j=21[0].4j;17 kc=51==="bP"?$("."+19.14.fi):21;1a sh(){kc.4A(1a(e){if($(e.1X).is(kc)){if(21.1v("2H"))21.25("2q 21:2q");1d 21.25("5E 21:5E");if(19.14.2m)$(".21-2s").1W({7l:""});19.8s=1f}1d sh()})}if(2e)sh();1d{21.25("2q 21:2q");if(19.14.2m)$(".21-2s").1W({7l:""});19.8s=1f}$("5K").1w("7w-21-"+hD+"-"+51);1c 1f};19.ed=1a(2e){if(1r 2e==="1m")2e=1f;17 9e=$(".21.2H");if(9e.1b===0)1c 1g;17 51=9e.1v("21-bP")?"bP":"n6";17 hD=9e.1v("21-1G")?"1G":"1Y";9e[2e?"1K":"1w"]("2k-2e");9e.1K("2H");if(19.14.2m)$(".21-2s").1K("2k-2e");17 kc=51==="bP"?$("."+19.14.fi):9e;9e.25("2j 21:2j");19.8s=1g;if(2e){kc.4A(1a(){if(9e.1v("2H"))1c;9e.1W({7l:""});9e.25("5E 21:5E");$("5K").1K("21-eb");19.8s=1f});$("5K").1w("21-eb").1K("7w-21-"+hD+"-"+51)}1d{9e.1W({7l:""});9e.25("5E 21:5E");9e.1K("2k-2e");$("5K").1K("7w-21-"+hD+"-"+51);19.8s=1f}};19.si=1a(){17 21,5F;if(19.14.fe){21=$(".21.21-"+19.14.fe);5F=19.14.fe;if(21.1b===0&&5F!=="zf")1c}1d if(19.14.fg){if($(".21").1b===0)1c}1d 1c;17 hE=$(".21-2s");17 2u,2I,4t,3V={},5X,4h,1F,sj,2q,7E,51,4z;17 5L=$("."+19.14.fi);1a 7g(e){if(!19.8s||!19.14.fe&&!19.14.fg||2u)1c;if($(".1k-in, .3u-3b-in").1b>0)1c;if(!(19.14.qX||19.14.fg))if($(".21.2H").1b>0&&!21.1v("2H"))1c;if(e.1X&&e.1X.8t.5P()==="1z"&&e.1X.1S==="4R")1c;if($(e.1X).fH(".7m-hF-fI").1b>0)1c;3V.x=e.1S==="4y"?e.3m[0].38:e.38;3V.y=e.1S==="4y"?e.3m[0].2N:e.2N;if(19.14.qX||19.14.fg){if($(".21.2H").1b>0)5F=$(".21.2H").1v("21-1G")?"1G":"1Y";1d{if(19.14.fg)1c;5F=19.14.fe}if(!5F)1c}21=$(".21.21-"+5F);2q=21.1v("2H");if(19.14.ff&&!2q){if(5F==="1G")if(3V.x>19.14.ff)1c;if(5F==="1Y")if(3V.x<1U.kd-19.14.ff)1c}2I=1g;2u=1f;4t=1m;5X=(1P 2x).3E();4z=1m}1a 72(e){if(!2u)1c;if(e.mp)1c;17 38=e.1S==="57"?e.3m[0].38:e.38;17 2N=e.1S==="57"?e.3m[0].2N:e.2N;if(1r 4t==="1m")4t=!!(4t||1A.3o(2N-3V.y)>1A.3o(38-3V.x));if(4t){2u=1g;1c}if(!4z){if(38>3V.x)4z="to-1Y";1d 4z="to-1G";if(5F==="zf"){if($(".21.2H").1b>0)5F=$(".21.2H").1v("21-1G")?"1G":"1Y";1d 5F=4z==="to-1Y"?"1G":"1Y";if(19.14.ff>0){if(5F==="1G"&&3V.x>19.14.ff){2u=1g;1c}if(5F==="1Y"&&3V.x<1U.kd-19.14.ff){2u=1g;1c}}21=$(".21.21-"+5F)}if(5F==="1G"&&(4z==="to-1G"&&!21.1v("2H"))||5F==="1Y"&&(4z==="to-1Y"&&!21.1v("2H"))){2u=1g;1c}}if(19.14.xF){17 6D=(1P 2x).3E()-5X;if(6D<4u){if(4z==="to-1G"){if(5F==="1Y")19.cV(5F);if(5F==="1G"&&21.1v("2H"))19.ed()}if(4z==="to-1Y"){if(5F==="1G")19.cV(5F);if(5F==="1Y"&&21.1v("2H"))19.ed()}}2u=1g;2I=1g;1c}if(!2I){51=21.1v("21-n6")?"n6":"bP";if(!2q){21.5O();hE.5O()}7E=21[0].5u;21.2f(0);if(21.1l("."+19.14.7V).1b>0)if(19.9v)19.9v(21.1l("."+19.14.7V)[0])}2I=1f;e.42();17 9H=2q?0:-19.14.xG;if(5F==="1Y")9H=-9H;4h=38-3V.x+9H;if(5F==="1Y"){1F=4h-(2q?7E:0);if(1F>0)1F=0;if(1F<-7E)1F=-7E}1d{1F=4h+(2q?7E:0);if(1F<0)1F=0;if(1F>7E)1F=7E}if(51==="bP"){5L.1N("2b("+1F+"px,0,0)").2f(0);hE.1N("2b("+1F+"px,0,0)").2f(0);21.25("21:zg",{2z:1A.3o(1F/7E)});19.6U("zh",5L[0],21[0],1A.3o(1F/7E))}1d{21.1N("2b("+1F+"px,0,0)").2f(0);if(19.14.2m){hE.2f(0);sj=1A.3o(1F/7E);hE.1W({5j:sj})}21.25("21:zg",{2z:1A.3o(1F/7E)});19.6U("zh",5L[0],21[0],1A.3o(1F/7E))}}1a 73(e){if(!2u||!2I){2u=1g;2I=1g;1c}2u=1g;2I=1g;17 6D=(1P 2x).3E()-5X;17 2E;17 n7=1F===0||1A.3o(1F)===7E;if(!2q)if(1F===0)2E="hG";1d if(6D<4u&&1A.3o(1F)>0||6D>=4u&&1A.3o(1F)>=7E/2)2E="sk";1d 2E="hG";1d if(1F===-7E)2E="hG";1d if(6D<4u&&1A.3o(1F)>=0||6D>=4u&&1A.3o(1F)<=7E/2)if(5F==="1G"&&1F===7E)2E="hG";1d 2E="sk";1d 2E="hG";if(2E==="sk"){19.8s=1f;if(2q){19.ed();if(n7){21.1W({7l:""});$("5K").1K("21-eb")}}1d 19.cV(5F);if(n7)19.8s=1f}if(2E==="hG")if(2q){19.8s=1f;19.cV(5F)}1d{19.ed();if(n7){19.8s=1f;21.1W({7l:""})}1d{17 1X=51==="bP"?5L:21;21.25("2j 21:2j");$("5K").1w("21-eb");1X.4A(1a(){21.25("2j 21:5E");21.1W({7l:""});$("5K").1K("21-eb");19.8s=1f})}}if(51==="bP"){5L.2f("");5L.1N("")}21.2f("").1N("");hE.1W({7l:""}).1N("").2f("").1W("5j","")}17 4W=19.3x.56==="4y"&&19.4a.4W?{dL:1f,74:1g}:1g;$(2g).on(19.3x.56,7g,4W);$(2g).on(19.3x.65,72);$(2g).on(19.3x.6C,73,4W)};19.rH=1a(1s){1s=$(1s);17 bQ;if(1s.1v("47")){bQ=1s;1s=bQ.1M(".1o")}1d bQ=1s.1l(".47");if(bQ.1b===0)1c;17 2i;if(1s.1v("1o-1B")){2i=1s;1s=1s.1M(".1o")}1d 2i=1s.1l(".1o-1B");if(2i.1b===0)1c;17 ke="1u:1H/Gu;Gv,Gw==";if(1r 19.14.sl==="3l")ke=19.14.sl;if(19.14.sl!==1g)bQ.2r(1a(){if($(1i).1Z("1u-5x"))$(1i).1Z("5x",ke)});17 fJ=[];17 kf=1g;1a fK(el){el=$(el);17 bg=el.1Z("1u-b8");17 5x=bg?bg:el.1Z("1u-5x");if(!5x)1c;1a zi(){el.1K("47").1w("47-sm");if(bg)el.1W("b8-1H","1n("+5x+")");1d el.1Z("5x",5x);if(19.14.mi){kf=1g;if(fJ.1b>0)fK(fJ.n0())}}1a zj(){el.1K("47").1w("47-sm");if(bg)el.1W("b8-1H","1n("+ke+")");1d el.1Z("5x",ke);if(19.14.mi){kf=1g;if(fJ.1b>0)fK(fJ.n0())}}if(19.14.mi)if(kf){if(fJ.1L(el[0])<0)fJ.1Q(el[0]);1c}kf=1f;17 1H=1P zk;1H.sn=zi;1H.n8=zj;1H.5x=5x}1a cW(){bQ=1s.1l(".47");bQ.2r(1a(1I,el){el=$(el);if(el.1M(".4F:2k(.2H)").1b>0)1c;if(zl(el[0]))fK(el)})}1a zl(el){17 kg=el.kh();17 9H=19.14.xO||0;1c kg.2J>=0-9H&&kg.1G>=0-9H&&kg.2J<=1U.zm+9H&&kg.1G<=1U.kd+9H}1a 6s(5N){17 3i=5N?"3B":"on";bQ[3i]("47",cW);bQ.1M(".4F")[3i]("5O",cW);1s[3i]("47",cW);2i[3i]("47",cW);2i[3i]("4Y",cW);$(1U)[3i]("8q",cW)}1a 7Y(){6s(1f)}1s[0].so=7Y;6s();if(1s.1v("1o"))1s.7z("1o:7y",7Y);cW();1s.7z("1o:yK",cW)};19.Gx=1a(1s){1s=$(1s);if(1s.1b>0&&1s[0].so)1s[0].so()};19.Gy=1a(1s){1s=$(1s);if(1s.1b>0)1s.25("47")};19.rK=1a(1s){$(1s).1l(".41").2r(1a(){if($(1i).2K().1b===0)$(1i).3O(19.14.bB)})};17 zn=1a(1h,14){17 4d={ki:1f,fL:1g,hH:1f,zo:1g,zp:"{{#if 3T}}"+\'<1j 1q="5Q-4D">{{3T}} {{#if 6j}}, <2B>{{6j}}</2B>{{/if}}</1j>\'+"{{/if}}"+\'<1j 1q="35 35-{{1S}} {{#if sp}}35-sq{{/if}} {{#if fM}}35-7w-fM{{/if}} {{#if 4M}}35-Gz-5a-{{4M}}{{/if}}">\'+\'{{#if 1R}}<1j 1q="35-1R">{{1R}}</1j>{{/if}}\'+\'<1j 1q="35-28">{{28}}{{#if 4D}}<1j 1q="35-4D">{{4D}}</1j>{{/if}}</1j>\'+\'{{#if fM}}<1j 1q="35-fM" 3A="b8-1H:1n({{fM}})"></1j>{{/if}}\'+\'{{#if 55}}<1j 1q="35-55">{{55}}</1j>{{/if}}\'+"</1j>"};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m"||14[3y]===29)14[3y]=4d[3y];17 m=1i;m.14=14;m.1h=$(1h);if(m.1h.1b===0)1c;if(m.14.ki)m.1h.1w("5Q-8u-9f");if(m.14.fL)m.1h.1w("5Q-1P-fx");m.1s=m.1h.1M(".1o").eq(0);m.2i=m.1s.1l(".1o-1B");m.3g=4g.5R(m.14.zp);m.9f=1a(){if(!m.1h.1v("5Q-8u-9f"))m.1h.1w("5Q-8u-9f");m.1h.1l(".35").2r(1a(){17 35=$(1i);if(35.1l(".35-28 7n").1b>0){17 5b=35.1l(".35-28")[0].5b;17 n9=1f;1t(17 i=0;i<5b.1b;i++){if(5b[i].aD===1&&5b[i].8t.5P()!=="7n")n9=1g;if(5b[i].aD===3&&5b[i].bR.68()!=="")n9=1g}if(n9)35.1w("35-sq");1d 35.1K("35-sq")}if(35.1l(".35-fM").1b>0)35.1w("35-7w-fM")});m.1h.1l(".35").2r(1a(){17 35=$(1i);17 sr=35.1v("35-na");17 2X=35.2X(".35-"+(sr?"na":"zq"));17 3k=35.3k(".35-"+(sr?"na":"zq"));if(2X.1b===0)35.1w("35-fE 35-7w-ss");1d 35.1K("35-fE 35-7w-ss");if(3k.1b===0)35.1w("35-fx");1d 35.1K("35-fx");if(3k.1b>0&&3k.1l(".35-1R").1b>0&&35.1l(".35-1R").1b>0)if(3k.1l(".35-1R").28()!==35.1l(".35-1R").28()){3k.1w("35-fE 35-7w-ss");35.1w("35-fx")}})};m.GA=1a(3M,6l){1c m.st(3M,"3h",6l)};m.GB=1a(3M,6l){1c m.st(3M,"98",6l)};m.st=1a(3M,3i,6l){1c m.su([3M],3i,6l)};m.su=1a(hI,3i,6l){if(1r 6l==="1m")6l=1f;if(1r 3i==="1m")3i=m.14.fL?"98":"3h";17 sv="",i;1t(i=0;i<hI.1b;i++){17 3M=hI[i]||{};3M.1S=3M.1S||"na";if(!3M.28)ee;3M.sp=3M.28.1L("<7n")>=0;if(3M.GC===1g)3M.sp=1g;if(6l)3M.4M=3i==="3h"?"4I":"2J";sv+=m.3g(3M)}17 sw=m.2i[0].5l,zr=m.2i[0].3X,nb=m.2i[0].2C;m.1h[3i](sv);if(m.14.ki)m.9f();if(3i==="98")m.2i[0].2C=nb+(m.2i[0].5l-sw);if(m.14.hH&&(3i==="3h"&&!m.14.fL)||3i==="98"&&m.14.fL)if(m.14.zo){17 nc=1g;if(m.14.fL){if(nb===0)nc=1f}1d if(nb-(sw-zr)>=-10)nc=1f;if(nc)m.hH(6l?1m:0)}1d m.hH(6l?1m:0);17 5Q=m.1h.1l(".35");if(hI.1b===1)1c 3i==="3h"?5Q[5Q.1b-1]:5Q[0];1d{17 nd=[];if(3i==="3h")1t(i=5Q.1b-hI.1b;i<5Q.1b;i++)nd.1Q(5Q[i]);1d 1t(i=0;i<hI.1b;i++)nd.1Q(5Q[i]);1c nd}};m.zs=1a(35){35=$(35);if(35.1b===0)1c 1g;1d{35.43();if(m.14.ki)m.9f();1c 1f}};m.GD=1a(5Q){m.zs(5Q)};m.GE=1a(){m.1h.3O("")};m.hH=1a(3v,2C){if(1r 3v==="1m")3v=dT;17 bS=m.2i[0].2C;17 kj;if(1r 2C!=="1m")kj=2C;1d{kj=m.14.fL?0:m.2i[0].5l-m.2i[0].3X;if(kj===bS)1c}m.2i.2C(kj,3v)};m.4N=1a(){if(m.14.5Q)m.su(m.14.5Q,1m,1g);1d{if(m.14.ki)m.9f();m.hH(0)}};m.5N=1a(){m=29};m.4N();m.1h[0].GF=m;1c m};19.5Q=1a(1h,14){1c 1P zn(1h,14)};19.rB=1a(1s){1s=$(1s);17 5Q=1s.1l(".5Q");if(5Q.1b===0)1c;if(!5Q.1v("5Q-4N"))1c;17 m=19.5Q(5Q,5Q.4H());1a 9z(){m.5N();1s.3B("1o:7y",9z)}if(1s.1v("1o"))1s.on("1o:7y",9z)};19.9s=1m;19.fN=1f;19.sx=1a(kk){17 2u,2I,4t,3V={},5X,4h,7a,fO,9I,9J,b9,cX,1F,2q,kl,62,6K,4z,km,kn,hJ,hK,zt,zu;$(2g).on(19.3x.56,1a(e){if(19.9s){17 1X=$(e.1X);if(!(19.9s.is(1X[0])||1X.1M(".2D").is(19.9s)||1X.1v("1k-in")||1X.1v("1k-2s")||1X.1v("3F-1k")||1X.1M(".3F-1k.1k-in, .1k.1k-in").1b>0))19.fP(19.9s)}});1a 7g(e){if(!19.fN)1c;2I=1g;2u=1f;4t=1m;3V.x=e.1S==="4y"?e.3m[0].38:e.38;3V.y=e.1S==="4y"?e.3m[0].2N:e.2N;5X=(1P 2x).3E()}1a 72(e){if(!2u)1c;17 38=e.1S==="57"?e.3m[0].38:e.38;17 2N=e.1S==="57"?e.3m[0].2N:e.2N;if(1r 4t==="1m")4t=!!(4t||1A.3o(2N-3V.y)>1A.3o(38-3V.x));if(4t){2u=1g;1c}if(!2I){if($(".3K-39.4L-2q").1b>0)1c;7a=$(1i);fO=7a.1l(".2D-1B");9I=7a.1l(".2D-3F-1Y");9J=7a.1l(".2D-3F-1G");b9=cX=62=6K=kn=km=29;zt=9J.1v("2D-3F-no-zv")||19.14.qS;zu=9I.1v("2D-3F-no-zv")||19.14.qS;if(9J.1b>0){b9=9J.bG();62=9J.2K("a");km=9J.1l(".2D-ba")}if(9I.1b>0){cX=9I.bG();6K=9I.2K("a");kn=9I.1l(".2D-ba")}2q=7a.1v("2D-2q");if(2q)kl=7a.1l(".2D-3F-1G.2D-3F-2q").1b>0?"1G":"1Y";7a.1K("66");if(!19.14.qT){7a.1l(".2D-3F-2q").1K("2D-3F-2q");7a.1K("2D-2q")}}2I=1f;e.42();4h=38-3V.x;1F=4h;if(2q)if(kl==="1Y")1F=1F-cX;1d 1F=1F+b9;if(1F>0&&9J.1b===0||1F<0&&9I.1b===0){if(!2q){2u=2I=1g;fO.1N("");if(6K&&6K.1b>0)6K.1N("");if(62&&62.1b>0)62.1N("");1c}1F=0}if(1F<0)4z="to-1G";1d if(1F>0)4z="to-1Y";1d if(!4z)4z="to-1G";17 i,9g,2z;e.mp=1f;if(19.14.qT){if(2q){if(kl==="1Y"&&4h>0)19.fP(7a);if(kl==="1G"&&4h<0)19.fP(7a)}1d{if(4h<0&&9I.1b>0)19.sy(7a,"1Y");if(4h>0&&9J.1b>0)19.sy(7a,"1G")}2u=1g;2I=1g;1c}hJ=1g;hK=1g;17 $2M;if(9I.1b>0){2z=1F/cX;if(1F<-cX){1F=-cX-1A.7o(-1F-cX,.8);if(kn.1b>0)hK=1f}1t(i=0;i<6K.1b;i++){if(1r 6K[i].bT==="1m")6K[i].bT=6K[i].am;9g=6K[i].bT;$2M=$(6K[i]);if(kn.1b>0&&$2M.1v("2D-ba")){$2M.1W({1G:(hK?-9g:0)+"px"});if(hK)$2M.1w("2D-ba-2H");1d $2M.1K("2D-ba-2H")}$2M.1N("2b("+(1F-9g*(1+1A.4C(2z,-1)))+"px,0,0)")}}if(9J.1b>0){2z=1F/b9;if(1F>b9){1F=b9+1A.7o(1F-b9,.8);if(km.1b>0)hJ=1f}1t(i=0;i<62.1b;i++){if(1r 62[i].bT==="1m")62[i].bT=b9-62[i].am-62[i].5u;9g=62[i].bT;$2M=$(62[i]);if(km.1b>0&&$2M.1v("2D-ba")){$2M.1W({1G:(hJ?9g:0)+"px"});if(hJ)$2M.1w("2D-ba-2H");1d $2M.1K("2D-ba-2H")}if(62.1b>1)$2M.1W("z-1I",62.1b-i);$2M.1N("2b("+(1F+9g*(1-1A.4Z(2z,1)))+"px,0,0)")}}fO.1N("2b("+1F+"px,0,0)")}1a 73(e){if(!2u||!2I){2u=1g;2I=1g;1c}2u=1g;2I=1g;17 6D=(1P 2x).3E()-5X;17 2E,hL,3F,3D,i;3F=4z==="to-1G"?9I:9J;hL=4z==="to-1G"?cX:b9;if(6D<4u&&(4h<-10&&4z==="to-1G"||4h>10&&4z==="to-1Y")||6D>=4u&&1A.3o(1F)>hL/2)2E="3S";1d 2E="2j";if(6D<4u){if(1A.3o(1F)===0)2E="2j";if(1A.3o(1F)===hL)2E="3S"}if(2E==="3S"){19.9s=7a;7a.25("3S 2D:3S");7a.1w("2D-2q 66");17 7b=4z==="to-1G"?-hL:hL;fO.1N("2b("+7b+"px,0,0)");3F.1w("2D-3F-2q");3D=4z==="to-1G"?6K:62;if(3D)1t(i=0;i<3D.1b;i++)$(3D[i]).1N("2b("+7b+"px,0,0)");if(hK)9I.1l(".2D-ba")[0].3Q();if(hJ)9J.1l(".2D-ba")[0].3Q()}1d{7a.25("2j 2D:2j");19.9s=1m;7a.1w("66").1K("2D-2q");fO.1N("");3F.1K("2D-3F-2q")}17 9g;if(62&&62.1b>0&&62!==3D)1t(i=0;i<62.1b;i++){9g=62[i].bT;if(1r 9g==="1m")62[i].bT=b9-62[i].am-62[i].5u;$(62[i]).1N("2b("+9g+"px,0,0)")}if(6K&&6K.1b>0&&6K!==3D)1t(i=0;i<6K.1b;i++){9g=6K[i].bT;if(1r 9g==="1m")6K[i].bT=6K[i].am;$(6K[i]).1N("2b("+ -9g+"px,0,0)")}fO.4A(1a(e){if(2q&&2E==="3S"||5E&&2E==="2j")1c;7a.25(2E==="3S"?"2q":"5E");if(2q&&2E==="2j"){if(9I.1b>0)6K.1N("");if(9J.1b>0)62.1N("")}})}if(kk){$(kk).on(19.3x.56,7g);$(kk).on(19.3x.65,72);$(kk).on(19.3x.6C,73)}1d{$(2g).on(19.3x.56,".3K-39 li.2D",7g);$(2g).on(19.3x.65,".3K-39 li.2D",72);$(2g).on(19.3x.6C,".3K-39 li.2D",73)}};19.sy=1a(el,4O,34){el=$(el);if(2p.1b===2)if(1r 2p[1]==="1a")34=4O;if(el.1b===0)1c;if(el.1b>1)el=$(el[0]);if(!el.1v("2D")||el.1v("2D-2q"))1c;if(!4O)if(el.1l(".2D-3F-1Y").1b>0)4O="1Y";1d 4O="1G";17 ef=el.1l(".2D-3F-"+4O);if(ef.1b===0)1c;el.25("3S 2D:3S").1w("2D-2q").1K("66");ef.1w("2D-3F-2q");17 3D=ef.2K("a");17 hM=ef.bG();17 1F=4O==="1Y"?-hM:hM;17 i;if(3D.1b>1){1t(i=0;i<3D.1b;i++)if(4O==="1Y")$(3D[i]).1N("2b("+ -3D[i].am+"px,0,0)");1d $(3D[i]).1W("z-1I",3D.1b-i).1N("2b("+(hM-3D[i].5u-3D[i].am)+"px,0,0)");17 4j=3D[1].4j}el.1w("66");1t(i=0;i<3D.1b;i++)$(3D[i]).1N("2b("+1F+"px,0,0)");el.1l(".2D-1B").1N("2b("+1F+"px,0,0)").4A(1a(){el.25("2q 2D:2q");if(34)34.6m(el[0])});19.9s=el};19.fP=1a(el,34){el=$(el);if(el.1b===0)1c;if(!el.1v("2D-2q"))1c;17 4O=el.1l(".2D-3F-2q").1v("2D-3F-1Y")?"1Y":"1G";17 ef=el.1l(".2D-3F-2q").1K("2D-3F-2q");17 3D=ef.2K("a");17 hM=ef.bG();19.fN=1g;el.25("2j 2D:2j");el.1K("2D-2q").1w("66");17 ne;1a sz(){19.fN=1f;if(el.1v("2D-2q"))1c;el.1K("66");3D.1N("");el.25("5E 2D:5E");if(34)34.6m(el[0]);if(ne)5m(ne)}el.1l(".2D-1B").1N("").4A(sz);ne=4k(sz,GG);1t(17 i=0;i<3D.1b;i++){if(4O==="1Y")$(3D[i]).1N("2b("+-3D[i].am+"px,0,0)");1d $(3D[i]).1N("2b("+(hM-3D[i].5u-3D[i].am)+"px,0,0)");$(3D[i]).1W({1G:0+"px"}).1K("2D-ba-2H")}if(19.9s&&19.9s[0]===el[0])19.9s=1m};19.nf=1a(el,34){el=$(el);if(el.1b===0)1c;if(el.1b>1)el=$(el[0]);19.9s=1m;el.25("4P 2D:4P");el.1W({2c:el.fG()+"px"});17 4j=el[0].4j;el.1W({2c:0+"px"}).1w("GH 66").4A(1a(){el.25("zw 2D:zw");if(34)34.6m(el[0]);if(el.1M(".dS-3K").1b>0){17 59=el.1M(".dS-3K")[0].hl;17 sA=el[0].ko;if(59&&1r sA!=="1m")59.zx(sA)}1d if(19.14.xx)4k(1a(){el.43()},0);1d el.43()});17 1F="-5c%";el.1l(".2D-1B").1N("2b("+1F+",0,0)")};19.zy=1a(52){52=$(52);if(52.1b===0)52=$(".3K-39.4L");52.hN("4L-2q");if(52.1v("4L-2q"))52.25("3S 4L:3S");1d 52.25("2j 4L:2j");1c 52};19.zz=1a(52){52=$(52);if(52.1b===0)52=$(".3K-39.4L");52.1w("4L-2q");52.25("3S 4L:3S");1c 52};19.zB=1a(52){52=$(52);if(52.1b===0)52=$(".3K-39.4L");52.1K("4L-2q");52.25("2j 4L:2j");1c 52};19.sB=1a(){17 2u,2I,7F,4h,6b,ng,nh,ni,fQ,az,61,52,hO;1a 7g(e){2I=1g;2u=1f;7F=e.1S==="4y"?e.3m[0].2N:e.2N;6b=$(1i).4i();hO=6b.1I();nh=6b.4i().1l("li");52=6b.1M(".4L");e.42();19.8s=19.fN=1g}1a 72(e){if(!2u||!6b)1c;17 38=e.1S==="57"?e.3m[0].38:e.38;17 2N=e.1S==="57"?e.3m[0].2N:e.2N;if(!2I){6b.1w("nk");52.1w("4L-nk");ni=6b[0].hP;fQ=6b.4i().2c()-6b[0].hP-6b.2c();ng=6b[0].3X}2I=1f;e.42();e.mp=1f;4h=2N-7F;17 1F=4h;if(1F<-ni)1F=-ni;if(1F>fQ)1F=fQ;6b.1N("2b(0,"+1F+"px,0)");61=az=1m;nh.2r(1a(){17 bU=$(1i);if(bU[0]===6b[0])1c;17 sC=bU[0].hP;17 sD=bU.2c();17 sE=6b[0].hP+1F;if(sE>=sC-sD/2&&6b.1I()<bU.1I()){bU.1N("2b(0, "+-ng+"px,0)");az=bU;61=1m}1d if(sE<=sC+sD/2&&6b.1I()>bU.1I()){bU.1N("2b(0, "+ng+"px,0)");az=1m;if(!61)61=bU}1d $(1i).1N("2b(0, 0%,0)")})}1a 73(e){19.8s=19.fN=1f;if(!2u||!2I){2u=1g;2I=1g;1c}e.42();nh.1N("");6b.1K("nk");52.1K("4L-nk");17 59,9K,6n;if(az){6b.az(az);6b.25("hQ 4L:hQ",{hO:hO,6n:6b.1I()})}if(61){6b.61(61);6b.25("hQ 4L:hQ",{hO:hO,6n:6b.1I()})}if((az||61)&&52.1v("dS-3K")){59=52[0].hl;9K=6b[0].ko;6n=61?61[0].ko:az[0].ko;if(59)59.zC(9K,6n)}az=61=1m;2u=1g;2I=1g}$(2g).on(19.3x.56,".3K-39.4L .4L-aE",7g);if(19.4a.5g){$(2g).on(19.3x.65,".3K-39.4L .4L-aE",72);$(2g).on(19.3x.6C,".3K-39.4L .4L-aE",73)}1d{$(2g).on(19.3x.65,72);$(2g).on(19.3x.6C,73)}};19.mP=1a(1s){1s=$(1s);17 kp;if(1s.is(".6I-2l"))kp=1s;1d kp=1s.1l(".6I-2l");if(kp.1b===0)1c;kp.2r(1a(){17 4l=$(1i);17 $2l=4l.1l("2l");if($2l.1b===0)1c;17 2l=$2l[0];if(2l.1b===0)1c;17 cY=[];17 6L;1t(17 i=0;i<2l.1b;i++)if(2l[i].5y){6L=2l[i].4H?2l[i].4H.6L:$(2l[i]).1u("7l-as");if(6L&&1r 6L!=="1m")cY.1Q(6L);1d cY.1Q(2l[i].bR.68())}17 kq=4l.1l(".1x-6E");if(kq.1b===0)4l.1l(".1x-2U").3h(\'<1j 1q="1x-6E">\'+cY.76(", ")+"</1j>");1d{17 zD=kq.28();if(kq.1v("6I-2l-1J"))1t(i=0;i<2l.1b;i++)2l[i].5y=2l[i].bR.68()===zD.68();1d kq.28(cY.76(", "))}$2l.on("6F",1a(){17 cY=[];1t(17 i=0;i<2l.1b;i++)if(2l[i].5y){17 6L=2l[i].4H?2l[i].4H.6L:$(2l[i]).1u("7l-as");if(6L&&1r 6L!=="1m")cY.1Q(6L);1d cY.1Q(2l[i].bR.68())}4l.1l(".1x-6E").28(cY.76(", "))})})};19.GI=1a(2l,5d,1I){2l=$(2l);17 4l=2l.1M(".6I-2l");if(1r 1I==="1m")2l.3h(5d);1d $(5d).61(2l.1l("5d").eq(1I));19.mP(4l);17 nl=4l.1l("2l").1Z("1R");17 2q=$(\'.1o.6I-2l-1o[1u-2l-1R="\'+nl+\'"]\').1b>0;if(2q)19.nm(4l,1f)};19.nm=1a(4l,kr){4l=$(4l);if(4l.1b===0)1c;17 1e=4l.1M("."+19.14.7V);if(1e.1b===0)1c;1e=1e[0].70;17 49=4l.1Z("1u-3S-in")||19.14.xy;if(49==="2a"){if($(".2a.6I-2l-2a").1b>0)1c}1d if(49==="1y"){if($(".1y-1k.1k-in").1b>0&&!kr)if(4l[0].sF!==$(".1y-1k.1k-in:2k(.1k-6v)")[0])19.5i($(".1y-1k.1k-in:2k(.1k-6v)"));1d 1c}1d if(!1e)1c;17 82=4l.4H();17 9h=82.9h||4l.1l(".1x-2S").28();17 9L=82.9L||19.14.xz;17 7G;if(49==="1y")7G=82.GJ||82.9L||19.14.xC;1d 7G=82.ks||82.9L||19.14.xB;17 cZ=82.cZ!==1m?82.cZ:19.14.xE;17 eg=82.eg||19.14.GK;17 aF=82.aF||19.14.GL;17 hR=82.hR||19.14.GM;17 59=82.59;17 sG=82.sG;17 2m=19.14.2m;17 nn=82.nn||19.14.GN;17 2l=4l.1l("2l")[0];17 $2l=$(2l);17 $sH=$2l.4H();if(2l.5w||4l.1v("5w")||$2l.1v("5w"))1c;17 5v=[];17 id=(1P 2x).3E();17 5S=2l.eh?"6g":"8K";17 83=5S+"-"+id;17 np=$2l.1Z("GO");17 nl=2l.1R;17 5d,nq,ei,ej,ek,nr,GP,ns,sI,nt,nu,hS;1t(17 i=0;i<2l.1b;i++){5d=$(2l[i]);hS=5d.4H();ei=hS.ei||$sH.ei||82.ei;ej=hS.ej||$sH.ej||82.ej;nq=ei||ej||5S==="6g";if(2m)nq=ei||ej;nt=hS.nt;nu=hS.GQ;if(5d[0].5w)nu+=" 5w";ek=5d.4i("GR")[0];nr=ek&&ek.55;ns=1g;if(ek)if(ek!==sI){ns=1f;sI=ek;5v.1Q({sJ:nr,zE:ns})}5v.1Q({1J:5d[0].1J,28:5d[0].bR.68(),5y:5d[0].5y,9y:ek,sJ:nr,1H:ei,2P:ej,4Q:nt,8i:nu,5w:5d[0].5w,5S:5S,id:id,sK:nq,6g:5S==="6g",83:83,2m:19.14.2m})}if(!19.6B.sL)19.6B.sL=t7.5R(19.14.nv||"{{#if zE}}"+\'<li 1q="1x-9x">{{sJ}}</li>\'+"{{1d}}"+\'<li{{#if 8i}} 1q="{{8i}}"{{/if}}>\'+\'<55 1q="55-{{5S}} 1x-1B">\'+\'<1z 1S="{{5S}}" 1R="{{83}}" 1J="{{1J}}" {{#if 5y}}8S{{/if}}>\'+"{{#if 2m}}"+"{{#if sK}}"+\'<1j 1q="1x-bb">\'+\'{{#if 2P}}<i 1q="2P {{2P}}"></i>{{/if}}\'+\'{{#if 1H}}<7n 5x="{{1H}}">{{/if}}\'+"</1j>"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S{{#if 4Q}} 4Q-{{4Q}}{{/if}}">{{28}}</1j>\'+"</1j>"+\'<1j 1q="1x-6E">\'+\'<i 1q="2P 2P-3p-{{5S}}"></i>\'+"</1j>"+"{{1d}}"+\'<1j 1q="1x-bb">\'+\'<i 1q="2P 2P-3p-{{5S}}"></i>\'+"</1j>"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S{{#if 4Q}} 4Q-{{4Q}}{{/if}}">{{28}}</1j>\'+"</1j>"+"{{/if}}"+"{{1d}}"+"{{#if sK}}"+\'<1j 1q="1x-bb">\'+\'{{#if 6g}}<i 1q="2P 2P-3p-6g"></i>{{/if}}\'+\'{{#if 2P}}<i 1q="2P {{2P}}"></i>{{/if}}\'+\'{{#if 1H}}<7n 5x="{{1H}}">{{/if}}\'+"</1j>"+"{{/if}}"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S{{#if 4Q}} 4Q-{{4Q}}{{/if}}">{{28}}</1j>\'+"</1j>"+"{{/if}}"+"</55>"+"</li>"+"{{/if}}");17 nv=19.6B.sL;17 sM="";if(!59)1t(17 j=0;j<5v.1b;j++)sM+=nv(5v[j]);17 hT="",bV;17 fR="",fS="",sN="",6X;if(49==="1y"){if(!19.6B.sO)19.6B.sO=t7.5R(19.14.GS||\'<1j 1q="3j {{#if hR}}bW-{{hR}}{{/if}}">\'+\'<1j 1q="3j-2U">\'+\'<1j 1q="1G"></1j>\'+\'<1j 1q="1Y"><a 5h="#" 1q="4x 2j-1y"><2B>{{7G}}</2B></a></1j>\'+"</1j>"+"</1j>");hT=19.6B.sO({9h:9h,7G:7G,49:49,hR:hR,GT:49==="1y"})}1d{if(!19.6B.sP)19.6B.sP=t7.5R(19.14.GU||\'<1j 1q="1C {{#if aF}}bW-{{aF}}{{/if}}">\'+\'<1j 1q="1C-2U">\'+"{{zF}}"+\'<1j 1q="2O 3f">{{9h}}</1j>\'+"</1j>"+"</1j>");bV=19.6B.sP({9h:9h,9L:9L,7G:7G,49:49,aF:aF,kt:49==="2a",zG:49==="1o",zF:49==="2a"?(19.14.GV||(2m?\'<1j 1q="1G"><a 5h="#" 1q="4x 2j-2a 2P-em"><i 1q="2P 2P-3z"></i></a></1j>\':\'<1j 1q="1G"><a 5h="#" 1q="4x 2j-2a"><i 1q="2P 2P-3z"></i><2B>{{7G}}</2B></a></1j>\')).31(/{{7G}}/g,7G):(19.14.GW||(2m?\'<1j 1q="1G"><a 5h="#" 1q="3z 4x 2P-em"><i 1q="2P 2P-3z"></i></a></1j>\':\'<1j 1q="1G 3f"><a 5h="#" 1q="3z 4x"><i 1q="2P 2P-3z"></i><2B>{{9L}}</2B></a></1j>\')).31(/{{9L}}/g,9L)});if(49==="1o"){6X="nw";if(4l.1M(".1C-9u").1b>0)6X="9u";if(4l.1M(".1C-7p").1b>0)6X="7p";fS=4l.1M(".1o").1v("no-3j")?"no-3j":"";fR=4l.1M(".1o").1v("no-1C")?"no-1C":"1C-"+6X;sN=4l.1M(".1o").1v("no-3t")?"no-3t":""}1d 6X="7p"}17 2v="6I-2l-"+83;17 sQ=1r 4l.1u("2G")==="1m"?19.14.xD:4l.1u("2G")==="1f"?1f:1g;17 sR,sS;if(sQ){sR=4l.1u("2G-bN")||"zH";sS=4l.1u("2G-b1")||"qY"}17 nx=\'<3p 1q="2G 2G-4N" 1u-b4-3K=".6I-2l-3K-\'+id+\'" 1u-b4-in=".1x-2S">\'+\'<1j 1q="2G-1z">\'+\'<1z 1S="b4" bN="\'+sR+\'">\'+\'<a 5h="#" 1q="2G-cC"></a>\'+"</1j>"+(2m?"":\'<a 5h="#" 1q="2G-b1">\'+sS+"</a>")+"</3p>"+\'<1j 1q="2G-2s"></1j>\';17 d0=(49!=="1y"&&6X==="9u"?bV:"")+\'<1j 1q="dI">\'+\'  <1j 1u-1o="\'+2v+\'" 1u-2l-1R="\'+nl+\'" 1q="1o 6I-2l-1o \'+fR+" "+fS+" "+sN+\'">\'+(49!=="1y"&&6X==="7p"?bV:"")+(sQ?nx:"")+\'    <1j 1q="1o-1B">\'+(49!=="1y"&&6X==="nw"?bV:"")+\'      <1j 1q="3K-39 \'+(59?"dS-3K":"")+" 6I-2l-3K-"+id+" "+(eg?"bW-"+eg:"")+\'">\'+"        <ul>"+(59?"":sM)+"        </ul>"+"      </1j>"+"    </1j>"+"  </1j>"+"</1j>";17 2a,1y;1a hU(){17 2i=4l.1M(".1o-1B");if(2i.1b===0)1c;17 9M=3P(2i.1W("6W-2J"),10),d1=3P(2i.1W("6W-4I"),10),6c=2i[0].3X-9M-1y.2c(),aG=2i[0].5l-9M-1y.2c(),aH;17 d2=4l.5D().2J-9M+4l[0].3X;if(d2>6c){17 2C=2i.2C()+d2-6c;if(2C+6c>aG){aH=2C+6c-aG+d1;if(6c===aG)aH=1y.2c();2i.1W({"6W-4I":aH+"px"})}2i.2C(2C,4u)}}1a bc(e){17 2j=1f;if(e.1X===4l[0]||$(e.1X).1M(4l[0]).1b>0)2j=1g;if($(e.1X).1M(".1y-1k").1b>0)2j=1g;if(2j)19.5i(".6I-2l-1y.1k-in")}1a sT(1h){if(2l.sU.1b>=np)1h.1l(\'1z[1S="6g"]\').2r(1a(){if(!1i.8S)$(1i).1M("li").1w("5w");1d $(1i).1M("li").1K("5w")});1d 1h.1l(".5w").1K("5w")}1a ny(1h){1h=$(1h);if(59){17 nz=19.59(1h.1l(".dS-3K"),{23:5v,3g:nv,2c:sG||1m,rn:1a(32,1I,1x){if(1x.28&&1x.28.5P().1L(32.68().5P())>=0)1c 1f;1c 1g}});1h.7z(49==="2a"||49==="1y"?"5E":"9z",1a(){if(nz&&nz.5N)nz.5N()})}if(np)sT(1h);if(cZ)1h.1l(\'1z[1S="8K"][1R="\'+83+\'"]:8S\').1M("55").7z("3Q",1a(){if(49==="2a")19.5i(2a);1d if(49==="1y")19.5i(1y);1d 1e.22.3z()});1h.on("6F",\'1z[1R="\'+83+\'"]\',1a(){17 5d,28;17 1z=1i;17 1J=1z.1J;17 nA=[];17 6L;if(1z.1S==="6g"){17 5v=[];1t(17 i=0;i<2l.1p.1b;i++){5d=2l.1p[i];if(5d.1J===1J)5d.5y=1z.8S;if(5d.5y){6L=5d.4H?5d.4H.6L:$(5d).1u("7l-as");28=6L&&1r 6L!=="1m"?6L:5d.bR;nA.1Q(28.68())}}if(np)sT(1h)}1d{5d=4l.1l(\'5d[1J="\'+1J+\'"]\')[0];6L=5d.4H?5d.4H.6L:$(5d).1u("7l-as");28=6L&&1r 6L!=="1m"?6L:5d.bR;nA=[28];2l.1J=1J}$2l.25("6F");4l.1l(".1x-6E").28(nA.76(", "));if(cZ&&5S==="8K")if(49==="2a")19.5i(2a);1d if(49==="1y")19.5i(1y);1d 1e.22.3z()})}1a fA(e){17 1o=e.fT.1o;if(1o.1R===2v)ny(1o.1h)}if(49==="2a"){if(kr){2a=$(".2a.6I-2l-2a .1e");2a.3O(d0)}1d{2a=19.2a(\'<1j 1q="2a 6I-2l-2a 6I-2l-2a-\'+83+\'">\'+\'<1j 1q="1e 1C-7p">\'+d0+"</1j>"+"</1j>");2a=$(2a)}19.mO(2a.1l(".1o"));ny(2a)}1d if(49==="1y"){if(kr){1y=$(".1y-1k.6I-2l-1y .1e");1y.3O(d0)}1d{1y=19.ka(\'<1j 1q="1y-1k 6I-2l-1y 6I-2l-1y-\'+83+\'"\'+(nn?\' 3A="2c:\'+nn+\'"\':"")+">"+hT+\'<1j 1q="1y-1k-2U">\'+\'<1j 1q="1e">\'+d0+"</1j>"+"</1j>"+"</1j>");1y=$(1y);hU();$("3O").on("3Q",bc);1y.7z("1y:2j",1a(){4l[0].sF=1m;$("3O").3B("3Q",bc);4l.1M(".1o-1B").1W({d1:""})});4l[0].sF=1y[0]}19.mO(1y.1l(".1o"));ny(1y)}1d{$(2g).7z("1o:4N",".6I-2l-1o",fA);1e.22.58({1B:d0,5Y:kr?1f:1m})}};17 zI=1a(5G,14){17 4d={4S:1,2c:19.14.2m?48:44,5B:1f,sV:1,sW:1g,3g:"<li>"+\'<1j 1q="1x-1B">\'+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{1i}}</1j>\'+"</1j>"+"</1j>"+"</li>"};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];17 vl=1i;vl.5G=$(5G);vl.14=14;vl.23=vl.14.23;if(vl.14.sW)vl.84=[];if(vl.14.3g&&!vl.14.nB)if(1r vl.14.3g==="3l")vl.3g=t7.5R(vl.14.3g);1d if(1r vl.14.3g==="1a")vl.3g=vl.14.3g;vl.2i=vl.5G.1M(".1o-1B");17 aI;if(1r vl.14.aI!=="1m")aI=vl.14.aI;1d{aI=1f;if(19.27.5s&&19.27.9N.2W(".")[0]<8)aI=1g;vl.14.aI=aI}vl.ul=vl.14.ul?$(vl.14.ul):vl.5G.2K("ul");if(vl.ul.1b===0){vl.5G.3h("<ul></ul>");vl.ul=vl.5G.2K("ul")}vl.3e={};vl.GX={};vl.ku=2g.9D("ul");vl.kv=29;vl.hV=2g.GY();vl.ym=1a(bX,nC){vl.84=[];17 GZ=bX[0];17 zJ=bX[bX.1b-1];1t(17 i=0;i<bX.1b;i++)vl.84.1Q(vl.23[bX[i]]);if(1r nC==="1m")nC=1f;if(nC)vl.2i[0].2C=0;vl.7H()};vl.yj=1a(){if(vl.14.sW)vl.84=[];1d{vl.84=29;4P vl.84}vl.7H()};17 6c,kw,hW,nD,sX,nE=0,kx;17 hX=1r vl.14.2c==="1a";vl.nF=1a(){17 23=vl.84||vl.23;6c=vl.2i[0].3X;if(hX){kx=0;vl.hY=[];1t(17 i=0;i<23.1b;i++){17 5o=vl.14.2c(23[i]);kx+=5o;vl.hY.1Q(5o)}}1d{kx=1A.d3(23.1b/vl.14.4S)*vl.14.2c;kw=1A.d3(6c/vl.14.2c);hW=vl.14.hW||kw*2;nD=vl.14.nD||kw;sX=kw+hW+nD;nE=hW/2*vl.14.2c}if(aI)vl.ul.1W({2c:kx+"px"})};vl.aJ=1a(7Z,ky){if(7Z)vl.kv=29;17 2C=-(vl.5G[0].kh().2J-vl.2i[0].kh().2J);if(1r ky!=="1m")2C=ky;if(vl.kv===29||1A.3o(2C-vl.kv)>nE||!aI&&vl.2i[0].2C+6c>=vl.2i[0].5l)vl.kv=2C;1d 1c;17 23=vl.84||vl.23,bY,en,sY=0,sZ=0;if(hX){17 eo=0,j,5o;nE=6c;1t(j=0;j<vl.hY.1b;j++){5o=vl.hY[j];if(1r bY==="1m")if(eo+5o>=2C-6c*2*vl.14.sV)bY=j;1d sY+=5o;if(1r en==="1m"){if(eo+5o>=2C+6c*2*vl.14.sV||j===vl.hY.1b-1)en=j+1;sZ+=5o}eo+=5o}en=1A.4Z(en,23.1b)}1d{bY=(3P(2C/vl.14.2c)-hW)*vl.14.4S;if(bY<0)bY=0;en=1A.4Z(bY+sX*vl.14.4S,23.1b)}17 nG;vl.ep=1g;1t(17 i=bY;i<en;i++){17 1x,1I;1I=vl.23.1L(23[i]);if(i===bY)vl.H0=1I;if(i===en-1)vl.H1=1I;if(vl.84){if(vl.23[1I]===vl.84[vl.84.1b-1])vl.ep=1f}1d if(1I===vl.23.1b-1)vl.ep=1f;if(vl.3e[1I])1x=vl.3e[1I];1d{if(vl.3g&&!vl.14.nB)vl.ku.77=vl.3g(23[i],{1I:1I}).68();1d if(vl.14.nB)vl.ku.77=vl.14.nB(1I,23[i]).68();1d vl.ku.77=23[i].ar().68();1x=vl.ku.5b[0];if(vl.14.5B)vl.3e[1I]=1x}1x.ko=1I;if(i===bY)if(hX)nG=sY;1d nG=i*vl.14.2c/vl.14.4S;1x.3A.2J=nG+"px";if(vl.14.zK)vl.14.zK(vl,1x);vl.hV.hZ(1x)}if(!aI)if(hX)vl.ul[0].3A.2c=sZ+"px";1d vl.ul[0].3A.2c=i*vl.14.2c/vl.14.4S+"px";if(vl.14.zL)vl.14.zL(vl,vl.hV);vl.ul[0].77="";if(vl.14.zM)vl.14.zM(vl,vl.hV);if(23&&23.1b===0){vl.ep=1f;if(vl.14.zN)vl.ul[0].77=vl.14.zN}1d vl.ul[0].hZ(vl.hV);if(vl.14.zO)vl.14.zO(vl,vl.hV);if(1r ky!=="1m"&&7Z)vl.2i.2C(ky,0)};vl.H2=1a(1I){if(1I>vl.23.1b)1c 1g;17 eo=0,t0;if(hX)1t(17 i=0;i<1I;i++)eo+=vl.hY[i];1d eo=1I*vl.14.2c;t0=vl.5G[0].hP;vl.aJ(1f,t0+eo-3P(vl.2i.1W("6W-2J"),10));1c 1f};vl.kz=1a(e){vl.aJ()};vl.zP=1a(el){1c!!(el.5u||el.3X||el.H3().1b)};vl.kA=1a(e){if(vl.zP(vl.5G[0])){vl.nF();vl.aJ(1f)}};vl.6s=1a(7X){17 2E=7X?"3B":"on";vl.2i[2E]("4Y",vl.kz);vl.5G.1M(".4F").eq(0)[2E]("4F:5O",vl.kA);vl.5G.1M(".21").eq(0)[2E]("21:3S",vl.kA);vl.5G.1M(".2a").eq(0)[2E]("2a:3S",vl.kA);$(1U)[2E]("8q",vl.kA)};vl.4N=1a(){vl.6s();vl.nF();vl.aJ()};vl.zQ=1a(23){1t(17 i=0;i<23.1b;i++)vl.23.1Q(23[i]);vl.7H()};vl.zR=1a(1x){vl.zQ([1x])};vl.H4=1a(23){vl.23=23;4P vl.84;vl.3e={};vl.7H()};vl.H5=1a(1I,1x){vl.23[1I]=1x;if(vl.14.5B)4P vl.3e[1I];vl.7H()};vl.zS=1a(23){1t(17 i=23.1b-1;i>=0;i--)vl.23.k0(23[i]);if(vl.14.5B){17 8T={};1t(17 36 in vl.3e)8T[3P(36,10)+23.1b]=vl.3e[36];vl.3e=8T}vl.7H()};vl.zT=1a(1x){vl.zS([1x])};vl.zC=1a(9K,6n){if(9K===6n)1c;17 1x=vl.23.aj(9K,1)[0];if(6n>=vl.23.1b){vl.23.1Q(1x);6n=vl.23.1b-1}1d vl.23.aj(6n,0,1x);if(vl.14.5B){17 8T={};1t(17 36 in vl.3e){17 7q=3P(36,10);17 nH=9K<6n?9K:6n;17 nI=9K<6n?6n:9K;17 kB=9K<6n?-1:1;if(7q<nH||7q>nI)8T[7q]=vl.3e[7q];if(7q===nH)8T[nI]=vl.3e[7q];if(7q>nH&&7q<=nI)8T[7q+kB]=vl.3e[7q]}vl.3e=8T}vl.7H()};vl.H6=1a(1I,1x){if(1I===0){vl.zT(1x);1c}if(1I>=vl.23.1b){vl.zR(1x);1c}vl.23.aj(1I,0,1x);if(vl.14.5B){17 8T={};1t(17 36 in vl.3e){17 7q=3P(36,10);if(7q>=1I)8T[7q+1]=vl.3e[7q]}vl.3e=8T}vl.7H()};vl.zU=1a(bX){17 nJ,kB=0;1t(17 i=0;i<bX.1b;i++){17 1I=bX[i];if(1r nJ!=="1m")if(1I>nJ)kB=-i;1I=1I+kB;nJ=bX[i];17 t1=vl.23.aj(1I,1)[0];if(vl.84&&vl.84.1L(t1)>=0)vl.84.aj(vl.84.1L(t1),1);if(vl.14.5B){17 8T={};1t(17 36 in vl.3e){17 7q=3P(36,10);if(7q===1I)4P vl.3e[1I];1d if(3P(36,10)>1I)8T[7q-1]=vl.3e[36];1d 8T[7q]=vl.3e[36]}vl.3e=8T}}vl.7H()};vl.H7=1a(){vl.23=[];4P vl.84;if(vl.14.5B)vl.3e={};vl.7H()};vl.zx=1a(1I){vl.zU([1I])};vl.H8=1a(){vl.3e={}};vl.7H=1a(){vl.nF();vl.aJ(1f)};vl.5N=1a(){vl.6s(1f);4P vl.23;4P vl.3e};vl.4N();vl.5G[0].hl=vl;1c vl};19.59=1a(5G,14){1c 1P zI(5G,14)};19.H9=1a(1s){17 1o=$(1s);17 nK=1o.1l(".dS-3K");if(nK.1b===0)1c;1t(17 i=0;i<nK.1b;i++){17 t2=nK[i].hl;if(t2)t2.7H()}};19.rE=1a(1s){17 7I=$(1s);if(!7I.1v("8v-to-8w-1B"))7I=7I.1l(".8v-to-8w-1B");if(!7I||7I.1b===0)1c;17 i0,2u,2I,3V={},4t,4h,5X,1h,8w=1g,fU=1g,6Y=0,1F,2C,kC,Ha,d4,t3,i2;17 1o=7I.1v("1o")?7I:7I.1M(".1o");17 fV=1g;if(1o.1l(".1C").1b>0||1o.1M(".1C-7p, .1C-9u").1b>0||1o.1v("1C-7p")||1o.1v("1C-9u"))fV=1f;if(1o.1v("no-1C"))fV=1g;if(!fV)7I.1w("8v-to-8w-no-1C");1h=7I;if(1h.1Z("1u-er-6M"))t3=1f;1d d4=44;1a 7g(e){if(2u)if(19.27.os==="5M"){if("3m"in e&&e.3m.1b>1)1c}1d 1c;1h=$(1i);if(1h.1v("fW"))1c;2I=1g;i2=1g;2u=1f;4t=1m;kC=1m;if(e.1S==="4y")i0=e.3m[0].t4;3V.x=e.1S==="4y"?e.3m[0].38:e.38;3V.y=e.1S==="4y"?e.3m[0].2N:e.2N;5X=(1P 2x).3E()}1a 72(e){if(!2u)1c;17 38,2N,5g;if(e.1S==="57"){if(i0&&e.3n)1t(17 i=0;i<e.3n.1b;i++)if(e.3n[i].t4===i0)5g=e.3n[i];if(!5g)5g=e.3m[0];38=5g.38;2N=5g.2N}1d{38=e.38;2N=e.2N}if(!38||!2N)1c;if(1r 4t==="1m")4t=!!(4t||1A.3o(2N-3V.y)>1A.3o(38-3V.x));if(!4t){2u=1g;1c}2C=1h[0].2C;if(1r kC==="1m"&&2C!==0)kC=1f;if(!2I){1h.1K("66");if(2C>1h[0].3X){2u=1g;1c}if(t3){d4=1h.1Z("1u-er-6M");if(d4.1L("%")>=0)d4=1h[0].3X*3P(d4,10)/5c}6Y=1h.1v("fW")?d4:0;if(1h[0].5l===1h[0].3X||19.27.os!=="5s")fU=1f;1d fU=1g}2I=1f;4h=2N-3V.y;if(4h>0&&2C<=0||2C<0){if(19.27.os==="5s"&&3P(19.27.9N.2W(".")[0],10)>7&&2C===0&&!kC)fU=1f;if(fU){e.42();1F=1A.7o(4h,.85)+6Y;1h.1N("2b(0,"+1F+"px,0)")}if(fU&&1A.7o(4h,.85)>d4||!fU&&4h>=d4*2){8w=1f;1h.1w("8v-up").1K("8v-kD")}1d{8w=1g;1h.1K("8v-up").1w("8v-kD")}if(!i2){1h.25("zV er:zV");i2=1f}1h.25("zW er:zW",{bZ:e,2C:2C,1F:1F,4h:4h})}1d{i2=1g;1h.1K("8v-up 8v-kD");8w=1g;1c}}1a 73(e){if(e.1S==="cD"&&e.fX&&e.fX.1b>0&&i0)if(e.fX[0].t4!==i0)1c;if(!2u||!2I){2u=1g;2I=1g;1c}if(1F){1h.1w("66");1F=0}1h.1N("");if(8w){1h.1w("fW");1h.25("8w er:8w",{86:1a(){19.t5(1h)}})}1d 1h.1K("8v-kD");2u=1g;2I=1g;if(i2)1h.25("zX er:zX")}17 4W=19.3x.56==="4y"&&19.4a.4W?{dL:1f,74:1g}:1g;7I.on(19.3x.56,7g,4W);7I.on(19.3x.65,72);7I.on(19.3x.6C,73,4W);if(1o.1b===0)1c;1a nL(){7I.3B(19.3x.56,7g);7I.3B(19.3x.65,72);7I.3B(19.3x.6C,73)}7I[0].t6=nL;1a 7Y(){nL();1o.3B("1o:7y",7Y)}1o.on("1o:7y",7Y)};19.t5=1a(1h){1h=$(1h);if(1h.1b===0)1h=$(".8v-to-8w-1B.fW");1h.1K("fW").1w("66");1h.4A(1a(){1h.1K("66 8v-up 8v-kD");1h.25("Hb er:86")})};19.Hc=1a(1h){1h=$(1h);if(1h.1b===0)1h=$(".8v-to-8w-1B");if(1h.1v("fW"))1c;1h.1w("66 fW");1h.25("8w er:8w",{86:1a(){19.t5(1h)}})};19.nL=1a(1s){1s=$(1s);17 nM=1s.1v("8v-to-8w-1B")?1s:1s.1l(".8v-to-8w-1B");if(nM.1b===0)1c;if(nM[0].t6)nM[0].t6()};1a t8(){17 d5=$(1i);17 2C=d5[0].2C;17 5l=d5[0].5l;17 2c=d5[0].3X;17 6M=d5[0].fY("1u-6M");17 t9=d5.1l(".dS-3K");17 59;17 zY=d5.1v("ec-4Y-2J");if(!6M)6M=50;if(1r 6M==="3l"&&6M.1L("%")>=0)6M=3P(6M,10)/5c*2c;if(6M>2c)6M=2c;if(zY){if(2C<6M)d5.25("ec")}1d if(2C+2c>=5l-6M){if(t9.1b>0){59=t9.eq(-1)[0].hl;if(59&&!59.ep&&!59.14.aI)1c}d5.25("ec")}}19.zZ=1a(es){$(es).on("4Y",t8)};19.A0=1a(es){$(es).3B("4Y",t8)};19.rF=1a(1s){1s=$(1s);17 es=1s.1l(".ec-4Y");if(es.1b===0)1c;19.zZ(es);1a 7Y(){19.A0(es);1s.3B("1o:7y",7Y)}1s.on("1o:7y",7Y)};19.rG=1a(1s){1s=$(1s);17 6o=1s.1l(".1o-1B");if(6o.1b===0)1c;17 cG=(19.14.xs||6o.1v("6t-1C-on-4Y")||6o.1v("6t-nN-on-4Y"))&&!(6o.1v("hC-1C-on-4Y")||6o.1v("hC-nN-on-4Y"));17 ai=(19.14.xt||6o.1v("6t-3j-on-4Y")||6o.1v("6t-nN-on-4Y"))&&!(6o.1v("hC-3j-on-4Y")||6o.1v("hC-nN-on-4Y"));17 i4=(19.14.xu||6o.1v("6t-3t-on-4Y"))&&!6o.1v("hC-3t-on-4Y");if(!(cG||ai||i4))1c;17 4B=6o.1M("."+19.14.7V);if(4B.1b===0)1c;17 1C=4B.1l(".1C"),3j=4B.1l(".3j"),3t;if(i4){3t=4B.1l(".3t");if(3t.1b===0)3t=4B.1M("."+19.14.fi).1l(".3t")}17 fV=1C.1b>0,nO=3j.1b>0,nP=3t&&3t.1b>0;17 nQ,bS;nQ=bS=6o[0].2C;17 5l,3X,ep,2E,i5,i6,i7;17 A1=nO&&ai?3j[0].3X:0;17 A2=nP&&i4?3t[0].3X:0;17 A3=A2||A1;1a kz(e){if(1s.1v("1o-on-1G"))1c;bS=6o[0].2C;5l=6o[0].5l;3X=6o[0].3X;ep=bS+3X>=5l-A3;i5=1C.1v("1C-6V");i6=3j.1v("3j-6V");i7=3t&&3t.1v("3j-6V");if(ep){if(19.14.xv)2E="5O"}1d if(nQ>bS)if(19.14.xw||bS<=44)2E="5O";1d 2E="6t";1d if(bS>44)2E="6t";1d 2E="5O";if(2E==="5O"){if(fV&&cG&&i5){19.jG(1C);1s.1K("no-1C-by-4Y");i5=1g}if(nO&&ai&&i6){19.fr(3j);1s.1K("no-3j-by-4Y");i6=1g}if(nP&&i4&&i7){19.fr(3t);1s.1K("no-3t-by-4Y");i7=1g}}1d{if(fV&&cG&&!i5){19.cG(1C);1s.1w("no-1C-by-4Y");i5=1f}if(nO&&ai&&!i6){19.ai(3j);1s.1w("no-3j-by-4Y");i6=1f}if(nP&&i4&&!i7){19.ai(3t);1s.1w("no-3t-by-4Y");i7=1f}}nQ=bS}6o.on("4Y",kz);6o[0].ta=kz};19.Hd=1a(1s){1s=$(1s);17 6o=1s.1l(".1o-1B");if(6o.1b===0)1c;17 aE=6o[0].ta;if(!aE)1c;6o.3B("4Y",6o[0].ta)};19.tb=1a(3t,d6){3t=$(3t);d6=d6||3t.1l(".4F-4x.2H");if(d6&&d6.1b>0){17 nR,nS;if(3t.1v("3t-He")){nR=d6[0].5u+"px";nS=d6[0].am+"px"}1d{nR=1/3t.1l(".4F-4x").1b*5c+"%";nS=(19.3r?-d6.1I():d6.1I())*5c+"%"}3t.1l(".4F-4x-i8").1W({3q:nR}).1N("2b("+nS+",0,0)")}};19.mQ=1a(1s){1s=$(1s);17 3t=1s.1l(".3t");if(3t.1b===0&&1s.1v("3t"))3t=1s;1a nT(){19.tb(3t)}if(3t.1b>0){if(3t.1l(".4F-4x-i8").1b===0)3t.1l(".3j-2U").3h(\'<2B 1q="4F-4x-i8"></2B>\');nT();$(1U).on("8q",nT);1s.7z("1o:7y",1a(){$(1U).3B("8q",nT)})}};19.A4=1a(3t){1c 19.mQ(3t)};19.tc=1a(4F,8x,2e,7Z){17 87=$(4F);if(2p.1b===2&&1r 2p[1]==="n2"){4F=2p[0];2e=2p[1]}if(2p.1b===3&&1r 2p[1]==="n2"&&1r 2p[2]==="n2"){4F=2p[0];2e=2p[1];7Z=2p[2]}if(1r 2e==="1m")2e=1f;if(87.1b===0)1c 1g;if(87.1v("2H")){if(7Z)87.25("5O 4F:5O");1c 1g}17 7m=87.4i(".7m");if(7m.1b===0)1c 1g;19.fN=1f;17 te=7m.4i().1v("7m-2e-fI");if(te){7m.4i()[2e?"1K":"1w"]("2k-2e");17 A5=(19.3r?87.1I():-87.1I())*5c;7m.1N("2b("+A5+"%,0,0)")}17 tf=7m.4i().1v("7m-hF-fI"),1D;if(tf){1D=7m.4i()[0].1D;if(1D.2w!==87.1I())1D.4o(87.1I(),2e?1m:0,1g)}17 kE=7m.2K(".4F.2H").1K("2H").25("6t 4F:6t");87.1w("2H");87.25("5O 4F:5O");if(!te&&!tf&&87.1l(".1C").1b>0){17 4B;if(87.1v(19.14.7V))4B=87[0];1d 4B=87.1M("."+19.14.7V)[0];19.9v(4B)}if(8x)8x=$(8x);1d{if(1r 4F==="3l")8x=$(\'.4F-4x[5h="\'+4F+\'"]\');1d 8x=$(\'.4F-4x[5h="#\'+87.1Z("id")+\'"]\');if(!8x||8x&&8x.1b===0)$("[1u-4F]").2r(1a(){if(87.is($(1i).1Z("1u-4F")))8x=$(1i)})}if(8x.1b===0)1c;17 d7;if(kE&&kE.1b>0){17 tg=kE.1Z("id");if(tg)d7=$(\'.4F-4x[5h="#\'+tg+\'"]\');if(!d7||d7&&d7.1b===0)$("[1u-4F]").2r(1a(){if(kE.is($(1i).1Z("1u-4F")))d7=$(1i)})}if(8x&&8x.1b>0){8x.1w("2H");if(19.14.2m){17 3t=8x.1M(".3t");if(3t.1b>0){if(3t.1l(".4F-4x-i8").1b===0)3t.1l(".3j-2U").3h(\'<2B 1q="4F-4x-i8"></2B>\');19.tb(3t,8x)}}}if(d7&&d7.1b>0)d7.1K("2H");1c 1f};19.A6=1a(1x){1x=$(1x);if(1x.1b===0)1c;if(1x.1v("6N-1x-i9"))19.ti(1x);1d 19.A7(1x)};19.A7=1a(1x){1x=$(1x);17 3K=1x.1M(".6N-3K").eq(0);17 1B=1x.2K(".6N-1x-1B");if(1B.1b===0)1B=1x.1l(".6N-1x-1B");17 tj=3K.1b>0&&1x.4i().2K(".6N-1x-i9");if(tj.1b>0)19.ti(tj);1B.1W("2c",1B[0].5l+"px").4A(1a(){if(1x.1v("6N-1x-i9")){1B.2f(0);1B.1W("2c","8u");17 4j=1B[0].4j;1B.2f("");1x.25("2q 6N:2q")}1d{1B.1W("2c","");1x.25("5E 6N:5E")}});1x.25("3S 6N:3S");1x.1w("6N-1x-i9")};19.ti=1a(1x){1x=$(1x);17 1B=1x.2K(".6N-1x-1B");if(1B.1b===0)1B=1x.1l(".6N-1x-1B");1x.1K("6N-1x-i9");1B.2f(0);1B.1W("2c",1B[0].5l+"px");17 4j=1B[0].4j;1B.2f("");1B.1W("2c","").4A(1a(){if(1x.1v("6N-1x-i9")){1B.2f(0);1B.1W("2c","8u");17 4j=1B[0].4j;1B.2f("");1x.25("2q 6N:2q")}1d{1B.1W("2c","");1x.25("5E 6N:5E")}});1x.25("2j 6N:2j")};19.tk=1a(){if(19.14.dG)$("3O").1w("Hf-2H-4X");if(19.27.5s&&19.27.kF)1U.8U("4y",1a(){});17 aK,7F,5X,6Z,c0,kG,d8,et,2I,kH,eu;17 bd,ia,ib,nU;17 9O,bf,kI,kJ;1a tl(el){17 1X=$(el);17 1M=1X.1M(19.14.qQ);17 fZ;if(1X.is(19.14.qQ))fZ=1X;if(1M.1b>0)fZ=fZ?fZ.9b(1M):1M;1c fZ?fZ:1X}1a tm(el){17 2i=el.1M(".1o-1B, .21");if(2i.1b===0)1c 1g;if(2i.2R("A8")!=="A9"){2i.on("4Y",1a(){5m(ia);5m(kJ)});2i.2R("A8","A9")}1c 1f}1a nV(){if(!bd)1c;bd.1w("2H-4X")}1a d9(el){if(!bd)1c;bd.1K("2H-4X");bd=29}1a Aa(el){17 Ab="1z 2l 3C 55".2W(" ");if(el.8t&&Ab.1L(el.8t.5P())>=0)1c 1f;1c 1g}1a Ac(el){17 Ad="2M 1z 3C 2l".2W(" ");if(2g.89&&el!==2g.89&&2g.89!==2g.5K)if(Ad.1L(el.8t.5P())>=0)1c 1g;1d 1c 1f;1d 1c 1g}1a Ae(el){17 $el=$(el);if(el.8t.5P()==="1z"&&(el.1S==="kK"||el.1S==="4R"))1c 1g;if(el.8t.5P()==="2l"&&19.27.5M)1c 1g;if($el.1v("no-Af")||$el.1M(".no-Af").1b>0)1c 1g;if(19.14.qP&&$el.is(19.14.qP))1c 1g;1c 1f}1a Ag(el){if(2g.89===el)1c 1g;17 da=el.8t.5P();17 Ah="2M 6g kK 1H 8K 8m".2W(" ");if(el.5w||el.tn)1c 1g;if(da==="3C")1c 1f;if(da==="2l")if(19.27.5M)1c 1g;1d 1c 1f;if(da==="1z"&&Ah.1L(el.1S)<0)1c 1f}1a Ai(el){el=$(el);17 ev=1f;if(el.is("55")||el.1M("55").1b>0)if(19.27.5M)ev=1g;1d if(19.27.5s&&el.is("1z"))ev=1f;1d ev=1g;1c ev}1a Aj(e){tl(e.1X).1w("2H-4X");if("nW"in e&&e.nW===3)4k(1a(){$(".2H-4X").1K("2H-4X")},0);if(19.14.2m&&19.14.bC){aK=e.38;7F=e.2N;tp(e.1X,e.38,e.2N)}}1a Ak(e){$(".2H-4X").1K("2H-4X");if(19.14.2m&&19.14.bC)tq()}1a Al(e){$(".2H-4X").1K("2H-4X");if(19.14.2m&&19.14.bC)ic()}1a Am(el){17 nX=19.14.xU;17 $el=$(el);if($el.is(nX)){if($el.1v("no-h4"))1c 1g;1c $el}1d if($el.1M(nX).1b>0){17 ts=$el.1M(nX).eq(0);if(ts.1v("no-h4"))1c 1g;1c ts}1d 1c 1g}1a nY(x,y,el){if(!el)1c;17 bh=el[0].kh();17 2O={x:x-bh.1G,y:y-bh.2J},2c=bh.2c,3q=bh.3q;17 kL=1A.4C(1A.7o(1A.7o(2c,2)+1A.7o(3q,2),.5),48);9O=$(\'<1j 1q="h4-tt" 3A="3q: \'+kL+"px; 2c: "+kL+"px; cJ-2J:-"+kL/2+"px; cJ-1G:-"+kL/2+"px; 1G:"+2O.x+"px; 2J:"+2O.y+\'px;"></1j>\');el.98(9O);17 4j=9O[0].4j;kI="2b("+(-2O.x+3q/2)+"px, "+(-2O.y+2c/2)+"px, 0) 3L(1)";9O.1N(kI)}1a kM(){if(!9O)1c;17 An=9O;17 nZ=4k(1a(){An.43()},dT);9O.1w("h4-tt-Hg").1N(kI.31("3L(1)","3L(1.Ao)")).4A(1a(){5m(nZ);17 9O=$(1i).1w("h4-tt-6v").1N(kI.31("3L(1)","3L(1.Ao)"));nZ=4k(1a(){9O.43()},Hh);4k(1a(){9O.4A(1a(){5m(nZ);$(1i).43()})},0)});9O=bf=1m}1a tp(el,x,y){bf=Am(el);if(!bf||bf.1b===0){bf=1m;1c}if(!tm(bf))nY(aK,7F,bf);1d kJ=4k(1a(){nY(aK,7F,bf)},80)}1a tq(){5m(kJ);kM()}1a ic(){if(9O)kM();1d if(bf&&!2I){5m(kJ);nY(aK,7F,bf);4k(kM,0)}1d kM()}1a Ap(e){17 5g=e.fX[0];17 c1=2g.Aq("Hi");17 tu="3Q";if(19.27.5M&&6Z.8t.5P()==="2l")tu="dH";c1.Hj(tu,1f,1f,1U,1,5g.Hk,5g.Hl,5g.Ar,5g.As,1g,1g,1g,1g,0,29);c1.At=1f;6Z.Au(c1)}1a 7g(e){2I=1g;kH=1g;if(e.3m.1b>1){if(bd)d9();1c 1f}if(e.3n.1b>1&&bd)d9();if(19.14.jv){if(eu)5m(eu);eu=4k(1a(){if(e&&e.3n&&e.3n.1b>1)1c;kH=1f;e.42();$(e.1X).25("Hm")},19.14.xp)}if(nU)5m(nU);ib=Ae(e.1X);if(!ib){c0=1g;1c 1f}if(19.27.5s||19.27.5M&&"Av"in 1U){17 kN=1U.Av();if(kN.Hn&&kN.Aw!==2g.5K&&(!kN.Ho||2g.89===kN.Aw)){kG=1f;1c 1f}1d kG=1g}if(19.27.5M)if(Ac(e.1X))2g.89.bH();c0=1f;6Z=e.1X;5X=(1P 2x).3E();aK=e.3m[0].38;7F=e.3m[0].2N;if(19.27.5s){d8=1m;$(6Z).1M().2r(1a(){17 4i=1i;if(4i.5l>4i.3X&&!d8){d8=4i;d8.Ax=d8.2C}})}if(e.o0-et<19.14.qO)e.42();if(19.14.dG){bd=tl(6Z);if(!tm(bd))nV();1d ia=4k(nV,80)}if(19.14.2m&&19.14.bC)tp(6Z,aK,7F)}1a 72(e){if(!c0)1c;17 o1=1g;17 6M=19.14.xo;if(6M){17 38=e.3m[0].38;17 2N=e.3m[0].2N;if(1A.3o(38-aK)>6M||1A.3o(2N-7F)>6M)o1=1f}1d o1=1f;if(o1){c0=1g;6Z=29;2I=1f;if(19.14.jv)5m(eu);if(19.14.dG){5m(ia);d9()}if(19.14.2m&&19.14.bC)tq()}}1a 73(e){5m(ia);5m(eu);if(!c0){if(!kG&&ib)if(!(19.27.5M&&!e.tv))e.42();1c 1f}if(2g.89===e.1X){if(19.14.dG)d9();if(19.14.2m&&19.14.bC)ic();1c 1f}if(!kG)e.42();if(e.o0-et<19.14.qO){4k(d9,0);1c 1f}et=e.o0;c0=1g;if(19.27.5s&&d8)if(d8.2C!==d8.Ax)1c 1g;if(19.14.dG){nV();4k(d9,0)}if(19.14.2m&&19.14.bC)ic();if(Ag(6Z))if(19.27.5s&&19.27.kF){if(bZ.o0-5X>Hp){6Z=29;1c 1g}6Z.8l();1c 1g}1d 6Z.8l();if(2g.89&&6Z!==2g.89&&2g.89!==2g.5K&&6Z.8t.5P()!=="55")2g.89.bH();e.42();Ap(e);1c 1g}1a Ay(e){c0=1g;6Z=29;5m(ia);5m(eu);if(19.14.dG)d9();if(19.14.2m&&19.14.bC)ic()}1a o2(e){17 7r=1g;if(c0){6Z=29;c0=1g;1c 1f}if(e.1X.1S==="8m"&&e.fT===0||e.1X.1S==="kK")1c 1f;if(!6Z)if(!Aa(e.1X))7r=1f;if(!ib)7r=1f;if(2g.89===6Z)7r=1f;if(e.At)7r=1f;if(!e.tv)7r=1f;if(19.14.jv&&19.14.xq&&kH)7r=1g;if(!7r){e.Az();e.kO();if(6Z){if(Ai(6Z)||2I)e.42()}1d e.42();6Z=29}nU=4k(1a(){ib=1g},19.27.5s||19.27.o3?5c:dT);if(19.14.jv)eu=4k(1a(){kH=1g},19.27.5s||19.27.o3?5c:dT);1c 7r}if(19.4a.5g){2g.8U("3Q",o2,1f);2g.8U("4y",7g);2g.8U("57",72);2g.8U("cD",73);2g.8U("Hq",Ay)}1d if(19.14.dG){2g.8U("dH",Aj);2g.8U("h6",Ak);2g.8U("jz",Al)}if(19.14.2m&&19.14.bC)2g.8U("Hr",1a(e){if(bd)d9();ic()})};19.tw=1a(){1a AB(e){17 2Z=$(1i);17 1X=$(e.1X);17 ig=2Z[0].8t.5P()==="a"||2Z.1M("a").1b>0||1X[0].8t.5P()==="a"||1X.1M("a").1b>0;if(ig)1c;17 2i,1o;if(19.14.qV&&2Z.is(".1C .2O")){17 1C=2Z.1M(".1C");2i=1C.1M(".1o-1B");if(2i.1b===0){if(1C.1M(".1o").1b>0)2i=1C.1M(".1o").1l(".1o-1B");if(2i.1b===0)if(1C.jN(".dI").1b>0)2i=1C.jN(".dI").1l(".1o:2k(.1o-on-1G):2k(.1o-on-1Y):2k(.36)").1l(".1o-1B")}}if(19.14.qW&&2Z.is(".fj-2s"))if($(".2a.1k-in").1b>0)2i=$(".2a.1k-in").1l(".1o:2k(.1o-on-1G):2k(.1o-on-1Y):2k(.36)").1l(".1o-1B");1d if($(".21.2H").1b>0)2i=$(".21.2H").1l(".1o:2k(.1o-on-1G):2k(.1o-on-1Y):2k(.36)").1l(".1o-1B");1d if($(".5L > .1e.2H").1b>0)2i=$(".5L > .1e.2H").1l(".1o:2k(.1o-on-1G):2k(.1o-on-1Y):2k(.36)").1l(".1o-1B");1d 2i=$(".5L").1l(".1o:2k(.1o-on-1G):2k(.1o-on-1Y):2k(.36)").1l(".1o-1B");if(2i&&2i.1b>0){if(2i.1v("4F"))2i=2i.4i(".7m").2K(".1o-1B.2H");if(2i.1b>0)2i.2C(0,4u)}}1a AC(e){17 2Z=$(1i);17 1n=2Z.1Z("5h");17 ig=2Z[0].8t.5P()==="a";if(ig)if(2Z.is(19.14.xr)||1n&&1n.1L("AD:")>=0){if(1n&&2Z.1Z("1X")==="AF"){e.42();1U.3S(1n,"AF")}1c}17 4T=2Z.4H();if(2Z.1v("6I-2l"))if(19.nm)19.nm(2Z);if(2Z.1v("3S-21"))if($(".21").1b===1)if($(".21").1v("21-1G"))19.cV("1G");1d 19.cV("1Y");1d if(4T.21==="1Y")19.cV("1Y");1d 19.cV("1G");if(2Z.1v("2j-21"))19.ed();if(2Z.1v("21-2s")){$(".21.2H").25("21:2s-3Q");if(19.14.xH)19.ed()}if(2Z.1v("3S-2F")){17 2F;if(4T.2F)2F=4T.2F;1d 2F=".2F";19.2F(2F,2Z)}if(2Z.1v("2j-2F"))19.5i(".2F.1k-in");17 2a;if(2Z.1v("3S-2a")){if(4T.2a)2a=4T.2a;1d 2a=".2a";19.2a(2a)}if(2Z.1v("2j-2a")){if(4T.2a)2a=4T.2a;1d 2a=".2a.1k-in";19.5i(2a)}17 e9;if(2Z.1v("3S-96-8k")){if(4T.e9)e9=4T.e9;1d e9=".96-8k";19.e9(e9)}if(2Z.1v("2j-96-8k"))19.5i(".96-8k.1k-in");if(2Z.1v("1k-2s")){if($(".1k.1k-in").1b>0&&19.14.xJ)19.5i(".1k.1k-in");if($(".3F-1k.1k-in").1b>0&&19.14.xK)19.5i(".3F-1k.1k-in");if($(".2F.1k-in").1b>0)19.5i(".2F.1k-in")}if(2Z.1v("2a-2s"))if($(".2a.1k-in").1b>0&&19.14.xL)19.5i(".2a.1k-in");if(2Z.1v("1y-1k-2s"))if($(".1y-1k.1k-in").1b>0)19.5i(".1y-1k.1k-in");if(2Z.1v("2j-1y")){17 ih=$(".1y-1k.1k-in");if(ih.1b>0)19.5i(ih);1d{ih=$(".2F.1k-in .1y-1k");if(ih.1b>0)19.5i(ih.1M(".2F"))}}if(2Z.1v("3S-1y")){17 o4;if(4T.1y)o4=4T.1y;1d o4=".1y-1k";19.ka(o4,2Z)}17 tA;if(2Z.1v("4F-4x")){tA=1f;19.tc(4T.4F||2Z.1Z("5h"),2Z)}if(2Z.1v("2D-2j"))19.fP(2Z.1M(".2D-2q"));if(2Z.1v("2D-4P"))if(4T.k5){17 28=4T.k5;17 2S=4T.Hs;if(2S)19.k5(28,2S,1a(){19.nf(2Z.1M(".2D"))},1a(){if(4T.AG)19.fP(2Z.1M(".2D"))});1d 19.k5(28,1a(){19.nf(2Z.1M(".2D"))},1a(){if(4T.AG)19.fP(2Z.1M(".2D"))})}1d 19.nf(2Z.1M(".2D"));if(2Z.1v("kP-4L"))19.zy(4T.4L);if(2Z.1v("3S-4L"))19.zz(4T.4L);if(2Z.1v("2j-4L"))19.zB(4T.4L);if(2Z.1v("6N-1x-kP")||2Z.1v("1x-4x")&&2Z.4i().1v("6N-1x")){17 ii=2Z.4i(".6N-1x");if(ii.1b===0)ii=2Z.1M(".6N-1x");if(ii.1b===0)ii=2Z.1M("li");19.A6(ii)}if(2Z.1v("9p-2M")&&2Z.4i().1v("4c-h5"))2Z.4i().hN("4c-h5-2q");if(2Z.1v("2j-4c-h5"))$(".4c-h5-2q").1K("4c-h5-2q");if(19.14.qR&&!2Z.is(19.14.qR)||!ig||!19.14.22)1c;if(ig)e.42();17 AH=1n&&1n.1b>0&&1n!=="#"&&!tA;17 3g=4T.3g;if(AH||2Z.1v("3z")||3g){17 1e;if(4T.1e)1e=$(4T.1e)[0].70;1d{1e=2Z.1M("."+19.14.7V)[0]&&2Z.1M("."+19.14.7V)[0].70;if(1e&&1e.14.h8)if(1r 1e.14.h8==="3l")1e=$(1e.14.h8)[0].70;1d if(1e.14.h8 7J h7)1e=1e.14.h8}if(!1e)if(19.b2)1e=19.b2;if(!1e)1c;17 2v;if(!3g){if(1n&&1n.1L("#")===0&&1n!=="#")if(1e.14.3e)2v=1n.2W("#")[1];1d 1c;if(1n==="#"&&!2Z.1v("3z"))1c}1d 1n=1m;17 3w;if(1r 4T.3w!=="1m")3w=4T.3w;1d{if(2Z.1v("7w-AI"))3w=1f;if(2Z.1v("no-AI"))3w=1g}17 1p={3w:3w,ah:4T.ah,7Z:4T.7Z,5Y:4T.5Y,93:4T.93,2v:2v,4K:4T.4K,1n:1n};if(19.14.mj){1p.97=4T.97;17 2T=4T.2T;if(2T)1p.2T=ew.o5(2T)}if(3g&&3g in t7.ab)1p.3g=t7.ab[3g];if(2Z.1v("3z"))1e.22.3z(1p);1d 1e.22.58(1p)}}$(2g).on("3Q","a, .3S-21, .2j-21, .21-2s, .1k-2s, .2a-2s, .2D-4P, .2D-2j, .2j-2a, .3S-2a, .3S-2F, .3S-96-8k, .2j-96-8k .6I-2l, .kP-4L, .3S-4L, .2j-4L, .6N-1x-kP, .2j-1y, .1y-1k-2s",AC);if(19.14.qV||19.14.qW)$(2g).on("3Q",".fj-2s, .1C .2O",AB);1a AJ(e){e.42()}if(19.4a.5g&&!19.27.5M)$(2g).on(19.14.qN?"4y":"57",".21-2s, .1k-2s, .41-hw-2s, .2a-2s, .2G-2s",AJ)};1a tB(){if(19.27.8R){2g.5K.7x=0;4k(1a(){2g.5K.7x=0},0)}}19.tC=1a(){$(1U).on("8q",19.8q);$(1U).on("tD",19.tD)};19.8q=1a(){if(19.9v)19.9v();tB()};19.tD=1a(){if(19.27&&19.27.AK)if(1U.AL===90||1U.AL===-90)2g.5K.2C=0;tB()};19.g0={};19.AM=1a(7K,g1){19.g0[7K]=g1;19.ls["ij-"+7K]=ew.o6(g1)};19.Ht=1a(7K){if(19.g0[7K]){19.g0[7K]="";4P 19.g0[7K]}if(19.ls["ij-"+7K]){19.ls["ij-"+7K]="";19.ls.Hu("ij-"+7K)}};19.AN=1a(7K){if(19.ls["ij-"+7K])1c ew.o5(19.ls["ij-"+7K]);1d if(19.g0[7K])1c 19.g0[7K]};19.o7=1a(3p){3p=$(3p);if(3p.1b!==1)1c 1g;17 6O={};17 o8=["8m","1H","2M","kK"];17 c2=[];3p.1l("1z, 2l, 3C").2r(1a(){17 1z=$(1i);17 1R=1z.1Z("1R");17 1S=1z.1Z("1S");17 da=1i.8t.5P();if(o8.1L(1S)>=0)1c;if(c2.1L(1R)>=0||!1R)1c;if(da==="2l"&&1z.2R("eh")){c2.1Q(1R);6O[1R]=[];3p.1l(\'2l[1R="\'+1R+\'"] 5d\').2r(1a(){if(1i.5y)6O[1R].1Q(1i.1J)})}1d AP(1S){o9"6g":c2.1Q(1R);6O[1R]=[];3p.1l(\'1z[1R="\'+1R+\'"]\').2r(1a(){if(1i.8S)6O[1R].1Q(1i.1J)});aq;o9"8K":c2.1Q(1R);3p.1l(\'1z[1R="\'+1R+\'"]\').2r(1a(){if(1i.8S)6O[1R]=1i.1J});aq;AQ:6O[1R]=1z.5k();aq}});3p.25("tE o7 3p:Hv",{6O:6O});1c 6O};19.tE=19.o7;19.oa=1a(3p,6O){3p=$(3p);if(3p.1b!==1)1c 1g;17 o8=["8m","1H","2M","kK"];17 c2=[];3p.1l("1z, 2l, 3C").2r(1a(){17 1z=$(1i);17 1R=1z.1Z("1R");17 1S=1z.1Z("1S");17 da=1i.8t.5P();if(1r 6O[1R]==="1m"||6O[1R]===29)1c;if(o8.1L(1S)>=0)1c;if(c2.1L(1R)>=0||!1R)1c;if(da==="2l"&&1z.2R("eh")){c2.1Q(1R);3p.1l(\'2l[1R="\'+1R+\'"] 5d\').2r(1a(){if(6O[1R].1L(1i.1J)>=0)1i.5y=1f;1d 1i.5y=1g})}1d AP(1S){o9"6g":c2.1Q(1R);3p.1l(\'1z[1R="\'+1R+\'"]\').2r(1a(){if(6O[1R].1L(1i.1J)>=0)1i.8S=1f;1d 1i.8S=1g});aq;o9"8K":c2.1Q(1R);3p.1l(\'1z[1R="\'+1R+\'"]\').2r(1a(){if(6O[1R]===1i.1J)1i.8S=1f;1d 1i.8S=1g});aq;AQ:1z.5k(6O[1R]);aq}if(da==="2l"&&1z.1M(".6I-2l").1b>0)1z.25("6F")});3p.25("AR oa 3p:Hw",{6O:6O})};19.AR=19.oa;19.rC=1a(1s){1s=$(1s);17 kQ=1s.1l("3p.AS-1u");if(kQ.1b===0)1c;kQ.2r(1a(){17 id=1i.fY("id");if(!id)1c;17 6O=19.AN(id);if(6O)19.oa(1i,6O)});1a tF(){17 3p=$(1i);17 7K=3p[0].id;if(!7K)1c;17 g1=19.o7(3p);if(!g1)1c;19.AM(7K,g1);3p.25("AS 3p:Hx",{1u:g1})}kQ.on("6F 8m",tF);1a 9z(){kQ.3B("6F 8m",tF);1s.3B("1o:7y",9z)}1s.on("1o:7y",9z)};$(2g).on("8m 6F","3p.7A-8m, 3p.7A-8m-AT",1a(e){17 3p=$(1i);if(e.1S==="6F"&&!3p.1v("7A-8m-AT"))1c;if(e.1S==="8m")e.42();17 3i=(3p.1Z("3i")||"hp").hr();17 g2=3p.2R("AW")||3p.1Z("AW");17 1n=3p.1Z("2E");if(!1n)1c;17 1u;if(3i==="tG")1u=1P AX(3p[0]);1d 1u=$.ik(19.tE(3p[0]));17 26=$.7A({3i:3i,1n:1n,g2:g2,1u:1u,mH:1a(26){3p.25("Hy 3p:Hz",{1u:1u,26:26})},69:1a(26){3p.25("HA 3p:69",{1u:1u,26:26})},aL:1a(1u){3p.25("HB 3p:aL",{1u:1u,26:26})}})});19.AZ=1a(3C){3C=$(3C);if(!3C.1v("tH"))1c;3C.1W({"2c":""});17 2c=3C[0].3X;17 3W=2c-3C[0].rt;17 5l=3C[0].5l;if(5l+3W>2c){17 hm=5l+3W;3C.1W("2c",hm+"px")}};19.B0=1a(3C){3C=$(3C);if(3C.1b===0)1c;17 ho;1a jR(){5m(ho);ho=4k(1a(){19.AZ(3C)},0)}3C[0].kR=1a(){3C.3B("6F dW jO jP rv rw",jR)};1c 3C.on("6F dW jO jP rv rw",jR)};19.HC=1a(1s){1s=$(1s);if(1s.1b>0&&1s.is("3C")&&1s[0].kR)1s[0].kR();1d if(1s.1b>0)1s.1l("3C.HD").2r(1a(){17 3C=1i;if(3C.kR)3C.kR()})};19.rJ=1a(1s){1s=$(1s);17 tI=1s.1l("3C.tH");tI.2r(1a(){19.B0(1i)})};19.rL=1a(1s){1s=$(1s);17 tI=1s.1l("3C.tH");1s.1l(".1x-1z").2r(1a(){17 kS=$(1i);17 il=["6g","2M","8m","4R","8K","1H"];kS.1l("1z, 2l, 3C").2r(1a(){17 1z=$(1i);if(il.1L(1z.1Z("1S"))<0){kS.1w("1x-1z-cP");if(1z.5k().68()!=="")1z.1M(".1x-1z, .1z-cP").9b(1z.1M(".1x-2U")).1w("2k-cK-4X")}});if(kS.1M(".1z-1x, .B1-3K").1b>0)1c;kS.1M(".3K-39").eq(0).1w("B1-3K")})};19.tJ=1a(){17 il=["6g","2M","8m","4R","8K","1H"];1a B2(e){17 i=$(1i);17 1S=i.1Z("1S");if(il.1L(1S)>=0)1c;17 8V=i.9b(i.1M(".1x-1z, .1z-cP")).9b(i.1M(".1x-2U").eq(0));8V.1w("8l-4X")}1a B3(e){17 i=$(1i),1J=i.5k();17 1S=i.1Z("1S");if(il.1L(1S)>=0)1c;17 8V=i.9b(i.1M(".1x-1z, .1z-cP")).9b(i.1M(".1x-2U").eq(0));8V.1K("8l-4X");if(1J&&1J.68()!=="")8V.1w("2k-cK-4X");1d 8V.1K("2k-cK-4X")}1a B4(e){17 i=$(1i),1J=i.5k();17 1S=i.1Z("1S");if(il.1L(1S)>=0)1c;17 8V=i.9b(i.1M(".1x-1z, .1z-cP")).9b(i.1M(".1x-2U").eq(0));if(1J&&1J.68()!=="")8V.1w("2k-cK-4X");1d 8V.1K("2k-cK-4X")}$(2g).on("6F",".1x-1z 1z, .1x-1z 2l, .1x-1z 3C, 1z, 3C, 2l",B4,1f);$(2g).on("8l",".1x-1z 1z, .1x-1z 2l, .1x-1z 3C, 1z, 3C, 2l",B2,1f);$(2g).on("bH",".1x-1z 1z, .1x-1z 2l, .1x-1z 3C, 1z, 3C, 2l",B3,1f)};19.g3=[];19.s1=1a(){if(19.g3.1b===0)1c;17 9P=19.g3.mZ();17 3w;if(19.14.me===1f)3w=1g;if(9P.2E==="3z")19.22.3z(9P.1e,{3w:3w});if(9P.2E==="jE")19.22.58(9P.1e,{1n:9P.db,3w:3w,4K:1g});if(9P.2E==="hc")19.22.58(9P.1e,{1B:9P.im,3w:3w,4K:1g});if(9P.2E==="B5")19.22.58(9P.1e,{2v:9P.io,1n:9P.db,3w:3w,4K:1g})};19.tK=1a(){17 ob=1f;$(1U).on("58",1a(){4k(1a(){ob=1g},0)});if(2g.B6&&2g.B6==="8n")ob=1g;1a B7(e){if(ob)1c;17 b2=19.b2;if(!b2)1c;17 4X=e.4X;if(!4X)4X={dM:19.5L.1L(b2),1n:b2.2V[0]};if(4X.dM<0)1c;17 1e=19.5L[4X.dM];17 db=4X&&4X.1n||1m;17 im=4X&&4X.1B||1m;17 io=4X&&4X.2v||1m;17 3w;if(19.14.me===1f)3w=1g;if(db!==1e.1n)if(1e.2V.1L(db)>=0)if(1e.5t)19.22.3z(1e,{1n:1m,3w:3w,4K:1g,b6:1g});1d 19.g3.1Q({2E:"3z",1e:1e});1d if(im)if(1e.5t)19.22.58(1e,{1B:im,3w:3w,4K:1g});1d 19.g3.k0({2E:"hc",im:im,1e:1e});1d if(io)if(1e.5t)19.22.58(1e,{2v:io,1n:db,3w:3w,4K:1g});1d 19.g3.k0({2E:"B5",io:io,1e:1e});1d if(1e.5t)19.22.58(1e,{1n:db,3w:3w,4K:1g});1d 19.g3.k0({2E:"jE",db:db,1e:1e})}$(1U).on("B8",B7)};19.1D=1a(1h,14){1c 1P c3(1h,14)};19.rD=1a(1s){1s=$(1s);17 ip=1s.1l(".1D-4N, .7m-hF-fI");if(ip.1b===0)1c;1a B9(Ba){1a tL(){Ba.5N();1s.3B("1o:7y",tL)}1s.on("1o:7y",tL)}ip.2r(1a(){17 1D=$(1i),9Q;17 14;if(1D.1v("7m-hF-fI")){1D.1w("1D-1h").2K(".7m").1w("1D-1T").2K(".4F").1w("1D-1E");9Q=1D.2K(".7m").2K(".4F.2H").1I()}if(1D.1u("1D"))14=ew.o5(1D.1u("1D"));1d 14=1D.4H();if(1r 14.9Q==="1m"&&1r 9Q!=="1m")14.9Q=9Q;if(1D.1v("7m-hF-fI"))14.oc=1a(s){19.tc(s.1O.eq(s.2w))};17 Bb=19.1D(1D[0],14);B9(Bb)})};19.rM=1a(1s){1s=$(1s);17 od=1s.1l(".1D-4N, .7m-hF-fI");if(od.1b===0)1c;1t(17 i=0;i<od.1b;i++){17 tM=od[0].1D;if(tM)tM.7H(1f)}};17 Bc=1a(14){17 pb=1i,i;17 4d={tN:[],9Q:0,53:20,4c:4u,4p:1f,9i:3,dc:1,Bd:1f,og:1g,1S:"kT",1C:1f,3j:1f,bW:"HE",Be:1f,iq:"mh",Bf:"of",4e:1g,bi:1g,kU:1g,g4:1g,2m:19.14.2m,r4:19.14.r4,bB:19.14.bB};14=14||{};if(!14.iq&&19.14.2m)4d.iq="";1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];if(14.Bg)14.9i=14.Bg;if(14.Bh)14.dc=14.Bh;pb.14=14;pb.14.oh=pb.14.Bi?"4Q-"+pb.14.Bi:pb.14.bW==="Bj"?"4Q-s8":"";pb.14.Bk=pb.14.bW==="Bj"?"41-s8":"";17 tO=pb.14.tO||\'<1j 1q="3u-3b-1E 1D-1E">\'+\'<2B 1q="1D-4p-1h">\'+\'<7n 5x="{{js "1i.1n || 1i"}}">\'+"</2B>"+"</1j>";17 Bl=pb.14.HF||\'<1j 1q="3u-3b-1E 3u-3b-1E-47 1D-1E">\'+\'<1j 1q="41 {{@40.Bk}}">{{#if @40.2m}}{{@40.bB}}{{/if}}</1j>\'+\'<2B 1q="1D-4p-1h">\'+\'<7n 1u-5x="{{js "1i.1n || 1i"}}" 1q="1D-47">\'+"</2B>"+"</1j>";17 tP=pb.14.tP||\'<1j 1q="3u-3b-1E 3u-3b-6d-1E 1D-1E">{{js "1i.3O || 1i"}}</1j>\';17 tQ=pb.14.tQ||\'<1j 1q="3u-3b-de" 1u-de-1I="{{@1I}}">\'+"{{de}}"+"</1j>";17 g5=pb.14.g5||\'<1j 1q="1C">\'+\'<1j 1q="1C-2U">\'+\'<1j 1q="1G 3f">\'+\'<a 5h="#" 1q="4x \'+(14.1S==="2a"?"2j-2a":"3u-3b-2j-4x")+" {{#df iq}}2P-em{{/df}} {{js \\"1i.1S === \'1o\' ? \'3z\' : \'\'\\"}}\\">"+\'<i 1q="2P 2P-3z {{oh}}"></i>\'+"{{#if iq}}<2B>{{iq}}</2B>{{/if}}"+"</a>"+"</1j>"+\'<1j 1q="2O 3f">\'+\'<2B 1q="3u-3b-4f"></2B> \'+\'<2B 1q="3u-3b-of">{{Bf}}</2B> \'+\'<2B 1q="3u-3b-8a"></2B>\'+"</1j>"+\'<1j 1q="1Y"></1j>\'+"</1j>"+"</1j>";17 ex=pb.14.ex||\'<1j 1q="3j 3t">\'+\'<1j 1q="3j-2U">\'+\'<a 5h="#" 1q="4x 3u-3b-3k">\'+\'<i 1q="2P 2P-3k {{oh}}"></i>\'+"</a>"+\'<a 5h="#" 1q="4x 3u-3b-2X">\'+\'<i 1q="2P 2P-2X {{oh}}"></i>\'+"</a>"+"</1j>"+"</1j>";17 oj=t7.5R(\'<1j 1q="3u-3b 3u-3b-{{bW}}">\'+\'<1j 1q="1e 1C-7p 3j-7p">\'+"{{#df 2m}}{{#if 1C}}"+g5+"{{/if}}{{/df}}"+\'<1j 1q="1o no-3j {{#df 1C}}no-1C{{/df}} 3j-7p 1C-7p" 1u-1o="3u-3b-1O">\'+"{{#if 2m}}{{#if 1C}}"+g5+"{{/if}}{{/if}}"+"{{#if 3j}}"+ex+"{{/if}}"+\'<1j 1q="3u-3b-ey 3u-3b-ey-{{js "1i.HG || 1i.bW"}}">\'+"{{#2r tN}}{{#if de}}"+tQ+"{{/if}}{{/2r}}"+"</1j>"+\'<1j 1q="3u-3b-1D-1h 1D-1h">\'+\'<1j 1q="3u-3b-1D-1T 1D-1T">\'+"{{#2r tN}}"+"{{#kV \\"1i.3O || ((1r 1i === \'3l\' || 1i 7J HH) && (1i.1L(\'<\') >= 0 || 1i.1L(\'>\') >= 0))\\"}}"+tP+"{{1d}}"+"{{#if @40.bi}}"+Bl+"{{1d}}"+tO+"{{/if}}"+"{{/kV}}"+"{{/2r}}"+"</1j>"+"</1j>"+"</1j>"+"</1j>"+"</1j>")(pb.14);pb.2w=pb.14.9Q;pb.ok=pb.2w;pb.2q=1g;pb.3S=1a(1I){if(1r 1I==="1m")1I=pb.2w;1I=3P(1I,10);if(pb.2q&&pb.1D){pb.1D.4o(1I);1c}pb.2q=1f;pb.ok=1I;if(pb.14.1S==="kT")19.40.3h(oj);if(pb.14.1S==="2a"){pb.2a=19.2a(\'<1j 1q="2a 3u-3b-2a">\'+oj+"</1j>");$(pb.2a).on("2a:5E",pb.tR)}if(pb.14.1S==="1o"){$(2g).on("1o:jJ",pb.jS);$(2g).on("1o:7y",pb.jT);if(!pb.14.1e)pb.14.1e=19.b2;pb.14.1e.hc(oj);1c}pb.9f(pb.ok);if(pb.14.c4)pb.14.c4(pb)};pb.2j=1a(){pb.2q=1g;if(!pb.kW||pb.kW.1b===0)1c;if(pb.14.9j)pb.14.9j(pb);pb.6s(1f);if(pb.14.1S==="kT")pb.1h.1K("3u-3b-in").1w("3u-3b-6v").jZ(1a(){pb.1h.43()});pb.1D.5N();pb.1D=pb.kW=pb.Bm=pb.1O=1m};pb.tR=1a(e){pb.2j();$(pb.2a).3B("1o:jJ",pb.tR)};pb.jS=1a(e){if(e.fT.1o.1R==="3u-3b-1O")pb.9f(pb.ok);$(2g).3B("1o:jJ",pb.jS)};pb.jT=1a(e){if(e.fT.1o.1R==="3u-3b-1O")pb.2j();$(2g).3B("1o:7y",pb.jT)};pb.tS=1a(1D){pb.2w=1D.2w;17 4f=1D.2w+1;17 8a=1D.1O.1b;if(pb.14.4e){8a=8a-2;4f=4f-1D.5p;if(4f<1)4f=8a+4f;if(4f>8a)4f=4f-8a}pb.1h.1l(".3u-3b-4f").28(4f);pb.1h.1l(".3u-3b-8a").28(8a);$(".3u-3b-3k, .3u-3b-2X").1K("3u-3b-4x-tT");if(1D.ez&&!pb.14.4e)$(".3u-3b-3k").1w("3u-3b-4x-tT");if(1D.bj&&!pb.14.4e)$(".3u-3b-2X").1w("3u-3b-4x-tT");if(pb.ey.1b>0){pb.ir.1l(".3u-3b-de-2H").1K("3u-3b-de-2H");17 Bn=pb.14.4e?1D.1O.eq(1D.2w).1Z("1u-1D-1E-1I"):pb.2w;pb.ir.1l(\'[1u-de-1I="\'+Bn+\'"]\').1w("3u-3b-de-2H")}17 ol=1D.1O.eq(1D.eA).1l("Bo");if(ol.1b>0)if("Bp"in ol[0])ol[0].Bp();if(pb.14.bk)pb.14.bk(1D)};pb.Bq=1a(1D){if(pb.14.9k)pb.14.9k(1D)};pb.9f=1a(1I){if(pb.14.1S==="1o")pb.1h=$(".3u-3b-1D-1h").1M(".1e");1d pb.1h=$(".3u-3b");if(pb.14.1S==="kT"){pb.1h.1w("3u-3b-in");19.9v(pb.1h)}pb.kW=pb.1h.1l(".3u-3b-1D-1h");pb.Bm=pb.1h.1l(".3u-3b-1D-1T");pb.1O=pb.1h.1l(".3u-3b-1E");pb.ir=pb.1h.1l(".3u-3b-ey");pb.ey=pb.1h.1l(".3u-3b-de");17 kX={4U:pb.14.4U||".3u-3b-2X",4V:pb.14.4V||".3u-3b-3k",Br:pb.14.Br,9Q:1I,53:pb.14.53,4c:pb.14.4c,4e:pb.14.4e,bi:pb.14.bi,kU:pb.14.kU,g4:pb.14.g4,kY:pb.14.bi?1g:1f,4p:pb.14.4p,9i:pb.14.9i,dc:pb.14.dc,om:1a(1D,e){if(pb.14.om)pb.14.om(1D,e)},78:1a(1D,e){if(pb.14.Bd)pb.Bs();if(pb.14.78)pb.14.78(1D,e)},op:1a(1D,e){if(pb.14.op)pb.14.op(1D,e)},bk:1a(1D){pb.tS(1D)},9k:1a(1D){pb.Bq(1D)},oc:pb.14.oc,tU:pb.14.tU,oq:1a(1D,1E,7n){if(pb.14.oq)pb.14.oq(pb,1E,7n)},or:1a(1D,1E,7n){$(1E).1K("3u-3b-1E-47");if(pb.14.or)pb.14.or(pb,1E,7n)}};if(pb.14.Be&&pb.14.1S!=="1o"){kX.eB=pb.Bt;kX.Bu=pb.Bv;kX.eC=pb.Bw}pb.1D=19.1D(pb.kW,kX);if(1I===0)pb.tS(pb.1D);pb.6s()};pb.6s=1a(7X){17 2E=7X?"3B":"on";pb.1h.1l(".3u-3b-2j-4x")[2E]("3Q",pb.2j)};pb.bl=1g;pb.Bs=1a(){if(pb.1h)pb.1h.hN("3u-3b-bl");if(pb.14.og)pb.ir.hN("3u-3b-ey-bl");pb.bl=!pb.bl};pb.HI=1a(){if(pb.1h)pb.1h.1w("3u-3b-bl");if(pb.14.og)pb.ir.1w("3u-3b-ey-bl");pb.bl=1f};pb.HJ=1a(){if(pb.1h)pb.1h.1K("3u-3b-bl");if(pb.14.og)pb.ir.1K("3u-3b-ey-bl");pb.bl=1g};17 ot=1g;17 it=1f;17 kZ,tV,tW,iu=1g,iv,tX;pb.Bt=1a(1D,e){if(!it)1c;ot=1f};pb.Bv=1a(1D,e){if(!ot)1c;if(!iu){iu=1f;tV=e.1S==="57"?e.3m[0].2N:e.2N;iv=pb.1D.1O.eq(pb.1D.2w);tX=(1P 2x).3E()}e.42();tW=e.1S==="57"?e.3m[0].2N:e.2N;kZ=tV-tW;17 5j=1-1A.3o(kZ)/4u;iv.1N("2b(0,"+-kZ+"px,0)");pb.1D.1h.1W("5j",5j).2f(0)};pb.Bw=1a(1D,e){ot=1g;if(!iu){iu=1g;1c}iu=1g;it=1g;17 3W=1A.3o(kZ);17 6D=(1P 2x).3E()-tX;if(6D<4u&&3W>20||6D>=4u&&3W>5c){4k(1a(){if(pb.14.1S==="kT")pb.2j();if(pb.14.1S==="2a")19.5i(pb.2a);if(pb.14.Bx)pb.14.Bx(pb);it=1f},0);1c}if(3W!==0)iv.1w("66").4A(1a(){it=1f;iv.1K("66")});1d it=1f;pb.1D.1h.1W("5j","").2f("");iv.1N("")};1c pb};19.HK=1a(14){1c 1P Bc(14)};17 By=1a(14){17 a=1i;17 4d={ks:"mh",9L:"xA",Bz:"zH...",BA:"qY",49:"1o",cZ:1g,BB:"HL 46",BC:1g,dg:"id",l0:"28",tY:1f,BD:1f,tZ:1g,dh:1g,41:1g};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];a.14=14;if(a.14.8y)a.8y=$(a.14.8y);17 1e=a.14.1e;if(!a.14.1e&&a.8y&&a.8y.1b){1e=a.8y.1M("."+19.14.7V);if(1e.1b===0)1c;1e=1e[0].70}if(a.14.1z){a.1z=$(a.14.1z);if(a.1z.1b===0&&a.14.49==="4E")1c}a.1J=a.14.1J||[];a.id=(1P 2x).3E();a.5S=a.14.eh?"6g":"8K";a.83=a.5S+"-"+a.id;17 2m=19.14.2m;17 cZ=a.14.cZ;if(a.14.49!=="4E"){a.ov=t7.5R(a.14.ov||"<li>"+\'<55 1q="55-{{5S}} 1x-1B">\'+\'<1z 1S="{{5S}}" 1R="{{83}}" 1J="{{1J}}" {{#if 5y}}8S{{/if}}>\'+"{{#if 2m}}"+\'<1j 1q="1x-bb">\'+\'<i 1q="2P 2P-3p-{{5S}}"></i>\'+"</1j>"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{28}}</1j>\'+"</1j>"+"{{1d}}"+"{{#if 6g}}"+\'<1j 1q="1x-bb">\'+\'<i 1q="2P 2P-3p-6g"></i>\'+"</1j>"+"{{/if}}"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{28}}</1j>\'+"</1j>"+"{{/if}}"+"</55>"+"</li>");17 9h=a.14.9h||"";if(!9h&&a.8y&&a.8y.1b)9h=a.8y.1l(".1x-2S").28();17 2v="4m-"+a.83;17 aF=a.14.aF,eg=a.14.eg;17 bV;17 fR="",fS="",6X;a.g5=t7.5R(a.14.g5||\'<1j 1q="1C {{#if aF}}bW-{{aF}}{{/if}}">\'+\'<1j 1q="1C-2U">\'+\'<1j 1q="1G 3f">\'+"{{#if 2m}}"+\'<a 5h="#" 1q="4x {{#if kt}}2j-2a{{1d}}3z{{/if}} 2P-em"><i 1q="2P 2P-3z"></i></a>\'+"{{1d}}"+\'<a 5h="#" 1q="4x {{#if kt}}2j-2a{{1d}}3z{{/if}}">\'+\'<i 1q="2P 2P-3z"></i>\'+"{{#if kt}}"+"<2B>{{ks}}</2B>"+"{{1d}}"+"<2B>{{9L}}</2B>"+"{{/if}}"+"</a>"+"{{/if}}"+"</1j>"+\'<1j 1q="2O 3f">{{9h}}</1j>\'+"{{#if 41}}"+\'<1j 1q="1Y">\'+\'<1j 1q="4m-41 41 {{#if dh}}41-{{dh}}{{/if}}"></1j>\'+"</1j>"+"{{/if}}"+"</1j>"+"</1j>");bV=a.g5({9h:9h,9L:a.14.9L,ks:a.14.ks,49:a.14.49,aF:aF,kt:a.14.49==="2a",zG:a.14.49==="1o",2m:2m,41:a.14.41,dh:a.14.dh});if(a.14.49==="1o"){6X="nw";if(a.8y){if(a.8y.1M(".1C-9u").1b>0)6X="9u";if(a.8y.1M(".1C-7p").1b>0)6X="7p";fS=a.8y.1M(".1o").1v("no-3j")?"no-3j":"";fR=a.8y.1M(".1o").1v("no-1C")?"no-1C":"1C-"+6X}1d if(1e.1h){if($(1e.1h).1v("1C-9u")||$(1e.1h).1l(".1C-9u").1b>0)6X="9u";if($(1e.1h).1v("1C-7p")||$(1e.1h).1l(".1C-7p").1b>0)6X="7p";fS=$(1e.4G.1h).1v("no-3j")?"no-3j":"";fR=$(1e.4G.1h).1v("no-1C")?"no-1C":"1C-"+6X}}1d 6X="7p";17 nx=\'<3p 1q="2G">\'+\'<1j 1q="2G-1z">\'+\'<1z 1S="b4" bN="\'+a.14.Bz+\'">\'+\'<a 5h="#" 1q="2G-cC"></a>\'+"</1j>"+(2m?"":\'<a 5h="#" 1q="2G-b1">\'+a.14.BA+"</a>")+"</3p>"+\'<1j 1q="2G-2s"></1j>\';17 d0=(6X==="9u"?bV:"")+\'<1j 1q="dI">\'+\'<1j 1u-1o="\'+2v+\'" 1q="1o 4m-1o \'+fR+" "+fS+\'">\'+(6X==="7p"?bV:"")+nx+\'<1j 1q="1o-1B">\'+(6X==="nw"?bV:"")+\'<1j 1q="3K-39 4m-46 4m-3K-\'+a.id+" "+(eg?"bW-"+eg:"")+\'">\'+"<ul></ul>"+"</1j>"+\'<1j 1q="3K-39 4m-2k-46">\'+\'<ul><li 1q="1x-1B"><1j 1q="1x-2U"><1j 1q="1x-2S">\'+a.14.BB+"</1j></1j></li></ul>"+"</1j>"+\'<1j 1q="3K-39 4m-5v">\'+"<ul></ul>"+"</1j>"+"</1j>"+"</1j>"+"</1j>"}1d{a.u0=t7.5R(a.14.u0||"<li>"+\'<55 1q="{{#df bN}}55-8K{{/df}} 1x-1B" 1u-1J="{{1J}}">\'+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{28}}</1j>\'+"</1j>"+"</55>"+"</li>");a.u1=t7.5R(a.14.u1||\'<li 1q="4m-4E-bN">\'+\'<1j 1q="1x-1B">\'+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{28}}</1j>\'+"</1j>"+"</55>"+"</li>");a.u2=t7.5R(a.14.u2||\'<1j 1q="4m-4E">\'+\'<1j 1q="4m-4E-2U">\'+\'<1j 1q="3K-39">\'+"<ul></ul>"+"</1j>"+"</1j>"+"{{#if 41}}"+\'<1j 1q="4m-41 41 {{#if dh}}41-{{dh}}{{/if}}">{{#if 2m}}{{bB}}{{/if}}</1j>\'+"{{/if}}"+"</1j>")}a.2a=1m;a.4E=1m;1a BE(e){17 32=a.1z.5k();if(a.14.ow)a.14.ow(a,32,1a(23){17 eD="";17 eE=a.14.eE?1A.4Z(a.14.eE,23.1b):23.1b;a.23=23;17 i,j,u3;if(a.14.tY){32=32.31(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&");u3=1P ox("("+32+")","i")}1t(i=0;i<eE;i++){17 9R=1r 23[i]==="6d"?23[i][a.14.dg]:23[i];17 fw=1r 23[i]!=="6d"?23[i]:23[i][a.14.l0];eD+=a.u0({1J:9R,28:a.14.tY?fw.31(u3,"<b>$1</b>"):fw})}if(eD===""&&32===""&&a.14.BF)eD+=a.u1({28:a.14.BF});a.4E.1l("ul").3O(eD)})}1a BG(e){17 2Z=$(1i);17 iw;1t(17 i=0;i<a.23.1b;i++){17 9R=1r a.23[i]==="6d"?a.23[i][a.14.dg]:a.23[i];17 1J=2Z.1Z("1u-1J");if(9R===1J||9R*1===1J*1)iw=a.23[i]}if(a.14.BD){a.1z.5k(1r iw==="6d"?iw[a.14.l0]:iw);a.1z.25("1z 6F")}if(a.14.aM)a.14.aM(a,iw);a.2j()}1a bc(e){17 1X=$(e.1X);if(!(1X.is(a.1z[0])||a.4E&&1X.1M(a.4E[0]).1b>0))a.2j()}a.oy=1a(){17 5G=a.1z.1M(".3K-39"),2i=a.1z.1M(".1o-1B"),9M=3P(2i.1W("6W-2J"),10),d1=3P(2i.1W("6W-2J"),10),BH=5G.1b>0?5G.5D().1G-5G.4i().5D().1G:0,u4=a.1z.5D().1G-(5G.1b>0?5G.5D().1G:0),u5=a.1z.5D().2J-(2i.5D().2J-2i[0].2C),jQ=2i[0].5l-d1-(u5+2i[0].2C)-a.1z[0].3X;a.4E.1W({1G:(5G.1b>0?BH:u4)+"px",2J:u5+2i[0].2C+a.1z[0].3X+"px",3q:(5G.1b>0?5G[0].5u:a.1z[0].5u)+"px"});a.4E.2K(".4m-4E-2U").1W({jQ:jQ+"px",yd:5G.1b>0&&!a.14.tZ?u4-(2m?16:15)+"px":""})};a.fA=1a(e){17 1o=e.fT.1o;a.1o=$(1o.1h);a.2L=1o;if(1o.1R!==2v)1c;17 1h=$(1o.1h);1a u6(32){if(!a.14.ow)1c;17 i,j,k;a.14.ow(a,32,1a(23){17 eD="";17 eE=a.14.eE?1A.4Z(a.14.eE,23.1b):23.1b;a.23=23;1t(i=0;i<eE;i++){17 5y=1g;17 9R=1r 23[i]==="6d"?23[i][a.14.dg]:23[i];1t(j=0;j<a.1J.1b;j++){17 c5=1r a.1J[j]==="6d"?a.1J[j][a.14.dg]:a.1J[j];if(c5===9R||c5*1===9R*1)5y=1f}eD+=a.ov({1J:9R,28:1r 23[i]!=="6d"?23[i]:23[i][a.14.l0],5S:a.5S,id:a.id,83:a.83,5y:5y,6g:a.5S==="6g",2m:2m})}1h.1l(".4m-46 ul").3O(eD);if(23.1b===0)if(32.1b!==0){1h.1l(".4m-2k-46").5O();1h.1l(".4m-46, .4m-5v").6t()}1d{1h.1l(".4m-5v").5O();1h.1l(".4m-46, .4m-2k-46").6t()}1d{1h.1l(".4m-46").5O();1h.1l(".4m-2k-46, .4m-5v").6t()}})}17 2G=19.2G(1h.1l(".2G"),{hi:1f,rm:1a(2G,1u){if(1u.32.1b===0&&2G.2H)2G.2s.1w("2G-2s-2H");1d 2G.2s.1K("2G-2s-2H");u6(1u.32)}});a.2G=2G;1a oz(){17 u7="";17 i;1t(i=0;i<a.1J.1b;i++)u7+=a.ov({1J:1r a.1J[i]==="6d"?a.1J[i][a.14.dg]:a.1J[i],28:1r a.1J[i]==="6d"?a.1J[i][a.14.l0]:a.1J[i],5S:a.5S,id:a.id,83:a.83+"-8S",6g:a.5S==="6g",2m:2m,5y:1f});1h.1l(".4m-5v ul").3O(u7)}1h.on("6F",\'1z[1S="8K"], 1z[1S="6g"]\',1a(){17 i;17 1z=1i;17 1J=1z.1J;17 28=$(1z).1M("li").1l(".1x-2S").28();17 BI=$(1z).1M(".4m-5v").1b>0;17 1x,9R,c5;if(BI){if(a.5S==="6g"&&!1z.8S){1t(i=0;i<a.1J.1b;i++){c5=1r a.1J[i]==="3l"?a.1J[i]:a.1J[i][a.14.dg];if(c5===1J||c5*1===1J*1)a.1J.aj(i,1)}oz();if(a.14.aM)a.14.aM(a,a.1J)}1c}1t(i=0;i<a.23.1b;i++){9R=1r a.23[i]==="3l"?a.23[i]:a.23[i][a.14.dg];if(9R===1J||9R*1===1J*1)1x=a.23[i]}if(a.5S==="8K")a.1J=[1x];1d if(1z.8S)a.1J.1Q(1x);1d 1t(i=0;i<a.1J.1b;i++){c5=1r a.1J[i]==="3l"?a.1J[i]:a.1J[i][a.14.dg];if(c5===1J||c5*1===1J*1)a.1J.aj(i,1)}oz();if((a.5S==="8K"&&1z.8S||a.5S==="6g")&&a.14.aM)a.14.aM(a,a.1J);if(cZ&&a.5S==="8K")if(a.14.49==="2a")19.5i(a.2a);1d 1e.22.3z()});oz();if(a.14.BC)u6("");if(a.14.c4)a.14.c4(a)};a.z3=1a(){if(a.14.49==="4E"){if(a.4E)a.4E.1l(".4m-41").1w("4m-41-cU")}1d $(".4m-41").1w("4m-41-cU")};a.z4=1a(){if(a.14.49==="4E"){if(a.4E)a.4E.1l(".4m-41").1K("4m-41-cU")}1d $(".4m-41").1K("4m-41-cU")};a.3S=1a(){if(a.2q)1c;a.2q=1f;if(a.14.49==="4E"){if(!a.4E){a.4E=$(a.u2({41:a.14.41,dh:a.14.dh,2m:2m,bB:19.14.bB}));a.4E.on("3Q","55",BG)}17 5G=a.1z.1M(".3K-39");if(5G.1b&&a.1z.1M(".1x-1B").1b>0&&a.14.tZ)a.1z.1M(".1x-1B").1w("1x-1B-4E-u8");a.oy();a.1z.1M(".1o-1B").3h(a.4E);a.4E.1w("4m-4E-in");a.1z.25("1z");$(1U).on("8q",a.oy);if(a.14.c4)a.14.c4(a)}1d{$(2g).7z("fA",".4m-1o",a.fA);if(a.14.49==="2a"){a.2a=19.2a(\'<1j 1q="2a 4m-2a 4m-2a-\'+a.83+\'">\'+\'<1j 1q="1e 1C-7p">\'+d0+"</1j>"+"</1j>");a.2a=$(a.2a);a.2a.7z("5E",1a(){a.2a=1m;a.2q=1g;if(a.14.9j)a.14.9j(a)})}1d{1e.22.58({1B:d0});$(2g).7z("rA",".4m-1o",1a(){a.2q=1g;if(a.14.9j)a.14.9j(a)})}}};a.2j=1a(e){if(!a.2q)1c;if(a.14.49==="4E"){if(e&&e.1S==="bH"&&a.4E.1l("55.2H-4X").1b>0)1c;a.4E.1K("4m-4E-in").43();a.1z.1M(".1x-1B-4E-u8").1K("1x-1B-4E-u8");a.2q=1g;$(1U).3B("8q",a.oy);if(a.14.9j)a.14.9j(a)}if(a.14.49==="2a")if(a.2a)19.5i(a.2a)};a.c6=1a(7X){17 3i=7X?"3B":"on";if(a.14.49!=="4E"&&a.8y)a.8y[3i]("3Q",a.3S);if(a.14.49==="4E"&&a.1z){a.1z[3i]("8l",a.3S);a.1z[3i]("1z",BE);if(19.27.5M)$("3O")[3i]("3Q",bc);1d a.1z[3i]("bH",a.2j)}if(7X&&a.4E)a.4E=29};a.4N=1a(){a.c6()};a.5N=1a(){a.c6(1f);a=29};a.4N();1c a};19.4m=1a(14){1c 1P By(14)};17 BJ=1a(14){17 p=1i;17 4d={u9:1g,BK:1f,l1:1g,BL:7,c7:1g,oA:1f,hU:1f,ix:1f,oB:1f,iy:1g,3j:1f,g6:"qU",ex:\'<1j 1q="3j">\'+\'<1j 1q="3j-2U">\'+\'<1j 1q="1G"></1j>\'+\'<1j 1q="1Y">\'+\'<a 5h="#" 1q="4x 2j-1y">{{7G}}</a>\'+"</1j>"+"</1j>"+"</1j>"};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];p.14=14;p.4S=[];p.di=1g;p.8z=p.14.1h?1f:1g;17 BM=19.27.5s||8A.iz.5P().1L("BN")>=0&&8A.iz.5P().1L("ub")<0&&!19.27.5M;1a 9d(){17 6u=1g;if(!p.14.oB&&!p.14.iy)1c 6u;if(!p.8z&&p.14.1z)if(p.14.iy)6u=1f;1d if(19.27.5s)6u=19.27.8R?1f:1g;1d if($(1U).3q()>=s9)6u=1f;1c 6u}1a iA(){if(p.2q&&p.1h&&p.1h.1b>0&&p.1h.1M(".2F").1b>0)1c 1f;1d 1c 1g}p.aN=1a(iB,2f){17 uc=0;if(p.4S.1b===0){p.1J=iB;p.9S(iB);1c}1t(17 i=0;i<p.4S.1b;i++)if(p.4S[i]&&!p.4S[i].9x){p.4S[i].aN(iB[uc],2f);uc++}};p.9S=1a(BO){17 eF=BO||[];17 l2=[],i;if(p.4S.1b===0)1t(i=0;i<p.14.4S.1b;i++)if(p.14.4S[i].dj!==1m)l2.1Q(p.14.4S[i].dj[eF[i]]);1d l2.1Q(eF[i]);1d 1t(i=0;i<p.4S.1b;i++)if(!p.4S[i].9x){eF.1Q(p.4S[i].1J);l2.1Q(p.4S[i].iC)}if(eF.1L(1m)>=0)1c;p.1J=eF;p.iC=l2;if(p.14.aM)p.14.aM(p,p.1J,p.iC);if(p.1z&&p.1z.1b>0){$(p.1z).5k(p.14.oC?p.14.oC(p,p.1J,p.iC):p.1J.76(" "));$(p.1z).25("6F")}};p.BP=1a(BQ,bm){17 dk=$(BQ);17 BR=dk.1I();17 1V=p.4S[BR];if(1V.9x)1c;1V.1h=dk;1V.1T=1V.1h.1l(".1y-23-1V-1T");1V.23=1V.1T.1l(".1y-1x");17 i,j;17 l3,5o,ud,54,4q;1V.HM=1a(5v,dj){1V.ue();1V.5v=5v;1V.dj=dj;17 BS=p.g7(1V,1f);1V.1T.3O(BS);1V.23=1V.1T.1l(".1y-1x");1V.oD();1V.aN(1V.5v[0],0,1f);1V.c6()};1V.oD=1a(){if(p.14.l1){1V.1h.1K("1y-23-1V-BT");if(!1V.3q)1V.1h.1W({3q:""})}17 bn,oE;bn=0;oE=1V.1h[0].3X;l3=1V.1T[0].3X;5o=1V.23[0].3X;ud=5o*1V.23.1b;54=oE/2-ud+5o/2;4q=oE/2-5o/2;if(1V.3q){bn=1V.3q;if(3P(bn,10)===bn)bn=bn+"px";1V.1h.1W({3q:bn})}if(p.14.l1){if(!1V.3q){1V.23.2r(1a(){17 1x=$(1i);1x.1W({3q:"8u"});bn=1A.4C(bn,1x[0].5u);1x.1W({3q:""})});1V.1h.1W({3q:bn+2+"px"})}1V.1h.1w("1y-23-1V-BT")}};1V.oD();1V.1T.1N("2b(0,"+4q+"px,0)").2f(0);17 2w=0;17 g8;1V.aN=1a(eF,2f,l4){if(1r 2f==="1m")2f="";17 5q=1V.1T.1l(\'.1y-1x[1u-1y-1J="\'+eF+\'"]\').1I();if(1r 5q==="1m"||5q===-1)1c;17 7b=-5q*5o+4q;1V.1T.2f(2f);1V.1T.1N("2b(0,"+7b+"px,0)");if(p.14.u9&&1V.2w&&1V.2w!==5q){$.dl(g8);1V.1T.4A(1a(){$.dl(g8)});oF()}1V.bm(5q,7b,2f,l4)};1V.bm=1a(2w,1F,2f,l4){if(1r 1F==="1m")1F=$.eG(1V.1T[0],"y");if(1r 2w==="1m")2w=-1A.7i((1F-4q)/5o);if(2w<0)2w=0;if(2w>=1V.23.1b)2w=1V.23.1b-1;17 BU=1V.2w;1V.2w=2w;1V.1T.1l(".1y-5y").1K("1y-5y");1V.23.2f(2f);17 BV=1V.23.eq(2w).1w("1y-5y").1N("");if(p.14.l1){17 7h=(1F-(1A.6p((1F-4q)/5o)*5o+4q))/5o;1V.23.2r(1a(){17 1x=$(1i);17 BW=1x.1I()*5o;17 BX=4q-1F;17 BY=BW-BX;17 7h=BY/5o;17 BZ=1A.d3(1V.2c/5o/2)+1;17 cR=-18*7h;if(cR>iD)cR=iD;if(cR<-iD)cR=-iD;if(1A.3o(7h)>BZ)1x.1w("1y-1x-C0");1d 1x.1K("1y-1x-C0");1x.1N("2b(0, "+(-1F+4q)+"px, "+(BM?-HN:0)+"px) 9l("+cR+"dm)")})}if(l4||1r l4==="1m"){1V.1J=BV.1Z("1u-1y-1J");1V.iC=1V.dj?1V.dj[2w]:1V.1J;if(BU!==2w){if(1V.aM)1V.aM(p,1V.1J,1V.iC);p.9S()}}};1a oF(){g8=$.eH(1a(){1V.bm(1m,1m,0);oF()})}if(bm)1V.bm(0,4q,0);17 c8=1f;17 2u,2I,7F,c9,5X,bo,6Y,iE,4r,iF,oG,uf;1a 7g(e){if(2I||2u)1c;e.42();2u=1f;7F=c9=e.1S==="4y"?e.3m[0].2N:e.2N;5X=(1P 2x).3E();c8=1f;6Y=4r=$.eG(1V.1T[0],"y")}1a 72(e){if(!2u)1c;e.42();c8=1g;c9=e.1S==="57"?e.3m[0].2N:e.2N;if(!2I){$.dl(g8);2I=1f;6Y=4r=$.eG(1V.1T[0],"y");1V.1T.2f(0)}17 3W=c9-7F;4r=6Y+3W;iE=1m;if(4r<54){4r=54-1A.7o(54-4r,.8);iE="4Z"}if(4r>4q){4r=4q+1A.7o(4r-4q,.8);iE="4C"}1V.1T.1N("2b(0,"+4r+"px,0)");1V.bm(1m,4r,0,p.14.BK);oG=4r-iF||4r;uf=(1P 2x).3E();iF=4r}1a 73(e){if(!2u||!2I){2u=2I=1g;1c}2u=2I=1g;1V.1T.2f("");if(iE)if(iE==="4Z")1V.1T.1N("2b(0,"+54+"px,0)");1d 1V.1T.1N("2b(0,"+4q+"px,0)");bo=(1P 2x).3E();17 3Y,7b;if(bo-5X>4u)7b=4r;1d{3Y=1A.3o(oG/(bo-uf));7b=4r+oG*p.14.BL}7b=1A.4C(1A.4Z(7b,4q),54);17 2w=-1A.6p((7b-4q)/5o);if(!p.14.c7)7b=-2w*5o+4q;1V.1T.1N("2b(0,"+3P(7b,10)+"px,0)");1V.bm(2w,7b,"",1f);if(p.14.u9){oF();1V.1T.4A(1a(){$.dl(g8)})}4k(1a(){c8=1f},5c)}1a o2(e){if(!c8)1c;$.dl(g8);17 1J=$(1i).1Z("1u-1y-1J");1V.aN(1J)}1V.c6=1a(7X){17 3i=7X?"3B":"on";1V.1h[3i](19.3x.56,7g);1V.1h[3i](19.3x.65,72);1V.1h[3i](19.3x.6C,73);1V.23[3i]("3Q",o2)};1V.ue=1a(){1V.c6(1f)};1V.1h[0].ug=1a(){1V.ue()};1V.c6()};p.C1=1a(dk){dk=$(dk);if("ug"in dk[0])dk[0].ug()};1a uh(){if(!p.2q)1c;1t(17 i=0;i<p.4S.1b;i++)if(!p.4S[i].9x){p.4S[i].oD();p.4S[i].aN(p.4S[i].1J,0,1g)}}$(1U).on("8q",uh);p.g7=1a(1V,C2){17 oH="";17 g7="";if(1V.9x)g7+=\'<1j 1q="1y-23-1V 1y-23-1V-9x \'+(1V.oI?"1y-23-1V-"+1V.oI:"")+" "+(1V.e5||"")+\'">\'+1V.1B+"</1j>";1d{1t(17 j=0;j<1V.5v.1b;j++)oH+=\'<1j 1q="1y-1x" 1u-1y-1J="\'+1V.5v[j]+\'">\'+(1V.dj?1V.dj[j]:1V.5v[j])+"</1j>";g7+=\'<1j 1q="1y-23-1V \'+(1V.oI?"1y-23-1V-"+1V.oI:"")+" "+(1V.e5||"")+\'"><1j 1q="1y-23-1V-1T">\'+oH+"</1j></1j>"}1c C2?oH:g7};p.9f=1a(){17 7L="";17 iG="";17 i;p.4S=[];17 uj="";1t(i=0;i<p.14.4S.1b;i++){17 1V=p.14.4S[i];uj+=p.g7(p.14.4S[i]);p.4S.1Q(1V)}iG="1y-1k 1y-C3 "+(p.14.e5||"")+(p.14.l1?" 1y-3d":"");7L=\'<1j 1q="\'+iG+\'">\'+(p.14.3j?p.14.ex.31(/{{7G}}/g,p.14.g6):"")+\'<1j 1q="1y-1k-2U 1y-23">\'+uj+\'<1j 1q="1y-2O-i8"></1j>\'+"</1j>"+"</1j>";p.7L=7L};1a iH(e){e.42();if(p.2q)1c;p.3S();if(p.14.hU&&!9d()){17 2i=p.1z.1M(".1o-1B");if(2i.1b===0)1c;17 9M=3P(2i.1W("6W-2J"),10),d1=3P(2i.1W("6W-4I"),10),6c=2i[0].3X-9M-p.1h.2c(),aG=2i[0].5l-9M-p.1h.2c(),aH;17 d2=p.1z.5D().2J-9M+p.1z[0].3X;if(d2>6c){17 2C=2i.2C()+d2-6c;if(2C+6c>aG){aH=2C+6c-aG+d1;if(6c===aG)aH=p.1h.2c();2i.1W({"6W-4I":aH+"px"})}2i.2C(2C,4u)}}}1a bc(e){if(iA())1c;if(p.1z&&p.1z.1b>0){if(e.1X!==p.1z[0]&&$(e.1X).1M(".1y-1k").1b===0)p.2j()}1d if($(e.1X).1M(".1y-1k").1b===0)p.2j()}if(p.14.1z){p.1z=$(p.14.1z);if(p.1z.1b>0){if(p.14.ix)p.1z.2R("tn",1f);if(!p.8z)p.1z.on("3Q",iH);if(p.14.ix)p.1z.on("8l dH",1a(e){e.42()})}}if(!p.8z&&p.14.oA)$("3O").on("3Q",bc);1a iI(){p.2q=1g;if(p.1z&&p.1z.1b>0){p.1z.1M(".1o-1B").1W({"6W-4I":""});if(19.14.2m)p.1z.25("bH")}if(p.14.9j)p.14.9j(p);p.1h.1l(".1y-23-1V").2r(1a(){p.C1(1i)})}p.2q=1g;p.3S=1a(){17 6u=9d();if(!p.2q){p.9f();if(6u){p.7L=\'<1j 1q="2F 2F-1y-C3"><1j 1q="2F-2U">\'+p.7L+"</1j></1j>";p.2F=19.2F(p.7L,p.14.1z,1f);p.1h=$(p.2F).1l(".1y-1k");$(p.2F).on("2F:2j",1a(){iI()})}1d if(p.8z){p.1h=$(p.7L);p.1h.1w("1y-1k-8z");$(p.14.1h).3h(p.1h)}1d{p.1h=$(19.ka(p.7L));$(p.1h).on("1y:2j",1a(){iI()})}p.1h[0].HO=p;p.1h.1l(".1y-23-1V").2r(1a(){17 bm=1f;if(!p.di&&p.14.1J||p.di&&p.1J)bm=1g;p.BP(1i,bm)});if(!p.di)if(p.1J)p.aN(p.1J,0);1d{if(p.14.1J)p.aN(p.14.1J,0)}1d if(p.1J)p.aN(p.1J,0);if(p.1z&&p.1z.1b>0&&19.14.2m)p.1z.25("8l")}p.2q=1f;p.di=1f;if(p.14.c4)p.14.c4(p)};p.2j=1a(){if(!p.2q||p.8z)1c;if(iA()){19.5i(p.2F);1c}1d{19.5i(p.1h);1c}};p.5N=1a(){p.2j();if(p.14.1z&&p.1z.1b>0)p.1z.3B("3Q 8l",iH);$("3O").3B("3Q",bc);$(1U).3B("8q",uh)};if(p.8z)p.3S();1d if(!p.di&&p.14.1J)p.aN(p.14.1J);1c p};19.1y=1a(14){1c 1P BJ(14)};17 C4=1a(14){17 p=1i;17 4d={uk:["HP","HQ","HR","HS","C5","HT","HU","HV","HW","HX","HY","HZ"],C6:["I0","I1","I2","I3","C5","I4","I5","I6","I7","I8","I9","Ia"],C7:["Ib","Ic","Id","Ie","If","Ig","Ih"],um:["Ii","Ij","Ik","Il","Im","In","Io"],eI:1,un:[0,6],eh:1g,ca:1g,C8:"C9-mm-dd",4z:"l5",cb:29,cc:29,5w:29,5T:29,l6:29,uo:1f,6l:1f,Ca:1g,oJ:1f,Cb:\'<1j 1q="1y-2A-2Q-1y">\'+\'<a 5h="#" 1q="4x 2P-em 1y-2A-3k-2Q"><i 1q="2P 2P-3k"></i></a>\'+\'<2B 1q="4f-2Q-1J"></2B>\'+\'<a 5h="#" 1q="4x 2P-em 1y-2A-2X-2Q"><i 1q="2P 2P-2X"></i></a>\'+"</1j>",oK:1f,Cc:\'<1j 1q="1y-2A-4s-1y">\'+\'<a 5h="#" 1q="4x 2P-em 1y-2A-3k-4s"><i 1q="2P 2P-3k"></i></a>\'+\'<2B 1q="4f-4s-1J"></2B>\'+\'<a 5h="#" 1q="4x 2P-em 1y-2A-2X-4s"><i 1q="2P 2P-2X"></i></a>\'+"</1j>",Cd:1f,oA:1f,hU:1f,ix:1f,oB:1f,iy:1g,3j:1f,g6:"qU",Ce:"Ip 4D",l7:19.14.2m,uq:19.14.2m,ex:\'<1j 1q="3j">\'+\'<1j 1q="3j-2U">\'+"{{oJ}}"+"{{oK}}"+"</1j>"+"</1j>",Cf:\'<1j 1q="1y-l7">\'+\'<1j 1q="1y-2A-5y-4D">{{bN}}</1j>\'+"</1j>",Cg:\'<1j 1q="1y-uq">\'+\'<a 5h="#" 1q="2M 2j-1y">{{7G}}</a>\'+"</1j>"};14=14||{};1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];p.14=14;p.di=1g;p.8z=p.14.1h?1f:1g;p.5z=p.14.4z==="l5";17 6h=p.5z?19.3r?-1:1:1;p.5e=1g;1a 9d(){17 6u=1g;if(!p.14.oB&&!p.14.iy)1c 6u;if(!p.8z&&p.14.1z)if(p.14.iy)6u=1f;1d if(19.27.5s)6u=19.27.8R?1f:1g;1d if($(1U).3q()>=s9)6u=1f;1c 6u}1a iA(){if(p.2q&&p.1h&&p.1h.1b>0&&p.1h.1M(".2F").1b>0)1c 1f;1d 1c 1g}1a Ch(4D){4D=1P 2x(4D);17 4s=4D.dn();17 2Q=4D.do();17 l8=2Q+1;17 3T=4D.l9();17 ur=4D.Ci();1c p.14.C8.31(/C9/g,4s).31(/yy/g,(4s+"").Cj(2)).31(/mm/g,l8<10?"0"+l8:l8).31(/m(\\W+)/g,l8+"$1").31(/MM/g,p.14.uk[2Q]).31(/M(\\W+)/g,p.14.C6[2Q]+"$1").31(/dd/g,3T<10?"0"+3T:3T).31(/d(\\W+)/g,3T+"$1").31(/DD/g,p.14.C7[ur]).31(/D(\\W+)/g,p.14.um[ur]+"$1")}p.Ck=1a(1J){if(p.14.eh){if(!p.1J)p.1J=[];17 oL;1t(17 i=0;i<p.1J.1b;i++)if((1P 2x(1J)).3E()===(1P 2x(p.1J[i])).3E())oL=i;if(1r oL==="1m")p.1J.1Q(1J);1d p.1J.aj(oL,1);p.9S()}1d if(p.14.ca){if(!p.1J)p.1J=[];if(p.1J.1b===2||p.1J.1b===0)p.1J=[];if(p.1J[0]!==1J)p.1J.1Q(1J);1d p.1J=[];p.1J.hQ(1a(a,b){1c a-b});p.9S()}1d{p.1J=[1J];p.9S()}};p.aN=1a(iB){p.1J=iB;p.9S()};p.9S=1a(Cl){17 i,eJ;if(p.1h&&p.1h.1b>0){p.1T.1l(".1y-2A-3T-5y").1K("1y-2A-3T-5y");17 dp;if(p.14.ca&&p.1J.1b===2)1t(i=p.1J[0];i<=p.1J[1];i+=24*60*60*dF){dp=1P 2x(i);p.1T.1l(\'.1y-2A-3T[1u-4D="\'+dp.dn()+"-"+dp.do()+"-"+dp.l9()+\'"]\').1w("1y-2A-3T-5y")}1d 1t(i=0;i<p.1J.1b;i++){dp=1P 2x(p.1J[i]);p.1T.1l(\'.1y-2A-3T[1u-4D="\'+dp.dn()+"-"+dp.do()+"-"+dp.l9()+\'"]\').1w("1y-2A-3T-5y")}}if(p.14.aM)p.14.aM(p,p.1J);if(p.1z&&p.1z.1b>0||19.14.2m&&p.14.l7){if(p.14.oC)eJ=p.14.oC(p,p.1J);1d{eJ=[];1t(i=0;i<p.1J.1b;i++)eJ.1Q(Ch(p.1J[i]));eJ=eJ.76(p.14.ca?" - ":", ")}if(19.14.2m&&p.14.l7&&p.1h&&p.1h.1b>0)p.1h.1l(".1y-2A-5y-4D").28(eJ);if(p.1z&&p.1z.1b>0&&!Cl){$(p.1z).5k(eJ);$(p.1z).25("6F")}}};p.Cm=1a(){17 1V;17 c8=1f;17 2u,2I,aK,7F,oM,c9,5X,bo,6Y,4r,us,l3,7h,4h,4t;1a 7g(e){if(2I||2u)1c;2u=1f;aK=c9=e.1S==="4y"?e.3m[0].38:e.38;7F=c9=e.1S==="4y"?e.3m[0].2N:e.2N;5X=(1P 2x).3E();7h=0;c8=1f;4t=1m;6Y=4r=p.7c}1a 72(e){if(!2u)1c;oM=e.1S==="57"?e.3m[0].38:e.38;c9=e.1S==="57"?e.3m[0].2N:e.2N;if(1r 4t==="1m")4t=!!(4t||1A.3o(c9-7F)>1A.3o(oM-aK));if(p.5z&&4t){2u=1g;1c}e.42();if(p.5e){2u=1g;1c}c8=1g;if(!2I){2I=1f;us=p.1T[0].5u;l3=p.1T[0].3X;p.1T.2f(0)}4h=p.5z?oM-aK:c9-7F;7h=4h/(p.5z?us:l3);4r=(p.7c*6h+7h)*5c;p.1T.1N("2b("+(p.5z?4r:0)+"%, "+(p.5z?0:4r)+"%, 0)")}1a 73(e){if(!2u||!2I){2u=2I=1g;1c}2u=2I=1g;bo=(1P 2x).3E();if(bo-5X<4u)if(1A.3o(4h)<10)p.la();1d if(4h>=10)if(19.3r)p.bp();1d p.bq();1d if(19.3r)p.bq();1d p.bp();1d if(7h<=-.5)if(19.3r)p.bq();1d p.bp();1d if(7h>=.5)if(19.3r)p.bp();1d p.bq();1d p.la();4k(1a(){c8=1f},5c)}1a ut(e){if(!c8)1c;17 3T=$(e.1X).1M(".1y-2A-3T");if(3T.1b===0&&$(e.1X).1v("1y-2A-3T"))3T=$(e.1X);if(3T.1b===0)1c;if(3T.1v("1y-2A-3T-5w"))1c;if(!p.14.ca){if(3T.1v("1y-2A-3T-2X"))p.bp();if(3T.1v("1y-2A-3T-3k"))p.bq()}17 uu=3T.1Z("1u-4s");17 uv=3T.1Z("1u-2Q");17 uw=3T.1Z("1u-3T");if(p.14.Cn)p.14.Cn(p,3T[0],uu,uv,uw);if(!3T.1v("1y-2A-3T-5y")||p.14.eh||p.14.ca)p.Ck((1P 2x(uu,uv,uw)).3E());if(p.14.Ca)if(p.14.ca&&p.1J.1b===2||!p.14.ca)p.2j()}p.1h.1l(".1y-2A-3k-2Q").on("3Q",p.bq);p.1h.1l(".1y-2A-2X-2Q").on("3Q",p.bp);p.1h.1l(".1y-2A-3k-4s").on("3Q",p.lb);p.1h.1l(".1y-2A-2X-4s").on("3Q",p.lc);p.1T.on("3Q",ut);17 4W=19.3x.56==="4y"&&19.4a.4W?{dL:1f,74:1g}:1g;if(p.14.uo){p.1T.on(19.3x.56,7g,4W);p.1T.on(19.3x.65,72);p.1T.on(19.3x.6C,73,4W)}p.1h[0].ux=1a(){p.1h.1l(".1y-2A-3k-2Q").3B("3Q",p.bq);p.1h.1l(".1y-2A-2X-2Q").3B("3Q",p.bp);p.1h.1l(".1y-2A-3k-4s").3B("3Q",p.lb);p.1h.1l(".1y-2A-2X-4s").3B("3Q",p.lc);p.1T.3B("3Q",ut);if(p.14.uo){p.1T.3B(19.3x.56,7g,4W);p.1T.3B(19.3x.65,72);p.1T.3B(19.3x.6C,73,4W)}}};p.Co=1a(dk){if("ux"in p.1h[0])p.1h[0].ux()};p.oN=1a(5H,4R){17 5Z=1g;17 i;if(!4R)1c 1g;if($.9a(4R))1t(i=0;i<4R.1b;i++)if(4R[i].5a||4R[i].to)if(4R[i].5a&&4R[i].to){if(5H<=(1P 2x(4R[i].to)).3E()&&5H>=(1P 2x(4R[i].5a)).3E())5Z=1f}1d if(4R[i].5a){if(5H>=(1P 2x(4R[i].5a)).3E())5Z=1f}1d{if(4R[i].to)if(5H<=(1P 2x(4R[i].to)).3E())5Z=1f}1d{if(5H===(1P 2x(4R[i])).3E())5Z=1f}1d if(4R.5a||4R.to)if(4R.5a&&4R.to){if(5H<=(1P 2x(4R.to)).3E()&&5H>=(1P 2x(4R.5a)).3E())5Z=1f}1d if(4R.5a){if(5H>=(1P 2x(4R.5a)).3E())5Z=1f}1d{if(4R.to)if(5H<=(1P 2x(4R.to)).3E())5Z=1f}1d if(1r 4R==="1a")5Z=4R(1P 2x(5H));1c 5Z};p.iJ=1a(4D){17 d=1P 2x(4D);1c(1P 2x(d.dn(),d.do()+1,0)).l9()};p.8W=1a(4D,5D){4D=1P 2x(4D);17 4s=4D.dn(),2Q=4D.do(),3T=4D.l9();if(5D==="2X")if(2Q===11)4D=1P 2x(4s+1,0);1d 4D=1P 2x(4s,2Q+1,1);if(5D==="3k")if(2Q===0)4D=1P 2x(4s-1,11);1d 4D=1P 2x(4s,2Q-1,1);if(5D==="2X"||5D==="3k"){2Q=4D.do();4s=4D.dn()}17 Cp=p.iJ((1P 2x(4D.dn(),4D.do())).3E()-10*24*60*60*dF),iJ=p.iJ(4D),oO=(1P 2x(4D.dn(),4D.do())).Ci();if(oO===0)oO=7;17 5H,iK=[],i,j,k,Cq=6,4S=7,8W="",uy=0+(p.14.eI-1),uz=(1P 2x).uA(0,0,0,0),cb=p.14.cb?(1P 2x(p.14.cb)).3E():29,cc=p.14.cc?(1P 2x(p.14.cc)).3E():29,5w,oP;if(p.1J&&p.1J.1b)1t(i=0;i<p.1J.1b;i++)iK.1Q((1P 2x(p.1J[i])).uA(0,0,0,0));1t(i=1;i<=Cq;i++){17 uB="";17 8B=i;1t(j=1;j<=4S;j++){17 1V=j;uy++;17 8X=uy-oO;17 ld=1V-1+p.14.eI>6?1V-1-7+p.14.eI:1V-1+p.14.eI;17 1w="";if(8X<0){8X=Cp+8X+1;1w+=" 1y-2A-3T-3k";5H=(1P 2x(2Q-1<0?4s-1:4s,2Q-1<0?11:2Q-1,8X)).3E()}1d{8X=8X+1;if(8X>iJ){8X=8X-iJ;1w+=" 1y-2A-3T-2X";5H=(1P 2x(2Q+1>11?4s+1:4s,2Q+1>11?0:2Q+1,8X)).3E()}1d 5H=(1P 2x(4s,2Q,8X)).3E()}if(5H===uz)1w+=" 1y-2A-3T-uz";if(p.14.ca&&iK.1b===2){if(5H>=iK[0]&&5H<=iK[1])1w+=" 1y-2A-3T-5y"}1d if(iK.1L(5H)>=0)1w+=" 1y-2A-3T-5y";if(p.14.un.1L(ld)>=0)1w+=" 1y-2A-3T-Cr";oP=1g;if(p.14.5T)if(p.oN(5H,p.14.5T))oP=1f;if(oP)1w+=" 1y-2A-3T-Iq-5T";if(p.14.l6)1t(k=0;k<p.14.l6.1b;k++)if(p.oN(5H,p.14.l6[k].4R))1w+=" "+p.14.l6[k].e5;5w=1g;if(cb&&5H<cb||cc&&5H>cc)5w=1f;if(p.14.5w)if(p.oN(5H,p.14.5w))5w=1f;if(5w)1w+=" 1y-2A-3T-5w";5H=1P 2x(5H);17 uC=5H.dn();17 uD=5H.do();uB+=\'<1j 1u-4s="\'+uC+\'" 1u-2Q="\'+uD+\'" 1u-3T="\'+8X+\'" 1q="1y-2A-3T\'+1w+\'" 1u-4D="\'+(uC+"-"+uD+"-"+8X)+\'"><2B>\'+8X+"</2B></1j>"}8W+=\'<1j 1q="1y-2A-8B">\'+uB+"</1j>"}8W=\'<1j 1q="1y-2A-2Q" 1u-4s="\'+4s+\'" 1u-2Q="\'+2Q+\'">\'+8W+"</1j>";1c 8W};p.5e=1g;p.uE=1a(4O){if(1r 4O==="1m"){p.aO=3P(p.3U.eq(1).1Z("1u-2Q"),10);p.9T=3P(p.3U.eq(1).1Z("1u-4s"),10)}1d{p.aO=3P(p.3U.eq(4O==="2X"?p.3U.1b-1:0).1Z("1u-2Q"),10);p.9T=3P(p.3U.eq(4O==="2X"?p.3U.1b-1:0).1Z("1u-4s"),10)}p.1h.1l(".4f-2Q-1J").28(p.14.uk[p.aO]);p.1h.1l(".4f-4s-1J").28(p.9T)};p.oQ=1a(4O){p.uE(4O);p.3U.1K("1y-2A-2Q-4f 1y-2A-2Q-3k 1y-2A-2Q-2X");17 oR=4O==="2X"?p.3U.1b-1:0;p.3U.eq(oR).1w("1y-2A-2Q-4f");p.3U.eq(4O==="2X"?oR-1:oR+1).1w(4O==="2X"?"1y-2A-2Q-3k":"1y-2A-2Q-2X");if(p.14.Cs)p.14.Cs(p,p.9T,p.aO)};p.g9=1a(4O,le){p.5e=1g;17 ga,gb,gc;p.1T.1l(".1y-2A-2Q:2k(.1y-2A-2Q-3k):2k(.1y-2A-2Q-4f):2k(.1y-2A-2Q-2X)").43();if(1r 4O==="1m"){4O="2X";le=1f}if(!le)gc=p.8W(1P 2x(p.9T,p.aO),4O);1d{p.1T.1l(".1y-2A-2Q-2X, .1y-2A-2Q-3k").43();gb=p.8W(1P 2x(p.9T,p.aO),"3k");ga=p.8W(1P 2x(p.9T,p.aO),"2X")}if(4O==="2X"||le)p.1T.3h(gc||ga);if(4O==="3k"||le)p.1T.98(gc||gb);p.3U=p.1T.1l(".1y-2A-2Q");p.uF(p.7c);if(p.14.cd)p.14.cd(p,4O==="2X"?p.3U.eq(p.3U.1b-1)[0]:p.3U.eq(0)[0]);if(p.14.Ct)p.14.Ct(p,p.9T,p.aO)};p.uF=1a(1F){1F=1F||p.7c||0;if(1r p.7c==="1m")p.7c=1F;p.3U.1K("1y-2A-2Q-4f 1y-2A-2Q-3k 1y-2A-2Q-2X");17 iL=-(1F+1)*5c*6h;17 uG=-1F*5c*6h;17 iM=-(1F-1)*5c*6h;p.3U.eq(0).1N("2b("+(p.5z?iL:0)+"%, "+(p.5z?0:iL)+"%, 0)").1w("1y-2A-2Q-3k");p.3U.eq(1).1N("2b("+(p.5z?uG:0)+"%, "+(p.5z?0:uG)+"%, 0)").1w("1y-2A-2Q-4f");p.3U.eq(2).1N("2b("+(p.5z?iM:0)+"%, "+(p.5z?0:iM)+"%, 0)").1w("1y-2A-2Q-2X")};p.bp=1a(2f){if(1r 2f==="1m"||1r 2f==="6d"){2f="";if(!p.14.6l)2f=0}17 bp=3P(p.3U.eq(p.3U.1b-1).1Z("1u-2Q"),10);17 lc=3P(p.3U.eq(p.3U.1b-1).1Z("1u-4s"),10);17 Cu=1P 2x(lc,bp);17 uH=Cu.3E();17 iN=p.5e?1g:1f;if(p.14.cc)if(uH>(1P 2x(p.14.cc)).3E())1c p.la();p.7c--;if(bp===p.aO){17 iM=-p.7c*5c*6h;17 ga=$(p.8W(uH,"2X")).1N("2b("+(p.5z?iM:0)+"%, "+(p.5z?0:iM)+"%, 0)").1w("1y-2A-2Q-2X");p.1T.3h(ga[0]);p.3U=p.1T.1l(".1y-2A-2Q");if(p.14.cd)p.14.cd(p,p.3U.eq(p.3U.1b-1)[0])}p.5e=1f;p.oQ("2X");17 1F=p.7c*5c*6h;p.1T.2f(2f).1N("2b("+(p.5z?1F:0)+"%, "+(p.5z?0:1F)+"%, 0)");if(iN)p.1T.4A(1a(){p.g9("2X")});if(!p.14.6l)p.g9("2X")};p.bq=1a(2f){if(1r 2f==="1m"||1r 2f==="6d"){2f="";if(!p.14.6l)2f=0}17 bq=3P(p.3U.eq(0).1Z("1u-2Q"),10);17 lb=3P(p.3U.eq(0).1Z("1u-4s"),10);17 Cv=1P 2x(lb,bq+1,-1);17 uI=Cv.3E();17 iN=p.5e?1g:1f;if(p.14.cb)if(uI<(1P 2x(p.14.cb)).3E())1c p.la();p.7c++;if(bq===p.aO){17 iL=-p.7c*5c*6h;17 gb=$(p.8W(uI,"3k")).1N("2b("+(p.5z?iL:0)+"%, "+(p.5z?0:iL)+"%, 0)").1w("1y-2A-2Q-3k");p.1T.98(gb[0]);p.3U=p.1T.1l(".1y-2A-2Q");if(p.14.cd)p.14.cd(p,p.3U.eq(0)[0])}p.5e=1f;p.oQ("3k");17 1F=p.7c*5c*6h;p.1T.2f(2f).1N("2b("+(p.5z?1F:0)+"%, "+(p.5z?0:1F)+"%, 0)");if(iN)p.1T.4A(1a(){p.g9("3k")});if(!p.14.6l)p.g9("3k")};p.la=1a(2f){if(1r 2f==="1m")2f="";17 1F=p.7c*5c*6h;p.1T.2f(2f).1N("2b("+(p.5z?1F:0)+"%, "+(p.5z?0:1F)+"%, 0)")};p.uJ=1a(4s,2Q,2f){if(1r 4s==="1m")4s=p.9T;if(1r 2Q==="1m")2Q=p.aO;if(1r 2f==="1m"||1r 2f==="6d"){2f="";if(!p.14.6l)2f=0}17 gd;if(4s<p.9T)gd=(1P 2x(4s,2Q+1,-1)).3E();1d gd=(1P 2x(4s,2Q)).3E();if(p.14.cc&&gd>(1P 2x(p.14.cc)).3E())1c 1g;if(p.14.cb&&gd<(1P 2x(p.14.cb)).3E())1c 1g;17 uK=(1P 2x(p.9T,p.aO)).3E();17 4O=gd>uK?"2X":"3k";17 gc=p.8W(1P 2x(4s,2Q));p.7c=p.7c||0;17 iF=p.7c;17 ge,oS;17 iN=p.5e?1g:1f;if(gd>uK){p.7c--;if(!p.5e)p.3U.eq(p.3U.1b-1).43();p.1T.3h(gc);p.3U=p.1T.1l(".1y-2A-2Q");ge=-(iF-1)*5c*6h;p.3U.eq(p.3U.1b-1).1N("2b("+(p.5z?ge:0)+"%, "+(p.5z?0:ge)+"%, 0)").1w("1y-2A-2Q-2X")}1d{p.7c++;if(!p.5e)p.3U.eq(0).43();p.1T.98(gc);p.3U=p.1T.1l(".1y-2A-2Q");ge=-(iF+1)*5c*6h;p.3U.eq(0).1N("2b("+(p.5z?ge:0)+"%, "+(p.5z?0:ge)+"%, 0)").1w("1y-2A-2Q-3k")}if(p.14.cd)p.14.cd(p,4O==="2X"?p.3U.eq(p.3U.1b-1)[0]:p.3U.eq(0)[0]);p.5e=1f;p.oQ(4O);oS=p.7c*5c*6h;p.1T.2f(2f).1N("2b("+(p.5z?oS:0)+"%, "+(p.5z?0:oS)+"%, 0)");if(iN)p.1T.4A(1a(){p.g9(4O,1f)});if(!p.14.6l)p.g9(4O)};p.lc=1a(){p.uJ(p.9T+1)};p.lb=1a(){p.uJ(p.9T-1)};p.9f=1a(){17 7L="";17 iG="";17 i;17 oT=p.1J&&p.1J.1b?p.1J[0]:(1P 2x).uA(0,0,0,0);17 gb=p.8W(oT,"3k");17 Cw=p.8W(oT);17 ga=p.8W(oT,"2X");17 Cx=\'<1j 1q="1y-2A-3U"><1j 1q="1y-2A-3U-1T">\'+(gb+Cw+ga)+"</1j></1j>";17 lf="";if(p.14.Cd){1t(i=0;i<7;i++){17 ld=i+p.14.eI>6?i-7+p.14.eI:i+p.14.eI;17 Cy=p.14.um[ld];lf+=\'<1j 1q="1y-2A-uL-3T \'+(p.14.un.1L(ld)>=0?"1y-2A-uL-3T-Cr":"")+\'"> \'+Cy+"</1j>"}lf=\'<1j 1q="1y-2A-uL-Ir">\'+lf+"</1j>"}iG="1y-1k 1y-2A"+(p.14.ca?" 1y-2A-4R":"")+(p.14.e5?" "+p.14.e5:"");17 hT=p.14.3j?p.14.ex.31(/{{7G}}/g,p.14.g6):"";if(p.14.3j)hT=p.14.ex.31(/{{7G}}/g,p.14.g6).31(/{{oJ}}/g,p.14.oJ?p.14.Cb:"").31(/{{oK}}/g,p.14.oK?p.14.Cc:"");17 Cz=p.14.l7?p.14.Cf.31(/{{7G}}/g,p.14.g6).31(/{{bN}}/g,p.14.Ce):"";17 CA=p.14.uq?p.14.Cg.31(/{{7G}}/g,p.14.g6):"";7L=\'<1j 1q="\'+iG+\'">\'+Cz+CA+hT+\'<1j 1q="1y-1k-2U">\'+lf+Cx+"</1j>"+"</1j>";p.7L=7L};1a iH(e){e.42();if(p.2q)1c;p.3S();if(p.14.hU&&!9d()&&!19.14.2m){17 2i=p.1z.1M(".1o-1B");if(2i.1b===0)1c;17 9M=3P(2i.1W("6W-2J"),10),d1=3P(2i.1W("6W-4I"),10),6c=2i[0].3X-9M-p.1h.2c(),aG=2i[0].5l-9M-p.1h.2c(),aH;17 d2=p.1z.5D().2J-9M+p.1z[0].3X;if(d2>6c){17 2C=2i.2C()+d2-6c;if(2C+6c>aG){aH=2C+6c-aG+d1;if(6c===aG)aH=p.1h.2c();2i.1W({"6W-4I":aH+"px"})}2i.2C(2C,4u)}}}1a bc(e){if(iA())1c;if(p.1z&&p.1z.1b>0){if(e.1X!==p.1z[0]&&$(e.1X).1M(".1y-1k").1b===0)p.2j()}1d if($(e.1X).1M(".1y-1k").1b===0)p.2j()}if(p.14.1z){p.1z=$(p.14.1z);if(p.1z.1b>0){if(p.14.ix)p.1z.2R("tn",1f);if(!p.8z)p.1z.on("3Q",iH);if(p.14.ix)p.1z.on("8l dH",1a(e){e.42()})}}if(!p.8z&&p.14.oA)$("3O").on("3Q",bc);1a iI(){p.2q=1g;if(p.1z&&p.1z.1b>0){p.1z.1M(".1o-1B").1W({"6W-4I":""});if(19.14.2m)p.1z.25("bH")}if(p.14.9j)p.14.9j(p);p.Co()}p.2q=1g;p.3S=1a(){17 6u=9d();17 9S=1g;if(!p.2q){if(!p.1J)if(p.14.1J){p.1J=p.14.1J;9S=1f}p.9f();if(6u){p.7L=\'<1j 1q="2F 2F-1y-2A"><1j 1q="2F-2U">\'+p.7L+"</1j></1j>";p.2F=19.2F(p.7L,p.14.1z,1f);p.1h=$(p.2F).1l(".1y-1k");$(p.2F).on("2F:2j",1a(){iI()})}1d if(p.8z){p.1h=$(p.7L);p.1h.1w("1y-1k-8z");$(p.14.1h).3h(p.1h)}1d{p.1h=$(19.ka(p.7L));$(p.1h).on("1y:2j",1a(){iI()})}p.1h[0].Is=p;p.1T=p.1h.1l(".1y-2A-3U-1T");p.3U=p.1T.1l(".1y-2A-2Q");p.uE();p.7c=0;p.uF();p.Cm();if(9S)p.9S();1d if(19.14.2m&&p.1J)p.9S(1f);if(p.1z&&p.1z.1b>0&&19.14.2m)p.1z.25("8l")}p.2q=1f;p.di=1f;if(p.14.cd)p.3U.2r(1a(){p.14.cd(p,1i)});if(p.14.c4)p.14.c4(p)};p.2j=1a(){if(!p.2q||p.8z)1c;if(iA()){19.5i(p.2F);1c}1d{19.5i(p.1h);1c}};p.5N=1a(){p.2j();if(p.14.1z&&p.1z.1b>0)p.1z.3B("3Q 8l",iH);$("3O").3B("3Q",bc)};if(p.8z)p.3S();1d if(!p.di&&p.14.1J)p.aN(p.14.1J);1c p};19.2A=1a(14){1c 1P C4(14)};17 lg;19.It=1a(14){if(!14)1c;if(1r 14.bb==="1m")14.bb=19.14.Iu;if(1r 14.2S==="1m")14.2S=19.14.Iv;if(1r 14.iO==="1m")14.iO=19.14.Iw;if(1r 14.uM==="1m")14.uM=19.14.xQ;if(1r 14.oU==="1m")14.oU=19.14.Ix;if(1r 14.uN==="1m")14.uN=19.14.xP;if(1r 14.2M==="1m")14.2M=19.14.r1&&{28:19.14.r1,2j:1f};if(!lg)lg=2g.9D("1j");14.2m=19.14.2m;17 1h=$(".oV");if(1h.1b===0){19.40.3h(\'<1j 1q="oV 3K-39\'+(14.2m?"":" bb-3K")+\'"><ul></ul></1j>\');1h=$(".oV")}17 3K=1h.2K("ul");17 uO=19.14.uO||"{{#if oW}}"+"<li>{{oW}}</li>"+"{{1d}}"+\'<li 1q="6P-1x 6P-6V">\'+\'<1j 1q="1x-1B">\'+"{{#if 2m}}"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S">{{js "1i.35 || 1i.2S || 1i.iO"}}</1j>\'+"{{#if ../2M}}{{#2M}}"+\'<1j 1q="1x-6E">\'+\'<a 5h="#" 1q="2M {{#if 4Q}}4Q-{{4Q}}{{/if}} {{#kV "1i.2j !== 1g"}}2j-6P{{/kV}}">{{28}}</a>\'+"</1j>"+"{{/2M}}{{/if}}"+"</1j>"+"{{1d}}"+"{{#if bb}}"+\'<1j 1q="1x-bb">{{bb}}</1j>\'+"{{/if}}"+\'<1j 1q="1x-2U">\'+\'<1j 1q="1x-2S-8B">\'+"{{#if 2S}}"+\'<1j 1q="1x-2S">{{2S}}</1j>\'+"{{/if}}"+"{{#if uM}}"+\'<1j 1q="1x-6E"><a 5h="#" 1q="2j-6P"><2B></2B></a></1j>\'+"{{/if}}"+"</1j>"+"{{#if iO}}"+\'<1j 1q="1x-iO">{{iO}}</1j>\'+"{{/if}}"+"{{#if 35}}"+\'<1j 1q="1x-28">{{35}}</1j>\'+"</1j>"+"{{/if}}"+"{{/if}}"+"</1j>"+"</li>"+"{{/if}}";if(!19.6B.6P)19.6B.6P=t7.5R(uO);lg.77=19.6B.6P(14);17 1x=$(lg).2K();1x.on("3Q",1a(e){17 2j=1g;17 1X=$(e.1X);if(14.2m&&1X.1v("2M"))if(14.2M&&14.2M.78)14.2M.78.6m(1X[0],e,1x[0]);if(1X.is(".2j-6P")||$(e.1X).1M(".2j-6P").1b>0)2j=1f;1d{if(14.78)14.78(e,1x[0]);if(14.uN)2j=1f}if(2j)19.oX(1x[0])});if(14.9j)1x.1u("uP",1a(){14.9j(1x[0])});if(14.CB)1x.1w(14.CB);if(14.oU)4k(1a(){if(1x.1b>0)19.oX(1x[0])},14.oU);if(!19.14.2m)19.oX(3K.2K("li.6P-1x:fE-fF"));3K.3h(1x[0]);1h.5O();17 5o=1x.fG(),4j;if(14.2m){1h.1N("2b(0, "+5o+"px, 0)");1h.2f(0);4j=1x[0].4j;1h.1N("2b(0, 0, 0)");1h.2f("")}1d{1x.1N("2b(0,"+ -5o+"px,0)");1x.2f(0);4j=1x[0].4j;1x.2f("");1x.1N("2b(0,8P,0)")}1h.1N("2b(0, 0,0)");1x.1K("6P-6V");1c 1x[0]};19.oX=1a(1x){1x=$(1x);if(1x.1b===0)1c;if(1x.1v("6P-1x-uQ"))1c;17 1h=$(".oV");17 5o=1x.fG();1x.1W("2c",5o+"px").2f(0).1w("6P-1x-uQ");17 4j=1x[0].4j;1x.1W({2c:"8P",uR:"8P"}).2f("");if(1x.1u("uP"))1x.1u("uP")();if(1h.1l(".6P-1x:2k(.6P-1x-uQ)").1b===0)1h.1N("");1x.1w("6P-6V").4A(1a(){1x.43();if(1h.1l(".6P-1x").1b===0)1h.6t()})};19.uS=1a(){if(!1U.4g)1c;4g.ab=4g.ab||19.14.ab||{};4g.1u=4g.1u||19.14.r2||{};4g.5B=4g.5B||{};19.ab=4g.ab;19.r2=4g.1u;19.yQ=4g.5B;if(!19.14.xR)1c;$(\'9U[1S="28/Iy"]\').2r(1a(){17 id=$(1i).1Z("id");if(!id)1c;4g.ab[id]=4g.5R($(1i).3O())})};17 7s=[];19.uT=1a(){1t(17 iP in 19.iQ){17 p=19.iQ[iP](19,19.14[iP]);if(p)7s.1Q(p)}};19.6U=1a(uU){1t(17 i=0;i<7s.1b;i++)if(7s[i].uV&&uU in 7s[i].uV)7s[i].uV[uU](2p[1],2p[2],2p[3],2p[4],2p[5])};19.Iz=1a(2E){17 ev=1g;1t(17 i=0;i<7s.1b;i++)if(7s[i].uW&&2E in 7s[i].uW)if(7s[i].uW[2E](2p[1],2p[2],2p[3],2p[4],2p[5]))ev=1f;1c ev};19.yP=1a(uX,1u){17 uY=1u;1t(17 i=0;i<7s.1b;i++)if(7s[i].b7&&uX in 7s[i].b7)uY=7s[i].b7[uX](1u,2p[2],2p[3],2p[4],2p[5],2p[6]);1c uY};19.4N=1a(){if(19.uS)19.uS();if(19.uT)19.uT();if(19.CC)19.CC();if(19.tk&&19.14.qN)19.tk();if(19.tw)19.tw();$(".1o:2k(.36)").2r(1a(){19.rN(1i)});$(".1C:2k(.36)").2r(1a(){19.rf(1i)});if(19.tC)19.tC();if(19.tK&&19.14.4K)19.tK();if(19.sx&&19.14.2D)19.sx();if(19.sB&&19.14.4L)19.sB();if(19.si&&(19.14.fe||19.14.fg))19.si();if(19.14.2m&&19.tJ)19.tJ();if(19.14.2m)$(".3t").2r(1a(1I,el){if($(el).1M(".1o").1b===0)19.A4(el)});if(19.14.CD)19.14.CD();19.6U("IA")};if(19.14.4N)19.4N();1c 19};17 3J=1a(){17 3J=1a(5U){17 uZ=1i,i=0;1t(i=0;i<5U.1b;i++)uZ[i]=5U[i];uZ.1b=5U.1b;1c 1i};17 $=1a(2h,2T){17 5U=[],i=0;if(2h&&!2T)if(2h 7J 3J)1c 2h;if(2h)if(1r 2h==="3l"){17 8V,lh,3O;2h=3O=2h.68();if(3O.1L("<")>=0&&3O.1L(">")>=0){17 gf="1j";if(3O.1L("<li")===0)gf="ul";if(3O.1L("<tr")===0)gf="CE";if(3O.1L("<td")===0||3O.1L("<th")===0)gf="tr";if(3O.1L("<CE")===0)gf="IB";if(3O.1L("<5d")===0)gf="2l";lh=2g.9D(gf);lh.77=3O;1t(i=0;i<lh.5b.1b;i++)5U.1Q(lh.5b[i])}1d{if(!2T&&2h[0]==="#"&&!2h.5Z(/[ .<>:~]/))8V=[2g.IC(2h.2W("#")[1])];1d 8V=(2T||2g).CF(2h);1t(i=0;i<8V.1b;i++)if(8V[i])5U.1Q(8V[i])}}1d if(2h.aD||2h===1U||2h===2g)5U.1Q(2h);1d if(2h.1b>0&&2h[0].aD)1t(i=0;i<2h.1b;i++)5U.1Q(2h[i]);1c 1P 3J(5U)};3J.6x={1w:1a(8i){if(1r 8i==="1m")1c 1i;17 dq=8i.2W(" ");1t(17 i=0;i<dq.1b;i++)1t(17 j=0;j<1i.1b;j++)if(1r 1i[j].cQ!=="1m")1i[j].cQ.9b(dq[i]);1c 1i},1K:1a(8i){17 dq=8i.2W(" ");1t(17 i=0;i<dq.1b;i++)1t(17 j=0;j<1i.1b;j++)if(1r 1i[j].cQ!=="1m")1i[j].cQ.43(dq[i]);1c 1i},1v:1a(8i){if(!1i[0])1c 1g;1d 1c 1i[0].cQ.ID(8i)},hN:1a(8i){17 dq=8i.2W(" ");1t(17 i=0;i<dq.1b;i++)1t(17 j=0;j<1i.1b;j++)if(1r 1i[j].cQ!=="1m")1i[j].cQ.kP(dq[i]);1c 1i},1Z:1a(gg,1J){if(2p.1b===1&&1r gg==="3l")if(1i[0])1c 1i[0].fY(gg);1d 1c 1m;1d{1t(17 i=0;i<1i.1b;i++)if(2p.1b===2)1i[i].CG(gg,1J);1d 1t(17 lk in gg){1i[i][lk]=gg[lk];1i[i].CG(lk,gg[lk])}1c 1i}},95:1a(1Z){1t(17 i=0;i<1i.1b;i++)1i[i].IF(1Z);1c 1i},2R:1a(3M,1J){if(2p.1b===1&&1r 3M==="3l"){if(1i[0])1c 1i[0][3M]}1d{1t(17 i=0;i<1i.1b;i++)if(2p.1b===2)1i[i][3M]=1J;1d 1t(17 v0 in 3M)1i[i][v0]=3M[v0];1c 1i}},1u:1a(6a,1J){17 el;if(1r 1J==="1m"){el=1i[0];if(el)if(el.ce&&6a in el.ce)1c el.ce[6a];1d{17 iR=el.fY("1u-"+6a);if(iR)1c iR;1d 1c 1m}1d 1c 1m}1d{1t(17 i=0;i<1i.1b;i++){el=1i[i];if(!el.ce)el.ce={};el.ce[6a]=1J}1c 1i}},zd:1a(6a){1t(17 i=0;i<1i.1b;i++){17 el=1i[i];if(el.ce&&el.ce[6a]){el.ce[6a]=29;4P el.ce[6a]}}},4H:1a(){17 el=1i[0];if(el){17 4H={};if(el.4H)1t(17 iR in el.4H)4H[iR]=el.4H[iR];1d 1t(17 i=0;i<el.iS.1b;i++){17 1Z=el.iS[i];if(1Z.1R.1L("1u-")>=0)4H[$.CH(1Z.1R.2W("1u-")[1])]=1Z.1J}1t(17 6a in 4H)if(4H[6a]==="1g")4H[6a]=1g;1d if(4H[6a]==="1f")4H[6a]=1f;1d if(7D(4H[6a])===4H[6a]*1)4H[6a]=4H[6a]*1;1c 4H}},5k:1a(1J){if(1r 1J==="1m")if(1i[0]){if(1i[0].eh&&1i[0].8t.5P()==="2l"){17 5v=[];1t(17 i=0;i<1i[0].sU.1b;i++)5v.1Q(1i[0].sU[i].1J);1c 5v}1c 1i[0].1J}1d 1c 1m;1d{1t(17 i=0;i<1i.1b;i++)1i[i].1J=1J;1c 1i}},1N:1a(1N){1t(17 i=0;i<1i.1b;i++){17 iT=1i[i].3A;iT.v1=iT.1N=1N}1c 1i},2f:1a(3v){if(1r 3v!=="3l")3v=3v+"ms";1t(17 i=0;i<1i.1b;i++){17 iT=1i[i].3A;iT.IG=iT.IH=3v}1c 1i},on:1a(3s,7M,8b,74){1a v2(e){17 1X=e.1X;if($(1X).is(7M))8b.6m(1X,e);1d{17 1M=$(1X).1M();1t(17 k=0;k<1M.1b;k++)if($(1M[k]).is(7M))8b.6m(1M[k],e)}}17 5T=3s.2W(" ");17 i,j;1t(i=0;i<1i.1b;i++)if(1r 7M==="1a"||7M===1g){if(1r 7M==="1a"){8b=2p[1];74=2p[2]||1g}1t(j=0;j<5T.1b;j++)1i[i].8U(5T[j],8b,74)}1d 1t(j=0;j<5T.1b;j++){if(!1i[i].gh)1i[i].gh=[];1i[i].gh.1Q({8b:8b,CI:v2});1i[i].8U(5T[j],v2,74)}1c 1i},3B:1a(3s,7M,8b,74){17 5T=3s.2W(" ");1t(17 i=0;i<5T.1b;i++)1t(17 j=0;j<1i.1b;j++)if(1r 7M==="1a"||7M===1g){if(1r 7M==="1a"){8b=2p[1];74=2p[2]||1g}1i[j].oY(5T[i],8b,74)}1d if(1i[j].gh)1t(17 k=0;k<1i[j].gh.1b;k++)if(1i[j].gh[k].8b===8b)1i[j].oY(5T[i],1i[j].gh[k].CI,74);1c 1i},7z:1a(3s,7M,8b,74){17 5V=1i;if(1r 7M==="1a"){8b=2p[1];74=2p[2];7M=1g}1a v3(e){8b.6m(e.1X,e);5V.3B(3s,7M,v3,74)}1c 5V.on(3s,7M,v3,74)},25:1a(3s,8j){17 5T=3s.2W(" ");1t(17 i=0;i<5T.1b;i++)1t(17 j=0;j<1i.1b;j++){17 c1;jX{c1=1P II(5T[i],{fT:8j,IJ:1f,tv:1f})}jY(e){c1=2g.Aq("IK");c1.IL(5T[i],1f,1f);c1.fT=8j}1i[j].Au(c1)}1c 1i},4A:1a(34){17 5T=["oZ","p0"],i,5V=1i;1a iU(e){if(e.1X!==1i)1c;34.6m(1i,e);1t(i=0;i<5T.1b;i++)5V.3B(5T[i],iU)}if(34)1t(i=0;i<5T.1b;i++)5V.on(5T[i],iU);1c 1i},jZ:1a(34){17 5T=["IM","IN"],i,5V=1i;1a iU(e){34(e);1t(i=0;i<5T.1b;i++)5V.3B(5T[i],iU)}if(34)1t(i=0;i<5T.1b;i++)5V.on(5T[i],iU);1c 1i},3q:1a(){if(1i[0]===1U)1c 1U.kd;1d if(1i.1b>0)1c 7D(1i.1W("3q"));1d 1c 29},bG:1a(p1){if(1i.1b>0)if(p1){17 9w=1i.9w();1c 1i[0].5u+7D(9w.eK("cJ-1Y"))+7D(9w.eK("cJ-1G"))}1d 1c 1i[0].5u;1d 1c 29},2c:1a(){if(1i[0]===1U)1c 1U.zm;1d if(1i.1b>0)1c 7D(1i.1W("2c"));1d 1c 29},fG:1a(p1){if(1i.1b>0)if(p1){17 9w=1i.9w();1c 1i[0].3X+7D(9w.eK("cJ-2J"))+7D(9w.eK("cJ-4I"))}1d 1c 1i[0].3X;1d 1c 29},5D:1a(){if(1i.1b>0){17 el=1i[0];17 bh=el.kh();17 5K=2g.5K;17 p2=el.p2||5K.p2||0;17 4j=el.4j||5K.4j||0;17 2C=1U.IO||el.2C;17 7x=1U.IP||el.7x;1c{2J:bh.2J+2C-p2,1G:bh.1G+7x-4j}}1d 1c 29},6t:1a(){1t(17 i=0;i<1i.1b;i++)1i[i].3A.7l="ll";1c 1i},5O:1a(){1t(17 i=0;i<1i.1b;i++)1i[i].3A.7l="39";1c 1i},9w:1a(){if(1i[0])1c 1U.lm(1i[0],29)},1W:1a(3M,1J){17 i;if(2p.1b===1)if(1r 3M==="3l"){if(1i[0])1c 1U.lm(1i[0],29).eK(3M)}1d{1t(i=0;i<1i.1b;i++)1t(17 2R in 3M)1i[i].3A[2R]=3M[2R];1c 1i}if(2p.1b===2&&1r 3M==="3l"){1t(i=0;i<1i.1b;i++)1i[i].3A[3M]=1J;1c 1i}1c 1i},2r:1a(34){if(!34)1c 1i;1t(17 i=0;i<1i.1b;i++)if(34.6m(1i[i],i,1i[i])===1g)1c 1i;1c 1i},dZ:1a(34){17 v4=[];17 5V=1i;1t(17 i=0;i<5V.1b;i++)if(34.6m(5V[i],i,5V[i]))v4.1Q(5V[i]);1c 1P 3J(v4)},3O:1a(3O){if(1r 3O==="1m")1c 1i[0]?1i[0].77:1m;1d{1t(17 i=0;i<1i.1b;i++)1i[i].77=3O;1c 1i}},28:1a(28){if(1r 28==="1m")if(1i[0])1c 1i[0].bR.68();1d 1c 29;1d{1t(17 i=0;i<1i.1b;i++)1i[i].bR=28;1c 1i}},is:1a(2h){17 gi,i,el=1i[0];if(!el||1r 2h==="1m")1c 1g;if(1r 2h==="3l")if(el.CJ)1c el.CJ(2h);1d if(el.CK)1c el.CK(2h);1d if(el.CL)1c el.CL(2h);1d{gi=$(2h);1t(i=0;i<gi.1b;i++)if(gi[i]===el)1c 1f;1c 1g}1d if(2h===2g)1c el===2g;1d if(2h===1U)1c el===1U;1d{if(2h.aD||2h 7J 3J){gi=2h.aD?[2h]:2h;1t(i=0;i<gi.1b;i++)if(gi[i]===el)1c 1f;1c 1g}1c 1g}},1L:1a(el){1t(17 i=0;i<1i.1b;i++)if(1i[i]===el)1c i},1I:1a(){17 i,fF=1i[0];if(fF){i=0;iV((fF=fF.IQ)!==29)if(fF.aD===1)i++;1c i}},eq:1a(1I){if(1r 1I==="1m")1c 1i;17 1b=1i.1b;17 p3;if(1I>1b-1)1c 1P 3J([]);if(1I<0){p3=1b+1I;if(p3<0)1c 1P 3J([]);1d 1c 1P 3J([1i[p3]])}1c 1P 3J([1i[1I]])},3h:1a(){17 i,j,k,8Y;1t(k=0;k<2p.1b;k++){8Y=2p[k];1t(i=0;i<1i.1b;i++)if(1r 8Y==="3l"){17 eL=2g.9D("1j");eL.77=8Y;iV(eL.CM)1i[i].hZ(eL.CM)}1d if(8Y 7J 3J)1t(j=0;j<8Y.1b;j++)1i[i].hZ(8Y[j]);1d 1i[i].hZ(8Y)}1c 1i},IR:1a(4i){$(4i).3h(1i);1c 1i},98:1a(8Y){17 i,j;1t(i=0;i<1i.1b;i++)if(1r 8Y==="3l"){17 eL=2g.9D("1j");eL.77=8Y;1t(j=eL.5b.1b-1;j>=0;j--)1i[i].61(eL.5b[j],1i[i].5b[0])}1d if(8Y 7J 3J)1t(j=0;j<8Y.1b;j++)1i[i].61(8Y[j],1i[i].5b[0]);1d 1i[i].61(8Y,1i[i].5b[0]);1c 1i},yS:1a(4i){$(4i).98(1i);1c 1i},61:1a(2h){17 8M=$(2h);1t(17 i=0;i<1i.1b;i++)if(8M.1b===1)8M[0].8C.61(1i[i],8M[0]);1d if(8M.1b>1)1t(17 j=0;j<8M.1b;j++)8M[j].8C.61(1i[i].p4(1f),8M[j])},az:1a(2h){17 6E=$(2h);1t(17 i=0;i<1i.1b;i++)if(6E.1b===1)6E[0].8C.61(1i[i],6E[0].CN);1d if(6E.1b>1)1t(17 j=0;j<6E.1b;j++)6E[j].8C.61(1i[i].p4(1f),6E[j].CN)},2X:1a(2h){if(1i.1b>0)if(2h)if(1i[0].gj&&$(1i[0].gj).is(2h))1c 1P 3J([1i[0].gj]);1d 1c 1P 3J([]);1d if(1i[0].gj)1c 1P 3J([1i[0].gj]);1d 1c 1P 3J([]);1d 1c 1P 3J([])},jN:1a(2h){17 p5=[];17 el=1i[0];if(!el)1c 1P 3J([]);iV(el.gj){17 2X=el.gj;if(2h){if($(2X).is(2h))p5.1Q(2X)}1d p5.1Q(2X);el=2X}1c 1P 3J(p5)},3k:1a(2h){if(1i.1b>0){17 el=1i[0];if(2h)if(el.gk&&$(el.gk).is(2h))1c 1P 3J([el.gk]);1d 1c 1P 3J([]);1d if(el.gk)1c 1P 3J([el.gk]);1d 1c 1P 3J([])}1d 1c 1P 3J([])},CO:1a(2h){17 p6=[];17 el=1i[0];if(!el)1c 1P 3J([]);iV(el.gk){17 3k=el.gk;if(2h){if($(3k).is(2h))p6.1Q(3k)}1d p6.1Q(3k);el=3k}1c 1P 3J(p6)},IS:1a(2h){1c 1i.jN(2h).9b(1i.CO(2h))},4i:1a(2h){17 1M=[];1t(17 i=0;i<1i.1b;i++)if(1i[i].8C!==29)if(2h){if($(1i[i].8C).is(2h))1M.1Q(1i[i].8C)}1d 1M.1Q(1i[i].8C);1c $($.eM(1M))},1M:1a(2h){17 1M=[];1t(17 i=0;i<1i.1b;i++){17 4i=1i[i].8C;iV(4i){if(2h){if($(4i).is(2h))1M.1Q(4i)}1d 1M.1Q(4i);4i=4i.8C}}1c $($.eM(1M))},fH:1a(2h){17 fH=1i;if(1r 2h==="1m")1c 1P 3J([]);if(!fH.is(2h))fH=fH.1M(2h).eq(0);1c fH},1l:1a(2h){17 v5=[];1t(17 i=0;i<1i.1b;i++){17 46=1i[i].CF(2h);1t(17 j=0;j<46.1b;j++)v5.1Q(46[j])}1c 1P 3J(v5)},2K:1a(2h){17 2K=[];1t(17 i=0;i<1i.1b;i++){17 5b=1i[i].5b;1t(17 j=0;j<5b.1b;j++)if(!2h){if(5b[j].aD===1)2K.1Q(5b[j])}1d if(5b[j].aD===1&&$(5b[j]).is(2h))2K.1Q(5b[j])}1c 1P 3J($.eM(2K))},43:1a(){1t(17 i=0;i<1i.1b;i++)if(1i[i].8C)1i[i].8C.p7(1i[i]);1c 1i},7X:1a(){1c 1i.43()},9b:1a(){17 5V=1i;17 i,j;1t(i=0;i<2p.1b;i++){17 v6=$(2p[i]);1t(j=0;j<v6.1b;j++){5V[5V.1b]=v6[j];5V.1b++}}1c 5V},cK:1a(){1t(17 i=0;i<1i.1b;i++){17 el=1i[i];if(el.aD===1){1t(17 j=0;j<el.5b.1b;j++)if(el.5b[j].8C)el.5b[j].8C.p7(el.5b[j]);el.bR=""}}1c 1i}};(1a(){17 v7="3Q bH 8l IT IU jP dW jO 8m 6F dH h6 jz IV IW IX IY 4y cD 57 8q 4Y".2W(" ");17 CP="8q 4Y".2W(" ");1a p8(1R){3J.6x[1R]=1a(7M,8b,74){17 i;if(1r 7M==="1m"){1t(i=0;i<1i.1b;i++)if(CP.1L(1R)<0)if(1R in 1i[i])1i[i][1R]();1d $(1i[i]).25(1R);1c 1i}1d 1c 1i.on(1R,7M,8b,74)}}1t(17 i=0;i<v7.1b;i++)p8(v7[i])})();17 eN={};$.IZ=1a(1p){if(1p.1S)1p.3i=1p.1S;$.2r(1p,1a(CQ,CR){eN[CQ]=CR})};17 CS=0;$.7A=1a(1p){17 4d={3i:"hp",1u:1g,CT:1f,5B:1f,CU:"",99:"",v8:{},v9:{},eO:{},CV:1f,p9:"28",g2:"J0/x-xS-3p-J1",aP:0};17 9A=["mH","69","8n","aL","eO"];if(1p.1S)1p.3i=1p.1S;$.2r(eN,1a(va,CW){if(9A.1L(va)<0)4d[va]=CW});1a 8D(3s,8j,67){17 a=2p;if(3s)$(2g).25(3s,8j);if(67){if(67 in eN)eN[67](a[3],a[4],a[5],a[6]);if(1p[67])1p[67](a[3],a[4],a[5],a[6])}}$.2r(4d,1a(2R,CX){if(!(2R in 1p))1p[2R]=CX});if(!1p.1n)1p.1n=1U.ml.ar();17 ln=1p.1n.1L("?")>=0?"&":"?";17 9V=1p.3i.hr();if((9V==="hp"||9V==="CY"||9V==="CZ"||9V==="D0")&&1p.1u){17 iW;if(1r 1p.1u==="3l")if(1p.1u.1L("?")>=0)iW=1p.1u.2W("?")[1];1d iW=1p.1u;1d iW=$.ik(1p.1u);if(iW.1b){1p.1n+=ln+iW;if(ln==="?")ln="&"}}if(1p.p9==="vb"&&1p.1n.1L("34=")>=0){17 67="J2"+2x.9W()+CS++;17 pa;17 pc=1p.1n.2W("34=");17 pd=pc[0]+"34="+67;if(pc[1].1L("&")>=0){17 vc=pc[1].2W("&").dZ(1a(el){1c el.1L("=")>0}).76("&");if(vc.1b>0)pd+="&"+vc}17 9U=2g.9D("9U");9U.1S="28/AD";9U.n8=1a(){5m(pa);8D(1m,1m,"69",29,"vd");8D("pe 7A:8n",{vd:1f},"8n",29,"vd")};9U.5x=pd;1U[67]=1a(1u){5m(pa);8D(1m,1m,"aL",1u);9U.8C.p7(9U);9U=29;4P 1U[67]};2g.J3("J4").hZ(9U);if(1p.aP>0)pa=4k(1a(){9U.8C.p7(9U);9U=29;8D(1m,1m,"69",29,"aP")},1p.aP);1c}if(9V==="hp"||9V==="CY"||9V==="CZ"||9V==="D0")if(1p.5B===1g)1p.1n+=ln+"J5="+2x.9W();17 26=1P D1;26.pd=1p.1n;26.J6=1p;26.3S(9V,1p.1n,1p.CT,1p.CU,1p.99);17 gl=29;if((9V==="tG"||9V==="J7"||9V==="J8")&&1p.1u)if(1p.CV){17 D2=[J9,Ja,Jb,AX];if(D2.1L(1p.1u.Jc)>=0)gl=1p.1u;1d{17 gm="---------------------------"+2x.9W().ar(16);if(1p.g2==="ve/3p-1u")26.pf("vf-D3","ve/3p-1u; gm="+gm);1d 26.pf("vf-D3",1p.g2);gl="";17 gn=$.ik(1p.1u);if(1p.g2==="ve/3p-1u"){gm="---------------------------"+2x.9W().ar(16);gn=gn.2W("&");17 vg=[];1t(17 i=0;i<gn.1b;i++)vg.1Q(\'vf-Jd: 3p-1u; 1R="\'+gn[i].2W("=")[0]+\'"\\r\\n\\r\\n\'+gn[i].2W("=")[1]+"\\r\\n");gl="--"+gm+"\\r\\n"+vg.76("--"+gm+"\\r\\n")+"--"+gm+"--\\r\\n"}1d gl=gn}}1d gl=1p.1u;if(1p.v8)$.2r(1p.v8,1a(D4,D5){26.pf(D4,D5)});if(1r 1p.vh==="1m")1p.vh=/^([\\w-]+:)?\\/\\/([^\\/]+)/.pg(1p.1n)&&ox.$2!==1U.ml.Je;if(!1p.vh)26.pf("X-Jf-Jg","D1");if(1p.v9)$.2r(1p.v9,1a(D6,D7){26[D6]=D7});17 eP;26.sn=1a(e){if(eP)5m(eP);if(26.8o>=yr&&26.8o<4u||26.8o===0){17 lo;if(1p.p9==="vb")jX{lo=ew.o5(26.hq);8D("D8 7A:aL",{26:26},"aL",lo,26.8o,26)}jY(Jh){8D("ph 7A:69",{26:26,D9:1f},"69",26,"D9")}1d{lo=26.Da==="28"||26.Da===""?26.hq:26.Ji;8D("D8 7A:aL",{26:26},"aL",lo,26.8o,26)}}1d 8D("ph 7A:69",{26:26},"69",26,26.8o);if(1p.eO){if(eN.eO&&eN.eO[26.8o])eN.eO[26.8o](26);if(1p.eO[26.8o])1p.eO[26.8o](26)}8D("pe 7A:8n",{26:26},"8n",26,26.8o)};26.n8=1a(e){if(eP)5m(eP);8D("ph 7A:69",{26:26},"69",26,26.8o);8D("pe 7A:8n",{26:26},"8n",26,26.8o)};8D("Jj 7A:56",{26:26},"56",26);8D(1m,1m,"mH",26);if(1p.aP>0){26.Jk=1a(){if(eP)5m(eP)};eP=4k(1a(){26.s2();8D("ph 7A:69",{26:26,aP:1f},"69",26,"aP");8D("pe 7A:8n",{26:26,aP:1f},"8n",26,"aP")},1p.aP)}26.Jl(gl);1c 26};(1a(){17 vi="fy Db Dc".2W(" ");1a p8(3i){$[3i]=1a(1n,1u,aL,69){1c $.7A({1n:1n,3i:3i==="Db"?"tG":"hp",1u:1r 1u==="1a"?1m:1u,aL:1r 1u==="1a"?1u:aL,69:1r 1u==="1a"?aL:69,p9:3i==="Dc"?"vb":1m})}}1t(17 i=0;i<vi.1b;i++)p8(vi[i])})();$.hs=1a(1n){1n=1n||ml.5h;17 32={},i,14,64,1b;if(1r 1n==="3l"&&1n.1b){1n=1n.1L("?")>-1?1n.31(/\\S*\\?/,""):"";14=1n.2W("&"),1b=14.1b;1t(i=0;i<1b;i++){64=14[i].31(/#\\S+/g,"").2W("=");32[Dd(64[0])]=Dd(64[1])||""}}1c 32};$.9a=1a(5U){if(eQ.6x.ar.pi(5U)==="[6d pj]")1c 1f;1d 1c 1g};$.2r=1a(5A,34){if(1r 5A!=="6d")1c;if(!34)1c;if($.9a(5A)||5A 7J 3J){17 i;1t(i=0;i<5A.1b;i++)if(34(i,5A[i])===1g)1c}1d{17 2R;1t(2R in 5A)if(5A.jI(2R))if(34(2R,5A[2R])===1g)1c}};$.eM=1a(5U){17 eM=[];1t(17 i=0;i<5U.1b;i++)if(eM.1L(5U[i])===-1)eM.1Q(5U[i]);1c eM};$.ik=$.64=1a(5A,1M){if(1r 5A==="3l")1c 5A;17 go=[];17 vj="&";1M=1M||[];17 eR;1a lp(1R){if(1M.1b>0){17 pk="";1t(17 j=0;j<1M.1b;j++)if(j===0)pk+=1M[j];1d pk+="["+pl(1M[j])+"]";1c pk+"["+pl(1R)+"]"}1d 1c pl(1R)}1a vk(1J){1c pl(1J)}1t(17 2R in 5A)if(5A.jI(2R)){17 dr;if($.9a(5A[2R])){dr=[];1t(17 i=0;i<5A[2R].1b;i++)if(!$.9a(5A[2R][i])&&1r 5A[2R][i]==="6d"){eR=1M.bK();eR.1Q(2R);eR.1Q(i+"");dr.1Q($.ik(5A[2R][i],eR))}1d dr.1Q(lp(2R)+"[]="+vk(5A[2R][i]));if(dr.1b>0)go.1Q(dr.76(vj))}1d if(5A[2R]===29)go.1Q(lp(2R)+"=");1d if(1r 5A[2R]==="6d"){eR=1M.bK();eR.1Q(2R);dr=$.ik(5A[2R],eR);if(dr!=="")go.1Q(dr)}1d if(1r 5A[2R]!=="1m"&&5A[2R]!=="")go.1Q(lp(2R)+"="+vk(5A[2R]));1d if(5A[2R]==="")go.1Q(lp(2R))}1c go.76(vj)};$.CH=1a(3l){1c 3l.5P().31(/-(.)/g,1a(5Z,De){1c De.hr()})};$.4H=1a(el){1c $(el).4H()};$.eG=1a(el,9m){17 7N,5f,8E,aQ;if(1r 9m==="1m")9m="x";8E=1U.lm(el,29);if(1U.eS){5f=8E.1N||8E.v1;if(5f.2W(",").1b>6)5f=5f.2W(", ").Df(1a(a){1c a.31(",",".")}).76(", ");aQ=1P eS(5f==="ll"?"":5f)}1d{aQ=8E.1N||8E.eK("1N").31("1F(","7N(1, 0, 0, 1,");7N=aQ.ar().2W(",")}if(9m==="x")if(1U.eS)5f=aQ.Dg;1d if(7N.1b===16)5f=7D(7N[12]);1d 5f=7D(7N[4]);if(9m==="y")if(1U.eS)5f=aQ.Dh;1d if(7N.1b===16)5f=7D(7N[13]);1d 5f=7D(7N[5]);1c 5f||0};$.eH=1a(34){if(1U.eH)1c 1U.eH(34);1d if(1U.Di)1c 1U.Di(34);1d 1c 1U.4k(34,dF/60)};$.dl=1a(id){if(1U.dl)1c 1U.dl(id);1d if(1U.Dj)1c 1U.Dj(id);1d 1c 1U.5m(id)};$.Jm=!!("vm"in 1U||1U.iX&&2g 7J iX);17 pm=[{2t:"A",2n:"A\\Jn\\Jo\\Jp\\Jq\\Jr\\Js\\Jt\\Ju\\Jv\\Jw\\Jx\\Jy\\Jz\\JA\\JB\\JC\\JD\\JE\\JF\\JG\\JH\\JI\\JJ\\JK\\JL\\JM\\JN\\JO\\JP\\JQ\\JR\\JS\\JT"},{2t:"AA",2n:"\\JU"},{2t:"AE",2n:"\\JV\\JW\\JX"},{2t:"AO",2n:"\\JY"},{2t:"AU",2n:"\\JZ"},{2t:"AV",2n:"\\K0\\K1"},{2t:"AY",2n:"\\K2"},{2t:"B",2n:"B\\K3\\K4\\K5\\K6\\K7\\K8\\K9\\Ka"},{2t:"C",2n:"C\\Kb\\Kc\\Kd\\Ke\\Kf\\Kg\\Kh\\Ki\\Kj\\Kk\\Kl"},{2t:"D",2n:"D\\Km\\Kn\\Ko\\Kp\\Kq\\Kr\\Ks\\Kt\\Ku\\Kv\\Kw\\Kx\\Ky"},{2t:"DZ",2n:"\\Kz\\KA"},{2t:"Dz",2n:"\\KB\\KC"},{2t:"E",2n:"E\\KD\\KE\\KF\\KG\\KH\\KI\\KJ\\KK\\KL\\KM\\KN\\KO\\KP\\KQ\\KR\\KS\\KT\\KU\\KV\\KW\\KX\\KY\\KZ\\L0\\L1\\L2\\L3\\L4\\L5"},{2t:"F",2n:"F\\L6\\L7\\L8\\L9\\La"},{2t:"G",2n:"G\\Lb\\Lc\\Ld\\Le\\Lf\\Lg\\Lh\\Li\\Lk\\Ll\\Lm\\Ln\\Lo\\Lp"},{2t:"H",2n:"H\\Lq\\Lr\\Ls\\Lt\\Lu\\Lv\\Lw\\Lx\\Ly\\Lz\\LA\\LB\\LC"},{2t:"I",2n:"I\\LD\\LE\\LF\\LG\\LH\\LI\\LK\\LL\\LM\\LN\\LO\\LP\\LQ\\LR\\LS\\LT\\LU\\LV\\LW"},{2t:"J",2n:"J\\LX\\LY\\LZ\\M0"},{2t:"K",2n:"K\\M1\\M2\\M3\\M4\\M5\\M6\\M7\\M8\\M9\\Ma\\Mb\\Mc\\Md"},{2t:"L",2n:"L\\Me\\Mf\\Mg\\Mh\\Mi\\Mj\\Mk\\Ml\\Mm\\Mn\\Mo\\Mp\\Mq\\Mr\\Ms\\Mt\\Mu"},{2t:"LJ",2n:"\\Mv"},{2t:"Lj",2n:"\\Mw"},{2t:"M",2n:"M\\Mx\\My\\Mz\\MA\\MB\\MC\\MD"},{2t:"N",2n:"N\\ME\\MF\\MG\\MH\\MI\\MJ\\MK\\ML\\MN\\MO\\MP\\MQ\\MR\\MS\\MT"},{2t:"NJ",2n:"\\MU"},{2t:"Nj",2n:"\\MV"},{2t:"O",2n:"O\\MW\\MX\\MY\\MZ\\N0\\N1\\N2\\N3\\N4\\N5\\N6\\N7\\N8\\N9\\Na\\Nb\\Nc\\Nd\\Ne\\Nf\\Ng\\Nh\\Ni\\Nk\\Nl\\Nm\\Nn\\No\\Np\\Nq\\Nr\\Ns\\Nt\\Nu\\Nv\\Nw\\Nx\\Ny\\Nz\\NA\\NB\\NC"},{2t:"OI",2n:"\\ND"},{2t:"OO",2n:"\\NE"},{2t:"OU",2n:"\\NF"},{2t:"OE",2n:"\\NG\\NH"},{2t:"oe",2n:"\\NI\\NK"},{2t:"P",2n:"P\\NL\\NM\\NN\\NO\\NP\\NQ\\NR\\NS\\NT"},{2t:"Q",2n:"Q\\NU\\NV\\NW\\NX\\NY"},{2t:"R",2n:"R\\NZ\\O0\\O1\\O2\\O3\\O4\\O5\\O6\\O7\\O8\\O9\\Oa\\Ob\\Oc\\Od\\Oe"},{2t:"S",2n:"S\\Of\\Og\\Oh\\Oi\\Oj\\Ok\\Ol\\Om\\On\\Oo\\Op\\Oq\\Or\\Os\\Ot\\Ou"},{2t:"T",2n:"T\\Ov\\Ow\\Ox\\Oy\\Oz\\OA\\OB\\OC\\OD\\OF\\OG\\OH\\OJ\\OL"},{2t:"TZ",2n:"\\OM"},{2t:"U",2n:"U\\ON\\OP\\OQ\\OR\\OT\\OV\\OW\\OX\\OY\\OZ\\P0\\P1\\P2\\P3\\P4\\P5\\P6\\P7\\P8\\P9\\Pa\\Pb\\Pc\\Pd\\Pe\\Pf\\Pg\\Ph\\Pi\\Pj\\Pk\\Pl\\Pm"},{2t:"V",2n:"V\\Pn\\Po\\Pp\\Pq\\Pr\\Ps\\Pt"},{2t:"VY",2n:"\\Pu"},{2t:"W",2n:"W\\Pv\\Pw\\Px\\Py\\Pz\\PA\\PB\\PC\\PD"},{2t:"X",2n:"X\\PE\\PF\\PG\\PH"},{2t:"Y",2n:"Y\\PJ\\PK\\PL\\PM\\PN\\PO\\PP\\PQ\\PR\\PS\\PT\\PU\\PV\\PW"},{2t:"Z",2n:"Z\\PX\\PY\\PZ\\Q0\\Q1\\Q2\\Q3\\Q4\\Q5\\Q6\\Q7\\Q8\\Q9"},{2t:"a",2n:"a\\Qa\\Qb\\Qc\\Qd\\Qe\\Qf\\Qg\\Qh\\Qi\\Qj\\Qk\\Ql\\Qm\\Qn\\Qo\\Qp\\Qq\\Qr\\Qs\\Qt\\Qu\\Qv\\Qw\\Qx\\Qy\\Qz\\QA\\QB\\QC\\QD\\QE\\QF\\QG\\QH"},{2t:"aa",2n:"\\QI"},{2t:"ae",2n:"\\QJ\\QK\\QL"},{2t:"ao",2n:"\\QM"},{2t:"au",2n:"\\QN"},{2t:"av",2n:"\\QO\\QP"},{2t:"ay",2n:"\\QQ"},{2t:"b",2n:"b\\QR\\QS\\QT\\QU\\QV\\QW\\QX\\QY"},{2t:"c",2n:"c\\QZ\\R0\\R1\\R2\\R3\\R4\\R5\\R6\\R7\\R8\\R9\\Ra"},{2t:"d",2n:"d\\Rb\\Rc\\Rd\\Re\\Rf\\Rg\\Rh\\Ri\\Rj\\Rk\\Rl\\Rm\\Rn"},{2t:"dz",2n:"\\Ro\\Rp"},{2t:"e",2n:"e\\Rq\\Rr\\Rs\\Rt\\Ru\\Rv\\Rw\\Rx\\Ry\\Rz\\RA\\RB\\RC\\RD\\RE\\RF\\RG\\RH\\RI\\RJ\\RK\\RL\\RM\\RN\\RO\\RP\\RQ\\RR\\RS\\RT"},{2t:"f",2n:"f\\RU\\RV\\RW\\RX\\RY"},{2t:"g",2n:"g\\RZ\\S0\\S1\\S2\\S3\\S4\\S5\\S6\\S7\\S8\\S9\\Sa\\Sb\\Sc"},{2t:"h",2n:"h\\Sd\\Se\\Sf\\Sg\\Sh\\Si\\Sj\\Sk\\Sl\\Sm\\Sn\\So\\Sp\\Sq"},{2t:"hv",2n:"\\Sr"},{2t:"i",2n:"i\\Ss\\St\\Su\\Sv\\Sw\\Sx\\Sy\\Sz\\SA\\SB\\SC\\SD\\SE\\SF\\SG\\SH\\SI\\SJ\\SK"},{2t:"j",2n:"j\\SL\\SM\\SN\\SO\\SP"},{2t:"k",2n:"k\\SQ\\SR\\SS\\ST\\SU\\SV\\SW\\SX\\SY\\SZ\\T0\\T1\\T2"},{2t:"l",2n:"l\\T3\\T4\\T5\\T6\\T7\\T8\\T9\\Ta\\Tb\\Tc\\Td\\Te\\Tf\\Tg\\Th\\Ti\\Tj\\Tk"},{2t:"lj",2n:"\\Tl"},{2t:"m",2n:"m\\Tm\\Tn\\To\\Tp\\Tq\\Tr\\Ts"},{2t:"n",2n:"n\\Tt\\Tu\\Tv\\Tw\\Tx\\Ty\\Tz\\TA\\TB\\TC\\TD\\TE\\TF\\TG\\TH\\TI"},{2t:"nj",2n:"\\TJ"},{2t:"o",2n:"o\\TK\\TL\\TM\\TN\\TO\\TP\\TQ\\TR\\TS\\TT\\TU\\TV\\TW\\TX\\TY\\U0\\U1\\U2\\U3\\U4\\U5\\U6\\U7\\U8\\U9\\Ua\\Ub\\Uc\\Ud\\Ue\\Uf\\Ug\\Uh\\Ui\\Uj\\Uk\\Ul\\Um\\Un\\Uo\\Up\\Uq"},{2t:"oi",2n:"\\Ur"},{2t:"ou",2n:"\\Us"},{2t:"oo",2n:"\\Ut"},{2t:"p",2n:"p\\Uu\\Uv\\Uw\\Ux\\Uy\\Uz\\UA\\UB\\UC"},{2t:"q",2n:"q\\UD\\UE\\UF\\UG\\UH"},{2t:"r",2n:"r\\UI\\UJ\\UK\\UL\\UM\\UN\\UO\\UP\\UQ\\UR\\US\\UT\\UU\\UV\\UW\\UX"},{2t:"s",2n:"s\\UY\\UZ\\V0\\V1\\V2\\V3\\V4\\V5\\V6\\V7\\V8\\V9\\Va\\Vb\\Vc\\Vd\\Ve"},{2t:"t",2n:"t\\Vf\\Vg\\Vh\\Vi\\Vj\\Vk\\Vl\\Vm\\Vn\\Vo\\Vp\\Vq\\Vr\\Vs\\Vt"},{2t:"tz",2n:"\\Vu"},{2t:"u",2n:"u\\Vv\\Vw\\Vx\\Vy\\Vz\\VA\\VB\\VC\\VD\\VE\\VF\\VG\\VH\\VI\\VJ\\VK\\VL\\VM\\VN\\VO\\VP\\VQ\\VR\\VS\\VT\\VU\\VV\\VW\\VX\\VZ\\W0\\W1\\W2"},{2t:"v",2n:"v\\W3\\W4\\W5\\W6\\W7\\W8\\W9"},{2t:"vy",2n:"\\Wa"},{2t:"w",2n:"w\\Wb\\Wc\\Wd\\We\\Wf\\Wg\\Wh\\Wi\\Wj\\Wk"},{2t:"x",2n:"x\\Wl\\Wm\\Wn\\Wo"},{2t:"y",2n:"y\\Wp\\Wq\\Wr\\Ws\\Wt\\Wu\\Wv\\Ww\\Wx\\Wy\\Wz\\WA\\WB\\WC\\WD"},{2t:"z",2n:"z\\WE\\WF\\WG\\WH\\WI\\WJ\\WK\\WL\\WM\\WN\\WO\\WP\\WQ"}];17 vn={};1t(17 i=0;i<pm.1b;i++){17 2n=pm[i].2n;1t(17 j=0;j<2n.1b;j++)vn[2n[j]]=pm[i].2t}$.dR=1a(Dk){1c Dk.31(/[^\\WR-\\WS]/g,1a(a){1c vn[a]||a})};$.fn=3J.6x;$.fn.vo=1a(1G,2J,3v,6y,34){if(2p.1b===4&&1r 6y==="1a"){34=6y;6y=1m}1c 1i.2r(1a(){17 el=1i;17 gp,gq,fQ,vp,cf,cg,2C,7x;17 ds=2J>0||2J===0;17 dt=1G>0||1G===0;if(1r 6y==="1m")6y="vq";if(ds){gp=el.2C;if(!3v)el.2C=2J}if(dt){gq=el.7x;if(!3v)el.7x=1G}if(!3v)1c;if(ds){fQ=el.5l-el.3X;cf=1A.4C(1A.4Z(2J,fQ),0)}if(dt){vp=el.WT-el.5u;cg=1A.4C(1A.4Z(1G,vp),0)}17 aR=29;if(ds&&cf===gp)ds=1g;if(dt&&cg===gq)dt=1g;1a aJ(6j){if(6j===1m)6j=(1P 2x).3E();if(aR===29)aR=6j;17 86;17 2z=1A.4C(1A.4Z((6j-aR)/3v,1),0);17 iY=6y==="WU"?2z:.5-1A.vr(2z*1A.PI)/2;if(ds)2C=gp+iY*(cf-gp);if(dt)7x=gq+iY*(cg-gq);if(ds&&cf>gp&&2C>=cf){el.2C=cf;86=1f}if(ds&&cf<gp&&2C<=cf){el.2C=cf;86=1f}if(dt&&cg>gq&&7x>=cg){el.7x=cg;86=1f}if(dt&&cg<gq&&7x<=cg){el.7x=cg;86=1f}if(86){if(34)34();1c}if(ds)el.2C=2C;if(dt)el.7x=7x;$.eH(aJ)}$.eH(aJ)})};$.fn.2C=1a(2J,3v,6y,34){if(2p.1b===3&&1r 6y==="1a"){34=6y;6y=1m}17 5V=1i;if(1r 2J==="1m")if(5V.1b>0)1c 5V[0].2C;1d 1c 29;1c 5V.vo(1m,2J,3v,6y,34)};$.fn.7x=1a(1G,3v,6y,34){if(2p.1b===3&&1r 6y==="1a"){34=6y;6y=1m}17 5V=1i;if(1r 1G==="1m")if(5V.1b>0)1c 5V[0].7x;1d 1c 29;1c 5V.vo(1G,1m,3v,6y,34)};1c $}();gZ.$=3J;17 $=3J;1U.3J=3J;17 pn=1a(8F,3M,14){3M=3M||{};14=14||{};17 4d={3v:4u,6y:"vq"};1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];17 a=1i;a.14=14;a.3M=3M;a.8F=$(8F);if(a.8F.1b===0)1c a;a.Dl=1a(6y,2z){if(6y==="vq")1c.5-1A.vr(2z*1A.PI)/2;if(1r 6y==="1a")1c 6y(2z);1c 2z};a.WV=1a(){if(a.po)$.dl(a.po);a.5e=1g;a.8F.2r(1a(1I,el){4P el.lq});a.eT=[]};a.86=1a(8n){a.5e=1g;a.8F.2r(1a(1I,el){4P el.lq});if(8n)8n(8F);if(a.eT.1b>0){17 eT=a.eT.n0();a.6l(eT[0],eT[1])}};a.5e=1g;a.eT=[];a.6l=1a(3M,14){if(a.5e){a.eT.1Q([3M,14]);1c a}a.14=14;17 iZ=[];a.8F.2r(1a(1I,el){17 j0,ch,gr,cj,pp;iZ[1I]={vs:el};1t(17 2R in 3M){j0=1U.lm(el,29).eK(2R).31(",",".");ch=7D(j0);gr=j0.31(ch,"");cj=3M[2R];pp=3M[2R]+gr;iZ[1I][2R]={j0:j0,ch:ch,gr:gr,cj:cj,pp:pp,lr:ch}}});17 aR=29,6j,vt=0,vu=0,86,vv=1g;a.5e=1f;1a aJ(){6j=(1P 2x).3E();17 2z,iY,el;if(!vv){vv=1f;if(14.Dm)14.Dm(8F)}if(aR===29)aR=6j;if(14.2z)14.2z(a.8F,1A.4C(1A.4Z((6j-aR)/14.3v,1),0),aR+14.3v-6j<0?0:aR+14.3v-6j,aR);1t(17 i=0;i<iZ.1b;i++){if(86)ee;el=iZ[i];if(el.86)ee;1t(17 2R in 3M){2z=1A.4C(1A.4Z((6j-aR)/14.3v,1),0);iY=a.Dl(14.6y,2z);el[2R].lr=el[2R].ch+iY*(el[2R].cj-el[2R].ch);if(el[2R].cj>el[2R].ch&&el[2R].lr>=el[2R].cj||el[2R].cj<el[2R].ch&&el[2R].lr<=el[2R].cj){el.vs.3A[2R]=el[2R].cj+el[2R].gr;vu++;if(vu===eQ.WW(3M).1b){el.86=1f;vt++}if(vt===iZ.1b)86=1f}if(86){a.86(14.8n);1c a}el.vs.3A[2R]=el[2R].lr+el[2R].gr}}a.po=$.eH(aJ)}a.po=$.eH(aJ);1c a};17 pq;1t(17 i=0;i<a.8F.1b;i++)if(a.8F[i].lq)pq=a.8F[i].lq;1d a.8F[i].lq=a;if(pq)1c pq.6l(3M,14);1d a.6l(3M,14);1c a};1U.pn=1a(8F,3M,14){1c 1P pn(8F,3M,14)};3J.fn.6l=1a(3M,14){1P pn(1i,3M,14);1c 1i};gZ.6x.4a=1a(){17 4a={5g:!!("vm"in 1U||1U.iX&&2g 7J iX),4W:1a(){17 j1=1g;jX{17 pr=eQ.Dn({},"dL",{fy:1a(){j1=1f}});1U.8U("Do",29,pr)}jY(e){}1c j1}()};1c 4a}();gZ.6x.27=1a(){17 27={};17 ua=8A.iz;17 $=3J;17 5M=ua.5Z(/(Dp);?[\\s\\/]+([\\d.]+)?/);17 8R=ua.5Z(/(vw).*OS\\s([\\j2]+)/);17 br=ua.5Z(/(vx)(.*OS\\s([\\j2]+))?/);17 bs=!8R&&ua.5Z(/(vz\\Dq|Dr)\\s([\\j2]+)/);27.5s=27.5M=27.bs=27.br=27.8R=27.o3=1g;if(5M){27.os="5M";27.9N=5M[2];27.5M=1f;27.o3=ua.5P().1L("ub")>=0}if(8R||bs||br){27.os="5s";27.5s=1f}if(bs&&!br){27.9N=bs[2].31(/ps/g,".");27.bs=1f}if(8R){27.9N=8R[2].31(/ps/g,".");27.8R=1f}if(br){27.9N=br[3]?br[3].31(/ps/g,"."):29;27.bs=1f}if(27.5s&&27.9N&&ua.1L("WX/")>=0)if(27.9N.2W(".")[0]==="10")27.9N=ua.5P().2W("xg/")[1].2W(" ")[0];27.kF=(bs||8R||br)&&ua.5Z(/.*Ds(?!.*Dt)/i);if(27.os&&27.os==="5s"){17 pt=27.9N.2W(".");27.AK=!27.kF&&(br||bs)&&(pt[0]*1===7?pt[1]*1>=1:pt[0]*1>7)&&$(\'Du[1R="Dv"]\').1b>0&&$(\'Du[1R="Dv"]\').1Z("1B").1L("WY-ui")>=0}17 cT=$(1U).3q();17 cS=$(1U).2c();27.r6=1a(){if(27.kF&&cT*cS===8k.3q*8k.2c)1c 1f;1c 1g};27.Dw=27.r6();17 7d=[];27.ha=1U.WZ||1;7d.1Q("X0-pu-"+1A.6p(27.ha));if(27.ha>=2)7d.1Q("X1");if(27.os){7d.1Q(27.os,27.os+"-"+27.9N.2W(".")[0],27.os+"-"+27.9N.31(/\\./g,"-"));if(27.os==="5s"){17 Dx=3P(27.9N.2W(".")[0],10);1t(17 i=Dx-1;i>=6;i--)7d.1Q("5s-gt-"+i)}}if(27.Dw)7d.1Q("7w-fj-2s");1d $("3O").1K("7w-fj-2s");if(7d.1b>0)$("3O").1w(7d.76(" "));1c 27}();gZ.6x.iQ={};1U.4g=1a(){1a 9a(5U){1c eQ.6x.ar.pi(5U)==="[6d pj]"}1a X2(5A){1c 5A 7J eQ}1a eU(aS){1c 1r aS==="1a"}1a Dy(3l){1c 1r 1U!=="1m"&&1U.pv?1U.pv(3l):3l.31(/&/g,"&X3;").31(/</g,"&lt;").31(/>/g,"&gt;").31(/"/g,"&X4;")}17 5B={};17 vA=1P ox("\'","g");17 vB=1P ox(\'"\',"g");1a DA(3l){17 du=3l.31(/[{}#}]/g,"").2W(" ");17 gs=[];17 9X,i,j;1t(i=0;i<du.1b;i++){17 6q=du[i];17 gu,lu;if(i===0)gs.1Q(6q);1d if(6q.1L(\'"\')===0||6q.1L("\'")===0){gu=6q.1L(\'"\')===0?vB:vA;lu=6q.1L(\'"\')===0?\'"\':"\'";if(6q.5Z(gu).1b===2)gs.1Q(6q);1d{9X=0;1t(j=i+1;j<du.1b;j++){6q+=" "+du[j];if(du[j].1L(lu)>=0){9X=j;gs.1Q(6q);aq}}if(9X)i=9X}}1d if(6q.1L("=")>0){17 vC=6q.2W("=");17 lv=vC[0];17 j3=vC[1];if(!gu){gu=j3.1L(\'"\')===0?vB:vA;lu=j3.1L(\'"\')===0?\'"\':"\'"}if(j3.5Z(gu).1b!==2){9X=0;1t(j=i+1;j<du.1b;j++){j3+=" "+du[j];if(du[j].1L(lu)>=0){9X=j;aq}}if(9X)i=9X}17 8G=[lv,j3.31(gu,"")];gs.1Q(8G)}1d gs.1Q(6q)}1c gs}1a DB(3l){17 ck=[],i,j,k;if(!3l)1c[];17 8Z=3l.2W(/({{[^{^}]*}})/);1t(i=0;i<8Z.1b;i++){17 39=8Z[i];if(39==="")ee;if(39.1L("{{")<0)ck.1Q({1S:"DC",1B:39});1d{if(39.1L("{/")>=0)ee;if(39.1L("{#")<0&&39.1L(" ")<0&&39.1L("1d")<0){ck.1Q({1S:"7O",97:39.31(/[{}]/g,"")});ee}17 pw=DA(39);17 9Y=pw[0];17 DE=9Y===">";17 gv=[];17 py={};1t(j=1;j<pw.1b;j++){17 bK=pw[j];if(9a(bK))py[bK[0]]=bK[1]==="1g"?1g:bK[1];1d gv.1Q(bK)}if(39.1L("{#")>=0){17 X5=i;17 lw="";17 lx="";17 pz=0;17 9X;17 vD=1g,j4=1g,X6=1g,6Q=0;1t(j=i+1;j<8Z.1b;j++){if(8Z[j].1L("{{#")>=0)6Q++;if(8Z[j].1L("{{/")>=0)6Q--;if(8Z[j].1L("{{#"+9Y)>=0){lw+=8Z[j];if(j4)lx+=8Z[j];pz++}1d if(8Z[j].1L("{{/"+9Y)>=0)if(pz>0){pz--;lw+=8Z[j];if(j4)lx+=8Z[j]}1d{9X=j;vD=1f;aq}1d if(8Z[j].1L("1d")>=0&&6Q===0)j4=1f;1d{if(!j4)lw+=8Z[j];if(j4)lx+=8Z[j]}}if(vD){if(9X)i=9X;ck.1Q({1S:"ly",9Y:9Y,97:gv,1B:lw,vE:lx,8G:py})}}1d if(39.1L(" ")>0){if(DE){9Y="DF";if(gv[0])gv[0]=\'"\'+gv[0].31(/"|\'/g,"")+\'"\'}ck.1Q({1S:"ly",9Y:9Y,97:gv,8G:py})}}}1c ck}17 4g=1a(3g,1p){17 t=1i;t.3g=3g;1a pA(39,6Q){if(39.1B)1c 5R(39.1B,6Q);1d 1c 1a(){1c""}}1a pB(39,6Q){if(39.vE)1c 5R(39.vE,6Q);1d 1c 1a(){1c""}}1a pC(1R,6e){17 7O,gw,pD=0,X7=6e;if(1R.1L("../")===0){pD=1R.2W("../").1b-1;17 vF=6e.2W("ps")[1]-pD;6e="DG"+(vF>=1?vF:1);gw=1R.2W("../")[pD].2W(".")}1d if(1R.1L("@vG")===0){6e="4g.vG";gw=1R.2W("@vG.")[1].2W(".")}1d if(1R.1L("@40")===0){6e="40";gw=1R.2W("@40.")[1].2W(".")}1d gw=1R.2W(".");7O=6e;1t(17 i=0;i<gw.1b;i++){17 6q=gw[i];if(6q.1L("@")===0)if(i>0)7O+="[(1u && 1u."+6q.31("@","")+")]";1d 7O="(1u && 1u."+1R.31("@","")+")";1d if(X8(6q))7O+="["+6q+"]";1d if(6q==="1i"||6q.1L("1i.")>=0||6q.1L("1i[")>=0||6q.1L("1i(")>=0)7O=6q.31("1i",6e);1d 7O+="."+6q}1c 7O}1a DH(gx,6e){17 5U=[];1t(17 i=0;i<gx.1b;i++)if(/^[\'"]/.pg(gx[i]))5U.1Q(gx[i]);1d if(/^(1f|1g|\\d+)$/.pg(gx[i]))5U.1Q(gx[i]);1d 5U.1Q(pC(gx[i],6e));1c 5U.76(", ")}1a 5R(3g,6Q){6Q=6Q||1;3g=3g||t.3g;if(1r 3g!=="3l")vH 1P vI("4g: X9 Xa be a 3l");17 ck=DB(3g);if(ck.1b===0)1c 1a(){1c""};17 6e="DG"+6Q;17 7t="";if(6Q===1)7t+="(1a ("+6e+", 1u, 40) {\\n";1d 7t+="(1a ("+6e+", 1u) {\\n";if(6Q===1){7t+="1a 9a(5U){1c eQ.6x.ar.pi(5U) === \'[6d pj]\';}\\n";7t+="1a eU(aS){1c (1r aS === \'1a\');}\\n";7t+=\'1a c(5k, 6e) {if (1r 5k !== "1m" && 5k !== 29) {if (eU(5k)) {1c 5k.6m(6e);} 1d 1c 5k;} 1d 1c "";}\\n\';7t+="40 = 40 || Xb || {};\\n"}7t+="17 r = \'\';\\n";17 i,j,2T;1t(i=0;i<ck.1b;i++){17 39=ck[i];if(39.1S==="DC"){7t+="r +=\'"+39.1B.31(/\\r/g,"\\\\r").31(/\\n/g,"\\\\n").31(/\'/g,"\\\\"+"\'")+"\';";ee}17 7O,pE;if(39.1S==="7O"){7O=pC(39.97,6e);7t+="r += c("+7O+", "+6e+");"}if(39.1S==="ly")if(39.9Y in t.cl){pE=DH(39.97,6e);7t+="r += (4g.cl."+39.9Y+").6m("+6e+", "+(pE&&pE+", ")+"{8G:"+ew.o6(39.8G)+", 1u: 1u || {}, fn: "+pA(39,6Q+1)+", gy: "+pB(39,6Q+1)+", 40: 40});"}1d if(39.97.1b>0)vH 1P vI(\'4g: Xc ly: "\'+39.9Y+\'"\');1d{7O=pC(39.9Y,6e);7t+="if ("+7O+") {";7t+="if (9a("+7O+")) {";7t+="r += (4g.cl.2r).6m("+6e+", "+7O+", {8G:"+ew.o6(39.8G)+", 1u: 1u || {}, fn: "+pA(39,6Q+1)+", gy: "+pB(39,6Q+1)+", 40: 40});";7t+="}1d {";7t+="r += (4g.cl.7w).6m("+6e+", "+7O+", {8G:"+ew.o6(39.8G)+", 1u: 1u || {}, fn: "+pA(39,6Q+1)+", gy: "+pB(39,6Q+1)+", 40: 40});";7t+="}}"}}7t+="\\Xd r;})";1c vJ.6m(1U,7t)}t.5R=1a(3g){if(!t.j5)t.j5=5R(3g);1c t.j5}};4g.6x={1p:{},eV:{},cl:{"DF":1a(DI,1p){17 p=4g.6x.eV[DI];if(!p||p&&!p.3g)1c"";if(!p.j5)p.j5=(1P 4g(p.3g)).5R();17 6e=1i;1t(17 lv in 1p.8G)6e[lv]=1p.8G[lv];1c p.j5(6e,1p.1u,1p.40)},"pv":1a(2T,1p){if(1r 2T!=="3l")vH 1P vI(\'4g: Xe 2T to "pv" ly Xf be a 3l\');1c Dy(2T)},"if":1a(2T,1p){if(eU(2T))2T=2T.6m(1i);if(2T)1c 1p.fn(1i,1p.1u);1d 1c 1p.gy(1i,1p.1u)},"df":1a(2T,1p){if(eU(2T))2T=2T.6m(1i);if(!2T)1c 1p.fn(1i,1p.1u);1d 1c 1p.gy(1i,1p.1u)},"2r":1a(2T,1p){17 pF="",i=0;if(eU(2T))2T=2T.6m(1i);if(9a(2T)){if(1p.8G.pG)2T=2T.pG();1t(i=0;i<2T.1b;i++)pF+=1p.fn(2T[i],{fx:i===0,fE:i===2T.1b-1,1I:i});if(1p.8G.pG)2T=2T.pG()}1d 1t(17 6a in 2T){i++;pF+=1p.fn(2T[6a],{6a:6a})}if(i>0)1c pF;1d 1c 1p.gy(1i)},"7w":1a(2T,1p){if(eU(2T))2T=2T.6m(1i);1c 1p.fn(2T)},"76":1a(2T,1p){if(eU(2T))2T=2T.6m(1i);1c 2T.76(1p.8G.Xg||1p.8G.Xh)},"js":1a(eW,1p){17 aS;if(eW.1L("1c")>=0)aS="(1a(){"+eW+"})";1d aS="(1a(){1c ("+eW+")})";1c vJ.6m(1i,aS).6m(1i)},"kV":1a(eW,1p){17 aS;if(eW.1L("1c")>=0)aS="(1a(){"+eW+"})";1d aS="(1a(){1c ("+eW+")})";17 DJ=vJ.6m(1i,aS).6m(1i);if(DJ)1c 1p.fn(1i,1p.1u);1d 1c 1p.gy(1i,1p.1u)}}};17 t7=1a(3g,1u){if(2p.1b===2){17 lz=1P 4g(3g);17 DK=lz.5R()(1u);lz=29;1c DK}1d 1c 1P 4g(3g)};t7.Xi=1a(1R,fn){4g.6x.cl[1R]=fn};t7.Xj=1a(1R){4g.6x.cl[1R]=1m;4P 4g.6x.cl[1R]};t7.Xk=1a(1R,3g){4g.6x.eV[1R]={3g:3g}};t7.Xl=1a(1R,3g){if(4g.6x.eV[1R]){4g.6x.eV[1R]=1m;4P 4g.6x.eV[1R]}};t7.5R=1a(3g,1p){17 lz=1P 4g(3g,1p);1c lz.5R()};t7.1p=4g.6x.1p;t7.cl=4g.6x.cl;t7.eV=4g.6x.eV;1c t7}();1U.c3=1a(1h,14){if(!(1i 7J c3))1c 1P c3(1h,14);17 4d={4z:"l5",bt:"1h",9Q:0,4c:4u,9Z:1g,vK:1f,DL:1g,DM:1g,DN:20,c7:1g,vL:1f,DO:1,pH:1f,DP:1,DQ:1,vM:1g,DR:.Xm,gz:1g,pI:1g,dv:1g,51:"1E",bu:{eX:50,vN:0,6Q:5c,DS:1,j6:1f},j7:{j6:1f,DT:1f},7P:{j6:1f,4b:1f,vO:20,pJ:.94},pK:{DU:1g},6f:1g,4p:1g,9i:3,dc:1,DV:1f,3N:29,lA:1f,vP:1g,DW:1g,vQ:1g,vR:1g,Xn:1g,Xo:1g,Xp:1g,Xq:1,Xr:"1h",cm:1g,Xs:1g,2V:1g,mV:1g,eY:1m,53:0,4v:1,6z:1,vS:"a0",7e:1,cn:1g,DX:0,DY:0,pL:1g,E0:1,gA:45,gB:1f,E1:1f,E2:1f,vT:.5,vU:4u,vV:1f,pM:1g,9H:0,E3:1f,vW:1g,lB:1f,8c:29,vX:"2B",j8:1g,E4:1g,vY:29,vZ:29,w0:29,w1:29,aT:"8d",w2:1f,lC:.85,4U:29,4V:29,gC:1g,pN:1g,aU:1g,lD:1f,w4:1f,E5:1g,bi:1g,kU:1g,pO:1,g4:1g,kY:1f,E6:1f,4e:1g,E7:0,5p:29,lE:1m,E8:1g,pP:"1E",w5:1f,8H:1f,8I:1f,w6:29,E9:1f,Ea:"1D-no-Xt",w7:1f,co:"1D-1h-",8e:"1D-1E",lF:"1D-1E-2H",pQ:"1D-1E-pR-2H",lG:"1D-1E-cU",7u:"1D-1E-pR",j9:"1D-1E-2X",pS:"1D-1E-pR-2X",ja:"1D-1E-3k",pT:"1D-1E-pR-3k",Eb:"1D-1T",eZ:"1D-8c-gD",lH:"1D-8c-gD-2H",gE:"1D-2M-5w",pU:"1D-8c-4f",pV:"1D-8c-8a",w8:"1D-8c-6V",pW:"1D-8c-3I",Xu:"1D-8c-Ec",w9:"1D-8c-",wa:"1D-47",lI:"1D-47-Xv",pZ:"1D-47-sm",Ed:"1D-47-41",Ee:"1D-6P",Ef:"41",q0:"1D-4p-1h",a1:1g,Eg:1g,3G:1g,wb:"Xw 1E",wc:"Xx 1E",Eh:"Ei is Ej fx 1E",Ek:"Ei is Ej fE 1E",El:"Go to 1E {{1I}}",wd:1f};17 Em=14&&14.dv;14=14||{};17 gF={};1t(17 64 in 14)if(1r 14[64]==="6d"&&14[64]!==29&&!(14[64].aD||14[64]===1U||14[64]===2g||1r 3J!=="1m"&&14[64]7J 3J||1r we!=="1m"&&14[64]7J we)){gF[64]={};1t(17 wf in 14[64])gF[64][wf]=14[64][wf]}1d gF[64]=14[64];1t(17 3y in 4d)if(1r 14[3y]==="1m")14[3y]=4d[3y];1d if(1r 14[3y]==="6d")1t(17 q1 in 4d[3y])if(1r 14[3y][q1]==="1m")14[3y][q1]=4d[3y][q1];17 s=1i;s.14=14;s.gF=gF;s.7d=[];if(1r $!=="1m"&&1r 3J!=="1m")$=3J;if(1r $==="1m"){if(1r 3J==="1m")$=1U.3J||1U.Xy||1U.we;1d $=3J;if(!$)1c}s.$=$;s.wg=1m;s.En=1a(){if(!s.14.eY)1c 1g;17 cp=1g;17 lJ=[],gG;1t(gG in s.14.eY)if(s.14.eY.jI(gG))lJ.1Q(gG);lJ.hQ(1a(a,b){1c 3P(a,10)>3P(b,10)});1t(17 i=0;i<lJ.1b;i++){gG=lJ[i];if(gG>=1U.kd&&!cp)cp=gG}1c cp||"4C"};s.wh=1a(){17 cp=s.En();if(cp&&s.wg!==cp){17 q2=cp in s.14.eY?s.14.eY[cp]:s.gF;17 Eo=s.14.4e&&q2.4v!==s.14.4v;1t(17 64 in q2)s.14[64]=q2[64];s.wg=cp;if(Eo&&s.gH)s.Ep(1f)}};if(s.14.eY)s.wh();s.1h=$(1h);if(s.1h.1b===0)1c;if(s.1h.1b>1){17 ip=[];s.1h.2r(1a(){17 1h=1i;ip.1Q(1P c3(1i,14))});1c ip}s.1h[0].1D=s;s.1h.1u("1D",s);s.7d.1Q(s.14.co+s.14.4z);if(s.14.c7)s.7d.1Q(s.14.co+"Xz-XA");if(!s.4a.q3){s.7d.1Q(s.14.co+"no-q3");s.14.6z=1}if(s.14.gz)s.7d.1Q(s.14.co+"XB");if(s.14.6f||s.14.pN)s.14.gC=1f;if(s.14.vW)s.14.lC=0;if(["7P","bu","j7"].1L(s.14.51)>=0)if(s.4a.lK){s.14.gC=1f;s.7d.1Q(s.14.co+"3d")}1d s.14.51="1E";if(s.14.51!=="1E")s.7d.1Q(s.14.co+s.14.51);if(s.14.51==="7P"){s.14.lC=0;s.14.4v=1;s.14.6z=1;s.14.7e=1;s.14.cn=1g;s.14.53=0;s.14.dv=1f;s.14.pI=1g}if(s.14.51==="pK"||s.14.51==="j7"){s.14.4v=1;s.14.6z=1;s.14.7e=1;s.14.gC=1f;s.14.53=0;s.14.pI=1g;if(1r Em==="1m")s.14.dv=1f}if(s.14.aU&&s.4a.5g)s.14.aU=1g;s.1T=s.1h.2K("."+s.14.Eb);if(s.14.8c){s.5W=$(s.14.8c);if(s.14.lB&&1r s.14.8c==="3l"&&s.5W.1b>1&&s.1h.1l(s.14.8c).1b===1)s.5W=s.1h.1l(s.14.8c);if(s.14.aT==="8d"&&s.14.j8)s.5W.1w(s.14.w9+"Ec");1d s.14.j8=1g;s.5W.1w(s.14.w9+s.14.aT)}if(s.14.4U||s.14.4V){if(s.14.4U){s.4U=$(s.14.4U);if(s.14.lB&&1r s.14.4U==="3l"&&s.4U.1b>1&&s.1h.1l(s.14.4U).1b===1)s.4U=s.1h.1l(s.14.4U)}if(s.14.4V){s.4V=$(s.14.4V);if(s.14.lB&&1r s.14.4V==="3l"&&s.4V.1b>1&&s.1h.1l(s.14.4V).1b===1)s.4V=s.1h.1l(s.14.4V)}}s.3c=1a(){1c s.14.4z==="l5"};s.3r=s.3c()&&(s.1h[0].4O.5P()==="3r"||s.1h.1W("4z")==="3r");if(s.3r)s.7d.1Q(s.14.co+"3r");if(s.3r)s.Eq=s.1T.1W("7l")==="-jb-bh";if(s.14.6z>1)s.7d.1Q(s.14.co+"XC");if(s.27.5M)s.7d.1Q(s.14.co+"5M");s.1h.1w(s.7d.76(" "));s.1F=0;s.2z=0;s.3Y=0;s.XD=1a(){s.14.8I=1g;if(s.14.8H===1g&&s.14.aU)s.q4()};s.XE=1a(){s.14.8H=1g;if(s.14.8I===1g&&s.14.aU)s.q4()};s.XF=1a(){s.14.8I=s.14.8H=1g;if(s.14.aU)s.q4()};s.XG=1a(){s.14.8I=1f;if(s.14.8H===1f&&s.14.aU)s.gI()};s.XH=1a(){s.14.8H=1f;if(s.14.8I===1f&&s.14.aU)s.gI()};s.XI=1a(){s.14.8I=s.14.8H=1f;if(s.14.aU)s.gI()};1a 7i(a){1c 1A.6p(a)}s.gI=1a(q5){s.1h[0].3A.lL="65";s.1h[0].3A.lL=q5?"-jb-Er":"-jb-wi";s.1h[0].3A.lL=q5?"-q6-XJ":"-q6-wi";s.1h[0].3A.lL=q5?"Er":"wi"};s.q4=1a(){s.1h[0].3A.lL=""};if(s.14.aU)s.gI();s.bv=[];s.q7=0;s.fK=1a(Es,5x,a2,a3,Et,34){17 1H;1a lM(){if(34)34()}if(!Es.8n||!Et)if(5x){1H=1P 1U.zk;1H.sn=lM;1H.n8=lM;if(a3)1H.a3=a3;if(a2)1H.a2=a2;if(5x)1H.5x=5x}1d lM();1d lM()};s.kY=1a(){s.bv=s.1h.1l("7n");1a Eu(){if(1r s==="1m"||s===29||!s)1c;if(s.q7!==1m)s.q7++;if(s.q7===s.bv.1b){if(s.14.E6)s.7H();s.4n("XK",s)}}1t(17 i=0;i<s.bv.1b;i++)s.fK(s.bv[i],s.bv[i].XL||s.bv[i].fY("5x"),s.bv[i].a2||s.bv[i].fY("a2"),s.bv[i].a3||s.bv[i].fY("a3"),1f,Eu)};s.dw=1m;s.gJ=1g;s.lN=1g;1a 9Z(){17 wj=s.14.9Z;17 f0=s.1O.eq(s.2w);if(f0.1Z("1u-1D-9Z"))wj=f0.1Z("1u-1D-9Z")||s.14.9Z;s.dw=4k(1a(){if(s.14.4e){s.f1();s.wk();s.4n("wl",s)}1d if(!s.bj){s.wk();s.4n("wl",s)}1d if(!14.DL){s.Ev(0);s.4n("wl",s)}1d s.jc()},wj)}s.Ew=1a(){if(1r s.dw!=="1m")1c 1g;if(!s.14.9Z)1c 1g;if(s.gJ)1c 1g;s.gJ=1f;s.4n("XM",s);9Z()};s.jc=1a(ap){if(!s.dw)1c;if(s.dw)5m(s.dw);s.gJ=1g;s.dw=1m;s.4n("XN",s)};s.wm=1a(4c){if(s.lN)1c;if(s.dw)5m(s.dw);s.lN=1f;if(4c===0){s.lN=1g;9Z()}1d s.1T.4A(1a(){if(!s)1c;s.lN=1g;if(!s.gJ)s.jc();1d 9Z()})};s.54=1a(){1c-s.4w[0]};s.4q=1a(){1c-s.4w[s.4w.1b-1]};s.jd=1a(){17 je=[];17 jf=0;17 i;if(s.14.4v!=="8u"&&s.14.4v>1)1t(i=0;i<1A.d3(s.14.4v);i++){17 1I=s.2w+i;if(1I>s.1O.1b)aq;je.1Q(s.1O.eq(1I)[0])}1d je.1Q(s.1O.eq(s.2w)[0]);1t(i=0;i<je.1b;i++)if(1r je[i]!=="1m"){17 2c=je[i].3X;jf=2c>jf?2c:jf}if(jf)s.1T.1W("2c",jf+"px")};s.lO=1a(){17 3q,2c;if(1r s.14.3q!=="1m")3q=s.14.3q;1d 3q=s.1h[0].XO;if(1r s.14.2c!=="1m")2c=s.14.2c;1d 2c=s.1h[0].rt;if(3q===0&&s.3c()||2c===0&&!s.3c())1c;3q=3q-3P(s.1h.1W("6W-1G"),10)-3P(s.1h.1W("6W-1Y"),10);2c=2c-3P(s.1h.1W("6W-2J"),10)-3P(s.1h.1W("6W-4I"),10);s.3q=3q;s.2c=2c;s.4J=s.3c()?s.3q:s.2c};s.lP=1a(){s.1O=s.1T.2K("."+s.14.8e);s.4w=[];s.5r=[];s.lQ=[];17 53=s.14.53,a4=-s.14.DX,i,wn=0,1I=0;if(1r s.4J==="1m")1c;if(1r 53==="3l"&&53.1L("%")>=0)53=7D(53.31("%",""))/5c*s.4J;s.8f=-53;if(s.3r)s.1O.1W({Ex:"",ze:""});1d s.1O.1W({Ey:"",uR:""});17 f2;if(s.14.6z>1){if(1A.6p(s.1O.1b/s.14.6z)===s.1O.1b/s.14.6z)f2=s.1O.1b;1d f2=1A.d3(s.1O.1b/s.14.6z)*s.14.6z;if(s.14.4v!=="8u"&&s.14.vS==="8B")f2=1A.4C(f2,s.14.4v*s.14.6z)}17 7f;17 6z=s.14.6z;17 lR=f2/6z;17 wo=lR-(s.14.6z*lR-s.1O.1b);1t(i=0;i<s.1O.1b;i++){7f=0;17 1E=s.1O.eq(i);if(s.14.6z>1){17 gK;17 a0,8B;if(s.14.vS==="a0"){a0=1A.6p(i/6z);8B=i-a0*6z;if(a0>wo||a0===wo&&8B===6z-1)if(++8B>=6z){8B=0;a0++}gK=a0+8B*f2/6z;1E.1W({"-jb-bh-Ez-9y":gK,"-q6-bh-Ez-9y":gK,"-ms-XP-wp":gK,"-jb-wp":gK,"wp":gK})}1d{8B=1A.6p(i/lR);a0=i-8B*lR}1E.1W("cJ-"+(s.3c()?"2J":"1G"),8B!==0&&s.14.53&&s.14.53+"px").1Z("1u-1D-a0",a0).1Z("1u-1D-8B",8B)}if(1E.1W("7l")==="ll")ee;if(s.14.4v==="8u"){7f=s.3c()?1E.bG(1f):1E.fG(1f);if(s.14.pL)7f=7i(7f)}1d{7f=(s.4J-(s.14.4v-1)*53)/s.14.4v;if(s.14.pL)7f=7i(7f);if(s.3c())s.1O[i].3A.3q=7f+"px";1d s.1O[i].3A.2c=7f+"px"}s.1O[i].lS=7f;s.lQ.1Q(7f);if(s.14.cn){a4=a4+7f/2+wn/2+53;if(i===0)a4=a4-s.4J/2-53;if(1A.3o(a4)<1/dF)a4=0;if(1I%s.14.7e===0)s.4w.1Q(a4);s.5r.1Q(a4)}1d{if(1I%s.14.7e===0)s.4w.1Q(a4);s.5r.1Q(a4);a4=a4+7f+53}s.8f+=7f+53;wn=7f;1I++}s.8f=1A.4C(s.8f,s.4J)+s.14.DY;17 gL;if(s.3r&&s.Eq&&(s.14.51==="1E"||s.14.51==="bu"))s.1T.1W({3q:s.8f+s.14.53+"px"});if(!s.4a.q3||s.14.pI)if(s.3c())s.1T.1W({3q:s.8f+s.14.53+"px"});1d s.1T.1W({2c:s.8f+s.14.53+"px"});if(s.14.6z>1){s.8f=(7f+s.14.53)*f2;s.8f=1A.d3(s.8f/s.14.6z)-s.14.53;if(s.3c())s.1T.1W({3q:s.8f+s.14.53+"px"});1d s.1T.1W({2c:s.8f+s.14.53+"px"});if(s.14.cn){gL=[];1t(i=0;i<s.4w.1b;i++)if(s.4w[i]<s.8f+s.4w[0])gL.1Q(s.4w[i]);s.4w=gL}}if(!s.14.cn){gL=[];1t(i=0;i<s.4w.1b;i++)if(s.4w[i]<=s.8f-s.4J)gL.1Q(s.4w[i]);s.4w=gL;if(1A.6p(s.8f-s.4J)-1A.6p(s.4w[s.4w.1b-1])>1)s.4w.1Q(s.8f-s.4J)}if(s.4w.1b===0)s.4w=[0];if(s.14.53!==0)if(s.3c())if(s.3r)s.1O.1W({Ex:53+"px"});1d s.1O.1W({Ey:53+"px"});1d s.1O.1W({uR:53+"px"});if(s.14.gC)s.wq()};s.wq=1a(){1t(17 i=0;i<s.1O.1b;i++)s.1O[i].gM=s.3c()?s.1O[i].am:s.1O[i].hP};s.EA=1a(){17 dx=1,i,j;if(s.14.cn){17 4J=s.1O[s.2w].lS;17 lT;1t(i=s.2w+1;i<s.1O.1b;i++)if(s.1O[i]&&!lT){4J+=s.1O[i].lS;dx++;if(4J>s.4J)lT=1f}1t(j=s.2w-1;j>=0;j--)if(s.1O[j]&&!lT){4J+=s.1O[j].lS;dx++;if(4J>s.4J)lT=1f}}1d 1t(i=s.2w+1;i<s.1O.1b;i++)if(s.5r[i]-s.5r[s.2w]<s.4J)dx++;1c dx};s.EB=1a(1F){if(1r 1F==="1m")1F=s.1F||0;if(s.1O.1b===0)1c;if(1r s.1O[0].gM==="1m")s.wq();17 q8=-1F;if(s.3r)q8=1F;s.1O.1K(s.14.lG);1t(17 i=0;i<s.1O.1b;i++){17 1E=s.1O[i];17 wr=(q8+(s.14.cn?s.54():0)-1E.gM)/(1E.lS+s.14.53);if(s.14.pN){17 lU=-(q8-1E.gM);17 q9=lU+s.lQ[i];17 EC=lU>=0&&lU<s.4J||q9>0&&q9<=s.4J||lU<=0&&q9>=s.4J;if(EC)s.1O.eq(i).1w(s.14.lG)}1E.2z=s.3r?-wr:wr}};s.aV=1a(1F){if(1r 1F==="1m")1F=s.1F||0;17 jg=s.4q()-s.54();17 ED=s.ez;17 EE=s.bj;if(jg===0){s.2z=0;s.ez=s.bj=1f}1d{s.2z=(1F-s.54())/jg;s.ez=s.2z<=0;s.bj=s.2z>=1}if(s.ez&&!ED)s.4n("XQ",s);if(s.bj&&!EE)s.4n("XR",s);if(s.14.gC)s.EB(1F);s.4n("XS",s,s.2z)};s.cq=1a(){17 1F=s.3r?s.1F:-s.1F;17 5q,i,aW;1t(i=0;i<s.5r.1b;i++)if(1r s.5r[i+1]!=="1m")if(1F>=s.5r[i]&&1F<s.5r[i+1]-(s.5r[i+1]-s.5r[i])/2)5q=i;1d{if(1F>=s.5r[i]&&1F<s.5r[i+1])5q=i+1}1d if(1F>=s.5r[i])5q=i;if(s.14.w5)if(5q<0||1r 5q==="1m")5q=0;aW=1A.6p(5q/s.14.7e);if(aW>=s.4w.1b)aW=s.4w.1b-1;if(5q===s.2w)1c;s.aW=aW;s.eA=s.2w;s.2w=5q;s.f3();s.wt()};s.wt=1a(){s.gN=3P(s.1O.eq(s.2w).1Z("1u-1D-1E-1I")||s.2w,10)};s.f3=1a(){s.1O.1K(s.14.lF+" "+s.14.j9+" "+s.14.ja+" "+s.14.pQ+" "+s.14.pS+" "+s.14.pT);17 f0=s.1O.eq(s.2w);f0.1w(s.14.lF);if(14.4e)if(f0.1v(s.14.7u))s.1T.2K("."+s.14.8e+":2k(."+s.14.7u+\')[1u-1D-1E-1I="\'+s.gN+\'"]\').1w(s.14.pQ);1d s.1T.2K("."+s.14.8e+"."+s.14.7u+\'[1u-1D-1E-1I="\'+s.gN+\'"]\').1w(s.14.pQ);17 8J=f0.2X("."+s.14.8e).1w(s.14.j9);if(s.14.4e&&8J.1b===0){8J=s.1O.eq(0);8J.1w(s.14.j9)}17 cr=f0.3k("."+s.14.8e).1w(s.14.ja);if(s.14.4e&&cr.1b===0){cr=s.1O.eq(-1);cr.1w(s.14.ja)}if(14.4e){if(8J.1v(s.14.7u))s.1T.2K("."+s.14.8e+":2k(."+s.14.7u+\')[1u-1D-1E-1I="\'+8J.1Z("1u-1D-1E-1I")+\'"]\').1w(s.14.pS);1d s.1T.2K("."+s.14.8e+"."+s.14.7u+\'[1u-1D-1E-1I="\'+8J.1Z("1u-1D-1E-1I")+\'"]\').1w(s.14.pS);if(cr.1v(s.14.7u))s.1T.2K("."+s.14.8e+":2k(."+s.14.7u+\')[1u-1D-1E-1I="\'+cr.1Z("1u-1D-1E-1I")+\'"]\').1w(s.14.pT);1d s.1T.2K("."+s.14.8e+"."+s.14.7u+\'[1u-1D-1E-1I="\'+cr.1Z("1u-1D-1E-1I")+\'"]\').1w(s.14.pT)}if(s.5W&&s.5W.1b>0){17 4f,8a=s.14.4e?1A.d3((s.1O.1b-s.5p*2)/s.14.7e):s.4w.1b;if(s.14.4e){4f=1A.d3((s.2w-s.5p)/s.14.7e);if(4f>s.1O.1b-1-s.5p*2)4f=4f-(s.1O.1b-s.5p*2);if(4f>8a-1)4f=4f-8a;if(4f<0&&s.14.aT!=="8d")4f=8a+4f}1d if(1r s.aW!=="1m")4f=s.aW;1d 4f=s.2w||0;if(s.14.aT==="8d"&&s.8d&&s.8d.1b>0){s.8d.1K(s.14.lH);if(s.5W.1b>1)s.8d.2r(1a(){if($(1i).1I()===4f)$(1i).1w(s.14.lH)});1d s.8d.eq(4f).1w(s.14.lH)}if(s.14.aT==="EF"){s.5W.1l("."+s.14.pU).28(4f+1);s.5W.1l("."+s.14.pV).28(8a)}if(s.14.aT==="2z"){17 3L=(4f+1)/8a,qa=3L,qb=1;if(!s.3c()){qb=3L;qa=1}s.5W.1l("."+s.14.pW).1N("2b(0,0,0) qa("+qa+") qb("+qb+")").2f(s.14.4c)}if(s.14.aT==="oW"&&s.14.w1){s.5W.3O(s.14.w1(s,4f+1,8a));s.4n("EG",s,s.5W[0])}}if(!s.14.4e){if(s.14.4V&&s.4V&&s.4V.1b>0)if(s.ez){s.4V.1w(s.14.gE);if(s.14.3G&&s.3G)s.3G.dU(s.4V)}1d{s.4V.1K(s.14.gE);if(s.14.3G&&s.3G)s.3G.fv(s.4V)}if(s.14.4U&&s.4U&&s.4U.1b>0)if(s.bj){s.4U.1w(s.14.gE);if(s.14.3G&&s.3G)s.3G.dU(s.4U)}1d{s.4U.1K(s.14.gE);if(s.14.3G&&s.3G)s.3G.fv(s.4U)}}};s.qc=1a(){if(!s.14.8c)1c;if(s.5W&&s.5W.1b>0){17 cs="";if(s.14.aT==="8d"){17 EH=s.14.4e?1A.d3((s.1O.1b-s.5p*2)/s.14.7e):s.4w.1b;1t(17 i=0;i<EH;i++)if(s.14.vY)cs+=s.14.vY(s,i,s.14.eZ);1d cs+="<"+s.14.vX+\' 1q="\'+s.14.eZ+\'"></\'+s.14.vX+">";s.5W.3O(cs);s.8d=s.5W.1l("."+s.14.eZ);if(s.14.j8&&s.14.3G&&s.3G)s.3G.EI()}if(s.14.aT==="EF"){if(s.14.w0)cs=s.14.w0(s,s.14.pU,s.14.pV);1d cs=\'<2B 1q="\'+s.14.pU+\'"></2B>\'+" / "+\'<2B 1q="\'+s.14.pV+\'"></2B>\';s.5W.3O(cs)}if(s.14.aT==="2z"){if(s.14.vZ)cs=s.14.vZ(s,s.14.pW);1d cs=\'<2B 1q="\'+s.14.pW+\'"></2B>\';s.5W.3O(cs)}if(s.14.aT!=="oW")s.4n("EG",s,s.5W[0])}};s.7H=1a(EJ){if(!s)1c;s.lO();s.lP();s.aV();s.qc();s.f3();if(s.14.3N&&s.3N)s.3N.qd();1a wu(){17 1F=s.3r?-s.1F:s.1F;7b=1A.4Z(1A.4C(s.1F,s.4q()),s.54());s.aX(7b);s.cq();s.f3()}if(EJ){17 qe,7b;if(s.8g&&s.8g.gO)s.8g.gO=1m;if(s.14.c7){wu();if(s.14.gz)s.jd()}1d{if((s.14.4v==="8u"||s.14.4v>1)&&s.bj&&!s.14.cn)qe=s.4o(s.1O.1b-1,0,1g,1f);1d qe=s.4o(s.2w,0,1g,1f);if(!qe)wu()}}1d if(s.14.gz)s.jd()};s.wv=1a(EK){if(s.14.eY)s.wh();17 8H=s.14.8H;17 8I=s.14.8I;s.14.8H=s.14.8I=1f;s.lO();s.lP();if(s.14.4v==="8u"||s.14.c7||EK)s.qc();if(s.14.3N&&s.3N)s.3N.qd();if(s.8g&&s.8g.gO)s.8g.gO=1m;17 qf=1g;if(s.14.c7){17 7b=1A.4Z(1A.4C(s.1F,s.4q()),s.54());s.aX(7b);s.cq();s.f3();if(s.14.gz)s.jd()}1d{s.f3();if((s.14.4v==="8u"||s.14.4v>1)&&s.bj&&!s.14.cn)qf=s.4o(s.1O.1b-1,0,1g,1f);1d qf=s.4o(s.2w,0,1g,1f)}if(s.14.bi&&!qf&&s.47)s.47.58();s.14.8H=8H;s.14.8I=8I};s.gP={56:"dH",65:"h6",6C:"jz"};if(1U.8A.qg)s.gP={56:"XT",65:"XU",6C:"XV"};1d if(1U.8A.qh)s.gP={56:"XW",65:"XX",6C:"XY"};s.3x={56:s.4a.5g||!s.14.gB?"4y":s.gP.56,65:s.4a.5g||!s.14.gB?"57":s.gP.65,6C:s.4a.5g||!s.14.gB?"cD":s.gP.6C};if(1U.8A.qg||1U.8A.qh)(s.14.bt==="1h"?s.1h:s.1T).1w("1D-XZ-"+s.14.4z);s.c6=1a(7X){17 gQ=7X?"3B":"on";17 2E=7X?"oY":"8U";17 bt=s.14.bt==="1h"?s.1h[0]:s.1T[0];17 1X=s.4a.5g?bt:2g;17 qi=s.14.EL?1f:1g;if(s.3b.ie){bt[2E](s.3x.56,s.eB,1g);1X[2E](s.3x.65,s.gR,qi);1X[2E](s.3x.6C,s.eC,1g)}1d{if(s.4a.5g){17 4W=s.3x.56==="4y"&&s.4a.4W&&s.14.w7?{dL:1f,74:1g}:1g;bt[2E](s.3x.56,s.eB,4W);bt[2E](s.3x.65,s.gR,qi);bt[2E](s.3x.6C,s.eC,4W)}if(14.gB&&!s.27.5s&&!s.27.5M||14.gB&&!s.4a.5g&&s.27.5s){bt[2E]("dH",s.eB,1g);2g[2E]("h6",s.gR,qi);2g[2E]("jz",s.eC,1g)}}1U[2E]("8q",s.wv);if(s.14.4U&&s.4U&&s.4U.1b>0){s.4U[gQ]("3Q",s.ww);if(s.14.3G&&s.3G)s.4U[gQ]("dW",s.3G.qj)}if(s.14.4V&&s.4V&&s.4V.1b>0){s.4V[gQ]("3Q",s.wx);if(s.14.3G&&s.3G)s.4V[gQ]("dW",s.3G.qj)}if(s.14.8c&&s.14.j8){s.5W[gQ]("3Q","."+s.14.eZ,s.EM);if(s.14.3G&&s.3G)s.5W[gQ]("dW","."+s.14.eZ,s.3G.qj)}if(s.14.lD||s.14.w4)bt[2E]("3Q",s.lD,1f)};s.6s=1a(){s.c6()};s.7Y=1a(){s.c6(1f)};s.7r=1f;s.lD=1a(e){if(!s.7r){if(s.14.lD)e.42();if(s.14.w4&&s.5e){e.kO();e.Az()}}};s.ww=1a(e){e.42();if(s.bj&&!s.14.4e)1c;s.wy()};s.wx=1a(e){e.42();if(s.ez&&!s.14.4e)1c;s.wz()};s.EM=1a(e){e.42();17 1I=$(1i).1I()*s.14.7e;if(s.14.4e)1I=1I+s.5p;s.4o(1I)};1a qk(e,2h){17 el=$(e.1X);if(!el.is(2h))if(1r 2h==="3l")el=el.1M(2h);1d if(2h.aD){17 46;el.1M().2r(1a(1I,EN){if(EN===2h)46=2h});if(!46)1c 1m;1d 1c 2h}if(el.1b===0)1c 1m;1c el[0]}s.EO=1a(e){17 1E=qk(e,"."+s.14.8e);17 wA=1g;if(1E)1t(17 i=0;i<s.1O.1b;i++)if(s.1O[i]===1E)wA=1f;if(1E&&wA){s.lV=1E;s.lW=$(1E).1I()}1d{s.lV=1m;s.lW=1m;1c}if(s.14.E5&&s.lW!==1m&&s.lW!==s.2w){17 bw=s.lW,gN,Y0,4v=s.14.4v==="8u"?s.EA():s.14.4v;if(s.14.4e){if(s.5e)1c;gN=3P($(s.lV).1Z("1u-1D-1E-1I"),10);if(s.14.cn)if(bw<s.5p-4v/2||bw>s.1O.1b-s.5p+4v/2){s.f1();bw=s.1T.2K("."+s.14.8e+\'[1u-1D-1E-1I="\'+gN+\'"]:2k(.\'+s.14.7u+")").eq(0).1I();4k(1a(){s.4o(bw)},0)}1d s.4o(bw);1d if(bw>s.1O.1b-4v){s.f1();bw=s.1T.2K("."+s.14.8e+\'[1u-1D-1E-1I="\'+gN+\'"]:2k(.\'+s.14.7u+")").eq(0).1I();4k(1a(){s.4o(bw)},0)}1d s.4o(bw)}1d s.4o(bw)}};17 2u,2I,lX,5X,4t,4r,6Y,lY,ql="1z, 2l, 3C, 2M, Bo",et=2x.9W(),jh,f4=[],lZ;s.5e=1g;s.3n={6A:0,6R:0,5I:0,5J:0,3W:0};17 ji,m0;s.eB=1a(e){if(e.jj)e=e.jj;ji=e.1S==="4y";if(!ji&&"nW"in e&&e.nW===3)1c;if(s.14.E9&&qk(e,"."+s.14.Ea)){s.7r=1f;1c}if(s.14.w6)if(!qk(e,s.14.w6))1c;17 6A=s.3n.5I=e.1S==="4y"?e.3m[0].38:e.38;17 6R=s.3n.5J=e.1S==="4y"?e.3m[0].2N:e.2N;if(s.27.5s&&s.14.DM&&6A<=s.14.DN)1c;2u=1f;2I=1g;lX=1f;4t=1m;m0=1m;s.3n.6A=6A;s.3n.6R=6R;5X=2x.9W();s.7r=1f;s.lO();s.ct=1m;if(s.14.9H>0)lY=1g;if(e.1S!=="4y"){17 42=1f;if($(e.1X).is(ql))42=1g;if(2g.89&&$(2g.89).is(ql))2g.89.bH();if(42)e.42()}s.4n("eB",s,e)};s.gR=1a(e){if(e.jj)e=e.jj;if(ji&&e.1S==="h6")1c;if(e.EP){s.3n.6A=e.1S==="57"?e.3m[0].38:e.38;s.3n.6R=e.1S==="57"?e.3m[0].2N:e.2N;1c}if(s.14.pM){s.7r=1g;if(2u){s.3n.6A=s.3n.5I=e.1S==="57"?e.3m[0].38:e.38;s.3n.6R=s.3n.5J=e.1S==="57"?e.3m[0].2N:e.2N;5X=2x.9W()}1c}if(ji&&s.14.vW&&!s.14.4e)if(!s.3c()){if(s.3n.5J<s.3n.6R&&s.1F<=s.4q()||s.3n.5J>s.3n.6R&&s.1F>=s.54())1c}1d if(s.3n.5I<s.3n.6A&&s.1F<=s.4q()||s.3n.5I>s.3n.6A&&s.1F>=s.54())1c;if(ji&&2g.89)if(e.1X===2g.89&&$(e.1X).is(ql)){2I=1f;s.7r=1g;1c}if(lX)s.4n("gR",s,e);if(e.3m&&e.3m.1b>1)1c;s.3n.5I=e.1S==="57"?e.3m[0].38:e.38;s.3n.5J=e.1S==="57"?e.3m[0].2N:e.2N;if(1r 4t==="1m"){17 gA;if(s.3c()&&s.3n.5J===s.3n.6R||!s.3c()&&s.3n.5I===s.3n.6A)4t=1g;1d{gA=1A.Y1(1A.3o(s.3n.5J-s.3n.6R),1A.3o(s.3n.5I-s.3n.6A))*iD/1A.PI;4t=s.3c()?gA>s.14.gA:90-gA>s.14.gA}}if(4t)s.4n("Bu",s,e);if(1r m0==="1m"&&s.3b.wB)if(s.3n.5I!==s.3n.6A||s.3n.5J!==s.3n.6R)m0=1f;if(!2u)1c;if(4t){2u=1g;1c}if(!m0&&s.3b.wB)1c;s.7r=1g;s.4n("Y2",s,e);e.42();if(s.14.E3&&!s.14.EL)e.kO();if(!2I){if(14.4e)s.f1();6Y=s.EQ();s.dy(0);if(s.5e)s.1T.25("oZ p0 wC wD wE");if(s.14.9Z&&s.gJ)if(s.14.vK)s.jc();1d s.wm();lZ=1g;if(s.14.aU&&(s.14.8I===1f||s.14.8H===1f))s.gI(1f)}2I=1f;17 3W=s.3n.3W=s.3c()?s.3n.5I-s.3n.6A:s.3n.5J-s.3n.6R;3W=3W*s.14.E0;if(s.3r)3W=-3W;s.ct=3W>0?"3k":"2X";4r=3W+6Y;17 qm=1f;if(3W>0&&4r>s.54()){qm=1g;if(s.14.w2)4r=s.54()-1+1A.7o(-s.54()+6Y+3W,s.14.lC)}1d if(3W<0&&4r<s.4q()){qm=1g;if(s.14.w2)4r=s.4q()+1-1A.7o(s.4q()-6Y-3W,s.14.lC)}if(qm)e.EP=1f;if(!s.14.8I&&s.ct==="2X"&&4r<6Y)4r=6Y;if(!s.14.8H&&s.ct==="3k"&&4r>6Y)4r=6Y;if(s.14.9H>0)if(1A.3o(3W)>s.14.9H||lY){if(!lY){lY=1f;s.3n.6A=s.3n.5I;s.3n.6R=s.3n.5J;4r=6Y;s.3n.3W=s.3c()?s.3n.5I-s.3n.6A:s.3n.5J-s.3n.6R;1c}}1d{4r=6Y;1c}if(!s.14.vV)1c;if(s.14.c7||s.14.gC)s.cq();if(s.14.c7){if(f4.1b===0)f4.1Q({4M:s.3n[s.3c()?"6A":"6R"],6j:5X});f4.1Q({4M:s.3n[s.3c()?"5I":"5J"],6j:(1P 1U.2x).3E()})}s.aV(4r);s.aX(4r)};s.eC=1a(e){if(e.jj)e=e.jj;if(lX)s.4n("eC",s,e);lX=1g;if(!2u)1c;if(s.14.aU&&2I&&2u&&(s.14.8I===1f||s.14.8H===1f))s.gI(1g);17 bo=2x.9W();17 6D=bo-5X;if(s.7r){s.EO(e);s.4n("om",s,e);if(6D<4u&&bo-et>4u){if(jh)5m(jh);jh=4k(1a(){if(!s)1c;if(s.14.E4&&s.5W.1b>0&&!$(e.1X).1v(s.14.eZ))s.5W.hN(s.14.w8);s.4n("78",s,e)},4u)}if(6D<4u&&bo-et<4u){if(jh)5m(jh);s.4n("op",s,e)}}et=2x.9W();4k(1a(){if(s)s.7r=1f},0);if(!2u||!2I||!s.ct||s.3n.3W===0||4r===6Y){2u=2I=1g;1c}2u=2I=1g;17 dA;if(s.14.vV)dA=s.3r?s.1F:-s.1F;1d dA=-4r;if(s.14.c7){if(dA<-s.54()){s.4o(s.2w);1c}1d if(dA>-s.4q()){if(s.1O.1b<s.4w.1b)s.4o(s.4w.1b-1);1d s.4o(s.1O.1b-1);1c}if(s.14.vL){if(f4.1b>1){17 qn=f4.mZ(),wF=f4.mZ();17 6M=qn.4M-wF.4M;17 6j=qn.6j-wF.6j;s.3Y=6M/6j;s.3Y=s.3Y/2;if(1A.3o(s.3Y)<s.14.DR)s.3Y=0;if(6j>Y3||(1P 1U.2x).3E()-qn.6j>4u)s.3Y=0}1d s.3Y=0;s.3Y=s.3Y*s.14.DQ;f4.1b=0;17 f5=dF*s.14.DO;17 ER=s.3Y*f5;17 6r=s.1F+ER;if(s.3r)6r=-6r;17 qo=1g;17 m1;17 m2=1A.3o(s.3Y)*20*s.14.DP;if(6r<s.4q())if(s.14.pH){if(6r+s.4q()<-m2)6r=s.4q()-m2;m1=s.4q();qo=1f;lZ=1f}1d 6r=s.4q();1d if(6r>s.54())if(s.14.pH){if(6r-s.54()>m2)6r=s.54()+m2;m1=s.54();qo=1f;lZ=1f}1d 6r=s.54();1d if(s.14.vM){17 j=0,8J;1t(j=0;j<s.4w.1b;j+=1)if(s.4w[j]>-6r){8J=j;aq}if(1A.3o(s.4w[8J]-6r)<1A.3o(s.4w[8J-1]-6r)||s.ct==="2X")6r=s.4w[8J];1d 6r=s.4w[8J-1];if(!s.3r)6r=-6r}if(s.3Y!==0)if(s.3r)f5=1A.3o((-6r-s.1F)/s.3Y);1d f5=1A.3o((6r-s.1F)/s.3Y);1d if(s.14.vM){s.wG();1c}if(s.14.pH&&qo){s.aV(m1);s.dy(f5);s.aX(6r);s.bk();s.5e=1f;s.1T.4A(1a(){if(!s||!lZ)1c;s.4n("Y4",s);s.dy(s.14.4c);s.aX(m1);s.1T.4A(1a(){if(!s)1c;s.9k()})})}1d if(s.3Y){s.aV(6r);s.dy(f5);s.aX(6r);s.bk();if(!s.5e){s.5e=1f;s.1T.4A(1a(){if(!s)1c;s.9k()})}}1d s.aV(6r);s.cq()}if(!s.14.vL||6D>=s.14.vU){s.aV();s.cq()}1c}17 i,cu=0,qp=s.lQ[0];1t(i=0;i<s.5r.1b;i+=s.14.7e)if(1r s.5r[i+s.14.7e]!=="1m"){if(dA>=s.5r[i]&&dA<s.5r[i+s.14.7e]){cu=i;qp=s.5r[i+s.14.7e]-s.5r[i]}}1d if(dA>=s.5r[i]){cu=i;qp=s.5r[s.5r.1b-1]-s.5r[s.5r.1b-2]}17 pu=(dA-s.5r[cu])/qp;if(6D>s.14.vU){if(!s.14.E2){s.4o(s.2w);1c}if(s.ct==="2X")if(pu>=s.14.vT)s.4o(cu+s.14.7e);1d s.4o(cu);if(s.ct==="3k")if(pu>1-s.14.vT)s.4o(cu+s.14.7e);1d s.4o(cu)}1d{if(!s.14.E1){s.4o(s.2w);1c}if(s.ct==="2X")s.4o(cu+s.14.7e);if(s.ct==="3k")s.4o(cu)}};s.Ev=1a(bx,4c){1c s.4o(bx,4c,1f,1f)};s.4o=1a(bx,4c,6S,ap){if(1r 6S==="1m")6S=1f;if(1r bx==="1m")bx=0;if(bx<0)bx=0;s.aW=1A.6p(bx/s.14.7e);if(s.aW>=s.4w.1b)s.aW=s.4w.1b-1;17 1F=-s.4w[s.aW];if(s.14.9Z&&s.gJ)if(ap||!s.14.vK)s.wm(4c);1d s.jc();s.aV(1F);if(s.14.w5)1t(17 i=0;i<s.5r.1b;i++)if(-1A.6p(1F*5c)>=1A.6p(s.5r[i]*5c))bx=i;if(!s.14.8I&&1F<s.1F&&1F<s.54())1c 1g;if(!s.14.8H&&1F>s.1F&&1F>s.4q())if((s.2w||0)!==bx)1c 1g;if(1r 4c==="1m")4c=s.14.4c;s.eA=s.2w||0;s.2w=bx;s.wt();if(s.3r&&-1F===s.1F||!s.3r&&1F===s.1F){if(s.14.gz)s.jd();s.f3();if(s.14.51!=="1E")s.aX(1F);1c 1g}s.f3();s.bk(6S);if(4c===0||s.3b.ES){s.aX(1F);s.dy(0);s.9k(6S)}1d{s.aX(1F);s.dy(4c);if(!s.5e){s.5e=1f;s.1T.4A(1a(){if(!s)1c;s.9k(6S)})}}1c 1f};s.bk=1a(6S){if(1r 6S==="1m")6S=1f;if(s.14.gz)s.jd();if(s.47)s.47.bk();if(6S){s.4n("bk",s);if(s.2w!==s.eA){s.4n("oc",s);if(s.2w>s.eA)s.4n("Y5",s);1d s.4n("Y6",s)}}};s.9k=1a(6S){s.5e=1g;s.dy(0);if(1r 6S==="1m")6S=1f;if(s.47)s.47.9k();if(6S){s.4n("9k",s);if(s.2w!==s.eA){s.4n("tU",s);if(s.2w>s.eA)s.4n("Y7",s);1d s.4n("Y8",s)}}if(s.14.2V&&s.2V)s.2V.Y9(s.14.2V,s.2w);if(s.14.cm&&s.cm)s.cm.Ya()};s.wy=1a(6S,4c,ap){if(s.14.4e){if(s.5e)1c 1g;s.f1();17 4j=s.1h[0].4j;1c s.4o(s.2w+s.14.7e,4c,6S,ap)}1d 1c s.4o(s.2w+s.14.7e,4c,6S,ap)};s.wk=1a(4c){1c s.wy(1f,4c,1f)};s.wz=1a(6S,4c,ap){if(s.14.4e){if(s.5e)1c 1g;s.f1();17 4j=s.1h[0].4j;1c s.4o(s.2w-1,4c,6S,ap)}1d 1c s.4o(s.2w-1,4c,6S,ap)};s.Yb=1a(4c){1c s.wz(1f,4c,1f)};s.wG=1a(6S,4c,ap){1c s.4o(s.2w,4c,6S)};s.Yc=1a(){s.14.pM=1f;1c 1f};s.Yd=1a(){s.14.pM=1g;1c 1f};s.dy=1a(3v,cv){s.1T.2f(3v);if(s.14.51!=="1E"&&s.gS[s.14.51])s.gS[s.14.51].bz(3v);if(s.14.6f&&s.6f)s.6f.bz(3v);if(s.14.3N&&s.3N)s.3N.bz(3v);if(s.14.lE&&s.8g)s.8g.bz(3v,cv);s.4n("Ye",s,3v)};s.aX=1a(1F,cq,cv){17 x=0,y=0,z=0;if(s.3c())x=s.3r?-1F:1F;1d y=1F;if(s.14.pL){x=7i(x);y=7i(y)}if(!s.14.dv)if(s.4a.lK)s.1T.1N("2b("+x+"px, "+y+"px, "+z+"px)");1d s.1T.1N("1F("+x+"px, "+y+"px)");s.1F=s.3c()?x:y;17 2z;17 jg=s.4q()-s.54();if(jg===0)2z=0;1d 2z=(1F-s.54())/jg;if(2z!==s.2z)s.aV(1F);if(cq)s.cq();if(s.14.51!=="1E"&&s.gS[s.14.51])s.gS[s.14.51].a5(s.1F);if(s.14.6f&&s.6f)s.6f.a5(s.1F);if(s.14.3N&&s.3N)s.3N.a5(s.1F);if(s.14.lE&&s.8g)s.8g.a5(s.1F,cv);s.4n("Yf",s,s.1F)};s.eG=1a(el,9m){17 7N,5f,8E,aQ;if(1r 9m==="1m")9m="x";if(s.14.dv)1c s.3r?-s.1F:s.1F;8E=1U.lm(el,29);if(1U.eS){5f=8E.1N||8E.v1;if(5f.2W(",").1b>6)5f=5f.2W(", ").Df(1a(a){1c a.31(",",".")}).76(", ");aQ=1P 1U.eS(5f==="ll"?"":5f)}1d{aQ=8E.Yg||8E.Yh||8E.Yi||8E.Yj||8E.1N||8E.eK("1N").31("1F(","7N(1, 0, 0, 1,");7N=aQ.ar().2W(",")}if(9m==="x")if(1U.eS)5f=aQ.Dg;1d if(7N.1b===16)5f=7D(7N[12]);1d 5f=7D(7N[4]);if(9m==="y")if(1U.eS)5f=aQ.Dh;1d if(7N.1b===16)5f=7D(7N[13]);1d 5f=7D(7N[5]);if(s.3r&&5f)5f=-5f;1c 5f||0};s.EQ=1a(9m){if(1r 9m==="1m")9m=s.3c()?"x":"y";1c s.eG(s.1T[0],9m)};s.m3=[];1a qq(1X,1p){1p=1p||{};17 ET=1U.EU||1U.EV;17 a1=1P ET(1a(EW){EW.Yk(1a(EX){s.wv(1f);s.4n("Yl",s,EX)})});a1.Ym(1X,{iS:1r 1p.iS==="1m"?1f:1p.iS,qr:1r 1p.qr==="1m"?1f:1p.qr,wH:1r 1p.wH==="1m"?1f:1p.wH});s.m3.1Q(a1)}s.EY=1a(){if(s.14.Eg){17 wI=s.1h.1M();1t(17 i=0;i<wI.1b;i++)qq(wI[i])}qq(s.1h[0],{qr:1g});qq(s.1T[0],{iS:1g})};s.EZ=1a(){1t(17 i=0;i<s.m3.1b;i++)s.m3[i].Yn();s.m3=[]};s.jk=1a(){s.1T.2K("."+s.14.8e+"."+s.14.7u).43();17 1O=s.1T.2K("."+s.14.8e);if(s.14.4v==="8u"&&!s.14.5p)s.14.5p=1O.1b;s.5p=3P(s.14.5p||s.14.4v,10);s.5p=s.5p+s.14.E7;if(s.5p>1O.1b)s.5p=1O.1b;17 qs=[],qt=[],i;1O.2r(1a(1I,el){17 1E=$(1i);if(1I<s.5p)qt.1Q(el);if(1I<1O.1b&&1I>=1O.1b-s.5p)qs.1Q(el);1E.1Z("1u-1D-1E-1I",1I)});1t(i=0;i<qt.1b;i++)s.1T.3h($(qt[i].p4(1f)).1w(s.14.7u));1t(i=qs.1b-1;i>=0;i--)s.1T.98($(qs[i].p4(1f)).1w(s.14.7u))};s.gH=1a(){s.1T.2K("."+s.14.8e+"."+s.14.7u).43();s.1O.95("1u-1D-1E-1I")};s.Ep=1a(F0){17 9K=s.2w-s.5p;s.gH();s.jk();s.lP();if(F0)s.4o(9K+s.5p,0,1g)};s.f1=1a(){17 6n;if(s.2w<s.5p){6n=s.1O.1b-s.5p*3+s.2w;6n=6n+s.5p;s.4o(6n,0,1g,1f)}1d if(s.14.4v==="8u"&&s.2w>=s.5p*2||s.2w>s.1O.1b-s.14.4v*2){6n=-s.1O.1b+s.2w+s.5p;6n=6n+s.5p;s.4o(6n,0,1g,1f)}};s.Yo=1a(1O){if(s.14.4e)s.gH();if(1r 1O==="6d"&&1O.1b)1t(17 i=0;i<1O.1b;i++){if(1O[i])s.1T.3h(1O[i])}1d s.1T.3h(1O);if(s.14.4e)s.jk();if(!(s.14.a1&&s.4a.a1))s.7H(1f)};s.Yp=1a(1O){if(s.14.4e)s.gH();17 5q=s.2w+1;if(1r 1O==="6d"&&1O.1b){1t(17 i=0;i<1O.1b;i++)if(1O[i])s.1T.98(1O[i]);5q=s.2w+1O.1b}1d s.1T.98(1O);if(s.14.4e)s.jk();if(!(s.14.a1&&s.4a.a1))s.7H(1f);s.4o(5q,0,1g)};s.F1=1a(dB){if(s.14.4e){s.gH();s.1O=s.1T.2K("."+s.14.8e)}17 5q=s.2w,dC;if(1r dB==="6d"&&dB.1b){1t(17 i=0;i<dB.1b;i++){dC=dB[i];if(s.1O[dC])s.1O.eq(dC).43();if(dC<5q)5q--}5q=1A.4C(5q,0)}1d{dC=dB;if(s.1O[dC])s.1O.eq(dC).43();if(dC<5q)5q--;5q=1A.4C(5q,0)}if(s.14.4e)s.jk();if(!(s.14.a1&&s.4a.a1))s.7H(1f);if(s.14.4e)s.4o(5q+s.5p,0,1g);1d s.4o(5q,0,1g)};s.Yq=1a(){17 dB=[];1t(17 i=0;i<s.1O.1b;i++)dB.1Q(i);s.F1(dB)};s.gS={pK:{a5:1a(){1t(17 i=0;i<s.1O.1b;i++){17 1E=s.1O.eq(i);17 5D=1E[0].gM;17 tx=-5D;if(!s.14.dv)tx=tx-s.1F;17 ty=0;if(!s.3c()){ty=tx;tx=0}17 F2=s.14.pK.DU?1A.4C(1-1A.3o(1E[0].2z),0):1+1A.4Z(1A.4C(1E[0].2z,-1),0);1E.1W({5j:F2}).1N("2b("+tx+"px, "+ty+"px, 8P)")}},bz:1a(3v){s.1O.2f(3v);if(s.14.dv&&3v!==0){17 jl=1g;s.1O.4A(1a(){if(jl)1c;if(!s)1c;jl=1f;s.5e=1g;17 jm=["oZ","p0","wC","wD","wE"];1t(17 i=0;i<jm.1b;i++)s.1T.25(jm[i])})}}},j7:{a5:1a(){1t(17 i=0;i<s.1O.1b;i++){17 1E=s.1O.eq(i);17 2z=1E[0].2z;if(s.14.j7.DT)2z=1A.4C(1A.4Z(1E[0].2z,1),-1);17 5D=1E[0].gM;17 eX=-iD*2z,9n=eX,9l=0,tx=-5D,ty=0;if(!s.3c()){ty=tx;tx=0;9l=-9n;9n=0}1d if(s.3r)9n=-9n;1E[0].3A.F3=-1A.3o(1A.7i(2z))+s.1O.1b;if(s.14.j7.j6){17 7Q=s.3c()?1E.1l(".1D-1E-4b-1G"):1E.1l(".1D-1E-4b-2J");17 7R=s.3c()?1E.1l(".1D-1E-4b-1Y"):1E.1l(".1D-1E-4b-4I");if(7Q.1b===0){7Q=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1G":"2J")+\'"></1j>\');1E.3h(7Q)}if(7R.1b===0){7R=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1Y":"4I")+\'"></1j>\');1E.3h(7R)}if(7Q.1b)7Q[0].3A.5j=1A.4C(-2z,0);if(7R.1b)7R[0].3A.5j=1A.4C(2z,0)}1E.1N("2b("+tx+"px, "+ty+"px, 8P) 9l("+9l+"dm) 9n("+9n+"dm)")}},bz:1a(3v){s.1O.2f(3v).1l(".1D-1E-4b-2J, .1D-1E-4b-1Y, .1D-1E-4b-4I, .1D-1E-4b-1G").2f(3v);if(s.14.dv&&3v!==0){17 jl=1g;s.1O.eq(s.2w).4A(1a(){if(jl)1c;if(!s)1c;if(!$(1i).1v(s.14.lF))1c;jl=1f;s.5e=1g;17 jm=["oZ","p0","wC","wD","wE"];1t(17 i=0;i<jm.1b;i++)s.1T.25(jm[i])})}}},7P:{a5:1a(){17 gT=0,aY;if(s.14.7P.4b)if(s.3c()){aY=s.1T.1l(".1D-7P-4b");if(aY.1b===0){aY=$(\'<1j 1q="1D-7P-4b"></1j>\');s.1T.3h(aY)}aY.1W({2c:s.3q+"px"})}1d{aY=s.1h.1l(".1D-7P-4b");if(aY.1b===0){aY=$(\'<1j 1q="1D-7P-4b"></1j>\');s.1h.3h(aY)}}1t(17 i=0;i<s.1O.1b;i++){17 1E=s.1O.eq(i);17 gU=i*90;17 7i=1A.6p(gU/qu);if(s.3r){gU=-gU;7i=1A.6p(-gU/qu)}17 2z=1A.4C(1A.4Z(1E[0].2z,1),-1);17 tx=0,ty=0,tz=0;if(i%4===0){tx=-7i*4*s.4J;tz=0}1d if((i-1)%4===0){tx=0;tz=-7i*4*s.4J}1d if((i-2)%4===0){tx=s.4J+7i*4*s.4J;tz=s.4J}1d if((i-3)%4===0){tx=-s.4J;tz=3*s.4J+s.4J*4*7i}if(s.3r)tx=-tx;if(!s.3c()){ty=tx;tx=0}17 1N="9l("+(s.3c()?0:-gU)+"dm) 9n("+(s.3c()?gU:0)+"dm) 2b("+tx+"px, "+ty+"px, "+tz+"px)";if(2z<=1&&2z>-1){gT=i*90+2z*90;if(s.3r)gT=-i*90-2z*90}1E.1N(1N);if(s.14.7P.j6){17 7Q=s.3c()?1E.1l(".1D-1E-4b-1G"):1E.1l(".1D-1E-4b-2J");17 7R=s.3c()?1E.1l(".1D-1E-4b-1Y"):1E.1l(".1D-1E-4b-4I");if(7Q.1b===0){7Q=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1G":"2J")+\'"></1j>\');1E.3h(7Q)}if(7R.1b===0){7R=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1Y":"4I")+\'"></1j>\');1E.3h(7R)}if(7Q.1b)7Q[0].3A.5j=1A.4C(-2z,0);if(7R.1b)7R[0].3A.5j=1A.4C(2z,0)}}s.1T.1W({"-jb-1N-qv":"50% 50% -"+s.4J/2+"px","-q6-1N-qv":"50% 50% -"+s.4J/2+"px","-ms-1N-qv":"50% 50% -"+s.4J/2+"px","1N-qv":"50% 50% -"+s.4J/2+"px"});if(s.14.7P.4b)if(s.3c())aY.1N("2b(8P, "+(s.3q/2+s.14.7P.vO)+"px, "+-s.3q/2+"px) 9l(F4) Yr(Ys) 3L("+s.14.7P.pJ+")");1d{17 wJ=1A.3o(gT)-1A.6p(1A.3o(gT)/90)*90;17 m4=1.5-(1A.Yt(wJ*2*1A.PI/qu)/2+1A.vr(wJ*2*1A.PI/qu)/2);17 F5=s.14.7P.pJ,wK=s.14.7P.pJ/m4,5D=s.14.7P.vO;aY.1N("Yu("+F5+", 1, "+wK+") 2b(8P, "+(s.2c/2+5D)+"px, "+-s.2c/2/wK+"px) 9l(-F4)")}17 F6=s.F7||s.F8?-s.4J/2:0;s.1T.1N("2b(8P,0,"+F6+"px) 9l("+(s.3c()?0:gT)+"dm) 9n("+(s.3c()?-gT:0)+"dm)")},bz:1a(3v){s.1O.2f(3v).1l(".1D-1E-4b-2J, .1D-1E-4b-1Y, .1D-1E-4b-4I, .1D-1E-4b-1G").2f(3v);if(s.14.7P.4b&&!s.3c())s.1h.1l(".1D-7P-4b").2f(3v)}},bu:{a5:1a(){17 1N=s.1F;17 2O=s.3c()?-1N+s.3q/2:-1N+s.2c/2;17 eX=s.3c()?s.14.bu.eX:-s.14.bu.eX;17 1F=s.14.bu.6Q;1t(17 i=0,1b=s.1O.1b;i<1b;i++){17 1E=s.1O.eq(i);17 7f=s.lQ[i];17 F9=1E[0].gM;17 bA=(2O-F9-7f/2)/7f*s.14.bu.DS;17 9n=s.3c()?eX*bA:0;17 9l=s.3c()?0:eX*bA;17 qw=-1F*1A.3o(bA);17 a6=s.3c()?0:s.14.bu.vN*bA;17 a7=s.3c()?s.14.bu.vN*bA:0;if(1A.3o(a7)<.m5)a7=0;if(1A.3o(a6)<.m5)a6=0;if(1A.3o(qw)<.m5)qw=0;if(1A.3o(9n)<.m5)9n=0;if(1A.3o(9l)<.m5)9l=0;17 Fa="2b("+a7+"px,"+a6+"px,"+qw+"px)  9l("+9l+"dm) 9n("+9n+"dm)";1E.1N(Fa);1E[0].3A.F3=-1A.3o(1A.7i(bA))+1;if(s.14.bu.j6){17 7Q=s.3c()?1E.1l(".1D-1E-4b-1G"):1E.1l(".1D-1E-4b-2J");17 7R=s.3c()?1E.1l(".1D-1E-4b-1Y"):1E.1l(".1D-1E-4b-4I");if(7Q.1b===0){7Q=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1G":"2J")+\'"></1j>\');1E.3h(7Q)}if(7R.1b===0){7R=$(\'<1j 1q="1D-1E-4b-\'+(s.3c()?"1Y":"4I")+\'"></1j>\');1E.3h(7R)}if(7Q.1b)7Q[0].3A.5j=bA>0?bA:0;if(7R.1b)7R[0].3A.5j=-bA>0?-bA:0}}if(s.3b.ie){17 ws=s.1T[0].3A;ws.Yv=2O+"px 50%"}},bz:1a(3v){s.1O.2f(3v).1l(".1D-1E-4b-2J, .1D-1E-4b-1Y, .1D-1E-4b-4I, .1D-1E-4b-1G").2f(3v)}}};s.47={m6:1g,cw:1a(1I,qx){if(1r 1I==="1m")1c;if(1r qx==="1m")qx=1f;if(s.1O.1b===0)1c;17 1E=s.1O.eq(1I);17 7n=1E.1l("."+s.14.wa+":2k(."+s.14.pZ+"):2k(."+s.14.lI+")");if(1E.1v(s.14.wa)&&!1E.1v(s.14.pZ)&&!1E.1v(s.14.lI))7n=7n.9b(1E[0]);if(7n.1b===0)1c;7n.2r(1a(){17 7S=$(1i);7S.1w(s.14.lI);17 b8=7S.1Z("1u-b8");17 5x=7S.1Z("1u-5x"),a2=7S.1Z("1u-a2"),a3=7S.1Z("1u-a3");s.fK(7S[0],5x||b8,a2,a3,1g,1a(){if(b8){7S.1W("b8-1H",\'1n("\'+b8+\'")\');7S.95("1u-b8")}1d{if(a2){7S.1Z("a2",a2);7S.95("1u-a2")}if(a3){7S.1Z("a3",a3);7S.95("1u-a3")}if(5x){7S.1Z("5x",5x);7S.95("1u-5x")}}7S.1w(s.14.pZ).1K(s.14.lI);1E.1l("."+s.14.Ed+", ."+s.14.Ef).43();if(s.14.4e&&qx){17 wL=1E.1Z("1u-1D-1E-1I");if(1E.1v(s.14.7u)){17 Fb=s.1T.2K(\'[1u-1D-1E-1I="\'+wL+\'"]:2k(.\'+s.14.7u+")");s.47.cw(Fb.1I(),1g)}1d{17 Fc=s.1T.2K("."+s.14.7u+\'[1u-1D-1E-1I="\'+wL+\'"]\');s.47.cw(Fc.1I(),1g)}}s.4n("or",s,1E[0],7S[0])});s.4n("oq",s,1E[0],7S[0])})},58:1a(){17 i;17 4v=s.14.4v;if(4v==="8u")4v=0;if(!s.47.m6)s.47.m6=1f;if(s.14.pN)s.1T.2K("."+s.14.lG).2r(1a(){s.47.cw($(1i).1I())});1d if(4v>1)1t(i=s.2w;i<s.2w+4v;i++){if(s.1O[i])s.47.cw(i)}1d s.47.cw(s.2w);if(s.14.kU)if(4v>1||s.14.pO&&s.14.pO>1){17 wM=s.14.pO;17 dx=4v;17 f6=1A.4Z(s.2w+dx+1A.4C(wM,dx),s.1O.1b);17 gV=1A.4C(s.2w-1A.4C(dx,wM),0);1t(i=s.2w+4v;i<f6;i++)if(s.1O[i])s.47.cw(i);1t(i=gV;i<s.2w;i++)if(s.1O[i])s.47.cw(i)}1d{17 8J=s.1T.2K("."+s.14.j9);if(8J.1b>0)s.47.cw(8J.1I());17 cr=s.1T.2K("."+s.14.ja);if(cr.1b>0)s.47.cw(cr.1I())}},bk:1a(){if(s.14.bi)if(s.14.g4||!s.14.g4&&!s.47.m6)s.47.58()},9k:1a(){if(s.14.bi&&!s.14.g4)s.47.58()}};s.3N={2u:1g,wN:1a(e){17 sb=s.3N;17 x=0,y=0;17 1F;17 Fd=s.3c()?e.1S==="4y"||e.1S==="57"?e.3m[0].38:e.38||e.Ar:e.1S==="4y"||e.1S==="57"?e.3m[0].2N:e.2N||e.As;17 4M=Fd-sb.63.5D()[s.3c()?"1G":"2J"]-sb.cz/2;17 wO=-s.54()*sb.qy;17 wP=-s.4q()*sb.qy;if(4M<wO)4M=wO;1d if(4M>wP)4M=wP;4M=-4M/sb.qy;s.aV(4M);s.aX(4M,1f)},wQ:1a(e){17 sb=s.3N;sb.2u=1f;e.42();e.kO();sb.wN(e);5m(sb.wR);sb.63.2f(0);if(s.14.lA)sb.63.1W("5j",1);s.1T.2f(5c);sb.6T.2f(5c);s.4n("Yw",s)},wS:1a(e){17 sb=s.3N;if(!sb.2u)1c;if(e.42)e.42();1d e.Yx=1g;sb.wN(e);s.1T.2f(0);sb.63.2f(0);sb.6T.2f(0);s.4n("Yy",s)},wT:1a(e){17 sb=s.3N;if(!sb.2u)1c;sb.2u=1g;if(s.14.lA){5m(sb.wR);sb.wR=4k(1a(){sb.63.1W("5j",0);sb.63.2f(dT)},dF)}s.4n("Yz",s);if(s.14.DW)s.wG()},gW:1a(){if(s.14.gB===1g&&!s.4a.5g)1c s.gP;1d 1c s.3x}(),Fe:1a(){17 sb=s.3N;17 1X=s.4a.5g?sb.63:2g;$(sb.63).on(sb.gW.56,sb.wQ);$(1X).on(sb.gW.65,sb.wS);$(1X).on(sb.gW.6C,sb.wT)},Ff:1a(){17 sb=s.3N;17 1X=s.4a.5g?sb.63:2g;$(sb.63).3B(sb.gW.56,sb.wQ);$(1X).3B(sb.gW.65,sb.wS);$(1X).3B(sb.gW.6C,sb.wT)},qd:1a(){if(!s.14.3N)1c;17 sb=s.3N;sb.63=$(s.14.3N);if(s.14.lB&&1r s.14.3N==="3l"&&sb.63.1b>1&&s.1h.1l(s.14.3N).1b===1)sb.63=s.1h.1l(s.14.3N);sb.6T=sb.63.1l(".1D-3N-6T");if(sb.6T.1b===0){sb.6T=$(\'<1j 1q="1D-3N-6T"></1j>\');sb.63.3h(sb.6T)}sb.6T[0].3A.3q="";sb.6T[0].3A.2c="";sb.f8=s.3c()?sb.63[0].5u:sb.63[0].3X;sb.9x=s.4J/s.8f;sb.qy=sb.9x*(sb.f8/s.4J);sb.cz=sb.f8*sb.9x;if(s.3c())sb.6T[0].3A.3q=sb.cz+"px";1d sb.6T[0].3A.2c=sb.cz+"px";if(sb.9x>=1)sb.63[0].3A.7l="ll";1d sb.63[0].3A.7l="";if(s.14.lA)sb.63[0].3A.5j=0},a5:1a(){if(!s.14.3N)1c;17 3W;17 sb=s.3N;17 1F=s.1F||0;17 7T;17 gX=sb.cz;7T=(sb.f8-sb.cz)*s.2z;if(s.3r&&s.3c()){7T=-7T;if(7T>0){gX=sb.cz-7T;7T=0}1d if(-7T+sb.cz>sb.f8)gX=sb.f8+7T}1d if(7T<0){gX=sb.cz+7T;7T=0}1d if(7T+sb.cz>sb.f8)gX=sb.f8-7T;if(s.3c()){if(s.4a.lK)sb.6T.1N("2b("+7T+"px, 0, 0)");1d sb.6T.1N("a7("+7T+"px)");sb.6T[0].3A.3q=gX+"px"}1d{if(s.4a.lK)sb.6T.1N("2b(8P, "+7T+"px, 0)");1d sb.6T.1N("a6("+7T+"px)");sb.6T[0].3A.2c=gX+"px"}if(s.14.lA){5m(sb.aP);sb.63[0].3A.5j=1;sb.aP=4k(1a(){sb.63[0].3A.5j=0;sb.63.2f(dT)},dF)}},bz:1a(3v){if(!s.14.3N)1c;s.3N.6T.2f(3v)}};s.8g={wU:1a(x,y){1i.x=x;1i.y=y;1i.zJ=x.1b-1;17 i1,i3;17 l=1i.x.1b;1i.Fg=1a(x2){if(!x2)1c 0;i3=Fh(1i.x,x2);i1=i3-1;1c(x2-1i.x[i1])*(1i.y[i3]-1i.y[i1])/(1i.x[i3]-1i.x[i1])+1i.y[i1]};17 Fh=1a(){17 f6,gV,qz;1c 1a(wV,5k){gV=-1;f6=wV.1b;iV(f6-gV>1)if(wV[qz=f6+gV>>1]<=5k)gV=qz;1d f6=qz;1c f6}}()},Fi:1a(c){if(!s.8g.gO)s.8g.gO=s.14.4e?1P s.8g.wU(s.5r,c.5r):1P s.8g.wU(s.4w,c.4w)},a5:1a(1F,cv){17 7v=s.14.lE;17 m4,f9;1a wW(c){1F=c.3r&&c.14.4z==="l5"?-s.1F:s.1F;if(s.14.pP==="1E"){s.8g.Fi(c);f9=-s.8g.gO.Fg(-1F)}if(!f9||s.14.pP==="1h"){m4=(c.4q()-c.54())/(s.4q()-s.54());f9=(1F-s.54())*m4+c.54()}if(s.14.E8)f9=c.4q()-f9;c.aV(f9);c.aX(f9,1g,s);c.cq()}if(s.9a(7v))1t(17 i=0;i<7v.1b;i++){if(7v[i]!==cv&&7v[i]7J c3)wW(7v[i])}1d if(7v 7J c3&&cv!==7v)wW(7v)},bz:1a(3v,cv){17 7v=s.14.lE;17 i;1a wX(c){c.dy(3v,s);if(3v!==0){c.bk();c.1T.4A(1a(){if(!7v)1c;if(c.14.4e&&s.14.pP==="1E")c.f1();c.9k()})}}if(s.9a(7v))1t(i=0;i<7v.1b;i++){if(7v[i]!==cv&&7v[i]7J c3)wX(7v[i])}1d if(7v 7J c3&&cv!==7v)wX(7v)}};1a wY(el,2z){el=$(el);17 p,pX,pY;17 wZ=s.3r?-1:1;p=el.1Z("1u-1D-6f")||"0";pX=el.1Z("1u-1D-6f-x");pY=el.1Z("1u-1D-6f-y");if(pX||pY){pX=pX||"0";pY=pY||"0"}1d if(s.3c()){pX=p;pY="0"}1d{pY=p;pX="0"}if(pX.1L("%")>=0)pX=3P(pX,10)*2z*wZ+"%";1d pX=pX*2z*wZ+"px";if(pY.1L("%")>=0)pY=3P(pY,10)*2z+"%";1d pY=pY*2z+"px";el.1N("2b("+pX+", "+pY+",8P)")}s.6f={a5:1a(){s.1h.2K("[1u-1D-6f], [1u-1D-6f-x], [1u-1D-6f-y]").2r(1a(){wY(1i,s.2z)});s.1O.2r(1a(){17 1E=$(1i);1E.1l("[1u-1D-6f], [1u-1D-6f-x], [1u-1D-6f-y]").2r(1a(){17 2z=1A.4Z(1A.4C(1E[0].2z,-1),1);wY(1i,2z)})})},bz:1a(3v){if(1r 3v==="1m")3v=s.14.4c;s.1h.1l("[1u-1D-6f], [1u-1D-6f-x], [1u-1D-6f-y]").2r(1a(){17 el=$(1i);17 x0=3P(el.1Z("1u-1D-6f-3v"),10)||3v;if(3v===0)x0=0;el.2f(x0)})}};s.4p={3L:1,gY:1,qA:1g,2y:{1E:1m,dD:1m,dE:1m,1H:1m,91:1m,9i:s.14.9i},1H:{2u:1m,2I:1m,5I:1m,5J:1m,cA:1m,cB:1m,fa:1m,fb:1m,3q:1m,2c:1m,6A:1m,6R:1m,3V:{},8h:{}},3Y:{x:1m,y:1m,jn:1m,jo:1m,jp:1m},x3:1a(e){if(e.3m.1b<2)1c 1;17 x1=e.3m[0].38,y1=e.3m[0].2N,x2=e.3m[1].38,y2=e.3m[1].2N;17 6M=1A.YA(1A.7o(x2-x1,2)+1A.7o(y2-y1,2));1c 6M},x4:1a(e){17 z=s.4p;if(!s.4a.jq){if(e.1S!=="4y"||e.1S==="4y"&&e.3m.1b<2)1c;z.2y.Fj=z.x3(e)}if(!z.2y.1E||!z.2y.1E.1b){z.2y.1E=$(1i);if(z.2y.1E.1b===0)z.2y.1E=s.1O.eq(s.2w);z.2y.1H=z.2y.1E.1l("7n, jy, Fk");z.2y.91=z.2y.1H.4i("."+s.14.q0);z.2y.9i=z.2y.91.1Z("1u-1D-4p")||s.14.9i;if(z.2y.91.1b===0){z.2y.1H=1m;1c}}z.2y.1H.2f(0);z.qA=1f},x5:1a(e){17 z=s.4p;if(!s.4a.jq){if(e.1S!=="57"||e.1S==="57"&&e.3m.1b<2)1c;z.2y.Fl=z.x3(e)}if(!z.2y.1H||z.2y.1H.1b===0)1c;if(s.4a.jq)z.3L=e.3L*z.gY;1d z.3L=z.2y.Fl/z.2y.Fj*z.gY;if(z.3L>z.2y.9i)z.3L=z.2y.9i-1+1A.7o(z.3L-z.2y.9i+1,.5);if(z.3L<s.14.dc)z.3L=s.14.dc+1-1A.7o(s.14.dc-z.3L+1,.5);z.2y.1H.1N("2b(0,0,0) 3L("+z.3L+")")},x6:1a(e){17 z=s.4p;if(!s.4a.jq)if(e.1S!=="cD"||e.1S==="cD"&&e.fX.1b<2)1c;if(!z.2y.1H||z.2y.1H.1b===0)1c;z.3L=1A.4C(1A.4Z(z.3L,z.2y.9i),s.14.dc);z.2y.1H.2f(s.14.4c).1N("2b(0,0,0) 3L("+z.3L+")");z.gY=z.3L;z.qA=1g;if(z.3L===1)z.2y.1E=1m},eB:1a(s,e){17 z=s.4p;if(!z.2y.1H||z.2y.1H.1b===0)1c;if(z.1H.2u)1c;if(s.27.os==="5M")e.42();z.1H.2u=1f;z.1H.3V.x=e.1S==="4y"?e.3m[0].38:e.38;z.1H.3V.y=e.1S==="4y"?e.3m[0].2N:e.2N},gR:1a(e){17 z=s.4p;if(!z.2y.1H||z.2y.1H.1b===0)1c;s.7r=1g;if(!z.1H.2u||!z.2y.1E)1c;if(!z.1H.2I){z.1H.3q=z.2y.1H[0].5u;z.1H.2c=z.2y.1H[0].3X;z.1H.6A=s.eG(z.2y.91[0],"x")||0;z.1H.6R=s.eG(z.2y.91[0],"y")||0;z.2y.dD=z.2y.1E[0].5u;z.2y.dE=z.2y.1E[0].3X;z.2y.91.2f(0);if(s.3r)z.1H.6A=-z.1H.6A;if(s.3r)z.1H.6R=-z.1H.6R}17 fc=z.1H.3q*z.3L;17 fd=z.1H.2c*z.3L;if(fc<z.2y.dD&&fd<z.2y.dE)1c;z.1H.cA=1A.4Z(z.2y.dD/2-fc/2,0);z.1H.fa=-z.1H.cA;z.1H.cB=1A.4Z(z.2y.dE/2-fd/2,0);z.1H.fb=-z.1H.cB;z.1H.8h.x=e.1S==="57"?e.3m[0].38:e.38;z.1H.8h.y=e.1S==="57"?e.3m[0].2N:e.2N;if(!z.1H.2I&&!z.qA)if(s.3c()&&(1A.6p(z.1H.cA)===1A.6p(z.1H.6A)&&z.1H.8h.x<z.1H.3V.x)||1A.6p(z.1H.fa)===1A.6p(z.1H.6A)&&z.1H.8h.x>z.1H.3V.x){z.1H.2u=1g;1c}1d if(!s.3c()&&(1A.6p(z.1H.cB)===1A.6p(z.1H.6R)&&z.1H.8h.y<z.1H.3V.y)||1A.6p(z.1H.fb)===1A.6p(z.1H.6R)&&z.1H.8h.y>z.1H.3V.y){z.1H.2u=1g;1c}e.42();e.kO();z.1H.2I=1f;z.1H.5I=z.1H.8h.x-z.1H.3V.x+z.1H.6A;z.1H.5J=z.1H.8h.y-z.1H.3V.y+z.1H.6R;if(z.1H.5I<z.1H.cA)z.1H.5I=z.1H.cA+1-1A.7o(z.1H.cA-z.1H.5I+1,.8);if(z.1H.5I>z.1H.fa)z.1H.5I=z.1H.fa-1+1A.7o(z.1H.5I-z.1H.fa+1,.8);if(z.1H.5J<z.1H.cB)z.1H.5J=z.1H.cB+1-1A.7o(z.1H.cB-z.1H.5J+1,.8);if(z.1H.5J>z.1H.fb)z.1H.5J=z.1H.fb-1+1A.7o(z.1H.5J-z.1H.fb+1,.8);if(!z.3Y.jn)z.3Y.jn=z.1H.8h.x;if(!z.3Y.jo)z.3Y.jo=z.1H.8h.y;if(!z.3Y.jp)z.3Y.jp=2x.9W();z.3Y.x=(z.1H.8h.x-z.3Y.jn)/(2x.9W()-z.3Y.jp)/2;z.3Y.y=(z.1H.8h.y-z.3Y.jo)/(2x.9W()-z.3Y.jp)/2;if(1A.3o(z.1H.8h.x-z.3Y.jn)<2)z.3Y.x=0;if(1A.3o(z.1H.8h.y-z.3Y.jo)<2)z.3Y.y=0;z.3Y.jn=z.1H.8h.x;z.3Y.jo=z.1H.8h.y;z.3Y.jp=2x.9W();z.2y.91.1N("2b("+z.1H.5I+"px, "+z.1H.5J+"px,0)")},eC:1a(s,e){17 z=s.4p;if(!z.2y.1H||z.2y.1H.1b===0)1c;if(!z.1H.2u||!z.1H.2I){z.1H.2u=1g;z.1H.2I=1g;1c}z.1H.2u=1g;z.1H.2I=1g;17 qB=4u;17 qC=4u;17 Fm=z.3Y.x*qB;17 x7=z.1H.5I+Fm;17 Fn=z.3Y.y*qC;17 x8=z.1H.5J+Fn;if(z.3Y.x!==0)qB=1A.3o((x7-z.1H.5I)/z.3Y.x);if(z.3Y.y!==0)qC=1A.3o((x8-z.1H.5J)/z.3Y.y);17 f5=1A.4C(qB,qC);z.1H.5I=x7;z.1H.5J=x8;17 fc=z.1H.3q*z.3L;17 fd=z.1H.2c*z.3L;z.1H.cA=1A.4Z(z.2y.dD/2-fc/2,0);z.1H.fa=-z.1H.cA;z.1H.cB=1A.4Z(z.2y.dE/2-fd/2,0);z.1H.fb=-z.1H.cB;z.1H.5I=1A.4C(1A.4Z(z.1H.5I,z.1H.fa),z.1H.cA);z.1H.5J=1A.4C(1A.4Z(z.1H.5J,z.1H.fb),z.1H.cB);z.2y.91.2f(f5).1N("2b("+z.1H.5I+"px, "+z.1H.5J+"px,0)")},9k:1a(s){17 z=s.4p;if(z.2y.1E&&s.eA!==s.2w){z.2y.1H.1N("2b(0,0,0) 3L(1)");z.2y.91.1N("2b(0,0,0)");z.2y.1E=z.2y.1H=z.2y.91=1m;z.3L=z.gY=1}},Fo:1a(s,e){17 z=s.4p;if(!z.2y.1E){z.2y.1E=s.lV?$(s.lV):s.1O.eq(s.2w);z.2y.1H=z.2y.1E.1l("7n, jy, Fk");z.2y.91=z.2y.1H.4i("."+s.14.q0)}if(!z.2y.1H||z.2y.1H.1b===0)1c;17 qD,qE,x9,xa,hA,hB,a7,a6,xb,xc,fc,fd,m7,m8,qF,qG,dD,dE;if(1r z.1H.3V.x==="1m"&&e){qD=e.1S==="cD"?e.fX[0].38:e.38;qE=e.1S==="cD"?e.fX[0].2N:e.2N}1d{qD=z.1H.3V.x;qE=z.1H.3V.y}if(z.3L&&z.3L!==1){z.3L=z.gY=1;z.2y.91.2f(4u).1N("2b(0,0,0)");z.2y.1H.2f(4u).1N("2b(0,0,0) 3L(1)");z.2y.1E=1m}1d{z.3L=z.gY=z.2y.91.1Z("1u-1D-4p")||s.14.9i;if(e){dD=z.2y.1E[0].5u;dE=z.2y.1E[0].3X;x9=z.2y.1E.5D().1G;xa=z.2y.1E.5D().2J;hA=x9+dD/2-qD;hB=xa+dE/2-qE;xb=z.2y.1H[0].5u;xc=z.2y.1H[0].3X;fc=xb*z.3L;fd=xc*z.3L;m7=1A.4Z(dD/2-fc/2,0);m8=1A.4Z(dE/2-fd/2,0);qF=-m7;qG=-m8;a7=hA*z.3L;a6=hB*z.3L;if(a7<m7)a7=m7;if(a7>qF)a7=qF;if(a6<m8)a6=m8;if(a6>qG)a6=qG}1d{a7=0;a6=0}z.2y.91.2f(4u).1N("2b("+a7+"px, "+a6+"px,0)");z.2y.1H.2f(4u).1N("2b(0,0,0) 3L("+z.3L+")")}},6s:1a(7X){17 2E=7X?"3B":"on";if(s.14.4p){17 1X=s.1O;17 4W=s.3x.56==="4y"&&s.4a.4W&&s.14.w7?{dL:1f,74:1g}:1g;if(s.4a.jq){s.1O[2E]("YB",s.4p.x4,4W);s.1O[2E]("YC",s.4p.x5,4W);s.1O[2E]("YD",s.4p.x6,4W)}1d if(s.3x.56==="4y"){s.1O[2E](s.3x.56,s.4p.x4,4W);s.1O[2E](s.3x.65,s.4p.x5,4W);s.1O[2E](s.3x.6C,s.4p.x6,4W)}s[2E]("YE",s.4p.eB);s.1O.2r(1a(1I,1E){if($(1E).1l("."+s.14.q0).1b>0)$(1E)[2E](s.3x.65,s.4p.gR)});s[2E]("YF",s.4p.eC);s[2E]("4A",s.4p.9k);if(s.14.DV)s.on("YG",s.4p.Fo)}},4N:1a(){s.4p.6s()},5N:1a(){s.4p.6s(1f)}};s.7s=[];1t(17 iP in s.iQ){17 p=s.iQ[iP](s,s.14[iP]);if(p)s.7s.1Q(p)}s.xd=1a(3s){1t(17 i=0;i<s.7s.1b;i++)if(3s in s.7s[i])s.7s[i][3s](2p[1],2p[2],2p[3],2p[4],2p[5])};1a qH(3s){if(3s.1L("on")!==0)if(3s[0]!==3s[0].hr())3s="on"+3s[0].hr()+3s.Cj(1);1d 3s="on"+3s;1c 3s}s.a8={};s.4n=1a(3s){if(s.14[3s])s.14[3s](2p[1],2p[2],2p[3],2p[4],2p[5]);17 i;if(s.a8[3s])1t(i=0;i<s.a8[3s].1b;i++)s.a8[3s][i](2p[1],2p[2],2p[3],2p[4],2p[5]);if(s.xd)s.xd(3s,2p[1],2p[2],2p[3],2p[4],2p[5])};s.on=1a(3s,aE){3s=qH(3s);if(!s.a8[3s])s.a8[3s]=[];s.a8[3s].1Q(aE);1c s};s.3B=1a(3s,aE){17 i;3s=qH(3s);if(1r aE==="1m"){s.a8[3s]=[];1c s}if(!s.a8[3s]||s.a8[3s].1b===0)1c;1t(i=0;i<s.a8[3s].1b;i++)if(s.a8[3s][i]===aE)s.a8[3s].aj(i,1);1c s};s.7z=1a(3s,aE){3s=qH(3s);17 xe=1a(){aE(2p[0],2p[1],2p[2],2p[3],2p[4]);s.3B(3s,xe)};s.on(3s,xe);1c s};s.3G={qI:1a($el){$el.1Z("YH","0");1c $el},qJ:1a($el,xf){$el.1Z("xf",xf);1c $el},qK:1a($el,55){$el.1Z("m9-55",55);1c $el},dU:1a($el){$el.1Z("m9-5w",1f);1c $el},fv:1a($el){$el.1Z("m9-5w",1g);1c $el},qj:1a(bZ){if(bZ.YI!==13)1c;if($(bZ.1X).is(s.14.4U)){s.ww(bZ);if(s.bj)s.3G.ma(s.14.Ek);1d s.3G.ma(s.14.wc)}1d if($(bZ.1X).is(s.14.4V)){s.wx(bZ);if(s.ez)s.3G.ma(s.14.Eh);1d s.3G.ma(s.14.wb)}if($(bZ.1X).is("."+s.14.eZ))$(bZ.1X)[0].3Q()},jr:$(\'<2B 1q="\'+s.14.Ee+\'" m9-YJ="YK" m9-YL="1f"></2B>\'),ma:1a(35){17 6P=s.3G.jr;if(6P.1b===0)1c;6P.3O("");6P.3O(35)},4N:1a(){if(s.14.4U&&s.4U&&s.4U.1b>0){s.3G.qI(s.4U);s.3G.qJ(s.4U,"2M");s.3G.qK(s.4U,s.14.wc)}if(s.14.4V&&s.4V&&s.4V.1b>0){s.3G.qI(s.4V);s.3G.qJ(s.4V,"2M");s.3G.qK(s.4V,s.14.wb)}$(s.1h).3h(s.3G.jr)},EI:1a(){if(s.14.8c&&s.14.j8&&s.8d&&s.8d.1b)s.8d.2r(1a(){17 gD=$(1i);s.3G.qI(gD);s.3G.qJ(gD,"2M");s.3G.qK(gD,s.14.El.31(/{{1I}}/,gD.1I()+1))})},5N:1a(){if(s.3G.jr&&s.3G.jr.1b>0)s.3G.jr.43()}};s.4N=1a(){if(s.14.4e)s.jk();s.lO();s.lP();s.qc();if(s.14.3N&&s.3N){s.3N.qd();if(s.14.vP)s.3N.Fe()}if(s.14.51!=="1E"&&s.gS[s.14.51]){if(!s.14.4e)s.aV();s.gS[s.14.51].a5()}if(s.14.4e)s.4o(s.14.9Q+s.5p,0,s.14.wd);1d{s.4o(s.14.9Q,0,s.14.wd);if(s.14.9Q===0){if(s.6f&&s.14.6f)s.6f.a5();if(s.47&&s.14.bi){s.47.58();s.47.m6=1f}}}s.6s();if(s.14.a1&&s.4a.a1)s.EY();if(s.14.kY&&!s.14.bi)s.kY();if(s.14.4p&&s.4p)s.4p.4N();if(s.14.9Z)s.Ew();if(s.14.vQ)if(s.Fp)s.Fp();if(s.14.vR)if(s.Fq)s.Fq();if(s.14.Fr)s.14.mV=s.14.Fr;if(s.14.2V)if(s.2V)s.2V.4N();if(s.14.cm)if(s.cm)s.cm.4N();if(s.14.3G&&s.3G)s.3G.4N();s.4n("YM",s)};s.qL=1a(){s.1h.1K(s.7d.76(" ")).95("3A");s.1T.95("3A");if(s.1O&&s.1O.1b)s.1O.1K([s.14.lG,s.14.lF,s.14.j9,s.14.ja].76(" ")).95("3A").95("1u-1D-a0").95("1u-1D-8B");if(s.5W&&s.5W.1b)s.5W.1K(s.14.w8);if(s.8d&&s.8d.1b)s.8d.1K(s.14.lH);if(s.14.4V)$(s.14.4V).1K(s.14.gE);if(s.14.4U)$(s.14.4U).1K(s.14.gE);if(s.14.3N&&s.3N){if(s.3N.63&&s.3N.63.1b)s.3N.63.95("3A");if(s.3N.6T&&s.3N.6T.1b)s.3N.6T.95("3A")}};s.5N=1a(Fs,qL){s.7Y();s.jc();if(s.14.3N&&s.3N)if(s.14.vP)s.3N.Ff();if(s.14.4e)s.gH();if(qL)s.qL();s.EZ();if(s.14.4p&&s.4p)s.4p.5N();if(s.14.vQ)if(s.Ft)s.Ft();if(s.14.vR)if(s.Fu)s.Fu();if(s.14.3G&&s.3G)s.3G.5N();if(s.14.2V&&!s.14.mV)1U.oY("B8",s.2V.YN);if(s.14.cm&&s.cm)s.cm.5N();s.4n("YO");if(Fs!==1g)s=29};s.4N();1c s};c3.6x={F7:1a(){17 ua=1U.8A.iz.5P();1c ua.1L("BN")>=0&&ua.1L("ub")<0&&ua.1L("5M")<0}(),F8:/(vz|vx|vw).*Ds(?!.*Dt)/i.pg(1U.8A.iz),9a:1a(5U){1c eQ.6x.ar.pi(5U)==="[6d pj]"},3b:{ie:1U.8A.qg||1U.8A.qh,wB:1U.8A.qh&&1U.8A.YP>1||1U.8A.qg&&1U.8A.YQ>1,ES:1a(){17 1j=2g.9D("1j");1j.77="\\YR!--[if YS IE 9]><i></i><![YT]--\\YU";1c 1j.YV("i").1b===1}()},27:1a(){17 ua=1U.8A.iz;17 5M=ua.5Z(/(Dp);?[\\s\\/]+([\\d.]+)?/);17 8R=ua.5Z(/(vw).*OS\\s([\\j2]+)/);17 br=ua.5Z(/(vx)(.*OS\\s([\\j2]+))?/);17 bs=!8R&&ua.5Z(/(vz\\Dq|Dr)\\s([\\j2]+)/);1c{5s:8R||bs||br,5M:5M}}(),4a:{5g:1U.qM&&qM.5g===1f||1a(){1c!!("vm"in 1U||1U.iX&&2g 7J iX)}(),lK:1U.qM&&qM.YW===1f||1a(){17 1j=2g.9D("1j").3A;1c"YX"in 1j||"YY"in 1j||"YZ"in 1j||"Z0"in 1j||"Z1"in 1j}(),q3:1a(){17 1j=2g.9D("1j").3A;17 9w="Z2 Z3 Z4 Z5 Z6 Z7 Z8 Z9 Za Zb Zc".2W(" ");1t(17 i=0;i<9w.1b;i++)if(9w[i]in 1j)1c 1f}(),a1:1a(){1c"EU"in 1U||"EV"in 1U}(),4W:1a(){17 j1=1g;jX{17 pr=eQ.Dn({},"dL",{fy:1a(){j1=1f}});1U.8U("Do",29,pr)}jY(e){}1c j1}(),jq:1a(){1c"Zd"in 1U}()},iQ:{}}})();',
62,3796,"                                                                  params   var  app function length return else view true false container this div modal find undefined url page options class typeof pageContainer for data hasClass addClass item picker input Math content navbar swiper slide translate left image index value removeClass indexOf parents transform slides new push name type wrapper window col css target right attr  panel router items  trigger xhr device text null popup translate3d height newPage animated transition document selector pageContent close not select material letters oldPage arguments opened each overlay base isTouched pageName activeIndex Date gesture progress calendar span scrollTop swipeout action popover searchbar active isMoved top children pageData button pageY center icon month prop title context inner history split next dynamicNavbar clicked  replace query  callback message cached  pageX block newNavbarInner browser isHorizontal  domCache sliding template append method toolbar prev string targetTouches touches abs form width rtl eventName tabbar photo duration animatePages touchEvents def back style off textarea buttons getTime actions a11y f7PageData progressbar Dom7 list scale props scrollbar html parseInt click oldNavbarInner open day months touchesStart diff offsetHeight velocity navbarInnerContainer root preloader preventDefault remove   found lazy  openIn support shadow speed defaults loop current Template7 touchesDiff parent clientLeft setTimeout smartSelect autocomplete emit slideTo zoom maxTranslate currentTranslate year isScrolling 300 slidesPerView snapGrid link touchstart direction transitionEnd viewContainer max date dropdown tab activePage dataset bottom size pushState sortable position init dir delete color range cols clickedData nextButton prevButton passiveListener state scroll min  effect sortableContainer spaceBetween minTranslate label start touchmove load virtualList from childNodes 100 option animating curTransform touch href closeModal opacity val scrollHeight clearTimeout pagesInView itemHeight loopedSlides newActiveIndex slidesGrid ios allowPageChange offsetWidth values disabled src selected isH obj cache previousPage offset closed side listBlock dayDate currentX currentY body views android destroy show toLowerCase messages compile inputType events arr dom paginationContainer touchStartTime reload match  insertBefore buttonsLeft track param move transitioning callbackName trim error key sortingEl pageHeight object ctx parallax checkbox inverter navbarContainer time pageElement animate call newIndex scrollContent floor part newPosition attachEvents hide toPopover out modalType prototype easing slidesPerColumn startX _compiledTemplates end timeDiff after change t7_ctx lastUrl smart modalLeft buttonsRight displayAs distance accordion formData notification depth startY runCallbacks drag pluginHook hidden padding navbarLayout startTranslate targetElement f7View previousNavbar handleTouchMove handleTouchEnd capture  join innerHTML onClick targetOffset swipeOutEl newTranslate monthsTranslate classNames slidesPerGroup slideSize handleTouchStart percentage round removeOnClose modalTop display tabs img pow fixed cachedIndex allowClick _plugins resultString slideDuplicateClass controlled with scrollLeft beforeremove once ajax _remove callbackOk parseFloat panelWidth touchStartY closeText update eventsTarget instanceof formId pickerHTML targetSelector matrix variable cube shadowBefore shadowAfter _img newPos pushStateSeparator viewClass f7NavbarLeftOffset detach detachEvents force  previousURL smartSelectData inputName filteredItems  done newTab  activeElement total listener pagination bullets slideClass virtualSize controller touchesCurrent className eventData screen focus submit complete status modalHeight resize isPickerModal allowPanelOpen nodeName auto pull refresh tabLink opener inline navigator row parentNode fireAjaxCallback curStyle elements hash allowSwipeToPrev allowSwipeToNext nextSlide radio pagesContainer before cancelButton searchList 0px callbackCancel ipad checked newCache addEventListener els monthHTML dayNumber newChild _blocks  imageWrap main reloadPrevious  removeAttr login contextName prepend password isArray add modalWidth isPopover activePanel layout buttonOffset pageTitle zoomMax onClose onTransitionEnd rotateX axis rotateY animateNavBackIcon floating currentPage activeNavBackIcon swipeoutOpenedEl subnavbar through sizeNavbars styles divider group pageBeforeRemove callbacks fromPage temporaryDom createElement pageToRemove bold modalPosition threshold actionsRight actionsLeft oldIndex backText paddingTop osVersion rippleWave queue initialSlide itemValue updateValue currentYear script _method now shiftIndex helperName autoplay column observer srcset sizes slidePosition setTranslate translateY translateX emitterEventListeners pushStateRoot  templates contentCache pageElementsCache  callbackData f7NavbarRightOffset ignoreCache hideToolbar splice appView navbarWidth offsetLeft ignore  internal break toString  pageQuery   t7_rendered f7RelatedNavbar  insertAfter proceed modalAngleSize isPopup nodeType handler navbarTheme pageScrollHeight newPaddingBottom updatableScroll render touchStartX success onChange setValue currentMonth timeout transformMatrix startTime func paginationType grabCursor updateProgress snapIndex setWrapperTranslate cubeShadow initialPages previousNavBackIcon cancel mainView historyState search _url preloadOnly preprocess background actionsLeftWidth overswipe media closeOnHTMLClick activableElement  rippleTarget  box lazyLoading isEnd onTransitionStart exposed updateItems colWidth touchEndTime nextMonth prevMonth ipod iphone touchEventsTarget coverflow imagesToLoad slideToIndex slideIndex  setTransition offsetMultiplier materialPreloaderHtml materialRipple contextCache pagesCache currentPageData outerWidth blur messagebar removeClasses slice navbarInners navbarToRemove placeholder modalAngle reveal lazyLoadImages textContent currentScroll _buttonOffset currentEl navbarHTML theme indexes fromIndex event trackClick evt skipNames Swiper onOpen aValue initEvents freeMode allowItemClick touchCurrentY rangePicker minDate maxDate onMonthAdd dom7ElementDataStorage newTop newLeft initialValue  finalValue blocks helpers hashnav centeredSlides containerModifierClass breakpoint updateActiveIndex prevSlide paginationHTML swipeDirection stopIndex byController loadImageInSlide   dragSize minX minY clear touchend activeNavbar pageShadow hideNavbar pushStateUrl navbarRemoveCallback margin empty returnCallbacks triggerPageCallbacks pageContext tabBar field classList angle windowHeight windowWidth visible openPanel lazyHandler actionsRightWidth valueText backOnSelect pageHTML paddingBottom inputTop ceil triggerDistance inf activeLink oldTabLink scrollParent removeActive tag stateUrl zoomMin  caption unless valueProperty preloaderColor initialized displayValues colContainer cancelAnimationFrame deg getFullYear getMonth valueDate classes toPush animateTop animateLeft helperParts virtualTranslate autoplayTimeoutId spv setWrapperTransition  currentPos slidesIndexes indexToRemove slideWidth slideHeight 1E3 activeState mousedown pages swipeback swipeBack passive viewIndex currentViews navbarData centerWidth notFound removeDiacritics virtual 400 disable foundItems keydown afterAnimation pageRemoveCallback filter t7_template setPages newNavbar modalHTML buttonsHTML cssClass openModal _modal targetHeight loginScreen isLoginScreen closing infinite closePanel continue swipeOutActions formTheme multiple optionImage optionIcon optionGroup  only toIndex itemTop reachEnd  ptr infiniteContent lastClickTime tapHoldTimeout prevent JSON toolbarTemplate captions isBeginning previousIndex onTouchStart onTouchEnd itemsHTML limit newValue getTranslate requestAnimationFrame firstDay inputValue getPropertyValue tempDiv unique globalAjaxOptions statusCode xhrTimeout Object newParents WebKitCSSMatrix que isFunction partials expression rotate breakpoints bulletClass activeSlide fixLoop slidesNumberEvenToRows updateClasses velocities momentumDuration maxIndex  trackSize controlledTranslate maxX maxY scaledWidth scaledHeight swipePanel swipePanelActiveArea swipePanelOnlyClose modalStack viewsClass statusbar initialNavbars docLocation viewURL  activeNavElements previousNavElements pageAnimCallback showToolbar leftWidth rightWidth currLeft enable itemText first get pageCallbacks pageInit rightNavbarInner preroute reloadPosition last child outerHeight closest wrap imagesSequence loadImage newMessagesFirst avatar allowSwipeout swipeOutContent swipeoutClose maxTop noNavbar noToolbar detail useTranslate hasNavbar refreshing changedTouches getAttribute activable formsData formJSON contentType pushStateQueue lazyLoadingOnTransitionStart navbarTemplate toolbarCloseText columnHTML animationFrameId onMonthChangeEnd nextMonthHTML prevMonthHTML newMonthHTML targetDate monthTranslate toCreate attrs dom7LiveListeners compareWith nextElementSibling previousElementSibling postData boundary _data resultArray currentTop currentLeft unit slices  blockQuoteRegExp helperContext parts contextArray inverse autoHeight touchAngle simulateTouch watchSlidesProgress bullet buttonDisabledClass originalParams point destroyLoop setGrabCursor autoplaying newSlideOrderIndex newSlidesGrid swiperSlideOffset realIndex spline touchEventsDesktop actionDom onTouchMove effects wrapperRotate slideAngle minIndex draggableEvents newSize currentScale Framework7 swipeBackPage swipeBackPageActiveArea modalButtonOk modalTitle ripple dial mousemove View linksView viewContainerWidth pixelRatio pageChanged loadContent pushStateAnimatePages noLeft noRight requiredLeft hiding customSearch triggerEvent previousQuery f7VirtualList newAreaHeight newBarHeight textareaTimeout GET responseText toUpperCase parseUrlQuery findElement _history  indicator buttonSelector buttonClass targetWidth diffX diffY keep panelPosition panelOverlay swipeable reset scrollMessages newMessages overswipeLeft overswipeRight actionsWidth swipeOutActionsWidth toggleClass startIndex offsetTop sort toolbarTheme optionData toolbarHTML scrollToInput fragment rowsBefore dynamicHeight heights appendChild touchId  pullStarted  hideTabbar navbarHidden toolbarHidden tabbarHidden highlight expanded activeTimeout needsFastClick rippleTouchEnd    isLink pickerToClose accordionItem f7form serializeObject notInputs stateContent  statePageName swipers backLinkText captionsContainer  allowSwipeToClose swipeToCloseStarted swipeToCloseActiveSlide clickedItem inputReadOnly onlyInPopover userAgent inPopover arrValues displayValue 180 returnTo prevTranslate pickerClass openOnInput onPickerClose daysInMonth currentValues prevMonthTranslate nextMonthTranslate transitionEndCallback subtitle plugin plugins dataKey attributes elStyle fireCallBack while stringData DocumentTouch easeProgress _elements initialFullValue supportsPassive d_ hashContent foundElse compiled slideShadows flip paginationClickable slideNextClass slidePrevClass webkit stopAutoplay updateAutoHeight activeSlides newHeight translatesDiff clickTimeout isTouchEvent originalEvent createLoop eventTriggered triggerEvents prevPositionX prevPositionY prevTime gestures liveRegion  preloadPreviousPage uniqueHistory tapHold swipeBackPageAnimateShadow modalButtonCancel svg mouseup activeNavTranslate previousNavTranslate pageBackCallback afterBack loadPage refreshPreviousPage showNavbar pushStateUrlSplit hasOwnProperty beforeinit initSearchbar clearButton compareWithText nextAll keypress keyup maxHeight handleTextarea onPageBeforeInit onPageBeforeRemove _modalsSelector leftNavbarInner _ctx_path try catch animationEnd unshift oldNavbar preloadUrl _modalTemplateTempDiv afterText confirm username clickTarget modalAngleLeft modalAngleTop pickerModal isModal transitionEndTarget innerWidth placeholderSrc imageIsLoading rect getBoundingClientRect autoLayout newScroll swipeoutEl openedActions overswipeLeftButton overswipeRightButton f7VirtualListIndex selects itemAfter reLayout popupCloseText inPopup tempDomElement lastRepaintY rowsPerScreen listHeight forceScrollTop handleScroll handleResize indexShift wasScrolled down oldTab webView activeSelection tapHoldFired rippleTransform rippleTimeout file diameter removeRipple selection stopPropagation toggle forms f7DestroyResizableTextarea itemInput standalone lazyLoadingInPrevNext js_compare swiperContainer sliderSettings preloadImages swipeToCloseDiff textProperty rotateEffect newDisplayValue wrapperHeight valueCallbacks horizontal rangesClasses header month1 getDate resetMonth prevYear nextYear weekDayIndex rebuildBoth weekHeaderHTML _tempNotificationElement tempParent   attrName none getComputedStyle paramsPrefix responseData var_name animate7Instance currentValue   openingQuote hashName helperContent elseContent helper instance scrollbarHide uniqueNavElements resistanceRatio preventClicks control slideActiveClass slideVisibleClass bulletActiveClass lazyStatusLoadingClass points transforms3d cursor onReady autoplayPaused updateContainerSize updateSlidesSize slidesSizesGrid slidesPerRow swiperSlideSize breakLoop slideBefore clickedSlide clickedIndex allowTouchCallbacks allowThresholdMove allowMomentumBounce startMoving afterBouncePosition bounceAmount observers multiplier 001 initialImageLoaded translateMinX translateMinY aria notify  uniqueHistoryIgnoreGetParameters allowDuplicateUrls pushStateNoAnimation swipeBackPageThreshold swipeBackPageAnimateOpacity Close imagesLazyLoadSequential template7Pages initialPagesUrl location  allowViewTouchMove notFromBorder f7PreventPanelSwipe activePageTranslate previousPageTranslate  popoverView popupView panelView navbarInitCallback reinit navbarInner onLeft centerLeft toolbarContainer isVirtualList cancelMarginProp _vlQuery nextEl preventSubmit beforeSend onPage removeIndex pageCallbacksNames allPagesCallbacks pageInitCallback oldNavbarInnerContainer initPage initSmartSelects initPageMaterialTabbar rightText t7_rendered_content _ctx isDynamicPage replaceState historyBecameUnique manipulateDom removeNavbar pop shift groupSelector boolean buttonParams sizePopover isActions cover edge onerror onlyPic sent scrollBefore onEdge messagesToReturn closeTO swipeoutDelete sortingElHeight sortingItems minTop  sorting selectName smartSelectOpen pickerHeight  maxLength optionHasMedia optionGroupLabel optionIsLabel optionColor optionClassName smartSelectItemTemplate static searchbarHTML handleInputs virtualListInstance optionText renderItem resetScrollTop rowsAfter maxBufferHeight setListSize topPosition leftIndex rightIndex prevIndex vlists destroyPullToRefresh pullToRefreshContent bars hasToolbar hasTabbar previousScroll tabLinkWidth highlightTranslate tabbarSetHighlight needsFastClickTimeOut addActive which needsRipple createRipple removeTimeout timeStamp _isMoved handleClick androidChrome pickerToOpen parse stringify formToData skipTypes case formFromData blockPopstate onSlideChangeStart sliders   expositionHideCaptions iconsColorClass  htmlTemplate openIndex previousSlideVideo onTap   onDoubleTap onLazyImageLoad onLazyImageReady  swipeToCloseIsTouched  itemTemplate source RegExp positionDropDown updateValues closeByOutsideClick convertToPopover formatValue calcSize colHeight updateDuringScroll velocityTranslate columnItemsHTML textAlign monthPicker yearPicker inValuesIndex touchCurrentX dateInRange firstDayOfMonthIndex hasEvent onMonthChangeStart currentIndex wrapperTranslate layoutDate hold notifications custom closeNotification removeEventListener webkitTransitionEnd transitionend includeMargins clientTop returnIndex cloneNode nextEls prevEls removeChild createMethod dataType abortTimeout  callbackSplit requestUrl ajaxComplete setRequestHeader test ajaxError apply Array _parents encodeURIComponent defaultDiacriticsRemovalap Animate7 frameId finalFullValue foundInstance opts _ osVersionArr ratio escape helperSlices  helperHash toSkip getCompileFn getCompileInverse getCompileVar levelsUp compiledArguments ret reverse freeModeMomentumBounce setWrapperSize shadowScale fade roundLengths onlyExternal watchSlidesVisibility lazyLoadingInPrevNextAmount controlBy slideDuplicateActiveClass duplicate slideDuplicateNextClass slideDuplicatePrevClass paginationCurrentClass paginationTotalClass paginationProgressbarClass   lazyStatusLoadedClass zoomContainerClass deepDef breakPointsParams flexbox unsetGrabCursor moving moz imagesLoaded offsetCenter slideAfter scaleX scaleY updatePagination set translated slideChangedBySlideTo pointerEnabled msPointerEnabled moveCapture onEnterKey findElementInEvent formElements disableParentSwiper lastMoveEvent doBounce groupSize initObserver childList prependSlides appendSlides 360 origin translateZ loadInDuplicate moveDivider guess isScaling momentumDurationX momentumDurationY touchX touchY translateMaxX translateMaxY normalizeEventName makeFocusable addRole addLabel cleanupStyles Modernizr fastClicks fastClicksDelayBetweenClicks fastClicksExclude activeStateElements ajaxLinks swipeoutActionsNoFold swipeoutNoFollow Done scrollTopOnNavbarClick scrollTopOnStatusbarClick swipePanelCloseOpposite Cancel modalPasswordPlaceholder viewMainClass notificationCloseButtonText template7Data materialPageLoadDelay materialPreloaderSvg circle needsStatusBar reloadPage reloadContent reloadPreviousPage reloadPreviousContent refreshPage appViews f7NavbarInitialized navbarBeforeRemove initNavbarWithCallback navbarStyles activeNavbarBackLink searchIn cancelButtonHasMargin _enable _disable onSearch searchByItem wordsMatch nextElements onBeforeRemove initialBarHeight initialAreaHeight clientHeight maxBarHeight paste cut initPageMessagebar pageNames f7PageInitialized pageBack initPageMessages initFormsStorage initPageSwiper initPullToRefresh initPageInfiniteScroll initPageScrollToolbars initImagesLazyLoad initPageProgressbar initPageResizableTextarea initPageMaterialPreloader initPageMaterialInputs reinitPageSwiper initPageWithCallback notCached leftPage rightPage prepareNavbar slidingOffset animateNavbars isBack template7Render pageNameMatch templateName console _load newPageName pushStateClearQueue abort _back parseNewPage inners pageUrl verticalButtons white 768 actionsToPopover  targetParentPage shown modalParent keepOnClose setProgressbar panelTransitionEnd initSwipePanels overlayOpacity swap imagesLazyLoadPlaceholder loaded onload f7DestroyImagesLazyLoad hasImage pic isSent tail addMessage addMessages newMessagesHTML scrollHeightBefore initSwipeout swipeoutOpen onSwipeoutClose virtualIndex initSortable currentElOffset currentElHeight sortingElOffset f7SmartSelectPicker virtualListHeight selectData previousGroup groupLabel hasMedia smartSelectItem inputsHTML noTabbar smartSelectToolbar smartSelectNavbar useSearchbar searchbarPlaceholder searchbarCancel checkMaxLength selectedOptions dynamicHeightBufferSize showFilteredItemsOnly rowsToRender heightBeforeFirstItem heightBeforeLastItem listTop deletedItem vlistInstance dynamicTriggerDistance identifier pullToRefreshDone f7DestroyPullToRefresh  handleInfiniteScroll virtualListContainer f7ScrollToolbarsHandler materialTabbarSetHighlight showTab  isAnimatedTabs isSwipeableTabs oldTabId  accordionClose expandedItem initFastClicks findActivableElement isInsideScrollableView readOnly  rippleTouchStart rippleTouchMove  rippleParent wave eventType cancelable initClickEvents    isTabLink _fixIpadBodyScrolLeft initResize orientationchange formToJSON storeForm POST resizable textareas initMaterialWatchInputs initPushState destroySwiper sliderInstance photos photoTemplate objectTemplate captionTemplate onPopupClose onSliderTransitionStart inactive onSlideChangeEnd swipeToCloseStart swipeToCloseCurrent swipeToCloseTimeStart highlightMatches expandInput dropdownItemTemplate dropdownPlaceholderTemplate dropdownTemplate regExp inputOffsetLeft inputOffsetTop onSource valuesHTML expand updateValuesOnMomentum  chrome valueIndex itemsHeight destroyEvents velocityTime f7DestroyPickerCol resizeCols  colsHTML monthNames  dayNamesShort weekendDays touchMove  footer weekDay wrapperWidth handleDayClick dateYear dateMonth dateDay f7DestroyCalendarEvents dayIndex today setHours rowHTML dayYear dayMonth updateCurrentMonthYear setMonthsTranslate currentMonthTranslate nextDateTime prevDateTime setYearMonth currentDate week closeIcon closeOnClick notificationTemplate f7NotificationOnClose removing marginBottom initTemplate7Templates initPlugins hook hooks prevents process processed _this propName webkitTransform handleLiveEvent proxy matchedItems foundElements toAdd shortcuts headers xhrFields globalOptionName json addVars scripterror multipart Content _newData crossDomain methods separator var_value  ontouchstart diacriticsMap scrollTo maxLeft swing cos _container elementsDone propsDone began iPad iPod  iPhone quoteSingleRexExp quoteDoubleRexExp hashParts foundClosed inverseContent newDepth global throw Error eval autoplayDisableOnInteraction freeModeMomentum freeModeSticky stretch shadowOffset scrollbarDraggable keyboardControl mousewheelControl slidesPerColumnFill longSwipesRatio longSwipesMs followFinger touchReleaseOnEdges paginationElement paginationBulletRender paginationProgressRender paginationFractionRender paginationCustomRender resistance  preventClicksPropagation normalizeSlideIndex swipeHandler passiveListeners paginationHiddenClass paginationModifierClass lazyLoadingClass prevSlideMessage nextSlideMessage runCallbacksOnInit jQuery deepParam currentBreakpoint setBreakpoint grab autoplayDelay _slideNext onAutoplay pauseAutoplay prevSlideSize numFullColumns order updateSlidesOffset slideProgress  updateRealIndex forceSetTranslate onResize onClickNext onClickPrev slideNext slidePrev slideFound ieTouch oTransitionEnd MSTransitionEnd msTransitionEnd velocityEvent slideReset characterData containerParents shadowAngle scale2 slideOriginalIndex amount setDragPosition positionMin positionMax dragStart dragTimeout dragMove dragEnd LinearSpline array setControlledTranslate setControlledTransition setParallaxTransform rtlFactor parallaxDuration   getDistanceBetweenTouches onGestureStart onGestureChange onGestureEnd newPositionX newPositionY offsetX offsetY imageWidth imageHeight callPlugins _handler role version cacheIgnore cacheIgnoreGetParameters cacheDuration dynamicPageUrl routerRemoveTimeout routerRemoveWithTimeout pushStateOnLoad fastClicksDistanceThreshold tapHoldDelay tapHoldPreventClicks externalLinks hideNavbarOnPageScroll hideToolbarOnPageScroll hideTabbarOnPageScroll showBarsOnPageScrollEnd showBarsOnPageScrollTop swipeoutRemoveWithTimeout smartSelectOpenIn smartSelectBackText Back smartSelectPopupCloseText smartSelectPickerCloseText smartSelectSearchbar smartSelectBackOnSelect swipePanelNoFollow swipePanelThreshold panelsCloseByOutside modalUsernamePlaceholder modalCloseByOutside actionsCloseByOutside popupCloseByOutside modalPreloaderTitle modalsMoveToRoot imagesLazyLoadThreshold notificationCloseOnClick notificationCloseIcon precompileTemplates www half materialRippleElements statusbarOverlay reloadPages fading onSwipeBackMove boxShadow onSwipeBackBeforeChange   onSwipeBackBeforeReset onSwipeBackAfterChange onSwipeBackAfterReset addView innerContainer reinitNavbar navbarReinit navbarBeforeInit initNavbar navbarInit paddingLeft Searchbar hideDividers hideGroups setCancelButtonMargin handleInput resetFilter searchAll notHidden filterItems Messagebar sizeTextarea onBottom removeFromCache 200 onAjaxComplete onAjaxError createPageCallback capitalized beforeInit beforeAnimation  beforeRemove reinitPage pageReinit onPageReinit pageBeforeInit onPageInit pageAfterBack onPageAfterBack onPageBack pageAfterAnimation onPageAfterAnimation afteranimation pageBeforeAnimation onPageBeforeAnimation reinitLazyLoad newNavbarPosition pluginProcess template7Cache url_query prependTo f7RelatedPage animateBack modalStackClearQueue modalTemplate titleHTML textHTML afterTextHTML noButtons modalButtonsHTML double showPreloader hidePreloader actionsToPopoverTemplate popoverHTML modalActionsTemplate groups groupIndex buttonIndex middle loginscreen removeData marginTop both swipe swipePanelSetTransform onLoad onError Image isElementInViewport innerHeight Messages scrollMessagesOnlyOnEdge messageTemplate received heightBefore removeMessage noFoldLeft noFoldRight fold deleted deleteItem sortableToggle sortableOpen  sortableClose moveItem selectedText isLabel leftTemplate inPage Search VirtualList lastIndex onItemBeforeInsert onBeforeClear onItemsBeforeInsert emptyTemplate onItemsAfterInsert _isVisible appendItems appendItem prependItems prependItem deleteItems pullstart pullmove pullend onTop attachInfiniteScroll detachInfiniteScroll toolbarHeight tabbarHeight bottomBarHeight initMaterialTabbar tabTranslate accordionToggle accordionOpen scrollHandlerSet yes isFormElement nodes androidNeedsBlur noBlur targetNeedsFastClick fastclick targetNeedsFocus skipInputs targetNeedsPrevent handleMouseDown handleMouseMove handleMouseUp findRippleElement toRemove 01 sendClick createEvent clientX clientY forwardedTouchEvent dispatchEvent getSelection focusNode f7ScrollTop handleTouchCancel stopImmediatePropagation  handleScrollTop handleClicks javascript  _system closeOnCancel validUrl animation preventScrolling minimalUi orientation formStoreData formGetData  switch default formFromJSON store onchange   enctype FormData  resizeTextarea resizableTextarea inputs addFocusState removeFocusState watchChangeState loadPageName readyState handlePopState popstate destroySwiperOnRemove slider _slider PhotoBrowser exposition swipeToClose ofText maxZoom minZoom iconsColor dark preloaderColorClass photoLazyTemplate swiperWrapper captionIndex video pause onSliderTransitionEnd indexButton toggleExposition swipeCloseTouchStart onTouchMoveOpposite swipeCloseTouchMove swipeCloseTouchEnd onSwipeToClose Autocomplete searchbarPlaceholderText searchbarCancelText notFoundText requestSourceOnOpen updateInputValueOnSelect handleInputValue dropdownPlaceholderText handleDropdownClick listBlockOffsetLeft isValues Picker updateValuesOnTouchmove momentumRatio originBug safari forceValues initPickerCol colElement colIndex newItemsHTML absolute previousActiveIndex selectedItem itemOffsetTop translateOffset itemOffset itemsFit far destroyPickerCol onlyItems columns Calendar May monthNamesShort dayNames dateFormat yyyy closeOnSelect monthPickerTemplate yearPickerTemplate weekHeader headerPlaceholder headerTemplate footerTemplate formatDate getDay substring addValue onlyHeader initCalendarEvents onDayClick destroyCalendarEvents daysInPrevMonth rows weekend onMonthYearChangeStart onMonthYearChangeEnd nextDate prevDate currentMonthHTML monthsHTML dayName headerHTML footerHTML additionalClass getDeviceInfo onAppInit tbody querySelectorAll setAttribute toCamelCase liveListener matches webkitMatchesSelector msMatchesSelector firstChild nextSibling prevAll notTrigger optionName optionValue _jsonpRequests async user processData globalOptionValue defaultValue HEAD OPTIONS DELETE XMLHttpRequest postDataInstances Type headerName headerCallback fieldName fieldValue ajaxSuccess parseerror responseType post getJSON decodeURIComponent group1 map m41 m42 webkitRequestAnimationFrame webkitCancelAnimationFrame str easingProgress begin defineProperty testPassiveListener Android sOS iOS AppleWebKit Safari meta viewport statusBar major _escape  helperToSlices stringToBlocks plain  isPartial _partial ctx_ getCompiledArguments partialName condition rendered autoplayStopOnLast iOSEdgeSwipeDetection iOSEdgeSwipeThreshold freeModeMomentumRatio freeModeMomentumBounceRatio freeModeMomentumVelocityRatio freeModeMinimumVelocity modifier limitRotation crossFade zoomToggle scrollbarSnapOnRelease slidesOffsetBefore slidesOffsetAfter  touchRatio shortSwipes longSwipes touchMoveStopPropagation paginationHide slideToClickedSlide updateOnImagesReady loopAdditionalSlides controlInverse noSwiping noSwipingClass wrapperClass clickable lazyPreloaderClass notificationClass preloaderClass observeParents firstSlideMessage This the lastSlideMessage paginationBulletMessage initialVirtualTranslate getActiveBreakpoint needsReLoop reLoop wrongRTL grabbing imgElement checkForComplete _onReady _slideTo startAutoplay marginLeft marginRight ordinal currentSlidesPerView updateSlidesProgress isVisible wasBeginning wasEnd fraction onPaginationRendered numberOfBullets initPagination updateTranslate forceUpdatePagination nested onClickIndex _el updateClickedSlide preventedByNestedSwiper getWrapperTranslate momentumDistance lteIE9 ObserverFunc MutationObserver WebkitMutationObserver mutations mutation initObservers disconnectObservers updatePosition removeSlide slideOpacity zIndex 90deg scale1 zFactor isSafari isUiWebView slideOffset slideTransform originalSlide duplicatedSlide pointerPosition enableDraggable disableDraggable interpolate binarySearch getInterpolateFunction scaleStart canvas scaleMove momentumDistanceX momentumDistanceY toggleZoom enableKeyboardControl enableMousewheelControl hashnavReplaceState deleteInstance disableKeyboardControl disableMousewheelControl 750 external Username Password Loading xmlns http org 2000 viewbox stroke gap framework7 localStorage cordova phonegap resume f7PreventSwipeBack preventSwipeBack swipeBackMove swipeBackBeforeChange beforechange swipeBackBeforeReset beforereset swipeBackAfterChange afterchange swipeBackAfterReset afterreset getCurrentView paddingRight searchBy enableSearch onEnable disableSearch onDisable clearSearch onClear f7Searchbar pageContentPadding f7Messagebar nocache onAjaxStart afterback beforeanimation routerPreprocess routerPreroute routerLoad lastIndexOf routerBack vertical alert prompt modalLogin modalPassword showIndicator  hideIndicator modalActionsToPopoverTemplate showProgressbar number hideProgressbar png base64 iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg destroyImagesLazyLoad reinitImagesLazyLoad appear appendMessage prependMessage onlyImage removeMessages clean f7Messages 500 deleting smartSelectAddOption pickerCloseText smartSelectFormTheme smartSelectNavbarTheme smartSelectToolbarTheme smartSelectPickerHeight maxlength optionPreviousGroup optionClass optgroup smartSelectToolbarTemplate inPicker smartSelectNavbarTemplate smartSelectPopupCloseTemplate smartSelectBackTemplate displayDomCache createDocumentFragment firstIndex currentFromIndex currentToIndex scrollToItem getClientRects replaceAllItems replaceItem insertItemBefore deleteAllItems clearCache reinitVirtualList layer refreshdone pullToRefreshTrigger destroyScrollToolbars scrollable watch fill 700 MouseEvents initMouseEvent screenX screenY taphold rangeCount isCollapsed 159 touchcancel contextmenu confirmTitle formDeleteData removeItem todata fromdata storedata beforeSubmit beforesend submitError submitted destroyResizableTextarea resiable light lazyPhotoTemplate captionsTheme String enableExposition disableExposition photoBrowser Nothing replaceValues 110 f7Picker January February March April June July August September October November December Jan Feb Mar Apr Jun Jul Aug Sep Oct Nov Dec Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sun Mon Tue Wed Thu Fri Sat Select has days f7Calendar addNotification notificationMedia notificationTitle notificationSubtitle notificationHold template7 pluginPrevent appInit table getElementById contains  removeAttribute webkitTransitionDuration transitionDuration CustomEvent bubbles Event initEvent webkitAnimationEnd animationend pageYOffset pageXOffset previousSibling appendTo siblings focusin focusout mouseenter mouseleave mouseout mouseover ajaxSetup application urlencoded f7jsonp_ querySelector head _nocache requestParameters PUT PATCH ArrayBuffer Blob Document constructor Disposition host Requested With err response ajaxStart onabort send supportTouch u24b6 uff21 u00c0 u00c1 u00c2 u1ea6 u1ea4 u1eaa u1ea8 u00c3 u0100 u0102 u1eb0 u1eae u1eb4 u1eb2 u0226 u01e0 u00c4 u01de u1ea2 u00c5 u01fa u01cd u0200 u0202 u1ea0 u1eac u1eb6 u1e00 u0104 u023a u2c6f ua732 u00c6 u01fc u01e2 ua734 ua736 ua738 ua73a ua73c u24b7 uff22 u1e02 u1e04 u1e06 u0243 u0182 u0181 u24b8 uff23 u0106 u0108 u010a u010c u00c7 u1e08 u0187 u023b ua73e u24b9 uff24 u1e0a u010e u1e0c u1e10 u1e12 u1e0e u0110 u018b u018a u0189 ua779 u01f1 u01c4 u01f2 u01c5 u24ba uff25 u00c8 u00c9 u00ca u1ec0 u1ebe u1ec4 u1ec2 u1ebc u0112 u1e14 u1e16 u0114 u0116 u00cb u1eba u011a u0204 u0206 u1eb8 u1ec6 u0228 u1e1c u0118 u1e18 u1e1a u0190 u018e u24bb uff26 u1e1e u0191 ua77b u24bc uff27 u01f4 u011c u1e20 u011e u0120 u01e6  u0122 u01e4 u0193 ua7a0 ua77d ua77e u24bd uff28 u0124 u1e22 u1e26 u021e u1e24 u1e28 u1e2a u0126 u2c67 u2c75 ua78d u24be uff29 u00cc u00cd u00ce u0128  u012a u012c u0130 u00cf u1e2e u1ec8 u01cf u0208 u020a u1eca u012e u1e2c u0197 u24bf uff2a u0134 u0248 u24c0 uff2b u1e30 u01e8 u1e32 u0136 u1e34 u0198 u2c69 ua740 ua742 ua744 ua7a2 u24c1 uff2c u013f u0139 u013d u1e36 u1e38 u013b u1e3c u1e3a u0141 u023d u2c62 u2c60 ua748 ua746 ua780 u01c7 u01c8 u24c2 uff2d u1e3e u1e40 u1e42 u2c6e u019c u24c3 uff2e u01f8 u0143 u00d1 u1e44 u0147 u1e46  u0145 u1e4a u1e48 u0220 u019d ua790 ua7a4 u01ca u01cb u24c4 uff2f u00d2 u00d3 u00d4 u1ed2 u1ed0 u1ed6 u1ed4 u00d5 u1e4c u022c u1e4e u014c u1e50 u1e52 u014e u022e u0230 u00d6 u022a u1ece u0150  u01d1 u020c u020e u01a0 u1edc u1eda u1ee0 u1ede u1ee2 u1ecc u1ed8 u01ea u01ec u00d8 u01fe u0186 u019f ua74a ua74c u01a2 ua74e u0222 u008c u0152 u009c  u0153 u24c5 uff30 u1e54 u1e56 u01a4 u2c63 ua750 ua752 ua754 u24c6 uff31 ua756 ua758 u024a u24c7 uff32 u0154 u1e58 u0158 u0210 u0212 u1e5a u1e5c u0156 u1e5e u024c u2c64 ua75a ua7a6 ua782 u24c8 uff33 u1e9e u015a u1e64 u015c u1e60 u0160 u1e66 u1e62 u1e68 u0218 u015e u2c7e ua7a8 ua784 u24c9 uff34 u1e6a u0164 u1e6c u021a u0162 u1e70 u1e6e  u0166 u01ac u01ae  u023e  ua786 ua728 u24ca  uff35 u00d9 u00da  u00db  u0168 u1e78 u016a u1e7a u016c u00dc u01db u01d7 u01d5 u01d9 u1ee6 u016e u0170 u01d3 u0214 u0216 u01af u1eea u1ee8 u1eee u1eec u1ef0 u1ee4 u1e72 u0172 u1e76 u1e74 u0244 u24cb uff36 u1e7c u1e7e u01b2 ua75e u0245 ua760 u24cc uff37 u1e80 u1e82 u0174 u1e86 u1e84 u1e88 u2c72 u24cd uff38 u1e8a u1e8c  u24ce uff39 u1ef2 u00dd u0176 u1ef8 u0232 u1e8e u0178 u1ef6 u1ef4 u01b3 u024e u1efe u24cf uff3a u0179 u1e90 u017b u017d u1e92 u1e94 u01b5 u0224 u2c7f u2c6b ua762 u24d0 uff41 u1e9a u00e0 u00e1 u00e2 u1ea7 u1ea5 u1eab u1ea9 u00e3 u0101 u0103 u1eb1 u1eaf u1eb5 u1eb3 u0227 u01e1 u00e4 u01df u1ea3 u00e5 u01fb u01ce u0201 u0203 u1ea1 u1ead u1eb7 u1e01 u0105 u2c65 u0250 ua733 u00e6 u01fd u01e3 ua735 ua737 ua739 ua73b ua73d u24d1 uff42 u1e03 u1e05 u1e07 u0180 u0183 u0253 u24d2 uff43 u0107 u0109 u010b u010d u00e7 u1e09 u0188 u023c ua73f u2184 u24d3 uff44 u1e0b u010f u1e0d u1e11 u1e13 u1e0f u0111 u018c u0256 u0257 ua77a u01f3 u01c6 u24d4 uff45 u00e8 u00e9 u00ea u1ec1 u1ebf u1ec5 u1ec3 u1ebd u0113 u1e15 u1e17 u0115 u0117 u00eb u1ebb u011b u0205 u0207 u1eb9 u1ec7 u0229 u1e1d u0119 u1e19 u1e1b u0247 u025b u01dd u24d5 uff46 u1e1f u0192 ua77c u24d6 uff47 u01f5 u011d u1e21 u011f u0121 u01e7 u0123 u01e5 u0260 ua7a1 u1d79 ua77f u24d7 uff48 u0125 u1e23 u1e27 u021f u1e25 u1e29 u1e2b u1e96 u0127 u2c68 u2c76 u0265 u0195 u24d8 uff49 u00ec u00ed u00ee u0129 u012b u012d u00ef u1e2f u1ec9 u01d0 u0209 u020b u1ecb u012f u1e2d u0268 u0131 u24d9 uff4a u0135 u01f0 u0249 u24da uff4b u1e31 u01e9 u1e33 u0137 u1e35 u0199 u2c6a ua741 ua743 ua745 ua7a3 u24db uff4c u0140 u013a u013e u1e37 u1e39 u013c u1e3d u1e3b u017f u0142 u019a u026b u2c61 ua749 ua781 ua747 u01c9 u24dc uff4d u1e3f u1e41 u1e43 u0271 u026f u24dd uff4e u01f9 u0144 u00f1 u1e45 u0148 u1e47 u0146 u1e4b u1e49 u019e u0272 u0149 ua791 ua7a5 u01cc u24de uff4f u00f2 u00f3 u00f4 u1ed3 u1ed1 u1ed7 u1ed5 u00f5 u1e4d u022d u1e4f u014d u1e51  u1e53 u014f u022f u0231 u00f6 u022b u1ecf u0151 u01d2 u020d u020f u01a1 u1edd u1edb u1ee1 u1edf u1ee3 u1ecd u1ed9 u01eb u01ed u00f8 u01ff u0254 ua74b ua74d u0275 u01a3 u0223 ua74f u24df uff50 u1e55 u1e57 u01a5 u1d7d ua751 ua753 ua755 u24e0 uff51 u024b ua757 ua759 u24e1 uff52 u0155 u1e59 u0159 u0211 u0213 u1e5b u1e5d u0157 u1e5f u024d u027d ua75b ua7a7 ua783 u24e2 uff53 u00df u015b u1e65 u015d u1e61 u0161 u1e67 u1e63 u1e69 u0219 u015f u023f ua7a9 ua785 u1e9b u24e3 uff54 u1e6b u1e97 u0165 u1e6d u021b u0163 u1e71 u1e6f u0167 u01ad u0288 u2c66 ua787 ua729 u24e4 uff55 u00f9 u00fa u00fb u0169 u1e79 u016b u1e7b u016d u00fc u01dc u01d8 u01d6 u01da u1ee7 u016f u0171 u01d4 u0215 u0217 u01b0 u1eeb u1ee9 u1eef u1eed u1ef1 u1ee5 u1e73  u0173 u1e77 u1e75 u0289 u24e5 uff56 u1e7d u1e7f u028b ua75f u028c ua761 u24e6 uff57 u1e81 u1e83 u0175 u1e87 u1e85 u1e98 u1e89 u2c73 u24e7 uff58 u1e8b u1e8d u24e8 uff59 u1ef3 u00fd u0177 u1ef9 u0233 u1e8f u00ff u1ef7 u1e99 u1ef5 u01b4 u024f u1eff u24e9 uff5a u017a u1e91 u017c u017e u1e93 u1e95 u01b6 u0225 u0240 u2c6c ua763 u0000 u007E scrollWidth linear stop keys Version minimal devicePixelRatio pixel retina isObject amp quot helperStartIndex foundClosedElse initialCtx isFinite Template must ctx_1 Missing nreturn Passed should delimiter delimeter registerHelper unregisterHelper registerPartial unregisterPartial 02 mousewheelReleaseOnEdges mousewheelInvert mousewheelForceToAxis mousewheelSensitivity mousewheelEventsTarged hashnavWatchState swiping paginationClickableClass loading Previous Next Zepto free mode autoheight multirow lockSwipeToNext lockSwipeToPrev lockSwipes unlockSwipeToNext unlockSwipeToPrev unlockSwipes grabbin onImagesReady currentSrc onAutoplayStart onAutoplayStop clientWidth flex onReachBeginning onReachEnd onProgress pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp wp8 duplicatedSlides atan2 onSliderMove 150 onMomentumBounce onSlideNextStart onSlidePrevStart onSlideNextEnd onSlidePrevEnd setHistory setHash _slidePrev disableTouchControl enableTouchControl onSetTransition onSetTranslate MozTransform OTransform MsTransform msTransform forEach onObserverUpdate observe disconnect appendSlide prependSlide removeAllSlides rotateZ 0deg sin scale3d perspectiveOrigin onScrollbarDragStart returnValue onScrollbarDragMove onScrollbarDragEnd sqrt gesturestart gesturechange gestureend touchStart touchEnd doubleTap tabIndex keyCode live assertive atomic onInit setHistoryPopState onDestroy msMaxTouchPoints maxTouchPoints x3c lte endif x3e getElementsByTagName csstransforms3d webkitPerspective MozPerspective OPerspective MsPerspective perspective alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient ongesturestart".split(" "),
0,{}));
//---------- 02fr7.js end ----------

//---------- From 03fac.js ----------
eval(function(d,e,a,c,b,f){b=function(a){return(a<e?"":b(parseInt(a/e)))+(35<(a%=e)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(a){return f[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('19 o(){A8("A9")}1a 1c=1c||{gE:"1.6.0-rc.1"};if(1n 1S!=="1w")1S.1c=1c;if(1n 1T!=="1w"&&1n 24!=="1w"){1c.1T=1T;1c.24=24;24.1c=1c}1g{1c.1T=8t("qB").qB("<!gF kI><kI><kJ></kJ><5g></5g></kI>");if(1c.1T.qC)1c.24=1c.1T.qC();1g 1c.24=1c.1T.Aa}1c.gG="qD"in 1c.1T.5T;1c.af=1n kK!=="1w"&&1n 24==="1w";1c.7J=["qE","2v","1I","1I-1U","1I-kL","1U","1H","1H-kM","1H-gH","1H-kN","1H-kO","1H-1U","1H-1e","id"];1c.bp=96;1c.9m="(?:[-+]?(?:\\\\d+|\\\\d*\\\\.\\\\d+)(?:e[-+]?\\\\d+)?)";if(1n 1j==="1w")1a 1j={};(19(E){E.9n=1s;E.dj=1s;E.Ab=19(a){if(gI(a.9n))E.9n=a.9n;if(gI(a.dj))E.dj=a.dj;if(S===1s&&E.9n)T();if(U===1s&&E.dj)V()};E.2j=19(a,b,c,d){1b G(a,b,c,d,"2j")};E.2m=19(a,b,c,d){1b G(a,b,c,d,"2m")};E.Ac=19(a){1b 1s};E.6W=19(a){if(!a)1b;if(a.dk)a.dk();a.kP=1l;a.kQ=0};E.kR=19(a){if(!a)1b;if(a.9o)a.9o();1g if(a.qF)a.qF();1g a.Ad=1s};E.9p=19(a){E.6W(a);E.kR(a)};E.57=19(){1a a=1T.qG;if(!a)1b;1a b=1T.qG.6y;if(b==="Ae"||b==="Af"||a.Ag==="1l")if(a.57)a.57()};E.gJ=19(a,b){if(1n a==="2V"){b=a;a=24}b="on"+b;if(b in a)1b 1l;if(!a.6a)a=1T.5A("dl");if(a.6a&&a.kS){a.6a(b,"");1a c=1n a[b]==="19";if(1n a[b]!=="1w")a[b]=1z;a.kS(b);1b c}};1a F=19(a){if(!a||1n a!=="1D")1b a;1a b=1k a.7K;1i(1a c in a)if(!a[c]||1n a[c]!=="1D")b[c]=a[c];1g b[c]=F(a[c]);1b b};1a G=19(d,e,f,g,h,i){g=g||{};if(ag(d)==="[1D 2x]"){1a j=d;d=j.1u;3i j.1u;if(j.1A&&j.2y){e=j.1A;3i j.1A;f=j.2y;3i j.2y;1i(1a l in j)g[l]=j[l]}1g{1i(1a m in j){1a p=j[m];if(1n p==="19")3a;g[m]=p}1a q={};1i(1a l in j){1a m=l.3o(",");1a o=j[l];1a r={};1i(1a k in g)r[k]=g[k];if(1n o==="19")1a f=o;1g if(1n o.2y==="19"){1a f=o.2y;1i(1a k in o){if(1n o[k]==="19")3a;r[k]=o[k]}}1g 3a;1i(1a n=0;n<m.1f;n++)q[l]=1j.2j(d,m[n],f,r,h)}1b q}}if(!d||!e||!f)1b;if(1n d==="2V"&&e==="Ah")if(24.Ai){e="Aj";d=24}1g{1a s=(1k 5h).7L();1a t=g.6z;1a u=g.Ak||ah/60;1a v=24.Al(19(){if((1k 5h).7L()-s>t)24.qH(v);if(1T.qI(d)){24.qH(v);6A(f,1)}},u);1b}if(1n d==="2V"){d=1T.Am(d);if(d.1f===0)1b I("An 1u on 2y!",2S);if(d.1f===1)d=d[0]}1a w;1a x={};if(d.1f>0&&d!==24){1i(1a y=0,qJ=d.1f;y<qJ;y++){w=G(d[y],e,f,F(g),h);if(w)x[y]=w}1b H(x)}if(1n e==="2V"){e=e.9q();if(e.2X(" ")!==-1)e=e.3o(" ");1g if(e.2X(",")!==-1)e=e.3o(",")}if(1n e!=="2V"){if(1n e.1f==="3Y")1i(1a z=0,qK=e.1f;z<qK;z++){w=G(d,e[z],f,F(g),h);if(w)x[e[z]]=w}1g 1i(1a l in e){if(1n e[l]==="19")w=G(d,l,e[l],F(g),h);1g w=G(d,l,e[l].2y,F(e[l]),h);if(w)x[l]=w}1b H(x)}1g if(e.2X("on")===0)e=e.dm(2);if(1n d!=="1D")1b I("Ao is gK 5i!",2S);if(1n f!=="19")1b I("Ap is gK a 19!",2S);1a A=g.qL||1s;1a B=P(d)+"."+P(f)+"."+(A?1:0);if(E.2b&&E.2b.2Y[e]){B=e+B;if(h==="2m"){if(!N[B])1b;N[B].2m();3i N[B]}1g if(h==="2j"){if(N[B]){N[B].2j();1b N[B]}if(g.kT&&!E.9n){1a C=f;f=19(a,b){1i(1a c in b)a[c]=b[c];1b C.1V(d,a)}}g.2W=e;g.1u=d;g.2y=f;g.qM=i;N[B]=E.2z[e](g)}1b N[B]}1g{1a D=M(e);1i(1a n=0,8u;n<D.1f;n++){e=D[n];8u=e+"."+B;if(h==="2m"){if(!N[8u])3a;d[R](e,f,A);3i N[8u]}1g if(h==="2j"){if(N[8u])1b N[8u];d[Q](e,f,A);N[8u]={id:8u,1A:e,1u:d,2y:f,2m:19(){1i(1a n=0;n<D.1f;n++)E.2m(d,D[n],f,g)}}}}1b N[8u]}};1a H=19(b){1b{2m:19(){1i(1a a in b)b[a].2m()},2j:19(){1i(1a a in b)b[a].2j()}}};1a I=19(a,b){if(1n 6X==="1w")1b;if(1n 6X.kU==="1w")1b;6X.kU(a,b)};1a J={"kV":["qN","qO","qP"],"9r":["bq","9s","bs"],"5j":["4T","47","4y"]};1a K={"qN":0,"qO":1,"qP":2,"bq":0,"9s":1,"bs":2,"4T":0,"47":1,"4y":2};1a L=19(){E.6Y={};if(24.kW.Aq)E.6Y.kV=1l;if(E.gJ("bq"))E.6Y.9r=1l;if(E.gJ("4T"))E.6Y.5j=1l}();1a M=19(){1b 19(a){1a b=1T.5U?"":"on";1a c=K[a];if(gI(c)){1a d=[];1i(1a e in E.6Y)d.1C(b+J[e][c]);1b d}1g 1b[b+a]}}();1a N={};1a O=0;1a P=19(a){if(a===24)1b"#24";if(a===1T)1b"#1T";if(!a.kX)a.kX="e"+O++;1b a.kX};1a Q=1T.5U?"5U":"ai";1a R=1T.7p?"7p":"dn";E.qQ=19(a,b,c){1a d=b.2W;1a e=b.1u;1a f=a.6Z||E.2z.5k(a);if(f.1f){1a g=f[0];b.Ar=c?[]:f;b.3j=g.3j;b.3p=g.3p;b.x=b.3j;b.y=b.3p}1a h=1T.As("70");h.At(d,1l,1l);h.Au=a;1i(1a k in b){if(k==="1u")3a;h[k]=b[k]}1a i=h.1A;if(E.2b&&E.2b.2Y[i])b.dp.1V(e,h,b,1s)};1a S=1s;1a T=19(){if(!24.qR)1b;1a k=19(i){1a j=19(f){1a g=f+"Av";1a h=i[g];i[g]=19(a,b,c){if(E.2b&&E.2b.2Y[a]){1a d=c;if(1n c==="1D")d.kT=1l;1g d={kT:1l,qL:c};G(W,a,b,d,f,1l)}1g{1a e=M(a);1i(1a n=0;n<e.1f;n++)h.1V(W,e[n],b,c)}}};j("2j");j("2m")};if(kW.qS.4f(/Aw/)){k(Ax.1v);k(Ay.1v)}1g k(qR.1v);k(1T);k(24)};1a U=1s;1a V=19(){1a d=Az.1v;d.7p=19(a,b,c){1i(1a n=0,1f=W.1f;n<1f;n++)W[n].7p(a,b,c)};d.5U=19(a,b,c){1i(1a n=0,1f=W.1f;n<1f;n++)W[n].5U(a,b,c)}};1b E})(1j);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(t){t.9t=19(b,c){b.1u=b.1u||24;b.3k=b.1u.gL||b.1u;b.71=b.71||b.3c||1;b.7M=b.7M||b.3c||6B;b.6b=b.6b||"qT";3i b.3c;c=c||{};c.dq=1l;c.2W=b.2W;c.1u=b.1u;c.qU=b.qU;if(1j.9n&&b.qM){b.dp=b.2y;b.2y=1j.qQ}1a d=0;1a e=c.2W.2X("5l")===0&&1j.9n?"5l":"5j";if(b.dp)c.dp=b.dp;c.2y=b.2y;c.2z=19(a){c.gM=b.2y;b.2y=a;a(b.6C,c)};c.2j=19(){if(c.dq===1l)1b;if(b.4J)1j.2j(b.1u,e+"dr",b.4J);if(b.3v)1j.2j(b.3k,e+"3q",b.3v);if(b.3C)1j.2j(b.3k,e+"up",b.3C);c.dq=1l};c.2m=19(){if(c.dq===1s)1b;if(b.4J)1j.2m(b.1u,e+"dr",b.4J);if(b.3v)1j.2m(b.3k,e+"3q",b.3v);if(b.3C)1j.2m(b.3k,e+"up",b.3C);c.ds();c.dq=1s};c.AA=19(a){if(b.3v&&(!a||a.3q))1j.2m(b.3k,e+"3q",b.3v);if(b.3C&&(!a||a.up))1j.2m(b.3k,e+"up",b.3C);d=b.3c;b.3c=0};c.AB=19(a){if(b.3v&&(!a||a.3q))1j.2j(b.3k,e+"3q",b.3v);if(b.3C&&(!a||a.up))1j.2j(b.3k,e+"up",b.3C);b.3c=d};c.ds=19(){b.4g={};b.3c=0};1b c};1a u=1j.6Y;1j.gN=!!u.5j;1j.gO=!!u.9r;1j.gP=!!u.kV;t.aj=19(e,f,g){1a h=(e.1A||"4T").8v();if(h.2X("AC")===0){1j.gN=1l;1j.gP=1s;1j.gO=1s}1g if(h.2X("AD")===0){1j.gN=1s;1j.gP=1l;1j.gO=1s}1g if(h.2X("AE")===0){1j.gN=1s;1j.gP=1s;1j.gO=1l}1a j=19(a,b){1a c=g.6c;1a d=l[b]={};5m(g.6b){1x"kY":d.2q=0;d.2n=0;1y;1x"qV":d.2q=a.3j;d.2n=a.3p;1y;1x"qW":d.2q=a.3j;d.2n=a.3p;1y;1x"3q":d.2q=a.3j-c.x1;d.2n=a.3p-c.y1;1y;9u:d.2q=c.x1-c.5V;d.2n=c.y1-c.4U;1y}1a x=a.3j-d.2q;1a y=a.3p-d.2n;d.ak=0;d.3l=1;d.qX=d.kZ=(1k 5h).7L();d.3q={x:x,y:y};d.4h={x:x,y:y};g.3c++};g.6C=e;if(f.gM){g.2y=f.gM;3i f.gM}1a k=!g.3c;1a l=g.4g;1a m=e.6Z||t.5k(e);1a n=m.1f;1i(1a i=0;i<n;i++){1a o=m[i];1a p=o.6d||6B;if(g.3c){if(g.3c>=g.7M){1a q=[];1i(1a p in g.4g)q.1C(p);f.6d=q.2A(",");1b k}1a r=0;1i(1a s in l){if(l[s].up){3i l[s];j(o,p);g.9p=1l;1y}r++}if(l[p])3a;j(o,p)}1g{l=g.4g={};f.6c=g.6c=t.l0(g.1u);g.3c=0;g.9p=1s;j(o,p)}}1a q=[];1i(1a p in g.4g)q.1C(p);f.6d=q.2A(",");1b k};t.al=19(a,b,c,d){1a e=a.am||[];1a f=e.1f;1a g={};1i(1a i=0;i<f;i++){1a h=e[i];1a j=h.6d;g[j||6B]=1l}1i(1a j in c.4g){1a k=c.4g[j];if(g[j]||k.up)3a;if(d)d({3j:k.3j,3p:k.3p,6Z:[{3j:k.3j,3p:k.3p,6d:j==="6B"?6B:j}]},"up");k.up=1l;c.3c--}if(c.3c!==0)1b 1s;1a l=[];c.dt=0;1i(1a j in c.4g){c.dt++;l.1C(j)}b.6d=l.2A(",");1b 1l};t.5k=19(c){if(1n c.3j!=="1w")t.5k=19(a){1b 3w({1A:"5j",x:a.3j,y:a.3p,3j:a.3j,3p:a.3p,6d:a.AF||6B})};1g t.5k=19(a){1a b=1T.5T;a=a||24.6C;1b 3w({1A:"5j",x:a.bt+b.5V,y:a.bu+b.4U,3j:a.bt+b.5V,3p:a.bu+b.4U,6d:6B})};1b t.5k(c)};t.du=19(c){if("qD"in 24){1a d=0;1a e=0;t.du=19(a){1a b=a.6Z;if(b&&b.1f)1b{x:d=b[0].3j,y:e=b[0].3p};1g 1b{x:d,y:e}}}1g if(1n c.3j!=="1w"&&1n c.3p!=="1w")t.du=19(a){1b{x:a.3j,y:a.3p}};1g t.du=19(a){1a b=1T.5T;a=a||24.6C;1b{x:a.bt+b.5V,y:a.bu+b.4U}};1b t.du(c)};1a v=19(o,a){1a n=2Z(o.gQ(a),10);1b gI(n)?n:0};t.l0=19(o){if(o===24||o===1T)o=1T.5g;1a a={};1a b=o.gR();a.1e=b.1e;a.1h=b.1h;a.x1=b.1p;a.y1=b.1r;a.1O=b.1e/o.AG||1;a.1W=b.1h/o.qY||1;a.5V=0;a.4U=0;1a c=24.gS(o);1a d=c.gQ("bv-AH")==="bw-bv";if(d===1s){1a e=v(c,"bw-1p-1e");1a f=v(c,"bw-3K-1e");1a g=v(c,"bw-6e-1e");1a h=v(c,"bw-1r-1e");a.bw=[e,f,h,g];a.x1+=e;a.y1+=h;a.1e-=f+e;a.1h-=g+h}a.x2=a.x1+a.1e;a.y2=a.y1+a.1h;1a i=c.gQ("6b");1a j=i==="gT"?o:o.4m;3b(j!==1z){if(j===1T.5g)1y;if(j.4U===1w)1y;1a c=24.gS(j);1a i=c.gQ("6b");if(i==="kY");1g if(i==="gT"){a.4U-=j.4m.4U;a.5V-=j.4m.5V;1y}1g{a.5V+=j.5V;a.4U+=j.4U}j=j.4m}a.l1=24.qZ!==1w?24.qZ:(1T.5T||1T.5g.4m||1T.5g).5V;a.l2=24.r0!==1w?24.r0:(1T.5T||1T.5g.4m||1T.5g).4U;a.5V-=a.l1;a.4U-=a.l2;1b a};(19(){1a c=kW.qS.9q();1a d=c.2X("AI")!==-1;1a e;if(d&&c.2X("AJ")!==-1)e={91:1l,93:1l};1g if(d&&c.2X("AK")!==-1)e={AL:1l};1g e={17:1l};(t.AM=19(){1j.r3=t.r3=1s;1j.8w=t.8w=1s;1j.gU=t.gU=1s;1j.bx=t.bx=1s;1j.5B=t.5B=1s;1j.7q=t.7q=1s})();t.AN=19(a){1a b=a.1A==="r4";if(a.7N===27)1j.gU=t.gU=b;if(e[a.7N])1j.8w=t.8w=b;1j.bx=t.bx=a.bx;1j.5B=t.5B=a.5B;1j.7q=t.7q=a.7q}})();1b t}(1j.2z);if(1n 1j==="1w")1a 1j={};1j.r5=19(){1a g=24.r5||24.AO||24.AP;1a h=!g&&19(){1a p=1T.5A("p");1a a=1s;1a b=19(){a=1l};if(p.5U)p.5U("r6",b,1s);1g if(p.ai)p.ai("AQ",b);1g 1b 1s;p.6a("id","1u");1b a}();1b 19(b,c){if(g){1a d={AR:1s,l3:1l};1a f=1k g(19(a){a.4z(19(e){c.1V(e.1u,e.AS)})});f.dv(b,d)}1g if(h)1j.2j(b,"r6",19(e){c.1V(b,e.AT)});1g if("AU"in 1T.5g)1j.2j(b,"AV",19(e){c.1V(b,24.6C.AW)})}}();if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(j){j.bz=19(h){h.2W=h.2W||"bz";h.7M=h.7M||h.3c||1;h.4J=19(a){if(j.aj(a,i,h))1j.2j(h.1u,"4y",h.3C)};h.3C=19(a){if(j.al(a,i,h)){1j.2m(h.1u,"4y",h.3C);1a b=a.6Z||j.5k(a);1a c=b[0];1a d=h.6c;1a e=j.l0(h.1u);1a y=c.3p-e.l2;1a x=c.3j-e.l1;if(x>d.x1&&y>d.y1&&x<d.x2&&y<d.y2&&d.4U===e.4U){1i(1a f in h.4g)1y;1a g=h.4g[f];i.x=g.4h.x;i.y=g.4h.y;h.2y(a,i)}}};1a i=j.9t(h);i.5W="bz";1j.2j(h.1u,"4T",h.4J);1b i};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.bz=j.bz;1b j}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(k){k.gV=k.bA=19(f){f.2W=f.2W||"gV";f.7M=f.7M||f.3c||1;1a g=r7;1a h,8x,6z;1a i,an;f.4J=19(a){1a b=a.6Z||k.5k(a);if(h&&!8x){an=b[0];8x=(1k 5h).7L()-h}1g{i=b[0];h=(1k 5h).7L();8x=0;7O(6z);6z=6A(19(){h=0},g)}if(k.aj(a,j,f)){1j.2j(f.1u,"47",f.3v).2y(a);1j.2j(f.1u,"4y",f.3C)}};f.3v=19(a){if(h&&!8x){1a b=a.6Z||k.5k(a);an=b[0]}1a c=f.6c;1a d=an.3j-c.x1;1a e=an.3p-c.y1;if(!(d>0&&d<c.1e&&e>0&&e<c.1h&&1m.2r(an.3j-i.3j)<=25&&1m.2r(an.3p-i.3p)<=25)){1j.2m(f.1u,"47",f.3v);7O(6z);h=8x=0}};f.3C=19(a){if(k.al(a,j,f)){1j.2m(f.1u,"47",f.3v);1j.2m(f.1u,"4y",f.3C)}if(h&&8x){if(8x<=g){j.5W=f.2W;1i(1a b in f.4g)1y;1a c=f.4g[b];j.x=c.4h.x;j.y=c.4h.y;f.2y(a,j)}7O(6z);h=8x=0}};1a j=k.9t(f);j.5W="bA";1j.2j(f.1u,"4T",f.4J);1b j};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.gV=k.gV;1j.2b.2Y.bA=k.bA;1b k}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(l){l.AX=19(c,d){l.7P({6C:d,1u:c,6b:"3q",2y:19(a,b){c.2f.1p=b.x+"px";c.2f.1r=b.y+"px";1j.kR(a)}})};l.7P=19(j){j.2W="7P";j.4J=19(a){if(l.aj(a,k,j))if(!j.l4){1j.2j(j.3k,"47",j.3v);1j.2j(j.3k,"4y",j.3C)}j.3v(a,"dr")};j.3v=19(a,b){if(!j.4g)1b j.4J(a);1a c=j.6c;1a d=a.6Z||l.5k(a);1a e=d.1f;1i(1a i=0;i<e;i++){1a f=d[i];1a g=f.6d||6B;1a h=j.4g[g];if(!h)3a;h.3j=f.3j;h.3p=f.3p;k.5W=b||"3q";k.6d=g;k.4h=h.4h;k.3c=j.3c;if(j.6b==="qV"){k.x=h.3j-h.2q;k.y=h.3p-h.2n;h.2q=h.3j;h.2n=h.3p}1g{k.x=h.3j-h.2q;k.y=h.3p-h.2n}j.2y(a,k)}};j.3C=19(a){if(l.al(a,k,j,j.3v))if(!j.l4){1j.2m(j.3k,"47",j.3v);1j.2m(j.3k,"4y",j.3C)}};1a k=l.9t(j);if(j.6C)j.4J(j.6C);1g{1j.2j(j.1u,"4T",j.4J);if(j.l4){1j.2j(j.3k,"47",j.3v);1j.2j(j.3k,"4y",j.3C)}}1b k};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.7P=l.7P;1b l}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(u){1a v=1m.4V/ao;1a w=19(a,b){1a c=0;1a d=0;1a e=0;1i(1a f in b){1a g=b[f];if(g.up)3a;c+=g.3q.x;d+=g.3q.y;e++}a.x=c/=e;a.y=d/=e;1b a};u.2W=19(s){s.2W=s.2W||"2W";s.71=s.71||s.3c||2;s.4J=19(a){1a b=s.3c;if(u.aj(a,t,s)){1j.2j(s.3k,"47",s.3v);1j.2j(s.3k,"4y",s.3C)}if(s.3c===s.71&&b!==s.3c){t.3c=s.71;t.3l=1;t.ak=0;t.5W="4h";1a c="";1i(1a d in s.4g)c+=d;t.6d=48(c);w(t,s.4g);s.2y(a,t)}};s.3v=19(a,b){1a c=s.6c;1a d=s.4g;1a e=a.6Z||u.5k(a);1a f=e.1f;1i(1a i=0;i<f;i++){1a g=e[i];1a h=g.6d||6B;1a j=d[h];if(!j)3a;j.3q.x=g.3j-c.x1;j.3q.y=g.3p-c.y1}if(s.3c<s.71)1b;1a e=[];1a k=0;1a l=0;w(t,d);1i(1a h in d){1a g=d[h];if(g.up)3a;1a m=g.4h;if(!m.73){1a n=m.x-t.x;1a o=m.y-t.y;m.73=1m.4W(n*n+o*o);m.2T=1m.74(n,o)/v}1a n=g.3q.x-t.x;1a o=g.3q.y-t.y;1a p=1m.4W(n*n+o*o);k+=p/m.73;1a q=1m.74(n,o)/v;1a r=(m.2T-q+4X)%4X-ao;g.gW=g.gX;g.gX=r>0?r:-r;if(1n g.gW!=="1w"){if(r>0)g.ak+=g.gX-g.gW;1g g.ak-=g.gX-g.gW;l+=g.ak}e.1C(g.3q)}t.am=e;t.3c=s.3c;t.3l=k/s.3c;t.ak=l/s.3c;t.5W="r8";s.2y(a,t)};s.3C=19(a){1a b=s.3c;if(u.al(a,t,s)){1j.2m(s.3k,"47",s.3v);1j.2m(s.3k,"4y",s.3C)}if(b===s.71&&s.3c<s.71){t.3c=s.3c;t.5W="7r";s.2y(a,t)}};1a t=u.9t(s);1j.2j(s.1u,"4T",s.4J);1b t};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.2W=u.2W;1b u}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(e){e.gY=e.gZ=e.h0=19(b){b.2W=b.2W||"5l";if(b.1u.r9)1b;1a c=1l;b.4J=19(a){c=1s;d.2W="gY";b.2y(a,d)};b.3v=19(a){d.2W="gZ";b.2y(a,d,c)};b.3C=19(a){c=1l;d.2W="h0";b.2y(a,d,1l)};1a d=e.9t(b);1j.2j(b.1u,"4T",b.4J);1j.2j(b.1u,"47",b.3v);1j.2j(b.3k,"4y",b.3C);b.1u.r9=1l;1b d};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.gY=e.gY;1j.2b.2Y.gZ=e.gZ;1j.2b.2Y.h0=e.h0;1b e}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(w){w.bB=19(k){1a l={2W:"h1",dw:{},l5:{},1u:k.1u,2y:k.2y,2m:19(){24.7p("h1",v,1s)}};1a m=4;1a p=ah;1a q=l6;1a r=3;1a s=(1k 5h).7L();1a t={x:0,y:0,z:0};1a u={x:{ap:0,3Z:0},y:{ap:0,3Z:0},z:{ap:0,3Z:0}};1a v=19(e){1a a=.8;1a o=e.l5;t.x=a*t.x+(1-a)*o.x;t.y=a*t.y+(1-a)*o.y;t.z=a*t.z+(1-a)*o.z;l.l5=t;l.dw.x=o.x-t.x;l.dw.y=o.y-t.y;l.dw.z=o.z-t.z;if(k.2W==="h1"){k.2y(e,l);1b}1a b="AY";1a c=(1k 5h).7L();1i(1a n=0,1f=b.1f;n<1f;n++){1a d=b[n];1a f=l.dw[d];1a g=u[d];1a h=1m.2r(f);if(c-s<p)3a;if(h>m){1a i=c*f/h;1a j=1m.2r(i+g.3Z);if(g.3Z&&j<q){g.3Z=i;g.ap++;if(g.ap===r){k.2y(e,l);s=c;g.3Z=0;g.ap=0}}1g{g.3Z=i;g.ap=1}}}};if(!24.5U)1b;24.5U("h1",v,1s);1b l};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.bB=w.bB;1b w}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(s){1a t=1m.4V/ao;s.dz=19(q){q.h2=q.h2||90;q.5n=q.5n||1;q.2W=q.2W||"dz";q.4J=19(a){if(s.aj(a,r,q)){1j.2j(q.3k,"47",q.3v).2y(a);1j.2j(q.3k,"4y",q.3C)}};q.3v=19(a){1a b=a.6Z||s.5k(a);1a c=b.1f;1i(1a i=0;i<c;i++){1a d=b[i];1a e=d.6d||6B;1a o=q.4g[e];if(!o)3a;o.3q.x=d.3j;o.3q.y=d.3p;o.kZ=(1k 5h).7L()}};q.3C=19(a){if(s.al(a,r,q)){1j.2m(q.3k,"47",q.3v);1j.2m(q.3k,"4y",q.3C);1a b;1a c;1a d;1a e;1a f={x:0,y:0};1a g=0;1a h=0;1a i=0;1i(1a j in q.4g){1a k=q.4g[j];1a l=k.3q.x-k.4h.x;1a m=k.3q.y-k.4h.y;g+=k.3q.x;h+=k.3q.y;f.x+=k.4h.x;f.y+=k.4h.y;i++;1a n=1m.4W(l*l+m*m);1a o=k.kZ-k.qX;1a e=1m.74(l,m)/t+ao;1a c=o?n/o:0;if(1n d==="1w"){d=e;b=c}1g if(1m.2r(e-d)<=20){d=(d+e)/2;b=(b+c)/2}1g 1b}1a p=q.dt;if(q.71<=p&&q.7M>=p)if(b>q.5n){f.x/=i;f.y/=i;r.4h=f;r.x=g/i;r.y=h/i;r.2T=-(((d/q.h2+.5>>0)*q.h2||4X)-4X);r.AZ=b;r.3c=p;r.5W="dz";q.2y(a,r)}}};1a r=s.9t(q);1j.2j(q.1u,"4T",q.4J);1b r};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.dz=s.dz;1b s}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(o){o.8y=19(a){a.2W="8y";1b o.bC(a)};o.bC=19(l){l.dA=l.dA||aq;l.6z=l.6z||ra;l.l7=l.l7||10;l.2W=l.2W||"bC";1a m,6z;l.4J=19(d){if(o.aj(d,n,l)){m=(1k 5h).7L();1j.2j(l.3k,"47",l.3v).2y(d);1j.2j(l.3k,"4y",l.3C);if(l.2W!=="8y")1b;6z=6A(19(){if(d.kP&&++d.kQ>1)1b;1a a=0;1i(1a b in l.4g){1a c=l.4g[b];if(c.7r===1l)1b;if(l.9p)1b;a++}if(l.71<=a&&l.7M>=a){n.5W="4h";n.3c=a;n.x=c.4h.x;n.y=c.4h.y;l.2y(d,n)}},l.dA)}};l.3v=19(a){1a b=l.6c;1a c=a.6Z||o.5k(a);1a d=c.1f;1i(1a i=0;i<d;i++){1a e=c[i];1a f=e.6d||6B;1a g=l.4g[f];if(!g)3a;1a x=e.3j-b.x1;1a y=e.3p-b.y1;1a h=x-g.4h.x;1a j=y-g.4h.y;1a k=1m.4W(h*h+j*j);if(!(x>0&&x<b.1e&&y>0&&y<b.1h&&k<=l.l7)){1j.2m(l.3k,"47",l.3v);l.9p=1l;1b}}};l.3C=19(a){if(o.al(a,n,l)){7O(6z);1j.2m(l.3k,"47",l.3v);1j.2m(l.3k,"4y",l.3C);if(a.kP&&++a.kQ>1)1b;if(l.2W==="8y"){if(n.5W==="4h"){n.5W="7r";l.2y(a,n)}1b}if(l.9p)1b;if((1k 5h).7L()-m>l.6z)1b;1a b=l.dt;if(l.71<=b&&l.7M>=b){n.5W="bC";n.3c=l.dt;l.2y(a,n)}}};1a n=o.9t(l);1j.2j(l.1u,"4T",l.4J);1b n};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.bC=o.bC;1j.2b.2Y.8y=o.8y;1b o}(1j.2z);if(1n 1j==="1w")1a 1j={};if(1n 1j.2z==="1w")1j.2z={};1j.2z=19(o){o.B0=19(c){if(!c)1b;if(1n c==="2V")c=1T.qI(c);1j.2j(c,"dB",19(a,b){b.rb();1j.6W(a)})};o.dB=19(f){1a g;1a h=f.6z||B1;1a i=0;1a j={2W:"dB",5W:"4h",bD:0,1u:f.1u,2y:f.2y,rb:19(a){1a b=W.1u;1a c=b.4U;1a d=c+b.qY;1a e=b.B2;if(d===e&&W.bD<=0)1j.9p(a);1g if(c===0&&W.bD>=0)1j.9p(a);1j.6W(a)},2j:19(){f.1u[l](n,k,1s)},2m:19(){f.1u[m](n,k,1s)}};1a k=19(a){a=a||24.6C;j.5W=i++?"r8":"4h";j.bD=a.rd?a.rd*-20:a.bD;f.2y(a,j);7O(g);g=6A(19(){i=0;j.5W="7r";j.bD=0;f.2y(a,j)},h)};1a l=1T.5U?"5U":"ai";1a m=1T.7p?"7p":"dn";1a n=1j.gJ("h3")?"h3":"B3";f.1u[l](n,k,1s);1b j};1j.2b=1j.2b||{};1j.2b.2Y=1j.2b.2Y||{};1j.2b.2Y.dB=o.dB;1b o}(1j.2z);if(1n 70==="1w")1a 70={};if(1n 70.2z==="1w")70.2z={};70.2z=19(d){d.9v=19(a){1a b={2W:"l8",5C:1z,1P:24.9v,1u:a.1u,2y:a.2y,2m:19(){24.7p("l8",c,1s)}};1a c=19(e){b.5C=b.1P;b.1P=24.9v;if(b.5C!==1z&&b.5C!=b.1P){a.2y(e,b);1b}};if(24.B4)24.5U("l8",c,1s);1b b};70.2b=70.2b||{};70.2b.2Y=70.2b.2Y||{};70.2b.2Y.9v=d.9v;1b d}(70.2z);1c.l9=1c.24.l9||1c.24.B5||1c.24.B6||1;(19(){19 la(a,b){if(!W.76[a])1b;if(b)1c.1d.7Q(W.76[a],b);1g W.76[a].1f=0}19 dv(a,b){if(!W.76)W.76={};if(2S.1f===1)1i(1a c in a)W.on(c,a[c]);1g{if(!W.76[a])W.76[a]=[];W.76[a].1C(b)}1b W}19 h4(a,b){if(!W.76)1b;if(2S.1f===0)W.76={};1g if(2S.1f===1&&1n 2S[0]==="1D")1i(1a c in a)la.1V(W,c,a[c]);1g la.1V(W,a,b);1b W}19 1Y(a,b){if(!W.76)1b;1a c=W.76[a];if(!c)1b;1i(1a i=0,1t=c.1f;i<1t;i++)c[i].1V(W,b||{});1b W}1c.bE={dv:dv,h4:h4,1Y:1Y,on:dv,rf:h4,B7:1Y}})();1c.lb={2j:19(){W.1Q.1C.31(W.1Q,2S);1i(1a i=0,1f=2S.1f;i<1f;i++)W.h5(2S[i]);W.6D&&W.2w();1b W},rg:19(a,b,c){1a d=W.4K();if(c)d[b]=a;1g d.ar(b,0,a);W.h5(a);W.6D&&W.2w();1b W},2m:19(){1a a=W.4K(),2B;1i(1a i=0,1f=2S.1f;i<1f;i++){2B=a.2X(2S[i]);if(2B!==-1){a.ar(2B,1);W.lc(2S[i])}}W.6D&&W.2w();1b W},as:19(a,b){1a c=W.4K(),i=c.1f;3b(i--)a.1V(b,c[i],i,c);1b W},4K:19(a){if(1n a==="1w")1b W.1Q;1b W.1Q.5D(19(o){1b o.1A===a})},h6:19(a){1b W.4K()[a]},B8:19(){1b W.4K().1f===0},at:19(){1b W.4K().1f},bF:19(a){1b W.4K().2X(a)>-1},4n:19(){1b W.4K().dC(19(a,b){a+=b.4n?b.4n():0;1b a},0)}};(19(j){1a k=1m.4W,74=1m.74,bG=1m.bG,5X=1m.5X,dD=1m.4V/ao;1c.1d={7Q:19(a,b){1a c=a.2X(b);if(c!==-1)a.ar(c,1);1b a},au:19(a,b){1b 1m.4L(1m.rh()*(b-a+1))+a},4Y:19(a){1b a*dD},9w:19(a){1b a/dD},dE:19(a,b,c){a.ld(b);1a d=1m.41(c),4A=1m.4A(c),rx=a.x*4A-a.y*d,ry=a.x*d+a.y*4A;1b(1k 1c.1Z(rx,ry)).ri(b)},5o:19(p,t,a){if(a)1b 1k 1c.1Z(t[0]*p.x+t[2]*p.y,t[1]*p.x+t[3]*p.y);1b 1k 1c.1Z(t[0]*p.x+t[2]*p.y+t[4],t[1]*p.x+t[3]*p.y+t[5])},le:19(a){1a b=[a[0].x,a[1].x,a[2].x,a[3].x],58=1c.1d.5E.2g(b),bH=1c.1d.5E.29(b),1e=1m.2r(58-bH),lf=[a[0].y,a[1].y,a[2].y,a[3].y],4B=1c.1d.5E.2g(lf),bI=1c.1d.5E.29(lf),1h=1m.2r(4B-bI);1b{1p:58,1r:4B,1e:1e,1h:1h}},bJ:19(t){1a a=1/(t[0]*t[3]-t[1]*t[2]),r=[a*t[3],-a*t[1],-a*t[2],a*t[0]],o=1c.1d.5o({x:t[4],y:t[5]},r,1l);r[4]=-o.x;r[5]=-o.y;1b r},2G:19(a,b){1b 2Z(bK(a).2G(b))},77:19(a,b){1a c=/\\D{0,2}$/.h7(a),3Y=2Z(a);if(!b)b=1c.5p.h8;5m(c[0]){1x"mm":1b 3Y*1c.bp/25.4;1x"cm":1b 3Y*1c.bp/2.54;1x"in":1b 3Y*1c.bp;1x"pt":1b 3Y*1c.bp/72;1x"pc":1b 3Y*1c.bp/72*12;1x"em":1b 3Y*b;9u:1b 3Y}},rj:19(){1b 1s},lg:19(a,b){a=1c.1d.2V.h9(a.4C(0).8v()+a.3r(1));1b 1c.1d.rk(b)[a]},rk:19(a){if(!a)1b 1c;1a b=a.3o("."),1t=b.1f,5F=j||1c.24;1i(1a i=0;i<1t;++i)5F=5F[b[i]];1b 5F},7s:19(a,b,c,d){if(!a){b&&b.1V(c,a);1b}1a e=1c.1d.ha();e.av=19(){b&&b.1V(c,e);e=e.av=e.lh=1z};e.lh=19(){1c.7t("li hb "+e.3D);b&&b.1V(c,1z,1l);e=e.av=e.lh=1z};if(a.2X("1o")!==0&&1n d!=="1w")e.6E=d;e.3D=a},dF:19(e,f,g,h){e=e||[];19 hc(){if(++rl===lj)f&&f(i)}1a i=[],rl=0,lj=e.1f;if(!lj){f&&f(i);1b}e.4z(19(o,c){if(!o||!o.1A){hc();1b}1a d=1c.1d.lg(o.1A,g);if(d.8z)d.32(o,19(a,b){if(!b){i[c]=a;h&&h(o,i[c])}hc()});1g{i[c]=d.32(o);h&&h(o,i[c]);hc()}})},rm:19(a,b,c){1a d;d=1k 1c.9x(a,b);if(1n c!=="1w")d.dG(c);1b d},lk:19(a,b,c){if(c&&2x.1v.42.1V(c)==="[1D 3w]")1i(1a i=0,1t=c.1f;i<1t;i++)if(c[i]in a)b[c[i]]=a[c[i]]},5a:19(a,x,y,b,c,d){1a e=b-x,dy=c-y,1t=k(e*e+dy*dy),hd=74(dy,e),dc=d.1f,di=0,he=1l;a.3E();a.4M(x,y);a.6f(0,0);a.4N(hd);x=0;3b(1t>x){x+=d[di++%dc];if(x>1t)x=1t;a[he?"5G":"6f"](x,0);he=!he}a.3f()},6g:19(a){a||(a=1c.1T.5A("1q"));if(!a.2L&&1n ll!=="1w")ll.B9(a);1b a},ha:19(){1b 1c.af?1k(8t("1q").1F):1c.1T.5A("aw")},lm:19(b){1a c=b.1v;1i(1a i=c.6h.1f;i--;){1a d=c.6h[i],ln=d.4C(0).8v()+d.3r(1),lo="1K"+ln,lp="1J"+ln;if(!c[lp])c[lp]=19(a){1b 1k ax(\'1b W.1J("\'+a+\'")\')}(d);if(!c[lo])c[lo]=19(a){1b 1k ax("3Z",\'1b W.1K("\'+a+\'", 3Z)\')}(d)}},ay:19(a,b){b.3E();b.4O();a.3T(b);b.rn()},az:19(a,b,c){1b[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],c?0:a[0]*b[4]+a[2]*b[5]+a[4],c?0:a[1]*b[4]+a[3]*b[5]+a[5]]},Ba:19(a){1a b=bG(a[0]/a[1]),lq=5X(a[0])+5X(a[1]),1O=k(lq),1W=(a[0]*a[3]-a[2]*a[1])/1O,3s=bG((a[0]*a[2]+a[1]*a[3])/lq);1b{2T:b/dD,1O:1O,1W:1W,3s:3s/dD,3F:0}},hf:19(a){1b(ag(a).4f(/19[^{]*\\{([\\s\\S]*)\\}/)||{})[1]},ro:19(a,x,y,b){if(b>0){if(x>b)x-=b;1g x=0;if(y>b)y-=b;1g y=0}1a c=1l,2c=a.3x(x,y,b*2||1,b*2||1);1i(1a i=3,l=2c.1o.1f;i<l;i+=4){1a d=2c.1o[i];c=d<=0;if(c===1s)1y}2c=1z;1b c},lr:19(a){1a b="dI",6i="hg",6F="hg",bL=a.3o(" "),aA;if(bL&&bL.1f){b=bL.dJ();if(b!=="dI"&&b!=="3r"){aA=b;b="dI"}1g if(bL.1f)aA=bL.dJ()}6i=aA!=="4D"?aA.3r(1,4):"4D";6F=aA!=="4D"?aA.3r(5,8):"4D";1b{9y:b,6i:6i,6F:6F}}}})(1n 1S!=="1w"?1S:W);(19(){1a q={},dK={},hh={},hi=3w.1v.2A;19 ls(a,b,c,d,e,f,g){1a h=hi.1V(2S);if(q[h])1b q[h];1a j=1m.4V,th=g*j/ao,bM=1m.41(th),8A=1m.4A(th),lu=0,bN=0;c=1m.2r(c);d=1m.2r(d);1a k=-8A*a*.5-bM*b*.5,py=-8A*b*.5+bM*a*.5,dL=c*c,dM=d*d,lv=py*py,lw=k*k,pl=dL*dM-dL*lv-dM*lw,hj=0;if(pl<0){1a s=1m.4W(1-pl/(dL*dM));c*=s;d*=s}1g hj=(e===f?-1:1)*1m.4W(pl/(dL*lv+dM*lw));1a l=hj*c*py/d,cy=-hj*d*k/c,rp=8A*l-bM*cy+a*.5,rq=bM*l+8A*cy+b*.5,hk=lx(1,0,(k-l)/c,(py-cy)/d),aB=lx((k-l)/c,(py-cy)/d,(-k-l)/c,(-py-cy)/d);if(f===0&&aB>0)aB-=2*j;1g if(f===1&&aB<0)aB+=2*j;1a m=1m.aC(1m.2r(aB/j*2)),49=[],bO=aB/m,mT=8/3*1m.41(bO/4)*1m.41(bO/4)/1m.41(bO/2),hl=hk+bO;1i(1a i=0;i<m;i++){49[i]=rr(hk,hl,8A,bM,c,d,rp,rq,mT,lu,bN);lu=49[i][4];bN=49[i][5];hk=hl;hl+=bO}q[h]=49;1b 49}19 rr(a,b,c,d,e,f,g,h,i,j,k){1a l=hi.1V(2S);if(dK[l])1b dK[l];1a m=1m.4A(a),ly=1m.41(a),dN=1m.4A(b),dO=1m.41(b),lz=c*e*dN-d*f*dO+g,lA=d*e*dN+c*f*dO+h,rs=j+i*(-c*e*ly-d*f*m),rt=k+i*(-d*e*ly+c*f*m),ru=lz+i*(c*e*dO+d*f*dN),rw=lA+i*(d*e*dO-c*f*dN);dK[l]=[rs,rt,ru,rw,lz,lA];1b dK[l]}19 lx(a,b,c,d){1a e=1m.74(b,a),tb=1m.74(d,c);if(tb>=e)1b tb-e;1g 1b 2*1m.4V-(e-tb)}1c.1d.dP=19(a,b,c,d){1a e=d[0],ry=d[1],hd=d[2],rz=d[3],rA=d[4],tx=d[5],ty=d[6],5b=[[],[],[],[]],9z=ls(tx-b,ty-c,e,ry,rz,rA,hd);1i(1a i=0,1t=9z.1f;i<1t;i++){5b[i][0]=9z[i][0]+b;5b[i][1]=9z[i][1]+c;5b[i][2]=9z[i][2]+b;5b[i][3]=9z[i][3]+c;5b[i][4]=9z[i][4]+b;5b[i][5]=9z[i][5]+c;a.8B.31(a,5b[i])}};1c.1d.lB=19(a,b,c,d,e,f,g,h,j){1a k=0,bN=0,7u=[],2D=[],5b=ls(h-a,j-b,c,d,f,g,e),aD=[[],[]];1i(1a i=0,1t=5b.1f;i<1t;i++){7u=78(k,bN,5b[i][0],5b[i][1],5b[i][2],5b[i][3],5b[i][4],5b[i][5]);aD[0].x=7u[0].x+a;aD[0].y=7u[0].y+b;aD[1].x=7u[1].x+a;aD[1].y=7u[1].y+b;2D.1C(aD[0]);2D.1C(aD[1]);k=5b[i][4];bN=5b[i][5]}1b 2D};19 78(d,e,f,g,h,k,l,m){1a n=hi.1V(2S);if(hh[n])1b hh[n];1a o=1m.4W,2g=1m.2g,29=1m.29,2r=1m.2r,bP=[],2D=[[],[]],a,b,c,t,t1,t2,hm,hn;b=6*d-12*f+6*h;a=-3*d+9*f-9*h+3*l;c=3*f-3*d;1i(1a i=0;i<2;++i){if(i>0){b=6*e-12*g+6*k;a=-3*e+9*g-9*k+3*m;c=3*g-3*e}if(2r(a)<1E-12){if(2r(b)<1E-12)3a;t=-c/b;if(0<t&&t<1)bP.1C(t);3a}hm=b*b-4*c*a;if(hm<0)3a;hn=o(hm);t1=(-b+hn)/(2*a);if(0<t1&&t1<1)bP.1C(t1);t2=(-b-hn)/(2*a);if(0<t2&&t2<1)bP.1C(t2)}1a x,y,j=bP.1f,4P=j,mt;3b(j--){t=bP[j];mt=1-t;x=mt*mt*mt*d+3*mt*mt*t*f+3*mt*t*t*h+t*t*t*l;2D[0][j]=x;y=mt*mt*mt*e+3*mt*mt*t*g+3*mt*t*t*k+t*t*t*m;2D[1][j]=y}2D[0][4P]=d;2D[1][4P]=e;2D[0][4P+1]=l;2D[1][4P+1]=m;1a p=[{x:2g.31(1z,2D[0]),y:2g.31(1z,2D[1])},{x:29.31(1z,2D[0]),y:29.31(1z,2D[1])}];hh[n]=p;1b p}1c.1d.78=78})();(19(){1a e=3w.1v.3r;if(!3w.1v.2X)3w.1v.2X=19(a){if(W===Bb 0||W===1z)bQ 1k rB;1a t=2x(W),1t=t.1f>>>0;if(1t===0)1b-1;1a n=0;if(2S.1f>0){n=bK(2S[1]);if(n!==n)n=0;1g if(n!==0&&n!==bK.Bc&&n!==bK.Bd)n=(n>0||-1)*1m.4L(1m.2r(n))}if(n>=1t)1b-1;1a k=n>=0?n:1m.29(1t-1m.2r(n),0);1i(;k<1t;k++)if(k in t&&t[k]===a)1b k;1b-1};if(!3w.1v.4z)3w.1v.4z=19(a,b){1i(1a i=0,1t=W.1f>>>0;i<1t;i++)if(i in W)a.1V(b,W[i],i,W)};if(!3w.1v.5c)3w.1v.5c=19(a,b){1a c=[];1i(1a i=0,1t=W.1f>>>0;i<1t;i++)if(i in W)c[i]=a.1V(b,W[i],i,W);1b c};if(!3w.1v.lC)3w.1v.lC=19(a,b){1i(1a i=0,1t=W.1f>>>0;i<1t;i++)if(i in W&&!a.1V(b,W[i],i,W))1b 1s;1b 1l};if(!3w.1v.lD)3w.1v.lD=19(a,b){1i(1a i=0,1t=W.1f>>>0;i<1t;i++)if(i in W&&a.1V(b,W[i],i,W))1b 1l;1b 1s};if(!3w.1v.5D)3w.1v.5D=19(a,b){1a c=[],ho;1i(1a i=0,1t=W.1f>>>0;i<1t;i++)if(i in W){ho=W[i];if(a.1V(b,ho,i,W))c.1C(ho)}1b c};if(!3w.1v.dC)3w.1v.dC=19(a){1a b=W.1f>>>0,i=0,rv;if(2S.1f>1)rv=2S[1];1g{do{if(i in W){rv=W[i++];1y}if(++i>=b)bQ 1k rB;}3b(1l)}1i(;i<b;i++)if(i in W)rv=a.1V(1z,rv,W[i],i,W);1b rv};19 7R(a,b){1a c=e.1V(2S,2),49=[];1i(1a i=0,1t=a.1f;i<1t;i++)49[i]=c.1f?a[i][b].31(a[i],c):a[i][b].1V(a[i]);1b 49}19 29(c,d){1b lE(c,d,19(a,b){1b a>=b})}19 2g(c,d){1b lE(c,d,19(a,b){1b a<b})}19 lE(a,b,c){if(!a||a.1f===0)1b;1a i=a.1f-1,49=b?a[i][b]:a[i];if(b)3b(i--){if(c(a[i][b],49))49=a[i][b]}1g 3b(i--)if(c(a[i],49))49=a[i];1b 49}1c.1d.5E={7R:7R,2g:2g,29:29}})();(19(){19 1B(a,b){1i(1a c in b)a[c]=b[c];1b a}19 3P(a){1b 1B({},a)}1c.1d.1D={1B:1B,3P:3P}})();(19(){if(!ag.1v.5q)ag.1v.5q=19(){1b W.3d(/^[\\s\\rC]+/,"").3d(/[\\s\\rC]+$/,"")};19 h9(c){1b c.3d(/-+(.)?/g,19(a,b){1b b?b.8v():""})}19 7v(a,b){1b a.4C(0).8v()+(b?a.3r(1):a.3r(1).9q())}19 dQ(a){1b a.3d(/&/g,"&Be;").3d(/"/g,"&Bf;").3d(/\'/g,"&Bg;").3d(/</g,"&lt;").3d(/>/g,"&gt;")}1c.1d.2V={h9:h9,7v:7v,dQ:dQ}})();(19(){1a c=3w.1v.3r,31=ax.1v.31,dR=19(){};if(!ax.1v.4i)ax.1v.4i=19(a){1a b=W,79=c.1V(2S,1),7u;if(79.1f)7u=19(){1b 31.1V(b,W 7a dR?W:a,79.4o(c.1V(2S)))};1g 7u=19(){1b 31.1V(b,W 7a dR?W:a,2S)};dR.1v=W.1v;7u.1v=1k dR;1b 7u}})();(19(){1a h=3w.1v.3r,rD=19(){},rE=19(){1i(1a p in{42:1})if(p==="42")1b 1s;1b 1l}(),rF=19(d,e,f){1i(1a g in e){if(g in d.1v&&1n d.1v[g]==="19"&&(e[g]+"").2X("2t")>-1)d.1v[g]=19(c){1b 19(){1a a=W.7K.dS;W.7K.dS=f;1a b=e[c].31(W,2S);W.7K.dS=a;if(c!=="2u")1b b}}(g);1g d.1v[g]=e[g];if(rE){if(e.42!==2x.1v.42)d.1v.42=e.42;if(e.hp!==2x.1v.hp)d.1v.hp=e.hp}}};19 lF(){}19 2t(a){1a b=W.7K.dS.1v[a];1b 2S.1f>1?b.31(W,h.1V(2S,1)):b.1V(W)}19 2J(){1a a=1z,dT=h.1V(2S,0);if(1n dT[0]==="19")a=dT.rG();19 7b(){W.2u.31(W,2S)}7b.dS=a;7b.rH=[];if(a){lF.1v=a.1v;7b.1v=1k lF;a.rH.1C(7b)}1i(1a i=0,1f=dT.1f;i<1f;i++)rF(7b,dT[i],a);if(!7b.1v.2u)7b.1v.2u=rD;7b.1v.7K=7b;7b.1v.2t=2t;1b 7b}1c.1d.2J=2J})();(19(){1a f="rI";19 dU(a){1a b=3w.1v.3r.1V(2S,1),t,i,1t=b.1f;1i(i=0;i<1t;i++){t=1n a[b[i]];if(!/^(?:19|1D|rI)$/.3m(t))1b 1s}1b 1l}1a g,bR,dV=19(){1a b=0;1b 19(a){1b a.rJ||(a.rJ="Bh"+b++)}}();(19(){1a c={};g=19(a){1b c[a]};bR=19(a,b){c[a]=b}})();19 rK(a,b){1b{rL:b,lG:rM(a,b)}}19 rM(a,b){1b 19(e){b.1V(g(a),e||1c.24.6C)}}19 rN(b,c){1b 19(e){if(6G[b]&&6G[b][c]){1a a=6G[b][c];1i(1a i=0,1t=a.1f;i<1t;i++)a[i].1V(W,e||1c.24.6C)}}}1a h=dU(1c.1T.5T,"5U","7p")&&dU(1c.24,"5U","7p"),rO=dU(1c.1T.5T,"ai","dn")&&dU(1c.24,"ai","dn"),7w={},6G={},3U,4E;if(h){3U=19(a,b,c){a.5U(b,c,1s)};4E=19(a,b,c){a.7p(b,c,1s)}}1g if(rO){3U=19(a,b,c){1a d=dV(a);bR(d,a);if(!7w[d])7w[d]={};if(!7w[d][b])7w[d][b]=[];1a e=rK(d,c);7w[d][b].1C(e);a.ai("on"+b,e.lG)};4E=19(a,b,c){1a d=dV(a),2y;if(7w[d]&&7w[d][b])1i(1a i=0,1t=7w[d][b].1f;i<1t;i++){2y=7w[d][b][i];if(2y&&2y.rL===c){a.dn("on"+b,2y.lG);7w[d][b][i]=1z}}}}1g{3U=19(a,b,c){1a d=dV(a);if(!6G[d])6G[d]={};if(!6G[d][b]){6G[d][b]=[];1a e=a["on"+b];if(e)6G[d][b].1C(e);a["on"+b]=rN(d,b)}6G[d][b].1C(c)};4E=19(a,b,c){1a d=dV(a);if(6G[d]&&6G[d][b]){1a e=6G[d][b];1i(1a i=0,1t=e.1f;i<1t;i++)if(e[i]===c)e.ar(i,1)}}}1c.1d.3U=3U;1c.1d.4E=4E;19 4p(a){a||(a=1c.24.6C);1a b=a.1u||(1n a.rP!==f?a.rP:1z),lH=1c.1d.dX(b);1b{x:j(a)+lH.1p,y:lI(a)+lH.1r}}1a j=19(a){1b 1n a.bt!==f?a.bt:0},lI=19(a){1b 1n a.bu!==f?a.bu:0};19 lJ(a,b,c){1a d=a.1A==="bs"?"6Z":"am";1b a[d]&&a[d][0]?a[d][0][b]-(a[d][0][b]-a[d][0][c])||a[c]:a[c]}if(1c.gG){j=19(a){1b lJ(a,"3j","bt")};lI=19(a){1b lJ(a,"3p","bu")}}1c.1d.4p=4p;1c.1d.1D.1B(1c.1d,1c.bE)})();(19(){19 dY(a,b){1a c=a.2f;if(!c)1b a;if(1n b==="2V"){a.2f.hq+=";"+b;1b b.2X("1U")>-1?dZ(a,b.4f(/1U:\\s*(\\d?\\.?\\d*)/)[1]):a}1i(1a d in b)if(d==="1U")dZ(a,b[d]);1g{1a e=d==="Bi"||d==="rQ"?1n c.rR==="1w"?"rQ":"rR":d;c[e]=b[d]}1b a}1a f=1c.1T.5A("dl"),rS=1n f.2f.1U==="2V",rT=1n f.2f.5D==="2V",lK=/3G\\s*\\(\\s*1U\\s*=\\s*([^\\)]+)\\)/,dZ=19(a){1b a};if(rS)dZ=19(a,b){a.2f.1U=b;1b a};1g if(rT)dZ=19(a,b){1a c=a.2f;if(a.hr&&!a.hr.Bj)c.Bk=1;if(lK.3m(c.5D)){b=b>=.Bl?"":"3G(1U="+b*3g+")";c.5D=c.5D.3d(lK,b)}1g c.5D+=" 3G(1U="+b*3g+")";1b a};1c.1d.dY=dY})();(19(){1a f=3w.1v.3r;19 e0(a){1b 1n a==="2V"?1c.1T.lL(a):a}1a g,bS=19(a){1b f.1V(a,0)};hs{g=bS(1c.1T.Bm)7a 3w}ht(hu){}if(!g)bS=19(a){1a b=1k 3w(a.1f),i=a.1f;3b(i--)b[i]=a[i];1b b};19 hv(a,b){1a c=1c.1T.5A(a);1i(1a d in b)if(d==="lM")c.e1=b[d];1g if(d==="1i")c.Bn=b[d];1g c.6a(d,b[d]);1b c}19 bT(a,b){if(a&&(" "+a.e1+" ").2X(" "+b+" ")===-1)a.e1+=(a.e1?" ":"")+b}19 bU(a,b,c){if(1n b==="2V")b=hv(b,c);if(a.4m)a.4m.rU(b,a);b.8C(a);1b b}19 dX(a){1a b=0,1r=0,lN=1c.1T.5T,5g=1c.1T.5g||{5V:0,4U:0};3b(a&&(a.4m||a.rV)){a=a.4m||a.rV;if(a===1c.1T){b=5g.5V||lN.5V||0;1r=5g.4U||lN.4U||0}1g{b+=a.5V||0;1r+=a.4U||0}if(a.rW===1&&1c.1d.rX(a,"6b")==="gT")1y}1b{1p:b,1r:1r}}19 bV(a){1a b,3k=a&&a.gL,bv={1p:0,1r:0},2E={1p:0,1r:0},hw,lO={Bo:"1p",Bp:"1r",Bq:"1p",Br:"1r"};if(!3k)1b 2E;1i(1a c in lO)2E[lO[c]]+=48(h(a,c),10)||0;b=3k.5T;if(1n a.gR!=="1w")bv=a.gR();hw=dX(a);1b{1p:bv.1p+hw.1p-(b.Bs||0)+2E.1p,1r:bv.1r+hw.1r-(b.Bt||0)+2E.1r}}1a h;if(1c.1T.lP&&1c.1T.lP.gS)h=19(a,b){1a c=1c.1T.lP.gS(a,1z);1b c?c[b]:1w};1g h=19(a,b){1a c=a.2f[b];if(!c&&a.hr)c=a.hr[b];1b c};(19(){1a b=1c.1T.5T.2f,e2="rY"in b?"rY":"rZ"in b?"rZ":"s0"in b?"s0":"s1"in b?"s1":"";19 e3(a){if(1n a.hx!=="1w")a.hx=1c.1d.rj;if(e2)a.2f[e2]="4D";1g if(1n a.hy==="2V")a.hy="on";1b a}19 lQ(a){if(1n a.hx!=="1w")a.hx=1z;if(e2)a.2f[e2]="";1g if(1n a.hy==="2V")a.hy="";1b a}1c.1d.e3=e3;1c.1d.lQ=lQ})();(19(){19 hz(a,b){1a c=1c.1T.9A("kJ")[0],9B=1c.1T.5A("Bu"),hb=1l;9B.av=9B.hA=19(e){if(hb){if(1n W.hB==="2V"&&W.hB!=="7S"&&W.hB!=="s2")1b;hb=1s;b(e||1c.24.6C);9B=9B.av=9B.hA=1z}};9B.3D=a;c.8C(9B)}1c.1d.hz=hz})();1c.1d.e0=e0;1c.1d.bS=bS;1c.1d.hv=hv;1c.1d.bT=bT;1c.1d.bU=bU;1c.1d.dX=dX;1c.1d.bV=bV;1c.1d.rX=h})();(19(){19 s3(a,b){1b a+(/\\?/.3m(a)?"&":"?")+b}1a d=19(){1a a=[19(){1b 1k aE("lR.lS")},19(){1b 1k aE("s4.lS")},19(){1b 1k aE("s4.lS.3.0")},19(){1b 1k Bv}];1i(1a i=a.1f;i--;)hs{1a b=a[i]();if(b)1b a[i]}ht(hu){}}();19 s5(){}19 8D(a,b){b||(b={});1a c=b.hC?b.hC.8v():"lT",3y=b.3y||19(){},8E=d(),5g;8E.hA=19(){if(8E.hB===4){3y(8E);8E.hA=s5}};if(c==="lT"){5g=1z;if(1n b.s6==="2V")a=s3(a,b.s6)}8E.Bw(c,a,1l);if(c==="Bx"||c==="By")8E.Bz("BA-BB","BC/x-hD-BD-BE");8E.BF(5g);1b 8E}1c.1d.8D=8D})();1c.7t=19(){};1c.5d=19(){};if(1n 6X!=="1w")["7t","5d"].4z(19(a){if(1n 6X[a]!=="1w"&&1n 6X[a].31==="19")1c[a]=19(){1b 6X[a].31(6X,2S)}});(19(){19 7T(g){e4(19(e){g||(g={});1a f=e||+1k 5h,7c=g.7c||aq,lU=f+7c,e5,4a=g.4a||19(){},7d=g.7d||19(){1b 1s},e6=g.e6||19(t,b,c,d){1b-c*1m.4A(t/d*(1m.4V/2))+c+b},7U="7U"in g?g.7U:0,8F="8F"in g?g.8F:3g,hE=g.hE||8F-7U;g.hF&&g.hF();(19 s7(a){e5=a||+1k 5h;1a b=e5>lU?7c:e5-f;if(7d()){g.3y&&g.3y();1b}4a(e6(b,7U,hE,7c));if(e5>lU){g.3y&&g.3y();1b}e4(s7)})(f)})}1a h=1c.24.BG||1c.24.BH||1c.24.BI||1c.24.BJ||1c.24.BK||19(a){1c.24.6A(a,ah/60)};19 e4(){1b h.31(1c.24,2S)}1c.1d.7T=7T;1c.1d.e4=e4})();(19(){19 hG(a,c,p,s){if(a<1m.2r(c)){a=c;s=p/4}1g s=p/(2*1m.4V)*1m.BL(c/a);1b{a:a,c:c,p:p,s:s}}19 lV(a,t,d){1b a.a*1m.5X(2,10*(t-=1))*1m.41((t*d-a.s)*(2*1m.4V)/a.p)}19 lW(t,b,c,d){1b c*((t=t/d-1)*t*t+1)+b}19 lX(t,b,c,d){t/=d/2;if(t<1)1b c/2*t*t*t+b;1b c/2*((t-=2)*t*t+2)+b}19 lY(t,b,c,d){1b c*(t/=d)*t*t*t+b}19 lZ(t,b,c,d){1b-c*((t=t/d-1)*t*t*t-1)+b}19 m0(t,b,c,d){t/=d/2;if(t<1)1b c/2*t*t*t*t+b;1b-c/2*((t-=2)*t*t*t-2)+b}19 m1(t,b,c,d){1b c*(t/=d)*t*t*t*t+b}19 m2(t,b,c,d){1b c*((t=t/d-1)*t*t*t*t+1)+b}19 m3(t,b,c,d){t/=d/2;if(t<1)1b c/2*t*t*t*t*t+b;1b c/2*((t-=2)*t*t*t*t+2)+b}19 m4(t,b,c,d){1b-c*1m.4A(t/d*(1m.4V/2))+c+b}19 m5(t,b,c,d){1b c*1m.41(t/d*(1m.4V/2))+b}19 m6(t,b,c,d){1b-c/2*(1m.4A(1m.4V*t/d)-1)+b}19 m7(t,b,c,d){1b t===0?b:c*1m.5X(2,10*(t/d-1))+b}19 m8(t,b,c,d){1b t===d?b+c:c*(-1m.5X(2,-10*t/d)+1)+b}19 m9(t,b,c,d){if(t===0)1b b;if(t===d)1b b+c;t/=d/2;if(t<1)1b c/2*1m.5X(2,10*(t-1))+b;1b c/2*(-1m.5X(2,-10*--t)+2)+b}19 ma(t,b,c,d){1b-c*(1m.4W(1-(t/=d)*t)-1)+b}19 mc(t,b,c,d){1b c*1m.4W(1-(t=t/d-1)*t)+b}19 md(t,b,c,d){t/=d/2;if(t<1)1b-c/2*(1m.4W(1-t*t)-1)+b;1b c/2*(1m.4W(1-(t-=2)*t)+1)+b}19 me(t,b,c,d){1a s=1.bW,p=0,a=c;if(t===0)1b b;t/=d;if(t===1)1b b+c;if(!p)p=d*.3;1a e=hG(a,c,p,s);1b-lV(e,t,d)+b}19 mf(t,b,c,d){1a s=1.bW,p=0,a=c;if(t===0)1b b;t/=d;if(t===1)1b b+c;if(!p)p=d*.3;1a e=hG(a,c,p,s);1b e.a*1m.5X(2,-10*t)*1m.41((t*d-e.s)*(2*1m.4V)/e.p)+e.c+b}19 mg(t,b,c,d){1a s=1.bW,p=0,a=c;if(t===0)1b b;t/=d/2;if(t===2)1b b+c;if(!p)p=d*(.3*1.5);1a e=hG(a,c,p,s);if(t<1)1b-.5*lV(e,t,d)+b;1b e.a*1m.5X(2,-10*(t-=1))*1m.41((t*d-e.s)*(2*1m.4V)/e.p)*.5+e.c+b}19 mh(t,b,c,d,s){if(s===1w)s=1.bW;1b c*(t/=d)*t*((s+1)*t-s)+b}19 mi(t,b,c,d,s){if(s===1w)s=1.bW;1b c*((t=t/d-1)*t*((s+1)*t+s)+1)+b}19 mj(t,b,c,d,s){if(s===1w)s=1.bW;t/=d/2;if(t<1)1b c/2*(t*t*(((s*=1.s8)+1)*t-s))+b;1b c/2*((t-=2)*t*(((s*=1.s8)+1)*t+s)+2)+b}19 hH(t,b,c,d){1b c-e7(d-t,0,c,d)+b}19 e7(t,b,c,d){if((t/=d)<1/2.75)1b c*(7.hI*t*t)+b;1g if(t<2/2.75)1b c*(7.hI*(t-=1.5/2.75)*t+.75)+b;1g if(t<2.5/2.75)1b c*(7.hI*(t-=2.25/2.75)*t+.BM)+b;1g 1b c*(7.hI*(t-=2.BN/2.75)*t+.BO)+b}19 mk(t,b,c,d){if(t<d/2)1b hH(t*2,0,c,d)*.5+b;1b e7(t*2-d,0,c,d)*.5+c*.5+b}1c.1d.BP={BQ:19(t,b,c,d){1b c*(t/=d)*t+b},BR:19(t,b,c,d){1b-c*(t/=d)*(t-2)+b},BS:19(t,b,c,d){t/=d/2;if(t<1)1b c/2*t*t+b;1b-c/2*(--t*(t-2)-1)+b},BT:19(t,b,c,d){1b c*(t/=d)*t*t+b},lW:lW,lX:lX,lY:lY,lZ:lZ,m0:m0,m1:m1,m2:m2,m3:m3,m4:m4,m5:m5,m6:m6,m7:m7,m8:m8,m9:m9,ma:ma,mc:mc,md:md,me:me,mf:mf,mg:mg,mh:mh,mi:mi,mj:mj,hH:hH,e7:e7,mk:mk}})();(19(h){1a k=h.1c||(h.1c={}),1B=k.1d.1D.1B,7v=k.1d.2V.7v,3P=k.1d.1D.3P,2G=k.1d.2G,77=k.1d.77,az=k.1d.az,s9=/^(21|bX|mn|sa|hJ|5Y|2K|4q|1G)$/i,sb=/^(mo|4q|BU|bY|BV|7V)$/i,sc=/^(?:bY|mp|mo|BW)$/i,sd=/^(mo|g|a|7V)$/i,mq={cx:"1p",x:"1p",r:"3e",cy:"1r",y:"1r",qE:"4Z",hK:"4Z",2v:"3L","1I-1U":"sf","1I-kL":"8G","4b-e8":"3H","4b-at":"2F","4b-2f":"4j","4b-4k":"3M","1H-kM":"2C","1H-gH":"5Z","1H-kN":"6j","1H-kO":"7W","1H-1U":"sg","1H-1e":"3n","1G-9C":"3N","1G-si":"28"},hL={1H:"sg",1I:"sf"};k.e9={};k.8H={};19 ea(a){if(a in mq)1b mq[a];1b a}19 eb(a,b,c,d){1a e=2x.1v.42.1V(b)==="[1D 3w]",9D;if((a==="1I"||a==="1H")&&b==="4D")b="";1g if(a==="2C")b=b.3d(/,/g," ").3o(/\\s+/).5c(19(n){1b 2Z(n)});1g if(a==="3L")if(c&&c.3L)b=az(c.3L,k.hM(b));1g b=k.hM(b);1g if(a==="4Z"){b=b==="4D"||b==="sj"?1s:1l;if(c&&c.4Z===1s)b=1s}1g if(a==="28")b=b==="4h"?"1p":b==="7r"?"3K":"1M";1g 9D=e?b.5c(77):77(b,d);1b!e&&ec(9D)?b:9D}19 sk(a){1i(1a b in hL){if(!a[b]||1n a[hL[b]]==="1w")3a;if(a[b].2X("9E(")===0)3a;1a c=1k k.2s(a[b]);a[b]=c.ed(2G(c.7X()*a[hL[b]],2)).hN()}1b a}k.hM=19(){19 sl(a,b){1a c=b[0];a[0]=1m.4A(c);a[1]=1m.41(c);a[2]=-1m.41(c);a[3]=1m.4A(c)}19 hO(a,b){1a c=b[0],sm=b.1f===2?b[1]:b[0];a[0]=c;a[3]=sm}19 sn(a,b){a[2]=1m.bZ(k.1d.4Y(b[0]))}19 so(a,b){a[1]=1m.bZ(k.1d.4Y(b[0]))}19 ee(a,b){a[4]=b[0];if(b.1f===2)a[5]=b[1]}1a f=[1,0,0,1,0,0],3Y=k.9m,7x="(?:\\\\s+,?\\\\s*|,\\\\s*)",3s="(?:(3s)\\\\s*\\\\(\\\\s*("+3Y+")\\\\s*\\\\))",3F="(?:(3F)\\\\s*\\\\(\\\\s*("+3Y+")\\\\s*\\\\))",4N="(?:(4N)\\\\s*\\\\(\\\\s*("+3Y+")(?:"+7x+"("+3Y+")"+7x+"("+3Y+"))?\\\\s*\\\\))",3l="(?:(3l)\\\\s*\\\\(\\\\s*("+3Y+")(?:"+7x+"("+3Y+"))?\\\\s*\\\\))",4M="(?:(4M)\\\\s*\\\\(\\\\s*("+3Y+")(?:"+7x+"("+3Y+"))?\\\\s*\\\\))",51="(?:(51)\\\\s*\\\\(\\\\s*"+"("+3Y+")"+7x+"("+3Y+")"+7x+"("+3Y+")"+7x+"("+3Y+")"+7x+"("+3Y+")"+7x+"("+3Y+")"+"\\\\s*\\\\))",2v="(?:"+51+"|"+4M+"|"+3l+"|"+4N+"|"+3s+"|"+3F+")",sp="(?:"+2v+"(?:"+7x+2v+")*"+")",sq="^\\\\s*(?:"+sp+"?)\\\\s*$",sr=1k 9F(sq),ss=1k 9F(2v,"g");1b 19(c){1a d=f.4o(),c0=[];if(!c||c&&!sr.3m(c))1b d;c.3d(ss,19(b){1a m=(1k 9F(2v)).h7(b).5D(19(a){1b a!==""&&a!=1z}),st=m[1],79=m.3r(2).5c(2Z);5m(st){1x"4M":ee(d,79);1y;1x"4N":79[0]=k.1d.4Y(79[0]);sl(d,79);1y;1x"3l":hO(d,79);1y;1x"3s":sn(d,79);1y;1x"3F":so(d,79);1y;1x"51":d=79;1y}c0.1C(d.4o());d=f.4o()});1a e=c0[0];3b(c0.1f>1){c0.rG();e=k.1d.az(e,c0[0])}1b e}}();19 su(c,d){1a e,3Z;c.3d(/;\\s*$/,"").3o(";").4z(19(a){1a b=a.3o(":");e=ea(b[0].5q().9q());3Z=eb(e,b[1].5q());d[e]=3Z})}19 sv(a,b){1a c,3Z;1i(1a d in a){if(1n a[d]==="1w")3a;c=ea(d.9q());3Z=eb(c,a[d]);b[c]=3Z}}19 sy(a,b){1a c={};1i(1a d in k.e9[b])if(sz(a,d.3o(" ")))1i(1a e in k.e9[b][d])c[e]=k.e9[b][d][e];1b c}19 sz(a,b){1a c,c1=1l;c=ms(a,b.dJ());if(c&&b.1f)c1=sA(a,b);1b c&&c1&&b.1f===0}19 sA(a,b){1a c,c1=1l;3b(a.4m&&a.4m.rW===1&&b.1f){if(c1)c=b.dJ();a=a.4m;c1=ms(a,c)}1b b.1f===0}19 ms(a,b){1a c=a.6y,c2=a.2Q("lM"),id=a.2Q("id"),aF;aF=1k 9F("^"+c,"i");b=b.3d(aF,"");if(id&&b.1f){aF=1k 9F("#"+id+"(?![a-zA-Z\\\\-]+)","i");b=b.3d(aF,"")}if(c2&&b.1f){c2=c2.3o(" ");1i(1a i=c2.1f;i--;){aF=1k 9F("\\\\."+c2[i]+"(?![a-zA-Z\\\\-]+)","i");b=b.3d(aF,"")}}1b b.1f===0}19 sB(a,b){1a c;a.lL&&(c=a.lL(b));if(c)1b c;1a d,i,mu=a.9A("*");1i(i=0;i<mu.1f;i++){d=mu[i];if(b===d.2Q("id"))1b d}}19 sC(a){1a b=a.9A("BX"),i=0;3b(b.1f&&i<b.1f){1a c=b[i],5H=c.2Q("5H:9G").dm(1),x=c.2Q("x")||0,y=c.2Q("y")||0,6k=sB(a,5H).sD(1l),hP=(6k.2Q("2v")||"")+" 4M("+x+", "+y+")",4m,sE=b.1f,7e,j,aG,l;hQ(6k);if(/^7V$/i.3m(6k.6y)){1a d=6k.gL.5A("g");1i(j=0,aG=6k.l3,l=aG.1f;j<l;j++){7e=aG.h6(j);d.6a(7e.6y,7e.mv)}3b(6k.c3!=1z)d.8C(6k.c3);6k=d}1i(j=0,aG=c.l3,l=aG.1f;j<l;j++){7e=aG.h6(j);if(7e.6y==="x"||7e.6y==="y"||7e.6y==="5H:9G")3a;if(7e.6y==="2v")hP=7e.mv+" "+hP;1g 6k.6a(7e.6y,7e.mv)}6k.6a("2v",hP);6k.6a("sF","1");6k.kS("id");4m=c.4m;4m.rU(6k,c);if(b.1f===sE)i++}}1a p=1k 9F("^"+"\\\\s*("+k.9m+"+)\\\\s*,?"+"\\\\s*("+k.9m+"+)\\\\s*,?"+"\\\\s*("+k.9m+"+)\\\\s*,?"+"\\\\s*("+k.9m+"+)\\\\s*"+"$");19 hQ(a){1a b=a.2Q("7Y"),1O=1,1W=1,58=0,4B=0,hR,hS,51,el,ef=a.2Q("1e"),eg=a.2Q("1h"),x=a.2Q("x")||0,y=a.2Q("y")||0,7f=a.2Q("7f")||"",mw=!b||!sb.3m(a.hT)||!(b=b.4f(p)),mx=!ef||!eg||ef==="3g%"||eg==="3g%",c4=mw&&mx,5I={},ee="";5I.1e=0;5I.1h=0;5I.c4=c4;if(c4)1b 5I;if(mw){5I.1e=77(ef);5I.1h=77(eg);1b 5I}58=-2Z(b[1]),4B=-2Z(b[2]),hR=2Z(b[3]),hS=2Z(b[4]);if(!mx){5I.1e=77(ef);5I.1h=77(eg);1O=5I.1e/hR;1W=5I.1h/hS}1g{5I.1e=hR;5I.1h=hS}7f=k.1d.lr(7f);if(7f.6i!=="4D")1W=1O=1O>1W?1W:1O;if(1O===1&&1W===1&&58===0&&4B===0&&x===0&&y===0)1b 5I;if(x||y)ee=" 4M("+77(x)+" "+77(y)+") ";51=ee+" 51("+1O+" 0"+" 0 "+1W+" "+58*1O+" "+4B*1W+") ";if(a.hT==="7V"){el=a.gL.5A("g");3b(a.c3!=1z)el.8C(a.c3);a.8C(el)}1g{el=a;51=el.2Q("2v")+51}el.6a("2v",51);1b 5I}k.hU=19(){19 sG(a,b){3b(a&&(a=a.4m))if(b.3m(a.6y)&&!a.2Q("sF"))1b 1l;1b 1s}1b 19(b,c,d){if(!b)1b;sC(b);1a e=1k 5h,7g=k.2x.eh++,6H=hQ(b),aH=k.1d.bS(b.9A("*"));6H.7g=7g;if(aH.1f===0&&k.af){aH=b.BY(\'//*[BZ(.)!="7V"]\');1a f=[];1i(1a i=0,1t=aH.1f;i<1t;i++)f[i]=aH[i];aH=f}1a g=aH.5D(19(a){hQ(a);1b s9.3m(a.hT)&&!sG(a,sc)});if(!g||g&&!g.1f){c&&c([],{});1b}k.8H[7g]=k.sH(b);k.e9[7g]=k.sI(b);k.sJ(g,19(a){k.C0=1k 5h-e;if(c)c(a,6H)},3P(6H),d)}}();1a q={sK:19(a,b){b(1s)},1J:19(){},1K:19(){}};19 sL(a){1a b=a.6l,6H=a.6H;b=b.5c(19(o){1b k[7v(o.1A)].32(o)});1b{6l:b,6H:6H}}19 my(a,b,c){if(b[c]&&b[c].3V)a.1C(\'\\t<bY x="0" y="0" id="\',c,\'7Z" \',\'1e="\',b[c].22.1e,\'" 1h="\',b[c].22.1h,\'" C1="mz">\\n\',\'\\t\\t<4q x="0" y="0" \',\'1e="\',b[c].22.1e,\'" 1h="\',b[c].22.1h,\'" 5H:9G="\',b[c].22.3D,\'"></4q>\\n\\t</bY>\\n\')}1a s=1k 9F("(c5|C2)?\\\\s*(c5|C3-C4)?\\\\s*"+"(c5|C5|C6|C7|3g|l6|C8|sM|aq|hV|r7|C9|Ca)?\\\\s*("+k.9m+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\\\/(c5|"+k.9m+"))?\\\\s+(.*)");1B(k,{sN:19(a,b){1a c=a.4f(s);if(!c)1b;1a d=c[1],3M=c[3],2F=c[4],3z=c[5],3H=c[6];if(d)b.4j=d;if(3M)b.3M=ec(2Z(3M))?3M:2Z(3M);if(2F)b.2F=77(2F);if(3H)b.3H=3H;if(3z)b.3z=3z==="c5"?1:3z},sH:19(a){1a b=a.9A("hW"),hX=a.9A("mA"),el,i,j=0,id,5H,ei=[],8H={},hY={};ei.1f=b.1f+hX.1f;i=b.1f;3b(i--)ei[j++]=b[i];i=hX.1f;3b(i--)ei[j++]=hX[i];3b(j--){el=ei[j];5H=el.2Q("5H:9G");id=el.2Q("id");if(5H)hY[id]=5H.dm(1);8H[id]=el}1i(id in hY){1a c=8H[hY[id]].sD(1l);el=8H[id];3b(c.c3)el.8C(c.c3)}1b 8H},7y:19(c,d,e){if(!c)1b;1a f,c6={},2F;if(1n e==="1w")e=c.2Q("7g");if(c.4m&&sd.3m(c.4m.6y))c6=k.7y(c.4m,d,e);2F=c6&&c6.2F||c.2Q("4b-at")||k.5p.h8;1a g=d.dC(19(a,b){f=c.2Q(b);if(f){b=ea(b);f=eb(b,f,c6,2F);a[b]=f}1b a},{});g=1B(g,1B(sy(c,e),k.sO(c)));if(g.4b)k.sN(g.4b,g);1b sk(1B(c6,g))},sJ:19(a,b,c,d){(1k k.8I(a,b,c,d)).hZ()},sO:19(a){1a b={},2f=a.2Q("2f");if(!2f)1b b;if(1n 2f==="2V")su(2f,b);1g sv(2f,b);1b b},mB:19(a){if(!a)1b 1z;a=a.3d(/,/g," ").5q();a=a.3o(/\\s+/);1a b=[],i,1t;i=0;1t=a.1f;1i(;i<1t;i+=2)b.1C({x:2Z(a[i]),y:2Z(a[i+1])});1b b},sI:19(e){1a f=e.9A("2f"),mC={},ej;1i(1a i=0,1t=f.1f;i<1t;i++){1a g=f[i].sP;g=g.3d(/\\/\\*[\\s\\S]*?\\*\\//g,"");if(g.5q()==="")3a;ej=g.4f(/[^{]*\\{[\\s\\S]*?\\}/g);ej=ej.5c(19(a){1b a.5q()});ej.4z(19(b){1a c=b.4f(/([\\s\\S]*?)\\s*\\{([^}]*)\\}/),mD={},sQ=c[2].5q(),mE=sQ.3d(/;$/,"").3o(/\\s*;\\s*/);1i(1a i=0,1t=mE.1f;i<1t;i++){1a d=mE[i].3o(/\\s*:\\s*/),mF=ea(d[0]),3Z=eb(mF,d[1],d[0]);mD[mF]=3Z}b=c[1];b.3o(",").4z(19(a){a=a.3d(/^7V/i,"").5q();if(a==="")1b;mC[a]=k.1d.1D.3P(mD)})})}1b mC},i0:19(d,e,f){d=d.3d(/^\\n\\s*/,"").5q();q.sK(d,19(c){if(c)q.1J(d,19(a){1a b=sL(a);e(b.6l,b.6H)});1g 1k k.1d.8D(d,{hC:"1J",3y:3y})});19 3y(r){1a c=r.Cb;if(c&&!c.5T&&k.24.aE&&r.sR){c=1k aE("lR.sS");c.8z="1s";c.sT(r.sR.3d(/<!gF[\\s\\S]*?(\\[[\\s\\S]*\\])*?>/i,""))}if(!c||!c.5T)1b;k.hU(c.5T,19(a,b){q.1K(d,{6l:k.1d.5E.7R(a,"1N"),6H:b});e(a,b)},f)}},i1:19(c,d,e){c=c.5q();1a f;if(1n mG!=="1w"){1a g=1k mG;if(g&&g.mH)f=g.mH(c,"1G/mI")}1g if(k.24.aE){f=1k aE("lR.sS");f.8z="1s";f.sT(c.3d(/<!gF[\\s\\S]*?(\\[[\\s\\S]*\\])*?>/i,""))}k.hU(f.5T,19(a,b){d(a,b)},e)},sU:19(a){1a b="";1i(1a i=0,1t=a.1f;i<1t;i++){if(a[i].1A!=="1G"||!a[i].21)3a;b+=["@4b-Cc {","4b-e8: ",a[i].3H,"; ","3D: 9E(\'",a[i].21,"\')","}\\n"].2A("")}if(b)b=[\'\\t<2f 1A="1G/Cd">\',"<![Ce[",b,"]]\\Cf","</2f>\\n"].2A("");1b b},sV:19(a){1a b=[];my(b,a,"3I");my(b,a,"6m");1b b.2A("")}})})(1n 1S!=="1w"?1S:W);1c.8I=19(a,b,c,d){W.c7=a;W.ek=b;W.6H=c;W.en=d;W.7g=c&&c.7g||0};1c.8I.1v.hZ=19(){W.aI=1k 3w(W.c7.1f);W.sW=W.c7.1f;W.sX()};1c.8I.1v.sX=19(){1i(1a i=0,1t=W.c7.1f;i<1t;i++){W.c7[i].6a("7g",W.7g);(19(a,i){6A(19(){a.sY(a.c7[i],i)},0)})(W,i)}};1c.8I.1v.sY=19(a,b){1a c=1c[1c.1d.2V.7v(a.hT)];if(c&&c.6n)hs{W.sZ(c,a,b)}ht(hu){1c.7t(hu)}1g W.i2()};1c.8I.1v.sZ=19(a,b,c){if(a.8z)a.6n(b,W.t0(c,b),W.6H);1g{1a d=a.6n(b,W.6H);W.eo(d,"1I");W.eo(d,"1H");W.en&&W.en(b,d);W.aI[c]=d;W.i2()}};1c.8I.1v.t0=19(b,c){1a d=W;1b 19(a){d.eo(a,"1I");d.eo(a,"1H");d.en&&d.en(c,a);d.aI[b]=a;d.i2()}};1c.8I.1v.eo=19(a,b){1a c=a.1J(b);if(!/^9E\\(/.3m(c))1b;1a d=c.3r(5,c.1f-1);if(1c.8H[W.7g][d])a.1K(b,1c.81.6n(1c.8H[W.7g][d],a))};1c.8I.1v.i2=19(){if(--W.sW===0){W.aI=W.aI.5D(19(a){1b a!=1z});W.ek(W.aI)}};(19(c){1a d=c.1c||(c.1c={});if(d.1Z){d.5d("1c.1Z is 5J 5i");1b}d.1Z=1Z;19 1Z(x,y){W.x=x;W.y=y}1Z.1v={7K:1Z,2j:19(a){1b 1k 1Z(W.x+a.x,W.y+a.y)},ri:19(a){W.x+=a.x;W.y+=a.y;1b W},Cg:19(a){1b 1k 1Z(W.x+a,W.y+a)},Ch:19(a){W.x+=a;W.y+=a;1b W},t3:19(a){1b 1k 1Z(W.x-a.x,W.y-a.y)},ld:19(a){W.x-=a.x;W.y-=a.y;1b W},Ci:19(a){1b 1k 1Z(W.x-a,W.y-a)},Cj:19(a){W.x-=a;W.y-=a;1b W},mJ:19(a){1b 1k 1Z(W.x*a,W.y*a)},Ck:19(a){W.x*=a;W.y*=a;1b W},Cl:19(a){1b 1k 1Z(W.x/a,W.y/a)},Cm:19(a){W.x/=a;W.y/=a;1b W},eq:19(a){1b W.x===a.x&&W.y===a.y},lt:19(a){1b W.x<a.x&&W.y<a.y},Cn:19(a){1b W.x<=a.x&&W.y<=a.y},gt:19(a){1b W.x>a.x&&W.y>a.y},Co:19(a){1b W.x>=a.x&&W.y>=a.y},Cp:19(a,t){1b 1k 1Z(W.x+(a.x-W.x)*t,W.y+(a.y-W.y)*t)},Cq:19(a){1a b=W.x-a.x,dy=W.y-a.y;1b 1m.4W(b*b+dy*dy)},mK:19(a){1b 1k 1Z(W.x+(a.x-W.x)/2,W.y+(a.y-W.y)/2)},2g:19(a){1b 1k 1Z(1m.2g(W.x,a.x),1m.2g(W.y,a.y))},29:19(a){1b 1k 1Z(1m.29(W.x,a.x),1m.29(W.y,a.y))},42:19(){1b W.x+","+W.y},Cr:19(x,y){W.x=x;W.y=y},Cs:19(a){W.x=a.x;W.y=a.y},Ct:19(a){1a x=W.x,y=W.y;W.x=a.x;W.y=a.y;a.x=x;a.y=y}}})(1n 1S!=="1w"?1S:W);(19(g){1a h=g.1c||(g.1c={});if(h.3t){h.5d("1c.3t is 5J 5i");1b}19 3t(a){W.c8=a;W.2p=[]}h.3t=3t;h.3t.1v={Cu:19(a){W.2p.1C(a)},aJ:19(a){W.2p=W.2p.4o(a)}};h.3t.t4=19(a,b,c,d){1a e,mL=(d.x-c.x)*(a.y-c.y)-(d.y-c.y)*(a.x-c.x),mM=(b.x-a.x)*(a.y-c.y)-(b.y-a.y)*(a.x-c.x),uB=(d.y-c.y)*(b.x-a.x)-(d.x-c.x)*(b.y-a.y);if(uB!==0){1a f=mL/uB,ub=mM/uB;if(0<=f&&f<=1&&0<=ub&&ub<=1){e=1k 3t("3t");e.2p.1C(1k h.1Z(a.x+f*(b.x-a.x),a.y+f*(b.y-a.y)))}1g e=1k 3t}1g if(mL===0||mM===0)e=1k 3t("Cv");1g e=1k 3t("Cw");1b e};h.3t.c9=19(a,b,c){1a d=1k 3t,1f=c.1f;1i(1a i=0;i<1f;i++){1a e=c[i],b2=c[(i+1)%1f],i3=3t.t4(a,b,e,b2);d.aJ(i3.2p)}if(d.2p.1f>0)d.c8="3t";1b d};h.3t.t5=19(a,b){1a c=1k 3t,1f=a.1f;1i(1a i=0;i<1f;i++){1a d=a[i],a2=a[(i+1)%1f],i3=3t.c9(d,a2,b);c.aJ(i3.2p)}if(c.2p.1f>0)c.c8="3t";1b c};h.3t.t6=19(a,b,c){1a d=b.2g(c),29=b.29(c),mN=1k h.1Z(29.x,d.y),mO=1k h.1Z(d.x,29.y),t7=3t.c9(d,mN,a),t8=3t.c9(mN,29,a),t9=3t.c9(29,mO,a),ta=3t.c9(mO,d,a),49=1k 3t;49.aJ(t7.2p);49.aJ(t8.2p);49.aJ(t9.2p);49.aJ(ta.2p);if(49.2p.1f>0)49.c8="3t";1b 49}})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={});if(f.2s){f.5d("1c.2s is 5J 5i.");1b}19 2s(a){if(!a)W.8J([0,0,0,1]);1g W.tc(a)}f.2s=2s;f.2s.1v={tc:19(a){1a b;if(a in 2s.mP)a=2s.mP[a];if(a==="Cx"){W.8J([2e,2e,2e,0]);1b}b=2s.mQ(a);if(!b)b=2s.mR(a);if(!b)b=2s.mS(a);if(b)W.8J(b)},mU:19(r,g,b){r/=2e,g/=2e,b/=2e;1a h,s,l,29=f.1d.5E.29([r,g,b]),2g=f.1d.5E.2g([r,g,b]);l=(29+2g)/2;if(29===2g)h=s=0;1g{1a d=29-2g;s=l>.5?d/(2-29-2g):d/(29+2g);5m(29){1x r:h=(g-b)/d+(g<b?6:0);1y;1x g:h=(b-r)/d+2;1y;1x b:h=(r-g)/d+4;1y}h/=6}1b[1m.52(h*4X),1m.52(s*3g),1m.52(l*3g)]},5r:19(){1b W.td},8J:19(a){W.td=a},ep:19(){1a a=W.5r();1b"ca("+a[0]+","+a[1]+","+a[2]+")"},hN:19(){1a a=W.5r();1b"7h("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"},Cy:19(){1a a=W.5r(),8K=W.mU(a[0],a[1],a[2]);1b"8K("+8K[0]+","+8K[1]+"%,"+8K[2]+"%)"},Cz:19(){1a a=W.5r(),8K=W.mU(a[0],a[1],a[2]);1b"te("+8K[0]+","+8K[1]+"%,"+8K[2]+"%,"+a[3]+")"},CA:19(){1a a=W.5r(),r,g,b;r=a[0].42(16);r=r.1f===1?"0"+r:r;g=a[1].42(16);g=g.1f===1?"0"+g:g;b=a[2].42(16);b=b.1f===1?"0"+b:b;1b r.8v()+g.8v()+b.8v()},7X:19(){1b W.5r()[3]},ed:19(a){1a b=W.5r();b[3]=a;W.8J(b);1b W},CB:19(){1a a=W.5r(),61=48((a[0]*.3+a[1]*.59+a[2]*.11).2G(0),10),i4=a[3];W.8J([61,61,61,i4]);1b W},CC:19(a){1a b=W.5r(),61=(b[0]*.3+b[1]*.59+b[2]*.11).2G(0),i4=b[3];a=a||CD;61=bK(61)<bK(a)?0:2e;W.8J([61,61,61,i4]);1b W},CE:19(a){if(!(a 7a 2s))a=1k 2s(a);1a b=[],3G=W.7X(),mV=.5,22=W.5r(),tf=a.5r();1i(1a i=0;i<3;i++)b.1C(1m.52(22[i]*(1-mV)+tf[i]*mV));b[3]=3G;W.8J(b);1b W}};f.2s.ti=/^7h?\\(\\s*(\\d{1,3}(?:\\.\\d+)?\\%?)\\s*,\\s*(\\d{1,3}(?:\\.\\d+)?\\%?)\\s*,\\s*(\\d{1,3}(?:\\.\\d+)?\\%?)\\s*(?:\\s*,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)$/;f.2s.tj=/^te?\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3}\\%)\\s*,\\s*(\\d{1,3}\\%)\\s*(?:\\s*,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)$/;f.2s.tk=/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;f.2s.mP={CF:"#CG",CH:"#mW",er:"#CI",CJ:"#CK",CL:"#CM",es:"#CN",CO:"#CP",CQ:"#CR",CS:"#CT",CU:"#CV",CW:"#CX",CY:"#CZ",et:"#D0",D1:"#D2",D3:"#D4",tm:"#D5",D6:"#D7"};19 i5(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)1b p+(q-p)*6*t;if(t<1/2)1b q;if(t<2/3)1b p+(q-p)*(2/3-t)*6;1b p}f.2s.tn=19(a){1b 2s.i6(2s.mR(a))};f.2s.mR=19(a){1a c=a.4f(2s.ti);if(c){1a r=48(c[1],10)/(/%$/.3m(c[1])?3g:1)*(/%$/.3m(c[1])?2e:1),g=48(c[2],10)/(/%$/.3m(c[2])?3g:1)*(/%$/.3m(c[2])?2e:1),b=48(c[3],10)/(/%$/.3m(c[3])?3g:1)*(/%$/.3m(c[3])?2e:1);1b[48(r,10),48(g,10),48(b,10),c[4]?2Z(c[4]):1]}};f.2s.D8=2s.tn;f.2s.tp=19(a){1b 2s.i6(2s.mS(a))};f.2s.mS=19(a){1a c=a.4f(2s.tj);if(!c)1b;1a h=(2Z(c[1])%4X+4X)%4X/4X,s=2Z(c[2])/(/%$/.3m(c[2])?3g:1),l=2Z(c[3])/(/%$/.3m(c[3])?3g:1),r,g,b;if(s===0)r=g=b=l;1g{1a q=l<=.5?l*(s+1):l+s-l*s,p=l*2-q;r=i5(p,q,h+1/3);g=i5(p,q,h);b=i5(p,q,h-1/3)}1b[1m.52(r*2e),1m.52(g*2e),1m.52(b*2e),c[4]?2Z(c[4]):1]};f.2s.D9=2s.tp;f.2s.Da=19(a){1b 2s.i6(2s.mQ(a))};f.2s.mQ=19(a){if(a.4f(2s.tk)){1a c=a.3r(a.2X("#")+1),i7=c.1f===3,r=i7?c.4C(0)+c.4C(0):c.mX(0,2),g=i7?c.4C(1)+c.4C(1):c.mX(2,4),b=i7?c.4C(2)+c.4C(2):c.mX(4,6);1b[48(r,16),48(g,16),48(b,16),1]}};f.2s.i6=19(a){1a b=1k 2s;b.8J(a);1b b}})(1n 1S!=="1w"?1S:W);(19(){19 tq(a){1a b=a.2Q("2f"),2E=a.2Q("2E")||0,26,mY,1U;2E=2Z(2E)/(/%$/.3m(2E)?3g:1);2E=2E<0?0:2E>1?1:2E;if(b){1a c=b.3o(/\\s*;\\s*/);if(c[c.1f-1]==="")c.dJ();1i(1a i=c.1f;i--;){1a d=c[i].3o(/\\s*:\\s*/),8L=d[0].5q(),3Z=d[1].5q();if(8L==="6W-26")26=3Z;1g if(8L==="6W-1U")1U=3Z}}if(!26)26=a.2Q("6W-26")||"ca(0,0,0)";if(!1U)1U=a.2Q("6W-1U");26=1k 1c.2s(26);mY=26.7X();1U=ec(2Z(1U))?1:2Z(1U);1U*=mY;1b{2E:2E,26:26.ep(),1U:1U}}19 ts(a){1b{x1:a.2Q("x1")||0,y1:a.2Q("y1")||0,x2:a.2Q("x2")||"3g%",y2:a.2Q("y2")||0}}19 tt(a){1b{x1:a.2Q("fx")||a.2Q("cx")||"50%",y1:a.2Q("fy")||a.2Q("cy")||"50%",r1:0,x2:a.2Q("cx")||"50%",y2:a.2Q("cy")||"50%",r2:a.2Q("r")||"50%"}}1c.81=1c.1d.2J({2q:0,2n:0,2u:19(a){a||(a={});1a b={};W.id=1c.2x.eh++;W.1A=a.1A||"aK";b={x1:a.2H.x1||0,y1:a.2H.y1||0,x2:a.2H.x2||0,y2:a.2H.y2||0};if(W.1A==="cb"){b.r1=a.2H.r1||0;b.r2=a.2H.r2||0}W.2H=b;W.44=a.44.3r();if(a.4r)W.4r=a.4r;W.2q=a.2q||W.2q;W.2n=a.2n||W.2n},tu:19(a){1i(1a b in a){1a c=1k 1c.2s(a[b]);W.44.1C({2E:b,26:c.ep(),1U:c.7X()})}1b W},1N:19(){1b{1A:W.1A,2H:W.2H,44:W.44,2q:W.2q,2n:W.2n,4r:W.4r?W.4r.4o():W.4r}},3V:19(c){1a d=1c.1d.1D.3P(W.2H),4Q,eu;W.44.Db(19(a,b){1b a.2E-b.2E});if(!(c.1L&&c.1L.1A==="21-1L"))1i(1a e in d)if(e==="x1"||e==="x2"||e==="r2")d[e]+=W.2q-c.1e/2;1g if(e==="y1"||e==="y2")d[e]+=W.2n-c.1h/2;eu=\'id="cc\'+W.id+\'" i8="mz"\';if(W.4r)eu+=\' 4r="51(\'+W.4r.2A(" ")+\')" \';if(W.1A==="aK")4Q=["<hW ",eu,\' x1="\',d.x1,\'" y1="\',d.y1,\'" x2="\',d.x2,\'" y2="\',d.y2,\'">\\n\'];1g if(W.1A==="cb")4Q=["<mA ",eu,\' cx="\',d.x2,\'" cy="\',d.y2,\'" r="\',d.r2,\'" fx="\',d.x1,\'" fy="\',d.y1,\'">\\n\'];1i(1a i=0;i<W.44.1f;i++)4Q.1C("<6W ",\'2E="\',W.44[i].2E*3g+"%",\'" 2f="6W-26:\',W.44[i].26,W.44[i].1U!==1z?";6W-1U: "+W.44[i].1U:";",\'"/>\\n\');4Q.1C(W.1A==="aK"?"</hW>\\n":"</mA>\\n");1b 4Q.2A("")},4c:19(a,b){1a c,5e,2H=1c.1d.1D.3P(W.2H);if(!W.1A)1b;if(b.1L&&b.1L.1A==="21-1L")1i(5e in 2H)if(5e==="x1"||5e==="x2")2H[5e]+=-W.2q+b.1e/2;1g if(5e==="y1"||5e==="y2")2H[5e]+=-W.2n+b.1h/2;if(W.1A==="aK")c=a.Dc(2H.x1,2H.y1,2H.x2,2H.y2);1g if(W.1A==="cb")c=a.Dd(2H.x1,2H.y1,2H.r1,2H.x2,2H.y2,2H.r2);1i(1a i=0,1t=W.44.1f;i<1t;i++){1a d=W.44[i].26,1U=W.44[i].1U,2E=W.44[i].2E;if(1n 1U!=="1w")d=(1k 1c.2s(d)).ed(1U).hN();c.tu(2Z(2E),d)}1b c}});1c.1d.1D.1B(1c.81,{6n:19(a,b){1a c=a.9A("6W"),1A,i8=a.2Q("i8")||"cd",4r=a.2Q("4r"),44=[],2H,aL;if(a.6y==="hW"||a.6y==="De")1A="aK";1g 1A="cb";if(1A==="aK")2H=ts(a);1g if(1A==="cb")2H=tt(a);1i(1a i=c.1f;i--;)44.1C(tq(c[i]));aL=mZ(b,2H,i8);1a d=1k 1c.81({1A:1A,2H:2H,44:44,2q:-b.1p,2n:-b.1r});if(4r||aL!=="")d.4r=1c.hM((4r||"")+aL);1b d},tv:19(a,b){b||(b={});mZ(a,b.2H,"mz");1b 1k 1c.81(b)}});19 mZ(a,b,c){1a d,i9=0,ce=1,aL="";1i(1a e in b){if(b[e]==="6B")b[e]=1;1g if(b[e]==="-6B")b[e]=0;d=2Z(b[e],10);if(1n b[e]==="2V"&&/^\\d+%$/.3m(b[e]))ce=.tw;1g ce=1;if(e==="x1"||e==="x2"||e==="r2"){ce*=c==="cd"?a.1e:1;i9=c==="cd"?a.1p||0:0}1g if(e==="y1"||e==="y2"){ce*=c==="cd"?a.1h:1;i9=c==="cd"?a.1r||0:0}b[e]=d*ce+i9}if(a.1A==="hJ"&&b.r2!==1z&&c==="cd"&&a.rx!==a.ry){1a f=a.ry/a.rx;aL=" 3l(1, "+f+")";if(b.y1)b.y1/=f;if(b.y2)b.y2/=f}1b aL}})();1c.7Z=1c.1d.2J({3Q:"3Q",2q:0,2n:0,2u:19(b){b||(b={});W.id=1c.2x.eh++;if(b.22)if(1n b.22==="2V")if(1n 1c.1d.hf(b.22)!=="1w")W.22=1k ax(1c.1d.hf(b.22));1g{1a c=W;W.22=1c.1d.ha();1c.1d.7s(b.22,19(a){c.22=a})}1g W.22=b.22;if(b.3Q)W.3Q=b.3Q;if(b.2q)W.2q=b.2q;if(b.2n)W.2n=b.2n},1N:19(){1a a;if(1n W.22==="19")a=ag(W.22);1g if(1n W.22.3D==="2V")a=W.22.3D;1g if(1n W.22==="1D"&&W.22.5s)a=W.22.5s();1b{22:a,3Q:W.3Q,2q:W.2q,2n:W.2n}},3V:19(a){1a b=1n W.22==="19"?W.22():W.22,n0=b.1e/a.6o(),n1=b.1h/a.7z(),tz=W.2q/a.6o(),tA=W.2n/a.7z(),ia="";if(W.3Q==="3Q-x"||W.3Q==="no-3Q")n1=1;if(W.3Q==="3Q-y"||W.3Q==="no-3Q")n0=1;if(b.3D)ia=b.3D;1g if(b.5s)ia=b.5s();1b\'<bY id="cc\'+W.id+\'" x="\'+tz+\'" y="\'+tA+\'" 1e="\'+n0+\'" 1h="\'+n1+\'">\\n\'+\'<4q x="0" y="0"\'+\' 1e="\'+b.1e+\'" 1h="\'+b.1h+\'" 5H:9G="\'+ia+\'"></4q>\\n\'+"</bY>\\n"},4c:19(a){1a b=1n W.22==="19"?W.22():W.22;if(!b)1b"";if(1n b.3D!=="1w"){if(!b.s2)1b"";if(b.Df===0||b.Dg===0)1b""}1b a.tB(b,W.3Q)}});(19(c){1a d=c.1c||(c.1c={}),2G=d.1d.2G;if(d.6I){d.5d("1c.6I is 5J 5i.");1b}d.6I=d.1d.2J({26:"ca(0,0,0)",57:0,2q:0,2n:0,ib:1s,6J:1l,2u:19(a){if(1n a==="2V")a=W.tC(a);1i(1a b in a)W[b]=a[b];W.id=d.2x.eh++},tC:19(a){1a b=a.5q(),ic=d.6I.n2.h7(b)||[],26=b.3d(d.6I.n2,"")||"ca(0,0,0)";1b{26:26.5q(),2q:48(ic[1],10)||0,2n:48(ic[2],10)||0,57:48(ic[3],10)||0}},42:19(){1b[W.2q,W.2n,W.57,W.26].2A("px ")},3V:19(a){1a b=40,ie=40;if(a.1e&&a.1h){b=2G((1m.2r(W.2q)+W.57)/a.1e,2)*3g+20;ie=2G((1m.2r(W.2n)+W.57)/a.1h,2)*3g+20}1b\'<5D id="cc\'+W.id+\'" y="-\'+ie+\'%" 1h="\'+(3g+2*ie)+\'%" \'+\'x="-\'+b+\'%" 1e="\'+(3g+2*b)+\'%" \'+">\\n"+\'\\t<tD in="Dh" Di="\'+2G(W.57?W.57/2:0,3)+\'"></tD>\\n\'+\'\\t<tE dx="\'+W.2q+\'" dy="\'+W.2n+\'" 49="tF" ></tE>\\n\'+\'\\t<Dj Dk-26="\'+W.26+\'"/>\\n\'+\'\\t<Dl Dm="tF" Dn="in" />\\n\'+"\\t<tG>\\n"+"\\t\\t<ih></ih>\\n"+\'\\t\\t<ih in="Do"></ih>\\n\'+"\\t</tG>\\n"+"</5D>\\n"},1N:19(){if(W.6J)1b{26:W.26,57:W.57,2q:W.2q,2n:W.2n};1a a={},ev=d.6I.1v;if(W.26!==ev.26)a.26=W.26;if(W.57!==ev.57)a.57=W.57;if(W.2q!==ev.2q)a.2q=W.2q;if(W.2n!==ev.2n)a.2n=W.2n;1b a}});d.6I.n2=/(?:\\s|^)(-?\\d+(?:px)?(?:\\s?|$))?(-?\\d+(?:px)?(?:\\s?|$))?(\\d+(?:px)?)?(?:\\s?|$)(?:$|\\s)/})(1n 1S!=="1w"?1S:W);(19(){if(1c.2U){1c.5d("1c.2U is 5J 5i.");1b}1a f=1c.1d.1D.1B,bV=1c.1d.bV,7Q=1c.1d.7Q,n3=1k li("Dp gK 2u `1q` Dq");1c.2U=1c.1d.2J({2u:19(a,b){b||(b={});W.n4(a,b);1c.2U.tH=W},3I:"",5K:1z,6m:"",6p:1z,6J:1l,ii:1l,6D:1l,3T:1z,ij:1s,tI:1s,9H:1l,ik:1s,3A:[1,0,0,1,0,0],tJ:19(){},tK:1l,n4:19(a,b){W.1Q=[];W.tL(a);W.tM(b);W.n5();if(!W.cf)W.n6();if(b.6p)W.tN(b.6p,W.2w.4i(W));if(b.5K)W.n7(b.5K,W.2w.4i(W));if(b.3I)W.tO(b.3I,W.2w.4i(W));if(b.6m)W.tP(b.6m,W.2w.4i(W));W.cg()},n6:19(){if(1c.l9===1||!W.tK)1b},cg:19(){W.n8=bV(W.4F);1b W},tN:19(a,b,c){1b W.n9("6p",a,b,c)},n7:19(a,b,c){1b W.n9("5K",a,b,c)},tP:19(a,b){1b W.na("6m",a,b)},tO:19(a,b){1b W.na("3I",a,b)},n5:19(){1a a=W.2L();if(1n a.9H!=="1w"){a.9H=W.9H;1b}a.Dr=W.9H;a.Ds=W.9H;a.Dt=W.9H;a.Du=W.9H},n9:19(b,c,d,e){if(1n c==="2V")1c.1d.7s(c,19(a){W[b]=1k 1c.1F(a,e);d&&d()},W,e&&e.6E);1g{e&&c.8M(e);W[b]=c;d&&d()}1b W},na:19(b,c,d){if(c&&c.22){1a e=W;1c.1d.7s(c.22,19(a){e[b]=1k 1c.7Z({22:a,3Q:c.3Q,2q:c.2q,2n:c.2n});d&&d()})}1g{W[b]=c;d&&d()}1b W},il:19(){1a a=1c.1T.5A("1q");if(!a.2f)a.2f={};if(!a)bQ n3;W.nb(a);1b a},nb:19(a){1c.1d.6g(a);if(1n a.2L==="1w")bQ n3;},tM:19(a){1i(1a b in a)W[b]=a[b];W.1e=W.1e||48(W.4F.1e,10)||0;W.1h=W.1h||48(W.4F.1h,10)||0;if(!W.4F.2f)1b;W.4F.1e=W.1e;W.4F.1h=W.1h;W.4F.2f.1e=W.1e+"px";W.4F.2f.1h=W.1h+"px";W.3A=W.3A.3r()},tL:19(a){W.4F=1c.1d.e0(a)||W.il();W.nb(W.4F);1c.1d.bT(W.4F,"tQ-1q");if(W.cf)W.nc(W.4F);W.aM=W.4F.2L("2d")},6o:19(){1b W.1e},7z:19(){1b W.1h},aN:19(a,b){1b W.nd({1e:a},b)},aO:19(a,b){1b W.nd({1h:a},b)},nd:19(a,b){1a c;b=b||{};1i(1a d in a){c=a[d];if(!b.tR){W.tS(d,a[d]);c+="px"}if(!b.Dv)W.tT(d,c)}W.n5();W.cg();if(!b.tR)W.2w();1b W},tS:19(a,b){W.4F[a]=b;if(W.2R)W.2R[a]=b;if(W.ch)W.ch[a]=b;W[a]=b;1b W},tT:19(a,b){W.4F.2f[a]=b;if(W.2R)W.2R.2f[a]=b;if(W.aP)W.aP.2f[a]=b;1b W},Dw:19(){1b 1m.4W(W.3A[0]*W.3A[3])},Dx:19(a){1a b=W.3W();W.3A=a;W.2w();1i(1a i=0,1t=W.1Q.1f;i<1t;i++)W.1Q[i].3O();if(b)b.3O();1b W},tU:19(a,b){1a c=a;a=1c.1d.5o(a,1c.1d.bJ(W.3A));W.3A[0]=b;W.3A[3]=b;1a d=1c.1d.5o(a,W.3A);W.3A[4]+=c.x-d.x;W.3A[5]+=c.y-d.y;W.2w();1i(1a i=0,1t=W.1Q.1f;i<1t;i++)W.1Q[i].3O();1b W},Dy:19(a){W.tU(1k 1c.1Z(0,0),a);1b W},tV:19(a){W.3A[4]=-a.x;W.3A[5]=-a.y;W.2w();1i(1a i=0,1t=W.1Q.1f;i<1t;i++)W.1Q[i].3O();1b W},Dz:19(a){1b W.tV(1k 1c.1Z(-a.x-W.3A[4],-a.y-W.3A[5]))},6K:19(){1b W.4F},8N:19(){1b 1z},3W:19(){1b 1z},h5:19(a){W.ii&&a.tW();a.4s("1q",W);a.3O();W.1Y("1D:nf",{1u:a});a.1Y("nf")},lc:19(a){if(W.8N()===a){W.1Y("ng:4t:9I",{1u:a});W.im();W.1Y("4t:9I")}W.1Y("1D:5L",{1u:a});a.1Y("5L")},5t:19(a){a.nh(0,0,W.1e,W.1h);1b W},2L:19(){1b W.aM},ni:19(){W.1Q.1f=0;if(W.ew)W.ew();if(W.io)W.io();W.5t(W.aM);if(W.3h)W.5t(W.3h);W.1Y("1q:9I");W.2w();1b W},tX:19(){1a a=W.3W(),1D,aQ=[],nj=[];if(a&&!W.ik){1i(1a i=0,1f=W.1Q.1f;i<1f;i++){1D=W.1Q[i];if(!a.bF(1D))aQ.1C(1D);1g nj.1C(1D)}a.4s("1Q",nj)}1g aQ=W.1Q;1b aQ},2w:19(){1a a=W.aM,aQ;if(W.3h&&W.4t&&!W.6L)W.5t(W.3h);W.5t(a);W.1Y("ng:62");if(W.3T)1c.1d.ay(W,a);aQ=W.tX();a.nk.31(a,W.3A);W.tY(a);W.nl(a,aQ);W.ik||W.nl(a,[W.3W()]);if(!W.ij&&W.cf)W.ez(a);if(W.3T)a.3f();W.tZ(a);if(W.ij&&W.cf)W.ez(a);W.1Y("u0:62");a.nk.31(a,[1,0,0,1,0,0]);1b W},nl:19(a,b){1i(1a i=0,1f=b.1f;i<1f;++i)b[i]&&b[i].62(a)},nm:19(a,b){1a c=W[b+"2s"];if(c){a.53=c.4c?c.4c(a):c;a.63(c.2q||0,c.2n||0,W.1e,W.1h)}c=W[b+"1F"];if(c)c.62(a)},tY:19(a){W.nm(a,"ci")},tZ:19(a){W.nm(a,"ip")},u1:19(){1a a=W.3h||W.aM;W.5t(a);if(W.4t&&W.6L)W.u2();W.1Y("u0:62");1b W},cj:19(){1b{1r:W.7z()/2,1p:W.6o()/2}},u3:19(a){W.iq(a,1k 1c.1Z(W.cj().1p,a.4d().y));W.2w();1b W},u4:19(a){W.iq(a,1k 1c.1Z(a.4d().x,W.cj().1r));W.2w();1b W},u5:19(a){1a b=W.cj();W.iq(a,1k 1c.1Z(b.1p,b.1r));W.2w();1b W},iq:19(a,b){a.aR(b,"1M","1M");1b W},DA:19(a){1b W.ck(a)},1N:19(a){1b W.nn("1N",a)},ck:19(a){1b W.nn("ck",a)},nn:19(a,b){1a c={6l:W.u6(a,b)};f(c,W.u7());1c.1d.lk(W,c,b);1b c},u6:19(b,c){1b W.4K().5c(19(a){1b W.u8(a,b,c)},W)},u8:19(a,b,c){1a d;if(!W.6J){d=a.6J;a.6J=1s}1a e=W.np(a),1D=a[b](c);if(!W.6J)a.6J=d;W.nq(a,e);1b 1D},np:19(b){1a c=["2T","5u","6q","1h","1p","1O","1W","1r","1e"];if(b.1L&&b.1L===W.3W()){1a d={};c.4z(19(a){d[a]=b[a]});W.3W().u9(b);1b d}1g 1b 1z},nq:19(a,b){if(b)a.1K(b)},u7:19(){1a a={ci:W.3I&&W.3I.1N?W.3I.1N():W.3I};if(W.6m)a.ip=W.6m.1N?W.6m.1N():W.6m;if(W.5K)a.5K=W.5K.1N();if(W.6p)a.6p=W.6p.1N();1b a},nr:1l,3V:19(a,b){a||(a={});1a c=[];W.ua(c,a);W.uc(c,a);W.ns(c,"3I");W.nt(c,"5K");W.ud(c,b);W.ns(c,"6m");W.nt(c,"6p");c.1C("</7V>");1b c.2A("")},ua:19(a,b){if(!b.DB)a.1C(\'<?mI gE="1.0" ue="\',b.ue||"DC-8",\'" DD="no" ?>\\n\',\'<!gF 7V DE "-//DF//uf ug 1.1//EN" \',\'"cl://hD.w3.nu/DG/ug/1.1/uf/DH.DI">\\n\')},uc:19(a,b){1a c,1h,6r;if(b.7Y){c=b.7Y.1e;1h=b.7Y.1h}1g{c=W.1e;1h=W.1h;if(!W.nr){6r=W.3A;c/=6r[0];1h/=6r[3]}}a.1C("<7V ",\'uh="cl://hD.w3.nu/DJ/7V" \',\'uh:5H="cl://hD.w3.nu/DK/5H" \',\'gE="1.1" \',\'1e="\',c,\'" \',\'1h="\',1h,\'" \',W.3I&&!W.3I.4c?\'2f="ci-26: \'+W.3I+\'" \':1z,b.7Y?\'7Y="\'+b.7Y.x+" "+b.7Y.y+" "+b.7Y.1e+" "+b.7Y.1h+\'" \':1z,\'mI:DL="DM">\\n\',"<ui>DN DO DP.js ",1c.gE,"</ui>\\n","<mp>",1c.sU(W.4K()),1c.sV(W),"</mp>\\n")},ud:19(a,b){1i(1a i=0,6l=W.4K(),1t=6l.1f;i<1t;i++){1a c=6l[i],uj=W.np(c);a.1C(c.3V(b));W.nq(c,uj)}},nt:19(a,b){if(W[b]&&W[b].3V)a.1C(W[b].3V())},ns:19(a,b){if(W[b]&&W[b].22)a.1C(\'<5Y x="\',W[b].2q,\'" y="\',W[b].2n,\'" \',\'1e="\',W[b].3Q==="3Q-y"||W[b].3Q==="no-3Q"?W[b].22.1e:W.1e,\'" 1h="\',W[b].3Q==="3Q-x"||W[b].3Q==="no-3Q"?W[b].22.1h:W.1h,\'" 1I="9E(#\'+b+\'7Z)"\',"></5Y>\\n");1g if(W[b]&&b==="6m")a.1C(\'<5Y x="0" y="0" \',\'1e="\',W.1e,\'" 1h="\',W.1h,\'" 1I="\',W[b],\'"\',"></5Y>\\n")},ir:19(a){7Q(W.1Q,a);W.1Q.DQ(a);1b W.2w&&W.2w()},it:19(a){7Q(W.1Q,a);W.1Q.1C(a);1b W.2w&&W.2w()},iu:19(a,b){1a c=W.1Q.2X(a);if(c!==0){1a d=W.uk(a,c,b);7Q(W.1Q,a);W.1Q.ar(d,0,a);W.2w&&W.2w()}1b W},uk:19(a,b,c){1a d;if(c){d=b;1i(1a i=b-1;i>=0;--i){1a e=a.nv(W.1Q[i])||a.eA(W.1Q[i])||W.1Q[i].eA(a);if(e){d=i;1y}}}1g d=b-1;1b d},iv:19(a,b){1a c=W.1Q.2X(a);if(c!==W.1Q.1f-1){1a d=W.ul(a,c,b);7Q(W.1Q,a);W.1Q.ar(d,0,a);W.2w&&W.2w()}1b W},ul:19(a,b,c){1a d;if(c){d=b;1i(1a i=b+1;i<W.1Q.1f;++i){1a e=a.nv(W.1Q[i])||a.eA(W.1Q[i])||W.1Q[i].eA(a);if(e){d=i;1y}}}1g d=b+1;1b d},6f:19(a,b){7Q(W.1Q,a);W.1Q.ar(b,0,a);1b W.2w&&W.2w()},nx:19(){W.ni();W.cf&&W.um();1b W},42:19(){1b"#<1c.4G ("+W.4n()+"): "+"{ 6l: "+W.4K().1f+" }>"}});f(1c.2U.1v,1c.bE);f(1c.2U.1v,1c.lb);f(1c.2U.1v,1c.DR);f(1c.2U,{DS:\'{"6l": [], "ci": "tm"}\',6Y:19(a){1a b=1c.1d.6g();if(!b||!b.2L)1b 1z;1a c=b.2L("2d");if(!c)1b 1z;5m(a){1x"3x":1b 1n c.3x!=="1w";1x"8O":1b 1n c.8O!=="1w";1x"5s":1b 1n b.5s!=="1w";1x"un":hs{b.5s("4q/aS",0);1b 1l}ht(e){}1b 1s;9u:1b 1z}}});1c.2U.1v.iw=1c.2U.1v.1N})();1c.ix=1c.1d.2J({26:"ca(0, 0, 0)",1e:1,2I:1z,5Z:"52",6j:"52",2C:1z,eB:19(a){W.2I=1k 1c.6I(a);1b W},iy:19(){1a a=W.1q.3h;a.7A=W.26;a.5M=W.1e;a.uo=W.5Z;a.uq=W.6j;if(W.2C&&1c.2U.6Y("8O"))a.8O(W.2C)},7B:19(){if(!W.2I)1b;1a a=W.1q.3h;a.iz=W.2I.26;a.iA=W.2I.57;a.iB=W.2I.2q;a.iC=W.2I.2n},iD:19(){1a a=W.1q.3h;a.iz="";a.iA=a.iB=a.iC=0}});(19(){1c.iE=1c.1d.2J(1c.ix,{2u:19(a){W.1q=a;W.82=[]},cn:19(a){W.ur(a);W.ny(a);W.5v()},iF:19(a){W.ny(a);W.1q.5t(W.1q.3h);W.5v()},iG:19(){W.us()},ur:19(a){1a p=1k 1c.1Z(a.x,a.y);W.ut();W.nz(p);W.1q.3h.6f(p.x,p.y)},nz:19(a){W.82.1C(a)},ut:19(){W.82.1f=0;W.iy();W.7B()},ny:19(a){1a b=1k 1c.1Z(a.x,a.y);W.nz(b)},5v:19(){1a a=W.1q.3h,v=W.1q.3A,p1=W.82[0],p2=W.82[1];a.3E();a.2v(v[0],v[1],v[2],v[3],v[4],v[5]);a.4O();if(W.82.1f===2&&p1.x===p2.x&&p1.y===p2.y){p1.x-=.5;p2.x+=.5}a.6f(p1.x,p1.y);1i(1a i=1,1t=W.82.1f;i<1t;i++){1a b=p1.mK(p2);a.eC(p1.x,p1.y,b.x,b.y);p1=W.82[i];p2=W.82[i+1]}a.5G(p1.x,p1.y);a.1H();a.3f()},uu:19(a){1a b=[],p1=1k 1c.1Z(a[0].x,a[0].y),p2=1k 1c.1Z(a[1].x,a[1].y);b.1C("M ",a[0].x," ",a[0].y," ");1i(1a i=1,1t=a.1f;i<1t;i++){1a c=p1.mK(p2);b.1C("Q ",p1.x," ",p1.y," ",c.x," ",c.y," ");p1=1k 1c.1Z(a[i].x,a[i].y);if(i+1<a.1f)p2=1k 1c.1Z(a[i+1].x,a[i+1].y)}b.1C("L ",p1.x," ",p1.y," ");1b b},iH:19(a){1a b=1k 1c.6M(a,{1I:1z,1H:W.26,3n:W.1e,5Z:W.5Z,6j:W.6j,2C:W.2C,28:"1M",2k:"1M"});if(W.2I){W.2I.ib=1l;b.eB(W.2I)}1b b},us:19(){1a a=W.1q.3h;a.64();1a b=W.uu(W.82).2A("");if(b==="M 0 0 Q 0 0 0 0 L 0 0"){W.1q.2w();1b}1a c=W.iH(b);W.1q.2j(c);c.3O();W.1q.5t(W.1q.3h);W.iD();W.1q.2w();W.1q.1Y("21:co",{21:c})}})})();1c.DT=1c.1d.2J(1c.ix,{1e:10,2u:19(a){W.1q=a;W.2p=[]},nA:19(a){1a b=W.uv(a),1X=W.1q.3h,v=W.1q.3A;1X.3E();1X.2v(v[0],v[1],v[2],v[3],v[4],v[5]);1X.53=b.1I;1X.4O();1X.iI(b.x,b.y,b.3e,0,1m.4V*2,1s);1X.64();1X.1I();1X.3f()},cn:19(a){W.2p.1f=0;W.1q.5t(W.1q.3h);W.7B();W.nA(a)},iF:19(a){W.nA(a)},iG:19(){1a a=W.1q.6D;W.1q.6D=1s;1a b=[];1i(1a i=0,1t=W.2p.1f;i<1t;i++){1a c=W.2p[i],bX=1k 1c.83({3e:c.3e,1p:c.x,1r:c.y,28:"1M",2k:"1M",1I:c.1I});W.2I&&bX.eB(W.2I);b.1C(bX)}1a d=1k 1c.7C(b,{28:"1M",2k:"1M"});d.1q=W.1q;W.1q.2j(d);W.1q.1Y("21:co",{21:d});W.1q.5t(W.1q.3h);W.iD();W.1q.6D=a;W.1q.2w()},uv:19(a){1a b=1k 1c.1Z(a.x,a.y),uw=1c.1d.au(1m.29(0,W.1e-20),W.1e+20)/2,ux=(1k 1c.2s(W.26)).ed(1c.1d.au(0,3g)/3g).hN();b.3e=uw;b.1I=ux;W.2p.1C(b);1b b}});1c.DU=1c.1d.2J(1c.ix,{1e:10,uy:20,iJ:1,iK:1,uz:1s,uA:1l,2u:19(a){W.1q=a;W.eD=[]},cn:19(a){W.eD.1f=0;W.1q.5t(W.1q.3h);W.7B();W.nB(a);W.62()},iF:19(a){W.nB(a);W.62()},iG:19(){1a a=W.1q.6D;W.1q.6D=1s;1a b=[];1i(1a i=0,uC=W.eD.1f;i<uC;i++){1a c=W.eD[i];1i(1a j=0,4P=c.1f;j<4P;j++){1a d=1k 1c.84({1e:c[j].1e,1h:c[j].1e,1p:c[j].x+1,1r:c[j].y+1,28:"1M",2k:"1M",1I:W.26});W.2I&&d.eB(W.2I);b.1C(d)}}if(W.uA)b=W.uD(b);1a e=1k 1c.7C(b,{28:"1M",2k:"1M"});e.1q=W.1q;W.1q.2j(e);W.1q.1Y("21:co",{21:e});W.1q.5t(W.1q.3h);W.iD();W.1q.6D=a;W.1q.2w()},uD:19(a){1a b={},8L;1i(1a i=0,1t=a.1f;i<1t;i++){8L=a[i].1p+""+a[i].1r;if(!b[8L])b[8L]=a[i]}1a c=[];1i(8L in b)c.1C(b[8L]);1b c},62:19(){1a a=W.1q.3h;a.53=W.26;1a v=W.1q.3A;a.3E();a.2v(v[0],v[1],v[2],v[3],v[4],v[5]);1i(1a i=0,1t=W.eE.1f;i<1t;i++){1a b=W.eE[i];if(1n b.1U!=="1w")a.eF=b.1U;a.63(b.x,b.y,b.1e,b.1e)}a.3f()},nB:19(a){W.eE=[];1a x,y,1e,3e=W.1e/2;1i(1a i=0;i<W.uy;i++){x=1c.1d.au(a.x-3e,a.x+3e);y=1c.1d.au(a.y-3e,a.y+3e);if(W.iK)1e=1c.1d.au(1m.29(1,W.iJ-W.iK),W.iJ+W.iK);1g 1e=W.iJ;1a b=1k 1c.1Z(x,y);b.1e=1e;if(W.uz)b.1U=1c.1d.au(0,3g)/3g;W.eE.1C(b)}W.eD.1C(W.eE)}});1c.DV=1c.1d.2J(1c.iE,{nC:19(){1a a=20,uE=5,eG=1c.1T.5A("1q"),cp=eG.2L("2d");eG.1e=eG.1h=a+uE;cp.53=W.26;cp.4O();cp.iI(a/2,a/2,a/2,0,1m.4V*2,1s);cp.64();cp.1I();1b eG},uF:19(){1b ag(W.nC).3d("W.26",\'"\'+W.26+\'"\')},uG:19(){1b W.1q.3h.tB(W.22||W.nC(),"3Q")},iy:19(){W.2t("iy");W.1q.3h.7A=W.uG()},iH:19(a){1a b=W.2t("iH",a);b.1H=1k 1c.7Z({22:W.22||W.uF()});1b b}});(19(){1a j=1c.1d.4p,4Y=1c.1d.4Y,9w=1c.1d.9w,74=1m.74,2r=1m.2r,eH=.5;1c.4G=1c.1d.2J(1c.2U,{2u:19(a,b){b||(b={});W.n4(a,b);W.uH();W.uI();1c.4G.tH=W},uJ:1s,cq:1s,aT:1s,cf:1l,4t:1l,iL:"7h(3g, 3g, 2e, 0.3)",cr:[],uK:"7h(2e, 2e, 2e, 0.3)",uL:1,9J:"3q",aU:"3q",86:"9u",uM:"uN",uO:"uN",uP:"1q-DW",iM:1s,uQ:0,uR:1s,eI:1s,uH:19(){W.3X=1z;W.6L=1z;W.uS();W.uT();W.uU();W.n6();W.iN=1c.iE&&1k 1c.iE(W);W.cg()},iO:19(){1a t=W.3X;t.1u.1K({1O:t.6N.1O,1W:t.6N.1W,3s:t.6N.3s,3F:t.6N.3F,1p:t.6N.1p,1r:t.6N.1r});if(W.nD(t.1u))if(t.3R==="4N")W.eJ(t.1u);1g{if(t.28!=="1M")if(t.28==="3K")t.cs=-1;1g t.cs=1;if(t.2k!=="1M")if(t.2k==="6e")t.ct=-1;1g t.ct=1;t.28="1M";t.2k="1M"}1g{t.28=t.6N.28;t.2k=t.6N.2k}},9K:19(e,a){1a b=W.4p(e,1l),xy=W.uV(a,b);1b a.9K(xy)||a.aV(b)},uV:19(a,b){1a c=W.3W(),x=b.x,y=b.y,uW=c&&a.1A!=="1L"&&c.bF(a),lt;if(uW){lt=1c.1d.5o(c.4d(),W.3A,1l);x-=lt.x;y-=lt.y;x/=c.1O;y/=c.1W}1b{x:x,y:y}},uX:19(a,x,y){1a b=a.cu,9L=a.9L;a.cu=a.9L=1s;a.62(W.eK);a.aW(W.eK);a.cu=b;a.9L=9L;1a c=1c.1d.ro(W.eK,x,y,W.uQ);W.5t(W.eK);1b c},uY:19(e,a){1a b=W.3W(),aX=W.8N();1b!a||a&&b&&!b.bF(a)&&b!==a&&!e.5B||a&&!a.eL||a&&!a.7i&&aX&&aX!==a},nD:19(a){if(!a)1b;1a t=W.3X,iP;if(t.3R==="3l"||t.3R==="1O"||t.3R==="1W")iP=W.cq||a.cq;1g if(t.3R==="4N")iP=W.aT||a.aT;1b iP?!t.7q:t.7q},uZ:19(a,b){1a c={x:a.28,y:a.2k};if(b==="ml"||b==="tl"||b==="bl")c.x="3K";1g if(b==="mr"||b==="tr"||b==="br")c.x="1p";if(b==="tl"||b==="mt"||b==="tr")c.y="6e";1g if(b==="bl"||b==="mb"||b==="br")c.y="1r";1b c},v0:19(a,b){1a c="7P";if(b)if(iQ&&a==iQ)c=b==="ml"||b==="mr"?"1O":b==="mt"||b==="mb"?"1W":"3l";1g if(a.1A=="cv")c=b==="tr"?"1O":b==="br"?"4N":b==="tl"&&!9M.9N?"2m":b==="bl"&&9M.9N?"2m":"3l";1g c=b==="ml"||b==="mr"?"1O":b==="mt"||b==="mb"?"1W":b==="br"?"4N":b==="tl"&&!9M.9N?"2m":b==="bl"&&9M.9N?"2m":"3l";1b c},v1:19(e,a){if(!a)1b;1a b=W.4p(e),66=a.aV(W.4p(e,1l)),3R=W.v0(a,66,e),9O=W.uZ(a,66);if(3R=="2m"){if(W.3W()&&W.3W()!="1w"){W.3W().as(19(o){6A(19(){1q.2m(o)},50)});W.ew()}1g 6A(19(){1q.2m(a);6X.7t("2m")},50);1b}1g if(3R=="DX")DY(a);1g if(3R=="4N"){6X.7t("4N");v2=1l}1g if(3R=="eM"){v2=1l;DZ=1s;a.8P=1l;a.8Q=1l}1g if(3R=="E0")E1(a);W.3X={1u:a,3R:3R,66:66,1O:a.1O,1W:a.1W,3s:a.3s,3F:a.3F,2q:b.x-a.1p,2n:b.y-a.1r,28:9O.x,2k:9O.y,ex:b.x,ey:b.y,nE:b.x,nF:b.y,1p:a.1p,1r:a.1r,nG:4Y(a.2T),1e:a.1e*a.1O,cs:1,ct:1,5B:e.5B,7q:e.7q};W.3X.6N={1p:a.1p,1r:a.1r,1O:a.1O,1W:a.1W,3s:a.3s,3F:a.3F,28:9O.x,2k:9O.y};W.iO()},v3:19(x,y){1a a=W.3X.1u;if(!a.1J("8P"))a.1K("1p",x-W.3X.2q);if(!a.1J("8Q"))a.1K("1r",y-W.3X.2n)},v4:19(a,t,b){1a c="28",eN={0:"1M"},8R=t.1u.3s,nH="1p",nI="3K",66=t.66==="mt"||t.66==="ml"?1:-1,eO=1;a=a>0?1:-1;if(b==="y"){8R=t.1u.3F;nH="1r";nI="6e";c="2k"}eN[-1]=nH;eN[1]=nI;t.1u.5u&&(eO*=-1);t.1u.6q&&(eO*=-1);if(8R===0){t.eP=-66*a*eO;t[c]=eN[-a]}1g{8R=8R>0?1:-1;t.eP=8R;t[c]=eN[8R*66*eO]}},nJ:19(x,y,a){1a t=W.3X,1u=t.1u,iR=1u.1J("iR"),iS=1u.1J("iS");if(iR&&a==="x"||iS&&a==="y")1b;1a b=1u.4d(),v5=1u.eQ(1k 1c.1Z(x,y),"1M","1M")[a],v6=1u.eQ(1k 1c.1Z(t.nE,t.nF),"1M","1M")[a],nK,nL,6s=1u.8S();W.v4(v5-v6,t,a);nK=1u.eQ(1k 1c.1Z(x,y),t.28,t.2k)[a],nL=1u.87(b,t.28,t.2k);W.v7(nK,t,a,6s);t.nE=x;t.nF=y;1u.aR(nL,t.28,t.2k)},v7:19(a,b,c,d){1a e=b.1u,9P,eP=b.eP,nM,iT,cw,aZ,eR,iU,3s,3F;if(c==="x"){cw="y";aZ="Y";eR="X";3s=0;3F=e.3F}1g{cw="x";aZ="X";eR="Y";3s=e.3s;3F=0}iT=e.8S(3s,3F);iU=2*1m.2r(a)-iT[c];if(iU<=2)9P=0;1g{9P=eP*1m.bG(iU/e["3l"+eR]/(iT[cw]/e["3l"+aZ]));9P=1c.1d.9w(9P)}e.1K("8R"+eR,9P);if(e["8R"+aZ]!==0){nM=e.8S();9P=d[cw]/nM[cw]*e["3l"+aZ];e.1K("3l"+aZ,9P)}},eS:19(x,y,a){1a t=W.3X,1u=t.1u,89=1u.1J("89"),7D=1u.1J("7D"),eT=1u.1J("eT");if(89&&7D)1b;1a b=1u.87(1u.4d(),t.28,t.2k),nN=1u.eQ(1k 1c.1Z(x,y),t.28,t.2k),6s=1u.8S();W.v8(nN,t);W.iV(nN,t,89,7D,a,eT,6s);1u.aR(b,t.28,t.2k)},iV:19(a,b,c,d,e,f,g){1a h=b.1u,cz=1s,cA=1s;b.8T=a.x*h.1O/g.x;b.8U=a.y*h.1W/g.y;if(f&&b.8T<=0&&b.8T<h.1O)cz=1l;if(f&&b.8U<=0&&b.8U<h.1W)cA=1l;if(e==="nO"&&!c&&!d)cz||cA||W.v9(a,h,b,g);1g if(!e){cz||c||h.1K("1O",b.8T);cA||d||h.1K("1W",b.8U)}1g if(e==="x"&&!h.1J("9Q"))cz||c||h.1K("1O",b.8T);1g if(e==="y"&&!h.1J("9Q"))cA||d||h.1K("1W",b.8U);cz||cA||W.va(b,e)},v9:19(a,b,c,d){1a e=a.y+a.x,nP=d.y*c.6N.1W/b.1W+d.x*c.6N.1O/b.1O;c.8T=c.6N.1O*e/nP;c.8U=c.6N.1W*e/nP;b.1K("1O",c.8T);b.1K("1W",c.8U)},va:19(a,b){if(a.8T<0&&b!=="y")if(a.28==="1p")a.28="3K";1g if(a.28==="3K")a.28="1p";if(a.8U<0&&b!=="x")if(a.2k==="1r")a.2k="6e";1g if(a.2k==="6e")a.2k="1r"},v8:19(a,t){1a b=t.1u;if(t.28==="3K")a.x*=-1;1g if(t.28==="1M"){a.x*=t.cs*2;if(a.x<0)t.cs=-t.cs}if(t.2k==="6e")a.y*=-1;1g if(t.2k==="1M"){a.y*=t.ct*2;if(a.y<0)t.ct=-t.ct}if(2r(a.x)>b.8V)if(a.x<0)a.x+=b.8V;1g a.x-=b.8V;1g a.x=0;if(2r(a.y)>b.8V)if(a.y<0)a.y+=b.8V;1g a.y-=b.8V;1g a.y=0},vb:19(x,y){1a t=W.3X;if(t.1u.1J("eU"))1b;1a a=74(t.ey-t.1r,t.ex-t.1p),vc=74(y-t.1r,x-t.1p),2T=9w(vc-a+t.nG);if(2T<0)2T=4X+2T;t.1u.2T=2T%4X},8a:19(a){W.2R.2f.iW=a},nQ:19(a){a.1O=1;a.1W=1;a.3s=0;a.3F=0;a.b0(0)},u2:19(){1a a=W.3h,8W=W.6L,1p=8W.1p,1r=8W.1r,8X=2r(1p),8Y=2r(1r);a.53=W.iL;a.63(8W.ex-(1p>0?0:-1p),8W.ey-(1r>0?0:-1r),8X,8Y);a.5M=W.uL;a.7A=W.uK;if(W.cr.1f>1){1a b=8W.ex+eH-(1p>0?0:8X),py=8W.ey+eH-(1r>0?0:8Y);a.4O();1c.1d.5a(a,b,py,b+8X,py,W.cr);1c.1d.5a(a,b,py+8Y-1,b+8X,py+8Y-1,W.cr);1c.1d.5a(a,b,py,b,py+8Y,W.cr);1c.1d.5a(a,b+8X-1,py,b+8X-1,py+8Y,W.cr);a.64();a.1H()}1g a.iX(8W.ex+eH-(1p>0?0:8X),8W.ey+eH-(1r>0?0:8Y),8X,8Y)},vd:19(e){1b W.ij&&W.cB&&W.cB.4Z&&W.9K(e,W.cB)&&W.cB.aV(W.4p(e,1l))},8Z:19(e,a){if(W.uR)1b;if(W.vd(e))1b W.cB;1a b=W.3W();if(b&&!a&&W.9K(e,b))1b b;1a c=W.ve(e,a);W.vf(c,e);1b c},vf:19(a,e){if(a){if(W.92!==a){if(W.92){W.1Y("5j:vg",{1u:W.92,e:e});W.92.1Y("vh")}W.1Y("5j:vi",{1u:a,e:e});a.1Y("E2");W.92=a}}1g if(W.92){W.1Y("5j:vg",{1u:W.92,e:e});W.92.1Y("vh");W.92=1z}},vj:19(e,a,b){if(a&&a.4Z&&a.eL&&W.9K(e,a))if((W.iM||a.iM)&&!a.8b){1a c=W.uX(a,b.x,b.y);if(!c)1b 1l}1g 1b 1l},ve:19(e,a){1a b,5l=W.4p(e,1l),i=W.1Q.1f;3b(i--)if((!W.1Q[i].1L||a)&&W.vj(e,W.1Q[i],5l)){W.E3=W.1Q[i];b=W.1Q[i];1y}1b b},4p:19(e,a,b){if(!b)b=W.2R;1a c=j(e),2D=b.gR(),eV=2D.1e||0,eW=2D.1h||0,eX;if(!eV||!eW){if("1r"in 2D&&"6e"in 2D)eW=1m.2r(2D.1r-2D.6e);if("3K"in 2D&&"1p"in 2D)eV=1m.2r(2D.3K-2D.1p)}W.cg();c.x=c.x-W.n8.1p;c.y=c.y-W.n8.1r;if(!a)c=1c.1d.5o(c,1c.1d.bJ(W.3A));if(eV===0||eW===0)eX={1e:1,1h:1};1g eX={1e:b.1e/eV,1h:b.1h/eW};1b{x:c.x*eX.1e,y:c.y*eX.1h}},uT:19(){1a a=W.4F.e1.3d(/\\s*tQ-1q\\s*/,"");W.2R=W.il();1c.1d.bT(W.2R,"E4-1q "+a);W.aP.8C(W.2R);W.vk(W.4F,W.2R);W.nc(W.2R);W.3h=W.2R.2L("2d")},uI:19(){W.ch=W.il();W.ch.6a("1e",W.1e);W.ch.6a("1h",W.1h);W.eK=W.ch.2L("2d")},uS:19(){W.aP=1c.1d.bU(W.4F,"dl",{"lM":W.uP});1c.1d.dY(W.aP,{1e:W.6o()+"px",1h:W.7z()+"px",6b:"qT"});1c.1d.e3(W.aP)},nc:19(a){1a b=W.6o()||a.1e,1h=W.7z()||a.1h;1c.1d.dY(a,{6b:"kY",1e:b+"px",1h:1h+"px",1p:0,1r:0});a.1e=b;a.1h=1h;1c.1d.e3(a)},vk:19(a,b){b.2f.hq=a.2f.hq},E5:19(){1b W.3h},E6:19(){1b W.2R},vl:19(a){if(W.6O)W.6O.1K("4e",1s);W.6O=a;a.1K("4e",1l)},b1:19(a,e){W.vl(a);W.2w();W.1Y("1D:7j",{1u:a,e:e});a.1Y("7j",{e:e});1b W},8N:19(){1b W.6O},im:19(){if(W.6O)W.6O.1K("4e",1s);W.6O=1z},io:19(e){W.im();W.2w();W.1Y("4t:9I",{e:e});1b W},vm:19(a){W.eY=a;if(a)a.1K("4e",1l)},iY:19(a,e){W.vm(a);if(a){W.1Y("1D:7j",{1u:a,e:e});a.1Y("7j",{e:e})}1b W},3W:19(){1b W.eY},nR:19(){1a g=W.3W();if(g)g.vn();W.iY(1z)},ew:19(e){W.nR();W.1Y("4t:9I",{e:e});1b W},eZ:19(){1a a=W.4K(),i=0,1t=a.1f;1i(;i<1t;i++)a[i].1K("4e",1s);W.nR();W.im();1b W},vo:19(e){1a a=W.3W()||W.8N();if(a)W.1Y("ng:4t:9I",{1u:a,e:e});W.eZ();if(a)W.1Y("4t:9I",{e:e});1b W},ez:19(a){a.3E();a.nk.31(a,[1,0,0,1,0,0]);1a b=W.3W();if(b)b.aW(a);1g W.vp(a);a.3f()},vp:19(a){1i(1a i=0,1t=W.1Q.1f;i<1t;++i){if(!W.1Q[i]||!W.1Q[i].4e)3a;W.1Q[i].aW(a);W.cB=W.1Q[i]}}});1i(1a k in 1c.2U)if(k!=="1v")1c.4G[k]=1c.2U[k];if(1c.gG)1c.4G.1v.f0=19(){};1c.E7=1c.4G})();(19(){1a d={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},3U=1c.1d.3U,4E=1c.1d.4E;1c.1d.1D.1B(1c.4G.1v,{vq:["n-8c","ne-8c","e-8c","se-8c","s-8c","sw-8c","w-8c","nw-8c"],uU:19(){W.vr();3U(1c.24,"8c",W.f1);3U(W.2R,"4T",W.94);3U(W.2R,"47",W.67);3U(W.2R,"h3",W.f2);3U(W.2R,"bq",W.94);3U(W.2R,"9s",W.67);if(1n 1j!=="1w"&&"2j"in 1j){1j.2j(W.2R,"2W",W.f3);1j.2j(W.2R,"7P",W.f4);1j.2j(W.2R,"9v",W.f5);1j.2j(W.2R,"bB",W.f6);1j.2j(W.2R,"8y",W.f7)}},vr:19(){W.94=W.94.4i(W);W.67=W.67.4i(W);W.b3=W.b3.4i(W);W.f1=W.f1.4i(W);W.f3=W.f3.4i(W);W.f4=W.f4.4i(W);W.f6=W.f6.4i(W);W.f7=W.f7.4i(W);W.f5=W.f5.4i(W);W.f2=W.f2.4i(W)},um:19(){4E(1c.24,"8c",W.f1);4E(W.2R,"4T",W.94);4E(W.2R,"47",W.67);4E(W.2R,"h3",W.f2);4E(W.2R,"bq",W.94);4E(W.2R,"9s",W.67);if(1n 1j!=="1w"&&"2m"in 1j){1j.2m(W.2R,"2W",W.f3);1j.2m(W.2R,"7P",W.f4);1j.2m(W.2R,"9v",W.f5);1j.2m(W.2R,"bB",W.f6);1j.2m(W.2R,"8y",W.f7)}},f3:19(e,a){W.nS&&W.nS(e,a)},f4:19(e,a){W.nT&&W.nT(e,a)},f2:19(e,a){W.vs&&W.vs(e,a)},f5:19(e,a){W.nU&&W.nU(e,a)},f6:19(e,a){W.nV&&W.nV(e,a)},f7:19(e,a){W.nW&&W.nW(e,a)},94:19(e){W.vt(e);3U(1c.1T,"bs",W.b3);3U(1c.1T,"9s",W.67);4E(W.2R,"47",W.67);4E(W.2R,"9s",W.67);if(e.1A==="bq")4E(W.2R,"4T",W.94);1g{3U(1c.1T,"4y",W.b3);3U(1c.1T,"47",W.67)}},b3:19(e){W.vu(e);4E(1c.1T,"4y",W.b3);4E(1c.1T,"bs",W.b3);4E(1c.1T,"47",W.67);4E(1c.1T,"9s",W.67);3U(W.2R,"47",W.67);3U(W.2R,"9s",W.67);if(e.1A==="bs"){1a a=W;6A(19(){3U(a.2R,"4T",a.94)},sM)}},67:19(e){!W.tI&&e.9o&&e.9o();W.vv(e)},f1:19(){W.cg()},nX:19(a,b){1a c=W.3W()||W.8N();1b!!(a&&(a.b4||a!==c)||!a&&!!c||!a&&!c&&!W.6L||b&&W.iZ&&W.4t&&(b.x!==W.iZ.x||b.y!==W.iZ.y))},vu:19(e){1a a;if(W.eI&&W.j0){W.vw(e);1b}if(W.3X){W.vx();a=W.3X.1u}1g a=W.8Z(e,1l);1a b=W.nX(a,W.4p(e));W.vy(e);if(a)a.b4=1s;b&&W.2w();W.vz(e,a)},vz:19(e,a){W.f0(e,a);1a b=W;6A(19(){b.f0(e,a)},50);W.1Y("5j:up",{1u:a,e:e});a&&a.1Y("4y",{e:e})},vx:19(){1a a=W.3X,1u=a.1u;if(1u.nY)1u.nY=1s;1u.3O();if(W.ii&&1u.vA()){W.1Y("1D:vB",{1u:1u});1u.1Y("vB")}W.vC(1u)},vC:19(a){if(W.9R&&W.9S){1a b=a.87(a.4d(),W.9R,W.9S);a.28=W.9R;a.2k=W.9S;a.1p=b.x;a.1r=b.y;W.9R=1z;W.9S=1z}},vD:19(e){W.j0=1l;W.io(e).2w();if(W.3T)1c.1d.ay(W,W.3h);1a a=1c.1d.bJ(W.3A),5l=1c.1d.5o(W.4p(e,1l),a);W.iN.cn(5l);W.1Y("5j:dr",{e:e});1a b=W.8Z(e);if(1n b!=="1w")b.1Y("4T",{e:e,1u:b})},vE:19(e){if(W.j0){1a a=1c.1d.bJ(W.3A),5l=1c.1d.5o(W.4p(e,1l),a);W.iN.iF(5l)}W.8a(W.uM);W.1Y("5j:3q",{e:e});1a b=W.8Z(e);if(1n b!=="1w")b.1Y("47",{e:e,1u:b})},vw:19(e){W.j0=1s;if(W.3T)W.3h.3f();W.iN.iG();W.1Y("5j:up",{e:e});1a a=W.8Z(e);if(1n a!=="1w")a.1Y("4y",{e:e,1u:a})},vt:19(e){1a a="vF"in e?e.vF===1:e.E8===0;if(!a&&!1c.gG)1b;if(W.eI){W.vD(e);1b}if(W.3X)1b;1a b=W.8Z(e),5l=W.4p(e,1l);W.iZ=5l;1a c=W.nX(b,5l),nZ=W.vG(e,b);if(W.uY(e,b))W.vH(e,b,5l);1g if(nZ){W.vI(e,b);b=W.3W()}if(b&&b.7i&&(b.j1||!nZ)){W.vJ(e,b);W.v1(e,b)}c&&W.2w();W.1Y("5j:dr",{1u:b,e:e});b&&b.1Y("4T",{e:e})},vJ:19(e,a){W.ii&&a.o0();if(a.aV(W.4p(e)))W.tJ(a);if(a!==W.3W()&&a!==W.8N()){W.eZ();W.b1(a,e)}},vH:19(e,a,b){W.vo(e);if(a&&a.7i)W.b1(a,e);1g if(W.4t)W.6L={ex:b.x,ey:b.y,1r:0,1p:0}},eJ:19(a){W.9R=W.3X.1u.28;W.9S=W.3X.1u.2k;1a b=a.4d();a.28="1M";a.2k="1M";a.1p=b.x;a.1r=b.y;W.3X.1p=a.1p;W.3X.1r=a.1r},E9:19(a){1a b=a.87(a.4d(),W.9R,W.9S);a.28=W.9R;a.2k=W.9S;a.1p=b.x;a.1r=b.y;W.9R=1z;W.9S=1z},vv:19(e){1a a,5l;if(W.eI){W.vE(e);1b}if(1n e.am!=="1w"&&e.am.1f>1)1b;1a b=W.6L;if(b){5l=W.4p(e,1l);b.1p=5l.x-b.ex;b.1r=5l.y-b.ey;W.u1()}1g if(!W.3X){a=W.8Z(e);if(!a||a&&!a.7i)W.8a(W.86);1g W.f0(e,a)}1g W.vK(e);W.1Y("5j:3q",{1u:a,e:e});a&&a.1Y("47",{e:e})},vK:19(e){1a a=W.4p(e),2v=W.3X;2v.ds=1s,2v.1u.b4=1l;W.vL(e,2v);W.vM(e,2v,a);W.2w()},vM:19(e,a,b){1a x=b.x,y=b.y,1u=a.1u,3R=a.3R;if(3R==="4N"){W.vb(x,y);W.9T("Ea",1u,e)}1g if(3R==="3l"){W.vN(e,a,x,y);W.9T("o1",1u,e)}1g if(3R==="1O"){W.eS(x,y,"x");W.9T("o1",1u,e)}1g if(3R==="1W"){W.eS(x,y,"y");W.9T("o1",1u,e)}1g if(3R==="3s"){W.nJ(x,y,"x");W.9T("vO",1u,e)}1g if(3R==="3F"){W.nJ(x,y,"y");W.9T("vO",1u,e)}1g{W.v3(x,y);W.9T("Eb",1u,e);W.8a(W.aU)}},9T:19(a,b,e){W.1Y("1D:"+a,{1u:b,e:e});b.1Y(a,{e:e})},vL:19(e,a){if(a.3R==="3l"||a.3R==="1O"||a.3R==="1W"){1a b=W.nD(a.1u);if(b&&(a.28!=="1M"||a.2k!=="1M")||!b&&a.28==="1M"&&a.2k==="1M"){W.iO();a.ds=1l}}},vN:19(e,a,x,y){if((e.5B||W.uJ)&&!a.1u.1J("9Q")){a.o2="3l";W.eS(x,y)}1g{if(!a.ds&&a.o2==="3l")W.iO();a.o2="Ec";W.eS(x,y,"nO")}},f0:19(e,a){if(!a||!a.7i){W.8a(W.86);1b 1s}1g{1a b=W.3W(),66=a.aV&&(!b||!b.bF(a))&&a.aV(W.4p(e,1l));if(!66)W.8a(a.9J||W.9J);1g W.vP(66,a,e)}1b 1l},vP:19(a,b,e){if(a in d)W.8a(W.vQ(a,b,e));1g if(a==="7k"&&b.b5)W.8a(W.uO);1g{W.8a(W.86);1b 1s}},vQ:19(a,b,e){1a n=1m.52(b.95()%4X/45);if(n<0)n+=8;n+=d[a];if(e.5B&&d[a]%2===0)n+=2;n%=8;1b W.vq[n]}})})();(19(){1a c=1m.2g,29=1m.29;1c.1d.1D.1B(1c.4G.1v,{vG:19(e,a){1a b=W.8N();1b e.5B&&a&&a.7i&&(W.3W()||b&&b!==a)&&W.4t},vI:19(e,a){if(a===W.3W()){a=W.8Z(e,1l);if(!a||a.vR("1L"))1b}if(W.3W())W.vS(a,e);1g W.vT(a,e);if(W.eY)W.eY.j2()},vS:19(a,e){1a b=W.3W();if(b.bF(a)){b.vU(a);W.nQ(b);a.1K("4e",1s);if(b.at()===1){W.ew(e);W.b1(b.h6(0));1b}}1g{b.j3(a);W.nQ(b)}W.1Y("4t:co",{1u:b,e:e});b.1K("4e",1l)},vT:19(a,e){if(W.6O&&a!==W.6O){1a b=W.vV(a);b.j3();W.iY(b);W.6O=1z;W.1Y("4t:co",{1u:b,e:e})}a.1K("4e",1l)},vV:19(a){1a b=W.4K(),vW=b.2X(W.6O)<b.2X(a),vX=vW?[W.6O,a]:[a,W.6O];1b 1k 1c.7C(vX,{1q:W})},vY:19(e){1a a=W.vZ();if(a.1f===1)W.b1(a[0],e);1g if(a.1f>1){a=1k 1c.7C(a.Ed(),{1q:W});a.j3();W.iY(a,e);a.j2();W.1Y("4t:co",{1u:a});W.2w()}},vZ:19(){1a a=[],7E,x1=W.6L.ex,y1=W.6L.ey,x2=x1+W.6L.1p,y2=y1+W.6L.1r,j4=1k 1c.1Z(c(x1,x2),c(y1,y2)),j5=1k 1c.1Z(29(x1,x2),29(y1,y2)),w1=x1===x2&&y1===y2;1i(1a i=W.1Q.1f;i--;){7E=W.1Q[i];if(!7E||!7E.7i||!7E.4Z)3a;if(7E.w2(j4,j5)||7E.o3(j4,j5)||7E.9K(j4)||7E.9K(j5)){7E.1K("4e",1l);a.1C(7E);if(w1)1y}}1b a},vy:19(e){if(W.4t&&W.6L)W.vY(e);1a a=W.3W();if(a){a.w5().3O();a.b4=1s;W.8a(W.86)}W.6L=1z;W.3X=1z}})})();1c.1d.1D.1B(1c.2U.1v,{5s:19(a){a||(a={});1a b=a.9U||"w6",cC=a.cC||1,ek=a.ek||19(){},f8=a.f8||1,o4=a.o4||1s,j6={1p:a.1p,1r:a.1r,1e:a.1e,1h:a.1h};if(f8!==1)1b W.w7(b,cC,j6,f8);if(o4==1l)1b W.w8(b,ek,cC,j6);1g 1b W.o5(b,cC,j6)},o5:19(a,b,c){W.2w();1a d=W.4F,f9=W.w9(d,c);if(a==="j7")a="aS";1a e=1c.2U.6Y("un")?(f9||d).5s("4q/"+a,b):(f9||d).5s("4q/"+a);if(f9)f9=1z;1b e},w8:19(c,d,e,f){W.2w();1a g=W.4F;if(c==="j7")c="aS";1a h=g.wa(19(a){1a b=o6.Ee(a);d(b)},"4q/"+c)},w9:19(a,b){1a c,o7,wb="1p"in b||"1r"in b||"1e"in b||"1h"in b;if(wb){c=1c.1d.6g();o7=c.2L("2d");c.1e=b.1e||W.1e;c.1h=b.1h||W.1h;o7.97(a,-b.1p||0,-b.1r||0)}1b c},w7:19(a,b,c,d){1a e=W.6o(),j8=W.7z(),o8=e*d,o9=j8*d,aX=W.8N(),fa=W.3W(),1X=W.aM;if(d>1)W.aN(o8).aO(o9);1X.3l(d,d);if(c.1p)c.1p*=d;if(c.1r)c.1r*=d;if(c.1e)c.1e*=d;1g if(d<1)c.1e=o8;if(c.1h)c.1h*=d;1g if(d<1)c.1h=o9;if(fa)W.wc(fa);1g if(aX&&W.eZ)W.eZ();1a f=W.o5(a,b,c);W.1e=e;W.1h=j8;1X.3l(1/d,1/d);W.aN(e).aO(j8);if(fa)W.wd(fa);1g if(aX&&W.b1)W.b1(aX);W.3h&&W.5t(W.3h);W.2w();1b f},we:19(a,b,c){1b W.5s({9U:a,f8:b,cC:c})},wc:19(a){a.Ef=a.6t;a.fb=a.6P;a.6t=1l;a.6P="7h(0,0,0,0)";a.as(19(o){o.fb=o.6P;o.6P="7h(0,0,0,0)"})},wd:19(a){a.Eg=a.Eh;a.6P=a.fb;a.as(19(o){o.6P=o.fb;3i o.fb})}});1c.1d.1D.1B(1c.2U.1v,{Ei:19(a,b,c){1b W.oa(a,b,c)},oa:19(a,b,c){if(!a)1b;1a d=1n a==="2V"?wf.hZ(a):a;W.ni();1a e=W;W.wg(d.6l,19(){e.wh(d,b)},c);1b W},wh:19(a,b){1a c=W,7S={3I:1s,6m:1s,5K:1s,6p:1s};if(!a.5K&&!a.6p&&!a.ci&&!a.ip){b&&b();1b}1a d=19(){if(7S.5K&&7S.6p&&7S.3I&&7S.6m)b&&b()};W.fc("5K",a.5K,7S,d);W.fc("6p",a.6p,7S,d);W.fc("3I",a.ci,7S,d);W.fc("6m",a.ip,7S,d);d()},fc:19(b,c,d,e){1a f=W;if(!c){d[b]=1l;1b}if(b==="5K"||b==="6p")1c.1F.32(c,19(a){f[b]=a;d[b]=1l;e&&e()});1g W["1K"+1c.1d.2V.7v(b,1l)](c,19(){d[b]=1l;e&&e()})},wg:19(d,e,f){1a g=W;if(!d||d.1f===0){e&&e();1b}1a h=W.6D;W.6D=1s;1c.1d.dF(d,19(c){c.4z(19(a,b){g.rg(a,b,1l)});g.6D=h;e&&e()},1z,f)},Ej:19(b,c){W.3P(19(a){c(a.5s(b))})},Ek:19(b,c,d){W.3P(19(a){d(a.we(b,c))})},3P:19(b,c){1a d=wf.El(W.iw(c));W.wi(19(a){a.oa(d,19(){b&&b(a)})})},wi:19(a){1a b=1c.1T.5A("1q");b.1e=W.6o();b.1h=W.7z();1a c=1k 1c.4G(b);c.3T=W.3T;if(W.5K){c.n7(W.5K.3D,19(){c.2w();a&&a(c)});c.wj=W.wj;c.wk=W.wk}1g a&&a(c)}});(19(){1a c=1c.1d.4Y,9w=1c.1d.9w;1c.1d.1D.1B(1c.4G.1v,{nS:19(e,a){if(W.eI||!e.am||e.am.1f!==2||"2W"!==a.2W)1b;1a b=W.8Z(e);if("1w"!==1n b){W.j9={e:e,b6:a,1u:b};W.wl()}W.1Y("9r:2W",{1u:b,e:e,b6:a})},j9:1z,wl:19(){if(W.j9===1z||W.3X===1z)1b;1a a=W.j9.b6,t=W.3X;t.3R="3l";t.28=t.2k="1M";W.eJ(t.1u);if(a.ak!==0)t.3R="4N";W.2w();t.3R="7P"},nT:19(e,a){W.1Y("9r:7P",{e:e,b6:a})},nU:19(e,a){W.1Y("9r:9v",{e:e,b6:a})},nV:19(e,a){W.1Y("9r:bB",{e:e,b6:a})},nW:19(e,a){W.1Y("9r:8y",{e:e,b6:a})},Em:19(s,a){1a t=W.3X,1u=t.1u,89=1u.1J("89"),7D=1u.1J("7D");if(89&&7D)1b;1u.nY=1l;1a b=1u.87(1u.4d(),t.28,t.2k);if(!a){t.8T=t.1O*s;t.8U=t.1W*s;if(!89)1u.1K("1O",t.1O*s);if(!7D)1u.1K("1W",t.1W*s)}1u.aR(b,t.28,t.2k)},En:19(a){1a t=W.3X;if(t.1u.1J("eU"))1b;t.1u.2T=9w(c(a)+t.nG)}})})();(19(h){1a i=h.1c||(h.1c={}),1B=i.1d.1D.1B,2G=i.1d.2G,7v=i.1d.2V.7v,4Y=i.1d.4Y,cD=i.2U.6Y("8O");if(i.2x)1b;i.2x=i.1d.2J({1A:"1D",28:"1p",2k:"1r",1r:0,1p:0,1e:0,1h:0,1O:1,1W:1,5u:1s,6q:1s,1U:1,2T:0,3s:0,3F:0,fd:12,9L:1l,9J:1z,8V:0,6P:"7h(ob,oc,2e,0.75)",wm:"7h(ob,oc,2e,0.5)",cq:1s,aT:1l,1I:"ca(0,0,0)",8G:"Eo",98:"22-vi",3I:"",1H:1z,3n:1,2C:1z,5Z:"od",6j:"wn",7W:10,2I:1z,oe:.4,wo:1,3L:1z,fe:.tw,7i:1l,eL:1l,4Z:1l,6t:1l,cu:1l,b5:1l,Ep:40,iM:1s,6J:1l,3T:1z,8P:1s,8Q:1s,eU:1s,89:1s,7D:1s,9Q:1s,iR:1s,iS:1s,eT:1s,6h:("1r 1p 1e 1h 1O 1W 5u 6q 28 2k 3L "+"1H 3n 2C 5Z 6j 7W "+"2T 1U 1I 8G 98 2I 3T 4Z 3I "+"6i 6F 9y 3s 3F").3o(" "),2u:19(a){if(a)W.8M(a)},wp:19(a){if(a.1I&&a.1I.44&&!(a.1I 7a i.81))W.1K("1I",1k i.81(a.1I));if(a.1H&&a.1H.44&&!(a.1H 7a i.81))W.1K("1H",1k i.81(a.1H))},wq:19(a){if(a.1I&&a.1I.22&&!(a.1I 7a i.7Z))W.1K("1I",1k i.7Z(a.1I));if(a.1H&&a.1H.22&&!(a.1H 7a i.7Z))W.1K("1H",1k i.7Z(a.1H))},wr:19(a){if(!a.3T||1n a.3T!=="2V")1b;1a b=i.1d.hf(a.3T);if(1n b!=="1w")W.3T=1k ax("1X",b)},8M:19(a){1i(1a b in a)W.1K(b,a[b]);W.wp(a);W.wq(a);W.wr(a)},2v:19(a,b){if(W.1L&&W.1q.ik&&W.1L===W.1q.eY)W.1L.2v(a);1a c=b?W.og():W.4d();a.4M(c.x,c.y);a.4N(4Y(W.2T));a.3l(W.1O*(W.5u?-1:1),W.1W*(W.6q?-1:1));a.2v(1,0,1m.bZ(4Y(W.3s)),1,0,0);a.2v(1,1m.bZ(4Y(W.3F)),0,1,0,0)},1N:19(a){1a b=i.2x.3u,1D={1A:W.1A,28:W.28,2k:W.2k,1p:2G(W.1p,b),1r:2G(W.1r,b),1e:2G(W.1e,b),1h:2G(W.1h,b),1H:W.1H&&W.1H.1N?W.1H.1N():W.1H,1I:W.1I&&W.1I.1N?W.1I.1N():W.1I,3n:2G(W.3n,b),2C:W.2C?W.2C.4o():W.2C,5Z:W.5Z,6j:W.6j,7W:2G(W.7W,b),1O:2G(W.1O,b),1W:2G(W.1W,b),2T:2G(W.95(),b),5u:W.5u,6q:W.6q,1U:2G(W.1U,b),2I:W.2I&&W.2I.1N?W.2I.1N():W.2I,4Z:W.4Z,3T:W.3T&&ag(W.3T),3I:W.3I,8G:W.8G,98:W.98,3L:W.3L?W.3L.4o():W.3L,3s:2G(W.3s,b),3F:2G(W.3F,b),cq:W.cq,aT:W.aT,ws:W.ws,wu:W.wu,wv:W.wv,ww:W.ww,wx:W.wx,wy:W.wy,wz:W.wz,wA:W.wA,7i:W.7i,eL:W.eL,3D:W.3D,cE:W.cE,ff:W.ff,cF:W.cF,fg:W.fg,wB:W.wB};if(!W.6J)1D=W.fh(1D);i.1d.lk(W,1D,a);1b 1D},ck:19(a){1b W.1N(a)},fh:19(c){1a d=i.1d.lg(c.1A).1v,6h=d.6h;6h.4z(19(a){if(c[a]===d[a])3i c[a];1a b=2x.1v.42.1V(c[a])==="[1D 3w]"&&2x.1v.42.1V(d[a])==="[1D 3w]";if(b&&c[a].1f===0&&d[a].1f===0)3i c[a]});1b c},42:19(){1b"#<1c."+7v(W.1A)+">"},1J:19(a){1b W[a]},wC:19(a){1i(1a b in a)W.4s(b,a[b])},1K:19(a,b){if(1n a==="1D")W.wC(a);1g if(1n b==="19"&&a!=="3T")W.4s(a,b(W.1J(a)));1g W.4s(a,b);1b W},4s:19(a,b){1a c=a==="1O"||a==="1W";if(c)b=W.oh(b);if(a==="1O"&&b<0){W.5u=!W.5u;b*=-1}1g if(a==="1W"&&b<0){W.6q=!W.6q;b*=-1}1g if(a==="1e"||a==="1h")W.fe=2G(1m.2g(.1,1/1m.29(W.1e,W.1h)),2);1g if(a==="2I"&&b&&!(b 7a i.6I))b=1k i.6I(b);W[a]=b;1b W},oi:19(){},oj:19(a){1a b=W.1J(a);if(1n b==="Eq")W.1K(a,!b);1b W},dG:19(a){W.5N=a;1b W},cG:19(){if(W.1q&&W.1q.3A)1b W.1q.3A;1b[1,0,0,1,0,0]},62:19(a,b){if(W.1e===0&&W.1h===0||!W.4Z)1b;a.3E();W.ok(a);if(!b)W.2v(a);W.fi(a);W.ol(a);if(W.3L)a.2v.31(a,W.3L);W.ja(a);W.7B(a);W.3T&&i.1d.ay(W,a);W.5v(a,b);W.3T&&a.3f();a.3f()},ja:19(a){if(W.1L)W.1L.ja(a);a.eF*=W.1U},fi:19(a){if(W.1H){a.5M=W.3n;a.uo=W.5Z;a.uq=W.6j;a.Er=W.7W;a.7A=W.1H.4c?W.1H.4c(a,W):W.1H}},ol:19(a){if(W.1I)a.53=W.1I.4c?W.1I.4c(a,W):W.1I},aW:19(a,b){if(!W.4e||b)1b;1a c=W.cG();a.3E();1a d;if(W.1L){d=i.1d.5o(W.1L.4d(),c);a.4M(d.x,d.y);a.4N(4Y(W.1L.2T))}d=i.1d.5o(W.4d(),c,1z!=W.1L);if(W.1L){d.x*=W.1L.1O;d.y*=W.1L.1W}a.4M(d.x,d.y);a.4N(4Y(W.2T));W.wD(a);W.ez(a);a.3f()},7B:19(a){if(!W.2I)1b;1a b=W.1q&&W.1q.3A[0]||1,om=W.1q&&W.1q.3A[3]||1;a.iz=W.2I.26;a.iA=W.2I.57*(b+om)*(W.1O+W.1W)/4;a.iB=W.2I.2q*b*W.1O;a.iC=W.2I.2n*om*W.1W},oo:19(a){if(!W.2I)1b;a.iz="";a.iA=a.iB=a.iC=0},9V:19(a){if(!W.1I)1b;a.3E();if(W.1I.4r){1a g=W.1I.4r;a.2v.31(a,g)}if(W.1I.4c)a.4M(-W.1e/2+W.1I.2q||0,-W.1h/2+W.1I.2n||0);if(W.8G==="wE")a.1I("wE");1g a.1I();a.3f()},8d:19(a){if(!W.1H||W.3n===0)1b;if(W.2I&&!W.2I.ib)W.oo(a);a.3E();if(W.2C){if(1&W.2C.1f)W.2C.1C.31(W.2C,W.2C);if(cD){a.8O(W.2C);W.fj&&W.fj(a)}1g W.99&&W.99(a);a.1H()}1g{if(W.1H.4r){1a g=W.1H.4r;a.2v.31(a,g)}W.fj?W.fj(a):a.1H()}a.3f()},3P:19(a,b){if(W.7K.32)1b W.7K.32(W.1N(b),a);1b 1k i.2x(W.1N(b))},Es:19(b){1a c=W.5s();i.1d.7s(c,19(a){if(b)b(1k i.1F(a))});1b W},5s:19(a){a||(a={});1a b=i.1d.6g(),cH=W.9b();b.1e=cH.1e;b.1h=cH.1h;i.1d.bU(b,"dl");1a c=1k i.2U(b);if(a.9U==="j7")a.9U="aS";if(a.9U==="aS")c.3I="#wF";1a d={4e:W.1J("4e"),1p:W.cI(),1r:W.cJ()};W.1K("4e",1s);W.aR(1k i.1Z(b.1e/2,b.1h/2),"1M","1M");1a e=W.1q;c.2j(W);1a f=c.5s(a);W.1K(d).3O();W.1q=e;c.nx();c=1z;1b f},wa:19(a){a||(a={});1a b=i.1d.6g(),cH=W.9b();b.1e=cH.1e;b.1h=cH.1h;i.1d.bU(b,"dl");1a c=1k i.2U(b);if(a.9U==="j7")a.9U="aS";if(a.9U==="aS")c.3I="#wF";1a d={4e:W.1J("4e"),1p:W.cI(),1r:W.cJ()};W.1K("4e",1s);W.aR(1k i.1Z(b.1e/2,b.1h/2),"1M","1M");1a e=W.1q;c.2j(W);1a f=c.5s(a);W.1K(d).3O();W.1q=e;c.nx();c=1z;1b f},vR:19(a){1b W.1A===a},4n:19(){1b 0},iw:19(a){1b W.1N(a)},Et:19(a,b){b||(b={});1a c={44:[]};c.1A=b.1A||(b.r1||b.r2?"cb":"aK");c.2H={x1:b.x1,y1:b.y1,x2:b.x2,y2:b.y2};if(b.r1||b.r2){c.2H.r1=b.r1;c.2H.r2=b.r2}b.4r&&(c.4r=b.4r);1i(1a d in b.44){1a e=1k i.2s(b.44[d]);c.44.1C({2E:d,26:e.ep(),1U:e.7X()})}1b W.1K(a,i.81.tv(W,c))},Eu:19(a){1b W.1K("1I",1k i.7Z(a))},eB:19(a){1b W.1K("2I",a?1k i.6I(a):1z)},Ev:19(a){W.1K("1I",a);1b W},b0:19(a){1a b=(W.28!=="1M"||W.2k!=="1M")&&W.aT;if(b)W.eJ();W.1K("2T",a);if(b)W.wG();1b W},Ew:19(){W.1q.u3(W);1b W},Ex:19(){W.1q.u4(W);1b W},1M:19(){W.1q.u5(W);1b W},2m:19(){W.1q.2m(W);1b W},wH:19(e,a){a=a||W.1q.4p(e);1a b=1k i.1Z(a.x,a.y),jb=W.og();if(W.2T)b=i.1d.dE(b,jb,i.1d.4Y(-W.2T));1b{x:b.x-jb.x,y:b.y-jb.y}},ok:19(a){if(W.98)a.98=W.98}});i.1d.lm(i.2x);i.2x.1v.4N=i.2x.1v.b0;1B(i.2x.1v,i.bE);i.2x.3u=2;i.2x.eh=0})(1n 1S!=="1w"?1S:W);(19(){1a f=1c.1d.4Y,b7={1p:-.5,1M:0,3K:.5},op={1r:-.5,1M:0,6e:.5};1c.1d.1D.1B(1c.2x.1v,{jc:19(a,b,c,d,e){1a x=a.x,y=a.y,2q=b7[d]-b7[b],2n=op[e]-op[c],6s;if(2q||2n){6s=W.8S();x=a.x+2q*6s.x;y=a.y+2n*6s.y}1b 1k 1c.1Z(x,y)},oq:19(a,b,c){1a p=W.jc(a,b,c,"1M","1M");if(W.2T)1b 1c.1d.dE(p,a,f(W.2T));1b p},87:19(a,b,c){1a p=W.jc(a,"1M","1M",b,c);if(W.2T)1b 1c.1d.dE(p,a,f(W.2T));1b p},4d:19(){1a a=1k 1c.1Z(W.1p,W.1r);1b W.oq(a,W.28,W.2k)},or:19(a,b){1a c=W.4d();1b W.87(c,a,b)},eQ:19(a,b,c){1a d=W.4d(),p,p2;if(b&&c)p=W.jc(d,"1M","1M",b,c);1g p=1k 1c.1Z(W.1p,W.1r);p2=1k 1c.1Z(a.x,a.y);if(W.2T)p2=1c.1d.dE(p2,d,-f(W.2T));1b p2.ld(p)},aR:19(a,b,c){1a d=W.oq(a,b,c),6b=W.87(d,W.28,W.2k);W.1K("1p",6b.x);W.1K("1r",6b.y)},Ey:19(a){1a b=f(W.2T),os=W.6o(),wI=1m.4A(b)*os,wJ=1m.41(b)*os;W.1p+=wI*(b7[a]-b7[W.28]);W.1r+=wJ*(b7[a]-b7[W.28]);W.3O();W.28=a},eJ:19(){W.jd=W.28;W.je=W.2k;1a a=W.4d();W.28="1M";W.2k="1M";W.1p=a.x;W.1r=a.y},wG:19(){1a a=W.87(W.4d(),W.jd,W.je);W.28=W.jd;W.2k=W.je;W.1p=a.x;W.1r=a.y;W.jd=1z;W.je=1z},og:19(){1b W.87(W.4d(),"1p","1r")}})})();(19(){19 5k(a){1b[1k 1c.1Z(a.tl.x,a.tl.y),1k 1c.1Z(a.tr.x,a.tr.y),1k 1c.1Z(a.br.x,a.br.y),1k 1c.1Z(a.bl.x,a.bl.y)]}1a e=1c.1d.4Y;1c.1d.1D.1B(1c.2x.1v,{5O:1z,w2:19(a,b){1a c=5k(W.5O),wK=1c.3t.t6(c,a,b);1b wK.c8==="3t"},nv:19(a){1a b=1c.3t.t5(5k(W.5O),5k(a.5O));1b b.c8==="3t"},eA:19(a){1a b=a.9b(),wL=1k 1c.1Z(b.1p,b.1r),wM=1k 1c.1Z(b.1p+b.1e,b.1r+b.1h);1b W.o3(wL,wM)},o3:19(a,b){1a c=W.9b();1b c.1p>=a.x&&c.1p+c.1e<=b.x&&c.1r>=a.y&&c.1r+c.1h<=b.y},9K:19(a){1a b=W.ot(W.5O),b8=W.ou(a,b);1b b8!==0&&b8%2===1},ot:19(a){1b{Ez:{o:a.tl,d:a.tr},EA:{o:a.tr,d:a.br},EB:{o:a.br,d:a.bl},EC:{o:a.bl,d:a.tl}}},ou:19(a,b){1a c,b2,a1,a2,xi,yi,jf=0,5P;1i(1a d in b){5P=b[d];if(5P.o.y<a.y&&5P.d.y<a.y)3a;if(5P.o.y>=a.y&&5P.d.y>=a.y)3a;if(5P.o.x===5P.d.x&&5P.o.x>=a.x){xi=5P.o.x;yi=a.y}1g{c=0;b2=(5P.d.y-5P.o.y)/(5P.d.x-5P.o.x);a1=a.y-c*a.x;a2=5P.o.y-b2*5P.o.x;xi=-(a1-a2)/(c-b2);yi=a1+c*xi}if(xi>=a.x)jf+=1;if(jf===2)1y}1b jf},ED:19(){1b W.9b().1e},EE:19(){1b W.9b().1h},9b:19(){W.5O||W.3O();1b 1c.1d.le([W.5O.tl,W.5O.tr,W.5O.br,W.5O.bl])},6o:19(){1b W.8S().x},7z:19(){1b W.8S().y},oh:19(a){if(1m.2r(a)<W.fe)if(a<0)1b-W.fe;1g 1b W.fe;1b a},3l:19(a){a=W.oh(a);if(a<0){W.5u=!W.5u;W.6q=!W.6q;a*=-1}W.1O=a;W.1W=a;W.3O();1b W},EF:19(a){1a b=W.9b().1e/W.6o();1b W.3l(a/W.1e/b)},EG:19(a){1a b=W.9b().1h/W.7z();1b W.3l(a/W.1h/b)},3O:19(){1a a=e(W.2T),6r=W.cG(),6s=W.jg(),9c=6s.x,fk=6s.y;if(9c<0)9c=1m.2r(9c);1a b=1m.41(a),8A=1m.4A(a),jh=9c>0?1m.bG(fk/9c):0,ov=9c/1m.4A(jh)/2,2q=1m.4A(jh+a)*ov,2n=1m.41(jh+a)*ov,2H=1c.1d.5o(W.4d(),6r),tl=1k 1c.1Z(2H.x-2q,2H.y-2n),tr=1k 1c.1Z(tl.x+9c*8A,tl.y+9c*b),bl=1k 1c.1Z(tl.x-fk*b,tl.y+fk*8A),br=1k 1c.1Z(2H.x+2q,2H.y+2n),ml=1k 1c.1Z((tl.x+bl.x)/2,(tl.y+bl.y)/2),mt=1k 1c.1Z((tr.x+tl.x)/2,(tr.y+tl.y)/2),mr=1k 1c.1Z((br.x+tr.x)/2,(br.y+tr.y)/2),mb=1k 1c.1Z((br.x+bl.x)/2,(br.y+bl.y)/2),7k=1k 1c.1Z(mt.x,mt.y-fk/2);W.5O={tl:tl,tr:tr,br:br,bl:bl,ml:ml,mt:mt,mr:mr,mb:mb,7k:7k};W.ow&&W.ow();1b W},wN:19(a,b){1a c=[1,0,1m.bZ(e(a)),1,0,0],wO=[1,1m.bZ(e(b)),0,1,0,0],hO=[W.1O,0,0,W.1W,0,0],m=1c.1d.az(hO,c,1l);1b 1c.1d.az(m,wO,1l)}})})();1c.1d.1D.1B(1c.2x.1v,{ir:19(){if(W.1L)1c.2U.1v.ir.1V(W.1L,W);1g W.1q.ir(W);1b W},it:19(){if(W.1L)1c.2U.1v.it.1V(W.1L,W);1g W.1q.it(W);1b W},iu:19(a){if(W.1L)1c.2U.1v.iu.1V(W.1L,W,a);1g W.1q.iu(W,a);1b W},iv:19(a){if(W.1L)1c.2U.1v.iv.1V(W.1L,W,a);1g W.1q.iv(W,a);1b W},6f:19(a){if(W.1L)1c.2U.1v.6f.1V(W.1L,W,a);1g W.1q.6f(W,a);1b W}});1c.1d.1D.1B(1c.2x.1v,{6u:19(){1a a=W.1I?W.1I.4c?"9E(#cc"+W.1I.id+")":W.1I:"4D",8G=W.8G,1H=W.1H?W.1H.4c?"9E(#cc"+W.1H.id+")":W.1H:"4D",3n=W.3n?W.3n:"0",2C=W.2C?W.2C.2A(" "):"4D",5Z=W.5Z?W.5Z:"od",6j=W.6j?W.6j:"wn",7W=W.7W?W.7W:"4",1U=1n W.1U!=="1w"?W.1U:"1",hK=W.4Z?"":" hK: sj;",5D=W.fl();1b["1H: ",1H,"; ","1H-1e: ",3n,"; ","1H-kM: ",2C,"; ","1H-gH: ",5Z,"; ","1H-kN: ",6j,"; ","1H-kO: ",7W,"; ","1I: ",a,"; ","1I-kL: ",8G,"; ","1U: ",1U,";",5D,hK].2A("")},fl:19(){1b W.2I?"5D: 9E(#cc"+W.2I.id+");":""},6Q:19(){if(W.1L&&W.1L.1A==="21-1L")1b"";1a a=1c.1d.2G,2T=W.95(),3s=W.EH()%4X,3F=W.EI()%4X,6r=!W.1q||W.1q.nr?W.cG():[1,0,0,1,0,0],1M=1c.1d.5o(W.4d(),6r),3u=1c.2x.3u,ji=W.1A==="21-1L"?"":"4M("+a(1M.x,3u)+" "+a(1M.y,3u)+")",wP=2T!==0?" 4N("+a(2T,3u)+")":"",wQ=W.1O===1&&W.1W===1&&6r[0]===1&&6r[3]===1?"":" 3l("+a(W.1O*6r[0],3u)+" "+a(W.1W*6r[3],3u)+")",wR=3s!==0?" 3s("+a(3s,3u)+")":"",wS=3F!==0?" 3F("+a(3F,3u)+")":"",wT=W.1A==="21-1L"?W.1e*6r[0]:0,wU=W.5u?" 51(-1 0 0 1 "+wT+" 0) ":"",wV=W.1A==="21-1L"?W.1h*6r[3]:0,wW=W.6q?" 51(1 0 0 -1 0 "+wV+")":"";1b[ji,wP,wQ,wU,wW,wR,wS].2A("")},7l:19(){1b W.3L?" 51("+W.3L.2A(" ")+") ":""},7m:19(){1a a=[];if(W.1I&&W.1I.4c)a.1C(W.1I.3V(W,1s));if(W.1H&&W.1H.4c)a.1C(W.1H.3V(W,1s));if(W.2I)a.1C(W.2I.3V(W));1b a}});1c.1d.1D.1B(1c.2x.1v,{vA:19(){1b W.6h.lD(19(a){1b W.1J(a)!==W.fm[a]},W)},o0:19(b){W.6h.4z(19(a){W.fm[a]=W.1J(a)},W);if(b&&b.6h)b.6h.4z(19(a){W.fm[a]=W.1J(a)},W);1b W},tW:19(){W.fm={};W.o0();1b W}});(19(){1a l=1c.1d.4Y,wX=19(){1b 1n ll!=="1w"};1c.1d.1D.1B(1c.2x.1v,{jj:1z,aV:19(a){if(!W.6t||!W.4e)1b 1s;1a b=a.x,ey=a.y,b8,b9;W.j1=0;1i(1a i in W.5O){if(!W.jk(i))3a;if(i==="7k"&&!W.b5)3a;if(W.1J("9Q")&&(i==="mt"||i==="mr"||i==="mb"||i==="ml"))3a;b9=W.ot(W.5O[i].66);b8=W.ou({x:b,y:ey},b9);if(b8!==0&&b8%2===1){W.j1=i;1b i}}1b 1s},ow:19(){1a a=W.5O,ox=l(45-W.2T),oy=W.fd*.EJ,fn=oy*1m.4A(ox),fo=oy*1m.41(ox),x,y;1i(1a b in a){x=a[b].x;y=a[b].y;a[b].66={tl:{x:x-fo,y:y-fn},tr:{x:x+fn,y:y-fo},bl:{x:x-fn,y:y+fo},br:{x:x+fo,y:y+fn}}}},wY:19(){1a a=W.3n,w=W.1e,h=W.1h,oz=1l,oA=1l;if(W.1A==="2K"&&W.5Z==="od"){oA=w;oz=h}if(oA)h+=h<0?-a:a;if(oz)w+=w<0?-a:a;1b{x:w,y:h}},8S:19(a,b){if(1n a==="1w")a=W.3s;if(1n b==="1w")b=W.3F;1a c=W.wY(),fp=c.x/2,fq=c.y/2,2p=[{x:-fp,y:-fq},{x:fp,y:-fq},{x:-fp,y:fq},{x:fp,y:fq}],i,3L=W.wN(a,b),6c;1i(i=0;i<2p.1f;i++)2p[i]=1c.1d.5o(2p[i],3L);6c=1c.1d.le(2p);1b{x:W.1J("1A")=="cv"||W.1J("1A")=="1G"?6c.1e+W.1O*30:6c.1e,y:W.1J("1A")=="cv"||W.1J("1A")=="1G"?6c.1h+W.1W*50:6c.1h}},jg:19(){1a a=W.cG(),6s=W.8S(),w=6s.x,h=6s.y;w+=2*W.8V;h+=2*W.8V;1b 1c.1d.5o(1k 1c.1Z(w,h),a,1l)},wD:19(a){if(!W.cu)1b W;a.3E();a.eF=W.b4?W.oe:1;a.7A=W.6P;a.5M=1/W.wo;1a b=W.jg(),1e=b.x,1h=b.y;if(W.1L){1e=1e*W.1L.1O;1h=1h*W.1L.1W}a.iX(~~-(1e/2)-.5,~~-(1h/2)-.5,~~1e+1,~~1h+1);a.3f();1b W},ez:19(a){if(!W.6t)1b W;1a b=W.jg(),1e=b.x,1h=b.y,oB=W.fd/2,1p=-(1e/2)-oB,1r=-(1h/2)-oB,8e=W.9L?"iX":"63";a.3E();a.5M=1;a.eF=W.b4?W.oe:1;a.7A=a.53=W.wm;W.8f("tl",a,8e,1p,1r);W.8f("tr",a,8e,1p+1e,1r);W.8f("bl",a,8e,1p,1r+1h);W.8f("br",a,8e,1p+1e,1r+1h);if(W.b5&&W.jk("7k")&&!W.1J("eU")&&W.6t)W.8f("7k",a,8e,1p+1e/2,1r-1h/2);if(!W.1J("9Q")){W.8f("mt",a,8e,1p+1e/2,1r);W.8f("mb",a,8e,1p+1e/2,1r+1h);W.8f("mr",a,8e,1p+1e,1r+1h/2);W.8f("ml",a,8e,1p,1r+1h/2)}a.3f();1b W},8f:19(a,b,c,d,e,f,g){1a h=W.fd,cK=W.fd;if(W.jk(a)){wX||W.9L||b.nh(d,e,h,cK);1a i;1a j="";1a k="";1a n="";5m(a){1x"tl":if(g)k="b";1g k="t";if(f)j="r";1g j="l";1y;1x"tr":if(g)k="b";1g k="t";if(f)j="l";1g j="r";1y;1x"bl":if(g)k="t";1g k="b";if(f)j="r";1g j="l";1y;1x"br":if(g)k="t";1g k="b";if(f)j="l";1g j="r";1y;9u:k=a.dm(0,1);j=a.dm(1);1y}a=k+j;if(iQ&&W==iQ)5m(a){1x"tl":1x"br":i=4H.oC;1y;1x"tr":1x"bl":i=4H.jl;1y;1x"mt":1x"mb":i=4H.wZ;1y;1x"ml":1x"mr":i=4H.oD;1y;1x"7k":i=4H.3q;1y;9u:b[c](d,e,h,cK);1y}1g if(W.1A=="cv")5m(a){1x"tl":if(9M.9N)i=4H.oC;1g i=4H.2m;1y;1x"tr":i=4H.oD;1y;1x"bl":if(9M.9N)i=4H.2m;1g i=4H.jl;1y;1x"br":i=4H.4N;1y;1x"mb":1x"mt":1x"ml":1x"mr":1x"7k":i=4H.3q;1y;9u:b[c](d,e,h,cK);1y}1g 5m(a){1x"tl":if(9M.9N)i=4H.oC;1g i=4H.2m;1y;1x"bl":if(9M.9N)i=4H.2m;1g i=4H.jl;1y;1x"tr":i=4H.jl;1y;1x"br":i=4H.4N;1y;1x"mb":1x"mt":i=4H.wZ;1y;1x"ml":1x"mr":i=4H.oD;1y;1x"7k":i=4H.3q;1y;9u:b[c](d,e,h,cK);1y}b.97(i,d,e,h,cK)}},jk:19(a){1b W.oE()[a]},x0:19(a,b){W.oE()[a]=b;1b W},oF:19(a){a||(a={});1i(1a p in a)W.x0(p,a[p]);1b W},oE:19(){if(!W.jj)W.jj={tl:1l,tr:1l,br:1l,bl:1l,ml:1l,mt:1l,mr:1l,mb:1l,7k:1l};1b W.jj}})})();1c.1d.1D.1B(1c.2U.1v,{fr:aq,EK:19(b,c){c=c||{};1a d=19(){},3y=c.3y||d,4a=c.4a||d,3J=W;1c.1d.7T({7U:b.1J("1p"),8F:W.cj().1p,7c:W.fr,4a:19(a){b.1K("1p",a);3J.2w();4a()},3y:19(){b.3O();3y()}});1b W},EL:19(b,c){c=c||{};1a d=19(){},3y=c.3y||d,4a=c.4a||d,3J=W;1c.1d.7T({7U:b.1J("1r"),8F:W.cj().1r,7c:W.fr,4a:19(a){b.1K("1r",a);3J.2w();4a()},3y:19(){b.3O();3y()}});1b W},EM:19(b,c){c=c||{};1a d=19(){},3y=c.3y||d,4a=c.4a||d,3J=W;1c.1d.7T({7U:b.1J("1U"),8F:0,7c:W.fr,hF:19(){b.1K("4e",1s)},4a:19(a){b.1K("1U",a);3J.2w();4a()},3y:19(){3J.2m(b);3y()}});1b W}});1c.1d.1D.1B(1c.2x.1v,{7T:19(){if(2S[0]&&1n 2S[0]==="1D"){1a a=[],5e,oG;1i(5e in 2S[0])a.1C(5e);1i(1a i=0,1t=a.1f;i<1t;i++){5e=a[i];oG=i!==1t-1;W.oI(5e,2S[0][5e],2S[1],oG)}}1g W.oI.31(W,2S);1b W},oI:19(b,c,d,e){1a f=W,9W;c=c.42();if(!d)d={};1g d=1c.1d.1D.3P(d);if(~b.2X("."))9W=b.3o(".");1a g=9W?W.1J(9W[0])[9W[1]]:W.1J(b);if(!("oJ"in d))d.oJ=g;if(~c.2X("="))c=g+2Z(c.3d("=",""));1g c=2Z(c);1c.1d.7T({7U:d.oJ,8F:c,hE:d.by,e6:d.e6,7c:d.7c,7d:d.7d&&19(){1b d.7d.1V(f)},4a:19(a){if(9W)f[9W[0]][9W[1]]=a;1g f.1K(b,a);if(e)1b;d.4a&&d.4a()},3y:19(){if(e)1b;f.3O();d.3y&&d.3y()}})}});(19(e){1a f=e.1c||(e.1c={}),1B=f.1d.1D.1B,x3={x1:1,x2:1,y1:1,y2:1},cD=f.2U.6Y("8O");if(f.9d){f.5d("1c.9d is 5J 5i");1b}f.9d=f.1d.2J(f.2x,{1A:"2K",x1:0,y1:0,x2:0,y2:0,2u:19(a,b){b=b||{};if(!a)a=[0,0,0,0];W.2t("2u",b);W.1K("x1",a[0]);W.1K("y1",a[1]);W.1K("x2",a[2]);W.1K("y2",a[3]);W.ft(b)},ft:19(a){a||(a={});W.1e=1m.2r(W.x2-W.x1);W.1h=1m.2r(W.y2-W.y1);W.1p="1p"in a?a.1p:W.x4();W.1r="1r"in a?a.1r:W.x5()},4s:19(a,b){W.2t("4s",a,b);if(1n x3[a]!=="1w")W.ft();1b W},x4:oK({9O:"28",ba:"x1",bb:"x2",fu:"1e"},{fv:"1p",1M:"1M",fw:"3K"}),x5:oK({9O:"2k",ba:"y1",bb:"y2",fu:"1h"},{fv:"1r",1M:"1M",fw:"6e"}),5v:19(a,b){a.4O();if(b){1a c=W.4d();a.4M(c.x-W.3n/2,c.y-W.3n/2)}if(!W.2C||W.2C&&cD){1a p=W.fz();a.6f(p.x1,p.y1);a.5G(p.x2,p.y2)}a.5M=W.3n;1a d=a.7A;a.7A=W.1H||a.53;W.1H&&W.8d(a);a.7A=d},99:19(a){1a p=W.fz();a.4O();f.1d.5a(a,p.x1,p.y1,p.x2,p.y2,W.2C);a.64()},1N:19(a){1b 1B(W.2t("1N",a),W.fz())},fz:19(){1a a=W.x1<=W.x2?-1:1,oL=W.y1<=W.y2?-1:1,x1=a*W.1e*.5,y1=oL*W.1h*.5,x2=a*W.1e*-.5,y2=oL*W.1h*-.5;1b{x1:x1,x2:x2,y1:y1,y2:y2}},3V:19(a){1a b=W.7m(),p={x1:W.x1,x2:W.x2,y1:W.y1,y2:W.y2};if(!(W.1L&&W.1L.1A==="21-1L"))p=W.fz();b.1C("<2K ",\'x1="\',p.x1,\'" y1="\',p.y1,\'" x2="\',p.x2,\'" y2="\',p.y2,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q(),W.7l(),\'"/>\\n\');1b a?a(b.2A("")):b.2A("")},4n:19(){1b 1}});f.9d.5f=f.7J.4o("x1 y1 x2 y2".3o(" "));f.9d.6n=19(a,b){1a c=f.7y(a,f.9d.5f),2p=[c.x1||0,c.y1||0,c.x2||0,c.y2||0];1b 1k f.9d(2p,1B(c,b))};f.9d.32=19(a){1a b=[a.x1,a.y1,a.x2,a.y2];1b 1k f.9d(b,a)};19 oK(a,b){1a c=a.9O,ba=a.ba,bb=a.bb,fu=a.fu,fv=b.fv,1M=b.1M,fw=b.fw;1b 19(){5m(W.1J(c)){1x fv:1b 1m.2g(W.1J(ba),W.1J(bb));1x 1M:1b 1m.2g(W.1J(ba),W.1J(bb))+.5*W.1J(fu);1x fw:1b 1m.29(W.1J(ba),W.1J(bb))}}}})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={}),pi=1m.4V,1B=f.1d.1D.1B;if(f.83){f.5d("1c.83 is 5J 5i.");1b}f.83=f.1d.2J(f.2x,{1A:"bX",3e:0,8g:0,8h:pi*2,2u:19(a){a=a||{};W.2t("2u",a);W.1K("3e",a.3e||0);W.8g=a.8g||W.8g;W.8h=a.8h||W.8h},4s:19(a,b){W.2t("4s",a,b);if(a==="3e")W.x6(b);1b W},1N:19(a){1b 1B(W.2t("1N",a),{3e:W.1J("3e"),8g:W.8g,8h:W.8h})},3V:19(a){1a b=W.7m(),x=0,y=0,2T=(W.8h-W.8g)%(2*pi);if(2T===0){if(W.1L&&W.1L.1A==="21-1L"){x=W.1p+W.3e;y=W.1r+W.3e}b.1C("<bX ",\'cx="\'+x+\'" cy="\'+y+\'" \',\'r="\',W.3e,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q()," ",W.7l(),\'"/>\\n\')}1g{1a c=1m.4A(W.8g)*W.3e,x7=1m.41(W.8g)*W.3e,x8=1m.4A(W.8h)*W.3e,x9=1m.41(W.8h)*W.3e,xa=2T>pi?"1":"0";b.1C(\'<21 d="M \'+c+" "+x7," A "+W.3e+" "+W.3e," 0 ",+xa+" 1"," "+x8+" "+x9,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q()," ",W.7l(),\'"/>\\n\')}1b a?a(b.2A("")):b.2A("")},5v:19(a,b){a.4O();a.iI(b?W.1p+W.3e:0,b?W.1r+W.3e:0,W.3e,W.8g,W.8h,1s);W.9V(a);W.8d(a)},EO:19(){1b W.1J("3e")*W.1J("1O")},EP:19(){1b W.1J("3e")*W.1J("1W")},x6:19(a){W.3e=a;1b W.1K("1e",a*2).1K("1h",a*2)},4n:19(){1b 1}});f.83.5f=f.7J.4o("cx cy r".3o(" "));f.83.6n=19(a,b){b||(b={});1a c=f.7y(a,f.83.5f);if(!xb(c))bQ 1k li("3Z of `r` EQ is ER ES ET gK be EU");c.1p=c.1p||0;c.1r=c.1r||0;1a d=1k f.83(1B(c,b));d.1p-=d.3e;d.1r-=d.3e;1b d};19 xb(a){1b"3e"in a&&a.3e>=0}f.83.32=19(a){1b 1k f.83(a)}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={});if(d.fA){d.5d("1c.fA is 5J 5i");1b}d.fA=d.1d.2J(d.2x,{1A:"EV",2u:19(a){a=a||{};W.2t("2u",a);W.1K("1e",a.1e||3g).1K("1h",a.1h||3g)},5v:19(a){1a b=W.1e/2,68=W.1h/2;a.4O();a.6f(-b,68);a.5G(0,-68);a.5G(b,68);a.64();W.9V(a);W.8d(a)},99:19(a){1a b=W.1e/2,68=W.1h/2;a.4O();d.1d.5a(a,-b,68,0,-68,W.2C);d.1d.5a(a,0,-68,b,68,W.2C);d.1d.5a(a,b,68,-b,68,W.2C);a.64()},3V:19(a){1a b=W.7m(),oM=W.1e/2,68=W.1h/2,2p=[-oM+" "+68,"0 "+-68,oM+" "+68].2A(",");b.1C("<mn ",\'2p="\',2p,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q(),\'"/>\');1b a?a(b.2A("")):b.2A("")},4n:19(){1b 1}});d.fA.32=19(a){1b 1k d.fA(a)}})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={}),xc=1m.4V*2,1B=f.1d.1D.1B;if(f.9e){f.5d("1c.9e is 5J 5i.");1b}f.9e=f.1d.2J(f.2x,{1A:"hJ",rx:0,ry:0,2u:19(a){a=a||{};W.2t("2u",a);W.1K("rx",a.rx||0);W.1K("ry",a.ry||0)},4s:19(a,b){W.2t("4s",a,b);5m(a){1x"rx":W.rx=b;W.1K("1e",b*2);1y;1x"ry":W.ry=b;W.1K("1h",b*2);1y}1b W},EW:19(){1b W.1J("rx")*W.1J("1O")},EX:19(){1b W.1J("ry")*W.1J("1W")},1N:19(a){1b 1B(W.2t("1N",a),{rx:W.1J("rx"),ry:W.1J("ry")})},3V:19(a){1a b=W.7m(),x=0,y=0;if(W.1L&&W.1L.1A==="21-1L"){x=W.1p+W.rx;y=W.1r+W.ry}b.1C("<hJ ",\'cx="\',x,\'" cy="\',y,\'" \',\'rx="\',W.rx,\'" ry="\',W.ry,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q(),W.7l(),\'"/>\\n\');1b a?a(b.2A("")):b.2A("")},5v:19(a,b){a.4O();a.3E();a.2v(1,0,0,W.ry/W.rx,0,0);a.iI(b?W.1p+W.rx:0,b?(W.1r+W.ry)*W.rx/W.ry:0,W.rx,0,xc,1s);a.3f();W.9V(a);W.8d(a)},4n:19(){1b 1}});f.9e.5f=f.7J.4o("cx cy rx ry".3o(" "));f.9e.6n=19(a,b){b||(b={});1a c=f.7y(a,f.9e.5f);c.1p=c.1p||0;c.1r=c.1r||0;1a d=1k f.9e(1B(c,b));d.1r-=d.ry;d.1p-=d.rx;1b d};f.9e.32=19(a){1b 1k f.9e(a)}})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={}),1B=f.1d.1D.1B;if(f.84){f.5d("1c.84 is 5J 5i");1b}1a g=f.2x.1v.6h.4o();g.1C("rx","ry","x","y");f.84=f.1d.2J(f.2x,{6h:g,1A:"5Y",rx:0,ry:0,2C:1z,2u:19(a){a=a||{};W.2t("2u",a);W.xd()},xd:19(){if(W.rx&&!W.ry)W.ry=W.rx;1g if(W.ry&&!W.rx)W.rx=W.ry},5v:19(a,b){if(W.1e===1&&W.1h===1){a.63(0,0,1,1);1b}1a c=W.rx?1m.2g(W.rx,W.1e/2):0,ry=W.ry?1m.2g(W.ry,W.1h/2):0,w=W.1e,h=W.1h,x=b?W.1p:-W.1e/2,y=b?W.1r:-W.1h/2,fB=c!==0||ry!==0,k=1-.EY;a.4O();a.6f(x+c,y);a.5G(x+w-c,y);fB&&a.8B(x+w-k*c,y,x+w,y+k*ry,x+w,y+ry);a.5G(x+w,y+h-ry);fB&&a.8B(x+w,y+h-k*ry,x+w-k*c,y+h,x+w-c,y+h);a.5G(x+c,y+h);fB&&a.8B(x+k*c,y+h,x,y+h-k*ry,x,y+h-ry);a.5G(x,y+ry);fB&&a.8B(x,y+k*ry,x+k*c,y,x+c,y);a.64();W.9V(a);W.8d(a)},99:19(a){1a x=-W.1e/2,y=-W.1h/2,w=W.1e,h=W.1h;a.4O();f.1d.5a(a,x,y,x+w,y,W.2C);f.1d.5a(a,x+w,y,x+w,y+h,W.2C);f.1d.5a(a,x+w,y+h,x,y+h,W.2C);f.1d.5a(a,x,y+h,x,y,W.2C);a.64()},1N:19(a){1a b=1B(W.2t("1N",a),{rx:W.1J("rx")||0,ry:W.1J("ry")||0});if(!W.6J)W.fh(b);1b b},3V:19(a){1a b=W.7m(),x=W.1p,y=W.1r;if(!(W.1L&&W.1L.1A==="21-1L")){x=-W.1e/2;y=-W.1h/2}b.1C("<5Y ",\'x="\',x,\'" y="\',y,\'" rx="\',W.1J("rx"),\'" ry="\',W.1J("ry"),\'" 1e="\',W.1e,\'" 1h="\',W.1h,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q(),W.7l(),\'"/>\\n\');1b a?a(b.2A("")):b.2A("")},4n:19(){1b 1}});f.84.5f=f.7J.4o("x y rx ry 1e 1h".3o(" "));f.84.6n=19(a,b){if(!a)1b 1z;b=b||{};1a c=f.7y(a,f.84.5f);c.1p=c.1p||0;c.1r=c.1r||0;1a d=1k f.84(1B(b?f.1d.1D.3P(b):{},c));d.4Z=d.1e>0&&d.1h>0;1b d};f.84.32=19(a){1b 1k f.84(a)}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={});if(e.8i){e.5d("1c.8i is 5J 5i");1b}e.8i=e.1d.2J(e.2x,{1A:"sa",2p:1z,58:0,4B:0,2u:19(a,b){1b e.69.1v.2u.1V(W,a,b)},jm:19(){1b e.69.1v.jm.1V(W)},cL:19(){1b e.69.1v.cL.1V(W)},1N:19(a){1b e.69.1v.1N.1V(W,a)},3V:19(a){1b e.69.1v.3V.1V(W,a)},5v:19(a){if(!e.69.1v.oN.1V(W,a))1b;W.9V(a);W.8d(a)},99:19(a){1a b,p2;a.4O();1i(1a i=0,1t=W.2p.1f;i<1t;i++){b=W.2p[i];p2=W.2p[i+1]||b;e.1d.5a(a,b.x,b.y,p2.x,p2.y,W.2C)}},4n:19(){1b W.1J("2p").1f}});e.8i.5f=e.7J.4o();e.8i.6n=19(a,b){if(!a)1b 1z;b||(b={});1a c=e.mB(a.2Q("2p")),jn=e.7y(a,e.8i.5f);1b 1k e.8i(c,e.1d.1D.1B(jn,b))};e.8i.32=19(a){1a b=a.2p;1b 1k e.8i(b,a,1l)}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={}),1B=e.1d.1D.1B,2g=e.1d.5E.2g,29=e.1d.5E.29,2G=e.1d.2G;if(e.69){e.5d("1c.69 is 5J 5i");1b}e.69=e.1d.2J(e.2x,{1A:"mn",2p:1z,58:0,4B:0,2u:19(a,b){b=b||{};W.2p=a||[];W.2t("2u",b);W.jm();if(!("1r"in b))W.1r=W.4B;if(!("1p"in b))W.1p=W.58},jm:19(){6X.7t("b");1a a=W.2p,58=2g(a,"x"),4B=2g(a,"y"),bH=29(a,"x"),bI=29(a,"y");W.1e=bH-58||0;W.1h=bI-4B||0;W.58=58||0,W.4B=4B||0;W.2p.4z(19(p){p.x-=W.58+W.1e/2;p.y-=W.4B+W.1h/2},W)},cL:19(){},1N:19(a){1b 1B(W.2t("1N",a),{2p:W.2p.4o()})},3V:19(a){1a b=[],4Q=W.7m();1i(1a i=0,1t=W.2p.1f;i<1t;i++)b.1C(2G(W.2p[i].x,2),",",2G(W.2p[i].y,2)," ");4Q.1C("<",W.1A," ",\'2p="\',b.2A(""),\'" 2f="\',W.6u(),\'" 2v="\',W.6Q()," ",W.7l(),\'"/>\\n\');1b a?a(4Q.2A("")):4Q.2A("")},5v:19(a){if(!W.oN(a))1b;W.9V(a);if(W.1H||W.2C){a.64();W.8d(a)}},oN:19(a){1a b,1t=W.2p.1f;if(!1t||ec(W.2p[1t-1].y))1b 1s;a.4O();if(W.cL){if(!(W.1L&&W.1L.1A==="21-1L"))W.cL();W.cL=1z}a.6f(W.2p[0].x,W.2p[0].y);1i(1a i=0;i<1t;i++){b=W.2p[i];a.5G(b.x,b.y)}1b 1l},99:19(a){e.8i.1v.99.1V(W,a);a.64()},4n:19(){1b W.2p.1f}});e.69.5f=e.7J.4o();e.69.6n=19(a,b){if(!a)1b 1z;b||(b={});1a c=e.mB(a.2Q("2p")),jn=e.7y(a,e.69.5f);1b 1k e.69(c,1B(jn,b))};e.69.32=19(a){1b 1k e.69(a.2p,a,1l)}})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={}),2g=f.1d.5E.2g,29=f.1d.5E.29,1B=f.1d.1D.1B,xe=2x.1v.42,dP=f.1d.dP,xf={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},xg={m:"l",M:"L"};if(f.6M){f.5d("1c.6M is 5J 5i");1b}f.6M=f.1d.2J(f.2x,{1A:"21",21:1z,58:0,4B:0,2u:19(a,b){b=b||{};W.8M(b);if(!a)a=[];1a c=xe.1V(a)==="[1D 3w]";W.21=c?a:a.4f&&a.4f(/[xh][^xh]*/gi);if(!W.21)1b;if(!c)W.21=W.xj();W.xk(b);if(b.5N)W.dG(b.5N)},xk:19(a){1a b=W.xl();W.58=b.1p;W.4B=b.1r;W.1e=b.1e;W.1h=b.1h;if(1n a.1p==="1w")W.1p=b.1p+(W.28==="1M"?W.1e/2:W.28==="3K"?W.1e:0);if(1n a.1r==="1w")W.1r=b.1r+(W.2k==="1M"?W.1h/2:W.2k==="6e"?W.1h:0);W.9X=W.9X||{x:W.58+W.1e/2,y:W.4B+W.1h/2}},5v:19(a){1a b,5C=1z,9Y=0,9Z=0,x=0,y=0,2h=0,2i=0,2N,2O,l=-W.9X.x,t=-W.9X.y;if(W.1L&&W.1L.1A==="21-1L"){l=0;t=0}a.4O();1i(1a i=0,1t=W.21.1f;i<1t;++i){b=W.21[i];5m(b[0]){1x"l":x+=b[1];y+=b[2];a.5G(x+l,y+t);1y;1x"L":x=b[1];y=b[2];a.5G(x+l,y+t);1y;1x"h":x+=b[1];a.5G(x+l,y+t);1y;1x"H":x=b[1];a.5G(x+l,y+t);1y;1x"v":y+=b[1];a.5G(x+l,y+t);1y;1x"V":y=b[1];a.5G(x+l,y+t);1y;1x"m":x+=b[1];y+=b[2];9Y=x;9Z=y;a.6f(x+l,y+t);1y;1x"M":x=b[1];y=b[2];9Y=x;9Z=y;a.6f(x+l,y+t);1y;1x"c":2N=x+b[5];2O=y+b[6];2h=x+b[3];2i=y+b[4];a.8B(x+b[1]+l,y+b[2]+t,2h+l,2i+t,2N+l,2O+t);x=2N;y=2O;1y;1x"C":x=b[5];y=b[6];2h=b[3];2i=b[4];a.8B(b[1]+l,b[2]+t,2h+l,2i+t,x+l,y+t);1y;1x"s":2N=x+b[3];2O=y+b[4];if(5C[0].4f(/[jo]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}a.8B(2h+l,2i+t,x+b[1]+l,y+b[2]+t,2N+l,2O+t);2h=x+b[1];2i=y+b[2];x=2N;y=2O;1y;1x"S":2N=b[3];2O=b[4];if(5C[0].4f(/[jo]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}a.8B(2h+l,2i+t,b[1]+l,b[2]+t,2N+l,2O+t);x=2N;y=2O;2h=b[1];2i=b[2];1y;1x"q":2N=x+b[3];2O=y+b[4];2h=x+b[1];2i=y+b[2];a.eC(2h+l,2i+t,2N+l,2O+t);x=2N;y=2O;1y;1x"Q":2N=b[3];2O=b[4];a.eC(b[1]+l,b[2]+t,2N+l,2O+t);x=2N;y=2O;2h=b[1];2i=b[2];1y;1x"t":2N=x+b[1];2O=y+b[2];if(5C[0].4f(/[jp]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}a.eC(2h+l,2i+t,2N+l,2O+t);x=2N;y=2O;1y;1x"T":2N=b[1];2O=b[2];if(5C[0].4f(/[jp]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}a.eC(2h+l,2i+t,2N+l,2O+t);x=2N;y=2O;1y;1x"a":dP(a,x+l,y+t,[b[1],b[2],b[3],b[4],b[5],b[6]+x+l,b[7]+y+t]);x+=b[6];y+=b[7];1y;1x"A":dP(a,x+l,y+t,[b[1],b[2],b[3],b[4],b[5],b[6]+l,b[7]+t]);x=b[6];y=b[7];1y;1x"z":1x"Z":x=9Y;y=9Z;a.64();1y}5C=b}W.9V(a);W.8d(a)},42:19(){1b"#<1c.6M ("+W.4n()+\'): { "1r": \'+W.1r+\', "1p": \'+W.1p+" }>"},1N:19(b){1a o=1B(W.2t("1N",b),{21:W.21.5c(19(a){1b a.3r()}),9X:W.9X});if(W.5N)o.5N=W.5N;if(W.3L)o.3L=W.3L;1b o},ck:19(a){1a o=W.1N(a);if(W.5N)o.21=W.5N;3i o.5N;1b o},3V:19(a){1a b=[],4Q=W.7m(),oO="";1i(1a i=0,1t=W.21.1f;i<1t;i++)b.1C(W.21[i].2A(" "));1a c=b.2A(" ");if(!(W.1L&&W.1L.1A==="21-1L"))oO=" 4M("+-W.9X.x+", "+-W.9X.y+") ";4Q.1C("<21 ",\'d="\',c,\'" 2f="\',W.6u(),\'" 2v="\',W.6Q(),oO,W.7l(),\'" 1H-gH="52" \',"/>\\n");1b a?a(4Q.2A("")):4Q.2A("")},4n:19(){1b W.21.1f},xj:19(){1a a=[],2H=[],jq,9D,re=/([-+]?((\\d+\\.\\d+)|((\\d+)|(\\.\\d+)))(?:e[-+]?\\d+)?)/ig,4f,oP;1i(1a i=0,a0,1t=W.21.1f;i<1t;i++){jq=W.21[i];oP=jq.3r(1).5q();2H.1f=0;3b(4f=re.h7(oP))2H.1C(4f[0]);a0=[jq.4C(0)];1i(1a j=0,4P=2H.1f;j<4P;j++){9D=2Z(2H[j]);if(!ec(9D))a0.1C(9D)}1a b=a0[0],jr=xf[b.9q()],xm=xg[b]||b;if(a0.1f-1>jr)1i(1a k=1,xn=a0.1f;k<xn;k+=jr){a.1C([b].4o(a0.3r(k,k+jr)));b=xm}1g a.1C(a0)}1b a},xl:19(){1a b=[],aY=[],1P,5C=1z,9Y=0,9Z=0,x=0,y=0,2h=0,2i=0,2N,2O,2D;1i(1a i=0,1t=W.21.1f;i<1t;++i){1P=W.21[i];5m(1P[0]){1x"l":x+=1P[1];y+=1P[2];2D=[];1y;1x"L":x=1P[1];y=1P[2];2D=[];1y;1x"h":x+=1P[1];2D=[];1y;1x"H":x=1P[1];2D=[];1y;1x"v":y+=1P[1];2D=[];1y;1x"V":y=1P[1];2D=[];1y;1x"m":x+=1P[1];y+=1P[2];9Y=x;9Z=y;2D=[];1y;1x"M":x=1P[1];y=1P[2];9Y=x;9Z=y;2D=[];1y;1x"c":2N=x+1P[5];2O=y+1P[6];2h=x+1P[3];2i=y+1P[4];2D=f.1d.78(x,y,x+1P[1],y+1P[2],2h,2i,2N,2O);x=2N;y=2O;1y;1x"C":x=1P[5];y=1P[6];2h=1P[3];2i=1P[4];2D=f.1d.78(x,y,1P[1],1P[2],2h,2i,x,y);1y;1x"s":2N=x+1P[3];2O=y+1P[4];if(5C[0].4f(/[jo]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}2D=f.1d.78(x,y,2h,2i,x+1P[1],y+1P[2],2N,2O);2h=x+1P[1];2i=y+1P[2];x=2N;y=2O;1y;1x"S":2N=1P[3];2O=1P[4];if(5C[0].4f(/[jo]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}2D=f.1d.78(x,y,2h,2i,1P[1],1P[2],2N,2O);x=2N;y=2O;2h=1P[1];2i=1P[2];1y;1x"q":2N=x+1P[3];2O=y+1P[4];2h=x+1P[1];2i=y+1P[2];2D=f.1d.78(x,y,2h,2i,2h,2i,2N,2O);x=2N;y=2O;1y;1x"Q":2h=1P[1];2i=1P[2];2D=f.1d.78(x,y,2h,2i,2h,2i,1P[3],1P[4]);x=1P[3];y=1P[4];1y;1x"t":2N=x+1P[1];2O=y+1P[2];if(5C[0].4f(/[jp]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}2D=f.1d.78(x,y,2h,2i,2h,2i,2N,2O);x=2N;y=2O;1y;1x"T":2N=1P[1];2O=1P[2];if(5C[0].4f(/[jp]/)===1z){2h=x;2i=y}1g{2h=2*x-2h;2i=2*y-2i}2D=f.1d.78(x,y,2h,2i,2h,2i,2N,2O);x=2N;y=2O;1y;1x"a":2D=f.1d.lB(x,y,1P[1],1P[2],1P[3],1P[4],1P[5],1P[6]+x,1P[7]+y);x+=1P[6];y+=1P[7];1y;1x"A":2D=f.1d.lB(x,y,1P[1],1P[2],1P[3],1P[4],1P[5],1P[6],1P[7]);x=1P[6];y=1P[7];1y;1x"z":1x"Z":x=9Y;y=9Z;1y}5C=1P;2D.4z(19(a){b.1C(a.x);aY.1C(a.y)});b.1C(x);aY.1C(y)}1a c=2g(b)||0,4B=2g(aY)||0,bH=29(b)||0,bI=29(aY)||0,xo=bH-c,xp=bI-4B,o={1p:c,1r:4B,1e:xo,1h:xp};1b o}});f.6M.32=19(c,d){if(1n c.21==="2V")f.i0(c.21,19(a){1a b=a[0],xq=c.21;3i c.21;f.1d.1D.1B(b,c);b.dG(xq);d(b)});1g d(1k f.6M(c.21,c))};f.6M.5f=f.7J.4o(["d"]);f.6M.6n=19(a,b,c){1a d=f.7y(a,f.6M.5f);b&&b(1k f.6M(d.d,1B(d,c)))};f.6M.8z=1l})(1n 1S!=="1w"?1S:W);(19(f){1a g=f.1c||(f.1c={}),1B=g.1d.1D.1B,7R=g.1d.5E.7R,xr=g.2x.1v.1N;if(g.9x){g.5d("1c.9x is 5J 5i");1b}g.9x=g.1d.2J(g.6M,{1A:"21-1L",1I:"",2u:19(a,b){b=b||{};W.4R=a||[];1i(1a i=W.4R.1f;i--;)W.4R[i].1L=W;if(b.c4){W.xs(b);3i b.c4}W.8M(b);W.3O();if(b.5N)W.dG(b.5N)},xs:19(a){1a b,p,xC=[],yC=[],21,1h,1e,m;1i(1a j=W.4R.1f;j--;){21=W.4R[j];1h=21.1h+21.3n;1e=21.1e+21.3n;b=[{x:21.1p,y:21.1r},{x:21.1p+1e,y:21.1r},{x:21.1p,y:21.1r+1h},{x:21.1p+1e,y:21.1r+1h}];m=W.4R[j].3L;1i(1a i=0;i<b.1f;i++){p=b[i];if(m)p=g.1d.5o(p,m,1s);xC.1C(p.x);yC.1C(p.y)}}a.1e=1m.29.31(1z,xC);a.1h=1m.29.31(1z,yC)},62:19(a){if(!W.4Z)1b;a.3E();if(W.3L)a.2v.31(a,W.3L);W.2v(a);W.7B(a);W.3T&&g.1d.ay(W,a);a.4M(-W.1e/2,-W.1h/2);1i(1a i=0,l=W.4R.1f;i<l;++i)W.4R[i].62(a,1l);W.3T&&a.3f();a.3f()},4s:19(a,b){if(a==="1I"&&b&&W.xt()){1a i=W.4R.1f;3b(i--)W.4R[i].4s(a,b)}1b W.2t("4s",a,b)},1N:19(a){1a o=1B(xr.1V(W,a),{4R:7R(W.4K(),"1N",a)});if(W.5N)o.5N=W.5N;1b o},ck:19(a){1a o=W.1N(a);if(W.5N)o.4R=W.5N;1b o},3V:19(a){1a b=W.4K(),p=W.or("1p","1r"),ji="4M("+p.x+" "+p.y+")",4Q=W.7m();4Q.1C("<g ",\'2f="\',W.6u(),\'" \',\'2v="\',W.7l(),ji,W.6Q(),\'" \',">\\n");1i(1a i=0,1t=b.1f;i<1t;i++)4Q.1C("\\t",b[i].3V(a));4Q.1C("</g>\\n");1b a?a(4Q.2A("")):4Q.2A("")},42:19(){1b"#<1c.9x ("+W.4n()+"): { 1r: "+W.1r+", 1p: "+W.1p+" }>"},xt:19(){1a c=W.4K()[0].1J("1I")||"";if(1n c!=="2V")1b 1s;c=c.9q();1b W.4K().lC(19(a){1a b=a.1J("1I")||"";1b 1n b==="2V"&&b.9q()===c})},4n:19(){1b W.4R.dC(19(a,b){1b a+(b&&b.4n?b.4n():0)},0)},4K:19(){1b W.4R}});g.9x.32=19(d,e){if(1n d.4R==="2V")g.i0(d.4R,19(a){1a b=d.4R;3i d.4R;1a c=g.1d.rm(a,d,b);e(c)});1g g.1d.dF(d.4R,19(a){3i d.4R;e(1k g.9x(a,d))})};g.9x.8z=1l})(1n 1S!=="1w"?1S:W);(19(e){1a f=e.1c||(e.1c={}),1B=f.1d.1D.1B,2g=f.1d.5E.2g,29=f.1d.5E.29,7R=f.1d.5E.7R;if(f.7C)1b;1a g={8P:1l,8Q:1l,eU:1l,89:1l,7D:1l,9Q:1l};f.7C=f.1d.2J(f.2x,f.lb,{1A:"1L",3n:0,2u:19(a,b,c){b=b||{};W.1Q=[];c&&W.2t("2u",b);W.1Q=a||[];1i(1a i=W.1Q.1f;i--;)W.1Q[i].1L=W;W.fm={};if(b.28)W.28=b.28;if(b.2k)W.2k=b.2k;if(c)W.fC(1l);1g{W.jt();W.fC();W.2t("2u",b)}W.3O();W.j2()},fC:19(a){1i(1a i=W.1Q.1f;i--;)W.xu(W.1Q[i],a)},xu:19(a,b){a.oQ=a.6t;a.6t=1s;if(b)1b;1a c=a.cI(),oR=a.cJ(),1M=W.4d();a.1K({EZ:c,F0:oR,1p:c-1M.x,1r:oR-1M.y});a.3O()},42:19(){1b"#<1c.7C: ("+W.4n()+")>"},j3:19(a){W.ju();if(a){W.1Q.1C(a);a.1L=W;a.4s("1q",W.1q)}W.as(W.oS,W);W.jt();W.fC();1b W},oS:19(a){a.1K("4e",1l);a.1L=W},vU:19(a){W.jv(a);W.ju();W.as(W.oS,W);W.2m(a);W.jt();W.fC();1b W},h5:19(a){a.1L=W;a.4s("1q",W.1q)},lc:19(a){3i a.1L;a.1K("4e",1s)},oT:{1I:1l,1U:1l,3H:1l,3M:1l,2F:1l,4j:1l,3z:1l,3N:1l,4u:1l,3I:1l},4s:19(a,b){1a i=W.1Q.1f;if(W.oT[a]||a==="1q")3b(i--)W.1Q[i].1K(a,b);1g 3b(i--)W.1Q[i].oi(a,b);W.2t("4s",a,b)},1N:19(a){1b 1B(W.2t("1N",a),{6l:7R(W.1Q,"1N",a)})},62:19(a){if(!W.4Z)1b;a.3E();if(W.3L)a.2v.31(a,W.3L);W.2v(a);W.7B(a);W.3T&&f.1d.ay(W,a);1i(1a i=0,1t=W.1Q.1f;i<1t;i++)W.xv(W.1Q[i],a);W.3T&&a.3f();a.3f()},aW:19(a,b){W.2t("aW",a,b);1i(1a i=0,1t=W.1Q.1f;i<1t;i++)W.1Q[i].aW(a)},xv:19(a,b){if(!a.4Z)1b;1a c=a.b5;a.b5=1s;a.62(b);a.b5=c},ju:19(){W.1Q.4z(W.xw,W);1b W},u9:19(a){W.jv(a);W.oU(a);1b a},jv:19(a){1a b=a.1J("28"),oV=a.1J("2k"),1M=a.4d();a.1K({28:"1M",2k:"1M",1p:1M.x,1r:1M.y});W.xx(a);1a c=a.or(b,oV);a.1K({28:b,2k:oV,1p:c.x,1r:c.y});1b W},xx:19(a){if(W.5u){a.oj("5u");a.1K("1p",-a.1J("1p"));a.b0(-a.95())}if(W.6q){a.oj("6q");a.1K("1r",-a.1J("1r"));a.b0(-a.95())}},xw:19(a){W.oU(a);a.3O();a.6t=a.oQ;3i a.oQ;a.1K("4e",1s);a.3O();3i a.1L;1b W},oU:19(a){1a b=W.4d(),oW=W.xz(a);a.1K({2T:a.95()+W.95(),1p:b.x+oW.1p,1r:b.y+oW.1r,1O:a.1J("1O")*W.1J("1O"),1W:a.1J("1W")*W.1J("1W")})},xz:19(a){1a b=W.95()*(1m.4V/ao);1b{1p:-1m.41(b)*a.cJ()*W.1J("1W")+1m.4A(b)*a.cI()*W.1J("1O"),1r:1m.4A(b)*a.cJ()*W.1J("1W")+1m.41(b)*a.cI()*W.1J("1O")}},vn:19(){W.1Q.4z(W.jv,W);1b W.ju()},j2:19(){W.xA=W.1J("1p");W.xB=W.1J("1r");1b W},F1:19(){1b W.xA!==W.1J("1p")||W.xB!==W.1J("1r")},w5:19(){W.as(19(a){a.3O()});1b W},jt:19(a){1a b=[],aY=[],o,5e,oX=["tr","br","bl","tl"],i=0,5w=W.1Q.1f,j,cM=oX.1f;1i(;i<5w;++i){o=W.1Q[i];o.3O();1i(j=0;j<cM;j++){5e=oX[j];b.1C(o.5O[5e].x);aY.1C(o.5O[5e].y)}}W.1K(W.xD(b,aY,a))},xD:19(a,b,c){1a d=f.1d.bJ(W.cG()),fD=f.1d.5o(1k f.1Z(2g(a),2g(b)),d),oY=f.1d.5o(1k f.1Z(29(a),29(b)),d),5F={1e:oY.x-fD.x||0,1h:oY.y-fD.y||0};if(!c){5F.1p=fD.x||0;5F.1r=fD.y||0;if(W.28==="1M")5F.1p+=5F.1e/2;if(W.28==="3K")5F.1p+=5F.1e;if(W.2k==="1M")5F.1r+=5F.1h/2;if(W.2k==="6e")5F.1r+=5F.1h}1b 5F},3V:19(a){1a b=W.7m();b.1C(\'<g 2v="\',W.6Q(),W.7l(),\'" 2f="\',W.fl(),\'">\\n\');1i(1a i=0,1t=W.1Q.1f;i<1t;i++)b.1C("\\t",W.1Q[i].3V(a));b.1C("</g>\\n");1b a?a(b.2A("")):b.2A("")},1J:19(a){if(a in g)if(W[a])1b W[a];1g{1i(1a i=0,1t=W.1Q.1f;i<1t;i++)if(W.1Q[i][a])1b 1l;1b 1s}1g{if(a in W.oT)1b W.1Q[0]&&W.1Q[0].1J(a);1b W[a]}}});f.7C.32=19(b,c){f.1d.dF(b.6l,19(a){3i b.6l;c&&c(1k f.7C(a,b,1l))})};f.7C.8z=1l})(1n 1S!=="1w"?1S:W);(19(g){1a i=1c.1d.1D.1B;if(!g.1c)g.1c={};if(g.1c.1F){1c.5d("1c.1F is 5J 5i.");1b}1c.1F=1c.1d.2J(1c.2x,{1A:"4q",6E:"",6i:"4D",6F:"4D",9y:"dI",oZ:1,p0:1,2u:19(a,b){b||(b={});W.1R=[];W.8j=[];W.2t("2u",b);W.xE(a,b)},6K:19(){1b W.6R},bR:19(a,b,c){W.6R=a;W.fE=a;W.p3(c);if(W.1R.1f!==0)W.p4(b);1g if(b)b();1b W},F2:19(a){W.6E=a;W.6R.6E=a;1b W},F3:19(){1a a=W.6K();1b{1e:a.1e,1h:a.1h}},fj:19(a){a.3E();W.fi(a);a.4O();a.iX(-W.1e/2,-W.1h/2,W.1e,W.1h);a.64();a.3f()},99:19(a){1a x=-W.1e/2,y=-W.1h/2,w=W.1e,h=W.1h;a.3E();W.fi(a);a.4O();1c.1d.5a(a,x,y,x+w,y,W.2C);1c.1d.5a(a,x+w,y,x+w,y+h,W.2C);1c.1d.5a(a,x+w,y+h,x,y+h,W.2C);1c.1d.5a(a,x,y+h,x,y,W.2C);a.64();a.3f()},1N:19(b){1a c=[];W.1R.4z(19(a){if(a)c.1C(a.1N())});1a d=i(W.2t("1N",b),{3D:W.fE.3D||W.fE.jw,1R:c,6E:W.6E,6i:W.6i,6F:W.6F,9y:W.9y});if(W.8j.1f>0)d.8j=W.8j.5c(19(a){1b a&&a.1N()});if(!W.6J)W.fh(d);1b d},3V:19(a){1a b=W.7m(),x=-W.1e/2,y=-W.1h/2,7f="4D";if(W.1L&&W.1L.1A==="21-1L"){x=W.1p;y=W.1r}if(W.6i!=="4D"&&W.6F!=="4D")7f="x"+W.6i+"Y"+W.6F+" "+W.9y;b.1C(\'<g 2v="\',W.6Q(),W.7l(),\'">\\n\',\'<4q 5H:9G="\',W.xF(),\'" x="\',x,\'" y="\',y,\'" 2f="\',W.6u(),\'" 1e="\',W.1e,\'" 1h="\',W.1h,\'" 7f="\',7f,\'"\',"></4q>\\n");if(W.1H||W.2C){1a c=W.1I;W.1I=1z;b.1C("<5Y ",\'x="\',x,\'" y="\',y,\'" 1e="\',W.1e,\'" 1h="\',W.1h,\'" 2f="\',W.6u(),\'"/>\\n\');W.1I=c}b.1C("</g>\\n");1b a?a(b.2A("")):b.2A("")},p5:19(){if(W.6K())1b W.6K().3D||W.6K().jw},F4:19(b,c,d){1c.1d.7s(b,19(a){1b W.bR(a,c,d)},W,d&&d.6E)},42:19(){1b\'#<1c.1F: { 3D: "\'+W.p5()+\'" }>\'},3P:19(a,b){W.7K.32(W.1N(b),a)},p4:19(b,c,d,e){c=c||W.1R;d=d||W.fE;if(!d)1b;1a f=d,7n=1c.1d.6g(),7F=1c.1d.ha(),3J=W;7n.1e=f.1e;7n.1h=f.1h;7n.2L("2d").97(f,0,0,f.1e,f.1h);if(c.1f===0){W.6R=d;b&&b();1b 7n}c.4z(19(a){a&&a.5Q(7n,a.1O||3J.1O,a.1W||3J.1W);if(!e&&a&&a.1A==="fF"){3J.1e*=a.1O;3J.1h*=a.1W}});7F.1e=7n.1e;7F.1h=7n.1h;if(1c.af){7F.3D=7n.F5(1w,1c.1F.xG);3J.6R=7F;!e&&(3J.p6=7F);b&&b()}1g{7F.av=19(){3J.6R=7F;!e&&(3J.p6=7F);b&&b();7F.av=7n=f=1z};7F.3D=7n.5s("4q/w6")}1b 7n},5v:19(a,b){1a x,y,fG=W.xH(),fH;x=b?W.1p:-W.1e/2;y=b?W.1r:-W.1h/2;if(W.9y==="3r"){a.4O();a.5Y(x,y,W.1e,W.1h);a.rn()}if(W.b4===1s&&W.8j.1f&&W.xI()){W.oZ=W.1O;W.p0=W.1W;fH=W.p4(1z,W.8j,W.p6||W.fE,1l)}1g fH=W.6R;fH&&a.97(fH,x+fG.cN,y+fG.cO,fG.1e,fG.1h);W.8d(a)},xI:19(){1b W.1O!==W.oZ||W.1W!==W.p0},xH:19(){1a a=W.1e,1h=W.1h,eM,3l,cN=0,cO=0;if(W.6i!=="4D"||W.6F!=="4D"){eM=[W.1e/W.6R.1e,W.1h/W.6R.1h];3l=W.9y==="dI"?1m.2g.31(1z,eM):1m.29.31(1z,eM);a=W.6R.1e*3l;1h=W.6R.1h*3l;if(W.6i==="hg")cN=(W.1e-a)/2;if(W.6i==="xJ")cN=W.1e-a;if(W.6F==="hg")cO=(W.1h-1h)/2;if(W.6F==="xJ")cO=W.1h-1h}1b{1e:a,1h:1h,cN:cN,cO:cO}},F6:19(){1a a=W.6K();W.1K("1e",a.1e);W.1K("1h",a.1h)},xE:19(a,b){W.bR(1c.1d.e0(a),1z,b);1c.1d.bT(W.6K(),1c.1F.xK)},p3:19(a){a||(a={});W.8M(a);W.ft(a);if(W.6R&&W.6E)W.6R.6E=W.6E},fI:19(b,c){if(b&&b.1f)1c.1d.dF(b,19(a){c&&c(a)},"1c.1F.1R");1g c&&c()},ft:19(a){W.1e="1e"in a?a.1e:W.6K()?W.6K().1e||0:0;W.1h="1h"in a?a.1h:W.6K()?W.6K().1h||0:0},4n:19(){1b 1}});1c.1F.xK="1q-aw";1c.1F.1v.xF=1c.1F.1v.p5;1c.1F.32=19(e,f){1c.1d.7s(e.3D,19(d){1c.1F.1v.fI.1V(e,e.1R,19(c){e.1R=c||[];1c.1F.1v.fI.1V(e,e.8j,19(a){e.8j=a||[];1a b=1k 1c.1F(d,e);f&&f(b)})})},1z,e.6E)};1c.1F.xL=19(b,c,d){1c.1d.7s(b,19(a){c&&c(1k 1c.1F(a,d))},1z,d&&d.6E)};1c.1F.5f=1c.7J.4o("x y 1e 1h 7f 5H:9G".3o(" "));1c.1F.6n=19(a,b,c){1a d=1c.7y(a,1c.1F.5f),p7;if(d.7f){p7=1c.1d.lr(d.7f);i(d,p7)}1c.1F.xL(d["5H:9G"],b,i(c?1c.1d.1D.3P(c):{},d))};1c.1F.8z=1l;1c.1F.xG=1})(1n 1S!=="1w"?1S:W);1c.1d.1D.1B(1c.2x.1v,{p8:19(){1a a=W.95()%4X;if(a>0)1b 1m.52((a-1)/90)*90;1b 1m.52(a/90)*90},xM:19(){W.b0(W.p8());1b W},xN:19(b){b=b||{};1a c=19(){},3y=b.3y||c,4a=b.4a||c,3J=W;1c.1d.7T({7U:W.1J("2T"),8F:W.p8(),7c:W.fr,4a:19(a){3J.b0(a);4a()},3y:19(){3J.3O();3y()},hF:19(){3J.1K("4e",1s)}});1b W}});1c.1d.1D.1B(1c.2U.1v,{F7:19(a){a.xM();W.2w();1b W},F8:19(a){a.xN({4a:W.2w.4i(W)});1b W}});1c.1F.1R=1c.1F.1R||{};1c.1F.1R.5R=1c.1d.2J({1A:"5R",2u:19(a){if(a)W.8M(a)},8M:19(a){1i(1a b in a)W[b]=a[b]},1N:19(){1b{1A:W.1A}},iw:19(){1b W.1N()}});19 xO(r,g,b){r/=2e,g/=2e,b/=2e;1a a=1m.29(r,g,b),2g=1m.2g(r,g,b);1a h,s,v=a;1a d=a-2g;s=a==0?0:d/a;if(a==2g)h=0;1g{5m(a){1x r:h=(g-b)/d+(g<b?6:0);1y;1x g:h=(b-r)/d+2;1y;1x b:h=(r-g)/d+4;1y}h/=6}1b[h,s,v]}19 xP(h,s,v){1a r,g,b;1a i=1m.4L(h*6);1a f=h*6-i;1a p=v*(1-s);1a q=v*(1-f*s);1a t=v*(1-(1-f)*s);5m(i%6){1x 0:r=v,g=t,b=p;1y;1x 1:r=q,g=v,b=p;1y;1x 2:r=p,g=v,b=t;1y;1x 3:r=p,g=q,b=v;1y;1x 4:r=t,g=p,b=v;1y;1x 5:r=v,g=p,b=q;1y}1b[r*2e,g*2e,b*2e]}19 F9(r,g,b){r/=2e,g/=2e,b/=2e;1a a=1m.29(r,g,b),2g=1m.2g(r,g,b);1a h,s,l=(a+2g)/2;if(a==2g)h=s=0;1g{1a d=a-2g;s=l>.5?d/(2-a-2g):d/(a+2g);5m(a){1x r:h=(g-b)/d+(g<b?6:0);1y;1x g:h=(b-r)/d+2;1y;1x b:h=(r-g)/d+4;1y}h/=6}1b[h,s,l]}19 Fa(h,s,l){1a r,g,b;if(s==0)r=g=b=l;1g{1a a=19(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)1b p+(q-p)*6*t;if(t<1/2)1b q;if(t<2/3)1b p+(q-p)*(2/3-t)*6;1b p};1a q=l<.5?l*(1+s):l+s-l*s;1a p=2*l-q;r=a(p,q,h+1/3);g=a(p,q,h);b=a(p,q,h-1/3)}1b[r*2e,g*2e,b*2e]}(19(t){1a u=t.1c||(t.1c={}),1B=u.1d.1D.1B;u.1F.1R.jx=u.1d.2J(u.1F.1R.5R,{1A:"jx",2u:19(a){a=a||{};W.bc=a.bc||0;W.bd=a.bd||0;W.bf=a.bf||0;W.bg=a.bg||0;W.cP=a.cP||"7h(2e,0,0,1)";W.cQ=a.cQ||1s;W.6S=a.6S||"4D";W.3G=a.3G||1;W.9f=a.9f||0;W.cR=a.cR||0;W.fJ=a.fJ||0;W.26=a.26||"7h(0,0,0,0)";W.1U=1n a.1U!=="1w"?a.1U:(1k u.2s(W.26)).7X()},5Q:19(a){1a c=a.2L("2d"),2c=c.3x(0,0,a.1e,a.1h),1o=2c.1o,bc=2Z(W.bc),bd=2Z(W.bd),bf=2Z(W.bf),bg=2Z(W.bg),jy=xQ*(2Z(W.cR)+2e)/(2e*(xQ-2Z(W.cR))),9f=2Z(W.9f),29,xR=W.fJ/3g,5w=1o.1f,i,cS,cT,cU,r,g,b,8k,tr,tg,tb,fK,fL,fM,22,9g,cV=1s;22=(1k u.2s(W.26)).5r();cS=22[0]*W.1U;cT=22[1]*W.1U;cU=22[2]*W.1U;if(W.6S!="4D")if(W.cQ!==1s){cV=1l;1a d=1T.5A("1q");1a e=d.2L("2d");1a f=$("#Fb aw")[W.cQ];1a h=a;if(h){f.1e=h.1e;f.1h=h.1h}d.1e=f.1e;d.1h=f.1h;e.97(f,0,0,f.1e,f.1h);e.98=W.6S;e.97(h,0,0,f.1e,f.1h);9g=e.3x(0,0,d.1e,d.1h).1o}1g{1a d=1T.5A("1q");1a e=d.2L("2d");1a j=a;d.1e=j.1e;d.1h=j.1h;6X.7t(W.cP);e.53=W.cP;e.63(0,0,d.1e,d.1h);e.98=W.6S;e.97(j,0,0,j.1e,j.1h);9g=e.3x(0,0,d.1e,d.1h).1o}8k=1-W.1U;1i(1a i=0,1t=1o.1f;i<1t;i+=4){r=1o[i];g=1o[i+1];b=1o[i+2];1o[i]=cS+r*8k;1o[i+1]=cT+g*8k;1o[i+2]=cU+b*8k;r=1o[i];g=1o[i+1];b=1o[i+2];if(W.6S!="4D"){if(cV){tr=9g[i]*W.3G;tg=9g[i+1]*W.3G;tb=9g[i+2]*W.3G}1g{tr=9g[i]*W.3G;tg=9g[i+1]*W.3G;tb=9g[i+2]*W.3G}1o[i]=tr;1o[i+1]=tg;1o[i+2]=tb}1a k=1o[i];1a l=1o[i+1];1a m=1o[i+2];1a n=xO(k,l,m);1a o=n[0]*4X+bc;if(o>4X)o-=4X;1a p=n[1]+xR;if(p>1)p=1;if(p<0)p=0;1a q=[o/4X,p,n[2]];1a s=xP(q[0],q[1],q[2]);1o[i]=s[0];1o[i+1]=s[1];1o[i+2]=s[2];1o[i]+=9f+bd;1o[i+1]+=9f+bf;1o[i+2]+=9f+bg;1o[i]=jy*(1o[i]-cW)+cW;1o[i+1]=jy*(1o[i+1]-cW)+cW;1o[i+2]=jy*(1o[i+2]-cW)+cW;if(1o[i]>2e)1o[i]=1o[i]-2e;if(1o[i+1]>2e)1o[i+1]=1o[i]-2e;if(1o[i+2]>2e)1o[i+2]=1o[i]-2e}c.5x(2c,0,0);Fc()},1N:19(){1b 1B(W.2t("1N"),{3G:W.3G,9f:W.9f,cR:W.cR,bc:W.bc,fJ:W.fJ,26:W.26,cP:W.cP,6S:W.6S,cQ:W.cQ,1U:W.1U,bd:W.bd,bf:W.bf,bg:W.bg})}});u.1F.1R.jx.32=19(a){1b 1k u.1F.1R.jx(a)}})(1n 1S!=="1w"?1S:W);(19(l){1a m=l.1c||(l.1c={}),1B=m.1d.1D.1B;m.1F.1R.jz=m.1d.2J(m.1F.1R.5R,{1A:"jz",2u:19(a){a=a||{};W.fN=a.fN;W.51=a.51||[0,0,0,0,1,0,0,0,0];1a b=m.1d.6g();W.jA=b.2L("2d")},xS:19(w,h){1b W.jA.Fd(w,h)},5Q:19(c){1a d=W.51,9h=c.2L("2d"),9i=9h.3x(0,0,c.1e,c.1h),fO=1m.52(1m.4W(d.1f)),p9=1m.4L(fO/2),3D=9i.1o,sw=9i.1e,sh=9i.1h,w=sw,h=sh,pa=W.xS(w,h),fP=pa.1o,xT=W.fN?1:0;1i(1a y=0;y<h;y++)1i(1a x=0;x<w;x++){1a e=y,sx=x,fQ=(y*w+x)*4,r=0,g=0,b=0,a=0;1i(1a f=0;f<fO;f++)1i(1a i=0;i<fO;i++){1a j=e+f-p9,jB=sx+i-p9;if(j<0||j>sh||jB<0||jB>sw)3a;1a k=(j*sw+jB)*4,wt=d[f*fO+i];r+=3D[k]*wt;g+=3D[k+1]*wt;b+=3D[k+2]*wt;a+=3D[k+3]*wt}fP[fQ]=r;fP[fQ+1]=g;fP[fQ+2]=b;fP[fQ+3]=a+xT*(2e-a)}9h.5x(pa,0,0)},1N:19(){1b 1B(W.2t("1N"),{fN:W.fN,51:W.51})}});m.1F.1R.jz.32=19(a){1b 1k m.1F.1R.jz(a)}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={}),1B=d.1d.1D.1B;d.1F.1R.jC=d.1d.2J(d.1F.1R.5R,{1A:"jC",2u:19(a){a=a||{};W.5n=a.5n||3g},5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,5n=W.5n,pb=1o.1f;1i(1a i=0,1t=1o.1f;i<1t;i+=4)1o[i+3]=5n+2e*(pb-i)/pb;b.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{5n:W.5n})}});d.1F.1R.jC.32=19(a){1b 1k d.1F.1R.jC(a)}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={});d.1F.1R.jD=d.1d.2J(d.1F.1R.5R,{1A:"jD",5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,1t=2c.1e*2c.1h*4,2B=0,61;3b(2B<1t){61=(1o[2B]+1o[2B+1]+1o[2B+2])/3;1o[2B]=61;1o[2B+1]=61;1o[2B+2]=61;2B+=4}b.5x(2c,0,0)}});d.1F.1R.jD.32=19(){1b 1k d.1F.1R.jD}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={});d.1F.1R.jE=d.1d.2J(d.1F.1R.5R,{1A:"jE",5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,5w=1o.1f,i;1i(i=0;i<5w;i+=4){1o[i]=2e-1o[i];1o[i+1]=2e-1o[i+1];1o[i+2]=2e-1o[i+2]}b.5x(2c,0,0)}});d.1F.1R.jE.32=19(){1b 1k d.1F.1R.jE}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={}),1B=e.1d.1D.1B;e.1F.1R.fR=e.1d.2J(e.1F.1R.5R,{1A:"fR",2u:19(a){a=a||{};W.9j=a.9j;W.a3=[0,1,2,3].2X(a.a3)>-1?a.a3:0},5Q:19(a){if(!W.9j)1b;1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,xU=W.9j.6K(),fS=e.1d.6g(),a3=W.a3,i,5w=2c.1e*2c.1h*4;fS.1e=a.1e;fS.1h=a.1h;fS.2L("2d").97(xU,0,0,a.1e,a.1h);1a c=fS.2L("2d").3x(0,0,a.1e,a.1h),xV=c.1o;1i(i=0;i<5w;i+=4)1o[i+3]=xV[i+a3];b.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{9j:W.9j.1N(),a3:W.a3})}});e.1F.1R.fR.32=19(b,c){e.1d.7s(b.9j.3D,19(a){b.9j=1k e.1F(a,b.9j);c&&c(1k e.1F.1R.fR(b))})};e.1F.1R.fR.8z=1l})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={}),1B=d.1d.1D.1B;d.1F.1R.jF=d.1d.2J(d.1F.1R.5R,{1A:"jF",2u:19(a){a=a||{};W.bh=a.bh||0},5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,bh=W.bh,fT;1i(1a i=0,1t=1o.1f;i<1t;i+=4){fT=(.5-1m.rh())*bh;1o[i]+=fT;1o[i+1]+=fT;1o[i+2]+=fT}b.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{bh:W.bh})}});d.1F.1R.jF.32=19(a){1b 1k d.1F.1R.jF(a)}})(1n 1S!=="1w"?1S:W);(19(h){1a k=h.1c||(h.1c={}),1B=k.1d.1D.1B;k.1F.1R.jG=k.1d.2J(k.1F.1R.5R,{1A:"jG",2u:19(a){a=a||{};W.a4=a.a4||4},5Q:19(c){1a d=c.2L("2d"),2c=d.3x(0,0,c.1e,c.1h),1o=2c.1o,5w=2c.1h,cM=2c.1e,2B,i,j,r,g,b,a;1i(i=0;i<5w;i+=W.a4)1i(j=0;j<cM;j+=W.a4){2B=i*4*cM+j*4;r=1o[2B];g=1o[2B+1];b=1o[2B+2];a=1o[2B+3];1i(1a e=i,xW=i+W.a4;e<xW;e++)1i(1a f=j,xX=j+W.a4;f<xX;f++){2B=e*4*cM+f*4;1o[2B]=r;1o[2B+1]=g;1o[2B+2]=b;1o[2B+3]=a}}d.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{a4:W.a4})}});k.1F.1R.jG.32=19(a){1b 1k k.1F.1R.jG(a)}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={}),1B=e.1d.1D.1B;e.1F.1R.jH=e.1d.2J(e.1F.1R.5R,{1A:"jH",2u:19(a){a=a||{};W.5n=a.5n||30;W.73=a.73||20},5Q:19(a){1a c=a.2L("2d"),2c=c.3x(0,0,a.1e,a.1h),1o=2c.1o,5n=W.5n,73=W.73,jI=2e-5n,2r=1m.2r,r,g,b;1i(1a i=0,1t=1o.1f;i<1t;i+=4){r=1o[i];g=1o[i+1];b=1o[i+2];if(r>jI&&g>jI&&b>jI&&2r(r-g)<73&&2r(r-b)<73&&2r(g-b)<73)1o[i+3]=1}c.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{5n:W.5n,73:W.73})}});e.1F.1R.jH.32=19(a){1b 1k e.1F.1R.jH(a)}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={});d.1F.1R.jJ=d.1d.2J(d.1F.1R.5R,{1A:"jJ",5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,5w=1o.1f,i,fU;1i(i=0;i<5w;i+=4){fU=.3*1o[i]+.59*1o[i+1]+.11*1o[i+2];1o[i]=fU+3g;1o[i+1]=fU+50;1o[i+2]=fU+2e}b.5x(2c,0,0)}});d.1F.1R.jJ.32=19(){1b 1k d.1F.1R.jJ}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={});e.1F.1R.jK=e.1d.2J(e.1F.1R.5R,{1A:"jK",5Q:19(a){1a c=a.2L("2d"),2c=c.3x(0,0,a.1e,a.1h),1o=2c.1o,5w=1o.1f,i,r,g,b;1i(i=0;i<5w;i+=4){r=1o[i];g=1o[i+1];b=1o[i+2];1o[i]=(r*.Fe+g*.Ff+b*.Fg)/1.Fh;1o[i+1]=(r*.Fi+g*.Fj+b*.Fk)/1.Fl;1o[i+2]=(r*.Fm+g*.Fn+b*.Fo)/2.14}c.5x(2c,0,0)}});e.1F.1R.jK.32=19(){1b 1k e.1F.1R.jK}})(1n 1S!=="1w"?1S:W);(19(d){1a e=d.1c||(d.1c={}),1B=e.1d.1D.1B;e.1F.1R.jL=e.1d.2J(e.1F.1R.5R,{1A:"jL",2u:19(a){a=a||{};W.26=a.26||"#mW";W.1U=1n a.1U!=="1w"?a.1U:(1k e.2s(W.26)).7X()},5Q:19(a){1a c=a.2L("2d"),2c=c.3x(0,0,a.1e,a.1h),1o=2c.1o,5w=1o.1f,i,cS,cT,cU,r,g,b,8k,22;22=(1k e.2s(W.26)).5r();cS=22[0]*W.1U;cT=22[1]*W.1U;cU=22[2]*W.1U;8k=1-W.1U;1i(i=0;i<5w;i+=4){r=1o[i];g=1o[i+1];b=1o[i+2];1o[i]=cS+r*8k;1o[i+1]=cT+g*8k;1o[i+2]=cU+b*8k}c.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{26:W.26,1U:W.1U})}});e.1F.1R.jL.32=19(a){1b 1k e.1F.1R.jL(a)}})(1n 1S!=="1w"?1S:W);(19(c){1a d=c.1c||(c.1c={}),1B=d.1d.1D.1B;d.1F.1R.jM=d.1d.2J(d.1F.1R.5R,{1A:"jM",2u:19(a){a=a||{};W.26=a.26||"#mW"},5Q:19(a){1a b=a.2L("2d"),2c=b.3x(0,0,a.1e,a.1h),1o=2c.1o,5w=1o.1f,i,22;22=(1k d.2s(W.26)).5r();1i(i=0;i<5w;i+=4){1o[i]*=22[0]/2e;1o[i+1]*=22[1]/2e;1o[i+2]*=22[2]/2e}b.5x(2c,0,0)},1N:19(){1b 1B(W.2t("1N"),{26:W.26})}});d.1F.1R.jM.32=19(a){1b 1k d.1F.1R.jM(a)}})(1n 1S!=="1w"?1S:W);(19(h){1a j=h.1c;j.1F.1R.jN=j.1d.2J({1A:"jN",2u:19(a){a=a||{};W.26=a.26||"#Fp";W.4q=a.4q||1s;W.6S=a.6S||"mJ";W.3G=a.3G||1},5Q:19(a){1a c=a.2L("2d"),2c=c.3x(0,0,a.1e,a.1h),1o=2c.1o,tr,tg,tb,r,g,b,fK,fL,fM,22,cV=1s;if(W.4q){cV=1l;1a d=j.1d.6g();d.1e=W.4q.1e;d.1h=W.4q.1h;1a e=1k j.2U(d);e.2j(W.4q);1a f=e.2L("2d");22=f.3x(0,0,e.1e,e.1h).1o}1g{22=(1k j.2s(W.26)).5r();tr=22[0]*W.3G;tg=22[1]*W.3G;tb=22[2]*W.3G}1i(1a i=0,1t=1o.1f;i<1t;i+=4){r=1o[i];g=1o[i+1];b=1o[i+2];if(cV){tr=22[i]*W.3G;tg=22[i+1]*W.3G;tb=22[i+2]*W.3G}5m(W.6S){1x"mJ":1o[i]=r*tr/2e;1o[i+1]=g*tg/2e;1o[i+2]=b*tb/2e;1y;1x"Fq":1o[i]=1-(1-r)*(1-tr);1o[i+1]=1-(1-g)*(1-tg);1o[i+2]=1-(1-b)*(1-tb);1y;1x"2j":1o[i]=1m.2g(2e,r+tr);1o[i+1]=1m.2g(2e,g+tg);1o[i+2]=1m.2g(2e,b+tb);1y;1x"pd":1x"qW":1o[i]=1m.2r(r-tr);1o[i+1]=1m.2r(g-tg);1o[i+2]=1m.2r(b-tb);1y;1x"t3":fK=r-tr;fL=g-tg;fM=b-tb;1o[i]=fK<0?0:fK;1o[i+1]=fL<0?0:fL;1o[i+2]=fM<0?0:fM;1y;1x"Fr":1o[i]=1m.2g(r,tr);1o[i+1]=1m.2g(g,tg);1o[i+2]=1m.2g(b,tb);1y;1x"Fs":1o[i]=1m.29(r,tr);1o[i+1]=1m.29(g,tg);1o[i+2]=1m.29(b,tb);1y}}c.5x(2c,0,0)},1N:19(){1b{26:W.26,4q:W.4q,6S:W.6S,3G:W.3G}}});j.1F.1R.jN.32=19(a){1b 1k j.1F.1R.jN(a)}})(1n 1S!=="1w"?1S:W);(19(n){1a o=n.1c||(n.1c={}),5X=1m.5X,4L=1m.4L,4W=1m.4W,2r=1m.2r,29=1m.29,52=1m.52,41=1m.41,aC=1m.aC;o.1F.1R.fF=o.1d.2J(o.1F.1R.5R,{1A:"fF",bi:"xY",1O:0,1W:0,cX:3,5Q:19(a,b,c){W.fV=1/b;W.fW=1/c;1a d=a.1e,oH=a.1h,dW=52(d*b),dH=52(oH*c),2c;if(W.bi==="Ft")2c=W.xZ(a,d,oH,dW,dH);if(W.bi==="xY")2c=W.y0(a,d,oH,dW,dH);if(W.bi==="Fu")2c=W.y3(a,d,oH,dW,dH);if(W.bi==="pe")2c=W.y4(a,d,oH,dW,dH);a.1e=dW;a.1h=dH;a.2L("2d").5x(2c,0,0)},xZ:19(a,b,c,d,e){1a f=a.2L("2d"),2c,jO=.5,jP=.5,jQ=1,jR=1,pf=1s,pg=1s,a5=b,a6=c,fZ=o.1d.6g(),jA=fZ.2L("2d");d=4L(d);e=4L(e);fZ.1e=29(d,b);fZ.1h=29(e,c);if(d>b){jO=2;jQ=-1}if(e>c){jP=2;jR=-1}2c=f.3x(0,0,b,c);a.1e=29(d,b);a.1h=29(e,c);f.5x(2c,0,0);3b(!pf||!pg){b=a5;c=a6;if(d*jQ<4L(a5*jO*jQ))a5=4L(a5*jO);1g{a5=d;pf=1l}if(e*jR<4L(a6*jP*jR))a6=4L(a6*jP);1g{a6=e;pg=1l}2c=f.3x(0,0,b,c);jA.5x(2c,0,0);f.nh(0,0,a5,a6);f.97(fZ,0,0,b,c,0,0,a5,a6)}1b f.3x(0,0,d,e)},y4:19(c,d,e,f,g){19 y5(b){1b 19(x){if(x>b)1b 0;x*=1m.4V;if(2r(x)<1E-16)1b 1;1a a=x/b;1b 41(x)*41(a)/x/a}}19 jS(u){1a v,i,4k,7G,a,et,es,er,3G,fX,fY;1M.x=(u+.5)*cY;bj.x=4L(1M.x);1i(v=0;v<g;v++){1M.y=(v+.5)*cZ;bj.y=4L(1M.y);a=0,et=0,es=0,er=0,3G=0;1i(i=bj.x-ph;i<=bj.x+ph;i++){if(i<0||i>=d)3a;fX=4L(ah*2r(i-1M.x));if(!d0[fX])d0[fX]={};1i(1a j=bj.y-pj;j<=bj.y+pj;j++){if(j<0||j>=e)3a;fY=4L(ah*2r(j-1M.y));if(!d0[fX][fY])d0[fX][fY]=pe(4W(5X(fX*y6,2)+5X(fY*y7,2))/ah);4k=d0[fX][fY];if(4k>0){7G=(j*d+i)*4;a+=4k;et+=4k*g0[7G];es+=4k*g0[7G+1];er+=4k*g0[7G+2];3G+=4k*g0[7G+3]}}}7G=(v*f+u)*4;g1[7G]=et/a;g1[7G+1]=es/a;g1[7G+2]=er/a;g1[7G+3]=3G/a}if(++u<f)1b jS(u);1g 1b pk}1a h=c.2L("2d"),y8=h.3x(0,0,d,e),pk=h.3x(0,0,f,g),g0=y8.1o,g1=pk.1o,pe=y5(W.cX),cY=W.fV,cZ=W.fW,y6=2/W.fV,y7=2/W.fW,ph=aC(cY*W.cX/2),pj=aC(cZ*W.cX/2),d0={},1M={},bj={};1b jS(0)},y3:19(e,w,h,f,g){1a a,b,c,d,x,y,i,j,d1,d2,a7,26,2E=0,d3,cY=W.fV,cZ=W.fW,9h=e.2L("2d"),w4=4*(w-1),aw=9h.3x(0,0,w,h),9i=aw.1o,pm=9h.3x(0,0,f,g),y9=pm.1o;1i(i=0;i<g;i++)1i(j=0;j<f;j++){x=4L(cY*j);y=4L(cZ*i);d1=cY*j-x;d2=cZ*i-y;d3=4*(y*w+x);1i(a7=0;a7<4;a7++){a=9i[d3+a7];b=9i[d3+4+a7];c=9i[d3+w4+a7];d=9i[d3+w4+4+a7];26=a*(1-d1)*(1-d2)+b*d1*(1-d2)+c*d2*(1-d1)+d*d1*d2;y9[2E++]=26}}1b pm},y0:19(a,b,c,d,e){1a f=W.fV,g2=W.fW,ya=aC(f/2),yb=aC(g2/2),9h=a.2L("2d"),aw=9h.3x(0,0,b,c),1o=aw.1o,pn=9h.3x(0,0,d,e),g3=pn.1o;1i(1a j=0;j<e;j++)1i(1a i=0;i<d;i++){1a g=(i+j*d)*4,4k=0,g4=0,po=0,pp=0,pq=0,pr=0,ps=0,yc=(j+.5)*g2;1i(1a h=4L(j*g2);h<(j+1)*g2;h++){1a k=2r(yc-(h+.5))/yb,yd=(i+.5)*f,w0=k*k;1i(1a l=4L(i*f);l<(i+1)*f;l++){1a m=2r(yd-(l+.5))/ya,w=4W(w0+m*m);if(w>1&&w<-1)3a;4k=2*w*w*w-3*w*w+1;if(4k>0){m=4*(l+h*b);ps+=4k*1o[m+3];po+=4k;if(1o[m+3]<2e)4k=4k*1o[m+3]/ra;pp+=4k*1o[m];pq+=4k*1o[m+1];pr+=4k*1o[m+2];g4+=4k}}}g3[g]=pp/g4;g3[g+1]=pq/g4;g3[g+2]=pr/g4;g3[g+3]=ps/po}1b pn},1N:19(){1b{1A:W.1A,1O:W.1O,1W:W.1W,bi:W.bi,cX:W.cX}}});o.1F.1R.fF.32=19(a){1b 1k o.1F.1R.fF(a)}})(1n 1S!=="1w"?1S:W);(19(k){1a l=k.1c||(k.1c={}),1B=l.1d.1D.1B,3P=l.1d.1D.3P,2G=l.1d.2G,cD=l.2U.6Y("8O"),3u=l.2x.3u;if(l.5p){l.5d("1c.5p is 5J 5i");1b}1a m=l.2x.1v.6h.4o();m.1C("3H","3M","2F","1G","3N","4u","4j","3z","4v");l.5p=l.1d.2J(l.2x,{jT:{2F:1l,3M:1l,3H:1l,4j:1l,3z:1l,1H:1l,3n:1l,1G:1l,4u:1l},pu:/\\r?\\n/,pv:/[ \\t\\r]+/g,1A:"1G",2F:40,3M:"c5",3H:"Fv Fw Fx",3N:"",4u:"1p",4j:"",3z:1.16,4v:"",6h:m,1H:1z,2I:1z,6v:.25,8l:1.13,2u:19(a,b){b=b||{};W.1G=a;W.jU=1l;W.8M(b);W.jU=1s;W.g5()},g5:19(a){if(W.jU)1b;if(!a){a=l.1d.6g().2L("2d");W.g6(a)}W.2o=W.d4();W.g7();W.jV=W.4u!=="g8";W.1e=W.ye(a);W.jV=1l;W.1h=W.jW(a)},42:19(){1b"#<1c.5p ("+W.4n()+\'): { "1G": "\'+W.1G+\'", "3H": "\'+W.3H+\'" }>\'},5v:19(a){W.3T&&l.1d.ay(W,a);W.ja(a);W.7B(a);W.ok(a);W.yf(a);W.fi(a);W.ol(a);W.yg(a);W.jX(a);W.3T&&a.3f()},yg:19(a){W.pw(a);W.yh(a);W.yj(a);W.pw(a,1l)},pw:19(a,b){if(W.4u!=="1p"&&W.4u!=="g8"){1a c=b?-1:1;1a t=W.4u==="1M"?c*W.1e/2:c*W.1e;a.4M(t,0)}},g6:19(a){a.Fy="Fz";if(!W.pz)a.4u=W.4u;a.4b=W.jY()},jW:19(){1b W.2o.1f*W.4w()},ye:19(a){1a b=W.4l(a,0);1i(1a i=1,1t=W.2o.1f;i<1t;i++){1a c=W.4l(a,i);if(c>b)b=c}1b b},d5:19(a,b,c,d,e){1a f=a.3r(0,-4);if(W[f].4c){1a g=-W.1e/2+W[f].2q||0,2n=-W.1h/2+W[f].2n||0;b.3E();b.4M(g,2n);d-=g;e-=2n}b[a](c,d,e);W[f].4c&&b.3f()},g9:19(a,b,c,d,e,f){e-=W.2F*W.6v;1a g=W.4l(b,f);if(W.4u!=="g8"||W.1e<g){W.d5(a,b,c,d,e,f);1b}1a h=c.3o(/\\s+/),jZ=W.k0(b,c,f),k1=W.1e-jZ,ga=h.1f-1,yk=ga>0?k1/ga:0,6w=0,8m=0,8n;1i(1a i=0,1t=h.1f;i<1t;i++){3b(c[8m]===" "&&8m<c.1f)8m++;8n=h[i];W.d5(a,b,8n,d+6w,e,f,8m);6w+=b.8o(8n).1e+yk;8m+=8n.1f}},k0:19(a,b){1b a.8o(b.3d(/\\s+/g,"")).1e},8p:19(){1b-W.1e/2},9k:19(){1b-W.1h/2},yh:19(a){if(!W.1I&&!W.pA)1b;1a b=0;1i(1a i=0,1t=W.2o.1f;i<1t;i++){1a c=W.4w(a,i),a8=c/W.3z;W.g9("d6",a,W.2o[i],W.8p(),W.9k()+b+a8,i);b+=c}},yj:19(a){if((!W.1H||W.3n===0)&&!W.pA)1b;1a b=0;if(W.2I&&!W.2I.ib)W.oo(a);a.3E();if(W.2C){if(1&W.2C.1f)W.2C.1C.31(W.2C,W.2C);cD&&a.8O(W.2C)}a.4O();1i(1a i=0,1t=W.2o.1f;i<1t;i++){1a c=W.4w(a,i),a8=c/W.3z;W.g9("gb",a,W.2o[i],W.8p(),W.9k()+b+a8,i);b+=c}a.64();a.3f()},4w:19(){1b W.2F*W.8l*W.3z},yf:19(a){W.pB(a)},yl:19(a){if(!W.3I)1b;a.53=W.3I;a.63(W.8p(),W.9k(),W.1e,W.1h)},pB:19(a){if(!W.4v)1b;1a b=0,bk=W.4w(),5M,3S;a.53=W.4v;1i(1a i=0,1t=W.2o.1f;i<1t;i++){if(W.2o[i]!==""){5M=W.4l(a,i);3S=W.5y(5M);a.63(W.8p()+3S,W.9k()+b,5M,W.2F*W.8l)}b+=bk}},5y:19(a){if(W.4u==="1M")1b(W.1e-a)/2;if(W.4u==="3K")1b W.1e-a;1b 0},g7:19(){W.a9=[];W.gc=[]},ym:19(){1a a=1s;if(W.gd){W.gd=1s;1b 1l}1i(1a b in W.jT)if(W["yn"+b]!==W[b]){W["yn"+b]=W[b];a=1l}1b a},4l:19(a,b){if(W.a9[b])1b W.a9[b];1a c,pC,2K=W.2o[b];if(2K==="")c=0;1g if(W.4u==="g8"&&W.jV){pC=2K.3o(" ");if(pC.1f>1)c=W.1e;1g c=a.8o(2K).1e}1g c=a.8o(2K).1e;W.jV&&(W.a9[b]=c);1b c},jX:19(b){if(!W.3N)1b;1a c=W.1h/2,3J=W,6T=[];19 yo(a){1a i,3z=0,1t,j,pD,5M,3S,bk;1i(i=0,1t=3J.2o.1f;i<1t;i++){5M=3J.4l(b,i),3S=3J.5y(5M),bk=3J.4w(b,i);1i(j=0,pD=a.1f;j<pD;j++)b.63(3J.8p()+3S,3z+(3J.8l-1+a[j])*3J.2F-c,5M,3J.2F/15);3z+=bk}}if(W.3N.2X("pE")>-1)6T.1C(.85);if(W.3N.2X("2K-pF")>-1)6T.1C(.43);if(W.3N.2X("pG")>-1)6T.1C(-.12);if(6T.1f>0)yo(6T)},jY:19(){1b[l.af?W.3M:W.4j,l.af?W.4j:W.3M,W.2F+"px",l.af?\'"\'+W.3H+\'"\':W.3H].2A(" ")},62:19(a,b){if(!W.4Z)1b;a.3E();W.g6(a);if(W.ym())W.g5(a);if(!b)W.2v(a);if(W.3L)a.2v.31(a,W.3L);if(W.1L&&W.1L.1A==="21-1L")a.4M(W.1p,W.1r);W.5v(a);a.3f()},d4:19(){1b W.1G.3o(W.pu)},1N:19(a){1a b=1B(W.2t("1N",a),{1G:W.1G,2F:W.2F,3M:W.3M,3H:W.3H,4j:W.4j,3z:W.3z,3N:W.3N,4u:W.4u,4v:W.4v});if(!W.6J)W.fh(b);1b b},3V:19(a){1a b=W.7m(),6T=W.yp(W.1X),yq=W.yr(6T.k2,6T.k3);W.ys(b,yq);1b a?a(b.2A("")):b.2A("")},yp:19(a){1a b=W.4w(a,0),k3=-W.1e/2,k2=0;1b{k3:k3+(W.1L&&W.1L.1A==="21-1L"?W.1p:0),k2:k2+(W.1L&&W.1L.1A==="21-1L"?-W.1r:0),k4:b}},ys:19(a,b){a.1C(\'\\t<g 2v="\',W.6Q(),W.7l(),\'">\\n\',b.bm.2A(""),"\\t\\t<1G ",W.3H?\'4b-e8="\'+W.3H.3d(/"/g,"\'")+\'" \':"",W.2F?\'4b-at="\'+W.2F+\'" \':"",W.4j?\'4b-2f="\'+W.4j+\'" \':"",W.3M?\'4b-4k="\'+W.3M+\'" \':"",W.3N?\'1G-9C="\'+W.3N+\'" \':"",\'2f="\',W.6u(),\'" >\',b.yt.2A(""),"</1G>\\n","\\t</g>\\n")},yr:19(a,b){1a c=[],bm=[],1h=0;W.yu(bm);1i(1a i=0,1t=W.2o.1f;i<1t;i++){if(W.4v)W.yv(bm,i,b,a,1h);W.k5(i,c,1h,b,a,bm);1h+=W.4w(W.1X,i)}1b{yt:c,bm:bm}},k5:19(i,a,b,c,d){1a e=W.2F*(W.8l-W.6v)-d+b-W.1h/2;a.1C(\'<k6 x="\',2G(c+W.5y(W.4l(W.1X,i)),3u),\'" \',\'y="\',2G(e,3u),\'" \',W.k7(W.1I),">",l.1d.2V.dQ(W.2o[i]),"</k6>")},yv:19(a,i,b,c,d){a.1C("\\t\\t<5Y ",W.k7(W.4v),\' x="\',2G(b+W.5y(W.4l(W.1X,i)),3u),\'" y="\',2G(d-W.1h/2,3u),\'" 1e="\',2G(W.4l(W.1X,i),3u),\'" 1h="\',2G(W.4w(W.1X,i)/W.3z,3u),\'"></5Y>\\n\')},yu:19(a){if(W.3I)a.1C("\\t\\t<5Y ",W.k7(W.3I),\' x="\',2G(-W.1e/2,3u),\'" y="\',2G(-W.1h/2,3u),\'" 1e="\',2G(W.1e,3u),\'" 1h="\',2G(W.1h,3u),\'"></5Y>\\n\')},k7:19(a){1a b=a&&1n a==="2V"?1k l.2s(a):"";if(!b||!b.5r()||b.7X()===1)1b\'1I="\'+a+\'"\';1b\'1U="\'+b.7X()+\'" 1I="\'+b.ed(1).ep()+\'"\'},4s:19(a,b){W.2t("4s",a,b);if(a in W.jT){W.g5();W.3O()}},4n:19(){1b 1}});l.5p.5f=l.7J.4o("x y dx dy 4b-e8 4b-2f 4b-4k 4b-at 1G-9C 1G-si".3o(" "));l.5p.h8=16;l.5p.6n=19(a,b){if(!a)1b 1z;1a c=l.7y(a,l.5p.5f);b=l.1d.1D.1B(b?l.1d.1D.3P(b):{},c);b.1r=b.1r||0;b.1p=b.1p||0;if("dx"in c)b.1p+=c.dx;if("dy"in c)b.1r+=c.dy;if(!("2F"in b))b.2F=l.5p.h8;if(!b.28)b.28="1p";1a d=a.sP.3d(/^\\s+|\\s+$|\\n+/g,"").3d(/\\s+/g," "),1G=1k l.5p(d,b),k8=0;if(1G.28==="1p")k8=1G.6o()/2;if(1G.28==="3K")k8=-1G.6o()/2;1G.1K({1p:1G.cI()+k8,1r:1G.cJ()-1G.7z()/2+1G.2F*(.18+1G.6v)});1b 1G};l.5p.32=19(a){1b 1k l.5p(a.1G,3P(a))};l.1d.lm(l.5p)})(1n 1S!=="1w"?1S:W);(19(){1a k=1c.1d.1D.3P;1c.6x=1c.1d.2J(1c.5p,1c.bE,{1A:"i-1G",23:0,2M:0,iL:"7h(17,FA,2e,0.3)",8b:1s,FB:1l,yw:"7h(ob,oc,2e,0.25)",yx:2,yy:"#FC",yz:ah,pH:hV,2l:1z,bn:1l,pA:1s,d7:/\\s|\\n/,8q:0,55:1z,FD:1s,7H:{},ge:[],2u:19(a,b){W.2l=b?b.2l||{}:{};W.2t("2u",a,b);W.yA()},g7:19(){W.2t("g7");W.ge=[]},gf:19(){if(!W.2l)1b 1l;1a a=W.2l;1i(1a b in a)1i(1a c in a[b])1i(1a d in a[b][c])1b 1s;1b 1l},56:19(a){a=1m.29(a,0);if(W.23!==a){W.1Y("4t:aa");W.1q&&W.1q.1Y("1G:4t:aa",{1u:W});W.23=a}W.k9()},4I:19(a){a=1m.2g(a,W.1G.1f);if(W.2M!==a){W.1Y("4t:aa");W.1q&&W.1q.1Y("1G:4t:aa",{1u:W});W.2M=a}W.k9()},pI:19(a,b){if(2S.1f===2){1a c=[];1i(1a i=a;i<b;i++)c.1C(W.pI(i));1b c}1a d=W.6U(a),2f=W.5S(d.2a,d.2P);1b 2f||{}},FE:19(a){if(W.23===W.2M)W.pJ(W.23,a);1g 1i(1a i=W.23;i<W.2M;i++)W.pJ(i,a);W.gd=1l;1b W},pJ:19(a,b){1a c=W.6U(a);if(!W.gg(c.2a))W.ka(c.2a,{});if(!W.5S(c.2a,c.2P))W.pK(c.2a,c.2P,{});1c.1d.1D.1B(W.5S(c.2a,c.2P),b)},5v:19(a){W.2t("5v",a);W.1X=a;W.8b&&W.kb()},kb:19(){if(!W.4e)1b;1a a=W.1G.3o(""),gh,1X;if(W.1q.3h){1X=W.1q.3h;1X.3E();1X.2v.31(1X,W.1q.3A);W.2v(1X);W.3L&&1X.2v.31(1X,W.3L)}1g{1X=W.1X;1X.3E()}if(W.23===W.2M){gh=W.pL(a,"iW");W.yB(gh,1X)}1g{gh=W.pL(a,"4t");W.yD(a,gh,1X)}1X.3f()},6U:19(a){if(1n a==="1w")a=W.23;1a b=W.2o.1f;1i(1a i=0;i<b;i++){if(a<=W.2o[i].1f)1b{2a:i,2P:a};a-=W.2o[i].1f+1}1b{2a:i-1,2P:W.2o[i-1].1f<a?W.2o[i-1].1f:a}},pM:19(a,b){1a c=W.5S(a,b===0?0:b-1);1b{2F:c&&c.2F||W.2F,1I:c&&c.1I||W.1I,4v:c&&c.4v||W.4v,3N:c&&c.3N||W.3N,3H:c&&c.3H||W.3H,3M:c&&c.3M||W.3M,4j:c&&c.4j||W.4j,1H:c&&c.1H||W.1H,3n:c&&c.3n||W.3n}},kc:19(a,b){1a c=W.5S(a,b===0?0:b-1);1b c&&c.2F?c.2F:W.2F},yE:19(a,b){1a c=W.5S(a,b===0?0:b-1);1b c&&c.1I?c.1I:W.yy},pL:19(a,b){1a c=1m.52(W.8p()),1r=W.9k(),6T=W.pN(a,b);1b{1p:c,1r:1r,6w:6T.1p+6T.pO,ab:6T.1r}},pN:19(a,b){1a c=0,2a=0,2P=0,ab=0,6w=0;1i(1a i=0;i<W.23;i++){if(a[i]==="\\n"){6w=0;ab+=W.4w(W.1X,2a);2a++;2P=0}1g{6w+=W.6V(W.1X,a[i],2a,2P);2P++}c=W.5y(W.4l(W.1X,2a))}if(b==="iW")ab+=(1-W.6v)*W.4w(W.1X,2a)/W.3z-W.kc(2a,2P)*(1-W.6v);1b{1r:ab,1p:6w,pO:c}},yB:19(a,b){1a c=W.6U(),2a=c.2a,2P=c.2P,d8=W.kc(2a,2P),6w=2a===0&&2P===0?W.5y(W.4l(b,2a)):a.6w;b.53=W.yE(2a,2P);b.eF=W.gj?1:W.8q;b.63(a.1p+6w,a.1r+a.ab,W.yx/W.1O,d8)},yD:19(a,b,c){c.53=W.iL;1a d=W.6U(W.23),7r=W.6U(W.2M),kd=d.2a,gk=7r.2a;1i(1a i=kd;i<=gk;i++){1a e=W.5y(W.4l(c,i))||0,3z=W.4w(W.1X,i),gl=0,2K=W.2o[i];if(i===kd)1i(1a j=0,1t=2K.1f;j<1t;j++){if(j>=d.2P&&(i!==gk||j<7r.2P))gl+=W.6V(c,2K[j],i,j);if(j<d.2P)e+=W.6V(c,2K[j],i,j)}1g if(i>kd&&i<gk)gl+=W.4l(c,i)||5;1g if(i===gk)1i(1a f=0,yF=7r.2P;f<yF;f++)gl+=W.6V(c,2K[f],i,f);c.63(b.1p+e,b.1r+b.ab,gl,3z);b.ab+=3z}},d5:19(a,b,c,d,e,f,g){if(W.gf())1b W.yG(a,b,c,d,e);g=g||0;W.pz=1l;d-=W.4u==="1M"?W.1e/2:W.4u==="3K"?W.1e:0;1a h=W.4w(b,f),3S=W.5y(W.4l(b,f)),gm,ke,kf="";d+=3S||0;b.3E();e-=h/W.3z*W.6v;1i(1a i=g,1t=c.1f+g;i<=1t;i++){gm=gm||W.pM(f,i);ke=W.pM(f,i+1);if(W.yH(gm,ke)||i===1t){W.yI(a,b,f,i-1,kf,d,e,h);kf="";gm=ke}kf+=c[i-g]}b.3f()},yG:19(a,b,c,d,e){W.pz=1s;if(a==="gb"&&(W.1H&&W.3n>0||W.FF))W.2t("d5",a,b,c,d,e);if((a==="d6"||a==="gb")&&W.1I)W.2t("d5","d6",b,c,d,e)},yI:19(a,b,c,i,d,e,f,g){1a h,d8,gn,go,ac=W.5S(c,i),2E,3N;if(ac){d8=W.kg(b,d,c,i);go=ac.1H;gn=ac.1I;3N=ac.3N}1g d8=W.2F;go=(go||W.1H)&&a==="gb";gn=(gn||W.1I)&&a==="d6";ac&&b.3E();h=W.pP(b,d,c,i,ac||{});3N=3N||W.3N;if(go){b.gb(d,e,f);b.d6(d,e,f)}gn&&b.d6(d,e,f);if(3N||3N!==""){2E=W.6v*g/W.3z;W.yJ(b,3N,e,f,2E,h,d8)}ac&&b.3f();b.4M(h,0)},yH:19(a,b){1b a.1I!==b.1I||a.2F!==b.2F||a.4v!==b.4v||a.3N!==b.3N||a.3H!==b.3H||a.3M!==b.3M||a.4j!==b.4j||a.1H!==b.1H||a.3n!==b.3n},yJ:19(a,b,c,d,e,f,g){if(!b)1b;1a h=g/15,yK={pE:d+g/10,"2K-pF":d-g*(W.6v+W.8l-1)+h,pG:d-(W.8l-W.6v)*g},pQ=["pE","2K-pF","pG"],i,9C;1i(i=0;i<pQ.1f;i++){9C=pQ[i];if(b.2X(9C)>-1)a.63(c,yK[9C],f,h)}},g9:19(a,b,c,d,e,f){if(!W.gf())e+=W.2F*(W.6v+.FG);W.2t("g9",a,b,c,d,e,f)},jX:19(a){if(W.gf())1b W.2t("jX",a)},pB:19(a){if(!W.4v&&!W.2l)1b;a.3E();if(W.4v)a.53=W.4v;1a b=0;1i(1a i=0,1t=W.2o.1f;i<1t;i++){1a c=W.4w(a,i);if(W.2o[i]===""){b+=c;3a}1a d=W.4l(a,i),3S=W.5y(d);if(W.4v){a.53=W.4v;W.cE=2Z(W.cE)||1q.6o();W.cF=2Z(W.cF)||0;W.ff=2Z(W.ff)||0;W.fg=2Z(W.fg)||0;a.63(W.8p()+3S+W.ff-W.cE/2,W.9k()+b+W.fg-W.cF/2,d+W.cE,c/W.3z+W.cF)}if(W.gg(i))1i(1a j=0,4P=W.2o[i].1f;j<4P;j++){1a e=W.5S(i,j);if(e&&e.4v){1a f=W.2o[i][j];a.53=e.4v;a.63(W.8p()+3S+W.yL(a,i,j),W.9k()+b,W.6V(a,f,i,j)+1,c/W.3z)}}b+=c}a.3f()},kh:19(a,b){1b a+b.3H+b.2F+b.3M+b.4j+b.2I},pP:19(a,b,c,d,e){1a f=W.5S(c,d),3B=e||k(f),1e;W.gp(3B);1a g=W.kh(b,3B);if(!f&&W.7H[g]&&W.bn)1b W.7H[g];if(1n 3B.2I==="2V")3B.2I=1k 1c.6I(3B.2I);1a h=3B.1I||W.1I;a.53=h.4c?h.4c(a,W):h;if(3B.1H)a.7A=3B.1H&&3B.1H.4c?3B.1H.4c(a,W):3B.1H;a.5M=3B.3n||W.3n;a.4b=W.jY.1V(3B);W.7B.1V(3B,a);if(!W.bn||!W.7H[g]){1e=a.8o(b).1e;W.bn&&(W.7H[g]=1e)}1b W.7H[g]},FH:19(a,b,c,d,e,f){1a g=W.5S(d,e),3B=f||k(g),1e;W.gp(3B);1a h=W.kh(c,3B);if(!g&&W.7H[h]&&W.bn)1b W.7H[h];if(1n 3B.2I==="2V")3B.2I=1k 1c.6I(3B.2I);1a i=3B.1I||W.1I;b.53=i.4c?i.4c(b,W):i;if(3B.1H)b.7A=3B.1H&&3B.1H.4c?3B.1H.4c(b,W):3B.1H;b.5M=3B.3n||W.3n;b.4b=W.jY.1V(3B);W.7B.1V(3B,b);if(!W.bn||!W.7H[h])1e=b.8o(a).1e;1b 1e},gp:19(a){if(!a.3H)a.3H=W.3H;if(!a.2F)a.2F=W.2F;if(!a.3M)a.3M=W.3M;if(!a.4j)a.4j=W.4j},5S:19(a,b,c){if(c)1b W.2l[a]&&W.2l[a][b]?k(W.2l[a][b]):{};1b W.2l[a]&&W.2l[a][b]?W.2l[a][b]:1z},pK:19(a,b,c){W.2l[a][b]=c},yM:19(a,b){3i W.2l[a][b]},gg:19(a){1b W.2l[a]},ka:19(a,b){W.2l[a]=b},yN:19(a){3i W.2l[a]},6V:19(a,b,c,d){if(W.4u==="g8"&&W.pv.3m(b))1b W.yO(a,c);1a e=W.5S(c,d,1l);W.gp(e);1a f=W.kh(b,e);if(W.7H[f]&&W.bn)1b W.7H[f];1g if(a){a.3E();1a g=W.pP(a,b,c,d);a.3f();1b g}},kg:19(a,b,c){1a d=W.5S(b,c);1b d&&d.2F?d.2F:W.2F},yL:19(a,b,c){1a d=0,i,7o;1b a.8o(W.2o[b]).1e},4l:19(a,b){if(W.a9[b])1b W.a9[b];W.a9[b]=a.8o(W.2o[b]).1e;1b W.a9[b]},yO:19(a,b){if(W.ge[b])1b W.ge[b];1a c=W.2o[b],jZ=W.k0(a,c,b),k1=W.1e-jZ,ga=c.1f-c.3d(W.pv,"").1f,1e=k1/ga;W.ge[b]=1e;1b 1e},k0:19(a,b,c){1a d=0;1b a.8o(b).1e},4w:19(a,b){if(W.gc[b])1b W.gc[b];1a c=W.2o[b],a8=W.kg(a,b,0);1i(1a i=1,1t=c.1f;i<1t;i++){1a d=W.kg(a,b,i);if(d>a8)a8=d}W.gc[b]=a8*W.3z*W.8l;1b W.gc[b]},jW:19(a){1a b=0;1i(1a i=0,1t=W.2o.1f;i<1t;i++)b+=W.4w(a,i);1b b},yl:19(a){if(!W.3I)1b;a.3E();a.53=W.3I;a.63(W.8p(),W.9k(),W.1e,W.1h);a.3f()},1N:19(a){1a b={},i,j,ki;1i(i in W.2l){ki=W.2l[i];b[i]={};1i(j in ki)b[i][j]=k(ki[j])}1b 1c.1d.1D.1B(W.2t("1N",a),{2l:b})}});1c.6x.32=19(a){1b 1k 1c.6x(a.1G,k(a))}})();(19(){1a j=1c.1d.1D.3P;1c.1d.1D.1B(1c.6x.1v,{yA:19(){W.yP();W.yQ();W.yR();W.yS()},yT:19(){W.on("7j",19(){1a a=W;6A(19(){a.7j=1l},3g)})},yP:19(){1a a=W;W.on("nf",19(){if(W.1q&&!W.1q.yU){W.1q.yU=1l;W.yV()}if(a.1q){a.1q.8r=a.1q.8r||[];a.1q.8r.1C(a)}})},yQ:19(){1a a=W;W.on("5L",19(){if(a.1q){a.1q.8r=a.1q.8r||[];1c.1d.7Q(a.1q.8r,a)}})},yV:19(){1a b=W;W.1q.on("4t:9I",19(){1c.6x.1v.pR(b.1q)});W.1q.on("5j:up",19(){if(b.1q.8r)b.1q.8r.4z(19(a){a.gj=1s})});W.1q.on("1D:7j",19(){1c.6x.1v.pR(b.1q)})},pS:19(){W.gq=W.pT(W,1,W.pH,"yW")},pT:19(a,b,c,d){1a e;e={kj:1s,7d:19(){W.kj=1l}};a.7T("8q",b,{7c:c,3y:19(){if(!e.kj)a[d]()},4a:19(){if(a.1q){a.1q.5t(a.1q.3h||a.1X);a.kb()}},7d:19(){1b e.kj}});1b e},yW:19(){1a a=W;if(W.gr)7O(W.gr);W.gr=6A(19(){a.gs=a.pT(a,0,W.pH/2,"pS")},3g)},d9:19(a){1a b=W,dA=a?0:W.yz;W.gq&&W.gq.7d();W.gs&&W.gs.7d();7O(W.gr);W.8q=1;if(W.1q){W.1q.5t(W.1q.3h||W.1X);W.kb()}if(W.kk)7O(W.kk);W.kk=6A(19(){b.pS()},dA)},da:19(){W.gq&&W.gq.7d();W.gs&&W.gs.7d();7O(W.gr);7O(W.kk);W.8q=0;W.1q&&W.1q.5t(W.1q.3h||W.1X)},yX:19(){W.56(0);W.4I(W.1G.1f)},pU:19(){1b W.1G.3r(W.23,W.2M)},yY:19(a){1a b=0,2B=a-1;if(W.d7.3m(W.1G.4C(2B)))3b(W.d7.3m(W.1G.4C(2B))){b++;2B--}3b(/\\S/.3m(W.1G.4C(2B))&&2B>-1){b++;2B--}1b a-b},FI:19(a){1a b=0,2B=a;if(W.d7.3m(W.1G.4C(2B)))3b(W.d7.3m(W.1G.4C(2B))){b++;2B++}3b(/\\S/.3m(W.1G.4C(2B))&&2B<W.1G.1f){b++;2B++}1b a+b},pV:19(a){1a b=0,2B=a-1;3b(!/\\n/.3m(W.1G.4C(2B))&&2B>-1){b++;2B--}1b a-b},yZ:19(a){1a b=0,2B=a;3b(!/\\n/.3m(W.1G.4C(2B))&&2B<W.1G.1f){b++;2B++}1b a+b},z0:19(){1a a=W.pU(),pW=0;1i(1a i=0,1t=a.1f;i<1t;i++)if(a[i]==="\\n")pW++;1b pW},pX:19(a,b){1a c=W.d7.3m(W.1G.4C(a))?a-1:a,7o=W.1G.4C(c),pY=/[ \\n\\.,;!\\?\\-]/;3b(!pY.3m(7o)&&c>0&&c<W.1G.1f){c+=b;7o=W.1G.4C(c)}if(pY.3m(7o)&&7o!=="\\n")c+=b===1?0:1;1b c},z1:19(a){1a b=W.pX(a,-1),kl=W.pX(a,1);W.56(b);W.4I(kl)},z2:19(a){1a b=W.pV(a),kl=W.yZ(a);W.56(b);W.4I(kl)},pR:19(b){if(b.8r)b.8r.4z(19(a){a.7j=1s;if(a.8b)a.km()})},FJ:19(){1a c=W;W.1q.on("5j:3q",19(a){if(!c.gj||!c.8b)1b;1a b=c.gu(a.e);if(b>=c.kn){c.56(c.kn);c.4I(b)}1g{c.56(b);c.4I(c.kn)}})},FK:19(){W.9J="1G";if(W.1q)W.1q.86=W.1q.aU="1G";W.6P=W.yw;W.6t=W.7i=1s;W.8P=W.8Q=1l},k9:19(){if(!W.4x)1b;W.4x.3Z=W.1G;W.4x.23=W.23;W.4x.2M=W.2M},FL:19(){W.9l={6t:W.6t,6P:W.6P,8P:W.8P,8Q:W.8Q,9J:W.9J,86:W.1q&&W.1q.86,aU:W.1q&&W.1q.aU}},z3:19(){if(!W.9l)1b;W.9J=W.9l.FM;W.6t=W.9l.6t;W.6P=W.9l.6P;W.8P=W.9l.8P;W.8Q=W.9l.8Q;if(W.1q){W.1q.86=W.9l.86;W.1q.aU=W.9l.aU}},km:19(){W.7j=1s;W.8b=1s;W.7i=1l;W.2M=W.23;W.4x&&W.1q&&W.4x.4m.FN(W.4x);W.4x=1z;W.da();W.z3();W.8q=0;W.1Y("z4:z5");W.1q&&W.1q.1Y("1G:z4:z5",{1u:W});1b W},pZ:19(){1i(1a a in W.2l)if(!W.2o[a])3i W.2l[a]},gv:19(a,b){3b(b!==a){W.q0(a+1);b--}W.56(a)},q0:19(a){1a b=W.1G[a-1]==="\\n",z6=b?a:a-1;W.q1(b,z6);W.1G=W.1G.3r(0,a-1)+W.1G.3r(a);W.2o=W.d4()},ko:19(a,b){1a c;if(W.2M-W.23>1){W.gv(W.23,W.2M);W.4I(W.23)}if(!b&&W.gf()){W.q2(a,1s);1b}1i(1a i=0,1t=a.1f;i<1t;i++){if(b)c=1c.q3[i];W.q2(a[i],i<1t-1,c)}},q2:19(a,b,c){1a d=W.1G[W.23]==="\\n";W.1G=W.1G.3r(0,W.23)+a+W.1G.3r(W.2M);W.2o=W.d4();W.z7(a,d,c);W.23+=a.1f;W.2M=W.23;if(b)1b;W.k9();W.1q&&W.1q.2w();W.3O();W.1Y("aa");W.1q&&W.1q.1Y("1G:aa",{1u:W})},kp:19(a,b,c){W.kq(a,+1);if(!W.2l[a+1])W.2l[a+1]={};1a d={},gw={};if(W.2l[a]&&W.2l[a][b-1])d=W.2l[a][b-1];if(c){gw[0]=j(d);W.2l[a+1]=gw}1g{1i(1a e in W.2l[a])if(48(e,10)>=b){gw[48(e,10)-b]=W.2l[a][e];3i W.2l[a][e]}W.2l[a+1]=gw}W.gd=1l},kr:19(a,b,c){1a d=W.2l[a],ks=j(d);if(b===0&&!c)b=1;1i(1a e in ks){1a f=48(e,10);if(f>=b){d[f+1]=ks[f];if(!ks[f-1])3i d[f]}}W.2l[a][b]=c||j(d[b-1]);W.gd=1l},z7:19(a,b,c){1a d=W.6U(),2a=d.2a,2P=d.2P;if(!W.gg(2a))W.ka(2a,{});if(a==="\\n")W.kp(2a,2P,b);1g W.kr(2a,2P,c)},kq:19(a,b){1a c=j(W.2l);1i(1a d in W.2l){1a e=48(d,10);if(e>a){W.2l[e+b]=c[e];if(!c[e-b])3i W.2l[e]}}},q1:19(a,b){1a c=W.6U(b),2a=c.2a,2P=c.2P;W.q4(a,c,2a,2P)},q5:19(a){1b W.2o[a-1]},q4:19(a,b,c,d){if(a){1a e=W.q5(b.2a),z8=e?e.1f:0;if(!W.2l[c-1])W.2l[c-1]={};1i(d in W.2l[c])W.2l[c-1][48(d,10)+z8]=W.2l[c][d];W.kq(b.2a,-1)}1g{1a f=W.2l[c];if(f)3i f[d];1a g=j(f);1i(1a i in g){1a h=48(i,10);if(h>=d&&h!==0){f[h-1]=g[h];3i f[h]}}}},z9:19(){W.ko("\\n")}})})();1c.1d.1D.1B(1c.6x.1v,{yS:19(){W.db=+1k 5h;W.q6=+1k 5h;W.dd={};W.on("4T",W.cn.4i(W))},cn:19(a){W.kt=+1k 5h;1a b=W.1q.4p(a.e);if(W.za(b)){W.1Y("zb",a);W.q7(a.e)}1g if(W.zc(b)){W.1Y("bA",a);W.q7(a.e)}W.q6=W.db;W.db=W.kt;W.dd=b;W.zd=W.8b;W.ze=W.7j},zc:19(a){1b W.kt-W.db<aq&&W.dd.x===a.x&&W.dd.y===a.y&&W.zd},za:19(a){1b W.kt-W.db<aq&&W.db-W.q6<aq&&W.dd.x===a.x&&W.dd.y===a.y},q7:19(e){e.9o&&e.9o();e.dk&&e.dk()},yR:19(){W.yT();W.zf();W.zg();W.zh()},zh:19(){W.on("bA",19(a){W.z1(W.gu(a.e))});W.on("zb",19(a){W.z2(W.gu(a.e))})},zf:19(){W.on("4T",19(a){1a b=W.1q.4p(a.e);W.zi=b.x;W.zj=b.y;W.gj=1l;if(W.4x&&W.1q)W.1q.aP.8C(W.4x);if(W.7j)W.zk(a.e);if(W.8b){W.kn=W.23;W.d9(1l)}})},zl:19(e){1a a=W.1q.4p(e);1b W.zi!==a.x||W.zj!==a.y},zg:19(){W.on("4y",19(a){W.gj=1s;if(W.zl(a.e))1b;if(W.ze&&!W.j1);W.7j=1l})},zk:19(e){1a a=W.gu(e);if(e.5B)if(a<W.23){W.4I(W.23);W.56(a)}1g W.4I(a);1g{W.56(a);W.4I(a)}},gu:19(e){1a a=W.wH(e),ku=0,1e=0,1h=0,2P=0,ad,2K;1i(1a i=0,1t=W.2o.1f;i<1t;i++){2K=W.2o[i];1h+=W.4w(W.1X,i)*W.1W;1a b=W.4l(W.1X,i),3S=W.5y(b);1e=3S*W.1O;if(W.5u);1i(1a j=0,4P=2K.1f;j<4P;j++){ku=1e;1e+=W.6V(W.1X,2K[j],i,W.5u?4P-j:j)*W.1O;if(1h<=a.y||1e<=a.x){2P++;3a}1b W.gx(a,ku,1e,2P+i,4P)}if(a.y<1h)1b W.gx(a,ku,1e,2P+i-1,4P)}if(1n ad==="1w")1b W.1G.1f},gx:19(a,b,c,d,e){1a f=a.x-b,zm=c-a.x,2E=zm>f?0:1,ad=d+2E;if(W.5u)ad=e-ad;if(ad>W.1G.1f)ad=W.1G.1f;1b ad}});1c.1d.1D.1B(1c.6x.1v,{FO:19(){W.4x=1c.1T.5A("FP");W.4x.6a("FQ","rf");W.4x.2f.hq="6b: gT; 6e: FR; 1p: q8; 1U: 0;"+" 1e: q8; 1h: q8; z-2B: -FS;";1c.1T.5g.8C(W.4x);1c.1d.3U(W.4x,"r4",W.zn.4i(W));1c.1d.3U(W.4x,"FT",W.zo.4i(W));1c.1d.3U(W.4x,"kv",W.kv.4i(W));1c.1d.3U(W.4x,"q9",W.q9.4i(W));if(!W.zp&&W.1q){1c.1d.3U(W.1q.2R,"bz",W.zq.4i(W));W.zp=1l}},qa:{8:"kw",9:"km",27:"km",13:"z9",33:"qb",34:"qc",35:"kx",36:"qd",37:"qd",38:"qb",39:"kx",40:"qc",46:"zr"},qe:{65:"yX",88:"zs"},zq:19(){W.4x&&W.4x.FU()},zn:19(e){if(!W.8b)1b;if(e.7N in W.qa)W[W.qa[e.7N]](e);1g if(e.7N in W.qe&&(e.bx||e.8w))W[W.qe[e.7N]](e);1g 1b;e.zt();e.9o();W.1q&&W.1q.2w()},zo:19(e){if(!W.8b)1b;1a a=W.23||0,zu=W.2M||0,zv=W.1G.1f,zw=W.4x.3Z.1f,pd=zw-zv+zu-a,zx=W.4x.3Z.3r(a,a+pd);W.ko(zx);e.dk()},zr:19(e){if(W.23===W.2M){if(W.23===W.1G.1f)1b;W.kx(e)}W.kw(e)},kv:19(e){1a a=W.pU(),ae=W.qf(e);if(ae)ae.FV("1G",a);1c.qg=a;1c.q3=W.pI(W.23,W.2M)},q9:19(e){1a a=1z,ae=W.qf(e),qh=1l;if(ae){a=ae.FW("1G").3d(/\\r/g,"");if(!1c.q3||1c.qg!==a)qh=1s}1g a=1c.qg;if(a)W.ko(a,qh);e.zt();e.9o()},zs:19(e){if(W.23===W.2M)1b;W.kv();W.kw(e)},qf:19(e){1b e&&(e.ae||1c.24.ae)},zy:19(e,a){1a b=a?W.2M:W.23,4S=W.6U(b),7o,3S,2a=4S.2a,qi=W.2o[2a].3r(0,4S.2P),zz=W.2o[2a].3r(4S.2P),zB=W.2o[2a+1]||"";if(2a===W.2o.1f-1||e.8w||e.7N===34)1b W.1G.1f-b;1a c=W.4l(W.1X,2a);3S=W.5y(c);1a d=3S;1i(1a i=0,1t=qi.1f;i<1t;i++){7o=qi[i];d+=W.6V(W.1X,7o,2a,i)}1a f=W.zC(4S,zB,d);1b zz.1f+1+f},zC:19(a,b,c){1a d=a.2a+1,zD=W.4l(W.1X,d),3S=W.5y(zD),gy=3S,ky=0,de;1i(1a j=0,4P=b.1f;j<4P;j++){1a e=b[j],df=W.6V(W.1X,e,d,j);gy+=df;if(gy>c){de=1l;1a f=gy-df,kz=gy,kA=1m.2r(f-c),kB=1m.2r(kz-c);ky=kB<kA?j+1:j;1y}}if(!de)ky=b.1f;1b ky},qc:19(e){W.da();W.8q=1;1a a=W.zy(e,W.55==="3K");if(e.5B)W.zE(a);1g W.zF(a);W.d9()},zF:19(a){W.55="3K";W.56(W.23+a);W.4I(W.23)},qj:19(){1a a=W.2M;W.4I(W.23);W.56(a)},zE:19(a){if(W.2M===W.23)W.55="3K";if(W.55==="3K")W.4I(W.2M+a);1g W.56(W.23+a);if(W.2M<W.23&&W.55==="1p"){W.qj();W.55="3K"}if(W.2M>W.1G.1f)W.4I(W.1G.1f)},zG:19(e,a){1a b=a?W.2M:W.23,4S=W.6U(b),2a=4S.2a;if(2a===0||e.8w||e.7N===33)1b b;1a c=W.2o[2a].3r(0,4S.2P),qk=W.2o[2a-1]||"",7o,zH=W.4l(W.1X,4S.2a),3S=W.5y(zH),ql=3S;1i(1a i=0,1t=c.1f;i<1t;i++){7o=c[i];ql+=W.6V(W.1X,7o,2a,i)}1a d=W.zI(4S,qk,ql);1b qk.1f-d+c.1f},zI:19(a,b,c){1a d=a.2a-1,zJ=W.4l(W.1X,d),3S=W.5y(zJ),gz=3S,kC=0,de;1i(1a j=0,4P=b.1f;j<4P;j++){1a e=b[j],df=W.6V(W.1X,e,d,j);gz+=df;if(gz>c){de=1l;1a f=gz-df,kz=gz,kA=1m.2r(f-c),kB=1m.2r(kz-c);kC=kB<kA?j:j-1;1y}}if(!de)kC=b.1f-1;1b kC},qb:19(e){W.da();W.8q=1;1a a=W.zG(e,W.55==="3K");if(e.5B)W.zK(a);1g W.zL(a);W.d9()},zK:19(a){if(W.2M===W.23)W.55="1p";if(W.55==="3K")W.4I(W.2M-a);1g W.56(W.23-a);if(W.2M<W.23&&W.55==="3K"){W.qj();W.55="1p"}},zL:19(a){if(W.23===W.2M)W.56(W.23-a);W.4I(W.23);W.55="1p"},qd:19(e){if(W.23===0&&W.2M===0)1b;W.da();W.8q=1;if(e.5B)W.zM(e);1g W.zN(e);W.d9()},qm:19(e,a,b){1a c=a==="23"?"56":"4I";if(e.7q)W[c](W["FX"+b](W[a]));1g if(e.8w||e.7N===35||e.7N===36)W[c](W["FY"+b](W[a]));1g W[c](W[a]+(b==="zO"?-1:1))},kD:19(e,a){W.qm(e,a,"zO")},kE:19(e,a){W.qm(e,a,"FZ")},zN:19(e){W.55="1p";if(W.2M===W.23)W.kD(e,"23");W.4I(W.23)},zM:19(e){if(W.55==="3K"&&W.23!==W.2M)W.kD(e,"2M");1g{W.55="1p";W.kD(e,"23")}},kx:19(e){if(W.23>=W.1G.1f&&W.2M>=W.1G.1f)1b;W.da();W.8q=1;if(e.5B)W.zP(e);1g W.zQ(e);W.d9()},zP:19(e){if(W.55==="1p"&&W.23!==W.2M)W.kE(e,"23");1g{W.55="3K";W.kE(e,"2M")}},zQ:19(e){W.55="3K";if(W.23===W.2M){W.kE(e,"23");W.4I(W.23)}1g{W.4I(W.2M+W.z0());W.56(W.2M)}},kw:19(e){if(W.23===W.2M)W.zR(e);1g W.gv(W.23,W.2M);W.4I(W.23);W.pZ();W.1q&&W.1q.2w();W.3O();W.1Y("aa");W.1q&&W.1q.1Y("1G:aa",{1u:W})},zR:19(e){if(W.23===0)1b;if(e.8w){1a a=W.pV(W.23);W.gv(a,W.23);W.56(a)}1g if(e.7q){1a b=W.yY(W.23);W.gv(b,W.23);W.56(b)}1g{W.q0(W.23);W.56(W.23-1)}}});(19(){1a k=1c.1d.2G,3u=1c.2x.3u;1c.1d.1D.1B(1c.6x.1v,{k5:19(a,b,c,d,e,f){if(!W.2l[a])1c.5p.1v.k5.1V(W,a,b,c,d,e);1g W.zS(a,b,c,d,f)},zS:19(a,b,c,d,e){1a f=W.2o[a],8m=0,3S=W.5y(W.4l(W.1X,a))-W.1e/2,kF=W.zT(a),bk=W.4w(W.1X,a);1i(1a i=0,1t=f.1f;i<1t;i++){1a g=W.2l[a][i]||{};b.1C(W.zU(f[i],g,3S,kF.k4+kF.2E,8m));1a h=W.6V(W.1X,f[i],a,i);if(g.4v)e.1C(W.zV(g,3S,kF.k4,bk,h,8m));8m+=h}},zT:19(a){1a b=0,qn=0;1i(1a j=0;j<a;j++)b+=W.4w(W.1X,j);qn=W.4w(W.1X,j);1b{k4:b,2E:(W.8l-W.6v)*qn/(W.3z*W.8l)}},zV:19(a,b,c,d,e,f){1b[\'<5Y 1I="\',a.4v,\'" x="\',k(b+f,3u),\'" y="\',k(c-W.1h/2,3u),\'" 1e="\',k(e,3u),\'" 1h="\',k(d/W.3z,3u),\'"></5Y>\'].2A("")},zU:19(a,b,c,d,e){1a f=W.6u.1V(1c.1d.1D.1B({4Z:1l,1H:W.1H,1I:W.1I,1A:"1G",fl:1c.2x.1v.fl},b));1b[\'<k6 x="\',k(c+e,3u),\'" y="\',k(d-W.1h/2,3u),\'" \',b.3H?\'4b-e8="\'+b.3H.3d(/"/g,"\'")+\'" \':"",b.2F?\'4b-at="\'+b.2F+\'" \':"",b.4j?\'4b-2f="\'+b.4j+\'" \':"",b.3M?\'4b-4k="\'+b.3M+\'" \':"",b.3N?\'1G-9C="\'+b.3N+\'" \':"",\'2f="\',f,\'">\',1c.1d.2V.dQ(a),"</k6>"].2A("")}})})();(19(f){1a g=f.1c||(f.1c={}),3P=g.1d.1D.3P;g.7I=g.1d.2J(g.6x,g.bE,{1A:"cv",kG:20,bo:0,G0:1z,2u:19(a,b){W.1X=g.1d.6g().2L("2d");W.2t("2u",a,b);W.1K({9Q:1s,7D:1s,eT:1s,cu:1l});W.oF(g.7I.qo());W.jT.1e=1l},g5:19(a){if(W.jU)1b;if(!a){a=g.1d.6g().2L("2d");W.g6(a)}W.bo=0;W.2o=W.d4();if(W.bo>W.1e)W.4s("1e",W.bo);W.g7();W.1h=W.jW(a)},zW:19(){1a a=0,gA=0,dg=0,5c={};1i(1a i=0;i<W.2o.1f;i++){if(W.1G[dg]==="\\n"){gA=0;dg++;a++}1g if(W.1G[dg]===" "){gA++;dg++}5c[i]={2K:a,2E:gA};dg+=W.2o[i].1f;gA+=W.2o[i].1f}1b 5c},5S:19(a,b,c){if(W.5z){1a d=W.5z[a];if(!d)1b c?{}:1z;a=d.2K;b=d.2E+b}1b W.2t("5S",a,b,c)},pK:19(a,b,c){1a d=W.5z[a];a=d.2K;b=d.2E+b;W.2l[a][b]=c},yM:19(a,b){1a c=W.5z[a];a=c.2K;b=c.2E+b;3i W.2l[a][b]},gg:19(a){1a b=W.5z[a];1b W.2l[b.2K]},ka:19(a,b){1a c=W.5z[a];W.2l[c.2K]=b},yN:19(a){1a b=W.5z[a];3i W.2l[b.2K]},zX:19(a,b){1a c=b.3o(W.pu),kH=[],i;1i(i=0;i<c.1f;i++)kH=kH.4o(W.zY(a,c[i],i));1b kH},qp:19(a,b,c,d){1a e=0;d=d||0;1b a.8o(b).1e},zY:19(a,b,c){1a d=0,b9=[],2K="",qq=b.3o(" "),8n="",2E=0,qr=" ",dh=0,qs=0,gB=0;1i(1a i=0;i<qq.1f;i++){8n=qq[i];dh=W.qp(a,8n,c,2E);2E+=8n.1f;d+=qs+dh;if(d>=W.1e&&2K!==""){b9.1C(2K);2K="";d=dh}if(2K!==""||i===1)2K+=qr;2K+=8n;qs=W.qp(a,qr,c,2E);2E++;if(dh>gB)gB=dh}i&&b9.1C(2K);if(gB>W.bo)W.bo=gB;1b b9},d4:19(){1a a=W.4u;W.1X.3E();W.g6(W.1X);W.4u="1p";1a b=W.zX(W.1X,W.1G);W.4u=a;W.1X.3f();W.2o=b;W.5z=W.zW();1b b},oi:19(a,b){if(a==="1O"){if(W.1J("1A")!="cv"){W.1K("1O",1m.2r(1/b));W.1K("1e",W.1J("1e")*b/(1n W.qt==="1w"?1:W.qt))}W.qt=b}},6U:19(a){if(1n a==="1w")a=W.23;1a b=W.2o.1f,5L=0;1i(1a i=0;i<b;i++){1a c=W.2o[i],qu=c.1f;if(a<=5L+qu)1b{2a:i,2P:a-5L};5L+=qu;if(W.1G[5L]==="\\n"||W.1G[5L]===" ")5L++}1b{2a:b-1,2P:W.2o[b-1].1f}},pN:19(a,b){1a c=0,6w=0,4S=W.6U(),qv=W.2o[4S.2a].3o(""),3S=W.5y(W.4l(W.1X,4S.2a));1a d="";1i(1a i=0;i<4S.2P;i++){d+=qv[i];6w+=W.6V(W.1X,qv[i],4S.2a,i)}1a e=W.5S(4S.2a,i,1l);W.gp(e);W.1X.3E();W.1X.3f();1i(i=0;i<4S.2a;i++)c+=W.4w(W.1X,i);if(b==="iW")c+=(1-W.6v)*W.4w(W.1X,4S.2a)/W.3z-W.kc(4S.2a,4S.2P)*(1-W.6v);1b{1r:c,1p:6w,pO:3S}},zZ:19(){1b 1m.29(W.kG,W.bo)},1N:19(a){1b g.1d.1D.1B(W.2t("1N",a),{kG:W.kG})}});g.7I.32=19(a){1b 1k g.7I(a.1G,3P(a))};g.7I.qo=19(){1b{tl:1s,tr:1s,br:1s,bl:1s,ml:1l,mt:1s,mr:1l,mb:1s,7k:1l}};g.7I.aI=[]})(1n 1S!=="1w"?1S:W);(19(){1a h=1c.4G.1v.iV;1c.4G.1v.iV=19(a,b,c,d,e,f,g){1a t=b.1u;if(t 7a 1c.7I&&e!=="nO"){1a w=t.1e*(a.x/b.1O/(t.1e+t.3n));if(w>=t.zZ())t.1K("1e",w)}1g h.1V(1c.4G.1v,a,b,c,d,e,f,g)};1c.7C.1v.G1=19(){if(1n 1c.7I==="1w")1b;1i(1a i=W.1Q.1f;i--;)if(W.1Q[i]7a 1c.7I){W.oF(1c.7I.qo());1b}};1a j=1c.1d.1D.3P;1c.1d.1D.1B(1c.7I.1v,{pZ:19(){1i(1a a in W.5z)if(!W.2o[a])3i W.2l[W.5z[a].2K]},kr:19(a,b,c){1a d=W.5z[a];a=d.2K;b=d.2E+b;1c.6x.1v.kr.31(W,[a,b,c])},kp:19(a,b,c){1a d=W.5z[a];a=d.2K;b=d.2E+b;1c.6x.1v.kp.31(W,[a,b,c])},kq:19(a,b){1a c=j(W.2l),5c=W.5z[a];a=5c.2K;1i(1a d in W.2l){1a e=48(d,10);if(e>a){W.2l[e+b]=c[e];if(!c[e-b])3i W.2l[e]}}},q5:19(a){1a b=W.2o[a-1];3b(W.5z[a-2]&&W.5z[a-2].2K===W.5z[a-1].2K){b=W.2o[a-2]+b;a--}1b b},q1:19(a,b){1a c=W.6U(b),5c=W.5z[c.2a],2a=5c.2K,2P=5c.2E+c.2P;W.q4(a,c,2a,2P)}})})();(19(){1a g=1c.6x.1v.gx;1c.6x.1v.gx=19(a,b,c,d,e){d=g.1V(W,a,b,c,d,e);1a f=0,5L=0;1i(1a i=0;i<W.2o.1f;i++){f+=W.2o[i].1f;if(f+5L>=d)1y;if(W.1G[f+5L]==="\\n"||W.1G[f+5L]===" ")5L++}1b d-i+5L}})();(19(){if(1n 1T!=="1w"&&1n 24!=="1w")1b;1a i=8t("G2").mG,o6=8t("9E"),A0=8t("cl"),A1=8t("qw"),4G=8t("1q"),1F=8t("1q").1F;19 8D(d,e,f){1a g=o6.hZ(d);if(!g.gC)g.gC=g.A2.2X("qw:")===0?G3:80;1a h=g.A2.2X("qw:")===0?A1:A0,qx=h.8D({qy:g.qy,gC:g.gC,21:g.21,hC:"lT"},19(b){1a c="";if(e)b.G4(e);b.on("7r",19(){f(c)});b.on("1o",19(a){if(b.G5===l6)c+=a})});qx.on("kU",19(a){if(a.G6===jS.A3)1c.7t("A3: G7 G8 to "+g.qy+":"+g.gC);1g 1c.7t(a.G9);f(1z)});qx.7r()}19 qz(c,d){1a e=8t("fs");e.Ga(c,19(a,b){if(a){1c.7t(a);bQ a;}1g d(b)})}1c.1d.7s=19(b,c,d){19 qA(a){if(a){e.3D=1k kK(a,"A4");e.jw=b;c&&c.1V(d,e)}1g{e=1z;c&&c.1V(d,1z,1l)}}1a e=1k 1F;if(b&&(b 7a kK||b.2X("1o")===0)){e.3D=e.jw=b;c&&c.1V(d,e)}1g if(b&&b.2X("cl")!==0)qz(b,qA);1g if(b)8D(b,"A4",qA);1g c&&c.1V(d,b)};1c.i0=19(b,c,d){b=b.3d(/^\\n\\s*/,"").3d(/\\?.*$/,"").5q();if(b.2X("cl")!==0)qz(b,19(a){1c.i1(a.42(),c,d)});1g 8D(b,"",19(a){1c.i1(a,c,d)})};1c.i1=19(c,d,e){1a f=(1k i).mH(c);1c.hU(f.5T,19(a,b){d&&d(a,b)},e)};1c.1d.hz=19(b,c){8D(b,"",19(a){Gb(a);c&&c()})};1c.1F.32=19(e,f){1c.1d.7s(e.3D,19(c){1a d=1k 1c.1F(c);d.p3(e);d.fI(e.1R,19(b){d.1R=b||[];d.fI(e.8j,19(a){d.8j=a||[];f&&f(d)})})})};1c.Gc=19(a,b,c,d){d=d||c;1a e=1c.1T.5A("1q"),8s=1k 4G(a||hV,b||hV,d);e.2f={};e.1e=8s.1e;e.1h=8s.1h;1a f=1c.4G||1c.2U,gD=1k f(e,c);gD.aM=8s.2L("2d");gD.8s=8s;gD.A5=4G.A5;1b gD};1c.2U.1v.A6=19(){1b W.8s.A6()};1c.2U.1v.A7=19(a){1b W.8s.A7(a)};1a j=1c.2U.1v.aN;1c.2U.1v.aN=19(a,b){j.1V(W,a,b);W.8s.1e=a;1b W};if(1c.4G)1c.4G.1v.aN=1c.2U.1v.aN;1a k=1c.2U.1v.aO;1c.2U.1v.aO=19(a,b){k.1V(W,a,b);W.8s.1h=a;1b W};if(1c.4G)1c.4G.1v.aO=1c.2U.1v.aO})();',
62,2617,"                                                          this             function var return fabric util width length else height for eventjs new true Math typeof data left canvas top false len target prototype undefined case break null type extend push object  Image text stroke fill get set group center toObject scaleX current _objects filters exports document opacity call scaleY ctx fire Point  path source selectionStart window  color  originX max lineIndex Gesture imageData  255 style min controlX controlY add originY styles remove offsetY _textLines points offsetX abs Color callSuper initialize transform renderAll Object listener proxy join index strokeDashArray bounds offset fontSize toFixed coords shadow createClass line getContext selectionEnd tempX tempY charIndex getAttribute upperCanvasEl arguments angle StaticCanvas string gesture indexOf _gestureHandlers parseFloat  apply fromObject        continue while fingers replace radius restore 100 contextTop delete pageX doc scale test strokeWidth split pageY move slice skewX Intersection NUM_FRACTION_DIGITS onPointerMove Array getImageData onComplete lineHeight viewportTransform styleDeclaration onPointerUp src save skewY alpha fontFamily backgroundColor _this right transformMatrix fontWeight textDecoration setCoords clone repeat action lineLeftOffset clipTo addListener toSVG getActiveGroup _currentTransform number value  sin toString  colorStops   mousemove parseInt result onChange font toLive getCenterPoint active match tracker start bind fontStyle weight _getLineWidth parentNode complexity concat getPointer image gradientTransform _set selection textAlign textBackgroundColor _getHeightOfLine hiddenTextarea mouseup forEach cos minY charAt none removeListener lowerCanvasEl Canvas CONTROLIMAGES setSelectionEnd onPointerDown getObjects floor translate rotate beginPath jlen markup paths cursorLocation mousedown scrollTop PI sqrt 360 degreesToRadians visible  matrix round fillStyle  _selectionDirection setSelectionStart blur minX  drawDashedLine segs map warn prop ATTRIBUTE_NAMES body Date defined mouse getCoords pointer switch threshold transformPoint Text trim getSource toDataURL clearContext flipX _render iLen putImageData _getLineLeftOffset _styleMap createElement shiftKey previous filter array obj lineTo xlink parsedDim already backgroundImage removed lineWidth sourcePath oCoords iLine applyTo BaseFilter _getStyleDeclaration documentElement addEventListener scrollLeft state pow rect strokeLineCap  average render fillRect closePath  corner _onMouseMove heightBy2 Polygon setAttribute position bbox identifier bottom moveTo createCanvasElement stateProperties alignX strokeLineJoin el2 objects overlayColor fromElement getWidth overlayImage flipY vpt dim hasControls getSvgStyles _fontSizeFraction leftOffset IText nodeName timeout setTimeout Infinity event renderOnAddRemove crossOrigin alignY handlers options Shadow includeDefaultValues getElement _groupSelector Path original _activeObject borderColor getSvgTransform _element mode offsets get2DCursorLocation _getWidthOfChar stop console supports changedTouches Event minFingers  distance atan2  __eventListeners parseUnit getBoundsOfCurve args instanceof klass duration abort attr preserveAspectRatio svgUid rgba selectable selected mtr getSvgTransformMatrix _createBaseSVGMarkup canvasEl _char removeEventListener altKey end loadImage log bound capitalize listeners commaWsp parseAttributes getHeight strokeStyle _setShadow Group lockScalingY currentObject replacement idx _charWidthsCache Textbox SHARED_ATTRIBUTES constructor getTime maxFingers keyCode clearTimeout drag removeFromArray invoke loaded animate startValue svg strokeMiterLimit getAlpha viewBox Pattern  Gradient _points Circle Rect  defaultCursor translateToOriginPoint  lockScalingX setCursor isEditing resize _renderStroke methodName _drawControl startAngle endAngle Polyline resizeFilters alpha1 _fontSizeMult charOffset word measureText _getLeftOffset _currentCursorOpacity _iTextInstances nodeCanvas require eventId toUpperCase metaKey time1 longpress async cosTh bezierCurveTo appendChild request xhr endValue fillRule gradientDefs ElementsParser setSource hsl key setOptions getActiveObject setLineDash lockMovementX lockMovementY skew _getTransformedDimensions newScaleX newScaleY padding groupSelector aleft atop findTarget   _hoveredTarget  _onMouseDown getAngle  drawImage globalCompositeOperation _renderDashedStroke  getBoundingRect currentWidth Line Ellipse brightness source2 context pixels mask _getTopOffset _savedProps reNum modifyEventListener preventDefault cancel toLowerCase touch touchmove pointerSetup default orientation radiansToDegrees PathGroup meetOrSlice segsNorm getElementsByTagName scriptEl decoration parsed url RegExp href imageSmoothingEnabled cleared hoverCursor containsPoint transparentCorners thisApp superlab origin newValue lockUniScaling _previousOriginX _previousOriginY _fire format _renderFill propPair pathOffset subpathStartX subpathStartY coordsParsed   channel blocksize stepW stepH chnl maxHeight __lineWidths changed topOffset decl newSelectionStart clipboardData isLikelyNode String 1E3 attachEvent pointerStart rotation pointerEnd touches pointer1 180 count 500 splice forEachObject size getRandomInt onload img Function clipContext multiplyTransformMatrices align dtheta ceil boundCopy ActiveXObject matcher attrs descendants instances appendPoints linear ellipseMatrix contextContainer setWidth setHeight wrapperEl objsToRender setPositionByOrigin jpeg centeredRotation moveCursor _findTargetCorner _renderControls activeObject  _otherBy setAngle setActiveObject  _onMouseUp isMoving hasRotatingPoint self originXOffset xPoints lines axis1 axis2 hue redchannel  greenchannel bluechannel noise resizeType icenter heightOfLine  textBgRects caching dynamicMinWidth DPI touchstart  touchend clientX clientY box border ctrlKey  click dblclick shake tap wheelDelta Observable contains atan maxX maxY invertTransform Number aspectRatioAttrs sinTh fromY mDelta tvalues throw setElement toArray addClass wrapElement getElementOffset 70158 circle pattern tan matrices parentMatching classNames firstChild toBeParsed normal parentAttributes elements status intersectLinePolygon rgb radial SVGID_ objectBoundingBox multFactor interactive calcOffset cacheCanvasEl background getCenter toDatalessObject http  onMouseDown created patternCtx centeredScaling selectionDashArray mouseXSign mouseYSign hasBorders textbox otherBy   forbidScalingX forbidScalingY lastRenderedObjectWithControlsAboveOverlay quality supportsLineDash backgroundcolor_width backgroundcolor_height getViewportTransform boundingRect getLeft getTop sizeY _applyPointOffset jLen marginX marginY blendcolor bimages contrast tintR tintG tintB isImage 128 lanczosLobes ratioX ratioY cacheLanc xDiff yDiff origPix _splitTextIntoLines _renderChars fillText _reSpace charHeight initDelayedCursor abortCursorAnimation __lastClickTime  __lastPointer foundMatch widthOfChar charCount wordWidth  modifySelectors stopPropagation div substr detachEvent  oldListener enabled down reset gestureFingers getCoord observe acceleration   swipe delay wheel reduce PiBy180 rotatePoint enlivenObjects setSourcePath  meet pop segmentToBezierCache rx2 ry2 costh3 sinth3 drawArc escapeXml Dummy superclass properties areHostMethods getUniqueId  getScrollLeftTop setStyle setOpacity getById className selectProp makeElementUnselectable requestAnimFrame time easing easeOutBounce family cssRules normalizeAttr normalizeValue isNaN setAlpha translateMatrix widthAttr heightAttr __uid elList rules callback   reviver resolveGradient toRgb  blue green red commonAttributes proto discardActiveGroup   drawControls isContainedWithinObject setShadow quadraticCurveTo sprayChunks sprayChunkPoints globalAlpha patternCanvas STROKE_OFFSET isDrawingMode _setOriginToCenter contextCache evented scales origins flipSign skewSign toLocalPoint _by _scaleObject lockScalingFlip lockRotation boundsWidth boundsHeight cssScale _activeGroup deactivateAll _setCursorFromEvent _onResize _onMouseWheel _onGesture _onDrag _onOrientationChange _onShake _onLongPress multiplier croppedCanvasEl activeGroup origBorderColor __setBgOverlay cornerSize minScaleLimit backgroundcolor_leftoffset backgroundcolor_topoffset _removeDefaultValues _setStrokeStyles _stroke currentHeight getSvgFilter originalState cosHalfOffset sinHalfOffset dimX dimY FX_DURATION  _setWidthHeight dimension nearest farthest   calcLinePoints Triangle isRounded _updateObjectsCoords minXY _originalElement Resize imageMargins elementToDraw _initFilters saturate _r _g _b opaque side dst dstOff Mask maskCanvasEl rand avg rcpScaleX rcpScaleY   tmpCanvas srcData destData ratioH data2 weights _initDimensions _setTextStyles _clearCache justify _renderTextLine numSpaces strokeText __lineHeights _forceClearCache __widthOfSpace isEmptyStyles _getLineStyle boundaries  __isMousedown endLine boxWidth prevStyle shouldFill shouldStroke _applyFontStyles _currentTickState _cursorTimeout1 _currentTickCompleteState  getSelectionStartFromPointer _removeCharsFromTo newLineStyles _getNewSelectionStartFromOffset widthOfCharsOnNextLine widthOfCharsOnPreviousLine realLineCharCount largestWordWidth port fabricCanvas version DOCTYPE isTouchSupported linecap isFinite getEventSupport not ownerDocument defaultListener isMouse isMSPointer isTouch getPropertyValue getBoundingClientRect getComputedStyle fixed escKey dbltap DEG2 DEG1 pointerdown pointermove pointerup devicemotion snap mousewheel stopObserving _onObjectAdded item exec DEFAULT_SVG_FONT_SIZE camelize createImage loading onLoaded rot draw getFunctionBody Mid boundsOfCurveCache _join root mTheta th3 b2ac sqrtb2ac val valueOf cssText currentStyle try catch err makeElement scrollLeftTop onselectstart unselectable getScript onreadystatechange readyState method www byValue onStart normalize easeInBounce 5625 ellipse visibility colorAttributes parseTransformAttribute toRgba scaleMatrix currentTrans applyViewboxTransform viewBoxWidth viewBoxHeight tagName parseSVGDocument 600 linearGradient radialGradientEls idsToXlinkMap parse loadSVGFromURL loadSVGFromString checkIfDone inter currentAlpha hue2rgb fromSource isShortNotation gradientUnits addFactor patternImgSrc affectStroke offsetsAndBlur  fBoxY   feMergeNode stateful controlsAboveOverlay preserveObjectStacking _createCanvasElement _discardActiveObject  discardActiveObject overlay _centerObject sendToBack  bringToFront sendBackwards bringForward toJSON BaseBrush _setBrushStyles shadowColor shadowBlur shadowOffsetX shadowOffsetY _resetShadow PencilBrush onMouseMove onMouseUp createPath arc dotWidth dotWidthVariance selectionColor perPixelTargetFind freeDrawingBrush _resetCurrentTransform centerTransform thecroprect lockSkewingX lockSkewingY dimNoSkew newDimMouse _setObjectScale cursor strokeRect setActiveGroup _previousPointer _isCurrentlyDrawing __corner saveCoords addWithUpdate selectionX1Y1 selectionX2Y2 cropping jpg origHeight __gesturesParams _setOpacity objectLeftTop translateToGivenOrigin _originalOriginX _originalOriginY xcount _calculateCurrentDimensions _angle translatePart _controlsVisibility isControlVisible scaletopright _calcDimensions parsedAttributes CcSs QqTt currentPath commandLength  _calcBounds _restoreObjectsState _moveFlippedObject _src Brightness contrastF Convolute tmpCtx scx GradientTransparency Grayscale Invert Noise Pixelate RemoveWhite limit Sepia Sepia2 Tint Multiply Blend multW multH signW signH process _dimensionAffectingProps __skipDimension _cacheLinesWidth _getTextHeight _renderTextDecoration _getFontDeclaration wordsWidth _getWidthOfWords widthDiff textTop textLeft lineTop _setSVGTextLineText tspan _getFillAttributes offX _updateTextarea _setLineStyle renderCursorOrSelection getCurrentCharFontSize startLine thisStyle charsToRender _getHeightOfChar _getCacheProp row isAborted _cursorTimeout2 newSelectionEnd exitEditing __selectionStartOnMouseDown insertChars insertNewlineStyleObject shiftLineStyles insertCharStyleObject currentLineStylesCloned __newClickTime prevWidth copy removeChars moveCursorRight indexOnNextLine rightEdge offsetFromLeftEdge offsetFromRightEdge indexOnPrevLine _moveLeft _moveRight lineOffset minWidth wrapped html head Buffer rule dasharray linejoin miterlimit cancelBubble cancelBubbleCount prevent removeAttribute useCall error msPointer navigator uniqueID absolute moveTime getBoundingBox scrollBodyLeft scrollBodyTop attributes monitor accelerationIncludingGravity 200 driftDeviance orientationchange devicePixelRatio _removeEventListener Collection _onObjectRemoved subtractEquals makeBoundingBoxFromPoints yPoints getKlass onerror Error numTotalObjects populateWithProperties G_vmlCanvasManager createAccessors capitalizedPropName setterName getterName denom parsePreserveAspectRatioAttribute arcToSegments  fromX py2 px2 calcVectorAngle sinth2 toX toY getBoundsOfArc every some find Subclass wrappedHandler scroll pointerY _getPointer reOpacity getElementById class docElement offsetAttributes defaultView makeElementSelectable Microsoft XMLHTTP GET finish elastic easeOutCubic easeInOutCubic easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInExpo easeOutExpo easeInOutExpo easeInCirc  easeOutCirc easeInOutCirc easeInElastic easeOutElastic easeInOutElastic easeInBack easeOutBack easeInOutBack easeInOutBounce   polygon symbol defs attributesMap  selectorMatches  nodelist nodeValue missingViewBox missingDimAttr _createSVGPattern userSpaceOnUse radialGradient parsePointsAttribute allRules ruleObj propertyValuePairs property DOMParser parseFromString xml multiply midPointFrom uaT ubT topRight bottomLeft colorNameMap sourceFromHex sourceFromRgb sourceFromHsl  _rgbToHsl otherAlpha 000000 substring colorAlpha _convertPercentUnitsToValues patternWidth patternHeight reOffsetsAndBlur CANVAS_INIT_ERROR _initStatic _setImageSmoothing _initRetinaScaling setBackgroundImage _offset __setBgOverlayImage __setBgOverlayColor _initCanvasElement _applyCanvasStyle setDimensions  added before clearRect clear activeGroupObjects setTransform _renderObjects _renderBackgroundOrOverlay _toObjectMethod  _realizeGroupTransformOnObject _unwindGroupTransformOnObject svgViewportTransformation _setSVGBgOverlayColor _setSVGBgOverlayImage org intersectsWithObject  dispose _captureDrawingPath _addPoint drawDot addSprayChunk getPatternSrc _shouldCenterTransform lastX lastY theta originA originB _skewObject actualMouseByOrigin constraintPosition newDim localMouse equally lastDist _resetObjectTransform _discardActiveGroup __onTransformGesture __onDrag __onOrientationChange __onShake __onLongPress _shouldRender _scaling shouldGroup saveState scaling currentAction isContainedWithinRect blob __toDataURL URL croppedCtx scaledWidth scaledHeight loadFromJSON 102 153 butt borderOpacityWhenMoving  _getLeftTopCoords _constrainScale setOnGroup toggle _setupCompositeOperation _setFillStyles multY  _removeShadow originYOffset translateToCenterPoint getPointByOrigin hypotFull _getImageLines _findCrossPoints _hypotenuse _setCornerCoords newTheta cornerHypotenuse addStrokeToW addStrokeToH scaleOffset scalebottomright scalex _getControlsVisibility setControlsVisibility skipCallbacks  _animate from makeEdgeToOriginGetter yMult widthBy2 commonRender addTransform coordsStr __origHasControls objectTop _setObjectActive delegatedProperties _setObjectPosition oldOriginY rotated props maxXY _lastScaleX _lastScaleY   _initConfig applyFilters getSrc _filteredEl preserveAR _getAngleValueForStraighten halfSide output total  diff lanczos doneW doneH range2X  range2Y destImg  destImage img2 weightsAlpha gxR gxG gxB gxA  _reNewline _reSpacesAndTabs _translateForTextAlign   skipTextAlign _skipFillStrokeCheck _renderTextLinesBackground wordCount oLen underline through overline cursorDuration getSelectionStyles _extendStyles _setStyleDeclaration _getCursorBoundaries getCurrentCharStyle _getCursorBoundariesOffsets lineLeft _applyCharStylesGetWidth decorations exitEditingOnOthers _tick _animateCursor getSelectedText findLineBoundaryLeft numNewLines searchWordBoundary reNonWord _removeExtraneousStyles _removeSingleCharAndStyle removeStyleObject insertChar copiedTextStyle _removeStyleObject _getTextOnPreviousLine __lastLastClickTime _stopEvent 0px paste _keysMap moveCursorUp moveCursorDown moveCursorLeft _ctrlKeysMap _getClipboardData copiedText useCopiedStyle textOnSameLineBeforeCursor swapSelectionPoints textOnPreviousLine widthOfCharsOnSameLineBeforeCursor _move lastHeight getTextboxControlVisibility _measureText words infix infixWidth __oldScaleX lineLen lineChars https req hostname requestFs createImageAndCallBack jsdom createWindow ontouchstart display preventManipulation activeElement clearInterval querySelector length0 length1 useCapture fromOverwrite MSPointerDown MSPointerMove MSPointerUp createPointerEvent HTMLElement userAgent relative env differenceFromLast difference startTime offsetHeight pageXOffset pageYOffset   fnKey keydown MutationObserver DOMAttrModified 700 change isPointerEmitter 250 preventElasticBounce  detail  off insertAt random addEquals falseFunction resolveNamespace numLoadedObjects groupSVGElements clip isTransparent cx1 cy1 segmentToBezier cp1X cp1Y cp2X  cp2Y   large sweep TypeError xA0 emptyFunction IS_DONTENUM_BUGGY addMethods shift subclasses unknown __uniqueID createListener handler createWrappedHandler createDispatcher shouldUseAttachEventDetachEvent srcElement cssFloat styleFloat supportsOpacity supportsFilters replaceChild host nodeType getElementStyle userSelect MozUserSelect WebkitUserSelect KhtmlUserSelect complete addParamToUrl Msxml2 emptyFn parameters tick 525 reAllowedSVGTagNames polyline reViewBoxTagNames reNotAllowedAncestors reAllowedParents  fillOpacity strokeOpacity  anchor hidden _setStrokeFillOpacity rotateMatrix multiplierY skewXMatrix skewYMatrix transforms transformList reTransformList reTransform operation parseStyleString parseStyleObject   getGlobalStylesForElement elementMatchesRule doesSomeParentMatch elementById parseUseDirectives cloneNode oldLength instantiated_by_use hasAncestorWithNodeName getGradientDefs getCSSRules parseElements has _enlivenCachedObject 400 parseFontDeclaration parseStyleAttribute textContent declaration responseText XMLDOM loadXML createSVGFontFacesMarkup createSVGRefElementsMarkup numElements createObjects createObject _createObject createCallback   subtract intersectLineLine intersectPolygonPolygon intersectPolygonRectangle inter1 inter2 inter3 inter4  _tryParsingColor _source hsla otherSource   reRGBa reHSLa reHex  white fromRgb  fromHsl getColorStop  getLinearCoords getRadialCoords addColorStop forObject 01   patternOffsetX patternOffsetY createPattern _parseShadow feGaussianBlur feOffset oBlur feMerge activeInstance allowTouchScrolling onBeforeScaleRotate enableRetinaScaling _createLowerCanvas _initOptions setOverlayImage setBackgroundColor setOverlayColor lower cssOnly _setBackstoreDimension _setCssDimension zoomToPoint absolutePan setupState _chooseObjectsToRender _renderBackground _renderOverlay after renderTop _drawSelection centerObjectH centerObjectV centerObject _toObjects __serializeBgOverlay _toObject realizeTransform _setSVGPreamble  _setSVGHeader _setSVGObjects encoding DTD SVG xmlns desc originalProperties _findNewLowerIndex _findNewUpperIndex removeListeners toDataURLWithQuality lineCap  lineJoin _prepareForDrawing _finalizeAndAddPath _reset convertPointsToSVGPath addPoint circleRadius circleColor density randomOpacity optimizeOverlapping  ilen _getOptimizedRects dotDistance getPatternSrcFunction getPattern _initInteractive _createCacheCanvas uniScaleTransform selectionBorderColor selectionLineWidth freeDrawingCursor crosshair rotationCursor containerClass targetFindTolerance skipTargetFind _initWrapperElement _createUpperCanvas _initEventListeners _normalizePointer isObjectInGroup isTargetTransparent _shouldClearSelection _getOriginFromCorner _getActionFromCorner _setupCurrentTransform isitrotating _translateObject _changeSkewTransformOrigin actualMouseByCenter lastMouseByCenter _setObjectSkew _setLocalMouse _scaleObjectEqually _flipObject _rotateObject curAngle _isLastRenderedObject _searchPossibleTargets _fireOverOutEvents out mouseout over _checkTarget _copyCanvasStyle _setActiveObject _setActiveGroup destroy deactivateAllWithDispatch _drawObjectsControls cursorMap _bindEvents __onMouseWheel __onMouseDown __onMouseUp __onMouseMove _onMouseUpInDrawingMode _finalizeCurrentTransform _maybeGroupObjects _handleCursorAndEvent hasStateChanged modified _restoreOriginXY _onMouseDownInDrawingMode _onMouseMoveInDrawingMode which _shouldGroup _clearSelection _handleGrouping _beforeTransform _transformObject _beforeScaleTransform _performTransformAction _onScale skewing _setCornerCursor _getRotatedCornerCursor isType _updateActiveGroup _createActiveGroup removeWithUpdate _createGroup isActiveLower groupObjects _groupSelectedObjects _collectObjects  isClick intersectsWithRect   setObjectsCoords png __toDataURLWithMultiplier __toblob __getCroppedCanvas toBlob shouldCrop _tempRemoveBordersControlsFromGroup _restoreBordersControlsOnGroup toDataURLWithMultiplier JSON _enlivenObjects _setBgOverlay cloneWithoutData backgroundImageOpacity backgroundImageStretch __gesturesRenderer cornerColor miter borderScaleFactor _initGradient _initPattern _initClipping typostyle  bubblestyles bubblestyle movebutton styletype theimportedimgtype stickertype isBackground isadded _setObject drawBorders evenodd fff _resetOrigin getLocalPointer xFull yFull intersection point1 point2 _calcDimensionsTransformMatrix skewMatrixY anglePart scalePart skewXPart skewYPart addTranslateX flipXPart addTranslateY flipYPart isVML _getNonTransformedDimensions scaley setControlVisible   coordProps _getLeftToOriginX _getTopToOriginY setRadius startY endX endY largeFlag isValidRadius piBy2 _initRxRy _toString commandLengths repeatedCommands mzlhvcsqta  _parsePath _setPositionDimensions _parseDimensions repeatedCommand klen deltaX deltaY pathUrl parentToObject parseDimensionsFromPaths isSameColor _updateObjectCoords _renderObject _restoreObjectState _toggleFlipping  _getRotatedLeftTop _originalLeft _originalTop  _getBounds _initElement getSvgSrc pngCompression _findMargins _needsResize Max CSS_CANVAS fromURL straighten fxStraighten rgbToHsv hsvToRgb 259 adjust _createImageData alphaFac maskEl maskData _ilen _jlen hermite sliceByTwo hermiteFastResize   bilinearFiltering lanczosResize lanczosCreate rcpRatioX rcpRatioY srcImg destPixels ratioWHalf ratioHHalf centerY centerX _getTextWidth _renderTextBackground _renderText _renderTextFill  _renderTextStroke spaceWidth _renderTextBoxBackground _shouldClearCache __ renderLinesAtOffset _getSVGLeftTopOffsets textAndBg _getSVGTextAndBg _wrapSVGTextAndBg textSpans _setSVGBg _setSVGTextLineBg editingBorderColor cursorWidth cursorColor cursorDelay initBehavior renderCursor  renderSelection getCurrentCharColor j2len _renderCharsFast _hasStyleChanged _renderChar _renderCharDecoration positions _getWidthOfCharsAt _deleteStyleDeclaration _deleteLineStyle _getWidthOfSpace initAddedHandler initRemovedHandler initCursorSelectionHandlers initDoubleClickSimulation initSelectedHandler _hasITextHandlers _initCanvasHandlers _onTickComplete selectAll findWordBoundaryLeft findLineBoundaryRight getNumNewLinesInSelectedText selectWord selectLine _restoreEditingProps editing exited indexStyle insertStyleObjects newCharIndexOnPrevLine insertNewline isTripleClick tripleclick isDoubleClick __lastIsEditing __lastSelected initMousedownHandler initMouseupHandler initClicks __mousedownX __mousedownY setCursorByClick _isObjectMoved distanceBtwNextCharAndCursor onKeyDown onInput _clickHandlerInitialized onClick forwardDelete cut stopImmediatePropagation offsetEnd textLength newTextLength charsToInsert getDownCursorOffset textOnSameLineAfterCursor  textOnNextLine _getIndexOnNextLine widthOfNextLine moveCursorDownWithShift moveCursorDownWithoutShift getUpCursorOffset widthOfSameLineBeforeCursor _getIndexOnPrevLine widthOfPreviousLine moveCursorUpWithShift moveCursorUpWithoutShift moveCursorLeftWithShift moveCursorLeftWithoutShift Left moveCursorRightWithShift moveCursorRightWithoutShift _removeCharsNearCursor _setSVGTextLineChars _getSVGLineTopOffset _createTextCharSpan _createTextCharBg _generateStyleMap _wrapText _wrapLine getMinWidth HTTP HTTPS protocol ECONNREFUSED binary Font createPNGStream createJPEGStream alert hajpaj parentWindow configure returnFalse returnValue INPUT TEXTAREA contentEditable ready eventjs_stallOnReady load interval setInterval querySelectorAll Missing Target Listener msPointerEnabled pointers createEvent initEvent originalEvent EventListener Firefox HTMLDivElement HTMLCanvasElement NodeList pause resume MOUSE TOUCH MSPOINTER pointerId offsetWidth sizing macintosh khtml firefox 224 metaTrackerReset metaTracker WebKitMutationObserver MozMutationObserver onDOMAttrModified subtree attributeName attrName onpropertychange propertychange propertyName dragElement xyz velocity wheelPreventElasticBounce 150 scrollHeight DOMMouseScroll DeviceOrientationEvent webkitDevicePixelRatio mozDevicePixelRatio trigger isEmpty initElement qrDecompose void POSITIVE_INFINITY NEGATIVE_INFINITY amp quot apos uniqueID__ float hasLayout zoom 9999 childNodes htmlFor borderLeftWidth borderTopWidth paddingLeft paddingTop clientLeft clientTop script XMLHttpRequest open POST PUT setRequestHeader Content Type application form urlencoded send requestAnimationFrame webkitRequestAnimationFrame mozRequestAnimationFrame oRequestAnimationFrame msRequestAnimationFrame asin 9375 625 984375 ease easeInQuad easeOutQuad easeInOutQuad easeInCubic marker view metadata use selectNodes name documentParsingTime patternUnits italic small caps bold bolder lighter 300 800 900 responseXML face css CDATA x3e scalarAdd scalarAddEquals scalarSubtract scalarSubtractEquals multiplyEquals divide divideEquals lte gte lerp distanceFrom setXY setFromPoint swap appendPoint Coincident Parallel transparent toHsl toHsla toHex toGrayscale toBlackWhite 127 overlayWith aqua 00FFFF black 0000FF fuchsia FF00FF gray 808080 008000 lime 00FF00 maroon 800000 navy 000080 olive 808000 orange FFA500 purple 800080 FF0000 silver C0C0C0 teal 008080 FFFFFF yellow FFFF00 fromRgba fromHsla fromHex sort createLinearGradient createRadialGradient LINEARGRADIENT naturalWidth naturalHeight SourceAlpha stdDeviation feFlood flood feComposite in2 operator SourceGraphic Could element webkitImageSmoothingEnabled mozImageSmoothingEnabled msImageSmoothingEnabled oImageSmoothingEnabled backstoreOnly getZoom setViewportTransform setZoom relativePan toDatalessJSON suppressPreamble UTF standalone PUBLIC W3C Graphics svg11 dtd 2000 1999 space preserve Created with Fabric unshift DataURLExporter EMPTY_JSON CircleBrush SprayBrush PatternBrush container edit object_edit_button scalingequally flipnopx bubblenopflipx mouseover relatedTarget upper getSelectionContext getSelectionElement Element button _setCenterToOrigin rotating moving scaleEqually reverse createObjectURL origHasControls hideControls origHideControls loadFromDatalessJSON _toDataURL _toDataURLWithMultiplier stringify _scaleObjectBy _rotateObjectByAngle nonzero rotatingPointOffset boolean miterLimit cloneAsImage setGradient setPatternFill setColor centerH centerV adjustPosition topline rightline bottomline leftline getBoundingRectWidth getBoundingRectHeight scaleToWidth scaleToHeight getSkewX getSkewY 707106 fxCenterObjectH fxCenterObjectV fxRemove  getRadiusX getRadiusY attribute required and can negative triangle getRx getRy 5522847498 originalLeft originalTop hasMoved setCrossOrigin getOriginalSize setSrc toBuffer _resetWidthHeight straightenObject fxStraightenObject rgbToHsl hslToRgb overlayimagsd hide_loader createImageData 393 769 189 351 349 686 168 203 272 534 131 000 screen darken lighten sliceHack bilinear Times New Roman textBaseline alphabetic 119 editable 333 _abortCursorAnimation setSelectionStyles skipFillStrokeCheck 03 _applyLineStylesGetWidthA findWordBoundaryRight initMouseMoveHandler _setEditingProps _saveEditingProps overCursor removeChild initHiddenTextarea textarea autocapitalize 20px 999 input focus setData getData findWordBoundary findLineBoundary Right __cachedLines _refreshControlsVisibility xmldom 443 setEncoding statusCode errno connection refused message readFile eval createCanvasForNode".split(" "),
0,{}));
//---------- 03fac.js end ----------

//---------- From 04ralph.js ----------
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("?"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" � "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b},c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=0|16*N.random(),c="x"==a?b:8|3&b;return c.toString(16)}),c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Rapha�l Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")},c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a},c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"�"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"�"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){var e=[];M.call(c),d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&1==n(a,[["M",b,d],["H",e.x2+10]],1)%2},c._removedFactory=function(a){return function(){b("raphael.log",null,"Rapha�l: you are calling to method �"+a+"� of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin((a-.075)*2*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Rapha�l�s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Rapha�l�s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Rapha�l "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;return"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper),this.paper,this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Rapha�l "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn�t support SVG. Falling down to VML.\nYou are running Rapha�l "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){var f=a.path();return f.attrs,f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){var e=a.path();return e.attrs,e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});
//---------- 04ralph.js end ----------

//---------- From 05cw.js ----------

var colorcanvas, 
    current_color,
    current_color_hsb, 
    size,
    segments = 60,
    bs_square = {},
    hue_ring = {},
    tri_size, cursor = {},
    drag_target, 
    input_target,
    center,
    parent,
    change_callback,
    drag_callbacks = [function() {},
        function() {}
    ],
    offset, padding = 2,
    sdim,
    bgcolorList =  [{"hex":"#EFDECD","name":"Almond"},{"hex":"#CD9575","name":"Antique Brass"},{"hex":"#FDD9B5","name":"Apricot"},{"hex":"#78DBE2","name":"Aquamarine"},{"hex":"#87A96B","name":"Asparagus"},{"hex":"#FFA474","name":"Atomic Tangerine"},{"hex":"#FAE7B5","name":"Banana Mania"},{"hex":"#9F8170","name":"Beaver"},{"hex":"#FD7C6E","name":"Bittersweet"},{"hex":"#000000","name":"Black"},{"hex":"#ACE5EE","name":"Blizzard Blue"},{"hex":"#1F75FE","name":"Blue"},{"hex":"#A2A2D0","name":"Blue Bell"},{"hex":"#6699CC","name":"Blue Gray"},{"hex":"#0D98BA","name":"Blue Green"},{"hex":"#7366BD","name":"Blue Violet"},{"hex":"#DE5D83","name":"Blush"},{"hex":"#CB4154","name":"Brick Red"},{"hex":"#B4674D","name":"Brown"},{"hex":"#FF7F49","name":"Burnt Orange"},{"hex":"#EA7E5D","name":"Burnt Sienna"},{"hex":"#B0B7C6","name":"Cadet Blue"},{"hex":"#FFFF99","name":"Canary"},{"hex":"#1CD3A2","name":"Caribbean Green"},{"hex":"#FFAACC","name":"Carnation Pink"},{"hex":"#DD4492","name":"Cerise"},{"hex":"#1DACD6","name":"Cerulean"},{"hex":"#BC5D58","name":"Chestnut"},{"hex":"#DD9475","name":"Copper"},{"hex":"#9ACEEB","name":"Cornflower"},{"hex":"#FFBCD9","name":"Cotton Candy"},{"hex":"#FDDB6D","name":"Dandelion"},{"hex":"#2B6CC4","name":"Denim"},{"hex":"#EFCDB8","name":"Desert Sand"},{"hex":"#6E5160","name":"Eggplant"},{"hex":"#CEFF1D","name":"Electric Lime"},{"hex":"#71BC78","name":"Fern"},{"hex":"#6DAE81","name":"Forest Green"},{"hex":"#C364C5","name":"Fuchsia"},{"hex":"#CC6666","name":"Fuzzy Wuzzy"},{"hex":"#E7C697","name":"Gold"},{"hex":"#FCD975","name":"Goldenrod"},{"hex":"#A8E4A0","name":"Granny Smith Apple"},{"hex":"#95918C","name":"Gray"},{"hex":"#1CAC78","name":"Green"},{"hex":"#1164B4","name":"Green Blue"},{"hex":"#F0E891","name":"Green Yellow"},{"hex":"#FF1DCE","name":"Hot Magenta"},{"hex":"#B2EC5D","name":"Inchworm"},{"hex":"#5D76CB","name":"Indigo"},{"hex":"#CA3767","name":"Jazzberry Jam"},{"hex":"#3BB08F","name":"Jungle Green"},{"hex":"#FEFE22","name":"Laser Lemon"},{"hex":"#FCB4D5","name":"Lavender"},{"hex":"#FFF44F","name":"Lemon Yellow"},{"hex":"#FFBD88","name":"Macaroni and Cheese"},{"hex":"#F664AF","name":"Magenta"},{"hex":"#AAF0D1","name":"Magic Mint"},{"hex":"#CD4A4C","name":"Mahogany"},{"hex":"#EDD19C","name":"Maize"},{"hex":"#979AAA","name":"Manatee"},{"hex":"#FF8243","name":"Mango Tango"},{"hex":"#C8385A","name":"Maroon"},{"hex":"#EF98AA","name":"Mauvelous"},{"hex":"#FDBCB4","name":"Melon"},{"hex":"#1A4876","name":"Midnight Blue"},{"hex":"#30BA8F","name":"Mountain Meadow"},{"hex":"#C54B8C","name":"Mulberry"},{"hex":"#1974D2","name":"Navy Blue"},{"hex":"#FFA343","name":"Neon Carrot"},{"hex":"#BAB86C","name":"Olive Green"},{"hex":"#FF7538","name":"Orange"},{"hex":"#FF2B2B","name":"Orange Red"},{"hex":"#F8D568","name":"Orange Yellow"},{"hex":"#E6A8D7","name":"Orchid"},{"hex":"#414A4C","name":"Outer Space"},{"hex":"#FF6E4A","name":"Outrageous Orange"},{"hex":"#1CA9C9","name":"Pacific Blue"},{"hex":"#FFCFAB","name":"Peach"},{"hex":"#C5D0E6","name":"Periwinkle"},{"hex":"#FDDDE6","name":"Piggy Pink"},{"hex":"#158078","name":"Pine Green"},{"hex":"#FC74FD","name":"Pink Flamingo"},{"hex":"#F78FA7","name":"Pink Sherbet"},{"hex":"#8E4585","name":"Plum"},{"hex":"#7442C8","name":"Purple Heart"},{"hex":"#9D81BA","name":"Purple Mountain's Majesty"},{"hex":"#FE4EDA","name":"Purple Pizzazz"},{"hex":"#FF496C","name":"Radical Red"},{"hex":"#D68A59","name":"Raw Sienna"},{"hex":"#714B23","name":"Raw Umber"},{"hex":"#FF48D0","name":"Razzle Dazzle Rose"},{"hex":"#E3256B","name":"Razzmatazz"},{"hex":"#EE204D","name":"Red"},{"hex":"#FF5349","name":"Red Orange"},{"hex":"#C0448F","name":"Red Violet"},{"hex":"#1FCECB","name":"Robin's Egg Blue"},{"hex":"#7851A9","name":"Royal Purple"},{"hex":"#FF9BAA","name":"Salmon"},{"hex":"#FC2847","name":"Scarlet"},{"hex":"#76FF7A","name":"Screamin' Green"},{"hex":"#9FE2BF","name":"Sea Green"},{"hex":"#A5694F","name":"Sepia"},{"hex":"#8A795D","name":"Shadow"},{"hex":"#45CEA2","name":"Shamrock"},{"hex":"#FB7EFD","name":"Shocking Pink"},{"hex":"#CDC5C2","name":"Silver"},{"hex":"#80DAEB","name":"Sky Blue"},{"hex":"#ECEABE","name":"Spring Green"},{"hex":"#FFCF48","name":"Sunglow"},{"hex":"#FD5E53","name":"Sunset Orange"},{"hex":"#FAA76C","name":"Tan"},{"hex":"#18A7B5","name":"Teal Blue"},{"hex":"#EBC7DF","name":"Thistle"},{"hex":"#FC89AC","name":"Tickle Me Pink"},{"hex":"#DBD7D2","name":"Timberwolf"},{"hex":"#17806D","name":"Tropical Rain Forest"},{"hex":"#DEAA88","name":"Tumbleweed"},{"hex":"#77DDE7","name":"Turquoise Blue"},{"hex":"#FFFF66","name":"Unmellow Yellow"},{"hex":"#926EAE","name":"Violet (Purple)"},{"hex":"#324AB2","name":"Violet Blue"},{"hex":"#F75394","name":"Violet Red"},{"hex":"#FFA089","name":"Vivid Tangerine"},{"hex":"#8F509D","name":"Vivid Violet"},{"hex":"#FFFFFF","name":"White"},{"hex":"#A2ADD0","name":"Wild Blue Yonder"},{"hex":"#FF43A4","name":"Wild Strawberry"},{"hex":"#FC6C85","name":"Wild Watermelon"},{"hex":"#CDA4DE","name":"Wisteria"},{"hex":"#FCE883","name":"Yellow"},{"hex":"#C5E384","name":"Yellow Green"},{"hex":"#FFAE42","name":"Yellow Orange"}];
Raphael.colorwheel = function(f, g, h)
{
    colorcanvas,
    current_color,
    current_color_hsb,
    size,
    segments = h || 60,
    bs_square = {},
    hue_ring = {},
    tri_size,
    cursor = {},
    drag_target,
    input_target,
    center,
    parent,
    change_callback,
    drag_callbacks = [function() {},
        function() {}
    ],
    offset,
    padding = 2,
    sdim;

    function point(x, y)
    {
        return {
            x: x,
            y: y
        }
    }

    function radians(a)
    {
        return a * (Math.PI / 180)
    }

    function angle(x, y)
    {
        var q = x > 0 ? 0 : 180;
        return q + Math.atan((0 - y) / (0 - x)) * 180 / Math.PI
    }

    function create(a, b)
    {
        size = b;
        tri_size = size / 20;
        center = size / 2;
        parent = $(a);
        colorcanvas = Raphael(parent[0], size, size);
        colorcanvas.safari();
        create_bs_square();
        create_hue_ring();
        hue_ring.cursor = cursor_create(tri_size);
        bs_square.cursor = cursor_create(tri_size * .5);
        events_setup();
        parent.css(
        {
            height: size + "px",
            width: size + "px"
        });
        disable_select(parent);
        return public_methods()
    }

    function disable_select(a)
    {
        $(a).css(
        {
            "unselectable": "on",
            "-moz-user-select": "none",
            "-webkit-user-select": "none"
        })
    }

    function public_methods()
    {
        return {
            input: input,
            onchange: onchange,
            ondrag: ondrag,
            color: public_set_color,
            color_hsb: public_set_color_hsb
        }
    }

    function input(a)
    {
        change_callback = null;
        input_target = a;
        $(a).keyup(function()
        {
            if (this.value.match(/^#([0-9A-F]){3}$|^#([0-9A-F]){6}$/img))
            {
                set_color(this.value);
                update_color(true);
                run_onchange_event()
            }
        });
        set_color(a.value);
        update_color(true);
        return public_methods()
    }

    function onchange(a)
    {
        change_callback = a;
        update_color(false);
        return public_methods()
    }

    function ondrag(a, b)
    {
        drag_callbacks = [a || function() {},
            b || function() {}
        ];
        return public_methods()
    }

    function drag(e)
    {
        var x, y, page;
        e.preventDefault();
        page = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
        x = page.pageX - (parent.offset().left + center);
        y = page.pageY - (parent.offset().top + center);
        if (drag_target == hue_ring)
        {
            set_hue_cursor(x, y);
            update_color();
            run_onchange_event();
            return true
        }
        if (drag_target == bs_square)
        {
            set_bs_cursor(x, y);
            update_color();
            run_onchange_event();
            return true
        }
    }

    function start_drag(a, b)
    {
        a.preventDefault();
        $(document).on("mouseup touchend", stop_drag);
        $(document).on("mousemove touchmove", drag);
        drag_target = b;
        drag(a);
        drag_callbacks[0](current_color)
    }

    function stop_drag(a)
    {
        a.preventDefault();
        $(document).off("mouseup touchend", stop_drag);
        $(document).off("mousemove touchmove", drag);
        drag_callbacks[1](current_color);
        run_onchange_event()
    }

    function events_setup()
    {
        $([hue_ring.event.node,
            hue_ring.cursor[0].node
        ]).on("mousedown touchstart", function(e)
        {
            start_drag(e, hue_ring)
        });
        $([bs_square.b.node,
            bs_square.cursor[0].node
        ]).on("mousedown touchstart", function(e)
        {
            start_drag(e, bs_square)
        })
    }

    function cursor_create(a)
    {
        var b = colorcanvas.set().push(colorcanvas.circle(0, 0, a).attr(
        {
            "stroke-width": 4,
            stroke: "#333"
        }), colorcanvas.circle(0, 0, a + 2).attr(
        {
            "stroke-width": 1,
            stroke: "#FFF",
            opacity: .5
        }));
        b[0].node.style.cursor = "crosshair";
        return b
    }

    function set_bs_cursor(x, y)
    {
        x = x + center;
        y = y + center;
        if (x < sdim.x) x = sdim.x;
        if (x > sdim.x + sdim.l) x = sdim.x + sdim.l;
        if (y < sdim.y) y = sdim.y;
        if (y > sdim.y + sdim.l) y = sdim.y + sdim.l;
        bs_square.cursor.attr(
        {
            cx: x,
            cy: y
        }).transform("t0,0")
    }

    function set_hue(a)
    {
        var b = Raphael.getRGB(a).hex;
        bs_square.h.attr("fill", b)
    }

    function hue()
    {
        return Raphael.rgb2hsb(bs_square.h.attr("fill")).h
    }

    function public_set_color(a)
    {
        var b = set_color(a, false);
        update_color(false);
        return b
    }

    function public_set_color_hsb(a)
    {
        var b = set_color(a, true);
        update_color(false);
        return b
    }

    function set_color(a, b)
    {
        if (a === undefined)
            if (b) return current_color_hsb;
            else return current_color;
        var c, hex;
        if (b)
        {
            c = a;
            if (c.b === undefined) c.b = c.v;
            var d = colorcanvas.raphael.hsb2rgb(c.h, c.s, c.b);
            hex = d.hex
        }
        else
        {
            hex = a;
            c = colorcanvas.raphael.rgb2hsb(hex)
        }
        var e = colorcanvas.rect(1, 1, 1, 1).attr(
        {
            fill: hex
        });
        set_bs_cursor(0 - sdim.l / 2 + sdim.l * c.s, sdim.l / 2 - sdim.l * c.b);
        set_hue_cursor(360 * c.h - 90);
        e.remove();
        return public_methods()
    }

    function update_color(a)
    {
        var x = bs_square.cursor.items[0].attr("cx"),
            y = bs_square.cursor.items[0].attr("cy"),
            hsb = {
                b: 1 - (y - sdim.y) / sdim.l,
                s: (x - sdim.x) / sdim.l,
                h: hue()
            };
        current_color_hsb = hsb;
        current_color = Raphael.hsb2rgb(hsb.h, hsb.s, hsb.b);
        if (input_target)
        {
            var c = current_color.hex;
            if (a !== true) input_target.value = c;
            if (hsb.b < .5) $(input_target).css("color", "#FFF");
            else $(input_target).css("color", "#000");
            input_target.style.background = c
        }
    }

    function set_hue_cursor(a)
    {
        var d;
        if (arguments.length == 2) d = angle(arguments[0], arguments[1]);
        else d = arguments[0];
        var x = Math.cos(radians(d)) * (center - tri_size - padding);
        var y = Math.sin(radians(d)) * (center - tri_size - padding);
        hue_ring.cursor.attr(
        {
            cx: x + center,
            cy: y + center
        }).transform("t0,0");
        set_hue("hsb(" + (d + 90) / 360 + ",1,1)")
    }

    function bs_square_dim()
    {
        if (sdim) return sdim;
        var s = size - tri_size * 4;
        sdim = {
            x: s / 6 + tri_size * 2 + padding,
            y: s / 6 + tri_size * 2 + padding,
            l: s * 2 / 3 - padding * 2
        };
        return sdim
    }

    function create_bs_square()
    {
        bs_square_dim();
        box = [sdim.x, sdim.y, sdim.l, sdim.l];
        bs_square.h = colorcanvas.rect.apply(colorcanvas, box).attr(
        {
            stroke: "#EEE",
            gradient: "0-#FFF-#000",
            opacity: 1
        });
        bs_square.s = colorcanvas.rect.apply(colorcanvas, box).attr(
        {
            stroke: null,
            gradient: "0-#FFF-#FFF",
            opacity: 0
        });
        bs_square.b = colorcanvas.rect.apply(colorcanvas, box).attr(
        {
            stroke: null,
            gradient: "90-#000-#FFF",
            opacity: 0
        });
        bs_square.b.node.style.cursor = "crosshair"
    }

    function hue_segement_shape()
    {
        var a = "M -@W 0 L @W 0 L @W @H L -@W @H z";
        return a.replace(/@H/img, tri_size * 2).replace(/@W/img, tri_size)
    }

    function copy_segment(r, d, k)
    {
        var n = r.clone();
        var a = d * (255 / k);
        var s = size / 2,
            t = tri_size,
            p = padding;
        n.transform("t" + s + "," + (s - t) + "r" + 360 / k * d + "t0,-" + (s - t - p) + "");
        n.attr(
        {
            "stroke-width": 0,
            fill: "hsb(" + d * (1 / k) + ", 1, 0.85)"
        });
        hue_ring.hues.push(n)
    }

    function create_hue_ring()
    {
        var s = hue_segement_shape(),
            tri = colorcanvas.path(s).attr(
            {
                stroke: "rgba(0,0,0,0)"
            }).transform("t" + size / 2 + "," + padding),
            k = segments;
        hue_ring.hues = colorcanvas.set();
        for (n = 0; n < k; n++) copy_segment(tri, n, k);
        hue_ring.event = colorcanvas.circle(center, center, center - tri_size - padding).attr(
        {
            "stroke-width": tri_size * 2,
            opacity: .01
        });
        hue_ring.outline = colorcanvas.circle(center, center, center - tri_size - padding).attr(
        {
            "stroke": "#000",
            "stroke-width": tri_size * 2 + 3,
            opacity: .1
        });
        hue_ring.outline.toBack();
        hue_ring.event.node.style.cursor = "crosshair"
    }

    function run_onchange_event()
    {
        if (
            {}.toString.call(change_callback).match(/function/i)) change_callback(current_color)
    }
    return create(f, g)
};
//---------- 05cw.js end ----------
//---------- From 06core.js ----------
var ChosenImageUrl = "imgs/test.jpg";
var myApp = new Framework7(
{
    material: "true",
    cache: false,
    modalTitle: thisApp.name[language],
    modalButtonOk: "Ok",
    modalButtonCancel: "Cancel",
    modalPreloaderTitle: "GoodGod",
    cache: false,
    swipePanelOnlyClose: true,
    ignoreCache: true,
    notificationHold: 5E3,
    notificationCloseOnClick: true,
    materialRipple: false
});
var mainView = myApp.addView(".view-main",
{
    domCache: true
});
var $$ = Dom7;
var pageHistory = [];

function createColorList(){
    var j=0;
    var bgcolorListLength = bgcolorList.length;
    for (j=0;j<bgcolorListLength;j++){
     var divSection  = "<div class='text-center' style='background:"+bgcolorList[j].hex+"'>"+bgcolorList[j].name+"</div>";   
    $("#colorList").append(divSection); 
    
  }

}

function show_loader()
{
    $("#loadingloader").show();
    $("#loadingloader").html(
        '\n<div id="cssload-pgloading">\n\t<div class="cssload-loadingwrap">\n\t\t<ul class="cssload-bokeh">\n\t\t\t<li></li>\n\t\t\t<li></li>\n\t\t\t<li></li>\n\t\t\t<li></li>\n\t\t</ul>\n\t</div>\n</div>\n\t'
    );
    /*
    <div id="cssload-pgloading">
        <div class="cssload-loadingwrap">
            <ul class="cssload-bokeh">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
     */
}

function hide_loader()
{
    $("#loadingloader").hide();
    $("#loadingloader").html("")
}
Array.prototype.getLast = function()
{
    return this[this.length - 1]
};

function toggle_undo_redo_menu_div(num)
{
    if ($(".speed-dial-opened").length > 0) $$("#floatingbutton").trigger("click");
    if (num == undefined)
        if ($(".undoredomenu").css("opacity") != 0)
        {
            $(".undoredomenu").css("opacity", 0);
            $(".speed-dial").css("opacity", 0);
            $(".speed-dial a").css("pointer-events", "none");
            $(".undoredomenu a").css("pointer-events", "none");
            $(".navbar-inner").attr("disabled", "disabled")
        }
        else
        {
            $(".undoredomenu").css("opacity", 1);
            $(".speed-dial").css("opacity", 1);
            $(".speed-dial a").css("pointer-events", "all");
            $(".undoredomenu a").css("pointer-events", "all");
            $(".navbar-inner").removeAttr("disabled")
        }
    else if ( num == 0)
    {
        $(".undoredomenu").css("opacity", 0);
        $(".speed-dial").css("opacity", 0);
        $(".speed-dial a").css("pointer-events", "none");
        $(".undoredomenu a").css("pointer-events", "none");
        $(".navbar-inner").attr("disabled", "disabled")
    }
    else
    {
        $(".undoredomenu").css("opacity", 1);
        $(".speed-dial").css("opacity", 1);
        $(".speed-dial a").css("pointer-events", "all");
        $(".undoredomenu a").css("pointer-events", "all");
        $(".navbar-inner").removeAttr("disabled")
    }
}

function move_canvas_when_editing_pickers_open(a, b)
{
    var c = a;
    if (c)
    {
        var d = 0;
        var e = 0
    }
    else
    {
        var f = b || canvas.getActiveObject();
        var g = Math.max(f.oCoords.bl.y, f.oCoords.br.y, f.oCoords.mb.y, f.oCoords.ml.y, f.oCoords.mr.y, f.oCoords.mt.y,
            f.oCoords.tl.y, f.oCoords.tr.y) + parseFloat(f.cornerSize);
        var d = g;
        var e = f.cornerSize
    }
    var h = String($(".canvasoutterdiv").innerHeight() - 48) + "px";
    var i = (canvas.getHeight() - d) / canvas.getHeight() * $(".canvasoutterdiv").innerHeight();
    if (i < 0) i = 0;
    var j = ($(".canvasoutterdiv").innerHeight() - $(".canvas-container").innerHeight()) / 2;
    var k = $(".picker-modal").innerHeight() || Math.max($(".jQWCP-wWidget").innerHeight(), 238);
    var l = String(i - k + j) + "px";
    if (parseFloat(l) < -e) $(".canvasoutterdiv").css("margin-top", l);
    if (!c) f.setControlsVisibility(
    {
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    canvas.renderAll();
    $(".canvasinnerdiv").css("top", 0).css("left", 0).css("transform", "matrix(1,0,0,1,0,0)");
    UpdateCanvasSize()
}

function return_canvas_after_editing_pickers_close()
{
    $(".canvasoutterdiv").css("margin-top", 0);
    var a = canvas.getActiveObject();
    if (a != undefined) setting_object_controls(a);
    UpdateCanvasSize()
}

function move_canvas_object2(c, d)
{
    setTimeout(function()
    {
        if (!thisApp.touchmoving)
        {
            var a = canvas.getActiveObject() || canvas.getActiveGroup();
            switch (c)
            {
                case "Up":
                    a.top -= 1;
                    break;
                case "Down":
                    a.top += 1;
                    break;
                case "Left":
                    a.left -= 1;
                    break;
                case "Right":
                    a.left += 1;
                    break;
                case "Center X":
                    a.centerH();
                    break;
                case "Center Y":
                    a.centerV();
                    break;
                case "Rotate Clockwise":
                    var b = parseInt(a.angle + 1);
                    if (b > 360) b -= 360;
                    a.setAngle(b);
                    $("#positiondetails").html(b + "&#176;").css("opacity", 1);
                    break;
                case "Rotate AntiClockwise":
                    var b = parseInt(a.angle - 1);
                    if (b < -360) b += 360;
                    a.setAngle(b);
                    $("#positiondetails").html(b + "&#176;").css("opacity", 1);
                    break;
                case "Cancel Rotation":
                    a.setAngle(0);
                    $("#positiondetails").html(0 + "&#176;").css("opacity", 1);
                    setTimeout(function()
                    {
                        $("#positiondetails").css("opacity", 0)
                    }, 1E3);
                    break;
                default:
            }
            a.setCoords();
            canvas.renderAll();
            if (c != "Center X" && c != "Center Y" && c != "Cancel Rotation")
                if (d) setTimeout(function()
                {
                    if (thisApp.ismousedown && thisApp.currentclickedbutton == c) move_canvas_object(c,
                        true)
                }, 10);
                else setTimeout(function()
                {
                    if (thisApp.ismousedown && thisApp.currentclickedbutton == c) move_canvas_object(c,
                        true)
                }, 750);
            thisApp.currentclickedbutton = c
        }
    }, 150)
}

function move_canvas_object(a, b)
{
    var c = canvas.getActiveObject() || canvas.getActiveGroup();
    switch (a)
    {
        case "Up":
            c.top -= 1;
            break;
        case "Down":
            c.top += 1;
            break;
        case "Left":
            c.left -= 1;
            break;
        case "Right":
            c.left += 1;
            break;
        case "Center X":
            c.centerH();
            break;
        case "Center Y":
            c.centerV();
            break;
        case "Rotate Clockwise":
            var d = parseInt(c.angle + 1);
            if (d > 360) d -= 360;
            c.setAngle(d);
            $("#positiondetails").html(d + "&#176;").css("opacity", 1);
            break;
        case "Rotate AntiClockwise":
            var d = parseInt(c.angle - 1);
            if (d < -360) d += 360;
            c.setAngle(d);
            $("#positiondetails").html(d + "&#176;").css("opacity", 1);
            break;
        case "Cancel Rotation":
            c.setAngle(0);
            $("#positiondetails").html(0 + "&#176;").css("opacity", 1);
            setTimeout(function()
            {
                $("#positiondetails").css("opacity", 0)
            }, 1E3);
            break;
        default:
    }
    c.setCoords();
    canvas.renderAll();
    if (a != "Center X" && a != "Center Y" && a != "Cancel Rotation")
        if (b) setTimeout(function()
        {
            if (thisApp.ismousedown && thisApp.currentclickedbutton == a) move_canvas_object(a, true)
        }, 10);
        else setTimeout(function()
        {
            if (thisApp.ismousedown && thisApp.currentclickedbutton == a) move_canvas_object(a, true)
        }, 750);
    thisApp.currentclickedbutton = a
}

function canvas_dir_toggle()
{
    if (thisApp.canvasdir == "ltr")
    {
        set_canvas_dir("rtl");
        document.getElementById("tdirectionimg").src = "icons/toolbar/righttoleft.png";
        $("#positiondetails div").html(trans.mrtl[language]);
        $("#positiondetails").css("opacity", 1);
        setTimeout(function()
        {
            $("#positiondetails").css("opacity", 0)
        }, 1E3)
    }
    else
    {
        set_canvas_dir("ltr");
        document.getElementById("tdirectionimg").src = "icons/toolbar/lefttoright.png";
        $("#positiondetails div").html(trans.mltr[language]);
        $("#positiondetails").css("opacity", 1);
        setTimeout(function()
        {
            $("#positiondetails").css("opacity", 0)
        }, 1E3)
    }
}

function set_canvas_dir(a)
{
    thisApp.canvasdir = a;
    if ($("#maincanvas").length > 0) $("#maincanvas").attr("dir", thisApp.canvasdir);
    canvas.renderAll()
}

function load_main_page_text()
{
    document.getElementById("toolbartitle").innerHTML = thisApp.name[language];
    document.getElementById("tnew").innerHTML = trans.tnew[language];
    document.getElementById("tsave").innerHTML = trans.tsave[language];
    document.getElementById("tshare").innerHTML = trans.tshare[language];
    document.getElementById("tdirectiond").innerHTML = trans.tdirection[language];
    if (thisApp.canvasdir == "rtl") document.getElementById("tdirectionimg").src = "icons/toolbar/righttoleft.png";
    else document.getElementById("tdirectionimg").src = "icons/toolbar/lefttoright.png";
    document.getElementById("tclone").innerHTML = trans.tclone[language];
    document.getElementById("tlayers").innerHTML = trans.Layers[language];
    document.getElementById("ttoback").innerHTML = trans.ToBack[language];
    document.getElementById("ttofront").innerHTML = trans.ToFront[language];
    document.getElementById("preparingmenubutton").innerHTML = trans.preparingmenus[language];
    document.getElementById("addtextbuttondivin").innerHTML = trans.addtext[language];
    document.getElementById("addstickerbuttondivin").innerHTML = trans.addstickers[language]
}

function load_index_text()
{
    document.getElementById("camerabutton").innerHTML = trans.fromcamera[language];
    document.getElementById("gallerybutton").innerHTML = trans.fromgallery[language];
    document.getElementById("ratebutton").innerHTML = trans.RateApp[language];
    document.getElementById("removeads").innerHTML = trans.removeads[language];
    document.getElementById("otherbutton").innerHTML = trans.OtherApps[language];
    myApp.params.modalButtonOk = trans.ok[language];
    myApp.params.modalButtonCancel = trans.Cancel[language];     
}

function reload_js(a)
{
    $('script[src="' + a + '"]').remove();
    $("<script>").attr("src", a).appendTo("body")
}

function check_if_anything_changed()
{}
myApp.onPageBeforeAnimation("main", function()
{
    loading_nes_files();
    load_main_page_text();
    init(function()
    {
        $("#canvasoutterdiv").css("opacity", "1")
    });
    prepare_picker_images_tools();
    prepare_picker_images_tools_pickers();
    prepare_menus();
    prepare_effects_pickers();
    prepare_overlay_picker();
    prepare_foreground_picker();
    prepare_picker_range_tools_pickers();
    call_required_function_fbsrc();
    prepare_hammer_movement();   
    thisApp.currentpage = "mainpage";

    setTimeout(function(){
$("#gallerybutton").trigger("click");
},300)
});
myApp.onPageAfterAnimation("main", function()
{
    $(".tools").html(thisApp.menushtml[0].html);
    setTimeout(function()
    {
        $(".tools .toolbar-inner").css("transform", "translate3d(0, 0, 0)").css("opacity", 1);
        if (thisApp.loadcanvasafterresume == "loadjsononly") canvas.loadFromJSON(thisApp.savesarray[0].savejson,
            function()
            {
                canvas.renderAll();
                thisApp.resumeresultfile = ""
            });
        else if (thisApp.loadcanvasafterresume == "loadjsonandsticker" && thisApp.resumeresultfile !=
            false) canvas.loadFromJSON(thisApp.savesarray[0].savejson, function()
        {
            canvas.renderAll();
            add_image_to_canvas_from_url(thisApp.resumeresultfile);
            thisApp.resumeresultfile = ""
        });
        hide_loader()
    }, 100);
    $(".landingPage").html("")
});

function thisappalert(a)
{
    myApp.alert(a, false);
    if (language == "arabic") $(".modal").css("direction", "rtl");
    else $(".modal").css("direction", "ltr")
}

function language_popover(a)
{
    var b = a;
    var c =
        '<div class="popover" style="width: 120px;text-align: center;margin-left: 10px;margin-top: 30px;">\n                      <div class="popover-inner">\n                        <div class="list-block">\n                          <ul>\n\t\t\t\t\t\t\t<li onclick="change_app_language(\'english\')">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="underline">\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="font-size: 22px;">English</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li onclick="change_app_language(\'arabic\')">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="linethrough">\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="font-size: 22px;">\u0627\u0644\u0639\u0631\u0628\u064a\u0629</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>';
    var d = myApp.popover(c, b);
    if (language == "english") $($(".label-radio input")[0]).attr("checked", "checked");
    else $($(".label-radio input")[1]).attr("checked", "checked")
}

function exitApp()
{
    var a = [
    {
        text: trans.mExitquestion[language],
        label: true
    },
    {
        text: '<div style="font-size:17px;color:var( --first-font-color)">' + trans.mRateApp[language] +
            "</div>",
        bold: true,
        onClick: function()
        {
            rateApp()
        }
    },
    {
        text: '<div style="font-size:17px;color:var( --first-font-color)">' + trans.yes[language] + "</div>",
        onClick: function()
        {
            navigator.app.exitApp()
        }
    },
    {
        text: '<div style="font-size:15px;color:var(--second-font-color)">' + trans.Cancel[language] + "</div>"
    }];
    myApp.actions(a);
    $(".actions-modal").css("text-align", "center");
    setTimeout(function()
    {
        $(".modal-overlay").addClass("modal-overlay-visible")
    }, 100)
}

function rateApp()
{
    window.open("market://details?id=" + thisApp.playid, "_system")
}

function shareApp()
{
    window.plugins.socialsharing.share(thisApp.name[language], null, null,
        "https://play.google.com/store/apps/details?id=" + thisApp.playid)
}

function goToOtherApp()
{
    window.open("market://search?q=pub:" + thisApp.foldername, "_system")
}
$(document).ready(function()
{
    document.addEventListener("deviceready", onDeviceReady, false);
    thisApp.currentpage = "indexpage"
});
//nesfiles
function loading_nes_files()
{
    var a = "js/";
    reload_js(a + "z.js")
};
//---------- 06core.js end ----------
//---------- From 07dv.js ----------
thisApp.resumeresultfile = "";

function onResume(a)
{
    if (thisApp.currentpage == "indexpage" && mainView.url == "#index" && thisApp.doingnow == "choosebg")
    {
        if (a.pendingResult)
        {
            show_loader();
            if (a.pendingResult.pluginStatus === "OK") gallaryGetSuccess(a.pendingResult.result);
            else gallaryGetError(a.pendingResult.result)
        }
    }
    else if (thisApp.currentpage != "indexpage" && mainView.url == "#index")
        if (a.pendingResult)
        {
            show_loader();
            if (a.pendingResult.pluginStatus === "OK")
            {
                thisApp.resumeresultfile = a.pendingResult.result;
                load_autosave()
            }
            else load_autosave()
        }
}

function onDeviceReady()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    navigator.globalization.getPreferredLanguage(languagesuccessCallback, languageerrorCallback);
    prepare_font_folder_and_list_files()
}

function onBackKeyDown()
{
    if ($(".popover").length > 0) myApp.closeModal(".popover");
    else if ($(".picker-modal").length > 0)
        if ($("#backtosettings").css("display") == "block") $(".picker-modal .left a")[1].click();
        else if ($("textarea").length > 0) myApp.closeModal(".picker-modal");
    else $(".picker-modal .left a")[0].click();
    else if ($("textarea").length > 0)
    {
        if ($(".modal-text .button").length == 3 && $($(".modal-text .button")[0]).css("display") != "none")
            cancel_edit_from_textbox_and_close_modal("create");
        else set_text_from_textbox_and_close_modal("edit");
        myApp.closeModal(".modal")
    }
    else if ($(".modal").length > 0) myApp.closeModal(".modal");
    else if ($(".popup").length > 0) myApp.closeModal(".popup");
    else if ($(".actions-modal").length > 0) myApp.closeModal(".actions-modal");
    else if ($(".toolbar-inner").attr("menuid") != "mainmenu" && mainView.url == "main.html") $($(".oddtoolbarbutton")[
        0]).click();
    else if (mainView.url != "#index" && mainView.url != "main.html") mainView.back();
    else exitApp()
}

function onMenuKeyDown()
{}
thisApp.devicelanguage;
thisApp.languageletters;
thisApp.canvasdir = "ltr";

function languagesuccessCallback(a)
{
    if (a.value.startsWith("ar") || a.value.startsWith("AR")) thisApp.devicelanguage = "arabic";
    else thisApp.devicelanguage = "english";
    afterOnDeviceReady();
    thisApp.languageletters = String(a.value)
}

function languageerrorCallback()
{
    language = "english";
    thisApp.devicelanguage = "english";
    afterOnDeviceReady();
    hide_loader()
}

function afterOnDeviceReady()
{
    openDatabaseFile();
    createSettingsTable();
    check_if_settings_is_there();
    initAd();
    window.analytics.startTrackerWithId(thisApp.gacode, gaTrackSucess, gaTrackFail);
    createSavingTable();
    register_products();
    register_store_events();
    checkConnection(true);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    hide_loader()
}
thisApp.choosingfrominside = false;

function chooseFromGallery(a, b, c, d)
{
    show_loader();
    if (typeof cordova != "undefined")
    {
        var e;
        var f = 0;
        var g = 1024;
        if (a == "stickers")
        {
            getting_dataurl_and_canvasjson("AutoSave", true);
            thisApp.doingnow = "stickers";
            g = 512;
            f = 1
        }
        else if (a == "changebg")
        {
            getting_dataurl_and_canvasjson("AutoSave", true);
            thisApp.doingnow = "changebg"
        }
        else if (a == "choosebgfromgallery" || a == "choosebgfromcamera") thisApp.doingnow = "choosebg";
        if (mainView.url == "#index") thisApp.currentpage = "indexpage";
        else thisApp.currentpage = "mainpage";
        Edit_current_settings();
        if (d) g = d;
        if (a == "choosebgfromcamera") navigator.camera.getPicture(gallaryGetSuccess, gallaryGetError,
        {
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.PNG,
            destinationType: Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: g,
            targetHeight: g
        });
        else navigator.camera.getPicture(gallaryGetSuccess, gallaryGetError,
        {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            encodingType: Camera.EncodingType.PNG,
            destinationType: Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: g,
            targetHeight: g
        })
    }
    else mainView.loadPage("main.html")
}

function gallaryGetSuccess(a)
{
    if (thisApp.doingnow == "choosebg")
    {
        ChosenImageUrl = a;
        mainView.loadPage("main.html")
    }
    else if (thisApp.doingnow == "stickers") add_image_to_canvas_from_url(a);
    else if (thisApp.doingnow == "changebg")
    {
        ChosenImageUrl = a;
        load_main_image()
    }
    thisApp.doingnow = "nothing";
    Edit_current_settings()
}

function gallaryGetError(a)
{
    hide_loader();
    thisApp.doingnow = "nothing";
    Edit_current_settings()
}
thisApp.loadcanvasafterresume = undefined;

function load_autosave()
{
    if (thisApp.resumeresultfile && thisApp.doingnow == "changebg") showing_saves(function()
    {
        thisApp.loadcanvasafterresume = "loadjsononly";
        ChosenImageUrl = thisApp.resumeresultfile;
        mainView.loadPage("main.html")
    });
    else if (thisApp.resumeresultfile && thisApp.doingnow == "stickers") showing_saves(function()
    {
        ChosenImageUrl = thisApp.savesarray[0].savedataurl;
        mainView.loadPage("main.html");
        thisApp.loadcanvasafterresume = "loadjsonandsticker"
    });
    else if (!thisApp.resumeresultfile) showing_saves(function()
    {
        ChosenImageUrl = thisApp.savesarray[0].savedataurl;
        mainView.loadPage("main.html");
        thisApp.loadcanvasafterresume = "loadjsononly"
    })
}

function load_autosave2()
{
    showing_saves(function()
    {
        ChosenImageUrl = thisApp.savesarray[0].savedataurl;
        canvas.loadFromJSON(thisApp.savesarray[0].savejson, function()
        {
            canvas.renderAll()
        });
        load_main_image()
    })
}

function initAd()
{
    if (window.plugins && window.plugins.AdMob)
    {
        var a = {
            android:
            {
                banner: thisApp.bannercode,
                interstitial: thisApp.interstitialcode
            }
        };
        var b = /(android)/i.test(navigator.userAgent) ? a.android : a.ios;
        window.plugins.AdMob.setOptions(
        {
            publisherId: b.banner,
            interstitialAdId: b.interstitial,
            adSize: window.plugins.AdMob.AD_SIZE.BANNER,
            bannerAtTop: false,
            overlap: true,
            offsetTopBar: false,
            isTesting: true,
            autoShow: false
        });
        registerAdEvents();
        window.plugins.AdMob.createInterstitialView();
        window.plugins.AdMob.requestInterstitialAd()
    }
}

function registerAdEvents()
{
    document.addEventListener("onReceiveAd", function()
    {
        $("html").css("height", "calc(100% - 57px)");
        $("html").css("border-bottom", "solid 1px rgba(58, 58, 58, 0.52)");
        thisApp.ad_is_received = true
    });
    document.addEventListener("onFailedToReceiveAd", function(a)
    {
        thisApp.ad_is_received = false;
        console.log(a)
    });
    document.addEventListener("onPresentAd", function() {});
    document.addEventListener("onDismissAd", function() {});
    document.addEventListener("onLeaveToAd", function() {});
    document.addEventListener("onReceiveInterstitialAd", function() {});
    document.addEventListener("onPresentInterstitialAd", function() {});
    document.addEventListener("onDismissInterstitialAd", function()
    {
        window.plugins.AdMob.createInterstitialView();
        window.plugins.AdMob.requestInterstitialAd()
    })
}

function show_or_hide_ads()
{
    if (thisApp.noads && thisApp.ad_is_shown)
    {
        window.plugins.AdMob.destroyBannerView();
        thisApp.ad_is_shown = false;
        $("html").css("height", "calc(100%)");
        $("html").css("border-bottom", "none")
    }
    else if (!thisApp.noads && !thisApp.ad_is_shown)
    {
        window.plugins.AdMob.createBannerView();
        thisApp.ad_is_shown = true
    }
}

function showFullAd()
{
    if (window.plugins != undefined && !thisApp.noads) window.plugins.AdMob.showInterstitialAd()
}
var thefulladnumber = 0;
var triggerPoints = 9;

function showFullAdRatio(a)
{
    if (a == undefined) a = .5;
    thefulladnumber += a;
    if (thefulladnumber >= triggerPoints)
    {
        console.log("IT IS ON NOW");
        showFullAd();
        thefulladnumber = 0;
        if (triggerPoints == 9) triggerPoints = 10;
        else if (triggerPoints == 10) triggerPoints = 11;
        else if (triggerPoints == 11) triggerPoints = 12;
        else if (triggerPoints == 12) triggerPoints = 13;
        else triggerPoints = 0x4170e96480205
    }
    console.log(thefulladnumber)
}

function gaTrackSucess()
{
    gaTrackpage("Device Language is " + String(thisApp.devicelanguage) + "App Language is " + String(language) +
        " And Direction is " + String(thisApp.canvasdir))
}

function gaTrackFail(a)
{}

function gaTrackpage(a)
{
    if (window.analytics != undefined) window.analytics.trackView(a)
}

function adunit_randomizer()
{
    var a = Math.floor(Math.random() * 100 + 1);
    if (a >= 20)
    {
        thisApp.interstitialcode = "ca-app-pub-6933007458317065/8184157464";
        thisApp.bannercode = "ca-app-pub-6933007458317065/2137623863"
    }
};
//---------- 07dv.js end ----------
//---------- From 08sp.js ----------
function register_products()
{
    store.register(
    {
        id: "rmads",
        alias: "rmads",
        type: store.NON_CONSUMABLE
    })
}

function removeads()
{
    store.order("rmads")
}

function shop_list_popup()
{
    thisApp.products = [store.get("rmads"), store.get("saveslots"), store.get("undoredo"), store.get("allfeatures")];
    if (checkConnection() == "none")
    {
        thisappalert(trans.NoConnection[language]);
        return
    }
    else if (thisApp.products[0].price == null)
    {
        thisappalert(trans.loadingstoreissue[language]);
        return
    }
    var a = [];
    if (store.get("allfeatures").state == "approved" || store.get("allfeatures").state == "finished" || store.get(
            "allfeatures").state == "owned") a = [thisApp.products[3]];
    else if (store.get("rmads").state == "approved" || store.get("rmads").state == "finished" || store.get("rmads").state ==
        "owned" || store.get("saveslots").state == "approved" || store.get("saveslots").state == "finished" || store.get(
            "saveslots").state == "owned" || store.get("undoredo").state == "approved" || store.get("undoredo").state ==
        "finished" || store.get("undoredo").state == "owned") a = [thisApp.products[0], thisApp.products[1],
        thisApp.products[2]
    ];
    else a = thisApp.products;
    var b;
    if (language == "arabic") b = "rtl";
    else b = "ltr";
    var c =
        "border-bottom: solid;border-bottom-color: var(--toolbarsandbuttons-border-color);border-bottom-width: 1px;position: relative;text-align: end;width: 90%;left: 0;right: 0;margin: 1em auto;direction: " +
        b + ";font-size: 15px;";
    var d = "";
    for (var i = 0; i < a.length; i++)
    {
        var e = trans[a[i].alias][
            language
        ];
        var f = a[i].id;
        var g = a[i].price;
        var h = a[i].state;
        var j = "";
        if (h == "approved" || h == "owned")
        {
            j = "disabled='disabled'";
            g = "Purchased"
        }
        if (i == 0) d = "<a " + j + " onclick ='store.order(\"" + f +
            '");myApp.closeModal($$(".popup"));\' href="#" style="' + c +
            '" class="button button-fill no-ripple secondcolor">\n\t\t\t\t\t\t\t' + g +
            '\n\t\t\t\t\t\t\t<div style="position: absolute;top: 0;bottom: 0;margin: auto;">' + e +
            "</div>\n\t\t\t\t\t\t\t</a>";
        else d += "<a " + j + " onclick ='store.order(\"" + f + '");myApp.closeModal($$(".popup"));\' href="#" style="' +
            c + '" class="button  button-fill no-ripple secondcolor">\n\t\t\t\t\t\t\t' + g +
            '\n\t\t\t\t\t\t\t<div style="position: absolute;top: 0;bottom: 0;margin: auto;">' + e +
            "</div>\n\t\t\t\t\t\t\t</a>"
    }
    var k = '<div class="popup">\n\t\t\t\t\t\t<div class="navbar mainnavbar " style="direction: ' + b +
        ';">\n\t\t\t\t\t\t\t<div class="navbar-inner">\n\t\t\t\t\t\t\t\t<div class="left "><a href="#" style="" class="link close-popup">X</a></div>\n\t\t\t\t\t\t\t\t<div class="center tlayers" style="font-size: 16px;">' +
        trans.Shop[language] +
        '</div>\n\t\t\t\t\t\t\t\t<div class="right"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="content-block">\n\t\t\t\t\t\t\t' +
        d + "\n\t\t\t\t\t\t</div>\n                  </div>";
    myApp.popup(k)
}

function checkConnection(a)
{
    var b = navigator.connection.type;
    var c = {};
    c[Connection.UNKNOWN] = "Unknown connection";
    c[Connection.ETHERNET] = "Ethernet connection";
    c[Connection.WIFI] = "WiFi connection";
    c[Connection.CELL_2G] = "Cell 2G connection";
    c[Connection.CELL_3G] = "Cell 3G connection";
    c[Connection.CELL_4G] = "Cell 4G connection";
    c[Connection.CELL] = "Cell generic connection";
    c[Connection.NONE] = "none";
    console.log("Connection type: " + c[b]);
    if (a && c[b] != "none")
    {
        store.refresh();
        thisApp.isOnline = true
    }
    return c[b]
}
thisApp.isOnline = false;

function onOffline()
{
    thisApp.isOnline = false
}

function onOnline()
{
    thisApp.isOnline = true;
    store.refresh()
}

function register_store_events()
{
    store.ready(function()
    {
        var b = store.get("rmads");
        if (b.state != "valid")
        {
            thisApp.noads = false;
            show_or_hide_ads();
            Edit_current_settings()
        }
        if (b.state == "approved") b.finish();
        store.when("rmads").updated(function(a)
        {
            console.log("updating " + a.state);
            if (a.state == "approved") a.finish();
            else if (a.state == "owned")
            {
                thisApp.noads = true;
                show_or_hide_ads()
            }
            else
            {
                thisApp.noads = false;
                show_or_hide_ads()
            }
            Edit_current_settings()
        });
        store.when("rmads").cancelled(function(a)
        {
            console.log("cancelled");
            thisApp.noads = false;
            show_or_hide_ads();
            Edit_current_settings()
        });
        store.when("rmads").refunded(function(a)
        {
            console.log("refunded");
            thisApp.noads = false;
            show_or_hide_ads();
            Edit_current_settings()
        })
    });
    store.error(function(e)
    {
        console.log("ERROR " + e.code + ": " + e.message)
    })
};
//---------- 08sp.js end ----------
//---------- From 09fabsrc.js ----------
var CONTROLIMAGES = {};
var canvas;
var MainText = "Sketch 'Em";
var TextTopPosition;
var TextLeftPosition;
var thetextbox;
var thetextbox, text2, text3, text4;
var textObject;
var patternimagesarray = [];
var APP_STORAGE_KEY = "loadedimagelink";
var ChosenBackground = "imported";
var canvasstartwidth = 1024;
var canvasstartheight = 1024;
var canvas_pointer;
var theversionnumber;
var IS_MOUSE_DOWN = false;
var CANVAS_DISORIENTED = false;

function preparing_object_corners_images()
{
    CONTROLIMAGES["edit"] = new Image;
    CONTROLIMAGES["edit"].src = "thm/cont/edittext.png";
    CONTROLIMAGES["flipx"] = new Image;
    CONTROLIMAGES["flipx"].src = "thm/cont/flipx.png";
    CONTROLIMAGES["remove"] = new Image;
    CONTROLIMAGES["remove"].src = "thm/cont/remove.png";
    CONTROLIMAGES["move"] = new Image;
    CONTROLIMAGES["move"].src = "thm/cont/move.png";
    CONTROLIMAGES["rotate"] = new Image;
    CONTROLIMAGES["rotate"].src = "thm/cont/rotate.png";
    CONTROLIMAGES["scalebottomright"] = new Image;
    CONTROLIMAGES["scalebottomright"].src = "thm/cont/scalebottomright.png";
    CONTROLIMAGES["scaletopright"] = new Image;
    CONTROLIMAGES["scaletopright"].src = "thm/cont/scaletopright.png";
    CONTROLIMAGES["scalex"] = new Image;
    CONTROLIMAGES["scalex"].src = "thm/cont/scalex.png";
    CONTROLIMAGES["scaley"] = new Image;
    CONTROLIMAGES["scaley"].src = "thm/cont/scaley.png"
}

function create_pointer_in_canvas()
{
    fabric.Image.fromURL("icons/common/target.png", function(a)
    {
        canvas_pointer = a;
        canvas_pointer.width = 256;
        canvas_pointer.height = 256;
        canvas_pointer.set(
        {
            left: canvas.getWidth() / 2 - canvas_pointer.width / 2,
            top: canvas.getHeight() / 2 - canvas_pointer.height / 2
        });
        canvas_pointer.originY = "center";
        canvas_pointer.originX = "center";
        canvas_pointer.setControlsVisibility(
        {
            tl: false,
            tr: false,
            br: false,
            bl: false,
            ml: false,
            mt: false,
            mr: false,
            mb: false,
            mtr: false
        });
        canvas_pointer.padding = Math.max(canvas.getWidth() * 2, canvas.getHeight() * 2);
        canvas_pointer.showedcontrols = "allhidden"
    }, null,
    {
        crossOrigin: "Anonymous"
    })
}

function preparing_app_canvas()
{
    canvas = new fabric.Canvas("maincanvas",
    {
        width: canvasstartwidth,
        height: canvasstartheight
    });
    fabric.Object.prototype.cornerSize = "25";
    fabric.Object.prototype.borderColor = "transparent";
    fabric.Object.prototype.setControlsVisibility(
    {
        mtr: false
    });
    fabric.Object.prototype.borderOpacityWhenMoving = .1;
    fabric.Group.prototype.centeredScaling = true;
    fabric.Group.prototype._controlsVisibility = {
        tl: false,
        tr: false,
        br: true,
        bl: true,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    };
    fabric.Image.prototype._controlsVisibility = {
        tl: false,
        tr: false,
        br: true,
        bl: true,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    };
    canvas.selectionColor = "rgba(255,87,34,1)";
    canvas.selectionBorderColor = "rgba(255,87,34,1)";
    canvas.selection = false
}
var controlsscale;

function UpdateCanvasSize()
{
    var a, scale, sdd1;
    a = {
        w: 1,
        h: 1
    };
    if (mainView.url != "premain.html" && $("#maincanvas").length > 0)
    {
        $(".canvasoutterdiv").css("top", "36px");
        $(".canvasoutterdiv").css("height", "calc(100% - 36px)");
        canvas.setHeight(APP.app._canvasHeight);
        canvas.setWidth(APP.app._canvasWidth);
        if (!CANVAS_DISORIENTED) scale = Math.min($(".canvasoutterdiv").height() / canvas.getHeight() * a.h, $(
            ".canvasoutterdiv").width() / canvas.getWidth() * a.w);
        else scale = Math.min($(".canvasoutterdiv").height() / canvas.getHeight() * a.h, $(".canvasoutterdiv").width() /
            canvas.getWidth() * a.w);
        sdd1 = scale;
        controlsscale = 30 / sdd1;
        var b = parseFloat($(".canvasinnerdiv").css("transform").split("(")[1].split(",")[0]);
        fabric.Object.prototype.cornerSize = String(controlsscale / b);
        canvas.getObjects().forEach(function(o)
        {
            o.cornerSize = String(controlsscale / b);
            if (o.type == "image" && o != canvas_pointer) o.padding = o.cornerSize / 2 + 5
        });
        if (canvas_pointer)
        {
            canvas_pointer.setWidth(50 / sdd1 / b);
            canvas_pointer.setHeight(50 / sdd1 / b)
        }
        canvas.renderAll();
        $(".canvas-container").css("padding-bottom", canvas.getHeight() * scale + 1);
        $(".canvas-container").css("padding-right", canvas.getWidth() * scale);
        $("#gl_canvas").css("height", canvas.getHeight() * scale);
        $("#gl_canvas").css("width", canvas.getWidth() * scale)
    }
}
$(window).resize(function()
{
    UpdateCanvasSize()
});

function call_required_function_fbsrc()
{
    preparing_object_corners_images();
    preparing_app_canvas();
    set_canvases_events();
    setTimeout(function()
    {
        canvas.setWidth(APP.app._canvasWidth);
        canvas.setHeight(APP.app._canvasHeight);
        canvas.renderAll();
        create_pointer_in_canvas();
        UpdateCanvasSize()
    }, 1E3)
}
var isitrotating = false;
var centeredx;
var centeredy;
var BUTTON_TO_CENTER_ORIGINAL_DISTANCE;
var BUTTON_TO_CENTER_ORIGINAL_ANGLE;
var objscalex;
var objscaley;
var ORIGINAL_X_POSITION;
var ORIGINAL_Y_POSITION;
var scalingequally = true;

function set_canvases_events()
{
    canvas.on("object:moving", function(e)
    {
        var a = e.target;
        if (a.currentHeight > a.canvas.height && a.iscroprect || a.currentWidth > a.canvas.width && a.iscroprect)
            return;
        a.setCoords();
        if (a.getBoundingRect().top < 0 && a.iscroprect || a.getBoundingRect().left < 0 && a.iscroprect)
        {
            a.top = Math.max(a.top, a.top - a.getBoundingRect().top);
            a.left = Math.max(a.left, a.left - a.getBoundingRect().left)
        }
        if (a.getBoundingRect().top + a.getBoundingRect().height > a.canvas.height && a.iscroprect || a.getBoundingRect()
            .left + a.getBoundingRect().width > a.canvas.width && a.iscroprect)
        {
            a.top = Math.min(a.top, a.canvas.height - a.getBoundingRect().height + a.top - a.getBoundingRect().top);
            a.left = Math.min(a.left, a.canvas.width - a.getBoundingRect().width + a.left - a.getBoundingRect()
                .left)
        }
        if (a.type == "image" && a == canvas_pointer)
        {
            if (APP.mode.name == "zoom_blur" || APP.mode.name == "MixedEffects")
            {
                object_fadeIn(a);
                if (APP.mode.name == "MixedEffects") div_fadeout($(".picker-modal"))
            }
            if (a.top < 0 || a.left < 0)
            {
                a.top = Math.max(a.top, a.top - a.top);
                a.left = Math.max(a.left, a.left - a.left)
            }
            if (a.top > a.canvas.height || a.left > a.canvas.width)
            {
                a.top = Math.min(a.top, a.canvas.height + a.top - a.top);
                a.left = Math.min(a.left, a.canvas.width + a.left - a.left)
            }
        }
        mc.get("pan").set(
        {
            enable: false
        })
    });
    canvas.on("object:scaling", function(e)
    {
        var a = e.target;
        if (a.currentHeight > a.canvas.height && a.iscroprect || a.currentWidth > a.canvas.width && a.iscroprect)
            return;
        a.setCoords();
        if (a.getBoundingRect().top < 0 && a.iscroprect || a.getBoundingRect().left < 0 && a.iscroprect)
        {
            a.top = Math.max(a.top, a.top - a.getBoundingRect().top);
            a.left = Math.max(a.left, a.left - a.getBoundingRect().left)
        }
        if (a.getBoundingRect().top + a.getBoundingRect().height > a.canvas.height && a.iscroprect || a.getBoundingRect()
            .left + a.getBoundingRect().width > a.canvas.width && a.iscroprect)
        {
            a.top = Math.min(a.top, a.canvas.height - a.getBoundingRect().height + a.top - a.getBoundingRect().top);
            a.left = Math.min(a.left, a.canvas.width - a.getBoundingRect().width + a.left - a.getBoundingRect()
                .left)
        }
        mc.get("pan").set(
        {
            enable: false
        })
    });
    canvas.on("mouse:down", function(e)
    {
        var a = e.target;
        if (a != null)
        {
            object_double_click_event(a);
            if (a.type == "image" && a == canvas_pointer)
                if (APP.mode.name == "zoom_blur" || APP.mode.name == "MixedEffects")
                {
                    IS_MOUSE_DOWN = true;
                    object_fadeIn(a);
                    if (APP.mode.name == "MixedEffects") div_fadeout($(".picker-modal"))
                }
        }
        if (isitrotating)
        {
            var b = canvas.getActiveObject() || canvas.getActiveGroup();
            if (scalingequally)
            {
                centeredx = b.getBoundingRect().left + b.getBoundingRect().width / 2;
                centeredy = b.getBoundingRect().top + b.getBoundingRect().height / 2
            }
            var c = parseFloat($(".canvasinnerdiv").css("transform").split(",")[3]);
            var d = (e.e.clientY - $("#maincanvas").offset().top) / c / parseFloat($(".canvas-container").css(
                "padding-bottom")) * canvas.getHeight() || (e.e.touches[0].clientY - $("#maincanvas").offset()
                .top) / c / parseFloat($(".canvas-container").css("padding-bottom")) * canvas.getHeight();
            var f = (e.e.clientX - $("#maincanvas").offset().left) / c / parseFloat($(".canvas-container").css(
                "padding-right")) * canvas.getWidth() || (e.e.touches[0].clientX - $("#maincanvas").offset()
                .left) / c / parseFloat($(".canvas-container").css("padding-right")) * canvas.getWidth();
            BUTTON_TO_CENTER_ORIGINAL_DISTANCE = Math.sqrt(Math.pow(centeredx - f, 2) + Math.pow(centeredy - d,
                2));
            BUTTON_TO_CENTER_ORIGINAL_ANGLE = Math.atan2(centeredy - d, centeredx - f);
            objscalex = b.getScaleX();
            objscaley = b.getScaleY()
        }
    });
    canvas.on("mouse:up", function(e)
    {
        var a = canvas.getActiveObject();
        if (a != undefined)
            if (a.type == "image" && a == canvas_pointer)
                if (APP.mode.name == "zoom_blur")
                {
                    APP.zoomBlurCenter = [
                        a.left / canvas.width,
                        a.top / canvas.height
                    ];
                    update_screen();
                    setTimeout(function()
                    {
                        IS_MOUSE_DOWN = false;
                        object_fadeOut(a)
                    }, 500)
                }
                else if (APP.mode.name == "MixedEffects")
        {
            update_brush_foreground_texture(a.left, a.top);
            update_screen();
            setTimeout(function()
            {
                IS_MOUSE_DOWN = false;
                object_fadeOut(a)
            }, 500);
            div_fadeIn($(".picker-modal"))
        }
        if (isitrotating)
        {
            isitrotating = false;
            scalingequally = true
        }
        setTimeout(function()
        {
            mc.get("pan").set(
            {
                enable: true
            })
        }, 300)
    });
    canvas.on("mouse:move", function(e)
    {
        var a = canvas.getActiveObject();
        if (isitrotating)
        {
            var b = parseFloat($(".canvasinnerdiv").css("transform").split(",")[3]);
            var c = canvas.getActiveObject() || canvas.getActiveGroup();
            var d = (e.e.clientY - $("#maincanvas").offset().top) / b / parseFloat($(".canvas-container").css(
                "padding-bottom")) * canvas.getHeight() || (e.e.touches[0].clientY - $("#maincanvas").offset()
                .top) / b / parseFloat($(".canvas-container").css("padding-bottom")) * canvas.getHeight();
            var f = (e.e.clientX - $("#maincanvas").offset().left) / b / parseFloat($(".canvas-container").css(
                "padding-right")) * canvas.getWidth() || (e.e.touches[0].clientX - $("#maincanvas").offset()
                .left) / b / parseFloat($(".canvas-container").css("padding-right")) * canvas.getWidth();
            if (scalingequally)
            {
                var g = Math.sqrt(Math.pow(centeredx - f, 2) + Math.pow(centeredy - d, 2));
                var h = g / BUTTON_TO_CENTER_ORIGINAL_DISTANCE;
                var i = (BUTTON_TO_CENTER_ORIGINAL_ANGLE - Math.atan2(centeredy - d, centeredx - f)) * 180 /
                    Math.PI;
                c.scaleX = h * objscalex;
                c.scaleY = h * objscaley;
                canvas.renderAll()
            }
        }
    });
    canvas.on("object:rotating", function(e)
    {
        isitrotating = true;
        mc.get("pan").set(
        {
            enable: false
        })
    });
    canvas.on("object:selected", function(e)
    {
        var a = e.target;
        var b = canvas.getObjects().indexOf(a);
        console.log(b);
        if (thecroprect && thecroprect.isrendered && a != thecroprect) canvas.setActiveObject(thecroprect);
        $("#sendtoback").attr("disabled", "disabled");
        $("#bringtofront").attr("disabled", "disabled");
        if (canvas.getObjects().length > 1)
        {
            if (b > 0) $("#sendtoback").removeAttr("disabled");
            if (b != canvas.getObjects().length - 1) $("#bringtofront").removeAttr("disabled")
        }
        $("#clonebutton").removeAttr("disabled");
        setting_object_controls(a);
        get_menu_for_object(a)
    });
    canvas.on("selection:cleared", function()
    {
        if ($(".toolbar-inner").attr("menuid") == "textmenu" || $(".toolbar-inner").attr("menuid") ==
            "textbackgroundmenu" || $(".toolbar-inner").attr("menuid") == "textstrokemenu" || $(
                ".toolbar-inner").attr("menuid") == "textshadowmenu") go_to_menu("mainmenu");
        $("#sendtoback").attr("disabled", "disabled");
        $("#bringtofront").attr("disabled", "disabled");
        $("#clonebutton").attr("disabled", "disabled");
        if (thecroprect && thecroprect.isrendered) canvas.setActiveObject(thecroprect);
        else get_menu_for_object("noobject")
    })
}
thisApp.object_click_time = 0;

function object_double_click_event(a)
{
    if ((new Date).getTime() - thisApp.object_click_time < 200) setTimeout(function()
    {
        if (a.get("type") == "textbox") prepare_text_modal("edit")
    }, 100);
    thisApp.object_click_time = (new Date).getTime()
}

function object_edit_button(a)
{
    if (a.type == "textbox") object_double_click_event()
}

function Add_canvas_pointer(b)
{
    UpdateCanvasSize();
    setTimeout(function()
    {
        canvas.add(canvas_pointer);
        canvas_pointer.isrendered = true;
        canvas_pointer.set(
        {
            left: canvas.getWidth() / 2,
            top: canvas.getHeight() / 2
        });
        var a = b || 1;
        canvas_pointer.setOpacity(a);
        canvas.setActiveObject(canvas_pointer);
        canvas.renderAll()
    }, 50)
}

function div_fadeout(a)
{
    if (IS_MOUSE_DOWN) a.css("opacity", 0)
}

function div_fadeIn(a)
{
    a.css("opacity", 1)
}

function object_fadeOut(a)
{
    if (!IS_MOUSE_DOWN)
    {
        var b = a.getOpacity();
        b -= .03;
        if (b <= 0) b = 0;
        else
        {
            requestAnimationFrame(function()
            {
                object_fadeOut(a)
            });
            a.setOpacity(b)
        }
        canvas.renderAll()
    }
}

function object_fadeIn(a)
{
    a.setOpacity(1);
    canvas.renderAll()
}

function sent_object_to(a)
{
    var b = canvas.getActiveObject();
    if (b != null)
    {
        if (a == "front") b.bringForward();
        else if (a == "back") b.sendBackwards();
        var c = canvas.getObjects().indexOf(b);
        $("#sendtoback").attr("disabled", "disabled");
        $("#bringtofront").attr("disabled", "disabled");
        if (canvas.getObjects().length > 1)
        {
            if (c > 0) $("#sendtoback").removeAttr("disabled");
            if (c != canvas.getObjects().length - 1) $("#bringtofront").removeAttr("disabled")
        }
    }
    else
    {
        $("#sendtoback").attr("disabled", "disabled");
        $("#bringtofront").attr("disabled", "disabled")
    }
}

function clone_object(a)
{
    canvas.renderOnAddRemove = false;
    if (a) var b = a;
    else var b = canvas.getActiveObject();
    if (b.get("type") == "image")
    {
        var c = fabric.util.object.clone(b);
        if (b.filters && b.filters.length > 0)
        {
            var d = jQuery.extend(true,
            {}, b.filters[0]);
            c.filters = [];
            c.filters[0] = d
        }
        else c.filters = []
    }
    else var c = b.clone();
    if (b.get("type") == "textbox") c.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    canvas.add(c);
    var e = canvas.getObjects();
    var f = e.indexOf(b);
    canvas.remove(c);
    canvas.getObjects().splice(f + 1, 0, c);
    canvas.renderOnAddRemove = true;
    setTimeout(function()
    {
        canvas.renderAll()
    }, 100);
    sent_object_to("dontsave");
    if (a) CanvasLayers()
}

function setting_object_controls(a)
{
    var b = a;
    var c = b.get("type");
    if (c == "textbox") b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    if (c == "image" && b != canvas_pointer) b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    if (c == "image" && b == canvas_pointer) b.setControlsVisibility(
    {
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    if (c == "circle" && b == thisApp.policorner) b.setControlsVisibility(
    {
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    else if (c == "ellipse" && b != thisApp.policorner) b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    if (c == "rect" && b != thecroprect) b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    if (c == "rect" && b == thecroprect)
        if (thecroprect.isfree) b.setControlsVisibility(
        {
            bl: false,
            br: false,
            tl: false,
            tr: false,
            mt: true,
            mb: true,
            ml: true,
            mtr: false,
            mr: true
        });
        else b.setControlsVisibility(
        {
            bl: true,
            br: true,
            tl: true,
            tr: true,
            mt: false,
            mb: false,
            ml: false,
            mtr: false,
            mr: false
        });
    if (c == "triangle") b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    if (c == "polyline" && b != canvas_pointer) b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    if (c == "group" && b != canvas_pointer) b.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    canvas.renderAll()
}

function scale_and_move_objects_after_cropping(a, b)
{
    oldscale = a.scale;
    oldtop = a.top;
    oldleft = a.left;
    canvas.setActiveGroup(new fabric.Group(canvas.getObjects())).renderAll();
    var c = canvas.getActiveGroup()
}

function get_menu_for_object(a)
{
    var b = $(".toolbar-inner").attr("menuid");
    if (b == "cropmenu") return;
    if ((a == "noobject" || a.type != "textbox") && a != thecroprect) go_to_menu("mainmenu");
    else
    {
        var c = a;
        var d = c.type;
        switch (d)
        {
            case "textbox":
                if (b != "textmenu" && b != "textbackgroundmenu" && b != "texttools" && b != "textdecor" && b !=
                    "textstrokemenu" && b != "textshadowmenu" && b != "Movement" && b != "Position" && b != "Rotation")
                    go_to_menu("textmenu");
                break;
            default:
        }
    }
}

function CanvasLayers(a)
{
    thisApp.layersarray = canvas.getObjects();
    var b = thisApp.layersarray.length;
    var c = "";
    if (b == 0) c += '<li class="acanvaslayer" indx=\'' + String(i) +
        '\'>\n\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t<div class="item-media">\n\t\t\t\t\t\t\t\t<i style="font-size: 20px;" class="flaticon-abc16" ></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t<div class="item-title" style="color:var(--first-font-color)"> ' +
        trans.nolayers[language] + " </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </li>";
    for (var i = b - 1; i >= 0; i--)
    {
        var d;
        if (i == 0) d = "disabled='disabled'";
        else d = "";
        var e = thisApp.layersarray[i];
        if (e.get("type") == "textbox") c += '<li class="acanvaslayer" indx="' + String(i) +
            '" >\n\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t<div class="item-media">\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button"  onclick="delete_layer(thisApp.layersarray[' +
            i +
            '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/trash.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="lock_layer(thisApp.layersarray[' +
            i + '])">' + "<img " + (e.selectable ? 'src="icons/toolbar/lock.png"' : 'src="icons/toolbar/lock2.png"') +
            'style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">' + (
                '\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="clone_object(thisApp.layersarray[' +
                i +
                '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/copy.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);display:none" class="button" onclick="center_layer(thisApp.layersarray[' +
                i +
                '])">\n\t\t\t\t\t\t\t\t\t\t<i style="font-size: 20px;" class="flaticon-icon-531"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;">\n\t\t\t\t\t\t\t\t\t'
            ) + "<a " + (e.selectable ? 'class="link" style="color:var(--first-font-color);font-family:' + e.getFontFamily() +
                '"' : 'class="link disabled"style="color:var(--first-font-color);font-family:' + e.getFontFamily() +
                '"') + "  >" + e.getText() + "</a>" +
            '\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-after" style="max-height: 36px;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sortable-handler" onmouseup="sort_objects();" ontouchend="sort_objects();" ></div>\n\t\t\t\t\t\t</li>';
        else if (e.get("type") == "image") c += '<li class="acanvaslayer" indx="' + String(i) +
            '" >\n\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t<div class="item-media">\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button"  onclick="delete_layer(thisApp.layersarray[' +
            i +
            '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/trash.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="lock_layer(thisApp.layersarray[' +
            i + '])">' + "<img " + (e.selectable ? 'src="icons/toolbar/lock.png"' : 'src="icons/toolbar/lock2.png"') +
            'style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">' + (
                '\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="clone_object(thisApp.layersarray[' +
                i +
                '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/copy.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;height: 25px;height: 25px;">\n\t\t\t\t\t\t\t\t\t\t<img style="height:100%;width:auto" src="' +
                e._element.currentSrc +
                '" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-after"  style="max-height: 36px;">\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sortable-handler" onmouseup="sort_objects();" ontouchend="sort_objects();" ></div>\n\t\t\t\t\t\t</li>'
            );
        else if (e.get("type") == "polyline") c += '<li class="acanvaslayer" indx="' + String(i) +
            '" >\n\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t<div class="item-media">\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button"  onclick="delete_layer(thisApp.layersarray[' +
            i +
            '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/trash.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="lock_layer(thisApp.layersarray[' +
            i + '])">' + "<img " + (e.selectable ? 'src="icons/toolbar/lock.png"' : 'src="icons/toolbar/lock2.png"') +
            'style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">' + (
                '\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="clone_object(thisApp.layersarray[' +
                i +
                '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/copy.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;height: 25px;height: 25px;">\n\t\t\t\t\t\t\t\t\t\t<img style="height:100%;width:auto" src="' +
                e.src +
                '" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-after"  style="max-height: 36px;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sortable-handler" onmouseup="sort_objects();" ontouchend="sort_objects();" ></div>\n\t\t\t\t\t\t</li>'
            );
        else if ((e.get("type") == "ellipse" || e.get("type") == "rect" || e.get("type") == "triangle") && e != thisApp
            .policorner) c += '<li class="acanvaslayer" indx="' + String(i) +
            '" >\n\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t<div class="item-media">\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button"  onclick="delete_layer(thisApp.layersarray[' +
            i +
            '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/trash.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="lock_layer(thisApp.layersarray[' +
            i + '])">' + "<img " + (e.selectable ? 'src="icons/toolbar/lock.png"' : 'src="icons/toolbar/lock2.png"') +
            'style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">' + (
                '\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a style="min-width: 35px !important;color:var(--second-font-color);" class="button" onclick="clone_object(thisApp.layersarray[' +
                i +
                '])">\n\t\t\t\t\t\t\t\t\t\t<img src="icons/toolbar/copy.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">\n\t\t\t\t\t\t\t\t\t</a>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;height: 25px;height: 25px;">\n\t\t\t\t\t\t\t\t\t\t<img style="height:100%;width:auto" src="' +
                e.src +
                '" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-after"  style="max-height: 36px;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sortable-handler" onmouseup="sort_objects();" ontouchend="sort_objects();" ></div>\n\t\t\t\t\t\t</li>'
            )
    }
    if (a) call_layers_popup(c);
    else document.getElementById("canvaslayers").innerHTML = c
}

function call_layers_popup(a)
{
    check_if_anything_changed();
    var b;
    if (language == "arabic") b = "rtl";
    else b = "ltr";
    var c = '<div class="popup canvaslayers" style="">\n        <div class="navbar mainnavbar " style="direction: ' + b +
        ';">\n            <div class="navbar-inner">\n                <div class="left"><a onclick="close_layers_popup();" href="#" style="" class="link">X</a></div>\n                <div class="center tlayers" style="font-size: 16px;">' +
        trans.Layers[language] +
        '</div>\n                <div class="right"></div>\n            </div>\n        </div>\n        <div class="content-block" style="padding: 0 0px; margin: 0px 0;height: calc(100% - 36px);">\n            <div class="list-block sortable sortable-opened" style=" margin-bottom: 0px;margin-top: 0px;height: calc(100%);overflow-y: auto;">\n                <ul id="canvaslayers" style=" ">' +
        a + " </ul>\n            </div>\n        </div>\n    </div>";
    myApp.popup(c, true);
    set_background_color_layer();
    $$(".canvaslayers").on("close", function()
    {
        showFullAdRatio(.5);
        canvas.deactivateAll();
        canvas.discardActiveGroup();
        canvas.renderAll();
        check_if_anything_changed("after")
    })
}

function close_layers_popup()
{
    myApp.closeModal($$(".popup"));
    canvas.deactivateAll();
    canvas.discardActiveGroup()
}

function sort_objects()
{
    setTimeout(function()
    {
        var a = [];
        var b = canvas.getObjects();
        var e = $("ul[id='canvaslayers'] li:first");
        a.push(b[parseInt(e.attr("indx"))]);
        for (var i = 1; i < b.length; i++)
        {
            e = e.next();
            a.push(b[parseInt(e.attr("indx"))])
        }
        a.reverse();
        for (var i = 0; i < a.length; i++) canvas.moveTo(a[i], i);
        CanvasLayers()
    }, 100);
    canvas.deactivateAll();
    canvas.discardActiveGroup()
}

function delete_layer(a)
{
    canvas.remove(a);
    CanvasLayers()
}

function lock_layer(a)
{
    if (a.selectable == true)
    {
        a.set(
        {
            selectable: false,
            evented: false
        });
        canvas.deactivateAll();
        canvas.discardActiveGroup();
        canvas.renderAll()
    }
    else
    {
        a.set(
        {
            selectable: true,
            evented: true
        });
        CanvasLayers();
        canvas.setActiveObject(a);
        canvas.renderAll()
    }
    CanvasLayers()
};
//---------- 09fabsrc.js end ----------
//---------- From 10cr.js ----------
var thecroprect;
var imagecropped = false;

function crop_image()
{
    if (check_if_image_is_cropped());
    var a = canvas.getWidth() / 3;
    var b = canvas.getHeight() / 3;
    thecroprect = new CropZone(
    {
        fill: "transparent",
        hasBorders: !1,
        originX: "left",
        originY: "top",
        cornerSize: 25,
        transparentCorners: !1,
        lockRotation: !0,
        hasRotatingPoint: !1,
        width: a,
        height: b
    });
    thecroprect.set(
    {
        top: canvas.getHeight() * .5 - thecroprect.getHeight() * .5,
        left: canvas.getWidth() * .5 - thecroprect.getWidth() * .5
    });
    thecroprect.cornerSize = controlsscale;
    thecroprect.setControlsVisibility(
    {
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    thecroprect.isfree = true;
    canvas.forEachObject(function(o)
    {
        o.evented = false
    });
    canvas.add(thecroprect);
    thecroprect.set(
    {
        selectable: true,
        evented: true
    });
    thecroprect.iscroprect = true;
    thecroprect.isrendered = true;
    canvas.setActiveObject(thecroprect);
    canvas.renderAll();
    UpdateCanvasSize()
}

function apply_crop()
{
    angle = 0;
    var a = thecroprect.getLeft();
    var b = thecroprect.getTop();
    var c = thecroprect.getWidth();
    var d = thecroprect.getHeight();
    if (c > canvas.getWidth())
    {
        c = canvas.getWidth();
        a = 0
    }
    if (d > canvas.getHeight())
    {
        d = canvas.getHeight();
        b = 0
    }
    var e = new HodgeRect(a / canvas.width, b / canvas.height, c / canvas.width, d / canvas.height);
    crop_texture(e);
    update_screen();
    canvas.remove(thecroprect);
    thecroprect.isrendered = false;
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize();
    imagecropped = true;
    canvas.forEachObject(function(o)
    {
        o.evented = true
    })
}

function rotate_clockwise()
{
    rotate_texture(90);
    update_screen();
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize()
}

function rotate_anticlockwise()
{
    rotate_texture(270);
    update_screen();
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize()
}

function flip_X()
{
    flip_texture("x");
    update_screen();
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize()
}

function flip_Y()
{
    flip_texture("y");
    update_screen();
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize()
}
function setCanvasBackgroundColor(color){
    console.log('asdf');
    
    update_screen();
    canvas.clear();
     reset_texture();
    canvas.setBackground = 'red';
    canvas.renderAll();
    UpdateCanvasSize()
   // UpdateCanvasSize();
}
function cancelCrop()
{
    canvas.remove(canvas.getObjects().getLast());
    thecroprect.isrendered = false;
    canvas.deactivateAll();
    canvas.discardActiveGroup();
    canvas.renderAll();
    canvas.forEachObject(function(o)
    {
        o.evented = true
    });
    canvas.forEachObject(function(o)
    {
        o.evented = true
    })
}

function reset_canvas_from_crop()
{
    reset_texture();
    update_screen();
    canvas.setWidth(APP.fboTexture._width);
    canvas.setHeight(APP.fboTexture._height);
    UpdateCanvasSize();
    imagecropped = false;
    cancelCrop()
}

function check_if_image_is_cropped(a)
{
    return imagecropped
}

function set_square_crop(a)
{
    if (!thecroprect.isfree) return;
    thecroprect.setControlsVisibility(
    {
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mr: false,
        mtr: false
    });
    thecroprect.isfree = false;
    var b = Math.min(canvas.getWidth() / 2, canvas.getHeight() / 2);
    thecroprect.setWidth(b);
    thecroprect.setHeight(b);
    thecroprect.scaleToWidth(b);
    thecroprect.set(
    {
        top: canvas.getHeight() * .5 - thecroprect.getHeight() * .5,
        left: canvas.getWidth() * .5 - thecroprect.getWidth() * .5
    });
    thecroprect.setCoords();
    canvas.renderAll()
}

function set_free_crop(a)
{
    if (thecroprect.isfree) return;
    thecroprect.setControlsVisibility(
    {
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: true,
        mb: true,
        ml: true,
        mtr: false,
        mr: true
    });
    thecroprect.setWidth(canvas.getWidth() / 2);
    thecroprect.setHeight(canvas.getHeight() / 2);
    thecroprect.scaleX = 1;
    thecroprect.scaleY = 1;
    thecroprect.isfree = true;
    thecroprect.set(
    {
        top: canvas.getHeight() * .5 - thecroprect.getHeight() * .5,
        left: canvas.getWidth() * .5 - thecroprect.getWidth() * .5
    });
    thecroprect.setCoords();
    canvas.renderAll()
}
var angle = 0;
var CANVAS_DISORIENTED = false;

function go_to_rotate()
{
    $("#subbuttonrow").html(rotatemenu);
    $("#subbuttonrow").addClass("rotatemenu");
    $("#subbuttonrow").removeClass("premenu");
    $("#premenuconbutton").hide()
}

function rotate_left()
{
    angle -= 90;
    mainimg.set(
    {
        centeredRotation: false
    });
    while (angle > 360) angle -= 360;
    while (angle < 0) angle += 360;
    if (angle == 90 || angle == 270)
    {
        CANVAS_DISORIENTED = true;
        canvas.setHeight(mainimg.getWidth() - 2);
        canvas.setWidth(mainimg.getHeight() - 1)
    }
    else
    {
        CANVAS_DISORIENTED = false;
        canvas.setHeight(mainimg.getHeight() - 1);
        canvas.setWidth(mainimg.getWidth()) - 2
    }
    switch (angle)
    {
        case 90:
            mainimg.setTop(-.5);
            mainimg.setLeft(mainimg.getHeight() - 1.5);
            break;
        case 270:
            mainimg.setTop(mainimg.getWidth() - .5);
            mainimg.setLeft(-.7);
            break;
        case 180:
            mainimg.setTop(mainimg.getHeight() - .3);
            mainimg.setLeft(mainimg.getWidth());
            break;
        default:
            mainimg.setTop(-1);
            mainimg.setLeft(0)
    }
    mainimg.setAngle(angle);
    canvas.renderAll();
    UpdateCanvasSize();
    mainimg.set(
    {
        centeredRotation: true
    });
    setTimeout(function()
    {
        themainimgtop = mainimg.getTop();
        themainimgleft = mainimg.getLeft();
        themainimgangle = mainimg.getAngle();
        themainimgwidth = mainimg.getWidth();
        themainimgheight = mainimg.getHeight()
    }, 0)
}

function rotate_right()
{
    angle += 90;
    mainimg.set(
    {
        centeredRotation: false
    });
    while (angle > 360) angle -= 360;
    while (angle < 0) angle += 360;
    if (angle == 90 || angle == 270)
    {
        CANVAS_DISORIENTED = true;
        canvas.setHeight(mainimg.getWidth() - 2);
        canvas.setWidth(mainimg.getHeight() - 1)
    }
    else
    {
        CANVAS_DISORIENTED = false;
        canvas.setHeight(mainimg.getHeight() - 2);
        canvas.setWidth(mainimg.getWidth()) - 1
    }
    switch (angle)
    {
        case 90:
            mainimg.setTop(-.5);
            mainimg.setLeft(mainimg.getHeight());
            break;
        case 270:
            mainimg.setTop(mainimg.getWidth() - 1.5);
            mainimg.setLeft(-.7);
            break;
        case 180:
            mainimg.setTop(mainimg.getHeight() - 1);
            mainimg.setLeft(mainimg.getWidth());
            break;
        default:
            mainimg.setTop(-1);
            mainimg.setLeft(0)
    }
    mainimg.setAngle(angle);
    canvas.renderAll();
    UpdateCanvasSize();
    mainimg.set(
    {
        centeredRotation: true
    });
    setTimeout(function()
    {
        themainimgtop = mainimg.getTop();
        themainimgleft = mainimg.getLeft();
        themainimgangle = mainimg.getAngle();
        themainimgwidth = mainimg.getWidth();
        themainimgheight = mainimg.getHeight()
    }, 0)
}

function flip_x()
{
    if (mainimg.getFlipX() != true || mainimg.getFlipX() == undefined)
    {
        mainimg.setFlipX(true);
        canvas.renderAll();
        filppedx = true
    }
    else
    {
        mainimg.setFlipX(false);
        canvas.renderAll();
        filppedx = false
    }
}

function flip_y()
{
    if (mainimg.getFlipY() != true || mainimg.getFlipY() == undefined)
    {
        mainimg.setFlipY(true);
        canvas.renderAll();
        filppedy = true
    }
    else
    {
        mainimg.setFlipY(false);
        canvas.renderAll();
        filppedy = false
    }
}
var CropZone = fabric.util.createClass(fabric.Rect,
{
    _render: function(a)
    {
        this.callSuper("_render", a);
        var b = (a.canvas, 7),
            flipX = this.flipX ? -1 : 1,
            flipY = this.flipY ? -1 : 1,
            scaleX = flipX / this.scaleX,
            scaleY = flipY / this.scaleY;
        a.scale(scaleX, scaleY), a.fillStyle = "rgba(0, 0, 0, 0.5)",
            this._renderOverlay(a), void 0 !== a.setLineDash ? a.setLineDash([
                b, b
            ]) : void 0 !== a.mozDash && (a.mozDash = [
                b, b
            ]), a.strokeStyle = "rgba(0, 0, 0, 0.2)",
            this._renderBorders(a), this._renderGrid(a), a.lineDashOffset = b, a.strokeStyle =
            "rgba(255, 255, 255, 0.4)",
            this._renderBorders(a), this._renderGrid(a), a.scale(1 / scaleX, 1 / scaleY)
    },
    _renderOverlay: function(a)
    {
        var b = a.canvas,
            borderOffset = .1,
            x0 = Math.ceil(-this.getWidth() / 2 - (this.getLeft() + 1)),
            x1 = Math.ceil(-this.getWidth() / 2),
            x2 = Math.ceil(this.getWidth() / 2),
            x3 = Math.ceil(this.getWidth() / 2 + (b.width + 1 - this.getWidth() - (this.getLeft() + 1))),
            y0 = Math.ceil(-this.getHeight() / 2 - (this.getTop() + 1)),
            y1 = Math.ceil(-this.getHeight() / 2),
            y2 = Math.ceil(this.getHeight() / 2),
            y3 = Math.ceil(this.getHeight() / 2 + (b.height + 1 - this.getHeight() - (this.getTop() + 1)));
        a.fillRect(x0, y0, x3 - x0, y1 - y0 + borderOffset), a.fillRect(x0, y1, x1 - x0, y2 - y1 +
            borderOffset), a.fillRect(x2, y1, x3 - x2, y2 - y1 + borderOffset), a.fillRect(x0, y2, x3 -
            x0, y3 - y2)
    },
    _renderBorders: function(a)
    {
        a.beginPath(), a.moveTo(-this.getWidth() / 2, -this.getHeight() / 2), a.lineTo(this.getWidth() / 2, -
            this.getHeight() / 2), a.lineTo(this.getWidth() / 2, this.getHeight() / 2), a.lineTo(-this.getWidth() /
            2, this.getHeight() / 2), a.lineTo(-this.getWidth() / 2, -this.getHeight() / 2), a.stroke()
    },
    _renderGrid: function(a)
    {
        a.beginPath(), a.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2), a.lineTo(-
                this.getWidth() / 2 + 1 / 3 * this.getWidth(), this.getHeight() / 2), a.stroke(),
            a.beginPath(),
            a.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2), a.lineTo(-this
                .getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2), a.stroke(),
            a.beginPath(),
            a.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), a.lineTo(this
                .getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), a.stroke(),
            a.beginPath(),
            a.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), a.lineTo(this
                .getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), a.stroke()
    }
});
//---------- 10cr.js end ----------
//---------- From 11cwp.js ----------
thisApp.colorwheel = "";
thisApp.cw;

function prepare_color_wheel_forshape(e, f, g, h, i)
{
    if (g) check_if_anything_changed();
    var j = "block";
    if (h) j = "none";
    thisApp.colorwheel =
        '<div style="z-index: 13001;height: 225px !important" class="picker-modal untouchablediv sketchstylesranges theme-orange shadowpickermodal">\n\t\t\t\t\t\t\t<div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t<div class="toolbar-inner close-picker">\n\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 3px;margin-top: 0px;display:' +
        j +
        '" class="pickerclosebutton close-picker button button-fill" onclick="close_shape_color_wheel_and_opacity_picker(\'' +
        e + "'," + canvas.getObjects().indexOf(f) +
        ')"><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 3px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill " ><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t<div class="content-block" style="pointer-events: auto;height:100%;direction:rtl;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t<div class="colorpreview1" style="position: absolute;left: 0;width: calc(50% - 55px);height: 28px;top: -36px;bottom: 0;margin: auto;"></div>\n\t\t\t\t\t\t\t\t\t<div class="colorpreview2" style="position: absolute;right: 0;width: calc(50% - 55px);height: 28px;top: -36px;bottom: 0;margin: auto;"></div>\n\t\t\t\t\t\t\t\t\t<div id="colorwheel" style="position: absolute;left: 0;right: 0;margin: auto;top: 10px;"></div>\n\t\t\t\t\t\t\t\t\t<div class="list-block rangesul" style="padding: 0 !important;">\n\t\t\t\t\t\t\t\t\t\t<ul style="overflow-y: auto;overflow-x:hidden;top: 122px;position: relative;">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content" style="padding-left: 29px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.opacity[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="1" value="0" step="0.01" onchange="" onmouseup="" ontouchend="" oninput="set_opacity_to_shape(\'' +
        e + "',$(this).val()," + canvas.getObjects().indexOf(f) +
        ");$('.picker-modal .shadowrangevalue').html($(this).val());if (" + i +
        '){set_background_color_layer()}" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="left: 2px;width: 36px;" class="shadowrangevalue">0</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>';
    var k = myApp.pickerModal(thisApp.colorwheel);
    thisApp.cw = Raphael.colorwheel($("#colorwheel"), 120);
    var l = f;
    thisApp.canvasbg = thisApp.canvasbg || "rgba(255,255,255,1)";
    var m = e == "fill" ? l.fill : e == "stroke" ? l.stroke || invert_color(l.fill) : e == "shadowcolor" && l.shadow !=
        null ? l.shadow.color : e == "shadowcolor" && l.shadow == null ? "rgba(0,0,0,1)" : e == "textBackgroundColor" &&
        !l.textBackgroundColor ? "rgba(0,0,0,0.5)" : e == "textBackgroundColor" && l.textBackgroundColor ? l.textBackgroundColor :
        e == "canvasbg" && !canvas.backgroundColor ? "rgba(255,255,255,0)" : e == "canvasbg" && canvas.backgroundColor ?
        canvas.backgroundColor : undefined;
    thisApp.cw.color(m);
    set_color_and_opacity_to_shape(e, f, m);
    var n = get_opacity_from_color(m);
    $(".picker-modal input").val(n);
    $(".picker-modal .shadowrangevalue").html(n);
    $(".colorpreview1").css("background", thisApp.cw.color().hex);
    $(".colorpreview2").css("background", thisApp.cw.color().hex);
    if (l) move_canvas_when_editing_pickers_open(false, f);
    else move_canvas_when_editing_pickers_open(true);
    if ($("textarea").length != 1)
    {
        $(".modal-overlay").addClass("modal-overlay-visible");
        $(".modal-overlay").attr("onclick", "myApp.closeModal('.picker-modal')")
    }
    thisApp.cw.onchange(function(a)
    {
        $(".colorpreview1").css("background", thisApp.cw.color().hex);
        $(".colorpreview2").css("background", thisApp.cw.color().hex);
        var b = [parseInt(a.r),
            parseInt(a.g),
            parseInt(a.b)
        ];
        if (parseFloat($(".picker-modal input").val()) == 0)
        {
            $(".picker-modal input").val(1);
            $(".picker-modal .shadowrangevalue").html(1)
        }
        var c = "rgba(" + parseInt(a.r) + "," + parseInt(a.g) + "," + parseInt(a.b) + "," + $(
            ".picker-modal input").val() + ")";
        set_color_and_opacity_to_shape(e, f, c);
        if (i)
        {
            var d = "rgba(" + fabric.Color.sourceFromHex(thisApp.cw.color().hex)[0] + "," + fabric.Color.sourceFromHex(
                    thisApp.cw.color().hex)[1] + "," + fabric.Color.sourceFromHex(thisApp.cw.color().hex)[2] +
                "," + parseFloat($(".shadowrangevalue").html()) + ")";
            set_background_color_layer(d)
        }
    });
    if (i) set_background_color_layer();
    $$(".picker-modal").on("close", function()
    {
        if ($("textarea").length > 0) move_canvas_to_max_top(true, true);
        else
        {
            showFullAdRatio(.5);
            $(".modal-overlay").removeClass("modal-overlay-visible");
            $(".modal-overlay").removeAttr("onclick");
            return_canvas_after_editing_pickers_close();
            if (i) set_background_color_layer();
            if (canvas.backgroundColor != "") thisApp.canvasbg = canvas.backgroundColor
        }
        if (g) check_if_anything_changed("after")
    })
}

function set_color_and_opacity_to_shape(a, b, c)
{
    var d = b;
    if (a == "fill") d.setColor(c);
    else if (a == "stroke")
    {
        if (!d.stroke) d.strokeWidth = 5;
        d.stroke = c
    }
    else if (a == "shadowcolor")
    {
        if (d.shadow == null) d.setShadow(
        {
            color: c,
            offsetX: "30",
            offsetY: "15"
        });
        else d.shadow.color = c;
        if (d.shadow.blur == 0) d.shadow.blur = 5
    }
    else if (a == "textBackgroundColor") d.textBackgroundColor = c;
    else if (a == "canvasbg") canvas.backgroundColor = c;
    canvas.renderAll()
}

function get_opacity_from_color(a)
{
    if (a.split("(")[0] != "rgba") var b = 1;
    else var b = a.split(",").getLast().split(")")[0];
    return b
}

function set_opacity_to_shape(a, b, c)
{
    var d = canvas.getObjects()[c];
    var e = a == "fill" ? d.fill : a == "stroke" ? d.stroke : a == "textBackgroundColor" ? d.textBackgroundColor : a ==
        "shadowcolor" && d.shadow != null ? d.shadow.color : a == "canvasbg" ? canvas.backgroundColor :
        "rgba(255,0,0,0)";
    var f = e.split(",")[0].split("(")[1];
    var g = e.split(",")[1];
    var h = e.split(",")[2];
    var i = "rgba(" + parseInt(f) + "," + parseInt(g) + "," + parseInt(h) + "," + b + ")";
    set_color_and_opacity_to_shape(a, d, i)
}

function close_shape_color_wheel_and_opacity_picker(a, b)
{
    var c = canvas.getObjects()[b];
    if (a == "fill") console.log("fsagf");
    else if (a == "stroke") c.stroke = null;
    else if (a == "textBackgroundColor") c.textBackgroundColor = "";
    else if (a == "canvasbg") canvas.backgroundColor = "rgba(255,255,255,0)";
    else if (a == "shadowcolor")
        if (c.shadow == null) c.shadow = null;
        else c.shadow = null;
    canvas.renderAll()
}

function set_background_color_layer(a)
{
    var b = $("#bgcolorbutton");
    var c = $("#backgroundtext");
    var d = $("#togglebutton");
    var e = a || canvas.backgroundColor;
    if (e == "" || get_opacity_from_color(canvas.backgroundColor) == "0")
    {
        b.css("background", "transparent");
        b.css("color", "rgb(158, 155, 155)");
        c.attr("disabled", "disabled");
        c.css("text-decoration", "line-through");
        b.css("text-decoration", "line-through");
        d.html(
            '<img src="icons/layers/unvisable.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">'
        )
    }
    else
    {
        b.css("color", invert_color(e));
        c.removeAttr("disabled");
        c.css("text-decoration", "none");
        b.css("text-decoration", "none");
        d.html(
            '<img src="icons/layers/visable.png" style="width: 20px;height: auto;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;">'
        );
        b.css("background", e);
        if (parseFloat(get_opacity_from_color(e)) == 0) b.css("color", "rgb(158, 155, 155)")
    }
}

function backgroundtoggle()
{
    var a = canvas.backgroundColor;
    if (get_opacity_from_color(a) == 0) set_opacity_to_shape("canvasbg", 1, 0);
    else set_opacity_to_shape("canvasbg", 0, 0);
    set_background_color_layer()
}

function invert_color(a)
{
    var b = parseFloat(a.split("(")[1].split(",")[0]);
    var c = parseFloat(a.split("(")[1].split(",")[1]);
    var d = parseFloat(a.split("(")[1].split(",")[2].split(")")[0]);
    var e = 255 - b;
    var f = 255 - c;
    var g = 255 - d;
    if (a.split(",").length == 3) var h = "rgb(" + e + "," + f + "," + g + ")";
    else
    {
        var i = get_opacity_from_color(a);
        var h = "rgba(" + e + "," + f + "," + g + "," + i + ")"
    }
    return h
};
//---------- 11cwp.js end ----------
//---------- From 12ov.js ----------
thisApp.overlayhtml = "";

function apply_effects_for_picker_overlay()
{
    APP.brushMaskOpacity = .45;
    $($(".range-slider input")[0]).val(APP.brushMaskOpacity);
    $($(".shadowrangevalue")[0]).html(APP.brushMaskOpacity);
    var f = function(x)
    {
        APP.brightness = 0;
        APP.contrast = 1;
        APP.gamma = 1;
        APP.saturation = 0;
        APP.hueShift = 0;
        APP.redChannel = 1;
        APP.blueChannel = 1;
        APP.greenChannel = 1;
        APP.exposure = 0;
        render_texture_basic(x)
    };
    var b = function(x)
    {
        APP.overlayAmount = 1;
        APP.overlayMode = thisApp.overlaymode;
        var a = $(".overlayimagesreallist img")[parseInt(APP.thefilternumber)];
        APP.overlayTexture = "overlay-texture";
        APP.textures["overlay-texture"].updateTextureContent(a);
        APP.overlayIsOverlayBackground = false;
        render_texture_overlay(x)
    };
    ping_pong_effects(APP.fboTexture, f, b)
}

function prepare_overlay_picker()
{
    var a = "";
    var b = "";
    for (var i = 0; i < thisApp.texcount; i++)
        if (i == 0)
        {
            a =
                '<li style="position:relative" onclick="set_overlay_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<img src="imgs/overlays/thumbnail/' +
                i +
                '.jpg" />\n\t\t\t\t\t\t\t\t\t\t<div class="overlayssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>';
            b = '<img src="imgs/overlays/' + i + '.jpg" />'
        }
        else
        {
            a +=
                '<li style="position:relative" onclick="set_overlay_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<img src="imgs/overlays/thumbnail/' +
                i +
                '.jpg" />\n\t\t\t\t\t\t\t\t\t\t<div class="overlayssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>';
            b += '<img src="imgs/overlays/' + i + '.jpg" />'
        }
    thisApp.overlayhtml =
        '<div style="z-index: 13001;opacity:0;max-height: unset !important;height: 137px !important;" class="picker-modal untouchablediv  theme-deeporange shadowpickermodal maintoolssubmenu">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick="cancel_effects()"><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a id="backtosettings" style="height: 45px; padding-top: 0px;margin-top: 0px;display:none" class="pickerclosebutton button button-fill" onclick="show_ranges_options(false)"><img class="pickertoolbarbutton" src="icons/common/back.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="center touchablediv middle-buttons-container" style="position: relative;width: 120px;height: 100%;line-height: 1px !important;background: var(--toolbar-and-buttons-background-color);background-image: var(--toolbar-and-buttons-background-image);">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middlerightbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,true)"><img class="pickertoolbarbutton" src="icons/common/forward.png" style="right: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middleleftbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,false)"><img class="pickertoolbarbutton" src="icons/common/backward.png" style="left: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div onclick="layer_blending_mode($(this))" style="height: 100%;margin-top: 12px;width: 30%;background: none !important;top: -12px;" class="middlebuttonborder">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img style="top: -12px;" class="pickertoolbarbutton" src="icons/mainmenu/overlays.png"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div currentblendnumber="" id="blendingtitle" style="position: absolute;left: 0;right: 0;width: 100%;margin: auto;top: 24px;height: 15px;bottom: 0;pointer-events: none;text-align: center;line-height: 15px;"></div></div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill " onclick="apply_screen_to_texture()"><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ul class="emojul" style="padding-top: 12px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' +
        a +
        '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="list-block optionsranges" style="position: relative; direction:rtl;display:none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 100px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.opacity[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="1" value="1" step="0.01" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushMaskOpacity=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());update_if_normal_blending()" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;" disabled="disabled">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.BlendAmount[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="10" value="1" step="0.1" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushOverlayAmount=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>';
    $(".overlayimagesreallist").html(b)
}

function overlay_picker()
{
    var a = thisApp.overlayhtml;
    var b = myApp.pickerModal(a);
    $$(".picker-modal").on("close", function()
    {
        cancel_effects();
        showFullAdRatio(1)
    });
    thisApp.current_picker = "overlay";
    show_loader();
    setTimeout(function()
    {
        set_filter_region_brush();
        swap_brush_fg_bg();
        APP.isBrushing = true;
        hide_loader();
        $(".picker-modal").css("opacity", "1");
        toggle_undo_redo_menu_div(0);
        $("#blendingtitle").html(converting_blending_modes_names(APP.brushOverlayMode));
        $("#blendingtitle").attr("currentblendnumber", APP.brushOverlayMode)
    }, 100)
}

function set_overlay_filter(a, b)
{
    APP.thefilternumber = String(a.index());
    set_Overlay_mode_for_texture(APP.thefilternumber);
    var c = $($(".overlayssettings")[a.index()]);
    if (c.css("display") == "none")
    {
        APP.mode.name = "MixedEffects";
        if (APP.isBrushing)
        {
            update_filter_mode_while_brush();
            swap_brush_fg_bg()
        }
        update_screen()
    }
    else show_ranges_options(true);
    if (!b)
    {
        $(".overlayssettings").hide();
        c.show()
    }
}

function set_Overlay_mode_for_texture(a)
{
    if (thisApp.superlab)
        if (a == "10" || a == "11") thisApp.overlaymode = 12;
        else if (a == "14") thisApp.overlaymode = 15;
    else if (a == "27") thisApp.overlaymode = 2;
    else thisApp.overlaymode = 14;
    else thisApp.overlaymode = 14
};
//---------- 12ov.js end ----------
//---------- From 13fg.js ----------
thisApp.foregroundhtml = "";

function apply_effects_for_picker_foreground()
{
    setTimeout(function()
    {
        var a = $(".fgimages")[parseInt(APP.thefilternumber)];
        APP.textures["a_brush"].updateTextureContent(a);
        APP.brushType = "alpha_grey";
        APP.brushMode2 = "emplace";
        var b = Math.max(canvas.getWidth() / 2, canvas.getHeight() / 2);
        if (canvas.getHeight() < b) b = canvas.getHeight() - canvas.getHeight() / 10;
        else if (canvas.getWidth() < b) b = canvas.getWidth() - canvas.getWidth() / 10;
        if (!canvas_pointer.isrendered)
        {
            APP.textures.a_brush.scaleTo(b, b);
            $(".fgsize #shadowblur").val(APP.textures.a_brush._scale.x);
            $(".fgsize .shadowrangevalue").html(APP.textures.a_brush._scale.x);
            $(".fgsize").removeAttr("disabled");
            Add_canvas_pointer();
            setTimeout(object_fadeOut(canvas_pointer), 500);
            update_brush_foreground_texture(canvas.getWidth() / 2, canvas.getHeight() / 2)
        }
        else update_brush_foreground_texture(canvas.getObjects().getLast().left, canvas.getObjects().getLast().top);
        update_screen()
    }, 0);
    var f = function(x)
    {
        APP.triangleBlurDeltaHorizontal = .05;
        APP.triangleBlurDeltaVertical = .05;
        render_texture_triangle_blur(x)
    };
    var c = function(x)
    {
        APP.brightness = -.2;
        APP.contrast = 1;
        APP.gamma = 1;
        APP.saturation = 0;
        APP.hueShift = 0;
        APP.redChannel = 1;
        APP.blueChannel = 1;
        APP.greenChannel = 1;
        APP.exposure = 0;
        render_texture_basic(x)
    };
    ping_pong_effects(APP.fboTexture, f, c)
}

function prepare_foreground_picker()
{
    var a = "";
    for (var i = 0; i < thisApp.foregroundcount; i++)
        if (i == 0) a =
            '<li style="position:relative" onclick="set_foreground_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<img class="fgimages" src="imgs/fg/' +
            i +
            '.png" />\n\t\t\t\t\t\t\t\t\t\t<div style="width: 48px;height: 48px;" class="overlayssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>';
        else a +=
            '<li style="position:relative" onclick="set_foreground_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<img class="fgimages" src="imgs/fg/' +
            i +
            '.png" />\n\t\t\t\t\t\t\t\t\t\t<div style="width: 48px;height: 48px;" class="overlayssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>';
    thisApp.foregroundhtml =
        '<div style="z-index: 13001;opacity:0;max-height: unset !important;height: 143px !important" class="picker-modal untouchablediv  theme-deeporange shadowpickermodal maintoolssubmenu">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick="cancel_effects()"><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a id="backtosettings" style="height: 45px; padding-top: 0px;margin-top: 0px;display:none" class="pickerclosebutton button button-fill" onclick="show_ranges_options(false)"><img class="pickertoolbarbutton" src="icons/common/back.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="center touchablediv middle-buttons-container" style="position: relative;width: 120px;height: 100%;line-height: 1px !important;background: var(--toolbar-and-buttons-background-color);background-image: var(--toolbar-and-buttons-background-image);">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middlerightbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,true)"><img class="pickertoolbarbutton" src="icons/common/forward.png" style="right: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middleleftbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,false)"><img class="pickertoolbarbutton" src="icons/common/backward.png" style="left: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div onclick="layer_blending_mode($(this))" style="height: 100%;margin-top: 12px;width: 30%;background: none !important;top: -12px;" class="middlebuttonborder">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img style="top: -12px;" class="pickertoolbarbutton" src="icons/mainmenu/overlays.png"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div currentblendnumber="" id="blendingtitle" style="position: absolute;left: 0;right: 0;width: 100%;margin: auto;top: 24px;height: 15px;bottom: 0;pointer-events: none;text-align: center;line-height: 15px;"></div></div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill " onclick="apply_screen_to_texture()"><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ul class="emojul" style="padding-top: 5px;height: 48px;z-index: 16;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' +
        a +
        '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div disabled="disabled" class="list-block fgsize" style="position: relative; direction:rtl;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 57px;overflow-y: auto;overflow-x: hidden;top: 46px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.MaskSize[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0.1" max="2" value="1" step="0.01" onchange="" onmouseup="update_brush_foreground_texture(canvas.getObjects().getLast().left,canvas.getObjects().getLast().top);update_screen();" ontouchend="update_brush_foreground_texture(canvas.getObjects().getLast().left,canvas.getObjects().getLast().top);update_screen();" oninput="APP.textures.a_brush.pscale(parseFloat($(this).val()),parseFloat($(this).val()));update_brush_foreground_texture(canvas.getObjects().getLast().left,canvas.getObjects().getLast().top);update_screen(); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="list-block optionsranges" style="position: relative; direction:rtl;display:none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 100px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.opacity[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="1" value="1" step="0.01" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushMaskOpacity=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());update_if_normal_blending()" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;" disabled="disabled">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' +
        trans.BlendAmount[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="10" value="1" step="0.1" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushOverlayAmount=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>'
}

function foreground_picker()
{
    var a = thisApp.foregroundhtml;
    var b = myApp.pickerModal(a);
    $$(".picker-modal").on("close", function()
    {
        if (canvas_pointer.isrendered)
        {
            canvas.remove(canvas.getObjects().getLast());
            canvas_pointer.isrendered = false;
            showFullAdRatio(1)
        }
        cancel_effects()
    });
    thisApp.current_picker = "foreground";
    show_loader();
    setTimeout(function()
    {
        set_filter_region_brush();
        swap_brush_fg_bg();
        APP.isBrushing = true;
        hide_loader();
        $(".picker-modal").css("opacity", "1");
        toggle_undo_redo_menu_div(0);
        $("#blendingtitle").html(converting_blending_modes_names(APP.brushOverlayMode));
        $("#blendingtitle").attr("currentblendnumber", APP.brushOverlayMode)
    }, 100)
}

function set_foreground_filter(a, b)
{
    APP.thefilternumber = String(a.index());
    var c = $($(".overlayssettings")[a.index()]);
    if (c.css("display") == "none")
    {
        APP.mode.name = "MixedEffects";
        if (APP.isBrushing)
        {
            update_filter_mode_while_brush();
            swap_brush_fg_bg()
        }
        update_screen()
    }
    else show_ranges_options(true);
    if (!b)
    {
        $(".overlayssettings").hide();
        c.show()
    }
};
//---------- 13fg.js end ----------
//---------- From 14f.js ----------
var tNOimportedfonts = {
    english: "<div style='direction:ltr;text-align:justify'>You Have To Import Fonts First. Just Copy Your Fonts To:</div>",
    arabic: "<div style='direction:rtl;text-align:justify'>\u0639\u0644\u064a\u0643 \u0625\u0636\u0627\u0641\u0629 \u062e\u0637\u0648\u0637 \u0623\u0648\u0644\u0627. \u0642\u0645 \u0628\u0646\u0633\u062e \u062e\u0637\u0648\u0637\u0643 \u0644\u0645\u062c\u0644\u062f \u0627\u0644\u062e\u0637\u0648\u0637:</div>"
};
var tfontslocation = {
    english: "<div style='direction:ltr;text-align:center;color:var(--first-font-color);'>(Phone_Storage)/" +
        thisApp.foldername + "/Fonts/</div>",
    arabic: "<div style='direction:ltr;text-align:center;color:var(--first-font-color);'>(\u0630\u0627\u0643\u0631\u0629_\u062c\u0647\u0627\u0632\u0643)/" +
        thisApp.foldername + "/Fonts/</div>"
};

function fonts_popover(a)
{
    var b = a;
    var c =
        '<div class="popover" style="width: 130px;text-align: center;margin-left: 20px;margin-top: -20px;">\n\t\t\t\t\t\t  <div class="popover-inner">\n\t\t\t\t\t\t\t<div class="list-block">\n\t\t\t\t\t\t\t  <ul>\n\t\t\t\t\t\t\t\t\t<li><a onClick="Fonts_popup(\'ArabicFonts\')" href="#" class="list-button item-link close-popover">' +
        trans.ArabicFonts[language] +
        '</a></li>\n\t\t\t\t\t\t\t\t\t<li><a onClick="Fonts_popup(\'EnglishFonts\')" href="#" class="list-button item-link close-popover">' +
        trans.EnglishFonts[language] +
        '</a></li>\n\t\t\t\t\t\t\t\t\t<li><a onClick="Imported_Fonts_popup()" href="#" class="list-button item-link close-popover">' +
        trans.MyFonts[language] +
        "</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>";
    var d = myApp.popover(c, b)
}

function Fonts_popup(a)
{
    show_loader();
    var b;
    var c = canvas.getActiveObject().getText();
    var d = canvas.getActiveObject().getFontFamily();
    var e = undefined;
    var f = "margin-right: 18px;";
    var g = "direction:rtl";
    if (a == "EnglishFonts")
    {
        b = document.styleSheets[0];
        f = "margin-left: 18px;";
        g = "direction:ltr"
    }
    else if (a == "ArabicFonts")
    {
        b = document.styleSheets[1];
        f = "margin-right: 18px;";
        g = "direction:rtl"
    }
    var h = b.cssRules.length;
    var j = "";
    for (var i = 0; i < h; i++)
    {
        var k = b.cssRules[i].cssText.split("font-family:")[1].split(";")[0].replace(/"/g, "").replace(/ /g, "");
        if (d == String(k))
        {
            currentfontstyle =
                "border: solid;color: var(--first-font-color);border-color: #e0e0e04d;border-width: 2px;border-right-width: 0px;border-left-width: 0px;border-style: ridge;background: var(--chosen-font);height: 50px;font-size: 20px;";
            e = i
        }
        else currentfontstyle = "font-size: 20px;color:var(--second-font-color)";
        if (i == 0) j = "<li style='" + currentfontstyle + "' id=\"fontis" + k +
            '">\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="item-link item-content close-popup no-ripple" onclick="canvas.getActiveObject().setFontFamily(\'' +
            k +
            '\');canvas.renderAll();" style="padding-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-media" style=\'' +
            f + ";font-size: 19px;'>" + (i + 1) +
            '- </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="margin-right: 16px;margin-left: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;left: 0;right: 0;position: absolute;bottom: 0%;margin: auto;height: 100%;line-height: 48px;font-family:' +
            k + '">' + c + "</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>";
        else j += "<li style='" + currentfontstyle + "' id=\"fontis" + k +
            '">\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="item-link item-content close-popup no-ripple" onclick="canvas.getActiveObject().setFontFamily(\'' +
            k +
            '\');canvas.renderAll();" style="padding-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-media" style=\'' +
            f + ";font-size: 19px;'>" + (i + 1) +
            '- </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="margin-right: 16px;margin-left: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;left: 0;right: 0;position: absolute;bottom: 0%;margin: auto;height: 100%;line-height: 48px;font-family:' +
            k + '">' + c + "</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>"
    }
    var l;
    if (language == "arabic") l = "rtl";
    else l = "ltr";
    var m = '<div class="popup fontspopup">\n\t\t\t\t\t\t\t<div class="navbar " style="direction: ' + l +
        ';border-bottom:solid !important;border-width: 1px !important;border-color: var(--toolbarsandbuttons-border-color) !important;">\n\t\t\t\t\t\t\t\t\t<div class="navbar-inner">\n\t\t\t\t\t\t\t\t\t\t<div class="left"><a href="#" style="" class="link close-popup">X</a></div>\n\t\t\t\t\t\t\t\t\t\t<div class="center tlayers" style="font-size: 16px;">' +
        trans[a][language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t<div class="right"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div class="content-block" style="padding: 0 0px; margin: 0px 0;height: calc(100% - 36px);' +
        g +
        '">\n\t\t\t\t\t\t  <div class="list-block fontlist" style=" margin-bottom: 0px;margin-top: 0px;height: calc(100%);">\n\t\t\t\t\t\t\t  <ul class="fontsul" style="height: 100%; overflow-y: auto;">\n\t\t\t\t\t\t\t\t' +
        j + "\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
    myApp.popup(m, true);
    $$(".fontspopup").on("opened", function()
    {
        setTimeout(function()
        {
            if (e != undefined) $(".fontsul").animate(
            {
                scrollTop: e * 48 - 24
            }, 500)
        }, 500);
        hide_loader()
    });
    $$(".fontspopup").on("close", function()
    {
        showFullAdRatio(.5)
    })
}

function Imported_Fonts_popup()
{
    show_loader();
    var a;
    var b = canvas.getActiveObject().getText();
    var c = canvas.getActiveObject().getFontFamily();
    var d = undefined;
    load_imported_fonts();
    var e = importedfontlist.length;
    var f;
    var g;
    if (language == "arabic")
    {
        f = "rtl";
        g = "margin-right: 18px;"
    }
    else
    {
        f = "ltr";
        g = "margin-left: 18px;"
    }
    var h = "";
    if (e != 0)
        for (var i = 0; i < e; i++)
        {
            var j = "";
            var k = "imported" + String(i);
            if (canvas.getActiveObject().getFontFamily() == String(k))
            {
                j =
                    "border: solid;color: var(--first-font-color);border-color: #e0e0e04d;border-width: 2px;border-right-width: 0px;border-left-width: 0px;border-style: ridge;background: #adadad1a;height: 50px;font-size: 20px;";
                d = i
            }
            else j = "font-size: 20px;color:var(--second-font-color)";
            if (i == 0) h = "<li style='" + j + "' id=\"fontis" + k +
                '">\n\t\t\t\t\t\t\t\t\t<a href="#" class="item-link item-content close-popup no-ripple" onclick="canvas.getActiveObject().setFontFamily(\'imported' +
                i + '\');canvas.renderAll();">\n\t\t\t\t\t\t\t\t\t\t<div class="item-media" style=\'' + g +
                ";font-size: 19px;font-family:e48'>" + (i + 1) +
                '- </div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="margin-right: 16px;margin-left: 0;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;left: 0;right: 0;position: absolute;bottom: 0%;margin: auto;height: 100%;line-height: 48px;font-family:imported' +
                i + '">' + b +
                '</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style="position: absolute;left: 0;right: 0; bottom: -14px; margin: auto; width: 100%;text-align: center; font-family: mainfont;color: var(--first-font-color);opacity: 0.5;font-size: 11px;height: 31px;">' +
                importedfontlist[i].name +
                "</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>";
            else h += "<li style='" + j + "' id=\"fontis" + k +
                '">\n\t\t\t\t\t\t\t\t\t<a href="#" class="item-link item-content close-popup no-ripple" onclick="canvas.getActiveObject().setFontFamily(\'imported' +
                i + '\');canvas.renderAll();">\n\t\t\t\t\t\t\t\t\t\t<div class="item-media" style=\'' + g +
                ";font-size: 19px;font-family:e48'>" + (i + 1) +
                '- </div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="margin-right: 16px;margin-left: 0;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="item-title" style="text-align: center;left: 0;right: 0;position: absolute;bottom: 0%;margin: auto;height: 100%;line-height: 48px;font-family:imported' +
                i + '">' + b +
                '</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style="position: absolute;left: 0;right: 0; bottom: -14px; margin: auto; width: 100%;text-align: center; font-family: mainfont;color: var(--first-font-color);opacity: 0.5;font-size: 11px;height: 31px;">' +
                importedfontlist[i].name +
                "</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>"
        }
    else h += '<div style="padding: 28px;white-space: pre-line;font-family:mainfont;color:red">\n\t\t\t' +
        tNOimportedfonts[language] + "\n\t\t\t" + tfontslocation[language] + "\n\t\t\t</div>\n\n\t\t\t";
    var l = '<div class="popup fontspopup">\n\t\t\t\t\t\t\t<div class="navbar " style="direction: ' + f +
        '">\n\t\t\t\t\t\t\t\t\t<div class="navbar-inner">\n\t\t\t\t\t\t\t\t\t\t<div class="left"><a href="#" style="" class="link close-popup">X</a></div>\n\t\t\t\t\t\t\t\t\t\t<div class="center tlayers" style="font-size: 16px;">' +
        trans.MyFonts[language] +
        '</div>\n\t\t\t\t\t\t\t\t\t\t<div class="right"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div class="content-block" style="padding: 0 0px; margin: 0px 0;height: calc(100% - 36px);direction: ' +
        g +
        ';">\n\t\t\t\t\t\t  <div class="list-block fontlist" style=" margin-bottom: 0px;margin-top: 0px;height: calc(100%);">\n\t\t\t\t\t\t\t  <ul class="fontsul" style="height: 100%; overflow-y: auto;">\n\t\t\t\t\t\t\t\t' +
        h + "\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
    myApp.popup(l, true);
    $$(".fontspopup").on("opened", function()
    {
        setTimeout(function()
        {
            if (d != undefined) $(".fontsul").animate(
            {
                scrollTop: d * 48 - 24
            }, 500)
        }, 500);
        hide_loader()
    });
    $$(".fontspopup").on("close", function()
    {
        showFullAdRatio(.5)
    })
};
//---------- 14f.js end ----------
//---------- From 15importfonts.js ----------
var filelist;
var importedfontlist = [];

function prepare_font_folder_and_list_files()
{
    createfolder(cordova.file.externalRootDirectory, thisApp.foldername)
}

function createfolder(b, c)
{
    window.resolveLocalFileSystemURL(b, function createDirectory(a)
    {
        a.getDirectory(c,
        {
            create: true
        }, createdirsuccess, creatdirfailed)
    });

    function createdirsuccess()
    {
        console.log("folder1 was created");
        createfolder2(cordova.file.externalRootDirectory + "/" + thisApp.foldername, "Fonts")
    }

    function creatdirfailed(a)
    {
        console.log("error" + a)
    }
}

function createfolder2(b, c)
{
    window.resolveLocalFileSystemURL(b, function createDirectory(a)
    {
        a.getDirectory(c,
        {
            create: true
        }, createdirsuccess, creatdirfailed)
    });

    function createdirsuccess()
    {
        console.log("folder2 was created");
        add_working_fonts_to_list()
    }

    function creatdirfailed(a)
    {
        console.log("error" + a)
    }
}

function add_working_fonts_to_list()
{
    listDir(cordova.file.externalRootDirectory + "/" + thisApp.foldername + "/Fonts")
}

function listDir(g)
{
    window.resolveLocalFileSystemURL(g, function(e)
    {
        var f = e.createReader();
        f.readEntries(function(a)
        {
            console.log(a);
            filelist = a;
            importedfontlist = [];
            for (i = 0; i < filelist.length; i++)
            {
                console.log("2414");
                if (filelist[i].isFile)
                {
                    var b = filelist[i].name;
                    var c = b.split(".");
                    var d = c[c.length - 1];
                    if (d == "ttf" || d == "otf" || d == "ttf" || d == "woff2" || d == "woff")
                        importedfontlist.push(
                        {
                            name: filelist[i].name,
                            fullPath: cordova.file.externalRootDirectory + filelist[i].fullPath
                        })
                }
            }
            load_imported_fonts()
        }, function(a)
        {
            console.log(a)
        })
    }, function(a)
    {
        console.log(a)
    })
}

function load_imported_fonts()
{
    var a = importedfontlist.length;
    var b = "";
    if (a > 0)
        for (i = 0; i < a; i++) b += "@font-face {\n\t\t\t\t\t\t\t\tfont-family: 'imported" + i +
            "';\n\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tsrc: url('" +
            importedfontlist[i].fullPath + "');\n\t\t\t\t\t\t\t}";
    $("#importedfonts").html(b)
}

function Refresh_fonts()
{
    show_loader();
    prepare_font_folder_and_list_files2()
}

function prepare_font_folder_and_list_files2()
{
    createfolder3(cordova.file.externalRootDirectory, thisApp.foldername)
}

function createfolder3(b, c)
{
    window.resolveLocalFileSystemURL(b, function createDirectory(a)
    {
        a.getDirectory(c,
        {
            create: true
        }, createdirsuccess, creatdirfailed)
    });

    function createdirsuccess()
    {
        console.log("folder1 was created");
        createfolder33(cordova.file.externalRootDirectory + "/" + thisApp.foldername, "Fonts")
    }

    function creatdirfailed(a)
    {
        console.log("error" + a)
    }
}

function createfolder33(b, c)
{
    window.resolveLocalFileSystemURL(b, function createDirectory(a)
    {
        a.getDirectory(c,
        {
            create: true
        }, createdirsuccess, creatdirfailed)
    });

    function createdirsuccess()
    {
        console.log("folder2 was created");
        add_working_fonts_to_list2()
    }

    function creatdirfailed(a)
    {
        console.log("error" + a)
    }
}

function add_working_fonts_to_list2()
{
    listDir2(cordova.file.externalRootDirectory + "/" + thisApp.foldername + "/Fonts")
}

function listDir2(g)
{
    window.resolveLocalFileSystemURL(g, function(e)
    {
        var f = e.createReader();
        f.readEntries(function(a)
        {
            console.log(a);
            filelist = a;
            importedfontlist = [];
            for (i = 0; i < filelist.length; i++)
            {
                console.log("2414");
                if (filelist[i].isFile)
                {
                    var b = filelist[i].name;
                    var c = b.split(".");
                    var d = c[c.length - 1];
                    if (d == "ttf" || d == "otf" || d == "ttf" || d == "woff2" || d == "woff")
                        importedfontlist.push(
                        {
                            name: filelist[i].name,
                            fullPath: cordova.file.externalRootDirectory + filelist[i].fullPath
                        })
                }
            }
            load_imported_fonts2()
        }, function(a)
        {
            console.log(a)
        })
    }, function(a)
    {
        console.log(a)
    })
}

function load_imported_fonts2()
{
    var a = importedfontlist.length;
    var b = "";
    if (a > 0)
        for (i = 0; i < a; i++) b += "@font-face {\n\t\t\t\t\t\t\t\tfont-family: 'imported" + i +
            "';\n\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tsrc: url('" +
            importedfontlist[i].fullPath + "');\n\t\t\t\t\t\t\t}";
    if (canvas.getActiveObject()) font_modal($("#theimfonts"));
    $("#importedfonts").html(b)
};
//---------- 15importfonts.js end ----------
//---------- From 16dabs.js ----------
var DATABASE;

function openDatabaseFile()
{
    var b = {};
    b.name = "effects.db";
    b.androidDatabaseImplementation = 2;
    b.androidLockWorkaround = 1;
    b.location = "default";
    DATABASE = window.sqlitePlugin.openDatabase(b, function on_db_creation_success(a)
    {}, function on_db_creation_fail(a)
    {})
}

function createDatabase()
{
    executeSQLite("CREATE DATABASE my_db;", function() {}, function(a) {})
}

function executeSQLite(b, c, d)
{
    DATABASE.executeSql(b, [], function(a)
    {
        c(a)
    }, function(a)
    {
        d(a)
    })
}

function createSavingTable()
{
    executeSQLite("CREATE TABLE " + "Saves" + "(" + "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "savename CHAR(70)      NOT NULL," + "savedataurl TEXT              ," + "savejson TEXT              ," +
        "canvassettings TEXT              " + ");")
}

function executeSQLiteTransaction(d, e, f)
{
    DATABASE.transaction(function(c)
    {
        c.executeSql(d, [], function(a, b)
        {
            e(b)
        }, function(a)
        {
            f(a)
        })
    }, function(a) {})
}

function getting_dataurl_and_canvasjson(a, b)
{
    if (!b) show_loader();
    var c = APP.app._canvas.toDataURL();
    var d = JSON.stringify(canvas.toJSON());
    var e = {
        direction_var: thisApp.canvasdir,
        currentrequiredaction: thisApp.currentrequiredaction,
        width: canvas.getWidth(),
        height: canvas.getHeight()
    };
    e = JSON.stringify(e);
    check_if_save_is_there_and_do_whatis_needed(a, c, d, e, function()
    {
        if (!b) hide_loader()
    })
}

function check_if_save_is_there_and_do_whatis_needed(b, c, d, e, f)
{
    var g = "SELECT savename FROM Saves WHERE savename='" + b + "'";
    this.executeSQLite(g, function(a)
    {
        if (a.rows.length == 0) AddNewSaves(b, c, d, e, f);
        else editingoldsave(b, c, d, e, f)
    })
}

function AddNewSaves(a, b, c, d, e)
{
    var f = "INSERT INTO Saves (savename,savedataurl,savejson,canvassettings)\n\t\t\t\t\t\tVALUES ('" + a + "','" + b +
        "','" + c + "','" + d + "')";
    this.executeSQLite(f, function() {});
    if (e) e()
}

function editingoldsave(a, b, c, d, e)
{
    var f = "UPDATE Saves\n\t\t\t\t\t\tSET savedataurl = '" + b + "',\n\t\t\t\t\t\t\tsavejson = '" + c +
        "',\n\t\t\t\t\t\t\tcanvassettings = '" + d + "'\n\t\t\t\t\t\tWHERE savename = '" + a + "'";
    this.executeSQLite(f, function() {});
    if (e) e()
}

function delete_old_save(a, b)
{
    var c = "DELETE FROM Saves\n\t\t\t\t\t\tWHERE savename='" + a + "'";
    this.executeSQLite(c, function() {});
    if (b) b()
}
thisApp.savesarray = [];

function showing_saves(d)
{
    this.executeSQLiteTransaction("SELECT * FROM Saves;", function(a)
    {
        var b = [];
        for (var i = 0; i < a.rows.length; i++)
        {
            var c = a.rows.item(i);
            b.push(c)
        }
        thisApp.savesarray = b;
        if (d) d()
    }, function(a)
    {
        "showing saves failed"
    })
}

function put_settings_to_use()
{
    thisApp.dbsettings = JSON.parse(thisApp.settings[0].dbsettings);
    language = thisApp.dbsettings.language;
    thisApp.canvasdir = thisApp.dbsettings.direction_var;
    thisApp.controlpadding = thisApp.dbsettings.controlpadding;
    thisApp.noads = thisApp.dbsettings.noads;
    thisApp.allowedsaveslotes = thisApp.dbsettings.allowedsaveslotes;
    thisApp.undoredomax = thisApp.dbsettings.undoredomax;
    thisApp.currentpage = thisApp.dbsettings.currentpage;
    thisApp.doingnow = thisApp.dbsettings.doingnow
}

function save_settings_to_db()
{
    var a;
    if (language == "arabic") a = "rtl";
    else a = "ltr";
    thisApp.dbsettings = {
        language: language,
        direction_var: a,
        controlpadding: thisApp.controlpadding,
        noads: thisApp.noads,
        allowedsaveslotes: thisApp.allowedsaveslotes,
        undoredomax: thisApp.undoredomax,
        currentpage: thisApp.currentpage,
        doingnow: thisApp.doingnow
    }
}

function createSettingsTable()
{
    executeSQLite("CREATE TABLE " + "settings" + "(" + "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "settings CHAR(70)      NOT NULL," + "dbsettings TEXT      NOT NULL," +
        "direction_var CHAR(70)      NOT NULL," + "controlpadding CHAR(70)              ," +
        "int1 INT              ," + "int2 INT              ," + "int3 INT              ," +
        "text1 TEXT              ," + "text2 TEXT              ," + "text3 TEXT              " + ");")
}

function check_if_settings_is_there(b)
{
    var c = "SELECT settings FROM settings WHERE settings='settingsarethere'";
    this.executeSQLite(c, function(a)
    {
        if (a.rows.length == 0)
        {
            language = thisApp.devicelanguage;
            if (language == "arabic") thisApp.canvasdir = "rtl";
            else thisApp.canvasdir = "ltr";
            thisApp.controlpadding = 0;
            thisApp.noads = false;
            thisApp.allowedsaveslotes = 4;
            thisApp.undoredomax = 10;
            thisApp.currentpage = "indexpage";
            thisApp.doingnow = "nothing";
            show_or_hide_ads();
            CreateAppSettings(function()
            {
                load_index_text();
                navigator.splashscreen.hide();
                hide_loader()
            })
        }
        else showing_settings(function()
        {
            put_settings_to_use();
            show_or_hide_ads();
            load_index_text();
            navigator.splashscreen.hide();
            hide_loader();
            document.addEventListener("resume", onResume, false)
        })
    })
}

function CreateAppSettings(a)
{
    save_settings_to_db();
    var b =
        "INSERT INTO settings (settings,dbsettings,direction_var,controlpadding)\n\t\t\t\t\t\tVALUES ('settingsarethere','" +
        JSON.stringify(thisApp.dbsettings) + "','" + thisApp.canvasdir + "','" + thisApp.controlpadding + "')";
    this.executeSQLite(b, function() {});
    if (a) a()
}

function change_app_language(a)
{
    language = a;
    if (language == "arabic") thisApp.canvasdir = "rtl";
    else thisApp.canvasdir = "ltr";
    if (thisApp.frontpagecontainstext) load_index_text();
    Edit_current_settings()
}

function Edit_current_settings(a)
{
    save_settings_to_db();
    var b = "UPDATE settings\n\t\t\t\t\t\tSET dbsettings = '" + JSON.stringify(thisApp.dbsettings) +
        "',\n\t\t\t\t\t\t\tdirection_var = '" + thisApp.canvasdir + "',\n\t\t\t\t\t\t\tcontrolpadding = '" + thisApp.controlpadding +
        "'\n\t\t\t\t\t\tWHERE settings = 'settingsarethere'";
    this.executeSQLite(b, function() {});
    if (a) a()
}
thisApp.settings = [];

function showing_settings(d)
{
    this.executeSQLiteTransaction("SELECT * FROM settings;", function(a)
    {
        var b = [];
        for (var i = 0; i < a.rows.length; i++)
        {
            var c = a.rows.item(i);
            b.push(c)
        }
        thisApp.settings = b;
        if (d) d()
    }, function(a)
    {
        "showing saves failed"
    })
};
//---------- 16dabs.js end ----------