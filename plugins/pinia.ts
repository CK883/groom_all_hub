import { useSystemStore } from "~/store/systemStore";

export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            store: useSystemStore($pinia)
        }
    }
})