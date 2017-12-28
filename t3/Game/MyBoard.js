function MyBoard(scene) {
  CGFobject.call(this,scene);
  this.scene=scene;
  var args=[0,1,1,0];
  this.rectangle = new MyRectangle(scene,args);
  this.circles=[];

			//1
			this.circles.push(new BoardPiece(scene,6,1,20,46));
			//2
			this.circles.push(new BoardPiece(scene,6,2,6.5,46));
			//3
			this.circles.push(new BoardPiece(scene,6,3,-6.5,46));
			//4
			this.circles.push(new BoardPiece(scene,6,4,-20,46));
			//5
			this.circles.push(new BoardPiece(scene,6,5,-13.5,34.5));
			//6
			this.circles.push(new BoardPiece(scene,6,6,0,34.5));
			//7
			this.circles.push(new BoardPiece(scene,6,7,13.5,34.5));
			//8
			this.circles.push(new BoardPiece(scene,6,8,6.5,23));
			//9
			this.circles.push(new BoardPiece(scene,6,9,-6.5,23));
			//10
			this.circles.push(new BoardPiece(scene,6,10,0,11));
			//11
			this.circles.push(new BoardPiece(scene,6,11,46,20));
			//12
			this.circles.push(new BoardPiece(scene,6,12,46,6.5));
			//13
			this.circles.push(new BoardPiece(scene,6,13,46,-6.5));
			//14
			this.circles.push(new BoardPiece(scene,6,14,46,-20));
			//15
			this.circles.push(new BoardPiece(scene,6,15,34.5,-13.5));
			//16
			this.circles.push(new BoardPiece(scene,6,16,34.5,0));
			//17
			this.circles.push(new BoardPiece(scene,6,17,34.5,13.5));
			//18
			this.circles.push(new BoardPiece(scene,6,18,23,6.5));
			//19
			this.circles.push(new BoardPiece(scene,6,19,23,-6.5));
			//20
			this.circles.push(new BoardPiece(scene,6,20,11,0));
			//21
			this.circles.push(new BoardPiece(scene,6,21,20,-46));
			//22
			this.circles.push(new BoardPiece(scene,6,22,6.5,-46));
			//23
			this.circles.push(new BoardPiece(scene,6,23,-6.5,-46));
			//24
			this.circles.push(new BoardPiece(scene,6,24,-20,-46));
			//25
			this.circles.push(new BoardPiece(scene,6,25,-13.5,-34.5));
			//26
			this.circles.push(new BoardPiece(scene,6,26,0,-34.5));
			//27
			this.circles.push(new BoardPiece(scene,6,27,13.5,-34.5));
			//28
			this.circles.push(new BoardPiece(scene,6,28,6.5,-23));
			//29
			this.circles.push(new BoardPiece(scene,6,29,-6.5,-23));
			//30
			this.circles.push(new BoardPiece(scene,6,30,0,-11));
			//31
			this.circles.push(new BoardPiece(scene,6,31,-46,20));
			//32
			this.circles.push(new BoardPiece(scene,6,32,-46,6.5));
			//33
			this.circles.push(new BoardPiece(scene,6,33,-46,-6.5));
			//34
			this.circles.push(new BoardPiece(scene,6,34,-46,-20));
			//35
			this.circles.push(new BoardPiece(scene,6,35,-34.5,-13.5));
			//36
			this.circles.push(new BoardPiece(scene,6,36,-34.5,0));
			//37
			this.circles.push(new BoardPiece(scene,6,37,-34.5,13.5));
			//38
			this.circles.push(new BoardPiece(scene,6,38,-23,6.5));
			//39
			this.circles.push(new BoardPiece(scene,6,39,-23,-6.5));
			//40
			this.circles.push(new BoardPiece(scene,6,40,-11,0));
			//41 (center point)
			this.circles.push(new BoardPiece(scene,6,50,0,0));


  this.boardAp=new CGFappearance(scene);
	this.boardAp.loadTexture("scenes/images/board.jpg");


};


MyBoard.prototype = Object.create(CGFobject.prototype);
MyBoard.prototype.constructor=MyBoard;


MyBoard.prototype.display = function() {


	//board
	this.scene.pushMatrix();
	this.scene.pushMatrix();
	this.scene.translate(-50,0,50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.scene.scale(100, 100, 1);
	this.boardAp.apply();
	this.rectangle.display();
	this.scene.popMatrix();

for(let v=0 ; v<41 ; v++){

	this.scene.pushMatrix();
	this.scene.registerForPick(v+1, this.circles[v]);
	this.circles[v].display();
	this.scene.popMatrix();


}


}
