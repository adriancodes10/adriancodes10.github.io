



import tw from '../../api/tailwind';
import {View, Text} from 'react-native';

import {Pressable} from 'react-native-web';

export default function CTAInfo({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  console.log('gradient', tw`bg-gradient-to-r from-blue-200 to-blue-400`);
  return (
    <section
      style={tw`max-w-screen-xl px-4 py-12 mx-auto bg-green-500 dark:bg-gray-800 sm:py-16 sm:px-6 lg:px-8 lg:py-20 `}>
      <View style={tw`max-w-4xl mx-auto text-center `}>
        <Text
          style={tw`text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10`}>
          Used by leading architects, home builders renovators.
        </Text>
        <Text style={tw`mt-3 text-base leading-7 text-white sm:mt-4`}>
          Feel confident in choosing the best energy assessor for your energy
          rating.
        </Text>
      </View>
      <View
        style={tw`mt-10 text-center sm:max-w-3xl sm:mx-auto sm:gap-8 flex-col md:flex-row justify-center `}>
        <View style={tw`mt-10 sm:mt-0  md:w-[33%]`}>
          <Text style={tw`text-5xl font-extrabold leading-none text-white `}>
            119
          </Text>
          <Text style={tw`mt-2 text-base font-medium leading-6 text-white `}>
            Energy raters
          </Text>
        </View>
        <View style={tw`mt-10 sm:mt-0  md:ml-10 md:mr-10  md:w-[24%] `}>
          <Text style={tw`text-5xl font-extrabold leading-none text-white`}>
            6
          </Text>
          <Text style={tw`mt-2 text-base font-medium leading-6 text-white `}>
            Quotes on average
          </Text>
        </View>
        <View style={tw`mt-10 sm:mt-0  md:w-[33%] `}>
          <Text style={tw`text-5xl font-extrabold leading-none text-white`}>
            24 hours
          </Text>
          <Text style={tw`mt-2 text-base font-medium leading-6 text-white`}>
            Average turnaround
          </Text>
        </View>
      </View>
      <View style={tw`flex p-4 mx-auto mt-4 w-52`}>
        <Pressable
          type="button"
          style={tw`w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md bg-gradient-to-r from-blue-200 to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 `}>
          Buy the kit
        </Pressable>
      </View>
    </section>
  );
}