import FormulateVueCurrency from './FormulateVueCurrency'

export default function FormulateVueCurrencyPlugin(formulateInstance) {
    formulateInstance.extend({
        components: {
            FormulateVueCurrency,
        },
        library: {
            "currency": {
                classification: 'text',
                component: 'FormulateVueCurrency'
            },
        },
    })
}