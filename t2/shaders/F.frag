#ifdef GL_ES
precision highp float;
#endif

varying vec4 vFinalColor;
varying vec2 vTextureCoord;
uniform float timeFactor;



void main() {

		gl_FragColor = mix(vFinalColor,vec4(0.0,1.0,0.0, 1.0),timeFactor);

}
