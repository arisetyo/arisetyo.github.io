import{s as v,a as m,S as A,P as H,W as L,G as M,T as x,R as u,d as B,D as h,M as g,c as P,e as I,B as T,f as S}from"./anime.es-CHPHoHaE.js";import{g as k}from"./transitions-B-yrgjAn.js";import{m as d}from"./module.esm-CLvO5GJR.js";import{E as C,R as q,S as F,a as O}from"./RGBShiftShader-UoLBgeHZ.js";import{O as D}from"./OutputPass-BVtf50tg.js";import{h as N,a as j}from"./data-BrnQCZJF.js";import"./cursor-CVGXRmtk.js";window.Alpine=d;d.data("data",()=>N);d.start();v({reveal:!0});document.querySelectorAll(".splt").forEach(e=>{e.addEventListener("mouseenter",a=>{const w=a.target.tagName==="h3"?[0,128,-128,0]:[0,32,-32,0];m({targets:e.querySelectorAll(".reveal"),translateY:w,opacity:[1,0,0,1],loop:1,delay:m.stagger(48),easing:"linear",duration:a.target.tagName==="H1"?960:720})})});const c=new A;c.background=null;const s=new H(50,window.innerWidth/window.innerHeight,1,1e3);s.position.set(0,12,0);s.lookAt(0,0,0);const i=new L({alpha:!0});i.setSize(window.innerWidth,window.innerHeight);i.outputEncoding=void 0;document.getElementById("background").appendChild(i.domElement);const f=12,t=new M;for(let e=0;e<6;e++){const a=e*Math.PI/3,W=new x().load(j[e],n=>{n.wrapS=u,n.wrapT=u,n.repeat.set(1,1),n.offset.set(0,0),n.rotation=Math.PI*1.5,n.center.set(.5,.5),n.encoding=void 0}),z=new B({map:W,side:h}),l=new g(new P(8,10),z),G=new I({color:16772608,metalness:.1,roughness:.1,transmission:.9,opacity:.24,transparent:!0,side:h,envMapIntensity:1}),p=new g(new T(10,12,4),G),R=f*Math.cos(a),b=f*Math.sin(a);l.position.set(0,0,0),p.position.set(0,0,-4);const o=new M;o.add(p),o.add(l),o.position.set(R,b,0),o.lookAt(0,0,0),t.add(o)}t.rotation.z=S.degToRad(-30);c.add(t);const r=new C(i);r.addPass(new q(c,s));const y=new F(O);y.uniforms.amount.value=.008;r.addPass(y);const U=new D;r.addPass(U);function Y(e){k.timeline().to(t.rotation,{z:S.degToRad(e),duration:1.8,ease:"power2.inOut"})}function E(){requestAnimationFrame(E),t.rotation.z+=.0012,t.rotation.z>=Math.PI*2&&(t.rotation.z=0),r.render()}E();window.rotateGroup=Y;window.addEventListener("resize",_,!1);function _(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),t.geometry=new P(window.innerWidth,window.innerHeight)}
