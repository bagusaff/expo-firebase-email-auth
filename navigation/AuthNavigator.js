import {createSwitchNavigator} from 'react-navigation'
import LoadingScreen from '../screens/LoadingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
const AuthNavigator = createSwitchNavigator(
    {
    Loading: {screen:LoadingScreen},
    Login: {screen:LoginScreen},
    Register: {screen:RegisterScreen}
    },
    {
    initialRouteName:'Loading'
    }
)
export default AuthNavigator;