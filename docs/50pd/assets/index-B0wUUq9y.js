import{d as k,b as d,j as S,h as f,w as y,o as n,c,f as _,e as I,k as T,T as B,F as m,r as N,t as C,p as H,g as L}from"./index-C7BCz1VH.js";import{u as j}from"./index-_sOQ7wsI.js";import{_ as A}from"./plugin-vueexport-helper-DlAUqK2U.js";const D=s=>(H("data-v-ac8f7b95"),s=s(),L(),s),F=D(()=>_("h3",null,"SCROLL ANIMATION",-1)),v=150,u=10,O=k({__name:"index",setup(s){const e=d(),o=d(2),{isScrolling:r,directions:x}=j(e,{behavior:"auto"}),{top:h,bottom:b}=S(x),l=f(()=>{var t;return((t=e.value)==null?void 0:t.offsetHeight)||0}),w=f(()=>l.value-(v+u)*o.value);y(()=>w.value,async t=>{!(e!=null&&e.value)||r!=null&&r.value||t>u&&(o.value+=1)});function g(){var i;const t=(v+u)*(o.value+1),p=((i=e.value)==null?void 0:i.scrollTop)||0,a=t-l.value-p;b.value&&a<=60&&(o.value+=1),h.value&&a>=130&&(o.value-=1)}return(t,p)=>(n(),c(m,null,[F,_("div",{ref_key:"wrapper",ref:e,class:"wrapper w-[300px] mx-auto pb-[150px] box-border",onScroll:g},[I(B,{name:"list"},{default:T(()=>[(n(!0),c(m,null,N(o.value,a=>(n(),c("div",{key:a,class:"brick flex items-center justify-center w-[200px] h-[150px] bg-green my-[10px] mx-auto rounded"},C(a),1))),128))]),_:1})],544)],64))}}),G=A(O,[["__scopeId","data-v-ac8f7b95"]]);export{G as default};
