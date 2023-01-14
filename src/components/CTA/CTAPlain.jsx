



import tw from "../../api/tailwind";
import { View, Text } from "react-native";

import { Pressable } from "react-native-web";


export default function CTAPlain({title='Ready to get started?', subtitle='Start your project today.',buttonOptionPrimary='Get started', buttonOptionSecondary='Learn more'}) {
  return (
    <View style={tw`bg-white dark:bg-gray-800`}>
      <View
        style={tw`text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}>
        <Text
          style={tw`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}>
          Want to be millionaire ?
        </Text>
        <Text
          style={tw`text-3xl font-extrabold sm:text-4xl text-indigo-500`}>
            It&#x27;s today or never.
        </Text>
        <View style={tw`lg:mt-0 lg:flex-shrink-0`}>
          <View style={tw`mt-12 inline-flex rounded-md shadow`}>
            <Pressable
              type="button"
              style={tw`mx-auto py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-[8rem] text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
              <Text>

              Get started
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}



