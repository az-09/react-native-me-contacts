import React from 'react';
import Provider from './src/context/Provider';
import AppNavContainer from './src/navigations';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <Provider>
      <AppNavContainer/>
  
    </Provider>

  );
}

