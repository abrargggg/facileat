import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Categories from './Categories'
import Restaurants from './Restaurants'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../../Utils/Colors'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page}>
    <Header/>
    <View style={{padding:10}}>
    <Categories/>
    <Restaurants/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:Colors.blanc,
  }
})