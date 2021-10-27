import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import { RootStackParamList } from './types';
import { Home, Preview } from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="Home"
  >
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Stack.Screen
      name="Preview"
      component={Preview}
    />
  </Stack.Navigator>
);

const Navigation = (): React.ReactElement => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
