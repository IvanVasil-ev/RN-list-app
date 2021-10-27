import React, { memo } from 'react';
import {
  View,
  Text,
} from 'react-native';

function Home(): React.ReactElement {
  return (
    <View>
      <Text>Home page!</Text>
    </View>
  );
}

export default memo(Home);
