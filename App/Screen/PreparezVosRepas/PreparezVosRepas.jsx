import React, { useEffect } from 'react';
import { View, StyleSheet,Text,ActivityIndicator, } from 'react-native';
import Colors from '../../Utils/Colors';


function PreparezVosRepas({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('vos-repas'); // Assurez-vous que 'HomeScreen' correspond au nom de votre écran cible
    }, 2000); // 10000 ms = 10 secondes

    return () => clearTimeout(timer); // Nettoie le timer si l'écran est quitté avant la fin
  }, [navigation]);


  return (
  
    // <ImageBackground
    //   source={require('../../../assets/images/laa.jpg')}
    //   style={styles.backgroundImage}
    // >
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.vert} />
        <Text style={styles.heading}>Facil’eat prépare vos repas ...</Text>
      </View>
    // </ImageBackground>
  );
}

export default PreparezVosRepas;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10
  }
 
});
