var T=(d,u,i)=>new Promise((c,t)=>{var m=a=>{try{l(i.next(a))}catch(r){t(r)}},b=a=>{try{l(i.throw(a))}catch(r){t(r)}},l=a=>a.done?c(a.value):Promise.resolve(a.value).then(m,b);l((i=i.apply(d,u)).next())});import{u as S,c as w,T as x,d as B,$ as e,s as C}from"./bootstrap-Ceic6WnM.js";import{a3 as $,W as V,J as k,ad as N,aj as P,m as f,af as p,an as v,ag as _,a9 as s,aY as y,ao as h,ax as g,P as L,ae as A}from"../jse/index-index-C2oJb5Cc.js";const F={class:"text-muted-foreground"},D=$({name:"AuthenticationCodeLogin",__name:"code-login",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(d,{expose:u,emit:i}){const c=d,t=i,m=S(),[b,l]=w(V({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:k(()=>c.formSchema),showDefaultActions:!1}));function a(){return T(this,null,function*(){const{valid:o}=yield l.validate(),n=yield l.getValues();o&&t("submit",{code:n==null?void 0:n.code,phoneNumber:n==null?void 0:n.phoneNumber})})}function r(){m.push(c.loginPath)}return u({getFormApi:()=>l}),(o,n)=>(N(),P("div",null,[f(x,null,{desc:p(()=>[v("span",F,[_(o.$slots,"subTitle",{},()=>[h(g(o.subTitle||s(e)("authentication.codeSubtitle")),1)])])]),default:p(()=>[_(o.$slots,"title",{},()=>[h(g(o.title||s(e)("authentication.welcomeBack"))+" 📲 ",1)])]),_:3}),f(s(b)),f(s(B),{class:y([{"cursor-wait":o.loading},"w-full"]),loading:o.loading,onClick:a},{default:p(()=>[_(o.$slots,"submitButtonText",{},()=>[h(g(o.submitButtonText||s(e)("common.login")),1)])]),_:3},8,["class","loading"]),f(s(B),{class:"mt-4 w-full",variant:"outline",onClick:n[0]||(n[0]=E=>r())},{default:p(()=>[h(g(s(e)("common.back")),1)]),_:1})]))}}),q=$({name:"CodeLogin",__name:"code-login",setup(d){const u=L(!1),i=k(()=>[{component:"VbenInput",componentProps:{placeholder:e("authentication.mobile")},fieldName:"phoneNumber",label:e("authentication.mobile"),rules:C().min(1,{message:e("authentication.mobileTip")}).refine(t=>/^\d{11}$/.test(t),{message:e("authentication.mobileErrortip")})},{component:"VbenPinInput",componentProps:{createText:t=>t>0?e("authentication.sendText",[t]):e("authentication.sendCode"),placeholder:e("authentication.code")},fieldName:"code",label:e("authentication.code"),rules:C().min(1,{message:e("authentication.codeTip")})}]);function c(t){return T(this,null,function*(){console.log(t)})}return(t,m)=>(N(),A(s(D),{"form-schema":i.value,loading:u.value,onSubmit:c},null,8,["form-schema","loading"]))}});export{q as default};
