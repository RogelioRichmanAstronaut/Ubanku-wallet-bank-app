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

const SendDetailsPage = () => {
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
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleContinuePress = () => {
    navigation.navigate('SendConfirmPage' as never);
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="tertiary.100"
      topComponent={
        <Box marginY={10}>
          <TitleAndSubtitle
            title="Verifica tu información y confirma"
            subtitle="Confirma la información de tu envio y listo!"
          />
        </Box>
      }
      downComponent={
        <Box mt={5} justifyContent={'space-between'} flex={1}>
          <UBasicCard>
            <UText weight={400} size={12} color="text.600">
              Resumen de tu Envío
            </UText>
            <VStack mt={5} space={3.5}>
              <USpacedTexts
                textLeft="Enviar a:"
                colorLeft="text.700"
                textRight="3132329145"
                colorRight="text.700"
                weightLeft={500}
              />
              <USpacedTexts
                textLeft="Nombre:"
                colorLeft="text.700"
                textRight="Juan Bernal"
                colorRight="ubanku.2"
                weightLeft={500}
              />
              <USpacedTexts
                textLeft="Valor a Enviar"
                colorLeft="text.700"
                textRight="15.000 UCOP"
                colorRight="ubanku.2"
                weightLeft={500}
              />
            </VStack>
          </UBasicCard>
          <USpacedTexts
            textLeft="Enviar"
            fzLeft={18}
            colorLeft="ubanku.2"
            textRight="15.000 UCOP"
            fzRight={18}
            colorRight="ubanku.2"
            weightLeft={400}
          />
        </Box>
      }
      //   isDisabled={isDisabled}
      buttonTitle="Confirmar y enviar"
      onPressCloseButton={handleClosePress}
      onPressBackButton={handleBackPress}
      onPressButton={handleContinuePress}
    />
  );
};

export default SendDetailsPage;
