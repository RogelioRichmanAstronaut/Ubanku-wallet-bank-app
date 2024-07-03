// import React from 'react';
// import {
//   Button,
//   Box,
//   CircleIcon,
//   HStack,
//   Heading,
//   Pressable,
//   Image,
//   VStack,
//   ScrollView,
//   Text,
// } from 'native-base';
// import {StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// interface Achievement {
//   title: string;
//   description: string;
//   bgColor: string;
//   imageLock: any;
//   imageUnLock: any;
//   isLocked: boolean;
// }

// const listAchievement: Achievement[] = [
//   {
//     title: 'Lento pero seguro',
//     description: '20% completado',
//     bgColor: '#E6C2F3',
//     imageLock: require('../assets/images/snail-lock.png'),
//     imageUnLock: require('../assets/images/snail-unlock.png'),
//     isLocked: false,
//   },
//   {
//     title: 'Vamos a lograrlo',
//     description: '40% completado',
//     bgColor: '#6EEBFF',
//     imageLock: require('../assets/images/flower-money-lock.png'),
//     imageUnLock: require('../assets/images/flower-money-unlock.png'),
//     isLocked: false,
//   },
//   {
//     title: 'Vamos a lograrlo',
//     description: '60% completado',
//     bgColor: '#E6C2F3',
//     imageLock: require('../assets/images/hand-money-lock.png'),
//     imageUnLock: require('../assets/images/hand-money-lock.png'),
//     isLocked: true,
//   },
//   {
//     title: 'La luz al final del Túnel',
//     description: '80% completado',
//     bgColor: '#E6C2F3',
//     imageLock: require('../assets/images/muscle-money-lock.png'),
//     imageUnLock: require('../assets/images/muscle-money-lock.png'),
//     isLocked: true,
//   },
//   {
//     title: 'Ir al Estéreo Picnic',
//     description: '100% completado',
//     bgColor: '#E6C2F3',
//     imageLock: require('../assets/images/box-money-lock.png'),
//     imageUnLock: require('../assets/images/box-money-lock.png'),
//     isLocked: true,
//   },
// ];

// function AchievementCard({
//   title,
//   description,
//   imageLock,
//   imageUnLock,
//   isLocked,
//   bgColor,
// }: Achievement) {
//   const image = isLocked ? imageLock : imageUnLock;
//   const bg = isLocked ? 'muted.100' : bgColor;

//   return (
//     <Pressable bg={bg} borderRadius="xl" px="5" py="3">
//       <HStack alignItems="center">
//         <Image
//           w={70}
//           h={70}
//           alt="achievement"
//           resizeMode="contain"
//           source={image}
//         />
//         <Box pl="5" pr="5" flex="1">
//           <Text mb="1">{description}</Text>
//           <Heading size="sm" fontWeight="semibold">
//             {title}
//           </Heading>
//         </Box>
//         {isLocked ? (
//           <Image
//             style={styles.iconLock}
//             alt="lock"
//             resizeMode="contain"
//             source={require('../assets/images/lock.png')}
//           />
//         ) : (
//           <Image
//             style={styles.iconLock}
//             alt="unlock"
//             resizeMode="contain"
//             source={require('../assets/images/unlock.png')}
//           />
//         )}
//       </HStack>
//     </Pressable>
//   );
// }

// const Example = () => {
//   const {goBack} = useNavigation();

//   return (
//     <ScrollView contentInsetAdjustmentBehavior="automatic">
//       <Box px="4" py="10">
//         <HStack justifyContent="space-between" alignItems="center">
//           <Box>
//             <Text fontSize="sm">ir al Estéreo Picnic</Text>
//             <Heading size="xl">$50.000 COP</Heading>
//           </Box>

//           <Button size="sm" colorScheme="tertiary" endIcon={<CircleIcon />}>
//             3 meses
//           </Button>
//         </HStack>

//         <HStack space="4" mt="8">
//           <Button flex="1" onPress={goBack} isDisabled>
//             Abona a tu sueño
//           </Button>
//           <Button flex="1" variant="subtle" onPress={goBack} isDisabled>
//             Abona a tu sueño
//           </Button>
//           <Button flex="1" colorScheme="secondary" variant="outline">
//             Editar sueño
//           </Button>
//         </HStack>

//         <Heading size="xs" fontWeight="semibold" mt="8" mb="4">
//           Tus logros!
//         </Heading>

//         <VStack space="5">
//           {listAchievement.map((achievement, index) => (
//             <AchievementCard
//               key={index}
//               title={achievement.title}
//               description={achievement.description}
//               imageLock={achievement.imageLock}
//               imageUnLock={achievement.imageUnLock}
//               isLocked={achievement.isLocked}
//               bgColor={achievement.bgColor}
//             />
//           ))}
//         </VStack>
//       </Box>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   iconLock: {
//     width: 25,
//     height: 25,
//     marginLeft: 'auto',
//   },
// });

// export default Example;
