import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { DummyDataType, TrendingCurrenciesType } from '../../constants/dummy';
import { RenderItem } from './header-item';

interface Props {
  trending: TrendingCurrenciesType[];
  data: DummyDataType;
  onPress: (item: TrendingCurrenciesType) => void;
}

export const Header = ({ trending, data, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.banner}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.containerImage}>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() => console.log('Notification on press')}>
            <Image
              source={icons.notification_white}
              resizeMode="contain"
              style={styles.flex}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.blockText}>
          <Text style={styles.headerText}>Your Portfolio Balance</Text>
          <Text style={styles.textBalance}>${data.portfolio.balance}</Text>
          <Text style={styles.textChanges}>
            {data.portfolio.changes} Last 24 hours
          </Text>
        </View>

        <View style={styles.containerList}>
          <Text style={styles.textList}>Trending</Text>
          <FlatList
            contentContainerStyle={styles.containerFlatList}
            data={trending}
            renderItem={(item) => {
              return (
                <RenderItem
                  item={item.item}
                  index={item.index}
                  onPress={onPress}
                />
              );
            }}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 290,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imageBackground: { flex: 1, alignItems: 'center' },
  containerImage: {
    marginTop: SIZES.padding * 2,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  imageBlock: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: { flex: 1 },
  blockText: { alignItems: 'center', justifyContent: 'center' },
  headerText: { color: COLORS.white, ...FONTS.h3 },
  textBalance: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h1,
  },
  textChanges: { color: COLORS.white, ...FONTS.body5 },
  containerList: { position: 'absolute', bottom: '-30%' },
  textList: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2,
  },
  containerFlatList: { marginTop: SIZES.base },
});
