// EcranRegimeAlimentaire.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // L'import manquant


function EcranRegimeAlimentaire() {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const navigation = useNavigation(); // Hook pour l'objet navigation



  // Votre tableau de régimes alimentaires et leurs icônes
  const diets = [{ name: 'Végétarien', icon: require('../../../assets/images/1.png') },
  { name: 'Flexitarien', icon: require('../../../assets/images/2.png') },
  { name: 'Pescétarien', icon: require('../../../assets/images/3.png') },
  { name: 'Régime cétogène', icon: require('../../../assets/images/4.png') },
  { name: 'Végan', icon: require('../../../assets/images/5.png') },
  { name: 'Végétalien', icon: require('../../../assets/images/6.png') },
  { name: 'Régime sans porc', icon: require('../../../assets/images/7.png') },
  { name: 'Régime sans sel', icon: require('../../../assets/images/8.png') },
  { name: 'Régime DASH', icon: require('../../../assets/images/9.png') },
  { name: 'Régime sans résidus', icon: require('../../../assets/images/10.png') },
  { name: 'Autre', icon: require('../../../assets/images/11.png') },
  { name: 'Aucun', icon: require('../../../assets/images/12.png') },
    // ... vos objets de régimes ici ...
  ];

  const handleSelectDiet = (diet) => {
    setSelectedDiet(diet.name);
  };

  const handleContinue = () => {
    // Navigation vers l'écran 'OnCuisine', en supposant que c'est le nom correct
    navigation.navigate('OnCuisine', { selectedDiet: selectedDiet });
  };

  // Définition de vos styles et la structure du composant
  // ...
  return (
    <ImageBackground source={require('../../../assets/images/laa.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Régime alimentaire</Text>
          <Text style={styles.subtitle}>
            Quels sont les régimes alimentaires qui vous correspondent à vous et votre famille ?
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {diets.map((diet, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedDiet === diet.name && styles.selectedButton,
              ]}
              onPress={() => handleSelectDiet(diet)}
            >
              <Image source={diet.icon} style={styles.icon} />
              <Text style={styles.buttonText}>{diet.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continuer {'>'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
  flexGrow: 1,
  justifyContent: 'space-between', // Changez ici pour 'space-between' ou 'flex-start' si nécessaire
  alignItems: 'center',
  padding: 10,
  marginTop:50
},
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 18, // Taille de police ajustée
    textAlign: 'center',
    color: 'black',
    marginTop: 10, // Espace ajouté entre titre et sous-titre
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20, // Espace vertical ajusté autour des boutons
  },
  button: {
    flexDirection: 'row', // Ajout pour disposer l'icône et le texte en ligne
    alignItems: 'center', // Centrer les éléments verticalement
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  selectedButton: {
    backgroundColor: 'lightgrey',
    borderColor: 'blue', // Changement de la couleur de la bordure pour le bouton sélectionné
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 10, // Ajout d'une marge à gauche du texte pour l'espacer de l'icône
  },
  continueButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end', // Centre le bouton horizontalement
    marginTop: 30, // Espace ajouté au-dessus du bouton
    marginRight: 5, // Ajoutez ceci pour avoir une marge à droite
    marginBottom: 10, // Ajoutez ceci pour avoir une marge en bas
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
  width: 30,
  height: 30,
  resizeMode: 'contain', // Assure que l'icône est bien ajustée
},
  // Ajoutez d'autres styles personnalisés si nécessaire
});

export default EcranRegimeAlimentaire;