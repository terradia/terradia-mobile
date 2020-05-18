import React, { FunctionComponent, useRef } from 'react';
import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import LoginForm from '../../components/login/LoginForm';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Login.style';
import Preload from './Preload';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

declare interface LoginScreenProps {
    navigation?: any;
}

const LoginScreen: FunctionComponent<LoginScreenProps> = ({ navigation }) => {
    const preloadRef = useRef(null);
    const { goBack } = useNavigation();

    const navigateRegister = (): void => {
        const { navigate } = navigation;
        navigate('Register');
    };

    const successLogin = (): void => {
        preloadRef.current.preload();
    };

    return (
        <LinearGradient
            colors={['#8FDD3D', '#5CC04A']}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <SafeAreaView>
                    <TouchableOpacity
                        onPress={(): boolean => goBack()}
                        style={{ marginLeft: 20 }}
                    >
                        <Feather
                            name="arrow-left"
                            size={26}
                            style={{ color: 'white' }}
                        />
                    </TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image
                            style={{
                                flex: 1,
                                height: undefined,
                                width: undefined
                            }}
                            source={require('../../assets/images/terradia.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.sloganView}>
                        <Text style={styles.subTitle}>
                            L’application qui facilite l’accès aux produits
                            locaux
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <LoginForm
                            navigateRegister={navigateRegister}
                            navigateHome={successLogin}
                        />
                    </View>
                    <Preload ref={preloadRef} />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default LoginScreen;
