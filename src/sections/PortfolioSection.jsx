


import TextLink from '../components/UrlLink.jsx';
import { BlurView} from 'expo-blur';
import tw from '../api/tailwind.js';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';

import Animated, { useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft, SlideInDown, SlideInRight} from 'react-native-reanimated';

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

export const PortfolioSection = ({style, updatePosition, intensity=60, tint='light', }) => {

// export default  function IntroSection() {

// export default  function IntroSection() {
  // console.log('portfo', portfolio)
return (
  <BlurView 
    intensity={intensity} 
    tint={tint} 
    style={style} 
    onLayout={ event => {
    const {posY} = event.nativeEvent.layout
    updatePosition(posY, 'intro')
  }
  }
  >
   
    <View style={tw`container px-6 py-12 mx-auto`}>
        <Text style={tw`text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white`}>Portfolio</Text>

        <View style={tw`mt-8 xl:mt-16 lg:flex lg:-mx-12`}>
            <View style={tw`lg:mx-12`}>
                <Text style={tw`text-xl font-semibold text-gray-800 dark:text-white`}>Table of Content</Text>

                <View style={tw`mt-4 space-y-4 lg:mt-8`}>
                    <Pressable
                      // onClick={}
                    ><Text style={tw`block text-gray-500 dark:text-gray-300 hover:underline`} >
                    Web design
                    </Text>
                    </Pressable>
                    <Pressable  
                    // onClick={}
                    >
                    <Text style={tw`block text-gray-500 dark:text-gray-300 hover:underline`}>
                    App design
                    </Text>
                    </Pressable>
                        <Pressable style={tw`block text-gray-500 dark:text-gray-300 hover:underline`}>
                    <Text style={tw`block text-gray-500 dark:text-gray-300 hover:underline`}>
                    Branding  </Text>
                    </Pressable>
                        <Pressable >
                    <Text style={tw`block text-gray-500 dark:text-gray-300 hover:underline`}>
                    Animation </Text>
                    </Pressable>
                </View>
            </View>

            <View style={tw`flex-1 mt-8 lg:mx-12 lg:mt-0`}>
                <View style={tw`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3`}>
                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={nuzerPng}
                            alt=""/>
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>
                        <TextLink address='Nuzer.com' url='https://www.nuzer.de  ' />{' Ecommerce Web App'}</Text>
                        <Text style={tw`mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 `}>{'Typescript + React'} </Text>
                    </View>

                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={schooladePng}
                            alt=""/>
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>{'Schoolade.org \n Start Up Single Page App'}</Text>
                        <Text style={tw`mt-2 text-lg tracking-widertext-blue-500 uppercase dark:text-blue-400`}>{'React Native + Redux + Firebase'}</Text>
                    </View>

                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={businessPng}
                            alt="" />
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>{'Business Web App'}</Text>
                        <Text style={tw`mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 `}>{'Ruby on Rails \n Postgress + Heroku'}</Text>
                    </View>
                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={zoomautoPng}
                            alt="" />
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>{'Business \n Dynamic Webpage'}</Text>
                        <Text style={tw`mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 `}>{'HTML + SCSS + Javascript + jQuery'} </Text>
                    </View>
                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={nonProfitFeaturePng}
                            alt="" />
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>{'Non-profit \n Dynamic WebSite'}</Text>
                        <Text style={tw`mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 `}>HTML SCSS Bootstrap</Text>
                    </View>
                    <View>
                        <Image style={tw`object-cover w-full rounded-lg h-96`}
                            source={professionalPortfolioPng}
                            alt="" />
                        <Text style={tw`mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white`}>{'Professional Web App '}</Text>
                        <Text style={tw`mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 `}>{'React + Redux'}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  
  </BlurView>
 
 
 )}