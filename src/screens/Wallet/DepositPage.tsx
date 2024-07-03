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
import UPaymentMethodComponent from '../../components/organisms/wallet/UPaymentMethodComponent';

const DepositPage = () => {
  const navigation = useNavigation();
  const available: number = 20000;
  const [phoneError, setPhoneError] = useState<string>('');
  const [valueError, setValueError] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const handleClosePress = () => {
    navigation.goBack();
  };
  const handleContinuePress = () => {
    navigation.navigate('DepositDetailsPage' as never);
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="tertiary.100"
      topComponent={
        <Box marginY={10}>
          <TitleAndSubtitle
            title="Añade dinero a tu disponible"
            subtitle="El dinero que recargas va a tu billetera Disponible para usarlo en nuestro Marketplace"
          />
        </Box>
      }
      downComponent={
        <Box my={5}>
          <UBasicCard>
            <USpacedTexts
              textLeft="Saldo actual:"
              colorLeft="text.600"
              textRight="20.000 UCOP"
              colorRight="text.900"
              weightRight={500}
            />
            <Box flexDirection="row" mt={5}>
              <UText subtitle>Cuánto quieres recargar?</UText>
            </Box>

            <HStack width={'100%'} alignItems={'center'} mb={5}>
              <Box flex={0.7}>
                <UCashInput sign="$" value={value} setValue={setValue} />
              </Box>
              <Box flex={0.3} flexDir="row" justifyContent={'center'}>
                <Image
                  source={require('../../assets/icons/col.png')}
                  alt="icon colombia flag, cop coin"
                />
                <UText ml={2} subtitle size={18} weight={400}>
                  UCOP
                </UText>
              </Box>
            </HStack>
            <ULine />

            <VStack mt={5} space={5}>
              <UText subtitle>Elige tu método de pago:</UText>
              <UPaymentMethodComponent
                paymentMethods={[{type: 'Nequi', number: '305917'}]}
              />
            </VStack>

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

export default DepositPage;
