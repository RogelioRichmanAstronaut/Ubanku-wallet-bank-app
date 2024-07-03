import React, {useState, useEffect} from 'react';
import UBubblePageNavigationAndOneButton from '../../components/molecules/UBubblePageNavigationAndOneButton';
import TitleAndSubtitle from '../../components/atoms/TitleAndSubtitle';
import {useNavigation} from '@react-navigation/native';
import {
  Alert,
  Box,
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
import UPaymentMethodComponent from '../../components/organisms/wallet/UPaymentMethodComponent';

const WithdrawPage = () => {
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
    navigation.navigate('WithdrawDetailsPage' as never);
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="tertiary.100"
      topComponent={
        <Box marginY={10}>
          <TitleAndSubtitle
            title="Retira tu dinero y recíbelo a donde quieras"
            subtitle="Vamos a vender tus UCOP y recibirás tu dinero a tu cuenta bancario o nequi"
          />
        </Box>
      }
      downComponent={
        <Box my={3} justifyContent={'space-between'} flex={1}>
          <UBasicCard>
            <USpacedTexts
              textLeft="Saldo disponible:"
              colorLeft="text.600"
              textRight="20.000 UCOP"
              colorRight="text.900"
              weightRight={500}
            />
            <Box flexDirection="row" mt={5}>
              <UText subtitle>Cuánto quieres retirar?</UText>
            </Box>

            <HStack width={'100%'} alignItems={'center'} mb={5}>
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
            <ULine />

            <VStack mt={5} space={5}>
              <UText subtitle>Elige donde quieres recibir tu dinero</UText>
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
          <Alert status="info" p={0} m={0} mt={2}>
            <HStack my={2} mx={0.5} space={2} alignItems="center">
              <Box flex={0.05}>
                <Alert.Icon />
              </Box>
              <Box flex={0.9}>
                <UText text size={14} color="text.900" weight={400}>
                  Recuerda que dinero podría tardar entre 1 - 2 días hábiles en
                  verse reflejada en tu cuenta
                </UText>
              </Box>
            </HStack>
          </Alert>
        </Box>
      }
      isDisabled={isDisabled}
      buttonTitle="Continuar"
      onPressCloseButton={handleClosePress}
      onPressButton={handleContinuePress}
    />
  );
};

export default WithdrawPage;
