import {IButtonProps} from 'native-base';

export const Button = {
  baseStyle: (): IButtonProps => {
    return {
      _disabled: {
        bg: '#EBEBEB',
        _text: {
          color: 'white',
        },
      },
    };
  },
  sizes: {
    lg: {
      px: 5,
      py: 3,
      _text: {
        fontSize: 'md',
      },
      _icon: {
        size: 'md',
      },
    },
    md: {
      px: 5,
      py: 3,
      _text: {
        fontSize: 'md',
        fontWeight: 'medium',
      },
      _icon: {
        size: 'sm',
      },
    },
    sm: {
      px: 5,
      py: 2.5,
      _text: {
        fontSize: 'xs',
      },
      _icon: {
        size: 'sm',
      },
    },
    xs: {
      px: 4,
      py: 2,
      _text: {
        fontSize: 'xs',
        backgroundColor: 'red',
      },
      _icon: {
        size: 'xs',
      },
    },
  },
  variants: {
    solid: ({colorScheme}: IButtonProps): IButtonProps => {
      if (colorScheme === 'disabled') {
        return {
          bg: '#EBEBEB',
          _text: {
            color: '#809497',
          },
        };
      }
      return {
        bg: '#00EEC9',
        _text: {
          color: '#002930',
        },
        _pressed: {
          bg: '#008F79',
          _text: {
            color: '#FFFFFF',
          },
        },
        _disabled: {
          bg: '#EBEBEB',
          _text: {
            color: '#809497',
          },
        },
      };
    },
    subtle: ({colorScheme}: IButtonProps): IButtonProps => {
      return {
        bg: 'secondary.600',
        _text: {
          color: 'text.50',
        },
        _pressed: {
          bg: 'secondary.300',
          _text: {
            color: '#FFFFFF',
          },
        },
        _disabled: {
          bg: '#EBEBEB',
          _text: {
            color: '#809497',
          },
        },
      };
    },

    outline: ({colorScheme}: IButtonProps): IButtonProps => {
      let borderColor = 'secondary.600';
      if (colorScheme === 'secondary') {
        borderColor = 'secondary.600';
      }

      if (colorScheme === 'tertiary') {
        borderColor = 'tertiary.900';
      }

      return {
        borderColor,
        _text: {
          color: 'black',
        },
      };
    },
    link: () => {
      return {
        _text: {
          color: 'secondary.600',
        },
        _pressed: {
          _text: {
            color: 'secondary.300',
          },
        },
        _disabled: {
          _text: {
            color: '#809497',
          },
        },
      };
    },
  },
};
