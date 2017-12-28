class PieceMoveAnimation extends Animation{

  constructor(scene,speed,p1,p4){
    super(scene,speed);
    this.velocity = speed;
    this.p1=p1;
    this.p4=p4;
    this.pM=ponto_medio(this.p1,this.p4);
    this.p2=ponto_medio(this.p1,this.pM);
    this.p3=ponto_medio(this.pM,this.p4);
    this.p2[1]=4;
    this.p3[1]=4;
    this.distance = this.bezier_distance();   //total distance
    this.angulo = 0;
    this.angDeep=0;
    this.t=0;      // time of the animation
    this.x = this.p1[0];  //inicial points
    this.y = this.p1[1];
    this.z = this.p1[2];
    this.totalTime=this.distance/this.speed;


  }


  getMatrix(deltaTime) {
  	var m = mat4.create();
      mat4.identity(m);

      this.update(deltaTime);

      mat4.translate(m, m, [this.x, this.y, this.z]);
      mat4.rotate(m, m, this.angulo, [0, 1, 0]);
      mat4.rotate(m, m, this.angDeep, [1, 0, 0]);

  	return m;
  }

  bezier_distance()
    {
        // calculates the distance of the curve with an error smaller than 1E-5
        var result = 0, resultA = 0;
        var error = 100;
        var points = [this.p1, this.p2, this.p3, this.p4];
        var pointM;

        while(error > 1E-5){
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
    let y = (p1[1]+p2[1])/2;
    let z = (p1[2]+p2[2])/2;
    let p=[x,y,z];
    return p;

  }

  update(deltaTime){

    this.t += (deltaTime * this.speed) / this.distance;
    if(this.t >= 1){  // if animation is over

        this.x = this.p4[0];
        this.y = this.p4[1];
        this.z = this.p4[2];
        return;

    }
    else{
    var P=[this.x, this.y, this.z];  // lastUpdate points
    //new points
		this.x=Math.pow((1-this.t),3)*this.p1[0] + 3*this.t*Math.pow((1-this.t),2)*this.p2[0]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[0]+Math.pow(this.t,3)*this.p4[0];
		this.y=Math.pow((1-this.t),3)*this.p1[1] + 3*this.t*Math.pow((1-this.t),2)*this.p2[1]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[1]+Math.pow(this.t,3)*this.p4[1];
		this.z=Math.pow((1-this.t),3)*this.p1[2] + 3*this.t*Math.pow((1-this.t),2)*this.p2[2]+3*Math.pow(this.t,2)*(1-this.t)*this.p3[2]+Math.pow(this.t,3)*this.p4[2];


			//this.angulo = Math.atan2(this.x - P[0], this.z - P[2]);


      //rotacao em y
      if((this.z-P[2])==0){
        if((this.x-P[0])>0){
          this.angulo=90*degToRad;
        }
        else if((this.x-P[0])<0){
          this.angulo=-90*degToRad;
        }
      }
      else{
        if((P[2]-this.z)<0){
          this.angulo=Math.atan((this.x-P[0])/(this.z-P[2]));
        }
        else if((P[2]-this.z)>0){
          this.angulo=180*degToRad+Math.atan((this.x-P[0])/(this.z-P[2]));
        }

      }

      //rotacao em x
  var partialDist=Math.sqrt(Math.pow((this.x-P[0]),2)+Math.pow((this.z-P[2]),2));
  if(partialDist==0){
    if((this.y-P[1])>0){
      this.angDeep=-90*degToRad;
    }
    else if(this.y-P[1]<0){
      this.angDeep=90*degToRad;
    }
  }
  else{
    this.angDeep=Math.atan((P[1]-this.y)/partialDist);
  }

    }



}

}
