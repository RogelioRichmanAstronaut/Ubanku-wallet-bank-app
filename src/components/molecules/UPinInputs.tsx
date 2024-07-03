import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Input} from 'native-base';

interface Props {
  size?: number;
  value: string;
  setValue: (value: string) => void;
  setError?: boolean;
  onHandleSubmit?: () => void;
  isPassword?: boolean;
}

const UPinInputs: React.FC<Props> = ({
  size = 5,
  value,
  setValue,
  setError = false,
  onHandleSubmit,
  isPassword = false,
}) => {
  const inputs = Array.from({length: size}, (_, i) => i);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [inputValues, setInputValues] = useState(Array(size).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (
      !isSubmitted &&
      onHandleSubmit &&
      inputValues.every(value => value !== '')
    ) {
      onHandleSubmit();
      setIsSubmitted(true);
    }
  }, [inputValues, isSubmitted, onHandleSubmit]);

  const handleTextChange = (text: string, index: number) => {
    if (text.length > 1) {
      const newInputValues = [
        ...inputValues.slice(0, index),
        ...text.split('').filter(char => /\d/.test(char)),
        ...inputValues.slice(index + text.length),
      ]
        .slice(0, size)
        .concat(Array(size).fill(''))
        .slice(0, size);
      setInputValues(newInputValues);
      setValue(newInputValues.join(''));
      inputRefs.current[Math.min(index + text.length, size - 1)]?.focus();
    } else if (/\d/.test(text) || text === '') {
      const newInputValues = [
        ...inputValues.slice(0, index),
        text,
        ...inputValues.slice(index + 1),
      ];
      setInputValues(newInputValues);
      setValue(newInputValues.join(''));

      if (text.length === 1 && index < size - 1) {
        inputRefs.current[index + 1]?.focus();
      } else if (text.length === 0 && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else {
      setInputValues(prevInputValues => [...prevInputValues]);
    }
  };

  const handleBackspacePress = (index: number) => {
    if (inputValues[index] === '' && index > 0) {
      const newInputValues = [
        ...inputValues.slice(0, index - 1),
        '',
        ...inputValues.slice(index),
      ];
      setInputValues(newInputValues);
      setValue(newInputValues.join(''));
      inputRefs.current[index - 1]?.focus();
    }
  };

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const handleFocus = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsFocused(true);
  };

  return (
    <View style={styles.container}>
      {inputs.map((_, index) => (
        <Input
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          variant="filled"
          w={15}
          h={15}
          borderColor={isFocused ? 'secondary.600' : 'neutral.200'}
          value={inputValues[index]}
          onChangeText={text => handleTextChange(text, index)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isInvalid={setError}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspacePress(index);
            }
          }}
          keyboardType="number-pad"
          secureTextEntry={isPassword}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  },
});

export default UPinInputs;
