import{U as R,R as F,d as G,e as I,L as b,f as O,g as x,A as L,h as y,N as D,s as U,a as h,S as W,P as z,W as B,G as w,T as H,i as c,j as k,D as m,M,c as N,k as Q,B as j,l as P,m as X}from"./transitions-BfleZN-e.js";import{m as d,h as q,a as V}from"./cursor-FnPbPZ8t.js";import{P as Y,F as J,E as K,R as Z,S as $,a as ee}from"./RGBShiftShader-Bbr2A1cB.js";const ae={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class te extends Y{constructor(){super();const e=ae;this.uniforms=R.clone(e.uniforms),this.material=new F({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new J(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,p){this.uniforms.tDiffuse.value=p.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},G.getTransfer(this._outputColorSpace)===I&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===b?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===O?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===x?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===L?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===y?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===D&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}window.Alpine=d;d.data("data",()=>q);d.start();U({reveal:!0});document.querySelectorAll(".splt").forEach(a=>{a.addEventListener("mouseenter",e=>{const r=e.target.tagName==="h3"?[0,128,-128,0]:[0,32,-32,0];h({targets:a.querySelectorAll(".reveal"),translateY:r,opacity:[1,0,0,1],loop:1,delay:h.stagger(48),easing:"linear",duration:e.target.tagName==="H1"?960:720})})});const g=new W;g.background=null;const o=new z(50,window.innerWidth/window.innerHeight,1,1e3);o.position.set(0,12,0);o.lookAt(0,0,0);const s=new B({alpha:!0});s.setSize(window.innerWidth,window.innerHeight);s.outputEncoding=void 0;document.getElementById("background").appendChild(s.domElement);const _=12,t=new w;for(let a=0;a<6;a++){const e=a*Math.PI/3,p=new H().load(V[a],i=>{i.wrapS=c,i.wrapT=c,i.repeat.set(1,1),i.offset.set(0,0),i.rotation=Math.PI*1.5,i.center.set(.5,.5),i.encoding=void 0}),E=new k({map:p,side:m}),u=new M(new N(8,10),E),T=new Q({color:16772608,metalness:.1,roughness:.1,transmission:.9,opacity:.24,transparent:!0,side:m,envMapIntensity:1}),f=new M(new j(10,12,4),T),A=_*Math.cos(e),v=_*Math.sin(e);u.position.set(0,0,0),f.position.set(0,0,-4);const n=new w;n.add(f),n.add(u),n.position.set(A,v,0),n.lookAt(0,0,0),t.add(n)}t.rotation.z=P.degToRad(-30);g.add(t);const l=new K(s);l.addPass(new Z(g,o));const S=new $(ee);S.uniforms.amount.value=.008;l.addPass(S);const ie=new te;l.addPass(ie);function ne(a){X.timeline().to(t.rotation,{z:P.degToRad(a),duration:1.8,ease:"power2.inOut"})}function C(){requestAnimationFrame(C),t.rotation.z+=.0012,t.rotation.z>=Math.PI*2&&(t.rotation.z=0),l.render()}C();window.rotateGroup=ne;window.addEventListener("resize",oe,!1);function oe(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),t.geometry=new N(window.innerWidth,window.innerHeight)}
