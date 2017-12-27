function MyGameBoard(scene){
  CGFobject.call(this,scene);
  this.scene=scene;
  this.player1Encode="";
  this.player2Encode="";
  this.player1 = [];
  this.player2=[];
  this.prologBoard=[];

  this.board = new MyBoard(this.scene);
};
MyGameBoard.prototype = Object.create(CGFobject.prototype);
MyGameBoard.prototype.constructor=MyGameBoard;

MyGameBoard.prototype.display = function() {
  this.scene.pushMatrix();
  this.board.display();
  this.scene.popMatrix();
}
