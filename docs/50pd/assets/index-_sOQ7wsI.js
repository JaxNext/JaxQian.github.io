import{q as G,i as K,B as J,b as y,w as X,C as z,D as Q,E as N,G as ee,H as te,I as U,h as R,J as F,K as ne}from"./index-C7BCz1VH.js";function oe(e,t){let n,o,a;const s=y(!0),u=()=>{s.value=!0,a()};X(e,u,{flush:"sync"});const c=typeof t=="function"?t:t.get,r=typeof t=="function"?void 0:t.set,l=z((i,f)=>(o=i,a=f,{get(){return s.value&&(n=c(),s.value=!1),o(),n},set(p){r==null||r(p)}}));return Object.isExtensible(l)&&(l.trigger=u),l}function le(e){return ee()?(te(e),!0):!1}function _(e){return typeof e=="function"?e():G(e)}const Z=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const re=e=>e!=null,se=Object.prototype.toString,ue=e=>se.call(e)==="[object Object]",H=()=>{};function $(e,t){function n(...o){return new Promise((a,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(a).catch(s)})}return n}function ae(e,t={}){let n,o,a=H;const s=c=>{clearTimeout(c),a(),a=H};return c=>{const r=_(e),l=_(t.maxWait);return n&&s(n),r<=0||l!==void 0&&l<=0?(o&&(s(o),o=null),Promise.resolve(c())):new Promise((i,f)=>{a=t.rejectOnCancel?f:i,l&&!o&&(o=setTimeout(()=>{n&&s(n),o=null,i(c())},l)),n=setTimeout(()=>{o&&s(o),o=null,i(c())},r)})}}function ie(...e){let t=0,n,o=!0,a=H,s,u,c,r,l;!Q(e[0])&&typeof e[0]=="object"?{delay:u,trailing:c=!0,leading:r=!0,rejectOnCancel:l=!1}=e[0]:[u,c=!0,r=!0,l=!1]=e;const i=()=>{n&&(clearTimeout(n),n=void 0,a(),a=H)};return p=>{const h=_(u),w=Date.now()-t,b=()=>s=p();return i(),h<=0?(t=Date.now(),b()):(w>h&&(r||!o)?(t=Date.now(),b()):c&&(s=new Promise((T,g)=>{a=l?g:T,n=setTimeout(()=>{t=Date.now(),o=!0,T(b()),i()},Math.max(0,h-w))})),!r&&!n&&(n=setTimeout(()=>o=!0,h)),o=!1,s)}}function ce(e){return e||N()}function fe(e,t=200,n={}){return $(ae(t,n),e)}function de(e,t=200,n=!1,o=!0,a=!1){return $(ie(t,n,o,a),e)}function q(e,t=!0,n){ce()?K(e,n):t?e():J(e)}function W(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const j=Z?window:void 0;function m(...e){let t,n,o,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,a]=e,t=j):[t,n,o,a]=e,!t)return H;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],u=()=>{s.forEach(i=>i()),s.length=0},c=(i,f,p,h)=>(i.addEventListener(f,p,h),()=>i.removeEventListener(f,p,h)),r=X(()=>[W(t),_(a)],([i,f])=>{if(u(),!i)return;const p=ue(f)?{...f}:f;s.push(...n.flatMap(h=>o.map(w=>c(i,h,w,p))))},{immediate:!0,flush:"post"}),l=()=>{r(),u()};return le(l),l}function pe(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function ge(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:a=j,eventName:s="keydown",passive:u=!1,dedupe:c=!1}=o,r=pe(t);return m(a,s,i=>{i.repeat&&_(c)||r(i)&&n(i)},u)}function ve(e){const t=N(),n=oe(()=>null,()=>e?W(e):t.proxy.$el);return ne(n.trigger),K(n.trigger),n}function be(e,t={}){const n=y(!1),o=U(null);let a=0,s=!0;if(Z){const u=typeof t=="function"?{onDrop:t}:t,c=r=>{var l,i;const f=Array.from((i=(l=r.dataTransfer)==null?void 0:l.files)!=null?i:[]);return o.value=f.length===0?null:f};m(e,"dragenter",r=>{var l,i;const f=Array.from(((l=r==null?void 0:r.dataTransfer)==null?void 0:l.items)||[]).map(p=>p.kind==="file"?p.type:null).filter(re);if(u.dataTypes&&r.dataTransfer){const p=G(u.dataTypes);if(s=typeof p=="function"?p(f):p?p.some(h=>f.includes(h)):!0,!s)return}r.preventDefault(),a+=1,n.value=!0,(i=u.onEnter)==null||i.call(u,c(r),r)}),m(e,"dragover",r=>{var l;s&&(r.preventDefault(),(l=u.onOver)==null||l.call(u,c(r),r))}),m(e,"dragleave",r=>{var l;s&&(r.preventDefault(),a-=1,a===0&&(n.value=!1),(l=u.onLeave)==null||l.call(u,c(r),r))}),m(e,"drop",r=>{var l;r.preventDefault(),a=0,n.value=!1,(l=u.onDrop)==null||l.call(u,c(r),r)})}return{files:o,isOverDropZone:n}}function we(e,t={}){const{initialValue:n=!1,focusVisible:o=!1}=t,a=y(!1),s=R(()=>W(e));m(s,"focus",c=>{var r,l;(!o||(l=(r=c.target).matches)!=null&&l.call(r,":focus-visible"))&&(a.value=!0)}),m(s,"blur",()=>a.value=!1);const u=R({get:()=>a.value,set(c){var r,l;!c&&a.value?(r=s.value)==null||r.blur():c&&!a.value&&((l=s.value)==null||l.focus())}});return X(s,()=>{u.value=n},{immediate:!0,flush:"post"}),{focused:u}}const B=1;function Te(e,t={}){const{throttle:n=0,idle:o=200,onStop:a=H,onScroll:s=H,offset:u={left:0,right:0,top:0,bottom:0},eventListenerOptions:c={capture:!1,passive:!0},behavior:r="auto",window:l=j,onError:i=d=>{console.error(d)}}=t,f=y(0),p=y(0),h=R({get(){return f.value},set(d){b(d,void 0)}}),w=R({get(){return p.value},set(d){b(void 0,d)}});function b(d,A){var S,C,L;if(!l)return;const x=_(e);x&&((L=x instanceof Document?l.document.body:x)==null||L.scrollTo({top:(S=_(A))!=null?S:w.value,left:(C=_(d))!=null?C:h.value,behavior:_(r)}))}const T=y(!1),g=F({left:!0,right:!1,top:!0,bottom:!1}),E=F({left:!1,right:!1,top:!1,bottom:!1}),P=d=>{T.value&&(T.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,a(d))},O=fe(P,n+o),v=d=>{var A;if(!l)return;const S=((A=d==null?void 0:d.document)==null?void 0:A.documentElement)||(d==null?void 0:d.documentElement)||W(d),{display:C,flexDirection:L}=getComputedStyle(S),x=S.scrollLeft;E.left=x<f.value,E.right=x>f.value;const Y=Math.abs(x)<=(u.left||0),V=Math.abs(x)+S.clientWidth>=S.scrollWidth-(u.right||0)-B;C==="flex"&&L==="row-reverse"?(g.left=V,g.right=Y):(g.left=Y,g.right=V),f.value=x;let M=S.scrollTop;d===l.document&&!M&&(M=l.document.body.scrollTop),E.top=M<p.value,E.bottom=M>p.value;const I=Math.abs(M)<=(u.top||0),k=Math.abs(M)+S.clientHeight>=S.scrollHeight-(u.bottom||0)-B;C==="flex"&&L==="column-reverse"?(g.top=k,g.bottom=I):(g.top=I,g.bottom=k),p.value=M},D=d=>{var A;if(!l)return;const S=(A=d.target.documentElement)!=null?A:d.target;v(S),T.value=!0,O(d),s(d)};return m(e,"scroll",n?de(D,n,!0,!1):D,c),q(()=>{try{const d=_(e);if(!d)return;v(d)}catch(d){i(d)}}),m(e,"scrollend",P,c),{x:h,y:w,isScrolling:T,arrivedState:g,directions:E,measure(){const d=_(e);l&&d&&v(d)}}}const me={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function he(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:a={x:0,y:0},window:s=j,target:u=s,scroll:c=!0,eventFilter:r}=e;let l=null;const i=y(a.x),f=y(a.y),p=y(null),h=typeof t=="function"?t:me[t],w=v=>{const D=h(v);l=v,D&&([i.value,f.value]=D,p.value="mouse")},b=v=>{if(v.touches.length>0){const D=h(v.touches[0]);D&&([i.value,f.value]=D,p.value="touch")}},T=()=>{if(!l||!s)return;const v=h(l);l instanceof MouseEvent&&v&&(i.value=v[0]+s.scrollX,f.value=v[1]+s.scrollY)},g=()=>{i.value=a.x,f.value=a.y},E=r?v=>r(()=>w(v),{}):v=>w(v),P=r?v=>r(()=>b(v),{}):v=>b(v),O=r?()=>r(()=>T(),{}):()=>T();if(u){const v={passive:!0};m(u,["mousemove","dragover"],E,v),n&&t!=="movement"&&(m(u,["touchstart","touchmove"],P,v),o&&m(u,"touchend",g,v)),c&&t==="page"&&m(s,"scroll",O,{passive:!0})}return{x:i,y:f,sourceType:p}}function Ee(e,t={}){const{handleOutside:n=!0,window:o=j}=t,a=t.type||"page",{x:s,y:u,sourceType:c}=he(t),r=y(e??(o==null?void 0:o.document.body)),l=y(0),i=y(0),f=y(0),p=y(0),h=y(0),w=y(0),b=y(!0);let T=()=>{};return o&&(T=X([r,s,u],()=>{const g=W(r);if(!g)return;const{left:E,top:P,width:O,height:v}=g.getBoundingClientRect();f.value=E+(a==="page"?o.pageXOffset:0),p.value=P+(a==="page"?o.pageYOffset:0),h.value=v,w.value=O;const D=s.value-f.value,d=u.value-p.value;b.value=O===0||v===0||D<0||d<0||D>O||d>v,(n||!b.value)&&(l.value=D,i.value=d)},{immediate:!0}),m(document,"mouseleave",()=>{b.value=!0})),{x:s,y:u,sourceType:c,elementX:l,elementY:i,elementPositionX:f,elementPositionY:p,elementHeight:h,elementWidth:w,isOutside:b,stop:T}}function _e(e={}){const{touch:t=!0,drag:n=!0,capture:o=!1,initialValue:a=!1,window:s=j}=e,u=y(a),c=y(null);if(!s)return{pressed:u,sourceType:c};const r=f=>()=>{u.value=!0,c.value=f},l=()=>{u.value=!1,c.value=null},i=R(()=>W(e.target)||s);return m(i,"mousedown",r("mouse"),{passive:!0,capture:o}),m(s,"mouseleave",l,{passive:!0,capture:o}),m(s,"mouseup",l,{passive:!0,capture:o}),n&&(m(i,"dragstart",r("mouse"),{passive:!0,capture:o}),m(s,"drop",l,{passive:!0,capture:o}),m(s,"dragend",l,{passive:!0,capture:o})),t&&(m(i,"touchstart",r("touch"),{passive:!0,capture:o}),m(s,"touchend",l,{passive:!0,capture:o}),m(s,"touchcancel",l,{passive:!0,capture:o})),{pressed:u,sourceType:c}}function De(e=ve()){const t=U(),n=()=>{const o=W(e);o&&(t.value=o.parentElement)};return q(n),X(()=>_(e),n),t}export{we as a,De as b,he as c,be as d,_e as e,Ee as f,ge as o,Te as u};
