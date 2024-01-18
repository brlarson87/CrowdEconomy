import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainShoes from "../screens/MainShoes";
import ProductStore from "../screens/ProductStore";
import Login from "../screens/Login";
import Account from "../screens/Account";
import Polls from "../screens/Polls";

import Colors from "../constants/Colors";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

//import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <Tab.Navigator initialRouteName="Shoes"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                let color = focused ? Colors.primary : "#fff";
                let size = 26;
                if(route.name === 'Prizes') {
                    iconName = 'shoe-sneaker';
                    
                } else if(route.name === 'Shop') {
                    iconName = 'shopping-outline';
                
                } else if(route.name === 'Login') {
                    iconName = 'login';
            
                } else if(route.name === 'Polls') {
                    iconName = 'poll';
                } else if(route.name === 'Account') {
                    iconName = 'account';
                }
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: Colors.primary,
            headerShown: false,
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                height: 45,
                backgroundColor: '#000',
                justifyContent: 'center'
            } 
          })}>
            <Tab.Screen name="Prizes" component={MainShoes}></Tab.Screen>
            <Tab.Screen name="Shop" component={ProductStore}></Tab.Screen>
            <Tab.Screen 
                name="Polls" 
                component={Polls} 
            >
            </Tab.Screen>
            {isSignedIn ? <Tab.Screen name="Account" component={Account}/> : <Tab.Screen name="Login" component={Login}/>}
        </Tab.Navigator>
    )
}