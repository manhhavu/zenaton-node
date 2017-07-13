import _ from 'lodash';
import { ExternalZenatonException, objectsHaveSameKeys } from '../Common/index';
import TaskManager from './TaskManager';

export default class Task {

    constructor(task = null) {

        const taskManager = new TaskManager();

        this.task = task;
        this.task.data = {};

        _.each(this.props(), (p) => {
            this.task.data[p] = null;
        });

        taskManager.setTask(this);

        const dataSetter = (data = null) => {
            if (data) {
                this.setData(data);
            }
            return this;
        }

        return dataSetter;
    }

    setData(data) {

        if ( ! ( objectsHaveSameKeys(this.task.data, data) ) ) {
            throw new ExternalZenatonException('The data sent must match the properties of the Task Object')
        }

        _.each(data, (p, k ) => {
            this.task.data[k] = p;
            this.task[k] = p;
        });
    }

    props() {
        return this.task.props;
    }

    handle() {
        return this.task.handle();
    }

    timeout() {
        return this.task.timeout();
    }
}
