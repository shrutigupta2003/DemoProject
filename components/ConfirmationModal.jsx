import { Button, View, StyleSheet, Modal, Text } from "react-native"
import { styles } from "./ConfirmationModalStyles";

const ConfirmationModal = ({ visible, onConfirm, onCancel }) => {

    return (
        <View style={styles.main}>
            <Modal
                transparent={true} visible={visible} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure?</Text>
                        <View style={styles.buttonContainer}>
                            <Button title='Yes' onPress={onConfirm}></Button>
                            <Button title='No' onPress={onCancel}></Button>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

export default ConfirmationModal;
