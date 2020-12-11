import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import AuthNavigator from './navigation/AuthNavigator'
import HomeScreen from './screens/HomeScreen'
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORA_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env'


//konfigurasi firebase dari file .env yang sudah dibuat
const firebaseConfig= {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORA_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId:APP_ID,
  measurementId:MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export default createAppContainer(
  
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: HomeScreen,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

