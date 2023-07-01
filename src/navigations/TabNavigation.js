import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStackNavigator, MainStackNavigator, OrderStackNavigator, ProfileStackNavigator } from './StackNavigator'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.TabNavigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            headerShown:false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
        }}
        >
            <Tab.Screen name="home" component={MainStackNavigator}/>
            <Tab.Screen name="cart" component={CartStackNavigator}/>
            <Tab.Screen name="order" component={OrderStackNavigator}/>
            <Tab.Screen name="profile" component={ProfileStackNavigator}/>
        </Tab.TabNavigator>
    )
}