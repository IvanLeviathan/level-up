<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          Количество задач: {{ msg }} <button class="btn btn-primary" @click="login">Click me</button>
        </div>
      </div>
    </div>
    <HeaderLower/>
  </header>
</template>

<script>
import HeaderLower from '@/components/HeaderLower.vue'
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    HeaderLower
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


