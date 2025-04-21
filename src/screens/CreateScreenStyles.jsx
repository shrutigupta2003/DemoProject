import { StyleSheet } from "react-native";
import { colorPicker } from "../../constants/colors";

export const styles = StyleSheet.create({
    Container: {
        paddingVertical: 15,
        gap: 10,
    },
    Input: {
        borderWidth: 1.5,
        borderColor: colorPicker.primaryGreen,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7
    },
    AddButton: {
        backgroundColor: colorPicker.lightPurpleColor,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BtnText: {
        color: "white",
        fontWeight: "500",
        fontSize: 16
    },
    AllItemContainer: {
        marginTop: 10
    },
    HeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    HeadingText: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 10
    },
    GapContainer: {
        gap: 10,
    }, ToggleButton: {
        padding: 10,
        borderRadius: 6,
        marginVertical: 10,
        alignItems: 'center'
    },
    ToggleButtonText: {
        color: '#fff',
        fontSize: 16
    },
    Completed: {
        backgroundColor: 'green'
    },
    NotCompleted: {
        backgroundColor: 'red'
    }
})