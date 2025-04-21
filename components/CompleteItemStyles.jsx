import { StyleSheet } from "react-native";
import { colorPicker } from "../constants/colors";

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
    ItemDescContainer: {
        flexDirection: 'row',
        gap: 20,
        flex: 2
    },
    ItemTodoText: {
        flex: 1,
        marginHorizontal: 10
    },
    ItemText: {
        fontSize: 15,
        fontWeight: "400"
    },
    NotCompleted: {
        backgroundColor: colorPicker.lowStockBackgroundColor
    },
    Completed: {
        backgroundColor: colorPicker.normalStockBackgroundColor,
    }
})