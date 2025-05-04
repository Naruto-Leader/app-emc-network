import{aZ as b,a_ as l,a$ as f,aJ as h,ag as v,aI as p,ap as d,b0 as x,b1 as S,aK as c,b2 as B,b3 as T,b4 as P,b5 as V,b6 as w}from"./index-45cc9017.js";import{f as O}from"./use-merged-state-864545a8.js";const I=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[f("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),f("svg",{height:"1em",width:"1em"})]),N=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),L=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:N,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=p(e),o=h("Icon","-icon",I,T,e,n),s=d(()=>{const{depth:r}=e,{common:{cubicBezierEaseInOut:a},self:u}=o.value;if(r!==void 0){const{color:m,[`opacity${r}Depth`]:g}=u;return{"--n-bezier":a,"--n-color":m,"--n-opacity":g}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),t=i?x("icon",d(()=>`${e.depth||"d"}`),s,e):void 0;return{mergedClsPrefix:n,mergedStyle:d(()=>{const{size:r,color:a}=e;return{fontSize:O(r),color:a}}),cssVars:i?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:o,component:s,onRender:t,themeClass:r}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&S("icon","don't wrap `n-icon` inside `n-icon`"),t==null||t(),c("i",B(this.$attrs,{role:"img",class:[`${o}-icon`,r,{[`${o}-icon--depth`]:i,[`${o}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),s?c(s):this.$slots)}}),j=b("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),l("italic",{fontStyle:"italic"}),l("underline",{textDecoration:"underline"}),l("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),D=Object.assign(Object.assign({},h.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),E=v({name:"Text",props:D,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=p(e),o=h("Typography","-text",j,V,e,n),s=d(()=>{const{depth:r,type:a}=e,u=a==="default"?r===void 0?"textColor":`textColor${r}Depth`:w("textColor",a),{common:{fontWeightStrong:m,fontFamilyMono:g,cubicBezierEaseInOut:y},self:{codeTextColor:C,codeBorderRadius:$,codeColor:z,codeBorder:R,[u]:_}}=o.value;return{"--n-bezier":y,"--n-text-color":_,"--n-font-weight-strong":m,"--n-font-famliy-mono":g,"--n-code-border-radius":$,"--n-code-text-color":C,"--n-code-color":z,"--n-code-border":R}}),t=i?x("text",d(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:n,compitableTag:P(e,["as","tag"]),cssVars:i?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,n,i;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(i=(n=this.$slots).default)===null||i===void 0?void 0:i.call(n);return this.code?c("code",{class:s,style:this.cssVars},this.delete?c("del",null,t):t):this.delete?c("del",{class:s,style:this.cssVars},t):c(this.compitableTag||"span",{class:s,style:this.cssVars},t)}});export{E as N,L as a};
