
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