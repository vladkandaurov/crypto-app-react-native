import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

interface Props {
  icon: ImageSourcePropType;
  currency: string;
  code: string;
}

const CurrencyLabel = ({ icon, currency, code }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={icon} resizeMode="cover" style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.currencyText}>{currency}</Text>
        <Text style={styles.codeText}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: { width: 25, height: 25, marginTop: 5 },
  containerText: { marginLeft: SIZES.base },
  currencyText: { ...FONTS.h3 },
  codeText: { color: COLORS.gray, ...FONTS.body4 },
});
