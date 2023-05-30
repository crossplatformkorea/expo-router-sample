import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useRouter} from 'expo-router';

import Screen1 from '../../src/screens/Screen1';

export default (): ReactElement => {
  const router = useRouter();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Screen1 onPress={() => router.push('stack/screen2')} />
    </View>
  );
};
