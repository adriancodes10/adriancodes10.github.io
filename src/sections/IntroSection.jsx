


import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import {address, contactNumber }from '../utilities/constants';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button, Modal } from 'react-native';
import { Animated as Ani } from 'react-native';
import { useEffect } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { BlurView} from 'expo-blur';
import { Linking } from 'react-native';
import tw from '../api/tailwind.js';
// const { plugin } = require('twrnc');

import Animated, { useSharedValue, interpolate, cancelAnimation,
  withTiming, withRepeat,
  withSequence, withDelay,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FadeIn, Keyframe, FadeInUp, FadeOutRight, Layout} from 'react-native-reanimated';
  import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import useDimensions from '../hooks/useDimensions.jsx';
// import Form from '../components/form.jsx';
import Slider from '../components/slider.jsx';

  const coding = require('../assets/emoji/coding.png')
  const ecomShirt = require('../assets/coding/ecom-mobile-shirt.png')
  // const chart = require('../assets/coding/components/chart.png')
  // const desktopgallery = require('../assets/coding/components/desktop-gallery.png')
  // const imgList = require('../assets/coding/components/list.png')
  // const imgMobilechart = require('../assets/coding/components/mobile-piechart.png')
  // const imgStyling = require('../assets/coding/components/shapes-font.png')
  // const imgCharting = require('../assets/coding/components/piechart.png')
  // const styling = require('../assets/coding/components/shapes-font.png')
  // const imgBrowserpurle = require('../assets/coding/components/window-piechart-shape.png')
  // const imgBrowserred = require('../assets/coding/components/window-red-chart.png')
  const browserShapes = require('../assets/coding/components/window.png')
  const nft = require('../assets/coding/nft-touch.png')
 const webApp = require('../assets/coding/components/desktop-gallery.png')


