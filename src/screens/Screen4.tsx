import styled from '@emotion/native';
import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import React from 'react';

const Container = styled.View`
  flex: 1;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: white;
`;

function Page({onPress}: {onPress: () => void}): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 4</StyledText>
      <Button type="text" text="Screen 1" onPress={onPress} />
    </Container>
  );
}

export default Page;
