import { SafeAreaView, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import RickAndMortyCard from './RickAndMortyCard';
import axios from 'axios'

const API_URL =   'https://rickandmortyapi.com/api/character';

export default function RickAndMortyList(props) {
    const [loading, setLoading] = useState(false);
    const [nextUrl, setNextUrl] = useState(null)
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      loadMoreData();
    }, []);
  
    const loadMoreData = async () => {
      if (loading) {
        return;
      }
  
      setLoading(true);
  
      const resultSet = await fetchData(page); 
      setCharacters(prevCharacters => [...prevCharacters, ...resultSet.results]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setCharacters(res.data.results)
        setNextUrl(res.data.info.next)
      }catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchDataFav = async (personajesFavs) => {
  //     try {
  //       const listaPersonajesFavs = personajesFavs.join(', ');
  //       console.log(listaPersonajesFavs)
  //       console.log('Esta es la cadena de la api ---> ' + API_URL+`/${listaPersonajesFavs}`)
  //       const res = await axios.get(API_URL+`/${listaPersonajesFavs}`);
  //       setCharacters(res.data.results)
  //       setNextUrl(res.data.info.next)
  //     }catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchDataFav()
  // }, [])


  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList 
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <RickAndMortyCard characters={item}/>}
        contentContainerStyle={styles.container}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={nextUrl && <ActivityIndicator size="large" color="#0000ff" style={styles.spiner} />}
        />
    </SafeAreaView>
  )
}

const fetchData = async (page) => {
  try {
    const response = await axios.get(API_URL + `/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#03042A',
  },
    container: {
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: '#03042A',
    },
    image: {
      position: 'absolute',
    },
    image2: {
      position: 'absolute',
      bottom: 0,
    },
    flatList: {
      position: 'absolute',
      width: '100%',
    },
    spiner: {
        marginTop: 20,
        marginBottom: 100,
        color: '#fff',
    }
})