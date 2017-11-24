function LinearAnimation(scene, id, controlPoints, speed) {
    Animation.call(this, scene, id);
    this.controlPoints = controlPoints;
    this.speed = speed;
    this.counter = 0;
    this.currRotation = 0;
    this.control = [0,0,0];

    this.calculateTrajectory();

}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.getMatrix = function(deltaT) {
	var m = mat4.create();
    mat4.identity(m);

    this.updateAnimation(deltaT);

    mat4.translate(m, m, [this.x, this.y, this.z]);
    mat4.rotate(m, m, this.currRotation, [0, 1, 0]);

	return m;
}

LinearAnimation.prototype.calculateDistance = function(p1, p2) {
    var a = Math.pow((p2[0] - p1[0]), 2);
    var b = Math.pow(p2[1] - p1[1], 2);
    var c = Math.pow(p2[2] - p1[2], 2);

    var result = Math.sqrt(a+b+c);

    return result;
}

LinearAnimation.prototype.calculateRotation = function(p1, p2) {
	var rot = Math.atan2(p2[0] - p1[0], p2[2] - p1[2]);

    return rot;
}

LinearAnimation.prototype.calculateTrajectory = function(){
    this.x1 = this.controlPoints[this.counter][0];
    this.y1 = this.controlPoints[this.counter][1];
    this.z1 = this.controlPoints[this.counter][2];

    this.x = this.x1;
    this.y = this.y1;
    this.z = this.z1;

    if (this.counter + 1 <  this.controlPoints.length){
        this.x2 = this.controlPoints[this.counter+1][0];
        this.y2 = this.controlPoints[this.counter+1][1];
        this.z2 = this.controlPoints[this.counter+1][2];
    }
    else {

        this.inUse = false;
        return;
    }

    this.distX = this.x2-this.x1;
    this.distY = this.y2-this.y1;
    this.distZ = this.z2-this.z1;

    var p1 = [this.x1, this.y1, this.z1];
    var p2 = [this.x2, this.y2, this.z2];
    var distance = this.calculateDistance(p1,p2);
    var time = distance / this.speed;

    this.currRotation = this.calculateRotation(p1,p2);

    this.speed_x = this.distX / time;
    this.speed_y = this.distY / time;
    this.speed_z = this.distZ / time;


    this.control = [0,0,0];
    this.counter++;

}

LinearAnimation.prototype.updateAnimation = function(deltaTime){

    this.x += this.speed_x * deltaTime / 1000;
    this.control[0] += this.speed_x * deltaTime / 1000;

    this.y += this.speed_y * deltaTime / 1000;
    this.control[1] += this.speed_y * deltaTime / 1000;

    this.z += this.speed_z * deltaTime / 1000;
    this.control[2] += this.speed_z * deltaTime / 1000;

    if ((Math.abs(this.distX) <= Math.abs(this.control[0])) &&
        (Math.abs(this.distY) <= Math.abs(this.control[1])) &&
        (Math.abs(this.distZ) <= Math.abs(this.control[2]))){
        this.calculateTrajectory();
        return;
    }

    if(this.inUse == false)
        return;

}

LinearAnimation.prototype.restartAnimation = function(){
    this.counter = 0;
    this.currRotation = 0;
    this.control = [0,0,0];
    this.calculateTrajectory();
    this.inUse = false;

}
