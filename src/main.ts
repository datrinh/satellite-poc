import { createApp } from "vue";
import App from "./App.ce.vue";
import { defineCustomElement } from "vue";

const AppElement = defineCustomElement(App);

customElements.define("app-element", AppElement);

// createApp(AppElement).mount("#charles-satellite");
