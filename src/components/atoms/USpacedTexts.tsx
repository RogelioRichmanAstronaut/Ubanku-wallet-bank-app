import React from 'react';
import {Box, Text} from 'native-base';

interface USpacedTextsProps {
  textLeft?: string;
  textRight?: string;
  weightLeft?: number;
  weightRight?: number;
  fzLeft?: number;
  fzRight?: number;
  colorLeft?: string;
  colorRight?: string;
}

const USpacedTexts: React.FC<USpacedTextsProps> = ({
  textLeft,
  textRight,
  weightLeft,
  weightRight,
  fzLeft,
  fzRight,
  colorLeft,
  colorRight,
}) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems={'center'}>
      <Text fontSize={fzLeft} fontWeight={weightLeft} color={colorLeft}>
        {textLeft}
      </Text>
      <Text fontSize={fzRight} fontWeight={weightRight} color={colorRight}>
        {textRight}
      </Text>
    </Box>
  );
};

export default USpacedTexts;
