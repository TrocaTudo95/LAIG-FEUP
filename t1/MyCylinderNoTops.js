/**
 * MyCylinderNoTops
 * @constructor
 */
 function MyCylinderNoTops(scene, args) {
 	CGFobject.call(this,scene);
  //TODO
  //args[0] é a height
  //args

  this.height=args[0];
  this.bottomRadius=parseFloat(args[1]);
  this.topRadius=parseFloat(args[2]);
  this.stacks = parseFloat(args[3]);
  this.slices = parseFloat(args[4]);



 	this.initBuffers();
 };

 MyCylinderNoTops.prototype = Object.create(CGFobject.prototype);
 MyCylinderNoTops.prototype.constructor = MyCylinderNoTops;

 MyCylinderNoTops.prototype.initBuffers = function() {

	var teta=2*Math.PI/this.slices;
	var deltaRadius = (this.topRadius - this.bottomRadius) / this.stacks;
  	var delta;
 	this.vertices = [

 	];
 	this.normals=[];
	var teta=2*Math.PI/this.slices;
 	for(var j=0;j<=this.stacks;j++){
 		 delta = (deltaRadius * j) + this.bottomRadius;
 		for(var i=0;i<this.slices;i++){
 			this.vertices.push(delta * Math.cos(i*teta));
 			this.vertices.push(delta *Math.sin(i*teta));
 			this.vertices.push(j*this.height/this.stacks);
 			this.normals.push(Math.cos(i*teta));
			this.normals.push(Math.sin(i*teta));
			this.normals.push(0);
 		}
 	}


 this.indices=[];

 	for(var j=0;j<this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 			this.indices.push(j*this.slices+i);//+0.5
			this.indices.push(j*this.slices+(i+1)%this.slices);
			this.indices.push((j+1)*this.slices+i);//+0.5
 			this.indices.push(j*this.slices+i);//+0.5
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 		}
 	}

 	this.texCoords = [	];

     var s = 0;
	var t = 0;
	var s_inc = 1/this.slices;
	var t_inc = 1/this.stacks;
	for (var i = 0; i <= this.stacks; i++) {
		for (var j = 0; j < this.slices; j++) {
			this.texCoords.push(s, t);
			s += s_inc;
		}
		s = 0;
		t += t_inc;
	}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
