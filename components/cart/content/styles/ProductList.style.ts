import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#575757',
        marginBottom: 30
    },
    itemGreen: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        color: '#8FDD3D'
    },
    bottomItemDivider: {
        height: 1,
        width: '100%',
        backgroundColor: '#C7C7CC'
    },
    total: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#575757'
    },
    totalPrice: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#8FDD3D',
        marginLeft: 10
    },
    priceContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 30
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10
    }
});

export default styles;
