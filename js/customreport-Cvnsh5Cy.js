import{aB as d,aA as u}from"./bootstrap-DxLycCLO.js";import{_}from"./page.vue_vue_type_script_setup_true_lang-CFC6nJNK.js";import{a3 as g,P as x,ad as n,ae as B,af as o,m as i,a9 as r,ao as v,an as y,aj as f,F as C,aB as h,ax as k}from"../jse/index-index-B1xr8IwA.js";import{u as w}from"./use-modal-djJHXv7o.js";import"./icon-button.vue_vue_type_script_setup_true_lang-C2d8SVO-.js";import"./loading-DUXHLaGL.js";const b={class:"flex w-full flex-wrap justify-center"},T=g({__name:"customreport",setup(V){const l=x([]),[c,e]=w({draggable:!0,onCancel(){e.close()},onOpenChange(a){a&&m(10)},onConfirm(){d.info("onConfirm")}});function m(a){e.setState({loading:!0}),setTimeout(()=>{l.value=Array.from({length:a},(s,t)=>t+1),e.setState({loading:!1})},2e3)}const p=()=>{e.open()};return(a,s)=>(n(),B(r(_),{description:"根据已有的报告模版进行生成",title:"自定义报告"},{extra:o(()=>[i(r(u),{type:"primary",onClick:p},{default:o(()=>s[0]||(s[0]=[v("打开弹窗")])),_:1})]),default:o(()=>[i(r(c),{class:"w-1/2",title:"新建报告"},{default:o(()=>[y("div",b,[(n(!0),f(C,null,h(l.value,t=>(n(),f("div",{key:t,class:"even:bg-heavy bg-muted flex-center m-2 h-[220px] w-[30%]"},k(t),1))),128))])]),_:1})]),_:1}))}});export{T as default};
