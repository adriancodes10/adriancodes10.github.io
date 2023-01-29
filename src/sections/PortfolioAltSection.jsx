



import TextLink from '../components/UrlLink.jsx';
import * as Linking from 'expo-linking';



export default function App() {
  return <A href="https://google.com">Go to Google</A>;
}
import { BlurView} from 'expo-blur';
// import { BlurView} from '@react-native-community/blur';
// import { VibrancyView} from '@react-native-community/blur';
import tw from '../api/tailwind.js';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';

import Animated, { useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft, SlideInDown, SlideInRight} from 'react-native-reanimated';
import { ScrollView } from 'react-native';

const nuzerPng = require('../assets/screenshots/nuzer.png');
const nuzerCatologPng = require('../assets/screenshots/nuzer-catolog.png');
const schooladePng = require('../assets/screenshots/schoolade.png');
const schooladeCardPng = require('../assets/screenshots/schoolade-card.png');
const schooladeMockupsPng = require('../assets/screenshots/schoolade-mockups.png');
const schooladeSelectorPng = require('../assets/screenshots/schoolade-selector.png');
const businessPng = require('../assets/screenshots/business.png');
const businessCardPng = require('../assets/screenshots/business-card.png');
const businessSliderPng = require('../assets/screenshots/business-slider.png');
const zoomautoPng = require('../assets/screenshots/zoom.png');
const zoomautoAboutPng = require('../assets/screenshots/zoom-about.png');
const nonProfitPng = require('../assets/screenshots/non-profit.png');
const nonProfitGalleryPng = require('../assets/screenshots/non-profit-gallery.png');
const nonProfitFeaturePng = require('../assets/screenshots/non-profit-feature.png');
const nonProfitVsPng = require('../assets/screenshots/non-profit-vs.png');
const professionalPng = require('../assets/screenshots/professional-page.png');
const professionalPortfolioPng = require('../assets/screenshots/professional-portfolio.png');
// import nuzerImage from '../assets/portfolio/nuzer.png';

const portfolio = [
  {
    id: 1,
    number: '01',
    category: 'ecommerce',
    link: 'nuzer.de',
    image: nuzerPng,
    title: 'nuzer.de',
    subtitle: 'Ecommerce store | Ruby On Rails',
    description: 'German e-commerce site offering unique products, with branding and checkout capabilities.',
  },
  {
    id: 2,
    number: '02',
    category: 'EdTech Startup',
    link: 'schoolade.org',
    image: schooladePng,
    title: 'schoolade.org',
    subtitle: 'Startup Web App | React Native',
    description: 'EdTech platform web app with firebase integration featuring database, analytics, account management, responsive design, and custom logo design.',
  },
  {
    id: 3,
    number: '03',
    category: 'Business',
    link: 'seguraconstruction.com',
    image: businessPng,
    title: 'seguraconstruction.com',
    subtitle: 'Responsive Business Web App | Ruby On Rails - Postgresql',
    description: 'Construction Services Company Responsive Web app featuring account management, postgresql relational database, custom logo design.',
  },
  {
    id: 4,
    number: '04',
    category: 'Business',
    link: 'myzoomauto.com',
    image: zoomautoPng,
    title: 'myzoomauto.com',
    subtitle: 'Dynamic Business Website | Javascript - Bootstrap - HTML5 - SCSS',
    description: 'Auto Dealership Website featuring a dynamic inventory gallery with custom branding and a responsive design.',
  },
  {
    id: 5,
    number: '05',
    category: 'Non-Profit',
    link: 'realmitchofarrell.com',
    image: nonProfitPng,
    title: 'realmitchofarrell.com',
    subtitle: 'Respnsive Website | Javascript - SCSS - Bootstrap - HTML5',
    description: 'Informative mobile first website with responsive design and google analytics integration.',
  },
  {
    id: 6,
    number: '06',
    category: 'Professional Website',
    link: 'lggg123.github.io',
    image: professionalPng,
    title: 'lggg123.github.io',
    subtitle: 'Professional Page | React',
    description: 'Professional Website for client featuring responsive design, github pages integration',
  },
  // {
  //   id: 7,
  //   number: '07',
  //   category: 'Business',
  //   link: 'www.developer.vonage.com',
  //   // link2: 'www.github.com',
  //   // icon: 'WS',
  //   // icon2: 'G',
  //   image: vonageImg,
  //   title: 'developer.vonage.com',
  //   subtitle: ' | Ruby On Rails',
  //   description:
  //     'Refactoring and adding new features on a Ruby on Rails application with markdown renderers and yaml file parsers to use instead of html.erb files to give technical writers and easy template to build new features. I primarily work on the development side of things in regards to fixing bugs and adding new features to the frontend and backend.'
  // },
  // {
  //   id: 8,
  //   number: '08',
  //   category: 'Business',
  //   link: 'stacklr.com',
  //   // link2: 'www.github.com',
  //   // icon1: 'WS',
  //   // icon2: 'G',
  //   image: stacklrImage,
  //   title: 'Stacklr.com',
  //   subtitle: 'B2B platform | React',
  //   description:
  //   'Building out new features on the backend and fixing database changes and updates. Integrated redis and sidekiq to produce a background job to update an entry based on creation of another table. Working with Ruby on Rails 6.0 and Ruby 2.6.3. On the frontend built out new functionalities to update data and to make an http request. React 18 is being used as the front end framework.',
  // },
  // {
  //   id: ,
  //   category: ,
  //   link: ,
  //   icon: ,
  //   title: ,
  //   subtitle: ,
  //   description: ,
  // },
]

