import { defineStore } from "pinia";

export const useHomePageBtnsStore = defineStore("homePageBtns", {
  state: () => ({
    btnClicked: null as string | null,
  }),
  actions: {
    handleClick(btn: string): void {
      this.btnClicked === btn
        ? (this.btnClicked = null)
        : (this.btnClicked = btn);
    },
  },
});
