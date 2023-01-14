
// import * as PIXI from 'pixi.js';
// import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
// import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise';
// import hsl from 'https://cdn.skypack.dev/hsl-to-hex';
// import debounce from 'https://cdn.skypack.dev/debounce';
// import {KawaseBlurfilter } from '@pixi/filter-kawase-blur';
import hsl from 'hsl-to-hex-v2';
import debounce from 'debounce';
import { Dimensions } from 'react-native';
// import { PIXI } from 'expo-pixi'; 
import SimplexNoise from 'simplex-noise';
import { useEffect } from 'react';
import { onChange } from 'react-native-reanimated';
import { render } from 'react-dom';
import { GLView } from 'expo-gl';
const window = Dimensions.get('window');

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

    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist, 
        max: originY + maxDist
      }
    };
  }

  onChange = ()=> {
    debounce(() => {
      setBounds();
    }, 250)
  }
  let graphics = new PIXI.Graphics();

  graphics.alpha = 0.825;




  function update() {
    const xNoise = simplex.noise2D(xOff, xOff);
    const yNoise = simplex.noise2D(yOff,yOff);
    x = map(xNoise, -1, 1, bounds['x'].max);
    y = map(yNoise, -1, 1, bounds['y'].max);

    scale = map(scaleNoise, -1, 1, 0.5, 1);

    xOff += inc;
    yOff += inc;
  }

  graphics.x = x;
  graphics.y = y;
  graphics.scale.set(scale);
  
  graphics.clear();
  graphics.beginFill(fillColor);
  graphics.drawCircle(0,0, radius);
  graphics.endFill();

}


// export default function OrbBackground() {
//   // onContextCreate= (gl) => {
//     // gl.viewport()
//   // }
//   return (
//     <GLView 
//     style={{flex:1}}
//     onContextCreate={async context => {
//       const app = new PIXI.Application({ context });

//       app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

//       const colorPalette = new colorPalette();

//       const orbs = [];

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
//     }} />
//   )
// }


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
