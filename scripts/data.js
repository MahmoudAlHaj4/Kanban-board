// Kanban board data structure.
// See design.md for detailed rationale and architecture decisions.

const boardData = {
    columns: [
        {
            id: 'col-1',
            title: 'Backlog',
            color: '#6B7280',
            taskIds: ['task-1', 'task-2']
        },
        {
            id: 'col-2',
            title: 'To Do',
            color: '#EF4444', 
            taskIds: ['task-3', 'task-4', 'task-5']
        },
        {
            id: 'col-3',
            title: 'In Progress',
            color: '#F59E0B',
            taskIds: ['task-6', 'task-7']
        },
        {
            id: 'col-4',
            title: 'Done',
            color: '#10B981',
            taskIds: ['task-8']
        }
    ],
    tasks: {
        'task-1': {
            id: 'task-1',
            title: 'Setup project structure',
            description: 'Create folders and files',
            createdAt: '2026-01-20T10:00:00Z'
        },
        'task-2': {
            id: 'task-2',
            title: 'Design database schema',
            description: 'Plan the data structure',
            createdAt: '2026-01-21T09:00:00Z'
        },
        'task-3': {
            id: 'task-3',
            title: 'Build login page',
            description: 'Create user authentication',
            createdAt: '2026-01-22T11:00:00Z'
        },
        'task-4': {
            id: 'task-4',
            title: 'Add form validation',
            description: 'Validate user inputs',
            createdAt: '2026-01-23T14:00:00Z'
        },
        'task-5': {
            id: 'task-5',
            title: 'Write unit tests',
            description: 'Test core functionality',
            createdAt: '2026-01-24T08:00:00Z'
        },
        'task-6': {
            id: 'task-6',
            title: 'Implement drag and drop',
            description: 'Add DnD for tasks',
            createdAt: '2026-01-25T10:00:00Z'
        },
        'task-7': {
            id: 'task-7',
            title: 'Style the board',
            description: 'Make it look good',
            createdAt: '2026-01-26T13:00:00Z'
        },
        'task-8': {
            id: 'task-8',
            title: 'Create data structure',
            description: 'Define boardData object',
            createdAt: '2026-01-19T15:00:00Z'
        }
    }
}
