import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {InputTemplateUbanku} from './InputTemplateUbanku';

interface PhoneLoginFormProps {
  phone: string;
  onChangePhone: (text: string) => void;
  password: string;
  onChangePassword: (text: string) => void;
}

const PhoneLoginForm = ({
  phone,
  onChangePhone,
  password,
  onChangePassword,
}: PhoneLoginFormProps) => {
  return (
    <View>
      <InputTemplateUbanku
        type="number-pad"
        value={phone}
        onChangeText={onChangePhone}
        placeholder={'Celular'}
        imageSource={require('../../assets/icons/phoneIcon.png')}
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
export default PhoneLoginForm;
