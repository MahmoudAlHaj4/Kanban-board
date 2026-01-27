const addBtn = document.getElementById('newActionBtn')
const modal = document.querySelector('.modal')
const titleInput = document.getElementById('taskTitle')
const descriptionInput = document.getElementById('taskDescription')


addBtn.addEventListener('click',()=>{
    modal.style.display = 'inline'
})


modal.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
       const button = event.target
       if(button.id === 'createTaskBtn'){
          if(titleInput.value !== "" && descriptionInput.value !== ""){
        const taskId = Date.now()
        const newTask = {
            id: taskId,
            title: titleInput.value,
            description : descriptionInput.value,
            createdAt : new Date().toISOString()
        }
        boardData.tasks[taskId] = newTask
        const arrOfIds = boardData.columns[0].taskIds
        arrOfIds.push(taskId)
        titleInput.value = ''
        descriptionInput.value = ''
        modal.style.display = 'none'
        console.log(boardData)
     
        displayBoard()
    }else{
        titleInput.style.border = '1px solid red'
        descriptionInput.style.border = '1px solid red'
        setTimeout(()=>{
            titleInput.style.border = '1px solid #e5e7eb;'
            descriptionInput.style.border = '1px solid #e5e7eb;'
        },100)
    }
       }

       if(button.id === 'cancelBtn' || button.id === 'closeModalBtn'){
        modal.style.display = 'none'
        titleInput.value = ''
        descriptionInput.value = ''
       }
    }
})



board.addEventListener('click' ,(event)=>{
    if(event.target.tagName === 'BUTTON') {
        const button = event.target
        const taskToDelete = button.parentElement
        const id = taskToDelete.dataset.id

        if(button.className === 'delete-btn'){
            delete boardData.tasks[id]

            const deleteFromColumn = boardData.columns.find((column)=> {
                return column.taskIds.includes(id)
            })
            deleteFromColumn.taskIds = deleteFromColumn.taskIds.filter((taskId)=>{
                return taskId !== id
            })
            displayBoard()
           
        }
    }
})
