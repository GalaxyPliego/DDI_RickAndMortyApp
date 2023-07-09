import { StyleSheet, FlatList, Text, SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import RickAndMortyCard from './RickAndMortyCard';
import { getFavoriteApi } from '../api/favorito'
import { fetchFavorites } from '../api/RickAndMortyAPI';

export default function RickAndMortyListFavs() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);

    useFocusEffect(
      useCallback(()=>{
        const loadAndSetData = async () => {
          const favoritos = await getFavoriteApi();
          const resultSet = await fetchFavorites(favoritos)
          setCharacters(resultSet);
          setLoading(false);
          console.log("characters")
          console.log(characters)
        };
    
        loadAndSetData();
      })
    );


    return (
      <>
      
          <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RickAndMortyCard characters={item} />}
            contentContainerStyle={styles.container}
            onEndReachedThreshold={0.1}
            //ListFooterComponent={nextUrl && <ActivityIndicator size="large" color="#0000ff" style={styles.spiner} />}
            />
            </>
      )
}

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