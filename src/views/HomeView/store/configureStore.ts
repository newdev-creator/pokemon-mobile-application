import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import {persistReducer, persistStore} from 'redux-persist';
import setArrayPokemonCaptured from './reducers/arrayPokemonCaptureReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  ArrayPokemonCaptured: setArrayPokemonCaptured,
});

export default createStore(persistReducer(rootPersistConfig, rootReducer));
