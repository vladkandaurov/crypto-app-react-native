import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { CurrencyLabel, TextButton } from '../../components';

export const Buy = ({ selectedItem, onClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <View style={styles.flex}>
          <CurrencyLabel
            icon={selectedItem?.image}
            currency={`${selectedItem?.currency} Wallet`}
            code={selectedItem?.code}
          />
        </View>
        <View style={styles.itemView}>
          <View style={styles.itemLabel}>
            <Text style={styles.textValue}>${selectedItem?.wallet.value}</Text>
            <Text style={styles.textCode}>
              {selectedItem?.wallet.crypto} {selectedItem?.code}
            </Text>
          </View>
          <Image
            source={icons.right_arrow}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
      <TextButton label="Buy" onPress={onClick} />
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
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.radius,
  },
  itemView: { flexDirection: 'row', alignItems: 'center' },
  itemLabel: { marginRight: SIZES.base },
  flex: { flex: 1 },
  image: { width: 20, height: 20, tintColor: COLORS.gray },
  textValue: { ...FONTS.h3 },
  textCode: {
    textAlign: 'right',
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
