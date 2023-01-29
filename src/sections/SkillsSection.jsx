


import { BlurView} from 'expo-blur';
import tw from '../api/tailwind.js';
// const { plugin } = require('twrnc');
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';

const ideaGirlPng = require('../assets/icons/idea-girl.png');
const ideaBulbPng = require('../assets/icons/bulb-dynamic-color.png');
const ideaBulbGoldPng = require('../assets/icons/bulb-front-premium.png');
const firePng = require('../assets/icons/fire-matte.png');
const playPng = require('../assets/icons/play-matte.png');
const rocketPng = require('../assets/icons/rocket.png');
const gearGoldPng = require('../assets/icons/settings-gold-gear.png');
const shieldPng = require('../assets/icons/shield-matte.png');


const thumbsUpPng = require('../assets/icons/thumb-up.png');
const touchAnglePng = require('../assets/icons/touch-angle.png');
const touchRightPng = require('../assets/icons/touch-right.png');
const touchPng = require('../assets/icons/touch.png');





const heartGoldPng = require('../assets/icons/heart-gold.png')
const heartAnglePng = require('../assets/icons/heart-angle.png')
const heartFlatPng = require('../assets/icons/heart-like.png')
const locationPointer = require('../assets/coding/location-pointer-color.png');


const webRocketPng = require('../assets/coding/laptop-rocket-blue.png');
const webProfilePng = require('../assets/coding/laptop-profile.png');
const webGalleryPng = require('../assets/coding/laptop-gallery.png');
const mobileAppPng = require('../assets/coding/mobile-app-matte.png');
const webSeoPng = require('../assets/coding/laptop-seo.png');
const dashboardPng = require('../assets/coding/dashboard.png');
const dashboardMattePng = require('../assets/coding/dashboard-matte.png');

const web3Png = require('../assets/coding/nft.png');
const ethPng = require('../assets/icons/tech/ethereum.png');
const eth3dPng = require('../assets/coding/ethereum.png');
const nftPng = require('../assets/coding/nft-icon.png');
const nftTouch = require('../assets/coding/nft-touch.png');
const metaverseConnect = require('../assets/coding/metaverse-connect.png');
const metaverseGlasses = require('../assets/coding/metaverse-glasses.png');
const metaverseGroup = require('../assets/coding/metaverse-group.png');


const paymentPng = require('../assets/coding/payment-card-matte.png');
const productBoxPng = require('../assets/coding/product-box.png');
const ecomMobilePng = require('../assets/coding/ecom-mobile-store.png');
const ecomMobileRedPng = require('../assets/coding/ecom-mobile-store-angle-right.png');
const ecomMobilePresentPng = require('../assets/coding/ecom-mobile-store-offer-angle.png');
const ecomWebPng = require('../assets/coding/ecom-store-desktop.png');
const ecomGrowthPng = require('../assets/coding/ecom-growth.png');
const ecomWebAltPng = require('../assets/coding/ecom-laptop-cart.png');
const ecomCartPng = require('../assets/coding/ecom-cart.png');
const ecomWebPresentPng = require('../assets/coding/laptop-present.png');
const productGirlPng = require('../assets/coding/product-girl-diamond.png');


const businessWebPng = require('../assets/coding/ecom-window-cash-briefcase.png');

// const backendPng = require('../assets/coding/');

const databasePng = require('../assets/coding/cloud-computing.png');
const databaseLeftPng = require('../assets/coding/cloud-computing-left.png');
const apiPng = require('../assets/coding/cloud-computing-api.png');
const cloudComputingPng = require('../assets/coding/cloud-computing-gold.png');

const firebasePng = require('../assets/icons/tech/firebase.png');
const amplifyPng = require('../assets/icons/tech/aws.png');




// const frontendPng = require('../assets/coding/');
const palettePng = require('../assets/icons/color-palette.png');
const figmaPng = require('../assets/icons/tech/figma.png');
const figmaSketchPng = require('../assets/icons/tech/figma-sketch-png.png');
const imageMattePng = require('../assets/coding/image-matte.png');
const image3dPng = require('../assets/coding/image-3d.png');
const imagePinkPng = require('../assets/coding/image-pink.png');


const socialGirlPng = require('../assets/coding/socialmedia-girl.png');
const selfiGirlPng = require('../assets/coding/socialmedia-selfie.png');
const marketingPng = require('../assets/coding/advertisement.png');
const likePng = require('../assets/coding/like.png');

const qrPng = require('../assets/coding/qr-code.png');
const hashtagPng = require('../assets/icons/hash-dynamic-color.png');

const applePng = require('../assets/icons/tech/apple.png');
const iosPng = require('../assets/icons/tech/ios.png');
const androidPng = require('../assets/icons/tech/android.png');




