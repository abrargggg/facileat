import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Recette from './App/Screens/Recette/Recette'; // Assurez-vous que le chemin d'importation est correct.

export default function App() {
  return (
    <View style={styles.container}>
      {/* On remplace le Text par le composant Recette importé */}
      <Recette />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});