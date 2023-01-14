import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Dimensions,
   ScrollView,
    Pressable,Modal } from 'react-native';
// import { ScrollView } from 'react-native-web';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';
// import * as ImagePicker from 'expo-image-picker';
import {useState, useRef, useEffect, Fragment } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Sphere from './src/components/Sphere';



import tw from './src/api/tailwind.js';
import { useDeviceContext } from 'twrnc';
import {NavigationBar} from './src/components/layouts/header'
import { IntroSection } from './src/sections/IntroSection';
import {TechSection} from './src/sections/TechSection';
import {SkillsSection} from './src/sections/SkillsSection';
import { PortfolioSection } from './src/sections/PortfolioSection';
import { PortfolioAltSection } from './src/sections/PortfolioAltSection';
import { ExperienceSection } from './src/sections/ExperienceSection';
import { FooterSection } from './src/components/layouts/footer';

import {SlideOver} from './src/sections/SlideOver'
import CTA from './src/components/CTA/CTA';
import CTASimple from './src/components/CTA/CTASimple';
import CTAAlt from './src/components/CTA/CTAAlt';
import CTAImage from './src/components/CTA/CTAImage';
import CTAImages from './src/components/CTA/CTAImages';
import CTAFeature from './src/components/CTA/CTAFeature';
import CTAInfo from './src/components/CTA/CTAInfo';
import CTAPlain from './src/components/CTA/CTAPlain';
import CTASub from './src/components/CTA/CTASub';
import CTATimer from './src/components/CTA/CTATimer';
import useDimensions from './src/hooks/useDimensions';
const resumePdf = require('./src/assets/documents/2023_Resume.pdf')
const resumePng = require('./src/assets/documents/2023_Resume.png')
// const beachImage = require('./src/assets/images/background-image.png')

