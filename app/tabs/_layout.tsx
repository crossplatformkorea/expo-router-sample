import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import React from 'react';
import type {ReactElement} from 'react';
import {IC_MASK} from '../../src/utils';
import {Tabs} from 'expo-router';
import Header from '../../src/uis/Header';

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

const TabBarIcon = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18,
      }}
      source={IC_MASK}
    />
  );
};

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
