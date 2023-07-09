import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
//import {API_URL} from '@env'
import axios from 'axios'
import RickAndMortyList from '../components/RickAndMortyList';

const API_URL =   'https://rickandmortyapi.com/api/character';

export default function RickAndMortyAPI( props ) {
    const { navigation } = props;
    const [characters, setCharacters] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const prevCharacters = characters;

  // useEffect(() => {
  //     loadMoreData();
  //   }, []);
    
  //   const loadMoreData = async () => {
  //     if (loading) {
  //       return;
  //     }

  //     setLoading(true);

  //     try{
  //       if (nextUrl) {
  //         const response = await fetchData(page);
  //         const newCharacters = response.data.results;
  //         setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
  //         setPage(prevPage => prevPage + 1);
  //         setLoading(false);
  //       }

  //     } catch (err) {
  //       console.log(err)
  //     }
  // }

  return (
    <View>
      <RickAndMortyList characters={characters} navigation={navigation} loadMoreData={loadMoreData} nextUrl={nextUrl}/>
    </View>
  )
}

export const fetchData = async (page) => {
  try {
    const response = await axios.get(API_URL + `/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};


export const fetchFavorites = async (favoritos) => {
  try {
    const URL_FAVORITOS=API_URL + '/'+favoritos
    console.log(URL_FAVORITOS);
    const response = await axios.get(URL_FAVORITOS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};