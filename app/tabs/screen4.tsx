import {useRouter} from 'expo-router';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import Screen4 from '../../src/screens/Screen4';

export default (): ReactElement => {
  const router = useRouter();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Screen4 onPress={() => router.push('tabs/screen1')} />
    </View>
  );
};
