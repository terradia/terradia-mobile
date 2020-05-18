import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    modalContainer: {
        alignItems: 'flex-start',
        margin: 0,
        marginTop: 40,
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    header: {
        width: '85%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'MontserratBold'
    }
});

export default styles;
