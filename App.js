import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gallery from "./screens/Gallery";
import Profile from "./screens/Profile";
import News from "./screens/News";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons or any other icon library you prefer

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route.name === "News") {
                iconName = "home";
              } else if (route.name === "Gallery") {
                iconName = "list";
              } else if (route.name === "Profile") {
                iconName = "person";
              }

              return <Ionicons name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: "#0042b2",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Gallery" component={Gallery} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="News" component={News} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "#c1c2c4",
    alignItems: "center",
    justifyContent: "center",
  },
});
