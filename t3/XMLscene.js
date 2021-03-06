var DEGREE_TO_RAD = Math.PI / 180;

/**
 * XMLscene class, representing the scene that is to be rendered.
 * @constructor
 */
function XMLscene(interface) {
    CGFscene.call(this);

    this.interface = interface;

    this.lightValues = {};
    this.prevTime=0;

}

XMLscene.prototype = Object.create(CGFscene.prototype);
XMLscene.prototype.constructor = XMLscene;

/**
 * Initializes the scene, setting some WebGL defaults, initializing the camera and the axis.
 */
XMLscene.prototype.init = function(application) {
    CGFscene.prototype.init.call(this, application);

    this.initCameras();

    this.enableTextures(true);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    this.setUpdatePeriod(10);

    this.axis = new CGFaxis(this);
    this.setPickEnabled(true);
    this.currentCamera='view1';
    this.cameraAnimation= new CameraAnimation(this,this.currentCamera,this.currentCamera);

     this.game= new MyGameBoard(this,false);
     this.bot_difficulty=1;

}


/**
 * Initializes the scene lights with the values read from the LSX file.
 */
XMLscene.prototype.initLights = function() {
    var i = 0;
    // Lights index.

    // Reads the lights from the scene graph.
    for (var key in this.graph.lights) {
        if (i >= 8)
            break;              // Only eight lights allowed by WebGL.

        if (this.graph.lights.hasOwnProperty(key)) {
            var light = this.graph.lights[key];

            this.lights[i].setPosition(light[1][0], light[1][1], light[1][2], light[1][3]);
            this.lights[i].setAmbient(light[2][0], light[2][1], light[2][2], light[2][3]);
            this.lights[i].setDiffuse(light[3][0], light[3][1], light[3][2], light[3][3]);
            this.lights[i].setSpecular(light[4][0], light[4][1], light[4][2], light[4][3]);

            this.lights[i].setVisible(true);
            if (light[0])
                this.lights[i].enable();
            else
                this.lights[i].disable();

            this.lights[i].update();

            i++;
        }
    }

}

XMLscene.prototype.logPicking = function ()
{
	if (this.pickMode == false) {
		if (this.pickResults != null && this.pickResults.length > 0) {
			for (var i=0; i< this.pickResults.length; i++) {
				var obj = this.pickResults[i][0];
				if (obj)
				{
					var customId = this.pickResults[i][1];
					console.log("Picked object: " + obj + ", with pick id " + customId);
          if(customId>100 && this.game.currentState==0)
          this.game.selectPiece(customId);

          else if(customId<100 && this.game.currentState==1)
            this.game.selectPositionMove(customId);
				}
			}
			this.pickResults.splice(0,this.pickResults.length);
		}
	}
}
/**
 * Initializes the scene cameras.
 */
XMLscene.prototype.initCameras = function() {
    this.camera = new CGFcamera(0.4,0.1,500,vec3.fromValues(40, 10, 30),vec3.fromValues(0, 0, 0));

}

/* Handler called when the graph is finally loaded.
 * As loading is asynchronous, this may be called already after the application has started the run loop
 */
XMLscene.prototype.onGraphLoaded = function()
{
    this.camera.near = this.graph.near;
    this.camera.far = this.graph.far;
    this.axis = new CGFaxis(this,this.graph.referenceLength);


    this.setGlobalAmbientLight(this.graph.ambientIllumination[0], this.graph.ambientIllumination[1],
    this.graph.ambientIllumination[2], this.graph.ambientIllumination[3]);

    this.gl.clearColor(this.graph.background[0], this.graph.background[1], this.graph.background[2], this.graph.background[3]);

    this.initLights();

    // Adds lights group.
    this.interface.addLightsGroup(this.graph.lights);
}



  XMLscene.prototype.update = function(currTime){
  	let time;
  	if(this.prevTime==0){
  	time=0;
  	}
  	else{
    time = currTime- this.prevTime;
  	}
  	    this.prevTime=currTime;

    this.graph.update(time/1000);
    this.game.update(time/1000);
    this.cameraAnimation.updateAnimation(time/1000);



}

