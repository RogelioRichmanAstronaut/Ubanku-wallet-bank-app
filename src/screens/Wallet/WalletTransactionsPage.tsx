import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import UBasicScrollableNavigationWrapper from '../../components/molecules/UBasicScrollableNavigationWrapper';
import UText from '../../components/atoms/UText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Divider, VStack} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ULine from '../../components/atoms/ULine';
import UPressableTransaction from '../../components/molecules/wallet/UPressableTransaction';
import iTransaction from '../../interfaces/Wallet/iTransaction';
import iWithdrawal from '../../interfaces/Wallet/iWithdrawal';
import UModalTransactionWithInfo from '../../components/molecules/wallet/UModalTransactionWithInfo';

const WalletTransactionsPage = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

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

    {
      transactionType: 'Retiro',
      transactionName: 'Retiro',
      transactionDate: '2023-03-12T00:00:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: 'Nequi - 3459',
      transactionValue: -25000,
    },
    {
      transactionType: 'Cashback',
      transactionName: 'Cashback boletas',
      transactionDate: '2023-02-28T00:00:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: '-',
      transactionValue: 26000,
    },
    {
      transactionType: 'Compra',
      transactionName: 'Compra boletas',
      transactionDate: '2023-02-28T00:00:00.000Z',
      transactionStatus: 'Aprobado',
      transactionId: '1356594',
      transactionPaymentMethod: 'Nequi - 3459',
      transactionValue: -350000,
    },
  ];

  const sortedTransactions = [...transactions].sort(
    (a, b) =>
      new Date(b.transactionDate).getTime() -
      new Date(a.transactionDate).getTime(),
  );

  return (
    <UBasicScrollableNavigationWrapper onPressBackButton={handleBackPress}>
      <UText title center my={3}>
        Historial de Transacciones
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
    </UBasicScrollableNavigationWrapper>
  );
};

export default WalletTransactionsPage;
