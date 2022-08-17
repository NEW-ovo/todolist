<template>
  <img alt="Vue logo" src="./assets/塔什干.png" />
  <br>
  <Todoinput @add="onaddtask"></Todoinput>
  <to-do-list :list="changeList" class="mt-2"></to-do-list>
  <todo-buttom v-model:active="activeBtnIndex"></todo-buttom>
</template>

<script>
import ToDoList from "./components/todolist.vue";
import Todoinput from "./components/todoinput.vue";
import TodoButtom from './components/TodoButtom.vue';


export default {
  components: {
    ToDoList,
    Todoinput,
    TodoButtom
  },
  data() {
    return {
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ].reverse(),
      nextid: 4,
      activeBtnIndex: 0,
    }
  },
  name: 'App',
  methods: {
    onaddtask(taskname) {
      this.todolist.unshift({
        id: this.nextid,
        task: taskname,
        done: false,
      })
      this.nextid++
    }
  },
  computed: {
    changeList() {
      switch (this.activeBtnIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done === true)
        case 2:
          return this.todolist.filter(x => x.done !== true)
      }
    }
  },

}
</script>

<style lang="less" scoped>
img {
  width: 300px;
}
</style>