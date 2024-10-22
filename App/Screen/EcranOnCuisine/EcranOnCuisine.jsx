import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tous from './Tous';
import Plats from './Plats';
import Entrees from './Entrees';
import Aperos from './Aperos';
// import EcranPropose from './EcranPropose';




function EcranOnCuisine({ route }) {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    
 
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>On Cuisine</Text>
     

      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher une recette" />

      <View style={styles.categoryContainer}>
        <TouchableOpacity
            style={[styles.categoryButton, activeTab === 'tab1' && styles.categoryButtonActive]}
          onPress={() => handleTabPress('tab1')}
        >
          <Text style={styles.categoryText}>Tous</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.categoryButton, activeTab === 'tab2' && styles.categoryButtonActive]}
          onPress={() => handleTabPress('tab2')}
        >
          <Text style={styles.categoryText}>Plats</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.categoryButton, activeTab === 'tab3' && styles.categoryButtonActive]}
          onPress={() => handleTabPress('tab3')}
        >
          <Text style={styles.categoryText}>Entrées</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.categoryButton, activeTab === 'tab4' && styles.categoryButtonActive]}
          onPress={() => handleTabPress('tab4')}
        >
          <Text style={styles.categoryText}>Apéros</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'tab1' && <Tous/>}
        {activeTab === 'tab2' && <Plats/>}
        {activeTab === 'tab3' && <Entrees/>}
        {activeTab === 'tab4' && <Aperos/>}
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  categoryButton: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  
  categoryText: {
    fontSize: 16,
  },
  sectionTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeImage: {
    width: '100%',
    height: 200, // Or any height you want
    resizeMode: 'contain',
    marginBottom: 10,
  },
  inspirationText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },
  suggestButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 30,
  },
  suggestButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryButtonActive: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00FF00', // Vert pour indiquer que le bouton est actif
  },
  popularRecipesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  popularRecipesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  seeAllButton: {
    backgroundColor: '#90EE90', // Light green color
    padding: 10,
    borderRadius: 20,
  },
  seeAllButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  recipesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '30%', // Adjust width as needed
  },
 
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    
  },
  veganText: {
    fontSize: 12,
    color: 'green',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  starIcon: {
    width: 50,
    height: 50,

    
  },
  groupIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    marginBottom: 10
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginTop: 10
  },
  timeText: {
    fontSize: 14,
    marginBottom: 10,
    
  },
  timeIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginBottom: 5,
    marginTop:10,

  },

  footerImage: {
    width: '90%', // prend toute la largeur
    height: 35, // hauteur fixe, ajustez selon vos besoins
    resizeMode: 'contain', // assurez-vous que l'image est contenue sans être étirée
    alignSelf: 'center',  // Centrer l'image horizontalement dans le conteneur
    marginBottom: 30,

  },

  // Add other styles as needed
});

export default EcranOnCuisine;