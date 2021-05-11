this.state = {
  projectId: '',
  projectName: '',
  functions: [],
  tasks: [],
  creator: {},
  members: [],
  selectedTask: {
    taskId: 1,
    taskText: "Hi I'm the text",
    responsibleUserTasks: [{
        user_task_id: 1,
        task_id: 2,
        function_id: 1,
        user_id: 1
      }],
    accountableUserTasks: [{
      user_task_id: 2,
      task_id: 2,
      function_id: 2,
      user_id: 1
    }],
    consultedUserTasks: [{
      user_task_id: 3,
      task_id: 2,
      function_id: 3,
      user_id: 2
    },
      {
        user_task_id: 4,
        task_id: 2,
        function_id: 3,
        user_id: 3
      },
      {
        user_task_id: 5,
        task_id: 2,
        function_id: 3,
        user_id: 4
      }],
    informedUserTasks: [{
      user_task_id: 6,
      task_id: 2,
      function_id: 4,
      user_id: 2
    },
      {
        user_task_id: 7,
        task_id: 2,
        function_id: 4,
        user_id: 3
      },
      {
        user_task_id: 8,
        task_id: 2,
        function_id: 4,
        user_id: 5
      }]
  },
  tasktoEdit: {
    taskId: 1,
    taskText: "Hi I'm the text",
    responsibleUserTasks: [{
      user_task_id: 1,
      task_id: 2,
      function_id: 1,
      user_id: 1
    }],
    accountableUserTasks: [{
      user_task_id: 2,
      task_id: 2,
      function_id: 2,
      user_id: 1
    }],
    consultedUserTasks: [{
      user_task_id: 3,
      task_id: 2,
      function_id: 3,
      user_id: 2
    },
    {
      user_task_id: 4,
      task_id: 2,
      function_id: 3,
      user_id: 3
    },
    {
      user_task_id: 5,
      task_id: 2,
      function_id: 3,
      user_id: 4
    }],
    informedUserTasks: [{
      user_task_id: 6,
      task_id: 2,
      function_id: 4,
      user_id: 2
    },
    {
      user_task_id: 7,
      task_id: 2,
      function_id: 4,
      user_id: 3
    },
    {
      user_task_id: 8,
      task_id: 2,
      function_id: 4,
      user_id: 5
    }]
  }
}