import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerItem} from '@react-navigation/drawer';
import {useRouter} from 'expo-router';
import {Drawer} from 'expo-router/drawer';

import type {ReactElement, ReactNode} from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function CustomDrawerContent({drawerPosition, navigation}: any): ReactElement {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={{flex: 1}}
    >
      <DrawerItem
        label="Screen1"
        onPress={(): void => {
          navigation.navigate('screen1');
          // router.replace('drawer/screen1');
        }}
      />
      <DrawerItem
        label="Screen2"
        onPress={(): void => {
          navigation.navigate('screen2');
        }}
      />
      <DrawerItem
        label="Close"
        onPress={(): void => {
          navigation.closeDrawer();
        }}
      />

      <DrawerItem
        label="Back"
        onPress={(): void => {
          router.replace('/');
        }}
      />
    </ScrollView>
  );
}

export default function Layout(): ReactNode {
  return (
    <Drawer
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props: DrawerContentComponentProps): ReactElement => (
        <CustomDrawerContent drawerPosition={undefined} {...props} />
      )}
    >
      <Drawer.Screen name="screen1" />
      <Drawer.Screen name="screen2" />
    </Drawer>
  );
}
