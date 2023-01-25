import {Icon, useTheme} from 'dooboo-ui';
import {useRouter} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import type {ReactElement} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';

function Header(): ReactElement {
  const router = useRouter();
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.bg.basic,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <StatusBar />
      <TouchableOpacity onPress={() => router.back()} style={{padding: 12}}>
        <Icon name="chevron-left-light" size={18} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;
