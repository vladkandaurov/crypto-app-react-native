import React, { useState } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from 'victory-native';
import { VictoryCustomTheme } from '../../styles';

import { COLORS, FONTS, SIZES, dummyData } from '../../constants';
import { CurrencyLabel, TextButton } from '../../components';
import { Dots } from './chart-dots';
import { TrendingCurrenciesType } from '../../constants/dummy';

interface Props {
  selectedItem: TrendingCurrenciesType;
}

export const Chart = ({ selectedItem }: Props) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  const [chartOptions, setChartOptions] = useState(dummyData.chartOptions);
  const [selectedOptions, setSelectedOptions] = useState(chartOptions[0]);

  const optionClickHandler = (option) => {
    setSelectedOptions(option);
  };

  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.containerHeader}>
        <View style={styles.flex}>
          <CurrencyLabel
            icon={selectedItem?.image}
            currency={selectedItem?.currency}
            code={selectedItem?.code}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>${selectedItem?.amount}</Text>
          <Text
            style={{
              color: selectedItem?.type == 'I' ? COLORS.green : COLORS.red,
              ...FONTS.h3,
            }}>
            {selectedItem?.changes}
          </Text>
        </View>
      </View>
      {/*Chart*/}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        snapToInterval={SIZES.width - 40}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}>
        {numberOfCharts.map((item, index) => {
          return (
            <View
              key={`chart-${index}`}
              style={{ marginLeft: index == 0 ? SIZES.base : 0 }}>
              <View style={{ marginTop: -25 }}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}>
                  <VictoryLine
                    style={{
                      data: { stroke: COLORS.secondary },
                      parent: { border: '1px solid #ccc' },
                    }}
                    data={selectedItem?.chartData}
                    categories={{
                      x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                      y: ['15', '30', '45'],
                    }}
                  />
                  <VictoryScatter
                    data={selectedItem?.chartData}
                    size={7}
                    style={{ data: { fill: COLORS.secondary } }}
                  />
                  <VictoryAxis style={{ grid: { stroke: 'transparent' } }} />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: { stroke: 'transparent' },
                      grid: { stroke: 'grey' },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {/*Options*/}
      <View style={styles.containerOptions}>
        {chartOptions.map((option) => {
          return (
            <TextButton
              key={`option-${option.id}`}
              label={option.label}
              customContainerStyle={{
                height: 30,
                width: 60,
                borderRadius: 15,
                backgroundColor:
                  selectedOptions.id === option.id
                    ? COLORS.primary
                    : COLORS.lightGray,
              }}
              customLabelStyle={{
                color:
                  selectedOptions.id === option.id ? COLORS.white : COLORS.gray,
                ...FONTS.body5,
              }}
              onPress={() => optionClickHandler(option)}
            />
          );
        })}
      </View>
      {/*Dots*/}
      <Dots numberOfCharts={numberOfCharts} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    alignItems: 'center',
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
  containerHeader: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  textHeader: { ...FONTS.h3 },
  flex: { flex: 1 },
  containerOptions: {
    width: '100%',
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
