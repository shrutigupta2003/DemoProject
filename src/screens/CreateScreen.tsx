import React, { FunctionComponent, useState } from 'react';
import {
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStoreType, TodoType, useStore } from '../../store/RootStore';
import { styles } from './CreateScreenStyles';
import CompleteItem from '../../components/CompleteItem';
import { colorPicker } from '../../constants/colors';

const CreateScreen: FunctionComponent = observer(() => {
    const rootStore: RootStoreType = useStore();
    const { todos, updateTodos, postTodos, curInputTodo, handleInputChange, isEdit, fetchTodosLimitAndSkip } = rootStore;
    const { todo, editTodoId, completed } = curInputTodo;
    const [focus, setFocus] = useState<boolean>(false);
    // const [status, setStatus] = useState<string>('');
    return (
        <View style={styles.Container}>
            <TextInput
                placeholder='Enter todo'
                placeholderTextColor={colorPicker.textInputColor}
                style={styles.Input}
                value={todo}
                onChangeText={(item) => handleInputChange('todo', item)}
                onFocus={() => { setFocus(true) }}
            />
            {focus && <Text style={styles.InvalidText}>Todo must be of atleast 3 characters</Text>}
            <Pressable style={[styles.ToggleButton, styles.Completed, completed ? styles.SelectedStatus : '']} onPress={() => { handleInputChange('completed', true) }}>
                <Text style={styles.ToggleButtonText}>
                    Completed
                </Text>
            </Pressable>
            <Pressable style={[styles.ToggleButton, styles.NotCompleted, completed ? '' : styles.SelectedStatus]} onPress={() => { handleInputChange('completed', false) }}>
                <Text style={styles.ToggleButtonText}>
                    Incomplete
                </Text>
            </Pressable>
            {/* <Pressable
                style={[styles.ToggleButton, completed ? styles.Completed : styles.NotCompleted]}
                onPress={() => handleInputChange('completed', !completed)}
            >
                <Text style={styles.ToggleButtonText}>
                    {completed ? 'Completed' : 'Incomplete'}
                </Text>
            </Pressable> */}

            <Pressable style={[styles.AddButton, focus ? styles.BtnActive : '']}>
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
                    keyExtractor={(todo: TodoType) => todo.id.toString()}
                    renderItem={({ item }: { item: TodoType }) => (
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
