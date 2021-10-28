import React,
{
  memo,
  useCallback,
  useEffect,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import FlatListItem from '../../components/FlatListItem/FlatListItem';
import styles from './Home.styles';
import { RootState } from '../../store/rootReducer';
import { getAllPending } from '../../store/list/actions';

function Home(): React.ReactElement {
  const dispatch = useDispatch();
  const isLoading = useSelector<RootState>((store) => store.list.isLoading);
  const list = useSelector<RootState>((store) => store.list.list);

  const page = 1;

  useEffect(() => {
    dispatch(getAllPending(page));
  }, []);

  const onRefresh = useCallback((): void => {
    dispatch(getAllPending(page));
  }, [page]);

  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        style={styles.flatList}
        refreshControl={(
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        )}
        data={list}
        renderItem={({ item }): React.ReactElement => (
          <FlatListItem item={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaProvider>
  );
}

export default memo(Home);
