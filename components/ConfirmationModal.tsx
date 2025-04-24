import React from "react";
import { Button, View, Modal, Text } from "react-native"
import { styles } from "./ConfirmationModalStyles";
import { FunctionComponent } from "react";

interface ConfirmationModalProps {
    visible: boolean,
    onConfirm: () => void,
    onCancel: () => void
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({ visible, onConfirm, onCancel }) => {

    return (
        <View style={styles.Main}>
            <Modal
                transparent={true} visible={visible} animationType="slide">
                <View style={styles.CenteredView}>
                    <View style={styles.ModalView}>
                        <Text style={styles.ModalText}>Are you sure?</Text>
                        <View style={styles.ButtonContainer}>
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
