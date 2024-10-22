import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Colors from '../../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailsRestaurants = () => {
    const navigation = useNavigation();
    const[TabContent, setTabContent]= useState();
    const param = useRoute().params
    useEffect(()=>{
        getContent()
    },[])

    const getContent =()=>{
        GlobalApi.getRestaurantsDetails(param.maCat).then(
            resp=>{
            console.log("nom categorie",param.maCat)
                //setTabContent(resp.restaurants)
                console.log("datas",resp.restaurants)
                setTabContent(resp.restaurants)
            }
        )}

return (
<View style={{paddingTop:50, paddingBottom:50, backgroundColor:Colors.blanc }}>
    <ScrollView>
          <FlatList
                data={TabContent}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({item, index})=>(
                    <View>
                      <View>
                        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btnarrow}>
                            <AntDesign name="arrowleft" size={20} color={Colors.dark} />
                        </TouchableOpacity>  
                        <Image source={{uri:item.image[0].url}} style={styles.photoHeading}/>      
                        
                      </View>
                      
                      <Text style={styles.heading}>{item.name}</Text>
                      <Text style={{fontFamily:'Larsseit-Medium', fontSize:14, marginLeft:10, marginBottom:10,color:'#B1B1B1'}}>{item.categorie.name}</Text>

                      <View style={styles.note}>
                      <Image source={require('../../../assets/icones/etoile.png')} style={styles.picto} />
                      <Text style={{fontFamily:'Larsseit-Bold', color:Colors.dark}}>{item.avis}</Text>
                      <Text style={{fontFamily:'Larsseit-Bold', color:'#B1B1B1'}}>(30+)</Text>
                      <Text style={{fontFamily:'Larsseit-Bold', color:Colors.vert, marginLeft:3}}>Voir les avis</Text>
                      </View>

                    </View>


          )}/>

    <FlatList
                data={TabContent}
                //  horizontal={true}
                numColumns={5}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({item, index})=>(

                <View style={{marginTop:7}}>
                    <Text style={{fontFamily:'Larsseit-Medium', fontSize:13, color:'#B1B1B1', marginLeft:10}}>Exemple de plats présents dans ce restaurant</Text>

                    <ScrollView style={styles.slider} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image source={{uri:item.image[1].url}} style={styles.photo}/>
              <Image source={{uri:item.image[2].url}} style={styles.photo}/>
              <Image source={{uri:item.image[3].url}} style={styles.photo}/>
              <Image source={{uri:item.image[4].url}} style={styles.photo}/>
              <Image source={{uri:item.image[5].url}} style={styles.photo}/>
                    </ScrollView>

                </View>

          )}/>

    <FlatList
                data={TabContent}
                numColumns={5}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({item, index})=>(
                  
                    <View style={styles.info}>
                      <Text style={{fontFamily:'Larsseit-Bold', fontSize:16, color:Colors.vert, marginLeft:10}}>Ouvert</Text>

                    <View name="ouverture" style={styles.container}>

                      <View style={styles.gauche}>
                      <Image source={require('../../../assets/icones/picto horloge.png')} style={{height:21, width:21}}  />
                      <Text style={{fontFamily:'Larsseit-Medium', fontSize:14, color:Colors.dark, marginLeft:10}}>Jeudi</Text>
                      <Text style={{fontFamily:'Larsseit-Bold', fontSize:14, color:Colors.vert}}>{item.ouverture}</Text>
                      </View>

                      <View>
                      <Image source={require('../../../assets/icones/calendrier.png')} style={{height:21, width:21}}  />
                      </View>


                    </View>

                    <View name="adresse" style={styles.container}>

                      <View style={styles.gauche}>
                      <Image source={require('../../../assets/icones/picto localisation.png')} style={{height:27, width:23}}  />
                      <Text style={{fontFamily:'Larsseit-Medium', fontSize:14, color:Colors.dark, marginLeft:10}}>{item.adresse}</Text>
                      </View>

                      <View name="droite" >
                      <Image source={require('../../../assets/images/carte.png')} style={{height:80, width:89, borderRadius:8}}  />
                      </View>


                    </View>

                    <View name="telephone" style={styles.container}>

                      <View style={styles.gauche}>
                      <Image source={require('../../../assets/icones/picto telephone.png')} style={{height:20, width:20}}  />
                      <Text style={{fontFamily:'Larsseit-Medium', fontSize:14, color:Colors.dark, marginLeft:10}}>{item.telephone}</Text>
                      </View>

                    </View>

                    </View>
          )}/>

          <View name="reserver" style={styles.bouton}>
            <View style={styles.pictoBouton}>
          <Image source={require('../../../assets/icones/picto reserver.png')} style={{height:30, width:30}}  />
            </View>
          <Text style={{fontFamily:'Larsseit-Bold', fontSize:15, color:Colors.blanc, marginLeft:15}}>Réserver</Text>

          </View>

    </ScrollView>

    </View>
      )
    }



export default DetailsRestaurants

const styles = StyleSheet.create({
    heading:{
        fontSize:22, 
        fontFamily:'Righteous', 
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
    },

    pictoBouton:{
    backgroundColor:Colors.blanc,
    padding:7,
    borderRadius:99
        },

        bouton:{
          flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.button,
    width:150,
    padding:7,
    borderRadius:28,
    alignSelf:'center',
    marginTop:10,  
    },

    gauche:{
float:'left',
flexDirection:'row',
alignItems:'center',
gap:5,
    },

  plat:{
width:100,
 },

    
    slider:{
marginLeft:10,
marginTop:10,

    },

    note:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:4,
        marginLeft:10,
    },

    photo:{
        width:96,
        height:80,
        borderRadius:10,
        marginRight:7,
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
        marginLeft:10,
        marginTop:10,
        width:350,
        padding:15,
        justifyContent:'space-between',

        
    },
    
    iconContainer:{
      padding:10,
    },
    photoHeading:{
        width:'100%',
        height:200,
       
    },
    info:{
      marginTop:20,
        // flexDirection:'row',
  
    },
    donnees:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:30,
        marginTop:15,
    },
    btnarrow:{
      backgroundColor:Colors.vert, 
      padding:10,
      marginLeft:5,
      position:'absolute',
      zIndex:10,
      marginTop:15,
      borderRadius:99
    }
})