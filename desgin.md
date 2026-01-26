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

**Reasons:**
- Each task stored in one place only in the tasks object.
- To find any task, I can access it by Id without searching through columns.
- When moving a task I only change the taskIds array, the task object stays the same.


**Alternative I considered:**
- Putting tasks directly inside each column.

**Why I rejected it:**
- To find a specific task, I need to search through every column.
- Moving a task means removing it from one array and adding it to another one.


## Architecture

### File Structure

```
kanban-board/
├── index.html
├── styles/
│   └── styles.css
├── scripts/
│   ├── app.js
│   ├── data.js
│   ├── render.js
│   └── dragDrop.js

```

### File Responsibilities

**app.js** - Entry point, initializes the app and sets up event listeners.

**data.js** - Manages boardData, CRUD operations, and localStorage.

**render.js** - Functions that convert data into DOM elements.

**dragDrop.js** - Handles all drag and drop events.


### Why Separate Files?

**Separation of concerns** - Each file has one clear responsibility.

**Benefits:**
- Easier to debug, I know exactly where to look.
- Can test each part independently.
- If I need to change how data is stored, I only touch data.js.


## Features (V1)

- 3 columns: To Do, In Progress, Done
- Create new tasks with title and description
- Delete tasks
- Drag and drop tasks between columns
- Data persists in localStorage

## Build Order

### Phase 1: HTML Structure 

1. Create sidebar layout.
2. Create basic board layout.
3. Add column containers.
4. Add sample task cards.

### Phase 2: CSS Styling
1. Style the board and columns layout.
2. Style task cards.

### Phase 3: JavaScript - Render
1. Create boardData object.
2. Write render functions to generate DOM from data.
3. Replace hardcoded HTML with rendered content.

### Phase 4: JavaScript - Add/Delete Tasks
1. Add task form and modal.
2. Implement add task functionality.
3. Implement delete task functionality.

### Phase 5: localStorage
1. Save boardData to localStorage on every change.
2. Load boardData on page initialization.

### Phase 6: Drag and Drop
1. Make tasks draggable.
2. Handle drag events.
3. Update boardData when task is dropped.

### Phase 7: Polish
1. Add animations and transitions.
2. Improve UX and error handling.
3. Test all features.