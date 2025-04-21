import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
    },
    modalText: {
        fontSize: 30,
        marginBottom: 20
    },
    buttonContainer: {
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})