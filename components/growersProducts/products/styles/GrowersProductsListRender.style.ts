import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        overflow: 'hidden',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    textsContainer: {
        width: '70%'
    },
    textsColor: {
        color: '#575757',
        fontFamily: 'Montserrat'
    },
    productTitle: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold'
    },
    productDescription: {
        fontFamily: 'MontserratLight'
    },
    priceTag: {
        fontSize: 24
    },
    spacer: {
        paddingTop: 5
    },
    priceContainer: {
        paddingTop: 5,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    imageContainer: {
        justifyContent: 'center',
        width: '30%',
        alignItems: 'center'
    },
    image: {
        borderRadius: 20
    }
});

export default styles;
