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
    />
  );
}

export default Navigator;
