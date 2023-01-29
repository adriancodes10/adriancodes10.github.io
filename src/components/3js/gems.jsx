

import React from "react";
import { View } from "react-native";
// import Expo from "expo";
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  BoxGeometry,
  SphereGeometry,
  Color,
  Vector3, 
  // EffectComposer,
  // RenderPass,
  // HorizontalBlurShader,
  // VerticalBlurShader,
  // ShaderPass
} from "three";
// import {createMultiMaterialObject } from 'three/examples/jsm/utils/SceneUtils.js';
// examples/jsm/shaders/HorizontalBlurShader.js
// import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader.js';
// import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import {ImprovedNoice, ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';
// import {EffectPass} from 'three/examples/jsm/postprocessing/EffectPass'
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
// import { StatusBar } from "expo-status-bar";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// import hsl from 'hsl-to-hex-v2';
// import debounce from 'debounce';
import { Dimensions } from 'react-native';
// import { useEffect } from 'react';
// import SimplexNoise from 'simplex-noise';
// import tw from '../api/tailwind'
// import { onChange } from 'react-native-reanimated';
const window = Dimensions.get('window');
const stoneJSON = {
    "object":{
        "type":"Scene",
        "uuid":"C07C81EA-18B4-425A-9172-7D5B2E3CBFFC",
        "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "children":[{
            "name":"model.002",
            "uuid":"7B8D4ED0-7E27-3C7C-AE75-CC2838EBA373",
            "matrix":[-1,0,0,0,0,1,-0,0,0,-0,-1,0,0.001764,0.002394,0.012891,1],
            "visible":true,
            "type":"Mesh",
            "material":"0DD2D112-EA1F-3781-A46D-55B79A64DD19",
            "castShadow":true,
            "receiveShadow":true,
            "geometry":"94450804-A77A-3391-9DE6-47AD38730DAA"
        }]
    },
    "images":[],
    "animations":[{
        "name":"default",
        "fps":24,
        "tracks":[]
    }],
    "textures":[],
    "geometries":[{
        "type":"Geometry",
        "uuid":"94450804-A77A-3391-9DE6-47AD38730DAA",
        "data":{
            "uvs":[],
            "normals":[0.943449,-0.220832,-0.24723,0.991394,0.058351,0.116947,0.829035,-0.442946,0.341227,-0.853389,-0.520981,-0.015961,-0.953185,0.071047,-0.293863,-0.521714,-0.703543,-0.482498,0.205786,-0.93112,0.301096,0.37141,-0.850185,-0.373058,0.094333,-0.007996,-0.995483,0.171209,0.127964,-0.976867,0.607959,0.116001,-0.785424,0.290445,-0.192541,-0.937284,0.561876,-0.43611,-0.702872,0.569201,0.272652,0.775658,-0.172796,0.274087,0.946013,0.405774,-0.308603,0.860286,-0.543229,-0.09125,-0.83459,-0.485611,0.223975,-0.844966,-0.989257,0.139775,-0.042177,-0.930174,0.350749,-0.10828,-0.791406,0.365154,0.490188,-0.835841,-0.107425,0.538285,-0.319254,-0.139744,0.937284,-0.337291,-0.929075,-0.151738,0.252327,-0.54445,-0.799921,-0.010773,-0.729606,0.683737,-0.403119,-0.612812,0.679617,-0.560839,-0.722465,0.404279,-0.133824,0.679128,0.721702,-0.902188,0.39787,-0.166387,0.886196,0.437025,0.153661,0.587542,0.406537,-0.699637,-0.72747,0.571276,0.379986,-0.200568,0.500473,-0.842158,0.150365,0.984741,-0.087283,-0.771142,0.628407,-0.102115,-0.17185,-0.294565,-0.940031],
            "faces":[162,0,1,2,0,0,1,2,0,0,0,162,3,4,5,0,3,4,5,0,0,0,162,2,6,7,0,2,6,7,0,0,0,162,8,9,10,0,8,9,10,0,0,0,162,11,12,7,0,11,12,7,0,0,0,162,13,14,15,0,13,14,15,0,0,0,162,16,17,8,0,16,17,8,0,0,0,162,3,18,19,0,3,18,19,0,0,0,162,1,15,2,0,1,15,2,0,0,0,162,20,21,22,0,20,21,22,0,0,0,162,23,24,7,0,23,24,7,0,0,0,162,23,3,5,0,23,3,5,0,0,0,162,25,26,23,0,25,26,23,0,0,0,162,23,5,24,0,23,5,24,0,0,0,162,6,25,23,0,6,25,23,0,0,0,162,23,27,3,0,23,27,3,0,0,0,162,26,27,23,0,26,27,23,0,0,0,162,28,14,13,0,28,14,13,0,0,0,162,29,19,20,0,29,19,20,0,0,0,162,30,1,10,0,30,1,10,0,0,0,162,9,31,10,0,9,31,10,0,0,0,162,28,32,20,0,28,32,20,0,0,0,162,29,33,17,0,29,33,17,0,0,0,162,30,34,13,0,30,34,13,0,0,0,162,35,32,34,0,35,32,34,0,0,0,162,29,17,19,0,29,17,19,0,0,0,162,9,33,34,0,9,33,34,0,0,0,162,8,17,9,0,8,17,9,0,0,0,162,9,17,33,0,9,17,33,0,0,0,162,29,35,33,0,29,35,33,0,0,0,162,30,31,34,0,30,31,34,0,0,0,162,30,13,1,0,30,13,1,0,0,0,162,9,34,31,0,9,34,31,0,0,0,162,30,10,31,0,30,10,31,0,0,0,162,28,20,14,0,28,20,14,0,0,0,162,28,13,34,0,28,13,34,0,0,0,162,1,13,15,0,1,13,15,0,0,0,162,22,14,20,0,22,14,20,0,0,0,162,14,22,15,0,14,22,15,0,0,0,162,18,21,20,0,18,21,20,0,0,0,162,4,19,17,0,4,19,17,0,0,0,162,4,3,19,0,4,3,19,0,0,0,162,4,16,5,0,4,16,5,0,0,0,162,18,20,19,0,18,20,19,0,0,0,162,18,3,21,0,18,3,21,0,0,0,162,11,24,8,0,11,24,8,0,0,0,162,36,24,5,0,36,24,5,0,0,0,162,0,12,10,0,0,12,10,0,0,0,162,11,8,10,0,11,8,10,0,0,0,162,11,7,24,0,11,7,24,0,0,0,162,0,10,1,0,0,10,1,0,0,0,162,0,2,7,0,0,2,7,0,0,0,162,11,10,12,0,11,10,12,0,0,0,162,7,12,0,0,7,12,0,0,0,0,162,4,17,16,0,4,17,16,0,0,0,162,36,5,16,0,36,5,16,0,0,0,162,36,8,24,0,36,8,24,0,0,0,162,8,36,16,0,8,36,16,0,0,0,162,28,34,32,0,28,34,32,0,0,0,162,35,29,32,0,35,29,32,0,0,0,162,29,20,32,0,29,20,32,0,0,0,162,35,34,33,0,35,34,33,0,0,0,162,15,22,26,0,15,22,26,0,0,0,162,22,21,27,0,22,21,27,0,0,0,162,27,21,3,0,27,21,3,0,0,0,162,27,26,22,0,27,26,22,0,0,0,162,2,15,25,0,2,15,25,0,0,0,162,25,15,26,0,25,15,26,0,0,0,162,6,23,7,0,6,23,7,0,0,0,162,6,2,25,0,6,2,25,0,0,0],
            "name":"model.004Geometry.2",
            "metadata":{
                "version":3,
                "uvs":0,
                "normals":37,
                "colors":2,
                "generator":"io_three",
                "vertices":37,
                "faces":70
            },
            "vertices":[0.123727,-0.062387,-0.035275,0.125102,-0.000252,0.000554,0.087483,-0.119278,0.032425,-0.113736,-0.111087,0.011709,-0.11548,-0.016993,-0.054996,-0.075863,-0.126868,-0.049076,0.03067,-0.188088,0.040062,0.042241,-0.17329,-0.001573,0.003088,-0.003872,-0.095888,0.015439,0.063675,-0.099627,0.079689,0.024109,-0.081358,0.049405,-0.060136,-0.091321,0.093514,-0.081848,-0.065066,0.065842,0.071561,0.085333,-0.017415,0.054234,0.117282,0.03876,-0.101078,0.101076,-0.084958,-0.038819,-0.100485,-0.063824,0.039956,-0.095565,-0.118395,-0.028394,0.026999,-0.104219,0.039095,-0.021352,-0.086907,0.045889,0.059369,-0.120674,-0.058626,0.068515,-0.04852,-0.054543,0.107836,-0.017532,-0.167297,0.008444,0.018244,-0.11196,-0.088892,0.007498,-0.160215,0.070255,-0.041567,-0.135738,0.077568,-0.075718,-0.130524,0.046545,-0.005547,0.14896,0.057369,-0.071499,0.103933,-0.031529,0.107284,0.112098,0.01215,0.065072,0.123301,-0.061299,-0.043424,0.147495,0.017369,-0.022903,0.153136,-0.085723,0.018643,0.218233,-0.02487,-0.04487,0.171047,-0.033124,-0.051431,-0.071185,-0.103228],
            "colors":[16777215,0]
        }
    }],
    "metadata":{
        "version":4.4,
        "type":"Object",
        "generator":"io_three"
    },
    "materials":[{
        "specular":8355711,
        "uuid":"0DD2D112-EA1F-3781-A46D-55B79A64DD19",
        "vertexColors":0,
        "color":16777215,
        "depthWrite":true,
        "type":"MeshPhongMaterial",
        "shininess":50,
        "name":"mat21.001",
        "depthTest":true,
        "emissive":0,
        "blending":"NormalBlending"
    }]
}

