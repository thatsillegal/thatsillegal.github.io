import{i as _,d as k,m as p,j as x,k as N,o as V,a as w,w as o,c as l,l as z,n as U,p as f,b as d,e as g,q as M,s as h}from"./index.3944a8a6.js";const y=["sm","md","lg","xl","xxl"],$=(()=>y.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),L=(()=>y.reduce((t,e)=>(t["offset"+_(e)]={type:[String,Number],default:null},t),{}))(),E=(()=>y.reduce((t,e)=>(t["order"+_(e)]={type:[String,Number],default:null},t),{}))(),S={col:Object.keys($),offset:Object.keys(L),order:Object.keys(E)};function R(t,e,n){let s=t;if(!(n==null||n===!1)){if(e){const a=e.replace(t,"");s+=`-${a}`}return t==="col"&&(s="v-"+s),t==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const W=["auto","start","end","center","baseline","stretch"],m=k({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...$,offset:{type:[String,Number],default:null},...L,order:{type:[String,Number],default:null},...E,alignSelf:{type:String,default:null,validator:t=>W.includes(t)},...p()},setup(t,e){let{slots:n}=e;const s=x(()=>{const a=[];let r;for(r in S)S[r].forEach(i=>{const u=t[i],C=R(r,i,u);C&&a.push(C)});const c=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!c||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),a});return()=>{var a;return N(t.tag,{class:s.value},(a=n.default)==null?void 0:a.call(n))}}}),F=["sm","md","lg","xl","xxl"],b=["start","end","center"],A=["space-between","space-around","space-evenly"];function v(t,e){return F.reduce((n,s)=>(n[t+_(s)]=e(),n),{})}const H=[...b,"baseline","stretch"],P=t=>H.includes(t),B=v("align",()=>({type:String,default:null,validator:P})),q=[...b,...A],G=t=>q.includes(t),I=v("justify",()=>({type:String,default:null,validator:G})),J=[...b,...A,"stretch"],O=t=>J.includes(t),T=v("alignContent",()=>({type:String,default:null,validator:O})),j={align:Object.keys(B),justify:Object.keys(I),alignContent:Object.keys(T)},Y={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){let s=Y[t];if(n!=null){if(e){const a=e.replace(t,"");s+=`-${a}`}return s+=`-${n}`,s.toLowerCase()}}const K=k({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:P},...B,justify:{type:String,default:null,validator:G},...I,alignContent:{type:String,default:null,validator:O},...T,...p()},setup(t,e){let{slots:n}=e;const s=x(()=>{const a=[];let r;for(r in j)j[r].forEach(c=>{const i=t[c],u=D(r,c,i);u&&a.push(u)});return a.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),a});return()=>{var a;return N(t.tag,{class:["v-row",s.value]},(a=n.default)==null?void 0:a.call(n))}}}),Q="/assets/logo.3f834fa8.svg",X=h("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),Z=h("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),tt=h("div",{class:"py-14"},null,-1),et={__name:"HelloWorld",setup(t){return(e,n)=>(V(),w(M,{class:"fill-height"},{default:o(()=>[l(z,{class:"d-flex align-center text-center fill-height"},{default:o(()=>[l(U,{contain:"",height:"300",src:Q}),X,Z,tt,l(K,{class:"d-flex align-center justify-center"},{default:o(()=>[l(m,{cols:"auto"},{default:o(()=>[l(f,{href:"https://next.vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(d,{icon:"mdi-view-dashboard",size:"large",start:""}),g(" Components ")]),_:1})]),_:1}),l(m,{cols:"auto"},{default:o(()=>[l(f,{color:"primary",href:"https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:o(()=>[l(d,{icon:"mdi-speedometer",size:"large",start:""}),g(" Get Started ")]),_:1})]),_:1}),l(m,{cols:"auto"},{default:o(()=>[l(f,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(d,{icon:"mdi-account-group",size:"large",start:""}),g(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},at={__name:"Home",setup(t){return(e,n)=>(V(),w(et))}};export{at as default};
