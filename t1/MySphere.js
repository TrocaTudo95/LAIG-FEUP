/**
 * MySphere
 * @param scene CGFscene where the Sphere will be displayed
 * @param reader CGFXMLreader
 * @param newElement tag MySphere to be read
 * @constructor
 */
function MySphere(scene, args) {
      CGFobject.call(this, scene);

      this.sceneGraph = scene;
      this.args=args;
      this.initBuffers();
  
  };

  MySphere.prototype = Object.create(CGFobject.prototype);
  MySphere.prototype.constructor = MySphere;

  /**
   * Initializes the Sphere buffers (vertices, indices, normals and texCoords)
   */
  MySphere.prototype.initBuffers = function() {
     
      var stacks = parseInt(this.args[1]);
      var radius = parseInt(this.args[0]);
      var slices = parseInt(this.args[2]);


      this.vertices = [];
      this.normals = [];
      this.indices = [];
      this.TexCoords = [];

      var ang_slices = (2 * Math.PI) / slices;
      var ang_stacks = Math.PI / stacks;



      for (let i = 0; i <= stacks; i++) {
          for (let j = 0; j <= slices; j++) {
              let x = radius * Math.cos(ang_slices * j) * Math.sin(ang_stacks * i);
              let y = radius * Math.sin(ang_slices * j) * Math.sin(ang_stacks * i);
              let z = radius * Math.cos(ang_stacks * i);

              this.vertices.push(x, y, z);
              this.normals.push(x, y, z);
              this.TexCoords.push(j / slices, 1 - i / stacks);
          }
      }


      for (let i = 0; i < stacks; i++) {
          for (let j = 0; j < slices; j++) {
              this.indices.push(i * (slices + 1) + j, (i + 1) * (slices + 1) + j, (i + 1) * (slices + 1) + j + 1);
              this.indices.push(i * (slices + 1) + j, (i + 1) * (slices + 1) + j + 1, i * (slices + 1) + j + 1);
          }
      }




      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
  }
