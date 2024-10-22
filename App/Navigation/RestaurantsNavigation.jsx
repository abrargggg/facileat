import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailsRestaurants from '../Screen/ListeRestaurants/DetailsRestaurants'
import ListeRestaurants from '../Screen/ListeRestaurants/ListeRestaurants'

const Stack = createStackNavigator();

export default function RestaurantsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="liste-restaurant" component={ListeRestaurants} />
        <Stack.Screen name="details-restaurants" component={DetailsRestaurants} />
    </Stack.Navigator>
    
  )
}