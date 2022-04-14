import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CurrencyLabel, TextButton } from '../../components';
import { FONTS, SIZES, COLORS } from '../../constants';
import { TrendingCurrenciesType } from '../../constants/dummy';

interface Props {
  selectedCurrency: TrendingCurrenciesType;
}

export const Trade = ({ selectedCurrency }: Props) => {
  return (
    <View style={styles.container}>
      <CurrencyLabel
        icon={selectedCurrency?.image}
        currency={selectedCurrency?.currency}
        code={selectedCurrency?.code}
      />
      <View style={styles.containerText}>
        <Text style={styles.textCode}>
          {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
        </Text>
        <Text style={styles.textValue}>${selectedCurrency?.wallet.value}</Text>
      </View>
      <TextButton label={'Trade'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: SIZES.padding,
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
  containerText: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textValue: { color: COLORS.gray, ...FONTS.body4 },
  textCode: { ...FONTS.h2 },
});
