import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import UText from '../atoms/UText';

interface TwoSimpleTabsProps {
  titleTabOne: string;
  titleTabTwo: string;
  ComponentTabOne: React.ReactNode;
  ComponentTabTwo: React.ReactNode;
}
// type Tab = 'Celular' | 'Correo';

const TwoSimpleTabs = ({
  titleTabOne,
  titleTabTwo,
  ComponentTabOne,
  ComponentTabTwo,
}: TwoSimpleTabsProps) => {
  const [tabOne, setTabOne] = useState<Boolean>(true);

  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', flex: 1, marginBottom: '7%'}}>
        <TouchableOpacity
          style={[
            !tabOne && {borderBottomColor: '#E9ECEF'},
            {padding: '4%', borderBottomWidth: 1, flex: 0.5},
          ]}
          onPress={() => setTabOne(!tabOne)}>
          <UText
            style={tabOne ? styles.selectedText : styles.nonSelectedText}
            size={14}>
            {titleTabOne}
          </UText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tabOne && {borderBottomColor: '#E9ECEF'},
            {padding: '4%', borderBottomWidth: 1, flex: 0.5},
          ]}
          onPress={() => setTabOne(!tabOne)}>
          <UText
            style={!tabOne ? styles.selectedText : styles.nonSelectedText}
            size={14}>
            {titleTabTwo}
          </UText>
        </TouchableOpacity>
      </View>
      {tabOne ? ComponentTabOne : ComponentTabTwo}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedText: {
    fontWeight: '600',
    color: '#002930',
    textAlign: 'center',
  },
  nonSelectedText: {
    fontWeight: '400',
    color: '#809497',
    textAlign: 'center',
  },
});
export default TwoSimpleTabs;
