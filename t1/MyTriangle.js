/**
 * MyTriangle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTriangle(scene, args) {
	CGFobject.call(this,scene);
	this.args=args;
	this.initBuffers();
 
  	console.log(this.args);
};

MyTriangle.prototype = Object.create(CGFobject.prototype);
MyTriangle.prototype.constructor=MyTriangle;


MyTriangle.prototype.initBuffers = function () {
	console.log(this.args);
  //point1
  var args=this.args;
    var x1 = parseFloat(args[0]);
    var y1 = parseFloat(args[1]);
    var z1 = parseFloat(args[2]);
//point2
    var x2 = parseFloat(args[3]);
    var y2 = parseFloat(args[4]);
    var z2 = parseFloat(args[5]);
//point3
    var x3 = parseFloat(args[6]);
    var y3 = parseFloat(args[7]);
    var z3 = parseFloat(args[8]);


    this.vertices = [
              x1,y1,z1,
              x2,y2,z2,
              x3,y3,z3
    		];

    	this.indices = [
                1, 2, 0
            ];

    	this.normals = [
          x1,y1,z1,
          x2,y2,z2,
          x3,y3,z3
    		];

    	this.texCoords = [
    			0, 0,
    			0.5, 0,
    			0.5, 1,
    			0, 0,
    			0.5, 0,
    			0.5, 1,
    	];

    	this.primitiveType=this.scene.gl.TRIANGLES;
    	this.initGLBuffers();

};
