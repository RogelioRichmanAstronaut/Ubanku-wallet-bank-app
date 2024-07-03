import React, {useRef, useState} from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  Checkbox,
  Select,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native';
import {RootStackParamList} from '../../navigation/AuthNavigator';
import useUserForm from '../../hooks/Auth/useUserForm';
import iRegisterNewUserData from '../../interfaces/Auth/iRegisterNewUserData';

type RegistrationPageProps = {
  route: RouteProp<RootStackParamList, 'RegistrationPage'>;
};

const validateName = (text: string) => (text ? '' : 'Ingresa un nombre');
const validateEmail = (text: string) =>
  /\S+@\S+\.\S+/.test(text) ? '' : 'Ingresa un correo válido';
const validateDream = (text: string) => (text ? '' : 'Ingresa un sueño');
const validateUniversity = (text: string) =>
  text ? '' : 'Selecciona una universidad';
const validateReferralCode = (text: string) =>
  text === '' || text.length === 5
    ? ''
    : 'El código de referido debe tener 5 dígitos';

const RegistrationPage = ({route}: RegistrationPageProps) => {
  const navigation = useNavigation();
  const name = useUserForm('', validateName);
  const email = useUserForm('', validateEmail);
  const dream = useUserForm('', validateDream);
  const university = useUserForm('', validateUniversity);
  const referralCode = useUserForm('', validateReferralCode);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {register} = useAuth();
  const {phoneNumber} = route.params;

  const emailInputRef = useRef<TextInput>(null);
  const dreamInputRef = useRef<TextInput>(null);
  const universityInputRef = useRef<TextInput>(null);
  const referralCodeInputRef = useRef<TextInput>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };
  const handleCreateAccount = () => {
    // Aquí guardaríamos la información del usuario en AsyncStorage
    const newUser: iRegisterNewUserData = {
      first_name: name.value,
      cellphone: phoneNumber.cellphone,
      phone_code: phoneNumber.phone_code,
      dream_name: dream.value,
      email: email.value,
      university_id: university.value,
      is_student: true,
      pin: '',
    };

    // // Navegar a la página de creación de PIN
    navigation.navigate(
      'CreatePinPage' as never,
      {newUserData: newUser} as never,
    );
  };

  const handleRegisterPress = () => {
    const fields = [name, email, dream, university, referralCode];

    const allValid = fields.every(field => {
      field.validate(); // valida cada campo
      return field.error === '';
    });

    if (allValid && termsAccepted) {
      handleCreateAccount();
    }
  };

  return (
    <UTitleSubtitleWrapper
      title="Regístrate"
      subtitle="Bienvenidx! Para completar tu perfil necesitamos algunos datos"
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <Box style={{flex: 1}}>
          <Box flex={0.85}>
            <VStack space={2} width="100%" flex={1}>
              <FormControl isInvalid={name.error !== ''}>
                <FormControl.Label color={'text.500'}>Nombre</FormControl.Label>
                <Input
                  placeholder="Juan Ramirez"
                  value={name.value}
                  onChangeText={name.onChange}
                  onSubmitEditing={() => emailInputRef.current?.focus()}
                  returnKeyType="next"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {name.error}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={email.error !== ''}>
                <FormControl.Label color={'text.500'}>Correo</FormControl.Label>
                <Input
                  placeholder="juan@gmail.com"
                  value={email.value}
                  onChangeText={email.onChange}
                  keyboardType="email-address"
                  onSubmitEditing={() => dreamInputRef.current?.focus()}
                  returnKeyType="next"
                  ref={emailInputRef}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {email.error}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={dream.error !== ''}>
                <FormControl.Label color={'text.500'}>
                  ¿Cuál es tu sueño más grande?
                </FormControl.Label>
                <Input
                  placeholder="Ir a Europa"
                  value={dream.value}
                  onChangeText={dream.onChange}
                  onSubmitEditing={() => universityInputRef.current?.focus()}
                  returnKeyType="next"
                  ref={dreamInputRef}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {dream.error}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={university.error !== ''}>
                <FormControl.Label color={'text.500'}>
                  ¿En que universidad estudias?
                </FormControl.Label>
                <Select
                  accessibilityLabel="Elegir universidad"
                  selectedValue={university.value}
                  onValueChange={university.onChange}
                  placeholder="Selecciona una">
                  <Select.Item label="Andes" value="andes" />
                  <Select.Item label="Bosque" value="bosque" />
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {university.error}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={referralCode.error !== ''}>
                <FormControl.Label color={'text.500'}>
                  Ingresa tu código de referido
                </FormControl.Label>
                <Input
                  placeholder="ADG235 (opcional)"
                  value={referralCode.value}
                  onChangeText={referralCode.onChange}
                  keyboardType="numeric"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {referralCode.error}
                </FormControl.ErrorMessage>
                <Text fontSize={12} my={2} color={'text.500'}>
                  Solo si aplica
                </Text>
              </FormControl>
            </VStack>
          </Box>

          <Box flex={0.15}>
            <VStack space={3} justifyContent={'flex-end'}>
              <Checkbox
                value={termsAccepted}
                onChange={isChecked => setTermsAccepted(isChecked)}>
                <Text fontSize={12} width={'90%'} color={'text.900'}>
                  Entiendes y aceptas los{' '}
                  <Text color={'primary.800'}>términos del servicio</Text> y las{' '}
                  <Text color={'primary.800'}>políticas de privacidad</Text>
                </Text>
              </Checkbox>

              <Button
                onPress={handleRegisterPress}
                width="100%"
                mb={2}
                isDisabled={!termsAccepted}>
                Create my account
              </Button>
            </VStack>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </UTitleSubtitleWrapper>
  );
};

export default RegistrationPage;
