import { configureStore } from "@reduxjs/toolkit";

import PrizeReducer from './reducers/PrizeReducer'
import ShoesReducer from "./reducers/ShoesReducer";

const store = configureStore({
    reducer: {
        prizes: PrizeReducer,
        shoes: ShoesReducer
    }
});

export default store;