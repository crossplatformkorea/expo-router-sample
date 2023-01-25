import type {
  // Import the types
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {
  // Import the creation function
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {withLayoutContext} from 'expo-router';

const {Navigator} = createDrawerNavigator();

// This can be used like `<Drawer />`
export const Drawer = withLayoutContext<
  DrawerNavigationOptions,
  typeof Navigator
>(Navigator);
