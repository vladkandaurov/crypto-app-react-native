import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

interface Props {
  currency: string;
  description: string;
}

export const About = ({ currency, description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textAbout}>About {currency}</Text>
      <Text style={styles.textDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    padding: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textDescription: { marginTop: SIZES.base, ...FONTS.body3 },
  textAbout: { ...FONTS.h3 },
});
