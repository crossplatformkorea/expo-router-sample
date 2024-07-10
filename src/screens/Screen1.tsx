import type {ReactElement} from 'react';
import React from 'react';
import styled from '@emotion/native';
import {Button} from 'dooboo-ui';

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: blue;
  margin-bottom: 8px;
`;

function Page({onPress}: {onPress: () => void}): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 1</StyledText>
      <Button onPress={onPress} text="Screen 2" type="text" />
    </Container>
  );
}

export default Page;
