console.log("기본연산자 1")
let rec = [15,2]
let recR = rec[0] * 2 + rec[1] * 2
let recA = rec[0] * rec[1]
console.log (`변 = ${rec[0]}, ${rec[1]}
둘레 : 변1 * 2 + 변2 * 2 = ${recR}
넓이 : 변1 * 변 2 = ${recA}
`)

console.log("기본연산자 2")
let mit = 40
let sec = mit * 60
console.log(`40 분 * 60 = ${sec}`)

console.log("조건문과 논리 연산자 1")
let tri = [10, 20, 12]
let trias = ''
let pitas = ''
tri.sort()
if (tri[2] < tri[0] + tri[1]) {
  trias = "삼격형이 될 수 있습니다. "
  if (Math.pow(tri[2], 2) == Math.pow(tri[0], 2) + Math.pow(tri[1], 2)) {
    pitas = "직각 삼각형."
  } else if (Math.pow(tri[2], 2) < Math.pow(tri[0], 2) + Math.pow(tri[1], 2)) {
    pitas = "예각 삼각형."
  } else {
    pitas = "둔각 삼각형."
  }
} else {
  trias = "노 삼각"
}
console.log(trias + pitas)

console.log("조건문과 논리 연산자 2")
let tall = 170
let weight = 66
let bmi = weight / Math.pow(tall / 100, 2)
let ans = ''

if (bmi < 18.5) {
  ans = '저체중'
} else if (bmi >= 18.5 && bmi < 23) {
  ans = '정상'
} else if (bmi >= 23 && bmi < 25) {
  ans = '과체중'
} else if (bmi >= 25 && bmi < 30) {
  ans = '비만'
} else {
  ans = '고도비만'
}
console.log(ans)

console.log("조건문과 논리 연산자 3")
let age = 20
let area = 2
let pay = 0
if (area == 1) {
  if (age >= 19) {
    pay = 1300
  } else if (age >= 13 && age <=18) {
    pay = 1050
  } else if (age >= 6 && age <=12) {
    pay = 650
  }
} else {
  if (age >= 19) {
    pay = 1500
  } else if (age >= 13 && age <=18) {
    pay = 1200
  } else if (age >= 6 && age <=12) {
    pay = 750
  }
}
console.log(pay + '원입니다.')

console.log("조건문과 논리 연산자 4")
let score = 140
let aver = 3.5

score >= 140 && aver >= 3 ? console.log("졸업가능합니다!") : console.log("졸업이 힘듭니다!!")

console.log("조건문과 논리 연산자 5")
let today = ["월", "일"]

switch (today[0]) {
  case "월" :
  case "수" :
  case "금" :
  case "일" :
    console.log(`${today[0]} : oh my god`)
    break
  default :
    console.log("enjoy")
    break
}

switch (today[1]) {
  case "월" :
  case "수" :
  case "금" :
  case "일" :
    console.log(`${today[1]} : oh my god`)
    break
  default :
    console.log("enjoy")
    break
}

console.log("반복문 1")
let a = 8
let b = 100

for (let i = a; i <= b; i++) {
  if(i % 2 == 0) {
    continue
  }
  console.log(i)
}

console.log("반복문 2")
let thirty = 30
let j = 0
for (let i = 1; i <= 30; i++) {
  console.log(i)
  j += i
}
console.log(j)

console.log("반복문 3")
let five = 5
let h = 1

for (let i = 1; i <= five; i++) {
  h = h * i
}

console.log(h)

console.log("반복문 4")
let four = 4
let ap = ''

for (let i = 1; i <= four * four; i++) {
  ap += i + ' '
  if (i % 4 == 0) {
    ap += `
`
  }
}

console.log(ap)

console.log("조건문과 반목문 혼합 1")
let ii = 0
for (let i = 1; i <= 20; i++) {
  if(i % 2 == 0 || i % 3 == 0) {
    continue
  }
  ii += i
}

console.log(ii)

console.log("조건문과 반목문 혼합 2")
let six = 6
for (let i = 1; i <= six; ++i) {
  if (six % i == 0) {
    console.log(i)
  }
}

console.log("조건문과 반목문 혼합 3")
let dice = [1,2,3,4,5,6]
for (let i = 0; i < 6; ++i) {
  for (let j = 0; j < 6; ++j) {
    if (dice[i] + dice[j] == 6) {
      console.log(dice[i], dice[j])
    }
  }
}

console.log("조건문과 반목문 혼합 4")
let star = '*'
let fi = ''
for (let i = 0; i < 5; i++) {
  fi += star
  console.log(fi)
}

console.log("자바 스크립트 실습 응용 1")
let group = ["A", "B", "C", "D", "E"]

for (let i = 0; i < 5; i++) {
  let lottoG = [1, 2, 3, 4, 5, 6]
  for (let j = 0; j < lottoG.length; j++) {
    let lotto = parseInt((Math.random() * (45-1))+1)
    lottoG[j] = lotto
    for (let z = 0; z < j; z++) {
      if(lottoG[j] == lottoG[z]) {
        j--
        break
      }
    }
  }
  console.log(group[i] + " " + lottoG)
}




function solution(participant, completion) {
  var answer = '';
  participant.sort()
  completion.sort()
  for (let i in participant) {
    if (participant[i] != completion[i]) {
      answer = participant[i]
      break
    }
  }
  return answer;
}

let participant = 	["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]


console.log(solution(participant, completion))

console.log(!0)
console.log(!1)
console.log(!5)
console.log(!9)