import { BlurView } from 'expo-blur';
import { useLayoutEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import { Text, View, Pressable, Button, Image } from 'react-native';
import tw from '../../api/tailwind';
const navLogo = require('../../assets/logos/logo-nobg.png');
const navLogoIcon = require('../../assets/logos/logo-icon-lg.png');
const navLogoAlt = require('../../assets/logos/logo-alt.png');
const navLogoAltBright = require('../../assets/logos/logo-bright.png');
const navLogoAltIcon = require('../../assets/logos/logo-icon-alt.png');
const navLogoNew = require('../../assets/logos/adrian.png');
const logoGradient = require('../../assets/logos/adrian-gradient-alt.png')
// import {CreateResponsiveStyle, DEVICE_SIZES, minSize, maxSize } from 'rn-responsive-styles';

// import { Fragment } from 'react'

// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Animated, {
  AnimatedLayout,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  FadeInDown,
  FlipInYLeft,
  SlideInRight,
  SlideInLeft,
  SlideOutRight,
  SlideOutLeft,
  Layout,
  Gesture,
  FadeOutUp,
} from 'react-native-reanimated';
import LogoSquare from '../LogoSquare';
  // const style = useAnimatedStyle(() => {
  //   return {
  //     width: withTiming(randomWidth.value, config),
  //   };
  // });




export const NavigationBar = ({style,toggleSlider, navigationFunction}) => {

  const [active, setActive ] = useState('intro');

  const user = {
    name: 'Adrian',
    email: 'apps@appit.app',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };


  const navigation = [
    {name: 'intro', id: 'intro', href: '#top', current: true},
    {name: 'tech\nstack', id: 'tech', href: '#tech', current: false},
    {name: 'skills\nservices', id: 'skills', href: '#', current: false},
    {name: 'portfolio', id: 'portfolio', href: '#portfolio', current: false},
    {
      name: 'resume',
      id: 'experience',
      href: '#Experience',
      current: false,
    },
    // { name: 'education', href: '#Education', current: false },
    {name: 'Hire me', id: 'contact', href: '#Contact', current: false},
    // { name: 'Footer', id: 'footer', current: false },
  ];

  // const scale = useRef(new Animated.Value(0)).current
  const [mobileNav, setMobileNav] = useState(false);

  return (
     <BlurView
    intensity={5}
    tint={'dark'}
    style={[style, {backdropFilter: 'saturate(1.1) blur(2px)'}]}
    >
      {!mobileNav && (
        <Pressable
          style={tw`flex-row`}
          onPress={() =>Linking.openURL('https://adriancodes10.github.io')}>
          <LogoSquare/>
          <Text
            style={tw`text-2xl ml-2 lg:ml-1 xl:ml-3 justify-self-start mr-4 self-center font-semibold whitespace-nowrap dark:text-white`}>
            drianCodes
          </Text>
        </Pressable>
      )}
      {/* <Text style={[tw`logoTagline text-logo`,  tw.prefixMatch(`portrait`) ? '60px' : '90px']} >Adrian Codes</Text>  */}
      <View
        style={[
          tw.style(
            `btnContainer hidden md:visible md:w-[65%] lg:w-3/4 md:overflow-x-auto justify-end`
          ),
        ]}>
        {navigation.map((button) => (
          <Pressable
            key={button.name}
            href={button.href}
            style={[
              tw`hover:bg-gold-50`,
              tw.style(
                'items-center leading-tight justify-center rounded-md p-2  lg:mx-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-[auto] self-center justify-self-end hover:bg-gold-50',
                button.id == active && 'bg-gold-50 rounded-md text-lg'
              ),
              // button.current? 'bg-gray-900 text-white'
              // : 'text hover:bg-gray-700 hover:text-white',
              // 'px-3 py-2 rounded-md text-sm '
              // ),
              // tw`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 bg-white border-outline`
            ]}
            onPress={() => {
              console.log('onpress in ', button.id, navigationFunction);

              if (button.id == 'contact') {
                console.log('toggle slider call in navButton', toggleSlider);
                toggleSlider();
                console.log('after toggle called');
              } else {
                console.log('section button', button.id);
                setActive(button.id);
                navigationFunction(button.id);
                console.log(button.id);
              }
              // button.name == 'contact' && toggleSlider();
            }}>
            <Text
              style={[
                tw`leading-tight text-center text-base bg-transparent`,
                tw.style('text-white', button.id == active && 'text-blue-400'),
              ]}>
              {button.name}
            </Text>
          </Pressable>
        ))}
      </View>
      <View
        style={tw`flex-row max-w-full items-center md:hidden overflow-hidden`}>
        <Pressable
          style={tw`bg-[#ef4060] w-[50px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl mr-3`}
          onPress={() => {
            setMobileNav(!mobileNav);
          }}>
          <Text style={tw`text-white`}>{mobileNav ? 'Close' : 'Open'}</Text>
        </Pressable>
        <Pressable
          style={tw`flex bg-[#4D4D4D] w-[40px] h-[40px]  rounded-full justify-center items-center hover:bg-[#ef4060]  `}
          onPress={() => {
            console.log('toggle slider in mobileNav', toggleSlider);
            toggleSlider();
            console.log('after toggle slider called', toggleSlider);
          }}>
          <Text style={tw`text-white`}>Start</Text>
        </Pressable>

        {mobileNav && (
          <Animated.View
            style={[
              tw`flex-row  pl-2 gap-4 transparent items-center z-[222] w-[95%] overflow-scroll `, {oveflow: 'scroll'}
            ]}
            entering={FadeInDown.duration(1000)}
            exiting={FadeOutUp.duration(800)}
            layout={Layout.springify()}
            // layout={Layout.easing(Easing.bounce).delay(index * 100)}
          >
            {navigation.map(
              (button) =>
                button.id != 'contact' &&
                button.id != 'intro' && (
                  <Pressable
                    key={button.name}
                    style={tw.style(
                      'flex w-[60px] h-[40px]  rounded-full justify-center bg-gray-700 items-center',
                      button.id == active && 'bg-gold-50'
                    )}
                    // style={[
                    //   tw`hover:bg-gold-50`,
                    //   tw.style(
                    //     'items-center  leading-tight justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-[25%] self-center justify-self-end bg:gray-100 hover:bg-gold-50',
                    //     button.current && 'bg-gold-50 rounded-md text-lg'
                    //   ),
                    // ]}
                    onPress={() => {
                      console.log(
                        'onpress in mobile nav',
                        button.id,
                        navigationFunction
                      );
                      if (button.id == 'contact') {
                        console.log('toggler in desktop nav', button.id);
                        toggleSlider();
                      } else {
                        console.log('section button', button.id);
                        navigationFunction(button.id);
                        console.log(button.id);
                      }
                      setMobileNav(false);
                      // button.name == 'contact' && toggleSlider();
                    }}>
                    <Text
                      style={[
                        tw`leading-tight text-center text-xs transparent`,
                        tw.style(
                          'text-white'
                          // button.current && 'text-gold-50'
                        ),
                      ]}>
                      {button.name}
                    </Text>
                  </Pressable>
                )
            )}
          </Animated.View>
        )}
      </View>

    
    </BlurView>
  );
}


   
     /* <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"></path>
                  </svg> */
   