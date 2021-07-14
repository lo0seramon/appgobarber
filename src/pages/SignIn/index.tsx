import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
} from './style';

const SignIn: React.FC = () => {
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Image source={logoImg} />

        <View>
          <Title>Faça seu logon</Title>
        </View>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('click');
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log('esqueci minha senha');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccount
        onPress={() => {
          console.log('criar conta');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountText>CriarConta</CreateAccountText>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
