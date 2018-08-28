<template>
  <div id="app">
     <h1>Word Translator</h1>
     <h5>Powerd By Vue.js</h5>
     <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'

export default {
  name: 'App',
  components: {
    TranslateForm
  },
  methods: {
    translateText:function(text){
      alert(text);
    }
  }
}
</script>

<style>
</style>
