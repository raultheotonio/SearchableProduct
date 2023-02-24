import algoliasearch from 'algoliasearch';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {InstantSearch} from 'react-instantsearch-hooks';
import Home from './src/pages/Home';

const searchClient = algoliasearch('#', '#');

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <InstantSearch
        indexName="Product"
        searchClient={searchClient}
        initialUiState={{
          Product: {
            hierarchicalMenu: {
              'categories.lvl0': ['home'],
            },
          },
        }}>
        <Home />
      </InstantSearch>
    </SafeAreaView>
  );
}

export default App;
