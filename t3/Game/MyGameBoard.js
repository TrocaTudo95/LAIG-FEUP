function MyGameBoard(scene,botMode){
  CGFobject.call(this,scene);
  this.scene=scene;
  this.player1Encode="";
  this.player2Encode="";
  this.encodedBoard="";
  this.player1 = [];
  this.player2=[];
  this.prologBoard=[];
  this.scorePlayer1=54;
  this.scorePlayer2=54;
  this.listOfPlays=[];
  this.bot_difficulty=1;
  //round variables
  this.selectedPiece=null;
  this.possibleMoves=[];
  this.positionToMove=null;
  this.CapturedPiece=null;
  this.indexMovingPiece=null;
  this.indexEatedPiece=null;
  this.undoing=false;
  this.botMode=botMode;
  this.botTurn = false;
//////////////////
  this.board = new MyBoard(this.scene);
  this.scoreboard = new MyScoreBoard(this.scene);
  this.pieces=[];
  this.pieces.push(new MyPiece(scene,"blue",1,1,20,46));
  //2
  this.pieces.push(new MyPiece(scene,"blue",2,2,6.5,46));
  //3
  this.pieces.push(new MyPiece(scene,"blue",3,3,-6.5,46));
  //4
  this.pieces.push(new MyPiece(scene,"blue",4,4,-20,46));
  //5
    this.pieces.push(new MyPiece(scene,"blue",5,5,13.5,34.5));
  //6
  this.pieces.push(new MyPiece(scene,"blue",6,6,0,34.5));
  //7
  this.pieces.push(new MyPiece(scene,"blue",7,7,-13.5,34.5));
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
  this.pieces.push(new MyPiece(scene,"yellow",15,15,34.5,13.5));
  //16
  this.pieces.push(new MyPiece(scene,"yellow",16,16,34.5,0));
  //17
  this.pieces.push(new MyPiece(scene,"yellow",17,17,34.5,-13.5));
  //18
  this.pieces.push(new MyPiece(scene,"yellow",18,18,23,6.5));
  //19
  this.pieces.push(new MyPiece(scene,"yellow",19,19,23,-6.5));

  this.pieces.push(new MyPiece(scene,"green",21,21,-46,20));
  //32
  this.pieces.push(new MyPiece(scene,"green",22,22,-46,6.5));
  //33
  this.pieces.push(new MyPiece(scene,"green",23,23,-46,-6.5));
  //34
  this.pieces.push(new MyPiece(scene,"green",24,24,-46,-20));
  //35
  this.pieces.push(new MyPiece(scene,"green",25,25,-34.5,13.5));
  //36
  this.pieces.push(new MyPiece(scene,"green",26,26,-34.5,0));
  //37
  this.pieces.push(new MyPiece(scene,"green",27,27,-34.5,-13.5));
  //38
  this.pieces.push(new MyPiece(scene,"green",28,28,-23,6.5));
  //39
  this.pieces.push(new MyPiece(scene,"green",29,29,-23,-6.5));

  this.pieces.push(new MyPiece(scene,"red",31,31,20,-46));
  //22
  this.pieces.push(new MyPiece(scene,"red",32,32,6.5,-46));
  //23
  this.pieces.push(new MyPiece(scene,"red",33,33,-6.5,-46));
  //24
  this.pieces.push(new MyPiece(scene,"red",34,34,-20,-46));
  //25
  this.pieces.push(new MyPiece(scene,"red",35,35,13.5,-34.5));
  //26
  this.pieces.push(new MyPiece(scene,"red",36,36,0,-34.5));
  //27
  this.pieces.push(new MyPiece(scene,"red",37,37,-13.5,-34.5));
  //28
  this.pieces.push(new MyPiece(scene,"red",38,38,6.5,-23));
  //29
  this.pieces.push(new MyPiece(scene,"red",39,39,-6.5,-23));


this.init_board();
this.init_players();

this.GameStates=['Playing','Game_over'];
this.states=['Pick a Piece to Move', 'Pick a Place to Move the Piece', 'Moving the piece'];
this.currentState=0;
this.currentGameState=0;
this.currentPlayer=1;
};