export const PortfolioAltSection = ({style, updatePosition, intensity=60, tint='default', }) => {

return (
  <BlurView
    blurType="light"
    blurAmount={10}
    reducedTransparencyFallbackColor="white"
    // intensity={intensity}
    // tint={tint}
    style={[style]}
    onLayout={(event) => {
      const {y} = event.nativeEvent.layout;
      updatePosition(y, 'portfolio');
    }}>
    <Text
      style={tw`flex items-center justify-center text-3xl font-semibold text-gray-300 lg:text-4xl dark:text-white`}>
      Portfolio
    </Text>
    <View
      style={tw`grid grid-cols-12 grid-rows-12 mt-20 gap-6 md:gap-8 px-4 h-[1250px] md:h-[1250px] lg:h-[1200px] w-[100%]`}>
      <Pressable
        style={tw`mt-20 col-span-6  
      row-span-4 
      md:row-span-4 
      md:col-span-4 
      lg:row-span-5 
      `}
        onPress={() => {
          Linking.openURL('https://www.nuzer.de');
        }}
        // onMouseEnter={touchDown}
        // onMouseLeave={touchUp}
      >
        <ScrollView style={tw`w-full rounded-lg h-[70%] xl:h-[80%]`}>
          <Image
            style={tw`object-cover border-blue-900 border-2 h-100 `}
            source={nuzerPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[15%] md:h-[20%] xl:h-[10%] mt-1 md:mt-2 text-lg 
        md:text-2xl font-semibold text-gray-800 capitalize dark:text-white `}>
          {'Nuzer.com | Ecommerce App'}
        </Text>
        <Text
          style={tw`h-[15%] md:h-[10%] mt-2 text-sm md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi`}>
          {'Typescript + React '}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6 
      row-span-3 
      md:col-span-4 
      md:row-span-3
      lg:row-span-5
      `}
        onPress={() => {
          Linking.openURL('https://www.schoolade.org');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[70%] lg:h-[80%] `}>
          <Image
            style={tw`object-cover h-100  `}
            source={schooladePng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`mt-2 md:mt-4 h-[25%] md:h-[20%] lg:h-[10%] text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-white `}>
          {'Schoolade | Web App'}
        </Text>
        <Text
          style={tw`h-[15%] md:h-[10%] mt-2 md:mt-0 text-sm md:text-base tracking-widertext-blue-500 uppercase dark:text-bluelogo-850 font-semi`}>
          {'React Native'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6
       row-span-3 md:mt-18
       md:col-span-4 
       md:row-span-4`}
        onPress={() => {
          Linking.openURL('https://www.seguraconstruction.com');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[70%] xl:h-[80%]`}>
          <Image
            style={tw`object-cover w-full h-140 `}
            source={businessPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[15%] xl:h-[10%] mt-2 md:mt-4 text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-white `}>
          {'Segura & Co | Web App'}
        </Text>
        <Text
          style={tw`mt-2 h-[15%] xl:h-[10%] text-sm md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi `}>
          {'Ruby on Rails + Postgress + SCSS'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6  row-span-3 md:row-span-5 md:col-span-4 lg:row-span-4`}
        onPress={() => {
          Linking.openURL('https://www.myzoomauto.com');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[70%] lg:h-[80%]`}>
          <Image
            style={tw`object-cover w-full rounded-lg h-120 `}
            source={zoomautoPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[10%] mt-2 md:mt-4 xl:mt-2 text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-white  `}>
          {'Zoom Auto | Webpage'}
        </Text>
        <Text
          style={tw`mt-2 h-[20%] lg:h-[10%] lg:mt-0 text-sm md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi`}>
          {'Bootstrap + HTML/Javascript/SCSS'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6 
      row-span-3
      md:col-span-4 
      md:row-span-3 
      lg:row-span-4
       `}
        onPress={() => {
          Linking.openURL('https://www.realmitchofarrell.com');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[70%] md:h-[60%]  lg:h-[80%]`}>
          <Image
            style={tw`object-cover w-full rounded-lg h-100`}
            source={nonProfitFeaturePng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[15%] 
          md:h-[20%] lg:h-[15%] mt-2 xl:h-[10%] text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>
          Non Profit | Webpage
        </Text>
        <Text
          style={tw`h-[15%] mt-2 md:h-[20%] lg:h-[15%] text-sm xl:h-[10%] md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi`}>
          {'Bootstrap + HTML/JAVASCRIPT/SCSS'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6 
      row-span-3 
      md:col-span-4
      md:row-span-5`}
        onPress={() => {
          Linking.openURL('https://lggg123.github.io');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[75%] xl:h-[80%]`}>
          <Image
            style={tw`object-cover w-full rounded-lg h-100`}
            source={professionalPortfolioPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[15%] mt-2 md:mt-4 lg:mt-2 xl:h-[10%] text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-white `}>
          Professinal's Single Page App
        </Text>
        <Text
          style={tw`h-[10%] mt-2 text-sm lg:mt-0 md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi`}>
          {'React'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6 
      row-span-4
      md:col-span-4
      md:row-span-4`}
        onPress={() => {
          Linking.openURL('https://www.myzoomauto.com/about-us.html');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[65%] md:h-[65%] lg:h-[70%] xl:h-[80%]`}>
          <Image
            style={tw`object-cover w-full rounded-lg h-100 `}
            source={zoomautoAboutPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[25%] mt-2 md:mt-4 lg:mt-2 lg:h[20%] xl:h-[10%] text-lg md:text-2xl font-semibold text-gray-800 capitalize dark:text-gray-100 `}>
          Zoom Auto | About us webpage
        </Text>
        <Text
          style={tw`h-[15%] md:h-[10%] mt-2 lg:mt-0 lg:h-[10%]text-sm md:text-base tracking-wider text-blue-500 uppercase dark:text-bluelogo-850 font-semi `}>
          {'Ruby on Rails + Postgress + Heroku'}
        </Text>
      </Pressable>
      <Pressable
        style={tw`col-span-6 
      row-span-5
      md:col-span-4 
      md:row-span-4 
      lg:row-span-5
      `}
        onPress={() => {
          Linking.openURL('https://www.seguraconstruction.com');
        }}>
        <ScrollView style={tw`w-full rounded-lg h-[65%] lg:h-[75%]`}>
          <Image
            style={tw`object-cover w-full rounded-lg h-130`}
            source={businessSliderPng}
            alt=""
          />
        </ScrollView>
        <Text
          style={tw`h-[20%] md:mt-4 text-lg md:text-2xl lg:h-[15%] font-semi text-gray-800 capitalize dark:text-gray-100`}>
          Segura & Co | Web App
        </Text>
        <Text
          style={tw`h-[15%]  text-sm md:text-base lg:text-lg lg:h-[10%] tracking-wider text-blue-500 uppercase dark:text-bluelogo-850  `}>
          {'Ruby on Rails + Postgress + Heroku '}
        </Text>
      </Pressable>
    </View>
  </BlurView>
);}