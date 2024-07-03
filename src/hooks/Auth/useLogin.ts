import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';
import iLoginData from '../interfaces/iLoginData';
import useDeviceTrust from './useDeviceTrust';

const useLogin = (
  api: AxiosInstance,
  setAuthToken: any,
  setUser: any,
  setIsAuthenticated: any,
) => {
  const {deviceToken, deleteToken} = useDeviceTrust();

  const [request, loading, error] = useApiRequest(api, '/auth/login', 'POST');

  const login = async (data: iLoginData, trustInDevice: boolean) => {
    let response;
    try {
      if (trustInDevice) {
        response = await request({
          ...data,
          device_info: {device_id: deviceToken},
        });
      } else {
        response = await request(data);
      }

      if (response && response.loginUserDataRes.access_token) {
        setAuthToken(response.loginUserDataRes.access_token);
        setUser(response.loginUserDataRes.id);
        setIsAuthenticated(true);
      }
      return response;
    } catch (err) {
      if (error !== 'Password incorrect') {
        console.log(err);
      }
    }
  };

  return [login, loading, error];
};

export default useLogin;
