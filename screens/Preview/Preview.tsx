import React, { memo } from 'react';
import {
  View,
  Text,
} from 'react-native';

function Preview(): React.ReactElement {
  return (
    <View>
      <Text>Preview page!</Text>
    </View>
  );
}

export default memo(Preview);
