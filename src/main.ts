import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
app.use(createPinia());
app.use(MotionPlugin);

app.mount("#app");
