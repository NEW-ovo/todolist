//src/store/user.ts

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      list: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
        { id: 4, task: '周一早晨9点开会', done: false },
        { id: 5, task: '周一晚上8点聚餐', done: false },
        { id: 6, task: '准备周三上午的演讲稿', done: true },
        { id: 7, task: '周一早晨9点开会', done: false },
        { id: 8, task: '周一晚上8点聚餐', done: false },
        { id: 9, task: '准备周三上午的演讲稿', done: true },
        { id: 10, task: '周一早晨9点开会', done: false },
        { id: 11, task: '周一晚上8点聚餐', done: false },
        { id: 12, task: '准备周三上午的演讲稿', done: true },
      ],
      activeBtnIndex: 0,
      form: {
        taskname: '',
      },
    }
  },
  actions: {
    onFormSubmit() {
      if (!this.form.taskname) return alert('任务名称不能为空！') 
      this.list.unshift({
        id: this.list.length+1,
        task: this.form.taskname,
        done: false,
      })
      this.form.taskname = ''
    },
  }
})

