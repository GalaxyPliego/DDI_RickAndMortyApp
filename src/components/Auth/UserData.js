import { View, Text, SafeAreaView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import starsBack from '../../assets/starsBack.png'
import Profile from '../../assets/Profile.png'
import useAuth from '../../hooks/UseAuth'
import iconLogout from '../../assets/iconLogout.png'
import { totalFavoritos } from '../../api/favorito'


export default function Account( props ) {
  const [favoritos, setFavoritos] = useState(0);
  const { auth, logout } = useAuth();
  console.log( "User Detail name --> " + auth.firstName)
  console.log( "User Detail --> " + auth.guerrero)

  useFocusEffect(
    useCallback(()=>{
      const obtenerFavoritos= async () =>{
        const total=await totalFavoritos();
          setFavoritos(total )
      };
      obtenerFavoritos();
    })
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageBack} source={starsBack}/>
      <Image style={styles.imageBack2} source={starsBack}/>
      <View style={styles.containerProfileImage}>
        <Image style={styles.profileImage} source={Profile}/>
      </View>
      <View style={styles.containerProfileName}>
        <ItemMenu title="Username" text={auth.username}/>
        <Text style={styles.nameText}>{auth.firstName} {auth.lastName}</Text>
        <Text style={styles.emailText}>{auth.guerrero} - Level {auth.level}</Text>
        <Text style={styles.emailText}>Favoritos: {favoritos}</Text>
      </View>
      <View style={styles.containerProfileDetails}>
        <Text style={styles.labels}>Username</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>{auth.username}</Text>
        </View>
        <Text style={styles.labels}>Email</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>{auth.email}</Text>
        </View>
        <Text style={styles.labels}>Phone</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>{auth.phone}</Text>
        </View>
      </View>
      
        <TouchableOpacity title="Cerrar sesión" style={styles.btnLogin} onPress={logout}><Image source={iconLogout} style={styles.iconLogout}/></TouchableOpacity>
    </SafeAreaView>
  )
}

function ItemMenu ( props ) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuText}>{title}</Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        backgroundColor: '#03042A',
        height: '100%',
    },
    imageBack: {
      position: 'absolute',
      width: 420,
    },
    imageBack2: {
      position: 'absolute',
      bottom: 0,
      width: 420,
    },
    containerProfileImage: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 400,
    },
    containerProfileName: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profileImage: {
      width: 350,
      height: 330,
    },
    nameText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    emailText: {
      color: '#fff',
      fontSize: 16,
      
    },
    containerProfileDetails: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    labels: {
      //color un poco gris para los labels
      color: '#AAAAAA',
      fontSize: 16,
    },
    containerText: {
      backgroundColor: 'rgba(29, 245, 92, 0.2)',
      padding: 10,
      borderRadius: 25,
    },
    text: {
      color: '#fff',
      fontSize: 16,

    },
    btnLogin: {
      backgroundColor: 'red',
      borderRadius: 100,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 20,

  },
  textBtnLogin: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
  },
  iconLogout: {
    width: 30,
    height: 30,
    transform: [{ rotate: '180deg'}]
  }
})