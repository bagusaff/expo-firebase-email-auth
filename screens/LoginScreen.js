import React, {useState} from 'react'
import { Text,StyleSheet } from 'react-native'
import { Container ,  Form, Input, Item, Button, Label} from 'native-base';
import * as firebase from 'firebase'

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch (error){
            console.log(error.toString())
        }
    }

    toRegister = () => {
      navigation.navigate('Register')
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
        success
        onPress={()=>loginUser(email,password)}
        >
          <Text>Login</Text>
        </Button>
      </Form>
      <Text style={{textAlign:'center'}}>Don't have account yet ? <Text style={styles.link} onPress={()=>navigation.navigate('Register')}>Register Here!</Text></Text>
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
  