import {useRouter} from 'expo-router';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import Screen2 from '../../src/screens/Screen2';

export default (): ReactElement => {
  const router = useRouter();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Screen2 onPress={() => router.push('tabs/screen3')} />
    </View>
  );
};
