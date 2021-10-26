// import windiCss from "virtual:windi.css";

import { createApp } from "vue";
import AppNormal from "./App.vue";
import AppCustomElement from "./App.ce.vue";
import { defineCustomElement } from "vue";

// AppCustomElement.styles[0] += windiCss;
const AppElement = defineCustomElement(AppCustomElement);

export const register = (elName = "app-element") => {
  customElements.define(elName, AppElement);
  document.body.appendChild(new AppElement());
};

register();

export { AppElement };
