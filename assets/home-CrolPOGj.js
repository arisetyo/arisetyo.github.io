import{f as T,U as N,g as E,F as A,h as R,i as x,L as F,j as G,k as I,A as b,l as O,N as D,V as d,s as y,a as u,S as U,P as L,W as z,G as W,T as H,m as f,n as B,D as j,M as k,c as h,o as m,p as q,E as Q,R as V,d as v,e as X,q as Y}from"./transitions-Jp30fmKu.js";const J={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class K extends T{constructor(){super();const e=J;this.uniforms=N.clone(e.uniforms),this.material=new E({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new A(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,g,l){this.uniforms.tDiffuse.value=l.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},R.getTransfer(this._outputColorSpace)===x&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===F?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===G?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===I?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===b?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===O?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===D&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(g),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Z={name:"DotScreenShader",uniforms:{tDiffuse:{value:null},tSize:{value:new d(256,256)},center:{value:new d(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

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

		}`};y({reveal:!0});document.querySelectorAll(".splt").forEach(a=>{a.addEventListener("mouseenter",e=>{console.log(e.target),u({targets:a.querySelectorAll(".reveal"),translateY:[0,32,-32,0],opacity:[1,0,0,1],loop:1,delay:u.stagger(48),easing:"linear",duration:720})})});const s=new U;s.background=null;const n=new L(50,window.innerWidth/window.innerHeight,1,1e3);n.position.set(0,12,0);n.lookAt(0,0,0);const o=new z({alpha:!0});o.setSize(window.innerWidth,window.innerHeight);o.outputEncoding=void 0;document.getElementById("background").appendChild(o.domElement);const $=["portfolio/zenius.png","portfolio/goplay.png","portfolio/seqta.png","portfolio/ohdio.png","portfolio/fowab.png","portfolio/galenic.png"],c=12,i=new W;for(let a=0;a<6;a++){const e=a*Math.PI/3,l=new H().load($[a],t=>{t.wrapS=f,t.wrapT=f,t.repeat.set(1,1),t.offset.set(0,0),t.rotation=Math.PI*1.5,t.center.set(.5,.5),t.encoding=void 0}),S=new B({map:l,side:j}),p=new k(new h(8,10),S),C=c*Math.cos(e),P=c*Math.sin(e);p.position.set(C,P,0),p.lookAt(0,0,0),i.add(p)}i.rotation.z=m.degToRad(-30);s.add(i);s.add(new q(20));const r=new Q(o);r.addPass(new V(s,n));const _=new v(Z);_.uniforms.scale.value=3;r.addPass(_);const M=new v(X);M.uniforms.amount.value=.01;r.addPass(M);const ee=new K;r.addPass(ee);function ae(a){Y.timeline().to(i.rotation,{z:m.degToRad(a),duration:1.8,ease:"power2.inOut"})}function w(){requestAnimationFrame(w),i.rotation.z+=.0012,r.render()}w();window.rotateGroup=ae;window.addEventListener("resize",te,!1);function te(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),i.geometry=new h(window.innerWidth,window.innerHeight)}
