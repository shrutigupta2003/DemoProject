import React from "react";
import { Text, View, Button } from "react-native"
import { styles } from "./ErrorComponentStyles";
import { FunctionComponent } from "react";

interface ErrorComponentProps {
    message: string,
    onConfirm: () => void
}
const ErrorComponent: FunctionComponent<ErrorComponentProps> = ({ message, onConfirm }) => {
    return (
        <View style={styles.Container}>
            <Text style={[styles.Text, styles.Title]}>An error occured</Text>
            <Text style={styles.Text}>{message}</Text>
            <Button onPress={onConfirm} title='Okay'></Button>
        </View >)
}

export default ErrorComponent;

