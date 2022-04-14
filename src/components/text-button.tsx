import React from 'react';
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

interface Props {
  label: string;
  customContainerStyle?: ViewStyle;
  customLabelStyle?: TextStyle;
  onPress?: () => void;
}

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, customContainerStyle]}
      onPress={onPress}>
      <Text style={[styles.text, customLabelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.green,
  },
  text: { color: COLORS.white, ...FONTS.h3 },
});

export default TextButton;
