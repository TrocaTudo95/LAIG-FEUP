/**
 * MyRectangle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyRectangle(scene, args) {
	CGFobject.call(this,scene);

	this.minX=parseFloat(args[0]) || 0;
	this.maxY=parseFloat(args[1]) || 1;
	this.maxX=parseFloat(args[2]) || 1;
	this.minY=parseFloat(args[3]) || 0;
	this.initBuffers();

};


MyRectangle.prototype = Object.create(CGFobject.prototype);
MyRectangle.prototype.constructor=MyRectangle;

MyRectangle.prototype.initBuffers = function () {
	this.vertices = [
            this.minX,this.minY, 0,
			this.maxX, this.minY, 0,
			this.minX, this.maxY,0,
            this.maxX,this.maxY, 0,
			];

	this.indices = [
		0, 1, 2,
        3, 2, 1
        ];



	this.primitiveType=this.scene.gl.TRIANGLES;
	 this.normals=[
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
        ];

        this.texCoords = [
		
		this.minX, this.maxY,
		this.maxX, this.maxY,
		this.minX, this.minY,
		this.maxX, this.minY,


		];

		this.originalTexCoords=this.texCoords.slice();

	
	this.initGLBuffers();
};
