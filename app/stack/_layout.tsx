import type {ReactElement} from 'react';
import React from 'react';
import {useTheme} from '@dooboo-ui/theme';
import {Stack} from 'expo-router';

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
