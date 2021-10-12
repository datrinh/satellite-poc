import App from "./App.ce.vue";
import { defineCustomElement } from "vue";
import "virtual:windi.css";

const AppElement = defineCustomElement(App);
customElements.define("app-element", AppElement);
