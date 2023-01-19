



import React from 'react';
import {View, SafeAreaView, Text, Dimensions, StyleSheet, TextInput, Pressable} from 'react-native';
import { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  interpolateColor,
  Extrapolate, FadeInDown, FadeInUp, FadeOutDown, FadeOutUp
} from 'react-native-reanimated';

const purposePng = require('../assets/emoji/billy-work.png');
const purposePng2 = require('../assets/emoji/billy-open-arms.png');
const purposePng3 = require('../assets/emoji/billy-briefcase.png');
const checkbox= require('../assets/checkbox.png')
const businessWoman404 = require('../assets/emoji/businesswoman-404.png')
const businessWomanDesk = require('../assets/emoji/businesswoman-desk.png')
const businessWomanHeart = require('../assets/emoji/businesswoman-heart.png')
const businessWomanCharts = require('../assets/emoji/businesswoman-charts.png')
const businessWomanPhone = require('../assets/emoji/businesswoman-smartphone.png')
const businessWomanTablet = require('../assets/emoji/businesswoman-tablet.png')
const businessWomanSettings = require('../assets/emoji/businesswoman-settings.png')

const vR = require('../assets/coding/saly-vr.png');
const rocket = require('../assets/coding/saly-rocket.png');


import {
  FormProvider,
  useForm,
  useFormContext,
  Controller,
} from 'react-hook-form';

import tw from '../api/tailwind';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

import useDimensions from '../hooks/useDimensions';
import stateOptions from '../utilities/constants';
import Send from '../firebase/burn';
import postToSlack from '../hooks/slackwebhook'
const textColor = '#2A3B38';
const gray = '#A0A0A0';


const slides = [
  {
    text: 'purpose',
    // icon: 'code-slash',

  },
  {
    text: 'info',
    // icon: 'code-slash',
  },
  {
    text: 'details',
    // icon: 'code-slash',
  },
];


