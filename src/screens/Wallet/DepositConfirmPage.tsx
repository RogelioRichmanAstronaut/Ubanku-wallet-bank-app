import React from 'react';
import {useNavigation} from '@react-navigation/native';
import UTitleSubtitleBasicTwoButtons from '../../components/molecules/UTitleSubtitleBasicTwoButtons';
import UBasicCard from '../../components/atoms/UBasicCard';
import {VStack} from 'native-base';
import USpacedTexts from '../../components/atoms/USpacedTexts';
import UText from '../../components/atoms/UText';

const DepositConfirmPage = ({route}: any) => {
  const navigation = useNavigation();

  const handleDepositConfirmPage = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <UTitleSubtitleBasicTwoButtons
      background="empathy.main"
      title="¡Recarga exitosa!"
      subtitle="Hemos completado el proceso de recargar, si tienes alguna duda comunícate con nosotros!"
      firstButtonTitle="Gracias"
      firstButtonVariant="subtle"
      onPressFirstButton={handleDepositConfirmPage}
      icon={require('../../assets/icons/success.png')}
      additionalComponent={
        <UBasicCard>
          <VStack mt={0} space={3.5}>
            <USpacedTexts
              textLeft="Tienda"
              colorLeft="text.700"
              textRight="Ubanku"
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
              textLeft="Valor recargado:"
              colorLeft="text.700"
              textRight="200.000 UCOP"
              colorRight="text.900"
              weightLeft={500}
            />
          </VStack>
        </UBasicCard>
      }
    />
  );
};
export default DepositConfirmPage;
