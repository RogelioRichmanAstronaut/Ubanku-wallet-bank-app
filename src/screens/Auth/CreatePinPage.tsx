import React, {useState} from 'react';
import {Input} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import UPinInputs from '../../components/molecules/UPinInputs';
import {RootStackParamList} from '../../navigation/AuthNavigator';

type CreatePinPageProps = {
  route: RouteProp<RootStackParamList, 'CreatePinPage'>;
};

const CreatePinPage = ({route}: CreatePinPageProps) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const {newUserData} = route.params;
  const {register} = useAuth();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  const handlePinChange = (value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      setPin(value);
    }
  };

  const handleCreatePinPress = async () => {
    if (pin.length === 4) {
      try {
        await register({...newUserData, pin: pin});
      } catch (error) {
        console.log('Error in register', error);
      }
      //   navigation.navigate('Home');
    }
  };

  return (
    <UTitleSubtitleWrapper
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      title="Create 4-Digit PIN"
      subtitle="Please create a new 4-digit PIN to access the app."
      onPressButton={handleCreatePinPress}
      isDisabled={pin.length < 4}
      buttonTitle="Create PIN">
      {/* <Input
        keyboardType="numeric"
        maxLength={4}
        value={pin}
        onChangeText={handlePinChange}
        textAlign="center"
        width="100%"
      /> */}
      <UPinInputs
        // setError={error}
        size={4}
        value={pin}
        setValue={setPin}
        onHandleSubmit={handleCreatePinPress}
      />
    </UTitleSubtitleWrapper>
  );
};

export default CreatePinPage;
