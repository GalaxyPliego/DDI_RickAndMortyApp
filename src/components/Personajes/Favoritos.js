import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi, getFavoriteApi } from '../../api/favorito'
import IconFav from '../../assets/iconFav.png'
import { AntDesign } from '@expo/vector-icons';
import iconFavHover from '../../assets/iconFavHover.png'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useFocusEffect } from '@react-navigation/native';


export default function Favoritos( props ) {
  const  { id, name } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadFavorite, setReloadFavorite] = useState(false);

  useFocusEffect(
    useCallback(()=>{
      const loadAndSetData = async () => {
        const response = await isFavoriteApi(id);
        console.log("Response: " + response);
        if (response) setIsFavorite(true)
        else setIsFavorite (false)
      };
  
      loadAndSetData();
    })
  )

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(id);
      if (response) setIsFavorite(true)
      else setIsFavorite (false)
    })()
  }, [id, reloadFavorite])

  const addFavorite = async () => {
    try {
      await addFavoriteApi(id);
      setReloadFavorite(true);
      checkFavorito();
      console.log("Añadido a favorito")
    } catch (error) {
      console.log(error);
    }
  }

  const removeFavorite = async () => {
    try {
      await removeFavoriteApi(id);
      console.log("Personaje eliminado de favoritos")
      setReloadFavorite(false);
      checkFavorito();

    }catch (error) {
      console.log(error);
    }
  }

  const checkFavorito = async () => {
    const response = await getFavoriteApi()
    // Actualizar el estado de favoritos

    console.log(response)
}

  return (
    <TouchableOpacity onPress={isFavorite ? removeFavorite : addFavorite}>
      <AntDesign 
        name={isFavorite ? "heart" : "hearto"}
        size={30}
        color="#fff"
        solid={isFavorite}
      />
    </TouchableOpacity>
  )
}

styles = StyleSheet.create({
  container: {
      backgroundColor: '#03042A',
      height: '100%',
  }
})