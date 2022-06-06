import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { tasksApi } from "../Services/ApisService.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTasks() {
  let tasks = ProxyState.tasks
  let template = ''
  let taskCount = 0
  let currentCount = 0
  tasks.forEach(t => {
    template += t.Template
    if (t.completed) {
      taskCount++
    }
    if (t.id) {
      currentCount++
    }
  })
  document.getElementById('tasks').innerHTML = template
  document.getElementById('task-count').innerText = taskCount
  document.getElementById('current').innerText = currentCount
  // console.log(tasks);
}


export class TasksController {
  constructor() {
    // console.log('tasks controller');
    ProxyState.on('tasks', _drawTasks)
    this.getTasks()
  }

  async getTasks() {
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async addTasks() {
    window.event.preventDefault()
    let form = window.event.target
    let taskData = {
      description: form.description.value
    }

    try {
      await tasksService.addTasks(taskData)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }


  // How to render a different pop toast on cancel?
  async deleteTasks(id) {
    try {
      if (await confirm('Are you sure you want to delete this task?', 'warning'))
        await tasksService.deleteTasks(id)
      Pop.toast('Your task has been deleted.', 'warning')
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
    // console.log('is it working', id);
  }

  async completeTask(id) {
    try {
      await tasksService.completeTask(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}
