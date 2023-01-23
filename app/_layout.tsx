import type {ReactNode} from 'react';
import {Slot} from 'expo-router';
import {ThemeProvider} from 'dooboo-ui';

export default function RootLayout(): ReactNode {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
