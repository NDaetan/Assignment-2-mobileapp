import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/signInPage";
import HomeScreen from "../components/homePage";
import CityTab from "../components/citiesPage";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: styles.container }}>
      <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerTintColor: 'white', }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTintColor: 'red', headerTitleStyle: styles.headerTitle, }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'black',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});