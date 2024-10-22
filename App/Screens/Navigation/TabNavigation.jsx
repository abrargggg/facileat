import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfilScreen from '../ProfilScreen/ProfilScreen';
import ServiceScreen from '../Screens/ServiceScreen/ServiceScreen';
import Colors from '../../Utils/Colors';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            tabBarLabel:({color})=>(
                <Text>Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Entypo name="home" size={24} color={color} />
            )
        }}/>
      <Tab.Screen name="Profil" component={ProfilScreen} />
      <Tab.Screen name="Service" component={ServiceScreen} />
    </Tab.Navigator>
  )
}