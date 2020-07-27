import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'MontserratBold',
        color: '#575757',
        fontSize: 26,
        marginLeft: 5
    },
    container: {
        width: (width * 90) / 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10 + 10
    },
    inputTextContainer: {
        height: 50,
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    inputText: {
        backgroundColor: 'white',
        height: 50,
        fontFamily: 'MontserratMedium',
        color: '#575757',
        fontSize: 15,
        borderBottomWidth: 1
    },
    forgotContainer: {
        justifyContent: 'flex-end',
        marginTop: 15,
        marginLeft: 120
    },
    forgotText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        fontFamily: 'MontserratMedium',
        color: '#575757'
    },
    loginText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'MontserratSemiBold'
    },
    sendCodeContainer: {
        backgroundColor: '#575757',

        marginTop: 40,
        width: width / 1.3,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    errorText: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 5,
        color: 'red',
        fontFamily: 'MontserratSemiBold'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    buttonChangeEmailContainer: {
        backgroundColor: 'red',
        marginTop: 15,
        width: '100%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    changeEmailText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'MontserratSemiBold'
    },
    inputLabelStyle: {
        color: '#b3b3b3',
        fontFamily: 'Montserrat'
    },
    inputStyle: {
        color: '#575757',
        fontFamily: 'Montserrat'
    },
});

export default styles;