import Animated, { useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft} from 'react-native-reanimated';
export const SkillsSection = ({style,updatePosition, intensity=20, tint='light', }) => {
const techPng = require("../assets/coding/coding-office.png");

return (
  <BlurView
    intensity={intensity}
    tint={tint}
    // style={[tw`section`]}
    style={style}
    onLayout={(event) => {
     const {y} = event.nativeEvent.layout;
     updatePosition(y, 'skills');
    }}>
    <Text style={[tw`text-2xl md:text-3xl text-white font-bold m-auto w-[20rem] mb-10`, {textAlign: 'center',}]}>
      Services | Products
    </Text>
    <View
      style={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-5 lg:gap-8 xl:gap-8 `}>
      {/* <View style={tw`grid grid-col-1 md:grid-col-2 lg:grid-col-3`}> */}
      <View style={[tw``]}>
        <Text style={[tw`text-2xl text-gray-100 font-bold flex justify-center`]}>
          Apps
        </Text>
        <Text style={[tw`text-base text-bluelogo-800 font-bold flex justify-center`]}>
          Cross Platform + Web App
        </Text>
        <Text style={[tw`text-base text-bluelogo-800 font-bold flex justify-center`]}>
          iPhone + Android
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          <Animated.Image source={mobileAppPng} style={[tw`h-20 w-20 `]} />
          <Animated.Image source={webRocketPng} style={[tw`h-20 w-20 `]} />
          <Animated.Image
            source={webGalleryPng}
            style={[tw`h-25 w-25 `, {transform: [{scaleX: -1}]}]}
          />
        </View>
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-2xl text-gray-100 flex font-bold justify-center`]}>
          Front End
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 flex font-bold justify-center`]}>
          UX/UI Design + Logo Design
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 flex font-bold justify-center`]}>
          Mockups + WireFrames
        </Text>
        <View
          style={tw`flex-row items-center justify-evenly
        `}>
          <Animated.Image source={palettePng} style={[tw`h-30 w-30 `]} />
          <Animated.Image source={figmaPng} style={[tw`h-30 w-30 `]} />
          <Animated.Image
            source={figmaSketchPng}
            style={[tw`hidden h-30 w-30 top-[-10px]`]}
          />
        </View>
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-2xl text-gray-100 flex font-bold justify-center`]}>
          Backend
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 flex font-bold justify-center`]}>
          Hosting + Database integration
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Postgres + API's
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          {/* <Animated.Image source={cloudComputingPng} style={[tw`h-30 w-30`]} /> */}
          <Animated.Image source={apiPng} style={[tw`h-30 w-30 `]} />
          <Animated.Image source={databaseLeftPng} style={[tw`h-30 w-30 `]} />
        </View>
      </View>
      {/* </View> */}
      {/* <View style={tw``}> */}
      <View style={[tw``]}>
        <Text style={[tw`text-2xl text-gray-100 flex justify-center`]}>
          Webpages
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Static + Dynamic
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          <Animated.Image source={webProfilePng} style={[tw`h-25 w-25 `]} />
          <Animated.Image source={dashboardMattePng} style={[tw`h-25 w-25 `]} />
        </View>
      </View>
      <View style={tw``}>
        <Text style={[tw`text-2xl text-gray-100 font-bold flex justify-center`]}>
          Web3
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Dapps + Smart Contracts
        </Text>
        <Text style={[tw`text-lg text-gray-100 font-bold flex justify-center`]}>
          NFTs + Token
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Blockchain Integrations
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          {/* <Animated.Image source={metaverseConnect} style={[tw`h-25 w-25 `]} /> */}
          <Animated.Image source={nftPng} style={[tw`h-25 w-25 `]} />
          <Animated.Image source={nftTouch} style={[tw`h-25 w-25`]} />
        </View>
      </View>
      <View style={tw``}>
        <Text style={[tw`text-2xl text-gray-100 flex font-bold justify-center`]}>
          Integrations
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Google Firebase + AWS Amplify
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          <Animated.Image source={firebasePng} style={[tw`h-30 w-30 `]} />
          <Animated.Image source={amplifyPng} style={[tw`h-30 w-30`]} />
        </View>
      </View>
      {/* </View> */}
      {/* <View style={tw`md:w-[50%] lg:w-[30%]`}> */}
      <View style={tw``}>
        <Text style={[tw`text-2xl text-gray-100 flex font-bold justify-center`]}>
          Social Media Martketing
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Facebook Business + Instagram
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Google Business
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          <Animated.Image source={marketingPng} style={[tw`h-30 w-30 `]} />
          {/* <Animated.Image source={selfiGirlPng} style={[tw`h-30 w-30 `]} /> */}
          {/* <Animated.Image source={hashtagPng} style={[tw`h-30 w-30 `]} /> */}
          <Animated.Image source={socialGirlPng} style={[tw`h-30 w-30 `]} />
        </View>
      </View>
      <View style={tw``}>
        <Text style={[tw`text-2xl text-gray-100 font-bold flex justify-center`]}>
          Ecommerce
        </Text>
        <Text style={[tw`text-lg text-bluelogo-800 font-bold flex justify-center`]}>
          Mobile + Web
        </Text>
        <View style={tw`flex-row justify-evenly`}>
          <Animated.Image source={ecomMobilePng} style={[tw`h-20 w-20 `]} />
          <Animated.Image source={ecomCartPng} style={[tw`h-20 w-20 `]} />
          {/* <Animated.Image
              source={ecomMobileRedPng}
              style={[tw`h-20 w-20 `]}
            /> */}
          <Animated.Image source={ecomWebPng} style={[tw`h-20 w-20 `]} />
          {/* <Animated.Image source={ecomWebAltPng} style={[tw`h-20 w-20 `]} /> */}
        </View>
      </View>
    </View>
    {/* </View> */}
  </BlurView>
);}
 const items = [{ label: "Mobile and web app", value: "mobile + web app" },
 { label: 'consultation', value: "consultation"},
 { label: "Android or iPhone app (both or one)", value: "mobile app" },
 { label: "web app only", value: "web app" },
 { label: "website", value: "website" },
 { label: "code review", value: "code review" },
 { label: "codebase work", value: "codebase work" },
 { label: "Smart Contract", value: "smart contract" },
 { label: "Decentralized app / dApp", value: "dApp" }]