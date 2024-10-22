import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EcranOnCuisine from '../Screen/EcranOnCuisine/EcranOnCuisine';
import EcranPropose from '../Screen/EcranPropose/EcranPropose';
import VosRepasSemaine from '../Screen/VosRepasSemaine/VosRepasSemaine';
import PreparezVosRepas from '../Screen/PreparezVosRepas/PreparezVosRepas';

const Stack = createStackNavigator();

export default function OnCuisineNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="on-cuisine" component={EcranOnCuisine} />
        <Stack.Screen name="propose" component={EcranPropose} />
        <Stack.Screen name="attente" component={PreparezVosRepas} />
        <Stack.Screen name="vos-repas" component={VosRepasSemaine} />
    </Stack.Navigator>
    
  )
}
