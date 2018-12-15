class Engine{
  constructor(time_step) {
    this.dt = time_step
    this.g = 9.82
  }


  intersectBox(a, b) {
      a.setMinMax()
      b.setMinMax()
      return (a.minX <= b.maxX && a.maxX >= b.minX) &&
             (a.minY <= b.maxY && a.maxY >= b.minY) &&
             (a.minZ <= b.maxZ && a.maxZ >= b.minZ);
    }

  intersectSphere(sphere, other) {
    other.setMinMax()
    sphere.setMinMax()
    // we are using multiplications because it's faster than calling Math.pow
      var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                               (sphere.y - other.y) * (sphere.y - other.y) +
                               (sphere.z - other.z) * (sphere.z - other.z));
      return distance < (sphere.radius + other.radius);
    }

  intersectSphereBox(sphere, box) {

    sphere.setMinMax()
    box.setMinMax()
    // get box closest point to sphere center by clamping
    var x = Math.max(box.minX, Math.min(sphere.cube.position.x, box.maxX));
    var y = Math.max(box.minY, Math.min(sphere.cube.position.y, box.maxY));
    var z = Math.max(box.minZ, Math.min(sphere.cube.position.z, box.maxZ));
    // this is the same as isPointInsideSphere
    var distance = Math.sqrt((x - sphere.cube.position.x) * (x - sphere.cube.position.x) +
                             (y - sphere.cube.position.y) * (y - sphere.cube.position.y) +
                             (z - sphere.cube.position.z) * (z - sphere.cube.position.z));
    //console.log(sphere.cube.position.y,box.maxY)
    if (distance < sphere.radius){
      console.log("heres")
      sphere.v.y = sphere.v.y*-1
    }
  }

  handleCollisions(objects){
    for (var i = 0; i < objects.length; i++){
      for (var j = 0; j < objects.length; j++){
        if (objects[i] != objects[j] && i<j){
          switch(objects[i].type){
            case ("Sphere"):
              switch(objects[j].type){
                case ("Sphere"):
                  this.intersectSphere(objects[i],objects[j])
                case ("Box"):
                  this.intersectSphereBox(objects[i],objects[j])
                  break;
              break;
              }
            case ("Box"):
              switch(objects[j].type){
                case ("Sphere"):
                  this.intersectSphereBox(objects[j],objects[i])
                  break;
                case ("Box"):
                  this.intersectBox(objects[i],objects[j])
                  break;
              break;
              }
            }
          }
        }
      }
    }

  tick(objects){
    for (var i = 0; i < objects.length; i++){
      if (!objects[i].static){
        objects[i].forces.push(new THREE.Vector3(0,-1*this.g,0))
        objects[i].updateSpeed(this.dt)
        objects[i].updatePos(this.dt)
      }
    }
  this.handleCollisions(objects)
  }
}

export { Engine}
