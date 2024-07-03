import React from 'react';
import {
  Box,
  VStack,
  HStack,
  IconButton,
  ArrowBackIcon,
  CloseIcon,
  Button,
} from 'native-base';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface PageWrapperProps {
  children?: React.ReactNode;
  additionalComponent?: React.ReactNode;
  backButton?: boolean;
  closeButton?: boolean;
  buttonTitle?: string;
  isDisabled?: boolean;
  onPressBackButton?: () => void;
  onPressCloseButton?: () => void;
  onPressButton?: () => void;
  background?: string;
  style?: StyleProp<ViewStyle>;
}

const UBasicWrapper: React.FC<PageWrapperProps> = ({
  children,
  background = 'white',
  additionalComponent,
  backButton = false,
  closeButton = false,
  buttonTitle,
  onPressButton,
  onPressCloseButton,
  onPressBackButton,
  isDisabled,
  style,
}) => {
  return (
    <Box flex={1} p={5} bgColor={background} style={style}>
      <SafeAreaView style={{flex: 1}}>
        <VStack space={4} width="100%" style={{flex: 1}}>
          <HStack
            flexDirection="row"
            justifyContent={
              (onPressBackButton && onPressCloseButton) ||
              (backButton && closeButton)
                ? 'space-between'
                : 'flex-end'
            }
            width="100%">
            {(backButton || onPressBackButton) && (
              <IconButton
                icon={<ArrowBackIcon color="secondary.400" />}
                onPress={onPressBackButton}
              />
            )}
            {(closeButton || onPressCloseButton) && (
              <IconButton
                icon={<CloseIcon color="secondary.400" />}
                onPress={onPressCloseButton}
              />
            )}
          </HStack>
          {children}
          {buttonTitle && (
            <Button
              isDisabled={isDisabled}
              // disabled={isDisabled}
              onPress={onPressButton}
              mt={2}
              width="100%">
              {buttonTitle}
            </Button>
          )}
          {additionalComponent}
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default UBasicWrapper;
