import React, { memo, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { ListItemPreview } from '../../models/List';
import { changeValue, getFirstPagePending } from '../../store/list/actions';
import styles from './Preview.styles';

type PreviewProps = {
  route: {
    params: {
      item: ListItemPreview;
    };
  }
}

function Preview({ route }: PreviewProps): React.ReactElement {
  const dispatch = useDispatch();
  const { item } = route.params;

  const isRepo = !!item.repo;
  const isOrg = !!item.org;

  useEffect(() => {
    dispatch(changeValue({ key: 'isDelayed', value: false }));
    return () => {
      dispatch(getFirstPagePending(1));
    };
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.authorAvatar}
          source={{
            uri: item.actor?.avatar_url,
          }}
        />
        <View style={styles.authorInfo}>
          <Text style={[styles.text, styles.bold]}>
            {item.actor?.login}
          </Text>
        </View>
      </View>
      {isRepo && (
        <>
          <Text style={[styles.text, styles.bold, styles.mb5]}>
            Repo:
          </Text>
          <View style={styles.wrapper}>
            <View style={styles.repoInfo}>
              <Text>
                Name:
                {'  '}
                {item.repo?.name}
              </Text>
              <Text>
                URL:
                {'  '}
                {item.repo?.url}
              </Text>
            </View>
          </View>
        </>
      )}
      {isOrg && (
        <>
          <Text style={[styles.text, styles.bold, styles.mb5]}>
            Organization:
          </Text>
          <View style={styles.wrapper}>
            <Image
              style={styles.orgAvatar}
              source={{
                uri: item.org?.avatar_url,
              }}
            />
            <View style={styles.orgInfo}>
              <Text>
                Name:
                {'  '}
                {item.org?.login}
              </Text>
              <Text>
                URL:
                {'  '}
                {item.org?.url}
              </Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

export default memo(Preview);
