import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  basket: [],
  totalPrice: 0,
  addNewItem: (i) => set((state) => ({ basket: [...state.basket, i] })),
  serverData: [],
  addServerData: (i) =>
    set((state) => ({ serverData: [...state.serverData, i] })),
});

const serverStore = (set) => ({
  serverData: [],
  addServerData: (i) => set(() => ({ serverData: i })),
});

const useStore = create(persist(store, { name: "basket" }));
export const useServerStore = create(store);

export default useStore;
