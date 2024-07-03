import React, {useCallback, useMemo} from 'react';
import {
  View,
  TextInput,
  Image,
  Animated,
  ImageSourcePropType,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import UText from '../atoms/UText';

interface Props {
  value: string;
  placeholder: string;
  textoAdicional?: string;
  onChangeText: (text: string) => void;
  imageSource: ImageSourcePropType;
  style?: ViewStyle;
  type?: KeyboardTypeOptions;
}

// export const InputTemplateUbanku: React.FC<Props> = ({value : textoIngresado, onChangeText, placeholder}) => {
export const InputTemplateUbanku = React.memo<Props>(
  ({
    value: textoIngresado = '',
    onChangeText,
    placeholder,
    imageSource,
    style,
    textoAdicional,
    type,
  }) => {
    //   const [textoIngresado, setTextoIngresado] = useState('');
    const animacion = useMemo(() => new Animated.Value(0), []);
    const mostrarTextoAdicional = useCallback(() => {
      Animated.timing(animacion, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, [animacion]);

    // const iniciarAnimacion = () => {
    //   animacion.setValue(0);
    //   mostrarTextoAdicional();
    // };
    // useEffect(() => {
    //   if (textoIngresado.length === 1) {
    //     iniciarAnimacion();
    //   }
    // }, [textoIngresado]);

    return (
      <View
        style={[
          {
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#4C696E',
            padding: '5%',
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: '5%',
          },
          style,
        ]}>
        <Image source={imageSource} style={{marginRight: '3%'}} />
        {textoIngresado.length != 0 && (
          <Animated.View
            style={{
              top: -8,
              backgroundColor: 'white',
              position: 'absolute',
              left: '5%',
              opacity: animacion.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
            onLayout={mostrarTextoAdicional}>
            <UText size={12} style={{color: '#4C696E'}}>
              {!textoAdicional ? placeholder : textoAdicional}
            </UText>
          </Animated.View>
        )}
        <TextInput
          keyboardType={type}
          value={textoIngresado}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#4C696E"
          style={{color: '#4C696E', fontFamily: 'Poppins', fontSize: 14}}
        />
      </View>
    );
  },
);
