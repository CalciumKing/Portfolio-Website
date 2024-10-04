"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[806,87],{9679:function(e,t,n){n.d(t,{$0:function(){return o},Kz:function(){return a},Vz:function(){return c},pF:function(){return u},r:function(){return s},v3:function(){return r},zT:function(){return i}});const i=function(e){e.closest(".ct-media-container, .ct-dynamic-media").dataset.state="playing"},o=function(e){e&&(e.matches('iframe[src*="youtu"]')?e.contentWindow.postMessage(JSON.stringify({event:"command",func:"mute"}),"*"):e.matches('iframe[src*="vimeo"]')&&e.contentWindow.postMessage(JSON.stringify({method:"setMuted",value:!0}),"*"))},a=function(e){e&&(e.matches("video")?e.play():e.matches('iframe[src*="youtu"]')?e.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo"}),"*"):e.matches('iframe[src*="vimeo"]')&&e.contentWindow.postMessage(JSON.stringify({method:"play"}),"*"))},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};e&&(e.matches("video[autoplay]")||e.matches('iframe[src*="youtu"][src*="autoplay=1"]')||e.matches('iframe[src*="vimeo"][src*="autoplay=1"]')?(t(),a(e)):n())},c=function(e){e.closest(".ct-media-container, .ct-dynamic-media").dataset.state="paused"},s=function(e){if(e)if(e.matches("video"))e.pause();else if(e.matches('iframe[src*="youtu"]'))e.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo"}),"*");else if(e.matches('iframe[src*="vimeo"]'))e.contentWindow.postMessage(JSON.stringify({method:"pause"}),"*");else if(e.matches("iframe")){const t=e.src;e.src="",e.src=t}},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(e)return e.matches("video")?(t("ready"),e.addEventListener("play",(function(){return t("play")})),void e.addEventListener("pause",(function(){return t("pause")}))):e.matches('iframe[src*="youtu"]')?(window.addEventListener("message",(function(n){if(n.data&&n.source===e.contentWindow)try{const e=JSON.parse(n.data);"onStateChange"===e.event&&(1===e.info&&t("play"),2===e.info&&t("pause"))}catch(n){}})),void e.addEventListener("load",(function(){e.contentWindow.postMessage(JSON.stringify({event:"listening",id:1,channel:"widget"}),"*"),e.contentWindow.postMessage(JSON.stringify({event:"command",func:"addEventListener",args:["onStateChange"],id:1,channel:"widget"}),"*"),t("ready")}))):void(e.matches('iframe[src*="vimeo"]')&&window.addEventListener("message",(function(n){if(n.data&&n.source===e.contentWindow)try{const i=JSON.parse(n.data);"ready"===i.event&&(e.contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:"pause"}),"*"),e.contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:"play"}),"*"),t(i.event)),"pause"!==i.event&&"play"!==i.event||t(i.event)}catch(n){}})))}},4087:function(e,t,n){n.r(t),n.d(t,{fetchVideoBy:function(){return d},mount:function(){return p}});var i=n(9679),o=n(9257),a=n(2248);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u={},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=c({ignoreVideoOptions:!1},t);let n=ct_localizations.ajax_url+"?action=blocksy_get_image_video_component&media="+e;return t.ignoreVideoOptions&&(n+="&ignore_video_options=true"),new Promise((function(e){(function(e){return u[e]?new Promise((function(t){t(u[e]),u[e]=u[e].clone()})):new Promise((function(t){return fetch(e).then((function(n){t(n),u[e]=n.clone()}))}))})(n).then((function(t){200===t.status&&t.json().then((function(t){let{success:n,data:i}=t;n&&e(i)}))}))}))},f=function(e){e.querySelector(".ct-video-indicator").classList.add("loading"),d(e.dataset.mediaId).then((function(t){const n=document.createElement("div");n.innerHTML=t.html;const a=n.firstChild;e.insertAdjacentElement("beforeend",a);const r=e.querySelector("video,iframe"),s=r.closest(".flexy-container[data-autoplay]"),u=null==s?void 0:s.flexy;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=c({onPause:function(){},onPlay:function(){},onReady:function(){}},t),e.isListeningForStateChanges||(e.isListeningForStateChanges=!0,(0,i.pF)(e,(function(n){"pause"===n&&((0,i.Vz)(e),t.onPause()),"play"===n&&(t.onPlay(),(0,i.zT)(e)),"ready"===n&&t.onReady()})))}(r,{onPlay:function(){setTimeout((function(){e.querySelector(".ct-video-indicator").classList.remove("loading")}),120),u&&(u.options=c(c({},u.options),{},{autoplay:!1,_autoplay:!1}))},onPause:function(){u&&(u.options=c(c({},u.options),{},{autoplay:parseInt(s.dataset.autoplay),_autoplay:parseInt(s.dataset.autoplay)}),u.state=c(c({},u.state),{},{lastTimeAnimated:(new Date).getTime()}))},onReady:function(){(0,o.O)()&&(0,i.$0)(r),(0,i.Kz)(r)}})}))},l=function(e){const t=ct_localizations.dynamic_styles_selectors.find((function(e){return".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]"===e.selector}));t&&(0,a.Xr)(t.url).then((function(){f(e)}))};ctEvents.on("blocksy:frontend:flexy:slide-change",(function(e){let{instance:t,payload:n}=e;[...t.sliderContainer.querySelectorAll("video,iframe")].map((function(e){return(0,i.r)(e)}));const o=t.sliderContainer.children[n.currentIndex].querySelector(".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]");if(!o)return;const a=o.querySelector("video,iframe");a?(0,i.v3)(a):m(o,{performVisibilityCheck:!1})})),ctEvents.on("blocksy:ajax:filters:done",(function(){[...document.querySelectorAll(".ct-media-container[data-media-id]")].map((function(e){m(e)}))}));const m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=c({performVisibilityCheck:!0},t),!e.matches('[data-state*="autoplay"]'))return;let n=!0;if(t.performVisibilityCheck&&e.closest(".flexy-items")){const t=e.getBoundingClientRect(),i=e.closest(".flexy-items").getBoundingClientRect();n=t.left>=i.left&&t.left<=i.left+i.width&&t.top>=i.top&&t.top<=i.top+i.height}n&&(e.removeAttribute("data-state"),l(e))};let y=!1;const p=function(e,t){let{event:n}=t;if(!n||"scroll"===n.type){if(y)return;y=!0;const e=function(){[...document.querySelectorAll(".ct-media-container[data-media-id]")].map((function(e){m(e)}))};return ctEvents.on("blocksy:frontend:init",(function(){e()})),void e()}const o=e.querySelector("video,iframe");o?e.matches('[data-state="playing"]')?(0,i.r)(o):(0,i.Kz)(o):l(e)}}}]);