import React, { FunctionComponent, useRef } from 'react';
import { View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../../components/login/LoginForm';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Login.style';
import Preload from './Preload';

declare interface LoginScreenProps {
    navigation?: any;
}

const LoginScreen: FunctionComponent<LoginScreenProps> = ({ navigation }) => {
    const preloadRef = useRef(null);
    const navigateRegister = (): void => {
        const { navigate } = navigation;
        navigate('Register');
    };

    const successLogin = (): void => {
        console.log("Prelaod");
        preloadRef.current.preload();
    };

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
            <LinearGradient
                colors={['#8FDD3D', '#5CC04A']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.imageView}>
                    <Image
                        style={{ flex: 1, height: undefined, width: undefined }}
                        source={require('../../assets/images/terradia.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.sloganView}>
                    <Image
                        style={{ flex: 1, height: undefined, width: undefined }}
                        source={require('../../assets/images/slogan.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.container}>
                    <LoginForm
                        navigateRegister={navigateRegister}
                        navigateHome={successLogin}
                    />
                </View>
                <Preload ref={preloadRef} />
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
