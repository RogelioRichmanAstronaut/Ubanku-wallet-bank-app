import React from 'react';
import {Box, Button} from 'native-base';

interface ButtonGroupProps {
  firstButtonTitle?: string;
  firstButtonFontSize?: string;

  secondButtonTitle?: string;
  secondButtonFontSize?: string;
  onPressFirstButton?: () => void;
  onPressSecondButton?: () => void;
}

const UTwoButtonts: React.FC<ButtonGroupProps> = ({
  firstButtonTitle,
  firstButtonFontSize,
  secondButtonTitle,
  secondButtonFontSize,
  onPressFirstButton,
  onPressSecondButton,
}) => {
  return (
    <Box mt={8}>
      {firstButtonTitle && (
        <Button
          onPress={onPressFirstButton}
          _text={{fontSize: firstButtonFontSize}}
          width="100%"
          mb={2}
          variant="subtle">
          {firstButtonTitle}
        </Button>
      )}
      {secondButtonTitle && (
        <Button
          onPress={onPressSecondButton}
          _text={{fontSize: secondButtonFontSize, fontWeight: 500}}
          width="100%"
          variant="link">
          {secondButtonTitle}
        </Button>
      )}
    </Box>
  );
};

export default UTwoButtonts;
