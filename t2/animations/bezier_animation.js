class BezierAnimation extends Animation{
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
    this.distance = this.bezier_distance(this.control_points);
    this.angulo = 0;
    this.t=0;
    this.totalTime=this.distance/this.speed;
  }


  getMatrix(deltaTime) {
  	var m = mat4.create();
      mat4.identity(m);

      this.update(deltaTime);

      mat4.translate(m, m, [this.x, this.y, this.z]);
      mat4.rotate(m, m, this.angulo, [0, 1, 0]);

  	return m;
  }


bezier_distance(c_pts)
  {
    let p1=this.ponto_medio(c_pts[0],c_pts[1]);          //ponto entre P1 e P2

    let p2=this.ponto_medio(c_pts[1],c_pts[2]);          //ponto entre P2 e P3

    let p3=this.ponto_medio(c_pts[2],c_pts[3]);          //ponto entre P3 e P4

    let p4=this.ponto_medio(p1,p2);                     //ponto entre p1 e p2(criados acima)

    let p5=this.ponto_medio(p2,p3);                    //ponto entre p2 e p3(criados acima)

    return (this.distance_between_points(c_pts[0],p1) + this.distance_between_points(p1,p4) + this.distance_between_points(p4,p5) + this.distance_between_points(p5,c_pts[3]));

  }

distance_between_points(p1,p2){
    return Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2)+Math.pow((p2[2]-p1[2]),2));
  }

ponto_medio(p1,p2){

    let x =(p1[0]+p2[0])/2
    let y =(p1[1]+p2[1])/2
    let p=[x,y,0]
    return p;

  }
//o delta time ja é o tempo desde a ultima vez
  update(deltaTime){
    this.t=(this.velocity*deltaTime)/this.distance;
    var P=[this.x, this.y, this.z];
		this.x=Math.pow((1-this.t),3)*this.p1x + 3*this.t*Math.pow((1-this.t),2)*this.p2x+3*Math.pow(this.t,2)*(1-this.t)*this.p3x+Math.pow(this.t,3)*this.p4x;
		this.y=Math.pow((1-this.t),3)*this.p1y + 3*this.t*Math.pow((1-this.t),2)*this.p2y+3*Math.pow(this.t,2)*(1-this.t)*this.p3y+Math.pow(this.t,3)*this.p4y;
		this.z=Math.pow((1-this.t),3)*this.p1z + 3*this.t*Math.pow((1-this.t),2)*this.p2z+3*Math.pow(this.t,2)*(1-this.t)*this.p3z+Math.pow(this.t,3)*this.p4z;


			if((this.z-P[2])==0)
      {
				if((this.x-P[0])>0)
        {
					this.angulo=90*degToRad;
				}
				else if((this.x-P[0])<0)
        {
					this.angulo=-90*degToRad;
				}
			}
			else
      {
				if((P[2]-this.z)<0)
        {
					this.angulo=Math.atan((this.x-P[0])/(this.z-P[2]));
				}
				else if((P[2]-this.z)>0)
        {
					this.angulo=180*degToRad+Math.atan((this.x-P[0])/(this.z-P[2]));
				}

			}
    }



}
