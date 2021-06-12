import React from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { COLORS, ITEM_SIZE } from '../style';

export default function Timer({ item, scrollΧ, index }) {
  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ];

  const opacity = scrollΧ.interpolate({
    inputRange,
    outputRange: [0.4, 1, 0.4],
  });

  const scale = scrollΧ.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
  });

  return (
    <View style={styles.timerContainer}>
      <Animated.Text style={[styles.text, { opacity, transform: [{ scale }] }]}>
        {item}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    width: ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: 'Menlo',
    color: COLORS.text,
    fontWeight: '900',
  },
});
