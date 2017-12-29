/**
 * MyPiece
 * @constructor
 *
 * @param scene Scene
 * @param args Arguments to build the Piece
 */
 function MyPiece(scene,color,id,position,x,z) {


 	CGFobject.call(this,scene);
    this.scene=scene;
    this.color = color;
    this.id=id;
    this.position=position;
    this.x=x;
    this.y=0.1;
    this.z=z;
    this.p1=[x,0.1,z];
    this.t=0;
    this.done=true;

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

MyPiece.prototype.distance_between_points = function(p1,p2){
  return Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2)+Math.pow((p2[2]-p1[2]),2));
}

MyPiece.prototype.ponto_medio =function(p1,p2){

  let x =(p1[0]+p2[0])/2;
  let y = (p1[1]+p2[1])/2;
  let z = (p1[2]+p2[2])/2;
  let p=[x,y,z];
  return p;

}

MyPiece.prototype.bezier_distance= function(p1,p2,p3,p4)
  {
      // calculates the distance of the curve with an error smaller than 1E-5
      var result = 0, resultA = 0;
      var error = 100;
      var points = [p1,p2,p3,p4];
      var pointM;

      while(error > 1E-5){
          var pointsA = [];
          pointsA.push(p1);

          for(var i = 0; i < (points.length -1); i++){
              pointM = this.ponto_medio(points[i], points[i+1]);
              pointsA.push(pointM);
          }
          pointsA.push(p4);
          points = pointsA;
          result = 0;
          for(var i = 0; i < (points.length -1); i++){
              result += this.distance_between_points(points[i], points[i+1]);
          }
          error = Math.abs(resultA - result);
          resultA = result;


      }
      return result;
  }

MyPiece.prototype.movePiece = function(p4,speed){
  this.done=false;
  this.speed = speed;
  this.p4=p4;
  var pM=this.ponto_medio(this.p1,this.p4);
  pM[1]=4;
  this.p2=this.ponto_medio(this.p1,pM);
  this.p3=this.ponto_medio(pM,this.p4);
  this.distance = this.bezier_distance(this.p1,this.p2,this.p3,this.p4);   //total distance
}




MyPiece.prototype.update = function(deltaTime){

  this.t += (deltaTime * this.speed) / this.distance;
  if(this.t >= 1){  // if animation is over

      this.x = this.p4[0];
      this.y = this.p4[1];
      this.z = this.p4[2];
      this.done = true;
      this.p1=[this.x,0.1,this.z];
      return;

  }
  else{
  this.x=Math.pow((1-this.t),3)*this.p1[0] + 3*this.t*Math.pow((1-this.t),2)*this.p2[0]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[0]+Math.pow(this.t,3)*this.p4[0];
  this.y=Math.pow((1-this.t),3)*this.p1[1] + 3*this.t*Math.pow((1-this.t),2)*this.p2[1]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[1]+Math.pow(this.t,3)*this.p4[1];
  this.z=Math.pow((1-this.t),3)*this.p1[2] + 3*this.t*Math.pow((1-this.t),2)*this.p2[2]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[2]+Math.pow(this.t,3)*this.p4[2];
  }

}

/**
* Displays the Piece
*/
 MyPiece.prototype.display = function() {

  this.scene.pushMatrix();
  this.scene.translate(this.x,this.y,this.z);
  this.scene.rotate(-90 * Math.PI /180,1,0,0);
  this.scene.scale(1, 1, 1);
  this.pieceAppearence.apply();
  this.cylinder.display();
  this.scene.popMatrix();

}
