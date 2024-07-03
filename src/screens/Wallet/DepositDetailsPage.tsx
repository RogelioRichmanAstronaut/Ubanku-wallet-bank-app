import React, {useState, useEffect} from 'react';
import UBubblePageNavigationAndOneButton from '../../components/molecules/UBubblePageNavigationAndOneButton';
import TitleAndSubtitle from '../../components/atoms/TitleAndSubtitle';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
  WarningIcon,
} from 'native-base';
import UBasicCard from '../../components/atoms/UBasicCard';
import USpacedTexts from '../../components/atoms/USpacedTexts';
import UPhoneInput from '../../components/atoms/UPhoneInput';
import iPhoneData from '../../interfaces/Auth/iPhoneData';
import {isValidPhone} from '../../utils/isValidPhone';
import ULine from '../../components/atoms/ULine';
import UCashInput from '../../components/atoms/UCashInput';
import UText from '../../components/atoms/UText';

const DepositDetailsPage = () => {
  const navigation = useNavigation();
  const available: number = 20000;
  const [value, setValue] = useState<number>(0);

  const handleClosePress = () => {
    navigation.goBack();
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleContinuePress = () => {
    navigation.navigate('DepositConfirmPage' as never);
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="tertiary.100"
      topComponent={
        <Box marginY={10}>
          <TitleAndSubtitle
            title="Verifica tu información y confirma"
            subtitle="El dinero que recargas va a tu billetera Disponible para usarlo en nuestro Marketplace"
          />
        </Box>
      }
      downComponent={
        <Box mt={5} justifyContent={'space-between'} flex={1}>
          <UBasicCard>
            <UText weight={400} size={12} color="text.600">
              Resumen de tu Recarga
            </UText>
            <VStack mt={5} space={3.5}>
              <USpacedTexts
                textLeft="Valor de la Recarga"
                colorLeft="text.700"
                textRight="$200.000 COP"
                colorRight="ubanku.2"
                weightLeft={500}
              />
              <USpacedTexts
                textLeft="Conversión a UCOP"
                colorLeft="text.700"
                textRight="200.000 UCOP"
                colorRight="ubanku.2"
                weightLeft={500}
              />
              <USpacedTexts
                textLeft="Valor de la transacción"
                colorLeft="text.700"
                textRight="$0,00 COP"
                colorRight="text.700"
                weightLeft={500}
              />
            </VStack>

            <Divider my={5} />
            <UText weight={500} size={14} color="text.600">
              Método de pago
            </UText>
            <HStack mt={5}>
              <UText>Nequi - 3132329145 </UText>
            </HStack>
          </UBasicCard>
          <Box justifyItems={'flex-end'}>
            <USpacedTexts
              textLeft="Total a pagar"
              fzLeft={16}
              colorLeft="text.700"
              textRight="$200.000 COP "
              fzRight={18}
              colorRight="ubanku.2"
              weightLeft={500}
            />
          </Box>
        </Box>
      }
      //   isDisabled={isDisabled}
      buttonTitle="Confirmar y pagar"
      onPressCloseButton={handleClosePress}
      onPressBackButton={handleBackPress}
      onPressButton={handleContinuePress}
    />
  );
};

export default DepositDetailsPage;
