# Kanban Board - Design Documentation 

## Data Structure
I use a normalized structure with tasks stored separately from columns.

```javascript
const boardData = {
    columns : [
        {
            id: 'col-1',
            title : 'To Do',
            taskIds: ['task-1','task-2','task-3']
        },
        {
            id: 'col-2',
            title : 'In Progress',
            taskIds: ['task-4']
        },
        {
            id : 'col-3',
            title: 'Done',
            taskIds: []
        }
    ],
    tasks : {
        'task-1':{
            id: 'task-1',
            title: 'Task Title',
            description : 'Task Description',
            createdAt: '2026-01-24T10:00:00Z'
        }
    }
}
```

### Why This Structure?

**Reasons**
- Each task stored in one place only in the tasks object.
- To find any task, I can access it by Id without searching through columns.
- When moving a task I only change the taskIds array, the task object stays the same.


**Alternative I considered**
- Putting tasks directly inside each column.

**Why I rejected it**
- To find a specific task, I need to search through every column.
- Moving a task means removing it from one array and adding it to another one.