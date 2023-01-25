import {useRouter} from 'expo-router';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import Screen3 from '../../src/screens/Screen3';

export default (): ReactElement => {
  const router = useRouter();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Screen3 onPress={() => router.push('stack/screen4')} />
    </View>
  );
};
