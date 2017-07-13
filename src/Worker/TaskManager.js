
let instance = null;

export default class TaskManager {
    constructor() {
        if (instance) {
            return instance;
        }

        this.tasks = {};

        instance = this;
    }

    setTask(task) {
        this.tasks[task.task.name] = task;
    }

    getTaskByName(name) {
        return this.tasks[name];
    }

    getCurrentTask() {
        return this.currentTask;
    }

    init(name, data) {
        const task = this.getTaskByName(name);
        task.setData(data);
        this.currentTask = task;
        return task;
    }
}
