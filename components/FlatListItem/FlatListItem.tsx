import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './FlatFlistItem.styles';

type FlatListItemProps = {
  id: number;
  title: string;
}

function FlatFlistItem({ title, id }: FlatListItemProps): React.ReactElement {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const onPress = useCallback(() => navigation.navigate('Preview', { title }), [id]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.itemWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default FlatFlistItem;
