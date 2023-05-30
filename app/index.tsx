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
          testID="authStack"
          style={{
            marginBottom: 8,
          }}
          onPress={() => router.push('/sign-in')}
          text="Switch Navigator"
        />
        <Button
          testID="btnStack"
          style={{
            marginBottom: 8,
          }}
          onPress={() => router.push('/stack')}
          text="Stack Navigator"
        />
        <Button
          testID="btnDrawer"
          style={{marginBottom: 8}}
          onPress={() => router.push('/drawer')}
          text="Drawer Navigator"
        />
        <Button
          testID="btnTabs"
          style={{
            marginBottom: 8,
          }}
          onPress={(): void => router.push('/tabs')}
          text="BottomTab Navigator"
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
