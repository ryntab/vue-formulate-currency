# Introduction

Vue Formulate Currency is a [Vue Formulate][1] plugin that provides the
[vue-currency-input][2] UI into a `FormulateInput`.

# Installation

## NPM
```sh
npm install @vicenterusso/vue-formulate-currency
```
## Yarn
```sh
yarn add @vicenterusso/vue-formulate-currency
```

## Add to Vue

As with any [Vue Formulate plugin][3]:

```javascript
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVueCurrencyPlugin from '@vicenterusso/vue-formulate-currency'

Vue.use(VueFormulate, {
    plugins: [ FormulateVueCurrencyPlugin ]
})
```

# Usage

Use `currency` as the input `type`. 

```html
<FormulateInput type="currency" />
```

It works as any other `FormulateInput`.

[1]: https://vueformulate.com
[2]: https://dm4t2.github.io/vue-currency-input/
[3]: https://vueformulate.com/guide/plugins/
