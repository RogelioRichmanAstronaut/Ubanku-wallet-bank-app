import React from 'react';
import {useNavigation} from '@react-navigation/native';
import UTitleSubtitleBasicTwoButtons from '../../components/molecules/UTitleSubtitleBasicTwoButtons';
import UBasicCard from '../../components/atoms/UBasicCard';
import {VStack} from 'native-base';
import USpacedTexts from '../../components/atoms/USpacedTexts';
import UText from '../../components/atoms/UText';

const WithdrawConfirmPage = ({route}: any) => {
  const navigation = useNavigation();

  const handleWithdrawConfirmPage = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <UTitleSubtitleBasicTwoButtons
      background="empathy.main"
      title="¡Retiro confirmado!"
      subtitle="El dinero entrara a tu cuenta entre 1 a 2 días hábiles, en caso de que tengas dudas comunícate con nosotros"
      firstButtonTitle="Gracias"
      firstButtonVariant="subtle"
      onPressFirstButton={handleWithdrawConfirmPage}
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
export default WithdrawConfirmPage;
