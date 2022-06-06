

export class Task {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.user = data.user
  }


  // Talk with instructors about the below template.
  get Template() {
    return `<div>
    <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.completeTask('${this.id}')"<li>${this.description}<span><i onclick="app.tasksController.deleteTasks('${this.id}')">❌</i></span></li>
    </div>
    `
  }
}