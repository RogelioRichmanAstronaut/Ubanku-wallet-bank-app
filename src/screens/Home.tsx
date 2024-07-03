import React from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Progress,
  ScrollView,
  StatusBar,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import {useAuth} from '../contexts/AuthContext';
import UBasicBubblePage from '../components/molecules/UBasicBubblePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import UText from '../components/atoms/UText';
import UBackgroundCard from '../components/atoms/UBackgroundCard';
import USpacedTexts from '../components/atoms/USpacedTexts';

const Home = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
  };

  return (
    <UBasicBubblePage
      smallBubble
      bubbleColor={'secondary.600'}
      topComponent={
        <Box mb={10}>
          <HStack justifyContent={'space-between'} mb={5}>
            <HStack alignItems={'center'} space={2}>
              <IconButton
                variant="ghost"
                rounded={100}
                size={15}
                icon={
                  <Image
                    alt="user default icon"
                    source={require('../assets/icons/userIcon.png')}
                  />
                }
                onPress={() => navigation.navigate('UserMenu' as never)}
              />
              <UText size={18} weight={400} color="text.50">
                Hola Andy!
              </UText>
            </HStack>
            <HStack>
              <IconButton
                variant="ghost"
                rounded="sm"
                icon={
                  <Icon
                    as={Ionicons}
                    name="earth-sharp"
                    color="text.50"
                    size={7}
                  />
                }
                onPress={() => navigation.navigate('Deposit' as never)}
              />
              <IconButton
                variant="ghost"
                rounded="sm"
                icon={
                  <Icon
                    as={Ionicons}
                    name="school-outline"
                    color="text.50"
                    size={7}
                  />
                }
                onPress={() => navigation.navigate('Deposit' as never)}
              />
            </HStack>
          </HStack>
          <VStack alignItems={'center'}>
            <UText color="text.50" size={16} weight={500}>
              Ir al Estéreo Picnic
            </UText>
            <HStack space={1}>
              <UText weight={700} size={48} color="text.50">
                150.000
              </UText>
              <UText
                size={14}
                weight={500}
                color="white"
                position="absolute"
                style={{opacity: 0.42, bottom: 15, right: -40}}>
                UCOP
              </UText>
            </HStack>
            <Box w="90%" maxW="400">
              <Progress value={45} mx="4" />
            </Box>
          </VStack>
          <Center my={5}>
            <Button
              variant={'outline'}
              style={{
                borderColor: 'rgba(0, 238, 201, 0.55)',
                borderRadius: 100,
                borderWidth: 2,
              }}>
              <HStack alignItems={'center'} space={1}>
                <UText size={12} weight={500} color="text.50">
                  Detalles de mi sueño
                </UText>
                <UText size={15} color="text.50">
                  👈🏼
                </UText>
              </HStack>
            </Button>
          </Center>
          <HStack justifyContent="space-between" mt={6} mb={1} zIndex={2}>
            <VStack alignItems="center">
              <IconButton
                variant="ghost"
                rounded="sm"
                size={15}
                bg="#335459"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="download-outline"
                    color="text.50"
                    size={'lg'}
                  />
                }
                onPress={() => navigation.navigate('Deposit' as never)}
              />
              <UText text weight={400} size={12} color="text.50">
                Recargar
              </UText>
            </VStack>
            <VStack alignItems="center">
              <IconButton
                variant="ghost"
                rounded="sm"
                size={15}
                bg="#335459"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="upload-outline"
                    color="text.50"
                    size={'lg'}
                  />
                }
                onPress={() => navigation.navigate('Withdraw' as never)}
              />
              <UText text weight={400} size={12} color="text.50">
                Sacar
              </UText>
            </VStack>
            <VStack alignItems="center">
              <IconButton
                variant="ghost"
                rounded="sm"
                size={15}
                bg="#335459"
                icon={<Icon as={Feather} name="send" color="text.50" />}
                onPress={() => navigation.navigate('Send' as never)}
              />
              <UText text weight={400} size={12} color="text.50">
                Enviar
              </UText>
            </VStack>
            <VStack alignItems="center">
              <IconButton
                variant="ghost"
                rounded="sm"
                size={15}
                bg="#335459"
                icon={
                  <Icon as={Feather} name="plus" color="text.50" size={'lg'} />
                }
              />
              <UText text weight={400} size={12} color="text.50">
                Más
              </UText>
            </VStack>
          </HStack>
          <Box
            position={'absolute'}
            left={'-5.3%'}
            bottom={0}
            mb={-1}
            zIndex={-1}>
            <Image
              source={require('../assets/icons/principalMenuIcon.png')}
              alt="dream maker icon"
            />
          </Box>
        </Box>
      }
      downComponent={
        <>
          <Box flex={1} my={5}>
            <UText size={16} weight={500} color="secondary.500">
              Nuestros servicios
            </UText>
            <ScrollView horizontal flexGrow={1} my={2}>
              <HStack space={3}>
                <UBackgroundCard
                  bgColor="empathy.300"
                  style={{width: '45%', minWidth: 170}}>
                  <VStack zIndex={2}>
                    <UText weight={500} text color="text.900" size={18}>
                      Invierte
                    </UText>
                    <UText
                      weight={400}
                      text
                      color="text.700"
                      size={10}
                      style={{width: '75%'}}>
                      Conoce nuestras opciones de inversión
                    </UText>
                    <Box mt={4}>
                      <UText weight={700} size={30} color="secondary.500">
                        15,3%
                      </UText>
                      <UText
                        weight={400}
                        size={10}
                        color="text.700"
                        style={{top: -7}}>
                        Interés Anual
                      </UText>
                    </Box>
                  </VStack>
                  <Box
                    position={'absolute'}
                    right={0}
                    bottom={0}
                    mb={-1}
                    zIndex={1}>
                    <Image
                      source={require('../assets/icons/ucoinIconMd.png')}
                      alt="ucoin icon"
                    />
                  </Box>
                </UBackgroundCard>
                <UBackgroundCard
                  bgColor="primary.600"
                  style={{width: '45%', minWidth: 170}}>
                  <VStack zIndex={2}>
                    <UText weight={500} text color="text.900" size={18}>
                      Cashback
                    </UText>
                    <UText
                      weight={400}
                      text
                      color="text.700"
                      size={10}
                      style={{width: '75%'}}>
                      Ahorra en las compras que ya realizas
                    </UText>
                    <Box mt={4}>
                      <UText weight={700} size={30} color="secondary.500">
                        20%
                      </UText>
                      <UText
                        weight={400}
                        size={10}
                        color="text.700"
                        style={{top: -7, position: 'absolute'}}>
                        Hasta
                      </UText>
                      <UText
                        weight={400}
                        size={10}
                        color="text.700"
                        style={{top: -7}}>
                        cashback
                      </UText>
                    </Box>
                  </VStack>
                  <Box position={'absolute'} right={0} bottom={0} mb={-1}>
                    <Image
                      source={require('../assets/icons/jetpackCashbackIconMd.png')}
                      alt="ucoin icon"
                    />
                  </Box>
                </UBackgroundCard>
              </HStack>
            </ScrollView>

            {/* <VStack space={4}>
              <Button onPress={handleLogout}>Cerrar sesión</Button>
            </VStack> */}
          </Box>
        </>
      }></UBasicBubblePage>
  );
};

export default Home;
