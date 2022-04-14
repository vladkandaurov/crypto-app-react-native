import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import { TrendingCurrenciesType } from '../../constants/dummy';

interface Props {
  item: TrendingCurrenciesType;
  index: number;
  onPress: (item: TrendingCurrenciesType) => void;
}

export const RenderItem = ({ item, index, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        { marginLeft: index === 0 ? SIZES.padding : 0 },
        styles.container,
      ]}
      onPress={() => onPress(item)}>
      <View style={styles.direction}>
        <View>
          <Image source={item.image} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.mLeft}>
          <Text style={styles.h2}>{item.currency}</Text>
          <Text style={styles.textCode}>{item.code}</Text>
        </View>
      </View>

      <View style={styles.mTop}>
        <Text style={styles.h2}>${item.amount}</Text>
        <Text
          style={{
            color: item.type == 'I' ? COLORS.green : COLORS.red,
            ...FONTS.h3,
          }}>
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    padding: SIZES.padding,

    marginRight: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  direction: { flexDirection: 'row' },
  image: { marginTop: 5, width: 25, height: 25 },
  mLeft: { marginLeft: SIZES.base },
  mTop: { marginTop: SIZES.radius },
  h2: { ...FONTS.h2 },
  textCode: { color: COLORS.gray, ...FONTS.body3 },
});
