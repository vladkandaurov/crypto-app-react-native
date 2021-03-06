import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import { Home } from '../screens';
import { COLORS, FONTS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerIcon}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  textTransform: 'uppercase',
                  ...FONTS.body5,
                }}>
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerIcon}>
              <Image
                source={icons.pie_chart}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  textTransform: 'uppercase',
                  ...FONTS.body5,
                }}>
                Portfolio
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={styles.iconHome}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerIcon}>
              <Image
                source={icons.line_graph}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  textTransform: 'uppercase',
                  ...FONTS.body5,
                }}>
                Prices
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerIcon}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  textTransform: 'uppercase',
                  ...FONTS.body5,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradient: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  containerIcon: { alignItems: 'center', justifyContent: 'center' },
  iconHome: { width: 30, height: 30, tintColor: COLORS.white },
});

export default Tabs;
