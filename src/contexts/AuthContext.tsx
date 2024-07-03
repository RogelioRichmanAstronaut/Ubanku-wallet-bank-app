import React, {createContext, useState, useContext} from 'react';
import axios from 'axios';
import useRegister from '../hooks/Auth/useRegister';
import useSendVerificationCode from '../hooks/Auth/useSendVerificationCode';
import useVerificationCode from '../hooks/Auth/useVerificationCode';
import useIsRegistered from '../hooks/Auth/useIsRegistered';
import useGetReferredCode from '../hooks/Auth/useGetReferredCode';
import useGetUserByReferredCode from '../hooks/Auth/useGetUserByReferredCode';
import useLogin from '../hooks/Auth/useLogin';
import useChangePassword from '../hooks/Auth/useChangePassword';
import iUser from '../interfaces/Auth/iRegisterNewUserData';
import iPhoneData from '../interfaces/Auth/iPhoneData';
import iLoginData from '../interfaces/Auth/iLoginData';
import iMsgReq from '../interfaces/Auth/iMsgReq';
import iChangePassReq from '../interfaces/Auth/iChangePassReq';
import {Platform} from 'react-native';

interface CodeData extends iPhoneData {
  type?: string;
  code?: string;
}

interface AuthContextType {
  user: string | null;
  authToken: string;
  register: (userData: iUser) => Promise<any>;
  sendVerificationCode: (data: iMsgReq) => Promise<any>;
  checkVerificationCode: (data: iMsgReq) => Promise<any>;
  isRegistered: (data: CodeData) => Promise<any>;
  getReferredCode: (data: CodeData) => Promise<any>;
  getUserByReferredCode: (referredCode: string) => Promise<any>;
  login: (data: iLoginData, trustInDevice: boolean) => Promise<any>;
  loginError: string | null;
  changePassword: (data: iChangePassReq) => Promise<any>;
  isAuthenticated: boolean;
  logout: () => void;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string>('');

  let apiURL = 'http://localhost:8088/api'; // URL por defecto mockserver
  let apiURL2 = 'http://localhost:8080/'; // Segunda URL por defecto backend

  if (Platform.OS === 'android') {
    apiURL = 'http://10.0.2.2:8088/api'; // URL para Android
    apiURL2 = 'http://10.0.2.2:8080/'; // Segunda URL para Android
  }

  const api = axios.create({
    baseURL: apiURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  api.interceptors.request.use(config => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });
  const api2 = axios.create({
    baseURL: apiURL2,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  api2.interceptors.request.use(config => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });
  const handleApiError = (error: any) => {
    // aqui miramos el error de la API
    console.error(error);
  };
  const handleInternalError = (error: any) => {
    // como su nombre lo dice, handle internal error
    console.error(error);
  };

  const [register, registerLoading, registerError] = useRegister(
    api2,
    setAuthToken,
    setUser,
    setIsAuthenticated,
  );
  const [
    sendVerificationCode,
    sendVerificationCodeLoading,
    sendVerificationCodeError,
  ] = useSendVerificationCode(api);
  const [
    checkVerificationCode,
    verificationCodeLoading,
    verificationCodeError,
  ] = useVerificationCode(api);
  const [isRegistered, isRegisteredLoading, isRegisteredError] =
    useIsRegistered(api2);
  const [getReferredCode, getReferredCodeLoading, getReferredCodeError] =
    useGetReferredCode(api);
  const [
    getUserByReferredCode,
    getUserByReferredCodeLoading,
    getUserByReferredCodeError,
  ] = useGetUserByReferredCode(api);
  const [login, loginLoading, loginError] = useLogin(
    api2,
    setAuthToken,
    setUser,
    setIsAuthenticated,
  );
  const [changePassword, changePasswordLoading, changePasswordError] =
    useChangePassword(api2);

  const logout = () => {
    try {
      // borrar datos de usuario y auth token
      setUser(null);
      setAuthToken('');
      // set isAuthenticated to false
      setIsAuthenticated(false);
    } catch (error) {
      handleInternalError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        register,
        // registerLoading,
        // registerError,
        sendVerificationCode,
        checkVerificationCode,
        isRegistered,
        getReferredCode,
        getUserByReferredCode,
        login,
        loginError,
        changePassword,
        logout,
        isAuthenticated,
        setIsAuthenticated,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
