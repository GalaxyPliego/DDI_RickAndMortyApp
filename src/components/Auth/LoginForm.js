import { View, Text, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { user, userDetail } from '../../utils/userDb'
import Nave from '../../assets/naveSpace.png'
import useAuth from '../../hooks/UseAuth'


export default function LoginForm() {
    const {login } = useAuth()

    const [error, setError] = useState("")

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validationOnChange: false,
        onSubmit: (formData) => {
            const {username, password} = formData
            if(username!== user.username || password !== user.password) {
                console.log('Usuario o contraseña incorrecta')
            } else {
                console.log('Login correcto')
                console.log(userDetail)
                login(userDetail)
            }
            console.log('Formulario enviado')
            console.log(formData)
        }
    })

    function initialValues () {
        return {
            username: '',
            password: ''
        }
    }

    function validationSchema() {
        return {
            username: Yup.string().required("El nombre de usuario es obligatorio"),
            password: Yup.string().required('La contraseña es obligatoria')
        }
    }
  return (
    <View>
      <Image style={styles.imageNave} source={Nave}/>

      <TextInput placeholder="Nombre de usuario" style={styles.input} autoCapitalize='none' value={formik.values.username} onChangeText={(text) => formik.setFieldValue('username', text)}></TextInput>
      <TextInput placeholder="Contraseña" style={styles.input} autoCapitalize='none' secureTextEntry={true} value={formik.values.password} onChangeText={(text) => formik.setFieldValue('password', text)}></TextInput>
      <TouchableOpacity title="Iniciar sesión" style={styles.btnLogin} onPress={formik.handleSubmit}><Text style={styles.textBtnLogin}>Iniciar sesión</Text></TouchableOpacity>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: 'rgba(29, 245, 92, 1)',
        backgroundColor: 'rgba(29, 245, 92, 0.3)',
        color: 'white'
    

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
    error: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
        
    },
    imageNave: {
        height: 325,
        width: 270,
        alignSelf: 'center',
    }
    
})