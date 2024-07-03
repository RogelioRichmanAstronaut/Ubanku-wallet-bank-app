import React from 'react';
import TabNavigator from './TabNavigator';
import SendStack from './wallet/SendNavigator';
import WalletStack from './wallet/WalletStack';
import DepositStack from './wallet/DepositStack';
import WithdrawStack from './wallet/WithdrawStack';
import UserStack from './user/UserStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ReloadScreen from '../screens/Reload';  //

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Tabs" component={TabNavigator} />
      <RootStack.Screen name="Send" component={SendStack} />
      <RootStack.Screen name="Wallet" component={WalletStack} />
      <RootStack.Screen name="Deposit" component={DepositStack} />
      <RootStack.Screen name="Withdraw" component={WithdrawStack} />
      <RootStack.Screen name="UserMenu" component={UserStack} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
