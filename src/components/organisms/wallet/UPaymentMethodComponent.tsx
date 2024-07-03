import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Radio,
  Button,
  Select,
  Checkbox,
  Box,
  CheckIcon,
  Modal,
  VStack,
  HStack,
} from 'native-base';
import {Animated, ScrollView, StyleSheet} from 'react-native';
import UNequiForm from '../../molecules/wallet/PaymentMethodForms/UNequiForm';
import UCreditDebitCardForm from '../../molecules/wallet/PaymentMethodForms/UCreditDebitCardForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UBasicWrapperNoSafeArea from '../../molecules/UBasicWrapperNoSafeArea';
import UBasicCard from '../../atoms/UBasicCard';
import ULine from '../../atoms/ULine';
import UText from '../../atoms/UText';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBoxUbanku from '../../atoms/CheckBoxUbanku';
import UTextWithLinks from '../../atoms/UTextWithLinks';
type PaymentMethod = {
  type: 'Nequi' | 'Daviplata' | 'CreditCard' | 'DebitCard' | 'DebitCreditCard';
  number: string;
};

type Props = {
  paymentMethods: PaymentMethod[];
  onAddPaymentMethod: (paymentMethod: PaymentMethod) => void;
};

const UPaymentMethodComponent: React.FC<Props> = ({
  paymentMethods,
  onAddPaymentMethod,
}) => {
  const [selectedPaymentMethodValue, setSelectedPaymentMethodValue] = useState(
    paymentMethods.length > 0 ? paymentMethods[0].number : '',
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedNewPaymentMethodType, setSelectedNewPaymentMethodType] =
    useState<
      | 'CreditCard'
      | 'DebitCard'
      | 'Nequi'
      | 'Daviplata'
      | 'DebitCreditCard'
      | undefined
    >(undefined);

  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    useState(false);

  const nequiFormRef = useRef<{submit: () => void}>(null);
  const creditDebitCardFormRef = useRef<{submit: () => void}>(null);

  const handleAddNequiPaymentMethod = (data: {
    cellphone: string;
    firstName: string;
    lastName: string;
    documentType: string;
    documentNumber: string;
  }) => {
    // TODO: Send data to backend
    onAddPaymentMethod({type: 'Nequi', number: data.cellphone});
    setShowModal(false);
  };

  const handleAddCreditDebitCardPaymentMethod = (data: {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
  }) => {
    // TODO: Send data to backend
    onAddPaymentMethod({
      type: selectedNewPaymentMethodType,
      number: data.cardNumber.slice(-4),
    });
    setShowModal(false);
  };

  const handleAddPaymentMethod = () => {
    if (selectedNewPaymentMethodType === 'Nequi') {
      nequiFormRef.current?.submit();
    } else if (
      selectedNewPaymentMethodType === 'DebitCreditCard' ||
      selectedNewPaymentMethodType === 'DebitCard'
    ) {
      creditDebitCardFormRef.current?.submit();
    }
  };
  const [nequiFormAnimation] = React.useState(new Animated.Value(0));
  const animateNequiForm = () => {
    Animated.timing(nequiFormAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      {paymentMethods.length > 0 && (
        <Radio.Group
          mb={4}
          name="payment-method"
          value={selectedPaymentMethodValue}
          onChange={setSelectedPaymentMethodValue}>
          {paymentMethods.map(paymentMethod => (
            <Radio value={paymentMethod.number} key={paymentMethod.number}>
              {`${paymentMethod.type} - ${paymentMethod.number}`}
            </Radio>
          ))}
        </Radio.Group>
      )}

      <Button variant="subtle" onPress={() => setShowModal(true)}>
        Agregar un método de pago
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        // avoidKeyboard
        animationPreset="slide"
        // bgColor={'red.100'}
        _backdrop={{
          _dark: {
            bg: 'coolGray.800',
          },
          bg: 'white',
        }}
        // transparent={true}
      >
        <SafeAreaView style={styles.modalContent}>
          <KeyboardAwareScrollView style={{flex: 1}}>
            <UBasicWrapperNoSafeArea
              style={styles.modalContent}
              onPressCloseButton={() => setShowModal(false)}
              onPressButton={handleAddPaymentMethod}
              buttonTitle="Vincular cuenta"
              hideButton={!selectedNewPaymentMethodType}
              hideAdditionalComponent={!selectedNewPaymentMethodType}
              additionalComponent={
                <HStack alignItems={'center'} space={2}>
                  <Checkbox
                    aria-label="accept terms and conditions for this buy"
                    // flex={0.1}
                    value={acceptTermsAndConditions}
                    onChange={isChecked =>
                      setAcceptTermsAndConditions(isChecked)
                    }
                  />
                  <UTextWithLinks
                    firstText="Acepto haber leído los"
                    secondText="términos y condiciones"
                    secondLink="https://google.com/terms"
                    thirdText="y la"
                    fourthText="política de privacidad"
                    fourthLink="https://google.com/privacy"
                    fifthText="para hacer esta compra"
                  />
                </HStack>
              }
              isDisabled={!acceptTermsAndConditions}>
              <UText title center weight={500}>
                Métodos de pago
              </UText>
              <UBasicCard>
                <Radio.Group
                  space={3}
                  name="new-payment-method-type"
                  defaultValue={selectedNewPaymentMethodType}
                  onChange={nextValue => {
                    setSelectedNewPaymentMethodType(nextValue);
                    nequiFormAnimation.setValue(0);
                    animateNequiForm();
                  }}>
                  <Radio size={'sm'} value="DebitCreditCard">
                    Tarjeta de Crédito - Débito
                  </Radio>
                  <ULine />
                  {/* <Radio size={'sm'} value="DebitCard">
                    Tarjeta de Débito
                  </Radio> */}
                  <ULine />

                  <Radio size={'sm'} value="Nequi">
                    Nequi
                  </Radio>
                  <ULine />

                  {/* <Radio size={'sm'} value="Daviplata">
                    Daviplata
                  </Radio> */}
                </Radio.Group>
              </UBasicCard>

              {selectedNewPaymentMethodType === 'DebitCreditCard' && (
                <></>
                // <UCreditDebitCardForm ref={creditDebitCardFormRef} onSubmit={handleAddCreditDebitCardPaymentMethod} />
              )}
              {selectedNewPaymentMethodType === 'DebitCard' && (
                <></>

                // <UCreditDebitCardForm ref={creditDebitCardFormRef} onSubmit={handleAddCreditDebitCardPaymentMethod} />
              )}
              {selectedNewPaymentMethodType === 'Daviplata' && (
                <></>

                // <UCreditDebitCardForm ref={creditDebitCardFormRef} onSubmit={handleAddCreditDebitCardPaymentMethod} />
              )}
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: nequiFormAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-50, 0],
                      }),
                    },
                  ],
                  opacity: nequiFormAnimation,
                }}>
                {selectedNewPaymentMethodType === 'Nequi' && (
                  <UNequiForm
                    ref={nequiFormRef}
                    onSubmit={handleAddNequiPaymentMethod}
                  />
                )}
              </Animated.View>
            </UBasicWrapperNoSafeArea>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    // backgroundColor: 'white',
    // padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 0,
    minHeight: '100%',
  },
});

export default UPaymentMethodComponent;
