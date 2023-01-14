import tw from "../../api/tailwind";
import { View } from "react-native";
import { Pressable, Text, Platform, Linking, Image } from "react-native";
import { telNum } from "../../utilities/constants";
const callMePng = require('../../assets/emoji/call.png')



export default function CTA({title='Ready to get started?', subtitle='Start your project today.',buttonOptionPrimary='Get started', buttonOptionSecondary='Learn more'}) {
  // let phoneNumber= '';
  // if (Platform.OS === 'android') {
  //   phoneNumber = 'tel:${1234567890}';
  // } else {
  //   phoneNumber = 'telprompt:${1234567890}';
  // }

  return (
    <View style={tw` h-auto bg-gray-100  z-10`}>
      <View
        style={tw` md:mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8`}>
        <Text
          style={tw`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>
          {title}
        </Text>
        <Text
          style={tw`text-3xl font-bold tracking-tight sm:text-4xl text-blue-400`}>
          {subtitle}
        </Text>
        <View style={tw` mt-8 flex-row lg:mt-0 lg:flex-shrink-0`}>
          <View style={tw`inline-flex rounded-md shadow`}>
            <Pressable
              onPress={() => {
                Linking.openURL(`${telNum}`);
              }}
              style={tw`inline-flex items-center justify-center  rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base text-base text-white hover:bg-indigo-700`}>
              <Text style={tw`text-white font-semibold`}>
                {buttonOptionPrimary}
              </Text>
            </Pressable>
          </View>
          <View style={tw` ml-3 inline-flex rounded-md shadow`}>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'mailto:ceo@appit.app?subject=We%20are%20hiring&body=Hi%20we%20are%20hiring%20for%20the%20position%20of...'
                )
              }
              style={tw`inline-flex items-center justify-center  rounded-md border border-transparent bg-gray-300 px-5 py-3 text-base text-indigo-600 hover:bg-indigo-50`}>
              <Text style={tw`text-white font-bold`}>
                {buttonOptionSecondary}
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={tw`absolute right-0   -bottom-0 md:bottom-[18%]  md:-right-50 lg:-right-[90%] lg: xl:-right-[110%]`}>
          <Image style={tw`relative   h-40 w-40`} source={callMePng} />
        </View>
      </View>
    </View>
  );
}