function MyEsfera(scene,args) {
	CGFobject.call(this,scene);
	this.sphere=new MySemiSphere(this.scene, args);
	this.radius = parseFloat(args[0]);
};

MyEsfera.prototype = Object.create(CGFobject.prototype);
MyEsfera.prototype.constructor=MyEsfera;



MyEsfera.prototype.display = function (){
     	this.scene.pushMatrix();
     	this.scene.scale(this.radius,this.radius,this.radius);
	 	this.sphere.display();
	 	this.scene.rotate(180*degToRad, 0, 1, 0);
	 	this.sphere.display();
     	this.scene.popMatrix();

}