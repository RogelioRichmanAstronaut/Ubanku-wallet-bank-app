import React from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import EmailLoginForm from '../molecules/EmailLoginForm';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <SafeAreaView
      style={{position: 'relative', left: '0%', top: '0%', zIndex: 10}}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../assets/icons/arrowLeftIcon.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default BackButton;
