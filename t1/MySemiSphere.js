/**
 * MySemiSphere
 * @constructor
 */
 function MySemiSphere(scene,args) {
 	CGFobject.call(this,scene);

	this.slices = parseInt(args[2]);
	this.stacks = parseInt(args[1]); 
    this.radius = parseInt(args[0]);
     

 	this.initBuffers();
 };

 MySemiSphere.prototype = Object.create(CGFobject.prototype);
 MySemiSphere.prototype.constructor = MySemiSphere;

 MySemiSphere.prototype.initBuffers = function() {

	var teta=2*Math.PI/this.slices;
 	this.vertices = [

 	];
 	this.normals=[];
	var teta=2*Math.PI/this.slices;
 	for(var j=0;j<=this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 		    var k=Math.sqrt(1-Math.pow(j/this.stacks,2));
 			this.vertices.push(k*Math.cos(i*teta)*this.radius);
 			this.vertices.push(k*Math.sin(i*teta)*this.radius);
 			this.vertices.push(Math.sqrt(1-k*k)*this.radius);
 			this.normals.push(k*Math.cos(i*teta));
 			this.normals.push(k*Math.sin(i*teta));
 			this.normals.push(Math.sqrt(1-k*k));
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
