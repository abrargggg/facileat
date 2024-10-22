
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';



function EcranPropose() {
  const navigation = useNavigation();
  const [selectedMeals, setSelectedMeals] = useState(1);
  const [selectedPersons, setSelectedPersons] = useState(1);

  const incrementMeals = () => {
    setSelectedMeals(prevCount => prevCount + 1);
  };

  const decrementMeals = () => {
    setSelectedMeals(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };
    // Fonctions pour le nombre de personnes
    const incrementPersons = () => {
      setSelectedPersons(prevCount => prevCount + 1);
    };
  
    const decrementPersons = () => {
      setSelectedPersons(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };
  return (
   
 
          <ImageBackground source={require('./assets/laa.jpg')} style={styles.backgroundImage}>
            <Text style={styles.title}>Propose moi</Text>
            
      <View style={styles.container}>
        <TouchableOpacity style={styles.bandeauRetour} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={30} color="black" style={styles.iconColor} />
        </TouchableOpacity>
     
        
        <Text style={styles.question}>Combien de repas voulez-vous ?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
          <TouchableOpacity onPress={decrementMeals}>
            <Ionicons name="arrow-down-sharp" size={20} color="black" />
          </TouchableOpacity>
          <Text>{selectedMeals}</Text>
          <TouchableOpacity onPress={incrementMeals}>
            <Ionicons name="arrow-up-sharp" size={20} color="black" />
          </TouchableOpacity>
        </View>
     
      
        




        
 
        <View style={styles.arrowContainer}>
      
   
      </View>

        <Text style={styles.question}>De quel type de repas avez-vous besoin pour chaque jour?</Text>
        <View style={styles.mealList}>
          <View style={styles.mealItem}><Text style={styles.mealText}>Petit déjeuner</Text></View>
          <View style={styles.mealItem}><Text style={styles.mealText}>Repas du midi</Text></View>
          <View style={styles.mealItem}><Text style={styles.mealText}>Dîner</Text></View>
        </View>
      
 
 

        <Text style={styles.questionTitle}>Pour combien de personnes cuisinez-vous?</Text>
        
        <View style={styles.personsContainer}>
  <TouchableOpacity onPress={decrementPersons}>
    <Ionicons name="arrow-down-sharp" size={20} color="black" />
  </TouchableOpacity>
  <Text style={styles.numberText}>{selectedPersons}</Text>
  <TouchableOpacity onPress={incrementPersons}>
    <Ionicons name="arrow-up-sharp" size={20} color="black" />
  </TouchableOpacity>
</View>
        
        <Text style={styles.timeQuestionText}>De combien de temps disposez-vous pour chaque repas ?</Text>
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>10-50 minutes</Text>
        </View>
        <Image
    source={require('./assets/ligne.png')}
     style={styles.centeredImage}
   />
     <View style={{marginBottom: 10}}/>
        <TouchableOpacity
      style={styles.generateButton}
       onPress={() => navigation.navigate('PreparezRepas')}
       >
    
    <Text style={styles.generateButtonText}>Générer mon{'\n'}planning</Text>
    </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
}
// la ligne 31 au 33 pour naviger avec un autre page 
export default EcranPropose;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,

  },
  bandeauRetour: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute', // Positionnement absolu
    top: 60, // Ajustez selon la disposition de votre application
    left: 0, // Ajustez à 0 pour centrer
    right: 0, // Ajustez à 0 pour centrer
    zIndex: 1, // S'assure que le titre est derrière le bouton de retour
  },
  iconColor: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
  },
  question: {
    fontSize: 18,
    marginTop: 15,
    
  },
  mealList: {
    marginTop: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    
  },
 
  
  mealItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  mealText: {
    fontSize: 16,
    color: '#000',
  },
  questionTitle: {
    fontSize: 18,
    color: 'black', // Titre en blanc
    marginTop:10, // Espace après votre liste de repas
    paddingTop:5,
    textAlign: 'left',
  },
  timeQuestionText: {
    fontSize: 18,
    color: 'black',
    marginTop: 20, // Espace au-dessus du titre
    marginBottom: 10, // Espace en dessous du titre
    textAlign: 'center', // Si vous voulez centrer le titre
    paddingVertical: 5, // Espace interne vertical pour le titre
  },

  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligner le texte à droite
    marginTop: 5, // Un peu d'espace après le titre
    paddingTop: 10,
  },
  durationText: {
    color: 'black', // Texte en blanc
    fontSize: 16,
    paddingTop: 10,
  },
  generateButton: {
    backgroundColor: 'black', // Couleur du bouton mise à jour
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
    width: '50%', // Définissez la largeur à 50% de la largeur de l'écran
    position: 'absolute',
    bottom: 40, // Ajustez ici pour ajouter de l'espace en bas
  },

  generateButtonText: {
    color: 'white',
    fontSize: 16, 
    fontWeight: 'bold',
    textAlign: 'center', 
  },

  titleContainer: {
    marginTop: 20, // Ajustez cette valeur selon vos besoins
    marginLeft: 20, // Ajustez cette valeur pour aligner à gauche
  },
  arrowBackground: {
    backgroundColor: 'white', // Fond blanc pour les flèches
    borderColor: 'black', // Couleur de la bordure noire
    borderWidth: 1, // Épaisseur de la bordure
    borderRadius: 4, // Rayon des coins arrondis de la bordure
    // Supprimez paddingVertical et paddingHorizontal si vous ne voulez pas d'espace supplémentaire
  },
  numberText: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center', // Assurez-vous que le numéro est centré verticalement
    marginHorizontal: 0, 
   
  },
  arrowContainer: {
    flexDirection: 'column', // Les flèches sont disposées en colonne
    justifyContent: 'center', // Centre les flèches verticalement
    
  },
  contentContainer: {
    flexDirection: 'row', // Numéro et flèches dans une disposition en ligne
    alignItems: 'center', // Centre les éléments verticalement dans le conteneur
  },
  centeredImage: {
    width: 200,  
    height: 100,
    resizeMode: 'contain', 
    marginBottom: 20,
    alignSelf: 'center' 
  },
  pickerContainer: {
    backgroundColor: 'white', // Fond blanc pour le conteneur du Picker
    padding: 10, // Espace autour du contenu du conteneur
    // ... autres styles que vous pourriez vouloir ajouter
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerStyle: {
    width:50, // Vous pouvez ajuster la largeur selon vos besoins
    // ... autres styles pour le Picker
  },
  personsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligner les éléments à gauche
    marginLeft: 0, // Ajustez en fonction de l'espacement souhaité du bord gauche
    // ... autres styles que vous pourriez vouloir pour ce conteneur
  },
  // Ajoutez ici d'autres styles si nécessaire
});