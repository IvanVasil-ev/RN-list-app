import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './FlatFlistItem.styles';

type FlatListItemProps = {
  title: string;
}

function FlatFlistItem({ title }: FlatListItemProps): React.ReactElement {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={styles.itemWrapper}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default FlatFlistItem;
