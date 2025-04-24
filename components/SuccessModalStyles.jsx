import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    CenteredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
        gap: 20,
    },
    ButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})