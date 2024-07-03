import React from 'react';
import {Box} from 'native-base';
import {ScrollView, View} from 'react-native';

import UBubble from '../atoms/UBubble';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface UBasicBubblePageProps {
  bubbleColor?: string;
  smallBubble?: boolean;
  topComponent?: React.ReactNode;
  downComponent?: React.ReactNode;
}

const UBasicBubblePage: React.FC<UBasicBubblePageProps> = ({
  bubbleColor = 'primary.main',
  topComponent,
  downComponent,
  smallBubble = false,
}) => {
  return (
    <Box flex={1} bgColor={'white'}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{minHeight: '20%', position: 'relative'}}>
          <UBubble color={bubbleColor} small={smallBubble} />
          <SafeAreaView
            edges={['top', 'left', 'right']}
            style={{position: 'relative', zIndex: 1}}>
            <Box paddingX={5}>{topComponent}</Box>
          </SafeAreaView>
        </View>
        <SafeAreaView
          edges={['bottom', 'left', 'right']}
          style={{flex: 1, zIndex: 0}}>
          <Box paddingX={5} flex={1}>
            {downComponent}
          </Box>
        </SafeAreaView>
      </ScrollView>
    </Box>
  );
};

export default UBasicBubblePage;
