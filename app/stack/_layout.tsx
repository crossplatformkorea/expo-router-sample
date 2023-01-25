import {useTheme} from 'dooboo-ui';
import {Stack} from 'expo-router';
import type {ReactElement} from 'react';
import React from 'react';
import Header from '../../src/uis/Header';

function Navigator(): ReactElement {
  const {theme} = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.bg.basic,
        },
        headerTitleStyle: {color: theme.text.basic},
        headerTintColor: theme.role.primary,
        header: Header,
      }}
    >
      <Stack.Screen name="screen1" />
      <Stack.Screen name="screen2" />
      <Stack.Screen name="screen3" />
      <Stack.Screen name="screen4" />
    </Stack>
  );
}

export default Navigator;
