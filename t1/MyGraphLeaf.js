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
        this.object= new MySphere(graph.scene,args);
        break;
        case 'cylinder':
        this.object= new MyCylinder(graph.scene, args);
        break;

      default:
      break;

    }
}

MyGraphLeaf.prototype.display= function(){
this.object.display();

}
