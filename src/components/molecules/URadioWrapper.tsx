import React from 'react';

import {Radio} from 'native-base';

const RadioWrapper = ({
  name,
  value,
  defaultValue,
  onChange,
  children,
}: {
  name: string;
  value: string;
  defaultValue: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <Radio.Group
      name={name}
      defaultValue={defaultValue}
      onChange={nextValue => {
        onChange(nextValue);
      }}>
      <Radio value={value}>{children}</Radio>
    </Radio.Group>
  );
};

export default RadioWrapper;
