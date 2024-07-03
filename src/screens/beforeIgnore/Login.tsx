import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useAuth} from '../../contexts/AuthContext';
import BackButton from '../../components/atoms/BackButton';
import UButton from '../../components/atoms/UButton';
import UText from '../../components/atoms/UText';
import EmailLoginForm from '../../components/molecules/EmailLoginForm';
import PhoneLoginForm from '../../components/molecules/PhoneLoginForm';
import TwoSimpleTabs from '../../components/molecules/TwoSimpleTabs';

const Login = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [passwordPhone, setPasswordPhone] = useState('');
  const [passwordEmail, setPasswordEmail] = useState('');
  const {signIn} = useAuth();
  const {goBack} = useNavigation();

  const handleSubmit = () => {
    // validate input and call signIn()
    signIn();
  };

  const PhoneForm = (
    <PhoneLoginForm
      phone={phone}
      onChangePhone={setPhone}
      password={passwordPhone}
      onChangePassword={setPasswordPhone}
    />
  );
  const EmailForm = (
    <EmailLoginForm
      email={email}
      onChangeEmail={setEmail}
      password={passwordEmail}
      onChangePassword={setPasswordEmail}
    />
  );

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView style={{padding: '5%', flex: 1}}>
        <BackButton onPress={goBack} />
        <UText
          size={20}
          weight={600}
          style={{textAlign: 'center', paddingVertical: '5%'}}>
          Inicia Sesión
        </UText>
        <TwoSimpleTabs
          titleTabOne="Celular"
          ComponentTabOne={PhoneForm}
          ComponentTabTwo={EmailForm}
          titleTabTwo="Correo"
        />
        <UButton onPress={() => null} text="Ingresar" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
