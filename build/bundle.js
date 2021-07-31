var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,o=!1;function c(t,e,n,l){for(;t<e;){const r=t+(e-t>>1);n(r)<=l?t=r+1:e=r}return t}function i(t,e){o?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const s=c(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;l[t]=n[s]+1;const a=s+1;n[a]=t,r=Math.max(a,r)}const s=[],a=[];let o=e.length-1;for(let t=n[r]+1;0!=t;t=l[t-1]){for(s.push(e[t-1]);o>=t;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);s.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<s.length&&a[e].claim_order>=s[n].claim_order;)n++;const l=n<s.length?s[n]:null;t.insertBefore(a[e],l)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function d(t,e,n){o&&!n?i(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function m(){return t=" ",document.createTextNode(t);var t}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){a=t}const p=[],x=[],v=[],$=[],b=Promise.resolve();let y=!1;function _(t){v.push(t)}let w=!1;const k=new Set;function j(){if(!w){w=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];g(e),E(e.$$)}for(g(null),p.length=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];k.has(e)||(k.add(e),e())}v.length=0}while(p.length);for(;$.length;)$.pop()();y=!1,w=!1,k.clear()}}function E(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const N=new Set;function C(t,e){t&&t.i&&(N.delete(t),t.i(e))}function M(t,e,n,l){if(t&&t.o){if(N.has(t))return;N.add(t),undefined.c.push((()=>{N.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function S(t){t&&t.c()}function T(t,n,s,a){const{fragment:o,on_mount:c,on_destroy:i,after_update:d}=t.$$;o&&o.m(n,s),a||_((()=>{const n=c.map(e).filter(r);i?i.push(...n):l(n),t.$$.on_mount=[]})),d.forEach(_)}function A(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,r,s,c,i,d,f=[-1]){const m=a;g(e);const h=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,r.props||{},((t,n,...l)=>{const r=l.length?l[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&I(e,t)),n})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){o=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();r.intro&&C(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),o=!1,j()}g(m)}class L{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n;return{c(){n=f("div"),n.innerHTML='<div class="flex flex-col justify-around px-8" style="flex:2;"><div><img class="h-14" src="Logo.png" alt="logo"/></div> \n    <div><h1 class="font-bold text-5xl md:text-7xl py-1">cutframe</h1> \n      <h2 class="font-bold text-gray-400 text-6xl">wireframe kit</h2></div> \n    <p class="md:text-2xl font-light text-gray-400 ">An open source wireframe kit for designers which include 350+ components and\n      200+ available in both light and dark mode.</p></div> \n  <div class="flex flex-col  flex-1 \n              md:flex-row md:content-center md:flex-initial"><a href="https://ko200.github.io/cuframes/" class="button bg-black text-white visited:text-white svelte-1gukxuf"><img src="./figma.png" alt="figma" class="svelte-1gukxuf"/> \n      <span class="text-xl svelte-1gukxuf">Get it now</span></a> \n    <a href="https://www.buymeacoffee.com/vishnukoux" class="button bg-gray-200 text-black visited:text-black svelte-1gukxuf"><img src="./Coffee.png" alt="coffee" class="svelte-1gukxuf"/> \n      <span class="text-xl svelte-1gukxuf">Buy me a coffee</span></a></div>',h(n,"class","order-1 md:ml-24 flex flex-col justify-around py-2 px-1 md:h-5/6\n            md:w-1/3 md:h-auto")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class H extends L{constructor(t){super(),O(this,t,null,B,s,{})}}function D(e){let n;return{c(){n=f("div"),n.innerHTML='<div class="bg-cir-grad px-4 flex justify-center svelte-7by31p"><img class="h-v50" src="./coverImage.png" alt="cover"/></div> \n    <div class="flex flex-col justify-around md:flex-row"><div class="stats svelte-7by31p"><h1 class="svelte-7by31p">350+</h1><h3>COMPONENTS</h3></div> \n        <div class="stats svelte-7by31p"><h1 class="svelte-7by31p">50+</h1><h3>ICONS</h3></div> \n        <div class="stats svelte-7by31p"><h1 class="svelte-7by31p">200+</h1><h3>SCREENS</h3></div></div>',h(n,"class","order-2 flex flex-col bg-black h-screen justify-around\n            md:h-5/6 py-4 md:w-1/2")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class P extends L{constructor(t){super(),O(this,t,null,D,s,{})}}function q(e){let n;return{c(){n=f("div"),n.innerHTML='<div class="m-auto flex flex-col lg:mx-12 md:w-full md:flex-row md:justify-between"><div class="md:flex"><div class="rounded-full flex justify-center"><img class="h-24 md:h-12" src="./CreatorImage.png" alt="avatar"/></div> \n      <div class="flex flex-col text-center px-16 md:px-2 my-8 md:my-0"><h1 class="font-black text-lg text-white">Vishnu Ko</h1> \n        <h3 class="font-black text-sm text-gray-400">@vishnukoux</h3></div></div> \n    <div class="flex justify-between"><img class="h-12 md:mr-2 lg:mr-4" src="./Medium.png" alt="M"/> \n      <img class="h-12 md:mr-2 lg:mr-4" src="./Insta.png" alt="I"/> \n      <img class="h-12 md:mr-2 lg:mr-4" src="./Twitter.png" alt="T"/> \n      <img class="h-12 md:mr-2 lg:mr-4" src="./Dribble.png" alt="D"/></div></div>',h(n,"class","order-3 md:order-4 flex bg-gray-700 border-gray-800 md:bg-black\n  md:border-t md:w-1/2 h-v50 md:h-1/6")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends L{constructor(t){super(),O(this,t,null,q,s,{})}}function K(e){let n;return{c(){n=f("div"),n.innerHTML='<span>Crafted with love <span class="text-red-600">❤</span> and sulaimani</span><img class="h-4 pl-2" src="./sulaimani.png" alt="tea"/>',h(n,"class","order-4 md:order-3 flex md:ml-28 text-xl  font-normal text-gray-500 py-8 md:w-1/3")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class R extends L{constructor(t){super(),O(this,t,null,K,s,{})}}function V(e){let n,l,r,s,a,o,c,g,p;return l=new H({}),s=new P({}),o=new G({}),g=new R({}),{c(){n=f("div"),S(l.$$.fragment),r=m(),S(s.$$.fragment),a=m(),S(o.$$.fragment),c=m(),S(g.$$.fragment),h(n,"class","flex flex-col justify-between md:flex-row md:flex-wrap w-screen md:h-screen")},m(t,e){d(t,n,e),T(l,n,null),i(n,r),T(s,n,null),i(n,a),T(o,n,null),i(n,c),T(g,n,null),p=!0},p:t,i(t){p||(C(l.$$.fragment,t),C(s.$$.fragment,t),C(o.$$.fragment,t),C(g.$$.fragment,t),p=!0)},o(t){M(l.$$.fragment,t),M(s.$$.fragment,t),M(o.$$.fragment,t),M(g.$$.fragment,t),p=!1},d(t){t&&u(n),A(l),A(s),A(o),A(g)}}}return new class extends L{constructor(t){super(),O(this,t,null,V,s,{})}}({target:document.body,props:{name:"world"}})}();
