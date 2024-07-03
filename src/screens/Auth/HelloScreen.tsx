import React from 'react';
import {Box, VStack, Image, Button, Text, Icon} from 'native-base';
import {useTheme} from 'native-base';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HelloScreen = ({onLoginRegisterPress}: any) => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('AuthenticationPage' as never);
  };

  const handleRegisterPress = () => {
    onLoginRegisterPress();
    // navigation.navigate('RegistrationPage');
  };
  const theme = useTheme();
  return (
    <Box flex={1} alignItems="center" backgroundColor={'white'}>
      <Image
        source={require('../../assets/images/bgDreamMaker.png')}
        alt="Background Image"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        resizeMode="cover"
      />
      <SafeAreaView style={{flex: 1}}>
        <VStack flex={1} space={4}>
          <Box flex={0.2} alignItems="center">
            <Image
              source={require('../../assets/images/Logo_ubanku_principal_borde2x.png')}
              alt="Top Image"
            />
          </Box>
          <Box flex={0.5} justifyContent="center" alignItems="center">
            <Image
              source={require('../../assets/images/dreamMakerPrincipal.png')}
              alt="Center Image"
            />
          </Box>
          <VStack
            flex={0.3}
            space={4}
            alignItems="center"
            justifyContent="center">
            <Button
              width="100%"
              onPress={handleLoginPress}
              leftIcon={
                <Icon
                  as={FontAwesome}
                  name="mobile"
                  color="text.900"
                  size={'md'}
                />
              }>
              <Text color={'text.900'} fontWeight={'500'}>
                Continuar con tu celular
              </Text>
            </Button>

            <Button
              width="100%"
              bgColor={'#0089D6'}
              leftIcon={
                <Icon
                  as={FontAwesome}
                  name="google"
                  color="white"
                  size={'sm'}
                />
              }>
              <Text color={'white'} fontWeight={'500'}>
                Continuar con Google
              </Text>
            </Button>
            <Button
              width="100%"
              bgColor={'#313131'}
              leftIcon={
                <Icon as={FontAwesome} name="apple" color="white" size={'sm'} />
              }>
              <Text color={'white'} fontWeight={'500'}>
                Continua con Apple
              </Text>
            </Button>
            <Button
              variant="outline"
              width="100%"
              // bgColor={'#313131'}
              leftIcon={
                <Icon
                  as={MaterialIcons}
                  name="qr-code-scanner"
                  color="black"
                  size={'sm'}
                />
              }>
              <Text color={'black'} fontWeight={'500'}>
                Escanear QR
              </Text>
            </Button>
          </VStack>
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default HelloScreen;
