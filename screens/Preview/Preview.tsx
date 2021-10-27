import React, { memo } from 'react';
import {
  View,
  Text,
} from 'react-native';

type PreviewProps = {
  route: {
    params: {
      title: string;
    };
  }
}

function Preview({ route }: PreviewProps): React.ReactElement {
  const { title } = route.params;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default memo(Preview);
