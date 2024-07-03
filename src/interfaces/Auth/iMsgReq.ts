import iDeviceInfo from './iDeviceInfo';
import iPhoneData from './iPhoneData';

export default interface iMsgReq extends iPhoneData, Partial<iDeviceInfo> {
  type?: string;
  code?: string;
}
