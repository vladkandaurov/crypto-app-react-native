import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';

interface Props {
  customContainerStyle?: ViewStyle;
}

const PriceAlert = ({ customContainerStyle }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, customContainerStyle]}>
      <Image source={icons.notification_color} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.h3}>Set Price Alert</Text>
        <Text style={styles.body4}>
          {' '}
          Get notified when your coins are moving
        </Text>
      </View>
      <Image source={icons.right_arrow} style={styles.rightIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 4.5,
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: { width: 30, height: 30 },
  containerText: { flex: 1, marginLeft: SIZES.radius },
  h3: { ...FONTS.h3 },
  body4: { ...FONTS.body4 },
  rightIcon: { width: 25, height: 25, tintColor: COLORS.gray },
});

export default PriceAlert;
