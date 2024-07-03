import React from 'react';
import {Linking} from 'react-native';
import {Box, Text} from 'native-base';

interface TextWithLinksProps {
  firstText?: string;
  firstLink?: string;
  secondText?: string;
  secondLink?: string;
  thirdText?: string;
  thirdLink?: string;
  fourthText?: string;
  fourthLink?: string;
  fifthText?: string;
  fifthLink?: string;
}

const UTextWithLinks: React.FC<TextWithLinksProps> = ({
  firstText,
  firstLink,
  secondText,
  secondLink,
  thirdText,
  thirdLink,
  fourthText,
  fourthLink,
  fifthText,
  fifthLink,
}) => {
  return (
    <Box flex={1} justifyContent={'center'} alignItems={'center'}>
      <Text fontSize={12} color={'text.900'}>
        {firstText && (
          <>
            <Text
              onPress={
                firstLink
                  ? () => firstLink && Linking.openURL(firstLink)
                  : undefined
              }
              fontSize={12}
              color={firstLink ? 'primary.800' : 'text.900'}
              style={firstLink ? {textDecorationLine: 'underline'} : {}}>
              {firstText}{' '}
            </Text>
          </>
        )}
        {secondText && (
          <>
            <Text
              onPress={
                secondLink
                  ? () => secondLink && Linking.openURL(secondLink)
                  : undefined
              }
              fontSize={12}
              color={secondLink ? 'primary.800' : 'text.900'}
              style={secondLink ? {textDecorationLine: 'underline'} : {}}>
              {secondText}
            </Text>{' '}
          </>
        )}
        {thirdText && (
          <>
            <Text
              onPress={
                thirdLink
                  ? () => thirdLink && Linking.openURL(thirdLink)
                  : undefined
              }
              fontSize={12}
              color={thirdLink ? 'primary.800' : 'text.900'}
              style={thirdLink ? {textDecorationLine: 'underline'} : {}}>
              {thirdText}
            </Text>{' '}
          </>
        )}
        {fourthText && (
          <>
            <Text
              onPress={
                fourthLink
                  ? () => fourthLink && Linking.openURL(fourthLink)
                  : undefined
              }
              fontSize={12}
              color={fourthLink ? 'primary.800' : 'text.900'}
              style={fourthLink ? {textDecorationLine: 'underline'} : {}}>
              {fourthText}
            </Text>{' '}
          </>
        )}
        {fifthText && (
          <>
            <Text
              onPress={
                fifthLink
                  ? () => fifthLink && Linking.openURL(fifthLink)
                  : undefined
              }
              fontSize={12}
              color={fifthLink ? 'primary.800' : 'text.900'}
              style={fifthLink ? {textDecorationLine: 'underline'} : {}}>
              {fifthText}
            </Text>{' '}
          </>
        )}
      </Text>
    </Box>
  );
};

export default UTextWithLinks;
