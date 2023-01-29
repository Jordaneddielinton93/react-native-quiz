import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurriculmScreen from "./screens/CurriculmScreen";
import Topic_Layout from "./screens/Topic_Layout/Topic_Layout";

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
          <Stack.Navigator initialRouteName="CurriculmScreen">
            <Stack.Screen
              name="CurriculmScreen"
              component={CurriculmScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Topic"
              component={Topic_Layout}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
