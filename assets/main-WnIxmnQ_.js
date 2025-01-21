import{V as v,s as h,a as s,S as w,P as f,W as g,b as p,c as d,M as C,C as y}from"./anime.es-CHPHoHaE.js";import{E as U,R as S,S as x,a as M}from"./RGBShiftShader-UoLBgeHZ.js";import"./transitions-B-yrgjAn.js";const P=`
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,b=`
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;

  uniform float uAmplitude;
  uniform float rChannel;
  uniform float gChannel;
  uniform float bChannel;
  
  float PI = 3.141592653589793238;

  void main() {
    // center the uv coordinates
    vec2 centeredUv = 2. * vUv - vec2(1.);

    // add some noise to the uv coordinates
    centeredUv += uAmplitude * 0.2 * sin(1.1 * centeredUv.yx + vec2(1.2, 0.3) + uTime);
    centeredUv += uAmplitude * 0.2 * sin(1.2 * centeredUv.yx + vec2(2.4, 0.4) + uTime);
    centeredUv += uAmplitude * 0.3 * sin(1.5 * centeredUv.yx + vec2(1.2, 1.3) + uTime);
    centeredUv += uAmplitude * 0.1 * sin(1.4 * centeredUv.yx + vec2(0.8, 1.2) + uTime);
    centeredUv += uAmplitude * 0.2 * sin(1.1 * centeredUv.yx + vec2(1.2, 0.3) + uTime);
    centeredUv += uAmplitude * 0.3 * sin(1.5 * centeredUv.yx + vec2(1.2, 1.3) + uTime);

    vec2 uvOffset = uMouse * 1.27;
    centeredUv += uvOffset;

    // grab a value for color from the noise
    float noise = cos(length(centeredUv) * PI);

    // output to the fragment
    gl_FragColor = vec4(noise * rChannel, noise * gChannel, noise * bChannel, 1.0);
  }
`,A={uTime:{value:0},uMouse:{type:"v2",value:new v},uAmplitude:{value:0},rChannel:{value:0},gChannel:{value:0},bChannel:{value:0}},e={vertexShader:P,fragmentShader:b,uniforms:A};h({reveal:!0});document.querySelector("h1").addEventListener("mouseenter",()=>{s({targets:".reveal",translateY:[0,32,-32,0],opacity:[1,0,0,1],loop:1,delay:s.stagger(48),easing:"linear",duration:720})});let i={x:.5,y:.5};const n={amplitude:5.8,speed:.02,rChannel:1,gChannel:1,bChannel:1,cameraZ:452,rgbShift:.0064},u=new w,t=new f(50,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=n.cameraZ;const a=new g;a.setSize(window.innerWidth,window.innerHeight);document.getElementById("background").appendChild(a.domElement);e.uniforms.uAmplitude.value=n.amplitude;e.uniforms.rChannel.value=n.rChannel;e.uniforms.gChannel.value=n.gChannel;e.uniforms.bChannel.value=n.bChannel;const T=new p(e),W=new d(window.innerWidth,window.innerHeight),l=new C(W,T);u.add(l);const E=new y;let o=new U(a);o.addPass(new S(u,t));let m=new x(M);m.uniforms.amount.value=n.rgbShift;o.addPass(m);function c(){requestAnimationFrame(c),e.uniforms.uTime.value=E.getElapsedTime()*n.speed,e.uniforms.uMouse.value.set(i.x,i.y),o.render()}c();window.addEventListener("mousemove",H);function H(r){i.x=r.clientX/window.innerWidth/2,i.y=(1-r.clientY/window.innerHeight)/2}window.addEventListener("resize",R,!1);function R(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),l.geometry=new d(window.innerWidth,window.innerHeight)}
