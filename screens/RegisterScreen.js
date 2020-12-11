import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container , Content, Header, Form, Input, Item, Button, Label} from 'native-base';
import * as firebase from 'firebase'

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    registerUser = async (email,password) => {     
      console.log()
        try{
            await firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
        } catch (error){
            console.log(error.toString())
        }
    }

    return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
          />

        </Item>

        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password)=> setPassword(password)}
          />

        </Item>

        <Button style={{marginTop:10}}
        full
        rounded
        primary
        onPress={()=>registerUser(email,password)}
        >
          <Text>Register</Text>
        </Button>
      </Form>
      <Text style={{textAlign:'center'}}>Don't have account yet ? <Text style={styles.link} onPress={()=>navigation.navigate('Login')}>Login Here!</Text></Text>
    </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding:10
    },
    link:{
      alignItems:'center',
      color:'blue',
      fontStyle:'italic',
      fontSize:12
    }
  });
  