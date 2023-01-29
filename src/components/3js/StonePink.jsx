



let scene, camera, container, renderer
let objectLoader = new THREE.ObjectLoader()
let gem

function setScene() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize( window.innerWidth, window.innerHeight )
  //make it more crisp on retina screens
  renderer.setPixelRatio(window.devicePixelRatio)

  container = document.getElementById('world')
  container.appendChild(renderer.domElement)
}

function addLights() {
  const shadowLight = new THREE.DirectionalLight(0xffffff, 0.2)
  shadowLight.position.set(2, 10, 1)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
  const ambientLight2 = new THREE.AmbientLight(0xf1a4ff, 0.2)
  const light1 = new THREE.PointLight( 0xff5de0, 0.4, 100 )
  light1.position.set( 30, 0, 10 )
  const light2 = new THREE.PointLight( 0x5854ff, 0.4, 100 )
  light2.position.set( -40, 0, 20 )
  const light3 = new THREE.PointLight( 0x632ecf, 0.4, 100 )
  light3.position.set( 0, -5, 5)
  const light4 = new THREE.PointLight( 0x632ecf, 0.2, 100 )
  light4.position.set( -2, 1, 2 )
  const light5 = new THREE.PointLight( 0x632ecf, 0.2, 100 )
  light5.position.set( -5, -2, 5 )
  scene.add(shadowLight, ambientLight, ambientLight2, light1, light2, light3, light4, light5)
}

setScene()
addLights() 

function createGem() {
  objectLoader.load(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/126747/gem1.json',
    function (gemMesh) {
      gemMesh.position.x = 0
      gemMesh.position.z = -2
      gemMesh.scale.setScalar(4)
      gem = gemMesh
      gem.children[0].geometry.computeFlatVertexNormals()
      console.log(gem)
      scene.add(gem)
    }
  )
}
createGem()

function animate() {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
  if (gem) {
    gem.rotation.y += 0.005
  }
}
animate()