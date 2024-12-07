import{e as P,U as T,f as N,F as E,g as A,h as F,L as R,i as x,j as G,A as I,k as b,N as O,V as d,S as D,l as U,P as L,W as y,G as z,T as W,m as f,n as H,D as B,M as j,b as c,o as h,p as k,E as Q,R as V,c as m,d as X,q}from"./transitions-BQC_qXqa.js";const J={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class K extends P{constructor(){super();const e=J;this.uniforms=T.clone(e.uniforms),this.material=new N({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new E(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,g,l){this.uniforms.tDiffuse.value=l.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},A.getTransfer(this._outputColorSpace)===F&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===R?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===x?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===G?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===I?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===b?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===O&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(g),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Y={name:"DotScreenShader",uniforms:{tDiffuse:{value:null},tSize:{value:new d(256,256)},center:{value:new d(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

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

		}`},s=new D;s.background=new U(16777215);const n=new L(50,window.innerWidth/window.innerHeight,1,1e3);n.position.set(0,32,0);n.lookAt(0,0,0);const t=new y;t.setSize(window.innerWidth,window.innerHeight);t.outputEncoding=void 0;document.getElementById("background").appendChild(t.domElement);const Z=["portfolio/galenic.png","portfolio/fowab.png","portfolio/ohdio.png","portfolio/seqta.png","portfolio/goplay.png","portfolio/zenius.png"],u=12,o=new z;for(let a=0;a<6;a++){const e=a*Math.PI/3,l=new W().load(Z[a],i=>{i.wrapS=f,i.wrapT=f,i.repeat.set(1,1),i.offset.set(0,0),i.rotation=Math.PI*1.5,i.center.set(.5,.5),i.encoding=void 0}),w=new H({map:l,side:B}),p=new j(new c(8,10),w),S=u*Math.cos(e),C=u*Math.sin(e);p.position.set(S,C,0),p.lookAt(0,0,0),o.add(p)}o.rotation.z=h.degToRad(-30);s.add(o);s.add(new k(20));const r=new Q(t);r.addPass(new V(s,n));const v=new m(Y);v.uniforms.scale.value=6;r.addPass(v);const _=new m(X);_.uniforms.amount.value=.01;r.addPass(_);const $=new K;r.addPass($);function ee(a){q.timeline().to(o.rotation,{z:h.degToRad(a),duration:1.8,ease:"power2.inOut"})}function M(){requestAnimationFrame(M),o.rotation.z+=.001,r.render()}M();window.rotateGroup=ee;window.addEventListener("resize",ae,!1);function ae(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),plane.geometry=new c(window.innerWidth,window.innerHeight)}
