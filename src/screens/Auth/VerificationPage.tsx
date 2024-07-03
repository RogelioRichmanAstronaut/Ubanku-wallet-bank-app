import React, {useEffect, useState} from 'react';
import {Box, Text, Input, FormControl, HStack, Link, Button} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import UPinInputs from '../../components/molecules/UPinInputs';
import Countdown from '../../components/organisms/Countdown';
import {RootStackParamList} from '../../navigation/AuthNavigator';

type VerificationPageProps = {
  route: RouteProp<RootStackParamList, 'VerificationPage'>;
};

const VerificationPage = ({route}: VerificationPageProps) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<boolean>(false);
  const {phoneNumber, newUser} = route.params;
  const {checkVerificationCode, sendVerificationCode} = useAuth();

  const handleNewCodeRequest = async () => {
    const response = await sendVerificationCode(phoneNumber);
    if (
      response.sent &&
      response.cellphone === phoneNumber.phone_code + phoneNumber.cellphone
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  const handlePinChange = (value: string) => {
    if (/^\d{0,5}$/.test(value)) {
      setPin(value);
    }
  };

  const handleValidationPress = async () => {
    // Aquí, asumimos que la validación del pin enviado por SMS o WhatsApp fue exitosa.
    const response = await checkVerificationCode({...phoneNumber, code: pin});
    // console.log(response);
    if (response.valid) {
      if (newUser) {
        navigation.navigate(
          'RegistrationPage' as never,
          {phoneNumber} as never,
        );
      } else {
        navigation.navigate('TrustInDevice' as never, {phoneNumber} as never);
      }
    } else setError(true);
  };

  return (
    <UTitleSubtitleWrapper
      title="Verificación"
      subtitle="Hemos enviado el código de verificación a tu celular, escríbelo aquí"
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      buttonTitle="Validar"
      onPressButton={handleValidationPress}
      isDisabled={pin.length < 5}
      additionalComponent={
        <Countdown initialCount={60} onEndCount={handleNewCodeRequest} />
      }>
      <Box>
        <FormControl.Label color={'text.500'}>
          Número de celular
        </FormControl.Label>
        <Input
          keyboardType="phone-pad"
          placeholder="Ingresa tu número de celular"
          value={phoneNumber.cellphone}
          isDisabled
        />
      </Box>

      <UPinInputs
        setError={error}
        size={5}
        value={pin}
        setValue={setPin}
        onHandleSubmit={handleValidationPress}
      />

      <Link
        _text={{
          color: 'primary.600',
          textAlign: 'center',
          width: '100%',
        }}
        fontSize="sm"
        mt={4}
        position="absolute"
        bottom={5}
        onPress={null}>
        Necesitas ayuda?
      </Link>
    </UTitleSubtitleWrapper>
  );
};

export default VerificationPage;
