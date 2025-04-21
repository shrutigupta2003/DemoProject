import { StyleSheet } from "react-native";
import { colorPicker } from "../constants/colors";

export const styles = StyleSheet.create({
    Button: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colorPicker.primaryGreen
    },
    BtnText: {
        color: colorPicker.primaryGreen,
        fontWeight: "400",
        fontSize: 12,
    },
    ActiveButton: {
        backgroundColor: colorPicker.primaryGreen,
    },
    ActiveText: {
        color: colorPicker.primaryWhite
    }
})