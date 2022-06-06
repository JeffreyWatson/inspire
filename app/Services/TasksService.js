import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { tasksApi } from "./ApisService.js"


class TasksService {
  async getTasks() {
    const res = await tasksApi.get()
    ProxyState.tasks = res.data.map(t => new Task(t))
    // console.log("get Tasks", res.data, ProxyState.tasks);
  }

  async addTasks(tasksData) {
    const res = await tasksApi.post('', tasksData)
    // console.log('adding tasks', res.data);
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
  }

  async deleteTasks(id) {
    const res = await tasksApi.delete(id)
    // console.log('deleting', res.data);
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  async completeTask(id) {
    let task = ProxyState.tasks.find(t => t.id == id)
    task.completed = !task.completed
    const res = await tasksApi.put(task.id, task)
    console.log('completing', res.data);
    ProxyState.tasks = ProxyState.tasks
  }
}






export const tasksService = new TasksService()