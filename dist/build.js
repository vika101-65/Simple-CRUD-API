(()=>{var e={979:e=>{e.exports={checkRequiredFields:function(e){const{username:t,age:n,hobbies:r}=e;if(t&&n&&r&&"string"==typeof t&&"number"==typeof n&&Array.isArray(r))return 0===r.length||r.reduce(((e,t)=>"string"==typeof t&&e),!0)}}},871:(e,t,n)=>{const{v4:r}=n(768),s=[];e.exports={createUser:function(e){const{username:t,age:n,hobbies:o}=e,i={id:r(),username:t,age:n,hobbies:o};return s.push(i),JSON.stringify(i)},getOneUser:function(e){return s.find((t=>t.id===e))},getUsers:function(){return JSON.stringify(s)},changeUser:function(e,t){s.forEach(((n,r)=>{n.id===e&&(s[r]={...n,...t})}))},removeUser:function(e){s.forEach(((t,n)=>{t.id===e&&s.splice(n,1)}))}}},738:(e,t,n)=>{const r=n(147),s=n(17),o=n(37),i=n(968).version,a=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function c(e){console.log(`[dotenv@${i}][DEBUG] ${e}`)}const d={config:function(e){let t=s.resolve(process.cwd(),".env"),n="utf8";const i=Boolean(e&&e.debug),a=Boolean(e&&e.override);var u;e&&(null!=e.path&&(t="~"===(u=e.path)[0]?s.join(o.homedir(),u.slice(1)):u),null!=e.encoding&&(n=e.encoding));try{const e=d.parse(r.readFileSync(t,{encoding:n}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?(!0===a&&(process.env[t]=e[t]),i&&c(!0===a?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[t]=e[t]})),{parsed:e}}catch(e){return i&&c(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(n=a.exec(r));){const e=n[1];let r=n[2]||"";r=r.trim();const s=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===s&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),t[e]=r}return t}};e.exports.config=d.config,e.exports.parse=d.parse,e.exports=d},768:(e,t,n)=>{"use strict";n.r(t),n.d(t,{NIL:()=>x,parse:()=>h,stringify:()=>f,v1:()=>y,v3:()=>U,v4:()=>S,v5:()=>w,validate:()=>d,version:()=>O});const r=require("crypto");var s=n.n(r);const o=new Uint8Array(256);let i=o.length;function a(){return i>o.length-16&&(s().randomFillSync(o),i=0),o.slice(i,i+=16)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&c.test(e)},u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function l(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}const f=function(e,t=0){const n=l(e,t);if(!d(n))throw TypeError("Stringified UUID is invalid");return n};let p,v,g=0,m=0;const y=function(e,t,n){let r=t&&n||0;const s=t||new Array(16);let o=(e=e||{}).node||p,i=void 0!==e.clockseq?e.clockseq:v;if(null==o||null==i){const t=e.random||(e.rng||a)();null==o&&(o=p=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==i&&(i=v=16383&(t[6]<<8|t[7]))}let c=void 0!==e.msecs?e.msecs:Date.now(),d=void 0!==e.nsecs?e.nsecs:m+1;const u=c-g+(d-m)/1e4;if(u<0&&void 0===e.clockseq&&(i=i+1&16383),(u<0||c>g)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=c,m=d,v=i,c+=122192928e5;const f=(1e4*(268435455&c)+d)%4294967296;s[r++]=f>>>24&255,s[r++]=f>>>16&255,s[r++]=f>>>8&255,s[r++]=255&f;const y=c/4294967296*1e4&268435455;s[r++]=y>>>8&255,s[r++]=255&y,s[r++]=y>>>24&15|16,s[r++]=y>>>16&255,s[r++]=i>>>8|128,s[r++]=255&i;for(let e=0;e<6;++e)s[r+e]=o[e];return t||l(s)},h=function(e){if(!d(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function b(e,t,n){function r(e,r,s,o){var i;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=h(r)),16!==(null===(i=r)||void 0===i?void 0:i.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let a=new Uint8Array(16+e.length);if(a.set(r),a.set(e,r.length),a=n(a),a[6]=15&a[6]|t,a[8]=63&a[8]|128,s){o=o||0;for(let e=0;e<16;++e)s[o+e]=a[e];return s}return l(a)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}const U=b("v3",48,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),s().createHash("md5").update(e).digest()})),j={randomUUID:s().randomUUID},S=function(e,t,n){if(j.randomUUID&&!t&&!e)return j.randomUUID();const r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return l(r)},w=b("v5",80,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),s().createHash("sha1").update(e).digest()})),x="00000000-0000-0000-0000-000000000000",O=function(e){if(!d(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},968:e=>{"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}')}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=n(685),t=n(738),{changeUser:r,createUser:s,getOneUser:o,getUsers:i,removeUser:a}=n(871),{checkRequiredFields:c}=n(979),{validate:d}=n(768);t.config();const u=process.env.PORT||5e3;e.createServer(((e,t)=>{try{console.log("id",e.url.split("/"));const n=e.url.split("/");if("/api/users"===e.url&&"GET"===e.method)return t.statusCode=200,void t.end(i());if("/api/users"===e.url&&"POST"===e.method)e.on("data",(e=>{const n=JSON.parse(e);if(console.log("chunk",n),c(n))return t.statusCode=201,void t.end(s(n));t.statusCode=400,t.end("Body does not contain required fields")}));else if("api"===n[1]&&"users"===n[2]&&n[3]&&"GET"===e.method){const e=n[3].slice(1);if(!d(e))return t.statusCode=400,void t.end("UserId is invalid");if(d(e)){const n=o(e);return n?(t.statusCode=200,void t.end(JSON.stringify(n))):(t.statusCode=404,void t.end("Users doesn't exist"))}}else if("api"===n[1]&&"users"===n[2]&&n[3]&&"PUT"===e.method){const s=n[3];if(!d(s))return t.statusCode=400,void t.end("UserId is invalid");if(d(s)){if(!o(s))return t.statusCode=404,void t.end("Users doesn't exist");t.statusCode=200,e.on("data",(e=>{const n=JSON.parse(e);r(s,n),t.end(JSON.stringify(o(s)))}))}}else{if("api"!==n[1]||"users"!==n[2]||!n[3]||"DELETE"!==e.method)return t.statusCode=404,void t.end("Requests to non-existing endpoints");{const e=n[3].slice(1);if(!d(e))return t.statusCode=400,void t.end("UserId is invalid");if(d(e)){if(!o(e))return t.statusCode=404,void t.end("Users doesn't exist");a(e),t.statusCode=204,t.end()}}}}catch(e){return t.statusCode=500,void t.end("The error comes from the server side")}})).listen(u,(()=>console.log(`Lisening PORT ${u}`)))})()})();