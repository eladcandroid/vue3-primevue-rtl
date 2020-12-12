import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "primevue/resources/themes/saga-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "../primeflex-rtl.css";

import ToastService from "primevue/toastservice";

createApp(App)
  .use(store)
  .use(router)
  .use(ToastService)
  .mount("#app");
