import React, { FunctionComponent, useRef } from 'react';
import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import styles from './styles/Login.style';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterForm from '../../components/register/RegisterForm';
import Preload from './Preload';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';

const RegisterScreen: FunctionComponent<any> = props => {
    const preloadRef = useRef(null);
    const successLogin = (): void => {
        preloadRef.current.preload();
    };
    const { navigate } = useNavigation();

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
            <LinearGradient
                colors={['#8FDD3D', '#5CC04A']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <SafeAreaView>
                    <TouchableOpacity
                        onPress={(): boolean => navigate('Login')}
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
                        <RegisterForm navigateHome={successLogin} />
                    </View>
                </SafeAreaView>
            </LinearGradient>
            <Preload ref={preloadRef} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
