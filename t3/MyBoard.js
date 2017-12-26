/**
 * MyBoard
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyBoard(scene) {
	CGFobject.call(this,scene);
  this.scene=scene;
  var args=[0,1,1,0];
  this.rectangle = new MyRectangle(scene,args);
  this.circles=[];
  for(let i=0; i < 41;i++){
    this.circles.push(new Circle(scene,6));
  }

  this.boardAp=new CGFappearance(scene);
	this.boardAp.loadTexture("scenes/images/board.jpg");

	this.piecesAp = new CGFappearance(this.scene);
	this.piecesAp.setDiffuse(1,1,1,1);
};


MyBoard.prototype = Object.create(CGFobject.prototype);
MyBoard.prototype.constructor=MyBoard;


MyBoard.prototype.display = function() {

	//1
	this.scene.pushMatrix();
	this.scene.translate(70,0.1,-4);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
 	this.circles[0].display();
	this.scene.popMatrix();
	//2
	this.scene.pushMatrix();
	this.scene.translate(56.5,0.1,-4);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[1].display();
	this.scene.popMatrix();
	//3
	this.scene.pushMatrix();
	this.scene.translate(43.5,0.1,-4);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[2].display();
	this.scene.popMatrix();
	//4
	this.scene.pushMatrix();
	this.scene.translate(30,0.1,-4);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[3].display();
	this.scene.popMatrix();
	//5
	this.scene.pushMatrix();
	this.scene.translate(36.5,0.1,-15.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[4].display();
	this.scene.popMatrix();

	//6
	this.scene.pushMatrix();
	this.scene.translate(50,0.1,-15.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[5].display();
	this.scene.popMatrix();

	//7
	this.scene.pushMatrix();
	this.scene.translate(63.5,0.1,-15.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[6].display();
	this.scene.popMatrix();

	//8
	this.scene.pushMatrix();
	this.scene.translate(43.5,0.1,-27);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[7].display();
	this.scene.popMatrix();

	//9
	this.scene.pushMatrix();
	this.scene.translate(56.5,0.1,-27);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[8].display();
	this.scene.popMatrix();

	//10
	this.scene.pushMatrix();
	this.scene.translate(50,0.1,-39);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[9].display();
	this.scene.popMatrix();

	//11
	this.scene.pushMatrix();
	this.scene.translate(4,0.1,-30);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
 	this.circles[10].display();
	this.scene.popMatrix();
	//12
	this.scene.pushMatrix();
	this.scene.translate(4,0.1,-43.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[11].display();
	this.scene.popMatrix();
	//13
	this.scene.pushMatrix();
	this.scene.translate(4,0.1,-56.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[12].display();
	this.scene.popMatrix();
	//14
	this.scene.pushMatrix();
	this.scene.translate(4,0.1,-70);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[13].display();
	this.scene.popMatrix();
	//15
	this.scene.pushMatrix();
	this.scene.translate(15.5,0.1,-63.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[14].display();
	this.scene.popMatrix();

	//16
	this.scene.pushMatrix();
	this.scene.translate(15.5,0.1,-50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[15].display();
	this.scene.popMatrix();

	//17
	this.scene.pushMatrix();
	this.scene.translate(15.5,0.1,-36.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[16].display();
	this.scene.popMatrix();

	//18
	this.scene.pushMatrix();
	this.scene.translate(27,0.1,-56.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[17].display();
	this.scene.popMatrix();

	//19
	this.scene.pushMatrix();
	this.scene.translate(27,0.1,-43.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[18].display();
	this.scene.popMatrix();

	//20
	this.scene.pushMatrix();
	this.scene.translate(39,0.1,-50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[19].display();
	this.scene.popMatrix();

	//21
	this.scene.pushMatrix();
	this.scene.translate(30,0.1,-96);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[20].display();
	this.scene.popMatrix();
	//22
	this.scene.pushMatrix();
	this.scene.translate(43.5,0.1,-96);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[21].display();
	this.scene.popMatrix();
	//23
	this.scene.pushMatrix();
	this.scene.translate(56.5,0.1,-96);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[22].display();
	this.scene.popMatrix();
	//24
	this.scene.pushMatrix();
	this.scene.translate(70,0.1,-96);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[23].display();
	this.scene.popMatrix();
	//25
	this.scene.pushMatrix();
	this.scene.translate(63.5,0.1,-84.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[24].display();
	this.scene.popMatrix();

	//26
	this.scene.pushMatrix();
	this.scene.translate(50,0.1,-84.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[25].display();
	this.scene.popMatrix();

	//27
	this.scene.pushMatrix();
	this.scene.translate(36.5,0.1,-84.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[26].display();
	this.scene.popMatrix();

	//28
	this.scene.pushMatrix();
	this.scene.translate(56.5,0.1,-73);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[27].display();
	this.scene.popMatrix();

	//29
	this.scene.pushMatrix();
	this.scene.translate(43.5,0.1,-73);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[28].display();
	this.scene.popMatrix();

	//30
	this.scene.pushMatrix();
	this.scene.translate(50,0.1,-61);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[29].display();
	this.scene.popMatrix();

	//31
	this.scene.pushMatrix();
	this.scene.translate(96,0.1,-70);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[30].display();
	this.scene.popMatrix();
	//32
	this.scene.pushMatrix();
	this.scene.translate(96,0.1,-56.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[31].display();
	this.scene.popMatrix();
	//33
	this.scene.pushMatrix();
	this.scene.translate(96,0.1,-43.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[32].display();
	this.scene.popMatrix();
	//34
	this.scene.pushMatrix();
	this.scene.translate(96,0.1,-30);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[33].display();
	this.scene.popMatrix();
	//35
	this.scene.pushMatrix();
	this.scene.translate(84.5,0.1,-36.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[34].display();
	this.scene.popMatrix();

	//36
	this.scene.pushMatrix();
	this.scene.translate(84.5,0.1,-50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[35].display();
	this.scene.popMatrix();

	//37
	this.scene.pushMatrix();
	this.scene.translate(84.5,0.1,-63.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[36].display();
	this.scene.popMatrix();

	//38
	this.scene.pushMatrix();
	this.scene.translate(73,0.1,-43.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[37].display();
	this.scene.popMatrix();

	//39
	this.scene.pushMatrix();
	this.scene.translate(73,0.1,-56.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[38].display();
	this.scene.popMatrix();

	//40
	this.scene.pushMatrix();
	this.scene.translate(61,0.1,-50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[39].display();
	this.scene.popMatrix();

	//41 (center point)

	this.scene.pushMatrix();
	this.scene.translate(50,0.1,-50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.circles[40].display();
	this.scene.popMatrix();


	//board
  this.scene.pushMatrix();
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
  this.scene.scale(100, 100, 1);
  this.boardAp.apply();
  this.rectangle.display();
  this.scene.popMatrix();


}
