import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topContainer: {
        marginTop: 10
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    countText: {
        width: 100,
        textAlign: 'center',
        fontFamily: 'MontserratLight',
        color: '#5CC04A',
        fontSize: 35
    },
    bottomContainer: {
        height: 80,
        backgroundColor: '#5CC04A',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20
    },
    texts: {
        color: 'white',
        fontSize: 20
    },
    rightContainer: {
        flexDirection: 'row'
    },
    rightText: {
        marginRight: 5
    }
});

export default styles;
