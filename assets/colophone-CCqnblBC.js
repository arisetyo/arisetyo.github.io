import{s as M,a as w,S as B,P as F,W as A,c as g,T as I,d as p,M as h,O as R,g as f,n as T}from"./transitions-Cu1cuBhR.js";import{E as H,R as L,S as q,a as C}from"./RGBShiftShader-C2pYHn4Z.js";import{S as y,L as G}from"./ScrollTrigger-CYpJKVWP.js";import"./cursor-CbwcxeUr.js";const m=new Audio("/assets/colobg.mp3");m.loop=!0;m.volume=.1;let a=!1;document.getElementById("soundBtn").innerText="Play sound";document.getElementById("soundImg").src="/assets/volume_up.svg";M({reveal:!0});document.querySelectorAll(".splt").forEach(t=>{t.addEventListener("mouseenter",o=>{const n=o.target.tagName==="h3"?[0,128,-128,0]:[0,32,-32,0];w({targets:t.querySelectorAll(".reveal"),translateY:n,opacity:[1,0,0,1],loop:1,delay:w.stagger(48),easing:"linear",duration:o.target.tagName==="H1"?960:720})})});let d,s,i,c,l,v=0;const r=200;d=new B;d.background=null;s=new F(50,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=5;i=new A({alpha:!0});i.setSize(window.innerWidth,window.innerHeight);i.setPixelRatio(window.devicePixelRatio);i.outputEncoding=void 0;document.getElementById("background").appendChild(i.domElement);const Y=new g(window.innerWidth/r,window.innerHeight/r,Math.floor(window.innerWidth/r*10),Math.floor(window.innerHeight/r*10)),O=new I().load("/assets/colobg.jpg"),_=new p({map:O});l=new h(Y,_);d.add(l);l.position.z=window.innerWidth<=768?2:1;const j=new R(1.2,2),k=new p({color:16777215,wireframe:!0}),e=new h(j,k);e.position.z=2;d.add(e);c=new H(i);c.addPass(new L(d,s));let x=new q(C);c.addPass(x);function P(){requestAnimationFrame(P),e.rotation.x+=.001,e.rotation.y+=.001;const t=performance.now()*.001,o=l.geometry.attributes.position,n=new T;let z=.8,E=2,W=.1;for(let u=0;u<o.count;u++){n.fromBufferAttribute(o,u);const b=W*Math.sin(n.x*E+t*z);n.z=b,o.setXYZ(u,n.x,n.y,n.z)}o.needsUpdate=!0,x.uniforms.amount.value=8e-4+v,c.render()}P();f.registerPlugin(y);y.defaults({immediateRender:!1,ease:"power1.inOut"});let D=f.timeline({scrollTrigger:{trigger:"#tl-start",start:"top top",endTrigger:"#tl-finish",end:"top bottom",scrub:1}});D.from(e.position,{x:-2.2,y:.8}).to(e.scale,{x:.3,y:.3,z:.3}).to(e.rotation,{y:2.8}).to(e.position,{x:2}).to(e.position,{y:-.8}).to(e.rotation,{z:2.6}).to(e.scale,{x:.7,y:.7,z:.7});const N=new G({smooth:!0,direction:"vertical",gestureDirection:"vertical",smoothTouch:!0,touchMultiplier:2});function S(t){N.raf(t),requestAnimationFrame(S)}requestAnimationFrame(S);window.toggleMusic=()=>{a?m.pause():m.play(),a=!a,document.getElementById("soundBtn").innerText=a?"Mute sound":"Play sound",document.getElementById("soundImg").src="/assets/"+(a?"volume_off.svg":"volume_up.svg")};window.addEventListener("wheel",t=>{v=t.deltaY*6e-5});window.addEventListener("resize",X,!1);function X(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),l.geometry=new g(window.innerWidth/r,window.innerHeight/r)}