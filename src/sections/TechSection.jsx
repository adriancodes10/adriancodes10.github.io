




import { BlurView} from 'expo-blur';
import tw from '../api/tailwind.js';
// const { plugin } = require('twrnc');
const reactPng = require('../assets/icons/atom.png');
const reactImage = require('../assets/icons/tech/react.png');
const reactImageAlt = require('../assets/icons/tech/react-icon.png');
const rubySvg = require('../assets/icons/tech/ruby-flat.svg');
const railsPng = require('../assets/icons/tech/rails.png');
const solLight = require('../assets/icons/tech/solidity-light.png');
// const solPng = require('../assets/icons/tech/solidity.png');
// const pyPng = require('../assets/icons/tech/python.png');
// const pyColorPng = require('../assets/icons/tech/python-color.png');
const pySvg = require('../assets/icons/tech/python-color.svg');
const jsPng = require('../assets/icons/tech/js.png');
const typescriptPng = require('../assets/icons/tech/typescript.png');
const htmlPng = require('../assets/icons/tech/html.png');
// const htmlFlat = require('../assets/icons/tech/html-flat.png');
const cssPng = require('../assets/icons/tech/css3.png');
const vuePng = require('../assets/icons/tech/vue-3d.png');
const swiftPng = require('../assets/icons/tech/swift.png');
const tailwindPng = require('../assets/icons/tech/tailwind.png');
const bootstrapPng = require('../assets/icons/tech/bootstrap.png');
// const cssPng = require('../assets/icons/tech/css3.png')
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';
import Animated, { useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft, FadeInUp} from 'react-native-reanimated';
import RatingBar from '../components/TechRating.jsx';
import useDimensions from '../hooks/useDimensions.jsx';

//   const skillsPng = require('../assets/icons/tech/react.png');
// const skills = {
  
// }
export const TechSection = ({style, updatePosition, intensity=20, tint='dark', }) => {
const {window} = useDimensions();

return (
  <BlurView
    intensity={intensity}
    tint={tint}
    style={[ {
      webkitBackdropFilter:'saturate(180%) blur(3px)',
    },style]}
    onLayout={(event) => {
      const {y} = event.nativeEvent.layout;
      updatePosition(y, 'tech');
    }}>
    <View style={tw`flex items-center mt-5 mb-3`}>
      <Text
        style={tw`text-white text-2xl font-semibold items-center p-1.5 mb-4 md:mb-8`}>
        Tech Expertise
      </Text>
      {/* <Text style={tw`ml-2 font-medium text-gray-900 dark:text-white`}>Tech XP</Text> */}
      <View style={tw`hidden flex-row`}>
        <Image source={cssPng} />
        {/* <Image /> */}
        {/* <Image /> */}
      </View>
      <View
        style={tw`"w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500`}></View>
      <Text
        style={tw`"text-sm hidden font-medium text-gray-500 dark:text-gray-400`}>
        Languague Exp
      </Text>
      <Text
        style={tw`"text-sm hidden font-medium text-gray-500 dark:text-gray-400`}>
        376 reviews
      </Text>
      {/* <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a> */}
    </View>
    <View
      style={[
        tw.style(`grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4`, tw.prefixMatch('landscape') && window.height < 500 && `md:grid-cols-3`),
        // {border: '2px dashed pink'}
      ]}>
      {/* <View style={tw`md:w-[45%] portrait:h-3/6`}> */}
      <RatingBar
        language="React Native"
        rating="9.9"
        icon={reactPng}
        height="15"
        width="15"
      />
      <RatingBar
        language="React"
        rating="9.5"
        icon={reactImage}

        // height="15"
        // width="15"
      />
      <RatingBar
        language="Javascript"
        rating="10.0"
        icon={jsPng}
        // height="15"
        // width="15"
      />
      <RatingBar
        language="Typescript"
        rating="8.0"
        icon={typescriptPng}
        // height="15"
        // width="15"
      />


      <RatingBar
        language="Ruby"
        rating="9.0"
        icon={rubySvg}
        // height="15"
        // width="15"
      />
      <RatingBar
        language="Ruby on Rails"
        rating="9.0"
        icon={railsPng}
        // height="15"
        // width="15"
      />
      <RatingBar
        language="Tailwind"
        rating="9.5"
        icon={tailwindPng}
        // height="15"
        // width="15"
      />
      <RatingBar
        language="Solidity"
        rating="9.0"
        icon={solLight}
        height="12"
        width="8"
      />
         <RatingBar
          language="Python"
          rating="9.0"
          icon={pySvg}
          // height="15"
          // width="15"
        />
           <RatingBar
          language="Swift"
          rating="8.0"
          icon={swiftPng}
          height="14"
          width="14"
        />
           <RatingBar
          language="HTML5"
          rating="10.0"
          icon={htmlPng}
          height="14"
          width="14"
        />
           <RatingBar
          language="CSS/SCSS "
          rating="9.5"
          icon={cssPng}
          height="14"
          width="14"
        />
           <RatingBar
          language="Vue"
          rating="8.0"
          icon={vuePng}
          // height="15"
          // width="15"
        />
           <RatingBar
          language="Boostrap"
          rating="10.0"
          icon={bootstrapPng}
          height="14"
          width="14"
        />
           <RatingBar
          language="Postgres"
          rating="10.0"
          icon={reactImageAlt}
          height="14"
          width="14"
        />
      </View>
  </BlurView>
);}