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