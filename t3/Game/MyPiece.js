/**
 * MyPiece
 * @constructor
 *
 * @param scene Scene
 * @param args Arguments to build the Piece
 */
 function MyPiece(scene,color,id,x,z) {


 	CGFobject.call(this,scene);
    this.scene=scene;
    this.color = color;
    this.id=id;
    this.x=x;
    this.z=z;

    var argsc=[0.5,1,1,10,20,1,1];
    this.cylinder = new MyCylinder(this.scene,argsc);


if(this.color == "red"){
    //MATERIAL
    this.pieceAppearence = new CGFappearance(this.scene);
    this.pieceAppearence.loadTexture("scenes/images/red.jpg");
}else if(this.color == "blue"){
  this.pieceAppearence = new CGFappearance(this.scene);
  this.pieceAppearence.loadTexture("scenes/images/blue.jpg");
}
else if(this.color == "yellow"){
  this.pieceAppearence = new CGFappearance(this.scene);
  this.pieceAppearence.loadTexture("scenes/images/yellow.jpg");
}
else if(this.color == "green"){
  this.pieceAppearence = new CGFappearance(this.scene);
  this.pieceAppearence.loadTexture("scenes/images/green.jpg");
}

 }

MyPiece.prototype = Object.create(CGFobject.prototype);
MyPiece.prototype.constructor = MyPiece;

/**
* Displays the Piece
*/
 MyPiece.prototype.display = function() {

  this.scene.pushMatrix();
  this.scene.translate(this.x,0.1,this.z);
  this.scene.rotate(-90 * Math.PI /180,1,0,0);
  this.scene.scale(1, 1, 1);
  this.pieceAppearence.apply();
  this.cylinder.display();
  this.scene.popMatrix();

}
