import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import {RoutesLogin, RoutesMain} from './routes';


const App = function () {
  var [logged, setlogged] = useState(true)   

  return (
    <>
    { logged ? <RoutesMain/> : <RoutesLogin/> }    
    </>
  );

  
};

export default App;
