import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';

interface CodeData {
  cellphone: string;
  indicative: string;
  type?: string;
  code?: string;
}

const useGetReferredCode = (api: AxiosInstance) => {
  const [request, loading, error] = useApiRequest(
    api,
    '/auth/getReferredCode',
    'POST',
  );

  const getReferredCode = async (data: CodeData) => {
    try {
      const response = await request(data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [getReferredCode, loading, error];
};

export default useGetReferredCode;
