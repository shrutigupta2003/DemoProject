import { Pressable, Text, View } from "react-native"
import { styles } from "./CompleteItemStyles";
import { useStore } from "../store/RootStore";
import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

const CompleteItem = ({ todo }) => {
    const rootStore = useStore();
    const { editTodo, deleteTodos } = rootStore;
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const handleDeletePress = () => {
        setShowModal(true);
    }
    const handleConfirm = () => {
        setShowModal(false);
        setShowSuccessModal(true);
    }

    const handleCancel = () => {

        setShowModal(false);
    }

    const handleOkay = () => {
        deleteTodos(todo.id);
        setShowSuccessModal(false);
    }
    return (
        <View>
            <View style={[styles.ItemContainer, todo.completed ? styles.Completed : styles.NotCompleted]}>
                <Text style={styles.ItemTodoText}>
                    {todo.todo}
                </Text>

                <View style={styles.ItemDescContainer}>
                    <Text style={styles.ItemText}>
                        {todo.completed ? 'Completed' : 'Incomplete'}
                    </Text>
                    <Pressable onPress={() => editTodo(todo)}>
                        <Text style={styles.ItemText}>Edit</Text>
                    </Pressable>
                    <Pressable onPress={handleDeletePress}>
                        <Text style={styles.ItemText}>Delete</Text>
                    </Pressable>
                </View>

                <ConfirmationModal visible={showModal} onConfirm={handleConfirm} onCancel={handleCancel} />

                <SuccessModal visible={showSuccessModal} onConfirm={handleOkay} />
            </View >
        </View>
    )
}

export default CompleteItem;