import React from 'react';
import Search from './pages/search';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Search />
      </>
    );
  }
}
