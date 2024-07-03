import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
// import {useTheme} from 'styled-components/native';
// import UButton from '../components/atoms/UButton';
import UIcon from '../../components/atoms/UIcon';
// import USecondaryButton from '../components/atoms/USecondaryButton';
// import UTertiaryButton from '../components/atoms/UTertiaryButton';
import UText from '../../components/atoms/UText';
import {Button} from 'native-base';

export const Hello = (props: any) => {
  // const theme = useTheme();
  const {navigation} = props;
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    bg: {
      flex: 1,
      // backgroundColor: theme?.colors?.primary,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 0 : 30,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
    },
    mask: {
      width: '100%',
      height: '100%',
    },
    logo: {
      marginTop: 64,
    },
    wrapperBtn: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      marginBottom: 100,
    },
    buttons: {
      marginVertical: 6,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.bg}>
      <View style={styles.mask}>
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.wrapperBtn}>
              <UText size={40} weight="bold">
                BienvenidX!
              </UText>
              <UText
                // color={theme.colors.ubanku2}
                size={14}
                style={{marginBottom: 46}}>
                Empieza a alcanzar tus sueños ahora
              </UText>
              <Button
                mt="10"
                size="lg"
                colorScheme="tertiary"
                onPress={() => navigation.navigate('Login')}>
                Login
              </Button>
              <Button
                mt="10"
                size="lg"
                colorScheme="tertiary"
                onPress={() => navigation.navigate('Register')}>
                Register
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Hello;
