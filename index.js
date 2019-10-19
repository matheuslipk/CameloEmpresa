import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import Store from './src/store/storeConfig'

const Redux = () => {
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
