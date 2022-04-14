import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, FONTS, icons } from '../constants';

interface Props {
  right: boolean;
}

const HeaderBar = ({ right }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={styles.containerRight}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={styles.imageRight}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
  },
  image: { width: 25, height: 25, tintColor: COLORS.gray },
  containerItem: { flex: 1, alignItems: 'flex-start' },
  item: { flexDirection: 'row', alignItems: 'center' },
  backText: { marginLeft: SIZES.base, ...FONTS.h2 },
  containerRight: { flex: 1, alignItems: 'flex-end' },
  imageRight: { width: 30, height: 30 },
});
