import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import UText from '../../../atoms/UText';

interface CircleProps {
  name?: string;
  image?: ImageSourcePropType;
  size?: 'small' | 'medium';
}

const Circle: React.FC<CircleProps> = ({name, image, size = 'small'}) => {
  const sizeStyle =
    size === 'small' ? {width: 50, height: 50} : {width: 70, height: 70};
  // size === 'small' ? {width: 84, height: 84} : {width: 135, height: 135};

  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          ...sizeStyle,
          borderRadius: sizeStyle.width / 2,
          backgroundColor: image ? 'white' : '#F1F1F1',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {image ? (
          <Image source={image} style={sizeStyle} />
        ) : (
          <Icon as={Feather} name={'user-plus'} color="text.400" size={5} />
        )}
      </View>
      {name && (
        <UText size={12} weight={400} color="text.900" center>
          {name}
        </UText>
      )}
    </View>
  );
};

interface CirclesProps {
  circles?: CircleProps[];
}

const ReferredCircles: React.FC<CirclesProps> = ({circles = []}) => {
  const angle = (2 * Math.PI) / 7;
  return (
    <View style={{}}>
      <View style={{position: 'absolute', top: 100, left: 100}}>
        <Circle
          size="medium"
          image={require('../../../../assets/icons/userIconMd.png')}
        />
      </View>
      <View>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              top: Math.sin(angle * index) * 100 + 100,
              left: Math.cos(angle * index) * 100 + 100,
            }}>
            <Circle {...circles[index]} />
          </View>
        ))}
      </View>
    </View>
  );
};
export default ReferredCircles;
