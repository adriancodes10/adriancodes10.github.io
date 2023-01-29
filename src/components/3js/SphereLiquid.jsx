

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
import { render } from "react-dom";
  function createParticleSystem() {


        var icosa = new THREE.IcosahedronGeometry(1, 7);


        var vertexShader = `
            varying vec3 v;
            varying vec3 pos;
            float posY;
            uniform float radius;
            uniform float time;
            uniform float mx;
            uniform float my;

            float rand(float n){
                return fract(sin(n) * 43758.5453123);
            }

            void main() {
                vec3 norm = normalize(normal);
                float phaseSin = 40.0*cos(mx*3.14)*cos((norm.x-norm.y/2.0+norm.z));
                float phaseCos = 40.0*sin(my*3.14)*cos((-norm.x/2.0+norm.y+norm.z));
                pos = (radius+0.1*rand(1.0)*sin(time + phaseSin)*cos(time + phaseCos)) * norm;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
            `;


        var fragmentShader = `#extension GL_OES_standard_derivatives : enable

            varying vec3 v;
            varying vec3 pos;
            uniform float time;
            uniform sampler2D texture;
            uniform float mx;
            uniform float my;
            float dProd;
            uniform vec3 highlight;
            uniform vec3 shadow;
            uniform vec3 light;
            float rand(float n)
            {
                return fract(sin(n) * 43758.5453123);
            }
            void main() {
                // N: normal vector
                vec3 N = normalize( cross( dFdx( pos.xyz ), dFdy( pos.xyz ) ) );
                float intensity = max(0.0, pow(2.71,-0.1*distance(pos,light))*dot(normalize(N), normalize(light)));
                vec3 col = (highlight*intensity + (1.0-intensity)*shadow)/(intensity+1.0);
                gl_FragColor = vec4(col,1.0);
            }
            `;
        var fire = new THREE.TextureLoader().load("/images/texture.png");

        var uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib["ambient"],
            THREE.UniformsLib["lights"], {
                time: { type: "f", value: 1.0 },
                texture: { type: "t", value: fire },
                radius: { type: "f", value: 1.0 },
                light: { type: "v3", value: [1.0,0.0,4.0]},
                highlight: { type: "v3", value: [1.0,0.0,0.0]},
                shadow: { type: "v3", value: [0.0,0.0,1.0]},
                mx: { type: "f", value: 0.0 },
                my: { type: "f", value: 0.0 }
            }
        ]);

        // Create the material that will be used to render each vertex of the geometry
        var particleMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        // Create the particle system
        particleSystem = new THREE.Mesh(icosa, particleMaterial);
        return particleSystem;
    }
const SphereLiquid = ({style}) => {
  const onContextCreate = async (gl) => {
    gl.viewport(0,0, gl.drawingBufferWidth, gl.drawingbufferHeight);
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingbufferHeight,
      0.1, 
      1000
    );
    camera.position.z = 4;

    const renderer = new Renderer({gl});
    render.setSize

       renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);

            var warp = false;
    window.setTimeout(function(){
        warp = true;
    },2000);

   particleSystem = createParticleSystem();

    scene.add(particleSystem);
    var time = 0.0;
    var target = 10.0;
    let distance = 10;
    let assignedposition = 2;
    var frame;
    var pendingBlow = {x: 0.0, y: 0.0};
    camera.up = new THREE.Vector3(0, 1, 0);
    var animate = function() {
        frame = requestAnimationFrame(animate);
        animating = false;
        if(warp) {
            animating = true;
            time += (target - time)/25;
        }
        particleSystem.material.uniforms.time.value = time;

        particleSystem.material.uniforms.mx.value += (pendingBlow.x - particleSystem.material.uniforms.mx.value)/100;
        particleSystem.material.uniforms.my.value += (pendingBlow.y - particleSystem.material.uniforms.my.value)/100;
        camera.position.z = distance;
        camera.lookAt(new THREE.Vector3(0,0,0));
        distance += (assignedposition - distance) / 100;
        renderer.render(scene, camera);
    };

    animate();
    document.onclick = function(e) {
        if(animating)
            target += 5.0;
        else {
            time = 0.0;
            target = 10.0;
        };
    }
    document.onmousemove = function(e) {
        pendingBlow.x = (e.pageX - window.innerWidth/2)/window.innerWidth;
        pendingBlow.y = (e.pageY - window.innerHeight/2)/window.innerHeight;
    }

  
  }
   return (
    <View style={style}>
      <GLView
        onContextCreate={onContextCreate}
        // set height and width of GLView
        style={{ width: '100%', height: '100%',}}
      />
    </View>
  );
}

