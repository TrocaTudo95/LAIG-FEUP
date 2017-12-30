function CameraAnimation(scene,initialView,finalView){

  this.scene=scene;
  this.span=1;
  //InicialPosition
  if(initialView == "view1"){
    this.initialPosition=[40,10,30];
    this.initialTarget= [0,0,0];
  }
  else if(initialView == "view2"){
    if(this.scene.graph.filename == "casino.xml"){
      this.initialPosition=[10,10,30];
      this.initialTarget=[0,0,0];
    }
    else if(this.scene.graph.filename == "campo.xml"){
      this.initialPosition= [20,15,30];
      this.initialTarget=[10,0,0];
    }
  }
  else if(initialView == "view3"){
    if(this.scene.graph.filename == "casino.xml"){
      this.initialPosition=[5,10,15];
      this.initialTarget=[-2,0,-5];
    }
    else if(this.scene.graph.filename == "campo.xml"){
      this.initialPosition= [17,10,20];
      this.initialTarget=[12,0,5];
    }
  }

  //FinalPosition
  if(finalView == "view1"){
    this.finalPosition=[40,10,30];
    this.finalTarget=[0,0,0];
  }
  else if(finalView == "view2"){
    if(this.scene.graph.filename == "casino.xml"){
      this.finalPosition=[10,10,30];
      this.finalTarget=[0,0,0];
    }
    else if(this.scene.graph.filename == "campo.xml"){
      this.finalPosition=[20,15,30];
      this.finalTarget=[10,0,0];
    }
  }
  else if(finalView == "view3"){
    if(this.scene.graph.filename == "casino.xml"){
      this.finalPosition=[5,10,15];
      this.finalTarget=[-2,0,-5];
    }
    else if(this.scene.graph.filename == "campo.xml"){
      this.finalPosition=[17,10,20];
      this.finalTarget=[12,0,5];
    }
  }
  this.currTime=0;
  this.done = true;


  this.currXPosition;
  this.currYPosition;
  this.currZPosition;

  this.currXTarget;
  this.currYTarget;
  this.currZTarget;

  this.vetorTarget=[this.finalTarget[0]-this.initialTarget[0],this.finalTarget[1]-this.initialTarget[1],this.finalTarget[2]-this.initialTarget[2]];
  this.vetorPosition=[this.finalPosition[0]-this.initialPosition[0],this.finalPosition[1]-this.initialPosition[1],this.finalPosition[2]-this.initialPosition[2]];


};

/**
* Update the animation of the camera.
* @param {number} deltaTime
*/
CameraAnimation.prototype.updateAnimation=function(deltaTime){

  this.currTime += deltaTime;

  if (this.currTime >= this.span) {
      this.scene.camera.setPosition(vec3.fromValues(this.finalPosition[0],this.finalPosition[1],this.finalPosition[2]));
      this.scene.camera.setTarget(vec3.fromValues(this.finalTarget[0],this.finalTarget[1],this.finalTarget[2]));
      this.done=true;

      return;
  } else {

      var percentage = this.currTime / this.span;

      this.currXPosition=this.initialPosition[0]+percentage*this.vetorPosition[0];
      this.currYPosition=this.initialPosition[1]+percentage*this.vetorPosition[1];
      this.currZPosition=this.initialPosition[2]+percentage*this.vetorPosition[2];

      this.currXTarget=this.initialTarget[0]+percentage*this.vetorTarget[0];
      this.currYTarget=this.initialTarget[1]+percentage*this.vetorTarget[1];
      this.currZTarget=this.initialTarget[2]+percentage*this.vetorTarget[2];


      this.scene.camera.setPosition(vec3.fromValues(this.currXPosition,this.currYPosition,this.currZPosition));
      this.scene.camera.setTarget(vec3.fromValues(this.currXTarget,this.currYTarget,this.currZTarget));
  }

};
