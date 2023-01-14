




const spheres = require('../../assets/shapes/sphere-dynamic-color.png')
import tw from '../../api/tailwind';
import {View, Text} from 'react-native';

import {Image, Pressable} from 'react-native-web';

export default function CTAImage({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  return (
    <View
      style={tw`bg-white dark:bg-gray-800 overflow-hidden relative flex-col md:flex-row`}>
      <View
        style={tw`text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 `}>
        <Text
          style={tw`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}>
          Want to be millionaire ?
        </Text>
        <Text
          style={tw`block text-3xl font-extrabold text-black sm:text-4xl text-indigo-500`}>
          It&#x27;s today or never.
        </Text>
        <Text style={tw`text-xl mt-4 text-gray-400`}>
          I had noticed that both in the very poor and very rich extremes of
          society the mad were often allowed to mingle freely
        </Text>
        <View style={tw`lg:mt-0 lg:flex-shrink-0`}>
          <View style={tw`mt-12 inline-flex rounded-md shadow`}>
            <Pressable
              style={tw`py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-[8rem] transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
              Get started
            </Pressable>
          </View>
        </View>
      </View>
      <Image source={spheres} style={tw`h-40 w-40 mx-auto my-auto`} />
    </View>
  );
}
