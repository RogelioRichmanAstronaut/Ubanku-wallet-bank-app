import React from 'react';
import {
  Pressable,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  Image,
  Circle,
} from 'native-base';
import {formatNumberCO} from '../../../../utils/formatNumberCO';
import IconsTypesTransaction from '../../../../utils/wallet/IconsTypesTransaction';
import iReferredTransaction from '../../../../interfaces/Wallet/iReferredTransaction';

interface UPressableTransactionProps {
  transaction: iReferredTransaction;
  onPress?: () => void;
}

const UPressableReferredTransaction: React.FC<UPressableTransactionProps> = ({
  transaction,
  onPress = null,
}) => {
  const {
    transactionType,
    transactionDate,
    transactionName,
    transactionValue,
    referredIcon,
  } = transaction;

  const formattedDate = new Date(transactionDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedValue = formatNumberCO(transactionValue);
  const Icon = referredIcon ? (
    <Image source={referredIcon} alt="Referred Icon" size={14} />
  ) : (
    <Image
      source={require('../../../../assets/icons/ReturnCoinSm.png')}
      alt="podiumCoinImage"
      size={8}
    />
  );
  const bgIcon = 'white';

  return (
    <Pressable onPress={onPress}>
      {({isPressed}) => (
        <HStack
          alignItems="center"
          space={4}
          style={{
            transform: [{scale: isPressed ? 0.97 : 1}],
          }}>
          <Circle size={14} bg={bgIcon}>
            {Icon}
          </Circle>
          <VStack space={1} maxWidth="45%">
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

export default UPressableReferredTransaction;
