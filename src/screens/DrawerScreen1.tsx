import type {ReactElement} from 'react';
import React from 'react';
import styled from '@emotion/native';
import {Button} from 'dooboo-ui';
import {useNavigation} from 'expo-router';

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: blue;
  margin-bottom: 8px;
`;

function Page(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <StyledText testID="myText">Screen 1</StyledText>
      <Button
        // @ts-ignore
        onPress={(): void => navigation.openDrawer()}
        text="Open Drawer"
      />
    </Container>
  );
}

export default Page;
