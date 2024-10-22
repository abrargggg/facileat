import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


function PreparezVosRepas() {
  const navigation = useNavigation();

  const [sliderValue, setSliderValue] = React.useState(0);
  const goToNextPage = () => {
    // Remplacez 'VosRepasSemaine' par le nom que vous donnerez à votre écran dans votre StackNavigator
    navigation.navigate('VosRepasSemaine');
  };


  return (
    <ImageBackground
      source={require('./assets/laa.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <TouchableOpacity 
          style={styles.bandeauRetour} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-sharp" size={30} color="black" style={styles.iconColor} />
        </TouchableOpacity>

        <Text style={styles.title}>Facil’eat prépare vos repas ...</Text>

        <Image
          source={require('./assets/Mask.png')}
          style={styles.imageStyle}
        />
       
       <TouchableOpacity 
          style={styles.bandeauAvancer}
          onPress={goToNextPage}
        >
          <Ionicons name="arrow-forward-sharp" size={30} color="black" style={styles.iconColor} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default PreparezVosRepas;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bandeauRetour: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginBottom: 0, // Pas d'espace en dessous du titre
  },
  imageStyle: {
    width: 250, // Ajustez la largeur selon vos besoins
    height: 50, // Ajustez la hauteur selon vos besoins
    resizeMode: 'contain', // L'image sera entièrement visible
    marginTop: 0, // Pas d'espace au-dessus de l'image
  },
  iconColor: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
  },
  slider: { // Corrected the typo here from 'lider' to 'slider'
    width: '80%',
    height: 40,
    marginTop: 20,
    // Vous pouvez ajuster le style selon vos besoins
  },
  bandeauAvancer: {
    position: 'absolute',
    top: 50,
    right: 20, // Alignez à droite pour un effet "avancer"
    zIndex: 2,
    // ... autres styles que vous pourriez vouloir pour ce bouton
  },
  // Ajoutez ici d'autres styles si nécessaire
});
