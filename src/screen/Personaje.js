import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import starsBack from '../assets/starsBack.png'
import planet1 from '../assets/planet1.png'
import planet2 from '../assets/planet2.png'
import planet3 from '../assets/planet3.png'
import portal from '../assets/Portal.png'
import LocationIcon from '../assets/LocationIcon.png'
import OriginIcon from '../assets/OriginIcon.png'

export default function Personaje( props ) {
    const { navigation, route: {params} } = props;
  return (
    <View style={styles.background}>
      <Image style={styles.imageBack} source={starsBack}/>
      <Image style={styles.imageBack2} source={starsBack}/>
      <Image style={styles.planet1} source={planet1}/>
      <Image style={styles.planet2} source={planet2}/>
      <Image style={styles.planet3} source={planet3}/>
      <Image style={styles.portal} source={portal}/>
      <View style={styles.containerInfo}>
        <View style={styles.containerTextTop}>
          <Text style={styles.textStatus}>{params.status}</Text>
          <Text style={styles.textId}>{params.id}</Text>
        </View>
        <Image style={styles.imagePersonaje} source={{uri: params.image}}/>
        <View style={styles.containerTextButton}>
          <Text style={styles.textName}>{params.name}</Text>
          <Text style={styles.textSpecies}>{params.species}</Text>
          <Text style={styles.textGender}>{params.gender}</Text>
        </View>
      </View>
      <View style={styles.containerCardInfo}>  
        <LinearGradient colors={['rgba(33, 201, 238, 0.2)', 'rgba(29, 245, 92, 0.2)']} style={styles.contentCardInfo}>
          <View style={styles.containerEpisodes}>
            <Text style={styles.textEpisodes}>Episodes: {params.episodes}</Text>
          </View>
          <View style={styles.containerOrigin}>
            <View style={styles.contentOrigin}>
              <Image style={styles.imageOrigin} source={OriginIcon}/>
              <Text style={styles.textTitleOrigin}>Origin</Text>
            </View>
            <Text style={styles.textOrigin}>{params.origin}</Text>
          </View>
          <View style={styles.containerLocation}>
            <View style={styles.contentLocation}>
              <Image style={styles.imageLocation} source={LocationIcon}/>
              <Text style={styles.textTitleLocation}>Location</Text>
            </View>
            <Text style={styles.textLocation}>{params.location}</Text>
          </View>
        </LinearGradient>      
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 50,
    backgroundColor: '#03042A',
    height: '100%',
    padding: 20,
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
  planet1: {
    position: 'absolute',
    right: 8,
    top: 50,
  },
  planet2: {
    position: 'absolute',
    left: -18,
    top: 20,
  },
  planet3: {
    position: 'absolute',
    right: 180,
    top: 50,
  },
  portal: {
    position: 'absolute',
    left: -190,
  },
  containerInfo: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 75,
  },
  imagePersonaje: {
    width: 200,
    height: 200,
    borderRadius: 80,
  },
  containerTextTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
    
  },
  containerTextButton: {
    flex: 1,
    alignItems: 'center',
    maxWidth: 190,

  },
  textStatus: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  textSpecies: {
    fontSize: 16,
    letterSpacing: 2,
  },
  textGender: {
    fontSize: 16,
    letterSpacing: 2,
  },
  containerCardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  contentCardInfo: {
    height: 200,
    borderWidth: 5,
    borderColor: '#1DF55C',
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingHorizontal: 24,
    position: 'relative',
    paddingTop: 40,
  },
  containerEpisodes: {
    position: 'absolute',
    right: -5,
    top: -5,
    borderWidth: 5,
    width: 180,
    height: 45,
    justifyContent: 'center',
    paddingLeft: 16,
    borderColor: '#1DF55C',
    borderBottomLeftRadius: 10,
  },
  textEpisodes: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  contentOrigin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageOrigin: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textTitleOrigin: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
  textOrigin: {
    fontSize: 15,
    letterSpacing: 2,
    color: 'white',
  },
  contentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imageLocation: {
    width: 18,
    height: 20,
    marginRight: 10,
  },
  textTitleLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
  textLocation: {
    fontSize: 15,
    letterSpacing: 2,
    color: 'white',
  }
})