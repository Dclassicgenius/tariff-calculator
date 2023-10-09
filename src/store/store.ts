import { configureStore } from "@reduxjs/toolkit";
import tariffConfiguratorReducer from "./TariffSlice";

const store = configureStore({
  reducer: {
    tariffConfigurator: tariffConfiguratorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
