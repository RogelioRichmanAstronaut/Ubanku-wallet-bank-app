import React, {useState} from 'react';
import {FormControl, Input, WarningOutlineIcon} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import UPinInputs from '../../components/molecules/UPinInputs';
import {RootStackParamList} from '../../navigation/AuthNavigator';

type ChangePinPageProps = {
  route: RouteProp<RootStackParamList, 'ChangePinPage'>;
};

const ChangePinPage = ({route}: ChangePinPageProps) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  const {phoneNumber, verificationCode} = route.params;
  const {changePassword} = useAuth();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  const handlePinChange = (value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      setPin(value);
    }
  };

  const handleCreatePinPress = async () => {
    if (pin.length === 4) {
      const response = await changePassword({
        ...phoneNumber,
        type: 'sms',
        code: verificationCode,
        new_pin: pin,
      });
      // console.log(response);
      if (response.password_changed) {
        navigation.navigate(
          'EnterCustomPin' as never,
          {phoneNumber, trustInDevice: false} as never,
        );
      } else if (!response.password_changed) {
        setError(
          'Código de verificación incorrecto, vuelva e intente nuevamente',
        );
      }
    }
  };

  return (
    <UTitleSubtitleWrapper
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      title="Crea un nuevo PIN"
      subtitle="Escribe tu nuevo PIN de seguridad para recuperar tu cuenta Ubanku 👀"
      onPressButton={handleCreatePinPress}
      isDisabled={pin.length < 4}
      buttonTitle="Confirmar">
      {/* <Input
        keyboardType="numeric"
        maxLength={4}
        value={pin}
        onChangeText={handlePinChange}
        textAlign="center"
        width="100%"
      /> */}
      <FormControl isInvalid={error !== null}>
        <UPinInputs
          setError={error != null}
          size={4}
          value={pin}
          setValue={setPin}
          onHandleSubmit={handleCreatePinPress}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </UTitleSubtitleWrapper>
  );
};

export default ChangePinPage;
