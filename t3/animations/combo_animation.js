class ComboAnimation extends Animation{
  /**
   * Bezier animation constructor.
   * @param scene Scene to apply the animation to
   * @param speed Animation time span.
   * @param animation animation to generate.
   */
  constructor(scene, speed, animations){
    super(scene, speed);
    this.animations = animations;
    this.index = 0;
    this.done=false;
    this.lastMatrix=null;
  }

  checkStatus(){ // check if the animation has ended
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
