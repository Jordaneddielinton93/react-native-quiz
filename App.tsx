import { StatusBar } from "expo-status-bar";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurriculmScreen from "./screens/CurriculmScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          {/* <SafeAreaProvider> */}

          <Stack.Navigator initialRouteName="CurriculmScreen">
            <Stack.Screen
              name="CurriculmScreen"
              component={CurriculmScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={HomeScreen} />
          </Stack.Navigator>

          {/* </SafeAreaProvider> */}
        </NavigationContainer>
      </Provider>
    );
  }
}