export const IntroSection = ({style, updatePosition, intensity=10, tint='dark', toggleResume }) => {
//   const config = {
//     duration: 500,
//     easing: Easing.bezier(0.5, 0.01, 0, 1),
//   };
  // const randomWidth = useSharedValue(0);
   const {window, screen} = useDimensions();
  const [ showForm, setShowForm ] = useState(false);
  //  var purpose = useRef('');
  //  var project = useRef('');
   const [sliderProps, setSliderProps] = useState({purpose: '',
  project: '',})
   var project = useRef('');
   const toggleForm = () => {
     setShowForm(!showForm);
   };
   
    // const [showOptions, setShowOptions ] = useState(false);
    // const [selected, setSelected] = useState(false);
    const selectedAnim = useRef(new Ani.Value(1)).current;
    //  const scaleDownAnimation = useSharedValue(1);
    // const scaleOut = () => {
    //   let animation
    //   if(!toggle){
    //     animation = Animated.timing(animatedValue, {
    //       toValue: 1,
    //       duration: 700,
    //       useNativeDriver:true,
    //     });
    //   }
    //   else{
    //     animation = Animated.timing(animatedValue, {
    //       toValue: 0,
    //       duration: 2000,
    //       useNativeDriver:true,
    //     });
    //   }
    //   animation.start(()=>{
    //     setToggle(!toggle)
    //   })
    // };
    // let scaleAnim = animatedValue.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0.9,2.2]
    // })
    // const spinVal = useSharedValue(0)

    // const animatedStyle = useAnimatedStyle(() => {
    //   const rotate = interpolate(spinVal.value, [0,1,2], ['0deg', '2deg', '-2deg']);

    //   return {
    //     transform: [{
    //       rotate: withRepeat(withSequence(withTiming(1,{ duration: 1000, easing: Easing.linear }), withTiming(2, {duration: 1000, easing: Easing.linear })),-1,false),
    //   }],
    //   };
    // });



    // ring anim
    const ring = useSharedValue(0);
    useEffect(() => {

      ring.value = withRepeat(
        // delay,
        withSequence(
          withTiming(1, {
            duration: 1000,
          }),
          withTiming(2, {duration: 1000, easing: Easing.linear })
        ),
        -1,
        // false
        true
      );
    }, []);

    const ringStyle = useAnimatedStyle(() => {
      // return {
      //   // opacity: 0.8 - ring.value,
      //   transform: [
      //     {
      //       rotate: interpolate(ring.value, [0, 1,2], ['0deg', '2deg', '-2deg']),
      //     },
      //   ],
      // };
      const rotate = interpolate(ring.value,[0,1,2], [0, 2, -2]);
      return {
        transform: [{rotate: `${rotate}deg`}],
      };
    });





    const animated = useSharedValue(0);
      const animated5 = useSharedValue(0);
      const rStyle = useAnimatedStyle(() => {
      // const translateY = interpolate(animated.value, [0,1], [0,20]);
      // const translateX = interpolate(animated.value, [0,0.5, 1], [-5,0, 5]);
      const rotate = interpolate(animated.value, [0,0.5, 1], [-2,0, 2]);
      return {
        transform: [
          // {translateY},
          //  {translateX}, 
          {rotateZ: `${rotate}deg`}
        ]
      };
    });
    const animated2 = useSharedValue(0);
       const rStyle2 = useAnimatedStyle(() => {
      // const translateY = interpolate(animated.value, [0,1], [0,20]);
      // const translateX = interpolate(animated.value, [0,0.5, 1], [-5,0, 5]);
      const rotate = interpolate(animated.value, [0,0.5, 1], [-2,0, 2]);
      return {
        transform: [
          // {translateY},
          //  {translateX}, 
          {rotateZ: `${rotate}deg`}
        ]
      };
    }); 
    const animated3 = useSharedValue(0);
       const rStyle3 = useAnimatedStyle(() => {
      // const translateY = interpolate(animated.value, [0,1], [0,20]);
      // const translateX = interpolate(animated.value, [0,0.5, 1], [-5,0, 5]);
      const rotate = interpolate(animated.value, [0,0.5, 1], [-2,0, 2]);
      return {
        transform: [
          // {translateY},
          //  {translateX}, 
          {rotateZ: `${rotate}deg`}
        ]
      };
    }); 
    const animated4 = useSharedValue(0);
       const rStyle4 = useAnimatedStyle(() => {
      // const translateY = interpolate(animated.value, [0,1], [0,20]);
      // const translateX = interpolate(animated.value, [0,0.5, 1], [-5,0, 5]);
      const rotate = interpolate(animated.value, [0,0.5, 1], [-2,0, 2]);
      return {
        transform: [
          // {translateY},
          //  {translateX}, 
          {rotateZ: `${rotate}deg`}
        ]
      };
    }); 

    useEffect(()=> {
      animated.value = withRepeat(withTiming(1, {duration:2000}), -1, true);
    }, [])

 
    // const imgStyle = useAnimatedStyle(() => {
    //   const rotate = interpolate(
    //                       animated5.value,
    //                       [0,1],
    //                       [-10, -20],
    //                     );
    //                 return {
    //                   transform: [{rotate: `${rotate}deg`}],
    //                 };
    // });

    // const defaultSpringStyles = useAnimatedStyle(() => {
    //   return {
    //     transform: [{ scale: withSpring(spin.value )
    //     }]
    //   }
    // })
    // const spinValue = new Animated.Value(0);
    // useEffect(() => {
    //   // Animated.loop(
    //   //   Animated.sequence([
    //   //     Animated.timing(spinValue, {
    //   //       toValue: 1,
    //   //       duration: 30,
    //   //       useNativeDriver: true,
    //   //     }),
    //   //     Animated.timing(spinValue, {
    //   //       toValue: 2,
    //   //       duration: 40,
    //   //       useNativeDriver: true,
    //   //     }),
    //   //   ]),
    //   // ).start();
    // }, [spinValue]);
    
    // const spin = spinValue.interpolate({
    //   inputRange: [0, 1, 2],
    //   outputRange: ['0deg', '2deg', '-2deg'],
    // });
//   const style = useAnimatedStyle(() => {
//     return {
//       width: withTiming(randomWidth.value, config),
//     };
//   });

  //  onPress={() => {
    // randomWidth.value = Math.random() * 350;

  // const scale = useSharedValue(1); 
  //  //this value is shared between worker threads
  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     scale: scale.value, //change the height property of the component
  //   };
  //   });
  
  const tapHandler = Gesture.Tap();
  const scaleDownAnim = useSharedValue(1);

  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      'worklet';
      scaleDownAnim.value = withSpring(1.5);
    })
    .onFinalize(() => {
      'worklet';
      scaleDownAnim.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleDownAnim.value}],
  }));

  //  const [glow, setGlow] = useState(false);
  //   const glowAnimation = new Keyframe({
  //   0: {
  //     textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073',
  //     // transform: [{ rotate: '45deg' }],
  //   },
  //   // 30: {
  //   //   originX: 10,
  //   //   transform: [{ rotate: '-90deg' }],
  //   // },
  //   50: {
  //     textShadow: '0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6',
  //   },
  //    100: {
  //     textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073',
  //     // transform: [{ rotate: '45deg' }],
  //   },
  // }).duration(2000);
  const AnimatedText = Animated.createAnimatedComponent(Text);
