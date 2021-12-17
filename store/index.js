import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { mealsSlice } from "./Meals";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: { meals: mealsSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
