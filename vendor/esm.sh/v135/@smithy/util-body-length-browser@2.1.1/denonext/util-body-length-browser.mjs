/* esm.sh - esbuild bundle(@smithy/util-body-length-browser@2.1.1) denonext production */
var r=typeof TextEncoder=="function"?new TextEncoder:null,o=e=>{if(typeof e=="string"){if(r)return r.encode(e).byteLength;let f=e.length;for(let n=f-1;n>=0;n--){let t=e.charCodeAt(n);t>127&&t<=2047?f++:t>2047&&t<=65535&&(f+=2),t>=56320&&t<=57343&&n--}return f}else{if(typeof e.byteLength=="number")return e.byteLength;if(typeof e.size=="number")return e.size}throw new Error(`Body Length computation failed for ${e}`)};export{o as calculateBodyLength};
//# sourceMappingURL=util-body-length-browser.mjs.map