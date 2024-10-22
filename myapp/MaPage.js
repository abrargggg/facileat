import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MaPage = () => {
  const backgroundImagePath = require('./assets/laa.jpg');
  const logoImagePath = require('./assets/logo.png');
  const navigation = useNavigation();

  const handleCommencerPress = () => {
    navigation.navigate('RegimeAlimentaire'); // Assurez-vous que 'RegimeAlimentaire' est le nom correct de votre route
  };
  
  return (
    <ImageBackground source={backgroundImagePath} style={styles.container} resizeMode="cover">
      <View style={styles.contentContainer}>
        <Text style={styles.headerTitle}>Bienvenue chez</Text>
        <Image source={logoImagePath} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtitle}>Mes repas en un clic</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonCommencer} onPress={handleCommencerPress}>
          <Text style={styles.buttonText}>Commencer</Text>
        </TouchableOpacity>
        {/* Assurez-vous d'ajouter une fonction similaire pour le bouton Se connecter si nécessaire */}
        <TouchableOpacity style={styles.buttonSeConnecter}>
          <Text style={styles.buttonTextSeConnecter}>Déjà un compte? Se connecter</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -20, // Diminue l'espace au-dessus du titre si nécessaire
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: -10, // Ajustez l'espacement vertical entre le texte et le logo
  },
  subtitle: {
    fontSize: 25,
    color: 'black',
    marginVertical: 20, // Ajustez l'espacement vertical entre le logo et le slogan
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 80, // Ajustez la distance par rapport au bas de l'écran
    alignItems: 'center',
  },
  buttonCommencer: {
    backgroundColor: 'darkgreen',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '90%', // Utilisez un pourcentage pour une largeur réactive
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonSeConnecter: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '100%', // Utilisez un pourcentage pour une largeur réactive
  },
  buttonTextSeConnecter: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MaPage;