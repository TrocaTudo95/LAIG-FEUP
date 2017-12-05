/**
 * MyGraphNode class, representing an intermediate node in the scene graph.
 * @constructor
**/

function MyGraphNode(graph, nodeID) {
    this.graph = graph;

    this.nodeID = nodeID;

    // IDs of child nodes.
    this.children = [];

    // IDs of child nodes.
    this.leaves = [];

    // The material ID.
    this.materialID = null ;

    // The texture ID.
    this.textureID = null ;

    this.animations =[];
    this.prevTime=0;


    this.transformMatrix = mat4.create();
    mat4.identity(this.transformMatrix);
}

/**
 * Adds the reference (ID) of another node to this node's children array.
 */
MyGraphNode.prototype.addChild = function(nodeID) {
    this.children.push(nodeID);
}

/**
 * Adds a leaf to this node's leaves array.
 */
MyGraphNode.prototype.addLeaf = function(leaf) {
    this.leaves.push(leaf);
}
/**
* Display the leaves
*/
MyGraphNode.prototype.display = function(){


  for(var i = 0; i < this.leaves.length; i++){
    this.leaves[i].display();

}

}

MyGraphNode.prototype.addAnimation =function(animationID){
    this.animations.push(animationID);
}


/**
*Gets the animation from the node
*/
MyGraphNode.prototype.getAnimTransform = function(currentSeconds) {
    let elapsedTime = 0;
    for (let i = 0; i < this.animations.length; i++) {
        let animation = this.graph.animations[this.animations[i]];
        if (elapsedTime + animation.totalTime > currentSeconds  || i + 1 == this.animations.length) {
            return animation.getMatrix(currentSeconds);
            break;
        }
        elapsedTime += animation.totalTime;
    }
    return null;
}
