import {Button} from 'dooboo-ui';
import type {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {useRouter} from 'expo-router';

const Index = (): ReactNode => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 22}}>Index</Text>
      <Button text="Sign In" onPress={() => router.push('/sign-in')} />
    </SafeAreaView>
  );
};

export default Index;
