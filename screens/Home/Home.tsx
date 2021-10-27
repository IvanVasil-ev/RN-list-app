import React, { memo, useCallback, useState } from 'react';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import FlatListItem from '../../components/FlatListItem/FlatListItem';
import styles from './Home.styles';

function Home(): React.ReactElement {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback((): void => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, [setRefreshing]);

  const mockData = [
    {
      id: 1,
      title: 'This is 1 title!',
    },
    {
      id: 2,
      title: 'This is 2 title!',
    },
    {
      id: 3,
      title: 'This is 3 title!',
    },
    {
      id: 4,
      title: 'This is 4 title!',
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scroll}>
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
        <FlatList
          data={mockData}
          renderItem={({ item }): React.ReactElement => (
            <FlatListItem title={item.title} id={item.id} />
          )}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default memo(Home);
