import { defineStore } from "pinia";

export const useShopCartStore = defineStore('shopCart', {
    state: () => ({
        shopCart: []
    }),
    actions: {
        addToCart(carInfo): void {
            this.shopCart.push(carInfo)
        },
        deleteToCart(carInfo): void {
            this.shopCart = this.shopCart.filter((car) => car.carName !== carInfo.carName)
        }
    }
})