import React from 'react';
import {
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStore';
import { styles } from './CreateScreenStyles';
import CompleteItem from '../../components/CompleteItem';
import { colorPicker } from '../../constants/colors';
import { deleteTodosAPI, fetchTodosAPILimitAndSkip, postTodosAPI, updateTodosAPI } from '../../api/Api';

const CreateScreen = observer(() => {
    const rootStore = useStore();
    const { todos, addTodo, deleteTodo, updateTodos, postTodos, updateTodo, editTodo, curInputTodo, handleInputChange, isEdit, fetchTodosLimitAndSkip } = rootStore;
    const { todo, editTodoId, completed } = curInputTodo;
    const newTodo = {
        todo: "go to school",
        completed: false,
        userId: 5
    }

    return (
        <View style={styles.Container}>
            <TextInput
                placeholder='Enter todo'
                placeholderTextColor={colorPicker.textInputColor}
                style={styles.Input}
                value={todo}
                onChangeText={(item) => handleInputChange('todo', item)}
            />

            <Pressable
                style={[styles.ToggleButton, completed ? styles.Completed : styles.NotCompleted]}
                onPress={() => handleInputChange('completed', !completed)}
            >
                <Text style={styles.ToggleButtonText}>
                    {completed ? 'Completed' : 'Incomplete'}
                </Text>
            </Pressable>


            <Pressable style={styles.AddButton}>
                <Text
                    style={styles.BtnText}
                    onPress={() =>
                        isEdit
                            ? updateTodos(editTodoId, todo, completed)
                            : postTodos(todo, completed)
                    }
                >
                    {isEdit ? 'Edit Item' : 'Add Item'}
                </Text>
            </Pressable>

            <View style={styles.AllItemContainer}>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.HeadingText}>
                        All Todos
                    </Text>
                </View>
                <FlatList
                    data={todos.slice()}
                    keyExtractor={(todo) => todo.id.toString()}
                    renderItem={({ item }) => (
                        <CompleteItem
                            todo={item}
                        />
                    )}
                    onEndReached={() => fetchTodosLimitAndSkip()}
                    contentContainerStyle={styles.GapContainer}
                />
            </View>
        </View>
    );
});

export default CreateScreen;
