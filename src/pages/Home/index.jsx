import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalFilter from '../components/Filter';
import { SearchBox } from '../components/SearchBox';
import InfinitHits from '../components/InfinitHits';
import { useClearRefinements, useSearchBox } from 'react-instantsearch-hooks';

const Home = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const {query, refine} = useSearchBox();
  const [inputValue, setInputValue] = useState(query);

  const { canRefine: canClearFilter, refine: clearFilter } = useClearRefinements();

  const setText =(text) => {
    setInputValue(text);
    refine(text);
  }

  return (
    <View>
      <SearchBox query={query} value={inputValue} setText={setText}/>

        <View style={styles.containerFilter}>
          <TouchableOpacity
            onPress={() => setIsVisibleModal(!isVisibleModal)}>
             <Text>Filtrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnClearFilter}
            onPress={() => {
                if(canClearFilter) clearFilter()

                setText('')
              
              }}>
              <Text>Limpar filtro</Text>
          </TouchableOpacity>
        </View>
        
        <InfinitHits />
        <ModalFilter
          isVisibleModal={isVisibleModal}
          setIsVisibleModal={setIsVisibleModal}
          clearFilter={clearFilter}
        />
    </View>
  )

};

const styles = StyleSheet.create({
  containerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  filterTitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default Home;
