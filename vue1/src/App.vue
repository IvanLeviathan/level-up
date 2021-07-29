<template>
  <Header
    :msg="tasksCount"
    @send='onSend'
  />
  <div class="container">
    <div class="row">
      <div class="col-12 text-dark bg-light">
        {{textFromHeader}}
        <h1 class="mt-2 mb-3">{{ title }}</h1>
        <div class="form-group">
          <input type="text" class="form-control" :placeholder="inputPlaceholder" v-model="inputValue">
        </div>
        <div class="form-group">
          <button class="btn btn-info" @click="addButtonClick">{{ addButtonText }}</button>
        </div>
        <ul v-if="tasks.length" class="list-group my-3 pt-3 border border-info border-left-0 border-right-0 border-bottom-0">
          <li class="list-group-item" v-for="task in tasks" :key="task.id">
            <div class="row">
              <div class="col-lg-8" :class="{ 'font-weight-bold text-success': task.name.length < 5, 'text-danger': task.name.length >= 5 }" >{{task.name}}</div>
              <div class="col-lg-4">
                <button @click="deleteButtonClick(task.id)" class="btn btn-danger">{{ deleteButtonText }}</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      title: 'Список заметок',
      inputPlaceholder: 'Введите название заметки',
      inputValue: '',
      addButtonText: 'Добавить',
      deleteButtonText: 'Удалить',
      tasks: [],
      textFromHeader: ''
    }
  },
  provide: {
    provideText: 'Текст из App.vue, прокинутый через provide в HeaderLower.vue',
  },
  methods: {
    addButtonClick(){
      this.tasks.push({
        name: this.inputValue,
        id: new Date().getTime()
      });
      this.inputValue = '';
    },
    deleteButtonClick(id){
      this.tasks = this.tasks.filter((elem) => elem.id != id);
    },
    onSend(data){
      this.textFromHeader = data.text;
    }
  },
  computed: {
    tasksCount(){
      return this.tasks.length;
    }
  }
}
</script>

<style>

</style>