const Purpose = ({purpose, }) => {
  const {register, control, watch, setValue, formState: {errors, isValid}} = useFormContext();
    const registerOptionsPurpose = {
      positionDetails: {
        required: false,
      },
      hiringGoal: {
        required: true,
        // validate: { }
        // maxLength: {
        // message: 'company name should be less than 100 letters long',
        // },
      },
    };
    const hiring = watch('hiringGoal');
      console.log(
        'registerOptions PURPOSE',
        registerOptionsPurpose,
        // registerOptionsPurpose.email,
        // registerOptionsPurpose.firstName,
        registerOptionsPurpose.positionDetails
      );
  return (
    <View style={[tw`flex-col-reverse md:flex-row w-[80vw] md:w-[500px]`]}>
      {/* <Animated.Image
          entering={FadeInDown.delay(1500).duration(2000)}
          source={mobilechart}
          style={[
            tw.style(
              'absolute -right-15 md:-right-15 lg:-right-5 h-35 w-35 scale-75 dropShadow -bottom-[5%]',
              tw.prefixMatch(`landscape`) &&
                window.height < 500 &&
                `border-3 border-white h-30 w-30`
            ),
            // ringStyle,
          ]}
        /> */}
      {/* {({register}) => <input {...register('deepNestedInput')} />} */}
      <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={purposePng}
        style={[
          tw.style(
            'h-60 w-60 dropShadow ',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-40 w-40`
          ),
          // ringStyle,
        ]}
      />
      <View style={[tw`md:w-[50%]`]}>
        <Text
          style={[
            tw`text-white text-sm leading-tight mb-2 font-semibold font-[Nunito]`,
          ]}>
          What are you hiring for?
        </Text>
        <Controller
          name="hiringGoal"
          control={control}
          render={({field}) => {
            console.log('field', field);
            const [open, setOpen] = useState(false);
            const [pickerValue, setPickerValue] = useState(null);
            const [items, setItems] = useState([
              {label: 'Full-time', value: 'Full-time'},
              {label: 'Part-time', value: 'Part-time'},
              {label: 'Project', value: 'Project'},
            ]);
            return (
              <DropDownPicker
                open={open}
                value={pickerValue}
                items={items}
                setOpen={setOpen}
                setValue={setPickerValue}
                setItems={setItems}
                theme="DARK"
                onSelectItem={(item) => {
                  console.log(item);
                  setValue('hiringGoal', item.value);
                }}
                labelStyle={{
                  fontWeight: 'bold',
                }}
                textStyle={tw`text-white font-semibold text-sm`}
                containerStyle={{}}
                // style={styles.input}
                zIndex={3000}
                zIndexInverse={1000}
                // dropDownContainerStyle={{
                //   backgroundColor: '#dfdfdf',
                // }}
              />
            );
          }}
        />
        {hiring != 'Project' && (
          <>
            <Text
              style={[
                tw`text-sm text-white font-semibold leading-tight mt-3 mb-2`,
                styles.label,
              ]}>
              Position hiring and languages used (if known) Ex: "Full Stack
              Developer, React Native"
            </Text>
            <Controller
              name="positionDetails"
              control={control}
              rules={registerOptionsPurpose.positionDetails}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={[styles.input, tw`text-white font-semibold text-sm`]}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  autocomplete={''}
                  autocorrect={false}
                  placeholder="Front-end Developer, React Native"
                />
              )}
            />
            {errors.positionDetails?.type === 'maxLength' && (
              <Text>Input is too long must be less than 100 characters</Text>
            )}
          </>
        )}

        {hiring && hiring == 'Project' && (
          <>
            <Text
              style={tw`text-sm font-semibold text-white leading-tight mt-3 mb-2`}>
              Your project type?
            </Text>
            <Controller
              name="projectType"
              control={control}
              render={({field}) => {
                console.log('field projectType', field);
                const [open, setOpen] = useState(false);
                const [pickerValue, setPickerValue] = useState(null);
                const [items, setItems] = useState([
                  {
                    label: 'Both mobile and web app',
                    value: 'mobile + web app',
                  },
                  {
                    label: 'Android/iPhone app (both or one)',
                    value: 'mobile app',
                  },
                  {label: 'web app only', value: 'web app'},
                  {label: 'website', value: 'website'},
                  // {label: 'code review', value: 'code review'},
                  // {label: 'codebase work', value: 'codebase work'},
                  {label: 'Logo', value: 'logo'},
                  {
                    label: 'Social media marketing',
                    value: 'social media marketing',
                  },
                  {
                    label: 'web3 (blockchain, smart contracts, dApp',
                    value: 'web3',
                  },
                ]);
                return (
                  <DropDownPicker
                    // style={tw`w-[6rem]`}
                    open={open}
                    value={pickerValue}
                    items={items}
                    setOpen={setOpen}
                    setValue={setPickerValue}
                    setItems={setItems}
                    theme="DARK"
                    onSelectItem={(item) => {
                      console.log(item);
                      setValue('projectType', item.value);
                    }}
                    zIndex={2000}
                    zIndexInverse={2000}
                  />
                );
              }}
            />
            {errors.projectType && <Text>{errors.projectType.message}</Text>}
            <Text style={tw`text-sm text-white leading-tight mt-3 mb-2`}>
              What is the budget?
            </Text>
            <Controller
              name="budget"
              control={control}
              render={({field}) => {
                console.log('field budget', field);
                const [open, setOpen] = useState(false);
                const [pickerValue, setPickerValue] = useState(null);
                const [items, setItems] = useState([
                  {
                    label: '$20,000+',
                    value: '$20,000+',
                  },
                  {
                    label: '$10,001 < $20,000',
                    value: '$10,001 < $20,000',
                  },
                  {
                    label: '$5,001 < $10,000',
                    value: '$5,001 < $10,000',
                  },
                  {
                    label: '$2,000 < $5,000',
                    value: '$2,000 < $5,000',
                  },
                  {
                    label: 'less than $2,000 ',
                    value: '<2000$',
                  },
                  {
                    label: 'Unknown',
                    value: 'unknown',
                  },
                ]);
                return (
                  <DropDownPicker
                    // style={tw`w-[6rem]`}
                    open={open}
                    value={pickerValue}
                    items={items}
                    setOpen={setOpen}
                    setValue={setPickerValue}
                    setItems={setItems}
                    theme="DARK"
                    onSelectItem={(item) => {
                      console.log(item);
                      setValue('budget', item.value);
                    }}
                    zIndex={1000}
                    zIndexInverse={3000}
                  />
                );
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}
const Info = ({purpose}) => {
  const {
    register,
    control,
    watch, setValue,
    formState: {errors, isValid},
  } = useFormContext({mode: 'onBlur'});
      const registerOptionsInfo = {
        firstName: {
          required: {
            value: 'A first name is required',
          },
          minLength: {
            value: 1,
            message: 'First name should be atleast 1 character long',
          },
          maxLength: {
            value: 20,
            message: 'First name should be less than 20 letters long',
          },
        },
        company: {
          required: false,
          maxLength: {
            message: 'company name should be less than 20 letters long',
          },
        },
        lastName: {
          required: false,
          minLength: {value: 1, message: 'min length is 1 letter'},
          maxLength: {
            value: 20,
            message: 'maximum length is 20 letters',
          },
        },
        email: {
          required: 'Email is required',
          pattern: {
            value: new RegExp(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            ),
            message: "It's not a valid email, try again..",
          },
        },
        phoneNumber: {
          required: false,
          pattern: {
            value: new RegExp('^[0-9]'),
            message:
              'Not a valid phone number, try again.. must containe a 3 digit area code, a 7 digit phone number, and an optional extension.',
          },
        },
        city: {
          required: false,
          minLength: {
            value: 2,
            message: 'City must be between 2 and 20 letters long',
          },
          maxLength: {
            value: 20,
            message: 'City must be between 2 and 20 letters long',
          },
        },
        message: {
          required: false,
          minLength: {
            value: 10,
            message: 'Message must be between 10 and 500 letters long',
          },
          maxLength: {
            value: 500,
            message: 'Message must be between 10 and 500 letters long',
          },
        },
      };
  console.log('registerOptions INFO', registerOptionsInfo, registerOptionsInfo.email, registerOptionsInfo.firstName )
  return (
    <View style={[tw`flex-col-reverse md:flex-row w-[80vw] md:w-[500px] `]}>
      <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={businessWomanTablet}
        style={[
          tw.style(
            'h-60 w-60  dropShadow ',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-40 w-40`
          ),
          // ringStyle,
        ]}
      />
      {/* <View style={[tw``]}>  */}
      <View style={[tw`md:w-[50%]`]}>
        <Controller
          control={control}
          rules={registerOptionsInfo.company}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              // autocomplete={''}
              placeholder="company"
            />
          )}
          name="company"
        />
        {errors.email && <Text>{errors.email.message}</Text>}
        <Controller
          control={control}
          rules={registerOptionsInfo.email}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autocomplete={'email'}
              placeholder="email"
            />
          )}
          name="email"
        />
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={
            {
              //  required: {
              //  value: false,
              //  message: 'Phone number must include a 3 digit US area code before the number and can include an extension!',
              //  },
              //  validate:
              //    value => value === getValues('phoneNumber') || 'Phone number is missing'
            }
          }
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autocomplete={'tel'}
              autocorrect={false}
              placeholder="phone number"
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber?.type === 'pattern' && (
          <Text>{errors.phoneNumber.message}</Text>
        )}

        <Controller
          control={control}
          rules={registerOptionsInfo.firstName}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autocomplete={'name'}
              autocorrect={false}
              placeholder="first name"
              //  {/* <TextInput */}
              // style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
              // onBlur={onBlur}
              // onChangeText={value => onChange(value)}
              // value={value}
              // />
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>{errors.firstName.message}</Text>}

        <Controller
          control={control}
          rules={registerOptionsInfo.lastName}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autocomplete={'name-family'}
              autocorrect={false}
              placeholder="last name"
            />
          )}
          name="lastName"
        />
        {errors.lastName && <Text>{errors.lastName.message}</Text>}
        {/* <Text>City:</Text> */}
        <Controller
          control={control}
          rules={registerOptionsInfo.city}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              autocomplete={'locality'}
              autocorrect={false}
            />
          )}
          name="city"
        />
        {errors.city?.type === 'maxLength' && (
          <Text>Last Name is required.</Text>
        )}
        {errors.city?.type === 'minLength' && (
          <Text>Minimum 8 characters are required</Text>
        )}
        <Controller
          name="state"
          control={control}
          render={({field}) => {
            console.log('field state', field);
            const [open, setOpen] = useState(false);
            const [pickerValue, setPickerValue] = useState(null);
            const [items, setItems] = useState(stateOptions);
            return (
              <DropDownPicker
                // style={tw`w-[6rem]`}
                open={open}
                value={pickerValue}
                items={items}
                setOpen={setOpen}
                setValue={setPickerValue}
                setItems={setItems}
                theme="DARK"
                placeholder="State"
                onSelectItem={(item) => {
                  console.log(item);
                  setValue('state', item.value);
                }}
                zIndex={1000}
                zIndexInverse={3000}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const Details = () => {

  const onError = (error) => console.log('errors',error);
  const onSubmit = (data) => {
    console.log('sending data in slider')
    Send(data);
    console.log('data sent');
    console.log('slackHook')
    postToSlack(data);
    console.log('slack sent')
  }
  const {
    register,
    control,
    watch,
    formState: {errors, isValid}, handleSubmit
  } = useFormContext({mode: 'onBlur'});
  const registerOptionsDetail = { 
    message: {
      required: false,
      minLength: {
        value: 10,
        message: 'Message must be between 10 and 500 letters long',
      },
      maxLength: {
        value: 500,
        message: 'Message must be between 10 and 500 letters long',
      },
    },
  }
  console.log(
    'registerOptions DETAILS',
    registerOptionsDetail,
    registerOptionsDetail.message,
    // registerOptionsDetail.firstName,
    // registerOptionsDetail.positionDetails
  );

  return (
    <View style={[tw`flex-col md:flex-row w-[80vw] md:w-[500px]`]}>
      <View>
        <Text style={[styles.label]}>Add details: </Text>
        <Controller
          control={control}
          rules={{
            maxLength: 400,
            minLength: 10,
            message: 'Message must be between 10 and 400 characters',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, tw`text-white font-semibold text-sm`]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autocorrect={true}
            />
          )}
          name="message"
        />
        {errors.message && <Text>{errors.message.message}</Text>}

        <Pressable
          // title="Submit"
          // onPress={handleSubmit(
          // onSubmit, onError)}
          onPress={handleSubmit(onSubmit, onError)}
          style={[
            tw`bg-blue-600 rounded w-[6rem] py-2 mt-[10px] mx-auto `,
            styles.button,
          ]}>
          <Text style={tw`mx-auto text-base text-white`}>Submit</Text>
        </Pressable>
      </View>
      <Animated.Image
        entering={FadeInDown.delay(1500).duration(2000)}
        source={businessWomanCharts}
        style={[
          tw.style(
            'h-65 w-65 dropShadow',
            tw.prefixMatch(`landscape`) &&
              window.height < 500 &&
              `border-3 border-white h-40 w-40`
          ),
          // ringStyle,
        ]}
      />
    </View>
  );
}
const SLIDER_STATE = {
  0: <Purpose />,
  1: <Info />,
  2: <Details />
};

function SliderState({ step }) {
  return <View style='flex'>{SLIDER_STATE[step]};</View>
}
const Slide = ({slide, scrollOffset, index}) => {
  const {window} = useDimensions();
  const width = window.width;
  const slideWidth = width* 0.75;
  const height = window.height;
  console.log('Slide index', index)
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];

    return {
      transform: [
        {
          scale: interpolate(
            input,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  
  

  return (
    <Animated.View
      key={index}
      style={[
        {
          flex: 1,
          width: width * 0.8,
          height: height * 0.8,
          paddingVertical: 10,
          maxWidth: 500
        },
        animatedStyle,
      ]}>
        {index == 0 ? 
        <Purpose />:index==1 ? 
        <Info />:index==2 ? 
        <Details />: null}
 
    </Animated.View>
  );
};

const Indicator = ({scrollOffset, index}) => {
    const {window} = useDimensions();
    const width = window.width;
    const slideWidth = width * 0.75;
    const height = window.height;

  const animatedStyle = useAnimatedStyle(() => {
  const input = scrollOffset.value / slideWidth;
  const inputRange = [index - 1, index, index + 1];

  const animatedColor = interpolateColor(input, inputRange, [
    gray,
    textColor,
    gray,
  ]);

  return {
    width: interpolate(input, inputRange, [20, 40, 20], Extrapolate.CLAMP),
    backgroundColor: animatedColor,
  };
});


  return (
    <Animated.View
      style={[
        {
          marginHorizontal: 5,
          height: 20,
          borderRadius: 10,
          backgroundColor: textColor,
          marginVertical: 5
        },
        animatedStyle,
      ]}
    />
  );
};

const Slider = ({purpose, project}) => {
  const {window, } = useDimensions();
  const width = window.width;
  const slideWidth = width * 0.8;

 const methods = useForm({
   mode: 'onBlur',
   defaultValues: {
     firstName: '',
     lastName: '',
     company: '',
     email: '',
     phoneNumber: '',
     // product: 'mobile app',
     hiringGoal: purpose == 'Project' ? 'Project' : 'Full-time',
     positionDetails: '',
     projectType: project ? project : 'mobile + web app',
     budget: '4,000',
     message: 'Hi!',
     city: 'Los Angeles',
     state: 'CA',
   },
 });



  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });
  




  return (
    <FormProvider {...methods} >
      <Animated.ScrollView
        scrollEventThrottle={1}
        horizontal
        snapToInterval={slideWidth}
        pagingEnabled={true}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: (width - slideWidth) / 2,
          justifyContent: 'center',
        }}
        onScroll={scrollHandler}>
        {slides.map((slide, index) => {
          return (       
            <Slide
              key={index}
              index={index}
              slide={slide}
              scrollOffset={scrollOffset}
            />
   
          );
        })}
      </Animated.ScrollView>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        {slides.map((_, index) => {
          return (
            <Indicator key={index} index={index} scrollOffset={scrollOffset} />
          );
        })}
      </View>
      
    </FormProvider>
  );
};
const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'rgb(41, 45, 62)',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default Slider;


