

import {A} from '@expo/html-elements';
// need to handle children here 
export default function TextLink({url, address, children}) {
  // address ? 
  return <A href={url}>{children}</A>;
}