import React, {useState} from 'react';
import {Box, Text, Input, FormControl, Link} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import UPinInputs from '../../components/molecules/UPinInputs';
import {RootStackParamList} from '../../navigation/AuthNavigator';

type ForgotPinVerificationProps = {
  route: RouteProp<RootStackParamList, 'ForgotPinVerification'>;
};

const ForgotPinVerification = ({route}: ForgotPinVerificationProps) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const {phoneNumber} = route.params;

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
    // Aquí, asumimos que la validación del pin enviado por SMS fue exitosa.

    navigation.navigate(
      'ChangePinPage' as never,
      {phoneNumber, verificationCode: pin} as never,
    );
  };

  return (
    <UTitleSubtitleWrapper
      title="Recupera tu PIN"
      subtitle="Hemos enviado un código de verificación a tu celular, escríbelo aquí"
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      buttonTitle="Continuar"
      onPressButton={handleValidationPress}
      isDisabled={pin.length < 5}>
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
        // setError={error}
        value={pin}
        setValue={setPin}
        onHandleSubmit={handleValidationPress}
      />
    </UTitleSubtitleWrapper>
  );
};

export default ForgotPinVerification;
