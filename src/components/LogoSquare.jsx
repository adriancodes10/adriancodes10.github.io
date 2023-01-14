
import tw from 'twrnc';

import {Image} from 'react-native';
const logoGradient = require('../assets/logos/adrian-gradient.png');

export default function LogoSquare() {
return (
  <Image
  source={logoGradient}
  style={[tw`mr-[-20px] h-8 h-20 w-20 aspect-maintain`, {}]}
  alt="Adrian Codes Logo"
  />)
}