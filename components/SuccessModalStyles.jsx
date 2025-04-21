import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
        gap: 20,
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})