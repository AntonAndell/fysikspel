/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./src/modules/gameobject.js ***!
  \***********************************/
/*! exports provided: GameObject, StaticObject */
/*! exports used: GameObject, StaticObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GameObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return StaticObject; });\nclass Object{\n  constructor(stat, type) {\n    this.static = stat\n    this.type = type\n    this.minX = 0\n    this.minY = 0\n    this.minZ = 0\n    this.maxX = 0\n    this.maxY = 0\n    this.maxZ = 0\n\n  }\n\n}\n\nclass GameObject extends Object{\n  constructor(mass, type) {\n    super(false, type)\n    this.mass = mass\n    this.v = new THREE.Vector3(0,0,0)\n    this.forces = new Array()\n  }\n\n  updateSpeed(time_step){\n    var f = new THREE.Vector3(0,0,0);\n    for(var i = 0; i < this.forces.length; i++){\n      f.add(this.forces[i])\n    }\n    f.multiplyScalar(1/this.mass)\n    f.multiplyScalar(time_step)\n    this.v.add(f)\n    this.forces = []\n\n  }\n  updatePos(time_step){\n    var change = new THREE.Vector3(this.v.x, this.v.y, this.v.z)\n    change.multiplyScalar(time_step)\n    this.cube.position.add(change)\n  }\n}\nclass StaticObject extends Object{\n  constructor(type) {\n    super(true, type)\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbWVvYmplY3QuanM/NmI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBPYmplY3R7XG4gIGNvbnN0cnVjdG9yKHN0YXQsIHR5cGUpIHtcbiAgICB0aGlzLnN0YXRpYyA9IHN0YXRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5taW5YID0gMFxuICAgIHRoaXMubWluWSA9IDBcbiAgICB0aGlzLm1pblogPSAwXG4gICAgdGhpcy5tYXhYID0gMFxuICAgIHRoaXMubWF4WSA9IDBcbiAgICB0aGlzLm1heFogPSAwXG5cbiAgfVxuXG59XG5cbmNsYXNzIEdhbWVPYmplY3QgZXh0ZW5kcyBPYmplY3R7XG4gIGNvbnN0cnVjdG9yKG1hc3MsIHR5cGUpIHtcbiAgICBzdXBlcihmYWxzZSwgdHlwZSlcbiAgICB0aGlzLm1hc3MgPSBtYXNzXG4gICAgdGhpcy52ID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApXG4gICAgdGhpcy5mb3JjZXMgPSBuZXcgQXJyYXkoKVxuICB9XG5cbiAgdXBkYXRlU3BlZWQodGltZV9zdGVwKXtcbiAgICB2YXIgZiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5mb3JjZXMubGVuZ3RoOyBpKyspe1xuICAgICAgZi5hZGQodGhpcy5mb3JjZXNbaV0pXG4gICAgfVxuICAgIGYubXVsdGlwbHlTY2FsYXIoMS90aGlzLm1hc3MpXG4gICAgZi5tdWx0aXBseVNjYWxhcih0aW1lX3N0ZXApXG4gICAgdGhpcy52LmFkZChmKVxuICAgIHRoaXMuZm9yY2VzID0gW11cblxuICB9XG4gIHVwZGF0ZVBvcyh0aW1lX3N0ZXApe1xuICAgIHZhciBjaGFuZ2UgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLnYueCwgdGhpcy52LnksIHRoaXMudi56KVxuICAgIGNoYW5nZS5tdWx0aXBseVNjYWxhcih0aW1lX3N0ZXApXG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLmFkZChjaGFuZ2UpXG4gIH1cbn1cbmNsYXNzIFN0YXRpY09iamVjdCBleHRlbmRzIE9iamVjdHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHN1cGVyKHRydWUsIHR5cGUpXG4gIH1cblxufVxuZXhwb3J0IHtHYW1lT2JqZWN0LCBTdGF0aWNPYmplY3R9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dhbWVvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sphere__ = __webpack_require__(/*! ./modules/sphere */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_wall__ = __webpack_require__(/*! ./modules/wall */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_math_functions__ = __webpack_require__(/*! ./modules/math-functions */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_gameobject__ = __webpack_require__(/*! ./modules/gameobject */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_physics_engine__ = __webpack_require__(/*! ./modules/physics_engine */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_input_handler__ = __webpack_require__(/*! ./modules/input_handler */ 6);\n\n\n\n\n\n\ndocument.onkeydown = __WEBPACK_IMPORTED_MODULE_5__modules_input_handler__[\"a\" /* checkKey */];\n\n// We need 3 things everytime we use Three.js\n // Scene + Camera + Renderer\nconst scene = new THREE.Scene()\nconst camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )\nconst renderer = new THREE.WebGLRenderer({ antialias: true})\n\nrenderer.setSize( window.innerWidth, window.innerHeight )\n// sets renderer background color\nrenderer.setClearColor(\"#222222\")\ndocument.body.appendChild( renderer.domElement )\ncamera.position.z = 10\ncamera.position.y = 5\n\n//camera.lookAt(new THREE.Vector3(0,0,0));\n\n\n\n\n// resize canvas on resize window\nwindow.addEventListener( 'resize', () => {\n\tlet width = window.innerWidth\n\tlet height = window.innerHeight\n\trenderer.setSize( width, height )\n\tcamera.aspect = width / height\n\tcamera.updateProjectionMatrix()\n})\n\nlet sphere = new __WEBPACK_IMPORTED_MODULE_0__modules_sphere__[\"a\" /* Sphere */]();\nlet wall = new __WEBPACK_IMPORTED_MODULE_1__modules_wall__[\"a\" /* Wall */]\nlet engine = new __WEBPACK_IMPORTED_MODULE_4__modules_physics_engine__[\"a\" /* Engine */](0.1)\nvar objects = [sphere, wall]\nvar staticObjects = [wall]\n\nwall.cube.position.y = -8\nscene.add(sphere.cube)\nscene.add(wall.cube)\n\n// ambient light\nvar ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)\nscene.add( ambientLight )\n\n// point light\nvar pointLight = new THREE.PointLight( 0xffffff, 1 );\npointLight.position.set( 25, 50, 25 );\nscene.add( pointLight );\n\ndocument.addEventListener(\"keydown\", event=>{\n  Object(__WEBPACK_IMPORTED_MODULE_5__modules_input_handler__[\"a\" /* checkKey */])(event, sphere)\n})\nrenderer.domElement.addEventListener('mousemove', event=>{\n  Object(__WEBPACK_IMPORTED_MODULE_5__modules_input_handler__[\"b\" /* moveCamera */])(event, camera)\n})\n\n\nfunction animate() {\n\trequestAnimationFrame( animate )\n  engine.tick(objects)\n  console.log(sphere)\n\t//cube.rotation.x += 0.04;\n\t//cube.rotation.y += 0.04;\n  //cube.position.add(new THREE.Vector3( 0, 0.01, 0 ))\n\trenderer.render( scene, camera )\n}\n\n\n\n\n\n\nanimate()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwaGVyZX0gZnJvbSAnLi9tb2R1bGVzL3NwaGVyZSc7XG5pbXBvcnQge1dhbGx9IGZyb20gJy4vbW9kdWxlcy93YWxsJztcbmltcG9ydCB7c3VtLCBwcm9kdWN0fSBmcm9tICcuL21vZHVsZXMvbWF0aC1mdW5jdGlvbnMnO1xuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL21vZHVsZXMvZ2FtZW9iamVjdCc7XG5pbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9tb2R1bGVzL3BoeXNpY3NfZW5naW5lJ1xuaW1wb3J0IHtjaGVja0tleSwgbW92ZUNhbWVyYX0gZnJvbSAnLi9tb2R1bGVzL2lucHV0X2hhbmRsZXInXG5kb2N1bWVudC5vbmtleWRvd24gPSBjaGVja0tleTtcblxuLy8gV2UgbmVlZCAzIHRoaW5ncyBldmVyeXRpbWUgd2UgdXNlIFRocmVlLmpzXG4gLy8gU2NlbmUgKyBDYW1lcmEgKyBSZW5kZXJlclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCApXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlfSlcblxucmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApXG4vLyBzZXRzIHJlbmRlcmVyIGJhY2tncm91bmQgY29sb3JcbnJlbmRlcmVyLnNldENsZWFyQ29sb3IoXCIjMjIyMjIyXCIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50IClcbmNhbWVyYS5wb3NpdGlvbi56ID0gMTBcbmNhbWVyYS5wb3NpdGlvbi55ID0gNVxuXG4vL2NhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuXG5cblxuLy8gcmVzaXplIGNhbnZhcyBvbiByZXNpemUgd2luZG93XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsICgpID0+IHtcblx0bGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0bGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRyZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0IClcblx0Y2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0XG5cdGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcbn0pXG5cbmxldCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG5sZXQgd2FsbCA9IG5ldyBXYWxsXG5sZXQgZW5naW5lID0gbmV3IEVuZ2luZSgwLjEpXG52YXIgb2JqZWN0cyA9IFtzcGhlcmUsIHdhbGxdXG52YXIgc3RhdGljT2JqZWN0cyA9IFt3YWxsXVxuXG53YWxsLmN1YmUucG9zaXRpb24ueSA9IC04XG5zY2VuZS5hZGQoc3BoZXJlLmN1YmUpXG5zY2VuZS5hZGQod2FsbC5jdWJlKVxuXG4vLyBhbWJpZW50IGxpZ2h0XG52YXIgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCAoIDB4ZmZmZmZmLCAwLjIpXG5zY2VuZS5hZGQoIGFtYmllbnRMaWdodCApXG5cbi8vIHBvaW50IGxpZ2h0XG52YXIgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweGZmZmZmZiwgMSApO1xucG9pbnRMaWdodC5wb3NpdGlvbi5zZXQoIDI1LCA1MCwgMjUgKTtcbnNjZW5lLmFkZCggcG9pbnRMaWdodCApO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudD0+e1xuICBjaGVja0tleShldmVudCwgc3BoZXJlKVxufSlcbnJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQ9PntcbiAgbW92ZUNhbWVyYShldmVudCwgY2FtZXJhKVxufSlcblxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKVxuICBlbmdpbmUudGljayhvYmplY3RzKVxuICBjb25zb2xlLmxvZyhzcGhlcmUpXG5cdC8vY3ViZS5yb3RhdGlvbi54ICs9IDAuMDQ7XG5cdC8vY3ViZS5yb3RhdGlvbi55ICs9IDAuMDQ7XG4gIC8vY3ViZS5wb3NpdGlvbi5hZGQobmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAuMDEsIDAgKSlcblx0cmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhIClcbn1cblxuXG5cblxuXG5cbmFuaW1hdGUoKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/modules/sphere.js ***!
  \*******************************/
/*! exports provided: Sphere */
/*! exports used: Sphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Sphere; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameobject__ = __webpack_require__(/*! ./gameobject */ 0);\n\nclass Sphere extends __WEBPACK_IMPORTED_MODULE_0__gameobject__[\"a\" /* GameObject */]{\n  constructor() {\n    super(10, \"Sphere\")\n    this.geometry = new THREE.SphereGeometry( 1, 32, 32)\n    this.material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })\n    this.cube = new THREE.Mesh ( this.geometry, this.material )\n    this.radius = 1\n\n  }\n  setMinMax(){\n    this.minX = this.cube.position.x - this.radius\n    this.minY = this.cube.position.y - this.radius\n    this.minZ = this.cube.position.z - this.radius\n    this.maxX = this.cube.position.x + this.radius\n    this.maxY = this.cube.position.y + this.radius\n    this.maxZ = this.cube.position.z + this.radius\n  }\n\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NwaGVyZS5qcz84MzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZU9iamVjdH0gZnJvbSAnLi9nYW1lb2JqZWN0JztcbmNsYXNzIFNwaGVyZSBleHRlbmRzIEdhbWVPYmplY3R7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDEwLCBcIlNwaGVyZVwiKVxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIDEsIDMyLCAzMilcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7IGNvbG9yOiAweGZmMDA1MSwgZmxhdFNoYWRpbmc6IHRydWUsIG1ldGFsbmVzczogMCwgcm91Z2huZXNzOiAxIH0pXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2ggKCB0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsIClcbiAgICB0aGlzLnJhZGl1cyA9IDFcblxuICB9XG4gIHNldE1pbk1heCgpe1xuICAgIHRoaXMubWluWCA9IHRoaXMuY3ViZS5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXNcbiAgICB0aGlzLm1pblkgPSB0aGlzLmN1YmUucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzXG4gICAgdGhpcy5taW5aID0gdGhpcy5jdWJlLnBvc2l0aW9uLnogLSB0aGlzLnJhZGl1c1xuICAgIHRoaXMubWF4WCA9IHRoaXMuY3ViZS5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXNcbiAgICB0aGlzLm1heFkgPSB0aGlzLmN1YmUucG9zaXRpb24ueSArIHRoaXMucmFkaXVzXG4gICAgdGhpcy5tYXhaID0gdGhpcy5jdWJlLnBvc2l0aW9uLnogKyB0aGlzLnJhZGl1c1xuICB9XG5cbn1cblxuZXhwb3J0IHtTcGhlcmV9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL3NwaGVyZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/modules/wall.js ***!
  \*****************************/
/*! exports provided: Wall */
/*! exports used: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Wall; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameobject__ = __webpack_require__(/*! ./gameobject */ 0);\n\nclass Wall extends __WEBPACK_IMPORTED_MODULE_0__gameobject__[\"b\" /* StaticObject */]{\n  constructor() {\n    super(\"Box\")\n    this.geometry = new THREE.BoxGeometry( 5, 0.3, 5)\n    this.material = new THREE.MeshStandardMaterial( { color: 0xff5100, flatShading: true, metalness: 0, roughness: 1 })\n    this.cube = new THREE.Mesh ( this.geometry, this.material )\n    this.x = this.cube.position.x\n    this.y = this.cube.position.y\n    this.z = this.cube.position.z\n    this.width = 5\n    this.height = 0.3\n    this.depth = 5\n\n  }\n\n  setMinMax(){\n    this.minX = this.cube.position.x - this.width\n    this.minY = this.cube.position.y - this.height\n    this.minZ = this.cube.position.z - this.depth\n    this.maxX = this.cube.position.x + this.width\n    this.maxY = this.cube.position.y + this.height\n    this.maxZ = this.cube.position.z + this.depth\n  }\n\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3dhbGwuanM/MDY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0YXRpY09iamVjdH0gZnJvbSAnLi9nYW1lb2JqZWN0JztcbmNsYXNzIFdhbGwgZXh0ZW5kcyBTdGF0aWNPYmplY3R7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQm94XCIpXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNSwgMC4zLCA1KVxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmY1MTAwLCBmbGF0U2hhZGluZzogdHJ1ZSwgbWV0YWxuZXNzOiAwLCByb3VnaG5lc3M6IDEgfSlcbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaCAoIHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwgKVxuICAgIHRoaXMueCA9IHRoaXMuY3ViZS5wb3NpdGlvbi54XG4gICAgdGhpcy55ID0gdGhpcy5jdWJlLnBvc2l0aW9uLnlcbiAgICB0aGlzLnogPSB0aGlzLmN1YmUucG9zaXRpb24uelxuICAgIHRoaXMud2lkdGggPSA1XG4gICAgdGhpcy5oZWlnaHQgPSAwLjNcbiAgICB0aGlzLmRlcHRoID0gNVxuXG4gIH1cblxuICBzZXRNaW5NYXgoKXtcbiAgICB0aGlzLm1pblggPSB0aGlzLmN1YmUucG9zaXRpb24ueCAtIHRoaXMud2lkdGhcbiAgICB0aGlzLm1pblkgPSB0aGlzLmN1YmUucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgdGhpcy5taW5aID0gdGhpcy5jdWJlLnBvc2l0aW9uLnogLSB0aGlzLmRlcHRoXG4gICAgdGhpcy5tYXhYID0gdGhpcy5jdWJlLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoXG4gICAgdGhpcy5tYXhZID0gdGhpcy5jdWJlLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgIHRoaXMubWF4WiA9IHRoaXMuY3ViZS5wb3NpdGlvbi56ICsgdGhpcy5kZXB0aFxuICB9XG5cbn1cblxuZXhwb3J0IHtXYWxsfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy93YWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum, product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export sum */\n/* unused harmony export product */\nconst sum = (a, b) => {\n    return a + b;\n};\n\nconst product = (a, b) => {\n    return a * b;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzP2VlOTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VtID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSArIGI7XG59O1xuXG5jb25zdCBwcm9kdWN0ID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSAqIGI7XG59O1xuXG5leHBvcnQge3N1bSwgcHJvZHVjdH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./src/modules/physics_engine.js ***!
  \***************************************/
/*! exports provided: Engine */
/*! exports used: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Engine; });\nclass Engine{\n  constructor(time_step) {\n    this.dt = time_step\n    this.g = 9.82\n  }\n\n\n  intersectBox(a, b) {\n      a.setMinMax()\n      b.setMinMax()\n      return (a.minX <= b.maxX && a.maxX >= b.minX) &&\n             (a.minY <= b.maxY && a.maxY >= b.minY) &&\n             (a.minZ <= b.maxZ && a.maxZ >= b.minZ);\n    }\n\n  intersectSphere(sphere, other) {\n    other.setMinMax()\n    sphere.setMinMax()\n    // we are using multiplications because it's faster than calling Math.pow\n      var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +\n                               (sphere.y - other.y) * (sphere.y - other.y) +\n                               (sphere.z - other.z) * (sphere.z - other.z));\n      return distance < (sphere.radius + other.radius);\n    }\n\n  intersectSphereBox(sphere, box) {\n\n    sphere.setMinMax()\n    box.setMinMax()\n    // get box closest point to sphere center by clamping\n    var x = Math.max(box.minX, Math.min(sphere.cube.position.x, box.maxX));\n    var y = Math.max(box.minY, Math.min(sphere.cube.position.y, box.maxY));\n    var z = Math.max(box.minZ, Math.min(sphere.cube.position.z, box.maxZ));\n    // this is the same as isPointInsideSphere\n    var distance = Math.sqrt((x - sphere.cube.position.x) * (x - sphere.cube.position.x) +\n                             (y - sphere.cube.position.y) * (y - sphere.cube.position.y) +\n                             (z - sphere.cube.position.z) * (z - sphere.cube.position.z));\n    //console.log(sphere.cube.position.y,box.maxY)\n    if (distance < sphere.radius){\n      console.log(\"heres\")\n      sphere.v.y = sphere.v.y*-1\n    }\n  }\n\n  handleCollisions(objects){\n    for (var i = 0; i < objects.length; i++){\n      for (var j = 0; j < objects.length; j++){\n        if (objects[i] != objects[j] && i<j){\n          switch(objects[i].type){\n            case (\"Sphere\"):\n              switch(objects[j].type){\n                case (\"Sphere\"):\n                  this.intersectSphere(objects[i],objects[j])\n                case (\"Box\"):\n                  this.intersectSphereBox(objects[i],objects[j])\n                  break;\n              break;\n              }\n            case (\"Box\"):\n              switch(objects[j].type){\n                case (\"Sphere\"):\n                  this.intersectSphereBox(objects[j],objects[i])\n                  break;\n                case (\"Box\"):\n                  this.intersectBox(objects[i],objects[j])\n                  break;\n              break;\n              }\n            }\n          }\n        }\n      }\n    }\n\n  tick(objects){\n    for (var i = 0; i < objects.length; i++){\n      if (!objects[i].static){\n        objects[i].forces.push(new THREE.Vector3(0,-1*this.g,0))\n        objects[i].updateSpeed(this.dt)\n        objects[i].updatePos(this.dt)\n      }\n    }\n  this.handleCollisions(objects)\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BoeXNpY3NfZW5naW5lLmpzPzgzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW5naW5le1xuICBjb25zdHJ1Y3Rvcih0aW1lX3N0ZXApIHtcbiAgICB0aGlzLmR0ID0gdGltZV9zdGVwXG4gICAgdGhpcy5nID0gOS44MlxuICB9XG5cblxuICBpbnRlcnNlY3RCb3goYSwgYikge1xuICAgICAgYS5zZXRNaW5NYXgoKVxuICAgICAgYi5zZXRNaW5NYXgoKVxuICAgICAgcmV0dXJuIChhLm1pblggPD0gYi5tYXhYICYmIGEubWF4WCA+PSBiLm1pblgpICYmXG4gICAgICAgICAgICAgKGEubWluWSA8PSBiLm1heFkgJiYgYS5tYXhZID49IGIubWluWSkgJiZcbiAgICAgICAgICAgICAoYS5taW5aIDw9IGIubWF4WiAmJiBhLm1heFogPj0gYi5taW5aKTtcbiAgICB9XG5cbiAgaW50ZXJzZWN0U3BoZXJlKHNwaGVyZSwgb3RoZXIpIHtcbiAgICBvdGhlci5zZXRNaW5NYXgoKVxuICAgIHNwaGVyZS5zZXRNaW5NYXgoKVxuICAgIC8vIHdlIGFyZSB1c2luZyBtdWx0aXBsaWNhdGlvbnMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGNhbGxpbmcgTWF0aC5wb3dcbiAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCgoc3BoZXJlLnggLSBvdGhlci54KSAqIChzcGhlcmUueCAtIG90aGVyLngpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3BoZXJlLnkgLSBvdGhlci55KSAqIChzcGhlcmUueSAtIG90aGVyLnkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3BoZXJlLnogLSBvdGhlci56KSAqIChzcGhlcmUueiAtIG90aGVyLnopKTtcbiAgICAgIHJldHVybiBkaXN0YW5jZSA8IChzcGhlcmUucmFkaXVzICsgb3RoZXIucmFkaXVzKTtcbiAgICB9XG5cbiAgaW50ZXJzZWN0U3BoZXJlQm94KHNwaGVyZSwgYm94KSB7XG5cbiAgICBzcGhlcmUuc2V0TWluTWF4KClcbiAgICBib3guc2V0TWluTWF4KClcbiAgICAvLyBnZXQgYm94IGNsb3Nlc3QgcG9pbnQgdG8gc3BoZXJlIGNlbnRlciBieSBjbGFtcGluZ1xuICAgIHZhciB4ID0gTWF0aC5tYXgoYm94Lm1pblgsIE1hdGgubWluKHNwaGVyZS5jdWJlLnBvc2l0aW9uLngsIGJveC5tYXhYKSk7XG4gICAgdmFyIHkgPSBNYXRoLm1heChib3gubWluWSwgTWF0aC5taW4oc3BoZXJlLmN1YmUucG9zaXRpb24ueSwgYm94Lm1heFkpKTtcbiAgICB2YXIgeiA9IE1hdGgubWF4KGJveC5taW5aLCBNYXRoLm1pbihzcGhlcmUuY3ViZS5wb3NpdGlvbi56LCBib3gubWF4WikpO1xuICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgaXNQb2ludEluc2lkZVNwaGVyZVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCgoeCAtIHNwaGVyZS5jdWJlLnBvc2l0aW9uLngpICogKHggLSBzcGhlcmUuY3ViZS5wb3NpdGlvbi54KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5IC0gc3BoZXJlLmN1YmUucG9zaXRpb24ueSkgKiAoeSAtIHNwaGVyZS5jdWJlLnBvc2l0aW9uLnkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHogLSBzcGhlcmUuY3ViZS5wb3NpdGlvbi56KSAqICh6IC0gc3BoZXJlLmN1YmUucG9zaXRpb24ueikpO1xuICAgIC8vY29uc29sZS5sb2coc3BoZXJlLmN1YmUucG9zaXRpb24ueSxib3gubWF4WSlcbiAgICBpZiAoZGlzdGFuY2UgPCBzcGhlcmUucmFkaXVzKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZXNcIilcbiAgICAgIHNwaGVyZS52LnkgPSBzcGhlcmUudi55Ki0xXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29sbGlzaW9ucyhvYmplY3RzKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3RzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gIT0gb2JqZWN0c1tqXSAmJiBpPGope1xuICAgICAgICAgIHN3aXRjaChvYmplY3RzW2ldLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSAoXCJTcGhlcmVcIik6XG4gICAgICAgICAgICAgIHN3aXRjaChvYmplY3RzW2pdLnR5cGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiU3BoZXJlXCIpOlxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3RTcGhlcmUob2JqZWN0c1tpXSxvYmplY3RzW2pdKVxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQm94XCIpOlxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3RTcGhlcmVCb3gob2JqZWN0c1tpXSxvYmplY3RzW2pdKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIChcIkJveFwiKTpcbiAgICAgICAgICAgICAgc3dpdGNoKG9iamVjdHNbal0udHlwZSl7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJTcGhlcmVcIik6XG4gICAgICAgICAgICAgICAgICB0aGlzLmludGVyc2VjdFNwaGVyZUJveChvYmplY3RzW2pdLG9iamVjdHNbaV0pXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChcIkJveFwiKTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0Qm94KG9iamVjdHNbaV0sb2JqZWN0c1tqXSlcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB0aWNrKG9iamVjdHMpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiAoIW9iamVjdHNbaV0uc3RhdGljKXtcbiAgICAgICAgb2JqZWN0c1tpXS5mb3JjZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLC0xKnRoaXMuZywwKSlcbiAgICAgICAgb2JqZWN0c1tpXS51cGRhdGVTcGVlZCh0aGlzLmR0KVxuICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZVBvcyh0aGlzLmR0KVxuICAgICAgfVxuICAgIH1cbiAgdGhpcy5oYW5kbGVDb2xsaXNpb25zKG9iamVjdHMpXG4gIH1cbn1cblxuZXhwb3J0IHsgRW5naW5lfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9waHlzaWNzX2VuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/modules/input_handler.js ***!
  \**************************************/
/*! exports provided: moveCamera, checkKey */
/*! exports used: checkKey, moveCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return moveCamera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return checkKey; });\nvar sensitivity = 0.002\nfunction moveCamera(event, camera) {\n  camera.rotateX( -1*event.movementY * sensitivity)\n  camera.rotateY(-1*event.movementX * sensitivity)\n\n}\n\nfunction checkKey(e, object) {\n\n    e = e || window.event;\n\n    if (e.keyCode == '87') {\n        object.forces.push(new THREE.Vector3(0.1,0,0))\n    }\n    else if (e.keyCode == '65') {\n        object.forces.push(new THREE.Vector3(-0.1,0,0))\n    }\n    else if (e.keyCode == '68') {\n        object.forces.push(new THREE.Vector3(0,0.1,0))\n       // left arrow\n    }\n    else if (e.keyCode == '83') {\n       object.forces.push(new THREE.Vector3(0,-0.1,0))\n       // right arrow\n    }\n\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2lucHV0X2hhbmRsZXIuanM/NTYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2Vuc2l0aXZpdHkgPSAwLjAwMlxuZnVuY3Rpb24gbW92ZUNhbWVyYShldmVudCwgY2FtZXJhKSB7XG4gIGNhbWVyYS5yb3RhdGVYKCAtMSpldmVudC5tb3ZlbWVudFkgKiBzZW5zaXRpdml0eSlcbiAgY2FtZXJhLnJvdGF0ZVkoLTEqZXZlbnQubW92ZW1lbnRYICogc2Vuc2l0aXZpdHkpXG5cbn1cblxuZnVuY3Rpb24gY2hlY2tLZXkoZSwgb2JqZWN0KSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICBpZiAoZS5rZXlDb2RlID09ICc4NycpIHtcbiAgICAgICAgb2JqZWN0LmZvcmNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAuMSwwLDApKVxuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzY1Jykge1xuICAgICAgICBvYmplY3QuZm9yY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoLTAuMSwwLDApKVxuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzY4Jykge1xuICAgICAgICBvYmplY3QuZm9yY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwwLjEsMCkpXG4gICAgICAgLy8gbGVmdCBhcnJvd1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzgzJykge1xuICAgICAgIG9iamVjdC5mb3JjZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLC0wLjEsMCkpXG4gICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICB9XG5cbn1cblxuXG5leHBvcnQge21vdmVDYW1lcmEsIGNoZWNrS2V5fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbnB1dF9oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);