import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, ForgotPassword, ForgotPasswordText } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('click');
        }}
      >
        Entrar
      </Button>

      <ForgotPassword onPress={() => {}}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
    </Container>
  );
};

export default SignIn;
