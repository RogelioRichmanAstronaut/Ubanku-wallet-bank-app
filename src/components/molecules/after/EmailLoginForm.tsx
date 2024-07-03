import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {InputTemplateUbanku} from './InputTemplateUbanku';

interface EmailLoginFormFormProps {
  email: string;
  onChangeEmail: (text: string) => void;
  password: string;
  onChangePassword: (text: string) => void;
}

const EmailLoginForm = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
}: EmailLoginFormFormProps) => {
  return (
    <View>
      <InputTemplateUbanku
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
        imageSource={require('../../assets/icons/emailIcon.png')}
      />
      <InputTemplateUbanku
        value={password}
        onChangeText={onChangePassword}
        placeholder={'Contraseña'}
        imageSource={require('../../assets/icons/lockIcon.png')}
      />
    </View>
  );
};
export default EmailLoginForm;