export default function App() {
  useDeviceContext(tw);

  const [navBack, setNavBack] = useState(false);
    const {window, screen} = useDimensions();

    useEffect(() => {
    }, [window, screen]);

  const ref = useRef(null);
  const [slideOpen, setSlideOpen] = useState(false);
  const toggleSlider = () => {
    setSlideOpen(!slideOpen);
    
  };
  const [resumeOpen, setResumeOpen] = useState(false);
  const toggleResume = () => {
    setResumeOpen(!resumeOpen);

  }

 
  const [sectionPositions, setSectionPositions] = useState({
    intro: undefined,
    tech: undefined,
    skills: undefined,
    portfolio: undefined,
    experience: undefined,

  });
  const updatePosition = (position, sectionKey) => {
    sectionPositions[sectionKey] = position;
  };



  const scrollHandler = (sectionName) => {
 
    if (sectionName == 'footer') {
      ref?.current?.scrollToEnd();
    } else if (sectionName in sectionPositions) {

      ref?.current?.scrollTo({
        y: sectionPositions[sectionName],
        animated: true,
      });
 
      
    } else {
      console.log('sectionName not recognized in object keys');
    }
  };


   const lastContentOffset = useSharedValue(0);
   const isScrolling = useSharedValue(false);
   const translateY = useSharedValue(0);
  

    const actionBarStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withTiming(translateY.value, {
              duration: 750,
              easing: Easing.inOut(Easing.ease),
            }),
          },
        ],
      };
    });

  
  function checkScroll(position, threshhold=40) {
    if (position > threshhold) {
      navBack == false ?  
      setNavBack(true): null;  
    }  else if (position < threshhold){
        navBack == true ? setNavBack(false):null;
    }
  }
  const AnimScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      var currentOffset = event.contentOffset.y;
      var direction = currentOffset+1 > lastContentOffset ? 'direction down' : 'direction back up';
      if (
        lastContentOffset.value > event.contentOffset.y 
      ) {
        setNavBack(false);
        if (event.layoutMeasurement.width < 689){
          translateY.value = 0;
        } else {
          translateY.value = 0;
        }
      } else if (
        lastContentOffset.value < event.contentOffset.y 
      ) {
        setNavBack(true)
        if (event.layoutMeasurement.width < 689) {
          translateY.value = -100;
        }else {
          translateY.value = 100;
        }
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      console.log('onbeginDrag')
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
       console.log('onEnDrag');
      isScrolling.value = false;
    },
  });

  return (
    // <ScrollViewPage />
    <GestureHandlerRootView style={tw`container overflow-hidden`}>
      <Sphere
        style={[
          tw`absolute dark:bg-[#024396] light:bg-gold-50`,
          {
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
          },
        ]}
      />
      {slideOpen && (
        <SlideOver
          style={[
            tw.style(
              'absolute h-auto rounded-2xl z-20 my-auto flex-col gap-4 bg-blue-400 py-15 px-10 items-center justify-items-start items-center w-[75vw] md:mt-[7%] md:w-[50%]',
              {
                right: '-2px',
                opacity: '0.9',
              },
              tw.prefixMatch(`landscape`) &&
                window.height < 500 &&
                `w-[80%] h-[74%] mt-[3%] `
            ),
          ]}
          isOpen={slideOpen}
          toggleSlider={toggleSlider}
        />
      )}

      <Animated.View
        style={[
          tw.style(
            `absolute bottom-5 mx-auto md:top-5 right-[6.5%]`,
            navBack == true ? {zIndex: '0'} : {zIndex: '1'}, {display: 'table'},
          ),
          actionBarStyle,
        ]}>
        <NavigationBar
          style={[
            tw.style(
              `nav glass-border px-3 justify-center md:justify-start lg:justify-evenly bg-bluelogo-700`
            ),
          ]}
          navigationFunction={(name) => scrollHandler(name)}
          toggleSlider={() => toggleSlider()}
        />
      </Animated.View>

      <Animated.ScrollView
        style={[
          // styles.scrollView, tw`bg-transparent`,
          {width: window.width, height: window.height},
        ]}
        ref={ref}
        onScroll={AnimScrollHandler}
        scrollEventThrottle={30}
        scrollToOverflowEnabled={true}>
        <IntroSection
          toggleResume={toggleResume}
          style={[
            tw.style(
              `section z-2 flex-column md:flex-row p-6 md:h-[500px] md:px-10 md:py-7 lg:px-20  lg:py-10 xl:px-25 mt-5 mb-10 md:mt-40 md:mb-20 min-h-[300px]`,
              tw.prefixMatch(`landscape`) && window.height < 500
                ? `md:h-[80vh] md:mt-25`
                : ''
            ),
          ]}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
        />

        <TechSection
          style={tw.style(
            `section p-5 
            p-6 md:px-10 md:py-7 lg:px-10 lg:py-10
            min-h-100 ios:h-[900px] my-10 md:my-20`,
            tw.prefixMatch('landscape') &&
              !tw.prefixMatch('md') &&
              `min-h-[400px]`
          )}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
        />
        <CTA
          title="Ready to talk?"
          subtitle="Contact me now."
          buttonOptionPrimary="Call"
          buttonOptionSecondary="Email"
        />
        {/* <CTASimple
          title="Start your next project today."
          subtitle="Free consultation. No credit card required. "
        /> */}
        <SkillsSection
          style={tw.style(
            `section p-5
            p-6 md:px-10 md:py-7 lg:px-10 lg:py-10
            my-10 md:my-20`,
            tw.prefixMatch('landscape') &&
              !tw.prefixMatch('md') &&
              `min-h-[400px]`
          )}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
        />
        {/* <CTAPlain /> */}
        {/* <PortfolioSection
          style={tw.style(
            `hidden section p-5 
            p-6 md:px-10 md:py-7 lg:px-10 lg:py-10
            `,
            tw.prefixMatch('landscape') &&
              !tw.prefixMatch('md') &&
              `min-h-[400px]`
          )}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
        /> */}
        <PortfolioAltSection
          style={tw.style(
            `section border-0 p-5 h-auto w-[100%] 
            p-6 md:px-10 md:py-7 lg:px-10 lg:py-10 my-10 md:my-20
            `,
            tw.prefixMatch('landscape') &&
              !tw.prefixMatch('md') &&
              `min-h-[400px]`
          )}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
        />
        {/* <CTAImages /> */}
        <CTAImages />
        {/* <CTAAlt /> */}
        {/* <CTAInfo /> */}
        {/* <CTAFeature />  */}
        <ExperienceSection
          style={tw.style(
            `section p-4
             md:px-5 lg:px-10 lg:py-10 my-10 md:my-20
            `,
            tw.prefixMatch('landscape') &&
              !tw.prefixMatch('md') &&
              `min-h-[400px]`
          )}
          updatePosition={updatePosition}
          contactMe={toggleSlider}
          toggleResume={toggleResume}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={resumeOpen}
          onRequestClose={() => {
            toggleResume();
          }}>
          <View
            style={[
              tw`h-[100%] w-[100%] overflow-x-scroll bg-black flex flex-col justify-center justify-items-center align-center`,
              {overflowX: 'scroll'},
            ]}>
            <Image
              source={resumePng}
              style={[
                tw`h-[90vh] mx-auto`,
                {aspectRatio: '897/1148', width: 'auto'},
              ]}
            />
            <Pressable
              onPress={() => toggleResume()}
              style={tw`py-2 px-3 bg-blue-800 w-30 mx-auto rounded-lg`}>
              <Text style={tw`text-white font-bold text-lg mx-auto`}>
                Close
              </Text>
            </Pressable>
          </View>
        </Modal>
        {/* <CTAImage /> */}
        {/* <CTASub /> */}
        {/* <CTATimer /> */}
        <FooterSection style={tw`px-6 p-10 mt-10 md:mt-20`} />
      </Animated.ScrollView>
    </GestureHandlerRootView>
  );
}
const colors ={
  // ...DefaultTheme.colors,
  blueLighter6: '#fbe793',
  blueLighter5: '#f1f7fe',
  blueLighter4: '#e3edfb',
  blueLighter3: '#c0dbf7',
  blueLighter2: '#88bef1',
  blueLighter1: '#489ce8',
  blue: '#328de0',
  blueDarker1: '#1364b6',
  blueDarker2: '#104f94',
  blueDarker3: '#12457a',
  blueDarker4: '#143a66',
  red: '#b22f2d',
  eggnog: '#e6c487',
  eggnogDark: '#dca65b',
  eggnogLight: '#f0ddb8',
  gold: '#E6C487',
  green: '#5ed188',
  salmon: 'EF798A',
  primary: 'rgb(255, 45, 85)',
  card: '#989898',
  text: '#fff',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
    white: '#ffffff',
    whiteShade1: '#efefef',
    whiteShade2: '#dcdcdc',
    whiteShade3: '#bdbdbd',
    whiteShade4: '#989898',
    whiteShade5: '#7c7c7c',
    whiteShade6: '#656565',
    whiteShade7: '#525252',
    whiteShade8: '#464646',
    whiteShade9: '#3d3d3d',
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    opacity: '0.4',
    // border: '2px dashed red',
  },
    scrollView: {
      backgroundColor: 'transparent',
    backgroundColor: '#eeeeee',
    maxHeight: Dimensions.get('window').height,
    maxWidth: Dimensions.get('window').width
  },
  section: {
    height: '80vh',
    width: '100vw',
    alignContent: 'center',
    justifyContent: 'center',
    // border: '2px dashed blue',
    overflow: 'hidden',
    backgroundColor: colors.blueDarker3
  },
  cssBlur: {
    position: 'absolute',
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    // boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
    // backdropFilter: "blur(10px)",
    width: '80%', 
    height: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 13px )',
    // -webkit-backdrop-filter: blur( 3px );
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    
  },
  bgImage: {
    backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')",
    backgroundPosition: 'center',
  },
  cssBlur2: {
    position: 'absolute',
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    // boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
    // backdropFilter: "blur(10px)",
    width: '80%', 
    height: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
      backdropFilter: 'blur(2px) saturate(137%)',
      // -webkit-backdrop-filter: blur(2px) saturate(137%);
      backgroundColor: 'rgba(17, 25, 40, 0)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.125)',
  },
  headerText: {
    // fontSize: '4rem', padding: '3rem',
  },
  headerSubtitle: {
    // fontSize: '2rem',
    fontWeight: '700',
    color: 'slategray',
  },
  headerMotto: {
    fontSize: '1.7rem',
  },
  blurContainer: {
    position: 'absolute',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
    // backdropFilter: "blur(10px)",
    width: '80%', 
    height: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
    borderRadius: '12px',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 18,
  //   resizeMode: 'contain',
  //   source: {PlaceholderImage},
  // },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
