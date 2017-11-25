class ComboAnimation extends Animation{
  constructor(scene, speed, animations){
    super(scene, speed);
    this.animations = animations;
    this.index = 0;
    this.done=false;
    this.lastMatrix=null;
  }

  checkStatus(){
    if(this.animations[this.index].done){
      this.index++;

            if(this.index == this.animations.length){
        this.done = true;
      }
    }
  }



  getMatrix(deltaTime) {
    if(this.done)
    return this.lastMatrix;
   this.lastMatrix = this.animations[this.index].getMatrix(deltaTime);
   this.checkStatus();
   return this.lastMatrix;

  }
}
