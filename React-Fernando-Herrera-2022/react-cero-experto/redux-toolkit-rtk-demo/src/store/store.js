import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';


// La unica fuente de la verdad. 
export const store = configureStore({
  reducer: {
      // Aca ponemos los slices. que son nuestros reducer.
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer,

      [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})