import { ActivityIndicator, View } from "react-native"
import { styles } from "./LoaderComponentStyles";

const LoaderComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="black" />
        </View >)
}

export default LoaderComponent;

