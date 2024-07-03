import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Pressable,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import {useAuth} from '../contexts/AuthContext';
import UBasicBubblePage from '../components/molecules/UBasicBubblePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import UBasicScrollableWrapper from '../components/molecules/UBasicScrollableWrapper';
import UText from '../components/atoms/UText';
import UBackgroundCard from '../components/atoms/UBackgroundCard';
import USpacedTexts from '../components/atoms/USpacedTexts';
import UPressableTransaction from '../components/molecules/wallet/UPressableTransaction';
import ULine from '../components/atoms/ULine';
import iTransaction from '../interfaces/Wallet/iTransaction';
import iWithdrawal from '../interfaces/Wallet/iWithdrawal';
import UModalTransactionWithInfo from '../components/molecules/wallet/UModalTransactionWithInfo';

const HomeWallet = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<
    iTransaction | iWithdrawal | null
  >(null);

  const handlePress = (transaction: iTransaction | iWithdrawal) => {
    setSelectedTransaction(transaction);
    setModalVisible(true);
  };
  const transactions: (iTransaction | iWithdrawal)[] = [
    {
      transactionType: 'Recompensa',
      transactionName: 'Recompensa x referido',
      transactionDate: '2023-04-04T00:00:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: '-',
      transactionValue: 2000,
    },
    {
      transactionType: 'Cashback',
      transactionName: 'Cashback Franui',
      transactionDate: '2023-03-18T16:50:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: '-',
      transactionValue: 8000,
    },
    {
      transactionType: 'Compra',
      transactionName: 'Compra Home',
      transactionDate: '2023-03-05T16:50:00.000Z',
      transactionStatus: 'Pendiente',
      transactionId: '1356594',
      transactionPaymentMethod: 'Nequi - 3459',
      transactionValue: -25000,
    },
    {
      transactionType: 'Recarga',
      transactionName: 'Recarga Wallet',
      transactionDate: '2023-03-18T16:50:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: 'Visa - 2357',
      transactionValue: 100000,
    },
    {
      transactionType: 'Retiro',
      transactionName: 'Retiro dinero',
      transactionDate: '2023-04-20T10:20:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      sentTo: '3145467345',
      transactionValue: -25000,
    },
  ];

  const sortedTransactions = [...transactions].sort(
    (a, b) =>
      new Date(b.transactionDate).getTime() -
      new Date(a.transactionDate).getTime(),
  );
  return (
    <UBasicScrollableWrapper>
      <HStack justifyContent={'space-between'} alignItems={'center'} mb={5}>
        <UText size={20} weight={400} color="text.900">
          Wallet
        </UText>
        <Button
          leftIcon={<Icon as={Octicons} name="gift" color="text.900" />}
          rounded={40}
          variant={'outline'}
          _text={{fontSize: 12, fontWeight: 400}}>
          Refiere un amigo
        </Button>
      </HStack>
      <UBackgroundCard bgColor="secondary.600">
        <HStack my={5}>
          <VStack flex={0.7}>
            <UText text color="text.50">
              Saldo Puntos
            </UText>
            <UText title color="text.50" weight={700}>
              20.000 UCOP
            </UText>
            <HStack justifyContent="space-between" mt={6} mb={1}>
              <VStack alignItems="center">
                <IconButton
                  variant="ghost"
                  rounded="sm"
                  size={'lg'}
                  bg="#335459"
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      name="download-outline"
                      color="text.50"
                    />
                  }
                />
                <UText text weight={400} size={12} color="text.50">
                  Recargar
                </UText>
              </VStack>
              <VStack alignItems="center">
                <IconButton
                  variant="ghost"
                  rounded="sm"
                  size={'lg'}
                  bg="#335459"
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      name="upload-outline"
                      color="text.50"
                    />
                  }
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
                  size={'lg'}
                  bg="#335459"
                  icon={<Icon as={Feather} name="send" color="text.50" />}
                />
                <UText text weight={400} size={12} color="text.50">
                  Pagar
                </UText>
              </VStack>
            </HStack>
          </VStack>
          <VStack flex={0.3}>
            {/* <Text color="white">hola</Text>
            <Box position={'absolute'} right={0} bottom={0} mb={-1}>
              <Image
                source={require('../assets/icons/PodiumCoin1.png')}
                alt="podiumCoinImage"
              />
            </Box> */}
          </VStack>
        </HStack>
        <Box position={'absolute'} right={0} bottom={0} mb={-1}>
          <Image
            source={require('../assets/icons/PodiumCoin1.png')}
            alt="podiumCoinImage"
          />
        </Box>
      </UBackgroundCard>
      <HStack space={2} my={5}>
        <Box flex={0.5}>
          <UBackgroundCard bgColor="yellow.300">
            <HStack flex={1}>
              <VStack flex={0.7}>
                <UText weight={400} text color="text.800" size={10}>
                  Total Cashback recibido
                </UText>
                <USpacedTexts
                  colorLeft="text.900"
                  fzLeft={16}
                  weightLeft={700}
                  textLeft="7.800"
                  textRight="UCOP"
                  colorRight="text.900"
                  fzRight={14}
                  weightRight={700}
                />
              </VStack>
              <VStack flex={0.3}></VStack>
            </HStack>
            <Box position={'absolute'} right={0} bottom={0} mb={-1}>
              <Image
                source={require('../assets/icons/ReturnCoin.png')}
                alt="podiumCoinImage"
              />
            </Box>
          </UBackgroundCard>
        </Box>
        <Box flex={0.5}>
          <UBackgroundCard bgColor="tertiary.600">
            <HStack flex={1}>
              <VStack flex={0.7}>
                <UText weight={400} text color="text.800" size={10}>
                  Recompensas por tus referidos
                </UText>
                <USpacedTexts
                  colorLeft="text.900"
                  fzLeft={16}
                  weightLeft={700}
                  textLeft="5.200"
                  textRight="UCOP"
                  colorRight="text.900"
                  fzRight={14}
                  weightRight={700}
                />
              </VStack>
              <VStack flex={0.3}></VStack>
            </HStack>
            <Box position={'absolute'} right={0} bottom={0} mb={-1}>
              <Image
                source={require('../assets/icons/users.png')}
                alt="podiumCoinImage"
              />
            </Box>
          </UBackgroundCard>
        </Box>
      </HStack>
      <Box mt={2}>
        <UText size={16} subtitle color="text.900">
          Transacciones
        </UText>
        <VStack space={5} mt={5}>
          {sortedTransactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <UPressableTransaction
                transaction={transaction}
                onPress={() => handlePress(transaction)}
              />
              {index < sortedTransactions.length - 1 &&
                new Date(
                  sortedTransactions[index].transactionDate,
                ).toDateString() !==
                  new Date(
                    sortedTransactions[index + 1].transactionDate,
                  ).toDateString() && <Divider />}
            </React.Fragment>
          ))}
        </VStack>
        <Button
          alignSelf={'center'}
          variant={'link'}
          rightIcon={<Icon as={Entypo} name="plus" color="primary.600" />}
          _text={{
            color: 'primary.600',
            textAlign: 'center',
            width: '100%',
            fontSize: 12,
            fontWeight: 500,
          }}
          fontSize="sm"
          mt={7}
          onPress={() => navigation.navigate('Wallet' as never)}>
          Ver más transacciones
        </Button>
        {selectedTransaction && (
          <UModalTransactionWithInfo
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            {...selectedTransaction}
            transactionPaymentMethod={
              selectedTransaction.transactionPaymentMethod || '-'
            }
          />
        )}
      </Box>
    </UBasicScrollableWrapper>
  );
};

export default HomeWallet;
