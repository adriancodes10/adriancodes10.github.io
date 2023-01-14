

import { View } from "react-native";
export const OnHoverImage = ({hoveredImage, image, alt}) => {
  const [hover, setHover] = useState(false);
  return (
    <View
      style={{width: '200px', height: '200px'}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {hover ? (
        <img src={image} alt={alt} />
      ) : (
        <img src={hoveredImage} alt={alt} />
      )}
    </View>
  );
};