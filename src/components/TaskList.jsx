import React from 'react';
import Task from './Task';

const generateTasks = collection =>
  Object.keys(collection)
    .map((taskID, i) => (
      <Task
        key={i}
        title={props.collection[taskID].name}
        desc={props.collection[taskID].description}
      />
    ));

const TaskList = props => (
  <div className="list-group">
    {generateTasks(props.collection)}
  </div>
);

export default TaskList;
