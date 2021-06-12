import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { COLORS, DEVICE_SIZE } from '../style';

export default function TimerSheet({ timerAnimation }) {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.sheet,
        {
          transform: [{ translateY: timerAnimation }],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  sheet: {
    height: DEVICE_SIZE.HEIGHT,
    width: DEVICE_SIZE.WIDTH,
    backgroundColor: COLORS.red,
  },
});
