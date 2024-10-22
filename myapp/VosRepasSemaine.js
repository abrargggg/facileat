import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



function RecipeCard({ image, title, isVegan, rating, time, timeIcon, dayTitle, }) {
  return (
    <View style={styles.recipeCard}>
      <Text style={styles.dayTitle}>{dayTitle}</Text>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        {isVegan && <Text style={styles.veganLabel}>Végétalien</Text>}
        <View style={styles.cardDetails}>
          <Image source={timeIcon} style={styles.timeIcon} />
          <Text style={styles.cardDetailText}>{time}</Text>
        </View>
        <View style={styles.cardRating}>
        <Image source={timeIcon} style={styles.starIcon} />
       
          <Text style={styles.cardDetailText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
}

function VosRepasSemaine() {
const navigation = useNavigation();
  return (
    
        <><ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-sharp" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Vos repas pour cette semaine</Text>
            {/* ... Le reste de vos composants RecipeCard et autres ... */}
            
       
                <View style={styles.recipesListContainer}>
                    <RecipeCard
                        image={require('./assets/ch.jpeg')}
                        title="Gâteau au chocolat"
                        isVegan={true}
                        rating="4.5"
                        time="40 min"
                        timeIcon={require('./assets/cor.png')}
                        starIcon={require('./assets/star.png')}
                        dayTitle="Lundi" />
                    <RecipeCard
                        image={require('./assets/cur.jpg')}
                        title="Curry de pois chiche"
                        isVegan={true}
                        rating="4.5"
                        time="20 min"
                        timeIcon={require('./assets/cor.png')}

                        dayTitle="Mardi" />
                    <RecipeCard
                        image={require('./assets/pr.jpeg')}
                        title="Brownie au chocolat"
                        isVegan={true}
                        rating="4.5"
                        time="40 min"
                        timeIcon={require('./assets/cor.png')}
                        starIcon={require('./assets/star.png')}
                        dayTitle="Mercredi" />
                </View>
                <Image
                    source={require('./assets/fo.png')}
                    style={styles.footerImage} />
            </ScrollView></>
  );
}

const styles = StyleSheet.create({
    backButton: {
    position: 'absolute',
    top: 30,
    left: 5,
    zIndex: 2,
      },
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingTop: 20,
    marginTop: 10,
  },
  recipesListContainer: {
    paddingHorizontal: 10,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '100%', 
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,  
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  cardImage: {
    

    width: '100%',
    height: 200,
  
       
  },
  cardContent: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  veganLabel: {
    color: 'green',
    fontSize: 14,
    marginTop: 5,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardDetailText: {
    marginLeft: 5,
  },
  cardRating: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  starIcon: {
    width: 20, 
    height: 20,
    marginLeft: 5  
  },

  timeIcon: {},
  footerImage: {
    width: '100%',
    height: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 30,
    resizeMode: 'contain',
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8 ,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},  
  shadowOpacity: 0.2
  },

  cardDetailText: {
    fontSize: 14,
    color: '#333'  
  },
});

export default VosRepasSemaine;