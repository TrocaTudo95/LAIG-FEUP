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
    this.color = args[0];
    this.position=args[1];

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
  this.scene.scale(1, 1, 1);
  this.pieceAppearence.apply();
  this.cylinder.display();
  this.scene.popMatrix();

}
