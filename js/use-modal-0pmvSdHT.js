var Re=Object.defineProperty,Ye=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ae=(s,e,o)=>e in s?Re(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,v=(s,e)=>{for(var o in e||(e={}))me.call(e,o)&&ae(s,o,e[o]);if(q)for(var o of q(e))he.call(e,o)&&ae(s,o,e[o]);return s},F=(s,e)=>Ye(s,Xe(e));var z=(s,e)=>{var o={};for(var a in s)me.call(s,a)&&e.indexOf(a)<0&&(o[a]=s[a]);if(s!=null&&q)for(var a of q(s))e.indexOf(a)<0&&he.call(s,a)&&(o[a]=s[a]);return o};var R=(s,e,o)=>ae(s,typeof e!="symbol"?e+"":e,o);var ne=(s,e,o)=>new Promise((a,l)=>{var i=c=>{try{C(o.next(c))}catch(r){l(r)}},f=c=>{try{C(o.throw(c))}catch(r){l(r)}},C=c=>c.done?a(c.value):Promise.resolve(c.value).then(i,f);C((o=o.apply(s,e)).next())});import{g as re,x as xe,aD as je,aE as Ne,aF as He,aG as Ke,aH as We,aI as Je,I as ke,aJ as Ue,aK as qe,aL as Ge,aM as Qe,aN as Ze,aO as et,aP as tt,aQ as ot,d as ge,aR as st,aS as at}from"./bootstrap-D6ZMjPTL.js";import{a3 as O,ad as u,ae as m,af as y,ag as _,ak as nt,al as lt,a9 as t,R as Be,aj as ie,J as j,P as $,m as T,ai as b,ab as ce,aW as B,aY as S,W as Oe,a4 as rt,av as it,aC as ct,bC as le,at as dt,ay as Me,V as ye,v as De,ao as Y,ax as X,an as ut,aq as ve,b2 as pt,i as ft,b as Ce}from"../jse/index-index-6T_F_aab.js";import{_ as mt}from"./icon-button.vue_vue_type_script_setup_true_lang-Dv0ugu5W.js";import{V as ht}from"./loading-CDz0-jWe.js";const gt=re("ExpandIcon",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);const yt=re("ShrinkIcon",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);const vt=re("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ct=O({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(s,{emit:e}){const l=xe(s,e);return(i,f)=>(u(),m(t(je),nt(lt(t(l))),{default:y(()=>[_(i.$slots,"default")]),_:3},16))}}),_t=["data-dismissable-modal"],bt=O({__name:"DialogOverlay",setup(s){Ne();const e=Be("DISMISSABLE_MODAL_ID");return(o,a)=>(u(),ie("div",{"data-dismissable-modal":t(e),class:"bg-overlay fixed inset-0 z-[1000]"},null,8,_t))}}),wt=O({__name:"DialogContent",props:{class:{},closeClass:{},modal:{type:Boolean},open:{type:Boolean},showClose:{type:Boolean,default:!0},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["close","closed","opened","escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{expose:e,emit:o}){const a=s,l=o,i=j(()=>{const x=a,{class:r,modal:p,open:h,showClose:d}=x;return z(x,["class","modal","open","showClose"])}),f=xe(i,l),C=$(null);function c(){a.open?l("opened"):l("closed")}return e({getContentRef:()=>C.value}),(r,p)=>(u(),m(t(Je),null,{default:y(()=>[T(He,{name:"fade"},{default:y(()=>[r.open&&r.modal?(u(),m(bt,{key:0,onClick:p[0]||(p[0]=()=>l("close"))})):b("",!0)]),_:1}),T(t(Ke),ce({ref_key:"contentRef",ref:C,onAnimationend:c},t(f),{class:t(B)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%] fixed z-[1000] w-full p-6 shadow-lg outline-none sm:rounded-xl",a.class)}),{default:y(()=>[_(r.$slots,"default"),r.showClose?(u(),m(t(We),{key:0,class:S(t(B)("data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:bg-accent hover:text-accent-foreground text-foreground/80 flex-center absolute right-3 top-3 h-6 w-6 rounded-full px-1 text-lg opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",a.closeClass)),onClick:p[1]||(p[1]=()=>l("close"))},{default:y(()=>[T(t(vt),{class:"h-4 w-4"})]),_:1},8,["class"])):b("",!0)]),_:3},16,["class"])]),_:3}))}}),_e=O({__name:"DialogDescription",props:{class:{},asChild:{type:Boolean},as:{}},setup(s){const e=s,o=j(()=>{const f=e,{class:l}=f;return z(f,["class"])}),a=ke(o);return(l,i)=>(u(),m(t(Ue),ce(t(a),{class:t(B)("text-muted-foreground text-sm",e.class)}),{default:y(()=>[_(l.$slots,"default")]),_:3},16,["class"]))}}),xt=O({__name:"DialogFooter",props:{class:{}},setup(s){const e=s;return(o,a)=>(u(),ie("div",{class:S(t(B)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",e.class))},[_(o.$slots,"default")],2))}}),kt=O({__name:"DialogHeader",props:{class:{}},setup(s){const e=s;return(o,a)=>(u(),ie("div",{class:S(t(B)("flex flex-col gap-y-1.5 text-center sm:text-left",e.class))},[_(o.$slots,"default")],2))}}),be=O({__name:"DialogTitle",props:{class:{},asChild:{type:Boolean},as:{}},setup(s){const e=s,o=j(()=>{const f=e,{class:l}=f;return z(f,["class"])}),a=ke(o);return(l,i)=>(u(),m(t(qe),ce(t(a),{class:t(B)("text-lg font-semibold leading-none tracking-tight",e.class)}),{default:y(()=>[_(l.$slots,"default")]),_:3},16,["class"]))}});function Bt(s,e,o){const a=Oe({offsetX:0,offsetY:0}),l=$(!1),i=r=>{const p=r.clientX,h=r.clientY;if(!s.value)return;const d=s.value.getBoundingClientRect(),{offsetX:w,offsetY:x}=a,D=d.left,N=d.top,H=d.width,G=d.height,K=document.documentElement,Q=K.clientWidth,Z=K.clientHeight,E=-D+w,ee=-N+x,te=Q-D-H+w,oe=Z-N-G+x,L=P=>{let V=w+P.clientX-p,M=x+P.clientY-h;V=Math.min(Math.max(V,E),te),M=Math.min(Math.max(M,ee),oe),a.offsetX=V,a.offsetY=M,s.value&&(s.value.style.transform=`translate(${V}px, ${M}px)`,l.value=!0)},W=()=>{l.value=!1,document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",W)},f=()=>{const r=le(e);r&&s.value&&r.addEventListener("mousedown",i)},C=()=>{const r=le(e);r&&s.value&&r.removeEventListener("mousedown",i)},c=()=>{a.offsetX=0,a.offsetY=0;const r=le(s);r&&(r.style.transform="none")};return rt(()=>{it(()=>{o.value?f():C()})}),ct(()=>{C()}),{dragging:l,resetPosition:c,transform:a}}const Ot=O({__name:"modal",props:{modalApi:{default:void 0},bordered:{type:Boolean},cancelText:{},centered:{type:Boolean},class:{},closable:{type:Boolean},closeOnClickModal:{type:Boolean},closeOnPressEscape:{type:Boolean},confirmLoading:{type:Boolean},confirmText:{},contentClass:{},description:{},draggable:{type:Boolean},footer:{type:Boolean},footerClass:{},fullscreen:{type:Boolean},fullscreenButton:{type:Boolean},header:{type:Boolean},headerClass:{},loading:{type:Boolean},modal:{type:Boolean},openAutoFocus:{type:Boolean},showCancelButton:{type:Boolean},showConfirmButton:{type:Boolean},title:{},titleTooltip:{}},setup(s){var U,fe;const e=s,o=Ge.getComponents(),a=$(),l=$(),i=$(),f=$(),C=$(),c=dt();Me("DISMISSABLE_MODAL_ID",c);const{$t:r}=Qe(),{isMobile:p}=Ze(),h=(fe=(U=e.modalApi)==null?void 0:U.useStore)==null?void 0:fe.call(U),{bordered:d,cancelText:w,centered:x,class:D,closable:N,closeOnClickModal:H,closeOnPressEscape:G,confirmLoading:K,confirmText:Q,contentClass:Z,description:E,draggable:ee,footer:te,footerClass:oe,fullscreen:L,fullscreenButton:W,header:P,headerClass:V,loading:M,modal:Ae,openAutoFocus:$e,showCancelButton:Se,showConfirmButton:Ee,title:J,titleTooltip:de}=et(e,h),se=j(()=>L.value&&P.value||p.value),ue=j(()=>ee.value&&!se.value&&P.value),{dragging:Le,transform:Pe}=Bt(i,f,ue);ye(()=>{var n;return(n=h==null?void 0:h.value)==null?void 0:n.isOpen},n=>ne(this,null,function*(){if(n){if(yield De(),!a.value)return;const g=a.value.getContentRef();i.value=g.$el;const{offsetX:I,offsetY:A}=Pe;i.value.style.transform=`translate(${I}px, ${A}px)`}})),ye(()=>M.value,n=>{n&&l.value&&l.value.scrollTo({top:0})});function Ve(){var n;(n=e.modalApi)==null||n.setState(g=>F(v({},g),{fullscreen:!L.value}))}function Ie(n){H.value||(n.preventDefault(),n.stopPropagation())}function Te(n){G.value||n.preventDefault()}function Fe(n){$e.value||n==null||n.preventDefault()}function ze(n){const g=n.target,I=g==null?void 0:g.dataset.dismissableModal;(!H.value||I!==c)&&(n.preventDefault(),n.stopPropagation())}function pe(n){n.preventDefault(),n.stopPropagation()}return(n,g)=>{var I;return u(),m(t(Ct),{modal:!1,open:(I=t(h))==null?void 0:I.isOpen,"onUpdate:open":g[4]||(g[4]=()=>{var A;return(A=n.modalApi)==null?void 0:A.close()})},{default:y(()=>{var A;return[T(t(wt),{ref_key:"contentRef",ref:a,class:S(t(B)("left-0 right-0 top-[10vh] mx-auto flex max-h-[80%] w-[520px] flex-col p-0 sm:rounded-2xl",t(D),{"border-border border":t(d),"shadow-3xl":!t(d),"left-0 top-0 size-full max-h-full !translate-x-0 !translate-y-0":se.value,"top-1/2 !-translate-y-1/2":t(x)&&!se.value,"duration-300":!t(Le)})),modal:t(Ae),open:(A=t(h))==null?void 0:A.isOpen,"show-close":t(N),"close-class":"top-3",onCloseAutoFocus:pe,onClosed:g[2]||(g[2]=()=>{var k;return(k=n.modalApi)==null?void 0:k.onClosed()}),onEscapeKeyDown:Te,onFocusOutside:pe,onInteractOutside:Ie,onOpenAutoFocus:Fe,onOpened:g[3]||(g[3]=()=>{var k;return(k=n.modalApi)==null?void 0:k.onOpened()}),onPointerDownOutside:ze},{default:y(()=>[T(t(kt),{ref_key:"headerRef",ref:f,class:S(t(B)("px-5 py-4",{"border-b":t(d),hidden:!t(P),"cursor-move select-none":ue.value},t(V)))},{default:y(()=>[t(J)?(u(),m(t(be),{key:0,class:"text-left"},{default:y(()=>[_(n.$slots,"title",{},()=>[Y(X(t(J))+" ",1),t(de)?_(n.$slots,"titleTooltip",{key:0},()=>[T(t(tt),{"trigger-class":"pb-1"},{default:y(()=>[Y(X(t(de)),1)]),_:1})]):b("",!0)])]),_:3})):b("",!0),t(E)?(u(),m(t(_e),{key:1},{default:y(()=>[_(n.$slots,"description",{},()=>[Y(X(t(E)),1)])]),_:3})):b("",!0),!t(J)||!t(E)?(u(),m(t(ot),{key:2},{default:y(()=>[t(J)?b("",!0):(u(),m(t(be),{key:0})),t(E)?b("",!0):(u(),m(t(_e),{key:1}))]),_:1})):b("",!0)]),_:3},8,["class"]),ut("div",{ref_key:"wrapperRef",ref:l,class:S(t(B)("relative min-h-40 flex-1 overflow-y-auto p-3",t(Z),{"overflow-hidden":t(M)}))},[t(M)?(u(),m(t(ht),{key:0,class:"size-full h-auto min-h-full",spinning:""})):b("",!0),_(n.$slots,"default")],2),t(W)?(u(),m(t(mt),{key:0,class:"hover:bg-accent hover:text-accent-foreground text-foreground/80 flex-center absolute right-10 top-3 hidden size-6 rounded-full px-1 text-lg opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none sm:block",onClick:Ve},{default:y(()=>[t(L)?(u(),m(t(yt),{key:0,class:"size-3.5"})):(u(),m(t(gt),{key:1,class:"size-3.5"}))]),_:1})):b("",!0),t(te)?(u(),m(t(xt),{key:1,ref_key:"footerRef",ref:C,class:S(t(B)("flex-row items-center justify-end p-2",{"border-t":t(d)},t(oe)))},{default:y(()=>[_(n.$slots,"prepend-footer"),_(n.$slots,"footer",{},()=>[t(Se)?(u(),m(ve(t(o).DefaultButton||t(ge)),{key:0,variant:"ghost",onClick:g[0]||(g[0]=()=>{var k;return(k=n.modalApi)==null?void 0:k.onCancel()})},{default:y(()=>[_(n.$slots,"cancelText",{},()=>[Y(X(t(w)||t(r)("cancel")),1)])]),_:3})):b("",!0),t(Ee)?(u(),m(ve(t(o).PrimaryButton||t(ge)),{key:1,loading:t(K),onClick:g[1]||(g[1]=()=>{var k;return(k=n.modalApi)==null?void 0:k.onConfirm()})},{default:y(()=>[_(n.$slots,"confirmText",{},()=>[Y(X(t(Q)||t(r)("confirm")),1)])]),_:3},8,["loading"])):b("",!0)]),_(n.$slots,"append-footer")]),_:3},8,["class"])):b("",!0)]),_:3},8,["class","modal","open","show-close"])]}),_:3},8,["open"])}}});class Mt{constructor(e={}){R(this,"api");R(this,"state");R(this,"sharedData",{payload:{}});R(this,"store");const h=e,{connectedComponent:o,onBeforeClose:a,onCancel:l,onClosed:i,onConfirm:f,onOpenChange:C,onOpened:c}=h,r=z(h,["connectedComponent","onBeforeClose","onCancel","onClosed","onConfirm","onOpenChange","onOpened"]),p={bordered:!0,centered:!1,class:"",closeOnClickModal:!0,closeOnPressEscape:!0,confirmLoading:!1,contentClass:"",draggable:!1,footer:!0,footerClass:"",fullscreen:!1,fullscreenButton:!0,header:!0,headerClass:"",isOpen:!1,loading:!1,modal:!0,openAutoFocus:!1,showCancelButton:!0,showConfirmButton:!0,title:""};this.store=new st(v(v({},p),r),{onUpdate:()=>{var w,x,D;const d=this.store.state;(d==null?void 0:d.isOpen)===((w=this.state)==null?void 0:w.isOpen)?this.state=d:(this.state=d,(D=(x=this.api).onOpenChange)==null||D.call(x,!!(d!=null&&d.isOpen)))}}),this.state=this.store.state,this.api={onBeforeClose:a,onCancel:l,onClosed:i,onConfirm:f,onOpenChange:C,onOpened:c},pt(this)}batchStore(e){this.store.batch(e)}close(){var o,a,l;((l=(a=(o=this.api).onBeforeClose)==null?void 0:a.call(o))!=null?l:!0)&&this.store.setState(i=>F(v({},i),{isOpen:!1}))}getData(){var e,o;return(o=(e=this.sharedData)==null?void 0:e.payload)!=null?o:{}}onCancel(){var e,o;this.api.onCancel?(o=(e=this.api).onCancel)==null||o.call(e):this.close()}onClosed(){var e,o;this.state.isOpen||(o=(e=this.api).onClosed)==null||o.call(e)}onConfirm(){var e,o;(o=(e=this.api).onConfirm)==null||o.call(e)}onOpened(){var e,o;this.state.isOpen&&((o=(e=this.api).onOpened)==null||o.call(e))}open(){this.store.setState(e=>F(v({},e),{isOpen:!0}))}setData(e){this.sharedData.payload=e}setState(e){ft(e)?this.store.setState(e):this.store.setState(o=>v(v({},o),e))}}const we=Symbol("VBEN_MODAL_INJECT");function Pt(s={}){var C;const{connectedComponent:e}=s;if(e){const c=Oe({});return[O((p,{attrs:h,slots:d})=>(Me(we,{extendApi(w){Object.setPrototypeOf(c,w)},options:s}),Dt(c,v(v(v({},p),h),d)),()=>Ce(e,v(v({},p),h),d)),{inheritAttrs:!1,name:"VbenParentModal"}),c]}const o=Be(we,{}),a=v(v({},o.options),s);a.onOpenChange=c=>{var r,p,h;(r=s.onOpenChange)==null||r.call(s,c),(h=(p=o.options)==null?void 0:p.onOpenChange)==null||h.call(p,c)};const l=new Mt(a),i=l;i.useStore=c=>at(l.store,c);const f=O((c,{attrs:r,slots:p})=>()=>Ce(Ot,F(v(v({},c),r),{modalApi:i}),p),{inheritAttrs:!1,name:"VbenModal"});return(C=o.extendApi)==null||C.call(o,i),[f,i]}function Dt(s,e){return ne(this,null,function*(){var l;if(!e||Object.keys(e).length===0)return;yield De();const o=(l=s==null?void 0:s.store)==null?void 0:l.state;if(!o)return;const a=new Set(Object.keys(o));for(const i of Object.keys(e))a.has(i)&&!["class"].includes(i)&&console.warn(`[Vben Modal]: When 'connectedComponent' exists, do not set props or slots '${i}', which will increase complexity. If you need to modify the props of Modal, please use useVbenModal or api.`)})}export{vt as X,Pt as u};