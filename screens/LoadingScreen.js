import React, {useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'

export default function LoadingScreen({navigation}) {
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if (user){
                navigation.navigate('App')
            } else {
                navigation.navigate('Login')
            }
        })
    },[])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
});
