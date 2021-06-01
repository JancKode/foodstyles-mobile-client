import styled from 'styled-components/native';
import {Button, TextInput} from 'react-native-paper';
import {colors} from '../../../infrastructure/theme/colors';
import {Text} from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/bg_home.png'),
})`
  flex: 1;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${props => props.theme.space[2]};
  border-radius: 50px;
  height: 63px;
  width: 175px;
  justify-content: center;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  height: 35px;
  padding: 7px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  width: 250px;
  max-width: 300px;
  align-items: center;
  align-self: center;
  background-color: ${props => props.theme.colors.bg.tertiary}
  margin-top: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[2]};
  padding: ${props => props.theme.space[2]};
  border-radius: 4px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${props => props.theme.space[2]};
`;
