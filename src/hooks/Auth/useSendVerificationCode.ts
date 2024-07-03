import {AxiosInstance} from 'axios';
import useApiRequest from './useApiRequest';
import iRegisterPhoneData from '../interfaces/iRegisterPhoneData';
import iMsgReq from '../interfaces/iMsgReq';

const useSendVerificationCode = (api: AxiosInstance) => {
  // const {setAuthToken, setUser, setIsAuthenticated} = useContext(AuthContext);
  const [request, loading, error] = useApiRequest(
    api,
    '/auth/send-verification-code',
    'POST',
  );

  const sendVerificationCode = async (data: iMsgReq) => {
    try {
      const response = await request(data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return [sendVerificationCode, loading, error];
};

export default useSendVerificationCode;
