import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import { login } from './store/actions/user';
import { RoutesLogin, RoutesMain } from './routes';
import { varAsyncStorage } from './constantes';

export default function Index() {
  const usuario = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function verificaLogado() {
      const store = await AsyncStorage.getItem(varAsyncStorage.store);
      await AsyncStorage.getItem(varAsyncStorage.token)
        .then((resultado) => {
          if (resultado && store) {
            dispatch(login(JSON.parse(store)));
          }
        })
        .catch();
    }

    verificaLogado();
  }, [dispatch]);

  return (
    <>
      { usuario.logged ? <RoutesMain /> : <RoutesLogin /> }
    </>
  );
}