MyGameBoard.prototype = Object.create(CGFobject.prototype);
MyGameBoard.prototype.constructor=MyGameBoard;

MyGameBoard.prototype.selectPiece = function(id) {
  if(this.gameOver){
    alert("Game Ended! Press Start Game to start a new game");
    this.currentState=10;
    return;
  }

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
   alert("This piece does not Belong you player1, your pieces are the red and the blue!");
   else
     alert("This piece does not Belong you player2, your pieces are the green and the yellow!");

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
  this.previousBoard=this.encodedBoard;
  this.previousPlayer1encode=this.player1Encode;
  this.previousPlayer2encode=this.player2Encode;
  this.previousPlayer1=this.player1;
  this.previousPlayer2=this.player2;
  this.make_play();
};

MyGameBoard.prototype.end_turn = function(){
  this.checkGameOver();
  if(!this.botMode){
    if (this.currentPlayer==1){
      this.currentPlayer=2;
      }
      else {
        this.currentPlayer=1;
      }
}

    for(let i=0;i < this.possibleMoves.length;i++){
      let posS = this.possibleMoves[i];
      let pos = parseInt(posS)-1;
      if(this.possibleMoves[i] == "50"){
        pos=40;
      }
      this.board.circles[pos].possibleMove = false;
    }

  this.currentState=0;
  this.selectedPiece=null;
  this.possibleMoves=[];
  this.positionToMove=null;
  this.CapturedPiece=null;
  this.indexMovingPiece=null;
  this.indexEatedPiece=null;
};

MyGameBoard.prototype.addPlayToHistory = function(pos1,pos2,p1,p2){
let play= new Play(this.previousBoard,this.previousPlayer1encode,this.previousPlayer2encode,this.previousPlayer1,this.previousPlayer2,
this.selectedPiece.id,this.indexEatedPiece,pos1,pos2,this.scorePlayer1,this.scorePlayer2,this.currentPlayer,p1,p2);
this.listOfPlays.push(play);
};


MyGameBoard.prototype.makeMove =function() {

this.calculate_score();
let ind= this.pieces.indexOf(this.selectedPiece);
let i;
for(i=0; i<this.board.circles.length;i++){
  if(this.board.circles[i].id==this.positionToMove)
        break;
}

let j=0;
for(j=0;j<this.pieces.length;j++){
  if(this.CapturedPiece==this.pieces[j].id){
    this.indexEatedPiece=j;
    break;
  }
}

this.addPlayToHistory([this.pieces[ind].x,this.pieces[ind].y,this.pieces[ind].z],[this.pieces[this.indexEatedPiece].x,this.pieces[this.indexEatedPiece].y,this.pieces[this.indexEatedPiece].z],this.pieces[ind].position,this.pieces[this.indexEatedPiece].position);
this.pieces[ind].position=this.board.circles[i].id;
this.pieces[ind].movePiece([this.board.circles[i].x,0.1,this.board.circles[i].z],15);
if(this.pieces[this.indexEatedPiece].color == "red"){
  this.pieces[this.indexEatedPiece].movePiece([-40,0.1,-40],30);
}
else if(this.pieces[this.indexEatedPiece].color == "blue"){
  this.pieces[this.indexEatedPiece].movePiece([40,0.1,40],30);
}
else if(this.pieces[this.indexEatedPiece].color == "green"){
  this.pieces[this.indexEatedPiece].movePiece([-40,0.1,40],30);
}
else if(this.pieces[this.indexEatedPiece].color == "yellow"){
  this.pieces[this.indexEatedPiece].movePiece([40,0.1,-40],30);
}
this.indexMovingPiece=ind;
this.currentState=3;
if(this.botMode)
  this.bot_play();
};

