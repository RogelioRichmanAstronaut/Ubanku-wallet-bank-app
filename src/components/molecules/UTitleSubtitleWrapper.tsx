import React from 'react';
import {Text} from 'native-base';
import UBasicWrapper, {PageWrapperProps} from './UBasicWrapper';
import TitleAndSubtitle from '../atoms/TitleAndSubtitle';

interface TitleSubtitleWrapperProps extends PageWrapperProps {
  title?: string;
  subtitle?: string;
}

const UTitleSubtitleWrapper: React.FC<TitleSubtitleWrapperProps> = ({
  title,
  subtitle,
  children,
  ...restProps
}) => {
  return (
    <UBasicWrapper {...restProps}>
      <TitleAndSubtitle title={title} subtitle={subtitle} center />
      {children}
    </UBasicWrapper>
  );
};

export default UTitleSubtitleWrapper;
