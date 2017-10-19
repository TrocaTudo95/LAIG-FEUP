function MyPatch(scene,args) {

 
    this.scene=scene;
    this.partsU = parseInt(args[0]);
    this.partsV = parseInt(args[1]);
    this.degree1 = args[2];
    this.degree2 = args[3];
    this.controlPoints = args[4];

    var knots1 = this.getKnotsVector(this.degree1);
    var knots2 = this.getKnotsVector(this.degree2);


    var nurbsSurface = new CGFnurbsSurface(this.degree1, this.degree2, knots1, knots2, this.controlPoints);
  
    getSurfacePoint = function(u, v) {

        return nurbsSurface.getPoint(u, v);

    };

this.obj = new CGFnurbsObject(scene,getSurfacePoint,this.partsU,this.partsV);

    
}

MyPatch.prototype = Object.create(CGFobject.prototype);
MyPatch.prototype.constructor = MyPatch;

MyPatch.prototype.getKnotsVector = function(degree) {

    var v = new Array();
    for (var i = 0; i <= degree; i++) {
        v.push(0);
    }
    for (var i = 0; i <= degree; i++) {
        v.push(1);
    }
    return v;
};




MyPatch.prototype.display = function() {
    this.scene.pushMatrix();
    this.obj.display(this);
    this.scene.popMatrix();
};
