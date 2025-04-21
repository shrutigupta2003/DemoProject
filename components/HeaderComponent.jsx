import { Text, View } from "react-native"
import { styles } from "./HeaderComponentStyles"

const HeaderComponent = () => {
    return (
        <View style={styles.HeadingContainer} >
            <Text style={styles.HeadingText}>
                Todos
            </Text>
            <Text style={styles.HeadingText}>
                Status
            </Text>
        </View >
    )
}

export default HeaderComponent;