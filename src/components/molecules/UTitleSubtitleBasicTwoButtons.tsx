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
  background?: string;
  additionalComponent?: React.ReactNode;
  firstButtonVariant?: string;
}

const UTitleSubtitleBasicTwoButtons: React.FC<TitleSubtitleWrapperProps> = ({
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
  background = 'white',
  additionalComponent,
  firstButtonVariant,
}) => {
  return (
    <UBasicWrapper
      onPressBackButton={onPressBackButton}
      onPressCloseButton={onPressCloseButton}
      background={background}>
      <Box mx={0} my={'auto'} flex={1} justifyContent={'center'}>
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
          <Text
            fontSize="xl"
            textAlign="center"
            color={'text.900'}
            fontWeight={700}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text textAlign="center" color={'text.600'} mt={2} mb={10}>
            {subtitle}
          </Text>
        )}
        {additionalComponent}
        {children}
        {(firstButtonTitle || secondButtonTitle) && (
          <Box mt={8} bottom={0} position={'absolute'} width={'100%'}>
            {firstButtonTitle && (
              <Button
                onPress={onPressFirstButton}
                width="100%"
                mb={2}
                variant={firstButtonVariant}>
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

export default UTitleSubtitleBasicTwoButtons;
