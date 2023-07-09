import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import RickAndMortyAPI from '../api/RickAndMortyAPI'

export default function Rickandmorty( props ) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
        <RickAndMortyAPI navigation={navigation}/>
    </SafeAreaView>
  )
}

styles = StyleSheet.create({
  container: {
      backgroundColor: '#1DF55C',
      height: '100%',
  }
})