import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';
import iMsgReq from '../interfaces/iMsgReq';

const useVerificationCode = (api: AxiosInstance) => {
  const [request, loading, error] = useApiRequest(
    api,
    '/auth/verification-code',
    'POST',
  );

  const verificationCode = async (data: iMsgReq) => {
    try {
      const response = await request({
        ...data,
        device_info: {device_id: 'innecesary'},
      } as iMsgReq);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [verificationCode, loading, error];
};

export default useVerificationCode;
