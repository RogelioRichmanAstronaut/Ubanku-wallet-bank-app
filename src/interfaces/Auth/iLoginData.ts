import iDeviceInfo from './iDeviceInfo';
import iPhoneData from './iPhoneData';

export default interface iLoginData extends iPhoneData, iDeviceInfo {
  pin: string;
}
