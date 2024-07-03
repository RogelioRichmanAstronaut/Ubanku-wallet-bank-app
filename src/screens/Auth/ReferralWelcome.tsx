import React from 'react';
import {useNavigation} from '@react-navigation/native';
import UTitleSubtitleBasicTwoButtons from '../../components/molecules/UTitleSubtitleBasicTwoButtons';

const ReferralWelcome = ({route}: any) => {
  const navigation = useNavigation();

  const handleReferralWelcome = async () => {};

  const handleCancel = () => {
    navigation.navigate('HelloScreen' as never);
  };

  return (
    <UTitleSubtitleBasicTwoButtons
      title="Andy te ha invitado a su red de amigos!"
      subtitle="Has sido invitado a Ubanku para que empieces a cumplir tus sueños y por eso nosotros tenemos un regalo para ti! 🎁😉 "
      firstButtonTitle="Comenzar!"
      onPressFirstButton={handleReferralWelcome}
      onPressSecondButton={handleCancel}
      secondButtonTitle="Cancelar"
      icon={require('../assets/icons/congratsHandsIcon.png')}
    />
  );
};
export default ReferralWelcome;
