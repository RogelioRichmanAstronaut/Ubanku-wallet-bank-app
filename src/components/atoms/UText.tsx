import React from 'react';
import {Text} from 'native-base';
import {StyleProp, ViewStyle} from 'react-native';

interface UTextProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  weight?: number;
  center?: boolean;
  subtitle?: boolean;
  title?: boolean;
  text?: boolean;
  [key: string]: any;
  style?: StyleProp<ViewStyle>;
}

const UText: React.FC<UTextProps> = ({
  children,
  color,
  size,
  weight,
  center = false,
  subtitle = false,
  title = false,
  text = false,
  style,
  ...rest // Collect remaining props here
}) => {
  if (subtitle) {
    color = color || 'text.600';
    weight = weight || 500;
    size = size || 14;
  } else if (title) {
    color = color || 'text.900';
    weight = weight || 400;
    size = size || 20;
    // lineHeight = '36px';
  } else if (text) {
    color = color || 'text.600';
    weight = weight || 500;
    size = size || 14;
    // lineHeight = '21px';
  }

  return (
    <Text
      style={style}
      color={color}
      fontSize={size}
      fontWeight={weight}
      textAlign={center ? 'center' : undefined}
      {...rest}>
      {children}
    </Text>
  );
};
export default UText;
