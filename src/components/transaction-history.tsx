import React from 'react';
import { View, Text, FlatList, ViewStyle, StyleSheet } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';
import { TransactionHistoryItem } from './transaction-history-item';

interface Props {
  customContainerStyle: ViewStyle;
  history: {
    id: number;
    description: string;
    amount: number;
    currency: string;
    type: string;
    date: string;
  }[];
}

const TransactionHistory = ({ customContainerStyle, history }: Props) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <Text style={styles.text}>Transaction History</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        scrollEnabled={false}
        data={history}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <TransactionHistoryItem item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.separatorLine} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  text: { ...FONTS.h2 },
  contentContainerStyle: { marginTop: SIZES.radius },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
});

export default TransactionHistory;
