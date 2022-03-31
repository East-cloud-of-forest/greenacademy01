const todoBtn = memoFrom.getElementsByTagName('input')[2]
const todoList = document.getElementsByClassName('todoList')[0]

function addTodo() {
  if (memoInput.value) {
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    const p = document.createElement("p")
    const btn = document.createElement("input")
    checkbox.type = "checkbox"
    p.textContent = memoInput.value
    btn.type = "button"
    btn.value = "X"
    
    li.appendChild(checkbox)
    li.appendChild(p)
    li.appendChild(btn)

    todoList.appendChild(li)

    memoInput.value = ``

    checkbox.addEventListener('click', todoCheck)
    btn.addEventListener('click', removeTodo)
  }
}

function todoCheck(e) {
  if (e.target.checked) {
    e.target.nextSibling.style.color = "gray"
    e.target.nextSibling.style.textDecoration = "line-through"
  } else {
    e.target.nextSibling.style.color = "black"
    e.target.nextSibling.style.textDecoration = "none"
  }
}

function removeTodo(e) {
  e.target.parentNode.remove()
}

todoBtn.addEventListener('click', addTodo)