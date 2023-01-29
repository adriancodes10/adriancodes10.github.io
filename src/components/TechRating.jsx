import tw from '../api/tailwind.js';
import { Platform, StyleSheet, Text, View,Image, Pressable, Button } from 'react-native';

export default function RatingBar({language='no language found', rating='1.0', icon, height='10', width='10'}) {
    const percentage = rating.split('.').join("");;
  return (
 <View
   style={[
     // {border: '2px solid red'},
     tw`h-[15%]`,
   ]}>
   <View style={tw`flex-row justify-between w-[70%] h-10 oveflow-visible items-center`}>
     <Text
       style={tw.style(`relative text-lg md:text-xl md:2xl bottom-7 p-0 h-[45%] font-bold text-gray-500 dark:text-gray-200`, )}>
       {language}
     </Text>
     {/* <View style={tw.style(`h-full overlfow-visible` ) }> */}

     <Image source={icon} style={tw.style(`md:ml-5 w-${width} h-${height} relative`, {
      zIndex: 50,
      // width: `${width}`,
      // height: `${height}`
     })} />
     {/* </View> */}
   </View>
    
   <View style={tw.style(`flex-row justify-between pl-5 h-[45%] mb-3`, {
    zIndex: '100',
   })}>
     <View
       style={tw` h-[100%] w-[70%] bg-gray-200 rounded h-2.5 dark:bg-gray-100 mr-4`}>
       <View
         style={tw.style(`h-[100%] bg-blue-600 h-2.5 rounded dark:bg-gold-100`, {
          width: `${percentage}%`,  
        })}></View>
     </View>
     <Text style={tw`relative top-[-20px] text-lg md:text-2xl md:text-3xl font-bold text-white dark:text-gray-100 z-100`}>
       {rating}
     </Text>
   </View>
 </View>
 )}