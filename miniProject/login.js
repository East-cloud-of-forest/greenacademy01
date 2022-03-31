const loginForm = document.getElementById('login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.getElementById('greeting')

loginInput.placeholder = '이름을 입력해주세요.'

function onLoginSubmit(e) {
  e.preventDefault()

  const userName = loginInput.value

  greeting.innerHTML = "반갑습니다. " + userName + " 님"
  // classList = 클래스 추가 제거
  loginForm.classList.add("hidden")
  memoFrom.classList.remove("hidden")
}

loginForm.addEventListener('submit', onLoginSubmit)