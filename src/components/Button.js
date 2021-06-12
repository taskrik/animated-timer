import React from 'react';
import { StyleSheet, Animated, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../style';

export default function Button({ animation, buttonOpacity, buttonTranslateY }) {
  return (
    <Animated.View
      style={{
        opacity: buttonOpacity,
        transform: [{ translateY: buttonTranslateY }],
      }}>
      <TouchableOpacity onPress={animation}>
        <View style={styles.roundButton} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: COLORS.red,
  },
});
