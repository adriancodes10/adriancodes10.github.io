

import { BlurView} from 'expo-blur';
import tw from '../api/tailwind.js';
const { plugin } = require('twrnc');

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';
import Animated, { useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft, ZoomInEasyDown} from 'react-native-reanimated';
const xpPng= require("../assets/coding/laptop-profile.png");
const gradHat = require("../assets/icons/graduation-hat-s.png");

const experience = {
  appit: {},
  teqshark: {},
  freelance: {},
  hrBlock: {},
  zoomAuto: {},

}
const education = {
  highschool: {},
  highereducation: {},
}

export const ExperienceSection = ({style, updatePosition, intensity=20, tint='dark', toggleResume}) => {

// export default  function IntroSection() {

// export default  function IntroSection() {
return (
  <BlurView
    intensity={intensity}
    tint={tint}
    style={style}
    onLayout={(event) => {
      const {y} = event.nativeEvent.layout;
      updatePosition(y, 'experience');
    }}>
    <View data-aos="fade" style={tw``}>
      <View style={tw`container sm:px-5 md:px-5 lg:px-14`}>
        <View style={tw` py-4 md:py-8 md:px-4 md:px-0`}>
          <Text
            style={tw`flex md:mx-auto text-3xl md:text-4xl after:left-44 text-gray-100`}>
            Resume
          </Text>
          <View
            style={tw`grid gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 p-4  md:p-4`}>
            <View>
              <View style={tw`flex items-center space-x-2 mb-2 md:mb-4 `}>
                {/* <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    style={tw`text-6xl text-[#F95054]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg`}>
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg> */}
                <Text
                  style={tw`text-xl md:text-3xl lg:text-4xl dark:text-gray-300 font-medium`}>
                  Education
                </Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-gray-100  light:border-[#212425] dark:border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2021
                </Text>
                <Text style={tw`text-xl dark:text-white`}>
                  {'Social Justice '}
                </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>
                  UCLA, Los Angeles, CA
                </Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-gray-100  light:border-[#212425] dark:border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2018
                </Text>
                <Text style={tw`text-xl dark:text-white`}>App Development</Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>
                  Appacademy.io | online
                </Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-gray-100  light:border-[#212425] dark:border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2017
                </Text>
                <Text style={tw`text-xl dark:text-white`}>UX/UI Design</Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>Google Inc.</Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-gray-100  light:border-[#212425] dark:border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2018
                </Text>
                <Text style={tw`text-xl dark:text-white`}>Web Development</Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>Codecademy Online</Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 mb-6 space-y-2 rounded-lg  dark:border-gray-100  light:border-[#212425] dark:border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2015
                </Text>
                <Text style={tw`text-xl dark:text-white`}>
                  Finance / Biochemistry
                </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>UCA - Conway, AR</Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-gray-100  light:border-[#212425] border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2013
                </Text>
                <Text style={tw`text-xl dark:text-white`}>Chemistry </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>
                  HSU - Arkadelphia, AR
                </Text>
              </View>
            </View>
            <View>
              <View style={tw`flex items-center space-x-2 mb-4 `}>
                {/* <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    style={tw`text-6xl text-[#F95054]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg`}>
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
                  </svg> */}
                <Text
                  style={tw`text-xl md:text-3xl lg:text-4xl dark:text-gray-300 font-medium`}>
                  Experience
                </Text>
              </View>
              <View
                style={tw`bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-gray-100  light:border-[#212425] border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2021 - current
                </Text>
                <Text style={tw`text-xl dark:text-white`}>
                  Full Stack Developer
                </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>Freelance</Text>
              </View>
              <View
                style={tw`py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-gray-100  light:border-[#212425] border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2021
                </Text>
                <Text style={tw`text-xl dark:text-white`}>App Developer</Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>Segura & Co.</Text>
              </View>
              <View
                style={tw`py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-gray-100  light:border-[#212425] border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2020
                </Text>
                <Text style={tw`text-xl dark:text-white`}>
                  Office Manager, Tax Professional, Jr. Software Developer{' '}
                </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>H&R Block Inc.</Text>
              </View>
              <View
                style={tw`py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-gray-100  light:border-[#212425] border-2`}>
                <Text style={tw`text-tiny text-gray-lite dark:text-[#b7b7b7]`}>
                  2018
                </Text>
                <Text style={tw`text-xl dark:text-white`}>
                  Jr. Web Developer, Social Media Marketing Manager, Salesman
                </Text>
                <Text style={tw`dark:text-[#b7b7b7]`}>
                  Zoom Auto Sales, Inc.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View
          style={tw`container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20 border-outline`}> */}
      <View
        style={tw`grid grid-cols-1  md:grid-cols-2 gap-8 border-outline hidden`}>
        <View style={tw`col-span-1`}>
          <Text
            style={tw`text-3xl md:text-5xl dark:text-white font-medium mb-8`}>
            Knowledges
          </Text>
          <View style={tw`flex gap-y-5 gap-x-2.5 flex-wrap`}>
            <Text
              style={tw`bg-[#EDF2F2] w-30 cursor-default px-2 py-2 rounded-lg  text-gray-lite dark:bg-[#1C1C1C] dark:text-[#A6A6A6]`}>
              Digital Design
            </Text>
            <Text
              style={tw`bg-[#EDF2F2] cursor-default w-30 px-2 py-2 rounded-lg  text-gray-lite dark:bg-[#1C1C1C] dark:text-[#A6A6A6]`}>
              Marketing
            </Text>
            <Text
              style={tw`bg-[#EDF2F2] cursor-default w-30 px-2 py-2 rounded-lg  text-gray-lite dark:bg-[#1C1C1C] dark:text-[#A6A6A6]`}>
              Social Media
            </Text>
          </View>
        </View>
      </View>
      <Pressable 
        onPress={() => {
          toggleResume();
          }}
        style={tw`rounded-lg py-4 px-2 bg-white w-[8rem] mx-auto`}
        >
          <Text style={tw`text-base text-gray-700 font-semibold mx-auto text-center`}>Full Resume</Text>
        </Pressable>
    </View>
    {/* </View> */}
  </BlurView>
);}