import React from 'react';
import {Box} from 'native-base';

interface LineProps {
  color?: string;
  height?: number;
}

const ULine: React.FC<LineProps> = ({color = 'muted.300', height = 1}) => {
  return <Box width="100%" height={height + 'px'} backgroundColor={color} />;
};

export default ULine;
