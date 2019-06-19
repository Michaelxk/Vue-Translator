<template>
    <h2>{{ translatedText }}</h2>
</template>

<script>
export default {
  name: 'translateOutput',
  props: ['translatedText']
}
</script>

<style>
h2 {
  margin-top: 25px;
  font-weight: bold;
  font-size: 2.5em;

}
</style>
