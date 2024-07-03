import iPhoneData from './iPhoneData';

export default interface iChangePassReq extends iPhoneData {
  type: string;
  code: string;
  new_pin: string;
}
