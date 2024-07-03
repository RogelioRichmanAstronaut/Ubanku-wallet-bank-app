import {useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';
import {randomBytes} from 'react-native-randombytes';

const useDeviceTrust = () => {
  const [deviceToken, setDeviceToken] = useState<string | null>(null);

  const generateToken = () => {
    return randomBytes(32).toString('hex');
  };

  const storeToken = async (token: string) => {
    await Keychain.setGenericPassword('uTdt', token);
  };

  const retrieveToken = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      setDeviceToken(credentials.password);
    } else {
      const newToken = generateToken();
      await storeToken(newToken);
      setDeviceToken(newToken);
    }
  };

  const regenerateToken = async () => {
    const newToken = generateToken();
    await storeToken(newToken);

    setDeviceToken(newToken);
  };

  const deleteToken = async () => {
    await Keychain.resetGenericPassword();
    setDeviceToken(null);
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  return {deviceToken, regenerateToken, deleteToken};
};

export default useDeviceTrust;
