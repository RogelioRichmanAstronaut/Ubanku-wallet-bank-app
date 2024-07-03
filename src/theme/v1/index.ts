import {extendTheme} from 'native-base';

import {colors} from './colors';
import {Button} from './button';
import {Text} from './text';
import {fontConfig, fonts} from './font';
import {Heading} from './heading';
import {radii} from './radius';
import {Input} from './input';

export const themeV1 = extendTheme({
  colors,
  fontConfig,
  fonts,
  radii,
  sizes: {
    13: 52,
    14: 56,
    15: 60,
  },
  components: {
    Button,
    Text,
    Heading,
    Input,
  },
});
