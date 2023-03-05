import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  basket: [],
  totalPrice: 0,
  addNewItem: (i) => set((state) => ({ basket: [...state.basket, i] })),
});

const serverStore = (set) => ({
  serverData: [],
  addServerData: (i) => set((state) => ({ serverData: [...state.serverData, i] })),
});

export const useStore = create(persist(store, { name: "basket" }));
export const useServerStore = create(serverStore);

export default useStore;
