import React from "react";

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import DetScreen from "./DetScreen";

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName='Home' activeColor='#fff'>
    <Tab.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='ios-home' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Notifications'
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#1f65ff",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='ios-notifications' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "red",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='ios-person' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Explore'
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#d02860",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='ios-aperture' color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: "Overview",
        headerShown: false,
        // headerLeft: () => (
        //     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        // )
      }}
    />

    <HomeStack.Screen
      name='Det'
      component={DetScreen}
      options={{
        title: "Detail",
        headerShown: false,
        // headerLeft: () => (
        //     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        // )
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name='Details'
      component={DetailsScreen}
      options={{
        headerShown: false,
        // headerLeft: () => (
        //     <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        // )
      }}
    />
  </DetailsStack.Navigator>
);
