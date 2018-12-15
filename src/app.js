import {Sphere} from './modules/sphere';
import {Wall} from './modules/wall';
import {sum, product} from './modules/math-functions';
import {GameObject} from './modules/gameobject';
import {Engine} from './modules/physics_engine'
import {checkKey, moveCamera} from './modules/input_handler'
document.onkeydown = checkKey;

// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 10
camera.position.y = 5

//camera.lookAt(new THREE.Vector3(0,0,0));




// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

let sphere = new Sphere();
let wall = new Wall
let engine = new Engine(0.1)
var objects = [sphere, wall]
var staticObjects = [wall]

wall.cube.position.y = -8
scene.add(sphere.cube)
scene.add(wall.cube)

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

document.addEventListener("keydown", event=>{
  checkKey(event, sphere)
})
renderer.domElement.addEventListener('mousemove', event=>{
  moveCamera(event, camera)
})


function animate() {
	requestAnimationFrame( animate )
  engine.tick(objects)
  console.log(sphere)
	//cube.rotation.x += 0.04;
	//cube.rotation.y += 0.04;
  //cube.position.add(new THREE.Vector3( 0, 0.01, 0 ))
	renderer.render( scene, camera )
}






animate()
