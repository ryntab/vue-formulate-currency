import FormulateVueCurrency from "./FormulateVueCurrency";

export default function FormulateVueCurrencyPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      FormulateVueCurrency,
    },
    library: {
      currency: {
        classification: "text",
        component: "FormulateVueCurrency",
      },
    },
    rules: {
      min: ({ value }, minVal) => {
        return value >= minVal;
      },
      max: ({ value }, maxVal) => {
        return value <= maxVal;
      },
    },
  });
}
