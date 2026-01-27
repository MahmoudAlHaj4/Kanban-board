// How Add Tasks Works:
// 1. User click on NewAction button -> modal shows.
// 2. User fills in title and description.
// 3. User clicks Submit Button .
// 4. Validate: if inputs empty → show red border.
// 5. If valid:
//    - Create unique ID using Date.now().
//    - Create new task object with id, title, description, createdAt.
//    - Add task to boardData.tasks[newId].
//    - Add newId to boardData.columns[0].taskIds (Backlog column).
//    - Re-render board with displayBoard().
//    - Clear inputs and hide modal.
//
// HOW DELETE TASK WORKS (using event delegation):
// 1. One listener on board (parent) listens for ALL clicks.
// 2. Check if clicked element is a button with 'delete-btn' class.
// 3. Get the parent task card (contains the data-id).
// 4. Get the task ID from taskCard.dataset.id.
// 5. Delete task from boardData.tasks using 'delete' operator.
// 6. Find which column contains this task ID using .find().
// 7. Remove task ID from column's taskIds array using .filter().
// 8. Re-render board with displayBoard().

const addBtn = document.getElementById('newActionBtn')
const modal = document.querySelector('.modal')
const titleInput = document.getElementById('taskTitle')
const descriptionInput = document.getElementById('taskDescription')


const saveBoardData = ()=>{
    localStorage.setItem('boardData', JSON.stringify(boardData))
}


const loadBoardData = ()=>{
    const saved = localStorage.getItem('boardData')
    return saved ? JSON.parse(saved) : null
}
const savedData = loadBoardData()

if(savedData){
    boardData.columns = savedData.columns  
    boardData.tasks = savedData.tasks 
}
displayBoard()

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
        saveBoardData()
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
            saveBoardData()
            displayBoard()
           
        }
    }
})
