import React from "react";
import { ActivityIndicator, View } from "react-native"
import { styles } from "./LoaderComponentStyles";
import { FunctionComponent } from "react";

const LoaderComponent: FunctionComponent = () => {
    return (
        <View style={styles.Container}>
            <ActivityIndicator size="large" color="black" />
        </View >)
}

export default LoaderComponent;

