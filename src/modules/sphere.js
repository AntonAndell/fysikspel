import {GameObject} from './gameobject';
class Sphere extends GameObject{
  constructor() {
    super(10, "Sphere")
    this.geometry = new THREE.SphereGeometry( 1, 32, 32)
    this.material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
    this.cube = new THREE.Mesh ( this.geometry, this.material )
    this.radius = 1

  }
  setMinMax(){
    this.minX = this.cube.position.x - this.radius
    this.minY = this.cube.position.y - this.radius
    this.minZ = this.cube.position.z - this.radius
    this.maxX = this.cube.position.x + this.radius
    this.maxY = this.cube.position.y + this.radius
    this.maxZ = this.cube.position.z + this.radius
  }

}

export {Sphere}
