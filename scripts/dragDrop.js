// How Add Tasks Works:
// 1. makeDraggable(taskElement, taskId).
// 2. Called in: createTask(task) function in render.js.
// What it receives:
//   - taskElement: the taskContainer (the div with class 'task-card').
//   - taskId: the task.id (comes from task.id in createTask).
// What it does:
//   - Adds dragstart event listener to the taskContainer.
//   - When user starts dragging, it saves the taskId in draggableId variable.
//   - This lets us know which task is being dragged.
// 4. makeDroppable(columnElement, columnId).
// 5. Called in: createColumn(column) functionin render.js.
// What it receives:
//   - columnElement: the columnContainer(the div with class 'column').
//   - columnId: the column.id (comes from column.id in createColumns())
// what it does:
//   - Adds dragover event listener to columnContainer.
//   - Calls preventDefault() to allow dropping (browser blocks drops by default).
//   - Adds drop event listener to columnContainer.
//   - When user drop:
//       - Finds oldColumn (which column has the draggableId in its taskIds).
//       - Removes draggableId from oldColumn.taskIds using filter().
//       - Finds newColumn (using columnId parameter).
//       - Adds draggableId to newColumn.taskIds using push().
//       - Saves to localStorage.
//       - Re-renders board.

let draggableId = null

const makeDraggable  = (taskElement , taskId)=>{
    taskElement.addEventListener('dragstart', (event)=>{
        draggableId = taskId
       
    })

}

const makeDroppable  = (columnElement, columnId) =>{
    columnElement.addEventListener('dragover', (event)=>{
        event.preventDefault()
    })

    columnElement.addEventListener('drop', (event) => {
   
    event.preventDefault()
   
   
   
    const oldColumn = boardData.columns.find((col)=>{ 
        return col.taskIds.includes(draggableId)
    })
 
    oldColumn.taskIds = oldColumn.taskIds.filter((taskId) =>{
        return taskId != draggableId
    })

    const newColumn = boardData.columns.find((col)=>{
        return col.id == columnId
    })

   newColumn.taskIds.push(draggableId)

  
    saveBoardData()
    displayBoard()
})
}