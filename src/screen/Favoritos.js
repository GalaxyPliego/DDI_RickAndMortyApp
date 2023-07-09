import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getFavoriteApi } from '../api/favorito'
import { fetchDataFav } from '../api/RickAndMortyAPI'
import RickAndMortyListFav from '../components/RickAndMortyListFavs';
import useAuth from '../hooks/UseAuth'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {
  const navigation = useNavigation();
  const [personajes, setPersonajes] = useState([])
  const { auth } = useAuth();
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   if (auth) {
  //     (async () => {
  //       const response = await getFavoriteApi();
  //       console.log("Este es el response de favoritos --> * ", response)
  //       await fetchDataFav(response);
  //       setCharacters(response);
  //       console.log('Listado de favos', response)
  //     })()
  //   }
  // }, [auth])

    const checkFavorito = async () => {
        const response = await getFavoriteApi()
        console.log(response)
    }

    const goToLogin = () => {
      navigation.navigate("Account")
    }

    return (
      <SafeAreaView style={styles.container}>
        {auth ? <RickAndMortyListFav/> : 
        <>
          <Text style={styles.text} >Debes iniciar sesión para ver la lista de favoritos :D </Text>
          <TouchableOpacity style={styles.btnLogin} onPress={goToLogin}>
            <Text style={styles.textBtnLogin}>Iniciar sesión</Text>
          </TouchableOpacity>
        </>
        
        }
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#03042A',
        height: '100%',
    },
    text: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
    btnLogin: {
      backgroundColor: 'rgba(29, 245, 92, .4)',
      padding: 16,
      borderRadius: 10,
      marginHorizontal: 12,
      marginTop: 36,
      alignItems: 'center',
      justifyContent: 'center',

  },
  textBtnLogin: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
  },
  })