import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Summary from './components/Summary/Summary';
import Price from './components/Price/Price';

import styles from './App.styles';

// Hard coded data
const list = [
  {
    title: 'Issue date:',
    field: 'December 19, 2023'
  },
  {
    title: 'License:',
    field: 'December 19, 2023'
  },
  {
    title: 'Accident:',
    field: 'December 19, 2023'
  },
  {
    title: 'Court:',
    field: 'December 19, 2023'
  }
];

const App = (): React.JSX.Element => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView style={styles.scrollView}>
      <Navbar />
      <Header />
      <Banner />
      <Summary list={list} />
    </ScrollView>
    <Price />
  </SafeAreaView>
);

export default App;
