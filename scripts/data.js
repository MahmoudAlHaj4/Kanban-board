// Kanban board data structure.
// See design.md for detailed rationale and architecture decisions.

const boardData = {
    columns: [
        {
            id: 'col-1',
            title: 'Backlog',
            color: '#6B7280',
            taskIds: []
        },
        {
            id: 'col-2',
            title: 'To Do',
            color: '#EF4444', 
            taskIds: []
        },
        {
            id: 'col-3',
            title: 'In Progress',
            color: '#F59E0B',
            taskIds: []
        },
        {
            id: 'col-4',
            title: 'Done',
            color: '#10B981',
            taskIds: []
        }
    ],
    tasks: {}
}
