/**
 * MyCylinder
 * @constructor
 */


 function MyCylinder(scene, args) {
 	CGFobject.call(this,scene);
    this.topCap=parseFloat(args[5]);
    this.bottomCap=parseFloat(args[6]);
    this.scene=scene;
     this.cylinder = new MyCylinderNoTops(scene, args);

  if (this.topCap == 1) 
        this.topCircle = new Circle(this.scene, this.slices);

  if (this.bottomCap == 1)
        this.bottomCircle = new Circle(this.scene, this.slices);



 }
 
MyCylinder.prototype = Object.create(CGFobject.prototype);
MyCylinder.prototype.constructor = MyCylinder;


 MyCylinder.prototype.display = function() {


  this.scene.pushMatrix();
  this.scene.scale(1, 1, this.height);
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