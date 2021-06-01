import React, {useState, useContext} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.styles';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
// import {AuthenticationContext} from '../../../services/authentication/authentication.context';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {onLogin, error, isLoading} = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountContainer>
        <Text variant="label">Email</Text>
        <AuthInput
          // label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <Text variant="label">Passwords</Text>
          <AuthInput
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        {true && (
          <ErrorContainer size="large">
            <Text variant="label">Error</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {/* {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              // onPress={() => onLogin(email, password)}
              >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )} */}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          <Text variant="label">LOG IN</Text>
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