/**
 * Displays the scene.
 */
XMLscene.prototype.display = function() {
    // ---- BEGIN Background, camera and axis setup

    this.logPicking();
    this.clearPickRegistration();

    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();

    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    this.pushMatrix();

    if (this.graph.loadedOk)
    {
        // Applies initial transformations.
        this.multMatrix(this.graph.initialTransforms);

		// Draw axis
		this.axis.display();

        var i = 0;
        for (var key in this.lightValues) {
            if (this.lightValues.hasOwnProperty(key)) {
                if (this.lightValues[key]) {
                    this.lights[i].setVisible(true);
                    this.lights[i].enable();
                }
                else {
                    this.lights[i].setVisible(false);
                    this.lights[i].disable();
                }
                this.lights[i].update();
                i++;
            }
        }

        // Displays the scene.
        this.graph.displayScene();

    }
	else
	{
		// Draw axis
		this.axis.display();
	}

      this.pushMatrix();
      this.changeView();
          if(this.graph.filename == "campo.xml"){
            this.translate(42,0.2,40);
            this.scale(0.22,1,0.22);
          }
          else if(this.graph.filename == "casino.xml"){
            this.translate(0,8.7,0);
            this.scale(0.22,1,0.22);
          }
        this.game.display();
      this.popMatrix();
    this.popMatrix();

    // ---- END Background, camera and axis setup

}

XMLscene.prototype.changeGraph = function(filename){
  this.graph = new MySceneGraph(filename, this);
}

XMLscene.prototype.changeView = function(viewName){
  if(viewName == "view1"){
    this.cameraAnimation = new CameraAnimation(this,this.currentCamera,viewName);
    this.cameraAnimation.done = false;
    this.currentCamera="view1";
  }
  else if(viewName == "view2"){
    if(this.graph.filename == "casino.xml"){
      this.cameraAnimation = new CameraAnimation(this,this.currentCamera,viewName);
      this.cameraAnimation.done = false;
      this.currentCamera="view2";
    }
    else if(this.graph.filename == "campo.xml"){
      this.cameraAnimation = new CameraAnimation(this,this.currentCamera,viewName);
      this.cameraAnimation.done = false;
      this.currentCamera="view2";
    }
  }

  else if(viewName == "view3"){
    if(this.graph.filename == "casino.xml"){
      this.cameraAnimation = new CameraAnimation(this,this.currentCamera,viewName);
      this.cameraAnimation.done = false;
      this.currentCamera="view3";
    }
    else if(this.graph.filename == "campo.xml"){
      this.cameraAnimation = new CameraAnimation(this,this.currentCamera,viewName);
      this.cameraAnimation.done = false;
      this.currentCamera="view3";
  }
  }

}

XMLscene.prototype.NewGame = function(){
  if(!this.game.botMode){
    this.game = new MyGameBoard(this,false);
  }
  else{
  this.game = new MyGameBoard(this,true);
}
}

XMLscene.prototype.Undo = function(){
  if(this.game.listOfPlays.length>0)
    this.game.undo();
}
XMLscene.prototype.changeMode = function(mode){
  if(mode == 'PlayerVsPlayer'){
    this.game = new MyGameBoard(this,false);
  }
  else if(mode == 'PlayerVsBot'){
    this.game = new MyGameBoard(this,true);
    this.game.bot_difficulty=this.bot_difficulty;
  }
}
XMLscene.prototype.changeDifficulty = function(difficulty){
  if(difficulty == 'easy'){
    this.bot_difficulty= 1;
    this.game.bot_difficulty=this.bot_difficulty;
  }
  else if(difficulty == 'hard'){
    this.bot_difficulty= 2;
    this.game.bot_difficulty=this.bot_difficulty;
  }
}
