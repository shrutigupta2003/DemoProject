import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import CreateScreen from './CreateScreen';
import { observer } from "mobx-react-lite";
import { useStore } from '../../store/RootStore';
import { styles } from './HomeScreenStyles';
import PressableComponent from '../../components/PressableComponent';
import AllTodos from './AllTodos';
import LoaderComponent from '../../components/LoaderComponent';

const HomeScreen = observer(() => {
    const rootStore = useStore();
    const [view, setView] = useState(0);
    const allTodos = rootStore.todos;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { fetchTodosLimitAndSkip } = rootStore;

    useEffect(() => {
        LoadTodos();
    }, []);

    const LoadTodos = async () => {
        setIsLoading(true);
        try {
            await fetchTodosLimitAndSkip();
        }
        catch (error) {
            setError('Could not fetch todos')
        }
        setIsLoading(false);
    }

    const incompleteTodos = allTodos.filter((todo) => todo.completed === false)
    function handlePress(idx) {
        setView(idx);
    }

    const errorHandler = () => {
        setError(null);
    }

    if (isLoading)
        return (
            <LoaderComponent />
        )

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Title}>Dashboard</Text>
            <View style={styles.BtnContainer}>
                <PressableComponent onPress={handlePress} view={view} id={0}>All Todos</PressableComponent>
                <PressableComponent onPress={handlePress} view={view} id={1}>Incomplete Todos</PressableComponent>
                <PressableComponent onPress={handlePress} view={view} id={2}>Create</PressableComponent>
            </View>
            {
                view === 0 && <AllTodos todos={allTodos} />
            }
            {
                view === 1 && <AllTodos todos={incompleteTodos} />
            }
            {
                view === 2 && <CreateScreen todos={allTodos} />
            }
        </SafeAreaView >
    )
})

export default HomeScreen;