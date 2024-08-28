import { Shirt, shirts } from "@/constants/shirts";
import { z } from "zod";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const userSchema = z.object({
  email: z.string().email(),
  quickDelivery: z.boolean(),
  phone: z.string().min(6),
  name: z.string().min(3),
  address: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(3),
  zip: z.string().min(3),
  country: z.string().min(3),
});

type CheckoutType = Shirt & {
  quantity: number;
};

interface ShirtStore {
  user: z.infer<typeof userSchema>;
  setUser: (user: z.infer<typeof userSchema>) => void;
  clearUser: () => void;
  shirts: CheckoutType[];
  addShirt: (id: number, quantity: number) => void;
  removeShirt: (id: number) => void;
  clearShirts: () => void;
  totalPrice: number;
  incrementTotalPrice: (price: number) => void;
  decrementTotalPrice: (price: number) => void;
}

const useShirtStore = create<ShirtStore>()(
  persist(
    (set) => ({
      shirts: [],
      user: {
        email: "",
        quickDelivery: false,
        phone: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            email: "",
            quickDelivery: false,
            phone: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
          },
        }),
      addShirt: (id, quantity) =>
        set((state) => {
          const shirtToAdd = shirts.find((shirt) => shirt.id === id);
          if (shirtToAdd) {
            const existingShirt = state.shirts.find((s) => s.id === id);
            if (existingShirt) {
              const updatedShirts = state.shirts.map((s) =>
                s.id === id ? { ...s, quantity: quantity } : s,
              );
              const priceDifference =
                Number(shirtToAdd.price) * (quantity - existingShirt.quantity);
              return {
                shirts: updatedShirts,
                totalPrice: state.totalPrice + priceDifference,
              };
            } else {
              const newShirt = { ...shirtToAdd, quantity: quantity };
              return {
                shirts: [...state.shirts, newShirt],
                totalPrice:
                  state.totalPrice + Number(shirtToAdd.price) * quantity,
              };
            }
          }
          return state;
        }),
      removeShirt: (id) =>
        set((state) => {
          const shirtIndex = state.shirts.findIndex((s) => s.id === id);
          if (shirtIndex !== -1) {
            const updatedShirts = [...state.shirts];
            const removedShirt = updatedShirts.splice(shirtIndex, 1)[0];
            return {
              shirts: updatedShirts,
              totalPrice:
                state.totalPrice -
                Number(removedShirt.price) * removedShirt.quantity,
            };
          }
          return state;
        }),
      clearShirts: () => set({ shirts: [] }),
      totalPrice: 0,
      incrementTotalPrice: (price) =>
        set((state) => ({ totalPrice: state.totalPrice + price })),
      decrementTotalPrice: (price) =>
        set((state) => ({ totalPrice: state.totalPrice - price })),
    }),
    {
      name: "shirts-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export { useShirtStore };
