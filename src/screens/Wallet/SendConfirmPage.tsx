import React from 'react';
import {useNavigation} from '@react-navigation/native';
import UTitleSubtitleBasicTwoButtons from '../../components/molecules/UTitleSubtitleBasicTwoButtons';
import UBasicCard from '../../components/atoms/UBasicCard';
import {VStack} from 'native-base';
import USpacedTexts from '../../components/atoms/USpacedTexts';
import UText from '../../components/atoms/UText';

const SendConfirmPage = ({route}: any) => {
  const navigation = useNavigation();

  const handleSendConfirmPage = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <UTitleSubtitleBasicTwoButtons
      background="empathy.main"
      title="¡Envío exitoso!"
      subtitle="Tus puntos han sido enviados, verifica tu nuevo saldos en tu billetera"
      firstButtonTitle="Gracias"
      firstButtonVariant="subtle"
      onPressFirstButton={handleSendConfirmPage}
      icon={require('../../assets/icons/success.png')}
      additionalComponent={
        <UBasicCard>
          <VStack mt={0} space={3.5}>
            <USpacedTexts
              textLeft="Enviado a:"
              colorLeft="text.700"
              textRight="Juan Bernal"
              colorRight="text.900"
              weightLeft={500}
            />
            <USpacedTexts
              textLeft="# Transacción:"
              colorLeft="text.700"
              textRight="123456789"
              colorRight="text.900"
              weightLeft={500}
            />
            <USpacedTexts
              textLeft="Valor enviado:"
              colorLeft="text.700"
              textRight="15.000 UCOP"
              colorRight="text.900"
              weightLeft={500}
            />
          </VStack>
        </UBasicCard>
      }
    />
  );
};
export default SendConfirmPage;
