import {ImageSourcePropType} from 'react-native/types';
import iTransaction from './iTransaction';

export default interface iReferredTransaction extends iTransaction {
  referredIcon?: ImageSourcePropType;
}
