import {useState} from 'react';
import axios, {AxiosInstance} from 'axios';

const useApiRequest = (
  api: AxiosInstance,
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
): [(data?: any) => Promise<any>, boolean, any] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiRequest = async (data: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api({
        method: method,
        url: path,
        data: data,
      });
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error('Server responded with non-OK status');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 409) {
        // handle 409 status code
        // console.log(err.response.data.message);
        setError('Password incorrect');
        throw new Error('Password incorrect');
      } else {
        setError(err.message);
        throw err;
      }
    } finally {
      setLoading(false);
    }
  };

  return [apiRequest, loading, error];
};

export default useApiRequest;
