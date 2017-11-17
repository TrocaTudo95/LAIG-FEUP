class BezierAnimation extens Animation{
  constructor(scene,args){
    super(scene,args[0],args[1]);
    this.control_points=args[2];
    this.velocity = args[2];
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
    this.distance = distance_between_points(this.p1,this.p4);
    this.time=this.distance/this.velocity;
    this.t=0;
    this.lastUpdate=-1;
    this.angulo = 1; // = ao angulo inicial do carro
  }

  function distance_between_points(p1,p2){
    return Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2)+Math.pow((p2[2]-p1[2]),2));
  }

  update(){

  if (this.lastUpdate == -1)
  {
		this.lastUpdate = currTime;
		inc = 0;
	}
	else
  {
		var diff = currTime - this.lastUpdate;
		this.lastUpdate = currTime;
		inc = diff * this.velocity/(this.distance*1000);
	}
  else
  {

		this.t+=inc;
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

display()
{
  this.scene.pushMatrix();
    this.scene.translate(this.x,this.y,this.z);
    this.scene.rotate(this.angulo,0,1,0);
  this.scene.popMatrix();

}
