import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 60,
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
    rightText: {
        marginRight: 5
    },
    rightContainer: {
        flexDirection: 'row'
    }
});

export default styles;