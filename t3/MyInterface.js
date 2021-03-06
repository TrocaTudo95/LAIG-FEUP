 /**
 * MyInterface class, creating a GUI interface.
 * @constructor
 */
function MyInterface() {
    //call CGFinterface constructor
    CGFinterface.call(this);
}
;

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * Initializes the interface.
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
    // call CGFinterface init
    CGFinterface.prototype.init.call(this, application);

    // init GUI. For more information on the methods, check:
    //  http://workshop.chromeexperiments.com/examples/gui

    this.gui = new dat.GUI();

    this.scenes = this.gui.addFolder("Scenes");
  	this.scenes.open();
  	this.gui.scene = 'campo';
  	this.gui.sceneList = this.scenes.add(this.gui, 'scene', ['campo', 'casino']);
    this.gui.sceneList.onFinishChange(function(){
      this.removeFolder("Lights",this.gui);
  		this.scene.changeGraph(this.gui.scene + '.xml');
      this.scene.changeView(this.gui.view);
  	}.bind(this))


    this.views = this.gui.addFolder("Views");
    this.views.open();
    this.gui.view = 'view1';
    this.gui.viewList = this.views.add(this.gui, 'view', ['view1', 'view2','view3']);
    this.gui.viewList.onFinishChange(function(){
      this.scene.changeView(this.gui.view);
    }.bind(this))

    this.menu = this.gui.addFolder('Menu');
    this.menu.open();
    this.menu.add(this.scene, 'NewGame').name('New Game');
    this.menu.add(this.scene, 'Undo').name('Undo');
    this.gui.mode = 'PlayerVsPlayer';
    this.gui.modeList = this.menu.add(this.gui, 'mode', ['PlayerVsPlayer', 'PlayerVsBot']);
    this.gui.modeList.onFinishChange(function(){
      this.scene.changeMode(this.gui.mode);
    }.bind(this))
    this.gui.difficulty = 'easy';
    this.gui.diffList = this.menu.add(this.gui, 'difficulty', ['easy', 'hard']);
    this.gui.diffList.onFinishChange(function(){
      this.scene.changeDifficulty(this.gui.difficulty);
    }.bind(this))



    // add a group of controls (and open/expand by defult)

    return true;
};

/**
 * Adds a folder containing the IDs of the lights passed as parameter.
 */
MyInterface.prototype.addLightsGroup = function(lights) {

    var group = this.gui.addFolder("Lights");

    // add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
    // e.g. this.option1=true; this.option2=false;

    for (var key in lights) {
        if (lights.hasOwnProperty(key)) {
            this.scene.lightValues[key] = lights[key][0];
            group.add(this.scene.lightValues, key);
        }
    }
};

MyInterface.prototype.removeFolder = function(name,parent) {
	if(!parent)
		parent = this.gui;
  var folder = parent.__folders[name];
  if (!folder) {
    return;
  }
  folder.close();
  parent.__ul.removeChild(folder.domElement.parentNode);
  delete parent.__folders[name];
  parent.onResize();
};

MyInterface.prototype.processKeyboard = function(event) {
CGFinterface.prototype.processKeyboard.call(this,event);

switch (event.keyCode)
	{
      case (99):
      if(this.scene.game.currentState==1 ||  this.scene.game.currentState==2){
      this.scene.game.currentState=0;
      for(let i=0;i < this.scene.game.possibleMoves.length;i++){
        let posS = this.scene.game.possibleMoves[i];
        let pos = parseInt(posS)-1;
        if(this.scene.game.possibleMoves[i] == "50"){
          pos=40;
        }
        this.scene.game.board.circles[pos].possibleMove = false;

      }
      this.scene.game.possibleMoves=[];
      alert("Choose another piece to move!");
    }
      break;


  }
};
