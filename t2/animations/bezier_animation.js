class BezierAnimation extends Animation{
  /**
   * Bezier animation constructor.
   * @param scene Scene to apply the animation to
   * @param speed Animation time span.
   * @param controlPoint Point to generate the bezier curve.
   */
  constructor(scene,speed,controlPoints){
    super(scene,speed);
    this.control_points=controlPoints;
    this.velocity = speed;
    this.p1 = this.control_points[0];
    this.p2 = this.control_points[1];
    this.p3 = this.control_points[2];
    this.p4 = this.control_points[3];
    this.p1x= this.p1[0];
    this.p1y= this.p1[1];
    this.p1z= this.p1[2];
    this.p2x= this.p2[0];
    this.p2y= this.p2[1];
    this.p2z= this.p2[2];
    this.p3x= this.p3[0];
    this.p3y= this.p3[1];
    this.p3z= this.p3[2];
    this.p4x= this.p4[0];
    this.p4y= this.p4[1];
    this.p4z= this.p4[2];
    this.distance = this.bezier_distance();   //total distance
    this.angulo = 0;
    this.t=0;      // time of the animation
    this.x = this.p1x;  //inicial points
    this.y = this.p1y;
    this.z = this.p1z;
    this.totalTime=this.distance/this.speed;
    this.done = false;

  }


  getMatrix(deltaTime) {
  	var m = mat4.create();
      mat4.identity(m);

      this.update(deltaTime);

      mat4.translate(m, m, [this.x, this.y, this.z]);
      mat4.rotate(m, m, this.angulo, [0, 1, 0]);

  	return m;
  }


bezier_distance()
  {
      // calculates the distance of the curve with an error smaller than 1E-4
      var result = 0, resultA = 0;
      var error = 100;
      var points = [this.p1, this.p2, this.p3, this.p4];
      var pointM;

      while(error > 1E-4){
          var pointsA = [];
          pointsA.push(this.p1);

          for(var i = 0; i < (points.length -1); i++){
              pointM = this.ponto_medio(points[i], points[i+1]);
              pointsA.push(pointM);
          }
          pointsA.push(this.p4);
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

distance_between_points(p1,p2){
    return Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2)+Math.pow((p2[2]-p1[2]),2));
  }

ponto_medio(p1,p2){

    let x =(p1[0]+p2[0])/2;
    let y = p1[1];  //there's no diference on the y parameter of the points because they are on the xOz plane.
    let z = (p1[2]+p2[2])/2;
    let p=[x,y,z];
    return p;

  }
//o delta time ja é o tempo desde a ultima vez
  update(deltaTime){

    this.t += (deltaTime * this.speed) / this.distance;
    if(this.t >= 1){  // if animation is over

        this.x = this.p4x;
        this.y = this.p4y;
        this.z = this.p4z;
        this.done = true;
        return;

    }
    else{
    var P=[this.x, this.y, this.z];  // lastUpdate points
    //new points
		this.x=Math.pow((1-this.t),3)*this.p1x + 3*this.t*Math.pow((1-this.t),2)*this.p2x+3*Math.pow(this.t,2)*(1-this.t)*this.p3x+Math.pow(this.t,3)*this.p4x;
		this.y=Math.pow((1-this.t),3)*this.p1y + 3*this.t*Math.pow((1-this.t),2)*this.p2y+3*Math.pow(this.t,2)*(1-this.t)*this.p3y+Math.pow(this.t,3)*this.p4y;
		this.z=Math.pow((1-this.t),3)*this.p1z + 3*this.t*Math.pow((1-this.t),2)*this.p2z+3*Math.pow(this.t,2)*(1-this.t)*this.p3z+Math.pow(this.t,3)*this.p4z;


			this.angulo = Math.atan2(this.x - P[0], this.z - P[2]);
    }



}
}
