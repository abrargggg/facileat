import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EcranOnCuisine from '../Screen/EcranOnCuisine/EcranOnCuisine';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import RestaurantsNavigation from './RestaurantsNavigation';
import OnCuisineNavigation from './OnCuisineNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    // <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.PRIMARY}}>
    //   <Tab.Screen name="Cuisine" component={EcranOnCuisine} />
    //   <Tab.Screen name="Restaurants" component={ListeRestaurants} />
    //   {/* ajouter les autres onglets ici */}
    // </Tab.Navigator>
     <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.vert,
        tabBarIconStyle: { marginTop: 5 }
      }}>
      <Tab.Screen name="Cuisine" component={OnCuisineNavigation} 
      options={{
        tabBarLabel: () => null,
       
        tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="chef-hat" size={40} color={color} />
        ),

      }}/>
      
      <Tab.Screen name="Restaurant" component={RestaurantsNavigation} 
      options={{
        tabBarLabel: () => null,
       
        tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="silverware-fork-knife" size={40} color={color} />
        ),

      }}/>

    </Tab.Navigator>
  )
}