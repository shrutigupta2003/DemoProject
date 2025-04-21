import React from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import HeaderComponent from '../../components/HeaderComponent';
import { styles } from './AllTodosStyles';
import Todo from '../../components/Todo';
import { useStore } from '../../store/RootStore';

const AllTodos = observer(({ todos }) => {
    const rootStore = useStore();
    const { fetchTodosLimitAndSkip } = rootStore;
    return (
        <View>
            <HeaderComponent />
            <FlatList data={todos.slice()} keyExtractor={(todo) => todo.id.toString()} renderItem={({ item }) => (<Todo todo={item} />)
            } onEndReached={() => fetchTodosLimitAndSkip()} contentContainerStyle={styles.GapContainer}>
            </FlatList >
        </View >
    )
})

export default AllTodos;