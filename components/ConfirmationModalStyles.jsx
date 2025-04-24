import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Main: {
        flex: 1,
    },
    ButtonView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    CenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
    },
    ModalText: {
        fontSize: 30,
        marginBottom: 20
    },
    ButtonContainer: {
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})