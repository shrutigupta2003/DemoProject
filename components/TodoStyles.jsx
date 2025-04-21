import { StyleSheet } from "react-native"
import { colorPicker } from "../constants/colors"

export const styles = StyleSheet.create({
    ItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        flex: 1,
        marginVertical: 10
    },
    ItemTodoText: {
        fontSize: 15,
        fontWeight: "400",
        margin: 10,
        flex: 3,
    },
    ItemStatusText: {
        fontSize: 15,
        fontWeight: "400",
        flex: 1
    },
    NotCompleted: {
        backgroundColor: colorPicker.lowStockBackgroundColor,
    },
    Completed: {
        backgroundColor: colorPicker.normalStockBackgroundColor
    }
})