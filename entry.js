


//replaces package.json main:
// "node_modules/expo/AppEntry.js"
// custom entry file (default uses outdated reactdom.render, using createroot now)
import "expo/build/Expo.fx";
import { Platform } from "react-native";
import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";
import { createRoot } from "react-dom/client";
import App from "./App"; /* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */
// node

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  registerRootComponent(App);
}