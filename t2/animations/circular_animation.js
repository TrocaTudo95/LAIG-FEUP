class CircularAnimation extends Animation{
    constructor(scene, speed, centerX, centerY, centerZ, radius, startAng, rotAng){
        super(scene,speed);
        var DEGREE_TO_RAD = Math.PI/180;
        this.centerX=centerX;
        this.centerY=centerY;
        this.centerZ=centerZ;
        this.radius=radius;
        this.start_angle=startAng* DEGREE_TO_RAD;
        this.rotation_angle=rotAng* DEGREE_TO_RAD;
        this.angular_velocity=this.speed/this.radius;
        this.calculate_distance();
        this.totalTime=this.distance/this.speed;
        this.current_ang = 0;
        this.done=false;
    }


    getMatrix(deltaTime) {
        var m = mat4.create();
        mat4.identity(m);

        this.update(deltaTime);
        mat4.translate(m,m,[this.centerX,this.centerY,this.centerZ]);
        mat4.translate(m, m, [this.x, this.y, this.z]);
        mat4.rotate(m, m, Math.PI + this.start_angle + this.current_ang, [0, 1, 0]);

        return m;
    }

    calcNextPosition(delta_time){
        if(this.current_ang > this.rotation_angle){
            this.done = true;
            return;
        }
        let rotation= delta_time *this.angular_velocity;
        this.current_ang+=rotation;
        this.y=0;
        this.x=this.radius * Math.cos(this.start_angle + this.current_ang);
        this.z=-this.radius * Math.sin(this.start_angle + this.current_ang);

    }

    update(delta_time){
        this.calcNextPosition(delta_time);
    }

    calculate_distance(){
        this.distance=Math.abs(this.radius*this.rotation_angle);
    }

}
