import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

function BottomSheetComponent() {
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    return (
        <View style={styles.container}>
            <BottomSheet index={1} snapPoints={snapPoints}>
                <View style={styles.contentContainer}>
                    <Text>Bottom Sheet Content</Text>
                </View>
            </BottomSheet>
        </View>
    );
}

export default BottomSheetComponent;
