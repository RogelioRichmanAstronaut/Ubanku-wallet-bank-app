import React from 'react';
import {Circle, Image} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ILinearGradientProps} from 'native-base/lib/typescript/components/primitives/Box/types';
import {ColorType} from 'native-base/lib/typescript/components/types';

interface TransactionIconProps {
  transactionType: string;
  size?: 'sm' | 'md';
}

const IconsTypesTransaction: React.FC<TransactionIconProps> = ({
  transactionType,
  size = 'sm',
}) => {
  let icon: JSX.Element;
  let bgIcon:
    | string
    | ILinearGradientProps
    | (ColorType | ILinearGradientProps)[]
    | {
        base?: ColorType | ILinearGradientProps;
        sm?: ColorType | ILinearGradientProps;
        md?: ColorType | ILinearGradientProps;
        lg?: ColorType | ILinearGradientProps;
        xl?: ColorType | ILinearGradientProps;
        '2xl'?: ColorType | ILinearGradientProps;
      }
    | null
    | undefined;

  const iconSize = size === 'sm' ? 20 : 30;

  switch (transactionType) {
    case 'Recompensa':
      icon = <FontAwesome5 name="users" size={iconSize} color="#A8B500" />;
      bgIcon = 'success.300';
      break;
    case 'Compra':
      icon = <SimpleLineIcons name="bag" size={iconSize} color="#990249" />;
      bgIcon = 'error.100';
      break;
    case 'Retiro':
      icon = (
        <MaterialCommunityIcons
          name="upload-outline"
          size={iconSize}
          color="#990249"
        />
      );
      bgIcon = 'error.100';
      break;
    case 'Recarga':
      icon = (
        <MaterialCommunityIcons
          name="download-outline"
          size={iconSize}
          color="#A8B500"
        />
      );
      bgIcon = 'success.300';
      break;
    case 'Cashback':
      icon = (
        <Image
          source={require('../../assets/icons/ReturnCoinSm.png')}
          alt="podiumCoinImage"
          size={size === 'sm' ? 5 : 8}
        />
      );
      bgIcon = 'yellow.300';
      break;
    default:
      icon = <></>;
      bgIcon = 'white';
  }

  return (
    <Circle size={size === 'sm' ? 10 : 14} bg={bgIcon}>
      {icon}
    </Circle>
  );
};

export default IconsTypesTransaction;
