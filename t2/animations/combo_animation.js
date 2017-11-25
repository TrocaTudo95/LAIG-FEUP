class ComboAnimation extends Animation{
  constructor(scene, speed, animations){
    super(scene, speed);
    this.animations = animations;
    this.index = 0;
    this.done=false;
  }

  checkStatus(){
    if(this.animations[this.index].done){
      this.index++;
      if(this.index == this.animations.length){
        this.done = true;
      }
    }
  }

  update(deltaTime){
    if(!this.done){
        this.animations[this.index].update(deltaTime);
        this.transformMatrix = this.animations[this.index].transformMatrix;
        this.checkStatus();
    }
    else{
      this.animations[this.index].update(deltaTime);
      this.transformMatrix = this.animations[this.index].transformMatrix;
    }

  }


  getMatrix(deltaTime) {


  }
}
