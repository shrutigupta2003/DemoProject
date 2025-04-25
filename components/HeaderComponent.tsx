import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './HeaderComponentStyles';
import {FunctionComponent} from 'react';

const HeaderComponent: FunctionComponent = () => {
  return (
    <View style={styles.HeadingContainer}>
      <Text style={styles.HeadingText}>Todos</Text>
      <Text style={styles.HeadingText}>Status</Text>
      <Text style={styles.HeadingText}>Action</Text>
    </View>
  );
};

export default HeaderComponent;
