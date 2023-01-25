import {SafeAreaView, Text, View} from 'react-native';

import type {ReactNode} from 'react';
import {Icon} from 'dooboo-ui';
import {useRouter} from 'expo-router';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = (): ReactNode => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 18, marginVertical: 12}}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="chevron-left-light" size={24} />
      </TouchableOpacity>
      <View style={{height: 28}} />
      <Text style={{fontSize: 24}}>Sign In</Text>
    </SafeAreaView>
  );
};

export default SignIn;
