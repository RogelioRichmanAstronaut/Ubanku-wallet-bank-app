import React, {useState, useEffect} from 'react';
import UBubblePageNavigationAndOneButton from '../../components/molecules/UBubblePageNavigationAndOneButton';
import TitleAndSubtitle from '../../components/atoms/TitleAndSubtitle';
import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Image, Text, VStack, WarningIcon} from 'native-base';
import UBasicCard from '../../components/atoms/UBasicCard';
import USpacedTexts from '../../components/atoms/USpacedTexts';
import UPhoneInput from '../../components/atoms/UPhoneInput';
import iPhoneData from '../../interfaces/Auth/iPhoneData';
import {isValidPhone} from '../../utils/isValidPhone';
import ULine from '../../components/atoms/ULine';
import UCashInput from '../../components/atoms/UCashInput';
import UText from '../../components/atoms/UText';

const SendPage = () => {
  const navigation = useNavigation();
  const available: number = 20000;
  const [phoneError, setPhoneError] = useState<string>('');
  const [valueError, setValueError] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<iPhoneData>({
    phone_code: '57',
    cellphone: '',
  });

  useEffect(() => {
    if (value > available) {
      setIsDisabled(true);
      setValueError('No tienes esa cantidad disponible');
    } else if (value < 1000) {
      setIsDisabled(true);
      //   setValueError('El valor mínimo es de 1000');
    } else {
      setIsDisabled(false);
      setValueError('');
    }
  }, [value]);

  const handleClosePress = () => {
    navigation.goBack();
  };
  const handleContinuePress = () => {
    if (isValidPhone(phoneNumber.cellphone)) {
      setPhoneError(''); // Clear error message

      navigation.navigate('SendDetailsPage' as never);
    } else {
      setPhoneError('Número inválido'); // Set error message
    }
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="tertiary.100"
      topComponent={
        <Box marginY={10}>
          <TitleAndSubtitle
            title="Envía dinero a tus amigos "
            subtitle="Elige el monto que deseas enviar y el número de teléfono de quien lo recibirá"
          />
        </Box>
      }
      downComponent={
        <Box my={5}>
          <UBasicCard>
            <USpacedTexts
              textLeft="Puntos disponibles:"
              colorLeft="text.600"
              textRight="20.000 UCOP"
              colorRight="text.900"
              weightRight={500}
            />
            <Box my={5}>
              <UPhoneInput
                label="Número a quien envías"
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                error={phoneError}
              />
            </Box>
            <ULine />
            <Box flexDirection="row" mt={5}>
              <UText subtitle>Cuánto quieres enviar?</UText>
            </Box>

            <HStack width={'100%'} alignItems={'center'}>
              <Box flex={0.7}>
                <UCashInput value={value} setValue={setValue} />
              </Box>
              <Box flex={0.3} flexDir="row" justifyContent={'center'}>
                <Image
                  source={require('../../assets/icons/ucoin.png')}
                  alt="icon ubanku coin"
                />
                <UText ml={2} subtitle size={18} weight={400}>
                  UCOP
                </UText>
              </Box>
            </HStack>
            {valueError && (
              <HStack alignItems={'center'}>
                <WarningIcon size="xs" color={'error.600'} mr={2} />
                <Text fontWeight={400} fontSize={13} color={'error.600'}>
                  {valueError}
                </Text>
              </HStack>
            )}
          </UBasicCard>
        </Box>
      }
      isDisabled={isDisabled}
      buttonTitle="Continuar"
      onPressCloseButton={handleClosePress}
      onPressButton={handleContinuePress}
    />
  );
};

export default SendPage;
