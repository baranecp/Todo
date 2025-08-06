export default class Todo {
  constructor({
    title,
    description,
    dueDate,
    priority,
    id = crypto.randomUUID(),
    isCompleted = false,
    isEditing = false,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.id = id;
    this.isCompleted = isCompleted;
    this.isEditing = isEditing;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  toggleEditting() {
    this.isEditting = !this.isEditing;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }

  updateDueDate(newDate) {
    const date = new Date(newDate);
    this.dueDate = date;
  }

  updatePriorityLevel(newPriority) {
    this.priority = newPriority;
  }

  get summary() {
    return `${this.title} - Due: ${this.dueDate?.toLocaleDateString()}`;
  }

  set priorityLevel(level) {
    this.priority = level;
  }
}
