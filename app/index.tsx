import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {Button, useDooboo} from 'dooboo-ui';
import {SplashScreen, useRouter} from 'expo-router';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({theme}) => theme.bg.basic};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

function Intro(): React.ReactElement {
  const router = useRouter();
  const {assetLoaded} = useDooboo();

  if (!assetLoaded) {
    return <SplashScreen />;
  }

  return (
    <Container>
      <ButtonWrapper>
        <View style={{marginTop: 8}} />
        <Button
          onPress={() => router.push('/sign-in')}
          style={{
            marginBottom: 8,
          }}
          testID="authStack"
          text="Switch Navigator"
        />
        <Button
          onPress={() => router.push('/stack')}
          style={{
            marginBottom: 8,
          }}
          testID="btnStack"
          text="Stack Navigator"
        />
        <Button
          onPress={() => router.push('/drawer')}
          style={{marginBottom: 8}}
          testID="btnDrawer"
          text="Drawer Navigator"
        />
        <Button
          onPress={(): void => router.push('/tabs')}
          style={{
            marginBottom: 8,
          }}
          testID="btnTabs"
          text="BottomTab Navigator"
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
