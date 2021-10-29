import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { ListItemPreview } from '../../models/List';
import styles from './FlatFlistItem.styles';

type FlatListItemProps = {
  item: ListItemPreview;
}

function FlatFlistItem({ item }: FlatListItemProps): React.ReactElement {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onPress = useCallback(() => navigation.navigate('Preview', { item }), [item]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.itemWrapper}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.actor?.avatar_url,
          }}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.text, styles.bold]}>
            {item.actor?.login}
          </Text>
          <Text style={styles.text}>
            Type:
            {' '}
            {item.type}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FlatFlistItem;
