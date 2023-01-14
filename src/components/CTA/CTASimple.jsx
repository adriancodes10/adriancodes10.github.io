

import tw from "../../api/tailwind";
import { View, Text } from "react-native";

import { Pressable } from "react-native-web";


export default function CTASimple({title='Ready to get started?', subtitle='Start your project today.',buttonOptionPrimary='Get started', buttonOptionSecondary='Learn more'}) {
  return (
      // {/* <section style={tw`bg-white dark:bg-gray-900`}> */}
  <View style={tw`py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-auto`}>
    <View style={tw`mx-auto max-w-screen-sm text-center flex `}>
      <Text style={tw`mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white`}>
        {title}
      </Text>
      <Text style={tw`mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg`}>
        {subtitle}
      </Text>
      <Pressable
        
        style={tw`mx-auto text-blue-700 bg-gold-100 hover:bg-gold-300 focus:ring-4 
        focus:ring-primary-300 font-medium rounded-lg text-base px-5 w-[8rem] py-2.5 mb-2 focus:outline-none`}>
        <Text>

        {buttonOptionPrimary}
        </Text>
      </Pressable>
    </View>
    
  </View>
// </section>
)
}