
import tw from '../api/tailwind.js';
import  { Text, FlatList } from "react-native-web";



const process = ()=> {
  
  
  return (
  <FlatList style={tw`items-center sm:flex`} >
    <View style={tw`relative mb-6 sm:mb-0`}>
        <View style={tw`flex items-center`}>
            <View style={tw`flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
               <Image source={step1} style={tw`h-30 w-30`}/>
            </View>
            <View style={tw`hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700`}></View>
        </View>
        <View style={tw`mt-3 sm:pr-8`}>
            <Text style={tw`text-lg font-semibold text-gray-900 dark:text-white`}>Flowbite Library v1.0.0</Text>
            <Text style={tw`block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500`}>Released on December 2, 2021</Text>
            <Text style={tw`text-base font-normal text-gray-500 dark:text-gray-400`}>Get started with dozens of web components and interactive elements.</Text>
        </View>
    </View>
   
  </FlatList>
  )
}
