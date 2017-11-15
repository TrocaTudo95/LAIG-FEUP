class LinearAnimation extens Animation{
  constructor(scene,args){
    super(scene,args[0],args[1]);
    this.control_points=args[2];
    this.done = false;
    this.time_elapsed = 0;
    this.indice=0;
    this.distancePoints=[];
    this.timePoints=[];
    this.totalDistance=0;
    this.vectors=[];

  }

  function distance_between_points(point1,point2){
  return

  }
  init_variables(){
    let dis;
    let temp_vector=[];
    for(let i=1; i< this.control_points.length; i++){
      dis= Math.sqrt( Math.pow(this.control_points[i][0]-this.control_points[i-1][0],2)+ Math.pow(this.control_points[i][1]-this.control_points[i-1][1],2)+ Math.pow(this.control_points[i][2]-this.control_points[i-1][2],2));
    this.distancePoints.push(dis);
    this.timePoints.push.push(dis/this.speed);
    temp_vector[0]=this.control_points[i][0]-this.control_points[i-1][0];
    temp_vector[1]=this.control_points[i][1]-this.control_points[i-1][1];
    temp_vector[2]=this.control_points[i][2]-this.control_points[i-1][2];
    this.vectors.push(temp_vector);
    this.totalDistance+=dis;
  }

  this.ang=Math.atan(this.vectors[this.indice][0]/this.vectors[this.indice][2]);
  }
   update(){
     if (this.time_elapsed >= this.time)
     this.done = true;

      this.time_elapsed+=time/1000;

      if (this.time_elapsed >= this.timePoints[this.indice]) {

          if(this.indice != this.timePoints.length-1)
          {
            this.indice++;
          }

          this.ang=Math.atan(this.vectors[this.indice][0]/this.vectors[this.indice][2]);
        }

        
     var minTime;
        var maxTime;

        if (this.Indice == 0) {
          console.log("ZERO");
            maxTime = this.timeEachPoints[this.indice];
            minTime = 0;
        } else {
            maxTime = this.timeEachPoints[this.indice];
            minTime = this.timeEachPoints[this.indice - 1];
        }


         var percentage = (this.currTime - minTime) / maxTime;
         this.x = this.vectors[this.indice][0] * percentage;
         this.y = this.vectors[this.Indice][1] * percentage;
         this.z = this.vectors[this.Indice][2] * percentage;

   }


   display(){
     let x=this.controlPoints[this.Indice].x+this.x;
     let y=this.controlPoints[this.Indice].y+this.y;
     let z=this.controlPoints[this.Indice].z+this.z;

     this.scene.translate(this.controlPoints[this.Indice].x+this.x,this.controlPoints[this.Indice].y+this.y,this.controlPoints[this.Indice].z+this.z);
     this.scene.rotate(this.ang,0,1,0);
   }
}
