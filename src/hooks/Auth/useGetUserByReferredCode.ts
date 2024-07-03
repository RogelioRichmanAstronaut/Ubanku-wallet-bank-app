import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';

const useGetUserByReferredCode = (api: AxiosInstance) => {
  const [request, loading, error] = useApiRequest(
    api,
    '/auth/getUserByReferredCode',
    'POST',
  );

  const getUserByReferredCode = async (referred_code: string) => {
    try {
      const response = await request({referred_code});
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [getUserByReferredCode, loading, error];
};

export default useGetUserByReferredCode;
