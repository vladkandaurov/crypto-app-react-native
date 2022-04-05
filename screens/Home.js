import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { dummyData } from '../constants';
import { PriceAlert, TransactionHistory } from '../components';
import { Header, Notice } from '../components/home';

const Home = ({ navigation }) => {
  const [trending] = useState(dummyData.trendingCurrencies);
  const [transactionHistory] = useState(dummyData.transactionHistory);

  const onPressItem = useCallback(
    (item) => navigation.navigate('CryptoDetail', { currency: item }),
    [],
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header trending={trending} data={dummyData} onPress={onPressItem} />
        <PriceAlert />
        <Notice />
        <TransactionHistory
          customContainerStyle={styles.shadow}
          history={transactionHistory}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 130 },
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
});

export default Home;
