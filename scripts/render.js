const board = document.getElementById('board')

const createTask = (task) => { 
    const taskContainer = document.createElement('div')
    taskContainer.className = 'task-card'
    const title = document.createElement('h3')
    title.textContent = task.title
    const description = document.createElement('p')
    description.textContent = task.description
    const time = document.createElement('span')
    time.textContent = task.createdAt

    taskContainer.appendChild(title)
    taskContainer.appendChild(description)
    taskContainer.appendChild(time)

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