const BlueGem = ({style}) => {

  const onContextCreate = async (gl) => {
    console.log('onContextCreate gl', gl)
    // three.js implementation.
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    let gem;
    // let objectLoader = new THREE.ObjectLoader()
    
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
      );
    
      camera.position.z = 4;


    // gl.canvas = {
    //   width: gl.drawingBufferWidth,
    //   height: gl.drawingBufferHeight,
    // };

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

 
    // set camera position away from cube

    // var light = new THREE.HemisphereLight(0xffffff, 0x0C056D, 0.6);
  
  function addLights() {
    const shadowLight = new THREE.DirectionalLight(0xffffff, 0.2)
    shadowLight.position.set(2, 10, 1)
    const ambientLight = new THREE.AmbientLight(0x024396, 0.3)
    const ambientLight2 = new THREE.AmbientLight(0x024396, 0.4)
    const light1 = new THREE.PointLight( 0x024396, 0.4, 100 )
    light1.position.set( 30, 0, 10 )
    const light2 = new THREE.PointLight( 0x024396, 0.4, 100 )
    light2.position.set( -40, 0, 20 )
    const light3 = new THREE.PointLight( 0x024396, 0.4, 100 )
    light3.position.set( 0, -5, 5)
    const light4 = new THREE.PointLight( 0xfffbeb, 0.2, 100 )
    light4.position.set( -2, 1, 2 )
    const light5 = new THREE.PointLight( 0x024396, 0.2, 100 )
    light5.position.set( -5, -2, 5 )
    scene.add(
        shadowLight,
        ambientLight, 
        ambientLight2,
        light1,
        light2, 
        light3,
        light4, 
        light5
      )
  }
  
    addLights();
    // add cube to scene
    // scene.add(cube);
  
    // const orbs = [];

    //       for (let i = 0; i < 10; i++) {
    //         const orb = new Orb(colorPalette.randomColor());
    //         app.stage.addChild(orb.graphics);
    //         orbs.push(orb);
    //       }

    //       app.ticker.add(() => {
    //         orbs.forEach((orb) => {
    //           orb.update();
    //           orb.render();
    //         })
    //       })
    // const sphereVerticesArray = [];
    // const sphereVerticesNormArray = [];
    // var date = new Date();

    // var pn = new ImprovedNoise(), z= date.getTime();
    // console.log('perlin', pn, date)
    // const sphereGeom = new SphereGeometry(15, 100, 100);
    // console.log('sphereGeom, vertices, length', sphereGeom, sphereGeom.vertices)
    // // save points for later calculation
    // for (var i = 0; i < 5; i += 1) {
    //   let vertex = sphereGeom.vertices[i];
    //   let vec = new Vector3(vertex.x, vertex.y, vertex.z);
    //   sphereVerticesArray.push(vec);
    //   let mag = vec.x * vec.x + vec.y * vec.y + vec.z * vec.z;
    //   mag = Math.sqrt(mag);
    //   let norm = new Vector3(vertex.x / mag, vertex.y / mag, vertex.z / mag);
    //   sphereVerticesNormArray.push(norm);
    // }

    // let planetMaterial = new MeshPhongMaterial({color: 0xff44c8});
    // let wireFrameMat = new MeshBasicMaterial();
    // wireFrameMat.wireframe = true;
    // wireFrameMat.visible = false;

    // var sphere = createMultiMaterialObject(sphereGeom, [planetMaterial, wireFrameMat]);
    // scene.add(sphere)
  // const loader = new GLTFLoader();
  // const crystal = require('../../assets/models/crystal/scene.gltf')
  //   loader.load( crystal, function ( gltf ) {
  //     scene.add( gltf.scene );
  //   }, undefined, function ( error ) {
  //     console.error( error );
  //   } );
const loader = new THREE.ObjectLoader();
				// const object = await loader.loadAsync( 'models/json/lightmap/lightmap.json' );
        var object = loader.parse( JSON.stringify(stoneJSON) );
				scene.add( object );


  // const loader = new GLTFLoader();
	// 			loader.load( require('../../assets/models/crystal/scene.gltf'), function ( gltf ) {
	// 				model = gltf.scene;
	// 				scene.add( model );
	// 				// animate();

	// 			} );

  // function createGem() {
    // objectLoader.load(
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/126747/gem1.json',
    // function (gemMesh) {
    //   console.log('in onLoad funciton')
    //   // gemMesh.position.x = 0
    //   // gemMesh.position.z = -1
    //   // gemMesh.scale.setScalar(2)
    //   gem = gemMesh
    //   // gem.children[0].geometry.computeFlatVertexNormals()
    //   console.log(gem)
    //   scene.add(gem)
    //   }
    // );
  // }
// let asset ;
  // function createPlanet() {
      // console.log('stonejson', stoneJSON, JSON.stringify(stoneJSON))

  // objectLoader.load(
  //   // 'https://i.ibb.co/h94JBXy/saturn3-ljge5g.jpg',
  //   // objectLoader.load(
  //   // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/126747/gem1.json',
  //   // JSON.stringify(stoneJSON),
  //   JSON.stringify(stoneJSON),
  //   function (gemMesh) 
  //   {
  //     console.log('gemMesh', gemMesh);
  // //     gemMesh.position.x = 0
  // //     gemMesh.position.z = -1
  // //     gemMesh.scale.setScalar(2)
  //     planet = gemMesh
  // //     // planet.children[0].geometry.computeFlatVertexNormals()
  //     console.log('planet', planet)
  //     scene.add(planet)
  //   }
  // )
  // }
// createGem()
// console.log('planet 250', planet)
// createPlanet()
// console.log('planet 252', planet)
    // const effectPass = new EffectPass(camera, new BloomEffect());
    // effectPass.renderToScreen = true;
    // composer.addPass(effectPass);

    
    // const hblur = new ShaderPass( HorizontalBlurShader );
    // composer.addPass( hblur );
            
    // const vblur = new ShaderPass( VerticalBlurShader );

//   var update = function() {

//   // change '0.003' for more aggressive animation
//   var time = performance.now() * 0.003;
//   //console.log(time)

//   //go through vertices here and reposition them
  
//   // change 'k' value for more spikes
//   var k = 3;
//   for (var i = 0; i < sphere.geometry.vertices.length; i++) {
//       var p = sphere.geometry.vertices[i];
//       p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
//   }
//   sphere.geometry.computeVertexNormals();
//   sphere.geometry.normalsNeedUpdate = true;
// sphere.geometry.verticesNeedUpdate = true;


// }


// requestAnimationFrame(render);
    // set this shader pass to render to screen so we can see the effects
    // vblur.renderToScreen = true;
    // composer.addPass( vblur );
    const render = () => {
      requestAnimationFrame(render);
      // cube.position.x += 25;
      // cube.position.y += 3;
      // sphere.position.z = 0;
      // cube.position.x = 25;
      // cube.position.y = 3;
      // cube.position.z = 0;
      // create rotate functionality
      // rotate around x axis
      // cube.rotation.x += 0.01;
      // sphere.rotation.x += 0.02;
      // rotate around y axis
      // cube.rotation.y += 0.01;
      // console.log('planet in render', planet);
      //  if (planet) {
    // planet.rotation.y += 0.005
    // planet.rotation.x += 0.005
    // planet.rotation.z += 0.005
    // }
      // sphere.rotation.y += 0.02;
      // console.log('spere', sphere);
      renderer.render(scene, camera);
      // composer.render();
      gl.endFrameEXP();
    };

    // call render
    render();
    // console.log('cube', cube);
    // console.log('sphere', sphere)
  };

  return (
    <View style={style}>
      <GLView
        onContextCreate={onContextCreate}
        // set height and width of GLView
        style={{ width: '100%', height: '100%',}}
      />
    </View>
  );
};
export default BlueGem;





