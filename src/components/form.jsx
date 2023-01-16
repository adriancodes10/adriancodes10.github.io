


import {useState} from "react";
import { Text, View, TextInput, Button, Pressable, } from "react-native";
// import {Select } from 'react-native';
// import {Select } from 'react-select';
import {StyleSheet} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import tw from "../api/tailwind";
import RNPickerSelect, {defaultStyles} from "react-native-picker-select";
import useDimensions from "../hooks/useDimensions";
import DropDownPicker from 'react-native-dropdown-picker'
import stateOptions from "../utilities/constants";
import sendMessage from "../firebase/burn";
// import {Send} from "../firebase/burn";
import postToSlack from "../hooks/slackwebhook";
 const onError = (error) => console.log('errors',error);
const onSubmit = (data) => {
  console.log('data form', data )
  // sendMessage(data)
  postToSlack(data);
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});


export default function Form({hiringGoal, projectType}) {
  // let action = '';
  // purpose == 'positionDetails' ? action = purpose :purpose == 'project' ? action=
  const { control, handleSubmit, register,watch, setValue, formState: { errors,isValid } } = useForm({mode: 'onBlur',

    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phoneNumber: '',
      // product: 'mobile app',
      hiringGoal: hiringGoal == 'Project'? 'Project':'Full-time',
      positionDetails: '',
      projectType:projectType? projectType:'mobile + web app',
      budget: '4,000',
      message: 'Hi!',
      city: 'Los Angeles',
      state: 'CA',
    }
  });

  const {window} = useDimensions();
  const hiring = watch('hiringGoal');

  
  const registerOptions = {
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
    hiringGoal: {
      required: true,
      // validate: { }
      // maxLength: {
        // message: 'company name should be less than 100 letters long',
      // },
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
        value: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
  return (
    <View>
      <View
        style={tw.style(
          'h-auto overflow-scroll self-center justify-self-center px-10 md:px-20 md:grid md:grid-cols-2 md:gap-8 md:px-[0px] md:justify-items-evenly',
          tw.prefixMatch(`landscape`) &&
            window.height < 500 &&
            'grid grid-cols-2 px-0 md:px-[0px] gap-8 justify-items-stretch justify-evenly'
        )}>
        <View>
          <Controller
            control={control}
            rules={registerOptions.email}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.input]}
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
          <Text
            style={[
              tw`text-sm mt-2 leading-tight text-semibold font-[Nunito]`,
            ]}>
            What are you hiring for?
          </Text>
          <Controller
            name="hiringGoal"
            control={control}
            render={({field}) => {
              console.log('field', field);
              const [open, setOpen] = useState(false);
              const [pickerValue, setPickerValue] = useState(field.value);
              const [items, setItems] = useState([
                {label: 'Full-time', value: 'Full-time'},
                {label: 'Part-time', value: 'Part-time'},
                {label: 'Project', value: 'Project'},
              ]);
              {
                console.log('field hringfor');
              }
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
                    console.log('dropdown on selectItem item', item);
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
          {console.log('field positionDetails')}
          {hiring != 'Project' && (
            <>
              <Text style={[tw`text-xs leading-tight mt-2`, styles.label]}>
                Position hiring for and languages used (if known) Ex: "Full
                Stack Developer React Native"
              </Text>
              <Controller
                name="positionDetails"
                control={control}
                rules={registerOptions.positionDetails}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={[tw`formInput`, styles.input]}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    autocomplete={''}
                    autocorrect={false}
                    placeholder="Position, languages"
                  />
                )}
              />
              {console.log('field end positionDetails')}
              {errors.positionDetails?.type === 'maxLength' && (
                <Text>Input is too long must be less than 100 characters</Text>
              )}
            </>
          )}
          {console.log('field b4projectType')}
          {hiring && hiring == 'Project' && (
            <>
              <Text style={tw`text-xs leading-tight mt-2`}>
                Your project type?
              </Text>
              <Controller
                name="projectType"
                control={control}
                render={({field}) => {
                  console.log('field projectType', field);
                  const [open, setOpen] = useState(false);
                  const [pickerValue, setPickerValue] = useState(field.value);
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
                  console.log('projectType dropdown');
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
                        console.log('projectType dropdown onselect item', item);
                        setValue('projectType', item.value);
                      }}
                      zIndex={2000}
                      zIndexInverse={2000}
                    />
                  );
                }}
              />
              {console.log('field budget')}
              {errors.projectType && <Text>{errors.projectType.message}</Text>}
              {console.log('before budget')}

              <Text style={tw`text-xs leading-tight mt-2`}>
                What is the budget?
              </Text>
              <Controller
                name="budget"
                control={control}
                render={({field}) => {
                  console.log('field budget', field);
                  const [open, setOpen] = useState(false);
                  const [pickerValue, setPickerValue] = useState(field.value);
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
                        console.log('budget onselect item', item);
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
        {console.log('b4 phonenumber')}
        <View>
          <Controller
            control={control}
            rules={registerOptions.phoneNumber}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`formInput`}
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
          {console.log('field after phoneNum')}
          {errors.phoneNumber?.type === 'pattern' && (
            <Text>{errors.phoneNumber.message}</Text>
          )}
          <Controller
            control={control}
            rules={registerOptions.firstName}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`formInput`}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autocomplete={'name'}
                autocorrect={false}
                placeholder="first name"
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>{errors.firstName.message}</Text>}
          <Controller
            control={control}
            rules={registerOptions.lastName}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`formInput`}
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
          {console.log('field firstnae')}
          {errors.lastName && <Text>{errors.lastName.message}</Text>}
          <Controller
            control={control}
            rules={registerOptions.city}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`formInput`}
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
                    console.log('state item', item);
                    setValue('state', item.value);
                  }}
                  zIndex={1000}
                  zIndexInverse={3000}
                />
              );
            }}
          />
          <Text>Add details: </Text>
          <Controller
            control={control}
            rules={{
              maxLength: 400,
              minLength: 10,
              message: 'Message must be between 10 and 400 characters',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`formInput`}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autocorrect={true}
              />
            )}
            name="message"
          />
          {errors.message && <Text>{errors.message.message}</Text>}{' '}
          <Pressable
            // title="Submit"
            onPress={ 
              handleSubmit(onSubmit, onError)}
            style={tw`bg-blue-600 rounded w-[6rem] py-2 mt-[10px] mx-auto `}>
            <Text style={tw`mx-auto text-base text-white`}>Submit</Text>
          </Pressable>
        </View>
      </View>
      {console.log('end form')}
    </View>
  );
}



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
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});



