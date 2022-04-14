import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { HeaderBar, PriceAlert } from '../../components';
import { About, Buy, Chart } from '../../components/crypto-detail';
import { TrendingCurrenciesType } from '../../constants/dummy';

const CryptoDetail = ({ route, navigation }) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<TrendingCurrenciesType>();

  const onPressBuy = useCallback(() => {
    navigation.navigate('Transaction', { currency: selectedCurrency });
  }, [selectedCurrency]);

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={true} />
      <ScrollView>
        {selectedCurrency && (
          <View style={styles.items}>
            <Chart selectedItem={selectedCurrency} />
            <Buy selectedItem={selectedCurrency} onPress={onPressBuy} />
            <About
              description={selectedCurrency?.description}
              currency={selectedCurrency?.currency}
            />
            <PriceAlert customContainerStyle={styles.price} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray1,
  },
  items: { flex: 1, paddingBottom: SIZES.padding },
  price: {
    marginTop: SIZES.base,
    marginHorizontal: SIZES.radius,
  },
});

export default CryptoDetail;
