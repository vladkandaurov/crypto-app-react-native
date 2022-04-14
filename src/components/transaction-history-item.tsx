import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

interface Props {
  item: {
    id: number;
    description: string;
    amount: number;
    currency: string;
    type: string;
    date: string;
  };
}

export const TransactionHistoryItem = ({ item }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(item)}>
      <Image source={icons.transaction} style={styles.imageTransaction} />
      <View style={styles.containerLeft}>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.containerRight}>
        <Text
          style={{
            color: item.type == 'B' ? COLORS.green : COLORS.red,
            ...FONTS.h3,
          }}>
          {item.amount}
          {item.currency}
        </Text>
        <Image source={icons.right_arrow} style={styles.imageRight} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.base,
  },
  imageTransaction: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  imageRight: { width: 20, height: 20, tintColor: COLORS.gray },
  containerRight: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  containerLeft: { flex: 1, marginLeft: SIZES.radius },
  descriptionText: { ...FONTS.h3 },
  dateText: { color: COLORS.gray, ...FONTS.body4 },
});
