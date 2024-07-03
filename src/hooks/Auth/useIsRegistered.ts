import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';
import useDeviceTrust from './useDeviceTrust';

interface CodeData {
  cellphone: string;
  phone_code: string;
  //   device_info: {
  //     device_id: string;
  //   };
}

const useIsRegistered = (api: AxiosInstance) => {
  const {deviceToken} = useDeviceTrust();

  const [request, loading, error] = useApiRequest(
    api,
    '/auth/is-registered',
    'POST',
  );

  const isRegistered = async (data: CodeData) => {
    try {
      const response = await request({
        ...data,
        device_info: {device_id: deviceToken},
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [isRegistered, loading, error];
};

export default useIsRegistered;
