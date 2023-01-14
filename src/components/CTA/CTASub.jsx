




const pyramid = require('../../assets/shapes/pyramid2.png')
import tw from '../../api/tailwind';
import {View, Text} from 'react-native';

import {Image, Pressable, TextInput} from 'react-native-web';

export default function CTASub({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  return (

<View style={tw`bg-white dark:bg-gray-800 md:flex-row`}>
  <View style={tw`relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 md:w-3/6`}>
    <Text style={tw`text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl`}>
      We&#x27;ve got more coming...
    </Text>
    <Text style={tw`mt-2 max-w-xl text-base text-gray-400`}>
      Want to hear from us when we add new components? Sign up for our
      newsletter and we&#x27;ll email you every time we release a new batch of
      components.
    </Text>
      <View style={tw`mt-6 sm:flex jusitfy-start`}>
        <form style={tw`flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0`}>
          <View style={tw` relative `}>
            <TextInput
              type="text"
              id='"form-subscribe-Subscribe'
              style={tw` rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Email"
            />
          </View>
          <Pressable
            style={tw`mt-4 md:mt-0 md:ml-4 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200`}
            type="submit">
            Subscribe
          </Pressable>
        </form>
      </View>
  </View>
    <View style={tw`hidden md:flex mx-auto my-auto`}>
      <Image
      draggable={true}
          style={tw`object-cover h-20 w-20 md:h-40 md:w-40 mx-auto`}
          source={pyramid}
          alt="shopping item"
        />
    </View>
</View>
  )
}
