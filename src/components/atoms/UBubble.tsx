import {View} from 'native-base';

interface UBubbleProps {
  color?: string;
  small?: boolean;
}

const UBubble = ({color, small = false}: UBubbleProps) => {
  return (
    <View
      bgColor={color}
      style={{
        width: '100%',
        height: '100%',
        // backgroundColor: color,
        borderBottomLeftRadius: !small ? 1000 : 24,
        borderBottomRightRadius: !small ? 1000 : 24,
        transform: !small ? [{scaleX: 1.7}] : undefined,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default UBubble;
