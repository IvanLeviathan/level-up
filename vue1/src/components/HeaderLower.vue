<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        Нижний хедер: {{ provideText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['provideText'],
  name: 'HeaderLower',
  props: {
    msg: String
  },
  methods: {
    login () {
      this.$emit('send', {
        text: 'Текст из хедера, ' + new Date().toLocaleTimeString()
      })
    }
  }
}
</script>


