import React, { FunctionComponent, ReactElement } from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Toast from 'react-native-toast-message';

const App: FunctionComponent = (): ReactElement => {
    return (
        <View>
            <HomeScreen />
            <Toast />
        </View>
    )
}

export default App;