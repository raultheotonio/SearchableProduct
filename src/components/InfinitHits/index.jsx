import React from 'react';
import {useInfiniteHits} from 'react-instantsearch-hooks';
import {FlatList} from 'react-native';
import Card from '../Card';

const ListaProdutos = () => {
  const {hits, isLastPage, showMore } = useInfiniteHits();

  return (
    <FlatList
      data={hits}
      keyExtractor={item => item.objectID}
      contentContainerStyle={{paddingBottom: 100}}
      onEndReached={() => {
        if (!isLastPage) {
          showMore();
        }
      }}
      renderItem={({item}) => <Card {...item} />}
    />
  );
};

export default ListaProdutos;
