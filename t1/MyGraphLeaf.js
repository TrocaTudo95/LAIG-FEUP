/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, type,args) {
    switch (type) {
      case 'rectangle':
      this.object =new MyRectangle(graph.scene, args);
        break;
        case 'triangle':
        this.object = new MyTriangle(graph.scene,args);
        break;
        case 'sphere':
        this.object= new MyEsfera(graph.scene,args);
        break;
        case 'cylinder':
        this.object= new MyCylinder(graph.scene, args);
        break;
        case 'patch':
        this.object = new MyPatch(graph.scene,args);
        break;

      default:
      break;

    }
}

MyGraphLeaf.prototype.display= function(){
this.object.display();

}


MyGraphLeaf.prototype.scaleTexCoords = function(ampS, ampT) {
      


  
    for (var i = 0; i < this.object.texCoords.length; i += 2) {
        this.object.texCoords[i] = this.object.originalTexCoords[i] / ampS;
        this.object.texCoords[i + 1] = this.object.originalTexCoords[i + 1] / ampT;
        }
    this.object.updateTexCoordsGLBuffers();
    

    }