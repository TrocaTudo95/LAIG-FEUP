/**
 * MyPiece
 * @constructor
 *
 * @param scene Scene
 * @param args Arguments to build the Piece
 */
 function BoardPiece(scene,slices,id,x,z) {


 	  CGFobject.call(this,scene);
    this.scene=scene;
    this.slices=slices;
    this.id=id;
    this.x=x;
    this.z=z;
    this.possibleMove = false;

    this.circle = new Circle(this.scene,6);

    this.pieceSl = new CGFappearance(this.scene);
    this.pieceSl.setDiffuse(0.1,0.1,0.1,1);

    this.pieceAp = new CGFappearance(this.scene);
    this.pieceAp.setDiffuse(1,1,1,1);


 }

BoardPiece.prototype = Object.create(CGFobject.prototype);
BoardPiece.prototype.constructor = BoardPiece;



/**
* Displays the Piece
*/
BoardPiece.prototype.display = function() {

  this.scene.pushMatrix();
  this.scene.translate(this.x,0.1,this.z);
  this.scene.rotate(-90 * Math.PI /180,1,0,0);
  this.scene.scale(1, 1, 1);
  if(this.possibleMove == true){
    this.pieceSl.apply();
  }
  else{
    this.pieceAp.apply();
  }
  this.circle.display();
  this.scene.popMatrix();

}
