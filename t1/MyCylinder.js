/**
 * MyCylinder
 * @constructor
 */


 function MyCylinder(scene, args) {


 	CGFobject.call(this,scene);
 	this.bottomRadius=parseFloat(args[1]);
  this.topRadius=parseFloat(args[2]);
    this.topCap=parseFloat(args[5]);
    this.bottomCap=parseFloat(args[6]);
    this.height=args[0];
    this.slices = parseFloat(args[4]);
    this.scene=scene;
    this.cylinder = new MyCylinderNoTops(scene, args);
    console.log(this.slices);

  if (this.topCap == 1) 
        this.topCircle = new Circle(this.scene, this.slices);

  if (this.bottomCap == 1)
        this.bottomCircle = new Circle(this.scene, this.slices);



 }
 
MyCylinder.prototype = Object.create(CGFobject.prototype);
MyCylinder.prototype.constructor = MyCylinder;


 MyCylinder.prototype.display = function() {


  this.scene.pushMatrix();
  this.scene.scale(1, 1, 1);
  this.cylinder.display();
  this.scene.popMatrix();

  if (this.topCap == 1) {
    this.scene.pushMatrix();
    this.scene.translate(0, 0, this.height);
    this.scene.scale(this.topRadius, this.topRadius, 1);
    this.topCircle.display();
    this.scene.popMatrix();
  }

  if (this.bottomCap == 1) {
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.scale(this.bottomRadius, this.bottomRadius, 1);
    this.bottomCircle.display();
    this.scene.popMatrix();
  }
}