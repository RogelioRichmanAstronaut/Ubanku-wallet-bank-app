import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
// import {useTheme} from 'styled-components/native';

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  style: StyleProp<ViewStyle>;
}

const CheckBoxUbanku = ({checked, setChecked, style}: Props) => {
  // const theme = useTheme();

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.checkbox}>
        {checked && <View style={styles.checkmark} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#335459',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 14,
    height: 14,
    backgroundColor: '#335459',
  },
});

export default CheckBoxUbanku;
