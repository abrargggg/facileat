import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const ListeRestaurants = () => {
    const navigation = useNavigation();
    const[TabContent, setTabContent]= useState();
    useEffect(()=>{
        getContent()
    },[])

    const getContent =()=>{
        GlobalApi.getRestaurants().then(
            resp=>{
                setTabContent(resp.restaurants)
            }
        )}

return (
    <View style={styles.containerGlobal}>
        <Text style={styles.heading}>Restaurants pour vous à proximité</Text>
        <Image source={require('../../../assets/images/carte.png')} style={styles.carteImage}/>
        <View style={styles.containerListeRestaurants}>
          <FlatList
              data={TabContent}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item, index})=>(

            <View style={styles.card}>
              <TouchableOpacity 
                style={styles.container}
                onPress={()=>navigation.push('details-restaurants',{maCat:item.name})}>

                  <View style={styles.iconContainer}> 
                      <Image source={{uri:item.image[0].url}} style={styles.photo}/>
                  </View>
                
                  <View style={styles.contenu}>
                    <View style={styles.info}>
                        <View>
                          <Text style={{fontFamily:'Larsseit-Medium', fontSize:14, marginTop:10, marginBottom:10}}>{item.name}</Text>
                          <Text style={{fontFamily:'Larsseit-Medium', fontSize:12, color:'#B1B1B1',marginBottom:10}}>{item.adresse}</Text>
                        </View>
                      <View>
                        <Text style={{fontFamily:'Larsseit-Medium', fontSize:12, color:'#B1B1B1',marginTop:10, marginBottom:10}}>{item.categorie.name}</Text>
                    </View>
                  </View>

                  <View style={styles.donnees}>
                    <View style={styles.note}>
                        <Image source={require('../../../assets/icones/etoile.png')} style={styles.picto} />
                        <Text style={{fontFamily:'Larsseit-Bold', color:Colors.dark}}>{item.avis}</Text>
                    </View>

                    <View>
                        <Text style={{fontFamily:'Larsseit-Bold', color:Colors.vert}}>{item.ouverture}</Text>
                    </View>

                    <View>
                        <Image source={require('../../../assets/icones/coeur.png')} style={styles.picto} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
      </View>
      )}/>

      </View>
  </View>
           )
         }

export default ListeRestaurants

const styles = StyleSheet.create({
  containerGlobal:{
    marginTop:60
  },
  containerListeRestaurants:{
    marginTop:-15,
    width:'98%',
    alignItems:'center'
  },
  heading:{
    fontSize:20, 
    fontFamily:'Larsseit-Bold', 
    marginBottom:10,
    marginTop:10,
    fontWeight:'bold',
    textAlign:'center'
  },
  note:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:4,
  },

  photo:{
    width:96,
    height:80,
    borderRadius:10
  },

  picto:{
    width:18,
    height:18,
    marginBottom:4,
  },
  
  container:{
    backgroundColor:Colors.blanc,
    shadowColor: Colors.gris,
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    flexDirection:'row',
    marginRight:5,
    borderRadius:7,
    marginBottom:10,
    width:'95%',

      
  },
  card:{
    alignItems:'center',
  },
  iconContainer:{
      padding:10,
  },
  carteImage:{
      width:'100%',
      height:200,
      marginTop:10,
      marginBottom:-40,
  },
  info:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'73%',

  },
  donnees:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:5,
      width:'79%'
  }
})