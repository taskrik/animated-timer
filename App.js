import React from 'react';
import { Animated, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import { useAnimation } from './src/hooks/animation';

import Button from './src/components/Button';
import Flatlist from './src/components/Flatlist';
import TimerSheet from './src/components/TimerSheet';
import { COLORS, ITEM_SIZE, DEVICE_SIZE } from './src/style';

const timers = [...Array(13).keys()].map(i => (i === 0 ? 1 : i * 5));

const App = () => {
  const scrollΧ = React.useRef(new Animated.Value(0)).current;
  const timerAnimation = React.useRef(
    new Animated.Value(DEVICE_SIZE.HEIGHT),
  ).current;
  const buttonAnimation = React.useRef(new Animated.Value(0)).current;
  const [duration, setDuration] = React.useState(timers[0]);
  const inputRef = React.useRef();
  const textInputAnimation = React.useRef(
    new Animated.Value(timers[0]),
  ).current;

  const { animation, buttonOpacity, buttonTranslateY, textOpacity } =
    useAnimation(duration, timerAnimation, buttonAnimation, textInputAnimation);

  React.useEffect(() => {
    const listener = textInputAnimation.addListener(({ value }) => {
      inputRef?.current?.setNativeProps({
        text: Math.ceil(value).toString(),
      });
    });

    return () => {
      textInputAnimation.removeListener(listener);
      textInputAnimation.removeAllListeners();
    };
  }, [textInputAnimation]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      <TimerSheet timerAnimation={timerAnimation} />

      <View style={styles.timerWrapper}>
        <Animated.View
          style={[styles.inputContainer, { opacity: textOpacity }]}>
          <TextInput
            ref={inputRef}
            style={styles.text}
            defaultValue={duration.toString()}
          />
        </Animated.View>
        <Flatlist
          timers={timers}
          data={timers}
          scrollΧ={scrollΧ}
          setDuration={setDuration}
          opacity={buttonOpacity}
        />
        <Button
          animation={animation}
          buttonOpacity={buttonOpacity}
          buttonTranslateY={buttonTranslateY}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  timerWrapper: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    top: DEVICE_SIZE.HEIGHT * 0.1,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: ITEM_SIZE,
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: 'Menlo',
    color: COLORS.text,
    fontWeight: '900',
  },
});

export default App;
