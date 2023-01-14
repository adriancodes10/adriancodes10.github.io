

import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function useDimensions() {
  const [dimensions, setDimensions] = useState({window, screen});
  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
  };
  useEffect(() => {
    const dimensionHandler = Dimensions.addEventListener('change', onChange);
    return () => {
      // Dimensions.removeEventListener('change', onChange);
      dimensionHandler.remove();
    };
  },
  // []
  );


  return dimensions;
}


