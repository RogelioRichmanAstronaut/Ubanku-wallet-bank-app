import React from 'react';
import {Text} from 'native-base';

interface TitleAndSubtitleProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
}

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <>
      {title && (
        <Text fontSize="xl" textAlign={center ? 'center' : undefined}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          mt={2}
          textAlign={center ? 'center' : undefined}
          color={'text.600'}>
          {subtitle}
        </Text>
      )}
    </>
  );
};

export default TitleAndSubtitle;
