// import AppCustomElement from "./App.ce.vue";
import NewsletterOptIn from "./components/NewsletterOptIn.ce.vue";
import { defineCustomElement } from "vue";

// const AppElement = defineCustomElement(AppCustomElement);
const NewsletterOptInElement = defineCustomElement(NewsletterOptIn);

customElements.define("charles-newsletter", NewsletterOptInElement);
// const register = (elName = "app-element") => {
// customElements.define(elName, AppElement);
// document.body.appendChild(new AppElement());
// };

// register();

// export { register };

export { NewsletterOptIn };
