import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        paddingLeft: 10
    },
    textsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    companyName: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#575757'
    },
    companyLocation: {
        fontFamily: 'MontserratLight',
        fontSize: 20,
        marginLeft: 5,
        color: '#575757'
    },
    deliveryInformationLabel: {
        fontFamily: 'MontserratLight',
        fontSize: 14,
        position: 'absolute',
        left: -30
    },
    informationContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    informationTextContainer: {
        marginTop: 10
    },
    descriptionContainer: {
        marginTop: 20,
        marginLeft: 10
    },
    textSpacer: {
        marginTop: 14
    },
    informationTextStreet: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: '#575757'
    },
    informationTextAddr: {
        fontFamily: 'MontserratLight',
        fontSize: 14,
        color: '#575757'
    },
    informationTextComment: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        color: '#8FDD3D'
    }
});

export default styles;
