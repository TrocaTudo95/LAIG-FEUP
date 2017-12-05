/**
 * MyPiece
 * @constructor
 *
 * @param scene Scene
 * @param args Arguments to build the Piece
 */
 function MyPiece(scene,args) {


 	CGFobject.call(this,scene);
    this.scene=scene;
    var argsc=[0.5,1,1,10,20,1,1];
    this.cylinder = new MyCylinder(this.scene,argsc);



 }

MyPiece.prototype = Object.create(CGFobject.prototype);
MyPiece.prototype.constructor = MyPiece;

/**
* Displays the Piece
*/
 MyPiece.prototype.display = function() {


  this.scene.pushMatrix();
  this.scene.scale(1, 1, 1);
  this.cylinder.display();
  this.scene.popMatrix();

}
