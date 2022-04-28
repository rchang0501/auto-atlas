import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";

import { Home, Maps } from "./screens";
import { store } from "./store";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Maps" component={Maps} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
