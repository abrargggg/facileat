import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sliders from './Sliders'

const HomeScreen = () => {
  //supprimer le style margintop 100 et padding
  return (
    <View style={{marginTop:100,padding:20}}>
      <Sliders/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})