import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { ITEM_SIZE, ITEM_SPACING } from '../style';

import Timer from './Timer';

export default function Flatlist({ timers, scrollΧ, setDuration, opacity }) {
  return (
    <Animated.FlatList
      data={timers}
      keyExtractor={index => index.toString()}
      decelerationRate="fast"
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { x: scrollΧ },
            },
          },
        ],
        { useNativeDriver: true },
      )}
      onMomentumScrollEnd={ev => {
        const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
        setDuration(timers[index]);
      }}
      bounces={false}
      snapToInterval={ITEM_SIZE}
      style={[styles.flatlistStyle, { opacity }]}
      contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
      renderItem={({ item, index }) => (
        <Timer scrollΧ={scrollΧ} item={item} index={index} />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
    />
  );
}

const styles = StyleSheet.create({
  flatlistStyle: {
    flexGrow: 0,
  },
});
