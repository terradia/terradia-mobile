import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    mainContainer: {
        overflow: 'hidden',
        flex: 1
    },
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    textsContainer: {
        width: '70%'
    },
    textsColor: {
        color: '#575757'
    },
    productTitle: {
        fontSize: 18
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
