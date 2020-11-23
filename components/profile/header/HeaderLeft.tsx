import React, { FunctionComponent } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import getUser from '../../../graphql/getUser.graphql';
import { useQuery } from '@apollo/react-hooks';
import { GetUserData } from '@interfaces/User';
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'MontserratBold',
        fontSize: 30,
        color: 'white',
        marginLeft: 15
    }
});

const HeaderLeft: FunctionComponent<any> = () => {
    const { data: me } = useQuery<GetUserData>(getUser);
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigate('Account');
            }}
        >
            <Avatar
                size={40}
                rounded
                title={me.getUser.firstName[0] + me.getUser.lastName[0]}
                source={{
                    uri:
                        'https://terradia-bucket-assets.s3.eu-west-3.amazonaws.com/' +
                        me.getUser.avatar
                }}
                containerStyle={{ marginLeft: 10 }}
            />
            <Text style={styles.name}>
                {me && me.getUser && me.getUser.firstName}
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderLeft;
