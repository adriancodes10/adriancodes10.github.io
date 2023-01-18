


const image = require('../../assets/shapes/spheres.png')
const image2 = require('../../assets/shapes/spheres2.png')
const image3 = require('../../assets/shapes/pyramid.png')
import tw from '../../api/tailwind';
import {View, Text, Linking} from 'react-native';
import { telNum } from '../../utilities/constants';
import {Image, Pressable} from 'react-native-web';
const wireframe = require('../../assets/screens/wireframe-travel-list.png')
const wireframeAlt = require('../../assets/screens/wireframe-travel-list-alt.png')
const mockup = require('../../assets/screens/mockup-card-search.png')
const mockupAlt = require('../../assets/screens/mockup-music.png')
const mockupAlt2 = require('../../assets/screens/mockup-ecom-product.png')
const screen = require('../../assets/screens/screen-social.png')
const screenAlt = require('../../assets/screens/screen-charts.png')
const screenAlt2 = require('../../assets/screens/screen-profile.png')
const screenEd = require('../../assets/screens/screen-education-home.png')
const screenEd2 = require('../../assets/screens/screen-education-calendar.png')
const screenRestaurant = require('../../assets/screens/screen-restaurant-track.png')
const screenRestaurantItems = require('../../assets/screens/screen-restaurant-items.png')
const screenRestaurantOrder = require('../../assets/screens/screen-restaurant-order.png')
const screenRestaurantItem = require('../../assets/screens/screen-restaurant-item.png')
export default function CTAImages({
  title = 'Ready to get started?',
  subtitle = 'Start your project today.',
  buttonOptionPrimary = 'Get started',
  buttonOptionSecondary = 'Learn more',
}) {
  return (
    <View
      style={tw`bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center flex-col md:flex-row`}>
      <View
        style={tw`w-full md:w-3/6 py-12 px-6 lg:py-16 md:px-[7%] lg:px-[10%] z-20`}>
        <Text
          style={tw`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}>
          Bringing your{' '}
          <Text style={tw`text-4xl text-purple-400 `}> game-changing </Text>
          app idea to
          <Text style={tw`text-green-300`}> life</Text>
        </Text>
        <Text style={tw`text-lg mt-4 text-gray-400`}>{' wireframe -> design mockup -> production app'}</Text>
        <View style={tw`lg:mt-0 lg:flex-shrink-0`}>
          <View style={tw`mt-12 inline-flex rounded-md shadow`}>
            <Pressable
              style={tw`py-2 px-4  bg-blue-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-2/6 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}
              onPress={() => {
                 Linking.openURL(`${telNum}`);
              }}
              >
              <Text style={tw`text-white font-semibold`}>
                {buttonOptionPrimary}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={tw`flex-row justify-center justify-items-center md:items-center p-8  lg:p-24`}>
        <Image
          source={wireframe}
          style={tw`w-1/2 rounded-lg h-50 w-20 mr-[5%] md:mr-20`}
          alt="Tree"
        />
        <View style={tw`flex-row md:flex-col`}>
          <Image
            source={mockup}
            style={tw`mb-8 mr-[10%] rounded-lg h-50 w-20`}
            alt="Tree"
          />
          <Image
            source={screenEd}
            style={tw`-mt-[30px] rounded-lg h-55 w-22`}
            alt="Tree"
          />
        </View>
      </View>
    </View>
  );
}