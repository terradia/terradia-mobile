import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputs: {
        fontSize: 17
    },
    titlesText: {
        fontSize: 20,
        fontFamily: 'MontserratSemiBold'
    },
    mainAddressContainer: {
        height: 32,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1
    },
    mainAddressText: {
        color: '#8FDD3D',
        fontFamily: 'Montserrat',
        fontSize: 17
    },
    containers: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionsTexts: {
        marginLeft: 5,
        fontSize: 20
    },
    confirmButton: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#8FDD3D'
    },
    mainContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between'
    },
    applyButtonContainer: {
        flex: 0.1,
        alignItems: 'center'
    }
});

export default styles;
