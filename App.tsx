import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setup from "./screens/Setup";
import Game from "./screens/Game";
import { Colors } from "./lib/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.blue900 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Colors.blue600 },
          }}
        >
          <Stack.Screen name={"Setup"} component={Setup} />
          <Stack.Screen name={"Game"} component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
