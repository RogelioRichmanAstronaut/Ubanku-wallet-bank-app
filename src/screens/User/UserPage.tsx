import React, {useState, useEffect} from 'react';
import UBubblePageNavigationAndOneButton from '../../components/molecules/UBubblePageNavigationAndOneButton';
import TitleAndSubtitle from '../../components/atoms/TitleAndSubtitle';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  ChevronRightIcon,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  Pressable,
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
import Feather from 'react-native-vector-icons/Feather';

import UPaymentMethodComponent from '../../components/organisms/wallet/UPaymentMethodComponent';
import UuserMenuPressable from '../../components/molecules/user/UuserMenuPressable';

const UserPage = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleContinuePress = () => {
    navigation.navigate('DepositDetailsPage' as never);
  };
  return (
    <UBubblePageNavigationAndOneButton
      bubbleColor="yellow.300"
      topComponent={
        <Box>
          <HStack alignItems={'center'} space={2} mt={2}>
            <Image
              alt="user default icon"
              source={require('../../assets/icons/userIcon.png')}
            />
            <UText size={20} weight={500} color="ubanku.2">
              Hola Andy!
            </UText>
          </HStack>
        </Box>
      }
      downComponent={
        <>
          <VStack my={5} space={4}>
            <UuserMenuPressable
              icon="user"
              text="Detalles del perfil"
              onPress={() => undefined}
            />
            <UuserMenuPressable
              icon="user-plus"
              text="Referidos"
              onPress={() => navigation.navigate('ReferralsPage' as never)}
            />
            <UuserMenuPressable
              icon="credit-card"
              text="Métodos de pago"
              onPress={() => undefined}
            />
            <UuserMenuPressable
              icon="shopping-bag"
              text="Tus pedidos"
              onPress={() => undefined}
            />
            <Divider />
            <UText weight={400} size={10} color="text.100">
              Ayuda
            </UText>
            <UuserMenuPressable
              icon="life-buoy"
              text="Soporte"
              onPress={() => undefined}
            />
            <UuserMenuPressable
              icon="help-circle"
              text="Preguntas Frecuentes"
              onPress={() => undefined}
            />
          </VStack>
        </>
      }
      onPressBackButton={handleBackPress}
    />
  );
};

export default UserPage;
