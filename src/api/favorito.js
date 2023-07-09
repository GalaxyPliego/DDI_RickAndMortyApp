import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'
import { View, Text } from 'react-native'
import React from 'react'

export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        //AsyncStorage.clear();
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
    }
}

export const addFavoriteApi = async (id) => {
    try {
        let favorites = await getFavoriteApi();
        if (favorites === undefined) {
            favorites = []
        } else {
            favorites.push(id);
        }
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
}

//Crear la función que verifica si un personaje está en favoritos
export const isFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
}

//Crear la función que elimina un personaje de favoritos
export const removeFavoriteApi = async (id) => {
    try {
        let favorites = await getFavoriteApi();
      if (favorites !== null) {
        //let favorites = JSON.parse(favorites);
        favorites = favorites.filter(favoriteId => favoriteId !== id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));

      }
    } catch (error) {
      console.error(error);
    }
}

export default function favorito() {
    return (
        <View>
        <Text>favorito</Text>
        </View>
    )
}

export const totalFavoritos = async () => {
    try{
        const favorites = await getFavoriteApi();
        console.log("totalFavoritos "+favorites.length);
        return favorites.length;
    }catch(e){
        console.log(e);
        return 0;
    }
}