<template>
  <div id="translateForm">
     <form class="form-inline" id="transform" v-on:submit="submit">
       <input class="form-control" type="text" v-model="textToTranslate" placeholder="Place your text here">
       <select class="form-control" v-model="language">
          <option value="pl">Polish</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="it">Italian</option>
          <option value="fr">French</option>
       </select>
       <input class="btn btn-info" type="submit" value="Translate">   
     </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data() {
    return {
      textToTranslate: '',
      language: ''
    }
  },
  created(){
    this.language = 'pl'
  },
  methods: {
    submit(e) {
      this.$emit('formSubmit', this.textToTranslate, this.language)
      e.preventDefault()
    },
  }
}
</script>
<style>
 #transform {
   margin: 10px;
   margin-top: 40px;
   justify-content: center;
 }
 .form-control {
   margin-right: 10px;
 }
 .btn-info {
   margin-top: 20px;
   width: 70%;
 }
</style>
