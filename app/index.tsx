import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/signInPage";
import HomeScreen from "../components/homePage";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [currentCity, setCurrentCity] = useState("");

  return (
    <Stack.Navigator screenOptions={{ headerStyle: styles.container }}>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ headerTintColor: "white" }}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerTintColor: currentCity === "Calgary" ? "red" : currentCity === "Edmonton" ? "#4169E1" : "white", headerTitleStyle: styles.headerTitle,
        }} /* Was trying to change color depending on city to match thier colors. -Daetan */
      >
        {() => <HomeScreen setCurrentCity={setCurrentCity} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "black",
  },
  headerTitle: {
    fontWeight: "bold",
  },
});