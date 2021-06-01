import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ItemLine from "./components/ItemLine.vue";
import { BootstrapVue, IconsPlugin, NavbarPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//import "bootstrap/dist/css/bootstrap-utilities.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/js/all.min.js";
//import "@fontawesome/js/brands.js";
//import "@fontawesome/js/solid.js";
//import "@fontawesome/js/fontawesome.js";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(NavbarPlugin);

Vue.config.productionTip = false;

Vue.config.runtimeCompiler = true;

Vue.component("ItemLine", ItemLine);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
