import {IInputProps} from 'native-base';

export const Input = {
  baseStyle: (): IInputProps => {
    return {
      paddingTop: 3,
      borderColor: 'muted.600',
    };
  },
  sizes: {
    '2xl': {fontSize: 'xl'},
    xl: {fontSize: 'lg'},
    lg: {fontSize: 'md'},
    md: {
      fontSize: 19,
      backgroundColor: 'red',
      height: 16,
    },
    sm: {fontSize: 'sm'},
    xs: {fontSize: 'xs'},
  },
  variants: {
    outline: (): IInputProps => {
      return {
        borderColor: 'muted.600',
        placeholderTextColor: 'text.400',
        color: 'text.400',
        _focus: {
          bg: 'transparentize',
          borderColor: 'secondary.600',
          //   placeholderTextColor: 'secondary.600',
          color: 'secondary.600',
        },
        _disabled: {
          borderColor: 'muted.300',
        },
        _invalid: {
          borderColor: 'error.600',
          borderWidth: '1',
          placeholderTextColor: 'error.600',
          _input: {
            color: 'error.600',
          },
          _focus: {
            placeholderTextColor: 'error.600',
          },
        },
      };
    },
    filled: (): IInputProps => {
      return {
        color: 'secondary.600',
        borderWidth: '1',
        borderColor: 'neutral.200',
        textAlign: 'center',
        fontSize: 16,
        _input: {
          bg: 'neutral.100',
          fontSize: 16,
        },
        _focus: {
          borderColor: 'secondary.600',
        },
        _invalid: {
          borderColor: 'error.600',
          borderWidth: '1',
          _input: {
            bg: 'neutral.100',
          },
        },
      };
    },
  },
  defaultProps: {
    size: 'xs',
  },
};
