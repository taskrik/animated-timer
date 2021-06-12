import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const COLORS = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};

export const DEVICE_SIZE = {
  HEIGHT: height,
  WIDTH: width,
};

export const ITEM_SIZE = width * 0.38;
export const ITEM_SPACING = (width - ITEM_SIZE) / 2;
