import{a3 as f,aw as m,J as k,ad as l,ae as n,af as o,ag as t,aY as d,a9 as e,aW as r,m as y,aj as C,ao as b,ax as v,F as g}from"../jse/index-index-6T_F_aab.js";import{d as p,aT as B}from"./bootstrap-D6ZMjPTL.js";const h=f({__name:"icon-button",props:{class:{},disabled:{type:Boolean,default:!1},onClick:{type:Function,default:()=>{}},tooltip:{},tooltipDelayDuration:{default:200},tooltipSide:{default:"bottom"},variant:{default:"icon"},as:{},asChild:{type:Boolean},loading:{type:Boolean},size:{}},setup(u){const s=u,i=m(),c=k(()=>!!i.tooltip||!!s.tooltip);return(a,D)=>c.value?(l(),n(e(B),{key:1,"delay-duration":a.tooltipDelayDuration,side:a.tooltipSide},{trigger:o(()=>[y(p,{class:d(e(r)("rounded-full",s.class)),disabled:a.disabled,variant:a.variant,size:"icon",onClick:a.onClick},{default:o(()=>[t(a.$slots,"default")]),_:3},8,["class","disabled","variant","onClick"])]),default:o(()=>[e(i).tooltip?t(a.$slots,"tooltip",{key:0}):(l(),C(g,{key:1},[b(v(a.tooltip),1)],64))]),_:3},8,["delay-duration","side"])):(l(),n(p,{key:0,class:d(e(r)("rounded-full",s.class)),disabled:a.disabled,variant:a.variant,size:"icon",onClick:a.onClick},{default:o(()=>[t(a.$slots,"default")]),_:3},8,["class","disabled","variant","onClick"]))}});export{h as _};