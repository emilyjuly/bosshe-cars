import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        msg: '',
        type: '',
        show: false,
    }),
    actions: {
        showNotification(msg: string, type: string): void {
            this.msg = msg
            this.type = type
            this.show = true
            setTimeout(() => {
                this.show = false
            }, 3000)
        }
    }
})