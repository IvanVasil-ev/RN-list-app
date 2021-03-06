import React,
{
  memo,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FlatListItem from '../../components/FlatListItem/FlatListItem';
import styles from './Home.styles';
import { RootState } from '../../store/rootReducer';
import {
  getFirstPagePending,
  getNextPagePending,
  updateListPending,
} from '../../store/list/actions';
import {
  ListModels,
} from '../../models';

function Home(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const interval: { current: NodeJS.Timeout | null } = useRef(null);
  const isLoading = useSelector<RootState, boolean>((store) => store.list.isLoading);
  const isDelayed = useSelector<RootState, boolean>((store) => store.list.isDelayed);
  const list = useSelector<RootState, ListModels.ListGetPageResponse>((store) => store.list.list);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getFirstPagePending(1));
    navigation.addListener('focus', () => {
      interval.current = setInterval(() => dispatch(updateListPending(page)), 60000);
    });
    navigation.addListener('blur', () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    });
  }, []);

  const onRefresh = useCallback((): void => {
    if (!isDelayed) {
      dispatch(getFirstPagePending(page));
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = setInterval(() => dispatch(updateListPending(page)), 60000);
      }
    }
  }, [page, dispatch, isDelayed]);

  const onEndReached = useCallback((): void => {
    if (Array.isArray(list) && list.length >= 25 && !isLoading) {
      dispatch(getNextPagePending(page + 1));
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = setInterval(() => dispatch(updateListPending(page)), 60000);
      }
      setPage(page + 1);
    }
  }, [dispatch, page, list]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        refreshControl={(
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            enabled={!isDelayed}
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
    </View>
  );
}

export default memo(Home);