//   @-webkit-keyframes glow {
//   from {
//     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
//   }
//   to {
//     text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
//   }
// }
 const glo = useSharedValue(0);
 const glo2 = useSharedValue(0);

 const gloStyle = useAnimatedStyle(() => {
   return {
    //  shadowOpacity: interpolate(glo.value, [0,1], [0.3,1]),
     opacity: interpolate(glo.value, [0,1], [0,1]),
      // textShadowColor: interpolate(glo.value, [0,1], ['rgb(0,255,255, 0.1)','rgb(0,255,255, 1.0)']),
      textShadowRadius: interpolate(glo.value, [0,1], [0,6]), 
      // shadowOpacity: glo.value
    //  transform: [
      //  {
        //  scale: interpolate(ringg.value, [0, 1], [0, 4]),
      //  },
    //  ],
   };
 });

 const glo2Style = useAnimatedStyle(() => {
   return {
    //  shadowOpacity: interpolate(glo.value, [0,1], [0.3,1]),
     opacity: interpolate(glo2.value, [0,1], [0,1]),
      // textShadowColor: interpolate(glo.value, [0,1], ['rgb(0,255,255, 0.1)','rgb(0,255,255, 1.0)']),
      textShadowRadius: interpolate(glo2.value, [0,1], [0,10]), 
      // shadowOpacity: glo.value
    //  transform: [
      //  {
        //  scale: interpolate(ringg.value, [0, 1], [0, 4]),
      //  },
    //  ],
   };
 });
 useEffect(() => {
   glo.value = withDelay(
     600,
    //  withRepeat(
      withSequence(

        withTiming(1.0, {
          duration: 500,
        }),
        withTiming(0, {
          duration: 100,
        }),
        withTiming(1.0, {
          duration: 100,
        }),
        // )
      //  -1,
      //  false
     )
   );
  
 }, []);
 useEffect(() => {
   glo2.value = withDelay(
     2500,
     //  withRepeat(
     withSequence(
       withTiming(1.0, {
         duration: 100,
       }),
       withTiming(0, {
         duration: 100,
       }),
       withTiming(1.0, {
         duration: 100,
       })
       // )
       //  -1,
       //  false
     )
   );
  
 }, []);
 const ringg = useSharedValue(0);

 const ringgStyle = useAnimatedStyle(() => {
   return {
     opacity: 0 + ringg.value,
    //  transform: [
      //  {
        //  scale: interpolate(ringg.value, [0, 1], [0, 4]),
      //  },
    //  ],
   };
 });
//  useEffect(() => {
//    ringg.value = withDelay(
//      500,
//      withRepeat(
//        withTiming(1, {
//          duration: 4000,
//        }),
//        -1,
//        false
//      )
//    );

