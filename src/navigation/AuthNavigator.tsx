import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import HelloScreen from '../screens/Auth/HelloScreen';
import AuthenticationPage from '../screens/Auth/AuthenticationPage';
import VerificationMessage from '../screens/Auth/VerificationMessage';
import VerificationPage from '../screens/Auth/VerificationPage';
import RegistrationPage from '../screens/Auth/RegistrationPage';
import CreatePinPage from '../screens/Auth/CreatePinPage';
import TrustInDevice from '../screens/Auth/TrustInDevice';
import EnterCustomPin from '../screens/Auth/EnterCustomPin';
import ForgotPinVerification from '../screens/Auth/ForgotPinVerification';
import ChangePinPage from '../screens/Auth/ChangePinPage';
import iRegisterPhoneData from '../interfaces/Auth/iRegisterPhoneData';
import iRegisterNewUserData from '../interfaces/Auth/iRegisterNewUserData';

export type RootStackParamList = ParamListBase & {
  VerificationMessage: {phoneNumber: iRegisterPhoneData; newUser: boolean};
  VerificationPage: {phoneNumber: iRegisterPhoneData; newUser: boolean};
  RegistrationPage: {phoneNumber: iRegisterPhoneData};
  CreatePinPage: {newUserData: iRegisterNewUserData};
  TrustInDevice: {phoneNumber: iRegisterPhoneData};
  EnterCustomPin: {phoneNumber: iRegisterPhoneData; trustInDevice: boolean};
  ForgotPinVerification: {phoneNumber: iRegisterPhoneData};
  ChangePinPage: {phoneNumber: iRegisterPhoneData; verificationCode: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HelloScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HelloScreen" component={HelloScreen} />
      <Stack.Screen name="AuthenticationPage" component={AuthenticationPage} />
      <Stack.Screen
        name="VerificationMessage"
        component={VerificationMessage}
      />
      <Stack.Screen name="VerificationPage" component={VerificationPage} />
      <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
      <Stack.Screen name="CreatePinPage" component={CreatePinPage} />
      <Stack.Screen name="TrustInDevice" component={TrustInDevice} />
      <Stack.Screen name="EnterCustomPin" component={EnterCustomPin} />
      <Stack.Screen
        name="ForgotPinVerification"
        component={ForgotPinVerification}
      />
      <Stack.Screen name="ChangePinPage" component={ChangePinPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
