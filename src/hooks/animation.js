import React from 'react';
import { Animated, Vibration } from 'react-native';
import { DEVICE_SIZE } from '../style';

export const useAnimation = (
  duration,
  timerAnimation,
  buttonAnimation,
  textInputAnimation,
) => {
  const animation = React.useCallback(() => {
    textInputAnimation.setValue(duration);
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.parallel([
        Animated.timing(textInputAnimation, {
          toValue: 0,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
        Animated.timing(timerAnimation, {
          toValue: DEVICE_SIZE.HEIGHT,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      Vibration.vibrate([1 * 1000, 2 * 1000, 3 * 1000]);
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [duration, timerAnimation, buttonAnimation, textInputAnimation]);

  const buttonOpacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const buttonTranslateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const textOpacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return { animation, buttonOpacity, buttonTranslateY, textOpacity };
};
