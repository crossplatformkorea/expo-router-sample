import type {ReactNode} from 'react';
import {DoobooProvider} from 'dooboo-ui';
import {Slot} from 'expo-router';

export default function RootLayout(): ReactNode {
  return (
    <DoobooProvider>
      <Slot />
    </DoobooProvider>
  );
}
