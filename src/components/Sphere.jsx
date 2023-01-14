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
import {createMultiMaterialObject } from 'three/examples/jsm/utils/SceneUtils.js';
// examples/jsm/shaders/HorizontalBlurShader.js
import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader.js';
import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import {ImprovedNoice, ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';
// import {EffectPass} from 'three/examples/jsm/postprocessing/EffectPass'
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { StatusBar } from "expo-status-bar";

import hsl from 'hsl-to-hex-v2';
import debounce from 'debounce';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import SimplexNoise from 'simplex-noise';
import tw from '../api/tailwind'
// import { onChange } from 'react-native-reanimated';
const window = Dimensions.get('window');
const ColorPalette =() => {
  function setColors() {
    const hue = random(220,360);
    const complimentaryHue1 = hue + 30;
    const complimentaryHue2 = hue + 60;

    const saturation = 95;
    const lightness = 50;

    const baseColor = hsl(hue, saturation, lightness);

    const complimentaryColor1 = hsl(complimentaryHue1, saturation, lightness);

    const complimentaryColor2 = hsl(complimentaryHue2, saturation, lightness);

    const colorChoices = [baseColor, complimentaryColor1, complimentaryColor2]
  }

  const randomColor= () => {
    return colorChoices[~~random(0, colorChoices.length)].replace(
      "#",
      "0x"
    );
  }

  const setCustomProperties = () => {
      // set CSS custom properties so that the colors defined here can be used throughout the UI
      document.documentElement.style.setProperty("--hue", this.hue);
      // const hue = this.hue;
      document.documentElement.style.setProperty(
        "--hue-complimentary1",
        this.complimentaryHue1
      );
      document.documentElement.style.setProperty(
        "--hue-complimentary2",
        this.complimentaryHue2
      );
  }
}
const Orb
 = ({fill=0x000000}) => {
  const [dimensions, setDimensions] = useState({window});

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      () => {
        onChange();
      }
    );
    return () => subscription?.remove();
  });
  let x = random(bounds["x"].min, bounds["x"].max);
  let y = random(bounds["y"].min, bounds["y"].max);
  const scale = 1;
  const fillColor = this.props.fill;
  radius = random(dimensions.height / 6, dimensions.height/3);

  let xOff = random(0,1000);
  let yOff = random(0, 1000);
  let inc = 0.002;

  let bounds = setBounds();
  function setBounds() {
    const maxDist = dimensions.width < 1000 ? dimensions.width / 3 : window.width / 5;

    const originX = window.width / 1.25;
    const originY = window.width < 1000 ? window.height : window.height / 1.375;
    const originZ = 0;
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist, 
        max: originY + maxDist
      },
      z: {
        min: originZ - maxDist/8,
        max: originZ + maxDist/8
      }
    };
  }

  onChange = ()=> {
    debounce(() => {
      setBounds();
    }, 250)
  }



  function update() {
    // const xNoise = SimplexNoise.createNoise3D(xOff, xOff, xOff)
    // const yNoise = SimplexNoise.createNoise3D(yOff,yOff, yOff);
    // const zNoise = SimplexNoise.createNoise3D(zOff,zOff, zOff);
    // const scaleNoise = SimplexNoise.createNoise3D(xOff, yOff, zOff)
    // x = map(xNoise, -1, 1, bounds['x'].min, bounds['x'].max);
    // y = map(yNoise, -1, 1, bounds['x'].min, bounds['y'].max);
    // z = map(zNoise, zNoise, -1, 1, bounds['z'].min, bounds['z'].max);
    // scale = map(scaleNoise, -1, 1, 0.5, 1);

    // const scale = map(scaleNoise, -1, 1, 0.5, 1);
    // xOff += inc;
    // yOff += inc;
    // zOff += inc;
  }

  // let graphics = new PIXI.Graphics();
  // graphics.alpha = 0.825;
  const palette = ColorPalette();

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({
    color: palette.randomColor(),
  });

  // graphics.x = x;
  // graphics.y = y;
  // graphics.scale.set(scale);
  
  // graphics.clear();
  // graphics.beginFill(fillColor);
  // graphics.drawCircle(0,0, radius);
  // graphics.endFill();

}


