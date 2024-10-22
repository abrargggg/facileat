import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaPage from './MaPage';
import EcranRegimeAlimentaire from './EcranRegimeAlimentaire';
import EcranOnCuisine from './EcranOnCuisine';
import EcranPropose from './EcranPropose'; 
import PreparezVosRepas from './PreparezVosRepas'; 
import VosRepasSemaine from './VosRepasSemaine';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Accueil" component={MaPage} />
        <Stack.Screen name="RegimeAlimentaire" component={EcranRegimeAlimentaire} />
        <Stack.Screen name="OnCuisine" component={EcranOnCuisine} />
        <Stack.Screen name="ProposeMoi" component={EcranPropose} />
        <Stack.Screen name="PreparezRepas" component={PreparezVosRepas} /> 
        <Stack.Screen name="VosRepasSemaine" component={VosRepasSemaine} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;