import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {

    const navigation = useNavigation();
    const[TabContent, setTabContent]= useState();
    useEffect(()=>{
        getContent()
    },[])
    const getContent =()=>{
        GlobalApi.getCategories().then(
            resp=>{
                setTabContent(resp.categories)
            }
        )}

  return (
   <View >
    
      
    <FlatList
    data={TabContent}
    style={styles.list}
    numColumns={6}
    showsHorizontalScrollIndicator={false}
    scrollEnable={false}
    
    renderItem={({item, index})=>(
        <TouchableOpacity 
        style={styles.container}
        onPress={()=>navigation.push('liste-restaurants',{maCat:item.name})}
        >
          <Text style={{fontFamily:'Larsseit-Bold', marginTop:10}}>{item.name}</Text>
        </TouchableOpacity>
    )}/>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    heading:{
        fontSize:16, 
        fontFamily:'Larsseit-Bold', 
        marginBottom:10,
        marginTop:10,
    },
 
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.gris,
        padding:10,
        paddingTop:4,
        borderRadius:30,
        marginLeft:5,
    },

    list:{
       display:'flex',
       flexDirection:'row',
    }

})