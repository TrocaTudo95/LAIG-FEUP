
class LinearAnimation extends Animation{
  constructor(scene,speed, controlPoints){
    super(scene,speed);
    this.control_points=controlPoints;
    this.speed = speed;
    this.counter = 0;
    this.current_rotation = 0;
    this.control = [0,0,0];
    this.TotalDistance= this.calculateTotalDistance();
    this.totalTime=this.TotalDistance/this.speed;
    this.calcNextPoints();
    this.done=false;

  }

  distanceBetweenPoints(p1,p2){
    let distance = Math.sqrt(Math.pow((p2[0] - p1[0]), 2) +Math.pow(p2[1] - p1[1], 2) +Math.pow(p2[2] - p1[2], 2));
    return distance;
  }

  calculateTotalDistance(){
    let distance=0;
    for(let i=0;i<this.control_points.length-1;i++){
      distance +=  this.distanceBetweenPoints(this.control_points[i],this.control_points[i+1]);
    }
    return distance;
  }



  getMatrix(deltaTime) {
  	var m = mat4.create();
      mat4.identity(m);

      this.update(deltaTime);

      mat4.translate(m, m, [this.x, this.y, this.z]);
      mat4.rotate(m, m, this.current_rotation, [0, 1, 0]);

  	return m;
  }

  calcNextPoints(){
    this.x1 = this.control_points[this.counter][0];
    this.y1 = this.control_points[this.counter][1];
    this.z1 = this.control_points[this.counter][2];

    this.x = this.x1;
    this.y = this.y1;
    this.z = this.z1;

    if (this.counter + 1 <  this.control_points.length){
        this.x2 = this.control_points[this.counter+1][0];
        this.y2 = this.control_points[this.counter+1][1];
        this.z2 = this.control_points[this.counter+1][2];
    }
    else {

        this.done = true;
        return;
    }

    this.distX = this.x2-this.x1;
    this.distY = this.y2-this.y1;
    this.distZ = this.z2-this.z1;

    var p1 = [this.x1, this.y1, this.z1];
    var p2 = [this.x2, this.y2, this.z2];
    var distance = this.distanceBetweenPoints(p1,p2);
    var time = distance / this.speed;

    this.current_rotation = Math.atan2(p2[0] - p1[0], p2[2] - p1[2]);

    this.speed_x = this.distX / time;
    this.speed_y = this.distY / time;
    this.speed_z = this.distZ / time;


    this.control = [0,0,0];
    this.counter++;

  }


   update(deltaTime){
     this.x += this.speed_x * deltaTime;
     this.control[0] += this.speed_x * deltaTime ;

     this.y += this.speed_y * deltaTime;
     this.control[1] += this.speed_y * deltaTime;

     this.z += this.speed_z * deltaTime;
     this.control[2] += this.speed_z * deltaTime;

     if ((Math.abs(this.distX) <= Math.abs(this.control[0])) &&
         (Math.abs(this.distY) <= Math.abs(this.control[1])) &&
         (Math.abs(this.distZ) <= Math.abs(this.control[2]))){
         this.calcNextPoints();
         return;
     }

     if(this.done)
         return;

   }



}
