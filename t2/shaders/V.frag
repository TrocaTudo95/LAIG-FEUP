#ifdef GL_ES
precision highp float;
#endif

varying vec4 vFinalColor;
varying vec2 vTextureCoord;


void main() {

		gl_FragColor = vFinalColor;

}
