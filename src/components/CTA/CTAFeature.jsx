



const mockup = require('../../assets/shapes/cube-dynamic-color.png')
import tw from '../../api/tailwind';
import {View, Text} from 'react-native';
import { Image } from 'react-native-web';
import {Pressable} from 'react-native-web';

export default function CTAFeature({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  return (
    <View
      style={tw`relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800`}>
      <View style={tw`container relative md:flex-row px-6 py-16 mx-auto`}>
        <View style={tw`relative z-20 flex flex-col w-6/6 md:w-3/6`}>
          <span style={tw`w-20 h-2 mb-12 bg-gray-800 dark:bg-white`}></span>
          <Text
            style={tw`flex flex-col text-6xl font-black  text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white`}>
            Be on
            <Text style={tw`text-5xl sm:text-7xl`}>Time</Text>
          </Text>
          <Text style={tw`text-sm text-gray-700 sm:text-base dark:text-white`}>
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </Text>
          <View style={tw`flex-row mt-8`}>
            <Pressable
              href="#"
              style={tw`px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400`}>
              Get started
            </Pressable>
            <Pressable
              href="#"
              style={tw`px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md`}>
              Read more
            </Pressable>
          </View>
        </View>
        <View style={tw`relative mx-auto sm:block sm:w-1/3 lg:w-3/5`}>
          <Image
            source={mockup}
            style={tw`max-w-xs m-auto md:max-w-sm h-50 w-50`}
          />
        </View>
      </View>
    </View>
  );
}
