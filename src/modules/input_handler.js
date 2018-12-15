var sensitivity = 0.002
function moveCamera(event, camera) {
  camera.rotateX( -1*event.movementY * sensitivity)
  camera.rotateY(-1*event.movementX * sensitivity)

}

function checkKey(e, object) {

    e = e || window.event;

    if (e.keyCode == '87') {
        object.forces.push(new THREE.Vector3(0.1,0,0))
    }
    else if (e.keyCode == '65') {
        object.forces.push(new THREE.Vector3(-0.1,0,0))
    }
    else if (e.keyCode == '68') {
        object.forces.push(new THREE.Vector3(0,0.1,0))
       // left arrow
    }
    else if (e.keyCode == '83') {
       object.forces.push(new THREE.Vector3(0,-0.1,0))
       // right arrow
    }

}


export {moveCamera, checkKey}
