import { useEffect } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "./lib/Colors";
import Setup from "./screens/Setup";
import Game from "./screens/Game";
import ScoreUpdate from "./screens/ScoreUpdate";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    LondonHeavy: require("./assets/font/London-Underground-Heavy.ttf"),
    ArimoBold: require("./assets/font/Arimo-bold.ttf"),
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
          <Stack.Screen
            name={"Setup"}
            component={Setup}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={"Game"} component={Game} />
          <Stack.Screen
            name={"ScoreUpdate"}
            component={ScoreUpdate}
            options={{ presentation: "modal", title: "Score Update" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
