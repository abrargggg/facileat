import { View, Text } from 'react-native'
import React from 'react'
import MaPage from '../Screen/MaPage/MaPage'
import EcranRegimeAlimentaire from '../Screen/EcranRegimeAlimentaire/EcranRegimeAlimentaire'
import EcranOnCuisine from '../Screen/EcranOnCuisine/EcranOnCuisine'
import EcranPropose from '../Screen/EcranPropose/EcranPropose'
import PreparezVosRepas from '../Screen/PreparezVosRepas/PreparezVosRepas'
import VosRepasSemaine from '../Screen/VosRepasSemaine/VosRepasSemaine'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation'
import DetailsRestaurants from '../Screen/ListeRestaurants/DetailsRestaurants'

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RegimeAlimentaire" component={EcranRegimeAlimentaire} />
        <Stack.Screen name="OnCuisine" component={TabNavigation} />
        <Stack.Screen name="ProposeMoi" component={EcranPropose} />
        <Stack.Screen name="PreparezRepas" component={PreparezVosRepas} /> 
        <Stack.Screen name="VosRepasSemaine" component={VosRepasSemaine} />
        <Stack.Screen name="details-restaurants" component={DetailsRestaurants} />
        
    </Stack.Navigator>
    
  )
}