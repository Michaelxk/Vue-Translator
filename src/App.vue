<template>
  <div id="app">
    <navbar></navbar>
    <div class="text-center">
      <h1>Word Translator</h1>
      <h5>Powerd By Vue.js</h5>

      <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
      <TranslateOutput v-text="TranslatedText"></TranslateOutput>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import TranslateForm from "./components/TranslateForm";
import TranslateOutput from "./components/TranslateOutput";

export default {
  name: "app",
  components: {
    Navbar,
    TranslateForm,
    TranslateOutput
  },
  data() {
    return {
      TranslatedText: ""
    };
  },
  methods: {
    translateText: function(text, language) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180828T152955Z.cd0e8ae129e4f8d3.0857c2db0f0d0ff748b3e66011e13cdbc4fb2243&lang=" +
            language +
            "&text=" +
            text
        )
        .then(response => {
          this.TranslatedText = response.body.text[0];
        });
    }
  }
};
</script>
 
<style>
#app {
  height: 100vh;
  background: #83a4d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.text-center {
  padding-top: 50px;
}
h1 {
  font-weight: bold;
  font-size: 4.5em;
}
</style>
