
<p align="center"><a href="https://vueformulate.com" target="_blank" rel="noopener noreferrer"><img width="100" src="https://assets.wearebraid.com/vue-formulate/logo.png" alt="VueFormulate"></a></p>


### Vue Formulate Currency

Vue Formulate Currency allows for better currency input formatting.

### Install
```sh
npm install vue-formulate-currency
```

### Usage
Add to your vue formulate plugins. 
[Documentation](https://vueformulate.com/guide/plugins/#creating-a-new-plugin)
```js
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVueCurrencyPlugin from 'vue-formulate-currency'

Vue.use(VueFormulate, {
    plugins: [ FormulateVueCurrencyPlugin ]
})
```
For Nuxt.js ♥ add the plugin to your `formulate.config.js` file.
[Documentation](https://vueformulate.com/guide/installation/#nuxt)

### Component Usage
Add the currency type to a formulate component
```js
<FormulateInput  type="currency"/>
```

| Prop |Value Example|Default Value |
|--|--|--|
|  currencyPrefix| "$"|""
|  emptyValue| "Empty!"|""
|  currencySymbolPosition| "prefix"|"prefix" or "suffix"
|  placeholder| "Im a placeholder!"|""
|  precision| 0|2
|  separator| "-"|","
|  outputType| "string"|"number"

#### Special Props : styling✨

The styling prop is optional and can be used to add in classes to your input. It accepts and array of classes or a string and will be combined with the formulate configuration classes set in your project.
> Duplicate classes are always removed.
```js
<FormulateInput  type="currency"  currencyPrefix="$" :styling="['border-2', 'border-blue-gray-200']"/>
```
or using a string...
```js
<FormulateInput  type="currency"  currencyPrefix="$" :styling="border-2 border-blue-gray-200"/>
```
