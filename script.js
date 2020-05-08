const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let uncheckedCount = 0
let total = 0
let totalChecked = 0

function newTodo() {

  let task = prompt('Write your task')
  const childList = document.createElement('li')

  childList.appendChild(document.createTextNode(task))
  list.appendChild(childList)
  childList.className = classNames.TODO_ITEM

  task.className = classNames.TODO_TEXT
  const listLi = document.querySelectorAll('li')
  total = listLi.length

  const childButton = document.createElement('button')
  childButton.appendChild(document.createTextNode('Delete'))
  childList.appendChild(childButton)
  childButton.className = classNames.TODO_DELETE

  const checkbox = document.createElement('input')
  checkbox.setAttribute('type','checkbox')
  childList.appendChild(checkbox)
  checkbox.className = classNames.TODO_CHECKBOX 

  itemCountSpan.textContent = total 
  uncheckedCountSpan.textContent = total - totalChecked

  //Remove
  remove()
  checkBox()

}

function remove(){
  let count = 0
  buttons = document.querySelectorAll('.todo-delete')
  buttons.forEach(function(element){
    
    element.addEventListener('click',function(){
        element.parentElement.remove();
          count += 1
          itemCountSpan.textContent = total - count
          uncheckedCountSpan.textContent = total - totalChecked
          
        }  
      )
    }
  )
}

function checkBox(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  let checkedCount = 0

  checkboxes.forEach(function(item) {
    
      item.addEventListener('click',function(){
      
      if (item.checked){
        checkedCount += 1
      }else{
        checkedCount -= 1
      }
        totalChecked = checkedCount
        uncheckedCountSpan.textContent = total - totalChecked
      })
      
    }
  )
}

