function MyGameBoard(scene){
  CGFobject.call(this,scene);
  this.scene=scene;
  this.player1Encode="";
  this.player2Encode="";
  this.player1 = [];
  this.player2=[];
  this.prologBoard=[];

  this.board = new MyBoard(this.scene);
  this.pieces=[];
};



MyGameBoard.prototype.createPieces=function(){
  this.pieces.push(new BoardPiece(scene,"blue",1,20,46));
  //2
  this.pieces.push(new BoardPiece(scene,"blue",2,6.5,46));
  //3
  this.pieces.push(new BoardPiece(scene,"blue",3,-6.5,46));
  //4
  this.pieces.push(new BoardPiece(scene,"blue",4,-20,46));
  //5
  this.pieces.push(new BoardPiece(scene,"blue",5,-13.5,34.5));
  //6
  this.pieces.push(new BoardPiece(scene,"blue",6,0,34.5));
  //7
  this.pieces.push(new BoardPiece(scene,"blue",7,13.5,34.5));
  //8
  this.pieces.push(new BoardPiece(scene,"blue",8,6.5,23));

  this.pieces.push(new BoardPiece(scene,"yellow",11,46,20));
  //12
  this.pieces.push(new BoardPiece(scene,"yellow",12,46,6.5));
  //13
  this.pieces.push(new BoardPiece(scene,"yellow",13,46,-6.5));
  //14
  this.pieces.push(new BoardPiece(scene,"yellow",14,46,-20));
  //15
  this.pieces.push(new BoardPiece(scene,"yellow",15,34.5,-13.5));
  //16
  this.pieces.push(new BoardPiece(scene,"yellow",16,34.5,0));
  //17
  this.pieces.push(new BoardPiece(scene,"yellow",17,34.5,13.5));
  //18
  this.pieces.push(new BoardPiece(scene,"yellow",18,23,6.5));
  //19
  this.pieces.push(new BoardPiece(scene,"yellow",19,23,-6.5));

  this.pieces.push(new BoardPiece(scene,"red",6,21,20,-46));
  //22
  this.pieces.push(new BoardPiece(scene,"red",22,6.5,-46));
  //23
  this.pieces.push(new BoardPiece(scene,"red",23,-6.5,-46));
  //24
  this.pieces.push(new BoardPiece(scene,"red",24,-20,-46));
  //25
  this.pieces.push(new BoardPiece(scene,"red",25,-13.5,-34.5));
  //26
  this.pieces.push(new BoardPiece(scene,"red",26,0,-34.5));
  //27
  this.pieces.push(new BoardPiece(scene,"red",27,13.5,-34.5));
  //28
  this.pieces.push(new BoardPiece(scene,"red",28,6.5,-23));
  //29
  this.pieces.push(new BoardPiece(scene,"red",29,-6.5,-23));

  this.pieces.push(new BoardPiece(scene,"green",31,-46,20));
  //32
  this.pieces.push(new BoardPiece(scene,"green",32,-46,6.5));
  //33
  this.pieces.push(new BoardPiece(scene,"green",33,-46,-6.5));
  //34
  this.pieces.push(new BoardPiece(scene,"green",34,-46,-20));
  //35
  this.pieces.push(new BoardPiece(scene,"green",35,-34.5,-13.5));
  //36
  this.pieces.push(new BoardPiece(scene,"green",36,-34.5,0));
  //37
  this.pieces.push(new BoardPiece(scene,"green",37,-34.5,13.5));
  //38
  this.pieces.push(new BoardPiece(scene,"green",38,-23,6.5));
  //39
  this.pieces.push(new BoardPiece(scene,"green",39,-23,-6.5));

};
MyGameBoard.prototype = Object.create(CGFobject.prototype);
MyGameBoard.prototype.constructor=MyGameBoard;

MyGameBoard.prototype.display = function() {
  this.scene.pushMatrix();
  this.board.display();
  this.scene.popMatrix();
}
