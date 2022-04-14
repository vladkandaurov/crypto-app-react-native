import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

interface Props {
  numberOfCharts: number[];
  scrollX: Animated.Value;
}

export const Dots = ({ numberOfCharts, scrollX }: Props) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={{ height: 30, marginTop: 15 }}>
      <View style={styles.container}>
        {numberOfCharts.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: 'clamp',
          });
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              //@ts-ignore
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
