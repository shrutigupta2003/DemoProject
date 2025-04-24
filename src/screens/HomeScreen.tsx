import React, { FunctionComponent, useEffect, useState } from 'react';
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
import { TodoType } from '../../store/RootStore';
import Toast from 'react-native-toast-message';

const HomeScreen: FunctionComponent = observer(() => {
    const rootStore = useStore();
    const [view, setView] = useState<number>(0);
    const allTodos: TodoType[] = rootStore.todos;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { fetchTodosLimitAndSkip, error, setError } = rootStore;
    useEffect(() => {
        LoadTodos();
    }, []);

    const LoadTodos = async () => {
        setError('');
        setIsLoading(true);
        try {
            await fetchTodosLimitAndSkip();
        }
        catch (err) {
            console.warn(err);
        }
        setIsLoading(false);
    }

    const incompleteTodos: TodoType[] = allTodos.filter((todo: TodoType) => todo.completed === false)
    function handlePress(idx: number): void {
        setView(idx);
    }

    const showToast = (error: string) => {
        Toast.show({
            type: "error",
            text1: "error occured",
            text2: error,
        })
    }

    if (error && !isLoading) {
        showToast(error);
        setError('');
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
                view === 2 && <CreateScreen />
            }
        </SafeAreaView >
    )
})

export default HomeScreen;