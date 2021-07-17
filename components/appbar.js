import React from 'react';
import { Header } from 'react-native-elements';
export default function Appbar() {
  return (
    <Header
      backgroundColor={'#002171'}
      centerComponent={{
        text: 'Weather Forecasting',
        style: { color: '#fff176', fontSize: 15 , fontWeight:'bold' },
      }}
    />
  );
}
