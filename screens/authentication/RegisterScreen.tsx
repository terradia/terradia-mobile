import React, { FunctionComponent, useRef } from 'react';
import {
    View,
    Image,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen: FunctionComponent<any> = props => {
    const preloadRef = useRef(null);
    const successLogin = (): void => {
        preloadRef.current.preload();
    };
    const { goBack } = useNavigation();

    return (
        <LinearGradient
            colors={['#8FDD3D', '#5CC04A']}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <KeyboardAwareScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        onPress={(): boolean => goBack()}
                        style={{ marginLeft: 20 }}
                    >
                        <Feather
                            name="chevron-left"
                            size={28}
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
                <Preload ref={preloadRef} />
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default RegisterScreen;
