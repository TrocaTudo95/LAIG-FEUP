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


	//board
	this.scene.pushMatrix();
	this.scene.pushMatrix();
	this.scene.translate(-50,0,50);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.scene.scale(100, 100, 1);
	this.boardAp.apply();
	this.rectangle.display();
	this.scene.popMatrix();

for(let v=0 ; v<4 ; v++){

	let j=v*10;

	//v1
	this.scene.pushMatrix();
	this.scene.translate(20,0.1,46);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+1, this.circles[j+0]);
	this.circles[j+0].display();
	this.scene.popMatrix();
	//v2
	this.scene.pushMatrix();
	this.scene.translate(6.5,0.1,46);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+2, this.circles[j+1]);
	this.circles[j+1].display();
	this.scene.popMatrix();
	//v3
	this.scene.pushMatrix();
	this.scene.translate(-6.5,0.1,46);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+3, this.circles[j+2]);
	this.circles[j+2].display();
	this.scene.popMatrix();
	//v4
	this.scene.pushMatrix();
	this.scene.translate(-20,0.1,46);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+4, this.circles[j+3]);
	this.circles[j+3].display();
	this.scene.popMatrix();
	//v5
	this.scene.pushMatrix();
	this.scene.translate(-13.5,0.1,34.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+5, this.circles[j+4]);
	this.circles[j+4].display();
	this.scene.popMatrix();

	//v6
	this.scene.pushMatrix();
	this.scene.translate(0,0.1,34.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+6, this.circles[j+5]);
	this.circles[j+5].display();
	this.scene.popMatrix();

	//v7
	this.scene.pushMatrix();
	this.scene.translate(13.5,0.1,34.5);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+7, this.circles[j+6]);
	this.circles[j+6].display();
	this.scene.popMatrix();

	//v8
	this.scene.pushMatrix();
	this.scene.translate(6.5,0.1,23);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+8, this.circles[j+7]);
	this.circles[j+7].display();
	this.scene.popMatrix();

	//v9
	this.scene.pushMatrix();
	this.scene.translate(-6.5,0.1,23);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+9, this.circles[j+8]);
	this.circles[j+8].display();
	this.scene.popMatrix();

	//v10
	this.scene.pushMatrix();
	this.scene.translate(0,0.1,11);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(j+10, this.circles[j+9]);
	this.circles[j+9].display();
	this.scene.popMatrix();

	this.scene.rotate(90 * Math.PI /180,0,1,0);

}

	//41 (center point)

	this.scene.pushMatrix();
	this.scene.translate(0,0.1,0);
	this.scene.rotate(-90 * Math.PI /180,1,0,0);
	this.piecesAp.apply();
	this.scene.registerForPick(41, this.circles[40]);
	this.circles[40].display();
	this.scene.popMatrix();
	this.scene.popMatrix();


}
