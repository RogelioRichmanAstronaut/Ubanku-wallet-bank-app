import React from 'react';
import {Box, Button, HStack, FormControl, Input, Text, Icon} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../navigation/AuthNavigator';
import {useAuth} from '../../contexts/AuthContext';
import iRegisterPhoneData from '../../interfaces/Auth/iRegisterPhoneData';

type VerificationMessageProps = {
  route: RouteProp<RootStackParamList, 'VerificationMessage'>;
};

const VerificationMessage = ({route}: VerificationMessageProps) => {
  const navigation = useNavigation();
  const {phoneNumber, newUser} = route.params;
  const {sendVerificationCode} = useAuth();
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  const handleSMSVerificationPress = async () => {
    const user: iRegisterPhoneData = {...phoneNumber, type: 'sms'};
    const response = await sendVerificationCode(user);
    if (
      response.sent &&
      response.cellphone === phoneNumber.phone_code + phoneNumber.cellphone
    ) {
      navigation.navigate(
        'VerificationPage' as never,
        {
          phoneNumber: user,
          newUser,
        } as never,
      );
    }
  };

  const handleWhatsAppVerificationPress = async () => {
    const user: iRegisterPhoneData = {...phoneNumber, type: 'wsp'};

    const response = await sendVerificationCode(user);
    if (response.sent) {
      navigation.navigate(
        'VerificationPage' as never,
        {phoneNumber: user, newUser} as never,
      );
    }
  };

  return (
    <UTitleSubtitleWrapper
      title="Verificación"
      subtitle="Enviaremos un código de verificación al número que indicaste, elige
          a dónde quieres recibirlo."
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}>
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
      <HStack space={2} justifyContent="space-between">
        <Button
          onPress={handleWhatsAppVerificationPress}
          width="48%"
          leftIcon={
            <Icon
              as={FontAwesome}
              name="whatsapp"
              color="secondary.500"
              size={'sm'}
            />
          }>
          <Text color={'text.900'} fontWeight={'500'}>
            Whatsapp
          </Text>
        </Button>
        <Button
          onPress={handleSMSVerificationPress}
          width="48%"
          variant="subtle"
          leftIcon={
            <Icon
              as={FontAwesome}
              name="comment-o"
              color="neutral.0"
              size={'sm'}
            />
          }>
          <Text color={'neutral.0'} fontWeight={'500'}>
            SMS
          </Text>
        </Button>
      </HStack>
    </UTitleSubtitleWrapper>
  );
};

export default VerificationMessage;
