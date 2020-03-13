import React, { FunctionComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontFamily: 'MontserratBold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        width: '100%'
    }
});
declare interface HeaderCenterProps {
    title: string;
}

const HeaderCenter: FunctionComponent<HeaderCenterProps> = ({ title }) => {
    return (
        <>
            <Text style={styles.name}>{title ? title : ''}</Text>
        </>
    );
};

export default HeaderCenter;
