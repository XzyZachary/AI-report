var T=(c,l,t)=>new Promise((i,s)=>{var d=e=>{try{u(t.next(e))}catch(m){s(m)}},r=e=>{try{u(t.throw(e))}catch(m){s(m)}},u=e=>e.done?i(e.value):Promise.resolve(e.value).then(d,r);u((t=t.apply(c,l)).next())});import{c as B,u as P,T as $,d as v,$ as n,s as V}from"./bootstrap-Ceic6WnM.js";import{a3 as _,W as C,J as S,ad as k,aj as x,m as p,af as g,ag as w,a9 as o,an as F,aY as y,ao as h,ax as b,P as N,ae as A}from"../jse/index-index-C2oJb5Cc.js";const L=_({name:"ForgetPassword",__name:"forget-password",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(c,{expose:l,emit:t}){const i=c,s=t,[d,r]=B(C({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:S(()=>i.formSchema),showDefaultActions:!1})),u=P();function e(){return T(this,null,function*(){const{valid:a}=yield r.validate(),f=yield r.getValues();a&&s("submit",f)})}function m(){u.push(i.loginPath)}return l({getFormApi:()=>r}),(a,f)=>(k(),x("div",null,[p($,null,{desc:g(()=>[w(a.$slots,"subTitle",{},()=>[h(b(a.subTitle||o(n)("authentication.forgetPasswordSubtitle")),1)])]),default:g(()=>[w(a.$slots,"title",{},()=>[h(b(a.title||o(n)("authentication.forgetPassword"))+" 🤦🏻‍♂️ ",1)])]),_:3}),p(o(d)),F("div",null,[p(o(v),{class:y([{"cursor-wait":a.loading},"mt-2 w-full"]),"aria-label":"submit",onClick:e},{default:g(()=>[w(a.$slots,"submitButtonText",{},()=>[h(b(a.submitButtonText||o(n)("authentication.sendResetLink")),1)])]),_:3},8,["class"]),p(o(v),{class:"mt-4 w-full",variant:"outline",onClick:f[0]||(f[0]=R=>m())},{default:g(()=>[h(b(o(n)("common.back")),1)]),_:1})])]))}}),q=_({name:"ForgetPassword",__name:"forget-password",setup(c){const l=N(!1),t=S(()=>[{component:"VbenInput",componentProps:{placeholder:"example@example.com"},fieldName:"email",label:n("authentication.email"),rules:V().min(1,{message:n("authentication.emailTip")}).email(n("authentication.emailValidErrorTip"))}]);function i(s){console.log("reset email:",s)}return(s,d)=>(k(),A(o(L),{"form-schema":t.value,loading:l.value,onSubmit:i},null,8,["form-schema","loading"]))}});export{q as default};
