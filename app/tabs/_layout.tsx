import type {ReactElement} from 'react';
import React from 'react';
import {Image, View} from 'react-native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Tabs} from 'expo-router';

import Header from '../../src/uis/Header';
import {IC_MASK} from '../../src/utils';

export type BottomTabParamList = {
  default: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

export type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = 'default',
> = BottomTabNavigationProp<BottomTabParamList, T>;

function TabBarIcon(focused: boolean): React.ReactElement {
  return (
    <Image
      source={IC_MASK}
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18,
      }}
    />
  );
}

function MaterialBottomTabNavigator(): ReactElement {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarIcon: ({focused}): React.ReactElement => TabBarIcon(focused),
        }}
      />
      <View style={{position: 'absolute', top: 0, height: 90}}>
        <Header />
      </View>
    </>
  );
}

export default MaterialBottomTabNavigator;
