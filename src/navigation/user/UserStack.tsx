import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserPage from '../../screens/User/UserPage';
import ReferralsPage from '../../screens/User/ReferralsPage';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserPage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserPage" component={UserPage} />
      <Stack.Screen name="ReferralsPage" component={ReferralsPage} />
      {/* More screens to be added */}
    </Stack.Navigator>
  );
};

export default UserStack;
