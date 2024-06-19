import { defineStore } from "pinia";
import type { CarInfo } from "~/types/types";

export const useShopCartStore = defineStore("shopCart", {
  state: () => ({
    shopCart: [] as CarInfo[],
  }),
  actions: {
    addToCart(carInfo: CarInfo): void {
      this.shopCart.push(carInfo);
    },
    checkExistsCar(carInfo: CarInfo): boolean {
      return (
        this.shopCart.filter((car: CarInfo) => car.name === carInfo.name)
          .length > 0
      );
    },
    deleteToCart(carInfo: CarInfo): void {
      this.shopCart = this.shopCart.filter(
        (car: CarInfo) => car.name !== carInfo.name,
      );
    },
  },
});
