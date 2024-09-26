import { Shirt, shirts } from "@/constants/shirts";
import { nanoid } from "nanoid";
import { z } from "zod";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const userSchema = z.object({
  email: z.string().email(),
  quickDelivery: z.boolean(),
  phone: z.string().min(6),
  name: z.string().min(3),
});

export enum Language {
  EN = "ENGLISH",
  AR = "ARABIC",
}

type CheckoutType = Shirt & {
  language: Language;
};

interface ShirtStore {
  nanoId: number;
  user: z.infer<typeof userSchema>;
  setUser: (user: z.infer<typeof userSchema>) => void;
  clearUser: () => void;
  shirts: CheckoutType[];
  addShirt: (id: number, language: Language) => void;
  removeShirt: (id: number, language: Language) => void;
  clearShirts: () => void;
  totalPrice: number;
  incrementTotalPrice: (price: number) => void;
  decrementTotalPrice: (price: number) => void;
  resetNanoId: () => void;
}

const useShirtStore = create<ShirtStore>()(
  persist(
    (set) => ({
      nanoId: Math.floor(Math.random() * 1000000),
      shirts: [],
      user: {
        email: "",
        quickDelivery: false,
        phone: "",
        name: "",
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            email: "",
            quickDelivery: false,
            phone: "",
            name: "",
          },
        }),
      addShirt: (id, language) =>
        set((state) => {
          const shirtToAdd = shirts.find((shirt) => shirt.id === id);
          if (shirtToAdd) {
            const existingShirt = state.shirts.find(
              (s) => s.id === id && s.language === language,
            );
            if (!existingShirt) {
              const newShirt: CheckoutType = { ...shirtToAdd, language };
              return {
                shirts: [...state.shirts, newShirt],
                totalPrice: state.totalPrice + Number(shirtToAdd.price),
              };
            }
          }
          return state;
        }),
      removeShirt: (id, language) =>
        set((state) => {
          const shirtIndex = state.shirts.findIndex(
            (s) => s.id === id && s.language === language,
          );
          if (shirtIndex !== -1) {
            const updatedShirts = [...state.shirts];
            const removedShirt = updatedShirts.splice(shirtIndex, 1)[0];
            return {
              shirts: updatedShirts,
              totalPrice: state.totalPrice - Number(removedShirt.price),
            };
          }
          return state;
        }),
      clearShirts: () => set({ shirts: [], totalPrice: 0 }),
      totalPrice: 0,
      incrementTotalPrice: (price) =>
        set((state) => ({ totalPrice: state.totalPrice + price })),
      decrementTotalPrice: (price) =>
        set((state) => ({ totalPrice: state.totalPrice - price })),
      resetNanoId: () =>
        set({ nanoId: Math.floor(Math.random() * 1000000), shirts: [] }),
    }),
    {
      name: "shirts-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useShirtStore };
