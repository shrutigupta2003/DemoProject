import { View, Text, ScrollView } from "react-native";
import { styles } from "./TodoStyles";

const Todo = ({ todo }) => {
    return (
        <View style={[styles.ItemContainer, todo.completed ? styles.Completed : styles.NotCompleted]}>
            <Text style={styles.ItemTodoText}>
                {todo.todo}
            </Text>
            <Text style={styles.ItemStatusText}>
                {todo.completed ? 'Completed' : 'Incomplete'}
            </Text>
        </View>
    )
}

export default Todo;