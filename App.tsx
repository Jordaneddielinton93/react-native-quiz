import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurriculmScreen from "./screens/CurriculmScreen";
import Topic_Layout from "./screens/CurriculmScreen/Topic_Layout/Topic_Layout";

import DynamicQuestions from "./screens/CurriculmScreen/Topic_Layout/DynamicQuestions/DynamicQuestions";
export type RootStackParamList = {
  CurriculmScreen: undefined;
  Topic: { curriculumTopicLanguageName: string };
  DynamicQuestions: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
            <Stack.Screen
              name="DynamicQuestions"
              component={DynamicQuestions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
