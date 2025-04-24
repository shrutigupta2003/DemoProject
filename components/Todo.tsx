import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TodoStyles";
import { FunctionComponent } from "react";
import { TodoType } from "../store/RootStore";
interface TodoProps {
    todo: TodoType;
}
const Todo: FunctionComponent<TodoProps> = ({ todo }) => {
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