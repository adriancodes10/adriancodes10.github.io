
import {View, Text, Pressable, Image } from 'react-native';
import tw from "../../api/tailwind";
import * as Linking from 'expo-linking';
import LogoSquare from '../LogoSquare';
const footerLogo = require('../../assets/logos/adrian.png')
export const FooterSection= ({style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={() => scrollToTop()}
        style={tw`flex-row md:mx-auto items-center`}>
        <LogoSquare />
        <Text
          style={tw`text-2xl ml-2  self-center font-semibold whitespace-nowrap dark:text-white`}>
          drianCodes
        </Text>
      </Pressable>
      <View style={tw`grid justify-items-center grid-cols-2 gap-4 md:gap-6 md:grid-cols-3`}>
        <View>
          <Text
            style={tw`mb-2 text-base lg:textlg font-semibold text-gray-700 uppercase dark:text-white`}>
            Social
          </Text>
          <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https://www.linkedin/in/adriancodes')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Linkedin
            </Text>
          </Pressable>
            <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https://www.instagram.com/101wallstreet/')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Instagram
            </Text>
          </Pressable>
          
        </View>
        <View>
          <Text
            style={tw`mb-2 text-base lg:textlg font-semibold text-gray-700 uppercase dark:text-white`}>
            Github
          </Text>
          <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https//github.com/adriancodes10')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Profile
            </Text>
          </Pressable>
          <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https://github.com/adriancodes10/adriancodes.github.io/')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Repo
            </Text>
          </Pressable>
        </View>
        <View>
          <Text
            style={tw`mb-2 text-base lg:textlg font-semibold text-gray-700 uppercase dark:text-white`}>
            Design
          </Text>
          <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https://www.Behance.net')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Behance
            </Text>
          </Pressable>
          <Pressable
            style={tw`px-2`}
            onPress={() => Linking.openURL('https://dribbble.com/')}>
            <Text style={tw`text-white text-sm md:base lg:text-lg`}>
              Dribbble
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={tw` pt-4 px-2 flex-col md:flex-row md:items-center justify-between`}>
        <Pressable onPress={() => toggleSlider()} style={tw``}>
          <Text style={tw`dark:text-white`}>
            © {new Date().getFullYear()} Adrian™. All Rights Reserved.
          </Text>
        </Pressable>
        <View
          style={tw`flex-row px-2 pt-4 
          space-between`}>
          <Pressable style={tw`block `}>
            <Image />
          </Pressable>
          <Pressable style={tw`block `}>
            <Image />
          </Pressable>
          <Pressable style={tw`block `}>
            <Image />
          </Pressable>
          <Pressable style={tw`block `}>
            <Image />
          </Pressable>
          <Pressable style={tw`block `}>
            <Image />
          </Pressable>
        </View>
      </View>
    </View>
  );
}