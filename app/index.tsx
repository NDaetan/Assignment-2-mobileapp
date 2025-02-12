import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/signInPage";
import HomeScreen from "../components/homePage";  
import CityTab from "../components/citiesPage";  

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}