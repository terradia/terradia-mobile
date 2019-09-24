import React, {Component} from 'react';
import { View, Image} from 'react-native';
import LoginForm from '../components/login/LoginForm'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Login.style'

class LoginScreen extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#8FDD3D', '#5CC04A']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}>
                <View style={styles.imageView}>
                    <Image
                        style={{flex:1, height: undefined, width: undefined}}
                        source={require('../assets/images/terradia.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.sloganView}>
                    <Image
                        style={{flex:1, height: undefined, width: undefined}}
                        source={require('../assets/images/slogan.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.container}>
                    <LoginForm />
                </View>

            </LinearGradient>
        )
    }
}

export default LoginScreen;