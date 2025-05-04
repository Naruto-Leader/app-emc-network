import{V as xe,d as Se,e as Ne,h as ie,r as Pe,N as Re,p as ae}from"./Popover-b1cb2cfb.js";import{am as T,af as se,ag as D,aK as d,bh as re,a5 as j,c0 as ue,ap as w,bf as H,bn as G,c1 as ke,b2 as ce,c2 as V,b1 as Ke,aG as Ie,c3 as Ce,c4 as Oe,c5 as _e,aZ as x,c6 as $e,a$ as E,bY as de,a_ as k,bj as $,bg as K,aI as De,aJ as pe,bi as oe,b0 as ze,bW as Ae,c7 as Fe,b6 as F}from"./index-45cc9017.js";import{a as Te}from"./text-d64a6c33.js";import{u as je}from"./use-merged-state-864545a8.js";import{u as Be}from"./use-keyboard-d337ca82.js";import{c as Le}from"./create-957127bb.js";import{c as Me}from"./create-ref-setter-f485918b.js";function Ee(e,r,a){if(!r)return e;const t=T(e.value);let n=null;return se(e,o=>{n!==null&&window.clearTimeout(n),o===!0?a&&!a.value?t.value=!0:n=window.setTimeout(()=>{t.value=!0},r):t.value=!1}),t}const He=D({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),fe=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),te=re("n-dropdown-menu"),Z=re("n-dropdown"),le=re("n-dropdown-option");function ne(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function Ue(e){return e.type==="group"}function ve(e){return e.type==="divider"}function We(e){return e.type==="render"}const he=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=j(Z),{hoverKeyRef:a,keyboardKeyRef:t,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:o,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:P,nodePropsRef:C,menuPropsRef:B}=r,m=j(le,null),O=j(te),U=j(ue),J=w(()=>e.tmNode.rawNode),W=w(()=>{const{value:l}=I;return ne(e.tmNode.rawNode,l)}),X=w(()=>{const{disabled:l}=e.tmNode;return l}),Y=w(()=>{if(!W.value)return!1;const{key:l,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=a,{value:z}=t,{value:ee}=n,{value:A}=o;return R!==null?A.includes(l):z!==null?A.includes(l)&&A[A.length-1]!==l:ee!==null?A.includes(l):!1}),Q=w(()=>t.value===null&&!f.value),q=Ee(Y,300,Q),L=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),M=T(!1);H(le,{enteringSubmenuRef:M});function _(){M.value=!0}function i(){M.value=!1}function h(){const{parentKey:l,tmNode:b}=e;b.disabled||c.value&&(n.value=l,t.value=null,a.value=b.key)}function u(){const{tmNode:l}=e;l.disabled||c.value&&a.value!==l.key&&h()}function s(l){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=l;b&&!ie({target:b},"dropdownOption")&&!ie({target:b},"scrollbarRail")&&(a.value=null)}function y(){const{value:l}=W,{tmNode:b}=e;c.value&&!l&&!b.disabled&&(r.doSelect(b.key,b.rawNode),r.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>q.value&&!L.value),rawNode:J,hasSubmenu:W,pending:G(()=>{const{value:l}=o,{key:b}=e.tmNode;return l.includes(b)}),childActive:G(()=>{const{value:l}=p,{key:b}=e.tmNode,R=l.findIndex(z=>b===z);return R===-1?!1:R<l.length-1}),active:G(()=>{const{value:l}=p,{key:b}=e.tmNode,R=l.findIndex(z=>b===z);return R===-1?!1:R===l.length-1}),mergedDisabled:X,renderOption:P,nodeProps:C,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:i}},render(){var e,r;const{animated:a,rawNode:t,mergedShowSubmenu:n,clsPrefix:o,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:P}=this;let C=null;if(n){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);C=d(be,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(t),O=d("div",Object.assign({class:[`${o}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),d("div",ce(B,I),[d("div",{class:[`${o}-dropdown-option-body__prefix`,p&&`${o}-dropdown-option-body__prefix--show-icon`]},[S?S(t):V(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},c?c(t):V((r=t[this.labelField])!==null&&r!==void 0?r:t.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Te,null,{default:()=>d(He,null)}):null)]),this.hasSubmenu?d(xe,null,{default:()=>[d(Se,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},a?d(ke,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return g?g({node:O,option:t}):O}}),qe=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=j(te),{renderLabelRef:a,labelFieldRef:t,nodePropsRef:n,renderOptionRef:o}=j(Z);return{labelField:t,showIcon:e,hasSubmenu:r,renderLabel:a,nodeProps:n,renderOption:o}},render(){var e;const{clsPrefix:r,hasSubmenu:a,showIcon:t,nodeProps:n,renderLabel:o,renderOption:p}=this,{rawNode:f}=this.tmNode,c=d("div",Object.assign({class:`${r}-dropdown-option`},n==null?void 0:n(f)),d("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,t&&`${r}-dropdown-option-body__prefix--show-icon`]},V(f.icon)),d("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):V((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),d("div",{class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),Ge=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:a}=this,{children:t}=e;return d(Ie,null,d(qe,{clsPrefix:a,tmNode:e,key:e.key}),t==null?void 0:t.map(n=>{const{rawNode:o}=n;return o.show===!1?null:ve(o)?d(fe,{clsPrefix:a,key:n.key}):n.isGroup?(Ke("dropdown","`group` node is not allowed to be put in `group` node."),null):d(he,{clsPrefix:a,tmNode:n,parentKey:r,key:n.key})}))}}),Ve=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return d("div",r,[e==null?void 0:e()])}}),be=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:a}=j(Z);H(te,{showIconRef:w(()=>{const n=r.value;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>n?n(c):c.icon);const{rawNode:f}=o;return n?n(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:n}=a;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,n));const{rawNode:f}=o;return ne(f,n)})})});const t=T(null);return H(Ce,null),H(Oe,null),H(ue,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:r,scrollable:a}=this,t=this.tmNodes.map(n=>{const{rawNode:o}=n;return o.show===!1?null:We(o)?d(Ve,{tmNode:n,key:n.key}):ve(o)?d(fe,{clsPrefix:r,key:n.key}):Ue(o)?d(Ge,{clsPrefix:r,tmNode:n,parentKey:e,key:n.key}):d(he,{clsPrefix:r,tmNode:n,parentKey:e,key:n.key,props:o.props,scrollable:a})});return d("div",{class:[`${r}-dropdown-menu`,a&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},a?d(_e,{contentClass:`${r}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Pe({clsPrefix:r,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ze=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[$e(),x("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),de("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),de("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),Je={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Xe=Object.keys(ae),Ye=Object.assign(Object.assign(Object.assign({},ae),Je),pe.props),lo=D({name:"Dropdown",inheritAttrs:!1,props:Ye,setup(e){const r=T(!1),a=je(K(e,"show"),r),t=w(()=>{const{keyField:i,childrenField:h}=e;return Le(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),n=w(()=>t.value.treeNodes),o=T(null),p=T(null),f=T(null),c=w(()=>{var i,h,u;return(u=(h=(i=o.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>t.value.getPath(c.value).keyPath),g=w(()=>t.value.getPath(e.value).keyPath),N=G(()=>e.keyboard&&a.value);Be({keydown:{ArrowUp:{prevent:!0,handler:X},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:J},Enter:{prevent:!0,handler:Q},Escape:U}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:P}=De(e),C=pe("Dropdown","-dropdown",Ze,Fe,e,I);H(Z,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:a,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:m}),se(a,i=>{!e.animated&&!i&&O()});function B(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),r.value=i}function O(){o.value=null,p.value=null,f.value=null}function U(){m(!1)}function J(){L("left")}function W(){L("right")}function X(){L("up")}function Y(){L("down")}function Q(){const i=q();i!=null&&i.isLeaf&&a.value&&(B(i.key,i.rawNode),m(!1))}function q(){var i;const{value:h}=t,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function L(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=t;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=q();if(y){let l;switch(i){case"down":l=y.getNext();break;case"up":l=y.getPrev();break;case"right":l=y.getChild();break;case"left":l=y.getParent();break}l&&(s=l.key)}}s!==null&&(o.value=null,p.value=s)}const M=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=C.value,{padding:y,dividerColor:l,borderRadius:b,optionOpacityDisabled:R,[F("optionIconSuffixWidth",i)]:z,[F("optionSuffixWidth",i)]:ee,[F("optionIconPrefixWidth",i)]:A,[F("optionPrefixWidth",i)]:we,[F("fontSize",i)]:me,[F("optionHeight",i)]:ye,[F("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":z,"--n-option-icon-size":ge,"--n-divider-color":l,"--n-option-opacity-disabled":R};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),_=P?ze("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),M,e):void 0;return{mergedClsPrefix:I,mergedTheme:C,tmNodes:n,mergedShow:a,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:m,cssVars:P?void 0:M,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(t,n,o,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(P=>P.rawNode)))||{},I={ref:Me(n),class:[t,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return d(be,ce(this.$attrs,I,N))},{mergedTheme:r}=this,a={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Re,Object.assign({},Ae(this.$props,Xe),a),{trigger:()=>{var t,n;return(n=(t=this.$slots).default)===null||n===void 0?void 0:n.call(t)}})}});export{He as C,lo as N};
