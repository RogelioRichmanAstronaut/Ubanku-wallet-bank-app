import React from 'react';
import {Box, Image, Center} from 'native-base';
import {useTheme} from 'native-base';

const LaunchScreen = () => {
  const theme = useTheme();
  const mainColor = theme.colors.primary.main;

  return (
    <Box flex={1} bgColor={mainColor}>
      <Center flex={1}>
        <Image
          source={require('../../assets/images/Logo_ubanku_principal2x.png')}
          alt="Launch Image"
        />
      </Center>
    </Box>
  );
};

export default LaunchScreen;
