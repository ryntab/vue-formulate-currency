<template>
<vue-numeric :empty-value="emptyValue" :placeholder="placeholder" v-bind:minus="false" :currency-symbol-position="currencySymbolPosition" :currency="currencyPrefix" :precision="precision" v-bind:class="classes" :separator="separator" v-model="context.model"></vue-numeric>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
    components: {
        VueNumeric
    },
    props: {
        context: {
            type: Object,
            required: true
        },
    },
    computed: {
        currencyPrefix() {
            return this.context.attributes.currencyPrefix || '';
        },
        emptyValue() {
            return this.context.attributes.emptyValue || '';
        },
        currencySymbolPosition() {
            return this.context.attributes.currencySymbolPosition || 'prefix';
        },
        placeholder() {
            return this.context.attributes.placeholder || '';
        },
        precision() {
            return this.context.attributes.precision || 2;
        },
        separator() {
            return this.context.attributes.separator || ',';
        },
        outputType() {
            return this.context.attributes.outputType || 'number';
        },
        classes() {
            let defaultClasses = this.context.attributes.class;
            let addedClasses = this.context.attributes.styling;

            defaultClasses = defaultClasses.toString().split(" ");

            if (typeof (addedClasses) === 'string') {
                addedClasses = addedClasses.toString().split(" ");
            }

            let classes = defaultClasses.concat(addedClasses);
            classes = classes.join(" ");

            return classes;
        }
    }
}
</script>
