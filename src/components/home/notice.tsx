import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

export const Notice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Investing Safety</Text>
      <Text style={styles.textBody}>
        Its very difficult to time an investment, especially whenthe market is
        volatile. Learn how to use dollar coast averaging to your advantage.
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => console.log('Learn more')}>
        <Text style={styles.textLink}>Learn more</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textHeader: { color: COLORS.white, ...FONTS.h3 },
  textBody: {
    marginTop: SIZES.base,
    color: COLORS.white,
    // lineHeight: 18,
    ...FONTS.body4,
  },
  link: { marginTop: SIZES.base },
  textLink: {
    textDecorationLine: 'underline',
    color: COLORS.green,
    ...FONTS.h3,
  },
});
