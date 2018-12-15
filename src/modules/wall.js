import {StaticObject} from './gameobject';
class Wall extends StaticObject{
  constructor() {
    super("Box")
    this.geometry = new THREE.BoxGeometry( 5, 0.3, 5)
    this.material = new THREE.MeshStandardMaterial( { color: 0xff5100, flatShading: true, metalness: 0, roughness: 1 })
    this.cube = new THREE.Mesh ( this.geometry, this.material )
    this.x = this.cube.position.x
    this.y = this.cube.position.y
    this.z = this.cube.position.z
    this.width = 5
    this.height = 0.3
    this.depth = 5

  }

  setMinMax(){
    this.minX = this.cube.position.x - this.width
    this.minY = this.cube.position.y - this.height
    this.minZ = this.cube.position.z - this.depth
    this.maxX = this.cube.position.x + this.width
    this.maxY = this.cube.position.y + this.height
    this.maxZ = this.cube.position.z + this.depth
  }

}

export {Wall}
