import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { HeaderBar, PriceAlert } from '../../components';
import { About, Buy, Chart } from '../../components/crypto-detail';

const CryptoDetail = ({ route, navigation }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const onClickBuy = useCallback(() => {
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
        <View style={styles.items}>
          <Chart selectedItem={selectedCurrency} />
          <Buy selectedItem={selectedCurrency} onClick={onClickBuy} />
          <About
            description={selectedCurrency?.description}
            currency={selectedCurrency?.currency}
          />
          <PriceAlert customContainerStyle={styles.price} />
        </View>
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
