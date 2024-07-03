import React from 'react';
import {Box} from 'native-base';
import {StyleProp, ViewStyle} from 'react-native';

interface UBackgroundCardProps {
  children: React.ReactNode;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  size?: string;
}

const UBackgroundCard: React.FC<UBackgroundCardProps> = ({
  children,
  bgColor = 'white',
  style,
  size = 'md',
}) => {
  return (
    <Box
      flex={1}
      p={size === 'md' ? 5 : 3.5}
      rounded={10}
      backgroundColor={bgColor}
      overflow={'hidden'}
      style={style}>
      {children}
    </Box>
  );
};

export default UBackgroundCard;
