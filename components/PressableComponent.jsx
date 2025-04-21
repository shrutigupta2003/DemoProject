import { Pressable, Text } from "react-native";
import { styles } from "./PressableComponentStyles";

const PressableComponent = ({ children, view, onPress, id }) => {
    return (
        <Pressable style={[styles.Button, view === id && styles.ActiveButton]}>
            <Text style={[styles.BtnText, view === id && styles.ActiveText]} onPress={() => onPress(id)}>{children}</Text>
        </Pressable>
    )
}

export default PressableComponent;