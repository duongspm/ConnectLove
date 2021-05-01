import * as React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BoyScreen from './BoyScreen';
import GirlScreen from './GirlScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen 
        name = "Gấu đực" 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={26} />
          ),
        }}
        component = {BoyScreen}/>
      
      <Tab.Screen 
        name = "Gấu cái" 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
          ),
        }}
        component = {GirlScreen}/>

      <Tab.Screen 
        name = "Search" 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
        component = {SearchScreen}/>

      <Tab.Screen 
        name = "Profile" 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component = {ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default HomeScreen
