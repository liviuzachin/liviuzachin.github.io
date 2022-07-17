const L=function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))h(u);new MutationObserver(u=>{for(const r of u)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&h(c)}).observe(document,{childList:!0,subtree:!0});function y(u){const r={};return u.integrity&&(r.integrity=u.integrity),u.referrerpolicy&&(r.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?r.credentials="include":u.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(u){if(u.ep)return;u.ep=!0;const r=y(u);fetch(u.href,r)}};L();var E=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function O(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var T={exports:{}};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function(f,b){(function(h,u){f.exports=u()})(E,function(){return function(y){var h={};function u(r){if(h[r])return h[r].exports;var c=h[r]={exports:{},id:r,loaded:!1};return y[r].call(c.exports,c,c.exports,u),c.loaded=!0,c.exports}return u.m=y,u.c=h,u.p="",u(0)}([function(y,h,u){Object.defineProperty(h,"__esModule",{value:!0});var r=function(){function o(s,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,e,i){return e&&o(s.prototype,e),i&&o(s,i),s}}();function c(o,s){if(!(o instanceof s))throw new TypeError("Cannot call a class as a function")}var v=u(1),d=u(3),a=function(){function o(s,e){c(this,o),v.initializer.load(this,e,s),this.begin()}return r(o,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||!this.pause.status||(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!e.currentElContent||e.currentElContent.length===0?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.currentElContent,e.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(e,i){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),l=1;if(this.pause.status===!0){this.setPauseStatus(e,i,!0);return}this.timeout=setTimeout(function(){i=d.htmlParser.typeHtmlChars(e,i,n);var p=0,m=e.substr(i);if(m.charAt(0)==="^"&&/^\^\d+/.test(m)){var k=1;m=/\d+/.exec(m)[0],k+=m.length,p=parseInt(m),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,i)+e.substring(i+k),n.toggleBlinking(!0)}if(m.charAt(0)==="`"){for(;e.substr(i+l).charAt(0)!=="`"&&(l++,!(i+l>e.length)););var g=e.substring(0,i),C=e.substring(g.length+1,i+l),w=e.substring(i+l+1);e=g+C+w,l--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),i>=e.length?n.doneTyping(e,i):n.keepTyping(e,i,l),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},p)},t)}},{key:"keepTyping",value:function(e,i,n){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),i+=n;var t=e.substr(0,i);this.replaceText(t),this.typewrite(e,i)}},{key:"doneTyping",value:function(e,i){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){n.backspace(e,i)},this.backDelay))}},{key:"backspace",value:function(e,i){var n=this;if(this.pause.status===!0){this.setPauseStatus(e,i,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=d.htmlParser.backSpaceHtmlChars(e,i,n);var l=e.substr(0,i);if(n.replaceText(l),n.smartBackspace){var p=n.strings[n.arrayPos+1];p&&l===p.substr(0,i)?n.stopNum=i:n.stopNum=0}i>n.stopNum?(i--,n.backspace(e,i)):i<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],i))},t)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,i,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=i}},{key:"toggleBlinking",value:function(e){!this.cursor||this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){!this.shuffle||(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:this.contentType==="html"?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;!this.isInput||(this.el.addEventListener("focus",function(i){e.stop()}),this.el.addEventListener("blur",function(i){e.el.value&&e.el.value.length!==0||e.start()}))}},{key:"insertCursor",value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),o}();h.default=a,y.exports=h.default},function(y,h,u){Object.defineProperty(h,"__esModule",{value:!0});var r=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},c=function(){function i(n,t){for(var l=0;l<t.length;l++){var p=t[l];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(n,p.key,p)}}return function(n,t,l){return t&&i(n.prototype,t),l&&i(n,l),n}}();function v(i){return i&&i.__esModule?i:{default:i}}function d(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}var a=u(2),o=v(a),s=function(){function i(){d(this,i)}return c(i,[{key:"load",value:function(t,l,p){if(typeof p=="string"?t.el=document.querySelector(p):t.el=p,t.options=r({},o.default,l),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=t.isInput?!1:t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(w){return w.trim()}),typeof t.options.stringsElement=="string"?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var m=Array.prototype.slice.apply(t.stringsElement.children),k=m.length;if(k)for(var g=0;g<k;g+=1){var C=m[g];t.strings.push(C.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var g in t.strings)t.sequence[g]=g;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var l="";return t.attr?l=t.el.getAttribute(t.attr):t.isInput?l=t.el.value:t.contentType==="html"?l=t.el.innerHTML:l=t.el.textContent,l}},{key:"appendAnimationCss",value:function(t){var l="data-typed-js-css";if(!!t.autoInsertCss&&!(!t.showCursor&&!t.fadeOut)&&!document.querySelector("["+l+"]")){var p=document.createElement("style");p.type="text/css",p.setAttribute(l,!0);var m="";t.showCursor&&(m+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),t.fadeOut&&(m+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),p.length!==0&&(p.innerHTML=m,document.body.appendChild(p))}}}]),i}();h.default=s;var e=new s;h.initializer=e},function(y,h){Object.defineProperty(h,"__esModule",{value:!0});var u={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(c){},onComplete:function(c){},preStringTyped:function(c,v){},onStringTyped:function(c,v){},onLastStringBackspaced:function(c){},onTypingPaused:function(c,v){},onTypingResumed:function(c,v){},onReset:function(c){},onStop:function(c,v){},onStart:function(c,v){},onDestroy:function(c){}};h.default=u,y.exports=h.default},function(y,h){Object.defineProperty(h,"__esModule",{value:!0});var u=function(){function d(a,o){for(var s=0;s<o.length;s++){var e=o[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}return function(a,o,s){return o&&d(a.prototype,o),s&&d(a,s),a}}();function r(d,a){if(!(d instanceof a))throw new TypeError("Cannot call a class as a function")}var c=function(){function d(){r(this,d)}return u(d,[{key:"typeHtmlChars",value:function(o,s,e){if(e.contentType!=="html")return s;var i=o.substr(s).charAt(0);if(i==="<"||i==="&"){var n="";for(i==="<"?n=">":n=";";o.substr(s+1).charAt(0)!==n&&(s++,!(s+1>o.length)););s++}return s}},{key:"backSpaceHtmlChars",value:function(o,s,e){if(e.contentType!=="html")return s;var i=o.substr(s).charAt(0);if(i===">"||i===";"){var n="";for(i===">"?n="<":n="&";o.substr(s-1).charAt(0)!==n&&(s--,!(s<0)););s--}return s}}]),d}();h.default=c;var v=new c;h.htmlParser=v}])})})(T);var _=O(T.exports);(function(){const f=(a="",o=!1)=>(a=a.trim(),o?[...document.querySelectorAll(a)]:document.querySelector(a)),b=(a,o,s,e=!1)=>{let i=f(o,e);i&&(e?i.forEach(n=>n.addEventListener(a,s)):i.addEventListener(a,s))},y=(a,o)=>{a.addEventListener("scroll",o)};let h=f(".nav--main .nav-link",!0);const u=()=>{let a=window.scrollY+200;h.forEach(o=>{if(!o.hash)return;let s=f(o.hash);!s||(a>=s.offsetTop&&a<=s.offsetTop+s.offsetHeight?o.classList.add("active"):o.classList.remove("active"))})};window.addEventListener("load",u),y(document,u);let r=f("#header");if(r){const a=()=>{window.scrollY>100?r.classList.add("header--scrolled"):r.classList.remove("header--scrolled")};window.addEventListener("load",a),y(document,a)}let c=f(".back-to-top");if(c){const a=()=>{window.scrollY>100?c.classList.add("active"):c.classList.remove("active")};window.addEventListener("load",a),y(document,a)}b("click",".nav-toggle",function(a){f("body").classList.toggle("has-mobile-nav"),this.classList.toggle("active")}),b("click",".nav--main li > a",function(a){const o=f("body");o.classList.contains("has-mobile-nav")&&(o.classList.toggle("has-mobile-nav"),f(".nav-toggle").classList.toggle("active"))},!0),window.addEventListener("load",()=>{if(window.location.hash){const a=f(window.location.hash);a&&a.scrollIntoView()}});const v=f(".typed");if(v){let a=v.getAttribute("data-typed-items");a=a.split(","),new _(".typed",{strings:a,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}let d=f("#preloader");d&&window.addEventListener("load",()=>{d.remove()})})();
