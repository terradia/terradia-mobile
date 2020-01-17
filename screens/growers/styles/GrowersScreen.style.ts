import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: 'white',
        flex: 1
    },
    contentContainer: {
        flexGrow: 1,
        marginBottom: '10%',
        color: 'red'
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: '30%',
        fontFamily: 'MontserratSemiBold'
    },
    innerContainerStyle: {
        marginBottom: '10%'
    }
});

export default styles;