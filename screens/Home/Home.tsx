import React,
{
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import FlatListItem from '../../components/FlatListItem/FlatListItem';
import styles from './Home.styles';
import { RootState } from '../../store/rootReducer';
import {
  getAllPending,
  getNextPagePending,
} from '../../store/list/actions';
import {
  ListModels,
} from '../../models';

function Home(): React.ReactElement {
  const dispatch = useDispatch();
  const isLoading = useSelector<RootState, boolean>((store) => store.list.isLoading);
  const list = useSelector<RootState, ListModels.ListGetAllResponse>((store) => store.list.list);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllPending(1));
  }, []);

  const onRefresh = useCallback((): void => {
    dispatch(getAllPending(page));
  }, [page, dispatch]);

  const onEndReached = useCallback((): void => {
    if (Array.isArray(list) && list.length >= 25 && !isLoading) {
      dispatch(getNextPagePending(page + 1));
      setPage(page + 1);
    }
  }, [dispatch, page, list]);

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
        onEndReached={onEndReached}
        ListFooterComponent={(isLoading && list?.length) ? (
          <ActivityIndicator size="small" />
        ) : null}
      />
    </SafeAreaProvider>
  );
}

export default memo(Home);