//  }, []);
 const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);
   const boop = useSharedValue(1);
   const boop2 = useSharedValue(1);
   const boop3 = useSharedValue(1);
   const boop4 = useSharedValue(1);
   const boop5 = useSharedValue(1);
   const boops = {
    1: boop,
    2: boop2, 
    3: boop3, 
    4: boop4,
    5: boop5
   }
  //  const animateds = {
  //   1: animated,
  //   2: animated2,
  //   3: animated3,
  //   4: animated4,
  //   5: animated5
  //  }
  //  console.log('boop1]', boops[1])

  const boopStyle = useAnimatedStyle(
    () => {
      const scale = interpolate(boop.value,[1,5],
                                            [1, 1.17])
      //  const rotate = interpolate(
      //                     boop.value,
      //                     [1, 2.5, 5],
      //                     [0, -5, 5],
      //                   );
      // const translateX = interpolate(boop.value, [1, 5], [-5,5])
      return {
      transform: [
          { scale: scale },
          // {rotate: `${rotate}deg`},
          // {translateX}
      ],
      }
  },
    []
  );


  const boopStyle2 = useAnimatedStyle(
    () => {
      const scale = interpolate(boop2.value,[1,5],
            [1, 1.17])
              return {
      transform: [
          { scale: scale },
          // {rotate: `${rotate}deg`},
          // {translateX}
      ],
      }
  },
    []
  );
  const boopStyle3 = useAnimatedStyle(
    () => {
      const scale = interpolate(boop3.value,[1,5],
            [1, 1.17])
              return {
      transform: [
          { scale: scale },
          // {rotate: `${rotate}deg`},
          // {translateX}
      ],
      }
  },
    []
  );
  const boopStyle4 = useAnimatedStyle(
    () => {
      const scale = interpolate(boop4.value,[1,5],
            [1, 1.17])
              return {
      transform: [
          { scale: scale },
          // {rotate: `${rotate}deg`},
          // {translateX}
      ],
      }
  },
    []
  );

  const rStyle5 = useAnimatedStyle(
    () => {
      const rotate = interpolate(animated5.value, [0,0.5, 1], [-2,0, 2]);
      return {
        transform: [{rotateZ: `${rotate}deg`}]
      }
    }
  )

  const boopStyle5 = useAnimatedStyle(
    () => {
      const scale = interpolate(boop5.value,[1,5],
            [1, 1.17])
              return {
      transform: [
          { scale: scale },
          // {rotate: `${rotate}deg`},
          // {translateX}
      ],
      }
  },
    []
  );

  // when the user press only once, this will be triggered.
  const pressableOnTap = (index) => {
    boops[index].value = withSequence(
      withTiming(5, {duration: 400}),
      withTiming(1, {duration: 300})
      
    )
  }
  const pressableOnPress =(index) => {

    // console.log('animateds', animateds[1], animated[2], animated[3], animated[4])
    console.log('boops before', boops[1].value, boops[2].value, boops[3].value, boops[4].value)
    // console.log('animateds', animateds[1].value, animated[2].value, animated[3].value, animated[4].value)
    console.log(boops[index].value);

    // cancelAnimation(animateds[index]);
    // console.log('animateds', animateds[1], animated[2], animated[3], animated[4])

    boops[index].value = withSequence(
      withTiming(5, {duration: 400}),
      // withTiming(1, {duration: 200}),
    );
    // console.log('animateds after', animateds[1].value, animated[2].value, animated[3].value, animated[4].value)
    console.log('boops after', boops[1].value, boops[2].value, boops[3].value, boops[4].value)

  };

  // when the user doesn't release the press after delayLongPress time (300 in my case. 500 default),
  // this will be triggered
  const pressableOnLongPress = (index) => {

    // heart scale will go from original value (1) to (1.3) and will reverse back (true).
    // and since the withRepeat's number of times is -1, this will repeat indefinitely.
    boops[index].value =
    //  withRepeat(
      withTiming(5, {duration: 500}), -1, true
      // );

    // call API here if needed.
  };

  // after either long press or single press, this will be triggered 
  const pressableOnPressOut =  (index) => {
    // since the press out could be called in the middle of the animation repeat (eg: could be 1.2 or 1.1 or 1),
    // the animation will be cancelled first.
    cancelAnimation(boops[index]);

    // no matter where the value is, will return to original value of 1
    boops[index].value = withTiming(1, {duration: 300});
    // setTimeout(
      // () => {
        // cancelAnimation(boops[index])
        // animateds[index].value = 0
        // animateds[index].value = withRepeat(withTiming(1, {duration:2000}), -1, true);
      // }
      // , 400
    // )
    // the state change will happen here.
    // setIsFavourite((val) => !val);

    // if (!isFavorite) {
    //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // }

    // call API here if needed.
  };

