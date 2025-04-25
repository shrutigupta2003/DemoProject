import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './TodoStyles';
import {FunctionComponent} from 'react';
import {TodoType, RootStoreType, useStore} from '../store/RootStore';
import ConfirmationModal from './ConfirmationModal';
import SuccessModal from './SuccessModal';
interface TodoProps {
  todo: TodoType;
}

const Todo: FunctionComponent<TodoProps> = ({todo}) => {
  const rootStore: RootStoreType = useStore();
  const {deleteTodos} = rootStore;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const handleDeletePress = (): void => {
    setShowModal(true);
  };

  const handleConfirm = (): void => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  const handleCancel = (): void => {
    setShowModal(false);
  };

  const handleOkay = (): void => {
    deleteTodos(todo.id);
    setShowSuccessModal(false);
  };
  return (
    <View>
      <View
        style={[
          styles.ItemContainer,
          todo.completed ? styles.Completed : styles.NotCompleted,
        ]}>
        <Text style={styles.ItemTodoText}>{todo.todo}</Text>
        <Text style={styles.ItemStatusText}>
          {todo.completed ? 'Completed' : 'Incomplete'}
        </Text>
        <Pressable onPress={handleDeletePress} style={styles.ItemDelete}>
          <Text style={styles.ItemText}>Delete</Text>
        </Pressable>
      </View>
      <ConfirmationModal
        visible={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <SuccessModal visible={showSuccessModal} onConfirm={handleOkay} />
    </View>
  );
};

export default Todo;
