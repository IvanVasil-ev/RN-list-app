import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';

import useCachedResources from './hooks/useCachedResources';
import createStore from './store';
import Navigation from './navigation';

const { store, persistor } = createStore();

function App(): React.ReactElement | null {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
