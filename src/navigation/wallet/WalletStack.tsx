import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import WalletTransactionsPage from '../../screens/Wallet/WalletTransactionsPage';

export type WalletStackParamList = ParamListBase & {};

const Stack = createNativeStackNavigator<WalletStackParamList>();

const WalletStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WalletTransactionsPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="WalletTransactionsPage"
        component={WalletTransactionsPage}
      />

      {/* More screens to be added */}
    </Stack.Navigator>
  );
};

export default WalletStack;
