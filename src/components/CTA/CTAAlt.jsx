





import tw from "../../api/tailwind";
import { View, Text } from "react-native";
import { Pressable } from "react-native-web";


export default function CTAAlt({title='Ready to get started?', subtitle='Start your project today.',buttonOptionPrimary='Get started', buttonOptionSecondary='Learn more'}) {
  return (
    <View style={tw`container mx-auto border-outline`}>
      <View
        style={tw`bg-blue-700 relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px] `}>
        <View style={tw`mx-4 flex flex-wrap items-center flex-col md:flex-row`}>
          <View style={tw`w-full px-4 lg:w-1/2`}>
            <Text style={tw`mb-2 text-base font-semibold text-white`}>
              Find Your Next Dream App
            </Text>
            <Text
              style={tw`mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0`}>
              Get started with <br style={tw`xs:block hidden`} />
              our free trial
            </Text>
          </View>
          <View style={tw`w-full px-4 lg:w-1/2`}>
            <View
              style={tw`flex flex-wrap lg:justify-end flex-col md:flex-row`}>
              <Pressable
                style={tw`hover:text-primary my-1 mr-0 md:mr-4 inline-block rounded bg-blue-400 bg-opacity-20 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9`}>
                Get Pro Version
              </Pressable>
              <Pressable
                style={tw`my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9`}>
                Start Free Trial
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <span style={tw`absolute top-0 left-0 z-[-1]`}>
            <svg
              width="189"
              height="162"
              viewBox="0 0 189 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="16"
                cy="-16.5"
                rx="173"
                ry="178.5"
                transform="rotate(180 16 -16.5)"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-157"
                  y1="-107.754"
                  x2="98.5011"
                  y2="-106.425"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.07" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span style={tw`absolute bottom-0 right-0 z-[-1]`}>
            <svg
              width="191"
              height="208"
              viewBox="0 0 191 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="173"
                cy="178.5"
                rx="173"
                ry="178.5"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-3.27832e-05"
                  y1="87.2457"
                  x2="255.501"
                  y2="88.5747"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.07" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </View>
      </View>
    </View>
  );
}