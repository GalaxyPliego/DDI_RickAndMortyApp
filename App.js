import 'react-native-gesture-handler';
import React,{useCallback,useEffect,useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import AuthProvider from './src/context/AuthContext';

export default function App() {
//   const [appIsReady,setAppIsReady] = useState(false);

//   useEffect( () => {
//     async function show_splash_screen(){
//     try{
//         // our api calls will be here.
//         new Promise(resolve => setTimeout(resolve,5000)); // wait for 5 secs
//     }catch(e){
//         console.warn(e);
//     }finally{
//         setAppIsReady(true); // application to render.
//     }
//     }
//     show_splash_screen();
// });

// const onLayoutRootView = useCallback(async () => {
//   if(appIsReady){
//   // hide the splash screen.
//   await SplashScreen.hideAsync();
//   }
// },[appIsReady]);

  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <Navigation/>      
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03042A',
  },
});
