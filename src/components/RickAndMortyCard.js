import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import iconFemale from '../assets/iconFemale.png'
import iconMale from '../assets/iconMale.png'
import iconDesc from '../assets/iconDesc.png'
import useAuth from '../hooks/UseAuth'
import Favoritos from './Personajes/Favoritos';


export default function RickAndMortyCard(props) {
  const { auth } = useAuth();
    const { characters } = props;
    const navigation = useNavigation();
    const goToPersonaje = () => {
      if (navigation.getState().routes[navigation.getState().index].name === 'Rickandmorty') {
        navigation.navigate('Personaje', {id: characters.id, name: characters.name, image: characters.image, gender: characters.gender, species: characters.species, status: characters.status, origin: characters.origin.name, location: characters.location.name, episodes: characters.episode.length })
      }else if ( navigation.getState().routes[navigation.getState().index].name === 'Favoritos' ) {
        navigation.navigate('PersonajeFav', {id: characters.id, name: characters.name, image: characters.image, gender: characters.gender, species: characters.species, status: characters.status, origin: characters.origin.name, location: characters.location.name, episodes: characters.episode.length })
      }
    }
    
  return (
    <TouchableWithoutFeedback onPress={goToPersonaje}>
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: characters.image}}/>
          {/* Validación si la sesión (auth) esta iniciada que se muestre el iconFav y si no que desaparezca*/}
          <TouchableOpacity style={styles.iconFav}>
            {auth && <Favoritos id={characters.id} name = { characters.name }/>}

          </TouchableOpacity>
          <Text style={styles.number}>#{`${characters.id}`.padStart(3, 0)}</Text>
          <View style={styles.containerInfoCard}>
            
            <View style={styles.containerText}>
              <Text style={styles.name} numberOfLines={3}>{characters.name}</Text>
            </View>
            <Text style={styles.species}>{characters.species}</Text>
            {characters.gender === 'Female' && (
              <Image style={styles.iconGenderFemale} source={iconFemale}/>
            )}
            {characters.gender === 'Male' && (
              <Image style={styles.iconGenderMale} source={iconMale}/>
            )}
            {characters.gender === 'unknown' && (
              <Image style={styles.iconGenderUnknow} source={iconDesc}/>
            )}
          </View>
            
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
   card: {
    flexGrow: 1,
    padding: 5,
    height: 230,
   },
   image: {
    width: '100%',
    height: '100%',
    
    bottom: 10,
    borderRadius: 10,
  },
  containerInfoCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 5,
    marginBottom: 15,
    padding: 8,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 60,
    backgroundColor: 'rgba(3, 4, 42, 0.6)',

  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
  },
  number: {
    position: 'absolute',
    left: 15,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerText: {
    // View para que el nombre no se desborde
    width: 130,
    height: 23,
  },
  species: {
    color: 'white',
  },
  iconGender: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 28,
    width: 28,
  },
  iconGenderFemale: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 28,
    width: 20,
    marginTop: 5
  },
  iconGenderMale: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 28,
    width: 28,
    marginTop: 10
  },
  iconGenderUnknow: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 29,
    width: 19,
    marginTop: 9
  },
  iconFav: {
    position: 'absolute',
    right: 10,
    height: 32,
    width: 32,
  }

})