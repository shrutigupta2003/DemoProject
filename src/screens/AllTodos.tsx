import React, { FunctionComponent } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import HeaderComponent from '../../components/HeaderComponent';
import { styles } from './AllTodosStyles';
import Todo from '../../components/Todo';
import { RootStoreType, TodoType, useStore } from '../../store/RootStore';

interface CreateScreenProps {
    todos: TodoType[];
}

const AllTodos: FunctionComponent<CreateScreenProps> = observer(({ todos }) => {
    const rootStore: RootStoreType = useStore();
    const { fetchTodosLimitAndSkip } = rootStore;
    return (
        <View>
            <HeaderComponent />
            <FlatList data={todos.slice()} keyExtractor={(todo: TodoType) => todo.id.toString()} renderItem={({ item }: { item: TodoType }) => (<Todo todo={item} />)
            } onEndReached={() => fetchTodosLimitAndSkip()} contentContainerStyle={styles.GapContainer}>
            </FlatList >
        </View >
    )
})

export default AllTodos;