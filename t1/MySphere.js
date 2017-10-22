/**
 * MySphere
 * @constructor
 */
function MySphere(scene, args) {
    CGFobject.call(this, scene);

    this.radius = parseFloat(args[0]);
    this.slices = parseInt(args[1]);
	this.stacks = parseInt(args[2]);

    this.initBuffers();
};

MySphere.prototype = Object.create(CGFobject.prototype);
MySphere.prototype.constructor = MySphere;
/**
*Init Buffers
*/
MySphere.prototype.initBuffers = function() {

    this.vertices = [];
    this.normals = [];
    this.indices = [];
    this.originalTexCoords = [];

    var theta = (2 * Math.PI) / this.slices; // 0-360 deg -- longitude
    var phi = (Math.PI) / this.stacks; // 0-180 deg -- latitude
    var n_verts = 0;


    for (var i = 0; i <= this.slices; i++) {
        for (var j = 0; j <= this.stacks; j++) {

            let x = Math.cos(theta * i) * Math.sin(phi * j);   
            let y = Math.sin(theta * i) * Math.sin(phi * j);
            let z = Math.cos(phi * j);

            this.vertices.push(this.radius * x, this.radius * y, this.radius * z);
            n_verts++;

            this.normals.push(x, y, z);

            if (i > 0 && j > 0) {
                this.indices.push(n_verts - this.stacks - 1, n_verts - 1, n_verts - this.stacks - 2);
                this.indices.push(n_verts - 1, n_verts - 2, n_verts - this.stacks - 2);
            }

            this.originalTexCoords.push(0.5 * x + 0.5, 0.5 - 0.5 * y);
        }

    }

    this.texCoords = this.originalTexCoords.slice();
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
};
