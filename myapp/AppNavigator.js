import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaPage from './MaPage'; // Votre page principale
import RegimeAlimentaire from './RegimeAlimentaire'; // La page vers laquelle vous naviguez
import EcranPropose from './EcranPropose'; 

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MaPage">
        <Stack.Screen name="MaPage" component={MaPage} />
        <Stack.Screen name="RegimeAlimentaire" component={RegimeAlimentaire} />
        <Stack.Screen name=" EcranPropose" component={ EcranPropose} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;