export default SphereLiquid



// Code needs clean up. Will do it soon.
// (function() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     var renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setClearColor(0x000000, 0);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('container').appendChild(renderer.domElement);
//     warp = false;
//     window.setTimeout(function(){
//         warp = true;
//     },2000);
  
//     particleSystem = createParticleSystem();
//     scene.add(particleSystem);
//     var time = 0.0;
//     var target = 10.0;
//     let distance = 10;
//     let assignedposition = 2;
//     var frame;
//     var pendingBlow = {x: 0.0, y: 0.0};
//     camera.up = new THREE.Vector3(0, 1, 0);
//     var animate = function() {
//         frame = requestAnimationFrame(animate);
//         animating = false;
//         if(warp) {
//             animating = true;
//             time += (target - time)/25;
//         }
//         particleSystem.material.uniforms.time.value = time;

//         particleSystem.material.uniforms.mx.value += (pendingBlow.x - particleSystem.material.uniforms.mx.value)/100;
//         particleSystem.material.uniforms.my.value += (pendingBlow.y - particleSystem.material.uniforms.my.value)/100;
//         camera.position.z = distance;
//         camera.lookAt(new THREE.Vector3(0,0,0));
//         distance += (assignedposition - distance) / 100;
//         renderer.render(scene, camera);
//     };

//     animate();
//     document.onclick = function(e) {
//         if(animating)
//             target += 5.0;
//         else {
//             time = 0.0;
//             target = 10.0;
//         };
//     }
//     document.onmousemove = function(e) {
//         pendingBlow.x = (e.pageX - window.innerWidth/2)/window.innerWidth;
//         pendingBlow.y = (e.pageY - window.innerHeight/2)/window.innerHeight;
//     }
// })();

// function createParticleSystem() {


//     var icosa = new THREE.IcosahedronBufferGeometry(1, 7);


//     var vertexShader = `
//         varying vec3 v;
//         varying vec3 pos;
//         float posY;
//         uniform float radius;
//         uniform float time;
//         uniform float mx;
//         uniform float my;

//         float rand(float n){
//             return fract(sin(n) * 43758.5453123);
//         }

//         void main() {
//             vec3 norm = normalize(normal);
//             float phaseSin = 40.0*cos(mx*3.14)*cos((norm.x-norm.y/2.0+norm.z));
//             float phaseCos = 40.0*sin(my*3.14)*cos((-norm.x/2.0+norm.y+norm.z));
//             pos = (radius+0.1*rand(1.0)*sin(time + phaseSin)*cos(time + phaseCos)) * norm;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//         }
//         `;


//     var fragmentShader = `#extension GL_OES_standard_derivatives : enable

//         varying vec3 v;
//         varying vec3 pos;
//         uniform float time;
//         uniform sampler2D texture;
//         uniform float mx;
//         uniform float my;
//         float dProd;
//         uniform vec3 highlight;
//         uniform vec3 shadow;
//         uniform vec3 light;
//         float rand(float n)
//         {
//             return fract(sin(n) * 43758.5453123);
//         }
//         void main() {
//             // N: normal vector
//             vec3 N = normalize( cross( dFdx( pos.xyz ), dFdy( pos.xyz ) ) );
//             float intensity = max(0.0, pow(2.71,-0.1*distance(pos,light))*dot(normalize(N), normalize(light)));
//             vec3 col = (highlight*intensity + (1.0-intensity)*shadow)/(intensity+1.0);
//             gl_FragColor = vec4(col,1.0);
//         }
//         `;
//     var fire = new THREE.TextureLoader().load("/images/texture.png");

//     var uniforms = THREE.UniformsUtils.merge([
//         THREE.UniformsLib["ambient"],
//         THREE.UniformsLib["lights"], {
//             time: { type: "f", value: 1.0 },
//             texture: { type: "t", value: fire },
//             radius: { type: "f", value: 1.0 },
//             light: { type: "v3", value: [1.0,0.0,4.0]},
//             highlight: { type: "v3", value: [1.0,0.0,0.0]},
//             shadow: { type: "v3", value: [0.0,0.0,1.0]},
//             mx: { type: "f", value: 0.0 },
//             my: { type: "f", value: 0.0 }
//         }
//     ]);

//     // Create the material that will be used to render each vertex of the geometry
//     var particleMaterial = new THREE.ShaderMaterial({
//         uniforms: uniforms,
//         vertexShader: vertexShader,
//         fragmentShader: fragmentShader
//     });

//     // Create the particle system
//     particleSystem = new THREE.Mesh(icosa, particleMaterial);
//     return particleSystem;
// }
