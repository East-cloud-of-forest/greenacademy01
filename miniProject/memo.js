const memoSection = document.getElementsByTagName('section')[1]
const memoFrom = document.getElementById('memo-form')
const memoInput = memoFrom.querySelector('input')
const basicMemo = ["미리 만들어진 메모입니다." , "미리 만들어진 메모입니다."]

for (let m of basicMemo) {
  let memo = document.createElement('div')
  memoSection.appendChild(memo)
  memo.classList.add("memo")
  memo.innerHTML += `<p>${m}</p>`
}

memoInput.placeholder = '메모'
memoInput.required = true

function onMemoSubmit(e) {
  e.preventDefault()

  let memo = document.createElement('div')
  memoSection.appendChild(memo)
  memo.classList.add("memo")
  memo.innerHTML += `<p>${memoInput.value}</p> <br>
  <p>${getTime()}</p>`
  memoInput.value = ''
  memoInput.autofocus = true
}

memoFrom.addEventListener('submit', onMemoSubmit)