import { StyleSheet } from 'react-native';

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

export default StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    mainContainer: {
        height: 140 + 20 + 10,
        marginBottom: 5,
        marginTop: 5
    },
    absoluteView: {
        position: 'absolute',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    rates: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNumberRates: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat'
    },
    rating: {
        backgroundColor: 'transparent'
    },
    wrapper: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        position: 'relative',
        height: 140
    },
    brightness: {
        flex: 1,
        width: '100%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'absolute',
        borderRadius: 10
    },
    bottomView: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: 70,
        top: 140 - 60 + 20,
        left: 0,
        width: '100%',
        position: 'absolute',
        paddingLeft: 100 + 20
    },
    bottomElements: {
        flex: 1,
        marginRight: 10,
        justifyContent: 'space-evenly'
    },
    backgroundImage: {
        borderRadius: 10,
        height: 140
    },
    growerImage: {
        marginLeft: 20
    },
    growerImageContainer: {
        position: 'absolute',
        top: 50,
        zIndex: 10,
        width: '100%',
        flexDirection: 'row'
    },
    growerName: {
        marginLeft: 10,
        marginTop: 20,
        color: 'white',
        fontSize: 24,
        fontFamily: 'MontserratSemiBold'
    },
    discoverProducts: {
        marginLeft: 10,
        color: '#A1A1A1',
        fontWeight: '500',
        fontSize: 15,
        fontFamily: 'Montserrat'
    },
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: '#FFE732',
        fontFamily: 'MontserratSemiBold'
    },
    bottomInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomInformationDistance: {
        color: '#A1A1A1',
        fontSize: 15,
        fontFamily: 'Montserrat'
    }
});
