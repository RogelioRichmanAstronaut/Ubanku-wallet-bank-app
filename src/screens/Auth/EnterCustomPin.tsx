import React, {useState} from 'react';
import {Text, Input, FormControl, WarningOutlineIcon} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import {Link} from 'native-base';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import UPinInputs from '../../components/molecules/UPinInputs';
import {RootStackParamList} from '../../navigation/AuthNavigator';
import iRegisterPhoneData from '../../interfaces/Auth/iRegisterPhoneData';

type EnterCustomPinProps = {
  route: RouteProp<RootStackParamList, 'EnterCustomPin'>;
};

const EnterCustomPin = ({route}: EnterCustomPinProps) => {
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const {phoneNumber, trustInDevice} = route.params;

  const {login, loginError, sendVerificationCode} = useAuth();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };
  const handleForgotPinPress = async () => {
    const user: iRegisterPhoneData = {...phoneNumber, type: 'sms'};
    const response = await sendVerificationCode(user);
    if (
      response.sent &&
      response.cellphone === phoneNumber.phone_code + phoneNumber.cellphone
    ) {
      navigation.navigate(
        'ForgotPinVerification' as never,
        {
          phoneNumber: user,
        } as never,
      );
    }
  };

  const handleValidationPress = async () => {
    await login({...phoneNumber, pin}, trustInDevice);
    // console.log(loginError, 'primero');
    if (loginError) {
      setError('Pin incorrecto');
    }
  };

  return (
    <UTitleSubtitleWrapper
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      title="Ingresa tu PIN"
      subtitle="Escribe tu PIN de seguridad para acceder a tu cuenta Ubanku"
      buttonTitle="Confirmar       "
      onPressButton={handleValidationPress}
      isDisabled={pin.length !== 4}>
      <FormControl isInvalid={error !== null}>
        {/* <Input
          type="password"
          keyboardType="numeric"
          maxLength={4}
          value={pin}
          onChangeText={setPin}
          placeholder="PIN"
          textAlign="center"
        /> */}
        <UPinInputs
          setError={error != null}
          isPassword
          size={4}
          value={pin}
          setValue={setPin}
          onHandleSubmit={handleValidationPress}
        />

        {/* <Input
            type="password"
            keyboardType="number-pad"
            maxLength={4}
            value={pin}
            onChangeText={text => {
              if (text.length <= 4) {
                setPin(text);
                if (text.length === 4) {
                  handleValidationPress();
                }
              }
            }}
            placeholder="PIN"
            textAlign="center"
          /> */}
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
      <Text
        fontSize="sm"
        textAlign="center"
        mt={4}
        position="absolute"
        bottom={5}
        right={0}
        left={0}>
        Olvidaste tu PIN?{' '}
        <Link _text={{color: 'primary.800'}} onPress={handleForgotPinPress}>
          Recupéralo aquí
        </Link>
      </Text>
    </UTitleSubtitleWrapper>
  );
};

export default EnterCustomPin;
