import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    modalContainer: {
        alignItems: 'flex-start',
        margin: 0,
        marginTop: 80,
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'MontserratBold'
    }
});

export default styles;