import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';
import iChangePassReq from '../interfaces/iChangePassReq';

const useChangePassword = (api: AxiosInstance) => {
  const [request, loading, error] = useApiRequest(
    api,
    '/auth/pin-recovery',
    'POST',
  );

  const changePassword = async (data: iChangePassReq) => {
    try {
      const response = await request(data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [changePassword, loading, error];
};

export default useChangePassword;
