import{V as c,s as w,a as d,S as g,P as p,W as S,b as x,c as y,M as U,C as P}from"./transitions-Cu1cuBhR.js";import{E as M,R as A,S as l,a as T}from"./RGBShiftShader-C2pYHn4Z.js";import{O as b}from"./OutputPass-IbxvlCVo.js";import"./cursor-CbwcxeUr.js";const E={name:"DotScreenShader",uniforms:{tDiffuse:{value:null},tSize:{value:new c(256,256)},center:{value:new c(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`},W=`
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,z=`
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAmplitude;
  
  float PI = 3.141592653589793238;

  void main() {
    // we need to center the uv coordinates
    // so that (0, 0) is in the center of the screen
    vec2 centeredUv = 2. * vUv - vec2(1.);

    // This line adds a time-varying oscillation to the centeredUv coordinates, scaled by uAmplitude and 0.4.
    
    centeredUv += uAmplitude * 0.4 * sin(1.1 * centeredUv.yx + vec2(1.2, 3.4) + uTime);
    centeredUv += uAmplitude * 0.2 * sin(5.2 * centeredUv.yx + vec2(8.4, 0.4) + uTime);
    centeredUv += uAmplitude * 0.3 * sin(3.5 * centeredUv.yx + vec2(1.2, 3.1) + uTime);
    centeredUv += uAmplitude * 0.6 * sin(0.4 * centeredUv.yx + vec2(0.8, 2.4) + uTime);

    centeredUv += uMouse * 6.95;

    // r is a cosine function of the length of the centeredUv vector
    // it means that the color will be black where the length of the centeredUv vector is 0,
    // and white where the length of the centeredUv vector is 1.
    float r = cos(length(centeredUv) * PI);

    gl_FragColor = vec4(vec3(r), 1.);
  }
`,C={uTime:{value:0},uAmplitude:{value:0},uMouse:{type:"v2",value:new c}},n={vertexShader:W,fragmentShader:z,uniforms:C};w({reveal:!0});document.querySelectorAll(".splt").forEach(e=>{e.addEventListener("mouseenter",s=>{const h=s.target.tagName==="h3"?[0,128,-128,0]:[0,32,-32,0];d({targets:e.querySelectorAll(".reveal"),translateY:h,opacity:[1,0,0,1],loop:1,delay:d.stagger(48),easing:"linear",duration:s.target.tagName==="H1"?960:720})})});let i={x:.5,y:.5};const o={amplitude:1.2,speed:.1,dotShift:.6,rgbShift:.003},v=new g,r=new p(50,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=1e3;const a=new S;a.setSize(window.innerWidth,window.innerHeight);document.getElementById("background").appendChild(a.domElement);const D=new x(n),H=new y(window.innerWidth,window.innerHeight),_=new U(H,D);v.add(_);const R=new P;let t=new M(a);t.addPass(new A(v,r));let u=new l(E);u.uniforms.scale.value=o.dotShift;t.addPass(u);let m=new l(T);m.uniforms.amount.value=o.rgbShift;t.addPass(m);let k=new b;t.addPass(k);function f(){requestAnimationFrame(f),n.uniforms.uTime.value=R.getElapsedTime()*o.speed,n.uniforms.uAmplitude.value=o.amplitude,n.uniforms.uMouse.value.set(i.x,i.y),t.render()}f();window.addEventListener("mousemove",L);function L(e){i.x=e.clientX/window.innerWidth/2*.1,i.y=(1-e.clientY/window.innerHeight)/2*.1}window.addEventListener("resize",V,!1);function V(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}
