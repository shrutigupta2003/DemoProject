import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./PressableComponentStyles";
import { FunctionComponent, ReactNode } from "react";

interface PressableComponentProps {
    children: ReactNode,
    view: number,
    onPress: (id: number) => void,
    id: number
}

const PressableComponent: FunctionComponent<PressableComponentProps> = ({ children, view, onPress, id }) => {
    return (
        <Pressable style={[styles.Button, view === id && styles.ActiveButton]} onPress={() => onPress(id)}>
            <Text style={[styles.BtnText, view === id && styles.ActiveText]}>{children}</Text>
        </Pressable>
    )
}

export default PressableComponent;