return (
  <BlurView
   blurType="light"
    // blurAmount={10}
    intensity={20}
    reducedTransparencyFallbackColor="blue"
    // intensity={intensity}
    // tint={tint}
    style={[ {
      webkitBackdropFilter:'saturate(180%) blur(3px)',
},style]}
    onLayout={(event) => {
      const {y} = event.nativeEvent.layout;
      updatePosition(y, 'intro');
    }}>
    <View
      style={[tw`flex justify-center md:w-[60%] items-between z-10`]}
      //  onLayout
    >
      <Text
        style={[
          tw`block ml-4 mt-6 md:mt-0 lg:mt-0 text-2xl font-semibold text-gray-300 hover:underline dark:text-gray-300 md:text-3xl`,
          // tw.style(`mobile:text-xl sm:text-blue-600 md:text-4xl web:text-6xl text-red-600`)
        ]}>
        Hi ! I am a
      </Text>
      {/* <Button onPress={() => setGlow(!glow)} title="glow" /> */}
      {/* <Animated.View
        style={[
          {
            position: 'absolute',
            width: 80,
            height: 80,
            borderRadius: 40,
            borderColor: 'tomato',
            borderWidth: 10,
          },
          ringgStyle,
        ]}
      /> */}
      {/* {glow && ( */}
      {/* <> */}
      <View style={tw`relative h-18 md:h-20 lg:h-22 md:my-2 lg:my-4 `}>
        <AnimatedText
          // entering={FadeIn}
          style={[
            tw`absolute z-100 ml-4 h-fit text-3xl md:text-4xl lg:text-5xl font-base text-gray-400 w-80 lg:w-[100%]`,
            gloStyle,
            {
              color: 'white',
              // shadowOpacity: 1,
              willChange: 'textShadowRadius',
              textShadowColor: 'white',
              // textShadowOffset: {width: 0, height: 0},
              // textShadowRadius: 8,
            },
          ]}>
          Full Stack Developer
        </AnimatedText>
        <AnimatedText
          // entering={FadeIn}
          style={[
            tw`absolute z-100 ml-4 h-fit md:my-0 md:mt-2 lg:mt-[18px] text-3xl md:text-4xl top-10 lg:text-5xl font-base text-gray-400 w-[80%] xl:w-auto`,
            glo2Style,
            {
              color: 'violet',
              // shadowOpacity: 1,

              textShadowColor: 'violet',
              // textShadowOffset: {width: 0, height: 0},
              // textShadowRadius: 16,
            },
          ]}>
          UI/UX Designer
        </AnimatedText>
      </View>
      {/* </> */}
      {/* )} */}
      {/* {glow && ( */}
      <AnimatedText
        entering={FadeIn.duration(1000)}
        style={[
          tw`mt-1 ml-4 text-xl md:text-2xl lg:text-3xl md:mt-3 lg:mt-5 text-gray-500 font-semibold dark:text-gray-300`,
          // tw`header`
        ]}>
        Let's Build
      </AnimatedText>
      {/* )} */}
      <View style={[tw`mx-4 flex-row`]}>
        <Animated.View style={animatedStyle}>
          <GestureDetector gesture={scaleHandler}>
            <Pressable
              style={[
                tw`bg-bahamablue-400 hover:bg-bahamablue-600 mr-5 mt-5 border border-bahamablue-400 hover:border-transparent rounded`,
              ]}
              onPress={() => {
                setTimeout(() => {
                  toggleResume();
                }, 1000);
              }}>
              <Text
                style={tw`text-white text-xl font-semibold hover:text-black hover:bg-gray-400 py-2 px-4`}>
                Resume
              </Text>
            </Pressable>
          </GestureDetector>
        </Animated.View>
        <Ani.View style={[{transform: [{scale: selectedAnim}]}]}>
          <Pressable
            style={[
              tw`bg-gold-100 hover:bg-blue-500 mt-5  border-whitelogo-500 hover:border-transparent rounded`,
            ]}
            onPress={() => {
              Ani.sequence([
                Ani.timing(selectedAnim, {
                  toValue: 1.5,
                  duration: 300,
                  useNativeDriver: true,
                }),
                Ani.timing(selectedAnim, {
                  toValue: 1,
                  duration: 300,
                  useNativeDriver: true,
                }),
              ]).start();
              setTimeout(() => {
                Linking.openURL(
                  `mailto:${address}?subject=We%20want%20you%20to%20build%20us%20an%20app&body=My%20app%20needs%20to%20%20have%20the%20following%20functionalities...`
                );
              }, 1000);
            }}>
            <Text
              style={tw`text-white text-lg md:text-xl font-semibold hover:text-white py-2 px-4`}>
              Email
            </Text>
          </Pressable>
        </Ani.View>
        {/* <Ani.View style={[{transform: [{scale: selectedAnim}]}]}>
          <Pressable
            style={[
              tw`bg-gold-100 hover:bg-blue-500 mt-5  border-white-500 hover:border-transparent rounded`,
            ]}
            onPress={() => {
              Ani.sequence([
                Ani.timing(selectedAnim, {
                  toValue: 1.5,
                  duration: 300,
                  useNativeDriver: true,
                }),
                Ani.timing(selectedAnim, {
                  toValue: 1,
                  duration: 300,
                  useNativeDriver: true,
                }),
              ]).start();
              setTimeout(() => {
                Linking.openURL(
                  `tel:${contactNumber}?
                );
              }, 1000);
            }}>
            <Text
              style={tw`text-white font-semibold hover:text-white py-2 px-4`}>
              Call
            </Text>
          </Pressable>
        </Ani.View> */}
      </View>
    </View>
    <View
      style={tw`flex mt-14 md:mt-0 justify-items-end md:justify-center md:justify-items-center items-center h-[60%] md:h-full md:w-[40%] z-14`}>
      <Pressable
        style={[
          tw`relative mb-2 md:mb-5 sectionButton bg-purple-300 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg`,
          {
            // display: 'none',
          },
        ]}
        onPress={() => {
           sliderProps.purpose = 'Full-time';
           sliderProps.project = '';
          toggleForm();
        }}
        // title="Increase"
      >
        <Text style={tw`text-white text-base md:text-lg`}>for Position</Text>
      </Pressable>
      <Pressable
        style={[
          tw`relative mb-0 sectionButton bg-purple-300 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg`,
          {
            // display: 'none',
          },
        ]}
        onPress={() => {
           sliderProps.purpose = 'Project';
           sliderProps.project = 'Mobile app';
          
          // setShowOptions(!showOptions);
          toggleForm()
        }}
        // title="Increase"
      >
        <Text
          entering={FadeInUp}
          exiting={FadeOutRight}
          style={tw`text-white text-base md:text-lg`}>
          for Project
        </Text>
      </Pressable>
      <Animated.Image
        // entering={FadeInDown.delay(1500).duration(2000)}
        resizeMode={'contain'}
        resizeMethod={'scale'}
        source={coding}
        style={[
          tw.style(
            'block w-45 h-[269px] -bottom-[58px] scale-85 md:scale-100 md:-bottom-[73px]',
            tw.prefixMatch(`landscape`) && window.height < 500 && `scale-80 md:-bottom-[3px]`
          ),
          // rStyle, imgStyle
        ]}
      />
        <ReanimatedPressable 
          onPressIn={() => pressableOnPress(5)}
          onHoverIn={() => pressableOnPress(5)}
          onHoverOut={() => pressableOnPressOut(5)}
          onLongPress={() => pressableOnLongPress(5)}
          onPressOut={() => pressableOnPressOut(5)}
          delayLongPress={300}
          hitSlop={20}
        // disabled={true}
        onPress={() => {
          // pressableOnPress(3)
          sliderProps.purpose = 'Project';
          sliderProps.project = 'web app';
          pressableOnTap(5)
          setTimeout(() => {
            toggleForm(true);
          }, 700);
        }}
        style={[  
          boopStyle5,
        tw.style(`flex-col absolute -left-10 bottom-[45%] md:-left-20`, tw.prefixMatch(`landscape`) && window.height < 500 && `md:-left-[18%]`),
       
        ]}>

      <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={webApp}
        style={[
             rStyle,
          tw.style(
            '  h-35 w-35 scale-75 dropShadow ',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-30 w-30`
          ),

        
          // imgStyle,
        ]}
      />
       {true && (
          <AnimatedText
            key={'dfak'}
            // entering={FadeInDown}
            // index={indexList['Mobile app']}
            // layout={Layout.easing(Easing.bounce).delay(index * 100)}
            // exiting={FadeOutRight}
            style={tw`z-30 text-lg text-center text-white font-semibold`}>
            Web app
          </AnimatedText>
        )}

        </ReanimatedPressable>
               <ReanimatedPressable 
          onPressIn={() => pressableOnPress(2)}
          onHoverIn={() => pressableOnPress(2)}
          onHoverOut={() => pressableOnPressOut(2)}
          onLongPress={() => pressableOnLongPress(2)}
          onPressOut={() => pressableOnPressOut(2)}
          delayLongPress={300}
          hitSlop={20}
        // disabled={true}
        onPress={() => {
          // pressableOnPress(2)
          sliderProps.purpose = 'Project';
          sliderProps.project = 'web3';
          pressableOnTap(2)
          setTimeout(() => {
          setShowForm(true);
            // toggleForm(true);
          }, 700);
        }}
        style={[
          boopStyle2,
        tw.style(`flex-col absolute -left-10 md:-left-20 bottom-[5%]`, tw.prefixMatch(`landscape`) && window.height < 500 && `md:-bottom-[8%] md:-left-[23%]`, ),
       
           ]}>
        <Animated.Image
          
          // entering={FadeInDown.delay(500).duration(2000)}
          source={nft}
          resizeMethod={'scale'}
          style={[
            // ringStyle,
            {transform: [{scaleX: -1}]},
            rStyle,
          
             tw.style(
            'h-30 w-30 scale-75 z-20 dropShadow',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `h-30 w-30 `
          ),
          ]}
        />
        {true && (
          <AnimatedText
            key={'dfak'}
            entering={FadeInDown}
            // index={indexList['Mobile app']}
            // layout={Layout.easing(Easing.bounce).delay(index * 100)}
            exiting={FadeOutRight}
            style={tw`z-30 text-lg text-center text-white font-semibold`}>
            Web3 
            {/* <Text>{'(Smart Contracts \n + \n blockchain)'}</Text> */}
          </AnimatedText>
        )}
      </ReanimatedPressable>

       <ReanimatedPressable 
          onPressIn={() => pressableOnPress(4)}
          onHoverIn={() => pressableOnPress(4)}
          onHoverOut={() => pressableOnPressOut(4)}
          onLongPress={() => pressableOnLongPress(4)}
          onPressOut={() => pressableOnPressOut(4)}
          delayLongPress={300}
          hitSlop={20}
        // disabled={true}
        onPress={() => {
          sliderProps.purpose = 'Project';
          sliderProps.project = 'mobile + web app';
          pressableOnTap(4)
          setTimeout(() => {
            toggleForm(true);
          }, 700);
        }}
        style={[
          boopStyle4,
             tw`flex-col absolute bottom-[45%]  -right-5  md:-right-10`]}>
        <Animated.Image
          entering={FadeInDown.delay(500).duration(2000)}
          source={ecomShirt}
          resizeMethod={'scale'}
          style={[
            // ringStyle,
                rStyle,
            tw.style(
              'z-20 h-40 w-20 dropShadow',
              tw.prefixMatch(`landscape`) &&
                window.height < 500 &&
                `border-3 border-white h-30 w-15`
            ),
          ]}
        />
        {true && (
          <AnimatedText
            key={'dfak'}
            // entering={FadeInDown}
            // index={indexList['Mobile app']}
            // layout={Layout.easing(Easing.bounce).delay(index * 100)}
            // exiting={FadeOutRight}
            style={tw`z-30 text-lg text-white font-semibold`}>
            Mobile app
          </AnimatedText>
        )}
      </ReanimatedPressable>
      {/* <View> */}

  
        {/* </View> */}

 
      <ReanimatedPressable 
          onPressIn={() => pressableOnPress(3)}
          onHoverIn={() => pressableOnPress(3)}
          onHoverOut={() => pressableOnPressOut(3)}
          onLongPress={() => pressableOnLongPress(3)}
          onPressOut={() => pressableOnPressOut(3)}
          delayLongPress={300}
          hitSlop={20}
        // disabled={true}
        onPress={() => {
          // pressableOnPress(3)
          sliderProps.purpose = 'Project';
          sliderProps.project = 'Design';
          pressableOnTap(3)
          setTimeout(() => {
            toggleForm(true);
          }, 700);
        }}
        style={[
          boopStyle3,
          tw.style(`flex-col absolute -right-10 bottom-[5%] md:-right-22`, tw.prefixMatch(`landscape`) && window.height < 500 && `md:-bottom-[8%] md:-right-[21%]`),,
       
        ]}>

      <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={browserShapes}
        style={[
             rStyle,
          tw.style(
            '  h-35 w-35 scale-75 dropShadow ',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-30 w-30`
          ),

        
          // imgStyle,
        ]}
      />
       {true && (
          <AnimatedText
            key={'dfak'}
            entering={FadeInDown}
            // index={indexList['Mobile app']}
            // layout={Layout.easing(Easing.bounce).delay(index * 100)}
            exiting={FadeOutRight}
            style={tw`z-30 text-lg text-center text-white font-semibold`}>
            Design
          </AnimatedText>
        )}

        </ReanimatedPressable>
        
    
      {/* <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={list}
        style={[
          tw.style(
            'absolute -left-15 md:-left-20 lg:-left-5 h-35 w-35 scale-75 dropShadow -bottom-[5%]',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-30 w-30`
          ),
          imgStyle,
          ringStyle,
        ]}
      /> */}

      {/* <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={mobilechart}
        style={[
          tw.style(
            'absolute -right-15 md:-right-15 lg:-right-5 h-35 w-35 scale-75 dropShadow -bottom-[5%]',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-30 w-30`
          ),
          ringStyle,
        ]}
      /> */}

      {/* <Pressable
        style={[
          tw`mt-2 sectionButton bg-blue-500 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg`,
          {
            display: 'none',
          },
        ]}
        onPress={() => (scale.value = withSpring(height.value + 10))}
        // title="Increase"
      >
        <Text style={tw`text-white`}>Increase</Text>
      </Pressable> */}
    </View>
    <Modal
      animationType="fade"
      transparent={true}
      visible={showForm}
      onRequestClose={() => {
        toggleForm();
      }}>
    
      <View
        style={[
          tw`
          h-[100%] m-auto  w-[100%] overflow-x-scroll bg-black flex flex-col justify-between justify-items-center self-center pb-15 `,
          {opacity: '0.87'},
          {overflowX: 'scroll'},
        ]}>
        <Pressable
          onPress={() => toggleForm()}
          style={tw`py-2 px-3 top-5 right-5 mb-4 bg-blue-800 w-30 self-end rounded-lg`}>
          <Text style={tw`text-white font-bold text-lg mx-auto`}>Close</Text>
        </Pressable>
        <Slider purpose={sliderProps.purpose} project={sliderProps.project} />
      </View>
      {/* </BlurView> */}
    </Modal>
  </BlurView>
);}

const indexList = {
  'Mobile app': 1,
  'Web app' : 2, 
  'Webpage' : 3,
  'Logo design' : 4,
  'Marketing' : 5,
  'Web3': 6
}
// mobile and web app 
// mobile app
// web app 
// website 
// logo design
// marketing