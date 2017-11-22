class CircularAnimation extends Animation{
  //args[0]-id
  //args[1]-speed
  //args[2]-center
  //args[3]-radius
  //args[4]-start_angle
  //args[5]-rotation_angle
  constructor(scene,args){
  super(scene,args[0],args[1]);
  this.center[0]=parseFloat(args[2][0]);
  this.center[1]=parseFloat(args[2][1]);
  this.center[2]=parseFloat(args[2][2]);
  this.radius=parseFloat(args[3]);
  this.start_angle=parseFloat(args[4]);
  this.rotation_angle=parseFloat(args[5]);
  this.initial_position();
  this.angular_velocity=this.velocity/this.radius;
  this.calulate_distance();
  this.time=this.distance/this.velocity;
}

update(delta_time,is_updated){
  if (this.is_updated != is_updated || this.done)
return;

this.time_elapsed+=delta_time/1000;
let rotation= delta_time/1000 *this.angular_velocity;
this.rotation_angle+=rotation;
this.is_updated= !this.is_updated;

if (this.time_elapsed >= this.time)
this.done = true;

}

display(){
  this.scene.translate(this.center[0],this.center[1],this.center[2]);
   this.scene.rotate(Math.PI / 2 + this.start_angle + this.rotation_angle, 0, 1, 0);
  this.scene.translate(this.radius* Math.sin(this.start_angle + this.rotation_angle), 0, this.radius * Math.cos(this.start_angle + this.rotation_angle));

}

calculate_distance(){
  this.distance=this.radius*this.rotation_angle;
}

  initial_position(){
    this.position = [this.radius * Math.sin(this.start_angle), 0, this.radius * Math.cos(this.start_angle)];
    this.done = false;
    this.time_elapsed = 0;
    this.current_ang = 0;
    this.is_updated=false;

  }
}
