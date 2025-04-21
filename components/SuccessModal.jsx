import { Button, Modal, Text, View } from "react-native";
import { styles } from "./SuccessModalStyles";

const SuccessModal = ({ visible, onConfirm }) => {
    return (
        <View style={styles.container} >
            <Modal transparent={true} visible={visible} animation='slide'>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Todo deleted successfully</Text>
                        <View style={styles.buttonView}>
                            <Button title='Okay' onPress={onConfirm}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessModal;

