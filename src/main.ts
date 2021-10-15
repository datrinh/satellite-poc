// import windiCss from "virtual:windi.css";

import { createApp } from "vue";
import AppNormal from "./App.vue";
import AppCustomElement from "./App.ce.vue";
import { defineCustomElement } from "vue";

// AppCustomElement.styles[0] += windiCss;
const AppElement = defineCustomElement(AppCustomElement);
customElements.define("app-element", AppElement);
document.body.appendChild(new AppElement());

createApp(AppNormal).mount("#app");
