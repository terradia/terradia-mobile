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
        color: '#575757',
        textAlign: 'center'
    },
    companyLocation: {
        fontFamily: 'MontserratLight',
        fontSize: 20,
        marginLeft: 5,
        color: '#575757'
    },
    deliveryInformationLabel: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5
    },
    informationContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    informationTextContainer: {
        width: '70%',
        justifyContent: 'space-evenly'
    },
    descriptionContainer: {
        marginLeft: 10,
        marginRight: 50
    },
    textSpacer: {
        marginTop: 5
    },
    informationTextStreet: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: '#575757',
        lineHeight: 20
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
    },
    mapStyle: {
        width: 130,
        height: 130,
        borderRadius: 10
    }
});

export default styles;
