import{g as n,s as f,a as m,S as A,P as b,W as k,B as y,d,M as l,G as F,O as x}from"./transitions-Cu1cuBhR.js";import{S,L as W}from"./ScrollTrigger-CYpJKVWP.js";import{m as p,w as v}from"./data-0kfzCbQq.js";window.Alpine=p;p.data("data",()=>({showPopup:!1,popupId:null,imageData:v}));p.start();n.registerPlugin(S);n.to("header",{backgroundColor:"rgba(255, 238, 0, 0.96)",padding:window.innerWidth>=1440?"0 2rem":"",ease:"power2.out",scrollTrigger:{trigger:"#top-header",start:"top 0",end:"bottom -200px",scrub:!0}});n.to("#top-header",{opacity:0,ease:"power2.out",scrollTrigger:{trigger:"#top-header",start:"top 0",end:"bottom 0",scrub:!0}});n.from("span.title",{opacity:0,y:-20,ease:"power2.out",scrollTrigger:{trigger:"#top-header",start:"top -40px",end:"bottom -200px",scrub:!0}});const e={posX:-10,posY:5,posZ:-4,fov:50,lookAtX:0,lookAtY:0,lookAtZ:0,meshHeight:3,meshWidth:3,meshDepth:3},E=new W({smooth:!0,direction:"vertical",gestureDirection:"vertical",smoothTouch:!0,touchMultiplier:2});f({reveal:!0});document.querySelectorAll(".splt").forEach(i=>{i.addEventListener("mouseenter",c=>{const w=c.target.tagName==="h3"?[0,128,-128,0]:[0,32,-32,0];m({targets:i.querySelectorAll(".reveal"),translateY:w,opacity:[1,0,0,1],loop:1,delay:m.stagger(48),easing:"linear",duration:c.target.tagName==="H1"?960:720})})});const s=new A;s.background=null;const t=new b(e.fov,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(0,20,0);t.lookAt(e.lookAtX,e.lookAtY,e.lookAtZ);const a=new k({alpha:!0});a.setSize(window.innerWidth,window.innerHeight);a.outputEncoding=void 0;document.getElementById("background").appendChild(a.domElement);const g=new y(e.meshWidth,e.meshHeight,e.meshDepth),H=new d({color:16777215,wireframe:!0}),M=new l(g,H),D=new d({color:16772608}),P=new l(g,D),o=new F;o.add(P);o.add(M);const T=new x(6,2),Y=new d({color:16772608,wireframe:!0}),r=new l(T,Y);s.add(o);s.add(r);o.position.set(e.posX,e.posY,e.posZ);t.fov=e.fov;t.lookAt(e.lookAtX,e.lookAtY,e.lookAtZ);o.scale.set(e.meshWidth,e.meshHeight,e.meshDepth);r.position.set(26,2,10);n.to(r.position,{x:-8,y:-8,z:-6,ease:"power2.out",scrollTrigger:{trigger:"footer",start:"top bottom",end:"bottom top",scrub:!0}});function u(){requestAnimationFrame(u),o.rotation.x+=.001,o.rotation.y+=.001,r.rotation.x+=.002,r.rotation.y+=.002,a.render(s,t)}u();function h(i){E.raf(i),requestAnimationFrame(h)}requestAnimationFrame(h);window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)});