// import React, {useState} from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   TouchableOpacity,
// } from 'react-native';
// // import {useTheme} from 'styled-components/native';

// interface ButtonProps {
//   icon?: string;
//   arrow?: boolean;
//   size?: 'small' | 'medium' | 'large';
//   text?: string;
//   disabled?: boolean;
//   onPress: () => void;
// }

// const sizes = {
//   small: {
//     fontSize: 16,
//     iconSize: 8,
//     padding: 8,
//   },
//   medium: {
//     fontSize: 16,
//     iconSize: 12,
//     padding: 12,
//   },
//   large: {
//     fontSize: 20,
//     iconSize: 12,
//     padding: 16,
//   },
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     borderRadius: 100,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {},
//   icon: {},
// });

// const ULinkButton = ({
//   icon,
//   arrow = false,
//   size = 'medium',
//   text,
//   disabled = false,
//   onPress,
// }: ButtonProps) => {
//   // const theme = useTheme();
//   // const colors = theme.colors;
//   // const [isHovered, setIsHovered] = useState(false);
//   const [isPressed, setIsPressed] = useState(false);

//   const backgroundColor = disabled ? 'transparent' : 'transparent';
//   //  : 'red';
//   const color = disabled
//     ? colors.secondary200
//     : isPressed
//     ? colors.ubanku500
//     : colors.ubanku300;
//   const fontSize = sizes[size].fontSize;
//   const iconSize = sizes[size].iconSize;
//   const padding = sizes[size].padding;

//   return (
//     <TouchableOpacity
//       //   activeOpacity={1}
//       //   underlayColor={colors.ubanku500}
//       style={[styles.buttonContainer, {padding}]}
//       onPressIn={() => {
//         setIsPressed(true);
//         // setIsHovered(false);
//       }}
//       onPressOut={() => {
//         setIsPressed(false);
//         // setIsHovered(false);
//       }}
//       onPress={onPress}
//       disabled={disabled}>
//       <>
//         {icon && (
//           <Image
//             source={{uri: icon}}
//             style={[styles.icon, {width: iconSize, height: iconSize}]}
//           />
//         )}
//         {text && (
//           <Text style={[styles.buttonText, {color, fontSize}]}>{text}</Text>
//         )}
//         {arrow && (
//           <Image
//             source={{uri: '<URL>'}}
//             style={[styles.icon, {width: iconSize, height: iconSize}]}
//           />
//         )}
//       </>
//     </TouchableOpacity>
//   );
// };

// export default ULinkButton;
