import React,{useState, useEffect} from 'react'
import { View, Text , StyleSheet, SafeAreaView, Button} from 'react-native'
import * as firebase from 'firebase'


export default function HomeScreen() {
    const [user,setUser] = useState({})
    useEffect(()=>{      
        const subscriber = firebase.auth().onAuthStateChanged((user)=>{        
            if(user != null){
                setUser(user)
            }
        })
        return subscriber;
    },[])

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>{user.email}</Text>
                <Button
                title="Log out"
                onPress={()=>{
                    firebase.auth().signOut();
                }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent: 'center'
    },
});
