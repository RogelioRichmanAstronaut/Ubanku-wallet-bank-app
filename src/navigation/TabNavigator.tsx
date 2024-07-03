import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeWallet from '../screens/HomeWallet';
import Home from '../screens/Home';
// import Market from '../views/pages/Market';
// import Invest from '../views/pages/Invest';
// import History from '../views/pages/History';
// import Help from '../views/pages/Help';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Billetera" component={HomeWallet} />
      {/* <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Invest" component={Invest} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Help" component={Help} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
