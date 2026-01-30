// render.js file handle  rendering the Kanban board to the DOM.

// Functions:
// createTask(task): Creates HTML for a single task card.
// createColumns(column): Creates HTML for a column with its tasks.
// displayBoard(): Renders the entire board by looping through all columns.


// How The Render Works: 
// Start displayBoard() is called:
// 1. Empty the baord so Don't show Duplicate.
// 2. Loop through all columns in baordData.columns.
// 3. For each column, create a variable columnElement that calls createColumns(column).
// 
// Now go to createColumns(column):
// 4. Create the HTML for the column (the box, title, icon, number count).
// 5. Loop through column.taskIds (the list of task IDs).
// 6. For each task ID, get the actual task data: task = boardData.tasks[taskId].
// 7. Create a variable taskCard that calls createTask(task).
//
// Now go to createTask(task):
// 8. Create the HTML for one task (box with title, description, date).
// 9. Give back the task HTML.
//
// Go back:
// 10. Put the task HTML inside the column.
// 11. After all tasks are done, give back the complete column HTML.
// 12. Put the column on the board.
//
// Done! The board shows all columns with all their tasks.


const board = document.getElementById('board')

const createTask = (task) => { 
    const taskContainer = document.createElement('div')
    taskContainer.className = 'task-card'
    taskContainer.dataset.id = task.id
    taskContainer.draggable = true
    

    const title = document.createElement('h3')
    title.textContent = task.title

    const description = document.createElement('p')
    description.textContent = task.description

    const time = document.createElement('span')
    time.textContent = task.createdAt

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-btn' 
    deleteButton.textContent = 'X'

    const colors = ['orange', 'red', 'blue', 'green' , 'purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    
    const Avatar = document.createElement('div')
    Avatar.className = `avatar ${randomColor}`

    taskContainer.appendChild(Avatar)
    taskContainer.appendChild(deleteButton)
    taskContainer.appendChild(title)
    taskContainer.appendChild(description)
    taskContainer.appendChild(time)
    makeDraggable(taskContainer , task.id)
    return taskContainer
}

const createColumns = (column) => {
    const columnContainer = document.createElement('div')
    columnContainer.className = 'column'
    const columnHeader = document.createElement('div')
    columnHeader.className = 'column-header'
    const columnTitleContainer = document.createElement('div')
    columnTitleContainer.className = 'column-title'
    const columnIcon = document.createElement('span')
    columnIcon.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="${column.color}"/>
    </svg>`

    const columnTitle = document.createElement('span')
    columnTitle.textContent = column.title
    
    const taskCount = document.createElement('span')
    taskCount.className = 'count'
    taskCount.textContent = column.taskIds.length

    const taskContainer = document.createElement('div')
    taskContainer.className = 'tasks'

    column.taskIds.forEach((taskId) => {
        const task = boardData.tasks[taskId]
        const taskCard = createTask(task)
        taskContainer.appendChild(taskCard)
    })
    
    columnTitleContainer.appendChild(columnIcon)
    columnTitleContainer.appendChild(columnTitle)
    columnTitleContainer.appendChild(taskCount)
    columnHeader.appendChild(columnTitleContainer)
    columnContainer.appendChild(columnHeader)
    columnContainer.appendChild(taskContainer)
    makeDroppable(columnContainer , column.id)

    return columnContainer
}

const displayBoard = () => {
    board.innerHTML = ''
    boardData.columns.forEach((column) => {
        const columnElement = createColumns(column)
        board.appendChild(columnElement)
    })
  
}

displayBoard()