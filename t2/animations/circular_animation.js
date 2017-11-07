class CircularAnimation extens Animation{
  //args[0]-id
  //args[1]-time
  //args[2]-radius
  //args[3]-start_angle
  //args[4]-rotation_angle
  //args[5]-velocity
  constructor(scene,args){
  super(scene,args[0],args[1]);
  this.radius=args[2];
  this.start_angle=args[3];
  this.rotation_angle=args[4];
  this.velocity=args[5];
  this.initial_position();
  this.angular_velocity=this.velocity/this.radius;
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

  initial_position(){
    this.position = [this.radius * Math.sin(this.start_angle), 0, this.radius * Math.cos(this.start_angle)];
    this.done = false;
    this.time_elapsed = 0;
    this.current_ang = 0;
    this.is_updated=false;
  }
}
