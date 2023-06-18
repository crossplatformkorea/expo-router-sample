import type {ReactNode} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Icon} from 'dooboo-ui';
import {useRouter} from 'expo-router';

const SignIn = (): ReactNode => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 18, marginVertical: 12}}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="CaretLeft" size={24} />
      </TouchableOpacity>
      <View style={{height: 28}} />
      <Text style={{fontSize: 24}}>Sign In</Text>
      <Button
        type="text"
        text="Sign Up"
        onPress={() => router.push('sign-up')}
      />
    </SafeAreaView>
  );
};

export default SignIn;
