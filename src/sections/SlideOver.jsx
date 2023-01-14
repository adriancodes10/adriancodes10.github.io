

import { Linking } from 'react-native';
import {  useState } from 'react';
import {Modal, Pressable, View, Text,} from 'react-native';
import tw from '../api/tailwind';
// import rules from './validation-rules'
// import messages from './validation-messages'
import Form from '../components/form';
// import { XMarkIcon } from '@heroicons/react/24/outline'

import sendMessage from '../firebase/burn';
import Animated, { AnimatedLayout,useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring, FadeInDown, FlipInYLeft, SlideInRight, SlideInLeft, SlideOutRight, SlideOutLeft, Layout} from 'react-native-reanimated';
  import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Button from '../components/Button';


export const SlideOver = ({style, toggleSlider, isOpen=false}) => {
    // const [show, setShow] = useState(false);
    const [action, setAction] = useState('email')
  const position = useSharedValue(0);
  console.log('fling', Gesture);
  const flingGesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart((e) => {
      position.value = withTiming(position.value - 10, {duration: 100});
    });
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  return (
    <GestureDetector gesture={flingGesture}>
      <Animated.View
        style={[style, animatedStyle]}
        entering={SlideInRight.duration(1000)}
        exiting={SlideOutRight.duration(800)}
        layout={Layout.springify()}
        // layout={Layout.easing(Easing.bounce).delay(index * 100)}
      >
        <Pressable
          label="close"
          onPress={() => toggleSlider()}
          style={tw`absolute right-2 top-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800`}>
          <Text style={tw`text-base font-base text-white mx-auto`}>Close</Text>
        </Pressable>
        {action == 'email' && (
          <>
            <Text style={tw`d-none text-base text-left text-black text-bold `}>
              Click to email me with and intro and project/position details
            </Text>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'mailto:ceo@appit.app?subject=We%20want%20you%20to%20build%20us%20an%20app&body=My%20app%20needs%20to%20%20have%20the%20following%20functionalities...'
                )
              }
              style={tw` bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
              // title="support@example.com"
            >
              <Text style={tw`text-lg text-white text-bold text-sm`}>
                Email Me
              </Text>
            </Pressable>

            <Text style={tw`d-none text-sm text-left lg:max-w-[430px]`}>
              don't have email set up on your device? Click below to submit a
              direct message. Include your phone number and/or email address.
            </Text>

            <Pressable
              // onPress={() => setTip(true)}
              // onMouseEnter={() => setTip(true)}
              // onMouseOut={() => setTip(false)}
              onPress={() => setAction('message')}
              style={tw` bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>
              <Text style={tw`text-white font-medium text-sm`}>Message</Text>
            </Pressable>
            
          </>
        )} 
        {action == 'message' && (
                <Form  style={[tw`form`]} submitFunc={(data) => {
                  console.log('data in slideover form prop', data)
                  sendMessage(data);
                  
                  }
                  } projectType='mobile app' hiringFor='Full-time'/>
           
        )}
        {console.log('end gesturehandler')}
      </Animated.View>
     
    </GestureDetector>
      
  );
}
  // make silder schene and tone text change var plug into redux store ?//
  // 
  const messages = {
    general: {
    missing: 'Kindly provide the required field',
    invalid: 'Mentioned value is invalid'
    },
    type: {
    email: {
    missing: 'Kindly provide an e-mail',
    invalid: 'The e-mail mentioned by you is invalid'
    },
    password: {
    rule: {
    capitalLetter: 'Kindly include at least one capital letter',
    oneNumber: 'Kindly include at least one number',
    minLength: 'Length of Password must be at least 8 characters'
    }
    }
    },
    name: {
    confirmPassword: {
    rule: {
    matches: 'The mentioned passwords do not match'
    }
    }
    }
    }


    // //
    // //
    // const signIn = () => {                          // <= Added this function
function isEmail(email){
      const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  
      if (!strongRegex.test(email)) {
          // showMessage(MESSAGE.email)
          return false;
      } else if (strongRegex.test(email)) {
         
          return true;
      }
  }
    // import isEmail from 'validator/lib/isEmail'
const  rules = {
  type: {
    email: ({ value }) =>isEmail(value),
    password: {
      capitalLetter: ({ value }) => /[A-Z]/.test(value),
      oneNumber: ({ value }) => /[0-9]/.test(value),
      minLength: ({ value }) =>value.length> 7
      }
    }, 
  name: { 
    confirmPassword: {
      matches: ({ value, get }) => {
        return value === get(['userPassword', 'value'])
      }
    }
  }
}