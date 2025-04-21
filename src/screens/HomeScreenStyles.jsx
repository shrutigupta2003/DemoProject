import { StyleSheet } from "react-native";
import { colorPicker } from "../../constants/colors";

export const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: colorPicker.whiteBackgroundColor,
        padding: 15,
    },
    Title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colorPicker.blackTextColor,
    },
    BtnContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10
    },
})