const Sphere = ({style,orbs=5}) => {

  const onContextCreate = async (gl) => {
    console.log('onContextCreate gl', gl)
    // three.js implementation.
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
 
    // gl.canvas = {
    //   width: gl.drawingBufferWidth,
    //   height: gl.drawingBufferHeight,
    // };

    // set camera position away from cube
    camera.position.z = 4;

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // create cube
    // define geometry
    // let colorPalette = ColorPalette();
      
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: "cyan",
    });
 
    const cube = new Mesh(geometry, material);
    // console.log('spere', sphere, cube);
    console.log('cube', cube);
 
    // add cube to scene
    scene.add(cube);
  
    const orbs = [];

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
    const sphereVerticesArray = [];
    const sphereVerticesNormArray = [];
    var date = new Date();

    var pn = new ImprovedNoise(), z= date.getTime();
    console.log('perlin', pn, date)
    const sphereGeom = new SphereGeometry(15, 100, 100);
    console.log('sphereGeom, vertices, length', sphereGeom, sphereGeom.vertices)
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

    let planetMaterial = new MeshPhongMaterial({color: 0xff44c8});
    let wireFrameMat = new MeshBasicMaterial();
    wireFrameMat.wireframe = true;
    wireFrameMat.visible = false;

    var sphere = createMultiMaterialObject(sphereGeom, [planetMaterial, wireFrameMat]);
    scene.add(sphere);
    // create render function
    const composer = new EffectComposer( renderer );
    composer.addPass( new RenderPass( scene, camera ) );
    
    // const effectPass = new EffectPass(camera, new BloomEffect());
    // effectPass.renderToScreen = true;
    // composer.addPass(effectPass);

    
    // const hblur = new ShaderPass( HorizontalBlurShader );
    // composer.addPass( hblur );
            
    // const vblur = new ShaderPass( VerticalBlurShader );


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
      cube.rotation.x += 0.01;
      // sphere.rotation.x += 0.02;
      // rotate around y axis
      cube.rotation.y += 0.01;
      // sphere.rotation.y += 0.02;
      // console.log('spere', sphere);
      renderer.render(scene, camera);
      // composer.render();
      gl.endFrameEXP();
    };

    // call render
    render();
    console.log('cube', cube);
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
export default Sphere;



// var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
// const material = new THREE.MeshPhongMaterial({
//     color: 0x0000FF,
//     shininess: 1000,
//   })

// var sphere = new THREE.Mesh(sphere_geometry, material);
// scene.add(sphere);
// const ambientLight = new THREE.AmbientLight(0x798296)
// scene.add(ambientLight)
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
//     directionalLight.position.set(5, 10, 7)
// scene.add(directionalLight);
// sphere.geometry.attributes.position.needsUpdate = true;

// var update = function() {

//   // change '0.003' for more aggressive animation
//   var time = performance.now() * 0.003;
//   //console.log(time)

//   //go through vertices here and reposition them
  
//   // change 'k' value for more spikes
//   var k = 1;
//   var v3 = new THREE.Vector3();   
//   const positions = sphere.geometry.attributes.position;
//   for (var i = 0; i < positions.count; i++) {
//     v3.fromBufferAttribute(positions, i).setLength(k);
//     let n = noise.perlin3(v3.x, v3.y, v3.z);
//     v3.setLength(1 + 0.3 * n);
//     positions.setXYZ(i, v3.x, v3.y, v3.z);
//   }
//   positions.needsUpdate = true;
//   sphere.geometry.computeVertexNormals(); // don't forget to call this
// }

// function animate() {
//   sphere.rotation.x += 0.01;
//   sphere.rotation.y += 0.01;

//   update();
//   /* render scene and camera */
//   renderer.render(scene,camera);
//   requestAnimationFrame(animate);
// }


// requestAnimationFrame(animate);





// import { Stage, Sprite } from '@inlet/react-pixi'

// export default Rabbit =() => {
//   const reducer = (_, { data }) => data
//   const Bunny = () => {
//     const [motion, update] = useReducer(reducer)
//     const iter = useRef(0)
//     useTick(delta => {
//       const i = (iter.current += 0.05 * delta)
//       update({
//         type: 'update',
//         data: {
//           x: Math.sin(i) * 100,
//           y: Math.sin(i / 1.5) * 100,
//           rotation: Math.sin(i) * Math.PI,
//           anchor: Math.sin(i / 2),
//         },
//       })
//     })
//     return (
//       <Sprite
//         image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
//         {...motion}
//       />
//     )
//   }
//   return (
//     <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
//       <Container x={150} y={150}>
//         <Bunny />
//       </Container>
//     </Stage>
//   )
// }


