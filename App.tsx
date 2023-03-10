import algoliasearch from 'algoliasearch';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {InstantSearch} from 'react-instantsearch-hooks';
import Home from './src/pages/Home';

const searchClient = algoliasearch('#', '#');

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <InstantSearch indexName="Product" searchClient={searchClient}>
        <Home />
      </InstantSearch>
    </SafeAreaView>
  );
}

export default App;
