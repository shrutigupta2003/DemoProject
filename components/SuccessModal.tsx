import React from "react";
import { Button, Modal, Text, View } from "react-native";
import { styles } from "./SuccessModalStyles";
import { FunctionComponent } from "react";

interface SuccessModalProps {
    visible: boolean,
    onConfirm: () => void
}

const SuccessModal: FunctionComponent<SuccessModalProps> = ({ visible, onConfirm }) => {
    return (
        <View style={styles.Container} >
            <Modal transparent={true} visible={visible}>
                <View style={styles.CenteredView}>
                    <View style={styles.ModalView}>
                        <Text>Todo deleted successfully</Text>
                        <View style={styles.ButtonView}>
                            <Button title='Okay' onPress={onConfirm}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessModal;

