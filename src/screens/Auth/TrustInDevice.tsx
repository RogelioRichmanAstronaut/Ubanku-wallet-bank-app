import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleCenterTwoButtons from '../../components/molecules/UTitleSubtitleCenterTwoButtons';

const TrustInDevice = ({route}: any) => {
  const navigation = useNavigation();

  const {phoneNumber} = route.params;
  const handleTrustDevice = () => {
    // Navegar a EnterCustomPin
    navigation.navigate(
      'EnterCustomPin' as never,
      {phoneNumber, trustInDevice: true} as never,
    );
  };

  const handleDontTrust = () => {
    navigation.navigate(
      'EnterCustomPin' as never,
      {phoneNumber, trustInDevice: false} as never,
    );
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  return (
    <UTitleSubtitleCenterTwoButtons
      title="Confías en este dispositivo?"
      subtitle="No volveremos a solicitarte una verificación si marcas este dispositivo como confiable.
      Deseas agregarlo como un dispositivo seguro? "
      onPressBackButton={handleBackPress}
      firstButtonTitle="Si agregar"
      onPressCloseButton={handleClosePress}
      onPressFirstButton={handleTrustDevice}
      onPressSecondButton={handleDontTrust}
      secondButtonTitle="No agregar"
      icon={require('../../assets/icons/shieldIcon.png')}
    />
  );
};
export default TrustInDevice;
