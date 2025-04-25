import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './CompleteItemStyles';
import {RootStoreType, TodoType, useStore} from '../store/RootStore';
import ConfirmationModal from './ConfirmationModal';
import {FunctionComponent, useState} from 'react';
import SuccessModal from './SuccessModal';

interface CompleteItemProps {
  todo: TodoType;
  handleFocus: (focus: boolean) => void;
}
const CompleteItem: FunctionComponent<CompleteItemProps> = ({
  todo,
  handleFocus,
}) => {
  const rootStore: RootStoreType = useStore();
  const {editTodo, deleteTodos} = rootStore;
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

        <View style={styles.ItemDescContainer}>
          <Text style={styles.ItemText}>
            {todo.completed ? 'Completed' : 'Incomplete'}
          </Text>
          <Pressable
            onPress={() => {
              editTodo(todo);
              handleFocus(true);
            }}>
            <Text style={styles.ItemText}>Edit</Text>
          </Pressable>
          <Pressable onPress={handleDeletePress}>
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
    </View>
  );
};

export default CompleteItem;
