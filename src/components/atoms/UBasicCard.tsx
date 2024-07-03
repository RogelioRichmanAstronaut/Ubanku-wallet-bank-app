import React from 'react';
import {Box} from 'native-base';
import {StyleProp, ViewStyle} from 'react-native';

interface BasicCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const UBasicCard: React.FC<BasicCardProps> = ({children, style}) => {
  return (
    <Box
      style={style}
      p={5}
      rounded={10}
      borderWidth={1}
      borderColor="muted.500">
      {children}
    </Box>
  );
};

export default UBasicCard;
