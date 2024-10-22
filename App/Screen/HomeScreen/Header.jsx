import { View, Text, StyleSheet, Image, TextInput} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useUser } from '@clerk/clerk-expo'
import { Fontisto } from '@expo/vector-icons';

export default function Header() {
    const{user, isLoading}=useUser();
  return user&&(
    <View style={styles.container}>
         <Text style={styles.titre}>On sort</Text>
            
    <View style={styles.searchContainer}>
        <TextInput placeholder='Rechercher' style={styles.searchBtn}/>
        <Fontisto name="search" size={24} color={Colors.dark} style={styles.btnSearch} />    
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    btnSearch:{
        backgroundColor:Colors.grisclair,
        padding:11,
        borderRadius:15,
        overflow:'hidden',
    },

    searchContainer:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:6,
        alignItems:'center'
},
    searchBtn:{
        backgroundColor:Colors.grisclair,
        padding:15,
        width:'88%',
        fontSize:15,
        borderRadius:15,
        paddingHorizontal:16,
        borderColor:Colors.gris,
    },
    container:{
        padding:20,
        paddingTop:40,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center'
    },
    titre:{
        fontSize:22, 
        fontFamily:'Righteous', 
        marginBottom:5,
        marginTop:10,
    }
    
})