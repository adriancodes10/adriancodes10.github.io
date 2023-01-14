



import tw from '../../api/tailwind';
import {View, Text} from 'react-native';

import {Pressable} from 'react-native-web';

export default function CTATimer({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  return (
 
      <View style={tw`py-8 w-full bg-indigo-500 bg-gradient dark:bg-gray-800 md:py-16 box-content px-5 mx-auto`}>
        <View style={tw`flex flex-col items-center mx-5 md:flex-row md:justify-center`}>
          <View style={tw`w-full md:w-2/6 lg:w-3/6 px-5 mb-5 text-center md:mb-0 md:text-left `}>
            <Text style={tw`text-xs font-semibold text-indigo-800 uppercase md:text-base dark:text-gray-100`}>
              Opening tickets
            </Text>
            <Text style={tw`text-2xl font-bold text-white font-heading md:text-4xl`}>
              Saturday 17
            </Text>
            <Text style={tw`text-lg font-bold leading-tight text-white font-heading md:text-xl`}>
              @ 10:00 AM
            </Text>
            <View style={tw`w-full mt-4 md:w-44`}>
              <Pressable
                type="button"
                style={tw`py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
                Early bird
              </Pressable>
            </View>
          </View>
          <View style={tw`w-full md:w-3/6 px-5 md:w-auto `}>
            <View style={tw`flex-row justify-center text-center text-white`}>
              <View style={tw`w-20 py-3 mx-2 border rounded-lg md:w-24 border-gray-300 bg-light-100 md:py-4`}>
                <View style={tw`text-2xl font-semibold md:text-3xl`}>
                  <span>01</span>
                  {/* <span>1</span> */}
                </View>
                <View style={tw`mt-3 text-xs uppercase opacity-75`}>Day</View>
              </View>
              <View style={tw`w-20 py-3 mx-2 border rounded-lg md:w-24 border-gray-300 bg-light-100 md:py-4`}>
                <View style={tw`text-2xl font-semibold md:text-3xl`}>
                  <span>18</span>
                  {/* <span>8</span> */}
                </View>
                <View style={tw`mt-3 text-xs uppercase opacity-75 `}>Hour</View>
              </View>
              <View style={tw`w-20 py-3 mx-2 border rounded-lg md:w-24 border-gray-300 bg-light-100 md:py-4`}>
                <View style={tw`text-2xl font-semibold md:text-3xl`}>
                  <span>50</span>
                  {/* <span>0</span> */}
                </View>
                <View style={tw`mt-3 text-xs uppercase opacity-75 `}>Min</View>
              </View>
              <View style={tw`w-20 py-3 mx-2 border rounded-lg md:w-24 border-gray-300 bg-light-100 md:py-4`}>
                <View style={tw`text-2xl font-semibold md:text-3xl`}>
                  <span>19</span>
                  {/* <span>9</span> */}
                </View>
                <View style={tw`mt-3 text-xs uppercase opacity-75 `}>Second</View>
              </View>
            </View>
          </View>
        </View>
       </View>
  );
}