MyGameBoard.prototype.bot_turn=function(){
this.currentState=3;
let i;
for(i=0; i<this.board.circles.length;i++){
  if(this.board.circles[i].id==this.positionToMove)
        break;
}

let j=0;
for(j=0;j<this.pieces.length;j++){
  if(this.BotindexMovingPiece==this.pieces[j].id){
    this.indexMovingPiece=j;
    break;
  }
}
  let z=0;
  for(z=0;z<this.pieces.length;z++){
    if(this.BotindexEatedPiece==this.pieces[z].id){
      this.indexEatedPiece=z;
      break;
    }
  }

  this.pieces[this.indexMovingPiece].movePiece([this.board.circles[i].x,0.1,this.board.circles[i].z],15);
  this.pieces[this.indexMovingPiece].position=this.board.circles[i].id;
  if(this.pieces[this.indexEatedPiece].color == "red"){
    this.pieces[this.indexEatedPiece].movePiece([-40,0.1,-40],30);
  }
  else if(this.pieces[this.indexEatedPiece].color == "blue"){
    this.pieces[this.indexEatedPiece].movePiece([40,0.1,40],30);
  }
  else if(this.pieces[this.indexEatedPiece].color == "green"){
    this.pieces[this.indexEatedPiece].movePiece([-40,0.1,40],30);
  }
  else if(this.pieces[this.indexEatedPiece].color == "yellow"){
    this.pieces[this.indexEatedPiece].movePiece([40,0.1,-40],30);
  }
  };



MyGameBoard.prototype.undo = function(){
  this.undoing=true;
  let play= this.listOfPlays[this.listOfPlays.length-1];
  this.encodedBoard=play.board;
  this.player1Encode=play.player1encoded;
  this.player2Encode=play.player2encoded;
  this.player1=play.player1;
  this.player2=play.player2;
  this.indexEatedPiece=play.eatedpieceid;
  this.scorePlayer1=play.score1;
  this.scorePlayer2=play.score2;
  this.currentPlayer=play.currentPlayer;
  for(let i=0;i < this.pieces.length;i++){
    if(this.pieces[i].id == play.selectedPieceid){
      this.pieces[i].movePiece(play.playedPiecePos,30);
      this.pieces[i].position= play.selectedPiecePosition;
      this.indexMovingPiece=i;
    }

  }
  this.pieces[this.indexEatedPiece].movePiece(play.eatedPiecePos,30);
  this.pieces[this.indexEatedPiece].position=play.eatedPiecePosistion;
  this.currentState=3;
  this.listOfPlays.splice(this.listOfPlays.length-1,1);

  for(let i=0;i <this.possibleMoves.length;i++){
    let posS = this.possibleMoves[i];
    let pos = parseInt(posS)-1;
    if(this.possibleMoves[i] == "50"){
      pos=40;
    }
    this.boardcircles[pos].possibleMove = false;

  }

}

MyGameBoard.prototype.update = function(deltaTime){
if(this.currentState==2 && this.CapturedPiece!=null)
this.makeMove();


if(this.currentState==3 && !(this.pieces[this.indexMovingPiece].done && this.pieces[this.indexEatedPiece].done)){
  this.pieces[this.indexMovingPiece].update(deltaTime);
  this.pieces[this.indexEatedPiece].update(deltaTime);
}
else if(this.currentState==3 && this.pieces[this.indexMovingPiece].done){
  if(!this.undoing){
    if(!this.botMode)
    this.end_turn();
  else {
    this.bot_turn();
    this.botTurn = true;

  }
}
  else {
    this.currentState=0;
    this.undoing=false;
  }
}

if(this.botTurn && this.pieces[this.indexMovingPiece].done){
  this.end_turn();
  this.botTurn = false;
}

if(this.possibleMoves.length != 0){
  if(this.currentState==1){
      for(let i=0;i < this.possibleMoves.length;i++){
        let posS = this.possibleMoves[i];
        let pos = parseInt(posS)-1;
        if(this.possibleMoves[i] == "50"){
          pos=40;
        }
        this.board.circles[pos].possibleMove = true;
      }
    }
}

};

MyGameBoard.prototype.display = function() {
  this.scene.pushMatrix();
  this.board.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scoreboard.points=[this.scorePlayer1,this.scorePlayer2];  // player1,player2
  this.scene.translate(-37,0,-50);
  this.scene.scale(7,5,1);
  this.scoreboard.display();
  this.scene.popMatrix();


  for(let i=0; i<this.pieces.length;i++){
    this.scene.pushMatrix();
    this.scene.registerForPick(this.pieces[i].id +100, this.pieces[i]);
    this.pieces[i].display();
    this.scene.popMatrix();
  }
}
