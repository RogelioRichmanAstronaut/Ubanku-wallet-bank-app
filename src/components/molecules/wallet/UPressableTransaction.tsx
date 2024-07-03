import React from 'react';
import {Pressable, HStack, VStack, Text, Box, Center} from 'native-base';
import iTransaction from '../../../interfaces/Wallet/iTransaction';
import {formatNumberCO} from '../../../utils/formatNumberCO';
import IconsTypesTransaction from '../../../utils/wallet/IconsTypesTransaction';

interface UPressableTransactionProps {
  transaction: iTransaction;
  onPress?: () => void;
}

const UPressableTransaction: React.FC<UPressableTransactionProps> = ({
  transaction,
  onPress = null,
}) => {
  const {transactionType, transactionDate, transactionName, transactionValue} =
    transaction;

  const formattedDate = new Date(transactionDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedValue = formatNumberCO(transactionValue);

  return (
    <Pressable onPress={onPress}>
      {({isPressed}) => (
        <HStack
          alignItems="center"
          space={4}
          style={{
            transform: [{scale: isPressed ? 0.97 : 1}],
          }}>
          <Center>
            <IconsTypesTransaction transactionType={transactionType} />
          </Center>
          <VStack space={1} width="60%">
            <Text color="text.600" fontSize={10} fontWeight={400}>
              {formattedDate}
            </Text>
            <Text color="text.800" fontSize={14} fontWeight={400} isTruncated>
              {transactionName}
            </Text>
          </VStack>
          <Box flex={1}>
            <Text
              textAlign="right"
              // color={transactionValue >= 0 ? 'green' : 'red'}
            >
              {transactionValue >= 0 ? '+ ' : '- '}
              {formattedValue} UCOP
            </Text>
          </Box>
        </HStack>
      )}
    </Pressable>
  );
};

export default UPressableTransaction;
