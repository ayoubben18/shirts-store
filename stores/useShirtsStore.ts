import { Shirt } from "@/constants/shirts";
import { z } from "zod";
import { create } from "zustand";

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

interface ShirtStore {
  user: z.infer<typeof userSchema>;
  setUser: (user: z.infer<typeof userSchema>) => void;
  clearUser: () => void;
  shirts: Shirt[];
  addShirt: (shirt: Shirt) => void;
  removeShirt: (shirt: Shirt) => void;
  clearShirts: () => void;
}

const useShirtStore = create<ShirtStore>((set) => ({
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
  addShirt: (shirt) => set((state) => ({ shirts: [...state.shirts, shirt] })),
  removeShirt: (shirt) =>
    set((state) => ({ shirts: state.shirts.filter((s) => s.id !== shirt.id) })),
  clearShirts: () => set({ shirts: [] }),
}));

export { useShirtStore };
