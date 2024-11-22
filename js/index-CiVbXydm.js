var Z=Object.defineProperty;var g=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,z=(t,e)=>{for(var s in e||(e={}))j.call(e,s)&&N(t,s,e[s]);if(g)for(var s of g(e))P.call(e,s)&&N(t,s,e[s]);return t};var A=(t,e)=>{var s={};for(var a in t)j.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&g)for(var a of g(t))e.indexOf(a)<0&&P.call(t,a)&&(s[a]=t[a]);return s};import{I as aa,v as ea}from"./bootstrap-D6ZMjPTL.js";import{c as b,_ as ta}from"./icon.vue_vue_type_script_setup_true_lang-CpGDDRHR.js";import"./load-uMiYOm2W.js";import{_ as sa}from"./analytics-trends.vue_vue_type_script_setup_true_lang-CVnxwRHl.js";import{_ as la}from"./analytics-visits.vue_vue_type_script_setup_true_lang-CO1WTCeG.js";import{_ as na}from"./analytics-visits-data.vue_vue_type_script_setup_true_lang-M5YiVlMR.js";import{_ as oa}from"./analytics-visits-sales.vue_vue_type_script_setup_true_lang-DYvbDmBS.js";import{_ as ra}from"./analytics-visits-source.vue_vue_type_script_setup_true_lang-4ZyEXJoK.js";import{_ as L,a as M,b as O,c as W}from"./CardTitle.vue_vue_type_script_setup_true_lang-sS5SsNJf.js";import{a3 as f,ad as i,aj as d,ag as x,aY as ia,a9 as l,aW as Y,J as T,ae as m,af as o,ab as ca,P as E,bx as D,av as ua,V as da,a4 as fa,by as _a,bz as ma,ax as p,am as pa,m as n,ao as k,F as w,aB as V,an as q}from"../jse/index-index-6T_F_aab.js";import{_ as va,a as ga,b as ba}from"./TabsList.vue_vue_type_script_setup_true_lang-B4zYn41-.js";import"./use-echarts-DLQ-jCuv.js";const xa=b("svg:download"),ha=b("svg:card"),$a=b("svg:bell"),ya=b("svg:cake"),wa=f({__name:"CardFooter",props:{class:{}},setup(t){const e=t;return(s,a)=>(i(),d("div",{class:ia(l(Y)("flex items-center p-6 pt-0",e.class))},[x(s.$slots,"default")],2))}}),Va=f({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,s=T(()=>{const v=e,{class:c}=v;return A(v,["class"])}),a=aa(s);return(c,r)=>(i(),m(l(ea),ca(l(a),{class:l(Y)("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",e.class)}),{default:o(()=>[x(c.$slots,"default")]),_:3},16,["class"]))}}),J=f({name:"CountToAnimator",__name:"count-to-animator",props:{autoplay:{type:Boolean,default:!0},color:{default:""},decimal:{default:"."},decimals:{default:0},duration:{default:1500},endVal:{default:2021},prefix:{default:""},separator:{default:","},startVal:{default:0},suffix:{default:""},transition:{default:"linear"},useEasing:{type:Boolean,default:!0}},emits:["onStarted","onFinished"],setup(t,{expose:e,emit:s}){const a=t,c=s,r=E(a.startVal),v=E(!1);let C=D(r);const G=T(()=>K(l(C)));ua(()=>{r.value=a.startVal}),da([()=>a.startVal,()=>a.endVal],()=>{a.autoplay&&B()}),fa(()=>{a.autoplay&&B()});function B(){S(),r.value=a.endVal}function H(){r.value=a.startVal,S()}function S(){C=D(r,z({disabled:v,duration:a.duration,onFinished:()=>c("onFinished"),onStarted:()=>c("onStarted")},a.useEasing?{transition:_a[a.transition]}:{}))}function K(u){if(!u&&u!==0)return"";const{decimal:I,decimals:Q,prefix:R,separator:h,suffix:U}=a;u=Number(u).toFixed(Q),u+="";const $=u.split(".");let _=$[0];const X=$.length>1?I+$[1]:"",F=/(\d+)(\d{3})/;if(h&&!ma(h)&&_)for(;F.test(_);)_=_.replace(F,`$1${h}$2`);return R+_+X+U}return e({reset:H}),(u,I)=>(i(),d("span",{style:pa({color:u.color})},p(G.value),5))}}),y=f({name:"AnalysisChartCard",__name:"analysis-chart-card",props:{title:{}},setup(t){return(e,s)=>(i(),m(l(W),null,{default:o(()=>[n(l(M),null,{default:o(()=>[n(l(L),{class:"text-xl"},{default:o(()=>[k(p(e.title),1)]),_:1})]),_:1}),n(l(O),null,{default:o(()=>[x(e.$slots,"default")]),_:3})]),_:3}))}}),Ta={class:"card-box w-full px-4 pb-5 pt-3"},ka=f({name:"AnalysisChartsTabs",__name:"analysis-charts-tabs",props:{tabs:{default:()=>[]}},setup(t){const e=t,s=T(()=>{var a,c;return(c=(a=e.tabs)==null?void 0:a[0])==null?void 0:c.value});return(a,c)=>(i(),d("div",Ta,[n(l(ga),{"default-value":s.value},{default:o(()=>[n(l(va),null,{default:o(()=>[(i(!0),d(w,null,V(a.tabs,r=>(i(),m(l(Va),{key:r.label,value:r.value},{default:o(()=>[k(p(r.label),1)]),_:2},1032,["value"]))),128))]),_:1}),(i(!0),d(w,null,V(a.tabs,r=>(i(),m(l(ba),{key:r.label,value:r.value,class:"pt-4"},{default:o(()=>[x(a.$slots,r.value)]),_:2},1032,["value"]))),128))]),_:3},8,["default-value"])]))}}),Ca={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Ba=f({name:"AnalysisOverview",__name:"analysis-overview",props:{items:{default:()=>[]}},setup(t){return(e,s)=>(i(),d("div",Ca,[(i(!0),d(w,null,V(e.items,a=>(i(),m(l(W),{key:a.title,title:a.title,class:"w-full"},{default:o(()=>[n(l(M),null,{default:o(()=>[n(l(L),{class:"text-xl"},{default:o(()=>[k(p(a.title),1)]),_:2},1024)]),_:2},1024),n(l(O),{class:"flex items-center justify-between"},{default:o(()=>[n(l(J),{"end-val":a.value,"start-val":1,class:"text-xl",prefix:""},null,8,["end-val"]),n(l(ta),{icon:a.icon,class:"size-8 flex-shrink-0"},null,8,["icon"])]),_:2},1024),n(l(wa),{class:"justify-between"},{default:o(()=>[q("span",null,p(a.totalTitle),1),n(l(J),{"end-val":a.totalValue,"start-val":1,prefix:""},null,8,["end-val"])]),_:2},1024)]),_:2},1032,["title"]))),128))]))}}),Sa={class:"p-5"},Ia={class:"mt-5 w-full md:flex"},Ya=f({__name:"index",setup(t){const e=[{icon:ha,title:"用户量",totalTitle:"总用户量",totalValue:12e4,value:2e3},{icon:ya,title:"访问量",totalTitle:"总访问量",totalValue:5e5,value:2e4},{icon:xa,title:"下载量",totalTitle:"总下载量",totalValue:12e4,value:8e3},{icon:$a,title:"使用量",totalTitle:"总使用量",totalValue:5e4,value:5e3}],s=[{label:"流量趋势",value:"trends"},{label:"月访问量",value:"visits"}];return(a,c)=>(i(),d("div",Sa,[n(l(Ba),{items:e}),n(l(ka),{tabs:s,class:"mt-5"},{trends:o(()=>[n(sa)]),visits:o(()=>[n(la)]),_:1}),q("div",Ia,[n(l(y),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问数量"},{default:o(()=>[n(na)]),_:1}),n(l(y),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问来源"},{default:o(()=>[n(ra)]),_:1}),n(l(y),{class:"mt-5 md:mt-0 md:w-1/3",title:"访问来源"},{default:o(()=>[n(oa)]),_:1})])]))}});export{Ya as default};
