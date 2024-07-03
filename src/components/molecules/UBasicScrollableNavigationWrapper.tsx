import React from 'react';
import {
  Box,
  ScrollView,
  IconButton,
  ArrowBackIcon,
  CloseIcon,
  HStack,
} from 'native-base';
import {SafeAreaView} from 'react-native';

interface UBasicScrollableWrapperProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backButton?: boolean;
  closeButton?: boolean;
  onPressBackButton?: () => void;
  onPressCloseButton?: () => void;
}

const UBasicScrollableNavigationWrapper: React.FC<
  UBasicScrollableWrapperProps
> = ({
  children,
  backgroundColor = 'white',
  backButton = false,
  closeButton = false,
  onPressBackButton,
  onPressCloseButton,
}) => {
  return (
    <Box flex={1} p={5} bgColor={backgroundColor}>
      <SafeAreaView style={{flex: 1}}>
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
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default UBasicScrollableNavigationWrapper;
