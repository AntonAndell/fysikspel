class Object{
  constructor(stat, type) {
    this.static = stat
    this.type = type
    this.minX = 0
    this.minY = 0
    this.minZ = 0
    this.maxX = 0
    this.maxY = 0
    this.maxZ = 0

  }

}

class GameObject extends Object{
  constructor(mass, type) {
    super(false, type)
    this.mass = mass
    this.v = new THREE.Vector3(0,0,0)
    this.forces = new Array()
  }

  updateSpeed(time_step){
    var f = new THREE.Vector3(0,0,0);
    for(var i = 0; i < this.forces.length; i++){
      f.add(this.forces[i])
    }
    f.multiplyScalar(1/this.mass)
    f.multiplyScalar(time_step)
    this.v.add(f)
    this.forces = []

  }
  updatePos(time_step){
    var change = new THREE.Vector3(this.v.x, this.v.y, this.v.z)
    change.multiplyScalar(time_step)
    this.cube.position.add(change)
  }
}
class StaticObject extends Object{
  constructor(type) {
    super(true, type)
  }

}
export {GameObject, StaticObject}
