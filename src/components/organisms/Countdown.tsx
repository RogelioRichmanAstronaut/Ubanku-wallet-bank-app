import React, {useEffect, useState} from 'react';
import {Text, Button} from 'native-base';

interface CountdownProps {
  initialCount: number;
  onEndCount: () => void;
}

const Countdown: React.FC<CountdownProps> = ({initialCount, onEndCount}) => {
  const [counter, setCounter] = useState(initialCount);
  const [requestNewCode, setRequestNewCode] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setRequestNewCode(true);
    }
  }, [counter]);

  const handleNewCodeRequest = () => {
    // reiniciar el contador y deshabilitar el boton para que el usuario pueda volver a pedir codigo
    setCounter(initialCount);
    setRequestNewCode(false);
    onEndCount();
  };

  return counter > 0 ? (
    <Text
      textAlign={'center'}
      fontWeight={400}
      color={'neutral.500'}
      fontSize={14}>
      Nuevo código en {Math.floor(counter / 60)}:
      {('0' + (counter % 60)).slice(-2)}
    </Text>
  ) : (
    <Button
      variant="link"
      onPress={handleNewCodeRequest}
      fontWeight={400}
      textAlign={'center'}
      fontSize={14}>
      Solicitar nuevo código
    </Button>
  );
};

export default Countdown;
