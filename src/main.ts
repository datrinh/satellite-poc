// import App from "./App.ce.vue";
// import { defineCustomElement } from "vue";
import "virtual:windi.css";

// const AppElement = defineCustomElement(App);
// customElements.define("app-element", AppElement);

// import { createApp } from "vue";
// import AppNormal from "./App.vue";
import App from "./App.ce.vue";
import { defineCustomElement } from "vue";

const AppElement = defineCustomElement(App);

customElements.define("app-element", AppElement);

// createApp(AppNormal).mount("#charles-satellite");
