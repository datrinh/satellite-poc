import NewsletterOptIn from "./components/NewsletterOptIn.ce.vue";
import { defineCustomElement } from "vue";

const NewsletterOptInElement = defineCustomElement(NewsletterOptIn);

const register = (elName = "charles-newsletter") => {
  customElements.define(elName, NewsletterOptInElement);
};

const init = async () => {
  if (!customElements) {
    await import("https://unpkg.com/@webcomponents/custom-elements");
  }
  register();
};

init();

export { NewsletterOptIn, init };