// let scene, camera, container, renderer
// let objectLoader = new THREE.ObjectLoader()
// let gem

// function setScene() {
//   scene = new THREE.Scene()
//   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

//   renderer = new THREE.WebGLRenderer({ alpha: true })
//   renderer.setSize( window.innerWidth, window.innerHeight )
//   //make it more crisp on retina screens
//   renderer.setPixelRatio(window.devicePixelRatio)

//   container = document.getElementById('world')
//   container.appendChild(renderer.domElement)
// }

// function addLights() {
//   const shadowLight = new THREE.DirectionalLight(0xffffff, 0.2)
//   shadowLight.position.set(2, 10, 1)
//   const ambientLight = new THREE.AmbientLight(0x024396, 0.3)
//   const ambientLight2 = new THREE.AmbientLight(0x024396, 0.4)
//   const light1 = new THREE.PointLight( 0x024396, 0.4, 100 )
//   light1.position.set( 30, 0, 10 )
//   const light2 = new THREE.PointLight( 0x024396, 0.4, 100 )
//   light2.position.set( -40, 0, 20 )
//   const light3 = new THREE.PointLight( 0x024396, 0.4, 100 )
//   light3.position.set( 0, -5, 5)
//   const light4 = new THREE.PointLight( 0xfffbeb, 0.2, 100 )
//   light4.position.set( -2, 1, 2 )
//   const light5 = new THREE.PointLight( 0x024396, 0.2, 100 )
//   light5.position.set( -5, -2, 5 )
//   scene.add(
//     shadowLight,
//     ambientLight, 
//     ambientLight2,
//     light1,
//     light2, 
//     light3,
//     light4, 
//     light5
//   )
// }

// setScene()
// addLights() 

// function createGem() {
//   objectLoader.load(
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/126747/gem1.json',
//     function (gemMesh) {
//       gemMesh.position.x = 0
//       gemMesh.position.z = -1
//       gemMesh.scale.setScalar(2)
//       gem = gemMesh
//       gem.children[0].geometry.computeFlatVertexNormals()
//       console.log(gem)
//       scene.add(gem)
//     }
//   )
// }
// createGem()

// function animate() {
// 	requestAnimationFrame( animate )
// 	renderer.render( scene, camera )
//   if (gem) {
//     gem.rotation.y += 0.005
//     gem.rotation.x += 0.005
//     gem.rotation.z += 0.005
//   }
// }
// animate()