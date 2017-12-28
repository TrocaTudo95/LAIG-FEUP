function MyGameBoard(scene){
  CGFobject.call(this,scene);
  this.scene=scene;
  this.player1Encode="";
  this.player2Encode="";
  this.player1 = [];
  this.player2=[];
  this.prologBoard=[];
  this.selectedPiece=null;
  this.possibleMoves=[];
  this.positionToMove=null;
  this.validMove=false;
  this.CapturedPiece=null;

  this.board = new MyBoard(this.scene);
  this.pieces=[];
  this.pieces.push(new MyPiece(scene,"blue",1,1,20,46));
  //2
  this.pieces.push(new MyPiece(scene,"blue",2,2,6.5,46));
  //3
  this.pieces.push(new MyPiece(scene,"blue",3,3,-6.5,46));
  //4
  this.pieces.push(new MyPiece(scene,"blue",4,4,-20,46));
  //5
  this.pieces.push(new MyPiece(scene,"blue",5,5,-13.5,34.5));
  //6
  this.pieces.push(new MyPiece(scene,"blue",6,6,0,34.5));
  //7
  this.pieces.push(new MyPiece(scene,"blue",7,7,13.5,34.5));
  //8
  this.pieces.push(new MyPiece(scene,"blue",8,8,6.5,23));

  this.pieces.push(new MyPiece(scene,"blue",9,9,-6.5,23));

  this.pieces.push(new MyPiece(scene,"yellow",11,11,46,20));
  //12
  this.pieces.push(new MyPiece(scene,"yellow",12,12,46,6.5));
  //13
  this.pieces.push(new MyPiece(scene,"yellow",13,13,46,-6.5));
  //14
  this.pieces.push(new MyPiece(scene,"yellow",14,14,46,-20));
  //15
  this.pieces.push(new MyPiece(scene,"yellow",15,15,34.5,-13.5));
  //16
  this.pieces.push(new MyPiece(scene,"yellow",16,16,34.5,0));
  //17
  this.pieces.push(new MyPiece(scene,"yellow",17,17,34.5,13.5));
  //18
  this.pieces.push(new MyPiece(scene,"yellow",18,18,23,6.5));
  //19
  this.pieces.push(new MyPiece(scene,"yellow",19,19,23,-6.5));

  this.pieces.push(new MyPiece(scene,"red",21,21,20,-46));
  //22
  this.pieces.push(new MyPiece(scene,"red",22,22,6.5,-46));
  //23
  this.pieces.push(new MyPiece(scene,"red",23,23,-6.5,-46));
  //24
  this.pieces.push(new MyPiece(scene,"red",24,24,-20,-46));
  //25
  this.pieces.push(new MyPiece(scene,"red",25,25,-13.5,-34.5));
  //26
  this.pieces.push(new MyPiece(scene,"red",26,26,0,-34.5));
  //27
  this.pieces.push(new MyPiece(scene,"red",27,27,13.5,-34.5));
  //28
  this.pieces.push(new MyPiece(scene,"red",28,28,6.5,-23));
  //29
  this.pieces.push(new MyPiece(scene,"red",29,29,-6.5,-23));

  this.pieces.push(new MyPiece(scene,"green",31,31,-46,20));
  //32
  this.pieces.push(new MyPiece(scene,"green",32,32,-46,6.5));
  //33
  this.pieces.push(new MyPiece(scene,"green",33,33,-46,-6.5));
  //34
  this.pieces.push(new MyPiece(scene,"green",34,34,-46,-20));
  //35
  this.pieces.push(new MyPiece(scene,"green",35,35,-34.5,-13.5));
  //36
  this.pieces.push(new MyPiece(scene,"green",36,36,-34.5,0));
  //37
  this.pieces.push(new MyPiece(scene,"green",37,37,-34.5,13.5));
  //38
  this.pieces.push(new MyPiece(scene,"green",38,38,-23,6.5));
  //39
  this.pieces.push(new MyPiece(scene,"green",39,39,-23,-6.5));

this.init_board();
this.init_players();

this.states=['Pick a Piece to Move', 'Pick a Place to Move the Piece', 'Moving the piece'];
this.currentState=0;
this.currentPlayer=1;
};




MyGameBoard.prototype = Object.create(CGFobject.prototype);
MyGameBoard.prototype.constructor=MyGameBoard;

MyGameBoard.prototype.selectPiece = function(id) {
  let temp= id -100;
  let temp_piece= "p"+temp;
  let ind;
//check if the piece belongs to the currentPlayer
if(this.currentPlayer==1)
  ind=this.player1.indexOf(temp_piece);
  else
  ind=this.player2.indexOf(temp_piece);

 if(ind==-1){
   if(this.currentPlayer==1)
   alert("This piece does not Belong you player1, your pieces are the green and the blue!");
   else
     alert("This piece does not Belong you player2, your pieces are the red and the yellow!");

     return;
 }

  for (let i =0; i< this.pieces.length; i++){
    if(this.pieces[i].id ==temp){
      this.selectedPiece= this.pieces[i];
      break;
    }
  }
this.possible_moves();
this.currentState=1;
};

MyGameBoard.prototype.selectPositionMove =function(id) {
  this.positionToMove=id;
  this.currentState=2;
  this.makeMove();
};

MyGameBoard.prototype.makeMove =function() {
this.make_play();

}

MyGameBoard.prototype.display = function() {
  this.scene.pushMatrix();
  this.board.display();
  this.scene.popMatrix();

  for(let i=0; i<this.pieces.length;i++){
    this.scene.pushMatrix();
    this.scene.registerForPick(this.pieces[i].id +100, this.pieces[i]);
    this.pieces[i].display();
    this.scene.popMatrix();
  }
}
