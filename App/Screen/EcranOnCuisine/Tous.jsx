import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

function RecipeCard({ image, title, isVegan, rating, time, timeIcon, foImage }) {
  
    return (
      <View style={styles.recipeCard}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          {isVegan && <Text style={styles.veganLabel}>Vegan</Text>}
          <View style={styles.cardDetails}>
            <Image source={timeIcon} style={styles.timeIcon} />
            <Text style={styles.cardDetailText}>{time}</Text>
          </View>
          <View style={styles.cardRating}>
            <Text style={styles.cardDetailText}>{rating}</Text>
          </View>
        </View>
        <Image source={foImage} style={styles.foImage} />
      </View>
    );
  }
  
const Tous = () => {
  const navigation=useNavigation()
  return (
    <View>
      <Text style={styles.sectionTitle}>Nouveautés pour vous</Text>
        <Image
        source={require('../../../assets/images/recette2.png')}
        style={styles.recipeImage} />

        <Text style={styles.inspirationText}>Pas d'inspiration ? Facileat s'occupe de tout</Text>
        {/* propose moi  */}

        <TouchableOpacity style={styles.suggestButton} onPress={() => {navigation.push('propose')}}>
        <Text style={styles.suggestButtonText}>Propose-moi !</Text>
        </TouchableOpacity>

        <View style={styles.popularRecipesContainer}>
        <Text style={styles.popularRecipesTitle}>Recettes populaires</Text>
        <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>Voir tout</Text>
        </TouchableOpacity>
        </View>


        {/* Cartes de recettes */}
        <View style={styles.recipesContainer}>
        <RecipeCard
            image={require('../../../assets/images/Re3.png')}
            title="Gâteau au chocolat"
            isVegan={true}
            rating="4.5"
            time="40 min"
            timeIcon={require('../../../assets/images/cor.png')}
            starIcon={require('../../../assets/images/star.png')}
            
            
        />
        <RecipeCard
            image={require('../../../assets/images/Re4.png')}
            title="Curry de pois chiche"
            isVegan={true}
            rating="4.5"
            time="20 min"
            timeIcon={require('../../../assets/images/co1.png')}
            starIcon={require('../../../assets/images/star.png')}
        />
        <RecipeCard
            image={require('../../../assets/images/Re5.png')}
            title="Brownie au chocolat"
            isVegan={true}
            rating="4.5"
            time="40 min"
            timeIcon={require('../../../assets/images/cor.png')}
            starIcon={require('../../../assets/images/star.png')}
        />
        {/* Ajoutez d'autres instances de RecipeCard au besoin */}
        </View>

    </View>
  )
}

export default Tous


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