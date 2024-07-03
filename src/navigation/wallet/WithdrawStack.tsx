import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import WithdrawConfirmPage from '../../screens/Wallet/WithdrawConfirmPage';
import WithdrawDetailsPage from '../../screens/Wallet/WithdrawDetailsPage';
import WithdrawPage from '../../screens/Wallet/WithdrawPage';

export type WithdrawStackParamList = ParamListBase & {};

const Stack = createNativeStackNavigator<WithdrawStackParamList>();

const WithdrawStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SendPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WithdrawPage" component={WithdrawPage} />
      <Stack.Screen
        name="WithdrawDetailsPage"
        component={WithdrawDetailsPage}
      />
      <Stack.Screen
        name="WithdrawConfirmPage"
        component={WithdrawConfirmPage}
      />

      {/* More screens to be added */}
    </Stack.Navigator>
  );
};

export default WithdrawStack;
