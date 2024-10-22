// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import GlobaApi from '../../Utils/GlobaApi';

const App = () => {

  const[tabRecettes, setRecette] = useState();
  // const navigation = useNavigation()

  useEffect(()=>{
    getRecettes();
  },[])
  const getRecettes =()=>{
    GlobaApi.getRecettes().then(resp=>{
          console.log("resp",resp);
          setRecette(resp.recettes)
      })
  }

  return (
    <View style={styles.container}>
     <FlatList
        data={tabRecettes}
        renderItem={({item,index})=>(
          <View style={{marginTop:50}}>
             <Text>{item.name}</Text>
                  <Image
              source={{ uri:item.imagerecette.url }} // Remplacez par l'URL de votre image
              style={styles.image}
            />
          </View>
 
        )}
      />

      <Image
        source={{ url: './assets/photos_recette/gateau_chocolat.jpg' }} // Remplacez par l'URL de votre image
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Bouton</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Gâteau au chocolat</Text>
      <Text style={styles.subtitle}>Vegan - Pour vous, allergique aux œufs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%', 
    height: 200,
  },
  button: {
    position: 'absolute',
    top: 10, 
    left: 10, 
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginTop: 8, 
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
    marginTop: 4,
  },
});

export default App;