import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendPage from '../../screens/Wallet/SendPage';
import {ParamListBase} from '@react-navigation/native';
import SendDetailsPage from '../../screens/Wallet/SendDetailsPage';
import SendConfirmPage from '../../screens/Wallet/SendConfirmPage';

export type SendStackParamList = ParamListBase & {};

const Stack = createNativeStackNavigator<SendStackParamList>();

const SendStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SendPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SendPage" component={SendPage} />
      <Stack.Screen name="SendDetailsPage" component={SendDetailsPage} />
      <Stack.Screen name="SendConfirmPage" component={SendConfirmPage} />

      {/* More screens to be added */}
    </Stack.Navigator>
  );
};

export default SendStack;
