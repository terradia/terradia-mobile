import React, {Component} from 'react';
import { View, Image} from 'react-native';
import LoginForm from '../components/login/LoginForm'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Login.style'

class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }

    navigateRegister() {
        const {navigate} = this.props.navigation;
        navigate('Register');
    }

    navigateHome() {
        const {navigate} = this.props.navigation;
        console.log("avant navigate!");
        navigate('Main');
    }

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
                    <LoginForm
                        navigateRegister={this.navigateRegister.bind(this)}
                        navigateHome={this.navigateHome.bind(this)}
                    />
                </View>

            </LinearGradient>
        )
    }
}

export default LoginScreen;