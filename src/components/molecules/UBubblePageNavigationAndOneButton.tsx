import React from 'react';
import {
  Box,
  Button,
  HStack,
  IconButton,
  ArrowBackIcon,
  CloseIcon,
} from 'native-base';
import UBasicBubblePage, {UBasicBubblePageProps} from './UBasicBubblePage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaViewComponent} from 'react-native';

export interface UBubblePageNavigationAndOneButtonProps
  extends UBasicBubblePageProps {
  backButton?: boolean;
  closeButton?: boolean;
  buttonTitle?: string;
  isDisabled?: boolean;
  onPressBackButton?: () => void;
  onPressCloseButton?: () => void;
  onPressButton?: () => void;
}

const UBubblePageNavigationAndOneButton: React.FC<
  UBubblePageNavigationAndOneButtonProps
> = ({
  backButton = false,
  closeButton = false,
  buttonTitle,
  isDisabled,
  onPressBackButton,
  onPressCloseButton,
  onPressButton,
  ...restProps
}) => {
  return (
    <UBasicBubblePage
      {...restProps}
      topComponent={
        <>
          <HStack
            flexDirection="row"
            justifyContent={
              (!backButton && closeButton) ||
              (!onPressBackButton && onPressCloseButton)
                ? 'flex-end'
                : 'space-between'
            }
            width="100%">
            {(backButton || onPressBackButton) && (
              <IconButton
                mx={0}
                px={0}
                icon={<ArrowBackIcon color="secondary.400" />}
                onPress={onPressBackButton}
              />
            )}
            {(closeButton || onPressCloseButton) && (
              <IconButton
                mx={0}
                px={0}
                icon={<CloseIcon color="secondary.400" />}
                onPress={onPressCloseButton}
              />
            )}
          </HStack>
          {restProps.topComponent}
        </>
      }
      downComponent={
        <>
          <Box flex={1} justifyContent={'space-between'}>
            <Box flex={1}>{restProps.downComponent}</Box>
            {buttonTitle && (
              <Button
                size={'md'}
                isDisabled={isDisabled}
                onPress={onPressButton}
                mt={2}
                width="100%">
                {buttonTitle}
              </Button>
            )}
          </Box>
        </>
      }
    />
  );
};

export default UBubblePageNavigationAndOneButton;
