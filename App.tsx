import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import {AuthProvider, useAuth} from './src/contexts/AuthContext';
import {themeV1} from './src/theme/v1';
import RootNavigator from './src/navigation/RootNavigator';
import LaunchScreen from './src/screens/Auth/LaunchScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppContent = () => {
  const {isAuthenticated} = useAuth();
  const [isAppReady, setIsAppReady] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 333);
  }, []);

  if (!isAppReady) {
    return <LaunchScreen />;
  } else {
    return (
      <NavigationContainer>
        {!isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }
};

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider theme={themeV1}>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
