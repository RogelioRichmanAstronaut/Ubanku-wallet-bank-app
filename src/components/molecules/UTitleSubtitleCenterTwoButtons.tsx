import React from 'react';
import {Box, Text, Image, Button} from 'native-base';
import UBasicWrapper, {PageWrapperProps} from './UBasicWrapper';

interface TitleSubtitleWrapperProps extends PageWrapperProps {
  title?: string;
  subtitle?: string;
  firstButtonTitle?: string;
  secondButtonTitle?: string;
  onPressFirstButton?: () => void;
  onPressSecondButton?: () => void;
  icon?: any;
}

const UTitleSubtitleCenterTwoButtons: React.FC<TitleSubtitleWrapperProps> = ({
  title,
  subtitle,
  children,
  icon,
  firstButtonTitle,
  secondButtonTitle,
  onPressFirstButton,
  onPressSecondButton,
  onPressBackButton,
  onPressCloseButton,
}) => {
  return (
    <UBasicWrapper
      onPressBackButton={onPressBackButton}
      onPressCloseButton={onPressCloseButton}>
      <Box mx={0} my={'auto'}>
        {icon && (
          <Image
            style={{
              alignSelf: 'center',
              marginBottom: '5%',
            }}
            source={icon}
            alt="Custom Icon"
          />
        )}
        {title && (
          <Text fontSize="xl" textAlign="center">
            {title}
          </Text>
        )}
        {subtitle && (
          <Text textAlign="center" color={'text.600'} mt={2}>
            {subtitle}
          </Text>
        )}
        {children}
        {(firstButtonTitle || secondButtonTitle) && (
          <Box mt={8}>
            {firstButtonTitle && (
              <Button
                onPress={onPressFirstButton}
                width="100%"
                mb={2}
                variant="subtle">
                {firstButtonTitle}
              </Button>
            )}
            {secondButtonTitle && (
              <Button onPress={onPressSecondButton} width="100%" variant="link">
                {secondButtonTitle}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </UBasicWrapper>
  );
};

export default UTitleSubtitleCenterTwoButtons;
