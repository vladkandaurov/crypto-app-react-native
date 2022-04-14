import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';

import { HeaderBar, TransactionHistory } from '../../components';
import { Trade } from '../../components/transaction';
import { SIZES } from '../../constants';
import { TrendingCurrenciesType } from '../../constants/dummy';

const Transaction = ({ route }) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<TrendingCurrenciesType>();

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={false} />
      <ScrollView>
        <View style={styles.innerContainer}>
          {selectedCurrency && (
            <>
              <Trade selectedCurrency={selectedCurrency} />
              <TransactionHistory
                customContainerStyle={styles.shadow}
                history={selectedCurrency.transactionHistory}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  innerContainer: { flex: 1, paddingBottom: SIZES.padding },
});

export default Transaction;
